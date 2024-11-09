import {l as z, b6 as A, b7 as R, d as _, N as T} from "./Bfc6mzjo.js";
import {b as N} from "./Dqfqtkbx.js";
const B = "data-n-ids"
  , O = "-";
function J(t) {
    var u, i, e, r, c, o;
    if (typeof t != "string")
        throw new TypeError("[nuxt] [useId] key must be a string.");
    t = `n${t.slice(1)}`;
    const n = A()
      , l = R();
    if (!l)
        throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
    n._id || (n._id = 0),
    l._nuxtIdIndex || (l._nuxtIdIndex = {}),
    (u = l._nuxtIdIndex)[t] || (u[t] = 0);
    const d = t + O + l._nuxtIdIndex[t]++;
    if (n.payload.serverRendered && n.isHydrating && !z(N, !1)) {
        const a = ((i = l.vnode.el) == null ? void 0 : i.nodeType) === 8 && ((r = (e = l.vnode.el) == null ? void 0 : e.nextElementSibling) != null && r.getAttribute) ? (c = l.vnode.el) == null ? void 0 : c.nextElementSibling : l.vnode.el
          , s = JSON.parse(((o = a == null ? void 0 : a.getAttribute) == null ? void 0 : o.call(a, B)) || "{}");
        if (s[d])
            return s[d]
    }
    return t + "_" + n._id++
}
var W = (t => (t.ConnectWalletModal = "ConnectWalletModal",
t))(W || {}), w, I = {
    exports: {}
};
w = I,
function() {
    var t = new Array(4);
    function n() {
        var e = t[0] ^ t[0] << 11;
        return t[0] = t[1],
        t[1] = t[2],
        t[2] = t[3],
        t[3] = t[3] ^ t[3] >> 19 ^ e ^ e >> 8,
        (t[3] >>> 0) / (1 << 31 >>> 0)
    }
    function l() {
        return "hsl(" + Math.floor(360 * n()) + "," + (60 * n() + 40) + "%," + 25 * (n() + n() + n() + n()) + "%)"
    }
    function d(e) {
        var r = {};
        return r.size = e.size || 8,
        r.scale = e.scale || 4,
        r.seed = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16),
        r.color = e.color || l(),
        r.bgcolor = e.bgcolor || l(),
        r.spotcolor = e.spotcolor || l(),
        function(c) {
            for (var o = 0; o < t.length; o++)
                t[o] = 0;
            for (o = 0; o < c.length; o++)
                t[o % 4] = (t[o % 4] << 5) - t[o % 4] + c.charCodeAt(o)
        }(r.seed),
        r
    }
    function u(e, r) {
        var c = function(g) {
            for (var v = g, C = g, b = Math.ceil(v / 2), E = v - b, m = [], x = 0; x < C; x++) {
                for (var f = [], p = 0; p < b; p++)
                    f[p] = Math.floor(2.3 * n());
                var S = f.slice(0, E);
                S.reverse(),
                f = f.concat(S);
                for (var h = 0; h < f.length; h++)
                    m.push(f[h])
            }
            return m
        }((e = d(e || {})).size)
          , o = Math.sqrt(c.length);
        r.width = r.height = e.size * e.scale;
        var a = r.getContext("2d");
        a.fillStyle = e.bgcolor,
        a.fillRect(0, 0, r.width, r.height),
        a.fillStyle = e.color;
        for (var s = 0; s < c.length; s++)
            if (c[s]) {
                var M = Math.floor(s / o)
                  , y = s % o;
                a.fillStyle = c[s] == 1 ? e.color : e.spotcolor,
                a.fillRect(y * e.scale, M * e.scale, e.scale, e.scale)
            }
        return r
    }
    var i = {
        create: function(e) {
            e = d(e || {});
            var r = document.createElement("canvas");
            return u(e, r),
            r
        },
        render: u
    };
    w.exports = i,
    typeof window < "u" && (window.blockies = i)
}();
var j = I.exports;
const q = {
    name: "VueBlockie",
    props: {
        seed: {
            type: String,
            default: "randomString"
        },
        color: {
            type: String,
            default: "#41B883"
        },
        bgcolor: {
            type: String,
            default: "#35495E"
        },
        size: {
            type: Number,
            default: 8
        },
        scale: {
            type: Number,
            default: 4
        },
        spotColor: {
            type: String,
            default: "#000"
        }
    },
    computed: {
        blockie() {
            return j.create({
                seed: this.seed,
                color: this.color,
                bgcolor: this.bgcolor,
                size: this.size,
                scale: this.scale,
                spotColor: this.spotColor
            }).toDataURL()
        }
    }
};
q.render = function(t, n, l, d, u, i) {
    return _(),
    T("img", {
        src: i.blockie
    }, null, 8, ["src"])
}
;
export {W as M, q as c, J as u};
