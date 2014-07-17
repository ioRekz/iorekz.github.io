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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11001 = (function (f,fn_handler,meta11002){
this.f = f;
this.fn_handler = fn_handler;
this.meta11002 = meta11002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11001.cljs$lang$type = true;
cljs.core.async.t11001.cljs$lang$ctorStr = "cljs.core.async/t11001";
cljs.core.async.t11001.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11001");
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11003){var self__ = this;
var _11003__$1 = this;return self__.meta11002;
});
cljs.core.async.t11001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11003,meta11002__$1){var self__ = this;
var _11003__$1 = this;return (new cljs.core.async.t11001(self__.f,self__.fn_handler,meta11002__$1));
});
cljs.core.async.__GT_t11001 = (function __GT_t11001(f__$1,fn_handler__$1,meta11002){return (new cljs.core.async.t11001(f__$1,fn_handler__$1,meta11002));
});
}
return (new cljs.core.async.t11001(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11005 = buff;if(G__11005)
{var bit__4849__auto__ = null;if(cljs.core.truth_((function (){var or__4199__auto__ = bit__4849__auto__;if(cljs.core.truth_(or__4199__auto__))
{return or__4199__auto__;
} else
{return G__11005.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11005);
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
{var val_11006 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11006);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11006,ret){
return (function (){return fn1.call(null,val_11006);
});})(val_11006,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5055__auto___11007 = n;var x_11008 = 0;while(true){
if((x_11008 < n__5055__auto___11007))
{(a[x_11008] = 0);
{
var G__11009 = (x_11008 + 1);
x_11008 = G__11009;
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
var G__11010 = (i + 1);
i = G__11010;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11014 = (function (flag,alt_flag,meta11015){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11015 = meta11015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11014.cljs$lang$type = true;
cljs.core.async.t11014.cljs$lang$ctorStr = "cljs.core.async/t11014";
cljs.core.async.t11014.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11014");
});})(flag))
;
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11016){var self__ = this;
var _11016__$1 = this;return self__.meta11015;
});})(flag))
;
cljs.core.async.t11014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11016,meta11015__$1){var self__ = this;
var _11016__$1 = this;return (new cljs.core.async.t11014(self__.flag,self__.alt_flag,meta11015__$1));
});})(flag))
;
cljs.core.async.__GT_t11014 = ((function (flag){
return (function __GT_t11014(flag__$1,alt_flag__$1,meta11015){return (new cljs.core.async.t11014(flag__$1,alt_flag__$1,meta11015));
});})(flag))
;
}
return (new cljs.core.async.t11014(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11020 = (function (cb,flag,alt_handler,meta11021){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11021 = meta11021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11020.cljs$lang$type = true;
cljs.core.async.t11020.cljs$lang$ctorStr = "cljs.core.async/t11020";
cljs.core.async.t11020.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11020");
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11022){var self__ = this;
var _11022__$1 = this;return self__.meta11021;
});
cljs.core.async.t11020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11022,meta11021__$1){var self__ = this;
var _11022__$1 = this;return (new cljs.core.async.t11020(self__.cb,self__.flag,self__.alt_handler,meta11021__$1));
});
cljs.core.async.__GT_t11020 = (function __GT_t11020(cb__$1,flag__$1,alt_handler__$1,meta11021){return (new cljs.core.async.t11020(cb__$1,flag__$1,alt_handler__$1,meta11021));
});
}
return (new cljs.core.async.t11020(cb,flag,alt_handler,null));
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
return (function (p1__11023_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11023_SHARP_,port], null));
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
var G__11024 = (i + 1);
i = G__11024;
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
var alts_BANG___delegate = function (ports,p__11025){var map__11027 = p__11025;var map__11027__$1 = ((cljs.core.seq_QMARK_.call(null,map__11027))?cljs.core.apply.call(null,cljs.core.hash_map,map__11027):map__11027);var opts = map__11027__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11025 = null;if (arguments.length > 1) {
  p__11025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11025);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11028){
var ports = cljs.core.first(arglist__11028);
var p__11025 = cljs.core.rest(arglist__11028);
return alts_BANG___delegate(ports,p__11025);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11036 = (function (ch,f,map_LT_,meta11037){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11037 = meta11037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11036.cljs$lang$type = true;
cljs.core.async.t11036.cljs$lang$ctorStr = "cljs.core.async/t11036";
cljs.core.async.t11036.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11036");
});
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11039 = (function (fn1,_,meta11037,ch,f,map_LT_,meta11040){
this.fn1 = fn1;
this._ = _;
this.meta11037 = meta11037;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11040 = meta11040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11039.cljs$lang$type = true;
cljs.core.async.t11039.cljs$lang$ctorStr = "cljs.core.async/t11039";
cljs.core.async.t11039.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11039");
});})(___$1))
;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11029_SHARP_){return f1.call(null,(((p1__11029_SHARP_ == null))?null:self__.f.call(null,p1__11029_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11041){var self__ = this;
var _11041__$1 = this;return self__.meta11040;
});})(___$1))
;
cljs.core.async.t11039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11041,meta11040__$1){var self__ = this;
var _11041__$1 = this;return (new cljs.core.async.t11039(self__.fn1,self__._,self__.meta11037,self__.ch,self__.f,self__.map_LT_,meta11040__$1));
});})(___$1))
;
cljs.core.async.__GT_t11039 = ((function (___$1){
return (function __GT_t11039(fn1__$1,___$2,meta11037__$1,ch__$2,f__$2,map_LT___$2,meta11040){return (new cljs.core.async.t11039(fn1__$1,___$2,meta11037__$1,ch__$2,f__$2,map_LT___$2,meta11040));
});})(___$1))
;
}
return (new cljs.core.async.t11039(fn1,___$1,self__.meta11037,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11038){var self__ = this;
var _11038__$1 = this;return self__.meta11037;
});
cljs.core.async.t11036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11038,meta11037__$1){var self__ = this;
var _11038__$1 = this;return (new cljs.core.async.t11036(self__.ch,self__.f,self__.map_LT_,meta11037__$1));
});
cljs.core.async.__GT_t11036 = (function __GT_t11036(ch__$1,f__$1,map_LT___$1,meta11037){return (new cljs.core.async.t11036(ch__$1,f__$1,map_LT___$1,meta11037));
});
}
return (new cljs.core.async.t11036(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11045 = (function (ch,f,map_GT_,meta11046){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11046 = meta11046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11045.cljs$lang$type = true;
cljs.core.async.t11045.cljs$lang$ctorStr = "cljs.core.async/t11045";
cljs.core.async.t11045.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11045");
});
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11047){var self__ = this;
var _11047__$1 = this;return self__.meta11046;
});
cljs.core.async.t11045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11047,meta11046__$1){var self__ = this;
var _11047__$1 = this;return (new cljs.core.async.t11045(self__.ch,self__.f,self__.map_GT_,meta11046__$1));
});
cljs.core.async.__GT_t11045 = (function __GT_t11045(ch__$1,f__$1,map_GT___$1,meta11046){return (new cljs.core.async.t11045(ch__$1,f__$1,map_GT___$1,meta11046));
});
}
return (new cljs.core.async.t11045(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11051 = (function (ch,p,filter_GT_,meta11052){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11052 = meta11052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11051.cljs$lang$type = true;
cljs.core.async.t11051.cljs$lang$ctorStr = "cljs.core.async/t11051";
cljs.core.async.t11051.cljs$lang$ctorPrWriter = (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11051");
});
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11053){var self__ = this;
var _11053__$1 = this;return self__.meta11052;
});
cljs.core.async.t11051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11053,meta11052__$1){var self__ = this;
var _11053__$1 = this;return (new cljs.core.async.t11051(self__.ch,self__.p,self__.filter_GT_,meta11052__$1));
});
cljs.core.async.__GT_t11051 = (function __GT_t11051(ch__$1,p__$1,filter_GT___$1,meta11052){return (new cljs.core.async.t11051(ch__$1,p__$1,filter_GT___$1,meta11052));
});
}
return (new cljs.core.async.t11051(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___11136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11136,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11136,out){
return (function (state_11115){var state_val_11116 = (state_11115[1]);if((state_val_11116 === 1))
{var state_11115__$1 = state_11115;var statearr_11117_11137 = state_11115__$1;(statearr_11117_11137[2] = null);
(statearr_11117_11137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 2))
{var state_11115__$1 = state_11115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11115__$1,4,ch);
} else
{if((state_val_11116 === 3))
{var inst_11113 = (state_11115[2]);var state_11115__$1 = state_11115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11115__$1,inst_11113);
} else
{if((state_val_11116 === 4))
{var inst_11097 = (state_11115[7]);var inst_11097__$1 = (state_11115[2]);var inst_11098 = (inst_11097__$1 == null);var state_11115__$1 = (function (){var statearr_11118 = state_11115;(statearr_11118[7] = inst_11097__$1);
return statearr_11118;
})();if(cljs.core.truth_(inst_11098))
{var statearr_11119_11138 = state_11115__$1;(statearr_11119_11138[1] = 5);
} else
{var statearr_11120_11139 = state_11115__$1;(statearr_11120_11139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 5))
{var inst_11100 = cljs.core.async.close_BANG_.call(null,out);var state_11115__$1 = state_11115;var statearr_11121_11140 = state_11115__$1;(statearr_11121_11140[2] = inst_11100);
(statearr_11121_11140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 6))
{var inst_11097 = (state_11115[7]);var inst_11102 = p.call(null,inst_11097);var state_11115__$1 = state_11115;if(cljs.core.truth_(inst_11102))
{var statearr_11122_11141 = state_11115__$1;(statearr_11122_11141[1] = 8);
} else
{var statearr_11123_11142 = state_11115__$1;(statearr_11123_11142[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 7))
{var inst_11111 = (state_11115[2]);var state_11115__$1 = state_11115;var statearr_11124_11143 = state_11115__$1;(statearr_11124_11143[2] = inst_11111);
(statearr_11124_11143[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 8))
{var inst_11097 = (state_11115[7]);var state_11115__$1 = state_11115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11115__$1,11,out,inst_11097);
} else
{if((state_val_11116 === 9))
{var state_11115__$1 = state_11115;var statearr_11125_11144 = state_11115__$1;(statearr_11125_11144[2] = null);
(statearr_11125_11144[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 10))
{var inst_11108 = (state_11115[2]);var state_11115__$1 = (function (){var statearr_11126 = state_11115;(statearr_11126[8] = inst_11108);
return statearr_11126;
})();var statearr_11127_11145 = state_11115__$1;(statearr_11127_11145[2] = null);
(statearr_11127_11145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11116 === 11))
{var inst_11105 = (state_11115[2]);var state_11115__$1 = state_11115;var statearr_11128_11146 = state_11115__$1;(statearr_11128_11146[2] = inst_11105);
(statearr_11128_11146[1] = 10);
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
});})(c__7136__auto___11136,out))
;return ((function (switch__7121__auto__,c__7136__auto___11136,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11132 = [null,null,null,null,null,null,null,null,null];(statearr_11132[0] = state_machine__7122__auto__);
(statearr_11132[1] = 1);
return statearr_11132;
});
var state_machine__7122__auto____1 = (function (state_11115){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11115);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11133){if((e11133 instanceof Object))
{var ex__7125__auto__ = e11133;var statearr_11134_11147 = state_11115;(statearr_11134_11147[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11148 = state_11115;
state_11115 = G__11148;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11115){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11136,out))
})();var state__7138__auto__ = (function (){var statearr_11135 = f__7137__auto__.call(null);(statearr_11135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11136);
return statearr_11135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11136,out))
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
return (function (state_11300){var state_val_11301 = (state_11300[1]);if((state_val_11301 === 1))
{var state_11300__$1 = state_11300;var statearr_11302_11339 = state_11300__$1;(statearr_11302_11339[2] = null);
(statearr_11302_11339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 2))
{var state_11300__$1 = state_11300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11300__$1,4,in$);
} else
{if((state_val_11301 === 3))
{var inst_11298 = (state_11300[2]);var state_11300__$1 = state_11300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11300__$1,inst_11298);
} else
{if((state_val_11301 === 4))
{var inst_11246 = (state_11300[7]);var inst_11246__$1 = (state_11300[2]);var inst_11247 = (inst_11246__$1 == null);var state_11300__$1 = (function (){var statearr_11303 = state_11300;(statearr_11303[7] = inst_11246__$1);
return statearr_11303;
})();if(cljs.core.truth_(inst_11247))
{var statearr_11304_11340 = state_11300__$1;(statearr_11304_11340[1] = 5);
} else
{var statearr_11305_11341 = state_11300__$1;(statearr_11305_11341[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 5))
{var inst_11249 = cljs.core.async.close_BANG_.call(null,out);var state_11300__$1 = state_11300;var statearr_11306_11342 = state_11300__$1;(statearr_11306_11342[2] = inst_11249);
(statearr_11306_11342[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 6))
{var inst_11246 = (state_11300[7]);var inst_11251 = f.call(null,inst_11246);var inst_11256 = cljs.core.seq.call(null,inst_11251);var inst_11257 = inst_11256;var inst_11258 = null;var inst_11259 = 0;var inst_11260 = 0;var state_11300__$1 = (function (){var statearr_11307 = state_11300;(statearr_11307[8] = inst_11258);
(statearr_11307[9] = inst_11259);
(statearr_11307[10] = inst_11257);
(statearr_11307[11] = inst_11260);
return statearr_11307;
})();var statearr_11308_11343 = state_11300__$1;(statearr_11308_11343[2] = null);
(statearr_11308_11343[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 7))
{var inst_11296 = (state_11300[2]);var state_11300__$1 = state_11300;var statearr_11309_11344 = state_11300__$1;(statearr_11309_11344[2] = inst_11296);
(statearr_11309_11344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 8))
{var inst_11259 = (state_11300[9]);var inst_11260 = (state_11300[11]);var inst_11262 = (inst_11260 < inst_11259);var inst_11263 = inst_11262;var state_11300__$1 = state_11300;if(cljs.core.truth_(inst_11263))
{var statearr_11310_11345 = state_11300__$1;(statearr_11310_11345[1] = 10);
} else
{var statearr_11311_11346 = state_11300__$1;(statearr_11311_11346[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 9))
{var inst_11293 = (state_11300[2]);var state_11300__$1 = (function (){var statearr_11312 = state_11300;(statearr_11312[12] = inst_11293);
return statearr_11312;
})();var statearr_11313_11347 = state_11300__$1;(statearr_11313_11347[2] = null);
(statearr_11313_11347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 10))
{var inst_11258 = (state_11300[8]);var inst_11260 = (state_11300[11]);var inst_11265 = cljs.core._nth.call(null,inst_11258,inst_11260);var state_11300__$1 = state_11300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11300__$1,13,out,inst_11265);
} else
{if((state_val_11301 === 11))
{var inst_11257 = (state_11300[10]);var inst_11271 = (state_11300[13]);var inst_11271__$1 = cljs.core.seq.call(null,inst_11257);var state_11300__$1 = (function (){var statearr_11317 = state_11300;(statearr_11317[13] = inst_11271__$1);
return statearr_11317;
})();if(inst_11271__$1)
{var statearr_11318_11348 = state_11300__$1;(statearr_11318_11348[1] = 14);
} else
{var statearr_11319_11349 = state_11300__$1;(statearr_11319_11349[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 12))
{var inst_11291 = (state_11300[2]);var state_11300__$1 = state_11300;var statearr_11320_11350 = state_11300__$1;(statearr_11320_11350[2] = inst_11291);
(statearr_11320_11350[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 13))
{var inst_11258 = (state_11300[8]);var inst_11259 = (state_11300[9]);var inst_11257 = (state_11300[10]);var inst_11260 = (state_11300[11]);var inst_11267 = (state_11300[2]);var inst_11268 = (inst_11260 + 1);var tmp11314 = inst_11258;var tmp11315 = inst_11259;var tmp11316 = inst_11257;var inst_11257__$1 = tmp11316;var inst_11258__$1 = tmp11314;var inst_11259__$1 = tmp11315;var inst_11260__$1 = inst_11268;var state_11300__$1 = (function (){var statearr_11321 = state_11300;(statearr_11321[8] = inst_11258__$1);
(statearr_11321[14] = inst_11267);
(statearr_11321[9] = inst_11259__$1);
(statearr_11321[10] = inst_11257__$1);
(statearr_11321[11] = inst_11260__$1);
return statearr_11321;
})();var statearr_11322_11351 = state_11300__$1;(statearr_11322_11351[2] = null);
(statearr_11322_11351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 14))
{var inst_11271 = (state_11300[13]);var inst_11273 = cljs.core.chunked_seq_QMARK_.call(null,inst_11271);var state_11300__$1 = state_11300;if(inst_11273)
{var statearr_11323_11352 = state_11300__$1;(statearr_11323_11352[1] = 17);
} else
{var statearr_11324_11353 = state_11300__$1;(statearr_11324_11353[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 15))
{var state_11300__$1 = state_11300;var statearr_11325_11354 = state_11300__$1;(statearr_11325_11354[2] = null);
(statearr_11325_11354[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 16))
{var inst_11289 = (state_11300[2]);var state_11300__$1 = state_11300;var statearr_11326_11355 = state_11300__$1;(statearr_11326_11355[2] = inst_11289);
(statearr_11326_11355[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 17))
{var inst_11271 = (state_11300[13]);var inst_11275 = cljs.core.chunk_first.call(null,inst_11271);var inst_11276 = cljs.core.chunk_rest.call(null,inst_11271);var inst_11277 = cljs.core.count.call(null,inst_11275);var inst_11257 = inst_11276;var inst_11258 = inst_11275;var inst_11259 = inst_11277;var inst_11260 = 0;var state_11300__$1 = (function (){var statearr_11327 = state_11300;(statearr_11327[8] = inst_11258);
(statearr_11327[9] = inst_11259);
(statearr_11327[10] = inst_11257);
(statearr_11327[11] = inst_11260);
return statearr_11327;
})();var statearr_11328_11356 = state_11300__$1;(statearr_11328_11356[2] = null);
(statearr_11328_11356[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 18))
{var inst_11271 = (state_11300[13]);var inst_11280 = cljs.core.first.call(null,inst_11271);var state_11300__$1 = state_11300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11300__$1,20,out,inst_11280);
} else
{if((state_val_11301 === 19))
{var inst_11286 = (state_11300[2]);var state_11300__$1 = state_11300;var statearr_11329_11357 = state_11300__$1;(statearr_11329_11357[2] = inst_11286);
(statearr_11329_11357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11301 === 20))
{var inst_11271 = (state_11300[13]);var inst_11282 = (state_11300[2]);var inst_11283 = cljs.core.next.call(null,inst_11271);var inst_11257 = inst_11283;var inst_11258 = null;var inst_11259 = 0;var inst_11260 = 0;var state_11300__$1 = (function (){var statearr_11330 = state_11300;(statearr_11330[8] = inst_11258);
(statearr_11330[9] = inst_11259);
(statearr_11330[10] = inst_11257);
(statearr_11330[11] = inst_11260);
(statearr_11330[15] = inst_11282);
return statearr_11330;
})();var statearr_11331_11358 = state_11300__$1;(statearr_11331_11358[2] = null);
(statearr_11331_11358[1] = 8);
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
var state_machine__7122__auto____0 = (function (){var statearr_11335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11335[0] = state_machine__7122__auto__);
(statearr_11335[1] = 1);
return statearr_11335;
});
var state_machine__7122__auto____1 = (function (state_11300){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11300);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11336){if((e11336 instanceof Object))
{var ex__7125__auto__ = e11336;var statearr_11337_11359 = state_11300;(statearr_11337_11359[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11360 = state_11300;
state_11300 = G__11360;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11300){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11338 = f__7137__auto__.call(null);(statearr_11338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11338;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__7136__auto___11441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11441){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11441){
return (function (state_11420){var state_val_11421 = (state_11420[1]);if((state_val_11421 === 1))
{var state_11420__$1 = state_11420;var statearr_11422_11442 = state_11420__$1;(statearr_11422_11442[2] = null);
(statearr_11422_11442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 2))
{var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11420__$1,4,from);
} else
{if((state_val_11421 === 3))
{var inst_11418 = (state_11420[2]);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11420__$1,inst_11418);
} else
{if((state_val_11421 === 4))
{var inst_11403 = (state_11420[7]);var inst_11403__$1 = (state_11420[2]);var inst_11404 = (inst_11403__$1 == null);var state_11420__$1 = (function (){var statearr_11423 = state_11420;(statearr_11423[7] = inst_11403__$1);
return statearr_11423;
})();if(cljs.core.truth_(inst_11404))
{var statearr_11424_11443 = state_11420__$1;(statearr_11424_11443[1] = 5);
} else
{var statearr_11425_11444 = state_11420__$1;(statearr_11425_11444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 5))
{var state_11420__$1 = state_11420;if(cljs.core.truth_(close_QMARK_))
{var statearr_11426_11445 = state_11420__$1;(statearr_11426_11445[1] = 8);
} else
{var statearr_11427_11446 = state_11420__$1;(statearr_11427_11446[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 6))
{var inst_11403 = (state_11420[7]);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11420__$1,11,to,inst_11403);
} else
{if((state_val_11421 === 7))
{var inst_11416 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11428_11447 = state_11420__$1;(statearr_11428_11447[2] = inst_11416);
(statearr_11428_11447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 8))
{var inst_11407 = cljs.core.async.close_BANG_.call(null,to);var state_11420__$1 = state_11420;var statearr_11429_11448 = state_11420__$1;(statearr_11429_11448[2] = inst_11407);
(statearr_11429_11448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 9))
{var state_11420__$1 = state_11420;var statearr_11430_11449 = state_11420__$1;(statearr_11430_11449[2] = null);
(statearr_11430_11449[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 10))
{var inst_11410 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11431_11450 = state_11420__$1;(statearr_11431_11450[2] = inst_11410);
(statearr_11431_11450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 11))
{var inst_11413 = (state_11420[2]);var state_11420__$1 = (function (){var statearr_11432 = state_11420;(statearr_11432[8] = inst_11413);
return statearr_11432;
})();var statearr_11433_11451 = state_11420__$1;(statearr_11433_11451[2] = null);
(statearr_11433_11451[1] = 2);
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
});})(c__7136__auto___11441))
;return ((function (switch__7121__auto__,c__7136__auto___11441){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11437 = [null,null,null,null,null,null,null,null,null];(statearr_11437[0] = state_machine__7122__auto__);
(statearr_11437[1] = 1);
return statearr_11437;
});
var state_machine__7122__auto____1 = (function (state_11420){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11420);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11438){if((e11438 instanceof Object))
{var ex__7125__auto__ = e11438;var statearr_11439_11452 = state_11420;(statearr_11439_11452[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11453 = state_11420;
state_11420 = G__11453;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11420){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11441))
})();var state__7138__auto__ = (function (){var statearr_11440 = f__7137__auto__.call(null);(statearr_11440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11441);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11441))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7136__auto___11540 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11540,tc,fc){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___11540,tc,fc){
return (function (state_11518){var state_val_11519 = (state_11518[1]);if((state_val_11519 === 1))
{var state_11518__$1 = state_11518;var statearr_11520_11541 = state_11518__$1;(statearr_11520_11541[2] = null);
(statearr_11520_11541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 2))
{var state_11518__$1 = state_11518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11518__$1,4,ch);
} else
{if((state_val_11519 === 3))
{var inst_11516 = (state_11518[2]);var state_11518__$1 = state_11518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11518__$1,inst_11516);
} else
{if((state_val_11519 === 4))
{var inst_11499 = (state_11518[7]);var inst_11499__$1 = (state_11518[2]);var inst_11500 = (inst_11499__$1 == null);var state_11518__$1 = (function (){var statearr_11521 = state_11518;(statearr_11521[7] = inst_11499__$1);
return statearr_11521;
})();if(cljs.core.truth_(inst_11500))
{var statearr_11522_11542 = state_11518__$1;(statearr_11522_11542[1] = 5);
} else
{var statearr_11523_11543 = state_11518__$1;(statearr_11523_11543[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 5))
{var inst_11502 = cljs.core.async.close_BANG_.call(null,tc);var inst_11503 = cljs.core.async.close_BANG_.call(null,fc);var state_11518__$1 = (function (){var statearr_11524 = state_11518;(statearr_11524[8] = inst_11502);
return statearr_11524;
})();var statearr_11525_11544 = state_11518__$1;(statearr_11525_11544[2] = inst_11503);
(statearr_11525_11544[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 6))
{var inst_11499 = (state_11518[7]);var inst_11505 = p.call(null,inst_11499);var state_11518__$1 = state_11518;if(cljs.core.truth_(inst_11505))
{var statearr_11526_11545 = state_11518__$1;(statearr_11526_11545[1] = 9);
} else
{var statearr_11527_11546 = state_11518__$1;(statearr_11527_11546[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 7))
{var inst_11514 = (state_11518[2]);var state_11518__$1 = state_11518;var statearr_11528_11547 = state_11518__$1;(statearr_11528_11547[2] = inst_11514);
(statearr_11528_11547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 8))
{var inst_11511 = (state_11518[2]);var state_11518__$1 = (function (){var statearr_11529 = state_11518;(statearr_11529[9] = inst_11511);
return statearr_11529;
})();var statearr_11530_11548 = state_11518__$1;(statearr_11530_11548[2] = null);
(statearr_11530_11548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 9))
{var state_11518__$1 = state_11518;var statearr_11531_11549 = state_11518__$1;(statearr_11531_11549[2] = tc);
(statearr_11531_11549[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 10))
{var state_11518__$1 = state_11518;var statearr_11532_11550 = state_11518__$1;(statearr_11532_11550[2] = fc);
(statearr_11532_11550[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 11))
{var inst_11499 = (state_11518[7]);var inst_11509 = (state_11518[2]);var state_11518__$1 = state_11518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11518__$1,8,inst_11509,inst_11499);
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
});})(c__7136__auto___11540,tc,fc))
;return ((function (switch__7121__auto__,c__7136__auto___11540,tc,fc){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_11536 = [null,null,null,null,null,null,null,null,null,null];(statearr_11536[0] = state_machine__7122__auto__);
(statearr_11536[1] = 1);
return statearr_11536;
});
var state_machine__7122__auto____1 = (function (state_11518){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11518);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11537){if((e11537 instanceof Object))
{var ex__7125__auto__ = e11537;var statearr_11538_11551 = state_11518;(statearr_11538_11551[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11552 = state_11518;
state_11518 = G__11552;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11518){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___11540,tc,fc))
})();var state__7138__auto__ = (function (){var statearr_11539 = f__7137__auto__.call(null);(statearr_11539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11540);
return statearr_11539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11540,tc,fc))
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
return (function (state_11599){var state_val_11600 = (state_11599[1]);if((state_val_11600 === 7))
{var inst_11595 = (state_11599[2]);var state_11599__$1 = state_11599;var statearr_11601_11617 = state_11599__$1;(statearr_11601_11617[2] = inst_11595);
(statearr_11601_11617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 6))
{var inst_11585 = (state_11599[7]);var inst_11588 = (state_11599[8]);var inst_11592 = f.call(null,inst_11585,inst_11588);var inst_11585__$1 = inst_11592;var state_11599__$1 = (function (){var statearr_11602 = state_11599;(statearr_11602[7] = inst_11585__$1);
return statearr_11602;
})();var statearr_11603_11618 = state_11599__$1;(statearr_11603_11618[2] = null);
(statearr_11603_11618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 5))
{var inst_11585 = (state_11599[7]);var state_11599__$1 = state_11599;var statearr_11604_11619 = state_11599__$1;(statearr_11604_11619[2] = inst_11585);
(statearr_11604_11619[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 4))
{var inst_11588 = (state_11599[8]);var inst_11588__$1 = (state_11599[2]);var inst_11589 = (inst_11588__$1 == null);var state_11599__$1 = (function (){var statearr_11605 = state_11599;(statearr_11605[8] = inst_11588__$1);
return statearr_11605;
})();if(cljs.core.truth_(inst_11589))
{var statearr_11606_11620 = state_11599__$1;(statearr_11606_11620[1] = 5);
} else
{var statearr_11607_11621 = state_11599__$1;(statearr_11607_11621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 3))
{var inst_11597 = (state_11599[2]);var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11597);
} else
{if((state_val_11600 === 2))
{var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,4,ch);
} else
{if((state_val_11600 === 1))
{var inst_11585 = init;var state_11599__$1 = (function (){var statearr_11608 = state_11599;(statearr_11608[7] = inst_11585);
return statearr_11608;
})();var statearr_11609_11622 = state_11599__$1;(statearr_11609_11622[2] = null);
(statearr_11609_11622[1] = 2);
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
var state_machine__7122__auto____0 = (function (){var statearr_11613 = [null,null,null,null,null,null,null,null,null];(statearr_11613[0] = state_machine__7122__auto__);
(statearr_11613[1] = 1);
return statearr_11613;
});
var state_machine__7122__auto____1 = (function (state_11599){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11599);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11614){if((e11614 instanceof Object))
{var ex__7125__auto__ = e11614;var statearr_11615_11623 = state_11599;(statearr_11615_11623[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11624 = state_11599;
state_11599 = G__11624;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11616 = f__7137__auto__.call(null);(statearr_11616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11616;
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
return (function (state_11686){var state_val_11687 = (state_11686[1]);if((state_val_11687 === 1))
{var inst_11666 = cljs.core.seq.call(null,coll);var inst_11667 = inst_11666;var state_11686__$1 = (function (){var statearr_11688 = state_11686;(statearr_11688[7] = inst_11667);
return statearr_11688;
})();var statearr_11689_11707 = state_11686__$1;(statearr_11689_11707[2] = null);
(statearr_11689_11707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 2))
{var inst_11667 = (state_11686[7]);var state_11686__$1 = state_11686;if(cljs.core.truth_(inst_11667))
{var statearr_11690_11708 = state_11686__$1;(statearr_11690_11708[1] = 4);
} else
{var statearr_11691_11709 = state_11686__$1;(statearr_11691_11709[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 3))
{var inst_11684 = (state_11686[2]);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11686__$1,inst_11684);
} else
{if((state_val_11687 === 4))
{var inst_11667 = (state_11686[7]);var inst_11670 = cljs.core.first.call(null,inst_11667);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11686__$1,7,ch,inst_11670);
} else
{if((state_val_11687 === 5))
{var state_11686__$1 = state_11686;if(cljs.core.truth_(close_QMARK_))
{var statearr_11692_11710 = state_11686__$1;(statearr_11692_11710[1] = 8);
} else
{var statearr_11693_11711 = state_11686__$1;(statearr_11693_11711[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 6))
{var inst_11682 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11694_11712 = state_11686__$1;(statearr_11694_11712[2] = inst_11682);
(statearr_11694_11712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 7))
{var inst_11667 = (state_11686[7]);var inst_11672 = (state_11686[2]);var inst_11673 = cljs.core.next.call(null,inst_11667);var inst_11667__$1 = inst_11673;var state_11686__$1 = (function (){var statearr_11695 = state_11686;(statearr_11695[7] = inst_11667__$1);
(statearr_11695[8] = inst_11672);
return statearr_11695;
})();var statearr_11696_11713 = state_11686__$1;(statearr_11696_11713[2] = null);
(statearr_11696_11713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 8))
{var inst_11677 = cljs.core.async.close_BANG_.call(null,ch);var state_11686__$1 = state_11686;var statearr_11697_11714 = state_11686__$1;(statearr_11697_11714[2] = inst_11677);
(statearr_11697_11714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 9))
{var state_11686__$1 = state_11686;var statearr_11698_11715 = state_11686__$1;(statearr_11698_11715[2] = null);
(statearr_11698_11715[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 10))
{var inst_11680 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11699_11716 = state_11686__$1;(statearr_11699_11716[2] = inst_11680);
(statearr_11699_11716[1] = 6);
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
var state_machine__7122__auto____0 = (function (){var statearr_11703 = [null,null,null,null,null,null,null,null,null];(statearr_11703[0] = state_machine__7122__auto__);
(statearr_11703[1] = 1);
return statearr_11703;
});
var state_machine__7122__auto____1 = (function (state_11686){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_11686);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e11704){if((e11704 instanceof Object))
{var ex__7125__auto__ = e11704;var statearr_11705_11717 = state_11686;(statearr_11705_11717[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11718 = state_11686;
state_11686 = G__11718;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_11686){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_11686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto__))
})();var state__7138__auto__ = (function (){var statearr_11706 = f__7137__auto__.call(null);(statearr_11706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);
return statearr_11706;
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
cljs.core.async.Mux = (function (){var obj11720 = {};return obj11720;
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
cljs.core.async.Mult = (function (){var obj11722 = {};return obj11722;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11946 = (function (cs,ch,mult,meta11947){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11947 = meta11947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11946.cljs$lang$type = true;
cljs.core.async.t11946.cljs$lang$ctorStr = "cljs.core.async/t11946";
cljs.core.async.t11946.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t11946");
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11948){var self__ = this;
var _11948__$1 = this;return self__.meta11947;
});})(cs))
;
cljs.core.async.t11946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11948,meta11947__$1){var self__ = this;
var _11948__$1 = this;return (new cljs.core.async.t11946(self__.cs,self__.ch,self__.mult,meta11947__$1));
});})(cs))
;
cljs.core.async.__GT_t11946 = ((function (cs){
return (function __GT_t11946(cs__$1,ch__$1,mult__$1,meta11947){return (new cljs.core.async.t11946(cs__$1,ch__$1,mult__$1,meta11947));
});})(cs))
;
}
return (new cljs.core.async.t11946(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7136__auto___12169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12169,cs,m,dchan,dctr,done){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12169,cs,m,dchan,dctr,done){
return (function (state_12083){var state_val_12084 = (state_12083[1]);if((state_val_12084 === 32))
{var inst_12027 = (state_12083[7]);var inst_11951 = (state_12083[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12083,31,Object,null,30);var inst_12034 = cljs.core.async.put_BANG_.call(null,inst_12027,inst_11951,done);var state_12083__$1 = state_12083;var statearr_12085_12170 = state_12083__$1;(statearr_12085_12170[2] = inst_12034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 1))
{var state_12083__$1 = state_12083;var statearr_12086_12171 = state_12083__$1;(statearr_12086_12171[2] = null);
(statearr_12086_12171[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 33))
{var inst_12040 = (state_12083[9]);var inst_12042 = cljs.core.chunked_seq_QMARK_.call(null,inst_12040);var state_12083__$1 = state_12083;if(inst_12042)
{var statearr_12087_12172 = state_12083__$1;(statearr_12087_12172[1] = 36);
} else
{var statearr_12088_12173 = state_12083__$1;(statearr_12088_12173[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 2))
{var state_12083__$1 = state_12083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12083__$1,4,ch);
} else
{if((state_val_12084 === 34))
{var state_12083__$1 = state_12083;var statearr_12089_12174 = state_12083__$1;(statearr_12089_12174[2] = null);
(statearr_12089_12174[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 3))
{var inst_12081 = (state_12083[2]);var state_12083__$1 = state_12083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12083__$1,inst_12081);
} else
{if((state_val_12084 === 35))
{var inst_12065 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12090_12175 = state_12083__$1;(statearr_12090_12175[2] = inst_12065);
(statearr_12090_12175[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 4))
{var inst_11951 = (state_12083[8]);var inst_11951__$1 = (state_12083[2]);var inst_11952 = (inst_11951__$1 == null);var state_12083__$1 = (function (){var statearr_12091 = state_12083;(statearr_12091[8] = inst_11951__$1);
return statearr_12091;
})();if(cljs.core.truth_(inst_11952))
{var statearr_12092_12176 = state_12083__$1;(statearr_12092_12176[1] = 5);
} else
{var statearr_12093_12177 = state_12083__$1;(statearr_12093_12177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 36))
{var inst_12040 = (state_12083[9]);var inst_12044 = cljs.core.chunk_first.call(null,inst_12040);var inst_12045 = cljs.core.chunk_rest.call(null,inst_12040);var inst_12046 = cljs.core.count.call(null,inst_12044);var inst_12019 = inst_12045;var inst_12020 = inst_12044;var inst_12021 = inst_12046;var inst_12022 = 0;var state_12083__$1 = (function (){var statearr_12094 = state_12083;(statearr_12094[10] = inst_12022);
(statearr_12094[11] = inst_12020);
(statearr_12094[12] = inst_12021);
(statearr_12094[13] = inst_12019);
return statearr_12094;
})();var statearr_12095_12178 = state_12083__$1;(statearr_12095_12178[2] = null);
(statearr_12095_12178[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 5))
{var inst_11958 = cljs.core.deref.call(null,cs);var inst_11959 = cljs.core.seq.call(null,inst_11958);var inst_11960 = inst_11959;var inst_11961 = null;var inst_11962 = 0;var inst_11963 = 0;var state_12083__$1 = (function (){var statearr_12096 = state_12083;(statearr_12096[14] = inst_11962);
(statearr_12096[15] = inst_11963);
(statearr_12096[16] = inst_11961);
(statearr_12096[17] = inst_11960);
return statearr_12096;
})();var statearr_12097_12179 = state_12083__$1;(statearr_12097_12179[2] = null);
(statearr_12097_12179[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 37))
{var inst_12040 = (state_12083[9]);var inst_12049 = cljs.core.first.call(null,inst_12040);var state_12083__$1 = (function (){var statearr_12098 = state_12083;(statearr_12098[18] = inst_12049);
return statearr_12098;
})();var statearr_12099_12180 = state_12083__$1;(statearr_12099_12180[2] = null);
(statearr_12099_12180[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 6))
{var inst_12011 = (state_12083[19]);var inst_12010 = cljs.core.deref.call(null,cs);var inst_12011__$1 = cljs.core.keys.call(null,inst_12010);var inst_12012 = cljs.core.count.call(null,inst_12011__$1);var inst_12013 = cljs.core.reset_BANG_.call(null,dctr,inst_12012);var inst_12018 = cljs.core.seq.call(null,inst_12011__$1);var inst_12019 = inst_12018;var inst_12020 = null;var inst_12021 = 0;var inst_12022 = 0;var state_12083__$1 = (function (){var statearr_12100 = state_12083;(statearr_12100[10] = inst_12022);
(statearr_12100[11] = inst_12020);
(statearr_12100[12] = inst_12021);
(statearr_12100[13] = inst_12019);
(statearr_12100[20] = inst_12013);
(statearr_12100[19] = inst_12011__$1);
return statearr_12100;
})();var statearr_12101_12181 = state_12083__$1;(statearr_12101_12181[2] = null);
(statearr_12101_12181[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 38))
{var inst_12062 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12102_12182 = state_12083__$1;(statearr_12102_12182[2] = inst_12062);
(statearr_12102_12182[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 7))
{var inst_12079 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12103_12183 = state_12083__$1;(statearr_12103_12183[2] = inst_12079);
(statearr_12103_12183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 39))
{var inst_12040 = (state_12083[9]);var inst_12058 = (state_12083[2]);var inst_12059 = cljs.core.next.call(null,inst_12040);var inst_12019 = inst_12059;var inst_12020 = null;var inst_12021 = 0;var inst_12022 = 0;var state_12083__$1 = (function (){var statearr_12104 = state_12083;(statearr_12104[10] = inst_12022);
(statearr_12104[11] = inst_12020);
(statearr_12104[12] = inst_12021);
(statearr_12104[13] = inst_12019);
(statearr_12104[21] = inst_12058);
return statearr_12104;
})();var statearr_12105_12184 = state_12083__$1;(statearr_12105_12184[2] = null);
(statearr_12105_12184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 8))
{var inst_11962 = (state_12083[14]);var inst_11963 = (state_12083[15]);var inst_11965 = (inst_11963 < inst_11962);var inst_11966 = inst_11965;var state_12083__$1 = state_12083;if(cljs.core.truth_(inst_11966))
{var statearr_12106_12185 = state_12083__$1;(statearr_12106_12185[1] = 10);
} else
{var statearr_12107_12186 = state_12083__$1;(statearr_12107_12186[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 40))
{var inst_12049 = (state_12083[18]);var inst_12050 = (state_12083[2]);var inst_12051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12052 = cljs.core.async.untap_STAR_.call(null,m,inst_12049);var state_12083__$1 = (function (){var statearr_12108 = state_12083;(statearr_12108[22] = inst_12050);
(statearr_12108[23] = inst_12051);
return statearr_12108;
})();var statearr_12109_12187 = state_12083__$1;(statearr_12109_12187[2] = inst_12052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 9))
{var inst_12008 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12110_12188 = state_12083__$1;(statearr_12110_12188[2] = inst_12008);
(statearr_12110_12188[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 41))
{var inst_11951 = (state_12083[8]);var inst_12049 = (state_12083[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12083,40,Object,null,39);var inst_12056 = cljs.core.async.put_BANG_.call(null,inst_12049,inst_11951,done);var state_12083__$1 = state_12083;var statearr_12111_12189 = state_12083__$1;(statearr_12111_12189[2] = inst_12056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 10))
{var inst_11963 = (state_12083[15]);var inst_11961 = (state_12083[16]);var inst_11969 = cljs.core._nth.call(null,inst_11961,inst_11963);var inst_11970 = cljs.core.nth.call(null,inst_11969,0,null);var inst_11971 = cljs.core.nth.call(null,inst_11969,1,null);var state_12083__$1 = (function (){var statearr_12112 = state_12083;(statearr_12112[24] = inst_11970);
return statearr_12112;
})();if(cljs.core.truth_(inst_11971))
{var statearr_12113_12190 = state_12083__$1;(statearr_12113_12190[1] = 13);
} else
{var statearr_12114_12191 = state_12083__$1;(statearr_12114_12191[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 42))
{var state_12083__$1 = state_12083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12083__$1,45,dchan);
} else
{if((state_val_12084 === 11))
{var inst_11980 = (state_12083[25]);var inst_11960 = (state_12083[17]);var inst_11980__$1 = cljs.core.seq.call(null,inst_11960);var state_12083__$1 = (function (){var statearr_12115 = state_12083;(statearr_12115[25] = inst_11980__$1);
return statearr_12115;
})();if(inst_11980__$1)
{var statearr_12116_12192 = state_12083__$1;(statearr_12116_12192[1] = 16);
} else
{var statearr_12117_12193 = state_12083__$1;(statearr_12117_12193[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 43))
{var state_12083__$1 = state_12083;var statearr_12118_12194 = state_12083__$1;(statearr_12118_12194[2] = null);
(statearr_12118_12194[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 12))
{var inst_12006 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12119_12195 = state_12083__$1;(statearr_12119_12195[2] = inst_12006);
(statearr_12119_12195[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 44))
{var inst_12076 = (state_12083[2]);var state_12083__$1 = (function (){var statearr_12120 = state_12083;(statearr_12120[26] = inst_12076);
return statearr_12120;
})();var statearr_12121_12196 = state_12083__$1;(statearr_12121_12196[2] = null);
(statearr_12121_12196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 13))
{var inst_11970 = (state_12083[24]);var inst_11973 = cljs.core.async.close_BANG_.call(null,inst_11970);var state_12083__$1 = state_12083;var statearr_12122_12197 = state_12083__$1;(statearr_12122_12197[2] = inst_11973);
(statearr_12122_12197[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 45))
{var inst_12073 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12126_12198 = state_12083__$1;(statearr_12126_12198[2] = inst_12073);
(statearr_12126_12198[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 14))
{var state_12083__$1 = state_12083;var statearr_12127_12199 = state_12083__$1;(statearr_12127_12199[2] = null);
(statearr_12127_12199[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 15))
{var inst_11962 = (state_12083[14]);var inst_11963 = (state_12083[15]);var inst_11961 = (state_12083[16]);var inst_11960 = (state_12083[17]);var inst_11976 = (state_12083[2]);var inst_11977 = (inst_11963 + 1);var tmp12123 = inst_11962;var tmp12124 = inst_11961;var tmp12125 = inst_11960;var inst_11960__$1 = tmp12125;var inst_11961__$1 = tmp12124;var inst_11962__$1 = tmp12123;var inst_11963__$1 = inst_11977;var state_12083__$1 = (function (){var statearr_12128 = state_12083;(statearr_12128[27] = inst_11976);
(statearr_12128[14] = inst_11962__$1);
(statearr_12128[15] = inst_11963__$1);
(statearr_12128[16] = inst_11961__$1);
(statearr_12128[17] = inst_11960__$1);
return statearr_12128;
})();var statearr_12129_12200 = state_12083__$1;(statearr_12129_12200[2] = null);
(statearr_12129_12200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 16))
{var inst_11980 = (state_12083[25]);var inst_11982 = cljs.core.chunked_seq_QMARK_.call(null,inst_11980);var state_12083__$1 = state_12083;if(inst_11982)
{var statearr_12130_12201 = state_12083__$1;(statearr_12130_12201[1] = 19);
} else
{var statearr_12131_12202 = state_12083__$1;(statearr_12131_12202[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 17))
{var state_12083__$1 = state_12083;var statearr_12132_12203 = state_12083__$1;(statearr_12132_12203[2] = null);
(statearr_12132_12203[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 18))
{var inst_12004 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12133_12204 = state_12083__$1;(statearr_12133_12204[2] = inst_12004);
(statearr_12133_12204[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 19))
{var inst_11980 = (state_12083[25]);var inst_11984 = cljs.core.chunk_first.call(null,inst_11980);var inst_11985 = cljs.core.chunk_rest.call(null,inst_11980);var inst_11986 = cljs.core.count.call(null,inst_11984);var inst_11960 = inst_11985;var inst_11961 = inst_11984;var inst_11962 = inst_11986;var inst_11963 = 0;var state_12083__$1 = (function (){var statearr_12134 = state_12083;(statearr_12134[14] = inst_11962);
(statearr_12134[15] = inst_11963);
(statearr_12134[16] = inst_11961);
(statearr_12134[17] = inst_11960);
return statearr_12134;
})();var statearr_12135_12205 = state_12083__$1;(statearr_12135_12205[2] = null);
(statearr_12135_12205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 20))
{var inst_11980 = (state_12083[25]);var inst_11990 = cljs.core.first.call(null,inst_11980);var inst_11991 = cljs.core.nth.call(null,inst_11990,0,null);var inst_11992 = cljs.core.nth.call(null,inst_11990,1,null);var state_12083__$1 = (function (){var statearr_12136 = state_12083;(statearr_12136[28] = inst_11991);
return statearr_12136;
})();if(cljs.core.truth_(inst_11992))
{var statearr_12137_12206 = state_12083__$1;(statearr_12137_12206[1] = 22);
} else
{var statearr_12138_12207 = state_12083__$1;(statearr_12138_12207[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 21))
{var inst_12001 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12139_12208 = state_12083__$1;(statearr_12139_12208[2] = inst_12001);
(statearr_12139_12208[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 22))
{var inst_11991 = (state_12083[28]);var inst_11994 = cljs.core.async.close_BANG_.call(null,inst_11991);var state_12083__$1 = state_12083;var statearr_12140_12209 = state_12083__$1;(statearr_12140_12209[2] = inst_11994);
(statearr_12140_12209[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 23))
{var state_12083__$1 = state_12083;var statearr_12141_12210 = state_12083__$1;(statearr_12141_12210[2] = null);
(statearr_12141_12210[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 24))
{var inst_11980 = (state_12083[25]);var inst_11997 = (state_12083[2]);var inst_11998 = cljs.core.next.call(null,inst_11980);var inst_11960 = inst_11998;var inst_11961 = null;var inst_11962 = 0;var inst_11963 = 0;var state_12083__$1 = (function (){var statearr_12142 = state_12083;(statearr_12142[14] = inst_11962);
(statearr_12142[15] = inst_11963);
(statearr_12142[16] = inst_11961);
(statearr_12142[17] = inst_11960);
(statearr_12142[29] = inst_11997);
return statearr_12142;
})();var statearr_12143_12211 = state_12083__$1;(statearr_12143_12211[2] = null);
(statearr_12143_12211[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 25))
{var inst_12022 = (state_12083[10]);var inst_12021 = (state_12083[12]);var inst_12024 = (inst_12022 < inst_12021);var inst_12025 = inst_12024;var state_12083__$1 = state_12083;if(cljs.core.truth_(inst_12025))
{var statearr_12144_12212 = state_12083__$1;(statearr_12144_12212[1] = 27);
} else
{var statearr_12145_12213 = state_12083__$1;(statearr_12145_12213[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 26))
{var inst_12011 = (state_12083[19]);var inst_12069 = (state_12083[2]);var inst_12070 = cljs.core.seq.call(null,inst_12011);var state_12083__$1 = (function (){var statearr_12146 = state_12083;(statearr_12146[30] = inst_12069);
return statearr_12146;
})();if(inst_12070)
{var statearr_12147_12214 = state_12083__$1;(statearr_12147_12214[1] = 42);
} else
{var statearr_12148_12215 = state_12083__$1;(statearr_12148_12215[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 27))
{var inst_12022 = (state_12083[10]);var inst_12020 = (state_12083[11]);var inst_12027 = cljs.core._nth.call(null,inst_12020,inst_12022);var state_12083__$1 = (function (){var statearr_12149 = state_12083;(statearr_12149[7] = inst_12027);
return statearr_12149;
})();var statearr_12150_12216 = state_12083__$1;(statearr_12150_12216[2] = null);
(statearr_12150_12216[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 28))
{var inst_12019 = (state_12083[13]);var inst_12040 = (state_12083[9]);var inst_12040__$1 = cljs.core.seq.call(null,inst_12019);var state_12083__$1 = (function (){var statearr_12154 = state_12083;(statearr_12154[9] = inst_12040__$1);
return statearr_12154;
})();if(inst_12040__$1)
{var statearr_12155_12217 = state_12083__$1;(statearr_12155_12217[1] = 33);
} else
{var statearr_12156_12218 = state_12083__$1;(statearr_12156_12218[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 29))
{var inst_12067 = (state_12083[2]);var state_12083__$1 = state_12083;var statearr_12157_12219 = state_12083__$1;(statearr_12157_12219[2] = inst_12067);
(statearr_12157_12219[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 30))
{var inst_12022 = (state_12083[10]);var inst_12020 = (state_12083[11]);var inst_12021 = (state_12083[12]);var inst_12019 = (state_12083[13]);var inst_12036 = (state_12083[2]);var inst_12037 = (inst_12022 + 1);var tmp12151 = inst_12020;var tmp12152 = inst_12021;var tmp12153 = inst_12019;var inst_12019__$1 = tmp12153;var inst_12020__$1 = tmp12151;var inst_12021__$1 = tmp12152;var inst_12022__$1 = inst_12037;var state_12083__$1 = (function (){var statearr_12158 = state_12083;(statearr_12158[10] = inst_12022__$1);
(statearr_12158[11] = inst_12020__$1);
(statearr_12158[12] = inst_12021__$1);
(statearr_12158[31] = inst_12036);
(statearr_12158[13] = inst_12019__$1);
return statearr_12158;
})();var statearr_12159_12220 = state_12083__$1;(statearr_12159_12220[2] = null);
(statearr_12159_12220[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12084 === 31))
{var inst_12027 = (state_12083[7]);var inst_12028 = (state_12083[2]);var inst_12029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12030 = cljs.core.async.untap_STAR_.call(null,m,inst_12027);var state_12083__$1 = (function (){var statearr_12160 = state_12083;(statearr_12160[32] = inst_12028);
(statearr_12160[33] = inst_12029);
return statearr_12160;
})();var statearr_12161_12221 = state_12083__$1;(statearr_12161_12221[2] = inst_12030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);
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
});})(c__7136__auto___12169,cs,m,dchan,dctr,done))
;return ((function (switch__7121__auto__,c__7136__auto___12169,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12165[0] = state_machine__7122__auto__);
(statearr_12165[1] = 1);
return statearr_12165;
});
var state_machine__7122__auto____1 = (function (state_12083){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12083);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12166){if((e12166 instanceof Object))
{var ex__7125__auto__ = e12166;var statearr_12167_12222 = state_12083;(statearr_12167_12222[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12223 = state_12083;
state_12083 = G__12223;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12083){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12169,cs,m,dchan,dctr,done))
})();var state__7138__auto__ = (function (){var statearr_12168 = f__7137__auto__.call(null);(statearr_12168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12169);
return statearr_12168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12169,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12225 = {};return obj12225;
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
;var m = (function (){if(typeof cljs.core.async.t12335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12335 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12336){
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
this.meta12336 = meta12336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12335.cljs$lang$type = true;
cljs.core.async.t12335.cljs$lang$ctorStr = "cljs.core.async/t12335";
cljs.core.async.t12335.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t12335");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12337){var self__ = this;
var _12337__$1 = this;return self__.meta12336;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12337,meta12336__$1){var self__ = this;
var _12337__$1 = this;return (new cljs.core.async.t12335(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12336__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12335 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12335(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12336){return (new cljs.core.async.t12335(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12336));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12335(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7136__auto___12444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12402){var state_val_12403 = (state_12402[1]);if((state_val_12403 === 1))
{var inst_12341 = (state_12402[7]);var inst_12341__$1 = calc_state.call(null);var inst_12342 = cljs.core.seq_QMARK_.call(null,inst_12341__$1);var state_12402__$1 = (function (){var statearr_12404 = state_12402;(statearr_12404[7] = inst_12341__$1);
return statearr_12404;
})();if(inst_12342)
{var statearr_12405_12445 = state_12402__$1;(statearr_12405_12445[1] = 2);
} else
{var statearr_12406_12446 = state_12402__$1;(statearr_12406_12446[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 2))
{var inst_12341 = (state_12402[7]);var inst_12344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12341);var state_12402__$1 = state_12402;var statearr_12407_12447 = state_12402__$1;(statearr_12407_12447[2] = inst_12344);
(statearr_12407_12447[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 3))
{var inst_12341 = (state_12402[7]);var state_12402__$1 = state_12402;var statearr_12408_12448 = state_12402__$1;(statearr_12408_12448[2] = inst_12341);
(statearr_12408_12448[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 4))
{var inst_12341 = (state_12402[7]);var inst_12347 = (state_12402[2]);var inst_12348 = cljs.core.get.call(null,inst_12347,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12349 = cljs.core.get.call(null,inst_12347,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12350 = cljs.core.get.call(null,inst_12347,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12351 = inst_12341;var state_12402__$1 = (function (){var statearr_12409 = state_12402;(statearr_12409[8] = inst_12348);
(statearr_12409[9] = inst_12349);
(statearr_12409[10] = inst_12350);
(statearr_12409[11] = inst_12351);
return statearr_12409;
})();var statearr_12410_12449 = state_12402__$1;(statearr_12410_12449[2] = null);
(statearr_12410_12449[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 5))
{var inst_12351 = (state_12402[11]);var inst_12354 = cljs.core.seq_QMARK_.call(null,inst_12351);var state_12402__$1 = state_12402;if(inst_12354)
{var statearr_12411_12450 = state_12402__$1;(statearr_12411_12450[1] = 7);
} else
{var statearr_12412_12451 = state_12402__$1;(statearr_12412_12451[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 6))
{var inst_12400 = (state_12402[2]);var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12402__$1,inst_12400);
} else
{if((state_val_12403 === 7))
{var inst_12351 = (state_12402[11]);var inst_12356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12351);var state_12402__$1 = state_12402;var statearr_12413_12452 = state_12402__$1;(statearr_12413_12452[2] = inst_12356);
(statearr_12413_12452[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 8))
{var inst_12351 = (state_12402[11]);var state_12402__$1 = state_12402;var statearr_12414_12453 = state_12402__$1;(statearr_12414_12453[2] = inst_12351);
(statearr_12414_12453[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 9))
{var inst_12359 = (state_12402[12]);var inst_12359__$1 = (state_12402[2]);var inst_12360 = cljs.core.get.call(null,inst_12359__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12361 = cljs.core.get.call(null,inst_12359__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12362 = cljs.core.get.call(null,inst_12359__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12402__$1 = (function (){var statearr_12415 = state_12402;(statearr_12415[13] = inst_12361);
(statearr_12415[14] = inst_12362);
(statearr_12415[12] = inst_12359__$1);
return statearr_12415;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12402__$1,10,inst_12360);
} else
{if((state_val_12403 === 10))
{var inst_12367 = (state_12402[15]);var inst_12366 = (state_12402[16]);var inst_12365 = (state_12402[2]);var inst_12366__$1 = cljs.core.nth.call(null,inst_12365,0,null);var inst_12367__$1 = cljs.core.nth.call(null,inst_12365,1,null);var inst_12368 = (inst_12366__$1 == null);var inst_12369 = cljs.core._EQ_.call(null,inst_12367__$1,change);var inst_12370 = (inst_12368) || (inst_12369);var state_12402__$1 = (function (){var statearr_12416 = state_12402;(statearr_12416[15] = inst_12367__$1);
(statearr_12416[16] = inst_12366__$1);
return statearr_12416;
})();if(cljs.core.truth_(inst_12370))
{var statearr_12417_12454 = state_12402__$1;(statearr_12417_12454[1] = 11);
} else
{var statearr_12418_12455 = state_12402__$1;(statearr_12418_12455[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 11))
{var inst_12366 = (state_12402[16]);var inst_12372 = (inst_12366 == null);var state_12402__$1 = state_12402;if(cljs.core.truth_(inst_12372))
{var statearr_12419_12456 = state_12402__$1;(statearr_12419_12456[1] = 14);
} else
{var statearr_12420_12457 = state_12402__$1;(statearr_12420_12457[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 12))
{var inst_12381 = (state_12402[17]);var inst_12362 = (state_12402[14]);var inst_12367 = (state_12402[15]);var inst_12381__$1 = inst_12362.call(null,inst_12367);var state_12402__$1 = (function (){var statearr_12421 = state_12402;(statearr_12421[17] = inst_12381__$1);
return statearr_12421;
})();if(cljs.core.truth_(inst_12381__$1))
{var statearr_12422_12458 = state_12402__$1;(statearr_12422_12458[1] = 17);
} else
{var statearr_12423_12459 = state_12402__$1;(statearr_12423_12459[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 13))
{var inst_12398 = (state_12402[2]);var state_12402__$1 = state_12402;var statearr_12424_12460 = state_12402__$1;(statearr_12424_12460[2] = inst_12398);
(statearr_12424_12460[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 14))
{var inst_12367 = (state_12402[15]);var inst_12374 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12367);var state_12402__$1 = state_12402;var statearr_12425_12461 = state_12402__$1;(statearr_12425_12461[2] = inst_12374);
(statearr_12425_12461[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 15))
{var state_12402__$1 = state_12402;var statearr_12426_12462 = state_12402__$1;(statearr_12426_12462[2] = null);
(statearr_12426_12462[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 16))
{var inst_12377 = (state_12402[2]);var inst_12378 = calc_state.call(null);var inst_12351 = inst_12378;var state_12402__$1 = (function (){var statearr_12427 = state_12402;(statearr_12427[11] = inst_12351);
(statearr_12427[18] = inst_12377);
return statearr_12427;
})();var statearr_12428_12463 = state_12402__$1;(statearr_12428_12463[2] = null);
(statearr_12428_12463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 17))
{var inst_12381 = (state_12402[17]);var state_12402__$1 = state_12402;var statearr_12429_12464 = state_12402__$1;(statearr_12429_12464[2] = inst_12381);
(statearr_12429_12464[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 18))
{var inst_12361 = (state_12402[13]);var inst_12362 = (state_12402[14]);var inst_12367 = (state_12402[15]);var inst_12384 = cljs.core.empty_QMARK_.call(null,inst_12362);var inst_12385 = inst_12361.call(null,inst_12367);var inst_12386 = cljs.core.not.call(null,inst_12385);var inst_12387 = (inst_12384) && (inst_12386);var state_12402__$1 = state_12402;var statearr_12430_12465 = state_12402__$1;(statearr_12430_12465[2] = inst_12387);
(statearr_12430_12465[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 19))
{var inst_12389 = (state_12402[2]);var state_12402__$1 = state_12402;if(cljs.core.truth_(inst_12389))
{var statearr_12431_12466 = state_12402__$1;(statearr_12431_12466[1] = 20);
} else
{var statearr_12432_12467 = state_12402__$1;(statearr_12432_12467[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 20))
{var inst_12366 = (state_12402[16]);var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12402__$1,23,out,inst_12366);
} else
{if((state_val_12403 === 21))
{var state_12402__$1 = state_12402;var statearr_12433_12468 = state_12402__$1;(statearr_12433_12468[2] = null);
(statearr_12433_12468[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 22))
{var inst_12359 = (state_12402[12]);var inst_12395 = (state_12402[2]);var inst_12351 = inst_12359;var state_12402__$1 = (function (){var statearr_12434 = state_12402;(statearr_12434[11] = inst_12351);
(statearr_12434[19] = inst_12395);
return statearr_12434;
})();var statearr_12435_12469 = state_12402__$1;(statearr_12435_12469[2] = null);
(statearr_12435_12469[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 23))
{var inst_12392 = (state_12402[2]);var state_12402__$1 = state_12402;var statearr_12436_12470 = state_12402__$1;(statearr_12436_12470[2] = inst_12392);
(statearr_12436_12470[1] = 22);
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
});})(c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7121__auto__,c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12440[0] = state_machine__7122__auto__);
(statearr_12440[1] = 1);
return statearr_12440;
});
var state_machine__7122__auto____1 = (function (state_12402){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12402);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12441){if((e12441 instanceof Object))
{var ex__7125__auto__ = e12441;var statearr_12442_12471 = state_12402;(statearr_12442_12471[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12472 = state_12402;
state_12402 = G__12472;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12402){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7138__auto__ = (function (){var statearr_12443 = f__7137__auto__.call(null);(statearr_12443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12444);
return statearr_12443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12474 = {};return obj12474;
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
return (function (p1__12475_SHARP_){if(cljs.core.truth_(p1__12475_SHARP_.call(null,topic)))
{return p1__12475_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12475_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4199__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12600 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12601){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12601 = meta12601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12600.cljs$lang$type = true;
cljs.core.async.t12600.cljs$lang$ctorStr = "cljs.core.async/t12600";
cljs.core.async.t12600.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4766__auto__,writer__4767__auto__,opt__4768__auto__){return cljs.core._write.call(null,writer__4767__auto__,"cljs.core.async/t12600");
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12600.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12602){var self__ = this;
var _12602__$1 = this;return self__.meta12601;
});})(mults,ensure_mult))
;
cljs.core.async.t12600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12602,meta12601__$1){var self__ = this;
var _12602__$1 = this;return (new cljs.core.async.t12600(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12601__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12600 = ((function (mults,ensure_mult){
return (function __GT_t12600(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12601){return (new cljs.core.async.t12600(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12601));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12600(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7136__auto___12724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12724,mults,ensure_mult,p){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12724,mults,ensure_mult,p){
return (function (state_12676){var state_val_12677 = (state_12676[1]);if((state_val_12677 === 1))
{var state_12676__$1 = state_12676;var statearr_12678_12725 = state_12676__$1;(statearr_12678_12725[2] = null);
(statearr_12678_12725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 2))
{var state_12676__$1 = state_12676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12676__$1,4,ch);
} else
{if((state_val_12677 === 3))
{var inst_12674 = (state_12676[2]);var state_12676__$1 = state_12676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12676__$1,inst_12674);
} else
{if((state_val_12677 === 4))
{var inst_12605 = (state_12676[7]);var inst_12605__$1 = (state_12676[2]);var inst_12606 = (inst_12605__$1 == null);var state_12676__$1 = (function (){var statearr_12679 = state_12676;(statearr_12679[7] = inst_12605__$1);
return statearr_12679;
})();if(cljs.core.truth_(inst_12606))
{var statearr_12680_12726 = state_12676__$1;(statearr_12680_12726[1] = 5);
} else
{var statearr_12681_12727 = state_12676__$1;(statearr_12681_12727[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 5))
{var inst_12612 = cljs.core.deref.call(null,mults);var inst_12613 = cljs.core.vals.call(null,inst_12612);var inst_12614 = cljs.core.seq.call(null,inst_12613);var inst_12615 = inst_12614;var inst_12616 = null;var inst_12617 = 0;var inst_12618 = 0;var state_12676__$1 = (function (){var statearr_12682 = state_12676;(statearr_12682[8] = inst_12616);
(statearr_12682[9] = inst_12615);
(statearr_12682[10] = inst_12618);
(statearr_12682[11] = inst_12617);
return statearr_12682;
})();var statearr_12683_12728 = state_12676__$1;(statearr_12683_12728[2] = null);
(statearr_12683_12728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 6))
{var inst_12605 = (state_12676[7]);var inst_12655 = (state_12676[12]);var inst_12653 = (state_12676[13]);var inst_12653__$1 = topic_fn.call(null,inst_12605);var inst_12654 = cljs.core.deref.call(null,mults);var inst_12655__$1 = cljs.core.get.call(null,inst_12654,inst_12653__$1);var state_12676__$1 = (function (){var statearr_12684 = state_12676;(statearr_12684[12] = inst_12655__$1);
(statearr_12684[13] = inst_12653__$1);
return statearr_12684;
})();if(cljs.core.truth_(inst_12655__$1))
{var statearr_12685_12729 = state_12676__$1;(statearr_12685_12729[1] = 19);
} else
{var statearr_12686_12730 = state_12676__$1;(statearr_12686_12730[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 7))
{var inst_12672 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12687_12731 = state_12676__$1;(statearr_12687_12731[2] = inst_12672);
(statearr_12687_12731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 8))
{var inst_12618 = (state_12676[10]);var inst_12617 = (state_12676[11]);var inst_12620 = (inst_12618 < inst_12617);var inst_12621 = inst_12620;var state_12676__$1 = state_12676;if(cljs.core.truth_(inst_12621))
{var statearr_12691_12732 = state_12676__$1;(statearr_12691_12732[1] = 10);
} else
{var statearr_12692_12733 = state_12676__$1;(statearr_12692_12733[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 9))
{var inst_12651 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12693_12734 = state_12676__$1;(statearr_12693_12734[2] = inst_12651);
(statearr_12693_12734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 10))
{var inst_12616 = (state_12676[8]);var inst_12615 = (state_12676[9]);var inst_12618 = (state_12676[10]);var inst_12617 = (state_12676[11]);var inst_12623 = cljs.core._nth.call(null,inst_12616,inst_12618);var inst_12624 = cljs.core.async.muxch_STAR_.call(null,inst_12623);var inst_12625 = cljs.core.async.close_BANG_.call(null,inst_12624);var inst_12626 = (inst_12618 + 1);var tmp12688 = inst_12616;var tmp12689 = inst_12615;var tmp12690 = inst_12617;var inst_12615__$1 = tmp12689;var inst_12616__$1 = tmp12688;var inst_12617__$1 = tmp12690;var inst_12618__$1 = inst_12626;var state_12676__$1 = (function (){var statearr_12694 = state_12676;(statearr_12694[14] = inst_12625);
(statearr_12694[8] = inst_12616__$1);
(statearr_12694[9] = inst_12615__$1);
(statearr_12694[10] = inst_12618__$1);
(statearr_12694[11] = inst_12617__$1);
return statearr_12694;
})();var statearr_12695_12735 = state_12676__$1;(statearr_12695_12735[2] = null);
(statearr_12695_12735[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 11))
{var inst_12615 = (state_12676[9]);var inst_12629 = (state_12676[15]);var inst_12629__$1 = cljs.core.seq.call(null,inst_12615);var state_12676__$1 = (function (){var statearr_12696 = state_12676;(statearr_12696[15] = inst_12629__$1);
return statearr_12696;
})();if(inst_12629__$1)
{var statearr_12697_12736 = state_12676__$1;(statearr_12697_12736[1] = 13);
} else
{var statearr_12698_12737 = state_12676__$1;(statearr_12698_12737[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 12))
{var inst_12649 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12699_12738 = state_12676__$1;(statearr_12699_12738[2] = inst_12649);
(statearr_12699_12738[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 13))
{var inst_12629 = (state_12676[15]);var inst_12631 = cljs.core.chunked_seq_QMARK_.call(null,inst_12629);var state_12676__$1 = state_12676;if(inst_12631)
{var statearr_12700_12739 = state_12676__$1;(statearr_12700_12739[1] = 16);
} else
{var statearr_12701_12740 = state_12676__$1;(statearr_12701_12740[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 14))
{var state_12676__$1 = state_12676;var statearr_12702_12741 = state_12676__$1;(statearr_12702_12741[2] = null);
(statearr_12702_12741[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 15))
{var inst_12647 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12703_12742 = state_12676__$1;(statearr_12703_12742[2] = inst_12647);
(statearr_12703_12742[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 16))
{var inst_12629 = (state_12676[15]);var inst_12633 = cljs.core.chunk_first.call(null,inst_12629);var inst_12634 = cljs.core.chunk_rest.call(null,inst_12629);var inst_12635 = cljs.core.count.call(null,inst_12633);var inst_12615 = inst_12634;var inst_12616 = inst_12633;var inst_12617 = inst_12635;var inst_12618 = 0;var state_12676__$1 = (function (){var statearr_12704 = state_12676;(statearr_12704[8] = inst_12616);
(statearr_12704[9] = inst_12615);
(statearr_12704[10] = inst_12618);
(statearr_12704[11] = inst_12617);
return statearr_12704;
})();var statearr_12705_12743 = state_12676__$1;(statearr_12705_12743[2] = null);
(statearr_12705_12743[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 17))
{var inst_12629 = (state_12676[15]);var inst_12638 = cljs.core.first.call(null,inst_12629);var inst_12639 = cljs.core.async.muxch_STAR_.call(null,inst_12638);var inst_12640 = cljs.core.async.close_BANG_.call(null,inst_12639);var inst_12641 = cljs.core.next.call(null,inst_12629);var inst_12615 = inst_12641;var inst_12616 = null;var inst_12617 = 0;var inst_12618 = 0;var state_12676__$1 = (function (){var statearr_12706 = state_12676;(statearr_12706[8] = inst_12616);
(statearr_12706[9] = inst_12615);
(statearr_12706[10] = inst_12618);
(statearr_12706[11] = inst_12617);
(statearr_12706[16] = inst_12640);
return statearr_12706;
})();var statearr_12707_12744 = state_12676__$1;(statearr_12707_12744[2] = null);
(statearr_12707_12744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 18))
{var inst_12644 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12708_12745 = state_12676__$1;(statearr_12708_12745[2] = inst_12644);
(statearr_12708_12745[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 19))
{var state_12676__$1 = state_12676;var statearr_12709_12746 = state_12676__$1;(statearr_12709_12746[2] = null);
(statearr_12709_12746[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 20))
{var state_12676__$1 = state_12676;var statearr_12710_12747 = state_12676__$1;(statearr_12710_12747[2] = null);
(statearr_12710_12747[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 21))
{var inst_12669 = (state_12676[2]);var state_12676__$1 = (function (){var statearr_12711 = state_12676;(statearr_12711[17] = inst_12669);
return statearr_12711;
})();var statearr_12712_12748 = state_12676__$1;(statearr_12712_12748[2] = null);
(statearr_12712_12748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 22))
{var inst_12666 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12713_12749 = state_12676__$1;(statearr_12713_12749[2] = inst_12666);
(statearr_12713_12749[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 23))
{var inst_12653 = (state_12676[13]);var inst_12657 = (state_12676[2]);var inst_12658 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12653);var state_12676__$1 = (function (){var statearr_12714 = state_12676;(statearr_12714[18] = inst_12657);
return statearr_12714;
})();var statearr_12715_12750 = state_12676__$1;(statearr_12715_12750[2] = inst_12658);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12676__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12677 === 24))
{var inst_12605 = (state_12676[7]);var inst_12655 = (state_12676[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12676,23,Object,null,22);var inst_12662 = cljs.core.async.muxch_STAR_.call(null,inst_12655);var state_12676__$1 = state_12676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12676__$1,25,inst_12662,inst_12605);
} else
{if((state_val_12677 === 25))
{var inst_12664 = (state_12676[2]);var state_12676__$1 = state_12676;var statearr_12716_12751 = state_12676__$1;(statearr_12716_12751[2] = inst_12664);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12676__$1);
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
});})(c__7136__auto___12724,mults,ensure_mult,p))
;return ((function (switch__7121__auto__,c__7136__auto___12724,mults,ensure_mult,p){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12720[0] = state_machine__7122__auto__);
(statearr_12720[1] = 1);
return statearr_12720;
});
var state_machine__7122__auto____1 = (function (state_12676){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12676);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12721){if((e12721 instanceof Object))
{var ex__7125__auto__ = e12721;var statearr_12722_12752 = state_12676;(statearr_12722_12752[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12753 = state_12676;
state_12676 = G__12753;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12676){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12724,mults,ensure_mult,p))
})();var state__7138__auto__ = (function (){var statearr_12723 = f__7137__auto__.call(null);(statearr_12723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12724);
return statearr_12723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12724,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__7136__auto___12890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12860){var state_val_12861 = (state_12860[1]);if((state_val_12861 === 1))
{var state_12860__$1 = state_12860;var statearr_12862_12891 = state_12860__$1;(statearr_12862_12891[2] = null);
(statearr_12862_12891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 2))
{var inst_12823 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12824 = 0;var state_12860__$1 = (function (){var statearr_12863 = state_12860;(statearr_12863[7] = inst_12823);
(statearr_12863[8] = inst_12824);
return statearr_12863;
})();var statearr_12864_12892 = state_12860__$1;(statearr_12864_12892[2] = null);
(statearr_12864_12892[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 3))
{var inst_12858 = (state_12860[2]);var state_12860__$1 = state_12860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12860__$1,inst_12858);
} else
{if((state_val_12861 === 4))
{var inst_12824 = (state_12860[8]);var inst_12826 = (inst_12824 < cnt);var state_12860__$1 = state_12860;if(cljs.core.truth_(inst_12826))
{var statearr_12865_12893 = state_12860__$1;(statearr_12865_12893[1] = 6);
} else
{var statearr_12866_12894 = state_12860__$1;(statearr_12866_12894[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 5))
{var inst_12844 = (state_12860[2]);var state_12860__$1 = (function (){var statearr_12867 = state_12860;(statearr_12867[9] = inst_12844);
return statearr_12867;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12860__$1,12,dchan);
} else
{if((state_val_12861 === 6))
{var state_12860__$1 = state_12860;var statearr_12868_12895 = state_12860__$1;(statearr_12868_12895[2] = null);
(statearr_12868_12895[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 7))
{var state_12860__$1 = state_12860;var statearr_12869_12896 = state_12860__$1;(statearr_12869_12896[2] = null);
(statearr_12869_12896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 8))
{var inst_12842 = (state_12860[2]);var state_12860__$1 = state_12860;var statearr_12870_12897 = state_12860__$1;(statearr_12870_12897[2] = inst_12842);
(statearr_12870_12897[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 9))
{var inst_12824 = (state_12860[8]);var inst_12837 = (state_12860[2]);var inst_12838 = (inst_12824 + 1);var inst_12824__$1 = inst_12838;var state_12860__$1 = (function (){var statearr_12871 = state_12860;(statearr_12871[10] = inst_12837);
(statearr_12871[8] = inst_12824__$1);
return statearr_12871;
})();var statearr_12872_12898 = state_12860__$1;(statearr_12872_12898[2] = null);
(statearr_12872_12898[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 10))
{var inst_12828 = (state_12860[2]);var inst_12829 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12860__$1 = (function (){var statearr_12873 = state_12860;(statearr_12873[11] = inst_12828);
return statearr_12873;
})();var statearr_12874_12899 = state_12860__$1;(statearr_12874_12899[2] = inst_12829);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12860__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 11))
{var inst_12824 = (state_12860[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12860,10,Object,null,9);var inst_12833 = chs__$1.call(null,inst_12824);var inst_12834 = done.call(null,inst_12824);var inst_12835 = cljs.core.async.take_BANG_.call(null,inst_12833,inst_12834);var state_12860__$1 = state_12860;var statearr_12875_12900 = state_12860__$1;(statearr_12875_12900[2] = inst_12835);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12860__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 12))
{var inst_12846 = (state_12860[12]);var inst_12846__$1 = (state_12860[2]);var inst_12847 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12846__$1);var state_12860__$1 = (function (){var statearr_12876 = state_12860;(statearr_12876[12] = inst_12846__$1);
return statearr_12876;
})();if(cljs.core.truth_(inst_12847))
{var statearr_12877_12901 = state_12860__$1;(statearr_12877_12901[1] = 13);
} else
{var statearr_12878_12902 = state_12860__$1;(statearr_12878_12902[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 13))
{var inst_12849 = cljs.core.async.close_BANG_.call(null,out);var state_12860__$1 = state_12860;var statearr_12879_12903 = state_12860__$1;(statearr_12879_12903[2] = inst_12849);
(statearr_12879_12903[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 14))
{var inst_12846 = (state_12860[12]);var inst_12851 = cljs.core.apply.call(null,f,inst_12846);var state_12860__$1 = state_12860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12860__$1,16,out,inst_12851);
} else
{if((state_val_12861 === 15))
{var inst_12856 = (state_12860[2]);var state_12860__$1 = state_12860;var statearr_12880_12904 = state_12860__$1;(statearr_12880_12904[2] = inst_12856);
(statearr_12880_12904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12861 === 16))
{var inst_12853 = (state_12860[2]);var state_12860__$1 = (function (){var statearr_12881 = state_12860;(statearr_12881[13] = inst_12853);
return statearr_12881;
})();var statearr_12882_12905 = state_12860__$1;(statearr_12882_12905[2] = null);
(statearr_12882_12905[1] = 2);
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
});})(c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7121__auto__,c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_12886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12886[0] = state_machine__7122__auto__);
(statearr_12886[1] = 1);
return statearr_12886;
});
var state_machine__7122__auto____1 = (function (state_12860){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12860);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e12887){if((e12887 instanceof Object))
{var ex__7125__auto__ = e12887;var statearr_12888_12906 = state_12860;(statearr_12888_12906[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12860);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12907 = state_12860;
state_12860 = G__12907;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12860){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7138__auto__ = (function (){var statearr_12889 = f__7137__auto__.call(null);(statearr_12889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12890);
return statearr_12889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12890,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13015,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13015,out){
return (function (state_12991){var state_val_12992 = (state_12991[1]);if((state_val_12992 === 1))
{var inst_12962 = cljs.core.vec.call(null,chs);var inst_12963 = inst_12962;var state_12991__$1 = (function (){var statearr_12993 = state_12991;(statearr_12993[7] = inst_12963);
return statearr_12993;
})();var statearr_12994_13016 = state_12991__$1;(statearr_12994_13016[2] = null);
(statearr_12994_13016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 2))
{var inst_12963 = (state_12991[7]);var inst_12965 = cljs.core.count.call(null,inst_12963);var inst_12966 = (inst_12965 > 0);var state_12991__$1 = state_12991;if(cljs.core.truth_(inst_12966))
{var statearr_12995_13017 = state_12991__$1;(statearr_12995_13017[1] = 4);
} else
{var statearr_12996_13018 = state_12991__$1;(statearr_12996_13018[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 3))
{var inst_12989 = (state_12991[2]);var state_12991__$1 = state_12991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12991__$1,inst_12989);
} else
{if((state_val_12992 === 4))
{var inst_12963 = (state_12991[7]);var state_12991__$1 = state_12991;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12991__$1,7,inst_12963);
} else
{if((state_val_12992 === 5))
{var inst_12985 = cljs.core.async.close_BANG_.call(null,out);var state_12991__$1 = state_12991;var statearr_12997_13019 = state_12991__$1;(statearr_12997_13019[2] = inst_12985);
(statearr_12997_13019[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 6))
{var inst_12987 = (state_12991[2]);var state_12991__$1 = state_12991;var statearr_12998_13020 = state_12991__$1;(statearr_12998_13020[2] = inst_12987);
(statearr_12998_13020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 7))
{var inst_12971 = (state_12991[8]);var inst_12970 = (state_12991[9]);var inst_12970__$1 = (state_12991[2]);var inst_12971__$1 = cljs.core.nth.call(null,inst_12970__$1,0,null);var inst_12972 = cljs.core.nth.call(null,inst_12970__$1,1,null);var inst_12973 = (inst_12971__$1 == null);var state_12991__$1 = (function (){var statearr_12999 = state_12991;(statearr_12999[10] = inst_12972);
(statearr_12999[8] = inst_12971__$1);
(statearr_12999[9] = inst_12970__$1);
return statearr_12999;
})();if(cljs.core.truth_(inst_12973))
{var statearr_13000_13021 = state_12991__$1;(statearr_13000_13021[1] = 8);
} else
{var statearr_13001_13022 = state_12991__$1;(statearr_13001_13022[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 8))
{var inst_12963 = (state_12991[7]);var inst_12972 = (state_12991[10]);var inst_12971 = (state_12991[8]);var inst_12970 = (state_12991[9]);var inst_12975 = (function (){var c = inst_12972;var v = inst_12971;var vec__12968 = inst_12970;var cs = inst_12963;return ((function (c,v,vec__12968,cs,inst_12963,inst_12972,inst_12971,inst_12970,state_val_12992,c__7136__auto___13015,out){
return (function (p1__12908_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12908_SHARP_);
});
;})(c,v,vec__12968,cs,inst_12963,inst_12972,inst_12971,inst_12970,state_val_12992,c__7136__auto___13015,out))
})();var inst_12976 = cljs.core.filterv.call(null,inst_12975,inst_12963);var inst_12963__$1 = inst_12976;var state_12991__$1 = (function (){var statearr_13002 = state_12991;(statearr_13002[7] = inst_12963__$1);
return statearr_13002;
})();var statearr_13003_13023 = state_12991__$1;(statearr_13003_13023[2] = null);
(statearr_13003_13023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 9))
{var inst_12971 = (state_12991[8]);var state_12991__$1 = state_12991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12991__$1,11,out,inst_12971);
} else
{if((state_val_12992 === 10))
{var inst_12983 = (state_12991[2]);var state_12991__$1 = state_12991;var statearr_13005_13024 = state_12991__$1;(statearr_13005_13024[2] = inst_12983);
(statearr_13005_13024[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12992 === 11))
{var inst_12963 = (state_12991[7]);var inst_12980 = (state_12991[2]);var tmp13004 = inst_12963;var inst_12963__$1 = tmp13004;var state_12991__$1 = (function (){var statearr_13006 = state_12991;(statearr_13006[11] = inst_12980);
(statearr_13006[7] = inst_12963__$1);
return statearr_13006;
})();var statearr_13007_13025 = state_12991__$1;(statearr_13007_13025[2] = null);
(statearr_13007_13025[1] = 2);
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
});})(c__7136__auto___13015,out))
;return ((function (switch__7121__auto__,c__7136__auto___13015,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13011 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13011[0] = state_machine__7122__auto__);
(statearr_13011[1] = 1);
return statearr_13011;
});
var state_machine__7122__auto____1 = (function (state_12991){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_12991);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13012){if((e13012 instanceof Object))
{var ex__7125__auto__ = e13012;var statearr_13013_13026 = state_12991;(statearr_13013_13026[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13027 = state_12991;
state_12991 = G__13027;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_12991){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_12991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13015,out))
})();var state__7138__auto__ = (function (){var statearr_13014 = f__7137__auto__.call(null);(statearr_13014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13015);
return statearr_13014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13015,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13120,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13120,out){
return (function (state_13097){var state_val_13098 = (state_13097[1]);if((state_val_13098 === 1))
{var inst_13074 = 0;var state_13097__$1 = (function (){var statearr_13099 = state_13097;(statearr_13099[7] = inst_13074);
return statearr_13099;
})();var statearr_13100_13121 = state_13097__$1;(statearr_13100_13121[2] = null);
(statearr_13100_13121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 2))
{var inst_13074 = (state_13097[7]);var inst_13076 = (inst_13074 < n);var state_13097__$1 = state_13097;if(cljs.core.truth_(inst_13076))
{var statearr_13101_13122 = state_13097__$1;(statearr_13101_13122[1] = 4);
} else
{var statearr_13102_13123 = state_13097__$1;(statearr_13102_13123[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 3))
{var inst_13094 = (state_13097[2]);var inst_13095 = cljs.core.async.close_BANG_.call(null,out);var state_13097__$1 = (function (){var statearr_13103 = state_13097;(statearr_13103[8] = inst_13094);
return statearr_13103;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else
{if((state_val_13098 === 4))
{var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,7,ch);
} else
{if((state_val_13098 === 5))
{var state_13097__$1 = state_13097;var statearr_13104_13124 = state_13097__$1;(statearr_13104_13124[2] = null);
(statearr_13104_13124[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 6))
{var inst_13092 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13105_13125 = state_13097__$1;(statearr_13105_13125[2] = inst_13092);
(statearr_13105_13125[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 7))
{var inst_13079 = (state_13097[9]);var inst_13079__$1 = (state_13097[2]);var inst_13080 = (inst_13079__$1 == null);var inst_13081 = cljs.core.not.call(null,inst_13080);var state_13097__$1 = (function (){var statearr_13106 = state_13097;(statearr_13106[9] = inst_13079__$1);
return statearr_13106;
})();if(inst_13081)
{var statearr_13107_13126 = state_13097__$1;(statearr_13107_13126[1] = 8);
} else
{var statearr_13108_13127 = state_13097__$1;(statearr_13108_13127[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 8))
{var inst_13079 = (state_13097[9]);var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13097__$1,11,out,inst_13079);
} else
{if((state_val_13098 === 9))
{var state_13097__$1 = state_13097;var statearr_13109_13128 = state_13097__$1;(statearr_13109_13128[2] = null);
(statearr_13109_13128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 10))
{var inst_13089 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13110_13129 = state_13097__$1;(statearr_13110_13129[2] = inst_13089);
(statearr_13110_13129[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 11))
{var inst_13074 = (state_13097[7]);var inst_13084 = (state_13097[2]);var inst_13085 = (inst_13074 + 1);var inst_13074__$1 = inst_13085;var state_13097__$1 = (function (){var statearr_13111 = state_13097;(statearr_13111[7] = inst_13074__$1);
(statearr_13111[10] = inst_13084);
return statearr_13111;
})();var statearr_13112_13130 = state_13097__$1;(statearr_13112_13130[2] = null);
(statearr_13112_13130[1] = 2);
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
});})(c__7136__auto___13120,out))
;return ((function (switch__7121__auto__,c__7136__auto___13120,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13116 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13116[0] = state_machine__7122__auto__);
(statearr_13116[1] = 1);
return statearr_13116;
});
var state_machine__7122__auto____1 = (function (state_13097){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13097);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13117){if((e13117 instanceof Object))
{var ex__7125__auto__ = e13117;var statearr_13118_13131 = state_13097;(statearr_13118_13131[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13132 = state_13097;
state_13097 = G__13132;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13120,out))
})();var state__7138__auto__ = (function (){var statearr_13119 = f__7137__auto__.call(null);(statearr_13119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13120);
return statearr_13119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13120,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13229,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13229,out){
return (function (state_13204){var state_val_13205 = (state_13204[1]);if((state_val_13205 === 1))
{var inst_13181 = null;var state_13204__$1 = (function (){var statearr_13206 = state_13204;(statearr_13206[7] = inst_13181);
return statearr_13206;
})();var statearr_13207_13230 = state_13204__$1;(statearr_13207_13230[2] = null);
(statearr_13207_13230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 2))
{var state_13204__$1 = state_13204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13204__$1,4,ch);
} else
{if((state_val_13205 === 3))
{var inst_13201 = (state_13204[2]);var inst_13202 = cljs.core.async.close_BANG_.call(null,out);var state_13204__$1 = (function (){var statearr_13208 = state_13204;(statearr_13208[8] = inst_13201);
return statearr_13208;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13204__$1,inst_13202);
} else
{if((state_val_13205 === 4))
{var inst_13184 = (state_13204[9]);var inst_13184__$1 = (state_13204[2]);var inst_13185 = (inst_13184__$1 == null);var inst_13186 = cljs.core.not.call(null,inst_13185);var state_13204__$1 = (function (){var statearr_13209 = state_13204;(statearr_13209[9] = inst_13184__$1);
return statearr_13209;
})();if(inst_13186)
{var statearr_13210_13231 = state_13204__$1;(statearr_13210_13231[1] = 5);
} else
{var statearr_13211_13232 = state_13204__$1;(statearr_13211_13232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 5))
{var inst_13181 = (state_13204[7]);var inst_13184 = (state_13204[9]);var inst_13188 = cljs.core._EQ_.call(null,inst_13184,inst_13181);var state_13204__$1 = state_13204;if(inst_13188)
{var statearr_13212_13233 = state_13204__$1;(statearr_13212_13233[1] = 8);
} else
{var statearr_13213_13234 = state_13204__$1;(statearr_13213_13234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 6))
{var state_13204__$1 = state_13204;var statearr_13215_13235 = state_13204__$1;(statearr_13215_13235[2] = null);
(statearr_13215_13235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 7))
{var inst_13199 = (state_13204[2]);var state_13204__$1 = state_13204;var statearr_13216_13236 = state_13204__$1;(statearr_13216_13236[2] = inst_13199);
(statearr_13216_13236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 8))
{var inst_13181 = (state_13204[7]);var tmp13214 = inst_13181;var inst_13181__$1 = tmp13214;var state_13204__$1 = (function (){var statearr_13217 = state_13204;(statearr_13217[7] = inst_13181__$1);
return statearr_13217;
})();var statearr_13218_13237 = state_13204__$1;(statearr_13218_13237[2] = null);
(statearr_13218_13237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 9))
{var inst_13184 = (state_13204[9]);var state_13204__$1 = state_13204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13204__$1,11,out,inst_13184);
} else
{if((state_val_13205 === 10))
{var inst_13196 = (state_13204[2]);var state_13204__$1 = state_13204;var statearr_13219_13238 = state_13204__$1;(statearr_13219_13238[2] = inst_13196);
(statearr_13219_13238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13205 === 11))
{var inst_13184 = (state_13204[9]);var inst_13193 = (state_13204[2]);var inst_13181 = inst_13184;var state_13204__$1 = (function (){var statearr_13220 = state_13204;(statearr_13220[7] = inst_13181);
(statearr_13220[10] = inst_13193);
return statearr_13220;
})();var statearr_13221_13239 = state_13204__$1;(statearr_13221_13239[2] = null);
(statearr_13221_13239[1] = 2);
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
});})(c__7136__auto___13229,out))
;return ((function (switch__7121__auto__,c__7136__auto___13229,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13225 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13225[0] = state_machine__7122__auto__);
(statearr_13225[1] = 1);
return statearr_13225;
});
var state_machine__7122__auto____1 = (function (state_13204){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13204);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13226){if((e13226 instanceof Object))
{var ex__7125__auto__ = e13226;var statearr_13227_13240 = state_13204;(statearr_13227_13240[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13241 = state_13204;
state_13204 = G__13241;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13204){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13229,out))
})();var state__7138__auto__ = (function (){var statearr_13228 = f__7137__auto__.call(null);(statearr_13228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13229);
return statearr_13228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13229,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13376 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13376,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13376,out){
return (function (state_13346){var state_val_13347 = (state_13346[1]);if((state_val_13347 === 1))
{var inst_13309 = (new Array(n));var inst_13310 = inst_13309;var inst_13311 = 0;var state_13346__$1 = (function (){var statearr_13348 = state_13346;(statearr_13348[7] = inst_13310);
(statearr_13348[8] = inst_13311);
return statearr_13348;
})();var statearr_13349_13377 = state_13346__$1;(statearr_13349_13377[2] = null);
(statearr_13349_13377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 2))
{var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13346__$1,4,ch);
} else
{if((state_val_13347 === 3))
{var inst_13344 = (state_13346[2]);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13346__$1,inst_13344);
} else
{if((state_val_13347 === 4))
{var inst_13314 = (state_13346[9]);var inst_13314__$1 = (state_13346[2]);var inst_13315 = (inst_13314__$1 == null);var inst_13316 = cljs.core.not.call(null,inst_13315);var state_13346__$1 = (function (){var statearr_13350 = state_13346;(statearr_13350[9] = inst_13314__$1);
return statearr_13350;
})();if(inst_13316)
{var statearr_13351_13378 = state_13346__$1;(statearr_13351_13378[1] = 5);
} else
{var statearr_13352_13379 = state_13346__$1;(statearr_13352_13379[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 5))
{var inst_13310 = (state_13346[7]);var inst_13314 = (state_13346[9]);var inst_13311 = (state_13346[8]);var inst_13319 = (state_13346[10]);var inst_13318 = (inst_13310[inst_13311] = inst_13314);var inst_13319__$1 = (inst_13311 + 1);var inst_13320 = (inst_13319__$1 < n);var state_13346__$1 = (function (){var statearr_13353 = state_13346;(statearr_13353[11] = inst_13318);
(statearr_13353[10] = inst_13319__$1);
return statearr_13353;
})();if(cljs.core.truth_(inst_13320))
{var statearr_13354_13380 = state_13346__$1;(statearr_13354_13380[1] = 8);
} else
{var statearr_13355_13381 = state_13346__$1;(statearr_13355_13381[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 6))
{var inst_13311 = (state_13346[8]);var inst_13332 = (inst_13311 > 0);var state_13346__$1 = state_13346;if(cljs.core.truth_(inst_13332))
{var statearr_13357_13382 = state_13346__$1;(statearr_13357_13382[1] = 12);
} else
{var statearr_13358_13383 = state_13346__$1;(statearr_13358_13383[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 7))
{var inst_13342 = (state_13346[2]);var state_13346__$1 = state_13346;var statearr_13359_13384 = state_13346__$1;(statearr_13359_13384[2] = inst_13342);
(statearr_13359_13384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 8))
{var inst_13310 = (state_13346[7]);var inst_13319 = (state_13346[10]);var tmp13356 = inst_13310;var inst_13310__$1 = tmp13356;var inst_13311 = inst_13319;var state_13346__$1 = (function (){var statearr_13360 = state_13346;(statearr_13360[7] = inst_13310__$1);
(statearr_13360[8] = inst_13311);
return statearr_13360;
})();var statearr_13361_13385 = state_13346__$1;(statearr_13361_13385[2] = null);
(statearr_13361_13385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 9))
{var inst_13310 = (state_13346[7]);var inst_13324 = cljs.core.vec.call(null,inst_13310);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13346__$1,11,out,inst_13324);
} else
{if((state_val_13347 === 10))
{var inst_13330 = (state_13346[2]);var state_13346__$1 = state_13346;var statearr_13362_13386 = state_13346__$1;(statearr_13362_13386[2] = inst_13330);
(statearr_13362_13386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 11))
{var inst_13326 = (state_13346[2]);var inst_13327 = (new Array(n));var inst_13310 = inst_13327;var inst_13311 = 0;var state_13346__$1 = (function (){var statearr_13363 = state_13346;(statearr_13363[7] = inst_13310);
(statearr_13363[8] = inst_13311);
(statearr_13363[12] = inst_13326);
return statearr_13363;
})();var statearr_13364_13387 = state_13346__$1;(statearr_13364_13387[2] = null);
(statearr_13364_13387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 12))
{var inst_13310 = (state_13346[7]);var inst_13334 = cljs.core.vec.call(null,inst_13310);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13346__$1,15,out,inst_13334);
} else
{if((state_val_13347 === 13))
{var state_13346__$1 = state_13346;var statearr_13365_13388 = state_13346__$1;(statearr_13365_13388[2] = null);
(statearr_13365_13388[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 14))
{var inst_13339 = (state_13346[2]);var inst_13340 = cljs.core.async.close_BANG_.call(null,out);var state_13346__$1 = (function (){var statearr_13366 = state_13346;(statearr_13366[13] = inst_13339);
return statearr_13366;
})();var statearr_13367_13389 = state_13346__$1;(statearr_13367_13389[2] = inst_13340);
(statearr_13367_13389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 15))
{var inst_13336 = (state_13346[2]);var state_13346__$1 = state_13346;var statearr_13368_13390 = state_13346__$1;(statearr_13368_13390[2] = inst_13336);
(statearr_13368_13390[1] = 14);
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
});})(c__7136__auto___13376,out))
;return ((function (switch__7121__auto__,c__7136__auto___13376,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13372[0] = state_machine__7122__auto__);
(statearr_13372[1] = 1);
return statearr_13372;
});
var state_machine__7122__auto____1 = (function (state_13346){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13346);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13373){if((e13373 instanceof Object))
{var ex__7125__auto__ = e13373;var statearr_13374_13391 = state_13346;(statearr_13374_13391[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13392 = state_13346;
state_13346 = G__13392;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13346){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13376,out))
})();var state__7138__auto__ = (function (){var statearr_13375 = f__7137__auto__.call(null);(statearr_13375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13376);
return statearr_13375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13376,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7136__auto___13535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13535,out){
return (function (){var f__7137__auto__ = (function (){var switch__7121__auto__ = ((function (c__7136__auto___13535,out){
return (function (state_13505){var state_val_13506 = (state_13505[1]);if((state_val_13506 === 1))
{var inst_13464 = [];var inst_13465 = inst_13464;var inst_13466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13505__$1 = (function (){var statearr_13507 = state_13505;(statearr_13507[7] = inst_13466);
(statearr_13507[8] = inst_13465);
return statearr_13507;
})();var statearr_13508_13536 = state_13505__$1;(statearr_13508_13536[2] = null);
(statearr_13508_13536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 2))
{var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13505__$1,4,ch);
} else
{if((state_val_13506 === 3))
{var inst_13503 = (state_13505[2]);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13505__$1,inst_13503);
} else
{if((state_val_13506 === 4))
{var inst_13469 = (state_13505[9]);var inst_13469__$1 = (state_13505[2]);var inst_13470 = (inst_13469__$1 == null);var inst_13471 = cljs.core.not.call(null,inst_13470);var state_13505__$1 = (function (){var statearr_13509 = state_13505;(statearr_13509[9] = inst_13469__$1);
return statearr_13509;
})();if(inst_13471)
{var statearr_13510_13537 = state_13505__$1;(statearr_13510_13537[1] = 5);
} else
{var statearr_13511_13538 = state_13505__$1;(statearr_13511_13538[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 5))
{var inst_13473 = (state_13505[10]);var inst_13469 = (state_13505[9]);var inst_13466 = (state_13505[7]);var inst_13473__$1 = f.call(null,inst_13469);var inst_13474 = cljs.core._EQ_.call(null,inst_13473__$1,inst_13466);var inst_13475 = cljs.core.keyword_identical_QMARK_.call(null,inst_13466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13476 = (inst_13474) || (inst_13475);var state_13505__$1 = (function (){var statearr_13512 = state_13505;(statearr_13512[10] = inst_13473__$1);
return statearr_13512;
})();if(cljs.core.truth_(inst_13476))
{var statearr_13513_13539 = state_13505__$1;(statearr_13513_13539[1] = 8);
} else
{var statearr_13514_13540 = state_13505__$1;(statearr_13514_13540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 6))
{var inst_13465 = (state_13505[8]);var inst_13490 = inst_13465.length;var inst_13491 = (inst_13490 > 0);var state_13505__$1 = state_13505;if(cljs.core.truth_(inst_13491))
{var statearr_13516_13541 = state_13505__$1;(statearr_13516_13541[1] = 12);
} else
{var statearr_13517_13542 = state_13505__$1;(statearr_13517_13542[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 7))
{var inst_13501 = (state_13505[2]);var state_13505__$1 = state_13505;var statearr_13518_13543 = state_13505__$1;(statearr_13518_13543[2] = inst_13501);
(statearr_13518_13543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 8))
{var inst_13473 = (state_13505[10]);var inst_13469 = (state_13505[9]);var inst_13465 = (state_13505[8]);var inst_13478 = inst_13465.push(inst_13469);var tmp13515 = inst_13465;var inst_13465__$1 = tmp13515;var inst_13466 = inst_13473;var state_13505__$1 = (function (){var statearr_13519 = state_13505;(statearr_13519[11] = inst_13478);
(statearr_13519[7] = inst_13466);
(statearr_13519[8] = inst_13465__$1);
return statearr_13519;
})();var statearr_13520_13544 = state_13505__$1;(statearr_13520_13544[2] = null);
(statearr_13520_13544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 9))
{var inst_13465 = (state_13505[8]);var inst_13481 = cljs.core.vec.call(null,inst_13465);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13505__$1,11,out,inst_13481);
} else
{if((state_val_13506 === 10))
{var inst_13488 = (state_13505[2]);var state_13505__$1 = state_13505;var statearr_13521_13545 = state_13505__$1;(statearr_13521_13545[2] = inst_13488);
(statearr_13521_13545[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 11))
{var inst_13473 = (state_13505[10]);var inst_13469 = (state_13505[9]);var inst_13483 = (state_13505[2]);var inst_13484 = [];var inst_13485 = inst_13484.push(inst_13469);var inst_13465 = inst_13484;var inst_13466 = inst_13473;var state_13505__$1 = (function (){var statearr_13522 = state_13505;(statearr_13522[12] = inst_13485);
(statearr_13522[13] = inst_13483);
(statearr_13522[7] = inst_13466);
(statearr_13522[8] = inst_13465);
return statearr_13522;
})();var statearr_13523_13546 = state_13505__$1;(statearr_13523_13546[2] = null);
(statearr_13523_13546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 12))
{var inst_13465 = (state_13505[8]);var inst_13493 = cljs.core.vec.call(null,inst_13465);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13505__$1,15,out,inst_13493);
} else
{if((state_val_13506 === 13))
{var state_13505__$1 = state_13505;var statearr_13524_13547 = state_13505__$1;(statearr_13524_13547[2] = null);
(statearr_13524_13547[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 14))
{var inst_13498 = (state_13505[2]);var inst_13499 = cljs.core.async.close_BANG_.call(null,out);var state_13505__$1 = (function (){var statearr_13525 = state_13505;(statearr_13525[14] = inst_13498);
return statearr_13525;
})();var statearr_13526_13548 = state_13505__$1;(statearr_13526_13548[2] = inst_13499);
(statearr_13526_13548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13506 === 15))
{var inst_13495 = (state_13505[2]);var state_13505__$1 = state_13505;var statearr_13527_13549 = state_13505__$1;(statearr_13527_13549[2] = inst_13495);
(statearr_13527_13549[1] = 14);
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
});})(c__7136__auto___13535,out))
;return ((function (switch__7121__auto__,c__7136__auto___13535,out){
return (function() {
var state_machine__7122__auto__ = null;
var state_machine__7122__auto____0 = (function (){var statearr_13531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13531[0] = state_machine__7122__auto__);
(statearr_13531[1] = 1);
return statearr_13531;
});
var state_machine__7122__auto____1 = (function (state_13505){while(true){
var ret_value__7123__auto__ = (function (){try{while(true){
var result__7124__auto__ = switch__7121__auto__.call(null,state_13505);if(cljs.core.keyword_identical_QMARK_.call(null,result__7124__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7124__auto__;
}
break;
}
}catch (e13532){if((e13532 instanceof Object))
{var ex__7125__auto__ = e13532;var statearr_13533_13550 = state_13505;(statearr_13533_13550[5] = ex__7125__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7123__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13551 = state_13505;
state_13505 = G__13551;
continue;
}
} else
{return ret_value__7123__auto__;
}
break;
}
});
state_machine__7122__auto__ = function(state_13505){
switch(arguments.length){
case 0:
return state_machine__7122__auto____0.call(this);
case 1:
return state_machine__7122__auto____1.call(this,state_13505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7122__auto____0;
state_machine__7122__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7122__auto____1;
return state_machine__7122__auto__;
})()
;})(switch__7121__auto__,c__7136__auto___13535,out))
})();var state__7138__auto__ = (function (){var statearr_13534 = f__7137__auto__.call(null);(statearr_13534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13535);
return statearr_13534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13535,out))
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