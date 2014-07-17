(ns examples.counters.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [omdev.core :as omdev]
            [cljs.reader :as reader]
            [ankha.core :as ankha]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(enable-console-print!)

(def app-state
  (atom {:counters (into [] (map (fn [n] {:id n :count 0}) (range 10)))}))

(defn counter [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [last-clicked]}]
      (dom/div nil
        (dom/label nil (:count data))
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! data :count inc)
                 (put! last-clicked (.-path data)))}
          "+")
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! data :count dec)
                 (put! last-clicked (.-path data)))}
          "-")))))

(defn counter-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:last-clicked (chan (sliding-buffer 1))}})
    om/IWillMount
    (will-mount [_]
      (let [last-clicked (om/get-state owner [:chans :last-clicked])]
        (go (while true
              (let [lc (<! last-clicked)]
                (om/set-state! owner :message lc))))))
    om/IRenderState
    (render-state [_ {:keys [message chans]}]
      (apply dom/div nil
        (dom/h1 #js {:key "head"} "A Counting Widget!")
        (dom/div
          #js {:key "message"
               :style
               (if message
                 #js {:display "block"}
                 #js {:display "none"})}
          (when message
            (str "Last clicked item was " (last message))))
        (om/build-all counter (:counters app)
          {:key :id :init-state chans})))))


(defn get-local [k defo]
  (let [local (.getItem (.-localStorage js/window) k)]
   (if local (reader/read-string local) defo)))

(defn dev [app owner {:keys [history] :as opts}]
  (reify
    om/IInitState
    (init-state [_] {:idx 0 :history history :area false})
    om/IWillMount
    (will-mount [_])
    om/IRenderState
    (render-state [_ state]
        (dom/div #js {:style #js {:position "fixed" :bottom "30px"}}
             (apply dom/ul #js {:style #js {:list-style-type "none" :padding "5px" :margin "0px"}}
                (map-indexed (fn [idx itm]
                  (dom/li #js {:onClick #(om/update! app [] itm :undo)
                               :style #js {:border-color (if (= itm app) "black" "#ccc")
                                           :border "1px solid" :width "30px"
                                           :padding "5px" :text-align "center"
                                           :margin-right "4px" :display "inline-block"
                                           :cursor "pointer"
                                           }}
                          (inc idx))) @(:history state)))
          (dom/button
            #js {:onClick (fn [e]
                            (when (> (count @history) (inc (:idx state)))
                              (om/update! app [] (get (vec (reverse @history)) (inc (:idx state))) :undo)
                              (om/update-state! owner :idx inc)))} "Undo")
            (dom/button #js {:onClick (fn [e]
                                       (.setItem (.-localStorage js/window) "snap" @app)
                                       (.setItem (.-localStorage js/window) "history" @history))} "Snap")
            (dom/button #js {:onClick (fn [e]
                                       (.removeItem (.-localStorage js/window) "snap" )
                                       (.removeItem (.-localStorage js/window) "history" ))} "UnSnap")
            (dom/button #js {:onClick (fn [e] (om/update-state! owner :inspect not))}
              (if-not (:inspect state) "Inspect state" "Hide inspector"))
            (dom/button #js {:onClick (fn [e] (.log js/console (clj->js @app)) (prn @app))} "Pretty print state")
              (if-not (:area state)
                (dom/button #js {:onClick (fn [e] (om/set-state! owner :area true))} "Input state")
                (dom/span nil
                  (dom/textarea #js {:placeholder "Go to state" :ref "area"})
                  (dom/button #js {:onClick (fn [e] (om/update! app [] (reader/read-string (.-value (om/get-node owner "area")))))} "Go")
                  (dom/button #js {:onClick (fn [e] (om/set-state! owner :area false))} "Cancel")))

            (when (:inspect state) (dom/div #js {:style #js {:position "fixed" :right "30px" :bottom "30px"}}
              (om/build ankha/inspector app)))))))

(defn dev-init [original owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [snap (get-local "snap" nil)
            history (get-in (nth original 2) [:opts :history])
            histo-local (get-local "history" nil)]
        (set! (.-onerror js/window) #(prn (str % " for " %2 " at line " %3 " and history was " @history)))
        (when snap (om/update! (second original) [] snap))
        (when histo-local (reset! history histo-local))))
    om/IRender
    (render [_]
      (dom/div nil
        (apply om/build* original)
        (om/build dev (second original) (nth original 2))))))

(defn make-history-fn [history]
  (fn [tx-data root-cursor]
    (when-not (= :undo (:tag tx-data))
      (swap! history conj (:new-state tx-data)))))

(defn power-up [view state opts]
  (let [history (atom [@state])]
    (assoc opts :tx-listen (juxt (:tx-listen opts) (make-history-fn history))
                :instrument (fn [f cursor m]
                              (if (= f view)
                                (om/build* dev-init [f cursor (assoc m :opts {:history history})])
                                (if-let [user-instr (:instrument opts)]
                                  (user-instr f cursor m)
                                  ::om/pass))))))

(defn dev-component [view state opts]
  (om/root view state (power-up view state opts)))



; (om/root counter-view app-state
;   {:target (.getElementById js/document "app0")
;    :tx-listen
;    (fn [tx-data root-cursor] (print tx-data))})

(dev-component counter-view app-state
  {:target (.getElementById js/document "app1")
   :tx-listen
   (fn [tx-data root-cursor] (print tx-data))})

