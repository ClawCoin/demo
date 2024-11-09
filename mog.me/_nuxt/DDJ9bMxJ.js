function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./CRUdGszt.js", "./Bfc6mzjo.js", "./entry.CXNFOBZt.css"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
import {aa as Cs, by as M1, bz as $u, bg as Ho, bA as Yr, b2 as j1} from "./Bfc6mzjo.js";
import {c as q1, g as rf, s as F1, d as z1, k as H1, a as B1} from "./DeDRPzjy.js";
var Bo = {
    exports: {}
}, nf;
function kd() {
    if (nf)
        return Bo.exports;
    nf = 1;
    var i = typeof Reflect == "object" ? Reflect : null, e = i && typeof i.apply == "function" ? i.apply : function(E, D, u) {
        return Function.prototype.apply.call(E, D, u)
    }
    , t;
    i && typeof i.ownKeys == "function" ? t = i.ownKeys : Object.getOwnPropertySymbols ? t = function(E) {
        return Object.getOwnPropertyNames(E).concat(Object.getOwnPropertySymbols(E))
    }
    : t = function(E) {
        return Object.getOwnPropertyNames(E)
    }
    ;
    function s(w) {
        console && console.warn && console.warn(w)
    }
    var o = Number.isNaN || function(E) {
        return E !== E
    }
    ;
    function c() {
        c.init.call(this)
    }
    Bo.exports = c,
    Bo.exports.once = ee,
    c.EventEmitter = c,
    c.prototype._events = void 0,
    c.prototype._eventsCount = 0,
    c.prototype._maxListeners = void 0;
    var d = 10;
    function f(w) {
        if (typeof w != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof w)
    }
    Object.defineProperty(c, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return d
        },
        set: function(w) {
            if (typeof w != "number" || w < 0 || o(w))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + w + ".");
            d = w
        }
    }),
    c.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    c.prototype.setMaxListeners = function(E) {
        if (typeof E != "number" || E < 0 || o(E))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + E + ".");
        return this._maxListeners = E,
        this
    }
    ;
    function p(w) {
        return w._maxListeners === void 0 ? c.defaultMaxListeners : w._maxListeners
    }
    c.prototype.getMaxListeners = function() {
        return p(this)
    }
    ,
    c.prototype.emit = function(E) {
        for (var D = [], u = 1; u < arguments.length; u++)
            D.push(arguments[u]);
        var b = E === "error"
          , V = this._events;
        if (V !== void 0)
            b = b && V.error === void 0;
        else if (!b)
            return !1;
        if (b) {
            var G;
            if (D.length > 0 && (G = D[0]),
            G instanceof Error)
                throw G;
            var oe = new Error("Unhandled error." + (G ? " (" + G.message + ")" : ""));
            throw oe.context = G,
            oe
        }
        var pe = V[E];
        if (pe === void 0)
            return !1;
        if (typeof pe == "function")
            e(pe, this, D);
        else
            for (var ge = pe.length, I = O(pe, ge), u = 0; u < ge; ++u)
                e(I[u], this, D);
        return !0
    }
    ;
    function g(w, E, D, u) {
        var b, V, G;
        if (f(D),
        V = w._events,
        V === void 0 ? (V = w._events = Object.create(null),
        w._eventsCount = 0) : (V.newListener !== void 0 && (w.emit("newListener", E, D.listener ? D.listener : D),
        V = w._events),
        G = V[E]),
        G === void 0)
            G = V[E] = D,
            ++w._eventsCount;
        else if (typeof G == "function" ? G = V[E] = u ? [D, G] : [G, D] : u ? G.unshift(D) : G.push(D),
        b = p(w),
        b > 0 && G.length > b && !G.warned) {
            G.warned = !0;
            var oe = new Error("Possible EventEmitter memory leak detected. " + G.length + " " + String(E) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            oe.name = "MaxListenersExceededWarning",
            oe.emitter = w,
            oe.type = E,
            oe.count = G.length,
            s(oe)
        }
        return w
    }
    c.prototype.addListener = function(E, D) {
        return g(this, E, D, !1)
    }
    ,
    c.prototype.on = c.prototype.addListener,
    c.prototype.prependListener = function(E, D) {
        return g(this, E, D, !0)
    }
    ;
    function v() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
            this.fired = !0,
            arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function S(w, E, D) {
        var u = {
            fired: !1,
            wrapFn: void 0,
            target: w,
            type: E,
            listener: D
        }
          , b = v.bind(u);
        return b.listener = D,
        u.wrapFn = b,
        b
    }
    c.prototype.once = function(E, D) {
        return f(D),
        this.on(E, S(this, E, D)),
        this
    }
    ,
    c.prototype.prependOnceListener = function(E, D) {
        return f(D),
        this.prependListener(E, S(this, E, D)),
        this
    }
    ,
    c.prototype.removeListener = function(E, D) {
        var u, b, V, G, oe;
        if (f(D),
        b = this._events,
        b === void 0)
            return this;
        if (u = b[E],
        u === void 0)
            return this;
        if (u === D || u.listener === D)
            --this._eventsCount === 0 ? this._events = Object.create(null) : (delete b[E],
            b.removeListener && this.emit("removeListener", E, u.listener || D));
        else if (typeof u != "function") {
            for (V = -1,
            G = u.length - 1; G >= 0; G--)
                if (u[G] === D || u[G].listener === D) {
                    oe = u[G].listener,
                    V = G;
                    break
                }
            if (V < 0)
                return this;
            V === 0 ? u.shift() : K(u, V),
            u.length === 1 && (b[E] = u[0]),
            b.removeListener !== void 0 && this.emit("removeListener", E, oe || D)
        }
        return this
    }
    ,
    c.prototype.off = c.prototype.removeListener,
    c.prototype.removeAllListeners = function(E) {
        var D, u, b;
        if (u = this._events,
        u === void 0)
            return this;
        if (u.removeListener === void 0)
            return arguments.length === 0 ? (this._events = Object.create(null),
            this._eventsCount = 0) : u[E] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete u[E]),
            this;
        if (arguments.length === 0) {
            var V = Object.keys(u), G;
            for (b = 0; b < V.length; ++b)
                G = V[b],
                G !== "removeListener" && this.removeAllListeners(G);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if (D = u[E],
        typeof D == "function")
            this.removeListener(E, D);
        else if (D !== void 0)
            for (b = D.length - 1; b >= 0; b--)
                this.removeListener(E, D[b]);
        return this
    }
    ;
    function P(w, E, D) {
        var u = w._events;
        if (u === void 0)
            return [];
        var b = u[E];
        return b === void 0 ? [] : typeof b == "function" ? D ? [b.listener || b] : [b] : D ? B(b) : O(b, b.length)
    }
    c.prototype.listeners = function(E) {
        return P(this, E, !0)
    }
    ,
    c.prototype.rawListeners = function(E) {
        return P(this, E, !1)
    }
    ,
    c.listenerCount = function(w, E) {
        return typeof w.listenerCount == "function" ? w.listenerCount(E) : A.call(w, E)
    }
    ,
    c.prototype.listenerCount = A;
    function A(w) {
        var E = this._events;
        if (E !== void 0) {
            var D = E[w];
            if (typeof D == "function")
                return 1;
            if (D !== void 0)
                return D.length
        }
        return 0
    }
    c.prototype.eventNames = function() {
        return this._eventsCount > 0 ? t(this._events) : []
    }
    ;
    function O(w, E) {
        for (var D = new Array(E), u = 0; u < E; ++u)
            D[u] = w[u];
        return D
    }
    function K(w, E) {
        for (; E + 1 < w.length; E++)
            w[E] = w[E + 1];
        w.pop()
    }
    function B(w) {
        for (var E = new Array(w.length), D = 0; D < E.length; ++D)
            E[D] = w[D].listener || w[D];
        return E
    }
    function ee(w, E) {
        return new Promise(function(D, u) {
            function b(G) {
                w.removeListener(E, V),
                u(G)
            }
            function V() {
                typeof w.removeListener == "function" && w.removeListener("error", b),
                D([].slice.call(arguments))
            }
            U(w, E, V, {
                once: !0
            }),
            E !== "error" && $(w, b, {
                once: !0
            })
        }
        )
    }
    function $(w, E, D) {
        typeof w.on == "function" && U(w, "error", E, D)
    }
    function U(w, E, D, u) {
        if (typeof w.on == "function")
            u.once ? w.once(E, D) : w.on(E, D);
        else if (typeof w.addEventListener == "function")
            w.addEventListener(E, function b(V) {
                u.once && w.removeEventListener(E, b),
                D(V)
            });
        else
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof w)
    }
    return Bo.exports
}
var Fr = kd();
const Lu = Cs(Fr);
var Uu = {}
  , oa = {}
  , Ue = {}
  , Vd = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    function e(f, p) {
        var g = f >>> 16 & 65535
          , v = f & 65535
          , S = p >>> 16 & 65535
          , P = p & 65535;
        return v * P + (g * P + v * S << 16 >>> 0) | 0
    }
    i.mul = Math.imul || e;
    function t(f, p) {
        return f + p | 0
    }
    i.add = t;
    function s(f, p) {
        return f - p | 0
    }
    i.sub = s;
    function o(f, p) {
        return f << p | f >>> 32 - p
    }
    i.rotl = o;
    function c(f, p) {
        return f << 32 - p | f >>> p
    }
    i.rotr = c;
    function d(f) {
        return typeof f == "number" && isFinite(f) && Math.floor(f) === f
    }
    i.isInteger = Number.isInteger || d,
    i.MAX_SAFE_INTEGER = 9007199254740991,
    i.isSafeInteger = function(f) {
        return i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER
    }
}
)(Vd);
Object.defineProperty(Ue, "__esModule", {
    value: !0
});
var Wd = Vd;
function K1(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 0] << 8 | i[e + 1]) << 16 >> 16
}
Ue.readInt16BE = K1;
function k1(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 0] << 8 | i[e + 1]) >>> 0
}
Ue.readUint16BE = k1;
function V1(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 1] << 8 | i[e]) << 16 >> 16
}
Ue.readInt16LE = V1;
function W1(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 1] << 8 | i[e]) >>> 0
}
Ue.readUint16LE = W1;
function Gd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 8,
    e[t + 1] = i >>> 0,
    e
}
Ue.writeUint16BE = Gd;
Ue.writeInt16BE = Gd;
function Yd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 0,
    e[t + 1] = i >>> 8,
    e
}
Ue.writeUint16LE = Yd;
Ue.writeInt16LE = Yd;
function lu(i, e) {
    return e === void 0 && (e = 0),
    i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]
}
Ue.readInt32BE = lu;
function fu(i, e) {
    return e === void 0 && (e = 0),
    (i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]) >>> 0
}
Ue.readUint32BE = fu;
function du(i, e) {
    return e === void 0 && (e = 0),
    i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]
}
Ue.readInt32LE = du;
function pu(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]) >>> 0
}
Ue.readUint32LE = pu;
function Zo(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 24,
    e[t + 1] = i >>> 16,
    e[t + 2] = i >>> 8,
    e[t + 3] = i >>> 0,
    e
}
Ue.writeUint32BE = Zo;
Ue.writeInt32BE = Zo;
function ea(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 0,
    e[t + 1] = i >>> 8,
    e[t + 2] = i >>> 16,
    e[t + 3] = i >>> 24,
    e
}
Ue.writeUint32LE = ea;
Ue.writeInt32LE = ea;
function G1(i, e) {
    e === void 0 && (e = 0);
    var t = lu(i, e)
      , s = lu(i, e + 4);
    return t * 4294967296 + s - (s >> 31) * 4294967296
}
Ue.readInt64BE = G1;
function Y1(i, e) {
    e === void 0 && (e = 0);
    var t = fu(i, e)
      , s = fu(i, e + 4);
    return t * 4294967296 + s
}
Ue.readUint64BE = Y1;
function J1(i, e) {
    e === void 0 && (e = 0);
    var t = du(i, e)
      , s = du(i, e + 4);
    return s * 4294967296 + t - (t >> 31) * 4294967296
}
Ue.readInt64LE = J1;
function Q1(i, e) {
    e === void 0 && (e = 0);
    var t = pu(i, e)
      , s = pu(i, e + 4);
    return s * 4294967296 + t
}
Ue.readUint64LE = Q1;
function Jd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Zo(i / 4294967296 >>> 0, e, t),
    Zo(i >>> 0, e, t + 4),
    e
}
Ue.writeUint64BE = Jd;
Ue.writeInt64BE = Jd;
function Qd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    ea(i >>> 0, e, t),
    ea(i / 4294967296 >>> 0, e, t + 4),
    e
}
Ue.writeUint64LE = Qd;
Ue.writeInt64LE = Qd;
function X1(i, e, t) {
    if (t === void 0 && (t = 0),
    i % 8 !== 0)
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t)
        throw new Error("readUintBE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
        s += e[c] * o,
        o *= 256;
    return s
}
Ue.readUintBE = X1;
function Z1(i, e, t) {
    if (t === void 0 && (t = 0),
    i % 8 !== 0)
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t)
        throw new Error("readUintLE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = t; c < t + i / 8; c++)
        s += e[c] * o,
        o *= 256;
    return s
}
Ue.readUintLE = Z1;
function eb(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!Wd.isSafeInteger(e))
        throw new Error("writeUintBE value must be an integer");
    for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
        t[c] = e / o & 255,
        o *= 256;
    return t
}
Ue.writeUintBE = eb;
function tb(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!Wd.isSafeInteger(e))
        throw new Error("writeUintLE value must be an integer");
    for (var o = 1, c = s; c < s + i / 8; c++)
        t[c] = e / o & 255,
        o *= 256;
    return t
}
Ue.writeUintLE = tb;
function rb(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat32(e)
}
Ue.readFloat32BE = rb;
function ib(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat32(e, !0)
}
Ue.readFloat32LE = ib;
function nb(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat64(e)
}
Ue.readFloat64BE = nb;
function sb(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat64(e, !0)
}
Ue.readFloat64LE = sb;
function ob(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat32(t, i),
    e
}
Ue.writeFloat32BE = ob;
function ab(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat32(t, i, !0),
    e
}
Ue.writeFloat32LE = ab;
function cb(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat64(t, i),
    e
}
Ue.writeFloat64BE = cb;
function ub(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat64(t, i, !0),
    e
}
Ue.writeFloat64LE = ub;
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
    value: !0
});
function hb(i) {
    for (var e = 0; e < i.length; e++)
        i[e] = 0;
    return i
}
Cr.wipe = hb;
Object.defineProperty(oa, "__esModule", {
    value: !0
});
var Xt = Ue
  , gu = Cr
  , lb = 20;
function fb(i, e, t) {
    for (var s = 1634760805, o = 857760878, c = 2036477234, d = 1797285236, f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], g = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], v = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], S = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], P = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], A = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], O = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], K = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], B = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], ee = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], $ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], U = s, w = o, E = c, D = d, u = f, b = p, V = g, G = v, oe = S, pe = P, ge = A, I = O, T = K, te = B, X = ee, k = $, W = 0; W < lb; W += 2)
        U = U + u | 0,
        T ^= U,
        T = T >>> 16 | T << 16,
        oe = oe + T | 0,
        u ^= oe,
        u = u >>> 20 | u << 12,
        w = w + b | 0,
        te ^= w,
        te = te >>> 16 | te << 16,
        pe = pe + te | 0,
        b ^= pe,
        b = b >>> 20 | b << 12,
        E = E + V | 0,
        X ^= E,
        X = X >>> 16 | X << 16,
        ge = ge + X | 0,
        V ^= ge,
        V = V >>> 20 | V << 12,
        D = D + G | 0,
        k ^= D,
        k = k >>> 16 | k << 16,
        I = I + k | 0,
        G ^= I,
        G = G >>> 20 | G << 12,
        E = E + V | 0,
        X ^= E,
        X = X >>> 24 | X << 8,
        ge = ge + X | 0,
        V ^= ge,
        V = V >>> 25 | V << 7,
        D = D + G | 0,
        k ^= D,
        k = k >>> 24 | k << 8,
        I = I + k | 0,
        G ^= I,
        G = G >>> 25 | G << 7,
        w = w + b | 0,
        te ^= w,
        te = te >>> 24 | te << 8,
        pe = pe + te | 0,
        b ^= pe,
        b = b >>> 25 | b << 7,
        U = U + u | 0,
        T ^= U,
        T = T >>> 24 | T << 8,
        oe = oe + T | 0,
        u ^= oe,
        u = u >>> 25 | u << 7,
        U = U + b | 0,
        k ^= U,
        k = k >>> 16 | k << 16,
        ge = ge + k | 0,
        b ^= ge,
        b = b >>> 20 | b << 12,
        w = w + V | 0,
        T ^= w,
        T = T >>> 16 | T << 16,
        I = I + T | 0,
        V ^= I,
        V = V >>> 20 | V << 12,
        E = E + G | 0,
        te ^= E,
        te = te >>> 16 | te << 16,
        oe = oe + te | 0,
        G ^= oe,
        G = G >>> 20 | G << 12,
        D = D + u | 0,
        X ^= D,
        X = X >>> 16 | X << 16,
        pe = pe + X | 0,
        u ^= pe,
        u = u >>> 20 | u << 12,
        E = E + G | 0,
        te ^= E,
        te = te >>> 24 | te << 8,
        oe = oe + te | 0,
        G ^= oe,
        G = G >>> 25 | G << 7,
        D = D + u | 0,
        X ^= D,
        X = X >>> 24 | X << 8,
        pe = pe + X | 0,
        u ^= pe,
        u = u >>> 25 | u << 7,
        w = w + V | 0,
        T ^= w,
        T = T >>> 24 | T << 8,
        I = I + T | 0,
        V ^= I,
        V = V >>> 25 | V << 7,
        U = U + b | 0,
        k ^= U,
        k = k >>> 24 | k << 8,
        ge = ge + k | 0,
        b ^= ge,
        b = b >>> 25 | b << 7;
    Xt.writeUint32LE(U + s | 0, i, 0),
    Xt.writeUint32LE(w + o | 0, i, 4),
    Xt.writeUint32LE(E + c | 0, i, 8),
    Xt.writeUint32LE(D + d | 0, i, 12),
    Xt.writeUint32LE(u + f | 0, i, 16),
    Xt.writeUint32LE(b + p | 0, i, 20),
    Xt.writeUint32LE(V + g | 0, i, 24),
    Xt.writeUint32LE(G + v | 0, i, 28),
    Xt.writeUint32LE(oe + S | 0, i, 32),
    Xt.writeUint32LE(pe + P | 0, i, 36),
    Xt.writeUint32LE(ge + A | 0, i, 40),
    Xt.writeUint32LE(I + O | 0, i, 44),
    Xt.writeUint32LE(T + K | 0, i, 48),
    Xt.writeUint32LE(te + B | 0, i, 52),
    Xt.writeUint32LE(X + ee | 0, i, 56),
    Xt.writeUint32LE(k + $ | 0, i, 60)
}
function Xd(i, e, t, s, o) {
    if (o === void 0 && (o = 0),
    i.length !== 32)
        throw new Error("ChaCha: key size must be 32 bytes");
    if (s.length < t.length)
        throw new Error("ChaCha: destination is shorter than source");
    var c, d;
    if (o === 0) {
        if (e.length !== 8 && e.length !== 12)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        c = new Uint8Array(16),
        d = c.length - e.length,
        c.set(e, d)
    } else {
        if (e.length !== 16)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        c = e,
        d = o
    }
    for (var f = new Uint8Array(64), p = 0; p < t.length; p += 64) {
        fb(f, c, i);
        for (var g = p; g < p + 64 && g < t.length; g++)
            s[g] = t[g] ^ f[g - p];
        pb(c, 0, d)
    }
    return gu.wipe(f),
    o === 0 && gu.wipe(c),
    s
}
oa.streamXOR = Xd;
function db(i, e, t, s) {
    return s === void 0 && (s = 0),
    gu.wipe(t),
    Xd(i, e, t, t, s)
}
oa.stream = db;
function pb(i, e, t) {
    for (var s = 1; t--; )
        s = s + (i[e] & 255) | 0,
        i[e] = s & 255,
        s >>>= 8,
        e++;
    if (s > 0)
        throw new Error("ChaCha: counter overflow")
}
var Zd = {}
  , zi = {};
Object.defineProperty(zi, "__esModule", {
    value: !0
});
function gb(i, e, t) {
    return ~(i - 1) & e | i - 1 & t
}
zi.select = gb;
function yb(i, e) {
    return (i | 0) - (e | 0) - 1 >>> 31 & 1
}
zi.lessOrEqual = yb;
function ep(i, e) {
    if (i.length !== e.length)
        return 0;
    for (var t = 0, s = 0; s < i.length; s++)
        t |= i[s] ^ e[s];
    return 1 & t - 1 >>> 8
}
zi.compare = ep;
function vb(i, e) {
    return i.length === 0 || e.length === 0 ? !1 : ep(i, e) !== 0
}
zi.equal = vb;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = zi
      , t = Cr;
    i.DIGEST_LENGTH = 16;
    var s = function() {
        function d(f) {
            this.digestLength = i.DIGEST_LENGTH,
            this._buffer = new Uint8Array(16),
            this._r = new Uint16Array(10),
            this._h = new Uint16Array(10),
            this._pad = new Uint16Array(8),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !1;
            var p = f[0] | f[1] << 8;
            this._r[0] = p & 8191;
            var g = f[2] | f[3] << 8;
            this._r[1] = (p >>> 13 | g << 3) & 8191;
            var v = f[4] | f[5] << 8;
            this._r[2] = (g >>> 10 | v << 6) & 7939;
            var S = f[6] | f[7] << 8;
            this._r[3] = (v >>> 7 | S << 9) & 8191;
            var P = f[8] | f[9] << 8;
            this._r[4] = (S >>> 4 | P << 12) & 255,
            this._r[5] = P >>> 1 & 8190;
            var A = f[10] | f[11] << 8;
            this._r[6] = (P >>> 14 | A << 2) & 8191;
            var O = f[12] | f[13] << 8;
            this._r[7] = (A >>> 11 | O << 5) & 8065;
            var K = f[14] | f[15] << 8;
            this._r[8] = (O >>> 8 | K << 8) & 8191,
            this._r[9] = K >>> 5 & 127,
            this._pad[0] = f[16] | f[17] << 8,
            this._pad[1] = f[18] | f[19] << 8,
            this._pad[2] = f[20] | f[21] << 8,
            this._pad[3] = f[22] | f[23] << 8,
            this._pad[4] = f[24] | f[25] << 8,
            this._pad[5] = f[26] | f[27] << 8,
            this._pad[6] = f[28] | f[29] << 8,
            this._pad[7] = f[30] | f[31] << 8
        }
        return d.prototype._blocks = function(f, p, g) {
            for (var v = this._fin ? 0 : 2048, S = this._h[0], P = this._h[1], A = this._h[2], O = this._h[3], K = this._h[4], B = this._h[5], ee = this._h[6], $ = this._h[7], U = this._h[8], w = this._h[9], E = this._r[0], D = this._r[1], u = this._r[2], b = this._r[3], V = this._r[4], G = this._r[5], oe = this._r[6], pe = this._r[7], ge = this._r[8], I = this._r[9]; g >= 16; ) {
                var T = f[p + 0] | f[p + 1] << 8;
                S += T & 8191;
                var te = f[p + 2] | f[p + 3] << 8;
                P += (T >>> 13 | te << 3) & 8191;
                var X = f[p + 4] | f[p + 5] << 8;
                A += (te >>> 10 | X << 6) & 8191;
                var k = f[p + 6] | f[p + 7] << 8;
                O += (X >>> 7 | k << 9) & 8191;
                var W = f[p + 8] | f[p + 9] << 8;
                K += (k >>> 4 | W << 12) & 8191,
                B += W >>> 1 & 8191;
                var re = f[p + 10] | f[p + 11] << 8;
                ee += (W >>> 14 | re << 2) & 8191;
                var ne = f[p + 12] | f[p + 13] << 8;
                $ += (re >>> 11 | ne << 5) & 8191;
                var De = f[p + 14] | f[p + 15] << 8;
                U += (ne >>> 8 | De << 8) & 8191,
                w += De >>> 5 | v;
                var ae = 0
                  , Se = ae;
                Se += S * E,
                Se += P * (5 * I),
                Se += A * (5 * ge),
                Se += O * (5 * pe),
                Se += K * (5 * oe),
                ae = Se >>> 13,
                Se &= 8191,
                Se += B * (5 * G),
                Se += ee * (5 * V),
                Se += $ * (5 * b),
                Se += U * (5 * u),
                Se += w * (5 * D),
                ae += Se >>> 13,
                Se &= 8191;
                var le = ae;
                le += S * D,
                le += P * E,
                le += A * (5 * I),
                le += O * (5 * ge),
                le += K * (5 * pe),
                ae = le >>> 13,
                le &= 8191,
                le += B * (5 * oe),
                le += ee * (5 * G),
                le += $ * (5 * V),
                le += U * (5 * b),
                le += w * (5 * u),
                ae += le >>> 13,
                le &= 8191;
                var Ae = ae;
                Ae += S * u,
                Ae += P * D,
                Ae += A * E,
                Ae += O * (5 * I),
                Ae += K * (5 * ge),
                ae = Ae >>> 13,
                Ae &= 8191,
                Ae += B * (5 * pe),
                Ae += ee * (5 * oe),
                Ae += $ * (5 * G),
                Ae += U * (5 * V),
                Ae += w * (5 * b),
                ae += Ae >>> 13,
                Ae &= 8191;
                var z = ae;
                z += S * b,
                z += P * u,
                z += A * D,
                z += O * E,
                z += K * (5 * I),
                ae = z >>> 13,
                z &= 8191,
                z += B * (5 * ge),
                z += ee * (5 * pe),
                z += $ * (5 * oe),
                z += U * (5 * G),
                z += w * (5 * V),
                ae += z >>> 13,
                z &= 8191;
                var F = ae;
                F += S * V,
                F += P * b,
                F += A * u,
                F += O * D,
                F += K * E,
                ae = F >>> 13,
                F &= 8191,
                F += B * (5 * I),
                F += ee * (5 * ge),
                F += $ * (5 * pe),
                F += U * (5 * oe),
                F += w * (5 * G),
                ae += F >>> 13,
                F &= 8191;
                var L = ae;
                L += S * G,
                L += P * V,
                L += A * b,
                L += O * u,
                L += K * D,
                ae = L >>> 13,
                L &= 8191,
                L += B * E,
                L += ee * (5 * I),
                L += $ * (5 * ge),
                L += U * (5 * pe),
                L += w * (5 * oe),
                ae += L >>> 13,
                L &= 8191;
                var l = ae;
                l += S * oe,
                l += P * G,
                l += A * V,
                l += O * b,
                l += K * u,
                ae = l >>> 13,
                l &= 8191,
                l += B * D,
                l += ee * E,
                l += $ * (5 * I),
                l += U * (5 * ge),
                l += w * (5 * pe),
                ae += l >>> 13,
                l &= 8191;
                var R = ae;
                R += S * pe,
                R += P * oe,
                R += A * G,
                R += O * V,
                R += K * b,
                ae = R >>> 13,
                R &= 8191,
                R += B * u,
                R += ee * D,
                R += $ * E,
                R += U * (5 * I),
                R += w * (5 * ge),
                ae += R >>> 13,
                R &= 8191;
                var se = ae;
                se += S * ge,
                se += P * pe,
                se += A * oe,
                se += O * G,
                se += K * V,
                ae = se >>> 13,
                se &= 8191,
                se += B * b,
                se += ee * u,
                se += $ * D,
                se += U * E,
                se += w * (5 * I),
                ae += se >>> 13,
                se &= 8191;
                var he = ae;
                he += S * I,
                he += P * ge,
                he += A * pe,
                he += O * oe,
                he += K * G,
                ae = he >>> 13,
                he &= 8191,
                he += B * V,
                he += ee * b,
                he += $ * u,
                he += U * D,
                he += w * E,
                ae += he >>> 13,
                he &= 8191,
                ae = (ae << 2) + ae | 0,
                ae = ae + Se | 0,
                Se = ae & 8191,
                ae = ae >>> 13,
                le += ae,
                S = Se,
                P = le,
                A = Ae,
                O = z,
                K = F,
                B = L,
                ee = l,
                $ = R,
                U = se,
                w = he,
                p += 16,
                g -= 16
            }
            this._h[0] = S,
            this._h[1] = P,
            this._h[2] = A,
            this._h[3] = O,
            this._h[4] = K,
            this._h[5] = B,
            this._h[6] = ee,
            this._h[7] = $,
            this._h[8] = U,
            this._h[9] = w
        }
        ,
        d.prototype.finish = function(f, p) {
            p === void 0 && (p = 0);
            var g = new Uint16Array(10), v, S, P, A;
            if (this._leftover) {
                for (A = this._leftover,
                this._buffer[A++] = 1; A < 16; A++)
                    this._buffer[A] = 0;
                this._fin = 1,
                this._blocks(this._buffer, 0, 16)
            }
            for (v = this._h[1] >>> 13,
            this._h[1] &= 8191,
            A = 2; A < 10; A++)
                this._h[A] += v,
                v = this._h[A] >>> 13,
                this._h[A] &= 8191;
            for (this._h[0] += v * 5,
            v = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += v,
            v = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += v,
            g[0] = this._h[0] + 5,
            v = g[0] >>> 13,
            g[0] &= 8191,
            A = 1; A < 10; A++)
                g[A] = this._h[A] + v,
                v = g[A] >>> 13,
                g[A] &= 8191;
            for (g[9] -= 8192,
            S = (v ^ 1) - 1,
            A = 0; A < 10; A++)
                g[A] &= S;
            for (S = ~S,
            A = 0; A < 10; A++)
                this._h[A] = this._h[A] & S | g[A];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535,
            this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535,
            this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535,
            this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535,
            this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535,
            this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535,
            this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535,
            this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535,
            P = this._h[0] + this._pad[0],
            this._h[0] = P & 65535,
            A = 1; A < 8; A++)
                P = (this._h[A] + this._pad[A] | 0) + (P >>> 16) | 0,
                this._h[A] = P & 65535;
            return f[p + 0] = this._h[0] >>> 0,
            f[p + 1] = this._h[0] >>> 8,
            f[p + 2] = this._h[1] >>> 0,
            f[p + 3] = this._h[1] >>> 8,
            f[p + 4] = this._h[2] >>> 0,
            f[p + 5] = this._h[2] >>> 8,
            f[p + 6] = this._h[3] >>> 0,
            f[p + 7] = this._h[3] >>> 8,
            f[p + 8] = this._h[4] >>> 0,
            f[p + 9] = this._h[4] >>> 8,
            f[p + 10] = this._h[5] >>> 0,
            f[p + 11] = this._h[5] >>> 8,
            f[p + 12] = this._h[6] >>> 0,
            f[p + 13] = this._h[6] >>> 8,
            f[p + 14] = this._h[7] >>> 0,
            f[p + 15] = this._h[7] >>> 8,
            this._finished = !0,
            this
        }
        ,
        d.prototype.update = function(f) {
            var p = 0, g = f.length, v;
            if (this._leftover) {
                v = 16 - this._leftover,
                v > g && (v = g);
                for (var S = 0; S < v; S++)
                    this._buffer[this._leftover + S] = f[p + S];
                if (g -= v,
                p += v,
                this._leftover += v,
                this._leftover < 16)
                    return this;
                this._blocks(this._buffer, 0, 16),
                this._leftover = 0
            }
            if (g >= 16 && (v = g - g % 16,
            this._blocks(f, p, v),
            p += v,
            g -= v),
            g) {
                for (var S = 0; S < g; S++)
                    this._buffer[this._leftover + S] = f[p + S];
                this._leftover += g
            }
            return this
        }
        ,
        d.prototype.digest = function() {
            if (this._finished)
                throw new Error("Poly1305 was finished");
            var f = new Uint8Array(16);
            return this.finish(f),
            f
        }
        ,
        d.prototype.clean = function() {
            return t.wipe(this._buffer),
            t.wipe(this._r),
            t.wipe(this._h),
            t.wipe(this._pad),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !0,
            this
        }
        ,
        d
    }();
    i.Poly1305 = s;
    function o(d, f) {
        var p = new s(d);
        p.update(f);
        var g = p.digest();
        return p.clean(),
        g
    }
    i.oneTimeAuth = o;
    function c(d, f) {
        return d.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH ? !1 : e.equal(d, f)
    }
    i.equal = c
}
)(Zd);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = oa
      , t = Zd
      , s = Cr
      , o = Ue
      , c = zi;
    i.KEY_LENGTH = 32,
    i.NONCE_LENGTH = 12,
    i.TAG_LENGTH = 16;
    var d = new Uint8Array(16)
      , f = function() {
        function p(g) {
            if (this.nonceLength = i.NONCE_LENGTH,
            this.tagLength = i.TAG_LENGTH,
            g.length !== i.KEY_LENGTH)
                throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(g)
        }
        return p.prototype.seal = function(g, v, S, P) {
            if (g.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            var A = new Uint8Array(16);
            A.set(g, A.length - g.length);
            var O = new Uint8Array(32);
            e.stream(this._key, A, O, 4);
            var K = v.length + this.tagLength, B;
            if (P) {
                if (P.length !== K)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                B = P
            } else
                B = new Uint8Array(K);
            return e.streamXOR(this._key, A, v, B, 4),
            this._authenticate(B.subarray(B.length - this.tagLength, B.length), O, B.subarray(0, B.length - this.tagLength), S),
            s.wipe(A),
            B
        }
        ,
        p.prototype.open = function(g, v, S, P) {
            if (g.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            if (v.length < this.tagLength)
                return null;
            var A = new Uint8Array(16);
            A.set(g, A.length - g.length);
            var O = new Uint8Array(32);
            e.stream(this._key, A, O, 4);
            var K = new Uint8Array(this.tagLength);
            if (this._authenticate(K, O, v.subarray(0, v.length - this.tagLength), S),
            !c.equal(K, v.subarray(v.length - this.tagLength, v.length)))
                return null;
            var B = v.length - this.tagLength, ee;
            if (P) {
                if (P.length !== B)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                ee = P
            } else
                ee = new Uint8Array(B);
            return e.streamXOR(this._key, A, v.subarray(0, v.length - this.tagLength), ee, 4),
            s.wipe(A),
            ee
        }
        ,
        p.prototype.clean = function() {
            return s.wipe(this._key),
            this
        }
        ,
        p.prototype._authenticate = function(g, v, S, P) {
            var A = new t.Poly1305(v);
            P && (A.update(P),
            P.length % 16 > 0 && A.update(d.subarray(P.length % 16))),
            A.update(S),
            S.length % 16 > 0 && A.update(d.subarray(S.length % 16));
            var O = new Uint8Array(8);
            P && o.writeUint64LE(P.length, O),
            A.update(O),
            o.writeUint64LE(S.length, O),
            A.update(O);
            for (var K = A.digest(), B = 0; B < K.length; B++)
                g[B] = K[B];
            A.clean(),
            s.wipe(K),
            s.wipe(O)
        }
        ,
        p
    }();
    i.ChaCha20Poly1305 = f
}
)(Uu);
var tp = {}
  , As = {}
  , Mu = {};
Object.defineProperty(Mu, "__esModule", {
    value: !0
});
function mb(i) {
    return typeof i.saveState < "u" && typeof i.restoreState < "u" && typeof i.cleanSavedState < "u"
}
Mu.isSerializableHash = mb;
Object.defineProperty(As, "__esModule", {
    value: !0
});
var ri = Mu
  , wb = zi
  , bb = Cr
  , rp = function() {
    function i(e, t) {
        this._finished = !1,
        this._inner = new e,
        this._outer = new e,
        this.blockSize = this._outer.blockSize,
        this.digestLength = this._outer.digestLength;
        var s = new Uint8Array(this.blockSize);
        t.length > this.blockSize ? this._inner.update(t).finish(s).clean() : s.set(t);
        for (var o = 0; o < s.length; o++)
            s[o] ^= 54;
        this._inner.update(s);
        for (var o = 0; o < s.length; o++)
            s[o] ^= 106;
        this._outer.update(s),
        ri.isSerializableHash(this._inner) && ri.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(),
        this._outerKeyedState = this._outer.saveState()),
        bb.wipe(s)
    }
    return i.prototype.reset = function() {
        if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    i.prototype.clean = function() {
        ri.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState),
        ri.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState),
        this._inner.clean(),
        this._outer.clean()
    }
    ,
    i.prototype.update = function(e) {
        return this._inner.update(e),
        this
    }
    ,
    i.prototype.finish = function(e) {
        return this._finished ? (this._outer.finish(e),
        this) : (this._inner.finish(e),
        this._outer.update(e.subarray(0, this.digestLength)).finish(e),
        this._finished = !0,
        this)
    }
    ,
    i.prototype.digest = function() {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e),
        e
    }
    ,
    i.prototype.saveState = function() {
        if (!ri.isSerializableHash(this._inner))
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState()
    }
    ,
    i.prototype.restoreState = function(e) {
        if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(e),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    i.prototype.cleanSavedState = function(e) {
        if (!ri.isSerializableHash(this._inner))
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(e)
    }
    ,
    i
}();
As.HMAC = rp;
function _b(i, e, t) {
    var s = new rp(i,e);
    s.update(t);
    var o = s.digest();
    return s.clean(),
    o
}
As.hmac = _b;
As.equal = wb.equal;
Object.defineProperty(tp, "__esModule", {
    value: !0
});
var sf = As
  , of = Cr
  , Eb = function() {
    function i(e, t, s, o) {
        s === void 0 && (s = new Uint8Array(0)),
        this._counter = new Uint8Array(1),
        this._hash = e,
        this._info = o;
        var c = sf.hmac(this._hash, s, t);
        this._hmac = new sf.HMAC(e,c),
        this._buffer = new Uint8Array(this._hmac.digestLength),
        this._bufpos = this._buffer.length
    }
    return i.prototype._fillBuffer = function() {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0)
            throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
        e > 1 && this._hmac.update(this._buffer),
        this._info && this._hmac.update(this._info),
        this._hmac.update(this._counter),
        this._hmac.finish(this._buffer),
        this._bufpos = 0
    }
    ,
    i.prototype.expand = function(e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
            t[s] = this._buffer[this._bufpos++];
        return t
    }
    ,
    i.prototype.clean = function() {
        this._hmac.clean(),
        of.wipe(this._buffer),
        of.wipe(this._counter),
        this._bufpos = 0
    }
    ,
    i
}()
  , Db = tp.HKDF = Eb
  , zn = {}
  , aa = {}
  , ca = {};
Object.defineProperty(ca, "__esModule", {
    value: !0
});
ca.BrowserRandomSource = void 0;
const af = 65536;
class Sb {
    constructor() {
        this.isAvailable = !1,
        this.isInstantiated = !1;
        const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
        e && e.getRandomValues !== void 0 && (this._crypto = e,
        this.isAvailable = !0,
        this.isInstantiated = !0)
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Browser random byte generator is not available.");
        const t = new Uint8Array(e);
        for (let s = 0; s < t.length; s += af)
            this._crypto.getRandomValues(t.subarray(s, s + Math.min(t.length - s, af)));
        return t
    }
}
ca.BrowserRandomSource = Sb;
function Ib(i) {
    throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ua = {};
Object.defineProperty(ua, "__esModule", {
    value: !0
});
ua.NodeRandomSource = void 0;
const xb = Cr;
class Ob {
    constructor() {
        if (this.isAvailable = !1,
        this.isInstantiated = !1,
        typeof Ib < "u") {
            const e = M1;
            e && e.randomBytes && (this._crypto = e,
            this.isAvailable = !0,
            this.isInstantiated = !0)
        }
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        const s = new Uint8Array(e);
        for (let o = 0; o < s.length; o++)
            s[o] = t[o];
        return (0,
        xb.wipe)(t),
        s
    }
}
ua.NodeRandomSource = Ob;
Object.defineProperty(aa, "__esModule", {
    value: !0
});
aa.SystemRandomSource = void 0;
const Pb = ca
  , Cb = ua;
class Ab {
    constructor() {
        if (this.isAvailable = !1,
        this.name = "",
        this._source = new Pb.BrowserRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Browser";
            return
        }
        if (this._source = new Cb.NodeRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Node";
            return
        }
    }
    randomBytes(e) {
        if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e)
    }
}
aa.SystemRandomSource = Ab;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.randomStringForEntropy = i.randomString = i.randomUint32 = i.randomBytes = i.defaultRandomSource = void 0;
    const e = aa
      , t = Ue
      , s = Cr;
    i.defaultRandomSource = new e.SystemRandomSource;
    function o(g, v=i.defaultRandomSource) {
        return v.randomBytes(g)
    }
    i.randomBytes = o;
    function c(g=i.defaultRandomSource) {
        const v = o(4, g)
          , S = (0,
        t.readUint32LE)(v);
        return (0,
        s.wipe)(v),
        S
    }
    i.randomUint32 = c;
    const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function f(g, v=d, S=i.defaultRandomSource) {
        if (v.length < 2)
            throw new Error("randomString charset is too short");
        if (v.length > 256)
            throw new Error("randomString charset is too long");
        let P = "";
        const A = v.length
          , O = 256 - 256 % A;
        for (; g > 0; ) {
            const K = o(Math.ceil(g * 256 / O), S);
            for (let B = 0; B < K.length && g > 0; B++) {
                const ee = K[B];
                ee < O && (P += v.charAt(ee % A),
                g--)
            }
            (0,
            s.wipe)(K)
        }
        return P
    }
    i.randomString = f;
    function p(g, v=d, S=i.defaultRandomSource) {
        const P = Math.ceil(g / (Math.log(v.length) / Math.LN2));
        return f(P, v, S)
    }
    i.randomStringForEntropy = p
}
)(zn);
var ha = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = Ue
      , t = Cr;
    i.DIGEST_LENGTH = 32,
    i.BLOCK_SIZE = 64;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH,
            this.blockSize = i.BLOCK_SIZE,
            this._state = new Int32Array(8),
            this._temp = new Int32Array(64),
            this._buffer = new Uint8Array(128),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return f.prototype._initState = function() {
            this._state[0] = 1779033703,
            this._state[1] = 3144134277,
            this._state[2] = 1013904242,
            this._state[3] = 2773480762,
            this._state[4] = 1359893119,
            this._state[5] = 2600822924,
            this._state[6] = 528734635,
            this._state[7] = 1541459225
        }
        ,
        f.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        f.prototype.clean = function() {
            t.wipe(this._buffer),
            t.wipe(this._temp),
            this.reset()
        }
        ,
        f.prototype.update = function(p, g) {
            if (g === void 0 && (g = p.length),
            this._finished)
                throw new Error("SHA256: can't update because hash was finished.");
            var v = 0;
            if (this._bytesHashed += g,
            this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && g > 0; )
                    this._buffer[this._bufferLength++] = p[v++],
                    g--;
                this._bufferLength === this.blockSize && (c(this._temp, this._state, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (g >= this.blockSize && (v = c(this._temp, this._state, p, v, g),
            g %= this.blockSize); g > 0; )
                this._buffer[this._bufferLength++] = p[v++],
                g--;
            return this
        }
        ,
        f.prototype.finish = function(p) {
            if (!this._finished) {
                var g = this._bytesHashed
                  , v = this._bufferLength
                  , S = g / 536870912 | 0
                  , P = g << 3
                  , A = g % 64 < 56 ? 64 : 128;
                this._buffer[v] = 128;
                for (var O = v + 1; O < A - 8; O++)
                    this._buffer[O] = 0;
                e.writeUint32BE(S, this._buffer, A - 8),
                e.writeUint32BE(P, this._buffer, A - 4),
                c(this._temp, this._state, this._buffer, 0, A),
                this._finished = !0
            }
            for (var O = 0; O < this.digestLength / 4; O++)
                e.writeUint32BE(this._state[O], p, O * 4);
            return this
        }
        ,
        f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p),
            p
        }
        ,
        f.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        f.prototype.restoreState = function(p) {
            return this._state.set(p.state),
            this._bufferLength = p.bufferLength,
            p.buffer && this._buffer.set(p.buffer),
            this._bytesHashed = p.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        f.prototype.cleanSavedState = function(p) {
            t.wipe(p.state),
            p.buffer && t.wipe(p.buffer),
            p.bufferLength = 0,
            p.bytesHashed = 0
        }
        ,
        f
    }();
    i.SHA256 = s;
    var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    function c(f, p, g, v, S) {
        for (; S >= 64; ) {
            for (var P = p[0], A = p[1], O = p[2], K = p[3], B = p[4], ee = p[5], $ = p[6], U = p[7], w = 0; w < 16; w++) {
                var E = v + w * 4;
                f[w] = e.readUint32BE(g, E)
            }
            for (var w = 16; w < 64; w++) {
                var D = f[w - 2]
                  , u = (D >>> 17 | D << 15) ^ (D >>> 19 | D << 13) ^ D >>> 10;
                D = f[w - 15];
                var b = (D >>> 7 | D << 25) ^ (D >>> 18 | D << 14) ^ D >>> 3;
                f[w] = (u + f[w - 7] | 0) + (b + f[w - 16] | 0)
            }
            for (var w = 0; w < 64; w++) {
                var u = (((B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (B & ee ^ ~B & $) | 0) + (U + (o[w] + f[w] | 0) | 0) | 0
                  , b = ((P >>> 2 | P << 30) ^ (P >>> 13 | P << 19) ^ (P >>> 22 | P << 10)) + (P & A ^ P & O ^ A & O) | 0;
                U = $,
                $ = ee,
                ee = B,
                B = K + u | 0,
                K = O,
                O = A,
                A = P,
                P = u + b | 0
            }
            p[0] += P,
            p[1] += A,
            p[2] += O,
            p[3] += K,
            p[4] += B,
            p[5] += ee,
            p[6] += $,
            p[7] += U,
            v += 64,
            S -= 64
        }
        return v
    }
    function d(f) {
        var p = new s;
        p.update(f);
        var g = p.digest();
        return p.clean(),
        g
    }
    i.hash = d
}
)(ha);
var ju = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.sharedKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.scalarMultBase = i.scalarMult = i.SHARED_KEY_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = void 0;
    const e = zn
      , t = Cr;
    i.PUBLIC_KEY_LENGTH = 32,
    i.SECRET_KEY_LENGTH = 32,
    i.SHARED_KEY_LENGTH = 32;
    function s(w) {
        const E = new Float64Array(16);
        if (w)
            for (let D = 0; D < w.length; D++)
                E[D] = w[D];
        return E
    }
    const o = new Uint8Array(32);
    o[0] = 9;
    const c = s([56129, 1]);
    function d(w) {
        let E = 1;
        for (let D = 0; D < 16; D++) {
            let u = w[D] + E + 65535;
            E = Math.floor(u / 65536),
            w[D] = u - E * 65536
        }
        w[0] += E - 1 + 37 * (E - 1)
    }
    function f(w, E, D) {
        const u = ~(D - 1);
        for (let b = 0; b < 16; b++) {
            const V = u & (w[b] ^ E[b]);
            w[b] ^= V,
            E[b] ^= V
        }
    }
    function p(w, E) {
        const D = s()
          , u = s();
        for (let b = 0; b < 16; b++)
            u[b] = E[b];
        d(u),
        d(u),
        d(u);
        for (let b = 0; b < 2; b++) {
            D[0] = u[0] - 65517;
            for (let G = 1; G < 15; G++)
                D[G] = u[G] - 65535 - (D[G - 1] >> 16 & 1),
                D[G - 1] &= 65535;
            D[15] = u[15] - 32767 - (D[14] >> 16 & 1);
            const V = D[15] >> 16 & 1;
            D[14] &= 65535,
            f(u, D, 1 - V)
        }
        for (let b = 0; b < 16; b++)
            w[2 * b] = u[b] & 255,
            w[2 * b + 1] = u[b] >> 8
    }
    function g(w, E) {
        for (let D = 0; D < 16; D++)
            w[D] = E[2 * D] + (E[2 * D + 1] << 8);
        w[15] &= 32767
    }
    function v(w, E, D) {
        for (let u = 0; u < 16; u++)
            w[u] = E[u] + D[u]
    }
    function S(w, E, D) {
        for (let u = 0; u < 16; u++)
            w[u] = E[u] - D[u]
    }
    function P(w, E, D) {
        let u, b, V = 0, G = 0, oe = 0, pe = 0, ge = 0, I = 0, T = 0, te = 0, X = 0, k = 0, W = 0, re = 0, ne = 0, De = 0, ae = 0, Se = 0, le = 0, Ae = 0, z = 0, F = 0, L = 0, l = 0, R = 0, se = 0, he = 0, Ee = 0, He = 0, ke = 0, Me = 0, dt = 0, pt = 0, qe = D[0], Ie = D[1], Ne = D[2], $e = D[3], Fe = D[4], Oe = D[5], Le = D[6], _e = D[7], Pe = D[8], Be = D[9], xe = D[10], Ve = D[11], Ge = D[12], Ze = D[13], et = D[14], Je = D[15];
        u = E[0],
        V += u * qe,
        G += u * Ie,
        oe += u * Ne,
        pe += u * $e,
        ge += u * Fe,
        I += u * Oe,
        T += u * Le,
        te += u * _e,
        X += u * Pe,
        k += u * Be,
        W += u * xe,
        re += u * Ve,
        ne += u * Ge,
        De += u * Ze,
        ae += u * et,
        Se += u * Je,
        u = E[1],
        G += u * qe,
        oe += u * Ie,
        pe += u * Ne,
        ge += u * $e,
        I += u * Fe,
        T += u * Oe,
        te += u * Le,
        X += u * _e,
        k += u * Pe,
        W += u * Be,
        re += u * xe,
        ne += u * Ve,
        De += u * Ge,
        ae += u * Ze,
        Se += u * et,
        le += u * Je,
        u = E[2],
        oe += u * qe,
        pe += u * Ie,
        ge += u * Ne,
        I += u * $e,
        T += u * Fe,
        te += u * Oe,
        X += u * Le,
        k += u * _e,
        W += u * Pe,
        re += u * Be,
        ne += u * xe,
        De += u * Ve,
        ae += u * Ge,
        Se += u * Ze,
        le += u * et,
        Ae += u * Je,
        u = E[3],
        pe += u * qe,
        ge += u * Ie,
        I += u * Ne,
        T += u * $e,
        te += u * Fe,
        X += u * Oe,
        k += u * Le,
        W += u * _e,
        re += u * Pe,
        ne += u * Be,
        De += u * xe,
        ae += u * Ve,
        Se += u * Ge,
        le += u * Ze,
        Ae += u * et,
        z += u * Je,
        u = E[4],
        ge += u * qe,
        I += u * Ie,
        T += u * Ne,
        te += u * $e,
        X += u * Fe,
        k += u * Oe,
        W += u * Le,
        re += u * _e,
        ne += u * Pe,
        De += u * Be,
        ae += u * xe,
        Se += u * Ve,
        le += u * Ge,
        Ae += u * Ze,
        z += u * et,
        F += u * Je,
        u = E[5],
        I += u * qe,
        T += u * Ie,
        te += u * Ne,
        X += u * $e,
        k += u * Fe,
        W += u * Oe,
        re += u * Le,
        ne += u * _e,
        De += u * Pe,
        ae += u * Be,
        Se += u * xe,
        le += u * Ve,
        Ae += u * Ge,
        z += u * Ze,
        F += u * et,
        L += u * Je,
        u = E[6],
        T += u * qe,
        te += u * Ie,
        X += u * Ne,
        k += u * $e,
        W += u * Fe,
        re += u * Oe,
        ne += u * Le,
        De += u * _e,
        ae += u * Pe,
        Se += u * Be,
        le += u * xe,
        Ae += u * Ve,
        z += u * Ge,
        F += u * Ze,
        L += u * et,
        l += u * Je,
        u = E[7],
        te += u * qe,
        X += u * Ie,
        k += u * Ne,
        W += u * $e,
        re += u * Fe,
        ne += u * Oe,
        De += u * Le,
        ae += u * _e,
        Se += u * Pe,
        le += u * Be,
        Ae += u * xe,
        z += u * Ve,
        F += u * Ge,
        L += u * Ze,
        l += u * et,
        R += u * Je,
        u = E[8],
        X += u * qe,
        k += u * Ie,
        W += u * Ne,
        re += u * $e,
        ne += u * Fe,
        De += u * Oe,
        ae += u * Le,
        Se += u * _e,
        le += u * Pe,
        Ae += u * Be,
        z += u * xe,
        F += u * Ve,
        L += u * Ge,
        l += u * Ze,
        R += u * et,
        se += u * Je,
        u = E[9],
        k += u * qe,
        W += u * Ie,
        re += u * Ne,
        ne += u * $e,
        De += u * Fe,
        ae += u * Oe,
        Se += u * Le,
        le += u * _e,
        Ae += u * Pe,
        z += u * Be,
        F += u * xe,
        L += u * Ve,
        l += u * Ge,
        R += u * Ze,
        se += u * et,
        he += u * Je,
        u = E[10],
        W += u * qe,
        re += u * Ie,
        ne += u * Ne,
        De += u * $e,
        ae += u * Fe,
        Se += u * Oe,
        le += u * Le,
        Ae += u * _e,
        z += u * Pe,
        F += u * Be,
        L += u * xe,
        l += u * Ve,
        R += u * Ge,
        se += u * Ze,
        he += u * et,
        Ee += u * Je,
        u = E[11],
        re += u * qe,
        ne += u * Ie,
        De += u * Ne,
        ae += u * $e,
        Se += u * Fe,
        le += u * Oe,
        Ae += u * Le,
        z += u * _e,
        F += u * Pe,
        L += u * Be,
        l += u * xe,
        R += u * Ve,
        se += u * Ge,
        he += u * Ze,
        Ee += u * et,
        He += u * Je,
        u = E[12],
        ne += u * qe,
        De += u * Ie,
        ae += u * Ne,
        Se += u * $e,
        le += u * Fe,
        Ae += u * Oe,
        z += u * Le,
        F += u * _e,
        L += u * Pe,
        l += u * Be,
        R += u * xe,
        se += u * Ve,
        he += u * Ge,
        Ee += u * Ze,
        He += u * et,
        ke += u * Je,
        u = E[13],
        De += u * qe,
        ae += u * Ie,
        Se += u * Ne,
        le += u * $e,
        Ae += u * Fe,
        z += u * Oe,
        F += u * Le,
        L += u * _e,
        l += u * Pe,
        R += u * Be,
        se += u * xe,
        he += u * Ve,
        Ee += u * Ge,
        He += u * Ze,
        ke += u * et,
        Me += u * Je,
        u = E[14],
        ae += u * qe,
        Se += u * Ie,
        le += u * Ne,
        Ae += u * $e,
        z += u * Fe,
        F += u * Oe,
        L += u * Le,
        l += u * _e,
        R += u * Pe,
        se += u * Be,
        he += u * xe,
        Ee += u * Ve,
        He += u * Ge,
        ke += u * Ze,
        Me += u * et,
        dt += u * Je,
        u = E[15],
        Se += u * qe,
        le += u * Ie,
        Ae += u * Ne,
        z += u * $e,
        F += u * Fe,
        L += u * Oe,
        l += u * Le,
        R += u * _e,
        se += u * Pe,
        he += u * Be,
        Ee += u * xe,
        He += u * Ve,
        ke += u * Ge,
        Me += u * Ze,
        dt += u * et,
        pt += u * Je,
        V += 38 * le,
        G += 38 * Ae,
        oe += 38 * z,
        pe += 38 * F,
        ge += 38 * L,
        I += 38 * l,
        T += 38 * R,
        te += 38 * se,
        X += 38 * he,
        k += 38 * Ee,
        W += 38 * He,
        re += 38 * ke,
        ne += 38 * Me,
        De += 38 * dt,
        ae += 38 * pt,
        b = 1,
        u = V + b + 65535,
        b = Math.floor(u / 65536),
        V = u - b * 65536,
        u = G + b + 65535,
        b = Math.floor(u / 65536),
        G = u - b * 65536,
        u = oe + b + 65535,
        b = Math.floor(u / 65536),
        oe = u - b * 65536,
        u = pe + b + 65535,
        b = Math.floor(u / 65536),
        pe = u - b * 65536,
        u = ge + b + 65535,
        b = Math.floor(u / 65536),
        ge = u - b * 65536,
        u = I + b + 65535,
        b = Math.floor(u / 65536),
        I = u - b * 65536,
        u = T + b + 65535,
        b = Math.floor(u / 65536),
        T = u - b * 65536,
        u = te + b + 65535,
        b = Math.floor(u / 65536),
        te = u - b * 65536,
        u = X + b + 65535,
        b = Math.floor(u / 65536),
        X = u - b * 65536,
        u = k + b + 65535,
        b = Math.floor(u / 65536),
        k = u - b * 65536,
        u = W + b + 65535,
        b = Math.floor(u / 65536),
        W = u - b * 65536,
        u = re + b + 65535,
        b = Math.floor(u / 65536),
        re = u - b * 65536,
        u = ne + b + 65535,
        b = Math.floor(u / 65536),
        ne = u - b * 65536,
        u = De + b + 65535,
        b = Math.floor(u / 65536),
        De = u - b * 65536,
        u = ae + b + 65535,
        b = Math.floor(u / 65536),
        ae = u - b * 65536,
        u = Se + b + 65535,
        b = Math.floor(u / 65536),
        Se = u - b * 65536,
        V += b - 1 + 37 * (b - 1),
        b = 1,
        u = V + b + 65535,
        b = Math.floor(u / 65536),
        V = u - b * 65536,
        u = G + b + 65535,
        b = Math.floor(u / 65536),
        G = u - b * 65536,
        u = oe + b + 65535,
        b = Math.floor(u / 65536),
        oe = u - b * 65536,
        u = pe + b + 65535,
        b = Math.floor(u / 65536),
        pe = u - b * 65536,
        u = ge + b + 65535,
        b = Math.floor(u / 65536),
        ge = u - b * 65536,
        u = I + b + 65535,
        b = Math.floor(u / 65536),
        I = u - b * 65536,
        u = T + b + 65535,
        b = Math.floor(u / 65536),
        T = u - b * 65536,
        u = te + b + 65535,
        b = Math.floor(u / 65536),
        te = u - b * 65536,
        u = X + b + 65535,
        b = Math.floor(u / 65536),
        X = u - b * 65536,
        u = k + b + 65535,
        b = Math.floor(u / 65536),
        k = u - b * 65536,
        u = W + b + 65535,
        b = Math.floor(u / 65536),
        W = u - b * 65536,
        u = re + b + 65535,
        b = Math.floor(u / 65536),
        re = u - b * 65536,
        u = ne + b + 65535,
        b = Math.floor(u / 65536),
        ne = u - b * 65536,
        u = De + b + 65535,
        b = Math.floor(u / 65536),
        De = u - b * 65536,
        u = ae + b + 65535,
        b = Math.floor(u / 65536),
        ae = u - b * 65536,
        u = Se + b + 65535,
        b = Math.floor(u / 65536),
        Se = u - b * 65536,
        V += b - 1 + 37 * (b - 1),
        w[0] = V,
        w[1] = G,
        w[2] = oe,
        w[3] = pe,
        w[4] = ge,
        w[5] = I,
        w[6] = T,
        w[7] = te,
        w[8] = X,
        w[9] = k,
        w[10] = W,
        w[11] = re,
        w[12] = ne,
        w[13] = De,
        w[14] = ae,
        w[15] = Se
    }
    function A(w, E) {
        P(w, E, E)
    }
    function O(w, E) {
        const D = s();
        for (let u = 0; u < 16; u++)
            D[u] = E[u];
        for (let u = 253; u >= 0; u--)
            A(D, D),
            u !== 2 && u !== 4 && P(D, D, E);
        for (let u = 0; u < 16; u++)
            w[u] = D[u]
    }
    function K(w, E) {
        const D = new Uint8Array(32)
          , u = new Float64Array(80)
          , b = s()
          , V = s()
          , G = s()
          , oe = s()
          , pe = s()
          , ge = s();
        for (let X = 0; X < 31; X++)
            D[X] = w[X];
        D[31] = w[31] & 127 | 64,
        D[0] &= 248,
        g(u, E);
        for (let X = 0; X < 16; X++)
            V[X] = u[X];
        b[0] = oe[0] = 1;
        for (let X = 254; X >= 0; --X) {
            const k = D[X >>> 3] >>> (X & 7) & 1;
            f(b, V, k),
            f(G, oe, k),
            v(pe, b, G),
            S(b, b, G),
            v(G, V, oe),
            S(V, V, oe),
            A(oe, pe),
            A(ge, b),
            P(b, G, b),
            P(G, V, pe),
            v(pe, b, G),
            S(b, b, G),
            A(V, b),
            S(G, oe, ge),
            P(b, G, c),
            v(b, b, oe),
            P(G, G, b),
            P(b, oe, ge),
            P(oe, V, u),
            A(V, pe),
            f(b, V, k),
            f(G, oe, k)
        }
        for (let X = 0; X < 16; X++)
            u[X + 16] = b[X],
            u[X + 32] = G[X],
            u[X + 48] = V[X],
            u[X + 64] = oe[X];
        const I = u.subarray(32)
          , T = u.subarray(16);
        O(I, I),
        P(T, T, I);
        const te = new Uint8Array(32);
        return p(te, T),
        te
    }
    i.scalarMult = K;
    function B(w) {
        return K(w, o)
    }
    i.scalarMultBase = B;
    function ee(w) {
        if (w.length !== i.SECRET_KEY_LENGTH)
            throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
        const E = new Uint8Array(w);
        return {
            publicKey: B(E),
            secretKey: E
        }
    }
    i.generateKeyPairFromSeed = ee;
    function $(w) {
        const E = (0,
        e.randomBytes)(32, w)
          , D = ee(E);
        return (0,
        t.wipe)(E),
        D
    }
    i.generateKeyPair = $;
    function U(w, E, D=!1) {
        if (w.length !== i.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect secret key length");
        if (E.length !== i.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect public key length");
        const u = K(w, E);
        if (D) {
            let b = 0;
            for (let V = 0; V < u.length; V++)
                b |= u[V];
            if (b === 0)
                throw new Error("X25519: invalid shared key")
        }
        return u
    }
    i.sharedKey = U
}
)(ju);
function qu(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer,i.byteOffset,i.byteLength) : i
}
function ip(i=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? qu(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}
function yu(i, e) {
    e || (e = i.reduce( (o, c) => o + c.length, 0));
    const t = ip(e);
    let s = 0;
    for (const o of i)
        t.set(o, s),
        s += o.length;
    return qu(t)
}
function Rb(i, e) {
    if (i.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
        t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o)
          , d = c.charCodeAt(0);
        if (t[d] !== 255)
            throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length
      , p = i.charAt(0)
      , g = Math.log(f) / Math.log(256)
      , v = Math.log(256) / Math.log(f);
    function S(O) {
        if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer,O.byteOffset,O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))),
        !(O instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (O.length === 0)
            return "";
        for (var K = 0, B = 0, ee = 0, $ = O.length; ee !== $ && O[ee] === 0; )
            ee++,
            K++;
        for (var U = ($ - ee) * v + 1 >>> 0, w = new Uint8Array(U); ee !== $; ) {
            for (var E = O[ee], D = 0, u = U - 1; (E !== 0 || D < B) && u !== -1; u--,
            D++)
                E += 256 * w[u] >>> 0,
                w[u] = E % f >>> 0,
                E = E / f >>> 0;
            if (E !== 0)
                throw new Error("Non-zero carry");
            B = D,
            ee++
        }
        for (var b = U - B; b !== U && w[b] === 0; )
            b++;
        for (var V = p.repeat(K); b < U; ++b)
            V += i.charAt(w[b]);
        return V
    }
    function P(O) {
        if (typeof O != "string")
            throw new TypeError("Expected String");
        if (O.length === 0)
            return new Uint8Array;
        var K = 0;
        if (O[K] !== " ") {
            for (var B = 0, ee = 0; O[K] === p; )
                B++,
                K++;
            for (var $ = (O.length - K) * g + 1 >>> 0, U = new Uint8Array($); O[K]; ) {
                var w = t[O.charCodeAt(K)];
                if (w === 255)
                    return;
                for (var E = 0, D = $ - 1; (w !== 0 || E < ee) && D !== -1; D--,
                E++)
                    w += f * U[D] >>> 0,
                    U[D] = w % 256 >>> 0,
                    w = w / 256 >>> 0;
                if (w !== 0)
                    throw new Error("Non-zero carry");
                ee = E,
                K++
            }
            if (O[K] !== " ") {
                for (var u = $ - ee; u !== $ && U[u] === 0; )
                    u++;
                for (var b = new Uint8Array(B + ($ - u)), V = B; u !== $; )
                    b[V++] = U[u++];
                return b
            }
        }
    }
    function A(O) {
        var K = P(O);
        if (K)
            return K;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: S,
        decodeUnsafe: P,
        decode: A
    }
}
var Tb = Rb
  , Nb = Tb;
const $b = i => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
        return i;
    if (i instanceof ArrayBuffer)
        return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
        return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , Lb = i => new TextEncoder().encode(i)
  , Ub = i => new TextDecoder().decode(i);
class Mb {
    constructor(e, t, s) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class jb {
    constructor(e, t, s) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return np(this, e)
    }
}
class qb {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return np(this, e)
    }
    decode(e) {
        const t = e[0]
          , s = this.decoders[t];
        if (s)
            return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const np = (i, e) => new qb({
    ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class Fb {
    constructor(e, t, s, o) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s,
        this.baseDecode = o,
        this.encoder = new Mb(e,t,s),
        this.decoder = new jb(e,t,o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const la = ({name: i, prefix: e, encode: t, decode: s}) => new Fb(i,e,t,s)
  , Rs = ({prefix: i, name: e, alphabet: t}) => {
    const {encode: s, decode: o} = Nb(t, e);
    return la({
        prefix: i,
        name: e,
        encode: s,
        decode: c => $b(o(c))
    })
}
  , zb = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v)
        o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; )
        --c;
    const d = new Uint8Array(c * t / 8 | 0);
    let f = 0
      , p = 0
      , g = 0;
    for (let v = 0; v < c; ++v) {
        const S = o[i[v]];
        if (S === void 0)
            throw new SyntaxError(`Non-${s} character`);
        p = p << t | S,
        f += t,
        f >= 8 && (f -= 8,
        d[g++] = 255 & p >> f)
    }
    if (f >= t || 255 & p << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return d
}
  , Hb = (i, e, t) => {
    const s = e[e.length - 1] === "="
      , o = (1 << t) - 1;
    let c = ""
      , d = 0
      , f = 0;
    for (let p = 0; p < i.length; ++p)
        for (f = f << 8 | i[p],
        d += 8; d > t; )
            d -= t,
            c += e[o & f >> d];
    if (d && (c += e[o & f << t - d]),
    s)
        for (; c.length * t & 7; )
            c += "=";
    return c
}
  , Gt = ({name: i, prefix: e, bitsPerChar: t, alphabet: s}) => la({
    prefix: e,
    name: i,
    encode(o) {
        return Hb(o, s, t)
    },
    decode(o) {
        return zb(o, s, t, i)
    }
})
  , Bb = la({
    prefix: "\0",
    name: "identity",
    encode: i => Ub(i),
    decode: i => Lb(i)
})
  , Kb = Object.freeze(Object.defineProperty({
    __proto__: null,
    identity: Bb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , kb = Gt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , Vb = Object.freeze(Object.defineProperty({
    __proto__: null,
    base2: kb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wb = Gt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , Gb = Object.freeze(Object.defineProperty({
    __proto__: null,
    base8: Wb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Yb = Rs({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , Jb = Object.freeze(Object.defineProperty({
    __proto__: null,
    base10: Yb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qb = Gt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , Xb = Gt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , Zb = Object.freeze(Object.defineProperty({
    __proto__: null,
    base16: Qb,
    base16upper: Xb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , e_ = Gt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , t_ = Gt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , r_ = Gt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , i_ = Gt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , n_ = Gt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , s_ = Gt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , o_ = Gt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , a_ = Gt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , c_ = Gt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , u_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    base32: e_,
    base32hex: n_,
    base32hexpad: o_,
    base32hexpadupper: a_,
    base32hexupper: s_,
    base32pad: r_,
    base32padupper: i_,
    base32upper: t_,
    base32z: c_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , h_ = Rs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , l_ = Rs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , f_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    base36: h_,
    base36upper: l_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , d_ = Rs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , p_ = Rs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , g_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    base58btc: d_,
    base58flickr: p_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , y_ = Gt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , v_ = Gt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , m_ = Gt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , w_ = Gt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , b_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    base64: y_,
    base64pad: v_,
    base64url: m_,
    base64urlpad: w_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , sp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , __ = sp.reduce( (i, e, t) => (i[t] = e,
i), [])
  , E_ = sp.reduce( (i, e, t) => (i[e.codePointAt(0)] = t,
i), []);
function D_(i) {
    return i.reduce( (e, t) => (e += __[t],
    e), "")
}
function S_(i) {
    const e = [];
    for (const t of i) {
        const s = E_[t.codePointAt(0)];
        if (s === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const I_ = la({
    prefix: "🚀",
    name: "base256emoji",
    encode: D_,
    decode: S_
})
  , x_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    base256emoji: I_
}, Symbol.toStringTag, {
    value: "Module"
}));
new TextEncoder;
new TextDecoder;
const cf = {
    ...Kb,
    ...Vb,
    ...Gb,
    ...Jb,
    ...Zb,
    ...u_,
    ...f_,
    ...g_,
    ...b_,
    ...x_
};
function op(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const uf = op("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1)))
  , Kc = op("ascii", "a", i => {
    let e = "a";
    for (let t = 0; t < i.length; t++)
        e += String.fromCharCode(i[t]);
    return e
}
, i => {
    i = i.substring(1);
    const e = ip(i.length);
    for (let t = 0; t < i.length; t++)
        e[t] = i.charCodeAt(t);
    return e
}
)
  , ap = {
    utf8: uf,
    "utf-8": uf,
    hex: cf.base16,
    latin1: Kc,
    ascii: Kc,
    binary: Kc,
    ...cf
};
function mr(i, e="utf8") {
    const t = ap[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? qu(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}
function ur(i, e="utf8") {
    const t = ap[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf8") : t.encoder.encode(i).substring(1)
}
var hf = function(i, e, t) {
    if (t || arguments.length === 2)
        for (var s = 0, o = e.length, c; s < o; s++)
            (c || !(s in e)) && (c || (c = Array.prototype.slice.call(e, 0, s)),
            c[s] = e[s]);
    return i.concat(c || Array.prototype.slice.call(e))
}
  , O_ = function() {
    function i(e, t, s) {
        this.name = e,
        this.version = t,
        this.os = s,
        this.type = "browser"
    }
    return i
}()
  , P_ = function() {
    function i(e) {
        this.version = e,
        this.type = "node",
        this.name = "node",
        this.os = process.platform
    }
    return i
}()
  , C_ = function() {
    function i(e, t, s, o) {
        this.name = e,
        this.version = t,
        this.os = s,
        this.bot = o,
        this.type = "bot-device"
    }
    return i
}()
  , A_ = function() {
    function i() {
        this.type = "bot",
        this.bot = !0,
        this.name = "bot",
        this.version = null,
        this.os = null
    }
    return i
}()
  , R_ = function() {
    function i() {
        this.type = "react-native",
        this.name = "react-native",
        this.version = null,
        this.os = null
    }
    return i
}()
  , T_ = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
  , N_ = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
  , lf = 3
  , $_ = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", T_]]
  , ff = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function L_(i) {
    return i ? df(i) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new R_ : typeof navigator < "u" ? df(navigator.userAgent) : j_()
}
function U_(i) {
    return i !== "" && $_.reduce(function(e, t) {
        var s = t[0]
          , o = t[1];
        if (e)
            return e;
        var c = o.exec(i);
        return !!c && [s, c]
    }, !1)
}
function df(i) {
    var e = U_(i);
    if (!e)
        return null;
    var t = e[0]
      , s = e[1];
    if (t === "searchbot")
        return new A_;
    var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
    o ? o.length < lf && (o = hf(hf([], o, !0), q_(lf - o.length), !0)) : o = [];
    var c = o.join(".")
      , d = M_(i)
      , f = N_.exec(i);
    return f && f[1] ? new C_(t,c,d,f[1]) : new O_(t,c,d)
}
function M_(i) {
    for (var e = 0, t = ff.length; e < t; e++) {
        var s = ff[e]
          , o = s[0]
          , c = s[1]
          , d = c.exec(i);
        if (d)
            return o
    }
    return null
}
function j_() {
    var i = typeof process < "u" && process.version;
    return i ? new P_(process.version.slice(1)) : null
}
function q_(i) {
    for (var e = [], t = 0; t < i; t++)
        e.push("0");
    return e
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var vu = function(i, e) {
    return vu = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, s) {
        t.__proto__ = s
    }
    || function(t, s) {
        for (var o in s)
            s.hasOwnProperty(o) && (t[o] = s[o])
    }
    ,
    vu(i, e)
};
function F_(i, e) {
    vu(i, e);
    function t() {
        this.constructor = i
    }
    i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
var mu = function() {
    return mu = Object.assign || function(e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
            t = arguments[s];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
        }
        return e
    }
    ,
    mu.apply(this, arguments)
};
function z_(i, e) {
    var t = {};
    for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
            e.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[o]) && (t[s[o]] = i[s[o]]);
    return t
}
function H_(i, e, t, s) {
    var o = arguments.length, c = o < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(i, e, t, s);
    else
        for (var f = i.length - 1; f >= 0; f--)
            (d = i[f]) && (c = (o < 3 ? d(c) : o > 3 ? d(e, t, c) : d(e, t)) || c);
    return o > 3 && c && Object.defineProperty(e, t, c),
    c
}
function B_(i, e) {
    return function(t, s) {
        e(t, s, i)
    }
}
function K_(i, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(i, e)
}
function k_(i, e, t, s) {
    function o(c) {
        return c instanceof t ? c : new t(function(d) {
            d(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, d) {
        function f(v) {
            try {
                g(s.next(v))
            } catch (S) {
                d(S)
            }
        }
        function p(v) {
            try {
                g(s.throw(v))
            } catch (S) {
                d(S)
            }
        }
        function g(v) {
            v.done ? c(v.value) : o(v.value).then(f, p)
        }
        g((s = s.apply(i, e || [])).next())
    }
    )
}
function V_(i, e) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, s, o, c, d;
    return d = {
        next: f(0),
        throw: f(1),
        return: f(2)
    },
    typeof Symbol == "function" && (d[Symbol.iterator] = function() {
        return this
    }
    ),
    d;
    function f(g) {
        return function(v) {
            return p([g, v])
        }
    }
    function p(g) {
        if (s)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (s = 1,
                o && (c = g[0] & 2 ? o.return : g[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, g[1])).done)
                    return c;
                switch (o = 0,
                c && (g = [g[0] & 2, c.value]),
                g[0]) {
                case 0:
                case 1:
                    c = g;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: g[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = g[1],
                    g = [0];
                    continue;
                case 7:
                    g = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3])) {
                        t.label = g[1];
                        break
                    }
                    if (g[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = g;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(g);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                g = e.call(i, t)
            } catch (v) {
                g = [6, v],
                o = 0
            } finally {
                s = c = 0
            }
        if (g[0] & 5)
            throw g[1];
        return {
            value: g[0] ? g[1] : void 0,
            done: !0
        }
    }
}
function W_(i, e, t, s) {
    s === void 0 && (s = t),
    i[s] = e[t]
}
function G_(i, e) {
    for (var t in i)
        t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t])
}
function wu(i) {
    var e = typeof Symbol == "function" && Symbol.iterator
      , t = e && i[e]
      , s = 0;
    if (t)
        return t.call(i);
    if (i && typeof i.length == "number")
        return {
            next: function() {
                return i && s >= i.length && (i = void 0),
                {
                    value: i && i[s++],
                    done: !i
                }
            }
        };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function cp(i, e) {
    var t = typeof Symbol == "function" && i[Symbol.iterator];
    if (!t)
        return i;
    var s = t.call(i), o, c = [], d;
    try {
        for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; )
            c.push(o.value)
    } catch (f) {
        d = {
            error: f
        }
    } finally {
        try {
            o && !o.done && (t = s.return) && t.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return c
}
function Y_() {
    for (var i = [], e = 0; e < arguments.length; e++)
        i = i.concat(cp(arguments[e]));
    return i
}
function J_() {
    for (var i = 0, e = 0, t = arguments.length; e < t; e++)
        i += arguments[e].length;
    for (var s = Array(i), o = 0, e = 0; e < t; e++)
        for (var c = arguments[e], d = 0, f = c.length; d < f; d++,
        o++)
            s[o] = c[d];
    return s
}
function Ds(i) {
    return this instanceof Ds ? (this.v = i,
    this) : new Ds(i)
}
function Q_(i, e, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var s = t.apply(i, e || []), o, c = [];
    return o = {},
    d("next"),
    d("throw"),
    d("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function d(P) {
        s[P] && (o[P] = function(A) {
            return new Promise(function(O, K) {
                c.push([P, A, O, K]) > 1 || f(P, A)
            }
            )
        }
        )
    }
    function f(P, A) {
        try {
            p(s[P](A))
        } catch (O) {
            S(c[0][3], O)
        }
    }
    function p(P) {
        P.value instanceof Ds ? Promise.resolve(P.value.v).then(g, v) : S(c[0][2], P)
    }
    function g(P) {
        f("next", P)
    }
    function v(P) {
        f("throw", P)
    }
    function S(P, A) {
        P(A),
        c.shift(),
        c.length && f(c[0][0], c[0][1])
    }
}
function X_(i) {
    var e, t;
    return e = {},
    s("next"),
    s("throw", function(o) {
        throw o
    }),
    s("return"),
    e[Symbol.iterator] = function() {
        return this
    }
    ,
    e;
    function s(o, c) {
        e[o] = i[o] ? function(d) {
            return (t = !t) ? {
                value: Ds(i[o](d)),
                done: o === "return"
            } : c ? c(d) : d
        }
        : c
    }
}
function Z_(i) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = i[Symbol.asyncIterator], t;
    return e ? e.call(i) : (i = typeof wu == "function" ? wu(i) : i[Symbol.iterator](),
    t = {},
    s("next"),
    s("throw"),
    s("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function s(c) {
        t[c] = i[c] && function(d) {
            return new Promise(function(f, p) {
                d = i[c](d),
                o(f, p, d.done, d.value)
            }
            )
        }
    }
    function o(c, d, f, p) {
        Promise.resolve(p).then(function(g) {
            c({
                value: g,
                done: f
            })
        }, d)
    }
}
function eE(i, e) {
    return Object.defineProperty ? Object.defineProperty(i, "raw", {
        value: e
    }) : i.raw = e,
    i
}
function tE(i) {
    if (i && i.__esModule)
        return i;
    var e = {};
    if (i != null)
        for (var t in i)
            Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    return e.default = i,
    e
}
function rE(i) {
    return i && i.__esModule ? i : {
        default: i
    }
}
function iE(i, e) {
    if (!e.has(i))
        throw new TypeError("attempted to get private field on non-instance");
    return e.get(i)
}
function nE(i, e, t) {
    if (!e.has(i))
        throw new TypeError("attempted to set private field on non-instance");
    return e.set(i, t),
    t
}
const sE = Object.freeze(Object.defineProperty({
    __proto__: null,
    get __assign() {
        return mu
    },
    __asyncDelegator: X_,
    __asyncGenerator: Q_,
    __asyncValues: Z_,
    __await: Ds,
    __awaiter: k_,
    __classPrivateFieldGet: iE,
    __classPrivateFieldSet: nE,
    __createBinding: W_,
    __decorate: H_,
    __exportStar: G_,
    __extends: F_,
    __generator: V_,
    __importDefault: rE,
    __importStar: tE,
    __makeTemplateObject: eE,
    __metadata: K_,
    __param: B_,
    __read: cp,
    __rest: z_,
    __spread: Y_,
    __spreadArrays: J_,
    __values: wu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Si = $u(sE);
var kc = {}, fs = {}, pf;
function oE() {
    if (pf)
        return fs;
    pf = 1,
    Object.defineProperty(fs, "__esModule", {
        value: !0
    }),
    fs.delay = void 0;
    function i(e) {
        return new Promise(t => {
            setTimeout( () => {
                t(!0)
            }
            , e)
        }
        )
    }
    return fs.delay = i,
    fs
}
var nn = {}, Vc = {}, sn = {}, gf;
function aE() {
    return gf || (gf = 1,
    Object.defineProperty(sn, "__esModule", {
        value: !0
    }),
    sn.ONE_THOUSAND = sn.ONE_HUNDRED = void 0,
    sn.ONE_HUNDRED = 100,
    sn.ONE_THOUSAND = 1e3),
    sn
}
var Wc = {}, yf;
function cE() {
    return yf || (yf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ONE_YEAR = i.FOUR_WEEKS = i.THREE_WEEKS = i.TWO_WEEKS = i.ONE_WEEK = i.THIRTY_DAYS = i.SEVEN_DAYS = i.FIVE_DAYS = i.THREE_DAYS = i.ONE_DAY = i.TWENTY_FOUR_HOURS = i.TWELVE_HOURS = i.SIX_HOURS = i.THREE_HOURS = i.ONE_HOUR = i.SIXTY_MINUTES = i.THIRTY_MINUTES = i.TEN_MINUTES = i.FIVE_MINUTES = i.ONE_MINUTE = i.SIXTY_SECONDS = i.THIRTY_SECONDS = i.TEN_SECONDS = i.FIVE_SECONDS = i.ONE_SECOND = void 0,
        i.ONE_SECOND = 1,
        i.FIVE_SECONDS = 5,
        i.TEN_SECONDS = 10,
        i.THIRTY_SECONDS = 30,
        i.SIXTY_SECONDS = 60,
        i.ONE_MINUTE = i.SIXTY_SECONDS,
        i.FIVE_MINUTES = i.ONE_MINUTE * 5,
        i.TEN_MINUTES = i.ONE_MINUTE * 10,
        i.THIRTY_MINUTES = i.ONE_MINUTE * 30,
        i.SIXTY_MINUTES = i.ONE_MINUTE * 60,
        i.ONE_HOUR = i.SIXTY_MINUTES,
        i.THREE_HOURS = i.ONE_HOUR * 3,
        i.SIX_HOURS = i.ONE_HOUR * 6,
        i.TWELVE_HOURS = i.ONE_HOUR * 12,
        i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24,
        i.ONE_DAY = i.TWENTY_FOUR_HOURS,
        i.THREE_DAYS = i.ONE_DAY * 3,
        i.FIVE_DAYS = i.ONE_DAY * 5,
        i.SEVEN_DAYS = i.ONE_DAY * 7,
        i.THIRTY_DAYS = i.ONE_DAY * 30,
        i.ONE_WEEK = i.SEVEN_DAYS,
        i.TWO_WEEKS = i.ONE_WEEK * 2,
        i.THREE_WEEKS = i.ONE_WEEK * 3,
        i.FOUR_WEEKS = i.ONE_WEEK * 4,
        i.ONE_YEAR = i.ONE_DAY * 365
    }(Wc)),
    Wc
}
var vf;
function up() {
    return vf || (vf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = Si;
        e.__exportStar(aE(), i),
        e.__exportStar(cE(), i)
    }(Vc)),
    Vc
}
var mf;
function uE() {
    if (mf)
        return nn;
    mf = 1,
    Object.defineProperty(nn, "__esModule", {
        value: !0
    }),
    nn.fromMiliseconds = nn.toMiliseconds = void 0;
    const i = up();
    function e(s) {
        return s * i.ONE_THOUSAND
    }
    nn.toMiliseconds = e;
    function t(s) {
        return Math.floor(s / i.ONE_THOUSAND)
    }
    return nn.fromMiliseconds = t,
    nn
}
var wf;
function hE() {
    return wf || (wf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = Si;
        e.__exportStar(oE(), i),
        e.__exportStar(uE(), i)
    }(kc)),
    kc
}
var Nn = {}, bf;
function lE() {
    if (bf)
        return Nn;
    bf = 1,
    Object.defineProperty(Nn, "__esModule", {
        value: !0
    }),
    Nn.Watch = void 0;
    class i {
        constructor() {
            this.timestamps = new Map
        }
        start(t) {
            if (this.timestamps.has(t))
                throw new Error(`Watch already started for label: ${t}`);
            this.timestamps.set(t, {
                started: Date.now()
            })
        }
        stop(t) {
            const s = this.get(t);
            if (typeof s.elapsed < "u")
                throw new Error(`Watch already stopped for label: ${t}`);
            const o = Date.now() - s.started;
            this.timestamps.set(t, {
                started: s.started,
                elapsed: o
            })
        }
        get(t) {
            const s = this.timestamps.get(t);
            if (typeof s > "u")
                throw new Error(`No timestamp found for label: ${t}`);
            return s
        }
        elapsed(t) {
            const s = this.get(t);
            return s.elapsed || Date.now() - s.started
        }
    }
    return Nn.Watch = i,
    Nn.default = i,
    Nn
}
var Gc = {}, ds = {}, _f;
function fE() {
    if (_f)
        return ds;
    _f = 1,
    Object.defineProperty(ds, "__esModule", {
        value: !0
    }),
    ds.IWatch = void 0;
    class i {
    }
    return ds.IWatch = i,
    ds
}
var Ef;
function dE() {
    return Ef || (Ef = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Si.__exportStar(fE(), i)
    }(Gc)),
    Gc
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(hE(), i),
    e.__exportStar(lE(), i),
    e.__exportStar(dE(), i),
    e.__exportStar(up(), i)
}
)(ve);
var ht = {};
Object.defineProperty(ht, "__esModule", {
    value: !0
});
ht.getLocalStorage = ht.getLocalStorageOrThrow = ht.getCrypto = ht.getCryptoOrThrow = hp = ht.getLocation = ht.getLocationOrThrow = zu = ht.getNavigator = ht.getNavigatorOrThrow = Fu = ht.getDocument = ht.getDocumentOrThrow = ht.getFromWindowOrThrow = ht.getFromWindow = void 0;
function un(i) {
    let e;
    return typeof window < "u" && typeof window[i] < "u" && (e = window[i]),
    e
}
ht.getFromWindow = un;
function Hn(i) {
    const e = un(i);
    if (!e)
        throw new Error(`${i} is not defined in Window`);
    return e
}
ht.getFromWindowOrThrow = Hn;
function pE() {
    return Hn("document")
}
ht.getDocumentOrThrow = pE;
function gE() {
    return un("document")
}
var Fu = ht.getDocument = gE;
function yE() {
    return Hn("navigator")
}
ht.getNavigatorOrThrow = yE;
function vE() {
    return un("navigator")
}
var zu = ht.getNavigator = vE;
function mE() {
    return Hn("location")
}
ht.getLocationOrThrow = mE;
function wE() {
    return un("location")
}
var hp = ht.getLocation = wE;
function bE() {
    return Hn("crypto")
}
ht.getCryptoOrThrow = bE;
function _E() {
    return un("crypto")
}
ht.getCrypto = _E;
function EE() {
    return Hn("localStorage")
}
ht.getLocalStorageOrThrow = EE;
function DE() {
    return un("localStorage")
}
ht.getLocalStorage = DE;
var Hu = {};
Object.defineProperty(Hu, "__esModule", {
    value: !0
});
var lp = Hu.getWindowMetadata = void 0;
const Df = ht;
function SE() {
    let i, e;
    try {
        i = Df.getDocumentOrThrow(),
        e = Df.getLocationOrThrow()
    } catch {
        return null
    }
    function t() {
        const S = i.getElementsByTagName("link")
          , P = [];
        for (let A = 0; A < S.length; A++) {
            const O = S[A]
              , K = O.getAttribute("rel");
            if (K && K.toLowerCase().indexOf("icon") > -1) {
                const B = O.getAttribute("href");
                if (B)
                    if (B.toLowerCase().indexOf("https:") === -1 && B.toLowerCase().indexOf("http:") === -1 && B.indexOf("//") !== 0) {
                        let ee = e.protocol + "//" + e.host;
                        if (B.indexOf("/") === 0)
                            ee += B;
                        else {
                            const $ = e.pathname.split("/");
                            $.pop();
                            const U = $.join("/");
                            ee += U + "/" + B
                        }
                        P.push(ee)
                    } else if (B.indexOf("//") === 0) {
                        const ee = e.protocol + B;
                        P.push(ee)
                    } else
                        P.push(B)
            }
        }
        return P
    }
    function s(...S) {
        const P = i.getElementsByTagName("meta");
        for (let A = 0; A < P.length; A++) {
            const O = P[A]
              , K = ["itemprop", "property", "name"].map(B => O.getAttribute(B)).filter(B => B ? S.includes(B) : !1);
            if (K.length && K) {
                const B = O.getAttribute("content");
                if (B)
                    return B
            }
        }
        return ""
    }
    function o() {
        let S = s("name", "og:site_name", "og:title", "twitter:title");
        return S || (S = i.title),
        S
    }
    function c() {
        return s("description", "og:description", "twitter:description", "keywords")
    }
    const d = o()
      , f = c()
      , p = e.origin
      , g = t();
    return {
        description: f,
        url: p,
        icons: g,
        name: d
    }
}
lp = Hu.getWindowMetadata = SE;
var Ss = {}
  , IE = i => encodeURIComponent(i).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
  , fp = "%[a-f0-9]{2}"
  , Sf = new RegExp("(" + fp + ")|([^%]+?)","gi")
  , If = new RegExp("(" + fp + ")+","gi");
function bu(i, e) {
    try {
        return [decodeURIComponent(i.join(""))]
    } catch {}
    if (i.length === 1)
        return i;
    e = e || 1;
    var t = i.slice(0, e)
      , s = i.slice(e);
    return Array.prototype.concat.call([], bu(t), bu(s))
}
function xE(i) {
    try {
        return decodeURIComponent(i)
    } catch {
        for (var e = i.match(Sf) || [], t = 1; t < e.length; t++)
            i = bu(e, t).join(""),
            e = i.match(Sf) || [];
        return i
    }
}
function OE(i) {
    for (var e = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    }, t = If.exec(i); t; ) {
        try {
            e[t[0]] = decodeURIComponent(t[0])
        } catch {
            var s = xE(t[0]);
            s !== t[0] && (e[t[0]] = s)
        }
        t = If.exec(i)
    }
    e["%C2"] = "�";
    for (var o = Object.keys(e), c = 0; c < o.length; c++) {
        var d = o[c];
        i = i.replace(new RegExp(d,"g"), e[d])
    }
    return i
}
var PE = function(i) {
    if (typeof i != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof i + "`");
    try {
        return i = i.replace(/\+/g, " "),
        decodeURIComponent(i)
    } catch {
        return OE(i)
    }
}
  , CE = (i, e) => {
    if (!(typeof i == "string" && typeof e == "string"))
        throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "")
        return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)]
}
  , AE = function(i, e) {
    for (var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0; c < s.length; c++) {
        var d = s[c]
          , f = i[d];
        (o ? e.indexOf(d) !== -1 : e(d, f, i)) && (t[d] = f)
    }
    return t
};
(function(i) {
    const e = IE
      , t = PE
      , s = CE
      , o = AE
      , c = $ => $ == null
      , d = Symbol("encodeFragmentIdentifier");
    function f($) {
        switch ($.arrayFormat) {
        case "index":
            return U => (w, E) => {
                const D = w.length;
                return E === void 0 || $.skipNull && E === null || $.skipEmptyString && E === "" ? w : E === null ? [...w, [v(U, $), "[", D, "]"].join("")] : [...w, [v(U, $), "[", v(D, $), "]=", v(E, $)].join("")]
            }
            ;
        case "bracket":
            return U => (w, E) => E === void 0 || $.skipNull && E === null || $.skipEmptyString && E === "" ? w : E === null ? [...w, [v(U, $), "[]"].join("")] : [...w, [v(U, $), "[]=", v(E, $)].join("")];
        case "colon-list-separator":
            return U => (w, E) => E === void 0 || $.skipNull && E === null || $.skipEmptyString && E === "" ? w : E === null ? [...w, [v(U, $), ":list="].join("")] : [...w, [v(U, $), ":list=", v(E, $)].join("")];
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const U = $.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return w => (E, D) => D === void 0 || $.skipNull && D === null || $.skipEmptyString && D === "" ? E : (D = D === null ? "" : D,
                E.length === 0 ? [[v(w, $), U, v(D, $)].join("")] : [[E, v(D, $)].join($.arrayFormatSeparator)])
            }
        default:
            return U => (w, E) => E === void 0 || $.skipNull && E === null || $.skipEmptyString && E === "" ? w : E === null ? [...w, v(U, $)] : [...w, [v(U, $), "=", v(E, $)].join("")]
        }
    }
    function p($) {
        let U;
        switch ($.arrayFormat) {
        case "index":
            return (w, E, D) => {
                if (U = /\[(\d*)\]$/.exec(w),
                w = w.replace(/\[\d*\]$/, ""),
                !U) {
                    D[w] = E;
                    return
                }
                D[w] === void 0 && (D[w] = {}),
                D[w][U[1]] = E
            }
            ;
        case "bracket":
            return (w, E, D) => {
                if (U = /(\[\])$/.exec(w),
                w = w.replace(/\[\]$/, ""),
                !U) {
                    D[w] = E;
                    return
                }
                if (D[w] === void 0) {
                    D[w] = [E];
                    return
                }
                D[w] = [].concat(D[w], E)
            }
            ;
        case "colon-list-separator":
            return (w, E, D) => {
                if (U = /(:list)$/.exec(w),
                w = w.replace(/:list$/, ""),
                !U) {
                    D[w] = E;
                    return
                }
                if (D[w] === void 0) {
                    D[w] = [E];
                    return
                }
                D[w] = [].concat(D[w], E)
            }
            ;
        case "comma":
        case "separator":
            return (w, E, D) => {
                const u = typeof E == "string" && E.includes($.arrayFormatSeparator)
                  , b = typeof E == "string" && !u && S(E, $).includes($.arrayFormatSeparator);
                E = b ? S(E, $) : E;
                const V = u || b ? E.split($.arrayFormatSeparator).map(G => S(G, $)) : E === null ? E : S(E, $);
                D[w] = V
            }
            ;
        case "bracket-separator":
            return (w, E, D) => {
                const u = /(\[\])$/.test(w);
                if (w = w.replace(/\[\]$/, ""),
                !u) {
                    D[w] = E && S(E, $);
                    return
                }
                const b = E === null ? [] : E.split($.arrayFormatSeparator).map(V => S(V, $));
                if (D[w] === void 0) {
                    D[w] = b;
                    return
                }
                D[w] = [].concat(D[w], b)
            }
            ;
        default:
            return (w, E, D) => {
                if (D[w] === void 0) {
                    D[w] = E;
                    return
                }
                D[w] = [].concat(D[w], E)
            }
        }
    }
    function g($) {
        if (typeof $ != "string" || $.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function v($, U) {
        return U.encode ? U.strict ? e($) : encodeURIComponent($) : $
    }
    function S($, U) {
        return U.decode ? t($) : $
    }
    function P($) {
        return Array.isArray($) ? $.sort() : typeof $ == "object" ? P(Object.keys($)).sort( (U, w) => Number(U) - Number(w)).map(U => $[U]) : $
    }
    function A($) {
        const U = $.indexOf("#");
        return U !== -1 && ($ = $.slice(0, U)),
        $
    }
    function O($) {
        let U = "";
        const w = $.indexOf("#");
        return w !== -1 && (U = $.slice(w)),
        U
    }
    function K($) {
        $ = A($);
        const U = $.indexOf("?");
        return U === -1 ? "" : $.slice(U + 1)
    }
    function B($, U) {
        return U.parseNumbers && !Number.isNaN(Number($)) && typeof $ == "string" && $.trim() !== "" ? $ = Number($) : U.parseBooleans && $ !== null && ($.toLowerCase() === "true" || $.toLowerCase() === "false") && ($ = $.toLowerCase() === "true"),
        $
    }
    function ee($, U) {
        U = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, U),
        g(U.arrayFormatSeparator);
        const w = p(U)
          , E = Object.create(null);
        if (typeof $ != "string" || ($ = $.trim().replace(/^[?#&]/, ""),
        !$))
            return E;
        for (const D of $.split("&")) {
            if (D === "")
                continue;
            let[u,b] = s(U.decode ? D.replace(/\+/g, " ") : D, "=");
            b = b === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(U.arrayFormat) ? b : S(b, U),
            w(S(u, U), b, E)
        }
        for (const D of Object.keys(E)) {
            const u = E[D];
            if (typeof u == "object" && u !== null)
                for (const b of Object.keys(u))
                    u[b] = B(u[b], U);
            else
                E[D] = B(u, U)
        }
        return U.sort === !1 ? E : (U.sort === !0 ? Object.keys(E).sort() : Object.keys(E).sort(U.sort)).reduce( (D, u) => {
            const b = E[u];
            return b && typeof b == "object" && !Array.isArray(b) ? D[u] = P(b) : D[u] = b,
            D
        }
        , Object.create(null))
    }
    i.extract = K,
    i.parse = ee,
    i.stringify = ($, U) => {
        if (!$)
            return "";
        U = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, U),
        g(U.arrayFormatSeparator);
        const w = b => U.skipNull && c($[b]) || U.skipEmptyString && $[b] === ""
          , E = f(U)
          , D = {};
        for (const b of Object.keys($))
            w(b) || (D[b] = $[b]);
        const u = Object.keys(D);
        return U.sort !== !1 && u.sort(U.sort),
        u.map(b => {
            const V = $[b];
            return V === void 0 ? "" : V === null ? v(b, U) : Array.isArray(V) ? V.length === 0 && U.arrayFormat === "bracket-separator" ? v(b, U) + "[]" : V.reduce(E(b), []).join("&") : v(b, U) + "=" + v(V, U)
        }
        ).filter(b => b.length > 0).join("&")
    }
    ,
    i.parseUrl = ($, U) => {
        U = Object.assign({
            decode: !0
        }, U);
        const [w,E] = s($, "#");
        return Object.assign({
            url: w.split("?")[0] || "",
            query: ee(K($), U)
        }, U && U.parseFragmentIdentifier && E ? {
            fragmentIdentifier: S(E, U)
        } : {})
    }
    ,
    i.stringifyUrl = ($, U) => {
        U = Object.assign({
            encode: !0,
            strict: !0,
            [d]: !0
        }, U);
        const w = A($.url).split("?")[0] || ""
          , E = i.extract($.url)
          , D = i.parse(E, {
            sort: !1
        })
          , u = Object.assign(D, $.query);
        let b = i.stringify(u, U);
        b && (b = `?${b}`);
        let V = O($.url);
        return $.fragmentIdentifier && (V = `#${U[d] ? v($.fragmentIdentifier, U) : $.fragmentIdentifier}`),
        `${w}${b}${V}`
    }
    ,
    i.pick = ($, U, w) => {
        w = Object.assign({
            parseFragmentIdentifier: !0,
            [d]: !1
        }, w);
        const {url: E, query: D, fragmentIdentifier: u} = i.parseUrl($, w);
        return i.stringifyUrl({
            url: E,
            query: o(D, U),
            fragmentIdentifier: u
        }, w)
    }
    ,
    i.exclude = ($, U, w) => {
        const E = Array.isArray(U) ? D => !U.includes(D) : (D, u) => !U(D, u);
        return i.pick($, E, w)
    }
}
)(Ss);
const RE = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
}
  , TE = ":";
function NE(i) {
    const [e,t] = i.split(TE);
    return {
        namespace: e,
        reference: t
    }
}
function $E(i, e=[]) {
    const t = [];
    return Object.keys(i).forEach(s => {
        if (e.length && !e.includes(s))
            return;
        const o = i[s];
        t.push(...o.accounts)
    }
    ),
    t
}
function dp(i, e) {
    return i.includes(":") ? [i] : e.chains || []
}
const pp = "base10"
  , cr = "base16"
  , _u = "base64pad"
  , Bu = "utf8"
  , gp = 0
  , hn = 1
  , LE = 0
  , xf = 1
  , Eu = 12
  , Ku = 32;
function UE() {
    const i = ju.generateKeyPair();
    return {
        privateKey: ur(i.secretKey, cr),
        publicKey: ur(i.publicKey, cr)
    }
}
function Du() {
    const i = zn.randomBytes(Ku);
    return ur(i, cr)
}
function ME(i, e) {
    const t = ju.sharedKey(mr(i, cr), mr(e, cr), !0)
      , s = new Db(ha.SHA256,t).expand(Ku);
    return ur(s, cr)
}
function jE(i) {
    const e = ha.hash(mr(i, cr));
    return ur(e, cr)
}
function qn(i) {
    const e = ha.hash(mr(i, Bu));
    return ur(e, cr)
}
function qE(i) {
    return mr(`${i}`, pp)
}
function Ts(i) {
    return Number(ur(i, pp))
}
function FE(i) {
    const e = qE(typeof i.type < "u" ? i.type : gp);
    if (Ts(e) === hn && typeof i.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof i.senderPublicKey < "u" ? mr(i.senderPublicKey, cr) : void 0
      , s = typeof i.iv < "u" ? mr(i.iv, cr) : zn.randomBytes(Eu)
      , o = new Uu.ChaCha20Poly1305(mr(i.symKey, cr)).seal(s, mr(i.message, Bu));
    return HE({
        type: e,
        sealed: o,
        iv: s,
        senderPublicKey: t
    })
}
function zE(i) {
    const e = new Uu.ChaCha20Poly1305(mr(i.symKey, cr))
      , {sealed: t, iv: s} = ta(i.encoded)
      , o = e.open(s, t);
    if (o === null)
        throw new Error("Failed to decrypt");
    return ur(o, Bu)
}
function HE(i) {
    if (Ts(i.type) === hn) {
        if (typeof i.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return ur(yu([i.type, i.senderPublicKey, i.iv, i.sealed]), _u)
    }
    return ur(yu([i.type, i.iv, i.sealed]), _u)
}
function ta(i) {
    const e = mr(i, _u)
      , t = e.slice(LE, xf)
      , s = xf;
    if (Ts(t) === hn) {
        const f = s + Ku
          , p = f + Eu
          , g = e.slice(s, f)
          , v = e.slice(f, p)
          , S = e.slice(p);
        return {
            type: t,
            sealed: S,
            iv: v,
            senderPublicKey: g
        }
    }
    const o = s + Eu
      , c = e.slice(s, o)
      , d = e.slice(o);
    return {
        type: t,
        sealed: d,
        iv: c
    }
}
function BE(i, e) {
    const t = ta(i);
    return yp({
        type: Ts(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? ur(t.senderPublicKey, cr) : void 0,
        receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    })
}
function yp(i) {
    const e = (i == null ? void 0 : i.type) || gp;
    if (e === hn) {
        if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
            throw new Error("missing sender public key");
        if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: i == null ? void 0 : i.senderPublicKey,
        receiverPublicKey: i == null ? void 0 : i.receiverPublicKey
    }
}
function Of(i) {
    return i.type === hn && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string"
}
var KE = Object.defineProperty
  , Pf = Object.getOwnPropertySymbols
  , kE = Object.prototype.hasOwnProperty
  , VE = Object.prototype.propertyIsEnumerable
  , Cf = (i, e, t) => e in i ? KE(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Af = (i, e) => {
    for (var t in e || (e = {}))
        kE.call(e, t) && Cf(i, t, e[t]);
    if (Pf)
        for (var t of Pf(e))
            VE.call(e, t) && Cf(i, t, e[t]);
    return i
}
;
const WE = "ReactNative"
  , Pr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}
  , GE = "js";
function ku() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}
function Bn() {
    return !Fu() && !!zu() && navigator.product === WE
}
function Kn() {
    return !ku() && !!zu() && !!Fu()
}
function Ns() {
    return Bn() ? Pr.reactNative : ku() ? Pr.node : Kn() ? Pr.browser : Pr.unknown
}
function YE() {
    var i;
    try {
        return Bn() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (i = global.Application) == null ? void 0 : i.applicationId : void 0
    } catch {
        return
    }
}
function JE(i, e) {
    let t = Ss.parse(i);
    return t = Af(Af({}, t), e),
    i = Ss.stringify(t),
    i
}
function QE() {
    return lp() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function XE() {
    if (Ns() === Pr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const {OS: t, Version: s} = global.Platform;
        return [t, s].join("-")
    }
    const i = L_();
    if (i === null)
        return "unknown";
    const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
    return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-")
}
function ZE() {
    var i;
    const e = Ns();
    return e === Pr.browser ? [e, ((i = hp()) == null ? void 0 : i.host) || "unknown"].join(":") : e
}
function e3(i, e, t) {
    const s = XE()
      , o = ZE();
    return [[i, e].join("-"), [GE, t].join("-"), s, o].join("/")
}
function t3({protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: o, projectId: c, useOnCloseEvent: d, bundleId: f}) {
    const p = t.split("?")
      , g = e3(i, e, s)
      , v = {
        auth: o,
        ua: g,
        projectId: c,
        useOnCloseEvent: d || void 0,
        origin: f || void 0
    }
      , S = JE(p[1] || "", v);
    return p[0] + "?" + S
}
function an(i, e) {
    return i.filter(t => e.includes(t)).length === i.length
}
function vp(i) {
    return Object.fromEntries(i.entries())
}
function mp(i) {
    return new Map(Object.entries(i))
}
function Mn(i=ve.FIVE_MINUTES, e) {
    const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
    let s, o, c;
    return {
        resolve: d => {
            c && s && (clearTimeout(c),
            s(d))
        }
        ,
        reject: d => {
            c && o && (clearTimeout(c),
            o(d))
        }
        ,
        done: () => new Promise( (d, f) => {
            c = setTimeout( () => {
                f(new Error(e))
            }
            , t),
            s = d,
            o = f
        }
        )
    }
}
function Is(i, e, t) {
    return new Promise(async (s, o) => {
        const c = setTimeout( () => o(new Error(t)), e);
        try {
            const d = await i;
            s(d)
        } catch (d) {
            o(d)
        }
        clearTimeout(c)
    }
    )
}
function wp(i, e) {
    if (typeof e == "string" && e.startsWith(`${i}:`))
        return e;
    if (i.toLowerCase() === "topic") {
        if (typeof e != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (i.toLowerCase() === "id") {
        if (typeof e != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${i}`)
}
function r3(i) {
    return wp("topic", i)
}
function i3(i) {
    return wp("id", i)
}
function bp(i) {
    const [e,t] = i.split(":")
      , s = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof t == "string")
        s.topic = t;
    else if (e === "id" && Number.isInteger(Number(t)))
        s.id = Number(t);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
    return s
}
function Or(i, e) {
    return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i))
}
function ji(i) {
    return Date.now() >= ve.toMiliseconds(i)
}
function Nt(i, e) {
    return `${i}${e ? `:${e}` : ""}`
}
function Yc(i=[], e=[]) {
    return [...new Set([...i, ...e])]
}
async function n3({id: i, topic: e, wcDeepLink: t}) {
    try {
        if (!t)
            return;
        const s = typeof t == "string" ? JSON.parse(t) : t;
        let o = s == null ? void 0 : s.href;
        if (typeof o != "string")
            return;
        o.endsWith("/") && (o = o.slice(0, -1));
        const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`
          , d = Ns();
        d === Pr.browser ? c.startsWith("https://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : d === Pr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await globalThis.Linking.openURL(c)
    } catch (s) {
        console.error(s)
    }
}
async function s3(i, e) {
    try {
        return await i.getItem(e) || (Kn() ? localStorage.getItem(e) : void 0)
    } catch (t) {
        console.error(t)
    }
}
const o3 = "irn";
function Su(i) {
    return (i == null ? void 0 : i.relay) || {
        protocol: o3
    }
}
function Jo(i) {
    const e = RE[i];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${i}`);
    return e
}
var a3 = Object.defineProperty
  , c3 = Object.defineProperties
  , u3 = Object.getOwnPropertyDescriptors
  , Rf = Object.getOwnPropertySymbols
  , h3 = Object.prototype.hasOwnProperty
  , l3 = Object.prototype.propertyIsEnumerable
  , Tf = (i, e, t) => e in i ? a3(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , f3 = (i, e) => {
    for (var t in e || (e = {}))
        h3.call(e, t) && Tf(i, t, e[t]);
    if (Rf)
        for (var t of Rf(e))
            l3.call(e, t) && Tf(i, t, e[t]);
    return i
}
  , d3 = (i, e) => c3(i, u3(e));
function p3(i, e="-") {
    const t = {}
      , s = "relay" + e;
    return Object.keys(i).forEach(o => {
        if (o.startsWith(s)) {
            const c = o.replace(s, "")
              , d = i[o];
            t[c] = d
        }
    }
    ),
    t
}
function Nf(i) {
    i = i.includes("wc://") ? i.replace("wc://", "") : i,
    i = i.includes("wc:") ? i.replace("wc:", "") : i;
    const e = i.indexOf(":")
      , t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0
      , s = i.substring(0, e)
      , o = i.substring(e + 1, t).split("@")
      , c = typeof t < "u" ? i.substring(t) : ""
      , d = Ss.parse(c);
    return {
        protocol: s,
        topic: g3(o[0]),
        version: parseInt(o[1], 10),
        symKey: d.symKey,
        relay: p3(d),
        expiryTimestamp: d.expiryTimestamp ? parseInt(d.expiryTimestamp, 10) : void 0
    }
}
function g3(i) {
    return i.startsWith("//") ? i.substring(2) : i
}
function y3(i, e="-") {
    const t = "relay"
      , s = {};
    return Object.keys(i).forEach(o => {
        const c = t + e + o;
        i[o] && (s[c] = i[o])
    }
    ),
    s
}
function v3(i) {
    return `${i.protocol}:${i.topic}@${i.version}?` + Ss.stringify(d3(f3({
        symKey: i.symKey
    }, y3(i.relay)), {
        expiryTimestamp: i.expiryTimestamp
    }))
}
function kn(i) {
    const e = [];
    return i.forEach(t => {
        const [s,o] = t.split(":");
        e.push(`${s}:${o}`)
    }
    ),
    e
}
function m3(i) {
    const e = [];
    return Object.values(i).forEach(t => {
        e.push(...kn(t.accounts))
    }
    ),
    e
}
function w3(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        kn(s.accounts).includes(e) && t.push(...s.methods)
    }
    ),
    t
}
function b3(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        kn(s.accounts).includes(e) && t.push(...s.events)
    }
    ),
    t
}
function Vu(i) {
    return i.includes(":")
}
function ws(i) {
    return Vu(i) ? i.split(":")[0] : i
}
const _3 = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}
  , E3 = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function ce(i, e) {
    const {message: t, code: s} = E3[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function mt(i, e) {
    const {message: t, code: s} = _3[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function si(i, e) {
    return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : !0 : !1
}
function xs(i) {
    return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length
}
function ar(i) {
    return typeof i > "u"
}
function Vt(i, e) {
    return e && ar(i) ? !0 : typeof i == "string" && !!i.trim().length
}
function Wu(i, e) {
    return e && ar(i) ? !0 : typeof i == "number" && !isNaN(i)
}
function D3(i, e) {
    const {requiredNamespaces: t} = e
      , s = Object.keys(i.namespaces)
      , o = Object.keys(t);
    let c = !0;
    return an(o, s) ? (s.forEach(d => {
        const {accounts: f, methods: p, events: g} = i.namespaces[d]
          , v = kn(f)
          , S = t[d];
        (!an(dp(d, S), v) || !an(S.methods, p) || !an(S.events, g)) && (c = !1)
    }
    ),
    c) : !1
}
function ra(i) {
    return Vt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1
}
function S3(i) {
    if (Vt(i, !1) && i.includes(":")) {
        const e = i.split(":");
        if (e.length === 3) {
            const t = e[0] + ":" + e[1];
            return !!e[2] && ra(t)
        }
    }
    return !1
}
function I3(i) {
    if (Vt(i, !1))
        try {
            return typeof new URL(i) < "u"
        } catch {
            return !1
        }
    return !1
}
function x3(i) {
    var e;
    return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey
}
function O3(i) {
    return i == null ? void 0 : i.topic
}
function P3(i, e) {
    let t = null;
    return Vt(i == null ? void 0 : i.publicKey, !1) || (t = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    t
}
function $f(i) {
    let e = !0;
    return si(i) ? i.length && (e = i.every(t => Vt(t, !1))) : e = !1,
    e
}
function C3(i, e, t) {
    let s = null;
    return si(e) && e.length ? e.forEach(o => {
        s || ra(o) || (s = mt("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`))
    }
    ) : ra(i) || (s = mt("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    s
}
function A3(i, e, t) {
    let s = null;
    return Object.entries(i).forEach( ([o,c]) => {
        if (s)
            return;
        const d = C3(o, dp(o, c), `${e} ${t}`);
        d && (s = d)
    }
    ),
    s
}
function R3(i, e) {
    let t = null;
    return si(i) ? i.forEach(s => {
        t || S3(s) || (t = mt("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : t = mt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    t
}
function T3(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t)
            return;
        const o = R3(s == null ? void 0 : s.accounts, `${e} namespace`);
        o && (t = o)
    }
    ),
    t
}
function N3(i, e) {
    let t = null;
    return $f(i == null ? void 0 : i.methods) ? $f(i == null ? void 0 : i.events) || (t = mt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = mt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    t
}
function _p(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t)
            return;
        const o = N3(s, `${e}, namespace`);
        o && (t = o)
    }
    ),
    t
}
function $3(i, e, t) {
    let s = null;
    if (i && xs(i)) {
        const o = _p(i, e);
        o && (s = o);
        const c = A3(i, e, t);
        c && (s = c)
    } else
        s = ce("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return s
}
function Jc(i, e) {
    let t = null;
    if (i && xs(i)) {
        const s = _p(i, e);
        s && (t = s);
        const o = T3(i, e);
        o && (t = o)
    } else
        t = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}
function Ep(i) {
    return Vt(i.protocol, !0)
}
function L3(i, e) {
    let t = !1;
    return e && !i ? t = !0 : i && si(i) && i.length && i.forEach(s => {
        t = Ep(s)
    }
    ),
    t
}
function U3(i) {
    return typeof i == "number"
}
function vr(i) {
    return typeof i < "u" && typeof i !== null
}
function M3(i) {
    return !(!i || typeof i != "object" || !i.code || !Wu(i.code, !1) || !i.message || !Vt(i.message, !1))
}
function j3(i) {
    return !(ar(i) || !Vt(i.method, !1))
}
function q3(i) {
    return !(ar(i) || ar(i.result) && ar(i.error) || !Wu(i.id, !1) || !Vt(i.jsonrpc, !1))
}
function F3(i) {
    return !(ar(i) || !Vt(i.name, !1))
}
function Lf(i, e) {
    return !(!ra(e) || !m3(i).includes(e))
}
function z3(i, e, t) {
    return Vt(t, !1) ? w3(i, e).includes(t) : !1
}
function H3(i, e, t) {
    return Vt(t, !1) ? b3(i, e).includes(t) : !1
}
function Uf(i, e, t) {
    let s = null;
    const o = B3(i)
      , c = K3(e)
      , d = Object.keys(o)
      , f = Object.keys(c)
      , p = Mf(Object.keys(i))
      , g = Mf(Object.keys(e))
      , v = p.filter(S => !g.includes(S));
    return v.length && (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${v.toString()}
      Received: ${Object.keys(e).toString()}`)),
    an(d, f) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${f.toString()}`)),
    Object.keys(e).forEach(S => {
        if (!S.includes(":") || s)
            return;
        const P = kn(e[S].accounts);
        P.includes(S) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${S}
        Required: ${S}
        Approved: ${P.toString()}`))
    }
    ),
    d.forEach(S => {
        s || (an(o[S].methods, c[S].methods) ? an(o[S].events, c[S].events) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${S}`)) : s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${S}`))
    }
    ),
    s
}
function B3(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        var s;
        t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach(o => {
            e[o] = {
                methods: i[t].methods,
                events: i[t].events
            }
        }
        )
    }
    ),
    e
}
function Mf(i) {
    return [...new Set(i.map(e => e.includes(":") ? e.split(":")[0] : e))]
}
function K3(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        if (t.includes(":"))
            e[t] = i[t];
        else {
            const s = kn(i[t].accounts);
            s == null || s.forEach(o => {
                e[o] = {
                    accounts: i[t].accounts.filter(c => c.includes(`${o}:`)),
                    methods: i[t].methods,
                    events: i[t].events
                }
            }
            )
        }
    }
    ),
    e
}
function k3(i, e) {
    return Wu(i, !1) && i <= e.max && i >= e.min
}
function jf() {
    const i = Ns();
    return new Promise(e => {
        switch (i) {
        case Pr.browser:
            e(V3());
            break;
        case Pr.reactNative:
            e(W3());
            break;
        case Pr.node:
            e(G3());
            break;
        default:
            e(!0)
        }
    }
    )
}
function V3() {
    return Kn() && (navigator == null ? void 0 : navigator.onLine)
}
async function W3() {
    if (Bn() && typeof global < "u" && global != null && global.NetInfo) {
        const i = await (global == null ? void 0 : global.NetInfo.fetch());
        return i == null ? void 0 : i.isConnected
    }
    return !0
}
function G3() {
    return !0
}
function Y3(i) {
    switch (Ns()) {
    case Pr.browser:
        J3(i);
        break;
    case Pr.reactNative:
        Q3(i);
        break
    }
}
function J3(i) {
    !Bn() && Kn() && (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)))
}
function Q3(i) {
    Bn() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(e => i(e == null ? void 0 : e.isConnected)))
}
const Qc = {};
let Ko = class {
    static get(e) {
        return Qc[e]
    }
    static set(e, t) {
        Qc[e] = t
    }
    static delete(e) {
        delete Qc[e]
    }
}
;
function X3(i) {
    return !i || typeof i.then != "function" ? Promise.resolve(i) : i
}
function kt(i, ...e) {
    try {
        return X3(i(...e))
    } catch (t) {
        return Promise.reject(t)
    }
}
function Z3(i) {
    const e = typeof i;
    return i === null || e !== "object" && e !== "function"
}
function eD(i) {
    const e = Object.getPrototypeOf(i);
    return !e || e.isPrototypeOf(Object)
}
function Qo(i) {
    if (Z3(i))
        return String(i);
    if (eD(i) || Array.isArray(i))
        return JSON.stringify(i);
    if (typeof i.toJSON == "function")
        return Qo(i.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
function Dp() {
    if (typeof Buffer === void 0)
        throw new TypeError("[unstorage] Buffer is not supported!")
}
const Iu = "base64:";
function tD(i) {
    if (typeof i == "string")
        return i;
    Dp();
    const e = Buffer.from(i).toString("base64");
    return Iu + e
}
function rD(i) {
    return typeof i != "string" || !i.startsWith(Iu) ? i : (Dp(),
    Buffer.from(i.slice(Iu.length), "base64"))
}
function yr(i) {
    return i ? i.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}
function iD(...i) {
    return yr(i.join(":"))
}
function ko(i) {
    return i = yr(i),
    i ? i + ":" : ""
}
const nD = "memory"
  , sD = () => {
    const i = new Map;
    return {
        name: nD,
        options: {},
        hasItem(e) {
            return i.has(e)
        },
        getItem(e) {
            return i.get(e) ?? null
        },
        getItemRaw(e) {
            return i.get(e) ?? null
        },
        setItem(e, t) {
            i.set(e, t)
        },
        setItemRaw(e, t) {
            i.set(e, t)
        },
        removeItem(e) {
            i.delete(e)
        },
        getKeys() {
            return Array.from(i.keys())
        },
        clear() {
            i.clear()
        },
        dispose() {
            i.clear()
        }
    }
}
;
function oD(i={}) {
    const e = {
        mounts: {
            "": i.driver || sD()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , t = g => {
        for (const v of e.mountpoints)
            if (g.startsWith(v))
                return {
                    base: v,
                    relativeKey: g.slice(v.length),
                    driver: e.mounts[v]
                };
        return {
            base: "",
            relativeKey: g,
            driver: e.mounts[""]
        }
    }
      , s = (g, v) => e.mountpoints.filter(S => S.startsWith(g) || v && g.startsWith(S)).map(S => ({
        relativeBase: g.length > S.length ? g.slice(S.length) : void 0,
        mountpoint: S,
        driver: e.mounts[S]
    }))
      , o = (g, v) => {
        if (e.watching) {
            v = yr(v);
            for (const S of e.watchListeners)
                S(g, v)
        }
    }
      , c = async () => {
        if (!e.watching) {
            e.watching = !0;
            for (const g in e.mounts)
                e.unwatch[g] = await qf(e.mounts[g], o, g)
        }
    }
      , d = async () => {
        if (e.watching) {
            for (const g in e.unwatch)
                await e.unwatch[g]();
            e.unwatch = {},
            e.watching = !1
        }
    }
      , f = (g, v, S) => {
        const P = new Map
          , A = O => {
            let K = P.get(O.base);
            return K || (K = {
                driver: O.driver,
                base: O.base,
                items: []
            },
            P.set(O.base, K)),
            K
        }
        ;
        for (const O of g) {
            const K = typeof O == "string"
              , B = yr(K ? O : O.key)
              , ee = K ? void 0 : O.value
              , $ = K || !O.options ? v : {
                ...v,
                ...O.options
            }
              , U = t(B);
            A(U).items.push({
                key: B,
                value: ee,
                relativeKey: U.relativeKey,
                options: $
            })
        }
        return Promise.all([...P.values()].map(O => S(O))).then(O => O.flat())
    }
      , p = {
        hasItem(g, v={}) {
            g = yr(g);
            const {relativeKey: S, driver: P} = t(g);
            return kt(P.hasItem, S, v)
        },
        getItem(g, v={}) {
            g = yr(g);
            const {relativeKey: S, driver: P} = t(g);
            return kt(P.getItem, S, v).then(A => Ho(A))
        },
        getItems(g, v) {
            return f(g, v, S => S.driver.getItems ? kt(S.driver.getItems, S.items.map(P => ({
                key: P.relativeKey,
                options: P.options
            })), v).then(P => P.map(A => ({
                key: iD(S.base, A.key),
                value: Ho(A.value)
            }))) : Promise.all(S.items.map(P => kt(S.driver.getItem, P.relativeKey, P.options).then(A => ({
                key: P.key,
                value: Ho(A)
            })))))
        },
        getItemRaw(g, v={}) {
            g = yr(g);
            const {relativeKey: S, driver: P} = t(g);
            return P.getItemRaw ? kt(P.getItemRaw, S, v) : kt(P.getItem, S, v).then(A => rD(A))
        },
        async setItem(g, v, S={}) {
            if (v === void 0)
                return p.removeItem(g);
            g = yr(g);
            const {relativeKey: P, driver: A} = t(g);
            A.setItem && (await kt(A.setItem, P, Qo(v), S),
            A.watch || o("update", g))
        },
        async setItems(g, v) {
            await f(g, v, async S => {
                if (S.driver.setItems)
                    return kt(S.driver.setItems, S.items.map(P => ({
                        key: P.relativeKey,
                        value: Qo(P.value),
                        options: P.options
                    })), v);
                S.driver.setItem && await Promise.all(S.items.map(P => kt(S.driver.setItem, P.relativeKey, Qo(P.value), P.options)))
            }
            )
        },
        async setItemRaw(g, v, S={}) {
            if (v === void 0)
                return p.removeItem(g, S);
            g = yr(g);
            const {relativeKey: P, driver: A} = t(g);
            if (A.setItemRaw)
                await kt(A.setItemRaw, P, v, S);
            else if (A.setItem)
                await kt(A.setItem, P, tD(v), S);
            else
                return;
            A.watch || o("update", g)
        },
        async removeItem(g, v={}) {
            typeof v == "boolean" && (v = {
                removeMeta: v
            }),
            g = yr(g);
            const {relativeKey: S, driver: P} = t(g);
            P.removeItem && (await kt(P.removeItem, S, v),
            (v.removeMeta || v.removeMata) && await kt(P.removeItem, S + "$", v),
            P.watch || o("remove", g))
        },
        async getMeta(g, v={}) {
            typeof v == "boolean" && (v = {
                nativeOnly: v
            }),
            g = yr(g);
            const {relativeKey: S, driver: P} = t(g)
              , A = Object.create(null);
            if (P.getMeta && Object.assign(A, await kt(P.getMeta, S, v)),
            !v.nativeOnly) {
                const O = await kt(P.getItem, S + "$", v).then(K => Ho(K));
                O && typeof O == "object" && (typeof O.atime == "string" && (O.atime = new Date(O.atime)),
                typeof O.mtime == "string" && (O.mtime = new Date(O.mtime)),
                Object.assign(A, O))
            }
            return A
        },
        setMeta(g, v, S={}) {
            return this.setItem(g + "$", v, S)
        },
        removeMeta(g, v={}) {
            return this.removeItem(g + "$", v)
        },
        async getKeys(g, v={}) {
            g = ko(g);
            const S = s(g, !0);
            let P = [];
            const A = [];
            for (const O of S) {
                const B = (await kt(O.driver.getKeys, O.relativeBase, v)).map(ee => O.mountpoint + yr(ee)).filter(ee => !P.some($ => ee.startsWith($)));
                A.push(...B),
                P = [O.mountpoint, ...P.filter(ee => !ee.startsWith(O.mountpoint))]
            }
            return g ? A.filter(O => O.startsWith(g) && !O.endsWith("$")) : A.filter(O => !O.endsWith("$"))
        },
        async clear(g, v={}) {
            g = ko(g),
            await Promise.all(s(g, !1).map(async S => {
                if (S.driver.clear)
                    return kt(S.driver.clear, S.relativeBase, v);
                if (S.driver.removeItem) {
                    const P = await S.driver.getKeys(S.relativeBase || "", v);
                    return Promise.all(P.map(A => S.driver.removeItem(A, v)))
                }
            }
            ))
        },
        async dispose() {
            await Promise.all(Object.values(e.mounts).map(g => Ff(g)))
        },
        async watch(g) {
            return await c(),
            e.watchListeners.push(g),
            async () => {
                e.watchListeners = e.watchListeners.filter(v => v !== g),
                e.watchListeners.length === 0 && await d()
            }
        },
        async unwatch() {
            e.watchListeners = [],
            await d()
        },
        mount(g, v) {
            if (g = ko(g),
            g && e.mounts[g])
                throw new Error(`already mounted at ${g}`);
            return g && (e.mountpoints.push(g),
            e.mountpoints.sort( (S, P) => P.length - S.length)),
            e.mounts[g] = v,
            e.watching && Promise.resolve(qf(v, o, g)).then(S => {
                e.unwatch[g] = S
            }
            ).catch(console.error),
            p
        },
        async unmount(g, v=!0) {
            g = ko(g),
            !(!g || !e.mounts[g]) && (e.watching && g in e.unwatch && (e.unwatch[g](),
            delete e.unwatch[g]),
            v && await Ff(e.mounts[g]),
            e.mountpoints = e.mountpoints.filter(S => S !== g),
            delete e.mounts[g])
        },
        getMount(g="") {
            g = yr(g) + ":";
            const v = t(g);
            return {
                driver: v.driver,
                base: v.base
            }
        },
        getMounts(g="", v={}) {
            return g = yr(g),
            s(g, v.parents).map(P => ({
                driver: P.driver,
                base: P.mountpoint
            }))
        }
    };
    return p
}
function qf(i, e, t) {
    return i.watch ? i.watch( (s, o) => e(s, t + o)) : () => {}
}
async function Ff(i) {
    typeof i.dispose == "function" && await kt(i.dispose)
}
const aD = i => JSON.stringify(i, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t)
  , cD = i => {
    const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) => typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o)
}
;
function $s(i) {
    if (typeof i != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof i}`);
    try {
        return cD(i)
    } catch {
        return i
    }
}
function cn(i) {
    return typeof i == "string" ? i : aD(i) || ""
}
const uD = "idb-keyval";
var hD = (i={}) => {
    const e = i.base && i.base.length > 0 ? `${i.base}:` : ""
      , t = o => e + o;
    let s;
    return i.dbName && i.storeName && (s = q1(i.dbName, i.storeName)),
    {
        name: uD,
        options: i,
        async hasItem(o) {
            return !(typeof await rf(t(o), s) > "u")
        },
        async getItem(o) {
            return await rf(t(o), s) ?? null
        },
        setItem(o, c) {
            return F1(t(o), c, s)
        },
        removeItem(o) {
            return z1(t(o), s)
        },
        getKeys() {
            return H1(s)
        },
        clear() {
            return B1(s)
        }
    }
}
;
const lD = "WALLET_CONNECT_V2_INDEXED_DB"
  , fD = "keyvaluestorage";
let dD = class {
    constructor() {
        this.indexedDb = oD({
            driver: hD({
                dbName: lD,
                storeName: fD
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
    }
    async getItem(e) {
        const t = await this.indexedDb.getItem(e);
        if (t !== null)
            return t
    }
    async setItem(e, t) {
        await this.indexedDb.setItem(e, cn(t))
    }
    async removeItem(e) {
        await this.indexedDb.removeItem(e)
    }
}
;
var Xc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Xo = {
    exports: {}
};
(function() {
    let i;
    function e() {}
    i = e,
    i.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null
    }
    ,
    i.prototype.setItem = function(t, s) {
        this[t] = String(s)
    }
    ,
    i.prototype.removeItem = function(t) {
        delete this[t]
    }
    ,
    i.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach(function(s) {
            t[s] = void 0,
            delete t[s]
        })
    }
    ,
    i.prototype.key = function(t) {
        return t = t || 0,
        Object.keys(this)[t]
    }
    ,
    i.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof Xc < "u" && Xc.localStorage ? Xo.exports = Xc.localStorage : typeof window < "u" && window.localStorage ? Xo.exports = window.localStorage : Xo.exports = new e
}
)();
function pD(i) {
    var e;
    return [i[0], $s((e = i[1]) != null ? e : "")]
}
class gD {
    constructor() {
        this.localStorage = Xo.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(pD)
    }
    async getItem(e) {
        const t = this.localStorage.getItem(e);
        if (t !== null)
            return $s(t)
    }
    async setItem(e, t) {
        this.localStorage.setItem(e, cn(t))
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
}
const yD = "wc_storage_version"
  , zf = 1
  , vD = async (i, e, t) => {
    const s = yD
      , o = await e.getItem(s);
    if (o && o >= zf) {
        t(e);
        return
    }
    const c = await i.getKeys();
    if (!c.length) {
        t(e);
        return
    }
    const d = [];
    for (; c.length; ) {
        const f = c.shift();
        if (!f)
            continue;
        const p = f.toLowerCase();
        if (p.includes("wc@") || p.includes("walletconnect") || p.includes("wc_") || p.includes("wallet_connect")) {
            const g = await i.getItem(f);
            await e.setItem(f, g),
            d.push(f)
        }
    }
    await e.setItem(s, zf),
    t(e),
    mD(i, d)
}
  , mD = async (i, e) => {
    e.length && e.forEach(async t => {
        await i.removeItem(t)
    }
    )
}
;
let wD = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = t => {
            this.storage = t,
            this.initialized = !0
        }
        ;
        const e = new gD;
        this.storage = e;
        try {
            const t = new dD;
            vD(e, t, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(),
        this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(),
        this.storage.getEntries()
    }
    async getItem(e) {
        return await this.initialize(),
        this.storage.getItem(e)
    }
    async setItem(e, t) {
        return await this.initialize(),
        this.storage.setItem(e, t)
    }
    async removeItem(e) {
        return await this.initialize(),
        this.storage.removeItem(e)
    }
    async initialize() {
        this.initialized || await new Promise(e => {
            const t = setInterval( () => {
                this.initialized && (clearInterval(t),
                e())
            }
            , 20)
        }
        )
    }
}
;
var Vn = {}
  , ps = {}
  , Zc = {}
  , gs = {};
class ln {
}
const bD = Object.freeze(Object.defineProperty({
    __proto__: null,
    IEvents: ln
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _D = $u(bD);
var Hf;
function ED() {
    if (Hf)
        return gs;
    Hf = 1,
    Object.defineProperty(gs, "__esModule", {
        value: !0
    }),
    gs.IHeartBeat = void 0;
    const i = _D;
    class e extends i.IEvents {
        constructor(s) {
            super()
        }
    }
    return gs.IHeartBeat = e,
    gs
}
var Bf;
function Sp() {
    return Bf || (Bf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Si.__exportStar(ED(), i)
    }(Zc)),
    Zc
}
var eu = {}, on = {}, Kf;
function DD() {
    if (Kf)
        return on;
    Kf = 1,
    Object.defineProperty(on, "__esModule", {
        value: !0
    }),
    on.HEARTBEAT_EVENTS = on.HEARTBEAT_INTERVAL = void 0;
    const i = ve;
    return on.HEARTBEAT_INTERVAL = i.FIVE_SECONDS,
    on.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    },
    on
}
var kf;
function Ip() {
    return kf || (kf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Si.__exportStar(DD(), i)
    }(eu)),
    eu
}
var Vf;
function SD() {
    if (Vf)
        return ps;
    Vf = 1,
    Object.defineProperty(ps, "__esModule", {
        value: !0
    }),
    ps.HeartBeat = void 0;
    const i = Si
      , e = kd()
      , t = ve
      , s = Sp()
      , o = Ip();
    class c extends s.IHeartBeat {
        constructor(f) {
            super(f),
            this.events = new e.EventEmitter,
            this.interval = o.HEARTBEAT_INTERVAL,
            this.interval = (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL
        }
        static init(f) {
            return i.__awaiter(this, void 0, void 0, function*() {
                const p = new c(f);
                return yield p.init(),
                p
            })
        }
        init() {
            return i.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(f, p) {
            this.events.on(f, p)
        }
        once(f, p) {
            this.events.once(f, p)
        }
        off(f, p) {
            this.events.off(f, p)
        }
        removeListener(f, p) {
            this.events.removeListener(f, p)
        }
        initialize() {
            return i.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval( () => this.pulse(), t.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(o.HEARTBEAT_EVENTS.pulse)
        }
    }
    return ps.HeartBeat = c,
    ps
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(SD(), i),
    e.__exportStar(Sp(), i),
    e.__exportStar(Ip(), i)
}
)(Vn);
function ID(i) {
    try {
        return JSON.stringify(i)
    } catch {
        return '"[Circular]"'
    }
}
var xD = OD;
function OD(i, e, t) {
    var s = t && t.stringify || ID
      , o = 1;
    if (typeof i == "object" && i !== null) {
        var c = e.length + o;
        if (c === 1)
            return i;
        var d = new Array(c);
        d[0] = s(i);
        for (var f = 1; f < c; f++)
            d[f] = s(e[f]);
        return d.join(" ")
    }
    if (typeof i != "string")
        return i;
    var p = e.length;
    if (p === 0)
        return i;
    for (var g = "", v = 1 - o, S = -1, P = i && i.length || 0, A = 0; A < P; ) {
        if (i.charCodeAt(A) === 37 && A + 1 < P) {
            switch (S = S > -1 ? S : 0,
            i.charCodeAt(A + 1)) {
            case 100:
            case 102:
                if (v >= p || e[v] == null)
                    break;
                S < A && (g += i.slice(S, A)),
                g += Number(e[v]),
                S = A + 2,
                A++;
                break;
            case 105:
                if (v >= p || e[v] == null)
                    break;
                S < A && (g += i.slice(S, A)),
                g += Math.floor(Number(e[v])),
                S = A + 2,
                A++;
                break;
            case 79:
            case 111:
            case 106:
                if (v >= p || e[v] === void 0)
                    break;
                S < A && (g += i.slice(S, A));
                var O = typeof e[v];
                if (O === "string") {
                    g += "'" + e[v] + "'",
                    S = A + 2,
                    A++;
                    break
                }
                if (O === "function") {
                    g += e[v].name || "<anonymous>",
                    S = A + 2,
                    A++;
                    break
                }
                g += s(e[v]),
                S = A + 2,
                A++;
                break;
            case 115:
                if (v >= p)
                    break;
                S < A && (g += i.slice(S, A)),
                g += String(e[v]),
                S = A + 2,
                A++;
                break;
            case 37:
                S < A && (g += i.slice(S, A)),
                g += "%",
                S = A + 2,
                A++,
                v--;
                break
            }
            ++v
        }
        ++A
    }
    return S === -1 ? i : (S < P && (g += i.slice(S)),
    g)
}
const Wf = xD;
var PD = ni;
const Os = jD().console || {}
  , CD = {
    mapHttpRequest: Vo,
    mapHttpResponse: Vo,
    wrapRequestSerializer: tu,
    wrapResponseSerializer: tu,
    wrapErrorSerializer: tu,
    req: Vo,
    res: Vo,
    err: $D
};
function AD(i, e) {
    return Array.isArray(i) ? i.filter(function(s) {
        return s !== "!stdSerializers.err"
    }) : i === !0 ? Object.keys(e) : !1
}
function ni(i) {
    i = i || {},
    i.browser = i.browser || {};
    const e = i.browser.transmit;
    if (e && typeof e.send != "function")
        throw Error("pino: transmit option must have a send function");
    const t = i.browser.write || Os;
    i.browser.write && (i.browser.asObject = !0);
    const s = i.serializers || {}
      , o = AD(i.browser.serialize, s);
    let c = i.browser.serialize;
    Array.isArray(i.browser.serialize) && i.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
    const d = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof t == "function" && (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
    i.enabled === !1 && (i.level = "silent");
    const f = i.level || "info"
      , p = Object.create(t);
    p.log || (p.log = Ps),
    Object.defineProperty(p, "levelVal", {
        get: v
    }),
    Object.defineProperty(p, "level", {
        get: S,
        set: P
    });
    const g = {
        transmit: e,
        serialize: o,
        asObject: i.browser.asObject,
        levels: d,
        timestamp: LD(i)
    };
    p.levels = ni.levels,
    p.level = f,
    p.setMaxListeners = p.getMaxListeners = p.emit = p.addListener = p.on = p.prependListener = p.once = p.prependOnceListener = p.removeListener = p.removeAllListeners = p.listeners = p.listenerCount = p.eventNames = p.write = p.flush = Ps,
    p.serializers = s,
    p._serialize = o,
    p._stdErrSerialize = c,
    p.child = A,
    e && (p._logEvent = xu());
    function v() {
        return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
    }
    function S() {
        return this._level
    }
    function P(O) {
        if (O !== "silent" && !this.levels.values[O])
            throw Error("unknown level " + O);
        this._level = O,
        $n(g, p, "error", "log"),
        $n(g, p, "fatal", "error"),
        $n(g, p, "warn", "error"),
        $n(g, p, "info", "log"),
        $n(g, p, "debug", "log"),
        $n(g, p, "trace", "log")
    }
    function A(O, K) {
        if (!O)
            throw new Error("missing bindings for child Pino");
        K = K || {},
        o && O.serializers && (K.serializers = O.serializers);
        const B = K.serializers;
        if (o && B) {
            var ee = Object.assign({}, s, B)
              , $ = i.browser.serialize === !0 ? Object.keys(ee) : o;
            delete O.serializers,
            fa([O], $, ee, this._stdErrSerialize)
        }
        function U(w) {
            this._childLevel = (w._childLevel | 0) + 1,
            this.error = Ln(w, O, "error"),
            this.fatal = Ln(w, O, "fatal"),
            this.warn = Ln(w, O, "warn"),
            this.info = Ln(w, O, "info"),
            this.debug = Ln(w, O, "debug"),
            this.trace = Ln(w, O, "trace"),
            ee && (this.serializers = ee,
            this._serialize = $),
            e && (this._logEvent = xu([].concat(w._logEvent.bindings, O)))
        }
        return U.prototype = this,
        new U(this)
    }
    return p
}
ni.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
ni.stdSerializers = CD;
ni.stdTimeFunctions = Object.assign({}, {
    nullTime: xp,
    epochTime: Op,
    unixTime: UD,
    isoTime: MD
});
function $n(i, e, t, s) {
    const o = Object.getPrototypeOf(e);
    e[t] = e.levelVal > e.levels.values[t] ? Ps : o[t] ? o[t] : Os[t] || Os[s] || Ps,
    RD(i, e, t)
}
function RD(i, e, t) {
    !i.transmit && e[t] === Ps || (e[t] = function(s) {
        return function() {
            const c = i.timestamp()
              , d = new Array(arguments.length)
              , f = Object.getPrototypeOf && Object.getPrototypeOf(this) === Os ? Os : this;
            for (var p = 0; p < d.length; p++)
                d[p] = arguments[p];
            if (i.serialize && !i.asObject && fa(d, this._serialize, this.serializers, this._stdErrSerialize),
            i.asObject ? s.call(f, TD(this, t, d, c)) : s.apply(f, d),
            i.transmit) {
                const g = i.transmit.level || e.level
                  , v = ni.levels.values[g]
                  , S = ni.levels.values[t];
                if (S < v)
                    return;
                ND(this, {
                    ts: c,
                    methodLevel: t,
                    methodValue: S,
                    transmitLevel: g,
                    transmitValue: ni.levels.values[i.transmit.level || e.level],
                    send: i.transmit.send,
                    val: e.levelVal
                }, d)
            }
        }
    }(e[t]))
}
function TD(i, e, t, s) {
    i._serialize && fa(t, i._serialize, i.serializers, i._stdErrSerialize);
    const o = t.slice();
    let c = o[0];
    const d = {};
    s && (d.time = s),
    d.level = ni.levels.values[e];
    let f = (i._childLevel | 0) + 1;
    if (f < 1 && (f = 1),
    c !== null && typeof c == "object") {
        for (; f-- && typeof o[0] == "object"; )
            Object.assign(d, o.shift());
        c = o.length ? Wf(o.shift(), o) : void 0
    } else
        typeof c == "string" && (c = Wf(o.shift(), o));
    return c !== void 0 && (d.msg = c),
    d
}
function fa(i, e, t, s) {
    for (const o in i)
        if (s && i[o]instanceof Error)
            i[o] = ni.stdSerializers.err(i[o]);
        else if (typeof i[o] == "object" && !Array.isArray(i[o]))
            for (const c in i[o])
                e && e.indexOf(c) > -1 && c in t && (i[o][c] = t[c](i[o][c]))
}
function Ln(i, e, t) {
    return function() {
        const s = new Array(1 + arguments.length);
        s[0] = e;
        for (var o = 1; o < s.length; o++)
            s[o] = arguments[o - 1];
        return i[t].apply(this, s)
    }
}
function ND(i, e, t) {
    const s = e.send
      , o = e.ts
      , c = e.methodLevel
      , d = e.methodValue
      , f = e.val
      , p = i._logEvent.bindings;
    fa(t, i._serialize || Object.keys(i.serializers), i.serializers, i._stdErrSerialize === void 0 ? !0 : i._stdErrSerialize),
    i._logEvent.ts = o,
    i._logEvent.messages = t.filter(function(g) {
        return p.indexOf(g) === -1
    }),
    i._logEvent.level.label = c,
    i._logEvent.level.value = d,
    s(c, i._logEvent, f),
    i._logEvent = xu(p)
}
function xu(i) {
    return {
        ts: 0,
        messages: [],
        bindings: i || [],
        level: {
            label: "",
            value: 0
        }
    }
}
function $D(i) {
    const e = {
        type: i.constructor.name,
        msg: i.message,
        stack: i.stack
    };
    for (const t in i)
        e[t] === void 0 && (e[t] = i[t]);
    return e
}
function LD(i) {
    return typeof i.timestamp == "function" ? i.timestamp : i.timestamp === !1 ? xp : Op
}
function Vo() {
    return {}
}
function tu(i) {
    return i
}
function Ps() {}
function xp() {
    return !1
}
function Op() {
    return Date.now()
}
function UD() {
    return Math.round(Date.now() / 1e3)
}
function MD() {
    return new Date(Date.now()).toISOString()
}
function jD() {
    function i(e) {
        return typeof e < "u" && e
    }
    try {
        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                return delete Object.prototype.globalThis,
                this.globalThis = this
            },
            configurable: !0
        }),
        globalThis
    } catch {
        return i(self) || i(window) || i(this) || {}
    }
}
const da = Cs(PD)
  , qD = {
    level: "info"
}
  , Ls = "custom_context";
var FD = Object.defineProperty
  , zD = Object.defineProperties
  , HD = Object.getOwnPropertyDescriptors
  , Gf = Object.getOwnPropertySymbols
  , BD = Object.prototype.hasOwnProperty
  , KD = Object.prototype.propertyIsEnumerable
  , Yf = (i, e, t) => e in i ? FD(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , kD = (i, e) => {
    for (var t in e || (e = {}))
        BD.call(e, t) && Yf(i, t, e[t]);
    if (Gf)
        for (var t of Gf(e))
            KD.call(e, t) && Yf(i, t, e[t]);
    return i
}
  , VD = (i, e) => zD(i, HD(e));
function pa(i) {
    return VD(kD({}, i), {
        level: (i == null ? void 0 : i.level) || qD.level
    })
}
function WD(i, e=Ls) {
    return i[e] || ""
}
function GD(i, e, t=Ls) {
    return i[t] = e,
    i
}
function wr(i, e=Ls) {
    let t = "";
    return typeof i.bindings > "u" ? t = WD(i, e) : t = i.bindings().context || "",
    t
}
function YD(i, e, t=Ls) {
    const s = wr(i, t);
    return s.trim() ? `${s}/${e}` : e
}
function br(i, e, t=Ls) {
    const s = YD(i, e, t)
      , o = i.child({
        context: s
    });
    return GD(o, s, t)
}
let JD = class extends ln {
    constructor(e) {
        super(),
        this.opts = e,
        this.protocol = "wc",
        this.version = 2
    }
}
  , QD = class extends ln {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t,
        this.records = new Map
    }
}
  , XD = class {
    constructor(e, t) {
        this.logger = e,
        this.core = t
    }
}
  , ZD = class extends ln {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , e6 = class extends ln {
    constructor(e) {
        super()
    }
}
  , t6 = class {
    constructor(e, t, s, o) {
        this.core = e,
        this.logger = t,
        this.name = s
    }
}
  , r6 = class extends ln {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , i6 = class extends ln {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t
    }
}
  , n6 = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , s6 = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , o6 = class {
    constructor(e) {
        this.opts = e,
        this.protocol = "wc",
        this.version = 2
    }
}
  , a6 = class {
    constructor(e) {
        this.client = e
    }
}
;
var Gu = {}
  , Pp = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = Ue
      , t = Cr;
    i.DIGEST_LENGTH = 64,
    i.BLOCK_SIZE = 128;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH,
            this.blockSize = i.BLOCK_SIZE,
            this._stateHi = new Int32Array(8),
            this._stateLo = new Int32Array(8),
            this._tempHi = new Int32Array(16),
            this._tempLo = new Int32Array(16),
            this._buffer = new Uint8Array(256),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return f.prototype._initState = function() {
            this._stateHi[0] = 1779033703,
            this._stateHi[1] = 3144134277,
            this._stateHi[2] = 1013904242,
            this._stateHi[3] = 2773480762,
            this._stateHi[4] = 1359893119,
            this._stateHi[5] = 2600822924,
            this._stateHi[6] = 528734635,
            this._stateHi[7] = 1541459225,
            this._stateLo[0] = 4089235720,
            this._stateLo[1] = 2227873595,
            this._stateLo[2] = 4271175723,
            this._stateLo[3] = 1595750129,
            this._stateLo[4] = 2917565137,
            this._stateLo[5] = 725511199,
            this._stateLo[6] = 4215389547,
            this._stateLo[7] = 327033209
        }
        ,
        f.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        f.prototype.clean = function() {
            t.wipe(this._buffer),
            t.wipe(this._tempHi),
            t.wipe(this._tempLo),
            this.reset()
        }
        ,
        f.prototype.update = function(p, g) {
            if (g === void 0 && (g = p.length),
            this._finished)
                throw new Error("SHA512: can't update because hash was finished.");
            var v = 0;
            if (this._bytesHashed += g,
            this._bufferLength > 0) {
                for (; this._bufferLength < i.BLOCK_SIZE && g > 0; )
                    this._buffer[this._bufferLength++] = p[v++],
                    g--;
                this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (g >= this.blockSize && (v = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, p, v, g),
            g %= this.blockSize); g > 0; )
                this._buffer[this._bufferLength++] = p[v++],
                g--;
            return this
        }
        ,
        f.prototype.finish = function(p) {
            if (!this._finished) {
                var g = this._bytesHashed
                  , v = this._bufferLength
                  , S = g / 536870912 | 0
                  , P = g << 3
                  , A = g % 128 < 112 ? 128 : 256;
                this._buffer[v] = 128;
                for (var O = v + 1; O < A - 8; O++)
                    this._buffer[O] = 0;
                e.writeUint32BE(S, this._buffer, A - 8),
                e.writeUint32BE(P, this._buffer, A - 4),
                c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, A),
                this._finished = !0
            }
            for (var O = 0; O < this.digestLength / 8; O++)
                e.writeUint32BE(this._stateHi[O], p, O * 8),
                e.writeUint32BE(this._stateLo[O], p, O * 8 + 4);
            return this
        }
        ,
        f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p),
            p
        }
        ,
        f.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        f.prototype.restoreState = function(p) {
            return this._stateHi.set(p.stateHi),
            this._stateLo.set(p.stateLo),
            this._bufferLength = p.bufferLength,
            p.buffer && this._buffer.set(p.buffer),
            this._bytesHashed = p.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        f.prototype.cleanSavedState = function(p) {
            t.wipe(p.stateHi),
            t.wipe(p.stateLo),
            p.buffer && t.wipe(p.buffer),
            p.bufferLength = 0,
            p.bytesHashed = 0
        }
        ,
        f
    }();
    i.SHA512 = s;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function c(f, p, g, v, S, P, A) {
        for (var O = g[0], K = g[1], B = g[2], ee = g[3], $ = g[4], U = g[5], w = g[6], E = g[7], D = v[0], u = v[1], b = v[2], V = v[3], G = v[4], oe = v[5], pe = v[6], ge = v[7], I, T, te, X, k, W, re, ne; A >= 128; ) {
            for (var De = 0; De < 16; De++) {
                var ae = 8 * De + P;
                f[De] = e.readUint32BE(S, ae),
                p[De] = e.readUint32BE(S, ae + 4)
            }
            for (var De = 0; De < 80; De++) {
                var Se = O
                  , le = K
                  , Ae = B
                  , z = ee
                  , F = $
                  , L = U
                  , l = w
                  , R = E
                  , se = D
                  , he = u
                  , Ee = b
                  , He = V
                  , ke = G
                  , Me = oe
                  , dt = pe
                  , pt = ge;
                if (I = E,
                T = ge,
                k = T & 65535,
                W = T >>> 16,
                re = I & 65535,
                ne = I >>> 16,
                I = ($ >>> 14 | G << 18) ^ ($ >>> 18 | G << 14) ^ (G >>> 9 | $ << 23),
                T = (G >>> 14 | $ << 18) ^ (G >>> 18 | $ << 14) ^ ($ >>> 9 | G << 23),
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                I = $ & U ^ ~$ & w,
                T = G & oe ^ ~G & pe,
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                I = o[De * 2],
                T = o[De * 2 + 1],
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                I = f[De % 16],
                T = p[De % 16],
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                W += k >>> 16,
                re += W >>> 16,
                ne += re >>> 16,
                te = re & 65535 | ne << 16,
                X = k & 65535 | W << 16,
                I = te,
                T = X,
                k = T & 65535,
                W = T >>> 16,
                re = I & 65535,
                ne = I >>> 16,
                I = (O >>> 28 | D << 4) ^ (D >>> 2 | O << 30) ^ (D >>> 7 | O << 25),
                T = (D >>> 28 | O << 4) ^ (O >>> 2 | D << 30) ^ (O >>> 7 | D << 25),
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                I = O & K ^ O & B ^ K & B,
                T = D & u ^ D & b ^ u & b,
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                W += k >>> 16,
                re += W >>> 16,
                ne += re >>> 16,
                R = re & 65535 | ne << 16,
                pt = k & 65535 | W << 16,
                I = z,
                T = He,
                k = T & 65535,
                W = T >>> 16,
                re = I & 65535,
                ne = I >>> 16,
                I = te,
                T = X,
                k += T & 65535,
                W += T >>> 16,
                re += I & 65535,
                ne += I >>> 16,
                W += k >>> 16,
                re += W >>> 16,
                ne += re >>> 16,
                z = re & 65535 | ne << 16,
                He = k & 65535 | W << 16,
                K = Se,
                B = le,
                ee = Ae,
                $ = z,
                U = F,
                w = L,
                E = l,
                O = R,
                u = se,
                b = he,
                V = Ee,
                G = He,
                oe = ke,
                pe = Me,
                ge = dt,
                D = pt,
                De % 16 === 15)
                    for (var ae = 0; ae < 16; ae++)
                        I = f[ae],
                        T = p[ae],
                        k = T & 65535,
                        W = T >>> 16,
                        re = I & 65535,
                        ne = I >>> 16,
                        I = f[(ae + 9) % 16],
                        T = p[(ae + 9) % 16],
                        k += T & 65535,
                        W += T >>> 16,
                        re += I & 65535,
                        ne += I >>> 16,
                        te = f[(ae + 1) % 16],
                        X = p[(ae + 1) % 16],
                        I = (te >>> 1 | X << 31) ^ (te >>> 8 | X << 24) ^ te >>> 7,
                        T = (X >>> 1 | te << 31) ^ (X >>> 8 | te << 24) ^ (X >>> 7 | te << 25),
                        k += T & 65535,
                        W += T >>> 16,
                        re += I & 65535,
                        ne += I >>> 16,
                        te = f[(ae + 14) % 16],
                        X = p[(ae + 14) % 16],
                        I = (te >>> 19 | X << 13) ^ (X >>> 29 | te << 3) ^ te >>> 6,
                        T = (X >>> 19 | te << 13) ^ (te >>> 29 | X << 3) ^ (X >>> 6 | te << 26),
                        k += T & 65535,
                        W += T >>> 16,
                        re += I & 65535,
                        ne += I >>> 16,
                        W += k >>> 16,
                        re += W >>> 16,
                        ne += re >>> 16,
                        f[ae] = re & 65535 | ne << 16,
                        p[ae] = k & 65535 | W << 16
            }
            I = O,
            T = D,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[0],
            T = v[0],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[0] = O = re & 65535 | ne << 16,
            v[0] = D = k & 65535 | W << 16,
            I = K,
            T = u,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[1],
            T = v[1],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[1] = K = re & 65535 | ne << 16,
            v[1] = u = k & 65535 | W << 16,
            I = B,
            T = b,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[2],
            T = v[2],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[2] = B = re & 65535 | ne << 16,
            v[2] = b = k & 65535 | W << 16,
            I = ee,
            T = V,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[3],
            T = v[3],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[3] = ee = re & 65535 | ne << 16,
            v[3] = V = k & 65535 | W << 16,
            I = $,
            T = G,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[4],
            T = v[4],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[4] = $ = re & 65535 | ne << 16,
            v[4] = G = k & 65535 | W << 16,
            I = U,
            T = oe,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[5],
            T = v[5],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[5] = U = re & 65535 | ne << 16,
            v[5] = oe = k & 65535 | W << 16,
            I = w,
            T = pe,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[6],
            T = v[6],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[6] = w = re & 65535 | ne << 16,
            v[6] = pe = k & 65535 | W << 16,
            I = E,
            T = ge,
            k = T & 65535,
            W = T >>> 16,
            re = I & 65535,
            ne = I >>> 16,
            I = g[7],
            T = v[7],
            k += T & 65535,
            W += T >>> 16,
            re += I & 65535,
            ne += I >>> 16,
            W += k >>> 16,
            re += W >>> 16,
            ne += re >>> 16,
            g[7] = E = re & 65535 | ne << 16,
            v[7] = ge = k & 65535 | W << 16,
            P += 128,
            A -= 128
        }
        return P
    }
    function d(f) {
        var p = new s;
        p.update(f);
        var g = p.digest();
        return p.clean(),
        g
    }
    i.hash = d
}
)(Pp);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.convertSecretKeyToX25519 = i.convertPublicKeyToX25519 = i.verify = i.sign = i.extractPublicKeyFromSecretKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.SEED_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = i.SIGNATURE_LENGTH = void 0;
    const e = zn
      , t = Pp
      , s = Cr;
    i.SIGNATURE_LENGTH = 64,
    i.PUBLIC_KEY_LENGTH = 32,
    i.SECRET_KEY_LENGTH = 64,
    i.SEED_LENGTH = 32;
    function o(z) {
        const F = new Float64Array(16);
        if (z)
            for (let L = 0; L < z.length; L++)
                F[L] = z[L];
        return F
    }
    const c = new Uint8Array(32);
    c[0] = 9;
    const d = o()
      , f = o([1])
      , p = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , g = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , v = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , S = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , P = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function A(z, F) {
        for (let L = 0; L < 16; L++)
            z[L] = F[L] | 0
    }
    function O(z) {
        let F = 1;
        for (let L = 0; L < 16; L++) {
            let l = z[L] + F + 65535;
            F = Math.floor(l / 65536),
            z[L] = l - F * 65536
        }
        z[0] += F - 1 + 37 * (F - 1)
    }
    function K(z, F, L) {
        const l = ~(L - 1);
        for (let R = 0; R < 16; R++) {
            const se = l & (z[R] ^ F[R]);
            z[R] ^= se,
            F[R] ^= se
        }
    }
    function B(z, F) {
        const L = o()
          , l = o();
        for (let R = 0; R < 16; R++)
            l[R] = F[R];
        O(l),
        O(l),
        O(l);
        for (let R = 0; R < 2; R++) {
            L[0] = l[0] - 65517;
            for (let he = 1; he < 15; he++)
                L[he] = l[he] - 65535 - (L[he - 1] >> 16 & 1),
                L[he - 1] &= 65535;
            L[15] = l[15] - 32767 - (L[14] >> 16 & 1);
            const se = L[15] >> 16 & 1;
            L[14] &= 65535,
            K(l, L, 1 - se)
        }
        for (let R = 0; R < 16; R++)
            z[2 * R] = l[R] & 255,
            z[2 * R + 1] = l[R] >> 8
    }
    function ee(z, F) {
        let L = 0;
        for (let l = 0; l < 32; l++)
            L |= z[l] ^ F[l];
        return (1 & L - 1 >>> 8) - 1
    }
    function $(z, F) {
        const L = new Uint8Array(32)
          , l = new Uint8Array(32);
        return B(L, z),
        B(l, F),
        ee(L, l)
    }
    function U(z) {
        const F = new Uint8Array(32);
        return B(F, z),
        F[0] & 1
    }
    function w(z, F) {
        for (let L = 0; L < 16; L++)
            z[L] = F[2 * L] + (F[2 * L + 1] << 8);
        z[15] &= 32767
    }
    function E(z, F, L) {
        for (let l = 0; l < 16; l++)
            z[l] = F[l] + L[l]
    }
    function D(z, F, L) {
        for (let l = 0; l < 16; l++)
            z[l] = F[l] - L[l]
    }
    function u(z, F, L) {
        let l, R, se = 0, he = 0, Ee = 0, He = 0, ke = 0, Me = 0, dt = 0, pt = 0, qe = 0, Ie = 0, Ne = 0, $e = 0, Fe = 0, Oe = 0, Le = 0, _e = 0, Pe = 0, Be = 0, xe = 0, Ve = 0, Ge = 0, Ze = 0, et = 0, Je = 0, er = 0, hr = 0, Jr = 0, tr = 0, oi = 0, Oi = 0, Bi = 0, Et = L[0], gt = L[1], Dt = L[2], St = L[3], bt = L[4], yt = L[5], $t = L[6], Lt = L[7], It = L[8], Ut = L[9], xt = L[10], Ct = L[11], Ot = L[12], ut = L[13], Mt = L[14], jt = L[15];
        l = F[0],
        se += l * Et,
        he += l * gt,
        Ee += l * Dt,
        He += l * St,
        ke += l * bt,
        Me += l * yt,
        dt += l * $t,
        pt += l * Lt,
        qe += l * It,
        Ie += l * Ut,
        Ne += l * xt,
        $e += l * Ct,
        Fe += l * Ot,
        Oe += l * ut,
        Le += l * Mt,
        _e += l * jt,
        l = F[1],
        he += l * Et,
        Ee += l * gt,
        He += l * Dt,
        ke += l * St,
        Me += l * bt,
        dt += l * yt,
        pt += l * $t,
        qe += l * Lt,
        Ie += l * It,
        Ne += l * Ut,
        $e += l * xt,
        Fe += l * Ct,
        Oe += l * Ot,
        Le += l * ut,
        _e += l * Mt,
        Pe += l * jt,
        l = F[2],
        Ee += l * Et,
        He += l * gt,
        ke += l * Dt,
        Me += l * St,
        dt += l * bt,
        pt += l * yt,
        qe += l * $t,
        Ie += l * Lt,
        Ne += l * It,
        $e += l * Ut,
        Fe += l * xt,
        Oe += l * Ct,
        Le += l * Ot,
        _e += l * ut,
        Pe += l * Mt,
        Be += l * jt,
        l = F[3],
        He += l * Et,
        ke += l * gt,
        Me += l * Dt,
        dt += l * St,
        pt += l * bt,
        qe += l * yt,
        Ie += l * $t,
        Ne += l * Lt,
        $e += l * It,
        Fe += l * Ut,
        Oe += l * xt,
        Le += l * Ct,
        _e += l * Ot,
        Pe += l * ut,
        Be += l * Mt,
        xe += l * jt,
        l = F[4],
        ke += l * Et,
        Me += l * gt,
        dt += l * Dt,
        pt += l * St,
        qe += l * bt,
        Ie += l * yt,
        Ne += l * $t,
        $e += l * Lt,
        Fe += l * It,
        Oe += l * Ut,
        Le += l * xt,
        _e += l * Ct,
        Pe += l * Ot,
        Be += l * ut,
        xe += l * Mt,
        Ve += l * jt,
        l = F[5],
        Me += l * Et,
        dt += l * gt,
        pt += l * Dt,
        qe += l * St,
        Ie += l * bt,
        Ne += l * yt,
        $e += l * $t,
        Fe += l * Lt,
        Oe += l * It,
        Le += l * Ut,
        _e += l * xt,
        Pe += l * Ct,
        Be += l * Ot,
        xe += l * ut,
        Ve += l * Mt,
        Ge += l * jt,
        l = F[6],
        dt += l * Et,
        pt += l * gt,
        qe += l * Dt,
        Ie += l * St,
        Ne += l * bt,
        $e += l * yt,
        Fe += l * $t,
        Oe += l * Lt,
        Le += l * It,
        _e += l * Ut,
        Pe += l * xt,
        Be += l * Ct,
        xe += l * Ot,
        Ve += l * ut,
        Ge += l * Mt,
        Ze += l * jt,
        l = F[7],
        pt += l * Et,
        qe += l * gt,
        Ie += l * Dt,
        Ne += l * St,
        $e += l * bt,
        Fe += l * yt,
        Oe += l * $t,
        Le += l * Lt,
        _e += l * It,
        Pe += l * Ut,
        Be += l * xt,
        xe += l * Ct,
        Ve += l * Ot,
        Ge += l * ut,
        Ze += l * Mt,
        et += l * jt,
        l = F[8],
        qe += l * Et,
        Ie += l * gt,
        Ne += l * Dt,
        $e += l * St,
        Fe += l * bt,
        Oe += l * yt,
        Le += l * $t,
        _e += l * Lt,
        Pe += l * It,
        Be += l * Ut,
        xe += l * xt,
        Ve += l * Ct,
        Ge += l * Ot,
        Ze += l * ut,
        et += l * Mt,
        Je += l * jt,
        l = F[9],
        Ie += l * Et,
        Ne += l * gt,
        $e += l * Dt,
        Fe += l * St,
        Oe += l * bt,
        Le += l * yt,
        _e += l * $t,
        Pe += l * Lt,
        Be += l * It,
        xe += l * Ut,
        Ve += l * xt,
        Ge += l * Ct,
        Ze += l * Ot,
        et += l * ut,
        Je += l * Mt,
        er += l * jt,
        l = F[10],
        Ne += l * Et,
        $e += l * gt,
        Fe += l * Dt,
        Oe += l * St,
        Le += l * bt,
        _e += l * yt,
        Pe += l * $t,
        Be += l * Lt,
        xe += l * It,
        Ve += l * Ut,
        Ge += l * xt,
        Ze += l * Ct,
        et += l * Ot,
        Je += l * ut,
        er += l * Mt,
        hr += l * jt,
        l = F[11],
        $e += l * Et,
        Fe += l * gt,
        Oe += l * Dt,
        Le += l * St,
        _e += l * bt,
        Pe += l * yt,
        Be += l * $t,
        xe += l * Lt,
        Ve += l * It,
        Ge += l * Ut,
        Ze += l * xt,
        et += l * Ct,
        Je += l * Ot,
        er += l * ut,
        hr += l * Mt,
        Jr += l * jt,
        l = F[12],
        Fe += l * Et,
        Oe += l * gt,
        Le += l * Dt,
        _e += l * St,
        Pe += l * bt,
        Be += l * yt,
        xe += l * $t,
        Ve += l * Lt,
        Ge += l * It,
        Ze += l * Ut,
        et += l * xt,
        Je += l * Ct,
        er += l * Ot,
        hr += l * ut,
        Jr += l * Mt,
        tr += l * jt,
        l = F[13],
        Oe += l * Et,
        Le += l * gt,
        _e += l * Dt,
        Pe += l * St,
        Be += l * bt,
        xe += l * yt,
        Ve += l * $t,
        Ge += l * Lt,
        Ze += l * It,
        et += l * Ut,
        Je += l * xt,
        er += l * Ct,
        hr += l * Ot,
        Jr += l * ut,
        tr += l * Mt,
        oi += l * jt,
        l = F[14],
        Le += l * Et,
        _e += l * gt,
        Pe += l * Dt,
        Be += l * St,
        xe += l * bt,
        Ve += l * yt,
        Ge += l * $t,
        Ze += l * Lt,
        et += l * It,
        Je += l * Ut,
        er += l * xt,
        hr += l * Ct,
        Jr += l * Ot,
        tr += l * ut,
        oi += l * Mt,
        Oi += l * jt,
        l = F[15],
        _e += l * Et,
        Pe += l * gt,
        Be += l * Dt,
        xe += l * St,
        Ve += l * bt,
        Ge += l * yt,
        Ze += l * $t,
        et += l * Lt,
        Je += l * It,
        er += l * Ut,
        hr += l * xt,
        Jr += l * Ct,
        tr += l * Ot,
        oi += l * ut,
        Oi += l * Mt,
        Bi += l * jt,
        se += 38 * Pe,
        he += 38 * Be,
        Ee += 38 * xe,
        He += 38 * Ve,
        ke += 38 * Ge,
        Me += 38 * Ze,
        dt += 38 * et,
        pt += 38 * Je,
        qe += 38 * er,
        Ie += 38 * hr,
        Ne += 38 * Jr,
        $e += 38 * tr,
        Fe += 38 * oi,
        Oe += 38 * Oi,
        Le += 38 * Bi,
        R = 1,
        l = se + R + 65535,
        R = Math.floor(l / 65536),
        se = l - R * 65536,
        l = he + R + 65535,
        R = Math.floor(l / 65536),
        he = l - R * 65536,
        l = Ee + R + 65535,
        R = Math.floor(l / 65536),
        Ee = l - R * 65536,
        l = He + R + 65535,
        R = Math.floor(l / 65536),
        He = l - R * 65536,
        l = ke + R + 65535,
        R = Math.floor(l / 65536),
        ke = l - R * 65536,
        l = Me + R + 65535,
        R = Math.floor(l / 65536),
        Me = l - R * 65536,
        l = dt + R + 65535,
        R = Math.floor(l / 65536),
        dt = l - R * 65536,
        l = pt + R + 65535,
        R = Math.floor(l / 65536),
        pt = l - R * 65536,
        l = qe + R + 65535,
        R = Math.floor(l / 65536),
        qe = l - R * 65536,
        l = Ie + R + 65535,
        R = Math.floor(l / 65536),
        Ie = l - R * 65536,
        l = Ne + R + 65535,
        R = Math.floor(l / 65536),
        Ne = l - R * 65536,
        l = $e + R + 65535,
        R = Math.floor(l / 65536),
        $e = l - R * 65536,
        l = Fe + R + 65535,
        R = Math.floor(l / 65536),
        Fe = l - R * 65536,
        l = Oe + R + 65535,
        R = Math.floor(l / 65536),
        Oe = l - R * 65536,
        l = Le + R + 65535,
        R = Math.floor(l / 65536),
        Le = l - R * 65536,
        l = _e + R + 65535,
        R = Math.floor(l / 65536),
        _e = l - R * 65536,
        se += R - 1 + 37 * (R - 1),
        R = 1,
        l = se + R + 65535,
        R = Math.floor(l / 65536),
        se = l - R * 65536,
        l = he + R + 65535,
        R = Math.floor(l / 65536),
        he = l - R * 65536,
        l = Ee + R + 65535,
        R = Math.floor(l / 65536),
        Ee = l - R * 65536,
        l = He + R + 65535,
        R = Math.floor(l / 65536),
        He = l - R * 65536,
        l = ke + R + 65535,
        R = Math.floor(l / 65536),
        ke = l - R * 65536,
        l = Me + R + 65535,
        R = Math.floor(l / 65536),
        Me = l - R * 65536,
        l = dt + R + 65535,
        R = Math.floor(l / 65536),
        dt = l - R * 65536,
        l = pt + R + 65535,
        R = Math.floor(l / 65536),
        pt = l - R * 65536,
        l = qe + R + 65535,
        R = Math.floor(l / 65536),
        qe = l - R * 65536,
        l = Ie + R + 65535,
        R = Math.floor(l / 65536),
        Ie = l - R * 65536,
        l = Ne + R + 65535,
        R = Math.floor(l / 65536),
        Ne = l - R * 65536,
        l = $e + R + 65535,
        R = Math.floor(l / 65536),
        $e = l - R * 65536,
        l = Fe + R + 65535,
        R = Math.floor(l / 65536),
        Fe = l - R * 65536,
        l = Oe + R + 65535,
        R = Math.floor(l / 65536),
        Oe = l - R * 65536,
        l = Le + R + 65535,
        R = Math.floor(l / 65536),
        Le = l - R * 65536,
        l = _e + R + 65535,
        R = Math.floor(l / 65536),
        _e = l - R * 65536,
        se += R - 1 + 37 * (R - 1),
        z[0] = se,
        z[1] = he,
        z[2] = Ee,
        z[3] = He,
        z[4] = ke,
        z[5] = Me,
        z[6] = dt,
        z[7] = pt,
        z[8] = qe,
        z[9] = Ie,
        z[10] = Ne,
        z[11] = $e,
        z[12] = Fe,
        z[13] = Oe,
        z[14] = Le,
        z[15] = _e
    }
    function b(z, F) {
        u(z, F, F)
    }
    function V(z, F) {
        const L = o();
        let l;
        for (l = 0; l < 16; l++)
            L[l] = F[l];
        for (l = 253; l >= 0; l--)
            b(L, L),
            l !== 2 && l !== 4 && u(L, L, F);
        for (l = 0; l < 16; l++)
            z[l] = L[l]
    }
    function G(z, F) {
        const L = o();
        let l;
        for (l = 0; l < 16; l++)
            L[l] = F[l];
        for (l = 250; l >= 0; l--)
            b(L, L),
            l !== 1 && u(L, L, F);
        for (l = 0; l < 16; l++)
            z[l] = L[l]
    }
    function oe(z, F) {
        const L = o()
          , l = o()
          , R = o()
          , se = o()
          , he = o()
          , Ee = o()
          , He = o()
          , ke = o()
          , Me = o();
        D(L, z[1], z[0]),
        D(Me, F[1], F[0]),
        u(L, L, Me),
        E(l, z[0], z[1]),
        E(Me, F[0], F[1]),
        u(l, l, Me),
        u(R, z[3], F[3]),
        u(R, R, g),
        u(se, z[2], F[2]),
        E(se, se, se),
        D(he, l, L),
        D(Ee, se, R),
        E(He, se, R),
        E(ke, l, L),
        u(z[0], he, Ee),
        u(z[1], ke, He),
        u(z[2], He, Ee),
        u(z[3], he, ke)
    }
    function pe(z, F, L) {
        for (let l = 0; l < 4; l++)
            K(z[l], F[l], L)
    }
    function ge(z, F) {
        const L = o()
          , l = o()
          , R = o();
        V(R, F[2]),
        u(L, F[0], R),
        u(l, F[1], R),
        B(z, l),
        z[31] ^= U(L) << 7
    }
    function I(z, F, L) {
        A(z[0], d),
        A(z[1], f),
        A(z[2], f),
        A(z[3], d);
        for (let l = 255; l >= 0; --l) {
            const R = L[l / 8 | 0] >> (l & 7) & 1;
            pe(z, F, R),
            oe(F, z),
            oe(z, z),
            pe(z, F, R)
        }
    }
    function T(z, F) {
        const L = [o(), o(), o(), o()];
        A(L[0], v),
        A(L[1], S),
        A(L[2], f),
        u(L[3], v, S),
        I(z, L, F)
    }
    function te(z) {
        if (z.length !== i.SEED_LENGTH)
            throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
        const F = (0,
        t.hash)(z);
        F[0] &= 248,
        F[31] &= 127,
        F[31] |= 64;
        const L = new Uint8Array(32)
          , l = [o(), o(), o(), o()];
        T(l, F),
        ge(L, l);
        const R = new Uint8Array(64);
        return R.set(z),
        R.set(L, 32),
        {
            publicKey: L,
            secretKey: R
        }
    }
    i.generateKeyPairFromSeed = te;
    function X(z) {
        const F = (0,
        e.randomBytes)(32, z)
          , L = te(F);
        return (0,
        s.wipe)(F),
        L
    }
    i.generateKeyPair = X;
    function k(z) {
        if (z.length !== i.SECRET_KEY_LENGTH)
            throw new Error(`ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(z.subarray(32))
    }
    i.extractPublicKeyFromSecretKey = k;
    const W = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function re(z, F) {
        let L, l, R, se;
        for (l = 63; l >= 32; --l) {
            for (L = 0,
            R = l - 32,
            se = l - 12; R < se; ++R)
                F[R] += L - 16 * F[l] * W[R - (l - 32)],
                L = Math.floor((F[R] + 128) / 256),
                F[R] -= L * 256;
            F[R] += L,
            F[l] = 0
        }
        for (L = 0,
        R = 0; R < 32; R++)
            F[R] += L - (F[31] >> 4) * W[R],
            L = F[R] >> 8,
            F[R] &= 255;
        for (R = 0; R < 32; R++)
            F[R] -= L * W[R];
        for (l = 0; l < 32; l++)
            F[l + 1] += F[l] >> 8,
            z[l] = F[l] & 255
    }
    function ne(z) {
        const F = new Float64Array(64);
        for (let L = 0; L < 64; L++)
            F[L] = z[L];
        for (let L = 0; L < 64; L++)
            z[L] = 0;
        re(z, F)
    }
    function De(z, F) {
        const L = new Float64Array(64)
          , l = [o(), o(), o(), o()]
          , R = (0,
        t.hash)(z.subarray(0, 32));
        R[0] &= 248,
        R[31] &= 127,
        R[31] |= 64;
        const se = new Uint8Array(64);
        se.set(R.subarray(32), 32);
        const he = new t.SHA512;
        he.update(se.subarray(32)),
        he.update(F);
        const Ee = he.digest();
        he.clean(),
        ne(Ee),
        T(l, Ee),
        ge(se, l),
        he.reset(),
        he.update(se.subarray(0, 32)),
        he.update(z.subarray(32)),
        he.update(F);
        const He = he.digest();
        ne(He);
        for (let ke = 0; ke < 32; ke++)
            L[ke] = Ee[ke];
        for (let ke = 0; ke < 32; ke++)
            for (let Me = 0; Me < 32; Me++)
                L[ke + Me] += He[ke] * R[Me];
        return re(se.subarray(32), L),
        se
    }
    i.sign = De;
    function ae(z, F) {
        const L = o()
          , l = o()
          , R = o()
          , se = o()
          , he = o()
          , Ee = o()
          , He = o();
        return A(z[2], f),
        w(z[1], F),
        b(R, z[1]),
        u(se, R, p),
        D(R, R, z[2]),
        E(se, z[2], se),
        b(he, se),
        b(Ee, he),
        u(He, Ee, he),
        u(L, He, R),
        u(L, L, se),
        G(L, L),
        u(L, L, R),
        u(L, L, se),
        u(L, L, se),
        u(z[0], L, se),
        b(l, z[0]),
        u(l, l, se),
        $(l, R) && u(z[0], z[0], P),
        b(l, z[0]),
        u(l, l, se),
        $(l, R) ? -1 : (U(z[0]) === F[31] >> 7 && D(z[0], d, z[0]),
        u(z[3], z[0], z[1]),
        0)
    }
    function Se(z, F, L) {
        const l = new Uint8Array(32)
          , R = [o(), o(), o(), o()]
          , se = [o(), o(), o(), o()];
        if (L.length !== i.SIGNATURE_LENGTH)
            throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
        if (ae(se, z))
            return !1;
        const he = new t.SHA512;
        he.update(L.subarray(0, 32)),
        he.update(z),
        he.update(F);
        const Ee = he.digest();
        return ne(Ee),
        I(R, se, Ee),
        T(se, L.subarray(32)),
        oe(R, se),
        ge(l, R),
        !ee(L, l)
    }
    i.verify = Se;
    function le(z) {
        let F = [o(), o(), o(), o()];
        if (ae(F, z))
            throw new Error("Ed25519: invalid public key");
        let L = o()
          , l = o()
          , R = F[1];
        E(L, f, R),
        D(l, f, R),
        V(l, l),
        u(L, L, l);
        let se = new Uint8Array(32);
        return B(se, L),
        se
    }
    i.convertPublicKeyToX25519 = le;
    function Ae(z) {
        const F = (0,
        t.hash)(z.subarray(0, 32));
        F[0] &= 248,
        F[31] &= 127,
        F[31] |= 64;
        const L = new Uint8Array(F.subarray(0, 32));
        return (0,
        s.wipe)(F),
        L
    }
    i.convertSecretKeyToX25519 = Ae
}
)(Gu);
const c6 = "EdDSA"
  , u6 = "JWT"
  , Cp = "."
  , Ap = "base64url"
  , h6 = "utf8"
  , l6 = "utf8"
  , f6 = ":"
  , d6 = "did"
  , p6 = "key"
  , Jf = "base58btc"
  , g6 = "z"
  , y6 = "K36"
  , v6 = 32;
function ia(i) {
    return ur(mr(cn(i), h6), Ap)
}
function Rp(i) {
    const e = mr(y6, Jf)
      , t = g6 + ur(yu([e, i]), Jf);
    return [d6, p6, t].join(f6)
}
function m6(i) {
    return ur(i, Ap)
}
function w6(i) {
    return mr([ia(i.header), ia(i.payload)].join(Cp), l6)
}
function b6(i) {
    return [ia(i.header), ia(i.payload), m6(i.signature)].join(Cp)
}
function Qf(i=zn.randomBytes(v6)) {
    return Gu.generateKeyPairFromSeed(i)
}
async function _6(i, e, t, s, o=ve.fromMiliseconds(Date.now())) {
    const c = {
        alg: c6,
        typ: u6
    }
      , d = Rp(s.publicKey)
      , f = o + t
      , p = {
        iss: d,
        sub: i,
        aud: e,
        iat: o,
        exp: f
    }
      , g = w6({
        header: c,
        payload: p
    })
      , v = Gu.sign(s.secretKey, g);
    return b6({
        header: c,
        payload: p,
        signature: v
    })
}
const E6 = "PARSE_ERROR"
  , D6 = "INVALID_REQUEST"
  , S6 = "METHOD_NOT_FOUND"
  , I6 = "INVALID_PARAMS"
  , Tp = "INTERNAL_ERROR"
  , Yu = "SERVER_ERROR"
  , x6 = [-32700, -32600, -32601, -32602, -32603]
  , Es = {
    [E6]: {
        code: -32700,
        message: "Parse error"
    },
    [D6]: {
        code: -32600,
        message: "Invalid Request"
    },
    [S6]: {
        code: -32601,
        message: "Method not found"
    },
    [I6]: {
        code: -32602,
        message: "Invalid params"
    },
    [Tp]: {
        code: -32603,
        message: "Internal error"
    },
    [Yu]: {
        code: -32e3,
        message: "Server error"
    }
}
  , Np = Yu;
function O6(i) {
    return x6.includes(i)
}
function Xf(i) {
    return Object.keys(Es).includes(i) ? Es[i] : Es[Np]
}
function P6(i) {
    const e = Object.values(Es).find(t => t.code === i);
    return e || Es[Np]
}
function $p(i, e, t) {
    return i.message.includes("getaddrinfo ENOTFOUND") || i.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : i
}
var Lp = {}, mi = {}, Zf;
function C6() {
    if (Zf)
        return mi;
    Zf = 1,
    Object.defineProperty(mi, "__esModule", {
        value: !0
    }),
    mi.isBrowserCryptoAvailable = mi.getSubtleCrypto = mi.getBrowerCrypto = void 0;
    function i() {
        return (Yr === null || Yr === void 0 ? void 0 : Yr.crypto) || (Yr === null || Yr === void 0 ? void 0 : Yr.msCrypto) || {}
    }
    mi.getBrowerCrypto = i;
    function e() {
        const s = i();
        return s.subtle || s.webkitSubtle
    }
    mi.getSubtleCrypto = e;
    function t() {
        return !!i() && !!e()
    }
    return mi.isBrowserCryptoAvailable = t,
    mi
}
var wi = {}, ed;
function A6() {
    if (ed)
        return wi;
    ed = 1,
    Object.defineProperty(wi, "__esModule", {
        value: !0
    }),
    wi.isBrowser = wi.isNode = wi.isReactNative = void 0;
    function i() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    wi.isReactNative = i;
    function e() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    wi.isNode = e;
    function t() {
        return !i() && !e()
    }
    return wi.isBrowser = t,
    wi
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(C6(), i),
    e.__exportStar(A6(), i)
}
)(Lp);
function Ju(i=3) {
    const e = Date.now() * Math.pow(10, i)
      , t = Math.floor(Math.random() * Math.pow(10, i));
    return e + t
}
function Up(i=6) {
    return BigInt(Ju(i))
}
function Fn(i, e, t) {
    return {
        id: t || Ju(),
        jsonrpc: "2.0",
        method: i,
        params: e
    }
}
function ga(i, e) {
    return {
        id: i,
        jsonrpc: "2.0",
        result: e
    }
}
function ya(i, e, t) {
    return {
        id: i,
        jsonrpc: "2.0",
        error: R6(e, t)
    }
}
function R6(i, e) {
    return typeof i > "u" ? Xf(Tp) : (typeof i == "string" && (i = Object.assign(Object.assign({}, Xf(Yu)), {
        message: i
    })),
    typeof e < "u" && (i.data = e),
    O6(i.code) && (i = P6(i.code)),
    i)
}
class T6 {
}
class N6 extends T6 {
    constructor() {
        super()
    }
}
class $6 extends N6 {
    constructor(e) {
        super()
    }
}
const L6 = "^https?:"
  , U6 = "^wss?:";
function M6(i) {
    const e = i.match(new RegExp(/^\w+:/,"gi"));
    if (!(!e || !e.length))
        return e[0]
}
function Mp(i, e) {
    const t = M6(i);
    return typeof t > "u" ? !1 : new RegExp(e).test(t)
}
function td(i) {
    return Mp(i, L6)
}
function rd(i) {
    return Mp(i, U6)
}
function j6(i) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(i)
}
function jp(i) {
    return typeof i == "object" && "id"in i && "jsonrpc"in i && i.jsonrpc === "2.0"
}
function Qu(i) {
    return jp(i) && "method"in i
}
function va(i) {
    return jp(i) && (Di(i) || Gr(i))
}
function Di(i) {
    return "result"in i
}
function Gr(i) {
    return "error"in i
}
class Ii extends $6 {
    constructor(e) {
        super(e),
        this.events = new Fr.EventEmitter,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(e),
        this.connection.connected && this.registerEventListeners()
    }
    async connect(e=this.connection) {
        await this.open(e)
    }
    async disconnect() {
        await this.close()
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async request(e, t) {
        return this.requestStrict(Fn(e.method, e.params || [], e.id || Up().toString()), t)
    }
    async requestStrict(e, t) {
        return new Promise(async (s, o) => {
            if (!this.connection.connected)
                try {
                    await this.open()
                } catch (c) {
                    o(c)
                }
            this.events.on(`${e.id}`, c => {
                Gr(c) ? o(c.error) : s(c.result)
            }
            );
            try {
                await this.connection.send(e, t)
            } catch (c) {
                o(c)
            }
        }
        )
    }
    setConnection(e=this.connection) {
        return e
    }
    onPayload(e) {
        this.events.emit("payload", e),
        va(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
            type: e.method,
            data: e.params
        })
    }
    onClose(e) {
        e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    async open(e=this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(),
        typeof e == "string" && (await this.connection.open(e),
        e = this.connection),
        this.connection = this.setConnection(e),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)),
        this.connection.on("close", e => this.onClose(e)),
        this.connection.on("error", e => this.events.emit("error", e)),
        this.connection.on("register_error", e => this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
const q6 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof globalThis.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws")
  , F6 = () => typeof WebSocket < "u" || typeof global < "u" && typeof globalThis.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u"
  , id = i => i.split("?")[0]
  , nd = 10
  , z6 = q6();
let H6 = class {
    constructor(e) {
        if (this.url = e,
        this.events = new Fr.EventEmitter,
        this.registering = !1,
        !rd(e))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e=this.url) {
        await this.register(e)
    }
    async close() {
        return new Promise( (e, t) => {
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = s => {
                this.onClose(s),
                e()
            }
            ,
            this.socket.close()
        }
        )
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(cn(e))
        } catch (t) {
            this.onError(e.id, t)
        }
    }
    register(e=this.url) {
        if (!rd(e))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise( (s, o) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", () => {
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return o(new Error("WebSocket connection is missing or invalid"));
                    s(this.socket)
                }
                )
            }
            )
        }
        return this.url = e,
        this.registering = !0,
        new Promise( (t, s) => {
            const o = new URLSearchParams(e).get("origin")
              , c = Lp.isReactNative() ? {
                headers: {
                    origin: o
                }
            } : {
                rejectUnauthorized: !j6(e)
            }
              , d = new z6(e,[],c);
            F6() ? d.onerror = f => {
                const p = f;
                s(this.emitError(p.error))
            }
            : d.on("error", f => {
                s(this.emitError(f))
            }
            ),
            d.onopen = () => {
                this.onOpen(d),
                t(d)
            }
        }
        )
    }
    onOpen(e) {
        e.onmessage = t => this.onPayload(t),
        e.onclose = t => this.onClose(t),
        this.socket = e,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(e) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", e)
    }
    onPayload(e) {
        if (typeof e.data > "u")
            return;
        const t = typeof e.data == "string" ? $s(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t)
          , o = s.message || s.toString()
          , c = ya(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t=this.url) {
        return $p(e, id(t), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > nd && this.events.setMaxListeners(nd)
    }
    emitError(e) {
        const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${id(this.url)}`));
        return this.events.emit("register_error", t),
        t
    }
}
;
var na = {
    exports: {}
};
na.exports;
(function(i, e) {
    var t = 200
      , s = "__lodash_hash_undefined__"
      , o = 1
      , c = 2
      , d = 9007199254740991
      , f = "[object Arguments]"
      , p = "[object Array]"
      , g = "[object AsyncFunction]"
      , v = "[object Boolean]"
      , S = "[object Date]"
      , P = "[object Error]"
      , A = "[object Function]"
      , O = "[object GeneratorFunction]"
      , K = "[object Map]"
      , B = "[object Number]"
      , ee = "[object Null]"
      , $ = "[object Object]"
      , U = "[object Promise]"
      , w = "[object Proxy]"
      , E = "[object RegExp]"
      , D = "[object Set]"
      , u = "[object String]"
      , b = "[object Symbol]"
      , V = "[object Undefined]"
      , G = "[object WeakMap]"
      , oe = "[object ArrayBuffer]"
      , pe = "[object DataView]"
      , ge = "[object Float32Array]"
      , I = "[object Float64Array]"
      , T = "[object Int8Array]"
      , te = "[object Int16Array]"
      , X = "[object Int32Array]"
      , k = "[object Uint8Array]"
      , W = "[object Uint8ClampedArray]"
      , re = "[object Uint16Array]"
      , ne = "[object Uint32Array]"
      , De = /[\\^$.*+?()[\]{}|]/g
      , ae = /^\[object .+?Constructor\]$/
      , Se = /^(?:0|[1-9]\d*)$/
      , le = {};
    le[ge] = le[I] = le[T] = le[te] = le[X] = le[k] = le[W] = le[re] = le[ne] = !0,
    le[f] = le[p] = le[oe] = le[v] = le[pe] = le[S] = le[P] = le[A] = le[K] = le[B] = le[$] = le[E] = le[D] = le[u] = le[G] = !1;
    var Ae = typeof Yr == "object" && Yr && Yr.Object === Object && Yr
      , z = typeof self == "object" && self && self.Object === Object && self
      , F = Ae || z || Function("return this")()
      , L = e && !e.nodeType && e
      , l = L && !0 && i && !i.nodeType && i
      , R = l && l.exports === L
      , se = R && Ae.process
      , he = function() {
        try {
            return se && se.binding && se.binding("util")
        } catch {}
    }()
      , Ee = he && he.isTypedArray;
    function He(x, M) {
        for (var Z = -1, fe = x == null ? 0 : x.length, ot = 0, Re = []; ++Z < fe; ) {
            var lt = x[Z];
            M(lt, Z, x) && (Re[ot++] = lt)
        }
        return Re
    }
    function ke(x, M) {
        for (var Z = -1, fe = M.length, ot = x.length; ++Z < fe; )
            x[ot + Z] = M[Z];
        return x
    }
    function Me(x, M) {
        for (var Z = -1, fe = x == null ? 0 : x.length; ++Z < fe; )
            if (M(x[Z], Z, x))
                return !0;
        return !1
    }
    function dt(x, M) {
        for (var Z = -1, fe = Array(x); ++Z < x; )
            fe[Z] = M(Z);
        return fe
    }
    function pt(x) {
        return function(M) {
            return x(M)
        }
    }
    function qe(x, M) {
        return x.has(M)
    }
    function Ie(x, M) {
        return x == null ? void 0 : x[M]
    }
    function Ne(x) {
        var M = -1
          , Z = Array(x.size);
        return x.forEach(function(fe, ot) {
            Z[++M] = [ot, fe]
        }),
        Z
    }
    function $e(x, M) {
        return function(Z) {
            return x(M(Z))
        }
    }
    function Fe(x) {
        var M = -1
          , Z = Array(x.size);
        return x.forEach(function(fe) {
            Z[++M] = fe
        }),
        Z
    }
    var Oe = Array.prototype
      , Le = Function.prototype
      , _e = Object.prototype
      , Pe = F["__core-js_shared__"]
      , Be = Le.toString
      , xe = _e.hasOwnProperty
      , Ve = function() {
        var x = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
        return x ? "Symbol(src)_1." + x : ""
    }()
      , Ge = _e.toString
      , Ze = RegExp("^" + Be.call(xe).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , et = R ? F.Buffer : void 0
      , Je = F.Symbol
      , er = F.Uint8Array
      , hr = _e.propertyIsEnumerable
      , Jr = Oe.splice
      , tr = Je ? Je.toStringTag : void 0
      , oi = Object.getOwnPropertySymbols
      , Oi = et ? et.isBuffer : void 0
      , Bi = $e(Object.keys, Object)
      , Et = _r(F, "DataView")
      , gt = _r(F, "Map")
      , Dt = _r(F, "Promise")
      , St = _r(F, "Set")
      , bt = _r(F, "WeakMap")
      , yt = _r(Object, "create")
      , $t = ci(Et)
      , Lt = ci(gt)
      , It = ci(Dt)
      , Ut = ci(St)
      , xt = ci(bt)
      , Ct = Je ? Je.prototype : void 0
      , Ot = Ct ? Ct.valueOf : void 0;
    function ut(x) {
        var M = -1
          , Z = x == null ? 0 : x.length;
        for (this.clear(); ++M < Z; ) {
            var fe = x[M];
            this.set(fe[0], fe[1])
        }
    }
    function Mt() {
        this.__data__ = yt ? yt(null) : {},
        this.size = 0
    }
    function jt(x) {
        var M = this.has(x) && delete this.__data__[x];
        return this.size -= M ? 1 : 0,
        M
    }
    function ba(x) {
        var M = this.__data__;
        if (yt) {
            var Z = M[x];
            return Z === s ? void 0 : Z
        }
        return xe.call(M, x) ? M[x] : void 0
    }
    function _a(x) {
        var M = this.__data__;
        return yt ? M[x] !== void 0 : xe.call(M, x)
    }
    function Ea(x, M) {
        var Z = this.__data__;
        return this.size += this.has(x) ? 0 : 1,
        Z[x] = yt && M === void 0 ? s : M,
        this
    }
    ut.prototype.clear = Mt,
    ut.prototype.delete = jt,
    ut.prototype.get = ba,
    ut.prototype.has = _a,
    ut.prototype.set = Ea;
    function Ar(x) {
        var M = -1
          , Z = x == null ? 0 : x.length;
        for (this.clear(); ++M < Z; ) {
            var fe = x[M];
            this.set(fe[0], fe[1])
        }
    }
    function Da() {
        this.__data__ = [],
        this.size = 0
    }
    function Sa(x) {
        var M = this.__data__
          , Z = Ki(M, x);
        if (Z < 0)
            return !1;
        var fe = M.length - 1;
        return Z == fe ? M.pop() : Jr.call(M, Z, 1),
        --this.size,
        !0
    }
    function Ia(x) {
        var M = this.__data__
          , Z = Ki(M, x);
        return Z < 0 ? void 0 : M[Z][1]
    }
    function xa(x) {
        return Ki(this.__data__, x) > -1
    }
    function Oa(x, M) {
        var Z = this.__data__
          , fe = Ki(Z, x);
        return fe < 0 ? (++this.size,
        Z.push([x, M])) : Z[fe][1] = M,
        this
    }
    Ar.prototype.clear = Da,
    Ar.prototype.delete = Sa,
    Ar.prototype.get = Ia,
    Ar.prototype.has = xa,
    Ar.prototype.set = Oa;
    function ai(x) {
        var M = -1
          , Z = x == null ? 0 : x.length;
        for (this.clear(); ++M < Z; ) {
            var fe = x[M];
            this.set(fe[0], fe[1])
        }
    }
    function dn() {
        this.size = 0,
        this.__data__ = {
            hash: new ut,
            map: new (gt || Ar),
            string: new ut
        }
    }
    function Pa(x) {
        var M = Pi(this, x).delete(x);
        return this.size -= M ? 1 : 0,
        M
    }
    function pn(x) {
        return Pi(this, x).get(x)
    }
    function Ca(x) {
        return Pi(this, x).has(x)
    }
    function Aa(x, M) {
        var Z = Pi(this, x)
          , fe = Z.size;
        return Z.set(x, M),
        this.size += Z.size == fe ? 0 : 1,
        this
    }
    ai.prototype.clear = dn,
    ai.prototype.delete = Pa,
    ai.prototype.get = pn,
    ai.prototype.has = Ca,
    ai.prototype.set = Aa;
    function gn(x) {
        var M = -1
          , Z = x == null ? 0 : x.length;
        for (this.__data__ = new ai; ++M < Z; )
            this.add(x[M])
    }
    function Ms(x) {
        return this.__data__.set(x, s),
        this
    }
    function js(x) {
        return this.__data__.has(x)
    }
    gn.prototype.add = gn.prototype.push = Ms,
    gn.prototype.has = js;
    function zr(x) {
        var M = this.__data__ = new Ar(x);
        this.size = M.size
    }
    function Ra() {
        this.__data__ = new Ar,
        this.size = 0
    }
    function Ta(x) {
        var M = this.__data__
          , Z = M.delete(x);
        return this.size = M.size,
        Z
    }
    function Na(x) {
        return this.__data__.get(x)
    }
    function $a(x) {
        return this.__data__.has(x)
    }
    function qs(x, M) {
        var Z = this.__data__;
        if (Z instanceof Ar) {
            var fe = Z.__data__;
            if (!gt || fe.length < t - 1)
                return fe.push([x, M]),
                this.size = ++Z.size,
                this;
            Z = this.__data__ = new ai(fe)
        }
        return Z.set(x, M),
        this.size = Z.size,
        this
    }
    zr.prototype.clear = Ra,
    zr.prototype.delete = Ta,
    zr.prototype.get = Na,
    zr.prototype.has = $a,
    zr.prototype.set = qs;
    function Fs(x, M) {
        var Z = mn(x)
          , fe = !Z && Xs(x)
          , ot = !Z && !fe && Yn(x)
          , Re = !Z && !fe && !ot && to(x)
          , lt = Z || fe || ot || Re
          , qt = lt ? dt(x.length, String) : []
          , Qe = qt.length;
        for (var at in x)
            (M || xe.call(x, at)) && !(lt && (at == "length" || ot && (at == "offset" || at == "parent") || Re && (at == "buffer" || at == "byteLength" || at == "byteOffset") || Ws(at, Qe))) && qt.push(at);
        return qt
    }
    function Ki(x, M) {
        for (var Z = x.length; Z--; )
            if (Qs(x[Z][0], M))
                return Z;
        return -1
    }
    function Wn(x, M, Z) {
        var fe = M(x);
        return mn(x) ? fe : ke(fe, Z(x))
    }
    function ki(x) {
        return x == null ? x === void 0 ? V : ee : tr && tr in Object(x) ? ks(x) : Ma(x)
    }
    function Gn(x) {
        return Wi(x) && ki(x) == f
    }
    function Vi(x, M, Z, fe, ot) {
        return x === M ? !0 : x == null || M == null || !Wi(x) && !Wi(M) ? x !== x && M !== M : zs(x, M, Z, fe, Vi, ot)
    }
    function zs(x, M, Z, fe, ot, Re) {
        var lt = mn(x)
          , qt = mn(M)
          , Qe = lt ? p : Qr(x)
          , at = qt ? p : Qr(M);
        Qe = Qe == f ? $ : Qe,
        at = at == f ? $ : at;
        var At = Qe == $
          , lr = at == $
          , Ft = Qe == at;
        if (Ft && Yn(x)) {
            if (!Yn(M))
                return !1;
            lt = !0,
            At = !1
        }
        if (Ft && !At)
            return Re || (Re = new zr),
            lt || to(x) ? yn(x, M, Z, fe, ot, Re) : Ua(x, M, Qe, Z, fe, ot, Re);
        if (!(Z & o)) {
            var ft = At && xe.call(x, "__wrapped__")
              , rr = lr && xe.call(M, "__wrapped__");
            if (ft || rr) {
                var Hr = ft ? x.value() : x
                  , Rr = rr ? M.value() : M;
                return Re || (Re = new zr),
                ot(Hr, Rr, Z, fe, Re)
            }
        }
        return Ft ? (Re || (Re = new zr),
        Ks(x, M, Z, fe, ot, Re)) : !1
    }
    function La(x) {
        if (!eo(x) || Ys(x))
            return !1;
        var M = wn(x) ? Ze : ae;
        return M.test(ci(x))
    }
    function Hs(x) {
        return Wi(x) && Zs(x.length) && !!le[ki(x)]
    }
    function Bs(x) {
        if (!Js(x))
            return Bi(x);
        var M = [];
        for (var Z in Object(x))
            xe.call(x, Z) && Z != "constructor" && M.push(Z);
        return M
    }
    function yn(x, M, Z, fe, ot, Re) {
        var lt = Z & o
          , qt = x.length
          , Qe = M.length;
        if (qt != Qe && !(lt && Qe > qt))
            return !1;
        var at = Re.get(x);
        if (at && Re.get(M))
            return at == M;
        var At = -1
          , lr = !0
          , Ft = Z & c ? new gn : void 0;
        for (Re.set(x, M),
        Re.set(M, x); ++At < qt; ) {
            var ft = x[At]
              , rr = M[At];
            if (fe)
                var Hr = lt ? fe(rr, ft, At, M, x, Re) : fe(ft, rr, At, x, M, Re);
            if (Hr !== void 0) {
                if (Hr)
                    continue;
                lr = !1;
                break
            }
            if (Ft) {
                if (!Me(M, function(Rr, Xr) {
                    if (!qe(Ft, Xr) && (ft === Rr || ot(ft, Rr, Z, fe, Re)))
                        return Ft.push(Xr)
                })) {
                    lr = !1;
                    break
                }
            } else if (!(ft === rr || ot(ft, rr, Z, fe, Re))) {
                lr = !1;
                break
            }
        }
        return Re.delete(x),
        Re.delete(M),
        lr
    }
    function Ua(x, M, Z, fe, ot, Re, lt) {
        switch (Z) {
        case pe:
            if (x.byteLength != M.byteLength || x.byteOffset != M.byteOffset)
                return !1;
            x = x.buffer,
            M = M.buffer;
        case oe:
            return !(x.byteLength != M.byteLength || !Re(new er(x), new er(M)));
        case v:
        case S:
        case B:
            return Qs(+x, +M);
        case P:
            return x.name == M.name && x.message == M.message;
        case E:
        case u:
            return x == M + "";
        case K:
            var qt = Ne;
        case D:
            var Qe = fe & o;
            if (qt || (qt = Fe),
            x.size != M.size && !Qe)
                return !1;
            var at = lt.get(x);
            if (at)
                return at == M;
            fe |= c,
            lt.set(x, M);
            var At = yn(qt(x), qt(M), fe, ot, Re, lt);
            return lt.delete(x),
            At;
        case b:
            if (Ot)
                return Ot.call(x) == Ot.call(M)
        }
        return !1
    }
    function Ks(x, M, Z, fe, ot, Re) {
        var lt = Z & o
          , qt = vn(x)
          , Qe = qt.length
          , at = vn(M)
          , At = at.length;
        if (Qe != At && !lt)
            return !1;
        for (var lr = Qe; lr--; ) {
            var Ft = qt[lr];
            if (!(lt ? Ft in M : xe.call(M, Ft)))
                return !1
        }
        var ft = Re.get(x);
        if (ft && Re.get(M))
            return ft == M;
        var rr = !0;
        Re.set(x, M),
        Re.set(M, x);
        for (var Hr = lt; ++lr < Qe; ) {
            Ft = qt[lr];
            var Rr = x[Ft]
              , Xr = M[Ft];
            if (fe)
                var Jn = lt ? fe(Xr, Rr, Ft, M, x, Re) : fe(Rr, Xr, Ft, x, M, Re);
            if (!(Jn === void 0 ? Rr === Xr || ot(Rr, Xr, Z, fe, Re) : Jn)) {
                rr = !1;
                break
            }
            Hr || (Hr = Ft == "constructor")
        }
        if (rr && !Hr) {
            var Gi = x.constructor
              , Bt = M.constructor;
            Gi != Bt && "constructor"in x && "constructor"in M && !(typeof Gi == "function" && Gi instanceof Gi && typeof Bt == "function" && Bt instanceof Bt) && (rr = !1)
        }
        return Re.delete(x),
        Re.delete(M),
        rr
    }
    function vn(x) {
        return Wn(x, Fa, Vs)
    }
    function Pi(x, M) {
        var Z = x.__data__;
        return Gs(M) ? Z[typeof M == "string" ? "string" : "hash"] : Z.map
    }
    function _r(x, M) {
        var Z = Ie(x, M);
        return La(Z) ? Z : void 0
    }
    function ks(x) {
        var M = xe.call(x, tr)
          , Z = x[tr];
        try {
            x[tr] = void 0;
            var fe = !0
        } catch {}
        var ot = Ge.call(x);
        return fe && (M ? x[tr] = Z : delete x[tr]),
        ot
    }
    var Vs = oi ? function(x) {
        return x == null ? [] : (x = Object(x),
        He(oi(x), function(M) {
            return hr.call(x, M)
        }))
    }
    : st
      , Qr = ki;
    (Et && Qr(new Et(new ArrayBuffer(1))) != pe || gt && Qr(new gt) != K || Dt && Qr(Dt.resolve()) != U || St && Qr(new St) != D || bt && Qr(new bt) != G) && (Qr = function(x) {
        var M = ki(x)
          , Z = M == $ ? x.constructor : void 0
          , fe = Z ? ci(Z) : "";
        if (fe)
            switch (fe) {
            case $t:
                return pe;
            case Lt:
                return K;
            case It:
                return U;
            case Ut:
                return D;
            case xt:
                return G
            }
        return M
    }
    );
    function Ws(x, M) {
        return M = M ?? d,
        !!M && (typeof x == "number" || Se.test(x)) && x > -1 && x % 1 == 0 && x < M
    }
    function Gs(x) {
        var M = typeof x;
        return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? x !== "__proto__" : x === null
    }
    function Ys(x) {
        return !!Ve && Ve in x
    }
    function Js(x) {
        var M = x && x.constructor
          , Z = typeof M == "function" && M.prototype || _e;
        return x === Z
    }
    function Ma(x) {
        return Ge.call(x)
    }
    function ci(x) {
        if (x != null) {
            try {
                return Be.call(x)
            } catch {}
            try {
                return x + ""
            } catch {}
        }
        return ""
    }
    function Qs(x, M) {
        return x === M || x !== x && M !== M
    }
    var Xs = Gn(function() {
        return arguments
    }()) ? Gn : function(x) {
        return Wi(x) && xe.call(x, "callee") && !hr.call(x, "callee")
    }
      , mn = Array.isArray;
    function ja(x) {
        return x != null && Zs(x.length) && !wn(x)
    }
    var Yn = Oi || nt;
    function qa(x, M) {
        return Vi(x, M)
    }
    function wn(x) {
        if (!eo(x))
            return !1;
        var M = ki(x);
        return M == A || M == O || M == g || M == w
    }
    function Zs(x) {
        return typeof x == "number" && x > -1 && x % 1 == 0 && x <= d
    }
    function eo(x) {
        var M = typeof x;
        return x != null && (M == "object" || M == "function")
    }
    function Wi(x) {
        return x != null && typeof x == "object"
    }
    var to = Ee ? pt(Ee) : Hs;
    function Fa(x) {
        return ja(x) ? Fs(x) : Bs(x)
    }
    function st() {
        return []
    }
    function nt() {
        return !1
    }
    i.exports = qa
}
)(na, na.exports);
var B6 = na.exports;
const K6 = Cs(B6);
function k6(i, e) {
    return e = e || {},
    new Promise(function(t, s) {
        var o = new XMLHttpRequest
          , c = []
          , d = []
          , f = {}
          , p = function() {
            return {
                ok: (o.status / 100 | 0) == 2,
                statusText: o.statusText,
                status: o.status,
                url: o.responseURL,
                text: function() {
                    return Promise.resolve(o.responseText)
                },
                json: function() {
                    return Promise.resolve(o.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([o.response]))
                },
                clone: p,
                headers: {
                    keys: function() {
                        return c
                    },
                    entries: function() {
                        return d
                    },
                    get: function(v) {
                        return f[v.toLowerCase()]
                    },
                    has: function(v) {
                        return v.toLowerCase()in f
                    }
                }
            }
        };
        for (var g in o.open(e.method || "get", i, !0),
        o.onload = function() {
            o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(v, S, P) {
                c.push(S = S.toLowerCase()),
                d.push([S, P]),
                f[S] = f[S] ? f[S] + "," + P : P
            }),
            t(p())
        }
        ,
        o.onerror = s,
        o.withCredentials = e.credentials == "include",
        e.headers)
            o.setRequestHeader(g, e.headers[g]);
        o.send(e.body || null)
    }
    )
}
const V6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: k6
}, Symbol.toStringTag, {
    value: "Module"
}))
  , sd = $u(V6);
var W6 = self.fetch || (self.fetch = sd.default || sd);
const G6 = Cs(W6);
var Y6 = {};
function J6(i, e) {
    if (i.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
        t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o)
          , d = c.charCodeAt(0);
        if (t[d] !== 255)
            throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length
      , p = i.charAt(0)
      , g = Math.log(f) / Math.log(256)
      , v = Math.log(256) / Math.log(f);
    function S(O) {
        if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer,O.byteOffset,O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))),
        !(O instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (O.length === 0)
            return "";
        for (var K = 0, B = 0, ee = 0, $ = O.length; ee !== $ && O[ee] === 0; )
            ee++,
            K++;
        for (var U = ($ - ee) * v + 1 >>> 0, w = new Uint8Array(U); ee !== $; ) {
            for (var E = O[ee], D = 0, u = U - 1; (E !== 0 || D < B) && u !== -1; u--,
            D++)
                E += 256 * w[u] >>> 0,
                w[u] = E % f >>> 0,
                E = E / f >>> 0;
            if (E !== 0)
                throw new Error("Non-zero carry");
            B = D,
            ee++
        }
        for (var b = U - B; b !== U && w[b] === 0; )
            b++;
        for (var V = p.repeat(K); b < U; ++b)
            V += i.charAt(w[b]);
        return V
    }
    function P(O) {
        if (typeof O != "string")
            throw new TypeError("Expected String");
        if (O.length === 0)
            return new Uint8Array;
        var K = 0;
        if (O[K] !== " ") {
            for (var B = 0, ee = 0; O[K] === p; )
                B++,
                K++;
            for (var $ = (O.length - K) * g + 1 >>> 0, U = new Uint8Array($); O[K]; ) {
                var w = t[O.charCodeAt(K)];
                if (w === 255)
                    return;
                for (var E = 0, D = $ - 1; (w !== 0 || E < ee) && D !== -1; D--,
                E++)
                    w += f * U[D] >>> 0,
                    U[D] = w % 256 >>> 0,
                    w = w / 256 >>> 0;
                if (w !== 0)
                    throw new Error("Non-zero carry");
                ee = E,
                K++
            }
            if (O[K] !== " ") {
                for (var u = $ - ee; u !== $ && U[u] === 0; )
                    u++;
                for (var b = new Uint8Array(B + ($ - u)), V = B; u !== $; )
                    b[V++] = U[u++];
                return b
            }
        }
    }
    function A(O) {
        var K = P(O);
        if (K)
            return K;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: S,
        decodeUnsafe: P,
        decode: A
    }
}
var Q6 = J6
  , X6 = Q6;
const qp = i => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
        return i;
    if (i instanceof ArrayBuffer)
        return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
        return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , Z6 = i => new TextEncoder().encode(i)
  , e2 = i => new TextDecoder().decode(i);
class t2 {
    constructor(e, t, s) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class r2 {
    constructor(e, t, s) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Fp(this, e)
    }
}
class i2 {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Fp(this, e)
    }
    decode(e) {
        const t = e[0]
          , s = this.decoders[t];
        if (s)
            return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Fp = (i, e) => new i2({
    ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class n2 {
    constructor(e, t, s, o) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s,
        this.baseDecode = o,
        this.encoder = new t2(e,t,s),
        this.decoder = new r2(e,t,o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const ma = ({name: i, prefix: e, encode: t, decode: s}) => new n2(i,e,t,s)
  , Us = ({prefix: i, name: e, alphabet: t}) => {
    const {encode: s, decode: o} = X6(t, e);
    return ma({
        prefix: i,
        name: e,
        encode: s,
        decode: c => qp(o(c))
    })
}
  , s2 = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v)
        o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; )
        --c;
    const d = new Uint8Array(c * t / 8 | 0);
    let f = 0
      , p = 0
      , g = 0;
    for (let v = 0; v < c; ++v) {
        const S = o[i[v]];
        if (S === void 0)
            throw new SyntaxError(`Non-${s} character`);
        p = p << t | S,
        f += t,
        f >= 8 && (f -= 8,
        d[g++] = 255 & p >> f)
    }
    if (f >= t || 255 & p << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return d
}
  , o2 = (i, e, t) => {
    const s = e[e.length - 1] === "="
      , o = (1 << t) - 1;
    let c = ""
      , d = 0
      , f = 0;
    for (let p = 0; p < i.length; ++p)
        for (f = f << 8 | i[p],
        d += 8; d > t; )
            d -= t,
            c += e[o & f >> d];
    if (d && (c += e[o & f << t - d]),
    s)
        for (; c.length * t & 7; )
            c += "=";
    return c
}
  , Yt = ({name: i, prefix: e, bitsPerChar: t, alphabet: s}) => ma({
    prefix: e,
    name: i,
    encode(o) {
        return o2(o, s, t)
    },
    decode(o) {
        return s2(o, s, t, i)
    }
})
  , a2 = ma({
    prefix: "\0",
    name: "identity",
    encode: i => e2(i),
    decode: i => Z6(i)
});
var c2 = Object.freeze({
    __proto__: null,
    identity: a2
});
const u2 = Yt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var h2 = Object.freeze({
    __proto__: null,
    base2: u2
});
const l2 = Yt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var f2 = Object.freeze({
    __proto__: null,
    base8: l2
});
const d2 = Us({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var p2 = Object.freeze({
    __proto__: null,
    base10: d2
});
const g2 = Yt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , y2 = Yt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var v2 = Object.freeze({
    __proto__: null,
    base16: g2,
    base16upper: y2
});
const m2 = Yt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , w2 = Yt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , b2 = Yt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , _2 = Yt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , E2 = Yt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , D2 = Yt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , S2 = Yt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , I2 = Yt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , x2 = Yt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var O2 = Object.freeze({
    __proto__: null,
    base32: m2,
    base32upper: w2,
    base32pad: b2,
    base32padupper: _2,
    base32hex: E2,
    base32hexupper: D2,
    base32hexpad: S2,
    base32hexpadupper: I2,
    base32z: x2
});
const P2 = Us({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , C2 = Us({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var A2 = Object.freeze({
    __proto__: null,
    base36: P2,
    base36upper: C2
});
const R2 = Us({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , T2 = Us({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var N2 = Object.freeze({
    __proto__: null,
    base58btc: R2,
    base58flickr: T2
});
const $2 = Yt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , L2 = Yt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , U2 = Yt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , M2 = Yt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var j2 = Object.freeze({
    __proto__: null,
    base64: $2,
    base64pad: L2,
    base64url: U2,
    base64urlpad: M2
});
const zp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , q2 = zp.reduce( (i, e, t) => (i[t] = e,
i), [])
  , F2 = zp.reduce( (i, e, t) => (i[e.codePointAt(0)] = t,
i), []);
function z2(i) {
    return i.reduce( (e, t) => (e += q2[t],
    e), "")
}
function H2(i) {
    const e = [];
    for (const t of i) {
        const s = F2[t.codePointAt(0)];
        if (s === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const B2 = ma({
    prefix: "🚀",
    name: "base256emoji",
    encode: z2,
    decode: H2
});
var K2 = Object.freeze({
    __proto__: null,
    base256emoji: B2
})
  , k2 = Hp
  , od = 128
  , V2 = 127
  , W2 = ~V2
  , G2 = Math.pow(2, 31);
function Hp(i, e, t) {
    e = e || [],
    t = t || 0;
    for (var s = t; i >= G2; )
        e[t++] = i & 255 | od,
        i /= 128;
    for (; i & W2; )
        e[t++] = i & 255 | od,
        i >>>= 7;
    return e[t] = i | 0,
    Hp.bytes = t - s + 1,
    e
}
var Y2 = Ou
  , J2 = 128
  , ad = 127;
function Ou(i, s) {
    var t = 0, s = s || 0, o = 0, c = s, d, f = i.length;
    do {
        if (c >= f)
            throw Ou.bytes = 0,
            new RangeError("Could not decode varint");
        d = i[c++],
        t += o < 28 ? (d & ad) << o : (d & ad) * Math.pow(2, o),
        o += 7
    } while (d >= J2);
    return Ou.bytes = c - s,
    t
}
var Q2 = Math.pow(2, 7)
  , X2 = Math.pow(2, 14)
  , Z2 = Math.pow(2, 21)
  , eS = Math.pow(2, 28)
  , tS = Math.pow(2, 35)
  , rS = Math.pow(2, 42)
  , iS = Math.pow(2, 49)
  , nS = Math.pow(2, 56)
  , sS = Math.pow(2, 63)
  , oS = function(i) {
    return i < Q2 ? 1 : i < X2 ? 2 : i < Z2 ? 3 : i < eS ? 4 : i < tS ? 5 : i < rS ? 6 : i < iS ? 7 : i < nS ? 8 : i < sS ? 9 : 10
}
  , aS = {
    encode: k2,
    decode: Y2,
    encodingLength: oS
}
  , Bp = aS;
const cd = (i, e, t=0) => (Bp.encode(i, e, t),
e)
  , ud = i => Bp.encodingLength(i)
  , Pu = (i, e) => {
    const t = e.byteLength
      , s = ud(i)
      , o = s + ud(t)
      , c = new Uint8Array(o + t);
    return cd(i, c, 0),
    cd(t, c, s),
    c.set(e, o),
    new cS(i,t,e,c)
}
;
class cS {
    constructor(e, t, s, o) {
        this.code = e,
        this.size = t,
        this.digest = s,
        this.bytes = o
    }
}
const Kp = ({name: i, code: e, encode: t}) => new uS(i,e,t);
class uS {
    constructor(e, t, s) {
        this.name = e,
        this.code = t,
        this.encode = s
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Pu(this.code, t) : t.then(s => Pu(this.code, s))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const kp = i => async e => new Uint8Array(await crypto.subtle.digest(i, e))
  , hS = Kp({
    name: "sha2-256",
    code: 18,
    encode: kp("SHA-256")
})
  , lS = Kp({
    name: "sha2-512",
    code: 19,
    encode: kp("SHA-512")
});
var fS = Object.freeze({
    __proto__: null,
    sha256: hS,
    sha512: lS
});
const Vp = 0
  , dS = "identity"
  , Wp = qp
  , pS = i => Pu(Vp, Wp(i))
  , gS = {
    code: Vp,
    name: dS,
    encode: Wp,
    digest: pS
};
var yS = Object.freeze({
    __proto__: null,
    identity: gS
});
new TextEncoder,
new TextDecoder;
const hd = {
    ...c2,
    ...h2,
    ...f2,
    ...p2,
    ...v2,
    ...O2,
    ...A2,
    ...N2,
    ...j2,
    ...K2
};
({
    ...fS,
    ...yS
});
function Gp(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer,i.byteOffset,i.byteLength) : i
}
function vS(i=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Gp(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}
function Yp(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const ld = Yp("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1)))
  , ru = Yp("ascii", "a", i => {
    let e = "a";
    for (let t = 0; t < i.length; t++)
        e += String.fromCharCode(i[t]);
    return e
}
, i => {
    i = i.substring(1);
    const e = vS(i.length);
    for (let t = 0; t < i.length; t++)
        e[t] = i.charCodeAt(t);
    return e
}
)
  , mS = {
    utf8: ld,
    "utf-8": ld,
    hex: hd.base16,
    latin1: ru,
    ascii: ru,
    binary: ru,
    ...hd
};
function wS(i, e="utf8") {
    const t = mS[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Gp(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}
const Jp = "wc"
  , bS = 2
  , Xu = "core"
  , qi = `${Jp}@2:${Xu}:`
  , _S = {
    name: Xu,
    logger: "error"
}
  , ES = {
    database: ":memory:"
}
  , DS = "crypto"
  , fd = "client_ed25519_seed"
  , SS = ve.ONE_DAY
  , IS = "keychain"
  , xS = "0.3"
  , OS = "messages"
  , PS = "0.3"
  , CS = ve.SIX_HOURS
  , AS = "publisher"
  , Qp = "irn"
  , RS = "error"
  , Xp = "wss://relay.walletconnect.com"
  , dd = "wss://relay.walletconnect.org"
  , TS = "relayer"
  , Zt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , NS = "_subscription"
  , bi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , $S = ve.ONE_SECOND
  , LS = "2.11.2"
  , US = 1e4
  , MS = "0.3"
  , jS = "WALLETCONNECT_CLIENT_ID"
  , Wr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , qS = "subscription"
  , FS = "0.3"
  , zS = ve.FIVE_SECONDS * 1e3
  , HS = "pairing"
  , BS = "0.3"
  , ys = {
    wc_pairingDelete: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , bs = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , ii = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , KS = "history"
  , kS = "0.3"
  , VS = "expirer"
  , qr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , WS = "0.3"
  , iu = "verify-api"
  , jn = "https://verify.walletconnect.com"
  , Cu = "https://verify.walletconnect.org"
  , GS = [jn, Cu]
  , YS = "echo"
  , JS = "https://echo.walletconnect.com";
class QS {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        this.keychain = new Map,
        this.name = IS,
        this.version = xS,
        this.initialized = !1,
        this.storagePrefix = qi,
        this.init = async () => {
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s),
                this.initialized = !0
            }
        }
        ,
        this.has = s => (this.isInitialized(),
        this.keychain.has(s)),
        this.set = async (s, o) => {
            this.isInitialized(),
            this.keychain.set(s, o),
            await this.persist()
        }
        ,
        this.get = s => {
            this.isInitialized();
            const o = this.keychain.get(s);
            if (typeof o > "u") {
                const {message: c} = ce("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(c)
            }
            return o
        }
        ,
        this.del = async s => {
            this.isInitialized(),
            this.keychain.delete(s),
            await this.persist()
        }
        ,
        this.core = e,
        this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, vp(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? mp(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class XS {
    constructor(e, t, s) {
        this.core = e,
        this.logger = t,
        this.name = DS,
        this.initialized = !1,
        this.init = async () => {
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ,
        this.hasKeys = o => (this.isInitialized(),
        this.keychain.has(o)),
        this.getClientId = async () => {
            this.isInitialized();
            const o = await this.getClientSeed()
              , c = Qf(o);
            return Rp(c.publicKey)
        }
        ,
        this.generateKeyPair = () => {
            this.isInitialized();
            const o = UE();
            return this.setPrivateKey(o.publicKey, o.privateKey)
        }
        ,
        this.signJWT = async o => {
            this.isInitialized();
            const c = await this.getClientSeed()
              , d = Qf(c)
              , f = Du();
            return await _6(f, o, SS, d)
        }
        ,
        this.generateSharedKey = (o, c, d) => {
            this.isInitialized();
            const f = this.getPrivateKey(o)
              , p = ME(f, c);
            return this.setSymKey(p, d)
        }
        ,
        this.setSymKey = async (o, c) => {
            this.isInitialized();
            const d = c || jE(o);
            return await this.keychain.set(d, o),
            d
        }
        ,
        this.deleteKeyPair = async o => {
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.deleteSymKey = async o => {
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.encode = async (o, c, d) => {
            this.isInitialized();
            const f = yp(d)
              , p = cn(c);
            if (Of(f)) {
                const P = f.senderPublicKey
                  , A = f.receiverPublicKey;
                o = await this.generateSharedKey(P, A)
            }
            const g = this.getSymKey(o)
              , {type: v, senderPublicKey: S} = f;
            return FE({
                type: v,
                symKey: g,
                message: p,
                senderPublicKey: S
            })
        }
        ,
        this.decode = async (o, c, d) => {
            this.isInitialized();
            const f = BE(c, d);
            if (Of(f)) {
                const p = f.receiverPublicKey
                  , g = f.senderPublicKey;
                o = await this.generateSharedKey(p, g)
            }
            try {
                const p = this.getSymKey(o)
                  , g = zE({
                    symKey: p,
                    encoded: c
                });
                return $s(g)
            } catch (p) {
                this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`),
                this.logger.error(p)
            }
        }
        ,
        this.getPayloadType = o => {
            const c = ta(o);
            return Ts(c.type)
        }
        ,
        this.getPayloadSenderPublicKey = o => {
            const c = ta(o);
            return c.senderPublicKey ? ur(c.senderPublicKey, cr) : void 0
        }
        ,
        this.core = e,
        this.logger = br(t, this.name),
        this.keychain = s || new QS(this.core,this.logger)
    }
    get context() {
        return wr(this.logger)
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t),
        e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(fd)
        } catch {
            e = Du(),
            await this.keychain.set(fd, e)
        }
        return wS(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class ZS extends XD {
    constructor(e, t) {
        super(e, t),
        this.logger = e,
        this.core = t,
        this.messages = new Map,
        this.name = OS,
        this.version = PS,
        this.initialized = !1,
        this.storagePrefix = qi,
        this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(s)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ,
        this.set = async (s, o) => {
            this.isInitialized();
            const c = qn(o);
            let d = this.messages.get(s);
            return typeof d > "u" && (d = {}),
            typeof d[c] < "u" || (d[c] = o,
            this.messages.set(s, d),
            await this.persist()),
            c
        }
        ,
        this.get = s => {
            this.isInitialized();
            let o = this.messages.get(s);
            return typeof o > "u" && (o = {}),
            o
        }
        ,
        this.has = (s, o) => {
            this.isInitialized();
            const c = this.get(s)
              , d = qn(o);
            return typeof c[d] < "u"
        }
        ,
        this.del = async s => {
            this.isInitialized(),
            this.messages.delete(s),
            await this.persist()
        }
        ,
        this.logger = br(e, this.name),
        this.core = t
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, vp(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? mp(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class eI extends ZD {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        this.events = new Fr.EventEmitter,
        this.name = AS,
        this.queue = new Map,
        this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2),
        this.needsTransportRestart = !1,
        this.publish = async (s, o, c) => {
            var d;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: o,
                    opts: c
                }
            });
            try {
                const f = (c == null ? void 0 : c.ttl) || CS
                  , p = Su(c)
                  , g = (c == null ? void 0 : c.prompt) || !1
                  , v = (c == null ? void 0 : c.tag) || 0
                  , S = (c == null ? void 0 : c.id) || Up().toString()
                  , P = {
                    topic: s,
                    message: o,
                    opts: {
                        ttl: f,
                        relay: p,
                        prompt: g,
                        tag: v,
                        id: S
                    }
                }
                  , A = setTimeout( () => this.queue.set(S, P), this.publishTimeout);
                try {
                    await await Is(this.rpcPublish(s, o, f, p, g, v, S), this.publishTimeout, `Failed to publish payload, please try again. id:${S} tag:${v}`),
                    this.removeRequestFromQueue(S),
                    this.relayer.events.emit(Zt.publish, P)
                } catch (O) {
                    if (this.logger.debug("Publishing Payload stalled"),
                    this.needsTransportRestart = !0,
                    (d = c == null ? void 0 : c.internal) != null && d.throwOnFailedPublish)
                        throw this.removeRequestFromQueue(S),
                        O;
                    return
                } finally {
                    clearTimeout(A)
                }
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: s,
                        message: o,
                        opts: c
                    }
                })
            } catch (f) {
                throw this.logger.debug("Failed to Publish Payload"),
                this.logger.error(f),
                f
            }
        }
        ,
        this.on = (s, o) => {
            this.events.on(s, o)
        }
        ,
        this.once = (s, o) => {
            this.events.once(s, o)
        }
        ,
        this.off = (s, o) => {
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }
        ,
        this.relayer = e,
        this.logger = br(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return wr(this.logger)
    }
    rpcPublish(e, t, s, o, c, d, f) {
        var p, g, v, S;
        const P = {
            method: Jo(o.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: s,
                prompt: c,
                tag: d
            },
            id: f
        };
        return ar((p = P.params) == null ? void 0 : p.prompt) && ((g = P.params) == null || delete g.prompt),
        ar((v = P.params) == null ? void 0 : v.tag) && ((S = P.params) == null || delete S.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: P
        }),
        this.relayer.request(P)
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async e => {
            const {topic: t, message: s, opts: o} = e;
            await this.publish(t, s, o)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(Zt.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(Zt.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
class tI {
    constructor() {
        this.map = new Map,
        this.set = (e, t) => {
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [...s, t])
        }
        ,
        this.get = e => this.map.get(e) || [],
        this.exists = (e, t) => this.get(e).includes(t),
        this.delete = (e, t) => {
            if (typeof t > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e))
                return;
            const s = this.get(e);
            if (!this.exists(e, t))
                return;
            const o = s.filter(c => c !== t);
            if (!o.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, o)
        }
        ,
        this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var rI = Object.defineProperty
  , iI = Object.defineProperties
  , nI = Object.getOwnPropertyDescriptors
  , pd = Object.getOwnPropertySymbols
  , sI = Object.prototype.hasOwnProperty
  , oI = Object.prototype.propertyIsEnumerable
  , gd = (i, e, t) => e in i ? rI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , vs = (i, e) => {
    for (var t in e || (e = {}))
        sI.call(e, t) && gd(i, t, e[t]);
    if (pd)
        for (var t of pd(e))
            oI.call(e, t) && gd(i, t, e[t]);
    return i
}
  , nu = (i, e) => iI(i, nI(e));
class aI extends r6 {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        this.subscriptions = new Map,
        this.topicMap = new tI,
        this.events = new Fr.EventEmitter,
        this.name = qS,
        this.version = FS,
        this.pending = new Map,
        this.cached = [],
        this.initialized = !1,
        this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
        this.pollingInterval = 20,
        this.storagePrefix = qi,
        this.subscribeTimeout = 1e4,
        this.restartInProgress = !1,
        this.batchSubscribeTopicsLimit = 500,
        this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            this.clientId = await this.relayer.core.crypto.getClientId())
        }
        ,
        this.subscribe = async (s, o) => {
            await this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: o
                }
            });
            try {
                const c = Su(o)
                  , d = {
                    topic: s,
                    relay: c
                };
                this.pending.set(s, d);
                const f = await this.rpcSubscribe(s, c);
                return this.onSubscribe(f, d),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: o
                    }
                }),
                f
            } catch (c) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(c),
                c
            }
        }
        ,
        this.unsubscribe = async (s, o) => {
            await this.restartToComplete(),
            this.isInitialized(),
            typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(s, o.id, o) : await this.unsubscribeByTopic(s, o)
        }
        ,
        this.isSubscribed = async s => {
            if (this.topics.includes(s))
                return !0;
            const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
            return await new Promise( (c, d) => {
                const f = new ve.Watch;
                f.start(o);
                const p = setInterval( () => {
                    !this.pending.has(s) && this.topics.includes(s) && (clearInterval(p),
                    f.stop(o),
                    c(!0)),
                    f.elapsed(o) >= zS && (clearInterval(p),
                    f.stop(o),
                    d(new Error("Subscription resolution timeout")))
                }
                , this.pollingInterval)
            }
            ).catch( () => !1)
        }
        ,
        this.on = (s, o) => {
            this.events.on(s, o)
        }
        ,
        this.once = (s, o) => {
            this.events.once(s, o)
        }
        ,
        this.off = (s, o) => {
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }
        ,
        this.restart = async () => {
            this.restartInProgress = !0,
            await this.restore(),
            await this.reset(),
            this.restartInProgress = !1
        }
        ,
        this.relayer = e,
        this.logger = br(t, this.name),
        this.clientId = ""
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t
        } catch {}
        return s
    }
    onEnable() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.cached = this.values,
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async o => await this.unsubscribeById(e, o, t)))
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const o = Su(s);
            await this.rpcUnsubscribe(e, t, o);
            const c = mt("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, c),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            })
        } catch (o) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(o),
            o
        }
    }
    async rpcSubscribe(e, t) {
        const s = {
            method: Jo(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await Is(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Zt.connection_stalled)
        }
        return qn(e + this.clientId)
    }
    async rpcBatchSubscribe(e) {
        if (!e.length)
            return;
        const t = e[0].relay
          , s = {
            method: Jo(t.protocol).batchSubscribe,
            params: {
                topics: e.map(o => o.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            return await await Is(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(Zt.connection_stalled)
        }
    }
    rpcUnsubscribe(e, t, s) {
        const o = {
            method: Jo(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: o
        }),
        this.relayer.request(o)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, nu(vs({}, t), {
            id: e
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t => {
            this.setSubscription(t.id, vs({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t),
        this.hasSubscription(t, e) && this.deleteSubscription(t, s),
        await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }),
        this.addSubscription(e, t))
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, vs({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(Wr.created, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e),
        this.topicMap.delete(s.topic, e),
        this.events.emit(Wr.deleted, nu(vs({}, s), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(Wr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < e; t++) {
                const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(s)
            }
        }
        this.events.emit(Wr.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length)
                return;
            if (this.subscriptions.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        if (!e.length)
            return;
        const t = await this.rpcBatchSubscribe(e);
        si(t) && this.onBatchSubscribe(t.map( (s, o) => nu(vs({}, e[o]), {
            id: s
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(),
        this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
        const e = [];
        this.pending.forEach(t => {
            e.push(t)
        }
        ),
        await this.batchSubscribe(e)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending()
        }
        ),
        this.relayer.on(Zt.connect, async () => {
            await this.onConnect()
        }
        ),
        this.relayer.on(Zt.disconnect, () => {
            this.onDisconnect()
        }
        ),
        this.events.on(Wr.created, async e => {
            const t = Wr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            await this.persist()
        }
        ),
        this.events.on(Wr.deleted, async e => {
            const t = Wr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            await this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(e => {
            const t = setInterval( () => {
                this.restartInProgress || (clearInterval(t),
                e())
            }
            , this.pollingInterval)
        }
        )
    }
}
var cI = Object.defineProperty
  , yd = Object.getOwnPropertySymbols
  , uI = Object.prototype.hasOwnProperty
  , hI = Object.prototype.propertyIsEnumerable
  , vd = (i, e, t) => e in i ? cI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , lI = (i, e) => {
    for (var t in e || (e = {}))
        uI.call(e, t) && vd(i, t, e[t]);
    if (yd)
        for (var t of yd(e))
            hI.call(e, t) && vd(i, t, e[t]);
    return i
}
;
class fI extends e6 {
    constructor(e) {
        super(e),
        this.protocol = "wc",
        this.version = 2,
        this.events = new Fr.EventEmitter,
        this.name = TS,
        this.transportExplicitlyClosed = !1,
        this.initialized = !1,
        this.connectionAttemptInProgress = !1,
        this.connectionStatusPollingInterval = 20,
        this.staleConnectionErrors = ["socket hang up", "socket stalled"],
        this.hasExperiencedNetworkDisruption = !1,
        this.requestsInFlight = new Map,
        this.request = async t => {
            this.logger.debug("Publishing Request Payload");
            const s = t.id;
            try {
                await this.toEstablishConnection();
                const o = this.provider.request(t);
                return this.requestsInFlight.set(s, {
                    promise: o,
                    request: t
                }),
                await o
            } catch (o) {
                throw this.logger.debug("Failed to Publish Request"),
                this.logger.error(o),
                o
            } finally {
                this.requestsInFlight.delete(s)
            }
        }
        ,
        this.onPayloadHandler = t => {
            this.onProviderPayload(t)
        }
        ,
        this.onConnectHandler = () => {
            this.events.emit(Zt.connect)
        }
        ,
        this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }
        ,
        this.onProviderErrorHandler = t => {
            this.logger.error(t),
            this.events.emit(Zt.error, t),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ,
        this.registerProviderListeners = () => {
            this.provider.on(bi.payload, this.onPayloadHandler),
            this.provider.on(bi.connect, this.onConnectHandler),
            this.provider.on(bi.disconnect, this.onDisconnectHandler),
            this.provider.on(bi.error, this.onProviderErrorHandler)
        }
        ,
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? br(e.logger, this.name) : da(pa({
            level: e.logger || RS
        })),
        this.messages = new ZS(this.logger,e.core),
        this.subscriber = new aI(this,this.logger),
        this.publisher = new eI(this,this.logger),
        this.relayUrl = (e == null ? void 0 : e.relayUrl) || Xp,
        this.projectId = e.projectId,
        this.bundleId = YE(),
        this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"),
        this.registerEventListeners(),
        await this.createProvider(),
        await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${dd}...`),
            await this.restartTransport(dd)
        }
        this.initialized = !0,
        setTimeout(async () => {
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"),
            await this.transportClose(),
            this.transportExplicitlyClosed = !1)
        }
        , US)
    }
    get context() {
        return wr(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(e, t, s) {
        this.isInitialized(),
        await this.publisher.publish(e, t, s),
        await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        })
    }
    async subscribe(e, t) {
        var s;
        this.isInitialized();
        let o = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
        if (o)
            return o;
        let c;
        const d = f => {
            f.topic === e && (this.subscriber.off(Wr.created, d),
            c())
        }
        ;
        return await Promise.all([new Promise(f => {
            c = f,
            this.subscriber.on(Wr.created, d)
        }
        ), new Promise(async f => {
            o = await this.subscriber.subscribe(e, t),
            f()
        }
        )]),
        o
    }
    async unsubscribe(e, t) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(e, t)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async transportClose() {
        this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."),
        this.requestsInFlight.forEach(async e => {
            await e.promise
        }
        )),
        this.transportExplicitlyClosed = !0,
        this.hasExperiencedNetworkDisruption && this.connected ? await Is(this.provider.disconnect(), 1e3, "provider.disconnect()").catch( () => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1,
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress) {
            e && e !== this.relayUrl && (this.relayUrl = e,
            await this.transportClose(),
            await this.createProvider()),
            this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(t => {
                    if (!this.initialized)
                        return t();
                    this.subscriber.once(Wr.resubscribed, () => {
                        t()
                    }
                    )
                }
                ), new Promise(async (t, s) => {
                    try {
                        await Is(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (o) {
                        s(o);
                        return
                    }
                    t()
                }
                )])
            } catch (t) {
                this.logger.error(t);
                const s = t;
                if (!this.isConnectionStalled(s.message))
                    throw t;
                this.provider.events.emit(bi.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1,
                this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(e) {
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await jf())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some(t => e.includes(t))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Ii(new H6(t3({
            sdkVersion: LS,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(e) {
        const {topic: t, message: s} = e;
        await this.messages.set(t, s)
    }
    async shouldIgnoreMessageEvent(e) {
        const {topic: t, message: s} = e;
        if (!s || s.length === 0)
            return this.logger.debug(`Ignoring invalid/empty message: ${s}`),
            !0;
        if (!await this.subscriber.isSubscribed(t))
            return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
            !0;
        const o = this.messages.has(t, s);
        return o && this.logger.debug(`Ignoring duplicate message: ${s}`),
        o
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }),
        Qu(e)) {
            if (!e.method.endsWith(NS))
                return;
            const t = e.params
              , {topic: s, message: o, publishedAt: c} = t.data
              , d = {
                topic: s,
                message: o,
                publishedAt: c
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(lI({
                type: "event",
                event: t.id
            }, d)),
            this.events.emit(t.id, d),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(d)
        } else
            va(e) && this.events.emit(Zt.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Zt.message, e),
        await this.recordMessageEvent(e))
    }
    async acknowledgePayload(e) {
        const t = ga(e.id, !0);
        await this.provider.connection.send(t)
    }
    unregisterProviderListeners() {
        this.provider.off(bi.payload, this.onPayloadHandler),
        this.provider.off(bi.connect, this.onConnectHandler),
        this.provider.off(bi.disconnect, this.onDisconnectHandler),
        this.provider.off(bi.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Zt.connection_stalled, () => {
            this.restartTransport().catch(t => this.logger.error(t))
        }
        );
        let e = await jf();
        Y3(async t => {
            this.initialized && e !== t && (e = t,
            t ? await this.restartTransport().catch(s => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportClose().catch(s => this.logger.error(s))))
        }
        )
    }
    onProviderDisconnect() {
        this.events.emit(Zt.disconnect),
        this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
        setTimeout(async () => {
            await this.restartTransport().catch(e => this.logger.error(e))
        }
        , ve.toMiliseconds($S)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
        !this.connected) {
            if (this.connectionAttemptInProgress)
                return await new Promise(e => {
                    const t = setInterval( () => {
                        this.connected && (clearInterval(t),
                        e())
                    }
                    , this.connectionStatusPollingInterval)
                }
                );
            await this.restartTransport()
        }
    }
}
var dI = Object.defineProperty
  , md = Object.getOwnPropertySymbols
  , pI = Object.prototype.hasOwnProperty
  , gI = Object.prototype.propertyIsEnumerable
  , wd = (i, e, t) => e in i ? dI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , bd = (i, e) => {
    for (var t in e || (e = {}))
        pI.call(e, t) && wd(i, t, e[t]);
    if (md)
        for (var t of md(e))
            gI.call(e, t) && wd(i, t, e[t]);
    return i
}
;
class wa extends t6 {
    constructor(e, t, s, o=qi, c=void 0) {
        super(e, t, s, o),
        this.core = e,
        this.logger = t,
        this.name = s,
        this.map = new Map,
        this.version = MS,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = qi,
        this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(d => {
                this.getKey && d !== null && !ar(d) ? this.map.set(this.getKey(d), d) : x3(d) ? this.map.set(d.id, d) : O3(d) && this.map.set(d.topic, d)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ,
        this.set = async (d, f) => {
            this.isInitialized(),
            this.map.has(d) ? await this.update(d, f) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: d,
                value: f
            }),
            this.map.set(d, f),
            await this.persist())
        }
        ,
        this.get = d => (this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: d
        }),
        this.getData(d)),
        this.getAll = d => (this.isInitialized(),
        d ? this.values.filter(f => Object.keys(d).every(p => K6(f[p], d[p]))) : this.values),
        this.update = async (d, f) => {
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: d,
                update: f
            });
            const p = bd(bd({}, this.getData(d)), f);
            this.map.set(d, p),
            await this.persist()
        }
        ,
        this.delete = async (d, f) => {
            this.isInitialized(),
            this.map.has(d) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: d,
                reason: f
            }),
            this.map.delete(d),
            await this.persist())
        }
        ,
        this.logger = br(t, this.name),
        this.storagePrefix = o,
        this.getKey = c
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s),
            new Error(s)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length)
                return;
            if (this.map.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class yI {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        this.name = HS,
        this.version = BS,
        this.events = new Lu,
        this.initialized = !1,
        this.storagePrefix = qi,
        this.ignoredPayloadTypes = [hn],
        this.registeredMethods = [],
        this.init = async () => {
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ,
        this.register = ({methods: s}) => {
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]
        }
        ,
        this.create = async () => {
            this.isInitialized();
            const s = Du()
              , o = await this.core.crypto.setSymKey(s)
              , c = Or(ve.FIVE_MINUTES)
              , d = {
                protocol: Qp
            }
              , f = {
                topic: o,
                expiry: c,
                relay: d,
                active: !1
            }
              , p = v3({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: s,
                relay: d,
                expiryTimestamp: c
            });
            return await this.pairings.set(o, f),
            await this.core.relayer.subscribe(o),
            this.core.expirer.set(o, c),
            {
                topic: o,
                uri: p
            }
        }
        ,
        this.pair = async s => {
            this.isInitialized(),
            this.isValidPair(s);
            const {topic: o, symKey: c, relay: d, expiryTimestamp: f} = Nf(s.uri);
            let p;
            if (this.pairings.keys.includes(o) && (p = this.pairings.get(o),
            p.active))
                throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
            const g = f || Or(ve.FIVE_MINUTES)
              , v = {
                topic: o,
                relay: d,
                expiry: g,
                active: !1
            };
            return await this.pairings.set(o, v),
            this.core.expirer.set(o, g),
            s.activatePairing && await this.activate({
                topic: o
            }),
            this.events.emit(bs.create, v),
            this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, {
                relay: d
            })),
            v
        }
        ,
        this.activate = async ({topic: s}) => {
            this.isInitialized();
            const o = Or(ve.THIRTY_DAYS);
            await this.pairings.update(s, {
                active: !0,
                expiry: o
            }),
            this.core.expirer.set(s, o)
        }
        ,
        this.ping = async s => {
            this.isInitialized(),
            await this.isValidPing(s);
            const {topic: o} = s;
            if (this.pairings.keys.includes(o)) {
                const c = await this.sendRequest(o, "wc_pairingPing", {})
                  , {done: d, resolve: f, reject: p} = Mn();
                this.events.once(Nt("pairing_ping", c), ({error: g}) => {
                    g ? p(g) : f()
                }
                ),
                await d()
            }
        }
        ,
        this.updateExpiry = async ({topic: s, expiry: o}) => {
            this.isInitialized(),
            await this.pairings.update(s, {
                expiry: o
            })
        }
        ,
        this.updateMetadata = async ({topic: s, metadata: o}) => {
            this.isInitialized(),
            await this.pairings.update(s, {
                peerMetadata: o
            })
        }
        ,
        this.getPairings = () => (this.isInitialized(),
        this.pairings.values),
        this.disconnect = async s => {
            this.isInitialized(),
            await this.isValidDisconnect(s);
            const {topic: o} = s;
            this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", mt("USER_DISCONNECTED")),
            await this.deletePairing(o))
        }
        ,
        this.sendRequest = async (s, o, c) => {
            const d = Fn(o, c)
              , f = await this.core.crypto.encode(s, d)
              , p = ys[o].req;
            return this.core.history.set(s, d),
            this.core.relayer.publish(s, f, p),
            d.id
        }
        ,
        this.sendResult = async (s, o, c) => {
            const d = ga(s, c)
              , f = await this.core.crypto.encode(o, d)
              , p = await this.core.history.get(o, s)
              , g = ys[p.request.method].res;
            await this.core.relayer.publish(o, f, g),
            await this.core.history.resolve(d)
        }
        ,
        this.sendError = async (s, o, c) => {
            const d = ya(s, c)
              , f = await this.core.crypto.encode(o, d)
              , p = await this.core.history.get(o, s)
              , g = ys[p.request.method] ? ys[p.request.method].res : ys.unregistered_method.res;
            await this.core.relayer.publish(o, f, g),
            await this.core.history.resolve(d)
        }
        ,
        this.deletePairing = async (s, o) => {
            await this.core.relayer.unsubscribe(s),
            await Promise.all([this.pairings.delete(s, mt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), o ? Promise.resolve() : this.core.expirer.del(s)])
        }
        ,
        this.cleanup = async () => {
            const s = this.pairings.getAll().filter(o => ji(o.expiry));
            await Promise.all(s.map(o => this.deletePairing(o.topic)))
        }
        ,
        this.onRelayEventRequest = s => {
            const {topic: o, payload: c} = s;
            switch (c.method) {
            case "wc_pairingPing":
                return this.onPairingPingRequest(o, c);
            case "wc_pairingDelete":
                return this.onPairingDeleteRequest(o, c);
            default:
                return this.onUnknownRpcMethodRequest(o, c)
            }
        }
        ,
        this.onRelayEventResponse = async s => {
            const {topic: o, payload: c} = s
              , d = (await this.core.history.get(o, c.id)).request.method;
            switch (d) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(o, c);
            default:
                return this.onUnknownRpcMethodResponse(d)
            }
        }
        ,
        this.onPairingPingRequest = async (s, o) => {
            const {id: c} = o;
            try {
                this.isValidPing({
                    topic: s
                }),
                await this.sendResult(c, s, !0),
                this.events.emit(bs.ping, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d),
                this.logger.error(d)
            }
        }
        ,
        this.onPairingPingResponse = (s, o) => {
            const {id: c} = o;
            setTimeout( () => {
                Di(o) ? this.events.emit(Nt("pairing_ping", c), {}) : Gr(o) && this.events.emit(Nt("pairing_ping", c), {
                    error: o.error
                })
            }
            , 500)
        }
        ,
        this.onPairingDeleteRequest = async (s, o) => {
            const {id: c} = o;
            try {
                this.isValidDisconnect({
                    topic: s
                }),
                await this.deletePairing(s),
                this.events.emit(bs.delete, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d),
                this.logger.error(d)
            }
        }
        ,
        this.onUnknownRpcMethodRequest = async (s, o) => {
            const {id: c, method: d} = o;
            try {
                if (this.registeredMethods.includes(d))
                    return;
                const f = mt("WC_METHOD_UNSUPPORTED", d);
                await this.sendError(c, s, f),
                this.logger.error(f)
            } catch (f) {
                await this.sendError(c, s, f),
                this.logger.error(f)
            }
        }
        ,
        this.onUnknownRpcMethodResponse = s => {
            this.registeredMethods.includes(s) || this.logger.error(mt("WC_METHOD_UNSUPPORTED", s))
        }
        ,
        this.isValidPair = s => {
            var o;
            if (!vr(s)) {
                const {message: d} = ce("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw new Error(d)
            }
            if (!I3(s.uri)) {
                const {message: d} = ce("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw new Error(d)
            }
            const c = Nf(s.uri);
            if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
                const {message: d} = ce("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(d)
            }
            if (!(c != null && c.symKey)) {
                const {message: d} = ce("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(d)
            }
            if (c != null && c.expiryTimestamp && ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()) {
                const {message: d} = ce("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(d)
            }
        }
        ,
        this.isValidPing = async s => {
            if (!vr(s)) {
                const {message: c} = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(c)
            }
            const {topic: o} = s;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidDisconnect = async s => {
            if (!vr(s)) {
                const {message: c} = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(c)
            }
            const {topic: o} = s;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidPairingTopic = async s => {
            if (!Vt(s, !1)) {
                const {message: o} = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(o)
            }
            if (!this.pairings.keys.includes(s)) {
                const {message: o} = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(o)
            }
            if (ji(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const {message: o} = ce("EXPIRED", `pairing topic: ${s}`);
                throw new Error(o)
            }
        }
        ,
        this.core = e,
        this.logger = br(t, this.name),
        this.pairings = new wa(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return wr(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Zt.message, async e => {
            const {topic: t, message: s} = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
                return;
            const o = await this.core.crypto.decode(t, s);
            try {
                Qu(o) ? (this.core.history.set(t, o),
                this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : va(o) && (await this.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }),
                this.core.history.delete(t, o.id))
            } catch (c) {
                this.logger.error(c)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(qr.expired, async e => {
            const {topic: t} = bp(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
            this.events.emit(bs.expire, {
                topic: t
            }))
        }
        )
    }
}
class vI extends QD {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        this.records = new Map,
        this.events = new Fr.EventEmitter,
        this.name = KS,
        this.version = kS,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = qi,
        this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s => this.records.set(s.id, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.set = (s, o, c) => {
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: s,
                request: o,
                chainId: c
            }),
            this.records.has(o.id))
                return;
            const d = {
                id: o.id,
                topic: s,
                request: {
                    method: o.method,
                    params: o.params || null
                },
                chainId: c,
                expiry: Or(ve.THIRTY_DAYS)
            };
            this.records.set(d.id, d),
            this.events.emit(ii.created, d)
        }
        ,
        this.resolve = async s => {
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: s
            }),
            !this.records.has(s.id))
                return;
            const o = await this.getRecord(s.id);
            typeof o.response > "u" && (o.response = Gr(s) ? {
                error: s.error
            } : {
                result: s.result
            },
            this.records.set(o.id, o),
            this.events.emit(ii.updated, o))
        }
        ,
        this.get = async (s, o) => (this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: s,
            id: o
        }),
        await this.getRecord(o)),
        this.delete = (s, o) => {
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: o
            }),
            this.values.forEach(c => {
                if (c.topic === s) {
                    if (typeof o < "u" && c.id !== o)
                        return;
                    this.records.delete(c.id),
                    this.events.emit(ii.deleted, c)
                }
            }
            )
        }
        ,
        this.exists = async (s, o) => (this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1),
        this.on = (s, o) => {
            this.events.on(s, o)
        }
        ,
        this.once = (s, o) => {
            this.events.once(s, o)
        }
        ,
        this.off = (s, o) => {
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }
        ,
        this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const e = [];
        return this.values.forEach(t => {
            if (typeof t.response < "u")
                return;
            const s = {
                topic: t.topic,
                request: Fn(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s)
        }
        ),
        e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(ii.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length)
                return;
            if (this.records.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(ii.created, e => {
            const t = ii.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.events.on(ii.updated, e => {
            const t = ii.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.events.on(ii.deleted, e => {
            const t = ii.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.records.forEach(e => {
                ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id))
            }
            )
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class mI extends i6 {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        this.expirations = new Map,
        this.events = new Fr.EventEmitter,
        this.name = VS,
        this.version = WS,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = qi,
        this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s => this.expirations.set(s.target, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.has = s => {
            try {
                const o = this.formatTarget(s);
                return typeof this.getExpiration(o) < "u"
            } catch {
                return !1
            }
        }
        ,
        this.set = (s, o) => {
            this.isInitialized();
            const c = this.formatTarget(s)
              , d = {
                target: c,
                expiry: o
            };
            this.expirations.set(c, d),
            this.checkExpiry(c, d),
            this.events.emit(qr.created, {
                target: c,
                expiration: d
            })
        }
        ,
        this.get = s => {
            this.isInitialized();
            const o = this.formatTarget(s);
            return this.getExpiration(o)
        }
        ,
        this.del = s => {
            if (this.isInitialized(),
            this.has(s)) {
                const o = this.formatTarget(s)
                  , c = this.getExpiration(o);
                this.expirations.delete(o),
                this.events.emit(qr.deleted, {
                    target: o,
                    expiration: c
                })
            }
        }
        ,
        this.on = (s, o) => {
            this.events.on(s, o)
        }
        ,
        this.once = (s, o) => {
            this.events.once(s, o)
        }
        ,
        this.off = (s, o) => {
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }
        ,
        this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string")
            return r3(e);
        if (typeof e == "number")
            return i3(e);
        const {message: t} = ce("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(qr.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length)
                return;
            if (this.expirations.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e)
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s),
            new Error(s)
        }
        return t
    }
    checkExpiry(e, t) {
        const {expiry: s} = t;
        ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e),
        this.events.emit(qr.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach( (e, t) => this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Vn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()),
        this.events.on(qr.created, e => {
            const t = qr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(qr.expired, e => {
            const t = qr.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(qr.deleted, e => {
            const t = qr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class wI extends n6 {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        this.name = iu,
        this.initialized = !1,
        this.queue = [],
        this.verifyDisabled = !1,
        this.init = async s => {
            if (this.verifyDisabled || Bn() || !Kn())
                return;
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            this.verifyUrl !== o && this.removeIframe(),
            this.verifyUrl = o;
            try {
                await this.createIframe()
            } catch (c) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                this.logger.info(c)
            }
            if (!this.initialized) {
                this.removeIframe(),
                this.verifyUrl = Cu;
                try {
                    await this.createIframe()
                } catch (c) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                    this.logger.info(c),
                    this.verifyDisabled = !0
                }
            }
        }
        ,
        this.register = async s => {
            this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId),
            await this.init())
        }
        ,
        this.resolve = async s => {
            if (this.isDevEnv)
                return "";
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            let c;
            try {
                c = await this.fetchAttestation(s.attestationId, o)
            } catch (d) {
                this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${o}`),
                this.logger.info(d),
                c = await this.fetchAttestation(s.attestationId, Cu)
            }
            return c
        }
        ,
        this.fetchAttestation = async (s, o) => {
            this.logger.info(`resolving attestation: ${s} from url: ${o}`);
            const c = this.startAbortTimer(ve.ONE_SECOND * 2)
              , d = await fetch(`${o}/attestation/${s}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(c),
            d.status === 200 ? await d.json() : void 0
        }
        ,
        this.addToQueue = s => {
            this.queue.push(s)
        }
        ,
        this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(s => this.sendPost(s)),
            this.queue = [])
        }
        ,
        this.sendPost = s => {
            var o;
            try {
                if (!this.iframe)
                    return;
                (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
                this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`)
            } catch {}
        }
        ,
        this.createIframe = async () => {
            let s;
            const o = c => {
                c.data === "verify_ready" && (this.initialized = !0,
                this.processQueue(),
                window.removeEventListener("message", o),
                s())
            }
            ;
            await Promise.race([new Promise(c => {
                if (document.getElementById(iu))
                    return c();
                window.addEventListener("message", o);
                const d = document.createElement("iframe");
                d.id = iu,
                d.src = `${this.verifyUrl}/${this.projectId}`,
                d.style.display = "none",
                document.body.append(d),
                this.iframe = d,
                s = c
            }
            ), new Promise( (c, d) => setTimeout( () => {
                window.removeEventListener("message", o),
                d("verify iframe load timeout")
            }
            , ve.toMiliseconds(ve.FIVE_SECONDS)))])
        }
        ,
        this.removeIframe = () => {
            this.iframe && (this.iframe.remove(),
            this.iframe = void 0,
            this.initialized = !1)
        }
        ,
        this.getVerifyUrl = s => {
            let o = s || jn;
            return GS.includes(o) || (this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${jn}`),
            o = jn),
            o
        }
        ,
        this.logger = br(t, this.name),
        this.verifyUrl = jn,
        this.abortController = new AbortController,
        this.isDevEnv = ku() && Y6.IS_VITEST
    }
    get context() {
        return wr(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout( () => this.abortController.abort(), ve.toMiliseconds(e))
    }
}
class bI extends s6 {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        this.context = YS,
        this.registerDeviceToken = async s => {
            const {clientId: o, token: c, notificationType: d, enableEncrypted: f=!1} = s
              , p = `${JS}/${this.projectId}/clients`;
            await G6(p, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: o,
                    type: d,
                    token: c,
                    always_raw: f
                })
            })
        }
        ,
        this.logger = br(t, this.context)
    }
}
var _I = Object.defineProperty
  , _d = Object.getOwnPropertySymbols
  , EI = Object.prototype.hasOwnProperty
  , DI = Object.prototype.propertyIsEnumerable
  , Ed = (i, e, t) => e in i ? _I(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Dd = (i, e) => {
    for (var t in e || (e = {}))
        EI.call(e, t) && Ed(i, t, e[t]);
    if (_d)
        for (var t of _d(e))
            DI.call(e, t) && Ed(i, t, e[t]);
    return i
}
;
class Zu extends JD {
    constructor(e) {
        super(e),
        this.protocol = Jp,
        this.version = bS,
        this.name = Xu,
        this.events = new Fr.EventEmitter,
        this.initialized = !1,
        this.on = (s, o) => this.events.on(s, o),
        this.once = (s, o) => this.events.once(s, o),
        this.off = (s, o) => this.events.off(s, o),
        this.removeListener = (s, o) => this.events.removeListener(s, o),
        this.projectId = e == null ? void 0 : e.projectId,
        this.relayUrl = (e == null ? void 0 : e.relayUrl) || Xp,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : da(pa({
            level: (e == null ? void 0 : e.logger) || _S.logger
        }));
        this.logger = br(t, this.name),
        this.heartbeat = new Vn.HeartBeat,
        this.crypto = new XS(this,this.logger,e == null ? void 0 : e.keychain),
        this.history = new vI(this,this.logger),
        this.expirer = new mI(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new wD(Dd(Dd({}, ES), e == null ? void 0 : e.storageOptions)),
        this.relayer = new fI({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new yI(this,this.logger),
        this.verify = new wI(this.projectId || "",this.logger),
        this.echoClient = new bI(this.projectId || "",this.logger)
    }
    static async init(e) {
        const t = new Zu(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(jS, s),
        t
    }
    get context() {
        return wr(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
            this.logger.error(e.message),
            e
        }
    }
}
const SI = Zu
  , Zp = "wc"
  , eg = 2
  , tg = "client"
  , eh = `${Zp}@${eg}:${tg}:`
  , su = {
    name: tg,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}
  , Sd = "WALLETCONNECT_DEEPLINK_CHOICE"
  , II = "proposal"
  , rg = "Proposal expired"
  , xI = "session"
  , Wo = ve.SEVEN_DAYS
  , OI = "engine"
  , _i = {
    wc_sessionPropose: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
        }
    }
}
  , ou = {
    min: ve.FIVE_MINUTES,
    max: ve.SEVEN_DAYS
}
  , Ei = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , PI = "request"
  , CI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var AI = Object.defineProperty
  , RI = Object.defineProperties
  , TI = Object.getOwnPropertyDescriptors
  , Id = Object.getOwnPropertySymbols
  , NI = Object.prototype.hasOwnProperty
  , $I = Object.prototype.propertyIsEnumerable
  , xd = (i, e, t) => e in i ? AI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , or = (i, e) => {
    for (var t in e || (e = {}))
        NI.call(e, t) && xd(i, t, e[t]);
    if (Id)
        for (var t of Id(e))
            $I.call(e, t) && xd(i, t, e[t]);
    return i
}
  , Un = (i, e) => RI(i, TI(e));
class LI extends a6 {
    constructor(e) {
        super(e),
        this.name = OI,
        this.events = new Lu,
        this.initialized = !1,
        this.ignoredPayloadTypes = [hn],
        this.requestQueue = {
            state: Ei.idle,
            queue: []
        },
        this.sessionRequestQueue = {
            state: Ei.idle,
            queue: []
        },
        this.requestQueueDelay = ve.ONE_SECOND,
        this.init = async () => {
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            this.client.core.pairing.register({
                methods: Object.keys(_i)
            }),
            this.initialized = !0,
            setTimeout( () => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , ve.toMiliseconds(this.requestQueueDelay)))
        }
        ,
        this.connect = async t => {
            await this.isInitialized();
            const s = Un(or({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(s);
            const {pairingTopic: o, requiredNamespaces: c, optionalNamespaces: d, sessionProperties: f, relays: p} = s;
            let g = o, v, S = !1;
            if (g && (S = this.client.core.pairing.pairings.get(g).active),
            !g || !S) {
                const {topic: w, uri: E} = await this.client.core.pairing.create();
                g = w,
                v = E
            }
            const P = await this.client.core.crypto.generateKeyPair()
              , A = _i.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES
              , O = Or(A)
              , K = or({
                requiredNamespaces: c,
                optionalNamespaces: d,
                relays: p ?? [{
                    protocol: Qp
                }],
                proposer: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiryTimestamp: O
            }, f && {
                sessionProperties: f
            })
              , {reject: B, resolve: ee, done: $} = Mn(A, rg);
            if (this.events.once(Nt("session_connect"), async ({error: w, session: E}) => {
                if (w)
                    B(w);
                else if (E) {
                    E.self.publicKey = P;
                    const D = Un(or({}, E), {
                        requiredNamespaces: K.requiredNamespaces,
                        optionalNamespaces: K.optionalNamespaces
                    });
                    await this.client.session.set(E.topic, D),
                    await this.setExpiry(E.topic, E.expiry),
                    g && await this.client.core.pairing.updateMetadata({
                        topic: g,
                        metadata: E.peer.metadata
                    }),
                    ee(D)
                }
            }
            ),
            !g) {
                const {message: w} = ce("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
                throw new Error(w)
            }
            const U = await this.sendRequest({
                topic: g,
                method: "wc_sessionPropose",
                params: K,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(U, or({
                id: U
            }, K)),
            {
                uri: v,
                approval: $
            }
        }
        ,
        this.pair = async t => (await this.isInitialized(),
        await this.client.core.pairing.pair(t)),
        this.approve = async t => {
            await this.isInitialized(),
            await this.isValidApprove(t);
            const {id: s, relayProtocol: o, namespaces: c, sessionProperties: d} = t
              , f = this.client.proposal.get(s);
            let {pairingTopic: p, proposer: g, requiredNamespaces: v, optionalNamespaces: S} = f;
            p = p || "";
            const P = await this.client.core.crypto.generateKeyPair()
              , A = g.publicKey
              , O = await this.client.core.crypto.generateSharedKey(P, A);
            p && s && (await this.client.core.pairing.updateMetadata({
                topic: p,
                metadata: g.metadata
            }),
            await this.sendResult({
                id: s,
                topic: p,
                result: {
                    relay: {
                        protocol: o ?? "irn"
                    },
                    responderPublicKey: P
                }
            }),
            await this.client.proposal.delete(s, mt("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: p
            }));
            const K = or({
                relay: {
                    protocol: o ?? "irn"
                },
                namespaces: c,
                pairingTopic: p,
                controller: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiry: Or(Wo)
            }, d && {
                sessionProperties: d
            });
            await this.client.core.relayer.subscribe(O);
            const B = Un(or({}, K), {
                topic: O,
                requiredNamespaces: v,
                optionalNamespaces: S,
                pairingTopic: p,
                acknowledged: !1,
                self: K.controller,
                peer: {
                    publicKey: g.publicKey,
                    metadata: g.metadata
                },
                controller: P
            });
            await this.client.session.set(O, B);
            try {
                await this.sendRequest({
                    topic: O,
                    method: "wc_sessionSettle",
                    params: K,
                    throwOnFailedPublish: !0
                })
            } catch (ee) {
                throw this.client.logger.error(ee),
                this.client.session.delete(O, mt("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(O),
                ee
            }
            return await this.setExpiry(O, Or(Wo)),
            {
                topic: O,
                acknowledged: () => new Promise(ee => setTimeout( () => ee(this.client.session.get(O)), 500))
            }
        }
        ,
        this.reject = async t => {
            await this.isInitialized(),
            await this.isValidReject(t);
            const {id: s, reason: o} = t
              , {pairingTopic: c} = this.client.proposal.get(s);
            c && (await this.sendError(s, c, o),
            await this.client.proposal.delete(s, mt("USER_DISCONNECTED")))
        }
        ,
        this.update = async t => {
            await this.isInitialized(),
            await this.isValidUpdate(t);
            const {topic: s, namespaces: o} = t
              , c = await this.sendRequest({
                topic: s,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: o
                }
            })
              , {done: d, resolve: f, reject: p} = Mn();
            return this.events.once(Nt("session_update", c), ({error: g}) => {
                g ? p(g) : f()
            }
            ),
            await this.client.session.update(s, {
                namespaces: o
            }),
            {
                acknowledged: d
            }
        }
        ,
        this.extend = async t => {
            await this.isInitialized(),
            await this.isValidExtend(t);
            const {topic: s} = t
              , o = await this.sendRequest({
                topic: s,
                method: "wc_sessionExtend",
                params: {}
            })
              , {done: c, resolve: d, reject: f} = Mn();
            return this.events.once(Nt("session_extend", o), ({error: p}) => {
                p ? f(p) : d()
            }
            ),
            await this.setExpiry(s, Or(Wo)),
            {
                acknowledged: c
            }
        }
        ,
        this.request = async t => {
            await this.isInitialized(),
            await this.isValidRequest(t);
            const {chainId: s, request: o, topic: c, expiry: d=_i.wc_sessionRequest.req.ttl} = t
              , f = Ju()
              , {done: p, resolve: g, reject: v} = Mn(d, "Request expired. Please try again.");
            return this.events.once(Nt("session_request", f), ({error: S, result: P}) => {
                S ? v(S) : g(P)
            }
            ),
            await Promise.all([new Promise(async S => {
                await this.sendRequest({
                    clientRpcId: f,
                    topic: c,
                    method: "wc_sessionRequest",
                    params: {
                        request: Un(or({}, o), {
                            expiryTimestamp: Or(d)
                        }),
                        chainId: s
                    },
                    expiry: d,
                    throwOnFailedPublish: !0
                }).catch(P => v(P)),
                this.client.events.emit("session_request_sent", {
                    topic: c,
                    request: o,
                    chainId: s,
                    id: f
                }),
                S()
            }
            ), new Promise(async S => {
                const P = await s3(this.client.core.storage, Sd);
                n3({
                    id: f,
                    topic: c,
                    wcDeepLink: P
                }),
                S()
            }
            ), p()]).then(S => S[2])
        }
        ,
        this.respond = async t => {
            await this.isInitialized(),
            await this.isValidRespond(t);
            const {topic: s, response: o} = t
              , {id: c} = o;
            Di(o) ? await this.sendResult({
                id: c,
                topic: s,
                result: o.result,
                throwOnFailedPublish: !0
            }) : Gr(o) && await this.sendError(c, s, o.error),
            this.cleanupAfterResponse(t)
        }
        ,
        this.ping = async t => {
            await this.isInitialized(),
            await this.isValidPing(t);
            const {topic: s} = t;
            if (this.client.session.keys.includes(s)) {
                const o = await this.sendRequest({
                    topic: s,
                    method: "wc_sessionPing",
                    params: {}
                })
                  , {done: c, resolve: d, reject: f} = Mn();
                this.events.once(Nt("session_ping", o), ({error: p}) => {
                    p ? f(p) : d()
                }
                ),
                await c()
            } else
                this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({
                    topic: s
                })
        }
        ,
        this.emit = async t => {
            await this.isInitialized(),
            await this.isValidEmit(t);
            const {topic: s, event: o, chainId: c} = t;
            await this.sendRequest({
                topic: s,
                method: "wc_sessionEvent",
                params: {
                    event: o,
                    chainId: c
                }
            })
        }
        ,
        this.disconnect = async t => {
            await this.isInitialized(),
            await this.isValidDisconnect(t);
            const {topic: s} = t;
            if (this.client.session.keys.includes(s))
                await this.sendRequest({
                    topic: s,
                    method: "wc_sessionDelete",
                    params: mt("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                await this.deleteSession({
                    topic: s,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(s))
                await this.client.core.pairing.disconnect({
                    topic: s
                });
            else {
                const {message: o} = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
                throw new Error(o)
            }
        }
        ,
        this.find = t => (this.isInitialized(),
        this.client.session.getAll().filter(s => D3(s, t))),
        this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(),
        this.cleanupDuplicatePairings = async t => {
            if (t.pairingTopic)
                try {
                    const s = this.client.core.pairing.pairings.get(t.pairingTopic)
                      , o = this.client.core.pairing.pairings.getAll().filter(c => {
                        var d, f;
                        return ((d = c.peerMetadata) == null ? void 0 : d.url) && ((f = c.peerMetadata) == null ? void 0 : f.url) === t.peer.metadata.url && c.topic && c.topic !== s.topic
                    }
                    );
                    if (o.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`),
                    await Promise.all(o.map(c => this.client.core.pairing.disconnect({
                        topic: c.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (s) {
                    this.client.logger.error(s)
                }
        }
        ,
        this.deleteSession = async t => {
            const {topic: s, expirerHasDeleted: o=!1, emitEvent: c=!0, id: d=0} = t
              , {self: f} = this.client.session.get(s);
            await this.client.core.relayer.unsubscribe(s),
            await this.client.session.delete(s, mt("USER_DISCONNECTED")),
            this.client.core.crypto.keychain.has(f.publicKey) && await this.client.core.crypto.deleteKeyPair(f.publicKey),
            this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s),
            o || this.client.core.expirer.del(s),
            this.client.core.storage.removeItem(Sd).catch(p => this.client.logger.warn(p)),
            this.getPendingSessionRequests().forEach(p => {
                p.topic === s && this.deletePendingSessionRequest(p.id, mt("USER_DISCONNECTED"))
            }
            ),
            c && this.client.events.emit("session_delete", {
                id: d,
                topic: s
            })
        }
        ,
        this.deleteProposal = async (t, s) => {
            await Promise.all([this.client.proposal.delete(t, mt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)])
        }
        ,
        this.deletePendingSessionRequest = async (t, s, o=!1) => {
            await Promise.all([this.client.pendingRequest.delete(t, s), o ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(c => c.id !== t),
            o && (this.sessionRequestQueue.state = Ei.idle,
            this.client.events.emit("session_request_expire", {
                id: t
            }))
        }
        ,
        this.setExpiry = async (t, s) => {
            this.client.session.keys.includes(t) && await this.client.session.update(t, {
                expiry: s
            }),
            this.client.core.expirer.set(t, s)
        }
        ,
        this.setProposal = async (t, s) => {
            await this.client.proposal.set(t, s),
            this.client.core.expirer.set(t, Or(_i.wc_sessionPropose.req.ttl))
        }
        ,
        this.setPendingSessionRequest = async t => {
            const {id: s, topic: o, params: c, verifyContext: d} = t
              , f = c.request.expiryTimestamp || Or(_i.wc_sessionRequest.req.ttl);
            await this.client.pendingRequest.set(s, {
                id: s,
                topic: o,
                params: c,
                verifyContext: d
            }),
            f && this.client.core.expirer.set(s, f)
        }
        ,
        this.sendRequest = async t => {
            const {topic: s, method: o, params: c, expiry: d, relayRpcId: f, clientRpcId: p, throwOnFailedPublish: g} = t
              , v = Fn(o, c, p);
            if (Kn() && CI.includes(o)) {
                const A = qn(JSON.stringify(v));
                this.client.core.verify.register({
                    attestationId: A
                })
            }
            const S = await this.client.core.crypto.encode(s, v)
              , P = _i[o].req;
            return d && (P.ttl = d),
            f && (P.id = f),
            this.client.core.history.set(s, v),
            g ? (P.internal = Un(or({}, P.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(s, S, P)) : this.client.core.relayer.publish(s, S, P).catch(A => this.client.logger.error(A)),
            v.id
        }
        ,
        this.sendResult = async t => {
            const {id: s, topic: o, result: c, throwOnFailedPublish: d} = t
              , f = ga(s, c)
              , p = await this.client.core.crypto.encode(o, f)
              , g = await this.client.core.history.get(o, s)
              , v = _i[g.request.method].res;
            d ? (v.internal = Un(or({}, v.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(o, p, v)) : this.client.core.relayer.publish(o, p, v).catch(S => this.client.logger.error(S)),
            await this.client.core.history.resolve(f)
        }
        ,
        this.sendError = async (t, s, o) => {
            const c = ya(t, o)
              , d = await this.client.core.crypto.encode(s, c)
              , f = await this.client.core.history.get(s, t)
              , p = _i[f.request.method].res;
            this.client.core.relayer.publish(s, d, p),
            await this.client.core.history.resolve(c)
        }
        ,
        this.cleanup = async () => {
            const t = []
              , s = [];
            this.client.session.getAll().forEach(o => {
                let c = !1;
                ji(o.expiry) && (c = !0),
                this.client.core.crypto.keychain.has(o.topic) || (c = !0),
                c && t.push(o.topic)
            }
            ),
            this.client.proposal.getAll().forEach(o => {
                ji(o.expiryTimestamp) && s.push(o.id)
            }
            ),
            await Promise.all([...t.map(o => this.deleteSession({
                topic: o
            })), ...s.map(o => this.deleteProposal(o))])
        }
        ,
        this.onRelayEventRequest = async t => {
            this.requestQueue.queue.push(t),
            await this.processRequestsQueue()
        }
        ,
        this.processRequestsQueue = async () => {
            if (this.requestQueue.state === Ei.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = Ei.active;
                const t = this.requestQueue.queue.shift();
                if (t)
                    try {
                        this.processRequest(t),
                        await new Promise(s => setTimeout(s, 300))
                    } catch (s) {
                        this.client.logger.warn(s)
                    }
            }
            this.requestQueue.state = Ei.idle
        }
        ,
        this.processRequest = t => {
            const {topic: s, payload: o} = t
              , c = o.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeRequest(s, o);
            case "wc_sessionSettle":
                return this.onSessionSettleRequest(s, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(s, o);
            case "wc_sessionExtend":
                return this.onSessionExtendRequest(s, o);
            case "wc_sessionPing":
                return this.onSessionPingRequest(s, o);
            case "wc_sessionDelete":
                return this.onSessionDeleteRequest(s, o);
            case "wc_sessionRequest":
                return this.onSessionRequest(s, o);
            case "wc_sessionEvent":
                return this.onSessionEventRequest(s, o);
            default:
                return this.client.logger.info(`Unsupported request method ${c}`)
            }
        }
        ,
        this.onRelayEventResponse = async t => {
            const {topic: s, payload: o} = t
              , c = (await this.client.core.history.get(s, o.id)).request.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(s, o);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(s, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(s, o);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(s, o);
            case "wc_sessionPing":
                return this.onSessionPingResponse(s, o);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(s, o);
            default:
                return this.client.logger.info(`Unsupported response method ${c}`)
            }
        }
        ,
        this.onRelayEventUnknownPayload = t => {
            const {topic: s} = t
              , {message: o} = ce("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(o)
        }
        ,
        this.onSessionProposeRequest = async (t, s) => {
            const {params: o, id: c} = s;
            try {
                this.isValidConnect(or({}, s.params));
                const d = o.expiryTimestamp || Or(_i.wc_sessionPropose.req.ttl)
                  , f = or({
                    id: c,
                    pairingTopic: t,
                    expiryTimestamp: d
                }, o);
                await this.setProposal(c, f);
                const p = qn(JSON.stringify(s))
                  , g = await this.getVerifyContext(p, f.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: f,
                    verifyContext: g
                })
            } catch (d) {
                await this.sendError(c, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionProposeResponse = async (t, s) => {
            const {id: o} = s;
            if (Di(s)) {
                const {result: c} = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: c
                });
                const d = this.client.proposal.get(o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: d
                });
                const f = d.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: f
                });
                const p = c.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: p
                });
                const g = await this.client.core.crypto.generateSharedKey(f, p);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: g
                });
                const v = await this.client.core.relayer.subscribe(g);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: v
                }),
                await this.client.core.pairing.activate({
                    topic: t
                })
            } else
                Gr(s) && (await this.client.proposal.delete(o, mt("USER_DISCONNECTED")),
                this.events.emit(Nt("session_connect"), {
                    error: s.error
                }))
        }
        ,
        this.onSessionSettleRequest = async (t, s) => {
            const {id: o, params: c} = s;
            try {
                this.isValidSessionSettleRequest(c);
                const {relay: d, controller: f, expiry: p, namespaces: g, sessionProperties: v, pairingTopic: S} = s.params
                  , P = or({
                    topic: t,
                    relay: d,
                    expiry: p,
                    namespaces: g,
                    acknowledged: !0,
                    pairingTopic: S,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: f.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: f.publicKey,
                        metadata: f.metadata
                    }
                }, v && {
                    sessionProperties: v
                });
                await this.sendResult({
                    id: s.id,
                    topic: t,
                    result: !0
                }),
                this.events.emit(Nt("session_connect"), {
                    session: P
                }),
                this.cleanupDuplicatePairings(P)
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionSettleResponse = async (t, s) => {
            const {id: o} = s;
            Di(s) ? (await this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(Nt("session_approve", o), {})) : Gr(s) && (await this.client.session.delete(t, mt("USER_DISCONNECTED")),
            this.events.emit(Nt("session_approve", o), {
                error: s.error
            }))
        }
        ,
        this.onSessionUpdateRequest = async (t, s) => {
            const {params: o, id: c} = s;
            try {
                const d = `${t}_session_update`
                  , f = Ko.get(d);
                if (f && this.isRequestOutOfSync(f, c)) {
                    this.client.logger.info(`Discarding out of sync request - ${c}`);
                    return
                }
                this.isValidUpdate(or({
                    topic: t
                }, o)),
                await this.client.session.update(t, {
                    namespaces: o.namespaces
                }),
                await this.sendResult({
                    id: c,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_update", {
                    id: c,
                    topic: t,
                    params: o
                }),
                Ko.set(d, c)
            } catch (d) {
                await this.sendError(c, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.isRequestOutOfSync = (t, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)),
        this.onSessionUpdateResponse = (t, s) => {
            const {id: o} = s;
            Di(s) ? this.events.emit(Nt("session_update", o), {}) : Gr(s) && this.events.emit(Nt("session_update", o), {
                error: s.error
            })
        }
        ,
        this.onSessionExtendRequest = async (t, s) => {
            const {id: o} = s;
            try {
                this.isValidExtend({
                    topic: t
                }),
                await this.setExpiry(t, Or(Wo)),
                await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_extend", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionExtendResponse = (t, s) => {
            const {id: o} = s;
            Di(s) ? this.events.emit(Nt("session_extend", o), {}) : Gr(s) && this.events.emit(Nt("session_extend", o), {
                error: s.error
            })
        }
        ,
        this.onSessionPingRequest = async (t, s) => {
            const {id: o} = s;
            try {
                this.isValidPing({
                    topic: t
                }),
                await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_ping", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionPingResponse = (t, s) => {
            const {id: o} = s;
            setTimeout( () => {
                Di(s) ? this.events.emit(Nt("session_ping", o), {}) : Gr(s) && this.events.emit(Nt("session_ping", o), {
                    error: s.error
                })
            }
            , 500)
        }
        ,
        this.onSessionDeleteRequest = async (t, s) => {
            const {id: o} = s;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: s.params
                }),
                await Promise.all([new Promise(c => {
                    this.client.core.relayer.once(Zt.publish, async () => {
                        c(await this.deleteSession({
                            topic: t,
                            id: o
                        }))
                    }
                    )
                }
                ), this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: mt("USER_DISCONNECTED")
                })])
            } catch (c) {
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionRequest = async (t, s) => {
            const {id: o, params: c} = s;
            try {
                this.isValidRequest(or({
                    topic: t
                }, c));
                const d = qn(JSON.stringify(Fn("wc_sessionRequest", c, o)))
                  , f = this.client.session.get(t)
                  , p = await this.getVerifyContext(d, f.peer.metadata)
                  , g = {
                    id: o,
                    topic: t,
                    params: c,
                    verifyContext: p
                };
                await this.setPendingSessionRequest(g),
                this.addSessionRequestToSessionRequestQueue(g),
                this.processSessionRequestQueue()
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionRequestResponse = (t, s) => {
            const {id: o} = s;
            Di(s) ? this.events.emit(Nt("session_request", o), {
                result: s.result
            }) : Gr(s) && this.events.emit(Nt("session_request", o), {
                error: s.error
            })
        }
        ,
        this.onSessionEventRequest = async (t, s) => {
            const {id: o, params: c} = s;
            try {
                const d = `${t}_session_event_${c.event.name}`
                  , f = Ko.get(d);
                if (f && this.isRequestOutOfSync(f, o)) {
                    this.client.logger.info(`Discarding out of sync request - ${o}`);
                    return
                }
                this.isValidEmit(or({
                    topic: t
                }, c)),
                this.client.events.emit("session_event", {
                    id: o,
                    topic: t,
                    params: c
                }),
                Ko.set(d, o)
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.addSessionRequestToSessionRequestQueue = t => {
            this.sessionRequestQueue.queue.push(t)
        }
        ,
        this.cleanupAfterResponse = t => {
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout( () => {
                this.sessionRequestQueue.state = Ei.idle,
                this.processSessionRequestQueue()
            }
            , ve.toMiliseconds(this.requestQueueDelay))
        }
        ,
        this.cleanupPendingSentRequestsForTopic = ({topic: t, error: s}) => {
            const o = this.client.core.history.pending;
            o.length > 0 && o.filter(c => c.topic === t && c.request.method === "wc_sessionRequest").forEach(c => {
                this.events.emit(Nt("session_request", c.request.id), {
                    error: s
                })
            }
            )
        }
        ,
        this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === Ei.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = Ei.active,
                this.client.events.emit("session_request", t)
            } catch (s) {
                this.client.logger.error(s)
            }
        }
        ,
        this.onPairingCreated = t => {
            if (t.active)
                return;
            const s = this.client.proposal.getAll().find(o => o.pairingTopic === t.topic);
            s && this.onSessionProposeRequest(t.topic, Fn("wc_sessionPropose", {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties
            }, s.id))
        }
        ,
        this.isValidConnect = async t => {
            if (!vr(t)) {
                const {message: p} = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(p)
            }
            const {pairingTopic: s, requiredNamespaces: o, optionalNamespaces: c, sessionProperties: d, relays: f} = t;
            if (ar(s) || await this.isValidPairingTopic(s),
            !L3(f, !0)) {
                const {message: p} = ce("MISSING_OR_INVALID", `connect() relays: ${f}`);
                throw new Error(p)
            }
            !ar(o) && xs(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"),
            !ar(c) && xs(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"),
            ar(d) || this.validateSessionProps(d, "sessionProperties")
        }
        ,
        this.validateNamespaces = (t, s) => {
            const o = $3(t, "connect()", s);
            if (o)
                throw new Error(o.message)
        }
        ,
        this.isValidApprove = async t => {
            if (!vr(t))
                throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {id: s, namespaces: o, relayProtocol: c, sessionProperties: d} = t;
            await this.isValidProposalId(s);
            const f = this.client.proposal.get(s)
              , p = Jc(o, "approve()");
            if (p)
                throw new Error(p.message);
            const g = Uf(f.requiredNamespaces, o, "approve()");
            if (g)
                throw new Error(g.message);
            if (!Vt(c, !0)) {
                const {message: v} = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                throw new Error(v)
            }
            ar(d) || this.validateSessionProps(d, "sessionProperties")
        }
        ,
        this.isValidReject = async t => {
            if (!vr(t)) {
                const {message: c} = ce("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(c)
            }
            const {id: s, reason: o} = t;
            if (await this.isValidProposalId(s),
            !M3(o)) {
                const {message: c} = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
                throw new Error(c)
            }
        }
        ,
        this.isValidSessionSettleRequest = t => {
            if (!vr(t)) {
                const {message: g} = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(g)
            }
            const {relay: s, controller: o, namespaces: c, expiry: d} = t;
            if (!Ep(s)) {
                const {message: g} = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(g)
            }
            const f = P3(o, "onSessionSettleRequest()");
            if (f)
                throw new Error(f.message);
            const p = Jc(c, "onSessionSettleRequest()");
            if (p)
                throw new Error(p.message);
            if (ji(d)) {
                const {message: g} = ce("EXPIRED", "onSessionSettleRequest()");
                throw new Error(g)
            }
        }
        ,
        this.isValidUpdate = async t => {
            if (!vr(t)) {
                const {message: p} = ce("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(p)
            }
            const {topic: s, namespaces: o} = t;
            await this.isValidSessionTopic(s);
            const c = this.client.session.get(s)
              , d = Jc(o, "update()");
            if (d)
                throw new Error(d.message);
            const f = Uf(c.requiredNamespaces, o, "update()");
            if (f)
                throw new Error(f.message)
        }
        ,
        this.isValidExtend = async t => {
            if (!vr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionTopic(s)
        }
        ,
        this.isValidRequest = async t => {
            if (!vr(t)) {
                const {message: p} = ce("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(p)
            }
            const {topic: s, request: o, chainId: c, expiry: d} = t;
            await this.isValidSessionTopic(s);
            const {namespaces: f} = this.client.session.get(s);
            if (!Lf(f, c)) {
                const {message: p} = ce("MISSING_OR_INVALID", `request() chainId: ${c}`);
                throw new Error(p)
            }
            if (!j3(o)) {
                const {message: p} = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
                throw new Error(p)
            }
            if (!z3(f, c, o.method)) {
                const {message: p} = ce("MISSING_OR_INVALID", `request() method: ${o.method}`);
                throw new Error(p)
            }
            if (d && !k3(d, ou)) {
                const {message: p} = ce("MISSING_OR_INVALID", `request() expiry: ${d}. Expiry must be a number (in seconds) between ${ou.min} and ${ou.max}`);
                throw new Error(p)
            }
        }
        ,
        this.isValidRespond = async t => {
            var s;
            if (!vr(t)) {
                const {message: d} = ce("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(d)
            }
            const {topic: o, response: c} = t;
            try {
                await this.isValidSessionTopic(o)
            } catch (d) {
                throw (s = t == null ? void 0 : t.response) != null && s.id && this.cleanupAfterResponse(t),
                d
            }
            if (!q3(c)) {
                const {message: d} = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(c)}`);
                throw new Error(d)
            }
        }
        ,
        this.isValidPing = async t => {
            if (!vr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ,
        this.isValidEmit = async t => {
            if (!vr(t)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(f)
            }
            const {topic: s, event: o, chainId: c} = t;
            await this.isValidSessionTopic(s);
            const {namespaces: d} = this.client.session.get(s);
            if (!Lf(d, c)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                throw new Error(f)
            }
            if (!F3(o)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
            if (!H3(d, c, o.name)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
        }
        ,
        this.isValidDisconnect = async t => {
            if (!vr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ,
        this.getVerifyContext = async (t, s) => {
            const o = {
                verified: {
                    verifyUrl: s.verifyUrl || jn,
                    validation: "UNKNOWN",
                    origin: s.url || ""
                }
            };
            try {
                const c = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: s.verifyUrl
                });
                c && (o.verified.origin = c.origin,
                o.verified.isScam = c.isScam,
                o.verified.validation = c.origin === new URL(s.url).origin ? "VALID" : "INVALID")
            } catch (c) {
                this.client.logger.info(c)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`),
            o
        }
        ,
        this.validateSessionProps = (t, s) => {
            Object.values(t).forEach(o => {
                if (!Vt(o, !1)) {
                    const {message: c} = ce("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
                    throw new Error(c)
                }
            }
            )
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Zt.message, async e => {
            const {topic: t, message: s} = e;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
                return;
            const o = await this.client.core.crypto.decode(t, s);
            try {
                Qu(o) ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : va(o) ? (await this.client.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }),
                this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: o
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(qr.expired, async e => {
            const {topic: t, id: s} = bp(e.target);
            if (s && this.client.pendingRequest.keys.includes(s))
                return await this.deletePendingSessionRequest(s, ce("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: t
            })) : s && (await this.deleteProposal(s, !0),
            this.client.events.emit("proposal_expire", {
                id: s
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(bs.create, e => this.onPairingCreated(e))
    }
    isValidPairingTopic(e) {
        if (!Vt(e, !1)) {
            const {message: t} = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.core.pairing.pairings.get(e).expiry)) {
            const {message: t} = ce("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(e) {
        if (!Vt(e, !1)) {
            const {message: t} = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.session.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.session.get(e).expiry)) {
            await this.deleteSession({
                topic: e
            });
            const {message: t} = ce("EXPIRED", `session topic: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.crypto.keychain.has(e)) {
            const {message: t} = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
            throw await this.deleteSession({
                topic: e
            }),
            new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
        else if (Vt(e, !1)) {
            const {message: t} = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        } else {
            const {message: t} = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
    }
    async isValidProposalId(e) {
        if (!U3(e)) {
            const {message: t} = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const {message: t} = ce("EXPIRED", `proposal id: ${e}`);
            throw new Error(t)
        }
    }
}
class UI extends wa {
    constructor(e, t) {
        super(e, t, II, eh),
        this.core = e,
        this.logger = t
    }
}
let MI = class extends wa {
    constructor(e, t) {
        super(e, t, xI, eh),
        this.core = e,
        this.logger = t
    }
}
;
class jI extends wa {
    constructor(e, t) {
        super(e, t, PI, eh, s => s.id),
        this.core = e,
        this.logger = t
    }
}
let qI = class ig extends o6 {
    constructor(e) {
        super(e),
        this.protocol = Zp,
        this.version = eg,
        this.name = su.name,
        this.events = new Fr.EventEmitter,
        this.on = (s, o) => this.events.on(s, o),
        this.once = (s, o) => this.events.once(s, o),
        this.off = (s, o) => this.events.off(s, o),
        this.removeListener = (s, o) => this.events.removeListener(s, o),
        this.removeAllListeners = s => this.events.removeAllListeners(s),
        this.connect = async s => {
            try {
                return await this.engine.connect(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.pair = async s => {
            try {
                return await this.engine.pair(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.approve = async s => {
            try {
                return await this.engine.approve(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.reject = async s => {
            try {
                return await this.engine.reject(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.update = async s => {
            try {
                return await this.engine.update(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.extend = async s => {
            try {
                return await this.engine.extend(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.request = async s => {
            try {
                return await this.engine.request(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.respond = async s => {
            try {
                return await this.engine.respond(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.ping = async s => {
            try {
                return await this.engine.ping(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.emit = async s => {
            try {
                return await this.engine.emit(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.disconnect = async s => {
            try {
                return await this.engine.disconnect(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.find = s => {
            try {
                return this.engine.find(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (s) {
                throw this.logger.error(s.message),
                s
            }
        }
        ,
        this.name = (e == null ? void 0 : e.name) || su.name,
        this.metadata = (e == null ? void 0 : e.metadata) || QE();
        const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : da(pa({
            level: (e == null ? void 0 : e.logger) || su.logger
        }));
        this.core = (e == null ? void 0 : e.core) || new SI(e),
        this.logger = br(t, this.name),
        this.session = new MI(this.core,this.logger),
        this.proposal = new UI(this.core,this.logger),
        this.pendingRequest = new jI(this.core,this.logger),
        this.engine = new LI(this)
    }
    static async init(e) {
        const t = new ig(e);
        return await t.initialize(),
        t
    }
    get context() {
        return wr(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e
        }
    }
}
;
var Au = {
    exports: {}
};
(function(i, e) {
    var t = typeof self < "u" ? self : Yr
      , s = function() {
        function c() {
            this.fetch = !1,
            this.DOMException = t.DOMException
        }
        return c.prototype = t,
        new c
    }();
    (function(c) {
        (function(d) {
            var f = {
                searchParams: "URLSearchParams"in c,
                iterable: "Symbol"in c && "iterator"in Symbol,
                blob: "FileReader"in c && "Blob"in c && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in c,
                arrayBuffer: "ArrayBuffer"in c
            };
            function p(I) {
                return I && DataView.prototype.isPrototypeOf(I)
            }
            if (f.arrayBuffer)
                var g = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , v = ArrayBuffer.isView || function(I) {
                    return I && g.indexOf(Object.prototype.toString.call(I)) > -1
                }
                ;
            function S(I) {
                if (typeof I != "string" && (I = String(I)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(I))
                    throw new TypeError("Invalid character in header field name");
                return I.toLowerCase()
            }
            function P(I) {
                return typeof I != "string" && (I = String(I)),
                I
            }
            function A(I) {
                var T = {
                    next: function() {
                        var te = I.shift();
                        return {
                            done: te === void 0,
                            value: te
                        }
                    }
                };
                return f.iterable && (T[Symbol.iterator] = function() {
                    return T
                }
                ),
                T
            }
            function O(I) {
                this.map = {},
                I instanceof O ? I.forEach(function(T, te) {
                    this.append(te, T)
                }, this) : Array.isArray(I) ? I.forEach(function(T) {
                    this.append(T[0], T[1])
                }, this) : I && Object.getOwnPropertyNames(I).forEach(function(T) {
                    this.append(T, I[T])
                }, this)
            }
            O.prototype.append = function(I, T) {
                I = S(I),
                T = P(T);
                var te = this.map[I];
                this.map[I] = te ? te + ", " + T : T
            }
            ,
            O.prototype.delete = function(I) {
                delete this.map[S(I)]
            }
            ,
            O.prototype.get = function(I) {
                return I = S(I),
                this.has(I) ? this.map[I] : null
            }
            ,
            O.prototype.has = function(I) {
                return this.map.hasOwnProperty(S(I))
            }
            ,
            O.prototype.set = function(I, T) {
                this.map[S(I)] = P(T)
            }
            ,
            O.prototype.forEach = function(I, T) {
                for (var te in this.map)
                    this.map.hasOwnProperty(te) && I.call(T, this.map[te], te, this)
            }
            ,
            O.prototype.keys = function() {
                var I = [];
                return this.forEach(function(T, te) {
                    I.push(te)
                }),
                A(I)
            }
            ,
            O.prototype.values = function() {
                var I = [];
                return this.forEach(function(T) {
                    I.push(T)
                }),
                A(I)
            }
            ,
            O.prototype.entries = function() {
                var I = [];
                return this.forEach(function(T, te) {
                    I.push([te, T])
                }),
                A(I)
            }
            ,
            f.iterable && (O.prototype[Symbol.iterator] = O.prototype.entries);
            function K(I) {
                if (I.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                I.bodyUsed = !0
            }
            function B(I) {
                return new Promise(function(T, te) {
                    I.onload = function() {
                        T(I.result)
                    }
                    ,
                    I.onerror = function() {
                        te(I.error)
                    }
                }
                )
            }
            function ee(I) {
                var T = new FileReader
                  , te = B(T);
                return T.readAsArrayBuffer(I),
                te
            }
            function $(I) {
                var T = new FileReader
                  , te = B(T);
                return T.readAsText(I),
                te
            }
            function U(I) {
                for (var T = new Uint8Array(I), te = new Array(T.length), X = 0; X < T.length; X++)
                    te[X] = String.fromCharCode(T[X]);
                return te.join("")
            }
            function w(I) {
                if (I.slice)
                    return I.slice(0);
                var T = new Uint8Array(I.byteLength);
                return T.set(new Uint8Array(I)),
                T.buffer
            }
            function E() {
                return this.bodyUsed = !1,
                this._initBody = function(I) {
                    this._bodyInit = I,
                    I ? typeof I == "string" ? this._bodyText = I : f.blob && Blob.prototype.isPrototypeOf(I) ? this._bodyBlob = I : f.formData && FormData.prototype.isPrototypeOf(I) ? this._bodyFormData = I : f.searchParams && URLSearchParams.prototype.isPrototypeOf(I) ? this._bodyText = I.toString() : f.arrayBuffer && f.blob && p(I) ? (this._bodyArrayBuffer = w(I.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(I) || v(I)) ? this._bodyArrayBuffer = w(I) : this._bodyText = I = Object.prototype.toString.call(I) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof I == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(I) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                f.blob && (this.blob = function() {
                    var I = K(this);
                    if (I)
                        return I;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? K(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ee)
                }
                ),
                this.text = function() {
                    var I = K(this);
                    if (I)
                        return I;
                    if (this._bodyBlob)
                        return $(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(U(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                f.formData && (this.formData = function() {
                    return this.text().then(V)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var D = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function u(I) {
                var T = I.toUpperCase();
                return D.indexOf(T) > -1 ? T : I
            }
            function b(I, T) {
                T = T || {};
                var te = T.body;
                if (I instanceof b) {
                    if (I.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = I.url,
                    this.credentials = I.credentials,
                    T.headers || (this.headers = new O(I.headers)),
                    this.method = I.method,
                    this.mode = I.mode,
                    this.signal = I.signal,
                    !te && I._bodyInit != null && (te = I._bodyInit,
                    I.bodyUsed = !0)
                } else
                    this.url = String(I);
                if (this.credentials = T.credentials || this.credentials || "same-origin",
                (T.headers || !this.headers) && (this.headers = new O(T.headers)),
                this.method = u(T.method || this.method || "GET"),
                this.mode = T.mode || this.mode || null,
                this.signal = T.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && te)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(te)
            }
            b.prototype.clone = function() {
                return new b(this,{
                    body: this._bodyInit
                })
            }
            ;
            function V(I) {
                var T = new FormData;
                return I.trim().split("&").forEach(function(te) {
                    if (te) {
                        var X = te.split("=")
                          , k = X.shift().replace(/\+/g, " ")
                          , W = X.join("=").replace(/\+/g, " ");
                        T.append(decodeURIComponent(k), decodeURIComponent(W))
                    }
                }),
                T
            }
            function G(I) {
                var T = new O
                  , te = I.replace(/\r?\n[\t ]+/g, " ");
                return te.split(/\r?\n/).forEach(function(X) {
                    var k = X.split(":")
                      , W = k.shift().trim();
                    if (W) {
                        var re = k.join(":").trim();
                        T.append(W, re)
                    }
                }),
                T
            }
            E.call(b.prototype);
            function oe(I, T) {
                T || (T = {}),
                this.type = "default",
                this.status = T.status === void 0 ? 200 : T.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in T ? T.statusText : "OK",
                this.headers = new O(T.headers),
                this.url = T.url || "",
                this._initBody(I)
            }
            E.call(oe.prototype),
            oe.prototype.clone = function() {
                return new oe(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new O(this.headers),
                    url: this.url
                })
            }
            ,
            oe.error = function() {
                var I = new oe(null,{
                    status: 0,
                    statusText: ""
                });
                return I.type = "error",
                I
            }
            ;
            var pe = [301, 302, 303, 307, 308];
            oe.redirect = function(I, T) {
                if (pe.indexOf(T) === -1)
                    throw new RangeError("Invalid status code");
                return new oe(null,{
                    status: T,
                    headers: {
                        location: I
                    }
                })
            }
            ,
            d.DOMException = c.DOMException;
            try {
                new d.DOMException
            } catch {
                d.DOMException = function(T, te) {
                    this.message = T,
                    this.name = te;
                    var X = Error(T);
                    this.stack = X.stack
                }
                ,
                d.DOMException.prototype = Object.create(Error.prototype),
                d.DOMException.prototype.constructor = d.DOMException
            }
            function ge(I, T) {
                return new Promise(function(te, X) {
                    var k = new b(I,T);
                    if (k.signal && k.signal.aborted)
                        return X(new d.DOMException("Aborted","AbortError"));
                    var W = new XMLHttpRequest;
                    function re() {
                        W.abort()
                    }
                    W.onload = function() {
                        var ne = {
                            status: W.status,
                            statusText: W.statusText,
                            headers: G(W.getAllResponseHeaders() || "")
                        };
                        ne.url = "responseURL"in W ? W.responseURL : ne.headers.get("X-Request-URL");
                        var De = "response"in W ? W.response : W.responseText;
                        te(new oe(De,ne))
                    }
                    ,
                    W.onerror = function() {
                        X(new TypeError("Network request failed"))
                    }
                    ,
                    W.ontimeout = function() {
                        X(new TypeError("Network request failed"))
                    }
                    ,
                    W.onabort = function() {
                        X(new d.DOMException("Aborted","AbortError"))
                    }
                    ,
                    W.open(k.method, k.url, !0),
                    k.credentials === "include" ? W.withCredentials = !0 : k.credentials === "omit" && (W.withCredentials = !1),
                    "responseType"in W && f.blob && (W.responseType = "blob"),
                    k.headers.forEach(function(ne, De) {
                        W.setRequestHeader(De, ne)
                    }),
                    k.signal && (k.signal.addEventListener("abort", re),
                    W.onreadystatechange = function() {
                        W.readyState === 4 && k.signal.removeEventListener("abort", re)
                    }
                    ),
                    W.send(typeof k._bodyInit > "u" ? null : k._bodyInit)
                }
                )
            }
            return ge.polyfill = !0,
            c.fetch || (c.fetch = ge,
            c.Headers = O,
            c.Request = b,
            c.Response = oe),
            d.Headers = O,
            d.Request = b,
            d.Response = oe,
            d.fetch = ge,
            Object.defineProperty(d, "__esModule", {
                value: !0
            }),
            d
        }
        )({})
    }
    )(s),
    s.fetch.ponyfill = !0,
    delete s.fetch.polyfill;
    var o = s;
    e = o.fetch,
    e.default = o.fetch,
    e.fetch = o.fetch,
    e.Headers = o.Headers,
    e.Request = o.Request,
    e.Response = o.Response,
    i.exports = e
}
)(Au, Au.exports);
var FI = Au.exports;
const Od = Cs(FI);
var zI = Object.defineProperty
  , HI = Object.defineProperties
  , BI = Object.getOwnPropertyDescriptors
  , Pd = Object.getOwnPropertySymbols
  , KI = Object.prototype.hasOwnProperty
  , kI = Object.prototype.propertyIsEnumerable
  , Cd = (i, e, t) => e in i ? zI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Ad = (i, e) => {
    for (var t in e || (e = {}))
        KI.call(e, t) && Cd(i, t, e[t]);
    if (Pd)
        for (var t of Pd(e))
            kI.call(e, t) && Cd(i, t, e[t]);
    return i
}
  , Rd = (i, e) => HI(i, BI(e));
const VI = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , WI = "POST"
  , Td = {
    headers: VI,
    method: WI
}
  , Nd = 10;
let Hi = class {
    constructor(e, t=!1) {
        if (this.url = e,
        this.disableProviderPing = t,
        this.events = new Fr.EventEmitter,
        this.isAvailable = !1,
        this.registering = !1,
        !td(e))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        this.url = e,
        this.disableProviderPing = t
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e=this.url) {
        await this.register(e)
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose()
    }
    async send(e) {
        this.isAvailable || await this.register();
        try {
            const t = cn(e)
              , s = await (await Od(this.url, Rd(Ad({}, Td), {
                body: t
            }))).json();
            this.onPayload({
                data: s
            })
        } catch (t) {
            this.onError(e.id, t)
        }
    }
    async register(e=this.url) {
        if (!td(e))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise( (s, o) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", () => {
                    if (this.resetMaxListeners(),
                    typeof this.isAvailable > "u")
                        return o(new Error("HTTP connection is missing or invalid"));
                    s()
                }
                )
            }
            )
        }
        this.url = e,
        this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const t = cn({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Od(e, Rd(Ad({}, Td), {
                    body: t
                }))
            }
            this.onOpen()
        } catch (t) {
            const s = this.parseError(t);
            throw this.events.emit("register_error", s),
            this.onClose(),
            s
        }
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(e) {
        if (typeof e.data > "u")
            return;
        const t = typeof e.data == "string" ? $s(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t)
          , o = s.message || s.toString()
          , c = ya(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t=this.url) {
        return $p(e, t, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Nd && this.events.setMaxListeners(Nd)
    }
}
;
const $d = "error"
  , GI = "wss://relay.walletconnect.com"
  , YI = "wc"
  , JI = "universal_provider"
  , Ld = `${YI}@2:${JI}:`
  , QI = "https://rpc.walletconnect.com/v1/"
  , xi = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Ru = {
    exports: {}
};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(i, e) {
    (function() {
        var t, s = "4.17.21", o = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", g = 500, v = "__lodash_placeholder__", S = 1, P = 2, A = 4, O = 1, K = 2, B = 1, ee = 2, $ = 4, U = 8, w = 16, E = 32, D = 64, u = 128, b = 256, V = 512, G = 30, oe = "...", pe = 800, ge = 16, I = 1, T = 2, te = 3, X = 1 / 0, k = 9007199254740991, W = 17976931348623157e292, re = NaN, ne = 4294967295, De = ne - 1, ae = ne >>> 1, Se = [["ary", u], ["bind", B], ["bindKey", ee], ["curry", U], ["curryRight", w], ["flip", V], ["partial", E], ["partialRight", D], ["rearg", b]], le = "[object Arguments]", Ae = "[object Array]", z = "[object AsyncFunction]", F = "[object Boolean]", L = "[object Date]", l = "[object DOMException]", R = "[object Error]", se = "[object Function]", he = "[object GeneratorFunction]", Ee = "[object Map]", He = "[object Number]", ke = "[object Null]", Me = "[object Object]", dt = "[object Promise]", pt = "[object Proxy]", qe = "[object RegExp]", Ie = "[object Set]", Ne = "[object String]", $e = "[object Symbol]", Fe = "[object Undefined]", Oe = "[object WeakMap]", Le = "[object WeakSet]", _e = "[object ArrayBuffer]", Pe = "[object DataView]", Be = "[object Float32Array]", xe = "[object Float64Array]", Ve = "[object Int8Array]", Ge = "[object Int16Array]", Ze = "[object Int32Array]", et = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", er = "[object Uint16Array]", hr = "[object Uint32Array]", Jr = /\b__p \+= '';/g, tr = /\b(__p \+=) '' \+/g, oi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Oi = /&(?:amp|lt|gt|quot|#39);/g, Bi = /[&<>"']/g, Et = RegExp(Oi.source), gt = RegExp(Bi.source), Dt = /<%-([\s\S]+?)%>/g, St = /<%([\s\S]+?)%>/g, bt = /<%=([\s\S]+?)%>/g, yt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $t = /^\w*$/, Lt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, It = /[\\^$.*+?()[\]{}|]/g, Ut = RegExp(It.source), xt = /^\s+/, Ct = /\s/, Ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ut = /\{\n\/\* \[wrapped with (.+)\] \*/, Mt = /,? & /, jt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ba = /[()=,{}\[\]\/\s]/, _a = /\\(\\)?/g, Ea = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ar = /\w*$/, Da = /^[-+]0x[0-9a-f]+$/i, Sa = /^0b[01]+$/i, Ia = /^\[object .+?Constructor\]$/, xa = /^0o[0-7]+$/i, Oa = /^(?:0|[1-9]\d*)$/, ai = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, dn = /($^)/, Pa = /['\n\r\u2028\u2029\\]/g, pn = "\\ud800-\\udfff", Ca = "\\u0300-\\u036f", Aa = "\\ufe20-\\ufe2f", gn = "\\u20d0-\\u20ff", Ms = Ca + Aa + gn, js = "\\u2700-\\u27bf", zr = "a-z\\xdf-\\xf6\\xf8-\\xff", Ra = "\\xac\\xb1\\xd7\\xf7", Ta = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Na = "\\u2000-\\u206f", $a = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fs = "\\ufe0e\\ufe0f", Ki = Ra + Ta + Na + $a, Wn = "['’]", ki = "[" + pn + "]", Gn = "[" + Ki + "]", Vi = "[" + Ms + "]", zs = "\\d+", La = "[" + js + "]", Hs = "[" + zr + "]", Bs = "[^" + pn + Ki + zs + js + zr + qs + "]", yn = "\\ud83c[\\udffb-\\udfff]", Ua = "(?:" + Vi + "|" + yn + ")", Ks = "[^" + pn + "]", vn = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", _r = "[" + qs + "]", ks = "\\u200d", Vs = "(?:" + Hs + "|" + Bs + ")", Qr = "(?:" + _r + "|" + Bs + ")", Ws = "(?:" + Wn + "(?:d|ll|m|re|s|t|ve))?", Gs = "(?:" + Wn + "(?:D|LL|M|RE|S|T|VE))?", Ys = Ua + "?", Js = "[" + Fs + "]?", Ma = "(?:" + ks + "(?:" + [Ks, vn, Pi].join("|") + ")" + Js + Ys + ")*", ci = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Qs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xs = Js + Ys + Ma, mn = "(?:" + [La, vn, Pi].join("|") + ")" + Xs, ja = "(?:" + [Ks + Vi + "?", Vi, vn, Pi, ki].join("|") + ")", Yn = RegExp(Wn, "g"), qa = RegExp(Vi, "g"), wn = RegExp(yn + "(?=" + yn + ")|" + ja + Xs, "g"), Zs = RegExp([_r + "?" + Hs + "+" + Ws + "(?=" + [Gn, _r, "$"].join("|") + ")", Qr + "+" + Gs + "(?=" + [Gn, _r + Vs, "$"].join("|") + ")", _r + "?" + Vs + "+" + Ws, _r + "+" + Gs, Qs, ci, zs, mn].join("|"), "g"), eo = RegExp("[" + ks + pn + Ms + Fs + "]"), Wi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, to = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Fa = -1, st = {};
        st[Be] = st[xe] = st[Ve] = st[Ge] = st[Ze] = st[et] = st[Je] = st[er] = st[hr] = !0,
        st[le] = st[Ae] = st[_e] = st[F] = st[Pe] = st[L] = st[R] = st[se] = st[Ee] = st[He] = st[Me] = st[qe] = st[Ie] = st[Ne] = st[Oe] = !1;
        var nt = {};
        nt[le] = nt[Ae] = nt[_e] = nt[Pe] = nt[F] = nt[L] = nt[Be] = nt[xe] = nt[Ve] = nt[Ge] = nt[Ze] = nt[Ee] = nt[He] = nt[Me] = nt[qe] = nt[Ie] = nt[Ne] = nt[$e] = nt[et] = nt[Je] = nt[er] = nt[hr] = !0,
        nt[R] = nt[se] = nt[Oe] = !1;
        var x = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }
          , M = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , Z = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , fe = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , ot = parseFloat
          , Re = parseInt
          , lt = typeof ms == "object" && ms && ms.Object === Object && ms
          , qt = typeof self == "object" && self && self.Object === Object && self
          , Qe = lt || qt || Function("return this")()
          , at = e && !e.nodeType && e
          , At = at && !0 && i && !i.nodeType && i
          , lr = At && At.exports === at
          , Ft = lr && lt.process
          , ft = function() {
            try {
                var j = At && At.require && At.require("util").types;
                return j || Ft && Ft.binding && Ft.binding("util")
            } catch {}
        }()
          , rr = ft && ft.isArrayBuffer
          , Hr = ft && ft.isDate
          , Rr = ft && ft.isMap
          , Xr = ft && ft.isRegExp
          , Jn = ft && ft.isSet
          , Gi = ft && ft.isTypedArray;
        function Bt(j, Y, H) {
            switch (H.length) {
            case 0:
                return j.call(Y);
            case 1:
                return j.call(Y, H[0]);
            case 2:
                return j.call(Y, H[0], H[1]);
            case 3:
                return j.call(Y, H[0], H[1], H[2])
            }
            return j.apply(Y, H)
        }
        function og(j, Y, H, de) {
            for (var Ce = -1, tt = j == null ? 0 : j.length; ++Ce < tt; ) {
                var zt = j[Ce];
                Y(de, zt, H(zt), j)
            }
            return de
        }
        function Tr(j, Y) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de && Y(j[H], H, j) !== !1; )
                ;
            return j
        }
        function ag(j, Y) {
            for (var H = j == null ? 0 : j.length; H-- && Y(j[H], H, j) !== !1; )
                ;
            return j
        }
        function ih(j, Y) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de; )
                if (!Y(j[H], H, j))
                    return !1;
            return !0
        }
        function Ci(j, Y) {
            for (var H = -1, de = j == null ? 0 : j.length, Ce = 0, tt = []; ++H < de; ) {
                var zt = j[H];
                Y(zt, H, j) && (tt[Ce++] = zt)
            }
            return tt
        }
        function ro(j, Y) {
            var H = j == null ? 0 : j.length;
            return !!H && bn(j, Y, 0) > -1
        }
        function za(j, Y, H) {
            for (var de = -1, Ce = j == null ? 0 : j.length; ++de < Ce; )
                if (H(Y, j[de]))
                    return !0;
            return !1
        }
        function vt(j, Y) {
            for (var H = -1, de = j == null ? 0 : j.length, Ce = Array(de); ++H < de; )
                Ce[H] = Y(j[H], H, j);
            return Ce
        }
        function Ai(j, Y) {
            for (var H = -1, de = Y.length, Ce = j.length; ++H < de; )
                j[Ce + H] = Y[H];
            return j
        }
        function Ha(j, Y, H, de) {
            var Ce = -1
              , tt = j == null ? 0 : j.length;
            for (de && tt && (H = j[++Ce]); ++Ce < tt; )
                H = Y(H, j[Ce], Ce, j);
            return H
        }
        function cg(j, Y, H, de) {
            var Ce = j == null ? 0 : j.length;
            for (de && Ce && (H = j[--Ce]); Ce--; )
                H = Y(H, j[Ce], Ce, j);
            return H
        }
        function Ba(j, Y) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de; )
                if (Y(j[H], H, j))
                    return !0;
            return !1
        }
        var ug = Ka("length");
        function hg(j) {
            return j.split("")
        }
        function lg(j) {
            return j.match(jt) || []
        }
        function nh(j, Y, H) {
            var de;
            return H(j, function(Ce, tt, zt) {
                if (Y(Ce, tt, zt))
                    return de = tt,
                    !1
            }),
            de
        }
        function io(j, Y, H, de) {
            for (var Ce = j.length, tt = H + (de ? 1 : -1); de ? tt-- : ++tt < Ce; )
                if (Y(j[tt], tt, j))
                    return tt;
            return -1
        }
        function bn(j, Y, H) {
            return Y === Y ? Dg(j, Y, H) : io(j, sh, H)
        }
        function fg(j, Y, H, de) {
            for (var Ce = H - 1, tt = j.length; ++Ce < tt; )
                if (de(j[Ce], Y))
                    return Ce;
            return -1
        }
        function sh(j) {
            return j !== j
        }
        function oh(j, Y) {
            var H = j == null ? 0 : j.length;
            return H ? Va(j, Y) / H : re
        }
        function Ka(j) {
            return function(Y) {
                return Y == null ? t : Y[j]
            }
        }
        function ka(j) {
            return function(Y) {
                return j == null ? t : j[Y]
            }
        }
        function ah(j, Y, H, de, Ce) {
            return Ce(j, function(tt, zt, ct) {
                H = de ? (de = !1,
                tt) : Y(H, tt, zt, ct)
            }),
            H
        }
        function dg(j, Y) {
            var H = j.length;
            for (j.sort(Y); H--; )
                j[H] = j[H].value;
            return j
        }
        function Va(j, Y) {
            for (var H, de = -1, Ce = j.length; ++de < Ce; ) {
                var tt = Y(j[de]);
                tt !== t && (H = H === t ? tt : H + tt)
            }
            return H
        }
        function Wa(j, Y) {
            for (var H = -1, de = Array(j); ++H < j; )
                de[H] = Y(H);
            return de
        }
        function pg(j, Y) {
            return vt(Y, function(H) {
                return [H, j[H]]
            })
        }
        function ch(j) {
            return j && j.slice(0, fh(j) + 1).replace(xt, "")
        }
        function Er(j) {
            return function(Y) {
                return j(Y)
            }
        }
        function Ga(j, Y) {
            return vt(Y, function(H) {
                return j[H]
            })
        }
        function Qn(j, Y) {
            return j.has(Y)
        }
        function uh(j, Y) {
            for (var H = -1, de = j.length; ++H < de && bn(Y, j[H], 0) > -1; )
                ;
            return H
        }
        function hh(j, Y) {
            for (var H = j.length; H-- && bn(Y, j[H], 0) > -1; )
                ;
            return H
        }
        function gg(j, Y) {
            for (var H = j.length, de = 0; H--; )
                j[H] === Y && ++de;
            return de
        }
        var yg = ka(x)
          , vg = ka(M);
        function mg(j) {
            return "\\" + fe[j]
        }
        function wg(j, Y) {
            return j == null ? t : j[Y]
        }
        function _n(j) {
            return eo.test(j)
        }
        function bg(j) {
            return Wi.test(j)
        }
        function _g(j) {
            for (var Y, H = []; !(Y = j.next()).done; )
                H.push(Y.value);
            return H
        }
        function Ya(j) {
            var Y = -1
              , H = Array(j.size);
            return j.forEach(function(de, Ce) {
                H[++Y] = [Ce, de]
            }),
            H
        }
        function lh(j, Y) {
            return function(H) {
                return j(Y(H))
            }
        }
        function Ri(j, Y) {
            for (var H = -1, de = j.length, Ce = 0, tt = []; ++H < de; ) {
                var zt = j[H];
                (zt === Y || zt === v) && (j[H] = v,
                tt[Ce++] = H)
            }
            return tt
        }
        function no(j) {
            var Y = -1
              , H = Array(j.size);
            return j.forEach(function(de) {
                H[++Y] = de
            }),
            H
        }
        function Eg(j) {
            var Y = -1
              , H = Array(j.size);
            return j.forEach(function(de) {
                H[++Y] = [de, de]
            }),
            H
        }
        function Dg(j, Y, H) {
            for (var de = H - 1, Ce = j.length; ++de < Ce; )
                if (j[de] === Y)
                    return de;
            return -1
        }
        function Sg(j, Y, H) {
            for (var de = H + 1; de--; )
                if (j[de] === Y)
                    return de;
            return de
        }
        function En(j) {
            return _n(j) ? xg(j) : ug(j)
        }
        function Br(j) {
            return _n(j) ? Og(j) : hg(j)
        }
        function fh(j) {
            for (var Y = j.length; Y-- && Ct.test(j.charAt(Y)); )
                ;
            return Y
        }
        var Ig = ka(Z);
        function xg(j) {
            for (var Y = wn.lastIndex = 0; wn.test(j); )
                ++Y;
            return Y
        }
        function Og(j) {
            return j.match(wn) || []
        }
        function Pg(j) {
            return j.match(Zs) || []
        }
        var Cg = function j(Y) {
            Y = Y == null ? Qe : Dn.defaults(Qe.Object(), Y, Dn.pick(Qe, to));
            var H = Y.Array
              , de = Y.Date
              , Ce = Y.Error
              , tt = Y.Function
              , zt = Y.Math
              , ct = Y.Object
              , Ja = Y.RegExp
              , Ag = Y.String
              , Nr = Y.TypeError
              , so = H.prototype
              , Rg = tt.prototype
              , Sn = ct.prototype
              , oo = Y["__core-js_shared__"]
              , ao = Rg.toString
              , it = Sn.hasOwnProperty
              , Tg = 0
              , dh = function() {
                var r = /[^.]+$/.exec(oo && oo.keys && oo.keys.IE_PROTO || "");
                return r ? "Symbol(src)_1." + r : ""
            }()
              , co = Sn.toString
              , Ng = ao.call(ct)
              , $g = Qe._
              , Lg = Ja("^" + ao.call(it).replace(It, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , uo = lr ? Y.Buffer : t
              , Ti = Y.Symbol
              , ho = Y.Uint8Array
              , ph = uo ? uo.allocUnsafe : t
              , lo = lh(ct.getPrototypeOf, ct)
              , gh = ct.create
              , yh = Sn.propertyIsEnumerable
              , fo = so.splice
              , vh = Ti ? Ti.isConcatSpreadable : t
              , Xn = Ti ? Ti.iterator : t
              , Yi = Ti ? Ti.toStringTag : t
              , po = function() {
                try {
                    var r = en(ct, "defineProperty");
                    return r({}, "", {}),
                    r
                } catch {}
            }()
              , Ug = Y.clearTimeout !== Qe.clearTimeout && Y.clearTimeout
              , Mg = de && de.now !== Qe.Date.now && de.now
              , jg = Y.setTimeout !== Qe.setTimeout && Y.setTimeout
              , go = zt.ceil
              , yo = zt.floor
              , Qa = ct.getOwnPropertySymbols
              , qg = uo ? uo.isBuffer : t
              , mh = Y.isFinite
              , Fg = so.join
              , zg = lh(ct.keys, ct)
              , Ht = zt.max
              , Jt = zt.min
              , Hg = de.now
              , Bg = Y.parseInt
              , wh = zt.random
              , Kg = so.reverse
              , Xa = en(Y, "DataView")
              , Zn = en(Y, "Map")
              , Za = en(Y, "Promise")
              , In = en(Y, "Set")
              , es = en(Y, "WeakMap")
              , ts = en(ct, "create")
              , vo = es && new es
              , xn = {}
              , kg = tn(Xa)
              , Vg = tn(Zn)
              , Wg = tn(Za)
              , Gg = tn(In)
              , Yg = tn(es)
              , mo = Ti ? Ti.prototype : t
              , rs = mo ? mo.valueOf : t
              , bh = mo ? mo.toString : t;
            function m(r) {
                if (Pt(r) && !Te(r) && !(r instanceof Ye)) {
                    if (r instanceof $r)
                        return r;
                    if (it.call(r, "__wrapped__"))
                        return _l(r)
                }
                return new $r(r)
            }
            var On = function() {
                function r() {}
                return function(n) {
                    if (!_t(n))
                        return {};
                    if (gh)
                        return gh(n);
                    r.prototype = n;
                    var a = new r;
                    return r.prototype = t,
                    a
                }
            }();
            function wo() {}
            function $r(r, n) {
                this.__wrapped__ = r,
                this.__actions__ = [],
                this.__chain__ = !!n,
                this.__index__ = 0,
                this.__values__ = t
            }
            m.templateSettings = {
                escape: Dt,
                evaluate: St,
                interpolate: bt,
                variable: "",
                imports: {
                    _: m
                }
            },
            m.prototype = wo.prototype,
            m.prototype.constructor = m,
            $r.prototype = On(wo.prototype),
            $r.prototype.constructor = $r;
            function Ye(r) {
                this.__wrapped__ = r,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = ne,
                this.__views__ = []
            }
            function Jg() {
                var r = new Ye(this.__wrapped__);
                return r.__actions__ = fr(this.__actions__),
                r.__dir__ = this.__dir__,
                r.__filtered__ = this.__filtered__,
                r.__iteratees__ = fr(this.__iteratees__),
                r.__takeCount__ = this.__takeCount__,
                r.__views__ = fr(this.__views__),
                r
            }
            function Qg() {
                if (this.__filtered__) {
                    var r = new Ye(this);
                    r.__dir__ = -1,
                    r.__filtered__ = !0
                } else
                    r = this.clone(),
                    r.__dir__ *= -1;
                return r
            }
            function Xg() {
                var r = this.__wrapped__.value()
                  , n = this.__dir__
                  , a = Te(r)
                  , h = n < 0
                  , y = a ? r.length : 0
                  , _ = hy(0, y, this.__views__)
                  , C = _.start
                  , N = _.end
                  , q = N - C
                  , J = h ? N : C - 1
                  , Q = this.__iteratees__
                  , ie = Q.length
                  , ue = 0
                  , ye = Jt(q, this.__takeCount__);
                if (!a || !h && y == q && ye == q)
                    return Kh(r, this.__actions__);
                var we = [];
                e: for (; q-- && ue < ye; ) {
                    J += n;
                    for (var ze = -1, be = r[J]; ++ze < ie; ) {
                        var We = Q[ze]
                          , Xe = We.iteratee
                          , Ir = We.type
                          , sr = Xe(be);
                        if (Ir == T)
                            be = sr;
                        else if (!sr) {
                            if (Ir == I)
                                continue e;
                            break e
                        }
                    }
                    we[ue++] = be
                }
                return we
            }
            Ye.prototype = On(wo.prototype),
            Ye.prototype.constructor = Ye;
            function Ji(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function Zg() {
                this.__data__ = ts ? ts(null) : {},
                this.size = 0
            }
            function e0(r) {
                var n = this.has(r) && delete this.__data__[r];
                return this.size -= n ? 1 : 0,
                n
            }
            function t0(r) {
                var n = this.__data__;
                if (ts) {
                    var a = n[r];
                    return a === p ? t : a
                }
                return it.call(n, r) ? n[r] : t
            }
            function r0(r) {
                var n = this.__data__;
                return ts ? n[r] !== t : it.call(n, r)
            }
            function i0(r, n) {
                var a = this.__data__;
                return this.size += this.has(r) ? 0 : 1,
                a[r] = ts && n === t ? p : n,
                this
            }
            Ji.prototype.clear = Zg,
            Ji.prototype.delete = e0,
            Ji.prototype.get = t0,
            Ji.prototype.has = r0,
            Ji.prototype.set = i0;
            function ui(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function n0() {
                this.__data__ = [],
                this.size = 0
            }
            function s0(r) {
                var n = this.__data__
                  , a = bo(n, r);
                if (a < 0)
                    return !1;
                var h = n.length - 1;
                return a == h ? n.pop() : fo.call(n, a, 1),
                --this.size,
                !0
            }
            function o0(r) {
                var n = this.__data__
                  , a = bo(n, r);
                return a < 0 ? t : n[a][1]
            }
            function a0(r) {
                return bo(this.__data__, r) > -1
            }
            function c0(r, n) {
                var a = this.__data__
                  , h = bo(a, r);
                return h < 0 ? (++this.size,
                a.push([r, n])) : a[h][1] = n,
                this
            }
            ui.prototype.clear = n0,
            ui.prototype.delete = s0,
            ui.prototype.get = o0,
            ui.prototype.has = a0,
            ui.prototype.set = c0;
            function hi(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function u0() {
                this.size = 0,
                this.__data__ = {
                    hash: new Ji,
                    map: new (Zn || ui),
                    string: new Ji
                }
            }
            function h0(r) {
                var n = To(this, r).delete(r);
                return this.size -= n ? 1 : 0,
                n
            }
            function l0(r) {
                return To(this, r).get(r)
            }
            function f0(r) {
                return To(this, r).has(r)
            }
            function d0(r, n) {
                var a = To(this, r)
                  , h = a.size;
                return a.set(r, n),
                this.size += a.size == h ? 0 : 1,
                this
            }
            hi.prototype.clear = u0,
            hi.prototype.delete = h0,
            hi.prototype.get = l0,
            hi.prototype.has = f0,
            hi.prototype.set = d0;
            function Qi(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.__data__ = new hi; ++n < a; )
                    this.add(r[n])
            }
            function p0(r) {
                return this.__data__.set(r, p),
                this
            }
            function g0(r) {
                return this.__data__.has(r)
            }
            Qi.prototype.add = Qi.prototype.push = p0,
            Qi.prototype.has = g0;
            function Kr(r) {
                var n = this.__data__ = new ui(r);
                this.size = n.size
            }
            function y0() {
                this.__data__ = new ui,
                this.size = 0
            }
            function v0(r) {
                var n = this.__data__
                  , a = n.delete(r);
                return this.size = n.size,
                a
            }
            function m0(r) {
                return this.__data__.get(r)
            }
            function w0(r) {
                return this.__data__.has(r)
            }
            function b0(r, n) {
                var a = this.__data__;
                if (a instanceof ui) {
                    var h = a.__data__;
                    if (!Zn || h.length < o - 1)
                        return h.push([r, n]),
                        this.size = ++a.size,
                        this;
                    a = this.__data__ = new hi(h)
                }
                return a.set(r, n),
                this.size = a.size,
                this
            }
            Kr.prototype.clear = y0,
            Kr.prototype.delete = v0,
            Kr.prototype.get = m0,
            Kr.prototype.has = w0,
            Kr.prototype.set = b0;
            function _h(r, n) {
                var a = Te(r)
                  , h = !a && rn(r)
                  , y = !a && !h && Mi(r)
                  , _ = !a && !h && !y && Rn(r)
                  , C = a || h || y || _
                  , N = C ? Wa(r.length, Ag) : []
                  , q = N.length;
                for (var J in r)
                    (n || it.call(r, J)) && !(C && (J == "length" || y && (J == "offset" || J == "parent") || _ && (J == "buffer" || J == "byteLength" || J == "byteOffset") || pi(J, q))) && N.push(J);
                return N
            }
            function Eh(r) {
                var n = r.length;
                return n ? r[hc(0, n - 1)] : t
            }
            function _0(r, n) {
                return No(fr(r), Xi(n, 0, r.length))
            }
            function E0(r) {
                return No(fr(r))
            }
            function ec(r, n, a) {
                (a !== t && !kr(r[n], a) || a === t && !(n in r)) && li(r, n, a)
            }
            function is(r, n, a) {
                var h = r[n];
                (!(it.call(r, n) && kr(h, a)) || a === t && !(n in r)) && li(r, n, a)
            }
            function bo(r, n) {
                for (var a = r.length; a--; )
                    if (kr(r[a][0], n))
                        return a;
                return -1
            }
            function D0(r, n, a, h) {
                return Ni(r, function(y, _, C) {
                    n(h, y, a(y), C)
                }),
                h
            }
            function Dh(r, n) {
                return r && ei(n, Kt(n), r)
            }
            function S0(r, n) {
                return r && ei(n, pr(n), r)
            }
            function li(r, n, a) {
                n == "__proto__" && po ? po(r, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: a,
                    writable: !0
                }) : r[n] = a
            }
            function tc(r, n) {
                for (var a = -1, h = n.length, y = H(h), _ = r == null; ++a < h; )
                    y[a] = _ ? t : Lc(r, n[a]);
                return y
            }
            function Xi(r, n, a) {
                return r === r && (a !== t && (r = r <= a ? r : a),
                n !== t && (r = r >= n ? r : n)),
                r
            }
            function Lr(r, n, a, h, y, _) {
                var C, N = n & S, q = n & P, J = n & A;
                if (a && (C = y ? a(r, h, y, _) : a(r)),
                C !== t)
                    return C;
                if (!_t(r))
                    return r;
                var Q = Te(r);
                if (Q) {
                    if (C = fy(r),
                    !N)
                        return fr(r, C)
                } else {
                    var ie = Qt(r)
                      , ue = ie == se || ie == he;
                    if (Mi(r))
                        return Wh(r, N);
                    if (ie == Me || ie == le || ue && !y) {
                        if (C = q || ue ? {} : fl(r),
                        !N)
                            return q ? ty(r, S0(C, r)) : ey(r, Dh(C, r))
                    } else {
                        if (!nt[ie])
                            return y ? r : {};
                        C = dy(r, ie, N)
                    }
                }
                _ || (_ = new Kr);
                var ye = _.get(r);
                if (ye)
                    return ye;
                _.set(r, C),
                zl(r) ? r.forEach(function(be) {
                    C.add(Lr(be, n, a, be, r, _))
                }) : ql(r) && r.forEach(function(be, We) {
                    C.set(We, Lr(be, n, a, We, r, _))
                });
                var we = J ? q ? _c : bc : q ? pr : Kt
                  , ze = Q ? t : we(r);
                return Tr(ze || r, function(be, We) {
                    ze && (We = be,
                    be = r[We]),
                    is(C, We, Lr(be, n, a, We, r, _))
                }),
                C
            }
            function I0(r) {
                var n = Kt(r);
                return function(a) {
                    return Sh(a, r, n)
                }
            }
            function Sh(r, n, a) {
                var h = a.length;
                if (r == null)
                    return !h;
                for (r = ct(r); h--; ) {
                    var y = a[h]
                      , _ = n[y]
                      , C = r[y];
                    if (C === t && !(y in r) || !_(C))
                        return !1
                }
                return !0
            }
            function Ih(r, n, a) {
                if (typeof r != "function")
                    throw new Nr(d);
                return hs(function() {
                    r.apply(t, a)
                }, n)
            }
            function ns(r, n, a, h) {
                var y = -1
                  , _ = ro
                  , C = !0
                  , N = r.length
                  , q = []
                  , J = n.length;
                if (!N)
                    return q;
                a && (n = vt(n, Er(a))),
                h ? (_ = za,
                C = !1) : n.length >= o && (_ = Qn,
                C = !1,
                n = new Qi(n));
                e: for (; ++y < N; ) {
                    var Q = r[y]
                      , ie = a == null ? Q : a(Q);
                    if (Q = h || Q !== 0 ? Q : 0,
                    C && ie === ie) {
                        for (var ue = J; ue--; )
                            if (n[ue] === ie)
                                continue e;
                        q.push(Q)
                    } else
                        _(n, ie, h) || q.push(Q)
                }
                return q
            }
            var Ni = Xh(Zr)
              , xh = Xh(ic, !0);
            function x0(r, n) {
                var a = !0;
                return Ni(r, function(h, y, _) {
                    return a = !!n(h, y, _),
                    a
                }),
                a
            }
            function _o(r, n, a) {
                for (var h = -1, y = r.length; ++h < y; ) {
                    var _ = r[h]
                      , C = n(_);
                    if (C != null && (N === t ? C === C && !Sr(C) : a(C, N)))
                        var N = C
                          , q = _
                }
                return q
            }
            function O0(r, n, a, h) {
                var y = r.length;
                for (a = je(a),
                a < 0 && (a = -a > y ? 0 : y + a),
                h = h === t || h > y ? y : je(h),
                h < 0 && (h += y),
                h = a > h ? 0 : Bl(h); a < h; )
                    r[a++] = n;
                return r
            }
            function Oh(r, n) {
                var a = [];
                return Ni(r, function(h, y, _) {
                    n(h, y, _) && a.push(h)
                }),
                a
            }
            function Wt(r, n, a, h, y) {
                var _ = -1
                  , C = r.length;
                for (a || (a = gy),
                y || (y = []); ++_ < C; ) {
                    var N = r[_];
                    n > 0 && a(N) ? n > 1 ? Wt(N, n - 1, a, h, y) : Ai(y, N) : h || (y[y.length] = N)
                }
                return y
            }
            var rc = Zh()
              , Ph = Zh(!0);
            function Zr(r, n) {
                return r && rc(r, n, Kt)
            }
            function ic(r, n) {
                return r && Ph(r, n, Kt)
            }
            function Eo(r, n) {
                return Ci(n, function(a) {
                    return gi(r[a])
                })
            }
            function Zi(r, n) {
                n = Li(n, r);
                for (var a = 0, h = n.length; r != null && a < h; )
                    r = r[ti(n[a++])];
                return a && a == h ? r : t
            }
            function Ch(r, n, a) {
                var h = n(r);
                return Te(r) ? h : Ai(h, a(r))
            }
            function ir(r) {
                return r == null ? r === t ? Fe : ke : Yi && Yi in ct(r) ? uy(r) : Ey(r)
            }
            function nc(r, n) {
                return r > n
            }
            function P0(r, n) {
                return r != null && it.call(r, n)
            }
            function C0(r, n) {
                return r != null && n in ct(r)
            }
            function A0(r, n, a) {
                return r >= Jt(n, a) && r < Ht(n, a)
            }
            function sc(r, n, a) {
                for (var h = a ? za : ro, y = r[0].length, _ = r.length, C = _, N = H(_), q = 1 / 0, J = []; C--; ) {
                    var Q = r[C];
                    C && n && (Q = vt(Q, Er(n))),
                    q = Jt(Q.length, q),
                    N[C] = !a && (n || y >= 120 && Q.length >= 120) ? new Qi(C && Q) : t
                }
                Q = r[0];
                var ie = -1
                  , ue = N[0];
                e: for (; ++ie < y && J.length < q; ) {
                    var ye = Q[ie]
                      , we = n ? n(ye) : ye;
                    if (ye = a || ye !== 0 ? ye : 0,
                    !(ue ? Qn(ue, we) : h(J, we, a))) {
                        for (C = _; --C; ) {
                            var ze = N[C];
                            if (!(ze ? Qn(ze, we) : h(r[C], we, a)))
                                continue e
                        }
                        ue && ue.push(we),
                        J.push(ye)
                    }
                }
                return J
            }
            function R0(r, n, a, h) {
                return Zr(r, function(y, _, C) {
                    n(h, a(y), _, C)
                }),
                h
            }
            function ss(r, n, a) {
                n = Li(n, r),
                r = yl(r, n);
                var h = r == null ? r : r[ti(Mr(n))];
                return h == null ? t : Bt(h, r, a)
            }
            function Ah(r) {
                return Pt(r) && ir(r) == le
            }
            function T0(r) {
                return Pt(r) && ir(r) == _e
            }
            function N0(r) {
                return Pt(r) && ir(r) == L
            }
            function os(r, n, a, h, y) {
                return r === n ? !0 : r == null || n == null || !Pt(r) && !Pt(n) ? r !== r && n !== n : $0(r, n, a, h, os, y)
            }
            function $0(r, n, a, h, y, _) {
                var C = Te(r)
                  , N = Te(n)
                  , q = C ? Ae : Qt(r)
                  , J = N ? Ae : Qt(n);
                q = q == le ? Me : q,
                J = J == le ? Me : J;
                var Q = q == Me
                  , ie = J == Me
                  , ue = q == J;
                if (ue && Mi(r)) {
                    if (!Mi(n))
                        return !1;
                    C = !0,
                    Q = !1
                }
                if (ue && !Q)
                    return _ || (_ = new Kr),
                    C || Rn(r) ? ul(r, n, a, h, y, _) : ay(r, n, q, a, h, y, _);
                if (!(a & O)) {
                    var ye = Q && it.call(r, "__wrapped__")
                      , we = ie && it.call(n, "__wrapped__");
                    if (ye || we) {
                        var ze = ye ? r.value() : r
                          , be = we ? n.value() : n;
                        return _ || (_ = new Kr),
                        y(ze, be, a, h, _)
                    }
                }
                return ue ? (_ || (_ = new Kr),
                cy(r, n, a, h, y, _)) : !1
            }
            function L0(r) {
                return Pt(r) && Qt(r) == Ee
            }
            function oc(r, n, a, h) {
                var y = a.length
                  , _ = y
                  , C = !h;
                if (r == null)
                    return !_;
                for (r = ct(r); y--; ) {
                    var N = a[y];
                    if (C && N[2] ? N[1] !== r[N[0]] : !(N[0]in r))
                        return !1
                }
                for (; ++y < _; ) {
                    N = a[y];
                    var q = N[0]
                      , J = r[q]
                      , Q = N[1];
                    if (C && N[2]) {
                        if (J === t && !(q in r))
                            return !1
                    } else {
                        var ie = new Kr;
                        if (h)
                            var ue = h(J, Q, q, r, n, ie);
                        if (!(ue === t ? os(Q, J, O | K, h, ie) : ue))
                            return !1
                    }
                }
                return !0
            }
            function Rh(r) {
                if (!_t(r) || vy(r))
                    return !1;
                var n = gi(r) ? Lg : Ia;
                return n.test(tn(r))
            }
            function U0(r) {
                return Pt(r) && ir(r) == qe
            }
            function M0(r) {
                return Pt(r) && Qt(r) == Ie
            }
            function j0(r) {
                return Pt(r) && qo(r.length) && !!st[ir(r)]
            }
            function Th(r) {
                return typeof r == "function" ? r : r == null ? gr : typeof r == "object" ? Te(r) ? Lh(r[0], r[1]) : $h(r) : ef(r)
            }
            function ac(r) {
                if (!us(r))
                    return zg(r);
                var n = [];
                for (var a in ct(r))
                    it.call(r, a) && a != "constructor" && n.push(a);
                return n
            }
            function q0(r) {
                if (!_t(r))
                    return _y(r);
                var n = us(r)
                  , a = [];
                for (var h in r)
                    h == "constructor" && (n || !it.call(r, h)) || a.push(h);
                return a
            }
            function cc(r, n) {
                return r < n
            }
            function Nh(r, n) {
                var a = -1
                  , h = dr(r) ? H(r.length) : [];
                return Ni(r, function(y, _, C) {
                    h[++a] = n(y, _, C)
                }),
                h
            }
            function $h(r) {
                var n = Dc(r);
                return n.length == 1 && n[0][2] ? pl(n[0][0], n[0][1]) : function(a) {
                    return a === r || oc(a, r, n)
                }
            }
            function Lh(r, n) {
                return Ic(r) && dl(n) ? pl(ti(r), n) : function(a) {
                    var h = Lc(a, r);
                    return h === t && h === n ? Uc(a, r) : os(n, h, O | K)
                }
            }
            function Do(r, n, a, h, y) {
                r !== n && rc(n, function(_, C) {
                    if (y || (y = new Kr),
                    _t(_))
                        F0(r, n, C, a, Do, h, y);
                    else {
                        var N = h ? h(Oc(r, C), _, C + "", r, n, y) : t;
                        N === t && (N = _),
                        ec(r, C, N)
                    }
                }, pr)
            }
            function F0(r, n, a, h, y, _, C) {
                var N = Oc(r, a)
                  , q = Oc(n, a)
                  , J = C.get(q);
                if (J) {
                    ec(r, a, J);
                    return
                }
                var Q = _ ? _(N, q, a + "", r, n, C) : t
                  , ie = Q === t;
                if (ie) {
                    var ue = Te(q)
                      , ye = !ue && Mi(q)
                      , we = !ue && !ye && Rn(q);
                    Q = q,
                    ue || ye || we ? Te(N) ? Q = N : Rt(N) ? Q = fr(N) : ye ? (ie = !1,
                    Q = Wh(q, !0)) : we ? (ie = !1,
                    Q = Gh(q, !0)) : Q = [] : ls(q) || rn(q) ? (Q = N,
                    rn(N) ? Q = Kl(N) : (!_t(N) || gi(N)) && (Q = fl(q))) : ie = !1
                }
                ie && (C.set(q, Q),
                y(Q, q, h, _, C),
                C.delete(q)),
                ec(r, a, Q)
            }
            function Uh(r, n) {
                var a = r.length;
                if (a)
                    return n += n < 0 ? a : 0,
                    pi(n, a) ? r[n] : t
            }
            function Mh(r, n, a) {
                n.length ? n = vt(n, function(_) {
                    return Te(_) ? function(C) {
                        return Zi(C, _.length === 1 ? _[0] : _)
                    }
                    : _
                }) : n = [gr];
                var h = -1;
                n = vt(n, Er(me()));
                var y = Nh(r, function(_, C, N) {
                    var q = vt(n, function(J) {
                        return J(_)
                    });
                    return {
                        criteria: q,
                        index: ++h,
                        value: _
                    }
                });
                return dg(y, function(_, C) {
                    return Z0(_, C, a)
                })
            }
            function z0(r, n) {
                return jh(r, n, function(a, h) {
                    return Uc(r, h)
                })
            }
            function jh(r, n, a) {
                for (var h = -1, y = n.length, _ = {}; ++h < y; ) {
                    var C = n[h]
                      , N = Zi(r, C);
                    a(N, C) && as(_, Li(C, r), N)
                }
                return _
            }
            function H0(r) {
                return function(n) {
                    return Zi(n, r)
                }
            }
            function uc(r, n, a, h) {
                var y = h ? fg : bn
                  , _ = -1
                  , C = n.length
                  , N = r;
                for (r === n && (n = fr(n)),
                a && (N = vt(r, Er(a))); ++_ < C; )
                    for (var q = 0, J = n[_], Q = a ? a(J) : J; (q = y(N, Q, q, h)) > -1; )
                        N !== r && fo.call(N, q, 1),
                        fo.call(r, q, 1);
                return r
            }
            function qh(r, n) {
                for (var a = r ? n.length : 0, h = a - 1; a--; ) {
                    var y = n[a];
                    if (a == h || y !== _) {
                        var _ = y;
                        pi(y) ? fo.call(r, y, 1) : dc(r, y)
                    }
                }
                return r
            }
            function hc(r, n) {
                return r + yo(wh() * (n - r + 1))
            }
            function B0(r, n, a, h) {
                for (var y = -1, _ = Ht(go((n - r) / (a || 1)), 0), C = H(_); _--; )
                    C[h ? _ : ++y] = r,
                    r += a;
                return C
            }
            function lc(r, n) {
                var a = "";
                if (!r || n < 1 || n > k)
                    return a;
                do
                    n % 2 && (a += r),
                    n = yo(n / 2),
                    n && (r += r);
                while (n);
                return a
            }
            function Ke(r, n) {
                return Pc(gl(r, n, gr), r + "")
            }
            function K0(r) {
                return Eh(Tn(r))
            }
            function k0(r, n) {
                var a = Tn(r);
                return No(a, Xi(n, 0, a.length))
            }
            function as(r, n, a, h) {
                if (!_t(r))
                    return r;
                n = Li(n, r);
                for (var y = -1, _ = n.length, C = _ - 1, N = r; N != null && ++y < _; ) {
                    var q = ti(n[y])
                      , J = a;
                    if (q === "__proto__" || q === "constructor" || q === "prototype")
                        return r;
                    if (y != C) {
                        var Q = N[q];
                        J = h ? h(Q, q, N) : t,
                        J === t && (J = _t(Q) ? Q : pi(n[y + 1]) ? [] : {})
                    }
                    is(N, q, J),
                    N = N[q]
                }
                return r
            }
            var Fh = vo ? function(r, n) {
                return vo.set(r, n),
                r
            }
            : gr
              , V0 = po ? function(r, n) {
                return po(r, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: jc(n),
                    writable: !0
                })
            }
            : gr;
            function W0(r) {
                return No(Tn(r))
            }
            function Ur(r, n, a) {
                var h = -1
                  , y = r.length;
                n < 0 && (n = -n > y ? 0 : y + n),
                a = a > y ? y : a,
                a < 0 && (a += y),
                y = n > a ? 0 : a - n >>> 0,
                n >>>= 0;
                for (var _ = H(y); ++h < y; )
                    _[h] = r[h + n];
                return _
            }
            function G0(r, n) {
                var a;
                return Ni(r, function(h, y, _) {
                    return a = n(h, y, _),
                    !a
                }),
                !!a
            }
            function So(r, n, a) {
                var h = 0
                  , y = r == null ? h : r.length;
                if (typeof n == "number" && n === n && y <= ae) {
                    for (; h < y; ) {
                        var _ = h + y >>> 1
                          , C = r[_];
                        C !== null && !Sr(C) && (a ? C <= n : C < n) ? h = _ + 1 : y = _
                    }
                    return y
                }
                return fc(r, n, gr, a)
            }
            function fc(r, n, a, h) {
                var y = 0
                  , _ = r == null ? 0 : r.length;
                if (_ === 0)
                    return 0;
                n = a(n);
                for (var C = n !== n, N = n === null, q = Sr(n), J = n === t; y < _; ) {
                    var Q = yo((y + _) / 2)
                      , ie = a(r[Q])
                      , ue = ie !== t
                      , ye = ie === null
                      , we = ie === ie
                      , ze = Sr(ie);
                    if (C)
                        var be = h || we;
                    else
                        J ? be = we && (h || ue) : N ? be = we && ue && (h || !ye) : q ? be = we && ue && !ye && (h || !ze) : ye || ze ? be = !1 : be = h ? ie <= n : ie < n;
                    be ? y = Q + 1 : _ = Q
                }
                return Jt(_, De)
            }
            function zh(r, n) {
                for (var a = -1, h = r.length, y = 0, _ = []; ++a < h; ) {
                    var C = r[a]
                      , N = n ? n(C) : C;
                    if (!a || !kr(N, q)) {
                        var q = N;
                        _[y++] = C === 0 ? 0 : C
                    }
                }
                return _
            }
            function Hh(r) {
                return typeof r == "number" ? r : Sr(r) ? re : +r
            }
            function Dr(r) {
                if (typeof r == "string")
                    return r;
                if (Te(r))
                    return vt(r, Dr) + "";
                if (Sr(r))
                    return bh ? bh.call(r) : "";
                var n = r + "";
                return n == "0" && 1 / r == -X ? "-0" : n
            }
            function $i(r, n, a) {
                var h = -1
                  , y = ro
                  , _ = r.length
                  , C = !0
                  , N = []
                  , q = N;
                if (a)
                    C = !1,
                    y = za;
                else if (_ >= o) {
                    var J = n ? null : sy(r);
                    if (J)
                        return no(J);
                    C = !1,
                    y = Qn,
                    q = new Qi
                } else
                    q = n ? [] : N;
                e: for (; ++h < _; ) {
                    var Q = r[h]
                      , ie = n ? n(Q) : Q;
                    if (Q = a || Q !== 0 ? Q : 0,
                    C && ie === ie) {
                        for (var ue = q.length; ue--; )
                            if (q[ue] === ie)
                                continue e;
                        n && q.push(ie),
                        N.push(Q)
                    } else
                        y(q, ie, a) || (q !== N && q.push(ie),
                        N.push(Q))
                }
                return N
            }
            function dc(r, n) {
                return n = Li(n, r),
                r = yl(r, n),
                r == null || delete r[ti(Mr(n))]
            }
            function Bh(r, n, a, h) {
                return as(r, n, a(Zi(r, n)), h)
            }
            function Io(r, n, a, h) {
                for (var y = r.length, _ = h ? y : -1; (h ? _-- : ++_ < y) && n(r[_], _, r); )
                    ;
                return a ? Ur(r, h ? 0 : _, h ? _ + 1 : y) : Ur(r, h ? _ + 1 : 0, h ? y : _)
            }
            function Kh(r, n) {
                var a = r;
                return a instanceof Ye && (a = a.value()),
                Ha(n, function(h, y) {
                    return y.func.apply(y.thisArg, Ai([h], y.args))
                }, a)
            }
            function pc(r, n, a) {
                var h = r.length;
                if (h < 2)
                    return h ? $i(r[0]) : [];
                for (var y = -1, _ = H(h); ++y < h; )
                    for (var C = r[y], N = -1; ++N < h; )
                        N != y && (_[y] = ns(_[y] || C, r[N], n, a));
                return $i(Wt(_, 1), n, a)
            }
            function kh(r, n, a) {
                for (var h = -1, y = r.length, _ = n.length, C = {}; ++h < y; ) {
                    var N = h < _ ? n[h] : t;
                    a(C, r[h], N)
                }
                return C
            }
            function gc(r) {
                return Rt(r) ? r : []
            }
            function yc(r) {
                return typeof r == "function" ? r : gr
            }
            function Li(r, n) {
                return Te(r) ? r : Ic(r, n) ? [r] : bl(rt(r))
            }
            var Y0 = Ke;
            function Ui(r, n, a) {
                var h = r.length;
                return a = a === t ? h : a,
                !n && a >= h ? r : Ur(r, n, a)
            }
            var Vh = Ug || function(r) {
                return Qe.clearTimeout(r)
            }
            ;
            function Wh(r, n) {
                if (n)
                    return r.slice();
                var a = r.length
                  , h = ph ? ph(a) : new r.constructor(a);
                return r.copy(h),
                h
            }
            function vc(r) {
                var n = new r.constructor(r.byteLength);
                return new ho(n).set(new ho(r)),
                n
            }
            function J0(r, n) {
                var a = n ? vc(r.buffer) : r.buffer;
                return new r.constructor(a,r.byteOffset,r.byteLength)
            }
            function Q0(r) {
                var n = new r.constructor(r.source,Ar.exec(r));
                return n.lastIndex = r.lastIndex,
                n
            }
            function X0(r) {
                return rs ? ct(rs.call(r)) : {}
            }
            function Gh(r, n) {
                var a = n ? vc(r.buffer) : r.buffer;
                return new r.constructor(a,r.byteOffset,r.length)
            }
            function Yh(r, n) {
                if (r !== n) {
                    var a = r !== t
                      , h = r === null
                      , y = r === r
                      , _ = Sr(r)
                      , C = n !== t
                      , N = n === null
                      , q = n === n
                      , J = Sr(n);
                    if (!N && !J && !_ && r > n || _ && C && q && !N && !J || h && C && q || !a && q || !y)
                        return 1;
                    if (!h && !_ && !J && r < n || J && a && y && !h && !_ || N && a && y || !C && y || !q)
                        return -1
                }
                return 0
            }
            function Z0(r, n, a) {
                for (var h = -1, y = r.criteria, _ = n.criteria, C = y.length, N = a.length; ++h < C; ) {
                    var q = Yh(y[h], _[h]);
                    if (q) {
                        if (h >= N)
                            return q;
                        var J = a[h];
                        return q * (J == "desc" ? -1 : 1)
                    }
                }
                return r.index - n.index
            }
            function Jh(r, n, a, h) {
                for (var y = -1, _ = r.length, C = a.length, N = -1, q = n.length, J = Ht(_ - C, 0), Q = H(q + J), ie = !h; ++N < q; )
                    Q[N] = n[N];
                for (; ++y < C; )
                    (ie || y < _) && (Q[a[y]] = r[y]);
                for (; J--; )
                    Q[N++] = r[y++];
                return Q
            }
            function Qh(r, n, a, h) {
                for (var y = -1, _ = r.length, C = -1, N = a.length, q = -1, J = n.length, Q = Ht(_ - N, 0), ie = H(Q + J), ue = !h; ++y < Q; )
                    ie[y] = r[y];
                for (var ye = y; ++q < J; )
                    ie[ye + q] = n[q];
                for (; ++C < N; )
                    (ue || y < _) && (ie[ye + a[C]] = r[y++]);
                return ie
            }
            function fr(r, n) {
                var a = -1
                  , h = r.length;
                for (n || (n = H(h)); ++a < h; )
                    n[a] = r[a];
                return n
            }
            function ei(r, n, a, h) {
                var y = !a;
                a || (a = {});
                for (var _ = -1, C = n.length; ++_ < C; ) {
                    var N = n[_]
                      , q = h ? h(a[N], r[N], N, a, r) : t;
                    q === t && (q = r[N]),
                    y ? li(a, N, q) : is(a, N, q)
                }
                return a
            }
            function ey(r, n) {
                return ei(r, Sc(r), n)
            }
            function ty(r, n) {
                return ei(r, hl(r), n)
            }
            function xo(r, n) {
                return function(a, h) {
                    var y = Te(a) ? og : D0
                      , _ = n ? n() : {};
                    return y(a, r, me(h, 2), _)
                }
            }
            function Pn(r) {
                return Ke(function(n, a) {
                    var h = -1
                      , y = a.length
                      , _ = y > 1 ? a[y - 1] : t
                      , C = y > 2 ? a[2] : t;
                    for (_ = r.length > 3 && typeof _ == "function" ? (y--,
                    _) : t,
                    C && nr(a[0], a[1], C) && (_ = y < 3 ? t : _,
                    y = 1),
                    n = ct(n); ++h < y; ) {
                        var N = a[h];
                        N && r(n, N, h, _)
                    }
                    return n
                })
            }
            function Xh(r, n) {
                return function(a, h) {
                    if (a == null)
                        return a;
                    if (!dr(a))
                        return r(a, h);
                    for (var y = a.length, _ = n ? y : -1, C = ct(a); (n ? _-- : ++_ < y) && h(C[_], _, C) !== !1; )
                        ;
                    return a
                }
            }
            function Zh(r) {
                return function(n, a, h) {
                    for (var y = -1, _ = ct(n), C = h(n), N = C.length; N--; ) {
                        var q = C[r ? N : ++y];
                        if (a(_[q], q, _) === !1)
                            break
                    }
                    return n
                }
            }
            function ry(r, n, a) {
                var h = n & B
                  , y = cs(r);
                function _() {
                    var C = this && this !== Qe && this instanceof _ ? y : r;
                    return C.apply(h ? a : this, arguments)
                }
                return _
            }
            function el(r) {
                return function(n) {
                    n = rt(n);
                    var a = _n(n) ? Br(n) : t
                      , h = a ? a[0] : n.charAt(0)
                      , y = a ? Ui(a, 1).join("") : n.slice(1);
                    return h[r]() + y
                }
            }
            function Cn(r) {
                return function(n) {
                    return Ha(Xl(Ql(n).replace(Yn, "")), r, "")
                }
            }
            function cs(r) {
                return function() {
                    var n = arguments;
                    switch (n.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(n[0]);
                    case 2:
                        return new r(n[0],n[1]);
                    case 3:
                        return new r(n[0],n[1],n[2]);
                    case 4:
                        return new r(n[0],n[1],n[2],n[3]);
                    case 5:
                        return new r(n[0],n[1],n[2],n[3],n[4]);
                    case 6:
                        return new r(n[0],n[1],n[2],n[3],n[4],n[5]);
                    case 7:
                        return new r(n[0],n[1],n[2],n[3],n[4],n[5],n[6])
                    }
                    var a = On(r.prototype)
                      , h = r.apply(a, n);
                    return _t(h) ? h : a
                }
            }
            function iy(r, n, a) {
                var h = cs(r);
                function y() {
                    for (var _ = arguments.length, C = H(_), N = _, q = An(y); N--; )
                        C[N] = arguments[N];
                    var J = _ < 3 && C[0] !== q && C[_ - 1] !== q ? [] : Ri(C, q);
                    if (_ -= J.length,
                    _ < a)
                        return sl(r, n, Oo, y.placeholder, t, C, J, t, t, a - _);
                    var Q = this && this !== Qe && this instanceof y ? h : r;
                    return Bt(Q, this, C)
                }
                return y
            }
            function tl(r) {
                return function(n, a, h) {
                    var y = ct(n);
                    if (!dr(n)) {
                        var _ = me(a, 3);
                        n = Kt(n),
                        a = function(N) {
                            return _(y[N], N, y)
                        }
                    }
                    var C = r(n, a, h);
                    return C > -1 ? y[_ ? n[C] : C] : t
                }
            }
            function rl(r) {
                return di(function(n) {
                    var a = n.length
                      , h = a
                      , y = $r.prototype.thru;
                    for (r && n.reverse(); h--; ) {
                        var _ = n[h];
                        if (typeof _ != "function")
                            throw new Nr(d);
                        if (y && !C && Ro(_) == "wrapper")
                            var C = new $r([],!0)
                    }
                    for (h = C ? h : a; ++h < a; ) {
                        _ = n[h];
                        var N = Ro(_)
                          , q = N == "wrapper" ? Ec(_) : t;
                        q && xc(q[0]) && q[1] == (u | U | E | b) && !q[4].length && q[9] == 1 ? C = C[Ro(q[0])].apply(C, q[3]) : C = _.length == 1 && xc(_) ? C[N]() : C.thru(_)
                    }
                    return function() {
                        var J = arguments
                          , Q = J[0];
                        if (C && J.length == 1 && Te(Q))
                            return C.plant(Q).value();
                        for (var ie = 0, ue = a ? n[ie].apply(this, J) : Q; ++ie < a; )
                            ue = n[ie].call(this, ue);
                        return ue
                    }
                })
            }
            function Oo(r, n, a, h, y, _, C, N, q, J) {
                var Q = n & u
                  , ie = n & B
                  , ue = n & ee
                  , ye = n & (U | w)
                  , we = n & V
                  , ze = ue ? t : cs(r);
                function be() {
                    for (var We = arguments.length, Xe = H(We), Ir = We; Ir--; )
                        Xe[Ir] = arguments[Ir];
                    if (ye)
                        var sr = An(be)
                          , xr = gg(Xe, sr);
                    if (h && (Xe = Jh(Xe, h, y, ye)),
                    _ && (Xe = Qh(Xe, _, C, ye)),
                    We -= xr,
                    ye && We < J) {
                        var Tt = Ri(Xe, sr);
                        return sl(r, n, Oo, be.placeholder, a, Xe, Tt, N, q, J - We)
                    }
                    var Vr = ie ? a : this
                      , vi = ue ? Vr[r] : r;
                    return We = Xe.length,
                    N ? Xe = Dy(Xe, N) : we && We > 1 && Xe.reverse(),
                    Q && q < We && (Xe.length = q),
                    this && this !== Qe && this instanceof be && (vi = ze || cs(vi)),
                    vi.apply(Vr, Xe)
                }
                return be
            }
            function il(r, n) {
                return function(a, h) {
                    return R0(a, r, n(h), {})
                }
            }
            function Po(r, n) {
                return function(a, h) {
                    var y;
                    if (a === t && h === t)
                        return n;
                    if (a !== t && (y = a),
                    h !== t) {
                        if (y === t)
                            return h;
                        typeof a == "string" || typeof h == "string" ? (a = Dr(a),
                        h = Dr(h)) : (a = Hh(a),
                        h = Hh(h)),
                        y = r(a, h)
                    }
                    return y
                }
            }
            function mc(r) {
                return di(function(n) {
                    return n = vt(n, Er(me())),
                    Ke(function(a) {
                        var h = this;
                        return r(n, function(y) {
                            return Bt(y, h, a)
                        })
                    })
                })
            }
            function Co(r, n) {
                n = n === t ? " " : Dr(n);
                var a = n.length;
                if (a < 2)
                    return a ? lc(n, r) : n;
                var h = lc(n, go(r / En(n)));
                return _n(n) ? Ui(Br(h), 0, r).join("") : h.slice(0, r)
            }
            function ny(r, n, a, h) {
                var y = n & B
                  , _ = cs(r);
                function C() {
                    for (var N = -1, q = arguments.length, J = -1, Q = h.length, ie = H(Q + q), ue = this && this !== Qe && this instanceof C ? _ : r; ++J < Q; )
                        ie[J] = h[J];
                    for (; q--; )
                        ie[J++] = arguments[++N];
                    return Bt(ue, y ? a : this, ie)
                }
                return C
            }
            function nl(r) {
                return function(n, a, h) {
                    return h && typeof h != "number" && nr(n, a, h) && (a = h = t),
                    n = yi(n),
                    a === t ? (a = n,
                    n = 0) : a = yi(a),
                    h = h === t ? n < a ? 1 : -1 : yi(h),
                    B0(n, a, h, r)
                }
            }
            function Ao(r) {
                return function(n, a) {
                    return typeof n == "string" && typeof a == "string" || (n = jr(n),
                    a = jr(a)),
                    r(n, a)
                }
            }
            function sl(r, n, a, h, y, _, C, N, q, J) {
                var Q = n & U
                  , ie = Q ? C : t
                  , ue = Q ? t : C
                  , ye = Q ? _ : t
                  , we = Q ? t : _;
                n |= Q ? E : D,
                n &= ~(Q ? D : E),
                n & $ || (n &= ~(B | ee));
                var ze = [r, n, y, ye, ie, we, ue, N, q, J]
                  , be = a.apply(t, ze);
                return xc(r) && vl(be, ze),
                be.placeholder = h,
                ml(be, r, n)
            }
            function wc(r) {
                var n = zt[r];
                return function(a, h) {
                    if (a = jr(a),
                    h = h == null ? 0 : Jt(je(h), 292),
                    h && mh(a)) {
                        var y = (rt(a) + "e").split("e")
                          , _ = n(y[0] + "e" + (+y[1] + h));
                        return y = (rt(_) + "e").split("e"),
                        +(y[0] + "e" + (+y[1] - h))
                    }
                    return n(a)
                }
            }
            var sy = In && 1 / no(new In([, -0]))[1] == X ? function(r) {
                return new In(r)
            }
            : zc;
            function ol(r) {
                return function(n) {
                    var a = Qt(n);
                    return a == Ee ? Ya(n) : a == Ie ? Eg(n) : pg(n, r(n))
                }
            }
            function fi(r, n, a, h, y, _, C, N) {
                var q = n & ee;
                if (!q && typeof r != "function")
                    throw new Nr(d);
                var J = h ? h.length : 0;
                if (J || (n &= ~(E | D),
                h = y = t),
                C = C === t ? C : Ht(je(C), 0),
                N = N === t ? N : je(N),
                J -= y ? y.length : 0,
                n & D) {
                    var Q = h
                      , ie = y;
                    h = y = t
                }
                var ue = q ? t : Ec(r)
                  , ye = [r, n, a, h, y, Q, ie, _, C, N];
                if (ue && by(ye, ue),
                r = ye[0],
                n = ye[1],
                a = ye[2],
                h = ye[3],
                y = ye[4],
                N = ye[9] = ye[9] === t ? q ? 0 : r.length : Ht(ye[9] - J, 0),
                !N && n & (U | w) && (n &= ~(U | w)),
                !n || n == B)
                    var we = ry(r, n, a);
                else
                    n == U || n == w ? we = iy(r, n, N) : (n == E || n == (B | E)) && !y.length ? we = ny(r, n, a, h) : we = Oo.apply(t, ye);
                var ze = ue ? Fh : vl;
                return ml(ze(we, ye), r, n)
            }
            function al(r, n, a, h) {
                return r === t || kr(r, Sn[a]) && !it.call(h, a) ? n : r
            }
            function cl(r, n, a, h, y, _) {
                return _t(r) && _t(n) && (_.set(n, r),
                Do(r, n, t, cl, _),
                _.delete(n)),
                r
            }
            function oy(r) {
                return ls(r) ? t : r
            }
            function ul(r, n, a, h, y, _) {
                var C = a & O
                  , N = r.length
                  , q = n.length;
                if (N != q && !(C && q > N))
                    return !1;
                var J = _.get(r)
                  , Q = _.get(n);
                if (J && Q)
                    return J == n && Q == r;
                var ie = -1
                  , ue = !0
                  , ye = a & K ? new Qi : t;
                for (_.set(r, n),
                _.set(n, r); ++ie < N; ) {
                    var we = r[ie]
                      , ze = n[ie];
                    if (h)
                        var be = C ? h(ze, we, ie, n, r, _) : h(we, ze, ie, r, n, _);
                    if (be !== t) {
                        if (be)
                            continue;
                        ue = !1;
                        break
                    }
                    if (ye) {
                        if (!Ba(n, function(We, Xe) {
                            if (!Qn(ye, Xe) && (we === We || y(we, We, a, h, _)))
                                return ye.push(Xe)
                        })) {
                            ue = !1;
                            break
                        }
                    } else if (!(we === ze || y(we, ze, a, h, _))) {
                        ue = !1;
                        break
                    }
                }
                return _.delete(r),
                _.delete(n),
                ue
            }
            function ay(r, n, a, h, y, _, C) {
                switch (a) {
                case Pe:
                    if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                        return !1;
                    r = r.buffer,
                    n = n.buffer;
                case _e:
                    return !(r.byteLength != n.byteLength || !_(new ho(r), new ho(n)));
                case F:
                case L:
                case He:
                    return kr(+r, +n);
                case R:
                    return r.name == n.name && r.message == n.message;
                case qe:
                case Ne:
                    return r == n + "";
                case Ee:
                    var N = Ya;
                case Ie:
                    var q = h & O;
                    if (N || (N = no),
                    r.size != n.size && !q)
                        return !1;
                    var J = C.get(r);
                    if (J)
                        return J == n;
                    h |= K,
                    C.set(r, n);
                    var Q = ul(N(r), N(n), h, y, _, C);
                    return C.delete(r),
                    Q;
                case $e:
                    if (rs)
                        return rs.call(r) == rs.call(n)
                }
                return !1
            }
            function cy(r, n, a, h, y, _) {
                var C = a & O
                  , N = bc(r)
                  , q = N.length
                  , J = bc(n)
                  , Q = J.length;
                if (q != Q && !C)
                    return !1;
                for (var ie = q; ie--; ) {
                    var ue = N[ie];
                    if (!(C ? ue in n : it.call(n, ue)))
                        return !1
                }
                var ye = _.get(r)
                  , we = _.get(n);
                if (ye && we)
                    return ye == n && we == r;
                var ze = !0;
                _.set(r, n),
                _.set(n, r);
                for (var be = C; ++ie < q; ) {
                    ue = N[ie];
                    var We = r[ue]
                      , Xe = n[ue];
                    if (h)
                        var Ir = C ? h(Xe, We, ue, n, r, _) : h(We, Xe, ue, r, n, _);
                    if (!(Ir === t ? We === Xe || y(We, Xe, a, h, _) : Ir)) {
                        ze = !1;
                        break
                    }
                    be || (be = ue == "constructor")
                }
                if (ze && !be) {
                    var sr = r.constructor
                      , xr = n.constructor;
                    sr != xr && "constructor"in r && "constructor"in n && !(typeof sr == "function" && sr instanceof sr && typeof xr == "function" && xr instanceof xr) && (ze = !1)
                }
                return _.delete(r),
                _.delete(n),
                ze
            }
            function di(r) {
                return Pc(gl(r, t, Sl), r + "")
            }
            function bc(r) {
                return Ch(r, Kt, Sc)
            }
            function _c(r) {
                return Ch(r, pr, hl)
            }
            var Ec = vo ? function(r) {
                return vo.get(r)
            }
            : zc;
            function Ro(r) {
                for (var n = r.name + "", a = xn[n], h = it.call(xn, n) ? a.length : 0; h--; ) {
                    var y = a[h]
                      , _ = y.func;
                    if (_ == null || _ == r)
                        return y.name
                }
                return n
            }
            function An(r) {
                var n = it.call(m, "placeholder") ? m : r;
                return n.placeholder
            }
            function me() {
                var r = m.iteratee || qc;
                return r = r === qc ? Th : r,
                arguments.length ? r(arguments[0], arguments[1]) : r
            }
            function To(r, n) {
                var a = r.__data__;
                return yy(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
            }
            function Dc(r) {
                for (var n = Kt(r), a = n.length; a--; ) {
                    var h = n[a]
                      , y = r[h];
                    n[a] = [h, y, dl(y)]
                }
                return n
            }
            function en(r, n) {
                var a = wg(r, n);
                return Rh(a) ? a : t
            }
            function uy(r) {
                var n = it.call(r, Yi)
                  , a = r[Yi];
                try {
                    r[Yi] = t;
                    var h = !0
                } catch {}
                var y = co.call(r);
                return h && (n ? r[Yi] = a : delete r[Yi]),
                y
            }
            var Sc = Qa ? function(r) {
                return r == null ? [] : (r = ct(r),
                Ci(Qa(r), function(n) {
                    return yh.call(r, n)
                }))
            }
            : Hc
              , hl = Qa ? function(r) {
                for (var n = []; r; )
                    Ai(n, Sc(r)),
                    r = lo(r);
                return n
            }
            : Hc
              , Qt = ir;
            (Xa && Qt(new Xa(new ArrayBuffer(1))) != Pe || Zn && Qt(new Zn) != Ee || Za && Qt(Za.resolve()) != dt || In && Qt(new In) != Ie || es && Qt(new es) != Oe) && (Qt = function(r) {
                var n = ir(r)
                  , a = n == Me ? r.constructor : t
                  , h = a ? tn(a) : "";
                if (h)
                    switch (h) {
                    case kg:
                        return Pe;
                    case Vg:
                        return Ee;
                    case Wg:
                        return dt;
                    case Gg:
                        return Ie;
                    case Yg:
                        return Oe
                    }
                return n
            }
            );
            function hy(r, n, a) {
                for (var h = -1, y = a.length; ++h < y; ) {
                    var _ = a[h]
                      , C = _.size;
                    switch (_.type) {
                    case "drop":
                        r += C;
                        break;
                    case "dropRight":
                        n -= C;
                        break;
                    case "take":
                        n = Jt(n, r + C);
                        break;
                    case "takeRight":
                        r = Ht(r, n - C);
                        break
                    }
                }
                return {
                    start: r,
                    end: n
                }
            }
            function ly(r) {
                var n = r.match(ut);
                return n ? n[1].split(Mt) : []
            }
            function ll(r, n, a) {
                n = Li(n, r);
                for (var h = -1, y = n.length, _ = !1; ++h < y; ) {
                    var C = ti(n[h]);
                    if (!(_ = r != null && a(r, C)))
                        break;
                    r = r[C]
                }
                return _ || ++h != y ? _ : (y = r == null ? 0 : r.length,
                !!y && qo(y) && pi(C, y) && (Te(r) || rn(r)))
            }
            function fy(r) {
                var n = r.length
                  , a = new r.constructor(n);
                return n && typeof r[0] == "string" && it.call(r, "index") && (a.index = r.index,
                a.input = r.input),
                a
            }
            function fl(r) {
                return typeof r.constructor == "function" && !us(r) ? On(lo(r)) : {}
            }
            function dy(r, n, a) {
                var h = r.constructor;
                switch (n) {
                case _e:
                    return vc(r);
                case F:
                case L:
                    return new h(+r);
                case Pe:
                    return J0(r, a);
                case Be:
                case xe:
                case Ve:
                case Ge:
                case Ze:
                case et:
                case Je:
                case er:
                case hr:
                    return Gh(r, a);
                case Ee:
                    return new h;
                case He:
                case Ne:
                    return new h(r);
                case qe:
                    return Q0(r);
                case Ie:
                    return new h;
                case $e:
                    return X0(r)
                }
            }
            function py(r, n) {
                var a = n.length;
                if (!a)
                    return r;
                var h = a - 1;
                return n[h] = (a > 1 ? "& " : "") + n[h],
                n = n.join(a > 2 ? ", " : " "),
                r.replace(Ot, `{
/* [wrapped with ` + n + `] */
`)
            }
            function gy(r) {
                return Te(r) || rn(r) || !!(vh && r && r[vh])
            }
            function pi(r, n) {
                var a = typeof r;
                return n = n ?? k,
                !!n && (a == "number" || a != "symbol" && Oa.test(r)) && r > -1 && r % 1 == 0 && r < n
            }
            function nr(r, n, a) {
                if (!_t(a))
                    return !1;
                var h = typeof n;
                return (h == "number" ? dr(a) && pi(n, a.length) : h == "string" && n in a) ? kr(a[n], r) : !1
            }
            function Ic(r, n) {
                if (Te(r))
                    return !1;
                var a = typeof r;
                return a == "number" || a == "symbol" || a == "boolean" || r == null || Sr(r) ? !0 : $t.test(r) || !yt.test(r) || n != null && r in ct(n)
            }
            function yy(r) {
                var n = typeof r;
                return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null
            }
            function xc(r) {
                var n = Ro(r)
                  , a = m[n];
                if (typeof a != "function" || !(n in Ye.prototype))
                    return !1;
                if (r === a)
                    return !0;
                var h = Ec(a);
                return !!h && r === h[0]
            }
            function vy(r) {
                return !!dh && dh in r
            }
            var my = oo ? gi : Bc;
            function us(r) {
                var n = r && r.constructor
                  , a = typeof n == "function" && n.prototype || Sn;
                return r === a
            }
            function dl(r) {
                return r === r && !_t(r)
            }
            function pl(r, n) {
                return function(a) {
                    return a == null ? !1 : a[r] === n && (n !== t || r in ct(a))
                }
            }
            function wy(r) {
                var n = Mo(r, function(h) {
                    return a.size === g && a.clear(),
                    h
                })
                  , a = n.cache;
                return n
            }
            function by(r, n) {
                var a = r[1]
                  , h = n[1]
                  , y = a | h
                  , _ = y < (B | ee | u)
                  , C = h == u && a == U || h == u && a == b && r[7].length <= n[8] || h == (u | b) && n[7].length <= n[8] && a == U;
                if (!(_ || C))
                    return r;
                h & B && (r[2] = n[2],
                y |= a & B ? 0 : $);
                var N = n[3];
                if (N) {
                    var q = r[3];
                    r[3] = q ? Jh(q, N, n[4]) : N,
                    r[4] = q ? Ri(r[3], v) : n[4]
                }
                return N = n[5],
                N && (q = r[5],
                r[5] = q ? Qh(q, N, n[6]) : N,
                r[6] = q ? Ri(r[5], v) : n[6]),
                N = n[7],
                N && (r[7] = N),
                h & u && (r[8] = r[8] == null ? n[8] : Jt(r[8], n[8])),
                r[9] == null && (r[9] = n[9]),
                r[0] = n[0],
                r[1] = y,
                r
            }
            function _y(r) {
                var n = [];
                if (r != null)
                    for (var a in ct(r))
                        n.push(a);
                return n
            }
            function Ey(r) {
                return co.call(r)
            }
            function gl(r, n, a) {
                return n = Ht(n === t ? r.length - 1 : n, 0),
                function() {
                    for (var h = arguments, y = -1, _ = Ht(h.length - n, 0), C = H(_); ++y < _; )
                        C[y] = h[n + y];
                    y = -1;
                    for (var N = H(n + 1); ++y < n; )
                        N[y] = h[y];
                    return N[n] = a(C),
                    Bt(r, this, N)
                }
            }
            function yl(r, n) {
                return n.length < 2 ? r : Zi(r, Ur(n, 0, -1))
            }
            function Dy(r, n) {
                for (var a = r.length, h = Jt(n.length, a), y = fr(r); h--; ) {
                    var _ = n[h];
                    r[h] = pi(_, a) ? y[_] : t
                }
                return r
            }
            function Oc(r, n) {
                if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__")
                    return r[n]
            }
            var vl = wl(Fh)
              , hs = jg || function(r, n) {
                return Qe.setTimeout(r, n)
            }
              , Pc = wl(V0);
            function ml(r, n, a) {
                var h = n + "";
                return Pc(r, py(h, Sy(ly(h), a)))
            }
            function wl(r) {
                var n = 0
                  , a = 0;
                return function() {
                    var h = Hg()
                      , y = ge - (h - a);
                    if (a = h,
                    y > 0) {
                        if (++n >= pe)
                            return arguments[0]
                    } else
                        n = 0;
                    return r.apply(t, arguments)
                }
            }
            function No(r, n) {
                var a = -1
                  , h = r.length
                  , y = h - 1;
                for (n = n === t ? h : n; ++a < n; ) {
                    var _ = hc(a, y)
                      , C = r[_];
                    r[_] = r[a],
                    r[a] = C
                }
                return r.length = n,
                r
            }
            var bl = wy(function(r) {
                var n = [];
                return r.charCodeAt(0) === 46 && n.push(""),
                r.replace(Lt, function(a, h, y, _) {
                    n.push(y ? _.replace(_a, "$1") : h || a)
                }),
                n
            });
            function ti(r) {
                if (typeof r == "string" || Sr(r))
                    return r;
                var n = r + "";
                return n == "0" && 1 / r == -X ? "-0" : n
            }
            function tn(r) {
                if (r != null) {
                    try {
                        return ao.call(r)
                    } catch {}
                    try {
                        return r + ""
                    } catch {}
                }
                return ""
            }
            function Sy(r, n) {
                return Tr(Se, function(a) {
                    var h = "_." + a[0];
                    n & a[1] && !ro(r, h) && r.push(h)
                }),
                r.sort()
            }
            function _l(r) {
                if (r instanceof Ye)
                    return r.clone();
                var n = new $r(r.__wrapped__,r.__chain__);
                return n.__actions__ = fr(r.__actions__),
                n.__index__ = r.__index__,
                n.__values__ = r.__values__,
                n
            }
            function Iy(r, n, a) {
                (a ? nr(r, n, a) : n === t) ? n = 1 : n = Ht(je(n), 0);
                var h = r == null ? 0 : r.length;
                if (!h || n < 1)
                    return [];
                for (var y = 0, _ = 0, C = H(go(h / n)); y < h; )
                    C[_++] = Ur(r, y, y += n);
                return C
            }
            function xy(r) {
                for (var n = -1, a = r == null ? 0 : r.length, h = 0, y = []; ++n < a; ) {
                    var _ = r[n];
                    _ && (y[h++] = _)
                }
                return y
            }
            function Oy() {
                var r = arguments.length;
                if (!r)
                    return [];
                for (var n = H(r - 1), a = arguments[0], h = r; h--; )
                    n[h - 1] = arguments[h];
                return Ai(Te(a) ? fr(a) : [a], Wt(n, 1))
            }
            var Py = Ke(function(r, n) {
                return Rt(r) ? ns(r, Wt(n, 1, Rt, !0)) : []
            })
              , Cy = Ke(function(r, n) {
                var a = Mr(n);
                return Rt(a) && (a = t),
                Rt(r) ? ns(r, Wt(n, 1, Rt, !0), me(a, 2)) : []
            })
              , Ay = Ke(function(r, n) {
                var a = Mr(n);
                return Rt(a) && (a = t),
                Rt(r) ? ns(r, Wt(n, 1, Rt, !0), t, a) : []
            });
            function Ry(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                Ur(r, n < 0 ? 0 : n, h)) : []
            }
            function Ty(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                n = h - n,
                Ur(r, 0, n < 0 ? 0 : n)) : []
            }
            function Ny(r, n) {
                return r && r.length ? Io(r, me(n, 3), !0, !0) : []
            }
            function $y(r, n) {
                return r && r.length ? Io(r, me(n, 3), !0) : []
            }
            function Ly(r, n, a, h) {
                var y = r == null ? 0 : r.length;
                return y ? (a && typeof a != "number" && nr(r, n, a) && (a = 0,
                h = y),
                O0(r, n, a, h)) : []
            }
            function El(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var y = a == null ? 0 : je(a);
                return y < 0 && (y = Ht(h + y, 0)),
                io(r, me(n, 3), y)
            }
            function Dl(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var y = h - 1;
                return a !== t && (y = je(a),
                y = a < 0 ? Ht(h + y, 0) : Jt(y, h - 1)),
                io(r, me(n, 3), y, !0)
            }
            function Sl(r) {
                var n = r == null ? 0 : r.length;
                return n ? Wt(r, 1) : []
            }
            function Uy(r) {
                var n = r == null ? 0 : r.length;
                return n ? Wt(r, X) : []
            }
            function My(r, n) {
                var a = r == null ? 0 : r.length;
                return a ? (n = n === t ? 1 : je(n),
                Wt(r, n)) : []
            }
            function jy(r) {
                for (var n = -1, a = r == null ? 0 : r.length, h = {}; ++n < a; ) {
                    var y = r[n];
                    h[y[0]] = y[1]
                }
                return h
            }
            function Il(r) {
                return r && r.length ? r[0] : t
            }
            function qy(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var y = a == null ? 0 : je(a);
                return y < 0 && (y = Ht(h + y, 0)),
                bn(r, n, y)
            }
            function Fy(r) {
                var n = r == null ? 0 : r.length;
                return n ? Ur(r, 0, -1) : []
            }
            var zy = Ke(function(r) {
                var n = vt(r, gc);
                return n.length && n[0] === r[0] ? sc(n) : []
            })
              , Hy = Ke(function(r) {
                var n = Mr(r)
                  , a = vt(r, gc);
                return n === Mr(a) ? n = t : a.pop(),
                a.length && a[0] === r[0] ? sc(a, me(n, 2)) : []
            })
              , By = Ke(function(r) {
                var n = Mr(r)
                  , a = vt(r, gc);
                return n = typeof n == "function" ? n : t,
                n && a.pop(),
                a.length && a[0] === r[0] ? sc(a, t, n) : []
            });
            function Ky(r, n) {
                return r == null ? "" : Fg.call(r, n)
            }
            function Mr(r) {
                var n = r == null ? 0 : r.length;
                return n ? r[n - 1] : t
            }
            function ky(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var y = h;
                return a !== t && (y = je(a),
                y = y < 0 ? Ht(h + y, 0) : Jt(y, h - 1)),
                n === n ? Sg(r, n, y) : io(r, sh, y, !0)
            }
            function Vy(r, n) {
                return r && r.length ? Uh(r, je(n)) : t
            }
            var Wy = Ke(xl);
            function xl(r, n) {
                return r && r.length && n && n.length ? uc(r, n) : r
            }
            function Gy(r, n, a) {
                return r && r.length && n && n.length ? uc(r, n, me(a, 2)) : r
            }
            function Yy(r, n, a) {
                return r && r.length && n && n.length ? uc(r, n, t, a) : r
            }
            var Jy = di(function(r, n) {
                var a = r == null ? 0 : r.length
                  , h = tc(r, n);
                return qh(r, vt(n, function(y) {
                    return pi(y, a) ? +y : y
                }).sort(Yh)),
                h
            });
            function Qy(r, n) {
                var a = [];
                if (!(r && r.length))
                    return a;
                var h = -1
                  , y = []
                  , _ = r.length;
                for (n = me(n, 3); ++h < _; ) {
                    var C = r[h];
                    n(C, h, r) && (a.push(C),
                    y.push(h))
                }
                return qh(r, y),
                a
            }
            function Cc(r) {
                return r == null ? r : Kg.call(r)
            }
            function Xy(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (a && typeof a != "number" && nr(r, n, a) ? (n = 0,
                a = h) : (n = n == null ? 0 : je(n),
                a = a === t ? h : je(a)),
                Ur(r, n, a)) : []
            }
            function Zy(r, n) {
                return So(r, n)
            }
            function ev(r, n, a) {
                return fc(r, n, me(a, 2))
            }
            function tv(r, n) {
                var a = r == null ? 0 : r.length;
                if (a) {
                    var h = So(r, n);
                    if (h < a && kr(r[h], n))
                        return h
                }
                return -1
            }
            function rv(r, n) {
                return So(r, n, !0)
            }
            function iv(r, n, a) {
                return fc(r, n, me(a, 2), !0)
            }
            function nv(r, n) {
                var a = r == null ? 0 : r.length;
                if (a) {
                    var h = So(r, n, !0) - 1;
                    if (kr(r[h], n))
                        return h
                }
                return -1
            }
            function sv(r) {
                return r && r.length ? zh(r) : []
            }
            function ov(r, n) {
                return r && r.length ? zh(r, me(n, 2)) : []
            }
            function av(r) {
                var n = r == null ? 0 : r.length;
                return n ? Ur(r, 1, n) : []
            }
            function cv(r, n, a) {
                return r && r.length ? (n = a || n === t ? 1 : je(n),
                Ur(r, 0, n < 0 ? 0 : n)) : []
            }
            function uv(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                n = h - n,
                Ur(r, n < 0 ? 0 : n, h)) : []
            }
            function hv(r, n) {
                return r && r.length ? Io(r, me(n, 3), !1, !0) : []
            }
            function lv(r, n) {
                return r && r.length ? Io(r, me(n, 3)) : []
            }
            var fv = Ke(function(r) {
                return $i(Wt(r, 1, Rt, !0))
            })
              , dv = Ke(function(r) {
                var n = Mr(r);
                return Rt(n) && (n = t),
                $i(Wt(r, 1, Rt, !0), me(n, 2))
            })
              , pv = Ke(function(r) {
                var n = Mr(r);
                return n = typeof n == "function" ? n : t,
                $i(Wt(r, 1, Rt, !0), t, n)
            });
            function gv(r) {
                return r && r.length ? $i(r) : []
            }
            function yv(r, n) {
                return r && r.length ? $i(r, me(n, 2)) : []
            }
            function vv(r, n) {
                return n = typeof n == "function" ? n : t,
                r && r.length ? $i(r, t, n) : []
            }
            function Ac(r) {
                if (!(r && r.length))
                    return [];
                var n = 0;
                return r = Ci(r, function(a) {
                    if (Rt(a))
                        return n = Ht(a.length, n),
                        !0
                }),
                Wa(n, function(a) {
                    return vt(r, Ka(a))
                })
            }
            function Ol(r, n) {
                if (!(r && r.length))
                    return [];
                var a = Ac(r);
                return n == null ? a : vt(a, function(h) {
                    return Bt(n, t, h)
                })
            }
            var mv = Ke(function(r, n) {
                return Rt(r) ? ns(r, n) : []
            })
              , wv = Ke(function(r) {
                return pc(Ci(r, Rt))
            })
              , bv = Ke(function(r) {
                var n = Mr(r);
                return Rt(n) && (n = t),
                pc(Ci(r, Rt), me(n, 2))
            })
              , _v = Ke(function(r) {
                var n = Mr(r);
                return n = typeof n == "function" ? n : t,
                pc(Ci(r, Rt), t, n)
            })
              , Ev = Ke(Ac);
            function Dv(r, n) {
                return kh(r || [], n || [], is)
            }
            function Sv(r, n) {
                return kh(r || [], n || [], as)
            }
            var Iv = Ke(function(r) {
                var n = r.length
                  , a = n > 1 ? r[n - 1] : t;
                return a = typeof a == "function" ? (r.pop(),
                a) : t,
                Ol(r, a)
            });
            function Pl(r) {
                var n = m(r);
                return n.__chain__ = !0,
                n
            }
            function xv(r, n) {
                return n(r),
                r
            }
            function $o(r, n) {
                return n(r)
            }
            var Ov = di(function(r) {
                var n = r.length
                  , a = n ? r[0] : 0
                  , h = this.__wrapped__
                  , y = function(_) {
                    return tc(_, r)
                };
                return n > 1 || this.__actions__.length || !(h instanceof Ye) || !pi(a) ? this.thru(y) : (h = h.slice(a, +a + (n ? 1 : 0)),
                h.__actions__.push({
                    func: $o,
                    args: [y],
                    thisArg: t
                }),
                new $r(h,this.__chain__).thru(function(_) {
                    return n && !_.length && _.push(t),
                    _
                }))
            });
            function Pv() {
                return Pl(this)
            }
            function Cv() {
                return new $r(this.value(),this.__chain__)
            }
            function Av() {
                this.__values__ === t && (this.__values__ = Hl(this.value()));
                var r = this.__index__ >= this.__values__.length
                  , n = r ? t : this.__values__[this.__index__++];
                return {
                    done: r,
                    value: n
                }
            }
            function Rv() {
                return this
            }
            function Tv(r) {
                for (var n, a = this; a instanceof wo; ) {
                    var h = _l(a);
                    h.__index__ = 0,
                    h.__values__ = t,
                    n ? y.__wrapped__ = h : n = h;
                    var y = h;
                    a = a.__wrapped__
                }
                return y.__wrapped__ = r,
                n
            }
            function Nv() {
                var r = this.__wrapped__;
                if (r instanceof Ye) {
                    var n = r;
                    return this.__actions__.length && (n = new Ye(this)),
                    n = n.reverse(),
                    n.__actions__.push({
                        func: $o,
                        args: [Cc],
                        thisArg: t
                    }),
                    new $r(n,this.__chain__)
                }
                return this.thru(Cc)
            }
            function $v() {
                return Kh(this.__wrapped__, this.__actions__)
            }
            var Lv = xo(function(r, n, a) {
                it.call(r, a) ? ++r[a] : li(r, a, 1)
            });
            function Uv(r, n, a) {
                var h = Te(r) ? ih : x0;
                return a && nr(r, n, a) && (n = t),
                h(r, me(n, 3))
            }
            function Mv(r, n) {
                var a = Te(r) ? Ci : Oh;
                return a(r, me(n, 3))
            }
            var jv = tl(El)
              , qv = tl(Dl);
            function Fv(r, n) {
                return Wt(Lo(r, n), 1)
            }
            function zv(r, n) {
                return Wt(Lo(r, n), X)
            }
            function Hv(r, n, a) {
                return a = a === t ? 1 : je(a),
                Wt(Lo(r, n), a)
            }
            function Cl(r, n) {
                var a = Te(r) ? Tr : Ni;
                return a(r, me(n, 3))
            }
            function Al(r, n) {
                var a = Te(r) ? ag : xh;
                return a(r, me(n, 3))
            }
            var Bv = xo(function(r, n, a) {
                it.call(r, a) ? r[a].push(n) : li(r, a, [n])
            });
            function Kv(r, n, a, h) {
                r = dr(r) ? r : Tn(r),
                a = a && !h ? je(a) : 0;
                var y = r.length;
                return a < 0 && (a = Ht(y + a, 0)),
                Fo(r) ? a <= y && r.indexOf(n, a) > -1 : !!y && bn(r, n, a) > -1
            }
            var kv = Ke(function(r, n, a) {
                var h = -1
                  , y = typeof n == "function"
                  , _ = dr(r) ? H(r.length) : [];
                return Ni(r, function(C) {
                    _[++h] = y ? Bt(n, C, a) : ss(C, n, a)
                }),
                _
            })
              , Vv = xo(function(r, n, a) {
                li(r, a, n)
            });
            function Lo(r, n) {
                var a = Te(r) ? vt : Nh;
                return a(r, me(n, 3))
            }
            function Wv(r, n, a, h) {
                return r == null ? [] : (Te(n) || (n = n == null ? [] : [n]),
                a = h ? t : a,
                Te(a) || (a = a == null ? [] : [a]),
                Mh(r, n, a))
            }
            var Gv = xo(function(r, n, a) {
                r[a ? 0 : 1].push(n)
            }, function() {
                return [[], []]
            });
            function Yv(r, n, a) {
                var h = Te(r) ? Ha : ah
                  , y = arguments.length < 3;
                return h(r, me(n, 4), a, y, Ni)
            }
            function Jv(r, n, a) {
                var h = Te(r) ? cg : ah
                  , y = arguments.length < 3;
                return h(r, me(n, 4), a, y, xh)
            }
            function Qv(r, n) {
                var a = Te(r) ? Ci : Oh;
                return a(r, jo(me(n, 3)))
            }
            function Xv(r) {
                var n = Te(r) ? Eh : K0;
                return n(r)
            }
            function Zv(r, n, a) {
                (a ? nr(r, n, a) : n === t) ? n = 1 : n = je(n);
                var h = Te(r) ? _0 : k0;
                return h(r, n)
            }
            function em(r) {
                var n = Te(r) ? E0 : W0;
                return n(r)
            }
            function tm(r) {
                if (r == null)
                    return 0;
                if (dr(r))
                    return Fo(r) ? En(r) : r.length;
                var n = Qt(r);
                return n == Ee || n == Ie ? r.size : ac(r).length
            }
            function rm(r, n, a) {
                var h = Te(r) ? Ba : G0;
                return a && nr(r, n, a) && (n = t),
                h(r, me(n, 3))
            }
            var im = Ke(function(r, n) {
                if (r == null)
                    return [];
                var a = n.length;
                return a > 1 && nr(r, n[0], n[1]) ? n = [] : a > 2 && nr(n[0], n[1], n[2]) && (n = [n[0]]),
                Mh(r, Wt(n, 1), [])
            })
              , Uo = Mg || function() {
                return Qe.Date.now()
            }
            ;
            function nm(r, n) {
                if (typeof n != "function")
                    throw new Nr(d);
                return r = je(r),
                function() {
                    if (--r < 1)
                        return n.apply(this, arguments)
                }
            }
            function Rl(r, n, a) {
                return n = a ? t : n,
                n = r && n == null ? r.length : n,
                fi(r, u, t, t, t, t, n)
            }
            function Tl(r, n) {
                var a;
                if (typeof n != "function")
                    throw new Nr(d);
                return r = je(r),
                function() {
                    return --r > 0 && (a = n.apply(this, arguments)),
                    r <= 1 && (n = t),
                    a
                }
            }
            var Rc = Ke(function(r, n, a) {
                var h = B;
                if (a.length) {
                    var y = Ri(a, An(Rc));
                    h |= E
                }
                return fi(r, h, n, a, y)
            })
              , Nl = Ke(function(r, n, a) {
                var h = B | ee;
                if (a.length) {
                    var y = Ri(a, An(Nl));
                    h |= E
                }
                return fi(n, h, r, a, y)
            });
            function $l(r, n, a) {
                n = a ? t : n;
                var h = fi(r, U, t, t, t, t, t, n);
                return h.placeholder = $l.placeholder,
                h
            }
            function Ll(r, n, a) {
                n = a ? t : n;
                var h = fi(r, w, t, t, t, t, t, n);
                return h.placeholder = Ll.placeholder,
                h
            }
            function Ul(r, n, a) {
                var h, y, _, C, N, q, J = 0, Q = !1, ie = !1, ue = !0;
                if (typeof r != "function")
                    throw new Nr(d);
                n = jr(n) || 0,
                _t(a) && (Q = !!a.leading,
                ie = "maxWait"in a,
                _ = ie ? Ht(jr(a.maxWait) || 0, n) : _,
                ue = "trailing"in a ? !!a.trailing : ue);
                function ye(Tt) {
                    var Vr = h
                      , vi = y;
                    return h = y = t,
                    J = Tt,
                    C = r.apply(vi, Vr),
                    C
                }
                function we(Tt) {
                    return J = Tt,
                    N = hs(We, n),
                    Q ? ye(Tt) : C
                }
                function ze(Tt) {
                    var Vr = Tt - q
                      , vi = Tt - J
                      , tf = n - Vr;
                    return ie ? Jt(tf, _ - vi) : tf
                }
                function be(Tt) {
                    var Vr = Tt - q
                      , vi = Tt - J;
                    return q === t || Vr >= n || Vr < 0 || ie && vi >= _
                }
                function We() {
                    var Tt = Uo();
                    if (be(Tt))
                        return Xe(Tt);
                    N = hs(We, ze(Tt))
                }
                function Xe(Tt) {
                    return N = t,
                    ue && h ? ye(Tt) : (h = y = t,
                    C)
                }
                function Ir() {
                    N !== t && Vh(N),
                    J = 0,
                    h = q = y = N = t
                }
                function sr() {
                    return N === t ? C : Xe(Uo())
                }
                function xr() {
                    var Tt = Uo()
                      , Vr = be(Tt);
                    if (h = arguments,
                    y = this,
                    q = Tt,
                    Vr) {
                        if (N === t)
                            return we(q);
                        if (ie)
                            return Vh(N),
                            N = hs(We, n),
                            ye(q)
                    }
                    return N === t && (N = hs(We, n)),
                    C
                }
                return xr.cancel = Ir,
                xr.flush = sr,
                xr
            }
            var sm = Ke(function(r, n) {
                return Ih(r, 1, n)
            })
              , om = Ke(function(r, n, a) {
                return Ih(r, jr(n) || 0, a)
            });
            function am(r) {
                return fi(r, V)
            }
            function Mo(r, n) {
                if (typeof r != "function" || n != null && typeof n != "function")
                    throw new Nr(d);
                var a = function() {
                    var h = arguments
                      , y = n ? n.apply(this, h) : h[0]
                      , _ = a.cache;
                    if (_.has(y))
                        return _.get(y);
                    var C = r.apply(this, h);
                    return a.cache = _.set(y, C) || _,
                    C
                };
                return a.cache = new (Mo.Cache || hi),
                a
            }
            Mo.Cache = hi;
            function jo(r) {
                if (typeof r != "function")
                    throw new Nr(d);
                return function() {
                    var n = arguments;
                    switch (n.length) {
                    case 0:
                        return !r.call(this);
                    case 1:
                        return !r.call(this, n[0]);
                    case 2:
                        return !r.call(this, n[0], n[1]);
                    case 3:
                        return !r.call(this, n[0], n[1], n[2])
                    }
                    return !r.apply(this, n)
                }
            }
            function cm(r) {
                return Tl(2, r)
            }
            var um = Y0(function(r, n) {
                n = n.length == 1 && Te(n[0]) ? vt(n[0], Er(me())) : vt(Wt(n, 1), Er(me()));
                var a = n.length;
                return Ke(function(h) {
                    for (var y = -1, _ = Jt(h.length, a); ++y < _; )
                        h[y] = n[y].call(this, h[y]);
                    return Bt(r, this, h)
                })
            })
              , Tc = Ke(function(r, n) {
                var a = Ri(n, An(Tc));
                return fi(r, E, t, n, a)
            })
              , Ml = Ke(function(r, n) {
                var a = Ri(n, An(Ml));
                return fi(r, D, t, n, a)
            })
              , hm = di(function(r, n) {
                return fi(r, b, t, t, t, n)
            });
            function lm(r, n) {
                if (typeof r != "function")
                    throw new Nr(d);
                return n = n === t ? n : je(n),
                Ke(r, n)
            }
            function fm(r, n) {
                if (typeof r != "function")
                    throw new Nr(d);
                return n = n == null ? 0 : Ht(je(n), 0),
                Ke(function(a) {
                    var h = a[n]
                      , y = Ui(a, 0, n);
                    return h && Ai(y, h),
                    Bt(r, this, y)
                })
            }
            function dm(r, n, a) {
                var h = !0
                  , y = !0;
                if (typeof r != "function")
                    throw new Nr(d);
                return _t(a) && (h = "leading"in a ? !!a.leading : h,
                y = "trailing"in a ? !!a.trailing : y),
                Ul(r, n, {
                    leading: h,
                    maxWait: n,
                    trailing: y
                })
            }
            function pm(r) {
                return Rl(r, 1)
            }
            function gm(r, n) {
                return Tc(yc(n), r)
            }
            function ym() {
                if (!arguments.length)
                    return [];
                var r = arguments[0];
                return Te(r) ? r : [r]
            }
            function vm(r) {
                return Lr(r, A)
            }
            function mm(r, n) {
                return n = typeof n == "function" ? n : t,
                Lr(r, A, n)
            }
            function wm(r) {
                return Lr(r, S | A)
            }
            function bm(r, n) {
                return n = typeof n == "function" ? n : t,
                Lr(r, S | A, n)
            }
            function _m(r, n) {
                return n == null || Sh(r, n, Kt(n))
            }
            function kr(r, n) {
                return r === n || r !== r && n !== n
            }
            var Em = Ao(nc)
              , Dm = Ao(function(r, n) {
                return r >= n
            })
              , rn = Ah(function() {
                return arguments
            }()) ? Ah : function(r) {
                return Pt(r) && it.call(r, "callee") && !yh.call(r, "callee")
            }
              , Te = H.isArray
              , Sm = rr ? Er(rr) : T0;
            function dr(r) {
                return r != null && qo(r.length) && !gi(r)
            }
            function Rt(r) {
                return Pt(r) && dr(r)
            }
            function Im(r) {
                return r === !0 || r === !1 || Pt(r) && ir(r) == F
            }
            var Mi = qg || Bc
              , xm = Hr ? Er(Hr) : N0;
            function Om(r) {
                return Pt(r) && r.nodeType === 1 && !ls(r)
            }
            function Pm(r) {
                if (r == null)
                    return !0;
                if (dr(r) && (Te(r) || typeof r == "string" || typeof r.splice == "function" || Mi(r) || Rn(r) || rn(r)))
                    return !r.length;
                var n = Qt(r);
                if (n == Ee || n == Ie)
                    return !r.size;
                if (us(r))
                    return !ac(r).length;
                for (var a in r)
                    if (it.call(r, a))
                        return !1;
                return !0
            }
            function Cm(r, n) {
                return os(r, n)
            }
            function Am(r, n, a) {
                a = typeof a == "function" ? a : t;
                var h = a ? a(r, n) : t;
                return h === t ? os(r, n, t, a) : !!h
            }
            function Nc(r) {
                if (!Pt(r))
                    return !1;
                var n = ir(r);
                return n == R || n == l || typeof r.message == "string" && typeof r.name == "string" && !ls(r)
            }
            function Rm(r) {
                return typeof r == "number" && mh(r)
            }
            function gi(r) {
                if (!_t(r))
                    return !1;
                var n = ir(r);
                return n == se || n == he || n == z || n == pt
            }
            function jl(r) {
                return typeof r == "number" && r == je(r)
            }
            function qo(r) {
                return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k
            }
            function _t(r) {
                var n = typeof r;
                return r != null && (n == "object" || n == "function")
            }
            function Pt(r) {
                return r != null && typeof r == "object"
            }
            var ql = Rr ? Er(Rr) : L0;
            function Tm(r, n) {
                return r === n || oc(r, n, Dc(n))
            }
            function Nm(r, n, a) {
                return a = typeof a == "function" ? a : t,
                oc(r, n, Dc(n), a)
            }
            function $m(r) {
                return Fl(r) && r != +r
            }
            function Lm(r) {
                if (my(r))
                    throw new Ce(c);
                return Rh(r)
            }
            function Um(r) {
                return r === null
            }
            function Mm(r) {
                return r == null
            }
            function Fl(r) {
                return typeof r == "number" || Pt(r) && ir(r) == He
            }
            function ls(r) {
                if (!Pt(r) || ir(r) != Me)
                    return !1;
                var n = lo(r);
                if (n === null)
                    return !0;
                var a = it.call(n, "constructor") && n.constructor;
                return typeof a == "function" && a instanceof a && ao.call(a) == Ng
            }
            var $c = Xr ? Er(Xr) : U0;
            function jm(r) {
                return jl(r) && r >= -k && r <= k
            }
            var zl = Jn ? Er(Jn) : M0;
            function Fo(r) {
                return typeof r == "string" || !Te(r) && Pt(r) && ir(r) == Ne
            }
            function Sr(r) {
                return typeof r == "symbol" || Pt(r) && ir(r) == $e
            }
            var Rn = Gi ? Er(Gi) : j0;
            function qm(r) {
                return r === t
            }
            function Fm(r) {
                return Pt(r) && Qt(r) == Oe
            }
            function zm(r) {
                return Pt(r) && ir(r) == Le
            }
            var Hm = Ao(cc)
              , Bm = Ao(function(r, n) {
                return r <= n
            });
            function Hl(r) {
                if (!r)
                    return [];
                if (dr(r))
                    return Fo(r) ? Br(r) : fr(r);
                if (Xn && r[Xn])
                    return _g(r[Xn]());
                var n = Qt(r)
                  , a = n == Ee ? Ya : n == Ie ? no : Tn;
                return a(r)
            }
            function yi(r) {
                if (!r)
                    return r === 0 ? r : 0;
                if (r = jr(r),
                r === X || r === -X) {
                    var n = r < 0 ? -1 : 1;
                    return n * W
                }
                return r === r ? r : 0
            }
            function je(r) {
                var n = yi(r)
                  , a = n % 1;
                return n === n ? a ? n - a : n : 0
            }
            function Bl(r) {
                return r ? Xi(je(r), 0, ne) : 0
            }
            function jr(r) {
                if (typeof r == "number")
                    return r;
                if (Sr(r))
                    return re;
                if (_t(r)) {
                    var n = typeof r.valueOf == "function" ? r.valueOf() : r;
                    r = _t(n) ? n + "" : n
                }
                if (typeof r != "string")
                    return r === 0 ? r : +r;
                r = ch(r);
                var a = Sa.test(r);
                return a || xa.test(r) ? Re(r.slice(2), a ? 2 : 8) : Da.test(r) ? re : +r
            }
            function Kl(r) {
                return ei(r, pr(r))
            }
            function Km(r) {
                return r ? Xi(je(r), -k, k) : r === 0 ? r : 0
            }
            function rt(r) {
                return r == null ? "" : Dr(r)
            }
            var km = Pn(function(r, n) {
                if (us(n) || dr(n)) {
                    ei(n, Kt(n), r);
                    return
                }
                for (var a in n)
                    it.call(n, a) && is(r, a, n[a])
            })
              , kl = Pn(function(r, n) {
                ei(n, pr(n), r)
            })
              , zo = Pn(function(r, n, a, h) {
                ei(n, pr(n), r, h)
            })
              , Vm = Pn(function(r, n, a, h) {
                ei(n, Kt(n), r, h)
            })
              , Wm = di(tc);
            function Gm(r, n) {
                var a = On(r);
                return n == null ? a : Dh(a, n)
            }
            var Ym = Ke(function(r, n) {
                r = ct(r);
                var a = -1
                  , h = n.length
                  , y = h > 2 ? n[2] : t;
                for (y && nr(n[0], n[1], y) && (h = 1); ++a < h; )
                    for (var _ = n[a], C = pr(_), N = -1, q = C.length; ++N < q; ) {
                        var J = C[N]
                          , Q = r[J];
                        (Q === t || kr(Q, Sn[J]) && !it.call(r, J)) && (r[J] = _[J])
                    }
                return r
            })
              , Jm = Ke(function(r) {
                return r.push(t, cl),
                Bt(Vl, t, r)
            });
            function Qm(r, n) {
                return nh(r, me(n, 3), Zr)
            }
            function Xm(r, n) {
                return nh(r, me(n, 3), ic)
            }
            function Zm(r, n) {
                return r == null ? r : rc(r, me(n, 3), pr)
            }
            function ew(r, n) {
                return r == null ? r : Ph(r, me(n, 3), pr)
            }
            function tw(r, n) {
                return r && Zr(r, me(n, 3))
            }
            function rw(r, n) {
                return r && ic(r, me(n, 3))
            }
            function iw(r) {
                return r == null ? [] : Eo(r, Kt(r))
            }
            function nw(r) {
                return r == null ? [] : Eo(r, pr(r))
            }
            function Lc(r, n, a) {
                var h = r == null ? t : Zi(r, n);
                return h === t ? a : h
            }
            function sw(r, n) {
                return r != null && ll(r, n, P0)
            }
            function Uc(r, n) {
                return r != null && ll(r, n, C0)
            }
            var ow = il(function(r, n, a) {
                n != null && typeof n.toString != "function" && (n = co.call(n)),
                r[n] = a
            }, jc(gr))
              , aw = il(function(r, n, a) {
                n != null && typeof n.toString != "function" && (n = co.call(n)),
                it.call(r, n) ? r[n].push(a) : r[n] = [a]
            }, me)
              , cw = Ke(ss);
            function Kt(r) {
                return dr(r) ? _h(r) : ac(r)
            }
            function pr(r) {
                return dr(r) ? _h(r, !0) : q0(r)
            }
            function uw(r, n) {
                var a = {};
                return n = me(n, 3),
                Zr(r, function(h, y, _) {
                    li(a, n(h, y, _), h)
                }),
                a
            }
            function hw(r, n) {
                var a = {};
                return n = me(n, 3),
                Zr(r, function(h, y, _) {
                    li(a, y, n(h, y, _))
                }),
                a
            }
            var lw = Pn(function(r, n, a) {
                Do(r, n, a)
            })
              , Vl = Pn(function(r, n, a, h) {
                Do(r, n, a, h)
            })
              , fw = di(function(r, n) {
                var a = {};
                if (r == null)
                    return a;
                var h = !1;
                n = vt(n, function(_) {
                    return _ = Li(_, r),
                    h || (h = _.length > 1),
                    _
                }),
                ei(r, _c(r), a),
                h && (a = Lr(a, S | P | A, oy));
                for (var y = n.length; y--; )
                    dc(a, n[y]);
                return a
            });
            function dw(r, n) {
                return Wl(r, jo(me(n)))
            }
            var pw = di(function(r, n) {
                return r == null ? {} : z0(r, n)
            });
            function Wl(r, n) {
                if (r == null)
                    return {};
                var a = vt(_c(r), function(h) {
                    return [h]
                });
                return n = me(n),
                jh(r, a, function(h, y) {
                    return n(h, y[0])
                })
            }
            function gw(r, n, a) {
                n = Li(n, r);
                var h = -1
                  , y = n.length;
                for (y || (y = 1,
                r = t); ++h < y; ) {
                    var _ = r == null ? t : r[ti(n[h])];
                    _ === t && (h = y,
                    _ = a),
                    r = gi(_) ? _.call(r) : _
                }
                return r
            }
            function yw(r, n, a) {
                return r == null ? r : as(r, n, a)
            }
            function vw(r, n, a, h) {
                return h = typeof h == "function" ? h : t,
                r == null ? r : as(r, n, a, h)
            }
            var Gl = ol(Kt)
              , Yl = ol(pr);
            function mw(r, n, a) {
                var h = Te(r)
                  , y = h || Mi(r) || Rn(r);
                if (n = me(n, 4),
                a == null) {
                    var _ = r && r.constructor;
                    y ? a = h ? new _ : [] : _t(r) ? a = gi(_) ? On(lo(r)) : {} : a = {}
                }
                return (y ? Tr : Zr)(r, function(C, N, q) {
                    return n(a, C, N, q)
                }),
                a
            }
            function ww(r, n) {
                return r == null ? !0 : dc(r, n)
            }
            function bw(r, n, a) {
                return r == null ? r : Bh(r, n, yc(a))
            }
            function _w(r, n, a, h) {
                return h = typeof h == "function" ? h : t,
                r == null ? r : Bh(r, n, yc(a), h)
            }
            function Tn(r) {
                return r == null ? [] : Ga(r, Kt(r))
            }
            function Ew(r) {
                return r == null ? [] : Ga(r, pr(r))
            }
            function Dw(r, n, a) {
                return a === t && (a = n,
                n = t),
                a !== t && (a = jr(a),
                a = a === a ? a : 0),
                n !== t && (n = jr(n),
                n = n === n ? n : 0),
                Xi(jr(r), n, a)
            }
            function Sw(r, n, a) {
                return n = yi(n),
                a === t ? (a = n,
                n = 0) : a = yi(a),
                r = jr(r),
                A0(r, n, a)
            }
            function Iw(r, n, a) {
                if (a && typeof a != "boolean" && nr(r, n, a) && (n = a = t),
                a === t && (typeof n == "boolean" ? (a = n,
                n = t) : typeof r == "boolean" && (a = r,
                r = t)),
                r === t && n === t ? (r = 0,
                n = 1) : (r = yi(r),
                n === t ? (n = r,
                r = 0) : n = yi(n)),
                r > n) {
                    var h = r;
                    r = n,
                    n = h
                }
                if (a || r % 1 || n % 1) {
                    var y = wh();
                    return Jt(r + y * (n - r + ot("1e-" + ((y + "").length - 1))), n)
                }
                return hc(r, n)
            }
            var xw = Cn(function(r, n, a) {
                return n = n.toLowerCase(),
                r + (a ? Jl(n) : n)
            });
            function Jl(r) {
                return Mc(rt(r).toLowerCase())
            }
            function Ql(r) {
                return r = rt(r),
                r && r.replace(ai, yg).replace(qa, "")
            }
            function Ow(r, n, a) {
                r = rt(r),
                n = Dr(n);
                var h = r.length;
                a = a === t ? h : Xi(je(a), 0, h);
                var y = a;
                return a -= n.length,
                a >= 0 && r.slice(a, y) == n
            }
            function Pw(r) {
                return r = rt(r),
                r && gt.test(r) ? r.replace(Bi, vg) : r
            }
            function Cw(r) {
                return r = rt(r),
                r && Ut.test(r) ? r.replace(It, "\\$&") : r
            }
            var Aw = Cn(function(r, n, a) {
                return r + (a ? "-" : "") + n.toLowerCase()
            })
              , Rw = Cn(function(r, n, a) {
                return r + (a ? " " : "") + n.toLowerCase()
            })
              , Tw = el("toLowerCase");
            function Nw(r, n, a) {
                r = rt(r),
                n = je(n);
                var h = n ? En(r) : 0;
                if (!n || h >= n)
                    return r;
                var y = (n - h) / 2;
                return Co(yo(y), a) + r + Co(go(y), a)
            }
            function $w(r, n, a) {
                r = rt(r),
                n = je(n);
                var h = n ? En(r) : 0;
                return n && h < n ? r + Co(n - h, a) : r
            }
            function Lw(r, n, a) {
                r = rt(r),
                n = je(n);
                var h = n ? En(r) : 0;
                return n && h < n ? Co(n - h, a) + r : r
            }
            function Uw(r, n, a) {
                return a || n == null ? n = 0 : n && (n = +n),
                Bg(rt(r).replace(xt, ""), n || 0)
            }
            function Mw(r, n, a) {
                return (a ? nr(r, n, a) : n === t) ? n = 1 : n = je(n),
                lc(rt(r), n)
            }
            function jw() {
                var r = arguments
                  , n = rt(r[0]);
                return r.length < 3 ? n : n.replace(r[1], r[2])
            }
            var qw = Cn(function(r, n, a) {
                return r + (a ? "_" : "") + n.toLowerCase()
            });
            function Fw(r, n, a) {
                return a && typeof a != "number" && nr(r, n, a) && (n = a = t),
                a = a === t ? ne : a >>> 0,
                a ? (r = rt(r),
                r && (typeof n == "string" || n != null && !$c(n)) && (n = Dr(n),
                !n && _n(r)) ? Ui(Br(r), 0, a) : r.split(n, a)) : []
            }
            var zw = Cn(function(r, n, a) {
                return r + (a ? " " : "") + Mc(n)
            });
            function Hw(r, n, a) {
                return r = rt(r),
                a = a == null ? 0 : Xi(je(a), 0, r.length),
                n = Dr(n),
                r.slice(a, a + n.length) == n
            }
            function Bw(r, n, a) {
                var h = m.templateSettings;
                a && nr(r, n, a) && (n = t),
                r = rt(r),
                n = zo({}, n, h, al);
                var y = zo({}, n.imports, h.imports, al), _ = Kt(y), C = Ga(y, _), N, q, J = 0, Q = n.interpolate || dn, ie = "__p += '", ue = Ja((n.escape || dn).source + "|" + Q.source + "|" + (Q === bt ? Ea : dn).source + "|" + (n.evaluate || dn).source + "|$", "g"), ye = "//# sourceURL=" + (it.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Fa + "]") + `
`;
                r.replace(ue, function(be, We, Xe, Ir, sr, xr) {
                    return Xe || (Xe = Ir),
                    ie += r.slice(J, xr).replace(Pa, mg),
                    We && (N = !0,
                    ie += `' +
__e(` + We + `) +
'`),
                    sr && (q = !0,
                    ie += `';
` + sr + `;
__p += '`),
                    Xe && (ie += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`),
                    J = xr + be.length,
                    be
                }),
                ie += `';
`;
                var we = it.call(n, "variable") && n.variable;
                if (!we)
                    ie = `with (obj) {
` + ie + `
}
`;
                else if (ba.test(we))
                    throw new Ce(f);
                ie = (q ? ie.replace(Jr, "") : ie).replace(tr, "$1").replace(oi, "$1;"),
                ie = "function(" + (we || "obj") + `) {
` + (we ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
                var ze = Zl(function() {
                    return tt(_, ye + "return " + ie).apply(t, C)
                });
                if (ze.source = ie,
                Nc(ze))
                    throw ze;
                return ze
            }
            function Kw(r) {
                return rt(r).toLowerCase()
            }
            function kw(r) {
                return rt(r).toUpperCase()
            }
            function Vw(r, n, a) {
                if (r = rt(r),
                r && (a || n === t))
                    return ch(r);
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Br(r)
                  , y = Br(n)
                  , _ = uh(h, y)
                  , C = hh(h, y) + 1;
                return Ui(h, _, C).join("")
            }
            function Ww(r, n, a) {
                if (r = rt(r),
                r && (a || n === t))
                    return r.slice(0, fh(r) + 1);
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Br(r)
                  , y = hh(h, Br(n)) + 1;
                return Ui(h, 0, y).join("")
            }
            function Gw(r, n, a) {
                if (r = rt(r),
                r && (a || n === t))
                    return r.replace(xt, "");
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Br(r)
                  , y = uh(h, Br(n));
                return Ui(h, y).join("")
            }
            function Yw(r, n) {
                var a = G
                  , h = oe;
                if (_t(n)) {
                    var y = "separator"in n ? n.separator : y;
                    a = "length"in n ? je(n.length) : a,
                    h = "omission"in n ? Dr(n.omission) : h
                }
                r = rt(r);
                var _ = r.length;
                if (_n(r)) {
                    var C = Br(r);
                    _ = C.length
                }
                if (a >= _)
                    return r;
                var N = a - En(h);
                if (N < 1)
                    return h;
                var q = C ? Ui(C, 0, N).join("") : r.slice(0, N);
                if (y === t)
                    return q + h;
                if (C && (N += q.length - N),
                $c(y)) {
                    if (r.slice(N).search(y)) {
                        var J, Q = q;
                        for (y.global || (y = Ja(y.source, rt(Ar.exec(y)) + "g")),
                        y.lastIndex = 0; J = y.exec(Q); )
                            var ie = J.index;
                        q = q.slice(0, ie === t ? N : ie)
                    }
                } else if (r.indexOf(Dr(y), N) != N) {
                    var ue = q.lastIndexOf(y);
                    ue > -1 && (q = q.slice(0, ue))
                }
                return q + h
            }
            function Jw(r) {
                return r = rt(r),
                r && Et.test(r) ? r.replace(Oi, Ig) : r
            }
            var Qw = Cn(function(r, n, a) {
                return r + (a ? " " : "") + n.toUpperCase()
            })
              , Mc = el("toUpperCase");
            function Xl(r, n, a) {
                return r = rt(r),
                n = a ? t : n,
                n === t ? bg(r) ? Pg(r) : lg(r) : r.match(n) || []
            }
            var Zl = Ke(function(r, n) {
                try {
                    return Bt(r, t, n)
                } catch (a) {
                    return Nc(a) ? a : new Ce(a)
                }
            })
              , Xw = di(function(r, n) {
                return Tr(n, function(a) {
                    a = ti(a),
                    li(r, a, Rc(r[a], r))
                }),
                r
            });
            function Zw(r) {
                var n = r == null ? 0 : r.length
                  , a = me();
                return r = n ? vt(r, function(h) {
                    if (typeof h[1] != "function")
                        throw new Nr(d);
                    return [a(h[0]), h[1]]
                }) : [],
                Ke(function(h) {
                    for (var y = -1; ++y < n; ) {
                        var _ = r[y];
                        if (Bt(_[0], this, h))
                            return Bt(_[1], this, h)
                    }
                })
            }
            function e1(r) {
                return I0(Lr(r, S))
            }
            function jc(r) {
                return function() {
                    return r
                }
            }
            function t1(r, n) {
                return r == null || r !== r ? n : r
            }
            var r1 = rl()
              , i1 = rl(!0);
            function gr(r) {
                return r
            }
            function qc(r) {
                return Th(typeof r == "function" ? r : Lr(r, S))
            }
            function n1(r) {
                return $h(Lr(r, S))
            }
            function s1(r, n) {
                return Lh(r, Lr(n, S))
            }
            var o1 = Ke(function(r, n) {
                return function(a) {
                    return ss(a, r, n)
                }
            })
              , a1 = Ke(function(r, n) {
                return function(a) {
                    return ss(r, a, n)
                }
            });
            function Fc(r, n, a) {
                var h = Kt(n)
                  , y = Eo(n, h);
                a == null && !(_t(n) && (y.length || !h.length)) && (a = n,
                n = r,
                r = this,
                y = Eo(n, Kt(n)));
                var _ = !(_t(a) && "chain"in a) || !!a.chain
                  , C = gi(r);
                return Tr(y, function(N) {
                    var q = n[N];
                    r[N] = q,
                    C && (r.prototype[N] = function() {
                        var J = this.__chain__;
                        if (_ || J) {
                            var Q = r(this.__wrapped__)
                              , ie = Q.__actions__ = fr(this.__actions__);
                            return ie.push({
                                func: q,
                                args: arguments,
                                thisArg: r
                            }),
                            Q.__chain__ = J,
                            Q
                        }
                        return q.apply(r, Ai([this.value()], arguments))
                    }
                    )
                }),
                r
            }
            function c1() {
                return Qe._ === this && (Qe._ = $g),
                this
            }
            function zc() {}
            function u1(r) {
                return r = je(r),
                Ke(function(n) {
                    return Uh(n, r)
                })
            }
            var h1 = mc(vt)
              , l1 = mc(ih)
              , f1 = mc(Ba);
            function ef(r) {
                return Ic(r) ? Ka(ti(r)) : H0(r)
            }
            function d1(r) {
                return function(n) {
                    return r == null ? t : Zi(r, n)
                }
            }
            var p1 = nl()
              , g1 = nl(!0);
            function Hc() {
                return []
            }
            function Bc() {
                return !1
            }
            function y1() {
                return {}
            }
            function v1() {
                return ""
            }
            function m1() {
                return !0
            }
            function w1(r, n) {
                if (r = je(r),
                r < 1 || r > k)
                    return [];
                var a = ne
                  , h = Jt(r, ne);
                n = me(n),
                r -= ne;
                for (var y = Wa(h, n); ++a < r; )
                    n(a);
                return y
            }
            function b1(r) {
                return Te(r) ? vt(r, ti) : Sr(r) ? [r] : fr(bl(rt(r)))
            }
            function _1(r) {
                var n = ++Tg;
                return rt(r) + n
            }
            var E1 = Po(function(r, n) {
                return r + n
            }, 0)
              , D1 = wc("ceil")
              , S1 = Po(function(r, n) {
                return r / n
            }, 1)
              , I1 = wc("floor");
            function x1(r) {
                return r && r.length ? _o(r, gr, nc) : t
            }
            function O1(r, n) {
                return r && r.length ? _o(r, me(n, 2), nc) : t
            }
            function P1(r) {
                return oh(r, gr)
            }
            function C1(r, n) {
                return oh(r, me(n, 2))
            }
            function A1(r) {
                return r && r.length ? _o(r, gr, cc) : t
            }
            function R1(r, n) {
                return r && r.length ? _o(r, me(n, 2), cc) : t
            }
            var T1 = Po(function(r, n) {
                return r * n
            }, 1)
              , N1 = wc("round")
              , $1 = Po(function(r, n) {
                return r - n
            }, 0);
            function L1(r) {
                return r && r.length ? Va(r, gr) : 0
            }
            function U1(r, n) {
                return r && r.length ? Va(r, me(n, 2)) : 0
            }
            return m.after = nm,
            m.ary = Rl,
            m.assign = km,
            m.assignIn = kl,
            m.assignInWith = zo,
            m.assignWith = Vm,
            m.at = Wm,
            m.before = Tl,
            m.bind = Rc,
            m.bindAll = Xw,
            m.bindKey = Nl,
            m.castArray = ym,
            m.chain = Pl,
            m.chunk = Iy,
            m.compact = xy,
            m.concat = Oy,
            m.cond = Zw,
            m.conforms = e1,
            m.constant = jc,
            m.countBy = Lv,
            m.create = Gm,
            m.curry = $l,
            m.curryRight = Ll,
            m.debounce = Ul,
            m.defaults = Ym,
            m.defaultsDeep = Jm,
            m.defer = sm,
            m.delay = om,
            m.difference = Py,
            m.differenceBy = Cy,
            m.differenceWith = Ay,
            m.drop = Ry,
            m.dropRight = Ty,
            m.dropRightWhile = Ny,
            m.dropWhile = $y,
            m.fill = Ly,
            m.filter = Mv,
            m.flatMap = Fv,
            m.flatMapDeep = zv,
            m.flatMapDepth = Hv,
            m.flatten = Sl,
            m.flattenDeep = Uy,
            m.flattenDepth = My,
            m.flip = am,
            m.flow = r1,
            m.flowRight = i1,
            m.fromPairs = jy,
            m.functions = iw,
            m.functionsIn = nw,
            m.groupBy = Bv,
            m.initial = Fy,
            m.intersection = zy,
            m.intersectionBy = Hy,
            m.intersectionWith = By,
            m.invert = ow,
            m.invertBy = aw,
            m.invokeMap = kv,
            m.iteratee = qc,
            m.keyBy = Vv,
            m.keys = Kt,
            m.keysIn = pr,
            m.map = Lo,
            m.mapKeys = uw,
            m.mapValues = hw,
            m.matches = n1,
            m.matchesProperty = s1,
            m.memoize = Mo,
            m.merge = lw,
            m.mergeWith = Vl,
            m.method = o1,
            m.methodOf = a1,
            m.mixin = Fc,
            m.negate = jo,
            m.nthArg = u1,
            m.omit = fw,
            m.omitBy = dw,
            m.once = cm,
            m.orderBy = Wv,
            m.over = h1,
            m.overArgs = um,
            m.overEvery = l1,
            m.overSome = f1,
            m.partial = Tc,
            m.partialRight = Ml,
            m.partition = Gv,
            m.pick = pw,
            m.pickBy = Wl,
            m.property = ef,
            m.propertyOf = d1,
            m.pull = Wy,
            m.pullAll = xl,
            m.pullAllBy = Gy,
            m.pullAllWith = Yy,
            m.pullAt = Jy,
            m.range = p1,
            m.rangeRight = g1,
            m.rearg = hm,
            m.reject = Qv,
            m.remove = Qy,
            m.rest = lm,
            m.reverse = Cc,
            m.sampleSize = Zv,
            m.set = yw,
            m.setWith = vw,
            m.shuffle = em,
            m.slice = Xy,
            m.sortBy = im,
            m.sortedUniq = sv,
            m.sortedUniqBy = ov,
            m.split = Fw,
            m.spread = fm,
            m.tail = av,
            m.take = cv,
            m.takeRight = uv,
            m.takeRightWhile = hv,
            m.takeWhile = lv,
            m.tap = xv,
            m.throttle = dm,
            m.thru = $o,
            m.toArray = Hl,
            m.toPairs = Gl,
            m.toPairsIn = Yl,
            m.toPath = b1,
            m.toPlainObject = Kl,
            m.transform = mw,
            m.unary = pm,
            m.union = fv,
            m.unionBy = dv,
            m.unionWith = pv,
            m.uniq = gv,
            m.uniqBy = yv,
            m.uniqWith = vv,
            m.unset = ww,
            m.unzip = Ac,
            m.unzipWith = Ol,
            m.update = bw,
            m.updateWith = _w,
            m.values = Tn,
            m.valuesIn = Ew,
            m.without = mv,
            m.words = Xl,
            m.wrap = gm,
            m.xor = wv,
            m.xorBy = bv,
            m.xorWith = _v,
            m.zip = Ev,
            m.zipObject = Dv,
            m.zipObjectDeep = Sv,
            m.zipWith = Iv,
            m.entries = Gl,
            m.entriesIn = Yl,
            m.extend = kl,
            m.extendWith = zo,
            Fc(m, m),
            m.add = E1,
            m.attempt = Zl,
            m.camelCase = xw,
            m.capitalize = Jl,
            m.ceil = D1,
            m.clamp = Dw,
            m.clone = vm,
            m.cloneDeep = wm,
            m.cloneDeepWith = bm,
            m.cloneWith = mm,
            m.conformsTo = _m,
            m.deburr = Ql,
            m.defaultTo = t1,
            m.divide = S1,
            m.endsWith = Ow,
            m.eq = kr,
            m.escape = Pw,
            m.escapeRegExp = Cw,
            m.every = Uv,
            m.find = jv,
            m.findIndex = El,
            m.findKey = Qm,
            m.findLast = qv,
            m.findLastIndex = Dl,
            m.findLastKey = Xm,
            m.floor = I1,
            m.forEach = Cl,
            m.forEachRight = Al,
            m.forIn = Zm,
            m.forInRight = ew,
            m.forOwn = tw,
            m.forOwnRight = rw,
            m.get = Lc,
            m.gt = Em,
            m.gte = Dm,
            m.has = sw,
            m.hasIn = Uc,
            m.head = Il,
            m.identity = gr,
            m.includes = Kv,
            m.indexOf = qy,
            m.inRange = Sw,
            m.invoke = cw,
            m.isArguments = rn,
            m.isArray = Te,
            m.isArrayBuffer = Sm,
            m.isArrayLike = dr,
            m.isArrayLikeObject = Rt,
            m.isBoolean = Im,
            m.isBuffer = Mi,
            m.isDate = xm,
            m.isElement = Om,
            m.isEmpty = Pm,
            m.isEqual = Cm,
            m.isEqualWith = Am,
            m.isError = Nc,
            m.isFinite = Rm,
            m.isFunction = gi,
            m.isInteger = jl,
            m.isLength = qo,
            m.isMap = ql,
            m.isMatch = Tm,
            m.isMatchWith = Nm,
            m.isNaN = $m,
            m.isNative = Lm,
            m.isNil = Mm,
            m.isNull = Um,
            m.isNumber = Fl,
            m.isObject = _t,
            m.isObjectLike = Pt,
            m.isPlainObject = ls,
            m.isRegExp = $c,
            m.isSafeInteger = jm,
            m.isSet = zl,
            m.isString = Fo,
            m.isSymbol = Sr,
            m.isTypedArray = Rn,
            m.isUndefined = qm,
            m.isWeakMap = Fm,
            m.isWeakSet = zm,
            m.join = Ky,
            m.kebabCase = Aw,
            m.last = Mr,
            m.lastIndexOf = ky,
            m.lowerCase = Rw,
            m.lowerFirst = Tw,
            m.lt = Hm,
            m.lte = Bm,
            m.max = x1,
            m.maxBy = O1,
            m.mean = P1,
            m.meanBy = C1,
            m.min = A1,
            m.minBy = R1,
            m.stubArray = Hc,
            m.stubFalse = Bc,
            m.stubObject = y1,
            m.stubString = v1,
            m.stubTrue = m1,
            m.multiply = T1,
            m.nth = Vy,
            m.noConflict = c1,
            m.noop = zc,
            m.now = Uo,
            m.pad = Nw,
            m.padEnd = $w,
            m.padStart = Lw,
            m.parseInt = Uw,
            m.random = Iw,
            m.reduce = Yv,
            m.reduceRight = Jv,
            m.repeat = Mw,
            m.replace = jw,
            m.result = gw,
            m.round = N1,
            m.runInContext = j,
            m.sample = Xv,
            m.size = tm,
            m.snakeCase = qw,
            m.some = rm,
            m.sortedIndex = Zy,
            m.sortedIndexBy = ev,
            m.sortedIndexOf = tv,
            m.sortedLastIndex = rv,
            m.sortedLastIndexBy = iv,
            m.sortedLastIndexOf = nv,
            m.startCase = zw,
            m.startsWith = Hw,
            m.subtract = $1,
            m.sum = L1,
            m.sumBy = U1,
            m.template = Bw,
            m.times = w1,
            m.toFinite = yi,
            m.toInteger = je,
            m.toLength = Bl,
            m.toLower = Kw,
            m.toNumber = jr,
            m.toSafeInteger = Km,
            m.toString = rt,
            m.toUpper = kw,
            m.trim = Vw,
            m.trimEnd = Ww,
            m.trimStart = Gw,
            m.truncate = Yw,
            m.unescape = Jw,
            m.uniqueId = _1,
            m.upperCase = Qw,
            m.upperFirst = Mc,
            m.each = Cl,
            m.eachRight = Al,
            m.first = Il,
            Fc(m, function() {
                var r = {};
                return Zr(m, function(n, a) {
                    it.call(m.prototype, a) || (r[a] = n)
                }),
                r
            }(), {
                chain: !1
            }),
            m.VERSION = s,
            Tr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
                m[r].placeholder = m
            }),
            Tr(["drop", "take"], function(r, n) {
                Ye.prototype[r] = function(a) {
                    a = a === t ? 1 : Ht(je(a), 0);
                    var h = this.__filtered__ && !n ? new Ye(this) : this.clone();
                    return h.__filtered__ ? h.__takeCount__ = Jt(a, h.__takeCount__) : h.__views__.push({
                        size: Jt(a, ne),
                        type: r + (h.__dir__ < 0 ? "Right" : "")
                    }),
                    h
                }
                ,
                Ye.prototype[r + "Right"] = function(a) {
                    return this.reverse()[r](a).reverse()
                }
            }),
            Tr(["filter", "map", "takeWhile"], function(r, n) {
                var a = n + 1
                  , h = a == I || a == te;
                Ye.prototype[r] = function(y) {
                    var _ = this.clone();
                    return _.__iteratees__.push({
                        iteratee: me(y, 3),
                        type: a
                    }),
                    _.__filtered__ = _.__filtered__ || h,
                    _
                }
            }),
            Tr(["head", "last"], function(r, n) {
                var a = "take" + (n ? "Right" : "");
                Ye.prototype[r] = function() {
                    return this[a](1).value()[0]
                }
            }),
            Tr(["initial", "tail"], function(r, n) {
                var a = "drop" + (n ? "" : "Right");
                Ye.prototype[r] = function() {
                    return this.__filtered__ ? new Ye(this) : this[a](1)
                }
            }),
            Ye.prototype.compact = function() {
                return this.filter(gr)
            }
            ,
            Ye.prototype.find = function(r) {
                return this.filter(r).head()
            }
            ,
            Ye.prototype.findLast = function(r) {
                return this.reverse().find(r)
            }
            ,
            Ye.prototype.invokeMap = Ke(function(r, n) {
                return typeof r == "function" ? new Ye(this) : this.map(function(a) {
                    return ss(a, r, n)
                })
            }),
            Ye.prototype.reject = function(r) {
                return this.filter(jo(me(r)))
            }
            ,
            Ye.prototype.slice = function(r, n) {
                r = je(r);
                var a = this;
                return a.__filtered__ && (r > 0 || n < 0) ? new Ye(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)),
                n !== t && (n = je(n),
                a = n < 0 ? a.dropRight(-n) : a.take(n - r)),
                a)
            }
            ,
            Ye.prototype.takeRightWhile = function(r) {
                return this.reverse().takeWhile(r).reverse()
            }
            ,
            Ye.prototype.toArray = function() {
                return this.take(ne)
            }
            ,
            Zr(Ye.prototype, function(r, n) {
                var a = /^(?:filter|find|map|reject)|While$/.test(n)
                  , h = /^(?:head|last)$/.test(n)
                  , y = m[h ? "take" + (n == "last" ? "Right" : "") : n]
                  , _ = h || /^find/.test(n);
                y && (m.prototype[n] = function() {
                    var C = this.__wrapped__
                      , N = h ? [1] : arguments
                      , q = C instanceof Ye
                      , J = N[0]
                      , Q = q || Te(C)
                      , ie = function(We) {
                        var Xe = y.apply(m, Ai([We], N));
                        return h && ue ? Xe[0] : Xe
                    };
                    Q && a && typeof J == "function" && J.length != 1 && (q = Q = !1);
                    var ue = this.__chain__
                      , ye = !!this.__actions__.length
                      , we = _ && !ue
                      , ze = q && !ye;
                    if (!_ && Q) {
                        C = ze ? C : new Ye(this);
                        var be = r.apply(C, N);
                        return be.__actions__.push({
                            func: $o,
                            args: [ie],
                            thisArg: t
                        }),
                        new $r(be,ue)
                    }
                    return we && ze ? r.apply(this, N) : (be = this.thru(ie),
                    we ? h ? be.value()[0] : be.value() : be)
                }
                )
            }),
            Tr(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
                var n = so[r]
                  , a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru"
                  , h = /^(?:pop|shift)$/.test(r);
                m.prototype[r] = function() {
                    var y = arguments;
                    if (h && !this.__chain__) {
                        var _ = this.value();
                        return n.apply(Te(_) ? _ : [], y)
                    }
                    return this[a](function(C) {
                        return n.apply(Te(C) ? C : [], y)
                    })
                }
            }),
            Zr(Ye.prototype, function(r, n) {
                var a = m[n];
                if (a) {
                    var h = a.name + "";
                    it.call(xn, h) || (xn[h] = []),
                    xn[h].push({
                        name: n,
                        func: a
                    })
                }
            }),
            xn[Oo(t, ee).name] = [{
                name: "wrapper",
                func: t
            }],
            Ye.prototype.clone = Jg,
            Ye.prototype.reverse = Qg,
            Ye.prototype.value = Xg,
            m.prototype.at = Ov,
            m.prototype.chain = Pv,
            m.prototype.commit = Cv,
            m.prototype.next = Av,
            m.prototype.plant = Tv,
            m.prototype.reverse = Nv,
            m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = $v,
            m.prototype.first = m.prototype.head,
            Xn && (m.prototype[Xn] = Rv),
            m
        }
          , Dn = Cg();
        At ? ((At.exports = Dn)._ = Dn,
        at._ = Dn) : Qe._ = Dn
    }
    ).call(ms)
}
)(Ru, Ru.exports);
var XI = Object.defineProperty
  , ZI = Object.defineProperties
  , e5 = Object.getOwnPropertyDescriptors
  , Ud = Object.getOwnPropertySymbols
  , t5 = Object.prototype.hasOwnProperty
  , r5 = Object.prototype.propertyIsEnumerable
  , Md = (i, e, t) => e in i ? XI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Go = (i, e) => {
    for (var t in e || (e = {}))
        t5.call(e, t) && Md(i, t, e[t]);
    if (Ud)
        for (var t of Ud(e))
            r5.call(e, t) && Md(i, t, e[t]);
    return i
}
  , i5 = (i, e) => ZI(i, e5(e));
function Fi(i, e, t) {
    var s;
    const o = NE(i);
    return ((s = e.rpcMap) == null ? void 0 : s[o.reference]) || `${QI}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
}
function fn(i) {
    return i.includes(":") ? i.split(":")[1] : i
}
function ng(i) {
    return i.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}
function n5(i, e) {
    const t = Object.keys(e.namespaces).filter(o => o.includes(i));
    if (!t.length)
        return [];
    const s = [];
    return t.forEach(o => {
        const c = e.namespaces[o].accounts;
        s.push(...c)
    }
    ),
    s
}
function jd(i={}, e={}) {
    const t = qd(i)
      , s = qd(e);
    return Ru.exports.merge(t, s)
}
function qd(i) {
    var e, t, s, o;
    const c = {};
    if (!xs(i))
        return c;
    for (const [d,f] of Object.entries(i)) {
        const p = Vu(d) ? [d] : f.chains
          , g = f.methods || []
          , v = f.events || []
          , S = f.rpcMap || {}
          , P = ws(d);
        c[P] = i5(Go(Go({}, c[P]), f), {
            chains: Yc(p, (e = c[P]) == null ? void 0 : e.chains),
            methods: Yc(g, (t = c[P]) == null ? void 0 : t.methods),
            events: Yc(v, (s = c[P]) == null ? void 0 : s.events),
            rpcMap: Go(Go({}, S), (o = c[P]) == null ? void 0 : o.rpcMap)
        })
    }
    return c
}
function s5(i) {
    return i.includes(":") ? i.split(":")[2] : i
}
function o5(i) {
    const e = {};
    for (const [t,s] of Object.entries(i)) {
        const o = s.methods || []
          , c = s.events || []
          , d = s.accounts || []
          , f = Vu(t) ? [t] : s.chains ? s.chains : ng(s.accounts);
        e[t] = {
            chains: f,
            methods: o,
            events: c,
            accounts: d
        }
    }
    return e
}
function au(i) {
    return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i,
    isNaN(Number(i)) ? i : Number(i))
}
const sg = {}
  , wt = i => sg[i]
  , cu = (i, e) => {
    sg[i] = e
}
;
class a5 {
    constructor(e) {
        this.name = "polkadot",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = fn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class c5 {
    constructor(e) {
        this.name = "eip155",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(e) {
        switch (e.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(e);
        case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
        this.chainId = parseInt(e),
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        const s = t || Fi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = parseInt(fn(t));
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    getHttpProvider() {
        const e = this.chainId
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    async handleSwitchChain(e) {
        var t, s;
        let o = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
        o = o.startsWith("0x") ? o : `0x${o}`;
        const c = parseInt(o, 16);
        if (this.isChainApproved(c))
            this.setDefaultChain(`${c}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: e.topic,
                request: {
                    method: e.request.method,
                    params: [{
                        chainId: o
                    }]
                },
                chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
            }),
            this.setDefaultChain(`${c}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
}
class u5 {
    constructor(e) {
        this.name = "solana",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = fn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class h5 {
    constructor(e) {
        this.name = "cosmos",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = fn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class l5 {
    constructor(e) {
        this.name = "cip34",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            const s = this.getCardanoRPCUrl(t)
              , o = fn(t);
            e[o] = this.createHttpProvider(o, s)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        const t = this.namespace.rpcMap;
        if (t)
            return t[e]
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || this.getCardanoRPCUrl(e);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class f5 {
    constructor(e) {
        this.name = "elrond",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = fn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class d5 {
    constructor(e) {
        this.name = "multiversx",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = fn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
class p5 {
    constructor(e) {
        this.name = "near",
        this.namespace = e.namespace,
        this.events = wt("events"),
        this.client = wt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const s = t || Fi(`${this.name}:${e}`, this.namespace);
            if (!s)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace);
        return typeof s > "u" ? void 0 : new Ii(new Hi(s,wt("disableProviderPing")))
    }
}
var g5 = Object.defineProperty
  , y5 = Object.defineProperties
  , v5 = Object.getOwnPropertyDescriptors
  , Fd = Object.getOwnPropertySymbols
  , m5 = Object.prototype.hasOwnProperty
  , w5 = Object.prototype.propertyIsEnumerable
  , zd = (i, e, t) => e in i ? g5(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Yo = (i, e) => {
    for (var t in e || (e = {}))
        m5.call(e, t) && zd(i, t, e[t]);
    if (Fd)
        for (var t of Fd(e))
            w5.call(e, t) && zd(i, t, e[t]);
    return i
}
  , uu = (i, e) => y5(i, v5(e));
class th {
    constructor(e) {
        this.events = new Lu,
        this.rpcProviders = {},
        this.shouldAbortPairingAttempt = !1,
        this.maxPairingAttempts = 10,
        this.disableProviderPing = !1,
        this.providerOpts = e,
        this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : da(pa({
            level: (e == null ? void 0 : e.logger) || $d
        })),
        this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1
    }
    static async init(e) {
        const t = new th(e);
        return await t.initialize(),
        t
    }
    async request(e, t, s) {
        const [o,c] = this.validateChain(t);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(o).request({
            request: Yo({}, e),
            chainId: `${o}:${c}`,
            topic: this.session.topic,
            expiry: s
        })
    }
    sendAsync(e, t, s, o) {
        const c = new Date().getTime();
        this.request(e, s, o).then(d => t(null, ga(c, d))).catch(d => t(d, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var e;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (e = this.session) == null ? void 0 : e.topic,
            reason: mt("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(e) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e),
        await this.cleanupPendingPairings(),
        !e.skipPairing)
            return await this.pair(e.pairingTopic)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
            if (this.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
            const {uri: s, approval: o} = await this.client.connect({
                pairingTopic: e,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            s && (this.uri = s,
            this.events.emit("display_uri", s)),
            await o().then(c => {
                this.session = c;
                const d = o5(c.namespaces);
                this.namespaces = jd(this.namespaces, d),
                this.persist("namespaces", this.namespaces)
            }
            ).catch(c => {
                if (c.message !== rg)
                    throw c;
                t++
            }
            )
        } while (!this.session);
        return this.onConnect(),
        this.session
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session)
                return;
            const [s,o] = this.validateChain(e);
            this.getProvider(s).setDefaultChain(o, t)
        } catch (s) {
            if (!/Please call connect/.test(s.message))
                throw s
        }
    }
    async cleanupPendingPairings(e={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (si(t)) {
            for (const s of t)
                e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.client.session.length) {
            const e = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[e]),
            this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await qI.init({
            logger: this.providerOpts.logger || $d,
            relayUrl: this.providerOpts.relayUrl || GI,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }),
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [...new Set(Object.keys(this.session.namespaces).map(t => ws(t)))];
        cu("client", this.client),
        cu("events", this.events),
        cu("disableProviderPing", this.disableProviderPing),
        e.forEach(t => {
            if (!this.session)
                return;
            const s = n5(t, this.session)
              , o = ng(s)
              , c = jd(this.namespaces, this.optionalNamespaces)
              , d = uu(Yo({}, c[t]), {
                accounts: s,
                chains: o
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new c5({
                    namespace: d
                });
                break;
            case "solana":
                this.rpcProviders[t] = new u5({
                    namespace: d
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new h5({
                    namespace: d
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new a5({
                    namespace: d
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new l5({
                    namespace: d
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new f5({
                    namespace: d
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new d5({
                    namespace: d
                });
                break;
            case "near":
                this.rpcProviders[t] = new p5({
                    namespace: d
                });
                break
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", e => {
            this.events.emit("session_ping", e)
        }
        ),
        this.client.on("session_event", e => {
            const {params: t} = e
              , {event: s} = t;
            if (s.name === "accountsChanged") {
                const o = s.data;
                o && si(o) && this.events.emit("accountsChanged", o.map(s5))
            } else if (s.name === "chainChanged") {
                const o = t.chainId
                  , c = t.event.data
                  , d = ws(o)
                  , f = au(o) !== au(c) ? `${d}:${au(c)}` : o;
                this.onChainChanged(f)
            } else
                this.events.emit(s.name, s.data);
            this.events.emit("session_event", e)
        }
        ),
        this.client.on("session_update", ({topic: e, params: t}) => {
            var s;
            const {namespaces: o} = t
              , c = (s = this.client) == null ? void 0 : s.session.get(e);
            this.session = uu(Yo({}, c), {
                namespaces: o
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }
        ),
        this.client.on("session_delete", async e => {
            await this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", uu(Yo({}, mt("USER_DISCONNECTED")), {
                data: e.topic
            }))
        }
        ),
        this.on(xi.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        if (!this.rpcProviders[e])
            throw new Error(`Provider not found: ${e}`);
        return this.rpcProviders[e]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
            var t;
            this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e])
        }
        )
    }
    setNamespaces(e) {
        const {namespaces: t, optionalNamespaces: s, sessionProperties: o} = e;
        t && Object.keys(t).length && (this.namespaces = t),
        s && Object.keys(s).length && (this.optionalNamespaces = s),
        this.sessionProperties = o,
        this.persist("namespaces", t),
        this.persist("optionalNamespaces", s)
    }
    validateChain(e) {
        const [t,s] = (e == null ? void 0 : e.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, s];
        if (t && !Object.keys(this.namespaces || {}).map(d => ws(d)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && s)
            return [t, s];
        const o = ws(Object.keys(this.namespaces)[0])
          , c = this.rpcProviders[o].getDefaultChain();
        return [o, c]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    onChainChanged(e, t=!1) {
        if (!this.namespaces)
            return;
        const [s,o] = this.validateChain(e);
        o && (t || this.getProvider(s).setDefaultChain(o),
        this.namespaces[s] ? this.namespaces[s].defaultChain = o : this.namespaces[`${s}:${o}`] ? this.namespaces[`${s}:${o}`].defaultChain = o : this.namespaces[`${s}:${o}`] = {
            defaultChain: o
        },
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", o))
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0,
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        this.persist("namespaces", void 0),
        this.persist("optionalNamespaces", void 0),
        this.persist("sessionProperties", void 0),
        await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(e, t) {
        this.client.core.storage.setItem(`${Ld}/${e}`, t)
    }
    async getFromStore(e) {
        return await this.client.core.storage.getItem(`${Ld}/${e}`)
    }
}
const b5 = th
  , _5 = "wc"
  , E5 = "ethereum_provider"
  , D5 = `${_5}@2:${E5}:`
  , S5 = "https://rpc.walletconnect.com/v1/"
  , Tu = ["eth_sendTransaction", "personal_sign"]
  , I5 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
  , Nu = ["chainChanged", "accountsChanged"]
  , x5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var O5 = Object.defineProperty
  , P5 = Object.defineProperties
  , C5 = Object.getOwnPropertyDescriptors
  , Hd = Object.getOwnPropertySymbols
  , A5 = Object.prototype.hasOwnProperty
  , R5 = Object.prototype.propertyIsEnumerable
  , Bd = (i, e, t) => e in i ? O5(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , _s = (i, e) => {
    for (var t in e || (e = {}))
        A5.call(e, t) && Bd(i, t, e[t]);
    if (Hd)
        for (var t of Hd(e))
            R5.call(e, t) && Bd(i, t, e[t]);
    return i
}
  , Kd = (i, e) => P5(i, C5(e));
function sa(i) {
    return Number(i[0].split(":")[1])
}
function hu(i) {
    return `0x${i.toString(16)}`
}
function T5(i) {
    const {chains: e, optionalChains: t, methods: s, optionalMethods: o, events: c, optionalEvents: d, rpcMap: f} = i;
    if (!si(e))
        throw new Error("Invalid chains");
    const p = {
        chains: e,
        methods: s || Tu,
        events: c || Nu,
        rpcMap: _s({}, e.length ? {
            [sa(e)]: f[sa(e)]
        } : {})
    }
      , g = c == null ? void 0 : c.filter(A => !Nu.includes(A))
      , v = s == null ? void 0 : s.filter(A => !Tu.includes(A));
    if (!t && !d && !o && !(g != null && g.length) && !(v != null && v.length))
        return {
            required: e.length ? p : void 0
        };
    const S = (g == null ? void 0 : g.length) && (v == null ? void 0 : v.length) || !t
      , P = {
        chains: [...new Set(S ? p.chains.concat(t || []) : t)],
        methods: [...new Set(p.methods.concat(o != null && o.length ? o : I5))],
        events: [...new Set(p.events.concat(d != null && d.length ? d : x5))],
        rpcMap: f
    };
    return {
        required: e.length ? p : void 0,
        optional: t.length ? P : void 0
    }
}
class rh {
    constructor() {
        this.events = new Fr.EventEmitter,
        this.namespace = "eip155",
        this.accounts = [],
        this.chainId = 1,
        this.STORAGE_KEY = D5,
        this.on = (e, t) => (this.events.on(e, t),
        this),
        this.once = (e, t) => (this.events.once(e, t),
        this),
        this.removeListener = (e, t) => (this.events.removeListener(e, t),
        this),
        this.off = (e, t) => (this.events.off(e, t),
        this),
        this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
        this.signer = {},
        this.rpc = {}
    }
    static async init(e) {
        const t = new rh;
        return await t.initialize(e),
        t
    }
    async request(e, t) {
        return await this.signer.request(e, this.formatChainId(this.chainId), t)
    }
    sendAsync(e, t, s) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(e) {
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        const {required: t, optional: s} = T5(this.rpc);
        try {
            const o = await new Promise(async (d, f) => {
                var p;
                this.rpc.showQrModal && ((p = this.modal) == null || p.subscribeModal(g => {
                    !g.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    f(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.connect(Kd(_s({
                    namespaces: _s({}, t && {
                        [this.namespace]: t
                    })
                }, s && {
                    optionalNamespaces: {
                        [this.namespace]: s
                    }
                }), {
                    pairingTopic: e == null ? void 0 : e.pairingTopic
                })).then(g => {
                    d(g)
                }
                ).catch(g => {
                    f(new Error(g.message))
                }
                )
            }
            );
            if (!o)
                return;
            const c = $E(o.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c),
            this.setAccounts(c),
            this.events.emit("connect", {
                chainId: hu(this.chainId)
            })
        } catch (o) {
            throw this.signer.logger.error(o),
            o
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", e => {
            const {params: t} = e
              , {event: s} = t;
            s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data),
            this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data),
            this.events.emit("session_event", e)
        }
        ),
        this.signer.on("chainChanged", e => {
            const t = parseInt(e);
            this.chainId = t,
            this.events.emit("chainChanged", hu(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", e => {
            this.events.emit("session_update", e)
        }
        ),
        this.signer.on("session_delete", e => {
            this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", Kd(_s({}, mt("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", e => {
            var t, s;
            this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(),
            (s = this.modal) == null || s.openModal({
                uri: e
            })),
            this.events.emit("display_uri", e)
        }
        )
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        const t = e.filter(s => this.isCompatibleChainId(s)).map(s => this.parseChainId(s));
        t.length && (this.chainId = t[0],
        this.events.emit("chainChanged", hu(this.chainId)),
        this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            this.chainId = t,
            this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        const [t,s,o] = e.split(":");
        return {
            chainId: `${t}:${s}`,
            address: o
        }
    }
    setAccounts(e) {
        this.accounts = e.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, s;
        const o = (t = e == null ? void 0 : e.chains) != null ? t : []
          , c = (s = e == null ? void 0 : e.optionalChains) != null ? s : []
          , d = o.concat(c);
        if (!d.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const f = o.length ? (e == null ? void 0 : e.methods) || Tu : []
          , p = o.length ? (e == null ? void 0 : e.events) || Nu : []
          , g = (e == null ? void 0 : e.optionalMethods) || []
          , v = (e == null ? void 0 : e.optionalEvents) || []
          , S = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(d, e.projectId)
          , P = (e == null ? void 0 : e.qrModalOptions) || void 0;
        return {
            chains: o == null ? void 0 : o.map(A => this.formatChainId(A)),
            optionalChains: c.map(A => this.formatChainId(A)),
            methods: f,
            events: p,
            optionalMethods: g,
            optionalEvents: v,
            rpcMap: S,
            showQrModal: !!(e != null && e.showQrModal),
            qrModalOptions: P,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        const s = {};
        return e.forEach(o => {
            s[o] = this.getRpcUrl(o, t)
        }
        ),
        s
    }
    async initialize(e) {
        if (this.rpc = this.getRpcConfig(e),
        this.chainId = this.rpc.chains.length ? sa(this.rpc.chains) : sa(this.rpc.optionalChains),
        this.signer = await b5.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storageOptions: e.storageOptions
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let t;
            try {
                const {WalletConnectModal: s} = await j1( () => import("./CRUdGszt.js").then(o => o.i), __vite__mapDeps([0, 1, 2]), import.meta.url);
                t = s
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (t)
                try {
                    this.modal = new t(_s({
                        projectId: this.rpc.projectId
                    }, this.rpc.qrModalOptions))
                } catch (s) {
                    throw this.signer.logger.error(s),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(e) {
        if (!e)
            return;
        const {chains: t, optionalChains: s, rpcMap: o} = e;
        t && si(t) && (this.rpc.chains = t.map(c => this.formatChainId(c)),
        t.forEach(c => {
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        }
        )),
        s && si(s) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = s == null ? void 0 : s.map(c => this.formatChainId(c)),
        s.forEach(c => {
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        }
        ))
    }
    getRpcUrl(e, t) {
        var s;
        return ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) || `${S5}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session)
            return;
        const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
        this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts),
        this.setAccounts(t == null ? void 0 : t.accounts)
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map(t => this.parseAccount(t))
    }
}
const Z5 = rh;
export {Z5 as EthereumProvider, x5 as OPTIONAL_EVENTS, I5 as OPTIONAL_METHODS, Nu as REQUIRED_EVENTS, Tu as REQUIRED_METHODS, rh as default};
