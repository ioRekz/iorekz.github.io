// Compiled by ClojureScript 0.0-2227
goog.provide('examples.counters.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('omdev.core');
goog.require('omdev.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.counters.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",641883497),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),n,new cljs.core.Keyword(null,"count","count",1108755585),0], null);
}),cljs.core.range.call(null,10)))], null));
examples.counters.core.counter = (function counter(data,owner){if(typeof examples.counters.core.t9557 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9557 = (function (owner,data,counter,meta9558){
this.owner = owner;
this.data = data;
this.counter = counter;
this.meta9558 = meta9558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9557.cljs$lang$type = true;
examples.counters.core.t9557.cljs$lang$ctorStr = "examples.counters.core/t9557";
examples.counters.core.t9557.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"examples.counters.core/t9557");
});
examples.counters.core.t9557.prototype.om$core$IRenderState$ = true;
examples.counters.core.t9557.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9560){var self__ = this;
var map__9561 = p__9560;var map__9561__$1 = ((cljs.core.seq_QMARK_.call(null,map__9561))?cljs.core.apply.call(null,cljs.core.hash_map,map__9561):map__9561);var last_clicked = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554));var ___$1 = this;return React.DOM.div(null,React.DOM.label(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": ((function (___$1,map__9561,map__9561__$1,last_clicked){
return (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.inc);
return cljs.core.async.put_BANG_.call(null,last_clicked,self__.data.path);
});})(___$1,map__9561,map__9561__$1,last_clicked))
},"+"),React.DOM.button({"onClick": ((function (___$1,map__9561,map__9561__$1,last_clicked){
return (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.dec);
return cljs.core.async.put_BANG_.call(null,last_clicked,self__.data.path);
});})(___$1,map__9561,map__9561__$1,last_clicked))
},"-"));
});
examples.counters.core.t9557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9559){var self__ = this;
var _9559__$1 = this;return self__.meta9558;
});
examples.counters.core.t9557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9559,meta9558__$1){var self__ = this;
var _9559__$1 = this;return (new examples.counters.core.t9557(self__.owner,self__.data,self__.counter,meta9558__$1));
});
examples.counters.core.__GT_t9557 = (function __GT_t9557(owner__$1,data__$1,counter__$1,meta9558){return (new examples.counters.core.t9557(owner__$1,data__$1,counter__$1,meta9558));
});
}
return (new examples.counters.core.t9557(owner,data,counter,null));
});
examples.counters.core.counter_view = (function counter_view(app,owner){if(typeof examples.counters.core.t9595 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t9595 = (function (owner,app,counter_view,meta9596){
this.owner = owner;
this.app = app;
this.counter_view = counter_view;
this.meta9596 = meta9596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t9595.cljs$lang$type = true;
examples.counters.core.t9595.cljs$lang$ctorStr = "examples.counters.core/t9595";
examples.counters.core.t9595.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"examples.counters.core/t9595");
});
examples.counters.core.t9595.prototype.om$core$IRenderState$ = true;
examples.counters.core.t9595.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9598){var self__ = this;
var map__9599 = p__9598;var map__9599__$1 = ((cljs.core.seq_QMARK_.call(null,map__9599))?cljs.core.apply.call(null,cljs.core.hash_map,map__9599):map__9599);var chans = cljs.core.get.call(null,map__9599__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var message = cljs.core.get.call(null,map__9599__$1,new cljs.core.Keyword(null,"message","message",1968829305));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,React.DOM.h1({"key": "head"},"A Counting Widget!"),React.DOM.div({"style": (cljs.core.truth_(message)?{"display": "block"}:{"display": "none"}), "key": "message"},(cljs.core.truth_(message)?("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,message))):null)),om.core.build_all.call(null,examples.counters.core.counter,new cljs.core.Keyword(null,"counters","counters",641883497).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null)));
});
examples.counters.core.t9595.prototype.om$core$IWillMount$ = true;
examples.counters.core.t9595.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var last_clicked = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554)], null));var c__7136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__,last_clicked,___$1){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto__,last_clicked,___$1){
return (function (state_9612){var state_val_9613 = (state_9612[1]);if((state_val_9613 === 7))
{var inst_9603 = (state_9612[2]);var inst_9604 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305),inst_9603);var state_9612__$1 = (function (){var statearr_9614 = state_9612;(statearr_9614[7] = inst_9604);
return statearr_9614;
})();var statearr_9615_9628 = state_9612__$1;(statearr_9615_9628[2] = null);
(statearr_9615_9628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9613 === 6))
{var inst_9608 = (state_9612[2]);var state_9612__$1 = state_9612;var statearr_9616_9629 = state_9612__$1;(statearr_9616_9629[2] = inst_9608);
(statearr_9616_9629[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9613 === 5))
{var state_9612__$1 = state_9612;var statearr_9617_9630 = state_9612__$1;(statearr_9617_9630[2] = null);
(statearr_9617_9630[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9613 === 4))
{var state_9612__$1 = state_9612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9612__$1,7,last_clicked);
} else
{if((state_val_9613 === 3))
{var inst_9610 = (state_9612[2]);var state_9612__$1 = state_9612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9612__$1,inst_9610);
} else
{if((state_val_9613 === 2))
{var state_9612__$1 = state_9612;if(true)
{var statearr_9618_9631 = state_9612__$1;(statearr_9618_9631[1] = 4);
} else
{var statearr_9619_9632 = state_9612__$1;(statearr_9619_9632[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9613 === 1))
{var state_9612__$1 = state_9612;var statearr_9620_9633 = state_9612__$1;(statearr_9620_9633[2] = null);
(statearr_9620_9633[1] = 2);
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
});})(c__7136__auto__,last_clicked,___$1))
;return ((function (switch__7121__auto__,c__7136__auto__,last_clicked,___$1){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_9624 = [null,null,null,null,null,null,null,null];(statearr_9624[0] = state_machine__7122__auto__);
(statearr_9624[1] = 1);
return statearr_9624;
});
var state_machine__7122__auto____1 = (function (state_9612){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_9612);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e9625){if((e9625 instanceof Object))
{var ex__7125__auto__ = e9625;var statearr_9626_9634 = state_9612;(statearr_9626_9634[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9635 = state_9612;
state_9612 = G__9635;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_9612){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_9612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__,last_clicked,___$1))
})();var state__7138__auto__ = (function (){var statearr_9627 = f__7137__auto__.call(null);(statearr_9627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_9627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__,last_clicked,___$1))
);
return c__7136__auto__;
});
examples.counters.core.t9595.prototype.om$core$IInitState$ = true;
examples.counters.core.t9595.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
examples.counters.core.t9595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9597){var self__ = this;
var _9597__$1 = this;return self__.meta9596;
});
examples.counters.core.t9595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9597,meta9596__$1){var self__ = this;
var _9597__$1 = this;return (new examples.counters.core.t9595(self__.owner,self__.app,self__.counter_view,meta9596__$1));
});
examples.counters.core.__GT_t9595 = (function __GT_t9595(owner__$1,app__$1,counter_view__$1,meta9596){return (new examples.counters.core.t9595(owner__$1,app__$1,counter_view__$1,meta9596));
});
}
return (new examples.counters.core.t9595(owner,app,counter_view,null));
});
omdev.core.dev_component.call(null,examples.counters.core.counter_view,examples.counters.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app0"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.println.call(null,"listener 1: ",tx_data);
})], null));
om.core.root.call(null,examples.counters.core.counter_view,examples.counters.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app1"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.println.call(null,"listener 2: ",tx_data);
})], null));

//# sourceMappingURL=core.js.map