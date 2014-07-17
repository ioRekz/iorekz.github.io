// Compiled by ClojureScript 0.0-2227
goog.provide('ankha.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('goog.object');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
ankha.core.IInspect = (function (){var obj10909 = {};return obj10909;
})();
ankha.core._inspect = (function _inspect(this$){if((function (){var and__4187__auto__ = this$;if(and__4187__auto__)
{return this$.ankha$core$IInspect$_inspect$arity$1;
} else
{return and__4187__auto__;
}
})())
{return this$.ankha$core$IInspect$_inspect$arity$1(this$);
} else
{var x__4826__auto__ = (((this$ == null))?null:this$);return (function (){var or__4199__auto__ = (ankha.core._inspect[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (ankha.core._inspect["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInspect.-inspect",this$);
}
}
})().call(null,this$);
}
});
/**
* Return true if x is an empty js/Object or empty Clojure collection.
*/
ankha.core.empty_QMARK_ = (function empty_QMARK_(x){if(cljs.core.object_QMARK_.call(null,x))
{return goog.object.isEmpty(x);
} else
{return cljs.core.empty_QMARK_.call(null,x);
}
});
/**
* Return true if x satisfies IRecord, false otherwise.
*/
ankha.core.record_QMARK_ = (function record_QMARK_(x){var G__10911 = x;if(G__10911)
{var bit__4849__auto__ = (G__10911.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__4849__auto__) || (G__10911.cljs$core$IRecord$))
{return true;
} else
{if((!G__10911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__10911);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__10911);
}
});
/**
* Return the name of a Record type.
*/
ankha.core.record_name = (function record_name(r){var s = cljs.core.pr_str.call(null,r);return cljs.core.subs.call(null,s,0,s.indexOf("{"));
});
/**
* Return an opener for a Record type.
*/
ankha.core.record_opener = (function record_opener(r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ankha.core.record_name.call(null,r))+"{");
});
ankha.core.literal = (function literal(class$,x){return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.coll_view = (function coll_view(data,opener,closer,class$){return om.core.build.call(null,ankha.core.collection_view,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opener","opener",4298292201),opener,new cljs.core.Keyword(null,"closer","closer",3951351020),closer,new cljs.core.Keyword(null,"class","class",1108647146),class$], null)], null));
});
ankha.core.inspect = (function inspect(x){if((function (){var G__10913 = x;if(G__10913)
{var bit__4849__auto__ = null;if(cljs.core.truth_((function (){var or__4199__auto__ = bit__4849__auto__;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return G__10913.ankha$core$IInspect$;
}
})()))
{return true;
} else
{if((!G__10913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__10913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__10913);
}
})())
{return ankha.core._inspect.call(null,x);
} else
{if(cljs.core.fn_QMARK_.call(null,x))
{return ankha.core.literal.call(null,"function",x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ankha.core.literal.call(null,"literal",x);
} else
{return null;
}
}
}
});
ankha.core.associative__GT_dom = (function associative__GT_dom(data,p__10914){var map__10924 = p__10914;var map__10924__$1 = ((cljs.core.seq_QMARK_.call(null,map__10924))?cljs.core.apply.call(null,cljs.core.hash_map,map__10924):map__10924);var val_class = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"val-class","val-class",2480724798));var key_class = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"key-class","key-class",2216807420));var entry_class = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"entry-class","entry-class",3066174415));return cljs.core.into_array.call(null,(function (){var iter__4924__auto__ = ((function (map__10924,map__10924__$1,val_class,key_class,entry_class){
return (function iter__10925(s__10926){return (new cljs.core.LazySeq(null,((function (map__10924,map__10924__$1,val_class,key_class,entry_class){
return (function (){var s__10926__$1 = s__10926;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10926__$1);if(temp__4092__auto__)
{var s__10926__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10926__$2))
{var c__4922__auto__ = cljs.core.chunk_first.call(null,s__10926__$2);var size__4923__auto__ = cljs.core.count.call(null,c__4922__auto__);var b__10928 = cljs.core.chunk_buffer.call(null,size__4923__auto__);if((function (){var i__10927 = 0;while(true){
if((i__10927 < size__4923__auto__))
{var vec__10931 = cljs.core._nth.call(null,c__4922__auto__,i__10927);var k = cljs.core.nth.call(null,vec__10931,0,null);var v = cljs.core.nth.call(null,vec__10931,1,null);cljs.core.chunk_append.call(null,b__10928,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)))},React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,v)))));
{
var G__10933 = (i__10927 + 1);
i__10927 = G__10933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10928),iter__10925.call(null,cljs.core.chunk_rest.call(null,s__10926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10928),null);
}
} else
{var vec__10932 = cljs.core.first.call(null,s__10926__$2);var k = cljs.core.nth.call(null,vec__10932,0,null);var v = cljs.core.nth.call(null,vec__10932,1,null);return cljs.core.cons.call(null,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)))},React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,v)))),iter__10925.call(null,cljs.core.rest.call(null,s__10926__$2)));
}
} else
{return null;
}
break;
}
});})(map__10924,map__10924__$1,val_class,key_class,entry_class))
,null,null));
});})(map__10924,map__10924__$1,val_class,key_class,entry_class))
;return iter__4924__auto__.call(null,data);
})());
});
ankha.core.sequential__GT_dom = (function sequential__GT_dom(data){return cljs.core.into_array.call(null,(function (){var iter__4924__auto__ = (function iter__10942(s__10943){return (new cljs.core.LazySeq(null,(function (){var s__10943__$1 = s__10943;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10943__$1);if(temp__4092__auto__)
{var s__10943__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10943__$2))
{var c__4922__auto__ = cljs.core.chunk_first.call(null,s__10943__$2);var size__4923__auto__ = cljs.core.count.call(null,c__4922__auto__);var b__10945 = cljs.core.chunk_buffer.call(null,size__4923__auto__);if((function (){var i__10944 = 0;while(true){
if((i__10944 < size__4923__auto__))
{var vec__10948 = cljs.core._nth.call(null,c__4922__auto__,i__10944);var i = cljs.core.nth.call(null,vec__10948,0,null);var x = cljs.core.nth.call(null,vec__10948,1,null);var pair = vec__10948;cljs.core.chunk_append.call(null,b__10945,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pair)), "className": "entry"},ankha.core.inspect.call(null,x)));
{
var G__10950 = (i__10944 + 1);
i__10944 = G__10950;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10945),iter__10942.call(null,cljs.core.chunk_rest.call(null,s__10943__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10945),null);
}
} else
{var vec__10949 = cljs.core.first.call(null,s__10943__$2);var i = cljs.core.nth.call(null,vec__10949,0,null);var x = cljs.core.nth.call(null,vec__10949,1,null);var pair = vec__10949;return cljs.core.cons.call(null,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pair)), "className": "entry"},ankha.core.inspect.call(null,x)),iter__10942.call(null,cljs.core.rest.call(null,s__10943__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4924__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data));
})());
});
ankha.core.coll__GT_dom = (function coll__GT_dom(data){if(cljs.core.map_QMARK_.call(null,data))
{return ankha.core.associative__GT_dom.call(null,data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",3066174415),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",2216807420),"map-key",new cljs.core.Keyword(null,"val-class","val-class",2480724798),"map-val"], null));
} else
{if(cljs.core.object_QMARK_.call(null,data))
{var ks = goog.object.getKeys(data);var vs = goog.object.getValues(data);var m = cljs.core.map.call(null,cljs.core.vector,ks,vs);return ankha.core.associative__GT_dom.call(null,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",3066174415),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",2216807420),"object-key",new cljs.core.Keyword(null,"val-class","val-class",2480724798),"object-val"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ankha.core.sequential__GT_dom.call(null,data);
} else
{return null;
}
}
}
});
ankha.core.toggle_button = (function toggle_button(owner,p__10951){var map__10953 = p__10951;var map__10953__$1 = ((cljs.core.seq_QMARK_.call(null,map__10953))?cljs.core.apply.call(null,cljs.core.hash_map,map__10953):map__10953);var disable_QMARK_ = cljs.core.get.call(null,map__10953__$1,new cljs.core.Keyword(null,"disable?","disable?",1284845001));return React.DOM.button({"style": {"fontWeight": "bold", "cursor": "pointer", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "padding": "0", "display": "inline-block", "outline": "none", "verticalAlign": "top", "background": "none", "border": "none"}, "onClick": ((function (map__10953,map__10953__$1,disable_QMARK_){
return (function (_){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199),cljs.core.not);
});})(map__10953,map__10953__$1,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199)))?"-":"+"));
});
ankha.core.edit_button = (function edit_button(owner,p__10954){var map__10956 = p__10954;var map__10956__$1 = ((cljs.core.seq_QMARK_.call(null,map__10956))?cljs.core.apply.call(null,cljs.core.hash_map,map__10956):map__10956);var open_editor = cljs.core.get.call(null,map__10956__$1,new cljs.core.Keyword(null,"open-editor","open-editor",3422523842));var save_editor = cljs.core.get.call(null,map__10956__$1,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647));var disable_QMARK_ = cljs.core.get.call(null,map__10956__$1,new cljs.core.Keyword(null,"disable?","disable?",1284845001));return React.DOM.button({"style": {"fontWeight": "bold", "cursor": "pointer", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "padding": "0", "display": "inline-block", "outline": "none", "verticalAlign": "top", "background": "none", "border": "none"}, "onClick": ((function (map__10956,map__10956__$1,open_editor,save_editor,disable_QMARK_){
return (function (_){if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",2616570137))))
{return save_editor.call(null);
} else
{return open_editor.call(null);
}
});})(map__10956,map__10956__$1,open_editor,save_editor,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "edit-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",2616570137)))?"Save":"Edit"));
});
ankha.core.enter_key_QMARK_ = (function enter_key_QMARK_(e){return cljs.core._EQ_.call(null,13,e.keyCode);
});
ankha.core.escape_key_QMARK_ = (function escape_key_QMARK_(e){return cljs.core._EQ_.call(null,27,e.keyCode);
});
ankha.core.editor = (function editor(owner,p__10957){var map__10959 = p__10957;var map__10959__$1 = ((cljs.core.seq_QMARK_.call(null,map__10959))?cljs.core.apply.call(null,cljs.core.hash_map,map__10959):map__10959);var error_message = cljs.core.get.call(null,map__10959__$1,new cljs.core.Keyword(null,"error-message","error-message",2128945332));var cancel_editor = cljs.core.get.call(null,map__10959__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",647558034));var save_editor = cljs.core.get.call(null,map__10959__$1,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647));var value = cljs.core.get.call(null,map__10959__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.div({"style": {"display": "inline"}},om.dom.textarea.call(null,{"onBlur": save_editor, "onChange": ((function (map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value){
return (function (e){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edited-data","edited-data",3583415872),e.target.value);
});})(map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value))
, "onKeyUp": ((function (map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value){
return (function (e){if(ankha.core.enter_key_QMARK_.call(null,e))
{return save_editor.call(null);
} else
{if(ankha.core.escape_key_QMARK_.call(null,e))
{return cancel_editor.call(null);
} else
{return null;
}
}
});})(map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value))
, "onKeyPress": ((function (map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value){
return (function (e){if(ankha.core.enter_key_QMARK_.call(null,e))
{return e.preventDefault();
} else
{return null;
}
});})(map__10959,map__10959__$1,error_message,cancel_editor,save_editor,value))
, "value": value, "style": {"display": "inline-block"}, "ref": "editor", "className": "editor"}),(cljs.core.truth_(error_message)?React.DOM.span({"style": {"vertical-align": "top"}, "className": "error"},error_message):null));
});
ankha.core.collection_view = (function collection_view(data,owner,p__10960){var map__10968 = p__10960;var map__10968__$1 = ((cljs.core.seq_QMARK_.call(null,map__10968))?cljs.core.apply.call(null,cljs.core.hash_map,map__10968):map__10968);var opts = map__10968__$1;var closer = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"closer","closer",3951351020));var opener = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"opener","opener",4298292201));var class$ = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"class","class",1108647146));if(typeof ankha.core.t10969 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t10969 = (function (class$,opener,closer,opts,map__10968,p__10960,owner,data,collection_view,meta10970){
this.class$ = class$;
this.opener = opener;
this.closer = closer;
this.opts = opts;
this.map__10968 = map__10968;
this.p__10960 = p__10960;
this.owner = owner;
this.data = data;
this.collection_view = collection_view;
this.meta10970 = meta10970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t10969.cljs$lang$type = true;
ankha.core.t10969.cljs$lang$ctorStr = "ankha.core/t10969";
ankha.core.t10969.cljs$lang$ctorPrWriter = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"ankha.core/t10969");
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.t10969.prototype.om$core$IDidUpdate$ = true;
ankha.core.t10969.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",2616570137))))
{return om.core.get_node.call(null,self__.owner,"editor").focus();
} else
{return null;
}
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.t10969.prototype.om$core$IRenderState$ = true;
ankha.core.t10969.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (_,p__10972){var self__ = this;
var map__10973 = p__10972;var map__10973__$1 = ((cljs.core.seq_QMARK_.call(null,map__10973))?cljs.core.apply.call(null,cljs.core.hash_map,map__10973):map__10973);var cancel_editor = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",647558034));var save_editor = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647));var open_editor = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"open-editor","open-editor",3422523842));var editing_error_message = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",1024449855));var edited_data = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"edited-data","edited-data",3583415872));var editing_QMARK_ = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"editing?","editing?",2616570137));var vacant_QMARK_ = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"vacant?","vacant?",1236611522));var open_QMARK_ = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"open?","open?",1119852199));var ___$1 = this;return React.DOM.div({"onDoubleClick": ((function (___$1,map__10973,map__10973__$1,cancel_editor,save_editor,open_editor,editing_error_message,edited_data,editing_QMARK_,vacant_QMARK_,open_QMARK_,map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (e){e.stopPropagation();
return open_editor.call(null);
});})(___$1,map__10973,map__10973__$1,cancel_editor,save_editor,open_editor,editing_error_message,edited_data,editing_QMARK_,vacant_QMARK_,open_QMARK_,map__10968,map__10968__$1,opts,closer,opener,class$))
, "className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1284845001),vacant_QMARK_], null)),(cljs.core.truth_(open_QMARK_)?ankha.core.edit_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-editor","open-editor",3422523842),open_editor,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647),save_editor], null)):null),(cljs.core.truth_((function (){var and__4187__auto__ = open_QMARK_;if(cljs.core.truth_(and__4187__auto__))
{return editing_QMARK_;
} else
{return and__4187__auto__;
}
})())?ankha.core.editor.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",1125876963),edited_data,new cljs.core.Keyword(null,"error-message","error-message",2128945332),editing_error_message,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647),save_editor,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",647558034),cancel_editor], null)):null),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var and__4187__auto__ = open_QMARK_;if(cljs.core.truth_(and__4187__auto__))
{return editing_QMARK_;
} else
{return and__4187__auto__;
}
})())?"none":"inline-block")}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_((function (){var and__4187__auto__ = open_QMARK_;if(cljs.core.truth_(and__4187__auto__))
{return cljs.core.not.call(null,editing_QMARK_);
} else
{return and__4187__auto__;
}
})())?"block":"none")}, "className": "values"},ankha.core.coll__GT_dom.call(null,self__.data)),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var or__4199__auto__ = open_QMARK_;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return vacant_QMARK_;
}
})())?"none":"inline")}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?(cljs.core.truth_(editing_QMARK_)?"none":"block"):"inline-block")}, "className": "closer"},self__.closer));
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.t10969.prototype.om$core$IInitState$ = true;
ankha.core.t10969.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edited-data","edited-data",3583415872),cljs.core.pr_str.call(null,self__.data),new cljs.core.Keyword(null,"editing?","editing?",2616570137),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"editing?","editing?",2616570137).cljs$core$IFn$_invoke$arity$1(self__.opts)),new cljs.core.Keyword(null,"open-editor","open-editor",3422523842),((function (___$1,map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,((function (___$1,map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (s){return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing-error-message","editing-error-message",1024449855),null,new cljs.core.Keyword(null,"editing?","editing?",2616570137),true,new cljs.core.Keyword(null,"edited-data","edited-data",3583415872),cljs.core.pr_str.call(null,cljs.core.deref.call(null,self__.data))], null));
});})(___$1,map__10968,map__10968__$1,opts,closer,opener,class$))
);
});})(___$1,map__10968,map__10968__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"save-editor","save-editor",4310009647),((function (___$1,map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (){try{var new_data = cljs.reader.read_string.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edited-data","edited-data",3583415872)));if(cljs.core._EQ_.call(null,new_data,cljs.core.deref.call(null,self__.data)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",2616570137),false);
} else
{return om.core.update_BANG_.call(null,self__.data,new_data);
}
}catch (e10974){if((e10974 instanceof Error))
{var e = e10974;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",1024449855),e.message);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10974;
} else
{return null;
}
}
}});})(___$1,map__10968,map__10968__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",647558034),((function (___$1,map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",2616570137),false);
});})(___$1,map__10968,map__10968__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"vacant?","vacant?",1236611522),ankha.core.empty_QMARK_.call(null,self__.data),new cljs.core.Keyword(null,"open?","open?",1119852199),(!(new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,ankha.core.empty_QMARK_.call(null,self__.data)))], null);
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.t10969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (_10971){var self__ = this;
var _10971__$1 = this;return self__.meta10970;
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.t10969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function (_10971,meta10970__$1){var self__ = this;
var _10971__$1 = this;return (new ankha.core.t10969(self__.class$,self__.opener,self__.closer,self__.opts,self__.map__10968,self__.p__10960,self__.owner,self__.data,self__.collection_view,meta10970__$1));
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
ankha.core.__GT_t10969 = ((function (map__10968,map__10968__$1,opts,closer,opener,class$){
return (function __GT_t10969(class$__$1,opener__$1,closer__$1,opts__$1,map__10968__$2,p__10960__$1,owner__$1,data__$1,collection_view__$1,meta10970){return (new ankha.core.t10969(class$__$1,opener__$1,closer__$1,opts__$1,map__10968__$2,p__10960__$1,owner__$1,data__$1,collection_view__$1,meta10970));
});})(map__10968,map__10968__$1,opts,closer,opener,class$))
;
}
return (new ankha.core.t10969(class$,opener,closer,opts,map__10968__$1,p__10960,owner,data,collection_view,null));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,p__10975){var map__10980 = p__10975;var map__10980__$1 = ((cljs.core.seq_QMARK_.call(null,map__10980))?cljs.core.apply.call(null,cljs.core.hash_map,map__10980):map__10980);var opts = map__10980__$1;var class$ = cljs.core.get.call(null,map__10980__$1,new cljs.core.Keyword(null,"class","class",1108647146),"inspector");if(typeof ankha.core.t10981 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t10981 = (function (class$,opts,map__10980,p__10975,owner,data,inspector,meta10982){
this.class$ = class$;
this.opts = opts;
this.map__10980 = map__10980;
this.p__10975 = p__10975;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta10982 = meta10982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t10981.cljs$lang$type = true;
ankha.core.t10981.cljs$lang$ctorStr = "ankha.core/t10981";
ankha.core.t10981.cljs$lang$ctorPrWriter = ((function (map__10980,map__10980__$1,opts,class$){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"ankha.core/t10981");
});})(map__10980,map__10980__$1,opts,class$))
;
ankha.core.t10981.prototype.om$core$IRender$ = true;
ankha.core.t10981.prototype.om$core$IRender$render$arity$1 = ((function (map__10980,map__10980__$1,opts,class$){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": self__.class$},ankha.core.inspect.call(null,self__.data));
});})(map__10980,map__10980__$1,opts,class$))
;
ankha.core.t10981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10980,map__10980__$1,opts,class$){
return (function (_10983){var self__ = this;
var _10983__$1 = this;return self__.meta10982;
});})(map__10980,map__10980__$1,opts,class$))
;
ankha.core.t10981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10980,map__10980__$1,opts,class$){
return (function (_10983,meta10982__$1){var self__ = this;
var _10983__$1 = this;return (new ankha.core.t10981(self__.class$,self__.opts,self__.map__10980,self__.p__10975,self__.owner,self__.data,self__.inspector,meta10982__$1));
});})(map__10980,map__10980__$1,opts,class$))
;
ankha.core.__GT_t10981 = ((function (map__10980,map__10980__$1,opts,class$){
return (function __GT_t10981(class$__$1,opts__$1,map__10980__$2,p__10975__$1,owner__$1,data__$1,inspector__$1,meta10982){return (new ankha.core.t10981(class$__$1,opts__$1,map__10980__$2,p__10975__$1,owner__$1,data__$1,inspector__$1,meta10982));
});})(map__10980,map__10980__$1,opts,class$))
;
}
return (new ankha.core.t10981(class$,opts,map__10980__$1,p__10975,owner,data,inspector,null));
});
inspector = function(data,owner,p__10975){
switch(arguments.length){
case 2:
return inspector__2.call(this,data,owner);
case 3:
return inspector__3.call(this,data,owner,p__10975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
inspector.cljs$core$IFn$_invoke$arity$2 = inspector__2;
inspector.cljs$core$IFn$_invoke$arity$3 = inspector__3;
return inspector;
})()
;
(ankha.core.IInspect["null"] = true);
(ankha.core._inspect["null"] = (function (this$){return ankha.core.literal.call(null,"nil",this$);
}));
cljs.core.KeySeq.prototype.ankha$core$IInspect$ = true;
cljs.core.KeySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq key-seq");
});
cljs.core.Keyword.prototype.ankha$core$IInspect$ = true;
cljs.core.Keyword.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"keyword",this$__$1);
});
(ankha.core.IInspect["number"] = true);
(ankha.core._inspect["number"] = (function (this$){return ankha.core.literal.call(null,"number",this$);
}));
cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-array-map");
});
cljs.core.LazySeq.prototype.ankha$core$IInspect$ = true;
cljs.core.LazySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq lazy-seq");
});
cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-tree-set");
});
(ankha.core.IInspect["boolean"] = true);
(ankha.core._inspect["boolean"] = (function (this$){return ankha.core.literal.call(null,"boolean",this$);
}));
(ankha.core.IInspect["string"] = true);
(ankha.core._inspect["string"] = (function (this$){return ankha.core.literal.call(null,"string",this$);
}));
RegExp.prototype.ankha$core$IInspect$ = true;
RegExp.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"regexp",this$__$1);
});
cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-hash-map");
});
om.core.MapCursor.prototype.ankha$core$IInspect$ = true;
om.core.MapCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;if(ankha.core.record_QMARK_.call(null,om.core.value.call(null,this$__$1)))
{return ankha.core.coll_view.call(null,this$__$1,ankha.core.record_opener.call(null,this$__$1),"}","record map-cursor");
} else
{return ankha.core.coll_view.call(null,this$__$1,"{","}","map map-cursor");
}
});
cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-hash-set");
});
cljs.core.PersistentVector.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentVector.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"[","]","vector");
});
cljs.core.List.prototype.ankha$core$IInspect$ = true;
cljs.core.List.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","list");
});
(ankha.core.IInspect["array"] = true);
(ankha.core._inspect["array"] = (function (this$){return ankha.core.coll_view.call(null,this$,"#js [","]","array");
}));
(ankha.core.IInspect["object"] = true);
(ankha.core._inspect["object"] = (function (this$){return ankha.core.coll_view.call(null,this$,"#js {","}","object");
}));
(ankha.core.IInspect["function"] = true);
(ankha.core._inspect["function"] = (function (this$){return ankha.core.literal.call(null,"function",this$);
}));
cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq persistent-array-map-seq");
});
Date.prototype.ankha$core$IInspect$ = true;
Date.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"date",this$__$1);
});
cljs.core.Range.prototype.ankha$core$IInspect$ = true;
cljs.core.Range.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq range");
});
cljs.core.ValSeq.prototype.ankha$core$IInspect$ = true;
cljs.core.ValSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq val-seq");
});
cljs.core.Symbol.prototype.ankha$core$IInspect$ = true;
cljs.core.Symbol.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"symbol",this$__$1);
});
om.core.IndexedCursor.prototype.ankha$core$IInspect$ = true;
om.core.IndexedCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"[","]","vector indexed-cursor");
});

//# sourceMappingURL=core.js.map