import {v as N, r as i, o as y, J as k, c as W, bj as v, b0 as h, bk as p, aq as b, b7 as _, bl as C, bm as M, m as g, j as w} from "./Bfc6mzjo.js";
import {E as T} from "./CJrNJHe2.js";
const j = globalThis.crypto
  , D = () => j.randomUUID()
  , I = Symbol.for("nuxt:client-only")
  , U = N({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(t, {slots: e, attrs: a}) {
        const o = i(!1);
        return y( () => {
            o.value = !0
        }
        ),
        k(I, !0),
        n => {
            var s;
            if (o.value)
                return (s = e.default) == null ? void 0 : s.call(e);
            const r = e.fallback || e.placeholder;
            if (r)
                return r();
            const u = n.fallback || n.placeholder || ""
              , c = n.fallbackTag || n.placeholderTag || "span";
            return W(c, a, u)
        }
    }
})
  , m = new WeakMap;
function A(t) {
    if (m.has(t))
        return m.get(t);
    const e = {
        ...t
    };
    return e.render ? e.render = (a, o, n, r, u, c) => {
        var s;
        if (r.mounted$ ?? a.mounted$) {
            const l = (s = t.render) == null ? void 0 : s.bind(a)(a, o, n, r, u, c);
            return l.children === null || typeof l.children == "string" ? v(l) : h(l)
        } else {
            const l = p(a._.vnode.el ?? null) ?? ["<div></div>"];
            return b(l.join(""), l.length)
        }
    }
    : e.template && (e.template = `
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),
    e.setup = (a, o) => {
        var s;
        const n = _()
          , r = {
            ...n.attrs
        }
          , u = O(n);
        for (const l in r)
            delete n.attrs[l];
        const c = i(!1);
        return y( () => {
            Object.assign(n.attrs, r),
            n.vnode.dirs = u,
            c.value = !0
        }
        ),
        Promise.resolve(((s = t.setup) == null ? void 0 : s.call(t, a, o)) || {}).then(l => typeof l != "function" ? (l = l || {},
        l.mounted$ = c,
        l) : (...f) => {
            if (c.value) {
                const d = l(...f);
                return d.children === null || typeof d.children == "string" ? v(d) : h(d)
            } else {
                const d = p((n == null ? void 0 : n.vnode.el) ?? null) ?? ["<div></div>"];
                return b(d.join(""), d.length)
            }
        }
        )
    }
    ,
    m.set(t, e),
    e
}
function O(t) {
    if (!t || !t.vnode.dirs)
        return null;
    const e = t.vnode.dirs;
    return t.vnode.dirs = null,
    e
}
const E = C("mog", {
    state: () => ({
        state: T.SelectImage,
        nft: null,
        wallet: null,
        searchWallet: null,
        nftCount: 0,
        collectionNfts: {},
        searchCollectionNfts: {}
    }),
    getters: {
        getState: t => t.state,
        getNft: t => t.nft,
        getImage: t => {
            var e;
            return (e = t.nft) == null ? void 0 : e.image
        }
        ,
        getConnectedWalletAddress: t => {
            var e;
            return (e = t.wallet) == null ? void 0 : e.address
        }
        ,
        getWalletAddress: t => {
            var e, a;
            return ((e = t.searchWallet) == null ? void 0 : e.address) ?? ((a = t.wallet) == null ? void 0 : a.address)
        }
        ,
        getWalletConnected: t => {
            var e;
            return (e = t.wallet) == null ? void 0 : e.isConnected
        }
        ,
        getConnectedWalletDisplayName: t => {
            var e;
            return (e = t.wallet) == null ? void 0 : e.display_name
        }
        ,
        getWalletDisplayName: t => {
            var e, a;
            return ((e = t.searchWallet) == null ? void 0 : e.display_name) || ((a = t.wallet) == null ? void 0 : a.display_name)
        }
        ,
        getSearchWalletDisplayName: t => {
            var e;
            return (e = t.searchWallet) == null ? void 0 : e.display_name
        }
        ,
        getNftCount: t => t.nftCount,
        getCollectionNfts: t => t.searchCollectionNfts && Object.keys(t.searchCollectionNfts).length ? t.searchCollectionNfts : t.collectionNfts
    },
    actions: {}
})
  , B = C("modals", () => {
    const t = M()
      , e = i([])
      , a = g( () => e.value)
      , o = g( () => e.value[e.value.length - 1])
      , n = g( () => e.value.length > 1)
      , r = i(!1);
    function u(l, f={}) {
        r.value = !0,
        e.value.push({
            name: l,
            props: f,
            id: D()
        })
    }
    function c() {
        e.value.pop(),
        e.value.length || s()
    }
    function s() {
        r.value = !1,
        e.value = []
    }
    return w(o, l => {
        l && t.patch(l.props)
    }
    ),
    {
        modals: e,
        isOpen: r,
        getModals: a,
        getTopModal: o,
        getIsBack: n,
        openModal: u,
        popModal: c,
        closeModals: s
    }
}
);
export {U as _, B as a, I as b, A as c, E as u};
