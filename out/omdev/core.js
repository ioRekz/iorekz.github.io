// Compiled by ClojureScript 0.0-2227
goog.provide('omdev.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
omdev.core.get_local = (function get_local(k,defo){var local = window.localStorage.getItem(k);if(cljs.core.truth_(local))
{return cljs.reader.read_string.call(null,local);
} else
{return defo;
}
});
omdev.core.dev = (function dev(app,owner,p__10689){var map__10694 = p__10689;var map__10694__$1 = ((cljs.core.seq_QMARK_.call(null,map__10694))?cljs.core.apply.call(null,cljs.core.hash_map,map__10694):map__10694);var opts = map__10694__$1;var history = cljs.core.get.call(null,map__10694__$1,new cljs.core.Keyword(null,"history","history",1940838406));if(typeof omdev.core.t10695 !== 'undefined')
{} else
{
/**
* @constructor
*/
omdev.core.t10695 = (function (history,opts,map__10694,p__10689,owner,app,dev,meta10696){
this.history = history;
this.opts = opts;
this.map__10694 = map__10694;
this.p__10689 = p__10689;
this.owner = owner;
this.app = app;
this.dev = dev;
this.meta10696 = meta10696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omdev.core.t10695.cljs$lang$type = true;
omdev.core.t10695.cljs$lang$ctorStr = "omdev.core/t10695";
omdev.core.t10695.cljs$lang$ctorPrWriter = ((function (map__10694,map__10694__$1,opts,history){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"omdev.core/t10695");
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.t10695.prototype.om$core$IRenderState$ = true;
omdev.core.t10695.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10694,map__10694__$1,opts,history){
return (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"bottom": "30px", "position": "fixed"}},cljs.core.apply.call(null,om.dom.ul,{"style": {"margin": "0px", "padding": "5px", "list-style-type": "none"}},cljs.core.map_indexed.call(null,((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (idx,itm){return React.DOM.li({"style": {"cursor": "pointer", "display": "inline-block", "margin-right": "4px", "text-align": "center", "padding": "5px", "width": "30px", "border": "1px solid", "border-color": ((cljs.core._EQ_.call(null,itm,self__.app))?"black":"#ccc")}, "onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (){return om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,itm,new cljs.core.Keyword(null,"undo","undo",1017498710));
});})(___$1,map__10694,map__10694__$1,opts,history))
},(idx + 1));
});})(___$1,map__10694,map__10694__$1,opts,history))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(state)))),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){if((cljs.core.count.call(null,cljs.core.deref.call(null,self__.history)) > (new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(state) + 1)))
{om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,cljs.core.get.call(null,cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,self__.history))),(new cljs.core.Keyword(null,"idx","idx",1014008367).cljs$core$IFn$_invoke$arity$1(state) + 1)),new cljs.core.Keyword(null,"undo","undo",1017498710));
return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"idx","idx",1014008367),cljs.core.inc);
} else
{return null;
}
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Undo"),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){window.localStorage.setItem("snap",cljs.core.deref.call(null,self__.app));
return window.localStorage.setItem("history",cljs.core.deref.call(null,self__.history));
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Snap"),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){window.localStorage.removeItem("snap");
return window.localStorage.removeItem("history");
});})(___$1,map__10694,map__10694__$1,opts,history))
},"UnSnap"),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,self__.app)));
return cljs.core.prn.call(null,cljs.core.deref.call(null,self__.app));
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Pretty print state"),((cljs.core.not.call(null,new cljs.core.Keyword(null,"area","area",1016906751).cljs$core$IFn$_invoke$arity$1(state)))?React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"area","area",1016906751),true);
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Input state"):React.DOM.span(null,om.dom.textarea.call(null,{"ref": "area", "placeholder": "Go to state"}),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){return om.core.update_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,cljs.reader.read_string.call(null,om.core.get_node.call(null,self__.owner,"area").value));
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Go"),React.DOM.button({"onClick": ((function (___$1,map__10694,map__10694__$1,opts,history){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"area","area",1016906751),false);
});})(___$1,map__10694,map__10694__$1,opts,history))
},"Cancel"))));
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.t10695.prototype.om$core$IWillMount$ = true;
omdev.core.t10695.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__10694,map__10694__$1,opts,history){
return (function (_){var self__ = this;
var ___$1 = this;return null;
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.t10695.prototype.om$core$IInitState$ = true;
omdev.core.t10695.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10694,map__10694__$1,opts,history){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx","idx",1014008367),0,new cljs.core.Keyword(null,"history","history",1940838406),self__.history,new cljs.core.Keyword(null,"area","area",1016906751),false], null);
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.t10695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10694,map__10694__$1,opts,history){
return (function (_10697){var self__ = this;
var _10697__$1 = this;return self__.meta10696;
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.t10695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10694,map__10694__$1,opts,history){
return (function (_10697,meta10696__$1){var self__ = this;
var _10697__$1 = this;return (new omdev.core.t10695(self__.history,self__.opts,self__.map__10694,self__.p__10689,self__.owner,self__.app,self__.dev,meta10696__$1));
});})(map__10694,map__10694__$1,opts,history))
;
omdev.core.__GT_t10695 = ((function (map__10694,map__10694__$1,opts,history){
return (function __GT_t10695(history__$1,opts__$1,map__10694__$2,p__10689__$1,owner__$1,app__$1,dev__$1,meta10696){return (new omdev.core.t10695(history__$1,opts__$1,map__10694__$2,p__10689__$1,owner__$1,app__$1,dev__$1,meta10696));
});})(map__10694,map__10694__$1,opts,history))
;
}
return (new omdev.core.t10695(history,opts,map__10694__$1,p__10689,owner,app,dev,null));
});
omdev.core.dev_init = (function dev_init(original,owner){if(typeof omdev.core.t10704 !== 'undefined')
{} else
{
/**
* @constructor
*/
omdev.core.t10704 = (function (owner,original,dev_init,meta10705){
this.owner = owner;
this.original = original;
this.dev_init = dev_init;
this.meta10705 = meta10705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omdev.core.t10704.cljs$lang$type = true;
omdev.core.t10704.cljs$lang$ctorStr = "omdev.core/t10704";
omdev.core.t10704.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"omdev.core/t10704");
});
omdev.core.t10704.prototype.om$core$IRender$ = true;
omdev.core.t10704.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.core.build_STAR_,self__.original),om.core.build.call(null,omdev.core.dev,cljs.core.second.call(null,self__.original),cljs.core.nth.call(null,self__.original,2)));
});
omdev.core.t10704.prototype.om$core$IWillMount$ = true;
omdev.core.t10704.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var snap = omdev.core.get_local.call(null,"snap",null);var history = cljs.core.get_in.call(null,cljs.core.nth.call(null,self__.original,2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"history","history",1940838406)], null));var histo_local = omdev.core.get_local.call(null,"history",null);window.onerror = ((function (snap,history,histo_local,___$1){
return (function (p1__10698_SHARP_,p2__10699_SHARP_,p3__10700_SHARP_){return cljs.core.prn.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10698_SHARP_)+" for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10699_SHARP_)+" at line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__10700_SHARP_)+" and history was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history))));
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
omdev.core.t10704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10706){var self__ = this;
var _10706__$1 = this;return self__.meta10705;
});
omdev.core.t10704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10706,meta10705__$1){var self__ = this;
var _10706__$1 = this;return (new omdev.core.t10704(self__.owner,self__.original,self__.dev_init,meta10705__$1));
});
omdev.core.__GT_t10704 = (function __GT_t10704(owner__$1,original__$1,dev_init__$1,meta10705){return (new omdev.core.t10704(owner__$1,original__$1,dev_init__$1,meta10705));
});
}
return (new omdev.core.t10704(owner,original,dev_init,null));
});
omdev.core.power_up = (function power_up(view,state,opts){var history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,state)], null));return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),((function (history){
return (function (tx_data,root_cursor){new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114).cljs$core$IFn$_invoke$arity$1(opts).call(null,tx_data,root_cursor);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",1017498710),new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(tx_data)))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.Keyword(null,"new-state","new-state",3624385942).cljs$core$IFn$_invoke$arity$1(tx_data));
}
});})(history))
,new cljs.core.Keyword(null,"instrument","instrument",2409387865),((function (history){
return (function (f,cursor,m){if(cljs.core._EQ_.call(null,f,view))
{return om.core.build_STAR_.call(null,omdev.core.dev_init,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",1940838406),history], null))], null));
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
omdev.core.dev_component = (function dev_component(view,state,opts){return om.core.root.call(null,view,state,omdev.core.power_up.call(null,view,state,opts));
});

//# sourceMappingURL=core.js.map