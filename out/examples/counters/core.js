// Compiled by ClojureScript 0.0-2227
goog.provide('examples.counters.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omdev.core');
goog.require('cljs.reader');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('omdev.core');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('ankha.core');
goog.require('ankha.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
examples.counters.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",641883497),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),n,new cljs.core.Keyword(null,"count","count",1108755585),0], null);
}),cljs.core.range.call(null,10)))], null));
examples.counters.core.counter = (function counter(data,owner){if(typeof examples.counters.core.t9446 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9446 = (function (owner,data,counter,meta9447){
this.owner = owner;
this.data = data;
this.counter = counter;
this.meta9447 = meta9447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9446.cljs$lang$type = true;
examples.counters.core.t9446.cljs$lang$ctorStr = "examples.counters.core/t9446";
examples.counters.core.t9446.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.counters.core/t9446");
});
examples.counters.core.t9446.prototype.om$core$IRenderState$ = true;
examples.counters.core.t9446.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9449){var self__ = this;
var map__9450 = p__9449;var map__9450__$1 = ((cljs.core.seq_QMARK_.call(null,map__9450))?cljs.core.apply.call(null,cljs.core.hash_map,map__9450):map__9450);var last_clicked = cljs.core.get.call(null,map__9450__$1,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554));var ___$1 = this;return React.DOM.div(null,React.DOM.label(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": ((function (___$1,map__9450,map__9450__$1,last_clicked){
return (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.inc);
return cljs.core.async.put_BANG_.call(null,last_clicked,self__.data.path);
});})(___$1,map__9450,map__9450__$1,last_clicked))
},"+"),React.DOM.button({"onClick": ((function (___$1,map__9450,map__9450__$1,last_clicked){
return (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.dec);
return cljs.core.async.put_BANG_.call(null,last_clicked,self__.data.path);
});})(___$1,map__9450,map__9450__$1,last_clicked))
},"-"));
});
examples.counters.core.t9446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9448){var self__ = this;
var _9448__$1 = this;return self__.meta9447;
});
examples.counters.core.t9446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9448,meta9447__$1){var self__ = this;
var _9448__$1 = this;return (new examples.counters.core.t9446(self__.owner,self__.data,self__.counter,meta9447__$1));
});
examples.counters.core.__GT_t9446 = (function __GT_t9446(owner__$1,data__$1,counter__$1,meta9447){return (new examples.counters.core.t9446(owner__$1,data__$1,counter__$1,meta9447));
});
}
return (new examples.counters.core.t9446(owner,data,counter,null));
});
examples.counters.core.counter_view = (function counter_view(app,owner){if(typeof examples.counters.core.t9484 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9484 = (function (owner,app,counter_view,meta9485){
this.owner = owner;
this.app = app;
this.counter_view = counter_view;
this.meta9485 = meta9485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9484.cljs$lang$type = true;
examples.counters.core.t9484.cljs$lang$ctorStr = "examples.counters.core/t9484";
examples.counters.core.t9484.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.counters.core/t9484");
});
examples.counters.core.t9484.prototype.om$core$IRenderState$ = true;
examples.counters.core.t9484.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9487){var self__ = this;
var map__9488 = p__9487;var map__9488__$1 = ((cljs.core.seq_QMARK_.call(null,map__9488))?cljs.core.apply.call(null,cljs.core.hash_map,map__9488):map__9488);var chans = cljs.core.get.call(null,map__9488__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var message = cljs.core.get.call(null,map__9488__$1,new cljs.core.Keyword(null,"message","message",1968829305));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,React.DOM.h1({"key": "head"},"A Counting Widget!"),React.DOM.div({"style": (cljs.core.truth_(message)?{"display": "block"}:{"display": "none"}), "key": "message"},(cljs.core.truth_(message)?("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,message))):null)),om.core.build_all.call(null,examples.counters.core.counter,new cljs.core.Keyword(null,"counters","counters",641883497).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null)));
});
examples.counters.core.t9484.prototype.om$core$IWillMount$ = true;
examples.counters.core.t9484.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var last_clicked = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554)], null));var c__6945__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6945__auto__,last_clicked,___$1){
return (function (){var f__6946__auto__ = (function (){var switch__6930__auto__ = ((function (c__6945__auto__,last_clicked,___$1){
return (function (state_9501){var state_val_9502 = (state_9501[1]);if((state_val_9502 === 7))
{var inst_9492 = (state_9501[2]);var inst_9493 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305),inst_9492);var state_9501__$1 = (function (){var statearr_9503 = state_9501;(statearr_9503[7] = inst_9493);
return statearr_9503;
})();var statearr_9504_9517 = state_9501__$1;(statearr_9504_9517[2] = null);
(statearr_9504_9517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9502 === 6))
{var inst_9497 = (state_9501[2]);var state_9501__$1 = state_9501;var statearr_9505_9518 = state_9501__$1;(statearr_9505_9518[2] = inst_9497);
(statearr_9505_9518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9502 === 5))
{var state_9501__$1 = state_9501;var statearr_9506_9519 = state_9501__$1;(statearr_9506_9519[2] = null);
(statearr_9506_9519[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9502 === 4))
{var state_9501__$1 = state_9501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9501__$1,7,last_clicked);
} else
{if((state_val_9502 === 3))
{var inst_9499 = (state_9501[2]);var state_9501__$1 = state_9501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9501__$1,inst_9499);
} else
{if((state_val_9502 === 2))
{var state_9501__$1 = state_9501;if(true)
{var statearr_9507_9520 = state_9501__$1;(statearr_9507_9520[1] = 4);
} else
{var statearr_9508_9521 = state_9501__$1;(statearr_9508_9521[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9502 === 1))
{var state_9501__$1 = state_9501;var statearr_9509_9522 = state_9501__$1;(statearr_9509_9522[2] = null);
(statearr_9509_9522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6945__auto__,last_clicked,___$1))
;return ((function (switch__6930__auto__,c__6945__auto__,last_clicked,___$1){
return (function() {
var state_machine__6931__auto__ = null;
var state_machine__6931__auto____0 = (function (){var statearr_9513 = [null,null,null,null,null,null,null,null];(statearr_9513[0] = state_machine__6931__auto__);
(statearr_9513[1] = 1);
return statearr_9513;
});
var state_machine__6931__auto____1 = (function (state_9501){while(true){
var ret_value__6932__auto__ = (function (){try{while(true){
var result__6933__auto__ = switch__6930__auto__.call(null,state_9501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6933__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6933__auto__;
}
break;
}
}catch (e9514){if((e9514 instanceof Object))
{var ex__6934__auto__ = e9514;var statearr_9515_9523 = state_9501;(statearr_9515_9523[5] = ex__6934__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6932__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9524 = state_9501;
state_9501 = G__9524;
continue;
}
} else
{return ret_value__6932__auto__;
}
break;
}
});
state_machine__6931__auto__ = function(state_9501){
switch(arguments.length){
case 0:
return state_machine__6931__auto____0.call(this);
case 1:
return state_machine__6931__auto____1.call(this,state_9501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6931__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6931__auto____0;
state_machine__6931__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6931__auto____1;
return state_machine__6931__auto__;
})()
;})(switch__6930__auto__,c__6945__auto__,last_clicked,___$1))
})();var state__6947__auto__ = (function (){var statearr_9516 = f__6946__auto__.call(null);(statearr_9516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6945__auto__);
return statearr_9516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6947__auto__);
});})(c__6945__auto__,last_clicked,___$1))
);
return c__6945__auto__;
});
examples.counters.core.t9484.prototype.om$core$IInitState$ = true;
examples.counters.core.t9484.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
examples.counters.core.t9484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9486){var self__ = this;
var _9486__$1 = this;return self__.meta9485;
});
examples.counters.core.t9484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9486,meta9485__$1){var self__ = this;
var _9486__$1 = this;return (new examples.counters.core.t9484(self__.owner,self__.app,self__.counter_view,meta9485__$1));
});
examples.counters.core.__GT_t9484 = (function __GT_t9484(owner__$1,app__$1,counter_view__$1,meta9485){return (new examples.counters.core.t9484(owner__$1,app__$1,counter_view__$1,meta9485));
});
}
return (new examples.counters.core.t9484(owner,app,counter_view,null));
});
examples.counters.core.get_local = (function get_local(k,defo){var local = window.localStorage.getItem(k);if(cljs.core.truth_(local))
{return cljs.reader.read_string.call(null,local);
} else
{return defo;
}
});
examples.counters.core.dev = (function dev(app,owner,p__9525){var map__9530 = p__9525;var map__9530__$1 = ((cljs.core.seq_QMARK_.call(null,map__9530))?cljs.core.apply.call(null,cljs.core.hash_map,map__9530):map__9530);var opts = map__9530__$1;var history = cljs.core.get.call(null,map__9530__$1,new cljs.core.Keyword(null,"history","history",1940838406));if(typeof examples.counters.core.t9531 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9531 = (function (history,opts,map__9530,p__9525,owner,app,dev,meta9532){
this.history = history;
this.opts = opts;
this.map__9530 = map__9530;
this.p__9525 = p__9525;
this.owner = owner;
this.app = app;
this.dev = dev;
this.meta9532 = meta9532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9531.cljs$lang$type = true;
examples.counters.core.t9531.cljs$lang$ctorStr = "examples.counters.core/t9531";
examples.counters.core.t9531.cljs$lang$ctorPrWriter = ((function (map__9530,map__9530__$1,opts,history){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.counters.core/t9531");
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.t9531.prototype.om$core$IRenderState$ = true;
examples.counters.core.t9531.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__9530,map__9530__$1,opts,history){
return (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"bottom": "30px", "position": "fixed"}},cljs.core.apply.call(null,om.dom.ul,{"style": {"margin": "0px", "padding": "5px", "list-style-type": "none"}},cljs.core.map_indexed.call(null,((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (idx,itm){return React.DOM.li({"style": {"cursor": "pointer", "display": "inline-block", "margin-right": "4px", "text-align": "center", "padding": "5px", "width": "30px", "border": "1px solid", "border-color": ((cljs.core._EQ_.call(null,itm,self__.app))?"black":"#ccc")}, "onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (){return om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,itm,new cljs.core.Keyword(null,"undo","undo",1017498710));
});})(___$1,map__9530,map__9530__$1,opts,history))
},(idx + 1));
});})(___$1,map__9530,map__9530__$1,opts,history))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(state)))),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){if((cljs.core.count.call(null,cljs.core.deref.call(null,self__.history)) > (new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(state) + 1)))
{om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,cljs.core.get.call(null,cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,self__.history))),(new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(state) + 1)),new cljs.core.Keyword(null,"undo","undo",1017498710));
return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"idx","idx",1014008367),cljs.core.inc);
} else
{return null;
}
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Undo"),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){window.localStorage.setItem("snap",cljs.core.deref.call(null,self__.app));
return window.localStorage.setItem("history",cljs.core.deref.call(null,self__.history));
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Snap"),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){window.localStorage.removeItem("snap");
return window.localStorage.removeItem("history");
});})(___$1,map__9530,map__9530__$1,opts,history))
},"UnSnap"),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inspect","inspect",2971358598),cljs.core.not);
});})(___$1,map__9530,map__9530__$1,opts,history))
},((cljs.core.not.call(null,new cljs.core.Keyword(null,"inspect","inspect",2971358598).cljs$core$IFn$_invoke$arity$1(state)))?"Inspect state":"Hide inspector")),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,self__.app)));
return cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app));
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Pretty print state"),((cljs.core.not.call(null,new cljs.core.Keyword(null,"area","area",1016906751).cljs$core$IFn$_invoke$arity$1(state)))?React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"area","area",1016906751),true);
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Input state"):React.DOM.span(null,om.dom.textarea.call(null,{"ref": "area", "placeholder": "Go to state"}),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){return om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,cljs.reader.read_string.call(null,om.core.get_node.call(null,self__.owner,"area").value));
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Go"),React.DOM.button({"onClick": ((function (___$1,map__9530,map__9530__$1,opts,history){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"area","area",1016906751),false);
});})(___$1,map__9530,map__9530__$1,opts,history))
},"Cancel"))),(cljs.core.truth_(new cljs.core.Keyword(null,"inspect","inspect",2971358598).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"style": {"bottom": "30px", "right": "30px", "position": "fixed"}},om.core.build.call(null,ankha.core.inspector,self__.app)):null));
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.t9531.prototype.om$core$IWillMount$ = true;
examples.counters.core.t9531.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__9530,map__9530__$1,opts,history){
return (function (_){var self__ = this;
var ___$1 = this;return null;
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.t9531.prototype.om$core$IInitState$ = true;
examples.counters.core.t9531.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__9530,map__9530__$1,opts,history){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx","idx",1014008367),0,new cljs.core.Keyword(null,"history","history",1940838406),self__.history,new cljs.core.Keyword(null,"area","area",1016906751),false], null);
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.t9531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9530,map__9530__$1,opts,history){
return (function (_9533){var self__ = this;
var _9533__$1 = this;return self__.meta9532;
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.t9531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9530,map__9530__$1,opts,history){
return (function (_9533,meta9532__$1){var self__ = this;
var _9533__$1 = this;return (new examples.counters.core.t9531(self__.history,self__.opts,self__.map__9530,self__.p__9525,self__.owner,self__.app,self__.dev,meta9532__$1));
});})(map__9530,map__9530__$1,opts,history))
;
examples.counters.core.__GT_t9531 = ((function (map__9530,map__9530__$1,opts,history){
return (function __GT_t9531(history__$1,opts__$1,map__9530__$2,p__9525__$1,owner__$1,app__$1,dev__$1,meta9532){return (new examples.counters.core.t9531(history__$1,opts__$1,map__9530__$2,p__9525__$1,owner__$1,app__$1,dev__$1,meta9532));
});})(map__9530,map__9530__$1,opts,history))
;
}
return (new examples.counters.core.t9531(history,opts,map__9530__$1,p__9525,owner,app,dev,null));
});
examples.counters.core.dev_init = (function dev_init(original,owner){if(typeof examples.counters.core.t9540 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9540 = (function (owner,original,dev_init,meta9541){
this.owner = owner;
this.original = original;
this.dev_init = dev_init;
this.meta9541 = meta9541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9540.cljs$lang$type = true;
examples.counters.core.t9540.cljs$lang$ctorStr = "examples.counters.core/t9540";
examples.counters.core.t9540.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.counters.core/t9540");
});
examples.counters.core.t9540.prototype.om$core$IRender$ = true;
examples.counters.core.t9540.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.core.build_STAR_,self__.original),om.core.build.call(null,examples.counters.core.dev,cljs.core.second.call(null,self__.original),cljs.core.nth.call(null,self__.original,2)));
});
examples.counters.core.t9540.prototype.om$core$IWillMount$ = true;
examples.counters.core.t9540.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var snap = examples.counters.core.get_local.call(null,"snap",null);var history = cljs.core.get_in.call(null,cljs.core.nth.call(null,self__.original,2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"history","history",1940838406)], null));var histo_local = examples.counters.core.get_local.call(null,"history",null);window.onerror = ((function (snap,history,histo_local,___$1){
return (function (p1__9534_SHARP_,p2__9535_SHARP_,p3__9536_SHARP_){return cljs.core.prn.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9534_SHARP_)+" for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9535_SHARP_)+" at line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__9536_SHARP_)+" and history was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history))));
});})(snap,history,histo_local,___$1))
;
if(cljs.core.truth_(snap))
{om.core.update_BANG_.call(null,cljs.core.second.call(null,self__.original),cljs.core.PersistentVector.EMPTY,snap);
} else
{}
if(cljs.core.truth_(histo_local))
{return cljs.core.reset_BANG_.call(null,history,histo_local);
} else
{return null;
}
});
examples.counters.core.t9540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9542){var self__ = this;
var _9542__$1 = this;return self__.meta9541;
});
examples.counters.core.t9540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9542,meta9541__$1){var self__ = this;
var _9542__$1 = this;return (new examples.counters.core.t9540(self__.owner,self__.original,self__.dev_init,meta9541__$1));
});
examples.counters.core.__GT_t9540 = (function __GT_t9540(owner__$1,original__$1,dev_init__$1,meta9541){return (new examples.counters.core.t9540(owner__$1,original__$1,dev_init__$1,meta9541));
});
}
return (new examples.counters.core.t9540(owner,original,dev_init,null));
});
examples.counters.core.make_history_fn = (function make_history_fn(history){return (function (tx_data,root_cursor){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",1017498710),new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(tx_data)))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.Keyword(null,"new-state","new-state",3624385942).cljs$core$IFn$_invoke$arity$1(tx_data));
}
});
});
examples.counters.core.power_up = (function power_up(view,state,opts){var history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,state)], null));return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114).cljs$core$IFn$_invoke$arity$1(opts),examples.counters.core.make_history_fn.call(null,history)),new cljs.core.Keyword(null,"instrument","instrument",2409387865),((function (history){
return (function (f,cursor,m){if(cljs.core._EQ_.call(null,f,view))
{return om.core.build_STAR_.call(null,examples.counters.core.dev_init,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",1940838406),history], null))], null));
} else
{var temp__4090__auto__ = new cljs.core.Keyword(null,"instrument","instrument",2409387865).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4090__auto__))
{var user_instr = temp__4090__auto__;return user_instr.call(null,f,cursor,m);
} else
{return new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603);
}
}
});})(history))
);
});
examples.counters.core.dev_component = (function dev_component(view,state,opts){return om.core.root.call(null,view,state,examples.counters.core.power_up.call(null,view,state,opts));
});
examples.counters.core.dev_component.call(null,examples.counters.core.counter_view,examples.counters.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app1"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.print.call(null,tx_data);
})], null));

//# sourceMappingURL=core.js.map