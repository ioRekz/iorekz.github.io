// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10813 = (function (f,fn_handler,meta10814){
this.f = f;
this.fn_handler = fn_handler;
this.meta10814 = meta10814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10813.cljs$lang$type = true;
cljs.core.async.t10813.cljs$lang$ctorStr = "cljs.core.async/t10813";
cljs.core.async.t10813.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10813");
});
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10815){var self__ = this;
var _10815__$1 = this;return self__.meta10814;
});
cljs.core.async.t10813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10815,meta10814__$1){var self__ = this;
var _10815__$1 = this;return (new cljs.core.async.t10813(self__.f,self__.fn_handler,meta10814__$1));
});
cljs.core.async.__GT_t10813 = (function __GT_t10813(f__$1,fn_handler__$1,meta10814){return (new cljs.core.async.t10813(f__$1,fn_handler__$1,meta10814));
});
}
return (new cljs.core.async.t10813(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10817 = buff;if(G__10817)
{var bit__4849__auto__ = null;if(cljs.core.truth_((function (){var or__4199__auto__ = bit__4849__auto__;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return G__10817.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10817.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10817);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10817);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10818 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10818);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10818,ret){
return (function (){return fn1.call(null,val_10818);
});})(val_10818,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4187__auto__ = ret;if(cljs.core.truth_(and__4187__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4187__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5055__auto___10819 = n;var x_10820 = 0;while(true){
if((x_10820 < n__5055__auto___10819))
{(a[x_10820] = 0);
{
var G__10821 = (x_10820 + 1);
x_10820 = G__10821;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10822 = (i + 1);
i = G__10822;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10826 = (function (flag,alt_flag,meta10827){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10827 = meta10827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10826.cljs$lang$type = true;
cljs.core.async.t10826.cljs$lang$ctorStr = "cljs.core.async/t10826";
cljs.core.async.t10826.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10826");
});})(flag))
;
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10828){var self__ = this;
var _10828__$1 = this;return self__.meta10827;
});})(flag))
;
cljs.core.async.t10826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10828,meta10827__$1){var self__ = this;
var _10828__$1 = this;return (new cljs.core.async.t10826(self__.flag,self__.alt_flag,meta10827__$1));
});})(flag))
;
cljs.core.async.__GT_t10826 = ((function (flag){
return (function __GT_t10826(flag__$1,alt_flag__$1,meta10827){return (new cljs.core.async.t10826(flag__$1,alt_flag__$1,meta10827));
});})(flag))
;
}
return (new cljs.core.async.t10826(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10832 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10832 = (function (cb,flag,alt_handler,meta10833){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10833 = meta10833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10832.cljs$lang$type = true;
cljs.core.async.t10832.cljs$lang$ctorStr = "cljs.core.async/t10832";
cljs.core.async.t10832.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10832");
});
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10834){var self__ = this;
var _10834__$1 = this;return self__.meta10833;
});
cljs.core.async.t10832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10834,meta10833__$1){var self__ = this;
var _10834__$1 = this;return (new cljs.core.async.t10832(self__.cb,self__.flag,self__.alt_handler,meta10833__$1));
});
cljs.core.async.__GT_t10832 = (function __GT_t10832(cb__$1,flag__$1,alt_handler__$1,meta10833){return (new cljs.core.async.t10832(cb__$1,flag__$1,alt_handler__$1,meta10833));
});
}
return (new cljs.core.async.t10832(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10835_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10835_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4199__auto__ = wport;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10836 = (i + 1);
i = G__10836;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4199__auto__ = ret;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4187__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4187__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4187__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10837){var map__10839 = p__10837;var map__10839__$1 = ((cljs.core.seq_QMARK_.call(null,map__10839))?cljs.core.apply.call(null,cljs.core.hash_map,map__10839):map__10839);var opts = map__10839__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10837 = null;if (arguments.length > 1) {
  p__10837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10837);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10840){
var ports = cljs.core.first(arglist__10840);
var p__10837 = cljs.core.rest(arglist__10840);
return alts_BANG___delegate(ports,p__10837);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10848 = (function (ch,f,map_LT_,meta10849){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10849 = meta10849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10848.cljs$lang$type = true;
cljs.core.async.t10848.cljs$lang$ctorStr = "cljs.core.async/t10848";
cljs.core.async.t10848.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10848");
});
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10851 = (function (fn1,_,meta10849,ch,f,map_LT_,meta10852){
this.fn1 = fn1;
this._ = _;
this.meta10849 = meta10849;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10852 = meta10852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10851.cljs$lang$type = true;
cljs.core.async.t10851.cljs$lang$ctorStr = "cljs.core.async/t10851";
cljs.core.async.t10851.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10851");
});})(___$1))
;
cljs.core.async.t10851.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10851.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10841_SHARP_){return f1.call(null,(((p1__10841_SHARP_ == null))?null:self__.f.call(null,p1__10841_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10853){var self__ = this;
var _10853__$1 = this;return self__.meta10852;
});})(___$1))
;
cljs.core.async.t10851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10853,meta10852__$1){var self__ = this;
var _10853__$1 = this;return (new cljs.core.async.t10851(self__.fn1,self__._,self__.meta10849,self__.ch,self__.f,self__.map_LT_,meta10852__$1));
});})(___$1))
;
cljs.core.async.__GT_t10851 = ((function (___$1){
return (function __GT_t10851(fn1__$1,___$2,meta10849__$1,ch__$2,f__$2,map_LT___$2,meta10852){return (new cljs.core.async.t10851(fn1__$1,___$2,meta10849__$1,ch__$2,f__$2,map_LT___$2,meta10852));
});})(___$1))
;
}
return (new cljs.core.async.t10851(fn1,___$1,self__.meta10849,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4187__auto__ = ret;if(cljs.core.truth_(and__4187__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4187__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10850){var self__ = this;
var _10850__$1 = this;return self__.meta10849;
});
cljs.core.async.t10848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10850,meta10849__$1){var self__ = this;
var _10850__$1 = this;return (new cljs.core.async.t10848(self__.ch,self__.f,self__.map_LT_,meta10849__$1));
});
cljs.core.async.__GT_t10848 = (function __GT_t10848(ch__$1,f__$1,map_LT___$1,meta10849){return (new cljs.core.async.t10848(ch__$1,f__$1,map_LT___$1,meta10849));
});
}
return (new cljs.core.async.t10848(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10857 = (function (ch,f,map_GT_,meta10858){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10858 = meta10858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10857.cljs$lang$type = true;
cljs.core.async.t10857.cljs$lang$ctorStr = "cljs.core.async/t10857";
cljs.core.async.t10857.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10857");
});
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10859){var self__ = this;
var _10859__$1 = this;return self__.meta10858;
});
cljs.core.async.t10857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10859,meta10858__$1){var self__ = this;
var _10859__$1 = this;return (new cljs.core.async.t10857(self__.ch,self__.f,self__.map_GT_,meta10858__$1));
});
cljs.core.async.__GT_t10857 = (function __GT_t10857(ch__$1,f__$1,map_GT___$1,meta10858){return (new cljs.core.async.t10857(ch__$1,f__$1,map_GT___$1,meta10858));
});
}
return (new cljs.core.async.t10857(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10863 = (function (ch,p,filter_GT_,meta10864){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10864 = meta10864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10863.cljs$lang$type = true;
cljs.core.async.t10863.cljs$lang$ctorStr = "cljs.core.async/t10863";
cljs.core.async.t10863.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t10863");
});
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10865){var self__ = this;
var _10865__$1 = this;return self__.meta10864;
});
cljs.core.async.t10863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10865,meta10864__$1){var self__ = this;
var _10865__$1 = this;return (new cljs.core.async.t10863(self__.ch,self__.p,self__.filter_GT_,meta10864__$1));
});
cljs.core.async.__GT_t10863 = (function __GT_t10863(ch__$1,p__$1,filter_GT___$1,meta10864){return (new cljs.core.async.t10863(ch__$1,p__$1,filter_GT___$1,meta10864));
});
}
return (new cljs.core.async.t10863(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___10948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___10948,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___10948,out){
return (function (state_10927){var state_val_10928 = (state_10927[1]);if((state_val_10928 === 1))
{var state_10927__$1 = state_10927;var statearr_10929_10949 = state_10927__$1;(statearr_10929_10949[2] = null);
(statearr_10929_10949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 2))
{var state_10927__$1 = state_10927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10927__$1,4,ch);
} else
{if((state_val_10928 === 3))
{var inst_10925 = (state_10927[2]);var state_10927__$1 = state_10927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10927__$1,inst_10925);
} else
{if((state_val_10928 === 4))
{var inst_10909 = (state_10927[7]);var inst_10909__$1 = (state_10927[2]);var inst_10910 = (inst_10909__$1 == null);var state_10927__$1 = (function (){var statearr_10930 = state_10927;(statearr_10930[7] = inst_10909__$1);
return statearr_10930;
})();if(cljs.core.truth_(inst_10910))
{var statearr_10931_10950 = state_10927__$1;(statearr_10931_10950[1] = 5);
} else
{var statearr_10932_10951 = state_10927__$1;(statearr_10932_10951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 5))
{var inst_10912 = cljs.core.async.close_BANG_.call(null,out);var state_10927__$1 = state_10927;var statearr_10933_10952 = state_10927__$1;(statearr_10933_10952[2] = inst_10912);
(statearr_10933_10952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 6))
{var inst_10909 = (state_10927[7]);var inst_10914 = p.call(null,inst_10909);var state_10927__$1 = state_10927;if(cljs.core.truth_(inst_10914))
{var statearr_10934_10953 = state_10927__$1;(statearr_10934_10953[1] = 8);
} else
{var statearr_10935_10954 = state_10927__$1;(statearr_10935_10954[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 7))
{var inst_10923 = (state_10927[2]);var state_10927__$1 = state_10927;var statearr_10936_10955 = state_10927__$1;(statearr_10936_10955[2] = inst_10923);
(statearr_10936_10955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 8))
{var inst_10909 = (state_10927[7]);var state_10927__$1 = state_10927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10927__$1,11,out,inst_10909);
} else
{if((state_val_10928 === 9))
{var state_10927__$1 = state_10927;var statearr_10937_10956 = state_10927__$1;(statearr_10937_10956[2] = null);
(statearr_10937_10956[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 10))
{var inst_10920 = (state_10927[2]);var state_10927__$1 = (function (){var statearr_10938 = state_10927;(statearr_10938[8] = inst_10920);
return statearr_10938;
})();var statearr_10939_10957 = state_10927__$1;(statearr_10939_10957[2] = null);
(statearr_10939_10957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10928 === 11))
{var inst_10917 = (state_10927[2]);var state_10927__$1 = state_10927;var statearr_10940_10958 = state_10927__$1;(statearr_10940_10958[2] = inst_10917);
(statearr_10940_10958[1] = 10);
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
}
}
}
}
});})(c__7136__auto___10948,out))
;return ((function (switch__7121__auto__,c__7136__auto___10948,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_10944 = [null,null,null,null,null,null,null,null,null];(statearr_10944[0] = state_machine__7122__auto__);
(statearr_10944[1] = 1);
return statearr_10944;
});
var state_machine__7122__auto____1 = (function (state_10927){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_10927);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e10945){if((e10945 instanceof Object))
{var ex__7125__auto__ = e10945;var statearr_10946_10959 = state_10927;(statearr_10946_10959[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10960 = state_10927;
state_10927 = G__10960;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_10927){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_10927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___10948,out))
})();var state__7138__auto__ = (function (){var statearr_10947 = f__7137__auto__.call(null);(statearr_10947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___10948);
return statearr_10947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___10948,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto__){
return (function (state_11112){var state_val_11113 = (state_11112[1]);if((state_val_11113 === 1))
{var state_11112__$1 = state_11112;var statearr_11114_11151 = state_11112__$1;(statearr_11114_11151[2] = null);
(statearr_11114_11151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 2))
{var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11112__$1,4,in$);
} else
{if((state_val_11113 === 3))
{var inst_11110 = (state_11112[2]);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11112__$1,inst_11110);
} else
{if((state_val_11113 === 4))
{var inst_11058 = (state_11112[7]);var inst_11058__$1 = (state_11112[2]);var inst_11059 = (inst_11058__$1 == null);var state_11112__$1 = (function (){var statearr_11115 = state_11112;(statearr_11115[7] = inst_11058__$1);
return statearr_11115;
})();if(cljs.core.truth_(inst_11059))
{var statearr_11116_11152 = state_11112__$1;(statearr_11116_11152[1] = 5);
} else
{var statearr_11117_11153 = state_11112__$1;(statearr_11117_11153[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 5))
{var inst_11061 = cljs.core.async.close_BANG_.call(null,out);var state_11112__$1 = state_11112;var statearr_11118_11154 = state_11112__$1;(statearr_11118_11154[2] = inst_11061);
(statearr_11118_11154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 6))
{var inst_11058 = (state_11112[7]);var inst_11063 = f.call(null,inst_11058);var inst_11068 = cljs.core.seq.call(null,inst_11063);var inst_11069 = inst_11068;var inst_11070 = null;var inst_11071 = 0;var inst_11072 = 0;var state_11112__$1 = (function (){var statearr_11119 = state_11112;(statearr_11119[8] = inst_11069);
(statearr_11119[9] = inst_11071);
(statearr_11119[10] = inst_11070);
(statearr_11119[11] = inst_11072);
return statearr_11119;
})();var statearr_11120_11155 = state_11112__$1;(statearr_11120_11155[2] = null);
(statearr_11120_11155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 7))
{var inst_11108 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11121_11156 = state_11112__$1;(statearr_11121_11156[2] = inst_11108);
(statearr_11121_11156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 8))
{var inst_11071 = (state_11112[9]);var inst_11072 = (state_11112[11]);var inst_11074 = (inst_11072 < inst_11071);var inst_11075 = inst_11074;var state_11112__$1 = state_11112;if(cljs.core.truth_(inst_11075))
{var statearr_11122_11157 = state_11112__$1;(statearr_11122_11157[1] = 10);
} else
{var statearr_11123_11158 = state_11112__$1;(statearr_11123_11158[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 9))
{var inst_11105 = (state_11112[2]);var state_11112__$1 = (function (){var statearr_11124 = state_11112;(statearr_11124[12] = inst_11105);
return statearr_11124;
})();var statearr_11125_11159 = state_11112__$1;(statearr_11125_11159[2] = null);
(statearr_11125_11159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 10))
{var inst_11070 = (state_11112[10]);var inst_11072 = (state_11112[11]);var inst_11077 = cljs.core._nth.call(null,inst_11070,inst_11072);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11112__$1,13,out,inst_11077);
} else
{if((state_val_11113 === 11))
{var inst_11069 = (state_11112[8]);var inst_11083 = (state_11112[13]);var inst_11083__$1 = cljs.core.seq.call(null,inst_11069);var state_11112__$1 = (function (){var statearr_11129 = state_11112;(statearr_11129[13] = inst_11083__$1);
return statearr_11129;
})();if(inst_11083__$1)
{var statearr_11130_11160 = state_11112__$1;(statearr_11130_11160[1] = 14);
} else
{var statearr_11131_11161 = state_11112__$1;(statearr_11131_11161[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 12))
{var inst_11103 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11132_11162 = state_11112__$1;(statearr_11132_11162[2] = inst_11103);
(statearr_11132_11162[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 13))
{var inst_11069 = (state_11112[8]);var inst_11071 = (state_11112[9]);var inst_11070 = (state_11112[10]);var inst_11072 = (state_11112[11]);var inst_11079 = (state_11112[2]);var inst_11080 = (inst_11072 + 1);var tmp11126 = inst_11069;var tmp11127 = inst_11071;var tmp11128 = inst_11070;var inst_11069__$1 = tmp11126;var inst_11070__$1 = tmp11128;var inst_11071__$1 = tmp11127;var inst_11072__$1 = inst_11080;var state_11112__$1 = (function (){var statearr_11133 = state_11112;(statearr_11133[8] = inst_11069__$1);
(statearr_11133[9] = inst_11071__$1);
(statearr_11133[10] = inst_11070__$1);
(statearr_11133[11] = inst_11072__$1);
(statearr_11133[14] = inst_11079);
return statearr_11133;
})();var statearr_11134_11163 = state_11112__$1;(statearr_11134_11163[2] = null);
(statearr_11134_11163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 14))
{var inst_11083 = (state_11112[13]);var inst_11085 = cljs.core.chunked_seq_QMARK_.call(null,inst_11083);var state_11112__$1 = state_11112;if(inst_11085)
{var statearr_11135_11164 = state_11112__$1;(statearr_11135_11164[1] = 17);
} else
{var statearr_11136_11165 = state_11112__$1;(statearr_11136_11165[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 15))
{var state_11112__$1 = state_11112;var statearr_11137_11166 = state_11112__$1;(statearr_11137_11166[2] = null);
(statearr_11137_11166[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 16))
{var inst_11101 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11138_11167 = state_11112__$1;(statearr_11138_11167[2] = inst_11101);
(statearr_11138_11167[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 17))
{var inst_11083 = (state_11112[13]);var inst_11087 = cljs.core.chunk_first.call(null,inst_11083);var inst_11088 = cljs.core.chunk_rest.call(null,inst_11083);var inst_11089 = cljs.core.count.call(null,inst_11087);var inst_11069 = inst_11088;var inst_11070 = inst_11087;var inst_11071 = inst_11089;var inst_11072 = 0;var state_11112__$1 = (function (){var statearr_11139 = state_11112;(statearr_11139[8] = inst_11069);
(statearr_11139[9] = inst_11071);
(statearr_11139[10] = inst_11070);
(statearr_11139[11] = inst_11072);
return statearr_11139;
})();var statearr_11140_11168 = state_11112__$1;(statearr_11140_11168[2] = null);
(statearr_11140_11168[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 18))
{var inst_11083 = (state_11112[13]);var inst_11092 = cljs.core.first.call(null,inst_11083);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11112__$1,20,out,inst_11092);
} else
{if((state_val_11113 === 19))
{var inst_11098 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11141_11169 = state_11112__$1;(statearr_11141_11169[2] = inst_11098);
(statearr_11141_11169[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 20))
{var inst_11083 = (state_11112[13]);var inst_11094 = (state_11112[2]);var inst_11095 = cljs.core.next.call(null,inst_11083);var inst_11069 = inst_11095;var inst_11070 = null;var inst_11071 = 0;var inst_11072 = 0;var state_11112__$1 = (function (){var statearr_11142 = state_11112;(statearr_11142[8] = inst_11069);
(statearr_11142[15] = inst_11094);
(statearr_11142[9] = inst_11071);
(statearr_11142[10] = inst_11070);
(statearr_11142[11] = inst_11072);
return statearr_11142;
})();var statearr_11143_11170 = state_11112__$1;(statearr_11143_11170[2] = null);
(statearr_11143_11170[1] = 8);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7136__auto__))
;return ((function (switch__7121__auto__,c__7136__auto__){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11147[0] = state_machine__7122__auto__);
(statearr_11147[1] = 1);
return statearr_11147;
});
var state_machine__7122__auto____1 = (function (state_11112){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11112);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11148){if((e11148 instanceof Object))
{var ex__7125__auto__ = e11148;var statearr_11149_11171 = state_11112;(statearr_11149_11171[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11172 = state_11112;
state_11112 = G__11172;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11112){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11150 = f__7137__auto__.call(null);(statearr_11150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);
return c__7136__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7136__auto___11253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11253){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11253){
return (function (state_11232){var state_val_11233 = (state_11232[1]);if((state_val_11233 === 1))
{var state_11232__$1 = state_11232;var statearr_11234_11254 = state_11232__$1;(statearr_11234_11254[2] = null);
(statearr_11234_11254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 2))
{var state_11232__$1 = state_11232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11232__$1,4,from);
} else
{if((state_val_11233 === 3))
{var inst_11230 = (state_11232[2]);var state_11232__$1 = state_11232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11232__$1,inst_11230);
} else
{if((state_val_11233 === 4))
{var inst_11215 = (state_11232[7]);var inst_11215__$1 = (state_11232[2]);var inst_11216 = (inst_11215__$1 == null);var state_11232__$1 = (function (){var statearr_11235 = state_11232;(statearr_11235[7] = inst_11215__$1);
return statearr_11235;
})();if(cljs.core.truth_(inst_11216))
{var statearr_11236_11255 = state_11232__$1;(statearr_11236_11255[1] = 5);
} else
{var statearr_11237_11256 = state_11232__$1;(statearr_11237_11256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 5))
{var state_11232__$1 = state_11232;if(cljs.core.truth_(close_QMARK_))
{var statearr_11238_11257 = state_11232__$1;(statearr_11238_11257[1] = 8);
} else
{var statearr_11239_11258 = state_11232__$1;(statearr_11239_11258[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 6))
{var inst_11215 = (state_11232[7]);var state_11232__$1 = state_11232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11232__$1,11,to,inst_11215);
} else
{if((state_val_11233 === 7))
{var inst_11228 = (state_11232[2]);var state_11232__$1 = state_11232;var statearr_11240_11259 = state_11232__$1;(statearr_11240_11259[2] = inst_11228);
(statearr_11240_11259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 8))
{var inst_11219 = cljs.core.async.close_BANG_.call(null,to);var state_11232__$1 = state_11232;var statearr_11241_11260 = state_11232__$1;(statearr_11241_11260[2] = inst_11219);
(statearr_11241_11260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 9))
{var state_11232__$1 = state_11232;var statearr_11242_11261 = state_11232__$1;(statearr_11242_11261[2] = null);
(statearr_11242_11261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 10))
{var inst_11222 = (state_11232[2]);var state_11232__$1 = state_11232;var statearr_11243_11262 = state_11232__$1;(statearr_11243_11262[2] = inst_11222);
(statearr_11243_11262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11233 === 11))
{var inst_11225 = (state_11232[2]);var state_11232__$1 = (function (){var statearr_11244 = state_11232;(statearr_11244[8] = inst_11225);
return statearr_11244;
})();var statearr_11245_11263 = state_11232__$1;(statearr_11245_11263[2] = null);
(statearr_11245_11263[1] = 2);
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
}
}
}
}
});})(c__7136__auto___11253))
;return ((function (switch__7121__auto__,c__7136__auto___11253){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11249 = [null,null,null,null,null,null,null,null,null];(statearr_11249[0] = state_machine__7122__auto__);
(statearr_11249[1] = 1);
return statearr_11249;
});
var state_machine__7122__auto____1 = (function (state_11232){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11232);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11250){if((e11250 instanceof Object))
{var ex__7125__auto__ = e11250;var statearr_11251_11264 = state_11232;(statearr_11251_11264[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11265 = state_11232;
state_11232 = G__11265;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11232){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11253))
})();var state__7138__auto__ = (function (){var statearr_11252 = f__7137__auto__.call(null);(statearr_11252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11253);
return statearr_11252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11253))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7136__auto___11352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11352,tc,fc){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11352,tc,fc){
return (function (state_11330){var state_val_11331 = (state_11330[1]);if((state_val_11331 === 1))
{var state_11330__$1 = state_11330;var statearr_11332_11353 = state_11330__$1;(statearr_11332_11353[2] = null);
(statearr_11332_11353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 2))
{var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11330__$1,4,ch);
} else
{if((state_val_11331 === 3))
{var inst_11328 = (state_11330[2]);var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11330__$1,inst_11328);
} else
{if((state_val_11331 === 4))
{var inst_11311 = (state_11330[7]);var inst_11311__$1 = (state_11330[2]);var inst_11312 = (inst_11311__$1 == null);var state_11330__$1 = (function (){var statearr_11333 = state_11330;(statearr_11333[7] = inst_11311__$1);
return statearr_11333;
})();if(cljs.core.truth_(inst_11312))
{var statearr_11334_11354 = state_11330__$1;(statearr_11334_11354[1] = 5);
} else
{var statearr_11335_11355 = state_11330__$1;(statearr_11335_11355[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 5))
{var inst_11314 = cljs.core.async.close_BANG_.call(null,tc);var inst_11315 = cljs.core.async.close_BANG_.call(null,fc);var state_11330__$1 = (function (){var statearr_11336 = state_11330;(statearr_11336[8] = inst_11314);
return statearr_11336;
})();var statearr_11337_11356 = state_11330__$1;(statearr_11337_11356[2] = inst_11315);
(statearr_11337_11356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 6))
{var inst_11311 = (state_11330[7]);var inst_11317 = p.call(null,inst_11311);var state_11330__$1 = state_11330;if(cljs.core.truth_(inst_11317))
{var statearr_11338_11357 = state_11330__$1;(statearr_11338_11357[1] = 9);
} else
{var statearr_11339_11358 = state_11330__$1;(statearr_11339_11358[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 7))
{var inst_11326 = (state_11330[2]);var state_11330__$1 = state_11330;var statearr_11340_11359 = state_11330__$1;(statearr_11340_11359[2] = inst_11326);
(statearr_11340_11359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 8))
{var inst_11323 = (state_11330[2]);var state_11330__$1 = (function (){var statearr_11341 = state_11330;(statearr_11341[9] = inst_11323);
return statearr_11341;
})();var statearr_11342_11360 = state_11330__$1;(statearr_11342_11360[2] = null);
(statearr_11342_11360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 9))
{var state_11330__$1 = state_11330;var statearr_11343_11361 = state_11330__$1;(statearr_11343_11361[2] = tc);
(statearr_11343_11361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 10))
{var state_11330__$1 = state_11330;var statearr_11344_11362 = state_11330__$1;(statearr_11344_11362[2] = fc);
(statearr_11344_11362[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11331 === 11))
{var inst_11311 = (state_11330[7]);var inst_11321 = (state_11330[2]);var state_11330__$1 = state_11330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11330__$1,8,inst_11321,inst_11311);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7136__auto___11352,tc,fc))
;return ((function (switch__7121__auto__,c__7136__auto___11352,tc,fc){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11348 = [null,null,null,null,null,null,null,null,null,null];(statearr_11348[0] = state_machine__7122__auto__);
(statearr_11348[1] = 1);
return statearr_11348;
});
var state_machine__7122__auto____1 = (function (state_11330){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11330);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object))
{var ex__7125__auto__ = e11349;var statearr_11350_11363 = state_11330;(statearr_11350_11363[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11364 = state_11330;
state_11330 = G__11364;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11330){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11352,tc,fc))
})();var state__7138__auto__ = (function (){var statearr_11351 = f__7137__auto__.call(null);(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11352);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11352,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto__){
return (function (state_11411){var state_val_11412 = (state_11411[1]);if((state_val_11412 === 7))
{var inst_11407 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11413_11429 = state_11411__$1;(statearr_11413_11429[2] = inst_11407);
(statearr_11413_11429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 6))
{var inst_11400 = (state_11411[7]);var inst_11397 = (state_11411[8]);var inst_11404 = f.call(null,inst_11397,inst_11400);var inst_11397__$1 = inst_11404;var state_11411__$1 = (function (){var statearr_11414 = state_11411;(statearr_11414[8] = inst_11397__$1);
return statearr_11414;
})();var statearr_11415_11430 = state_11411__$1;(statearr_11415_11430[2] = null);
(statearr_11415_11430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 5))
{var inst_11397 = (state_11411[8]);var state_11411__$1 = state_11411;var statearr_11416_11431 = state_11411__$1;(statearr_11416_11431[2] = inst_11397);
(statearr_11416_11431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 4))
{var inst_11400 = (state_11411[7]);var inst_11400__$1 = (state_11411[2]);var inst_11401 = (inst_11400__$1 == null);var state_11411__$1 = (function (){var statearr_11417 = state_11411;(statearr_11417[7] = inst_11400__$1);
return statearr_11417;
})();if(cljs.core.truth_(inst_11401))
{var statearr_11418_11432 = state_11411__$1;(statearr_11418_11432[1] = 5);
} else
{var statearr_11419_11433 = state_11411__$1;(statearr_11419_11433[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 3))
{var inst_11409 = (state_11411[2]);var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11411__$1,inst_11409);
} else
{if((state_val_11412 === 2))
{var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11411__$1,4,ch);
} else
{if((state_val_11412 === 1))
{var inst_11397 = init;var state_11411__$1 = (function (){var statearr_11420 = state_11411;(statearr_11420[8] = inst_11397);
return statearr_11420;
})();var statearr_11421_11434 = state_11411__$1;(statearr_11421_11434[2] = null);
(statearr_11421_11434[1] = 2);
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
});})(c__7136__auto__))
;return ((function (switch__7121__auto__,c__7136__auto__){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11425 = [null,null,null,null,null,null,null,null,null];(statearr_11425[0] = state_machine__7122__auto__);
(statearr_11425[1] = 1);
return statearr_11425;
});
var state_machine__7122__auto____1 = (function (state_11411){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11411);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11426){if((e11426 instanceof Object))
{var ex__7125__auto__ = e11426;var statearr_11427_11435 = state_11411;(statearr_11427_11435[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11436 = state_11411;
state_11411 = G__11436;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11428 = f__7137__auto__.call(null);(statearr_11428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);
return c__7136__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto__){
return (function (state_11498){var state_val_11499 = (state_11498[1]);if((state_val_11499 === 1))
{var inst_11478 = cljs.core.seq.call(null,coll);var inst_11479 = inst_11478;var state_11498__$1 = (function (){var statearr_11500 = state_11498;(statearr_11500[7] = inst_11479);
return statearr_11500;
})();var statearr_11501_11519 = state_11498__$1;(statearr_11501_11519[2] = null);
(statearr_11501_11519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 2))
{var inst_11479 = (state_11498[7]);var state_11498__$1 = state_11498;if(cljs.core.truth_(inst_11479))
{var statearr_11502_11520 = state_11498__$1;(statearr_11502_11520[1] = 4);
} else
{var statearr_11503_11521 = state_11498__$1;(statearr_11503_11521[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 3))
{var inst_11496 = (state_11498[2]);var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11498__$1,inst_11496);
} else
{if((state_val_11499 === 4))
{var inst_11479 = (state_11498[7]);var inst_11482 = cljs.core.first.call(null,inst_11479);var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11498__$1,7,ch,inst_11482);
} else
{if((state_val_11499 === 5))
{var state_11498__$1 = state_11498;if(cljs.core.truth_(close_QMARK_))
{var statearr_11504_11522 = state_11498__$1;(statearr_11504_11522[1] = 8);
} else
{var statearr_11505_11523 = state_11498__$1;(statearr_11505_11523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 6))
{var inst_11494 = (state_11498[2]);var state_11498__$1 = state_11498;var statearr_11506_11524 = state_11498__$1;(statearr_11506_11524[2] = inst_11494);
(statearr_11506_11524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 7))
{var inst_11479 = (state_11498[7]);var inst_11484 = (state_11498[2]);var inst_11485 = cljs.core.next.call(null,inst_11479);var inst_11479__$1 = inst_11485;var state_11498__$1 = (function (){var statearr_11507 = state_11498;(statearr_11507[7] = inst_11479__$1);
(statearr_11507[8] = inst_11484);
return statearr_11507;
})();var statearr_11508_11525 = state_11498__$1;(statearr_11508_11525[2] = null);
(statearr_11508_11525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 8))
{var inst_11489 = cljs.core.async.close_BANG_.call(null,ch);var state_11498__$1 = state_11498;var statearr_11509_11526 = state_11498__$1;(statearr_11509_11526[2] = inst_11489);
(statearr_11509_11526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 9))
{var state_11498__$1 = state_11498;var statearr_11510_11527 = state_11498__$1;(statearr_11510_11527[2] = null);
(statearr_11510_11527[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 10))
{var inst_11492 = (state_11498[2]);var state_11498__$1 = state_11498;var statearr_11511_11528 = state_11498__$1;(statearr_11511_11528[2] = inst_11492);
(statearr_11511_11528[1] = 6);
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
}
}
}
});})(c__7136__auto__))
;return ((function (switch__7121__auto__,c__7136__auto__){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11515 = [null,null,null,null,null,null,null,null,null];(statearr_11515[0] = state_machine__7122__auto__);
(statearr_11515[1] = 1);
return statearr_11515;
});
var state_machine__7122__auto____1 = (function (state_11498){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11498);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11516){if((e11516 instanceof Object))
{var ex__7125__auto__ = e11516;var statearr_11517_11529 = state_11498;(statearr_11517_11529[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11530 = state_11498;
state_11498 = G__11530;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11498){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11518 = f__7137__auto__.call(null);(statearr_11518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);
return c__7136__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11532 = {};return obj11532;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4187__auto__ = _;if(and__4187__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4187__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4826__auto__ = (((_ == null))?null:_);return (function (){var or__4199__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11534 = {};return obj11534;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11758 = (function (cs,ch,mult,meta11759){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11759 = meta11759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11758.cljs$lang$type = true;
cljs.core.async.t11758.cljs$lang$ctorStr = "cljs.core.async/t11758";
cljs.core.async.t11758.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11758");
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11758.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11760){var self__ = this;
var _11760__$1 = this;return self__.meta11759;
});})(cs))
;
cljs.core.async.t11758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11760,meta11759__$1){var self__ = this;
var _11760__$1 = this;return (new cljs.core.async.t11758(self__.cs,self__.ch,self__.mult,meta11759__$1));
});})(cs))
;
cljs.core.async.__GT_t11758 = ((function (cs){
return (function __GT_t11758(cs__$1,ch__$1,mult__$1,meta11759){return (new cljs.core.async.t11758(cs__$1,ch__$1,mult__$1,meta11759));
});})(cs))
;
}
return (new cljs.core.async.t11758(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7136__auto___11981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11981,cs,m,dchan,dctr,done){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11981,cs,m,dchan,dctr,done){
return (function (state_11895){var state_val_11896 = (state_11895[1]);if((state_val_11896 === 32))
{var inst_11839 = (state_11895[7]);var inst_11763 = (state_11895[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11895,31,Object,null,30);var inst_11846 = cljs.core.async.put_BANG_.call(null,inst_11839,inst_11763,done);var state_11895__$1 = state_11895;var statearr_11897_11982 = state_11895__$1;(statearr_11897_11982[2] = inst_11846);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 1))
{var state_11895__$1 = state_11895;var statearr_11898_11983 = state_11895__$1;(statearr_11898_11983[2] = null);
(statearr_11898_11983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 33))
{var inst_11852 = (state_11895[9]);var inst_11854 = cljs.core.chunked_seq_QMARK_.call(null,inst_11852);var state_11895__$1 = state_11895;if(inst_11854)
{var statearr_11899_11984 = state_11895__$1;(statearr_11899_11984[1] = 36);
} else
{var statearr_11900_11985 = state_11895__$1;(statearr_11900_11985[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 2))
{var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,4,ch);
} else
{if((state_val_11896 === 34))
{var state_11895__$1 = state_11895;var statearr_11901_11986 = state_11895__$1;(statearr_11901_11986[2] = null);
(statearr_11901_11986[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 3))
{var inst_11893 = (state_11895[2]);var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11895__$1,inst_11893);
} else
{if((state_val_11896 === 35))
{var inst_11877 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11902_11987 = state_11895__$1;(statearr_11902_11987[2] = inst_11877);
(statearr_11902_11987[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 4))
{var inst_11763 = (state_11895[8]);var inst_11763__$1 = (state_11895[2]);var inst_11764 = (inst_11763__$1 == null);var state_11895__$1 = (function (){var statearr_11903 = state_11895;(statearr_11903[8] = inst_11763__$1);
return statearr_11903;
})();if(cljs.core.truth_(inst_11764))
{var statearr_11904_11988 = state_11895__$1;(statearr_11904_11988[1] = 5);
} else
{var statearr_11905_11989 = state_11895__$1;(statearr_11905_11989[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 36))
{var inst_11852 = (state_11895[9]);var inst_11856 = cljs.core.chunk_first.call(null,inst_11852);var inst_11857 = cljs.core.chunk_rest.call(null,inst_11852);var inst_11858 = cljs.core.count.call(null,inst_11856);var inst_11831 = inst_11857;var inst_11832 = inst_11856;var inst_11833 = inst_11858;var inst_11834 = 0;var state_11895__$1 = (function (){var statearr_11906 = state_11895;(statearr_11906[10] = inst_11834);
(statearr_11906[11] = inst_11831);
(statearr_11906[12] = inst_11832);
(statearr_11906[13] = inst_11833);
return statearr_11906;
})();var statearr_11907_11990 = state_11895__$1;(statearr_11907_11990[2] = null);
(statearr_11907_11990[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 5))
{var inst_11770 = cljs.core.deref.call(null,cs);var inst_11771 = cljs.core.seq.call(null,inst_11770);var inst_11772 = inst_11771;var inst_11773 = null;var inst_11774 = 0;var inst_11775 = 0;var state_11895__$1 = (function (){var statearr_11908 = state_11895;(statearr_11908[14] = inst_11775);
(statearr_11908[15] = inst_11774);
(statearr_11908[16] = inst_11773);
(statearr_11908[17] = inst_11772);
return statearr_11908;
})();var statearr_11909_11991 = state_11895__$1;(statearr_11909_11991[2] = null);
(statearr_11909_11991[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 37))
{var inst_11852 = (state_11895[9]);var inst_11861 = cljs.core.first.call(null,inst_11852);var state_11895__$1 = (function (){var statearr_11910 = state_11895;(statearr_11910[18] = inst_11861);
return statearr_11910;
})();var statearr_11911_11992 = state_11895__$1;(statearr_11911_11992[2] = null);
(statearr_11911_11992[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 6))
{var inst_11823 = (state_11895[19]);var inst_11822 = cljs.core.deref.call(null,cs);var inst_11823__$1 = cljs.core.keys.call(null,inst_11822);var inst_11824 = cljs.core.count.call(null,inst_11823__$1);var inst_11825 = cljs.core.reset_BANG_.call(null,dctr,inst_11824);var inst_11830 = cljs.core.seq.call(null,inst_11823__$1);var inst_11831 = inst_11830;var inst_11832 = null;var inst_11833 = 0;var inst_11834 = 0;var state_11895__$1 = (function (){var statearr_11912 = state_11895;(statearr_11912[19] = inst_11823__$1);
(statearr_11912[20] = inst_11825);
(statearr_11912[10] = inst_11834);
(statearr_11912[11] = inst_11831);
(statearr_11912[12] = inst_11832);
(statearr_11912[13] = inst_11833);
return statearr_11912;
})();var statearr_11913_11993 = state_11895__$1;(statearr_11913_11993[2] = null);
(statearr_11913_11993[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 38))
{var inst_11874 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11914_11994 = state_11895__$1;(statearr_11914_11994[2] = inst_11874);
(statearr_11914_11994[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 7))
{var inst_11891 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11915_11995 = state_11895__$1;(statearr_11915_11995[2] = inst_11891);
(statearr_11915_11995[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 39))
{var inst_11852 = (state_11895[9]);var inst_11870 = (state_11895[2]);var inst_11871 = cljs.core.next.call(null,inst_11852);var inst_11831 = inst_11871;var inst_11832 = null;var inst_11833 = 0;var inst_11834 = 0;var state_11895__$1 = (function (){var statearr_11916 = state_11895;(statearr_11916[10] = inst_11834);
(statearr_11916[11] = inst_11831);
(statearr_11916[12] = inst_11832);
(statearr_11916[13] = inst_11833);
(statearr_11916[21] = inst_11870);
return statearr_11916;
})();var statearr_11917_11996 = state_11895__$1;(statearr_11917_11996[2] = null);
(statearr_11917_11996[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 8))
{var inst_11775 = (state_11895[14]);var inst_11774 = (state_11895[15]);var inst_11777 = (inst_11775 < inst_11774);var inst_11778 = inst_11777;var state_11895__$1 = state_11895;if(cljs.core.truth_(inst_11778))
{var statearr_11918_11997 = state_11895__$1;(statearr_11918_11997[1] = 10);
} else
{var statearr_11919_11998 = state_11895__$1;(statearr_11919_11998[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 40))
{var inst_11861 = (state_11895[18]);var inst_11862 = (state_11895[2]);var inst_11863 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11864 = cljs.core.async.untap_STAR_.call(null,m,inst_11861);var state_11895__$1 = (function (){var statearr_11920 = state_11895;(statearr_11920[22] = inst_11862);
(statearr_11920[23] = inst_11863);
return statearr_11920;
})();var statearr_11921_11999 = state_11895__$1;(statearr_11921_11999[2] = inst_11864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 9))
{var inst_11820 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11922_12000 = state_11895__$1;(statearr_11922_12000[2] = inst_11820);
(statearr_11922_12000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 41))
{var inst_11861 = (state_11895[18]);var inst_11763 = (state_11895[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11895,40,Object,null,39);var inst_11868 = cljs.core.async.put_BANG_.call(null,inst_11861,inst_11763,done);var state_11895__$1 = state_11895;var statearr_11923_12001 = state_11895__$1;(statearr_11923_12001[2] = inst_11868);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 10))
{var inst_11775 = (state_11895[14]);var inst_11773 = (state_11895[16]);var inst_11781 = cljs.core._nth.call(null,inst_11773,inst_11775);var inst_11782 = cljs.core.nth.call(null,inst_11781,0,null);var inst_11783 = cljs.core.nth.call(null,inst_11781,1,null);var state_11895__$1 = (function (){var statearr_11924 = state_11895;(statearr_11924[24] = inst_11782);
return statearr_11924;
})();if(cljs.core.truth_(inst_11783))
{var statearr_11925_12002 = state_11895__$1;(statearr_11925_12002[1] = 13);
} else
{var statearr_11926_12003 = state_11895__$1;(statearr_11926_12003[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 42))
{var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,45,dchan);
} else
{if((state_val_11896 === 11))
{var inst_11772 = (state_11895[17]);var inst_11792 = (state_11895[25]);var inst_11792__$1 = cljs.core.seq.call(null,inst_11772);var state_11895__$1 = (function (){var statearr_11927 = state_11895;(statearr_11927[25] = inst_11792__$1);
return statearr_11927;
})();if(inst_11792__$1)
{var statearr_11928_12004 = state_11895__$1;(statearr_11928_12004[1] = 16);
} else
{var statearr_11929_12005 = state_11895__$1;(statearr_11929_12005[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 43))
{var state_11895__$1 = state_11895;var statearr_11930_12006 = state_11895__$1;(statearr_11930_12006[2] = null);
(statearr_11930_12006[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 12))
{var inst_11818 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11931_12007 = state_11895__$1;(statearr_11931_12007[2] = inst_11818);
(statearr_11931_12007[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 44))
{var inst_11888 = (state_11895[2]);var state_11895__$1 = (function (){var statearr_11932 = state_11895;(statearr_11932[26] = inst_11888);
return statearr_11932;
})();var statearr_11933_12008 = state_11895__$1;(statearr_11933_12008[2] = null);
(statearr_11933_12008[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 13))
{var inst_11782 = (state_11895[24]);var inst_11785 = cljs.core.async.close_BANG_.call(null,inst_11782);var state_11895__$1 = state_11895;var statearr_11934_12009 = state_11895__$1;(statearr_11934_12009[2] = inst_11785);
(statearr_11934_12009[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 45))
{var inst_11885 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11938_12010 = state_11895__$1;(statearr_11938_12010[2] = inst_11885);
(statearr_11938_12010[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 14))
{var state_11895__$1 = state_11895;var statearr_11939_12011 = state_11895__$1;(statearr_11939_12011[2] = null);
(statearr_11939_12011[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 15))
{var inst_11775 = (state_11895[14]);var inst_11774 = (state_11895[15]);var inst_11773 = (state_11895[16]);var inst_11772 = (state_11895[17]);var inst_11788 = (state_11895[2]);var inst_11789 = (inst_11775 + 1);var tmp11935 = inst_11774;var tmp11936 = inst_11773;var tmp11937 = inst_11772;var inst_11772__$1 = tmp11937;var inst_11773__$1 = tmp11936;var inst_11774__$1 = tmp11935;var inst_11775__$1 = inst_11789;var state_11895__$1 = (function (){var statearr_11940 = state_11895;(statearr_11940[14] = inst_11775__$1);
(statearr_11940[15] = inst_11774__$1);
(statearr_11940[16] = inst_11773__$1);
(statearr_11940[17] = inst_11772__$1);
(statearr_11940[27] = inst_11788);
return statearr_11940;
})();var statearr_11941_12012 = state_11895__$1;(statearr_11941_12012[2] = null);
(statearr_11941_12012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 16))
{var inst_11792 = (state_11895[25]);var inst_11794 = cljs.core.chunked_seq_QMARK_.call(null,inst_11792);var state_11895__$1 = state_11895;if(inst_11794)
{var statearr_11942_12013 = state_11895__$1;(statearr_11942_12013[1] = 19);
} else
{var statearr_11943_12014 = state_11895__$1;(statearr_11943_12014[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 17))
{var state_11895__$1 = state_11895;var statearr_11944_12015 = state_11895__$1;(statearr_11944_12015[2] = null);
(statearr_11944_12015[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 18))
{var inst_11816 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11945_12016 = state_11895__$1;(statearr_11945_12016[2] = inst_11816);
(statearr_11945_12016[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 19))
{var inst_11792 = (state_11895[25]);var inst_11796 = cljs.core.chunk_first.call(null,inst_11792);var inst_11797 = cljs.core.chunk_rest.call(null,inst_11792);var inst_11798 = cljs.core.count.call(null,inst_11796);var inst_11772 = inst_11797;var inst_11773 = inst_11796;var inst_11774 = inst_11798;var inst_11775 = 0;var state_11895__$1 = (function (){var statearr_11946 = state_11895;(statearr_11946[14] = inst_11775);
(statearr_11946[15] = inst_11774);
(statearr_11946[16] = inst_11773);
(statearr_11946[17] = inst_11772);
return statearr_11946;
})();var statearr_11947_12017 = state_11895__$1;(statearr_11947_12017[2] = null);
(statearr_11947_12017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 20))
{var inst_11792 = (state_11895[25]);var inst_11802 = cljs.core.first.call(null,inst_11792);var inst_11803 = cljs.core.nth.call(null,inst_11802,0,null);var inst_11804 = cljs.core.nth.call(null,inst_11802,1,null);var state_11895__$1 = (function (){var statearr_11948 = state_11895;(statearr_11948[28] = inst_11803);
return statearr_11948;
})();if(cljs.core.truth_(inst_11804))
{var statearr_11949_12018 = state_11895__$1;(statearr_11949_12018[1] = 22);
} else
{var statearr_11950_12019 = state_11895__$1;(statearr_11950_12019[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 21))
{var inst_11813 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11951_12020 = state_11895__$1;(statearr_11951_12020[2] = inst_11813);
(statearr_11951_12020[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 22))
{var inst_11803 = (state_11895[28]);var inst_11806 = cljs.core.async.close_BANG_.call(null,inst_11803);var state_11895__$1 = state_11895;var statearr_11952_12021 = state_11895__$1;(statearr_11952_12021[2] = inst_11806);
(statearr_11952_12021[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 23))
{var state_11895__$1 = state_11895;var statearr_11953_12022 = state_11895__$1;(statearr_11953_12022[2] = null);
(statearr_11953_12022[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 24))
{var inst_11792 = (state_11895[25]);var inst_11809 = (state_11895[2]);var inst_11810 = cljs.core.next.call(null,inst_11792);var inst_11772 = inst_11810;var inst_11773 = null;var inst_11774 = 0;var inst_11775 = 0;var state_11895__$1 = (function (){var statearr_11954 = state_11895;(statearr_11954[14] = inst_11775);
(statearr_11954[15] = inst_11774);
(statearr_11954[16] = inst_11773);
(statearr_11954[17] = inst_11772);
(statearr_11954[29] = inst_11809);
return statearr_11954;
})();var statearr_11955_12023 = state_11895__$1;(statearr_11955_12023[2] = null);
(statearr_11955_12023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 25))
{var inst_11834 = (state_11895[10]);var inst_11833 = (state_11895[13]);var inst_11836 = (inst_11834 < inst_11833);var inst_11837 = inst_11836;var state_11895__$1 = state_11895;if(cljs.core.truth_(inst_11837))
{var statearr_11956_12024 = state_11895__$1;(statearr_11956_12024[1] = 27);
} else
{var statearr_11957_12025 = state_11895__$1;(statearr_11957_12025[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 26))
{var inst_11823 = (state_11895[19]);var inst_11881 = (state_11895[2]);var inst_11882 = cljs.core.seq.call(null,inst_11823);var state_11895__$1 = (function (){var statearr_11958 = state_11895;(statearr_11958[30] = inst_11881);
return statearr_11958;
})();if(inst_11882)
{var statearr_11959_12026 = state_11895__$1;(statearr_11959_12026[1] = 42);
} else
{var statearr_11960_12027 = state_11895__$1;(statearr_11960_12027[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 27))
{var inst_11834 = (state_11895[10]);var inst_11832 = (state_11895[12]);var inst_11839 = cljs.core._nth.call(null,inst_11832,inst_11834);var state_11895__$1 = (function (){var statearr_11961 = state_11895;(statearr_11961[7] = inst_11839);
return statearr_11961;
})();var statearr_11962_12028 = state_11895__$1;(statearr_11962_12028[2] = null);
(statearr_11962_12028[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 28))
{var inst_11852 = (state_11895[9]);var inst_11831 = (state_11895[11]);var inst_11852__$1 = cljs.core.seq.call(null,inst_11831);var state_11895__$1 = (function (){var statearr_11966 = state_11895;(statearr_11966[9] = inst_11852__$1);
return statearr_11966;
})();if(inst_11852__$1)
{var statearr_11967_12029 = state_11895__$1;(statearr_11967_12029[1] = 33);
} else
{var statearr_11968_12030 = state_11895__$1;(statearr_11968_12030[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 29))
{var inst_11879 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11969_12031 = state_11895__$1;(statearr_11969_12031[2] = inst_11879);
(statearr_11969_12031[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 30))
{var inst_11834 = (state_11895[10]);var inst_11831 = (state_11895[11]);var inst_11832 = (state_11895[12]);var inst_11833 = (state_11895[13]);var inst_11848 = (state_11895[2]);var inst_11849 = (inst_11834 + 1);var tmp11963 = inst_11831;var tmp11964 = inst_11832;var tmp11965 = inst_11833;var inst_11831__$1 = tmp11963;var inst_11832__$1 = tmp11964;var inst_11833__$1 = tmp11965;var inst_11834__$1 = inst_11849;var state_11895__$1 = (function (){var statearr_11970 = state_11895;(statearr_11970[10] = inst_11834__$1);
(statearr_11970[31] = inst_11848);
(statearr_11970[11] = inst_11831__$1);
(statearr_11970[12] = inst_11832__$1);
(statearr_11970[13] = inst_11833__$1);
return statearr_11970;
})();var statearr_11971_12032 = state_11895__$1;(statearr_11971_12032[2] = null);
(statearr_11971_12032[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 31))
{var inst_11839 = (state_11895[7]);var inst_11840 = (state_11895[2]);var inst_11841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11842 = cljs.core.async.untap_STAR_.call(null,m,inst_11839);var state_11895__$1 = (function (){var statearr_11972 = state_11895;(statearr_11972[32] = inst_11841);
(statearr_11972[33] = inst_11840);
return statearr_11972;
})();var statearr_11973_12033 = state_11895__$1;(statearr_11973_12033[2] = inst_11842);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7136__auto___11981,cs,m,dchan,dctr,done))
;return ((function (switch__7121__auto__,c__7136__auto___11981,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11977[0] = state_machine__7122__auto__);
(statearr_11977[1] = 1);
return statearr_11977;
});
var state_machine__7122__auto____1 = (function (state_11895){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11895);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11978){if((e11978 instanceof Object))
{var ex__7125__auto__ = e11978;var statearr_11979_12034 = state_11895;(statearr_11979_12034[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12035 = state_11895;
state_11895 = G__12035;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11895){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11981,cs,m,dchan,dctr,done))
})();var state__7138__auto__ = (function (){var statearr_11980 = f__7137__auto__.call(null);(statearr_11980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11981);
return statearr_11980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11981,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12037 = {};return obj12037;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4187__auto__ = m;if(and__4187__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4826__auto__ = (((m == null))?null:m);return (function (){var or__4199__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12147 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12148){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12148 = meta12148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12147.cljs$lang$type = true;
cljs.core.async.t12147.cljs$lang$ctorStr = "cljs.core.async/t12147";
cljs.core.async.t12147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t12147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12149){var self__ = this;
var _12149__$1 = this;return self__.meta12148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12149,meta12148__$1){var self__ = this;
var _12149__$1 = this;return (new cljs.core.async.t12147(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12147(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12148){return (new cljs.core.async.t12147(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12147(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7136__auto___12256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12214){var state_val_12215 = (state_12214[1]);if((state_val_12215 === 1))
{var inst_12153 = (state_12214[7]);var inst_12153__$1 = calc_state.call(null);var inst_12154 = cljs.core.seq_QMARK_.call(null,inst_12153__$1);var state_12214__$1 = (function (){var statearr_12216 = state_12214;(statearr_12216[7] = inst_12153__$1);
return statearr_12216;
})();if(inst_12154)
{var statearr_12217_12257 = state_12214__$1;(statearr_12217_12257[1] = 2);
} else
{var statearr_12218_12258 = state_12214__$1;(statearr_12218_12258[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 2))
{var inst_12153 = (state_12214[7]);var inst_12156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12153);var state_12214__$1 = state_12214;var statearr_12219_12259 = state_12214__$1;(statearr_12219_12259[2] = inst_12156);
(statearr_12219_12259[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 3))
{var inst_12153 = (state_12214[7]);var state_12214__$1 = state_12214;var statearr_12220_12260 = state_12214__$1;(statearr_12220_12260[2] = inst_12153);
(statearr_12220_12260[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 4))
{var inst_12153 = (state_12214[7]);var inst_12159 = (state_12214[2]);var inst_12160 = cljs.core.get.call(null,inst_12159,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12161 = cljs.core.get.call(null,inst_12159,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12162 = cljs.core.get.call(null,inst_12159,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12163 = inst_12153;var state_12214__$1 = (function (){var statearr_12221 = state_12214;(statearr_12221[8] = inst_12163);
(statearr_12221[9] = inst_12160);
(statearr_12221[10] = inst_12162);
(statearr_12221[11] = inst_12161);
return statearr_12221;
})();var statearr_12222_12261 = state_12214__$1;(statearr_12222_12261[2] = null);
(statearr_12222_12261[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 5))
{var inst_12163 = (state_12214[8]);var inst_12166 = cljs.core.seq_QMARK_.call(null,inst_12163);var state_12214__$1 = state_12214;if(inst_12166)
{var statearr_12223_12262 = state_12214__$1;(statearr_12223_12262[1] = 7);
} else
{var statearr_12224_12263 = state_12214__$1;(statearr_12224_12263[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 6))
{var inst_12212 = (state_12214[2]);var state_12214__$1 = state_12214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12214__$1,inst_12212);
} else
{if((state_val_12215 === 7))
{var inst_12163 = (state_12214[8]);var inst_12168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12163);var state_12214__$1 = state_12214;var statearr_12225_12264 = state_12214__$1;(statearr_12225_12264[2] = inst_12168);
(statearr_12225_12264[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 8))
{var inst_12163 = (state_12214[8]);var state_12214__$1 = state_12214;var statearr_12226_12265 = state_12214__$1;(statearr_12226_12265[2] = inst_12163);
(statearr_12226_12265[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 9))
{var inst_12171 = (state_12214[12]);var inst_12171__$1 = (state_12214[2]);var inst_12172 = cljs.core.get.call(null,inst_12171__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12173 = cljs.core.get.call(null,inst_12171__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12174 = cljs.core.get.call(null,inst_12171__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12214__$1 = (function (){var statearr_12227 = state_12214;(statearr_12227[13] = inst_12174);
(statearr_12227[12] = inst_12171__$1);
(statearr_12227[14] = inst_12173);
return statearr_12227;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12214__$1,10,inst_12172);
} else
{if((state_val_12215 === 10))
{var inst_12179 = (state_12214[15]);var inst_12178 = (state_12214[16]);var inst_12177 = (state_12214[2]);var inst_12178__$1 = cljs.core.nth.call(null,inst_12177,0,null);var inst_12179__$1 = cljs.core.nth.call(null,inst_12177,1,null);var inst_12180 = (inst_12178__$1 == null);var inst_12181 = cljs.core._EQ_.call(null,inst_12179__$1,change);var inst_12182 = (inst_12180) || (inst_12181);var state_12214__$1 = (function (){var statearr_12228 = state_12214;(statearr_12228[15] = inst_12179__$1);
(statearr_12228[16] = inst_12178__$1);
return statearr_12228;
})();if(cljs.core.truth_(inst_12182))
{var statearr_12229_12266 = state_12214__$1;(statearr_12229_12266[1] = 11);
} else
{var statearr_12230_12267 = state_12214__$1;(statearr_12230_12267[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 11))
{var inst_12178 = (state_12214[16]);var inst_12184 = (inst_12178 == null);var state_12214__$1 = state_12214;if(cljs.core.truth_(inst_12184))
{var statearr_12231_12268 = state_12214__$1;(statearr_12231_12268[1] = 14);
} else
{var statearr_12232_12269 = state_12214__$1;(statearr_12232_12269[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 12))
{var inst_12193 = (state_12214[17]);var inst_12179 = (state_12214[15]);var inst_12174 = (state_12214[13]);var inst_12193__$1 = inst_12174.call(null,inst_12179);var state_12214__$1 = (function (){var statearr_12233 = state_12214;(statearr_12233[17] = inst_12193__$1);
return statearr_12233;
})();if(cljs.core.truth_(inst_12193__$1))
{var statearr_12234_12270 = state_12214__$1;(statearr_12234_12270[1] = 17);
} else
{var statearr_12235_12271 = state_12214__$1;(statearr_12235_12271[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 13))
{var inst_12210 = (state_12214[2]);var state_12214__$1 = state_12214;var statearr_12236_12272 = state_12214__$1;(statearr_12236_12272[2] = inst_12210);
(statearr_12236_12272[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 14))
{var inst_12179 = (state_12214[15]);var inst_12186 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12179);var state_12214__$1 = state_12214;var statearr_12237_12273 = state_12214__$1;(statearr_12237_12273[2] = inst_12186);
(statearr_12237_12273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 15))
{var state_12214__$1 = state_12214;var statearr_12238_12274 = state_12214__$1;(statearr_12238_12274[2] = null);
(statearr_12238_12274[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 16))
{var inst_12189 = (state_12214[2]);var inst_12190 = calc_state.call(null);var inst_12163 = inst_12190;var state_12214__$1 = (function (){var statearr_12239 = state_12214;(statearr_12239[18] = inst_12189);
(statearr_12239[8] = inst_12163);
return statearr_12239;
})();var statearr_12240_12275 = state_12214__$1;(statearr_12240_12275[2] = null);
(statearr_12240_12275[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 17))
{var inst_12193 = (state_12214[17]);var state_12214__$1 = state_12214;var statearr_12241_12276 = state_12214__$1;(statearr_12241_12276[2] = inst_12193);
(statearr_12241_12276[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 18))
{var inst_12179 = (state_12214[15]);var inst_12174 = (state_12214[13]);var inst_12173 = (state_12214[14]);var inst_12196 = cljs.core.empty_QMARK_.call(null,inst_12174);var inst_12197 = inst_12173.call(null,inst_12179);var inst_12198 = cljs.core.not.call(null,inst_12197);var inst_12199 = (inst_12196) && (inst_12198);var state_12214__$1 = state_12214;var statearr_12242_12277 = state_12214__$1;(statearr_12242_12277[2] = inst_12199);
(statearr_12242_12277[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 19))
{var inst_12201 = (state_12214[2]);var state_12214__$1 = state_12214;if(cljs.core.truth_(inst_12201))
{var statearr_12243_12278 = state_12214__$1;(statearr_12243_12278[1] = 20);
} else
{var statearr_12244_12279 = state_12214__$1;(statearr_12244_12279[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 20))
{var inst_12178 = (state_12214[16]);var state_12214__$1 = state_12214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12214__$1,23,out,inst_12178);
} else
{if((state_val_12215 === 21))
{var state_12214__$1 = state_12214;var statearr_12245_12280 = state_12214__$1;(statearr_12245_12280[2] = null);
(statearr_12245_12280[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 22))
{var inst_12171 = (state_12214[12]);var inst_12207 = (state_12214[2]);var inst_12163 = inst_12171;var state_12214__$1 = (function (){var statearr_12246 = state_12214;(statearr_12246[8] = inst_12163);
(statearr_12246[19] = inst_12207);
return statearr_12246;
})();var statearr_12247_12281 = state_12214__$1;(statearr_12247_12281[2] = null);
(statearr_12247_12281[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12215 === 23))
{var inst_12204 = (state_12214[2]);var state_12214__$1 = state_12214;var statearr_12248_12282 = state_12214__$1;(statearr_12248_12282[2] = inst_12204);
(statearr_12248_12282[1] = 22);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7121__auto__,c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12252[0] = state_machine__7122__auto__);
(statearr_12252[1] = 1);
return statearr_12252;
});
var state_machine__7122__auto____1 = (function (state_12214){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12214);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12253){if((e12253 instanceof Object))
{var ex__7125__auto__ = e12253;var statearr_12254_12283 = state_12214;(statearr_12254_12283[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12284 = state_12214;
state_12214 = G__12284;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12214){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7138__auto__ = (function (){var statearr_12255 = f__7137__auto__.call(null);(statearr_12255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12256);
return statearr_12255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12286 = {};return obj12286;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4187__auto__ = p;if(and__4187__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4187__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4826__auto__ = (((p == null))?null:p);return (function (){var or__4199__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4187__auto__ = p;if(and__4187__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4187__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4826__auto__ = (((p == null))?null:p);return (function (){var or__4199__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4187__auto__ = p;if(and__4187__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4187__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4826__auto__ = (((p == null))?null:p);return (function (){var or__4199__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4187__auto__ = p;if(and__4187__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4187__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4826__auto__ = (((p == null))?null:p);return (function (){var or__4199__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4826__auto__)]);if(or__4199__auto__)
{return or__4199__auto__;
} else
{var or__4199__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4199__auto____$1)
{return or__4199__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4199__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4199__auto__,mults){
return (function (p1__12287_SHARP_){if(cljs.core.truth_(p1__12287_SHARP_.call(null,topic)))
{return p1__12287_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12287_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4199__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12412 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12413){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12413 = meta12413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12412.cljs$lang$type = true;
cljs.core.async.t12412.cljs$lang$ctorStr = "cljs.core.async/t12412";
cljs.core.async.t12412.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t12412");
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12414){var self__ = this;
var _12414__$1 = this;return self__.meta12413;
});})(mults,ensure_mult))
;
cljs.core.async.t12412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12414,meta12413__$1){var self__ = this;
var _12414__$1 = this;return (new cljs.core.async.t12412(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12413__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12412 = ((function (mults,ensure_mult){
return (function __GT_t12412(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12413){return (new cljs.core.async.t12412(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12413));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12412(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7136__auto___12536 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12536,mults,ensure_mult,p){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12536,mults,ensure_mult,p){
return (function (state_12488){var state_val_12489 = (state_12488[1]);if((state_val_12489 === 1))
{var state_12488__$1 = state_12488;var statearr_12490_12537 = state_12488__$1;(statearr_12490_12537[2] = null);
(statearr_12490_12537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 2))
{var state_12488__$1 = state_12488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12488__$1,4,ch);
} else
{if((state_val_12489 === 3))
{var inst_12486 = (state_12488[2]);var state_12488__$1 = state_12488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12488__$1,inst_12486);
} else
{if((state_val_12489 === 4))
{var inst_12417 = (state_12488[7]);var inst_12417__$1 = (state_12488[2]);var inst_12418 = (inst_12417__$1 == null);var state_12488__$1 = (function (){var statearr_12491 = state_12488;(statearr_12491[7] = inst_12417__$1);
return statearr_12491;
})();if(cljs.core.truth_(inst_12418))
{var statearr_12492_12538 = state_12488__$1;(statearr_12492_12538[1] = 5);
} else
{var statearr_12493_12539 = state_12488__$1;(statearr_12493_12539[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 5))
{var inst_12424 = cljs.core.deref.call(null,mults);var inst_12425 = cljs.core.vals.call(null,inst_12424);var inst_12426 = cljs.core.seq.call(null,inst_12425);var inst_12427 = inst_12426;var inst_12428 = null;var inst_12429 = 0;var inst_12430 = 0;var state_12488__$1 = (function (){var statearr_12494 = state_12488;(statearr_12494[8] = inst_12427);
(statearr_12494[9] = inst_12430);
(statearr_12494[10] = inst_12429);
(statearr_12494[11] = inst_12428);
return statearr_12494;
})();var statearr_12495_12540 = state_12488__$1;(statearr_12495_12540[2] = null);
(statearr_12495_12540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 6))
{var inst_12467 = (state_12488[12]);var inst_12465 = (state_12488[13]);var inst_12417 = (state_12488[7]);var inst_12465__$1 = topic_fn.call(null,inst_12417);var inst_12466 = cljs.core.deref.call(null,mults);var inst_12467__$1 = cljs.core.get.call(null,inst_12466,inst_12465__$1);var state_12488__$1 = (function (){var statearr_12496 = state_12488;(statearr_12496[12] = inst_12467__$1);
(statearr_12496[13] = inst_12465__$1);
return statearr_12496;
})();if(cljs.core.truth_(inst_12467__$1))
{var statearr_12497_12541 = state_12488__$1;(statearr_12497_12541[1] = 19);
} else
{var statearr_12498_12542 = state_12488__$1;(statearr_12498_12542[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 7))
{var inst_12484 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12499_12543 = state_12488__$1;(statearr_12499_12543[2] = inst_12484);
(statearr_12499_12543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 8))
{var inst_12430 = (state_12488[9]);var inst_12429 = (state_12488[10]);var inst_12432 = (inst_12430 < inst_12429);var inst_12433 = inst_12432;var state_12488__$1 = state_12488;if(cljs.core.truth_(inst_12433))
{var statearr_12503_12544 = state_12488__$1;(statearr_12503_12544[1] = 10);
} else
{var statearr_12504_12545 = state_12488__$1;(statearr_12504_12545[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 9))
{var inst_12463 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12505_12546 = state_12488__$1;(statearr_12505_12546[2] = inst_12463);
(statearr_12505_12546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 10))
{var inst_12427 = (state_12488[8]);var inst_12430 = (state_12488[9]);var inst_12429 = (state_12488[10]);var inst_12428 = (state_12488[11]);var inst_12435 = cljs.core._nth.call(null,inst_12428,inst_12430);var inst_12436 = cljs.core.async.muxch_STAR_.call(null,inst_12435);var inst_12437 = cljs.core.async.close_BANG_.call(null,inst_12436);var inst_12438 = (inst_12430 + 1);var tmp12500 = inst_12427;var tmp12501 = inst_12429;var tmp12502 = inst_12428;var inst_12427__$1 = tmp12500;var inst_12428__$1 = tmp12502;var inst_12429__$1 = tmp12501;var inst_12430__$1 = inst_12438;var state_12488__$1 = (function (){var statearr_12506 = state_12488;(statearr_12506[8] = inst_12427__$1);
(statearr_12506[9] = inst_12430__$1);
(statearr_12506[10] = inst_12429__$1);
(statearr_12506[11] = inst_12428__$1);
(statearr_12506[14] = inst_12437);
return statearr_12506;
})();var statearr_12507_12547 = state_12488__$1;(statearr_12507_12547[2] = null);
(statearr_12507_12547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 11))
{var inst_12427 = (state_12488[8]);var inst_12441 = (state_12488[15]);var inst_12441__$1 = cljs.core.seq.call(null,inst_12427);var state_12488__$1 = (function (){var statearr_12508 = state_12488;(statearr_12508[15] = inst_12441__$1);
return statearr_12508;
})();if(inst_12441__$1)
{var statearr_12509_12548 = state_12488__$1;(statearr_12509_12548[1] = 13);
} else
{var statearr_12510_12549 = state_12488__$1;(statearr_12510_12549[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 12))
{var inst_12461 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12511_12550 = state_12488__$1;(statearr_12511_12550[2] = inst_12461);
(statearr_12511_12550[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 13))
{var inst_12441 = (state_12488[15]);var inst_12443 = cljs.core.chunked_seq_QMARK_.call(null,inst_12441);var state_12488__$1 = state_12488;if(inst_12443)
{var statearr_12512_12551 = state_12488__$1;(statearr_12512_12551[1] = 16);
} else
{var statearr_12513_12552 = state_12488__$1;(statearr_12513_12552[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 14))
{var state_12488__$1 = state_12488;var statearr_12514_12553 = state_12488__$1;(statearr_12514_12553[2] = null);
(statearr_12514_12553[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 15))
{var inst_12459 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12515_12554 = state_12488__$1;(statearr_12515_12554[2] = inst_12459);
(statearr_12515_12554[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 16))
{var inst_12441 = (state_12488[15]);var inst_12445 = cljs.core.chunk_first.call(null,inst_12441);var inst_12446 = cljs.core.chunk_rest.call(null,inst_12441);var inst_12447 = cljs.core.count.call(null,inst_12445);var inst_12427 = inst_12446;var inst_12428 = inst_12445;var inst_12429 = inst_12447;var inst_12430 = 0;var state_12488__$1 = (function (){var statearr_12516 = state_12488;(statearr_12516[8] = inst_12427);
(statearr_12516[9] = inst_12430);
(statearr_12516[10] = inst_12429);
(statearr_12516[11] = inst_12428);
return statearr_12516;
})();var statearr_12517_12555 = state_12488__$1;(statearr_12517_12555[2] = null);
(statearr_12517_12555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 17))
{var inst_12441 = (state_12488[15]);var inst_12450 = cljs.core.first.call(null,inst_12441);var inst_12451 = cljs.core.async.muxch_STAR_.call(null,inst_12450);var inst_12452 = cljs.core.async.close_BANG_.call(null,inst_12451);var inst_12453 = cljs.core.next.call(null,inst_12441);var inst_12427 = inst_12453;var inst_12428 = null;var inst_12429 = 0;var inst_12430 = 0;var state_12488__$1 = (function (){var statearr_12518 = state_12488;(statearr_12518[8] = inst_12427);
(statearr_12518[9] = inst_12430);
(statearr_12518[10] = inst_12429);
(statearr_12518[11] = inst_12428);
(statearr_12518[16] = inst_12452);
return statearr_12518;
})();var statearr_12519_12556 = state_12488__$1;(statearr_12519_12556[2] = null);
(statearr_12519_12556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 18))
{var inst_12456 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12520_12557 = state_12488__$1;(statearr_12520_12557[2] = inst_12456);
(statearr_12520_12557[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 19))
{var state_12488__$1 = state_12488;var statearr_12521_12558 = state_12488__$1;(statearr_12521_12558[2] = null);
(statearr_12521_12558[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 20))
{var state_12488__$1 = state_12488;var statearr_12522_12559 = state_12488__$1;(statearr_12522_12559[2] = null);
(statearr_12522_12559[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 21))
{var inst_12481 = (state_12488[2]);var state_12488__$1 = (function (){var statearr_12523 = state_12488;(statearr_12523[17] = inst_12481);
return statearr_12523;
})();var statearr_12524_12560 = state_12488__$1;(statearr_12524_12560[2] = null);
(statearr_12524_12560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 22))
{var inst_12478 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12525_12561 = state_12488__$1;(statearr_12525_12561[2] = inst_12478);
(statearr_12525_12561[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 23))
{var inst_12465 = (state_12488[13]);var inst_12469 = (state_12488[2]);var inst_12470 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12465);var state_12488__$1 = (function (){var statearr_12526 = state_12488;(statearr_12526[18] = inst_12469);
return statearr_12526;
})();var statearr_12527_12562 = state_12488__$1;(statearr_12527_12562[2] = inst_12470);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12488__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12489 === 24))
{var inst_12467 = (state_12488[12]);var inst_12417 = (state_12488[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12488,23,Object,null,22);var inst_12474 = cljs.core.async.muxch_STAR_.call(null,inst_12467);var state_12488__$1 = state_12488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12488__$1,25,inst_12474,inst_12417);
} else
{if((state_val_12489 === 25))
{var inst_12476 = (state_12488[2]);var state_12488__$1 = state_12488;var statearr_12528_12563 = state_12488__$1;(statearr_12528_12563[2] = inst_12476);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12488__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7136__auto___12536,mults,ensure_mult,p))
;return ((function (switch__7121__auto__,c__7136__auto___12536,mults,ensure_mult,p){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12532[0] = state_machine__7122__auto__);
(statearr_12532[1] = 1);
return statearr_12532;
});
var state_machine__7122__auto____1 = (function (state_12488){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12488);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12533){if((e12533 instanceof Object))
{var ex__7125__auto__ = e12533;var statearr_12534_12564 = state_12488;(statearr_12534_12564[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12565 = state_12488;
state_12488 = G__12565;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12488){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12536,mults,ensure_mult,p))
})();var state__7138__auto__ = (function (){var statearr_12535 = f__7137__auto__.call(null);(statearr_12535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12536);
return statearr_12535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12536,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7136__auto___12702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12672){var state_val_12673 = (state_12672[1]);if((state_val_12673 === 1))
{var state_12672__$1 = state_12672;var statearr_12674_12703 = state_12672__$1;(statearr_12674_12703[2] = null);
(statearr_12674_12703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 2))
{var inst_12635 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12636 = 0;var state_12672__$1 = (function (){var statearr_12675 = state_12672;(statearr_12675[7] = inst_12635);
(statearr_12675[8] = inst_12636);
return statearr_12675;
})();var statearr_12676_12704 = state_12672__$1;(statearr_12676_12704[2] = null);
(statearr_12676_12704[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 3))
{var inst_12670 = (state_12672[2]);var state_12672__$1 = state_12672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12672__$1,inst_12670);
} else
{if((state_val_12673 === 4))
{var inst_12636 = (state_12672[8]);var inst_12638 = (inst_12636 < cnt);var state_12672__$1 = state_12672;if(cljs.core.truth_(inst_12638))
{var statearr_12677_12705 = state_12672__$1;(statearr_12677_12705[1] = 6);
} else
{var statearr_12678_12706 = state_12672__$1;(statearr_12678_12706[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 5))
{var inst_12656 = (state_12672[2]);var state_12672__$1 = (function (){var statearr_12679 = state_12672;(statearr_12679[9] = inst_12656);
return statearr_12679;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12672__$1,12,dchan);
} else
{if((state_val_12673 === 6))
{var state_12672__$1 = state_12672;var statearr_12680_12707 = state_12672__$1;(statearr_12680_12707[2] = null);
(statearr_12680_12707[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 7))
{var state_12672__$1 = state_12672;var statearr_12681_12708 = state_12672__$1;(statearr_12681_12708[2] = null);
(statearr_12681_12708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 8))
{var inst_12654 = (state_12672[2]);var state_12672__$1 = state_12672;var statearr_12682_12709 = state_12672__$1;(statearr_12682_12709[2] = inst_12654);
(statearr_12682_12709[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 9))
{var inst_12636 = (state_12672[8]);var inst_12649 = (state_12672[2]);var inst_12650 = (inst_12636 + 1);var inst_12636__$1 = inst_12650;var state_12672__$1 = (function (){var statearr_12683 = state_12672;(statearr_12683[10] = inst_12649);
(statearr_12683[8] = inst_12636__$1);
return statearr_12683;
})();var statearr_12684_12710 = state_12672__$1;(statearr_12684_12710[2] = null);
(statearr_12684_12710[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 10))
{var inst_12640 = (state_12672[2]);var inst_12641 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12672__$1 = (function (){var statearr_12685 = state_12672;(statearr_12685[11] = inst_12640);
return statearr_12685;
})();var statearr_12686_12711 = state_12672__$1;(statearr_12686_12711[2] = inst_12641);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 11))
{var inst_12636 = (state_12672[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12672,10,Object,null,9);var inst_12645 = chs__$1.call(null,inst_12636);var inst_12646 = done.call(null,inst_12636);var inst_12647 = cljs.core.async.take_BANG_.call(null,inst_12645,inst_12646);var state_12672__$1 = state_12672;var statearr_12687_12712 = state_12672__$1;(statearr_12687_12712[2] = inst_12647);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 12))
{var inst_12658 = (state_12672[12]);var inst_12658__$1 = (state_12672[2]);var inst_12659 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12658__$1);var state_12672__$1 = (function (){var statearr_12688 = state_12672;(statearr_12688[12] = inst_12658__$1);
return statearr_12688;
})();if(cljs.core.truth_(inst_12659))
{var statearr_12689_12713 = state_12672__$1;(statearr_12689_12713[1] = 13);
} else
{var statearr_12690_12714 = state_12672__$1;(statearr_12690_12714[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 13))
{var inst_12661 = cljs.core.async.close_BANG_.call(null,out);var state_12672__$1 = state_12672;var statearr_12691_12715 = state_12672__$1;(statearr_12691_12715[2] = inst_12661);
(statearr_12691_12715[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 14))
{var inst_12658 = (state_12672[12]);var inst_12663 = cljs.core.apply.call(null,f,inst_12658);var state_12672__$1 = state_12672;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12672__$1,16,out,inst_12663);
} else
{if((state_val_12673 === 15))
{var inst_12668 = (state_12672[2]);var state_12672__$1 = state_12672;var statearr_12692_12716 = state_12672__$1;(statearr_12692_12716[2] = inst_12668);
(statearr_12692_12716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12673 === 16))
{var inst_12665 = (state_12672[2]);var state_12672__$1 = (function (){var statearr_12693 = state_12672;(statearr_12693[13] = inst_12665);
return statearr_12693;
})();var statearr_12694_12717 = state_12672__$1;(statearr_12694_12717[2] = null);
(statearr_12694_12717[1] = 2);
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
}
}
}
}
}
}
}
}
}
});})(c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7121__auto__,c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12698[0] = state_machine__7122__auto__);
(statearr_12698[1] = 1);
return statearr_12698;
});
var state_machine__7122__auto____1 = (function (state_12672){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12672);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12699){if((e12699 instanceof Object))
{var ex__7125__auto__ = e12699;var statearr_12700_12718 = state_12672;(statearr_12700_12718[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12719 = state_12672;
state_12672 = G__12719;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12672){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7138__auto__ = (function (){var statearr_12701 = f__7137__auto__.call(null);(statearr_12701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12702);
return statearr_12701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12702,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___12827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12827,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12827,out){
return (function (state_12803){var state_val_12804 = (state_12803[1]);if((state_val_12804 === 1))
{var inst_12774 = cljs.core.vec.call(null,chs);var inst_12775 = inst_12774;var state_12803__$1 = (function (){var statearr_12805 = state_12803;(statearr_12805[7] = inst_12775);
return statearr_12805;
})();var statearr_12806_12828 = state_12803__$1;(statearr_12806_12828[2] = null);
(statearr_12806_12828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 2))
{var inst_12775 = (state_12803[7]);var inst_12777 = cljs.core.count.call(null,inst_12775);var inst_12778 = (inst_12777 > 0);var state_12803__$1 = state_12803;if(cljs.core.truth_(inst_12778))
{var statearr_12807_12829 = state_12803__$1;(statearr_12807_12829[1] = 4);
} else
{var statearr_12808_12830 = state_12803__$1;(statearr_12808_12830[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 3))
{var inst_12801 = (state_12803[2]);var state_12803__$1 = state_12803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12803__$1,inst_12801);
} else
{if((state_val_12804 === 4))
{var inst_12775 = (state_12803[7]);var state_12803__$1 = state_12803;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12803__$1,7,inst_12775);
} else
{if((state_val_12804 === 5))
{var inst_12797 = cljs.core.async.close_BANG_.call(null,out);var state_12803__$1 = state_12803;var statearr_12809_12831 = state_12803__$1;(statearr_12809_12831[2] = inst_12797);
(statearr_12809_12831[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 6))
{var inst_12799 = (state_12803[2]);var state_12803__$1 = state_12803;var statearr_12810_12832 = state_12803__$1;(statearr_12810_12832[2] = inst_12799);
(statearr_12810_12832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 7))
{var inst_12782 = (state_12803[8]);var inst_12783 = (state_12803[9]);var inst_12782__$1 = (state_12803[2]);var inst_12783__$1 = cljs.core.nth.call(null,inst_12782__$1,0,null);var inst_12784 = cljs.core.nth.call(null,inst_12782__$1,1,null);var inst_12785 = (inst_12783__$1 == null);var state_12803__$1 = (function (){var statearr_12811 = state_12803;(statearr_12811[8] = inst_12782__$1);
(statearr_12811[10] = inst_12784);
(statearr_12811[9] = inst_12783__$1);
return statearr_12811;
})();if(cljs.core.truth_(inst_12785))
{var statearr_12812_12833 = state_12803__$1;(statearr_12812_12833[1] = 8);
} else
{var statearr_12813_12834 = state_12803__$1;(statearr_12813_12834[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 8))
{var inst_12782 = (state_12803[8]);var inst_12784 = (state_12803[10]);var inst_12783 = (state_12803[9]);var inst_12775 = (state_12803[7]);var inst_12787 = (function (){var c = inst_12784;var v = inst_12783;var vec__12780 = inst_12782;var cs = inst_12775;return ((function (c,v,vec__12780,cs,inst_12782,inst_12784,inst_12783,inst_12775,state_val_12804,c__7136__auto___12827,out){
return (function (p1__12720_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12720_SHARP_);
});
;})(c,v,vec__12780,cs,inst_12782,inst_12784,inst_12783,inst_12775,state_val_12804,c__7136__auto___12827,out))
})();var inst_12788 = cljs.core.filterv.call(null,inst_12787,inst_12775);var inst_12775__$1 = inst_12788;var state_12803__$1 = (function (){var statearr_12814 = state_12803;(statearr_12814[7] = inst_12775__$1);
return statearr_12814;
})();var statearr_12815_12835 = state_12803__$1;(statearr_12815_12835[2] = null);
(statearr_12815_12835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 9))
{var inst_12783 = (state_12803[9]);var state_12803__$1 = state_12803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12803__$1,11,out,inst_12783);
} else
{if((state_val_12804 === 10))
{var inst_12795 = (state_12803[2]);var state_12803__$1 = state_12803;var statearr_12817_12836 = state_12803__$1;(statearr_12817_12836[2] = inst_12795);
(statearr_12817_12836[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12804 === 11))
{var inst_12775 = (state_12803[7]);var inst_12792 = (state_12803[2]);var tmp12816 = inst_12775;var inst_12775__$1 = tmp12816;var state_12803__$1 = (function (){var statearr_12818 = state_12803;(statearr_12818[11] = inst_12792);
(statearr_12818[7] = inst_12775__$1);
return statearr_12818;
})();var statearr_12819_12837 = state_12803__$1;(statearr_12819_12837[2] = null);
(statearr_12819_12837[1] = 2);
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
}
}
}
}
});})(c__7136__auto___12827,out))
;return ((function (switch__7121__auto__,c__7136__auto___12827,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12823 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12823[0] = state_machine__7122__auto__);
(statearr_12823[1] = 1);
return statearr_12823;
});
var state_machine__7122__auto____1 = (function (state_12803){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12803);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12824){if((e12824 instanceof Object))
{var ex__7125__auto__ = e12824;var statearr_12825_12838 = state_12803;(statearr_12825_12838[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12839 = state_12803;
state_12803 = G__12839;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12803){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12827,out))
})();var state__7138__auto__ = (function (){var statearr_12826 = f__7137__auto__.call(null);(statearr_12826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12827);
return statearr_12826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12827,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___12932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12932,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12932,out){
return (function (state_12909){var state_val_12910 = (state_12909[1]);if((state_val_12910 === 1))
{var inst_12886 = 0;var state_12909__$1 = (function (){var statearr_12911 = state_12909;(statearr_12911[7] = inst_12886);
return statearr_12911;
})();var statearr_12912_12933 = state_12909__$1;(statearr_12912_12933[2] = null);
(statearr_12912_12933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 2))
{var inst_12886 = (state_12909[7]);var inst_12888 = (inst_12886 < n);var state_12909__$1 = state_12909;if(cljs.core.truth_(inst_12888))
{var statearr_12913_12934 = state_12909__$1;(statearr_12913_12934[1] = 4);
} else
{var statearr_12914_12935 = state_12909__$1;(statearr_12914_12935[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 3))
{var inst_12906 = (state_12909[2]);var inst_12907 = cljs.core.async.close_BANG_.call(null,out);var state_12909__$1 = (function (){var statearr_12915 = state_12909;(statearr_12915[8] = inst_12906);
return statearr_12915;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12909__$1,inst_12907);
} else
{if((state_val_12910 === 4))
{var state_12909__$1 = state_12909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12909__$1,7,ch);
} else
{if((state_val_12910 === 5))
{var state_12909__$1 = state_12909;var statearr_12916_12936 = state_12909__$1;(statearr_12916_12936[2] = null);
(statearr_12916_12936[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 6))
{var inst_12904 = (state_12909[2]);var state_12909__$1 = state_12909;var statearr_12917_12937 = state_12909__$1;(statearr_12917_12937[2] = inst_12904);
(statearr_12917_12937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 7))
{var inst_12891 = (state_12909[9]);var inst_12891__$1 = (state_12909[2]);var inst_12892 = (inst_12891__$1 == null);var inst_12893 = cljs.core.not.call(null,inst_12892);var state_12909__$1 = (function (){var statearr_12918 = state_12909;(statearr_12918[9] = inst_12891__$1);
return statearr_12918;
})();if(inst_12893)
{var statearr_12919_12938 = state_12909__$1;(statearr_12919_12938[1] = 8);
} else
{var statearr_12920_12939 = state_12909__$1;(statearr_12920_12939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 8))
{var inst_12891 = (state_12909[9]);var state_12909__$1 = state_12909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12909__$1,11,out,inst_12891);
} else
{if((state_val_12910 === 9))
{var state_12909__$1 = state_12909;var statearr_12921_12940 = state_12909__$1;(statearr_12921_12940[2] = null);
(statearr_12921_12940[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 10))
{var inst_12901 = (state_12909[2]);var state_12909__$1 = state_12909;var statearr_12922_12941 = state_12909__$1;(statearr_12922_12941[2] = inst_12901);
(statearr_12922_12941[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12910 === 11))
{var inst_12886 = (state_12909[7]);var inst_12896 = (state_12909[2]);var inst_12897 = (inst_12886 + 1);var inst_12886__$1 = inst_12897;var state_12909__$1 = (function (){var statearr_12923 = state_12909;(statearr_12923[10] = inst_12896);
(statearr_12923[7] = inst_12886__$1);
return statearr_12923;
})();var statearr_12924_12942 = state_12909__$1;(statearr_12924_12942[2] = null);
(statearr_12924_12942[1] = 2);
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
}
}
}
}
});})(c__7136__auto___12932,out))
;return ((function (switch__7121__auto__,c__7136__auto___12932,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12928 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12928[0] = state_machine__7122__auto__);
(statearr_12928[1] = 1);
return statearr_12928;
});
var state_machine__7122__auto____1 = (function (state_12909){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12909);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12929){if((e12929 instanceof Object))
{var ex__7125__auto__ = e12929;var statearr_12930_12943 = state_12909;(statearr_12930_12943[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12944 = state_12909;
state_12909 = G__12944;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12909){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12932,out))
})();var state__7138__auto__ = (function (){var statearr_12931 = f__7137__auto__.call(null);(statearr_12931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12932);
return statearr_12931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12932,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13041 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13041,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13041,out){
return (function (state_13016){var state_val_13017 = (state_13016[1]);if((state_val_13017 === 1))
{var inst_12993 = null;var state_13016__$1 = (function (){var statearr_13018 = state_13016;(statearr_13018[7] = inst_12993);
return statearr_13018;
})();var statearr_13019_13042 = state_13016__$1;(statearr_13019_13042[2] = null);
(statearr_13019_13042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 2))
{var state_13016__$1 = state_13016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13016__$1,4,ch);
} else
{if((state_val_13017 === 3))
{var inst_13013 = (state_13016[2]);var inst_13014 = cljs.core.async.close_BANG_.call(null,out);var state_13016__$1 = (function (){var statearr_13020 = state_13016;(statearr_13020[8] = inst_13013);
return statearr_13020;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13016__$1,inst_13014);
} else
{if((state_val_13017 === 4))
{var inst_12996 = (state_13016[9]);var inst_12996__$1 = (state_13016[2]);var inst_12997 = (inst_12996__$1 == null);var inst_12998 = cljs.core.not.call(null,inst_12997);var state_13016__$1 = (function (){var statearr_13021 = state_13016;(statearr_13021[9] = inst_12996__$1);
return statearr_13021;
})();if(inst_12998)
{var statearr_13022_13043 = state_13016__$1;(statearr_13022_13043[1] = 5);
} else
{var statearr_13023_13044 = state_13016__$1;(statearr_13023_13044[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 5))
{var inst_12993 = (state_13016[7]);var inst_12996 = (state_13016[9]);var inst_13000 = cljs.core._EQ_.call(null,inst_12996,inst_12993);var state_13016__$1 = state_13016;if(inst_13000)
{var statearr_13024_13045 = state_13016__$1;(statearr_13024_13045[1] = 8);
} else
{var statearr_13025_13046 = state_13016__$1;(statearr_13025_13046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 6))
{var state_13016__$1 = state_13016;var statearr_13027_13047 = state_13016__$1;(statearr_13027_13047[2] = null);
(statearr_13027_13047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 7))
{var inst_13011 = (state_13016[2]);var state_13016__$1 = state_13016;var statearr_13028_13048 = state_13016__$1;(statearr_13028_13048[2] = inst_13011);
(statearr_13028_13048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 8))
{var inst_12993 = (state_13016[7]);var tmp13026 = inst_12993;var inst_12993__$1 = tmp13026;var state_13016__$1 = (function (){var statearr_13029 = state_13016;(statearr_13029[7] = inst_12993__$1);
return statearr_13029;
})();var statearr_13030_13049 = state_13016__$1;(statearr_13030_13049[2] = null);
(statearr_13030_13049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 9))
{var inst_12996 = (state_13016[9]);var state_13016__$1 = state_13016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13016__$1,11,out,inst_12996);
} else
{if((state_val_13017 === 10))
{var inst_13008 = (state_13016[2]);var state_13016__$1 = state_13016;var statearr_13031_13050 = state_13016__$1;(statearr_13031_13050[2] = inst_13008);
(statearr_13031_13050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 11))
{var inst_12996 = (state_13016[9]);var inst_13005 = (state_13016[2]);var inst_12993 = inst_12996;var state_13016__$1 = (function (){var statearr_13032 = state_13016;(statearr_13032[10] = inst_13005);
(statearr_13032[7] = inst_12993);
return statearr_13032;
})();var statearr_13033_13051 = state_13016__$1;(statearr_13033_13051[2] = null);
(statearr_13033_13051[1] = 2);
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
}
}
}
}
});})(c__7136__auto___13041,out))
;return ((function (switch__7121__auto__,c__7136__auto___13041,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13037 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13037[0] = state_machine__7122__auto__);
(statearr_13037[1] = 1);
return statearr_13037;
});
var state_machine__7122__auto____1 = (function (state_13016){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13016);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13038){if((e13038 instanceof Object))
{var ex__7125__auto__ = e13038;var statearr_13039_13052 = state_13016;(statearr_13039_13052[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13053 = state_13016;
state_13016 = G__13053;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13016){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13041,out))
})();var state__7138__auto__ = (function (){var statearr_13040 = f__7137__auto__.call(null);(statearr_13040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13041);
return statearr_13040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13041,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13188,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13188,out){
return (function (state_13158){var state_val_13159 = (state_13158[1]);if((state_val_13159 === 1))
{var inst_13121 = (new Array(n));var inst_13122 = inst_13121;var inst_13123 = 0;var state_13158__$1 = (function (){var statearr_13160 = state_13158;(statearr_13160[7] = inst_13122);
(statearr_13160[8] = inst_13123);
return statearr_13160;
})();var statearr_13161_13189 = state_13158__$1;(statearr_13161_13189[2] = null);
(statearr_13161_13189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 2))
{var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13158__$1,4,ch);
} else
{if((state_val_13159 === 3))
{var inst_13156 = (state_13158[2]);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13158__$1,inst_13156);
} else
{if((state_val_13159 === 4))
{var inst_13126 = (state_13158[9]);var inst_13126__$1 = (state_13158[2]);var inst_13127 = (inst_13126__$1 == null);var inst_13128 = cljs.core.not.call(null,inst_13127);var state_13158__$1 = (function (){var statearr_13162 = state_13158;(statearr_13162[9] = inst_13126__$1);
return statearr_13162;
})();if(inst_13128)
{var statearr_13163_13190 = state_13158__$1;(statearr_13163_13190[1] = 5);
} else
{var statearr_13164_13191 = state_13158__$1;(statearr_13164_13191[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 5))
{var inst_13126 = (state_13158[9]);var inst_13122 = (state_13158[7]);var inst_13123 = (state_13158[8]);var inst_13131 = (state_13158[10]);var inst_13130 = (inst_13122[inst_13123] = inst_13126);var inst_13131__$1 = (inst_13123 + 1);var inst_13132 = (inst_13131__$1 < n);var state_13158__$1 = (function (){var statearr_13165 = state_13158;(statearr_13165[10] = inst_13131__$1);
(statearr_13165[11] = inst_13130);
return statearr_13165;
})();if(cljs.core.truth_(inst_13132))
{var statearr_13166_13192 = state_13158__$1;(statearr_13166_13192[1] = 8);
} else
{var statearr_13167_13193 = state_13158__$1;(statearr_13167_13193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 6))
{var inst_13123 = (state_13158[8]);var inst_13144 = (inst_13123 > 0);var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13144))
{var statearr_13169_13194 = state_13158__$1;(statearr_13169_13194[1] = 12);
} else
{var statearr_13170_13195 = state_13158__$1;(statearr_13170_13195[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 7))
{var inst_13154 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13171_13196 = state_13158__$1;(statearr_13171_13196[2] = inst_13154);
(statearr_13171_13196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 8))
{var inst_13122 = (state_13158[7]);var inst_13131 = (state_13158[10]);var tmp13168 = inst_13122;var inst_13122__$1 = tmp13168;var inst_13123 = inst_13131;var state_13158__$1 = (function (){var statearr_13172 = state_13158;(statearr_13172[7] = inst_13122__$1);
(statearr_13172[8] = inst_13123);
return statearr_13172;
})();var statearr_13173_13197 = state_13158__$1;(statearr_13173_13197[2] = null);
(statearr_13173_13197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 9))
{var inst_13122 = (state_13158[7]);var inst_13136 = cljs.core.vec.call(null,inst_13122);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13158__$1,11,out,inst_13136);
} else
{if((state_val_13159 === 10))
{var inst_13142 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13174_13198 = state_13158__$1;(statearr_13174_13198[2] = inst_13142);
(statearr_13174_13198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 11))
{var inst_13138 = (state_13158[2]);var inst_13139 = (new Array(n));var inst_13122 = inst_13139;var inst_13123 = 0;var state_13158__$1 = (function (){var statearr_13175 = state_13158;(statearr_13175[7] = inst_13122);
(statearr_13175[8] = inst_13123);
(statearr_13175[12] = inst_13138);
return statearr_13175;
})();var statearr_13176_13199 = state_13158__$1;(statearr_13176_13199[2] = null);
(statearr_13176_13199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 12))
{var inst_13122 = (state_13158[7]);var inst_13146 = cljs.core.vec.call(null,inst_13122);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13158__$1,15,out,inst_13146);
} else
{if((state_val_13159 === 13))
{var state_13158__$1 = state_13158;var statearr_13177_13200 = state_13158__$1;(statearr_13177_13200[2] = null);
(statearr_13177_13200[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 14))
{var inst_13151 = (state_13158[2]);var inst_13152 = cljs.core.async.close_BANG_.call(null,out);var state_13158__$1 = (function (){var statearr_13178 = state_13158;(statearr_13178[13] = inst_13151);
return statearr_13178;
})();var statearr_13179_13201 = state_13158__$1;(statearr_13179_13201[2] = inst_13152);
(statearr_13179_13201[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13159 === 15))
{var inst_13148 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13180_13202 = state_13158__$1;(statearr_13180_13202[2] = inst_13148);
(statearr_13180_13202[1] = 14);
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
}
}
}
}
}
}
}
}
});})(c__7136__auto___13188,out))
;return ((function (switch__7121__auto__,c__7136__auto___13188,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13184[0] = state_machine__7122__auto__);
(statearr_13184[1] = 1);
return statearr_13184;
});
var state_machine__7122__auto____1 = (function (state_13158){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13158);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13185){if((e13185 instanceof Object))
{var ex__7125__auto__ = e13185;var statearr_13186_13203 = state_13158;(statearr_13186_13203[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13204 = state_13158;
state_13158 = G__13204;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13158){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13188,out))
})();var state__7138__auto__ = (function (){var statearr_13187 = f__7137__auto__.call(null);(statearr_13187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13188);
return statearr_13187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13188,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13347,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13347,out){
return (function (state_13317){var state_val_13318 = (state_13317[1]);if((state_val_13318 === 1))
{var inst_13276 = [];var inst_13277 = inst_13276;var inst_13278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13317__$1 = (function (){var statearr_13319 = state_13317;(statearr_13319[7] = inst_13277);
(statearr_13319[8] = inst_13278);
return statearr_13319;
})();var statearr_13320_13348 = state_13317__$1;(statearr_13320_13348[2] = null);
(statearr_13320_13348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 2))
{var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13317__$1,4,ch);
} else
{if((state_val_13318 === 3))
{var inst_13315 = (state_13317[2]);var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13317__$1,inst_13315);
} else
{if((state_val_13318 === 4))
{var inst_13281 = (state_13317[9]);var inst_13281__$1 = (state_13317[2]);var inst_13282 = (inst_13281__$1 == null);var inst_13283 = cljs.core.not.call(null,inst_13282);var state_13317__$1 = (function (){var statearr_13321 = state_13317;(statearr_13321[9] = inst_13281__$1);
return statearr_13321;
})();if(inst_13283)
{var statearr_13322_13349 = state_13317__$1;(statearr_13322_13349[1] = 5);
} else
{var statearr_13323_13350 = state_13317__$1;(statearr_13323_13350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 5))
{var inst_13285 = (state_13317[10]);var inst_13281 = (state_13317[9]);var inst_13278 = (state_13317[8]);var inst_13285__$1 = f.call(null,inst_13281);var inst_13286 = cljs.core._EQ_.call(null,inst_13285__$1,inst_13278);var inst_13287 = cljs.core.keyword_identical_QMARK_.call(null,inst_13278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13288 = (inst_13286) || (inst_13287);var state_13317__$1 = (function (){var statearr_13324 = state_13317;(statearr_13324[10] = inst_13285__$1);
return statearr_13324;
})();if(cljs.core.truth_(inst_13288))
{var statearr_13325_13351 = state_13317__$1;(statearr_13325_13351[1] = 8);
} else
{var statearr_13326_13352 = state_13317__$1;(statearr_13326_13352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 6))
{var inst_13277 = (state_13317[7]);var inst_13302 = inst_13277.length;var inst_13303 = (inst_13302 > 0);var state_13317__$1 = state_13317;if(cljs.core.truth_(inst_13303))
{var statearr_13328_13353 = state_13317__$1;(statearr_13328_13353[1] = 12);
} else
{var statearr_13329_13354 = state_13317__$1;(statearr_13329_13354[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 7))
{var inst_13313 = (state_13317[2]);var state_13317__$1 = state_13317;var statearr_13330_13355 = state_13317__$1;(statearr_13330_13355[2] = inst_13313);
(statearr_13330_13355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 8))
{var inst_13277 = (state_13317[7]);var inst_13285 = (state_13317[10]);var inst_13281 = (state_13317[9]);var inst_13290 = inst_13277.push(inst_13281);var tmp13327 = inst_13277;var inst_13277__$1 = tmp13327;var inst_13278 = inst_13285;var state_13317__$1 = (function (){var statearr_13331 = state_13317;(statearr_13331[7] = inst_13277__$1);
(statearr_13331[11] = inst_13290);
(statearr_13331[8] = inst_13278);
return statearr_13331;
})();var statearr_13332_13356 = state_13317__$1;(statearr_13332_13356[2] = null);
(statearr_13332_13356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 9))
{var inst_13277 = (state_13317[7]);var inst_13293 = cljs.core.vec.call(null,inst_13277);var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13317__$1,11,out,inst_13293);
} else
{if((state_val_13318 === 10))
{var inst_13300 = (state_13317[2]);var state_13317__$1 = state_13317;var statearr_13333_13357 = state_13317__$1;(statearr_13333_13357[2] = inst_13300);
(statearr_13333_13357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 11))
{var inst_13285 = (state_13317[10]);var inst_13281 = (state_13317[9]);var inst_13295 = (state_13317[2]);var inst_13296 = [];var inst_13297 = inst_13296.push(inst_13281);var inst_13277 = inst_13296;var inst_13278 = inst_13285;var state_13317__$1 = (function (){var statearr_13334 = state_13317;(statearr_13334[7] = inst_13277);
(statearr_13334[8] = inst_13278);
(statearr_13334[12] = inst_13297);
(statearr_13334[13] = inst_13295);
return statearr_13334;
})();var statearr_13335_13358 = state_13317__$1;(statearr_13335_13358[2] = null);
(statearr_13335_13358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 12))
{var inst_13277 = (state_13317[7]);var inst_13305 = cljs.core.vec.call(null,inst_13277);var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13317__$1,15,out,inst_13305);
} else
{if((state_val_13318 === 13))
{var state_13317__$1 = state_13317;var statearr_13336_13359 = state_13317__$1;(statearr_13336_13359[2] = null);
(statearr_13336_13359[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 14))
{var inst_13310 = (state_13317[2]);var inst_13311 = cljs.core.async.close_BANG_.call(null,out);var state_13317__$1 = (function (){var statearr_13337 = state_13317;(statearr_13337[14] = inst_13310);
return statearr_13337;
})();var statearr_13338_13360 = state_13317__$1;(statearr_13338_13360[2] = inst_13311);
(statearr_13338_13360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 15))
{var inst_13307 = (state_13317[2]);var state_13317__$1 = state_13317;var statearr_13339_13361 = state_13317__$1;(statearr_13339_13361[2] = inst_13307);
(statearr_13339_13361[1] = 14);
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
}
}
}
}
}
}
}
}
});})(c__7136__auto___13347,out))
;return ((function (switch__7121__auto__,c__7136__auto___13347,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13343[0] = state_machine__7122__auto__);
(statearr_13343[1] = 1);
return statearr_13343;
});
var state_machine__7122__auto____1 = (function (state_13317){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13317);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13344){if((e13344 instanceof Object))
{var ex__7125__auto__ = e13344;var statearr_13345_13362 = state_13317;(statearr_13345_13362[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13363 = state_13317;
state_13317 = G__13363;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13317){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13347,out))
})();var state__7138__auto__ = (function (){var statearr_13346 = f__7137__auto__.call(null);(statearr_13346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13347);
return statearr_13346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13347,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map