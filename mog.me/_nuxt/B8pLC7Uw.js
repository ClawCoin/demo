import {bp as Po, J as ne, l as Q, aU as Y, r as S, m as T, o as z, bj as Oo, b0 as j, F as et, v as K, ai as ce, j as Oe, ao as So, bq as $o, aH as To, b7 as Ao, a5 as ko, G as me, br as dn, p as Ht, q as $n, t as ft, x as Tn, y as pt, A as Co, bd as De, d as q, N as se, w as _, b as F, E as vt, a as ge, bs as Tt, D as Be, c as Re, H as Fe, bi as Lo, e as ie, Z as An, _ as kn, aZ as Do, R as At, u as U, L as Fo, f as Mo, bt as Bo, aV as jo, T as _o} from "./Bfc6mzjo.js";
import {u as Cn, M as fn, c as No} from "./Do7bsGti.js";
import {u as kt, a as Ct} from "./Dqfqtkbx.js";
import "./CJrNJHe2.js";
const Ho = {
    wrapper: "relative z-50",
    inner: "fixed inset-0 overflow-y-auto",
    container: "flex min-h-full items-end sm:items-center justify-center text-center",
    padding: "p-4 sm:p-0",
    margin: "sm:my-8",
    base: "relative text-left rtl:text-right flex flex-col",
    overlay: {
        base: "fixed inset-0 transition-opacity",
        background: "bg-gray-200/75 dark:bg-gray-800/75",
        transition: {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0"
        }
    },
    background: "bg-white dark:bg-gray-900",
    ring: "",
    rounded: "rounded-lg",
    shadow: "shadow-xl",
    width: "w-full sm:max-w-lg",
    height: "",
    fullscreen: "w-screen h-screen",
    transition: {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    }
}
  , Ro = {
    wrapper: "relative",
    container: "z-50 group",
    trigger: "inline-flex w-full",
    width: "",
    background: "bg-white dark:bg-gray-900",
    shadow: "shadow-lg",
    rounded: "rounded-md",
    ring: "ring-1 ring-gray-200 dark:ring-gray-800",
    base: "overflow-hidden focus:outline-none relative",
    transition: {
        enterActiveClass: "transition ease-out duration-200",
        enterFromClass: "opacity-0 translate-y-1",
        enterToClass: "opacity-100 translate-y-0",
        leaveActiveClass: "transition ease-in duration-150",
        leaveFromClass: "opacity-100 translate-y-0",
        leaveToClass: "opacity-0 translate-y-1"
    },
    overlay: {
        base: "fixed inset-0 transition-opacity z-50",
        background: "bg-gray-200/75 dark:bg-gray-800/75",
        transition: {
            enterActiveClass: "ease-out duration-200",
            enterFromClass: "opacity-0",
            enterToClass: "opacity-100",
            leaveActiveClass: "ease-in duration-150",
            leaveFromClass: "opacity-100",
            leaveToClass: "opacity-0"
        }
    },
    popper: {
        strategy: "fixed"
    },
    default: {
        openDelay: 0,
        closeDelay: 0
    },
    arrow: Po
};
let Ln = Symbol("headlessui.useid")
  , Io = 0;
function Pe() {
    return Q(Ln, () => `${++Io}`)()
}
function Dn(e) {
    ne(Ln, e)
}
function x(e) {
    var t;
    if (e == null || e.value == null)
        return null;
    let n = (t = e.value.$el) != null ? t : e.value;
    return n instanceof Node ? n : null
}
function X(e, t, ...n) {
    if (e in t) {
        let r = t[e];
        return typeof r == "function" ? r(...n) : r
    }
    let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r => `"${r}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, X),
    o
}
var Wo = Object.defineProperty
  , Uo = (e, t, n) => t in e ? Wo(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , pn = (e, t, n) => (Uo(e, typeof t != "symbol" ? t + "" : t, n),
n);
let Vo = class {
    constructor() {
        pn(this, "current", this.detect()),
        pn(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.currentId = 0,
        this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
}
  , tt = new Vo;
function Ee(e) {
    if (tt.isServer)
        return null;
    if (e instanceof Node)
        return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = x(e);
        if (t)
            return t.ownerDocument
    }
    return document
}
let Lt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var G = (e => (e[e.First = 1] = "First",
e[e.Previous = 2] = "Previous",
e[e.Next = 4] = "Next",
e[e.Last = 8] = "Last",
e[e.WrapAround = 16] = "WrapAround",
e[e.NoScroll = 32] = "NoScroll",
e))(G || {})
  , Ze = (e => (e[e.Error = 0] = "Error",
e[e.Overflow = 1] = "Overflow",
e[e.Success = 2] = "Success",
e[e.Underflow = 3] = "Underflow",
e))(Ze || {})
  , qo = (e => (e[e.Previous = -1] = "Previous",
e[e.Next = 1] = "Next",
e))(qo || {});
function gt(e=document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Lt)).sort( (t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Rt = (e => (e[e.Strict = 0] = "Strict",
e[e.Loose = 1] = "Loose",
e))(Rt || {});
function Fn(e, t=0) {
    var n;
    return e === ((n = Ee(e)) == null ? void 0 : n.body) ? !1 : X(t, {
        0() {
            return e.matches(Lt)
        },
        1() {
            let o = e;
            for (; o !== null; ) {
                if (o.matches(Lt))
                    return !0;
                o = o.parentElement
            }
            return !1
        }
    })
}
var zo = (e => (e[e.Keyboard = 0] = "Keyboard",
e[e.Mouse = 1] = "Mouse",
e))(zo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0),
document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0));
function je(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Go = ["textarea", "input"].join(",");
function Yo(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Go)) != null ? n : !1
}
function Xo(e, t=n => n) {
    return e.slice().sort( (n, o) => {
        let r = t(n)
          , l = t(o);
        if (r === null || l === null)
            return 0;
        let i = r.compareDocumentPosition(l);
        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    }
    )
}
function ue(e, t, {sorted: n=!0, relativeTo: o=null, skipElements: r=[]}={}) {
    var l;
    let i = (l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? l : document
      , a = Array.isArray(e) ? n ? Xo(e) : e : gt(e);
    r.length > 0 && a.length > 1 && (a = a.filter(h => !r.includes(h))),
    o = o ?? i.activeElement;
    let s = ( () => {
        if (t & 5)
            return 1;
        if (t & 10)
            return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), c = ( () => {
        if (t & 1)
            return 0;
        if (t & 2)
            return Math.max(0, a.indexOf(o)) - 1;
        if (t & 4)
            return Math.max(0, a.indexOf(o)) + 1;
        if (t & 8)
            return a.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), u = t & 32 ? {
        preventScroll: !0
    } : {}, m = 0, v = a.length, d;
    do {
        if (m >= v || m + v <= 0)
            return 0;
        let h = c + m;
        if (t & 16)
            h = (h + v) % v;
        else {
            if (h < 0)
                return 3;
            if (h >= v)
                return 1
        }
        d = a[h],
        d == null || d.focus(u),
        m += s
    } while (d !== i.activeElement);
    return t & 6 && Yo(d) && d.select(),
    2
}
function Mn() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
function Ko() {
    return /Android/gi.test(window.navigator.userAgent)
}
function Qo() {
    return Mn() || Ko()
}
function it(e, t, n) {
    tt.isServer || Y(o => {
        document.addEventListener(e, t, n),
        o( () => document.removeEventListener(e, t, n))
    }
    )
}
function Bn(e, t, n) {
    tt.isServer || Y(o => {
        window.addEventListener(e, t, n),
        o( () => window.removeEventListener(e, t, n))
    }
    )
}
function jn(e, t, n=T( () => !0)) {
    function o(l, i) {
        if (!n.value || l.defaultPrevented)
            return;
        let a = i(l);
        if (a === null || !a.getRootNode().contains(a))
            return;
        let s = function c(u) {
            return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u]
        }(e);
        for (let c of s) {
            if (c === null)
                continue;
            let u = c instanceof HTMLElement ? c : x(c);
            if (u != null && u.contains(a) || l.composed && l.composedPath().includes(u))
                return
        }
        return !Fn(a, Rt.Loose) && a.tabIndex !== -1 && l.preventDefault(),
        t(l, a)
    }
    let r = S(null);
    it("pointerdown", l => {
        var i, a;
        n.value && (r.value = ((a = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : a[0]) || l.target)
    }
    , !0),
    it("mousedown", l => {
        var i, a;
        n.value && (r.value = ((a = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : a[0]) || l.target)
    }
    , !0),
    it("click", l => {
        Qo() || r.value && (o(l, () => r.value),
        r.value = null)
    }
    , !0),
    it("touchend", l => o(l, () => l.target instanceof HTMLElement ? l.target : null), !0),
    Bn("blur", l => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}
function vn(e, t) {
    if (e)
        return e;
    let n = t ?? "button";
    if (typeof n == "string" && n.toLowerCase() === "button")
        return "button"
}
function Zo(e, t) {
    let n = S(vn(e.value.type, e.value.as));
    return z( () => {
        n.value = vn(e.value.type, e.value.as)
    }
    ),
    Y( () => {
        var o;
        n.value || x(t) && x(t)instanceof HTMLButtonElement && !((o = x(t)) != null && o.hasAttribute("type")) && (n.value = "button")
    }
    ),
    n
}
var Ie = (e => (e[e.None = 0] = "None",
e[e.RenderStrategy = 1] = "RenderStrategy",
e[e.Static = 2] = "Static",
e))(Ie || {})
  , xe = (e => (e[e.Unmount = 0] = "Unmount",
e[e.Hidden = 1] = "Hidden",
e))(xe || {});
function le({visible: e=!0, features: t=0, ourProps: n, theirProps: o, ...r}) {
    var l;
    let i = Nn(o, n)
      , a = Object.assign(r, {
        props: i
    });
    if (e || t & 2 && i.static)
        return Pt(a);
    if (t & 1) {
        let s = (l = i.unmount) == null || l ? 0 : 1;
        return X(s, {
            0() {
                return null
            },
            1() {
                return Pt({
                    ...r,
                    props: {
                        ...i,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                })
            }
        })
    }
    return Pt(a)
}
function Pt({props: e, attrs: t, slots: n, slot: o, name: r}) {
    var l, i;
    let {as: a, ...s} = Hn(e, ["unmount", "static"])
      , c = (l = n.default) == null ? void 0 : l.call(n, o)
      , u = {};
    if (o) {
        let m = !1
          , v = [];
        for (let[d,h] of Object.entries(o))
            typeof h == "boolean" && (m = !0),
            h === !0 && v.push(d);
        m && (u["data-headlessui-state"] = v.join(" "))
    }
    if (a === "template") {
        if (c = _n(c ?? []),
        Object.keys(s).length > 0 || Object.keys(t).length > 0) {
            let[m,...v] = c ?? [];
            if (!Jo(m) || v.length > 0)
                throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map(f => f.trim()).filter( (f, g, P) => P.indexOf(f) === g).sort( (f, g) => f.localeCompare(g)).map(f => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(f => `  - ${f}`).join(`
`)].join(`
`));
            let d = Nn((i = m.props) != null ? i : {}, s, u)
              , h = Oo(m, d, !0);
            for (let f in d)
                f.startsWith("on") && (h.props || (h.props = {}),
                h.props[f] = d[f]);
            return h
        }
        return Array.isArray(c) && c.length === 1 ? c[0] : c
    }
    return j(a, Object.assign({}, s, u), {
        default: () => c
    })
}
function _n(e) {
    return e.flatMap(t => t.type === et ? _n(t.children) : [t])
}
function Nn(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let o of e)
        for (let r in o)
            r.startsWith("on") && typeof o[r] == "function" ? (n[r] != null || (n[r] = []),
            n[r].push(o[r])) : t[r] = o[r];
    if (t.disabled || t["aria-disabled"])
        return Object.assign(t, Object.fromEntries(Object.keys(n).map(o => [o, void 0])));
    for (let o in n)
        Object.assign(t, {
            [o](r, ...l) {
                let i = n[o];
                for (let a of i) {
                    if (r instanceof Event && r.defaultPrevented)
                        return;
                    a(r, ...l)
                }
            }
        });
    return t
}
function Hn(e, t=[]) {
    let n = Object.assign({}, e);
    for (let o of t)
        o in n && delete n[o];
    return n
}
function Jo(e) {
    return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}
var Ne = (e => (e[e.None = 1] = "None",
e[e.Focusable = 2] = "Focusable",
e[e.Hidden = 4] = "Hidden",
e))(Ne || {});
let We = K({
    name: "Hidden",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return () => {
            var o;
            let {features: r, ...l} = e
              , i = {
                "aria-hidden": (r & 2) === 2 ? !0 : (o = l["aria-hidden"]) != null ? o : void 0,
                hidden: (r & 4) === 4 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(r & 4) === 4 && (r & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return le({
                ourProps: i,
                theirProps: l,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden"
            })
        }
    }
})
  , Rn = Symbol("Context");
var V = (e => (e[e.Open = 1] = "Open",
e[e.Closed = 2] = "Closed",
e[e.Closing = 4] = "Closing",
e[e.Opening = 8] = "Opening",
e))(V || {});
function er() {
    return ht() !== null
}
function ht() {
    return Q(Rn, null)
}
function In(e) {
    ne(Rn, e)
}
var be = (e => (e.Space = " ",
e.Enter = "Enter",
e.Escape = "Escape",
e.Backspace = "Backspace",
e.Delete = "Delete",
e.ArrowLeft = "ArrowLeft",
e.ArrowUp = "ArrowUp",
e.ArrowRight = "ArrowRight",
e.ArrowDown = "ArrowDown",
e.Home = "Home",
e.End = "End",
e.PageUp = "PageUp",
e.PageDown = "PageDown",
e.Tab = "Tab",
e))(be || {});
function tr(e) {
    function t() {
        document.readyState !== "loading" && (e(),
        document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t),
    t())
}
let Le = [];
tr( () => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && Le[0] !== t.target && (Le.unshift(t.target),
        Le = Le.filter(n => n != null && n.isConnected),
        Le.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }),
    window.addEventListener("mousedown", e, {
        capture: !0
    }),
    window.addEventListener("focus", e, {
        capture: !0
    }),
    document.body.addEventListener("click", e, {
        capture: !0
    }),
    document.body.addEventListener("mousedown", e, {
        capture: !0
    }),
    document.body.addEventListener("focus", e, {
        capture: !0
    })
}
);
function It(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout( () => {
        throw t
    }
    ))
}
function nt() {
    let e = []
      , t = {
        addEventListener(n, o, r, l) {
            return n.addEventListener(o, r, l),
            t.add( () => n.removeEventListener(o, r, l))
        },
        requestAnimationFrame(...n) {
            let o = requestAnimationFrame(...n);
            t.add( () => cancelAnimationFrame(o))
        },
        nextFrame(...n) {
            t.requestAnimationFrame( () => {
                t.requestAnimationFrame(...n)
            }
            )
        },
        setTimeout(...n) {
            let o = setTimeout(...n);
            t.add( () => clearTimeout(o))
        },
        microTask(...n) {
            let o = {
                current: !0
            };
            return It( () => {
                o.current && n[0]()
            }
            ),
            t.add( () => {
                o.current = !1
            }
            )
        },
        style(n, o, r) {
            let l = n.style.getPropertyValue(o);
            return Object.assign(n.style, {
                [o]: r
            }),
            this.add( () => {
                Object.assign(n.style, {
                    [o]: l
                })
            }
            )
        },
        group(n) {
            let o = nt();
            return n(o),
            this.add( () => o.dispose())
        },
        add(n) {
            return e.push(n),
            () => {
                let o = e.indexOf(n);
                if (o >= 0)
                    for (let r of e.splice(o, 1))
                        r()
            }
        },
        dispose() {
            for (let n of e.splice(0))
                n()
        }
    };
    return t
}
function Wt(e, t, n, o) {
    tt.isServer || Y(r => {
        e = e ?? window,
        e.addEventListener(t, n, o),
        r( () => e.removeEventListener(t, n, o))
    }
    )
}
var J = (e => (e[e.Forwards = 0] = "Forwards",
e[e.Backwards = 1] = "Backwards",
e))(J || {});
function Ut() {
    let e = S(0);
    return Bn("keydown", t => {
        t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }
    ),
    e
}
function Wn(e) {
    if (!e)
        return new Set;
    if (typeof e == "function")
        return new Set(e());
    let t = new Set;
    for (let n of e.value) {
        let o = x(n);
        o instanceof HTMLElement && t.add(o)
    }
    return t
}
var Un = (e => (e[e.None = 1] = "None",
e[e.InitialFocus = 2] = "InitialFocus",
e[e.TabLock = 4] = "TabLock",
e[e.FocusLock = 8] = "FocusLock",
e[e.RestoreFocus = 16] = "RestoreFocus",
e[e.All = 30] = "All",
e))(Un || {});
let Ge = Object.assign(K({
    name: "FocusTrap",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        initialFocus: {
            type: Object,
            default: null
        },
        features: {
            type: Number,
            default: 30
        },
        containers: {
            type: [Object, Function],
            default: S(new Set)
        }
    },
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n, expose: o}) {
        let r = S(null);
        o({
            el: r,
            $el: r
        });
        let l = T( () => Ee(r))
          , i = S(!1);
        z( () => i.value = !0),
        ce( () => i.value = !1),
        or({
            ownerDocument: l
        }, T( () => i.value && !!(e.features & 16)));
        let a = rr({
            ownerDocument: l,
            container: r,
            initialFocus: T( () => e.initialFocus)
        }, T( () => i.value && !!(e.features & 2)));
        ar({
            ownerDocument: l,
            container: r,
            containers: e.containers,
            previousActiveElement: a
        }, T( () => i.value && !!(e.features & 8)));
        let s = Ut();
        function c(d) {
            let h = x(r);
            h && (f => f())( () => {
                X(s.value, {
                    [J.Forwards]: () => {
                        ue(h, G.First, {
                            skipElements: [d.relatedTarget]
                        })
                    }
                    ,
                    [J.Backwards]: () => {
                        ue(h, G.Last, {
                            skipElements: [d.relatedTarget]
                        })
                    }
                })
            }
            )
        }
        let u = S(!1);
        function m(d) {
            d.key === "Tab" && (u.value = !0,
            requestAnimationFrame( () => {
                u.value = !1
            }
            ))
        }
        function v(d) {
            if (!i.value)
                return;
            let h = Wn(e.containers);
            x(r)instanceof HTMLElement && h.add(x(r));
            let f = d.relatedTarget;
            f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (Vn(h, f) || (u.value ? ue(x(r), X(s.value, {
                [J.Forwards]: () => G.Next,
                [J.Backwards]: () => G.Previous
            }) | G.WrapAround, {
                relativeTo: d.target
            }) : d.target instanceof HTMLElement && je(d.target)))
        }
        return () => {
            let d = {}
              , h = {
                ref: r,
                onKeydown: m,
                onFocusout: v
            }
              , {features: f, initialFocus: g, containers: P, ...b} = e;
            return j(et, [!!(f & 4) && j(We, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: Ne.Focusable
            }), le({
                ourProps: h,
                theirProps: {
                    ...t,
                    ...b
                },
                slot: d,
                attrs: t,
                slots: n,
                name: "FocusTrap"
            }), !!(f & 4) && j(We, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: Ne.Focusable
            })])
        }
    }
}), {
    features: Un
});
function nr(e) {
    let t = S(Le.slice());
    return Oe([e], ([n], [o]) => {
        o === !0 && n === !1 ? It( () => {
            t.value.splice(0)
        }
        ) : o === !1 && n === !0 && (t.value = Le.slice())
    }
    , {
        flush: "post"
    }),
    () => {
        var n;
        return (n = t.value.find(o => o != null && o.isConnected)) != null ? n : null
    }
}
function or({ownerDocument: e}, t) {
    let n = nr(t);
    z( () => {
        Y( () => {
            var o, r;
            t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && je(n())
        }
        , {
            flush: "post"
        })
    }
    ),
    ce( () => {
        t.value && je(n())
    }
    )
}
function rr({ownerDocument: e, container: t, initialFocus: n}, o) {
    let r = S(null)
      , l = S(!1);
    return z( () => l.value = !0),
    ce( () => l.value = !1),
    z( () => {
        Oe([t, n, o], (i, a) => {
            if (i.every( (c, u) => (a == null ? void 0 : a[u]) === c) || !o.value)
                return;
            let s = x(t);
            s && It( () => {
                var c, u;
                if (!l.value)
                    return;
                let m = x(n)
                  , v = (c = e.value) == null ? void 0 : c.activeElement;
                if (m) {
                    if (m === v) {
                        r.value = v;
                        return
                    }
                } else if (s.contains(v)) {
                    r.value = v;
                    return
                }
                m ? je(m) : ue(s, G.First | G.NoScroll) === Ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                r.value = (u = e.value) == null ? void 0 : u.activeElement
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        })
    }
    ),
    r
}
function ar({ownerDocument: e, container: t, containers: n, previousActiveElement: o}, r) {
    var l;
    Wt((l = e.value) == null ? void 0 : l.defaultView, "focus", i => {
        if (!r.value)
            return;
        let a = Wn(n);
        x(t)instanceof HTMLElement && a.add(x(t));
        let s = o.value;
        if (!s)
            return;
        let c = i.target;
        c && c instanceof HTMLElement ? Vn(a, c) ? (o.value = c,
        je(c)) : (i.preventDefault(),
        i.stopPropagation(),
        je(s)) : je(o.value)
    }
    , !0)
}
function Vn(e, t) {
    for (let n of e)
        if (n.contains(t))
            return !0;
    return !1
}
function lr(e) {
    let t = So(e.getSnapshot());
    return ce(e.subscribe( () => {
        t.value = e.getSnapshot()
    }
    )),
    t
}
function ir(e, t) {
    let n = e()
      , o = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(r) {
            return o.add(r),
            () => o.delete(r)
        },
        dispatch(r, ...l) {
            let i = t[r].call(n, ...l);
            i && (n = i,
            o.forEach(a => a()))
        }
    }
}
function sr() {
    let e;
    return {
        before({doc: t}) {
            var n;
            let o = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - o.clientWidth
        },
        after({doc: t, d: n}) {
            let o = t.documentElement
              , r = o.clientWidth - o.offsetWidth
              , l = e - r;
            n.style(o, "paddingRight", `${l}px`)
        }
    }
}
function ur() {
    return Mn() ? {
        before({doc: e, d: t, meta: n}) {
            function o(r) {
                return n.containers.flatMap(l => l()).some(l => l.contains(r))
            }
            t.microTask( () => {
                var r;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let a = nt();
                    a.style(e.documentElement, "scrollBehavior", "auto"),
                    t.add( () => t.microTask( () => a.dispose()))
                }
                let l = (r = window.scrollY) != null ? r : window.pageYOffset
                  , i = null;
                t.addEventListener(e, "click", a => {
                    if (a.target instanceof HTMLElement)
                        try {
                            let s = a.target.closest("a");
                            if (!s)
                                return;
                            let {hash: c} = new URL(s.href)
                              , u = e.querySelector(c);
                            u && !o(u) && (i = u)
                        } catch {}
                }
                , !0),
                t.addEventListener(e, "touchstart", a => {
                    if (a.target instanceof HTMLElement)
                        if (o(a.target)) {
                            let s = a.target;
                            for (; s.parentElement && o(s.parentElement); )
                                s = s.parentElement;
                            t.style(s, "overscrollBehavior", "contain")
                        } else
                            t.style(a.target, "touchAction", "none")
                }
                ),
                t.addEventListener(e, "touchmove", a => {
                    if (a.target instanceof HTMLElement)
                        if (o(a.target)) {
                            let s = a.target;
                            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); )
                                s = s.parentElement;
                            s.dataset.headlessuiPortal === "" && a.preventDefault()
                        } else
                            a.preventDefault()
                }
                , {
                    passive: !1
                }),
                t.add( () => {
                    var a;
                    let s = (a = window.scrollY) != null ? a : window.pageYOffset;
                    l !== s && window.scrollTo(0, l),
                    i && i.isConnected && (i.scrollIntoView({
                        block: "nearest"
                    }),
                    i = null)
                }
                )
            }
            )
        }
    } : {}
}
function cr() {
    return {
        before({doc: e, d: t}) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}
function dr(e) {
    let t = {};
    for (let n of e)
        Object.assign(t, n(t));
    return t
}
let Me = ir( () => new Map, {
    PUSH(e, t) {
        var n;
        let o = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: nt(),
            meta: new Set
        };
        return o.count++,
        o.meta.add(t),
        this.set(e, o),
        this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--,
        n.meta.delete(t)),
        this
    },
    SCROLL_PREVENT({doc: e, d: t, meta: n}) {
        let o = {
            doc: e,
            d: t,
            meta: dr(n)
        }
          , r = [ur(), sr(), cr()];
        r.forEach( ({before: l}) => l == null ? void 0 : l(o)),
        r.forEach( ({after: l}) => l == null ? void 0 : l(o))
    },
    SCROLL_ALLOW({d: e}) {
        e.dispose()
    },
    TEARDOWN({doc: e}) {
        this.delete(e)
    }
});
Me.subscribe( () => {
    let e = Me.getSnapshot()
      , t = new Map;
    for (let[n] of e)
        t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let o = t.get(n.doc) === "hidden"
          , r = n.count !== 0;
        (r && !o || !r && o) && Me.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
        n.count === 0 && Me.dispatch("TEARDOWN", n)
    }
}
);
function fr(e, t, n) {
    let o = lr(Me)
      , r = T( () => {
        let l = e.value ? o.value.get(e.value) : void 0;
        return l ? l.count > 0 : !1
    }
    );
    return Oe([e, t], ([l,i], [a], s) => {
        if (!l || !i)
            return;
        Me.dispatch("PUSH", l, n);
        let c = !1;
        s( () => {
            c || (Me.dispatch("POP", a ?? l, n),
            c = !0)
        }
        )
    }
    , {
        immediate: !0
    }),
    r
}
let Ot = new Map
  , Ye = new Map;
function mn(e, t=S(!0)) {
    Y(n => {
        var o;
        if (!t.value)
            return;
        let r = x(e);
        if (!r)
            return;
        n(function() {
            var i;
            if (!r)
                return;
            let a = (i = Ye.get(r)) != null ? i : 1;
            if (a === 1 ? Ye.delete(r) : Ye.set(r, a - 1),
            a !== 1)
                return;
            let s = Ot.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]),
            r.inert = s.inert,
            Ot.delete(r))
        });
        let l = (o = Ye.get(r)) != null ? o : 0;
        Ye.set(r, l + 1),
        l === 0 && (Ot.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }),
        r.setAttribute("aria-hidden", "true"),
        r.inert = !0)
    }
    )
}
function qn({defaultContainers: e=[], portals: t, mainTreeNodeRef: n}={}) {
    let o = S(null)
      , r = Ee(o);
    function l() {
        var i, a, s;
        let c = [];
        for (let u of e)
            u !== null && (u instanceof HTMLElement ? c.push(u) : "value"in u && u.value instanceof HTMLElement && c.push(u.value));
        if (t != null && t.value)
            for (let u of t.value)
                c.push(u);
        for (let u of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : [])
            u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(x(o)) || u.contains((s = (a = x(o)) == null ? void 0 : a.getRootNode()) == null ? void 0 : s.host) || c.some(m => u.contains(m)) || c.push(u));
        return c
    }
    return {
        resolveContainers: l,
        contains(i) {
            return l().some(a => a.contains(i))
        },
        mainTreeNodeRef: o,
        MainTreeNode() {
            return n != null ? null : j(We, {
                features: Ne.Hidden,
                ref: o
            })
        }
    }
}
let zn = Symbol("ForcePortalRootContext");
function pr() {
    return Q(zn, !1)
}
let gn = K({
    name: "ForcePortalRoot",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        force: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return ne(zn, e.force),
        () => {
            let {force: o, ...r} = e;
            return le({
                theirProps: r,
                ourProps: {},
                slot: {},
                slots: t,
                attrs: n,
                name: "ForcePortalRoot"
            })
        }
    }
})
  , Gn = Symbol("StackContext");
var Dt = (e => (e[e.Add = 0] = "Add",
e[e.Remove = 1] = "Remove",
e))(Dt || {});
function vr() {
    return Q(Gn, () => {}
    )
}
function mr({type: e, enabled: t, element: n, onUpdate: o}) {
    let r = vr();
    function l(...i) {
        o == null || o(...i),
        r(...i)
    }
    z( () => {
        Oe(t, (i, a) => {
            i ? l(0, e, n) : a === !0 && l(1, e, n)
        }
        , {
            immediate: !0,
            flush: "sync"
        })
    }
    ),
    ce( () => {
        t.value && l(1, e, n)
    }
    ),
    ne(Gn, l)
}
let gr = Symbol("DescriptionContext");
function hr({slot: e=S({}), name: t="Description", props: n={}}={}) {
    let o = S([]);
    function r(l) {
        return o.value.push(l),
        () => {
            let i = o.value.indexOf(l);
            i !== -1 && o.value.splice(i, 1)
        }
    }
    return ne(gr, {
        register: r,
        slot: e,
        name: t,
        props: n
    }),
    T( () => o.value.length > 0 ? o.value.join(" ") : void 0)
}
function yr(e) {
    let t = Ee(e);
    if (!t) {
        if (e === null)
            return null;
        throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n)
        return n;
    let o = t.createElement("div");
    return o.setAttribute("id", "headlessui-portal-root"),
    t.body.appendChild(o)
}
const Ft = new WeakMap;
function br(e) {
    var t;
    return (t = Ft.get(e)) != null ? t : 0
}
function hn(e, t) {
    let n = t(br(e));
    return n <= 0 ? Ft.delete(e) : Ft.set(e, n),
    n
}
let wr = K({
    name: "Portal",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {slots: t, attrs: n}) {
        let o = S(null)
          , r = T( () => Ee(o))
          , l = pr()
          , i = Q(Xn, null)
          , a = S(l === !0 || i == null ? yr(o.value) : i.resolveTarget());
        a.value && hn(a.value, v => v + 1);
        let s = S(!1);
        z( () => {
            s.value = !0
        }
        ),
        Y( () => {
            l || i != null && (a.value = i.resolveTarget())
        }
        );
        let c = Q(Mt, null)
          , u = !1
          , m = Ao();
        return Oe(o, () => {
            if (u || !c)
                return;
            let v = x(o);
            v && (ce(c.register(v), m),
            u = !0)
        }
        ),
        ce( () => {
            var v, d;
            let h = (v = r.value) == null ? void 0 : v.getElementById("headlessui-portal-root");
            !h || a.value !== h || hn(a.value, f => f - 1) || a.value.children.length > 0 || (d = a.value.parentElement) == null || d.removeChild(a.value)
        }
        ),
        () => {
            if (!s.value || a.value === null)
                return null;
            let v = {
                ref: o,
                "data-headlessui-portal": ""
            };
            return j($o, {
                to: a.value
            }, le({
                ourProps: v,
                theirProps: e,
                slot: {},
                attrs: n,
                slots: t,
                name: "Portal"
            }))
        }
    }
})
  , Mt = Symbol("PortalParentContext");
function Yn() {
    let e = Q(Mt, null)
      , t = S([]);
    function n(l) {
        return t.value.push(l),
        e && e.register(l),
        () => o(l)
    }
    function o(l) {
        let i = t.value.indexOf(l);
        i !== -1 && t.value.splice(i, 1),
        e && e.unregister(l)
    }
    let r = {
        register: n,
        unregister: o,
        portals: t
    };
    return [t, K({
        name: "PortalWrapper",
        setup(l, {slots: i}) {
            return ne(Mt, r),
            () => {
                var a;
                return (a = i.default) == null ? void 0 : a.call(i)
            }
        }
    })]
}
let Xn = Symbol("PortalGroupContext")
  , Er = K({
    name: "PortalGroup",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        target: {
            type: Object,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        let o = To({
            resolveTarget() {
                return e.target
            }
        });
        return ne(Xn, o),
        () => {
            let {target: r, ...l} = e;
            return le({
                theirProps: l,
                ourProps: {},
                slot: {},
                attrs: t,
                slots: n,
                name: "PortalGroup"
            })
        }
    }
});
var xr = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(xr || {});
let Bt = Symbol("DialogContext");
function Kn(e) {
    let t = Q(Bt, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Kn),
        n
    }
    return t
}
let st = "DC8F892D-2EBD-447C-A4C8-A03058436FF4"
  , Pr = K({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        open: {
            type: [Boolean, String],
            default: st
        },
        initialFocus: {
            type: Object,
            default: null
        },
        id: {
            type: String,
            default: null
        },
        role: {
            type: String,
            default: "dialog"
        }
    },
    emits: {
        close: e => !0
    },
    setup(e, {emit: t, attrs: n, slots: o, expose: r}) {
        var l, i;
        let a = (l = e.id) != null ? l : `headlessui-dialog-${Pe()}`
          , s = S(!1);
        z( () => {
            s.value = !0
        }
        );
        let c = !1
          , u = T( () => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0,
        console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),
        "dialog"))
          , m = S(0)
          , v = ht()
          , d = T( () => e.open === st && v !== null ? (v.value & V.Open) === V.Open : e.open)
          , h = S(null)
          , f = T( () => Ee(h));
        if (r({
            el: h,
            $el: h
        }),
        !(e.open !== st || v !== null))
            throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
        if (typeof d.value != "boolean")
            throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === st ? void 0 : e.open}`);
        let g = T( () => s.value && d.value ? 0 : 1)
          , P = T( () => g.value === 0)
          , b = T( () => m.value > 1)
          , O = Q(Bt, null) !== null
          , [y,p] = Yn()
          , {resolveContainers: w, mainTreeNodeRef: E, MainTreeNode: $} = qn({
            portals: y,
            defaultContainers: [T( () => {
                var L;
                return (L = H.panelRef.value) != null ? L : h.value
            }
            )]
        })
          , A = T( () => b.value ? "parent" : "leaf")
          , k = T( () => v !== null ? (v.value & V.Closing) === V.Closing : !1)
          , M = T( () => O || k.value ? !1 : P.value)
          , R = T( () => {
            var L, D, W;
            return (W = Array.from((D = (L = f.value) == null ? void 0 : L.querySelectorAll("body > *")) != null ? D : []).find(N => N.id === "headlessui-portal-root" ? !1 : N.contains(x(E)) && N instanceof HTMLElement)) != null ? W : null
        }
        );
        mn(R, M);
        let C = T( () => b.value ? !0 : P.value)
          , Z = T( () => {
            var L, D, W;
            return (W = Array.from((D = (L = f.value) == null ? void 0 : L.querySelectorAll("[data-headlessui-portal]")) != null ? D : []).find(N => N.contains(x(E)) && N instanceof HTMLElement)) != null ? W : null
        }
        );
        mn(Z, C),
        mr({
            type: "Dialog",
            enabled: T( () => g.value === 0),
            element: h,
            onUpdate: (L, D) => {
                if (D === "Dialog")
                    return X(L, {
                        [Dt.Add]: () => m.value += 1,
                        [Dt.Remove]: () => m.value -= 1
                    })
            }
        });
        let I = hr({
            name: "DialogDescription",
            slot: T( () => ({
                open: d.value
            }))
        })
          , B = S(null)
          , H = {
            titleId: B,
            panelRef: S(null),
            dialogState: g,
            setTitleId(L) {
                B.value !== L && (B.value = L)
            },
            close() {
                t("close", !1)
            }
        };
        ne(Bt, H);
        let $e = T( () => !(!P.value || b.value));
        jn(w, (L, D) => {
            L.preventDefault(),
            H.close(),
            ko( () => D == null ? void 0 : D.focus())
        }
        , $e);
        let pe = T( () => !(b.value || g.value !== 0));
        Wt((i = f.value) == null ? void 0 : i.defaultView, "keydown", L => {
            pe.value && (L.defaultPrevented || L.key === be.Escape && (L.preventDefault(),
            L.stopPropagation(),
            H.close()))
        }
        );
        let Te = T( () => !(k.value || g.value !== 0 || O));
        return fr(f, Te, L => {
            var D;
            return {
                containers: [...(D = L.containers) != null ? D : [], w]
            }
        }
        ),
        Y(L => {
            if (g.value !== 0)
                return;
            let D = x(h);
            if (!D)
                return;
            let W = new ResizeObserver(N => {
                for (let re of N) {
                    let ve = re.target.getBoundingClientRect();
                    ve.x === 0 && ve.y === 0 && ve.width === 0 && ve.height === 0 && H.close()
                }
            }
            );
            W.observe(D),
            L( () => W.disconnect())
        }
        ),
        () => {
            let {open: L, initialFocus: D, ...W} = e
              , N = {
                ...n,
                ref: h,
                id: a,
                role: u.value,
                "aria-modal": g.value === 0 ? !0 : void 0,
                "aria-labelledby": B.value,
                "aria-describedby": I.value
            }
              , re = {
                open: g.value === 0
            };
            return j(gn, {
                force: !0
            }, () => [j(wr, () => j(Er, {
                target: h.value
            }, () => j(gn, {
                force: !1
            }, () => j(Ge, {
                initialFocus: D,
                containers: w,
                features: P.value ? X(A.value, {
                    parent: Ge.features.RestoreFocus,
                    leaf: Ge.features.All & ~Ge.features.FocusLock
                }) : Ge.features.None
            }, () => j(p, {}, () => le({
                ourProps: N,
                theirProps: {
                    ...W,
                    ...n
                },
                slot: re,
                attrs: n,
                slots: o,
                visible: g.value === 0,
                features: Ie.RenderStrategy | Ie.Static,
                name: "Dialog"
            })))))), j($)])
        }
    }
})
  , Or = K({
    name: "DialogPanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: o}) {
        var r;
        let l = (r = e.id) != null ? r : `headlessui-dialog-panel-${Pe()}`
          , i = Kn("DialogPanel");
        o({
            el: i.panelRef,
            $el: i.panelRef
        });
        function a(s) {
            s.stopPropagation()
        }
        return () => {
            let {...s} = e
              , c = {
                id: l,
                ref: i.panelRef,
                onClick: a
            };
            return le({
                ourProps: c,
                theirProps: s,
                slot: {
                    open: i.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogPanel"
            })
        }
    }
});
var Sr = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(Sr || {});
let Qn = Symbol("PopoverContext");
function Vt(e) {
    let t = Q(Qn, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <${eo.name} /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Vt),
        n
    }
    return t
}
let $r = Symbol("PopoverGroupContext");
function Zn() {
    return Q($r, null)
}
let Jn = Symbol("PopoverPanelContext");
function Tr() {
    return Q(Jn, null)
}
let eo = K({
    name: "Popover",
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {slots: t, attrs: n, expose: o}) {
        var r;
        let l = S(null);
        o({
            el: l,
            $el: l
        });
        let i = S(1)
          , a = S(null)
          , s = S(null)
          , c = S(null)
          , u = S(null)
          , m = T( () => Ee(l))
          , v = T( () => {
            var p, w;
            if (!x(a) || !x(u))
                return !1;
            for (let C of document.querySelectorAll("body > *"))
                if (Number(C == null ? void 0 : C.contains(x(a))) ^ Number(C == null ? void 0 : C.contains(x(u))))
                    return !0;
            let E = gt()
              , $ = E.indexOf(x(a))
              , A = ($ + E.length - 1) % E.length
              , k = ($ + 1) % E.length
              , M = E[A]
              , R = E[k];
            return !((p = x(u)) != null && p.contains(M)) && !((w = x(u)) != null && w.contains(R))
        }
        )
          , d = {
            popoverState: i,
            buttonId: S(null),
            panelId: S(null),
            panel: u,
            button: a,
            isPortalled: v,
            beforePanelSentinel: s,
            afterPanelSentinel: c,
            togglePopover() {
                i.value = X(i.value, {
                    0: 1,
                    1: 0
                })
            },
            closePopover() {
                i.value !== 1 && (i.value = 1)
            },
            close(p) {
                d.closePopover();
                let w = p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? x(p) : x(d.button) : x(d.button);
                w == null || w.focus()
            }
        };
        ne(Qn, d),
        In(T( () => X(i.value, {
            0: V.Open,
            1: V.Closed
        })));
        let h = {
            buttonId: d.buttonId,
            panelId: d.panelId,
            close() {
                d.closePopover()
            }
        }
          , f = Zn()
          , g = f == null ? void 0 : f.registerPopover
          , [P,b] = Yn()
          , O = qn({
            mainTreeNodeRef: f == null ? void 0 : f.mainTreeNodeRef,
            portals: P,
            defaultContainers: [a, u]
        });
        function y() {
            var p, w, E, $;
            return ($ = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? $ : ((p = m.value) == null ? void 0 : p.activeElement) && (((w = x(a)) == null ? void 0 : w.contains(m.value.activeElement)) || ((E = x(u)) == null ? void 0 : E.contains(m.value.activeElement)))
        }
        return Y( () => g == null ? void 0 : g(h)),
        Wt((r = m.value) == null ? void 0 : r.defaultView, "focus", p => {
            var w, E;
            p.target !== window && p.target instanceof HTMLElement && i.value === 0 && (y() || a && u && (O.contains(p.target) || (w = x(d.beforePanelSentinel)) != null && w.contains(p.target) || (E = x(d.afterPanelSentinel)) != null && E.contains(p.target) || d.closePopover()))
        }
        , !0),
        jn(O.resolveContainers, (p, w) => {
            var E;
            d.closePopover(),
            Fn(w, Rt.Loose) || (p.preventDefault(),
            (E = x(a)) == null || E.focus())
        }
        , T( () => i.value === 0)),
        () => {
            let p = {
                open: i.value === 0,
                close: d.close
            };
            return j(et, [j(b, {}, () => le({
                theirProps: {
                    ...e,
                    ...n
                },
                ourProps: {
                    ref: l
                },
                slot: p,
                slots: t,
                attrs: n,
                name: "Popover"
            })), j(O.MainTreeNode)])
        }
    }
})
  , Ar = K({
    name: "PopoverButton",
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n, expose: o}) {
        var r;
        let l = (r = e.id) != null ? r : `headlessui-popover-button-${Pe()}`
          , i = Vt("PopoverButton")
          , a = T( () => Ee(i.button));
        o({
            el: i.button,
            $el: i.button
        }),
        z( () => {
            i.buttonId.value = l
        }
        ),
        ce( () => {
            i.buttonId.value = null
        }
        );
        let s = Zn()
          , c = s == null ? void 0 : s.closeOthers
          , u = Tr()
          , m = T( () => u === null ? !1 : u.value === i.panelId.value)
          , v = S(null)
          , d = `headlessui-focus-sentinel-${Pe()}`;
        m.value || Y( () => {
            i.button.value = x(v)
        }
        );
        let h = Zo(T( () => ({
            as: e.as,
            type: t.type
        })), v);
        function f(p) {
            var w, E, $, A, k;
            if (m.value) {
                if (i.popoverState.value === 1)
                    return;
                switch (p.key) {
                case be.Space:
                case be.Enter:
                    p.preventDefault(),
                    (E = (w = p.target).click) == null || E.call(w),
                    i.closePopover(),
                    ($ = x(i.button)) == null || $.focus();
                    break
                }
            } else
                switch (p.key) {
                case be.Space:
                case be.Enter:
                    p.preventDefault(),
                    p.stopPropagation(),
                    i.popoverState.value === 1 && (c == null || c(i.buttonId.value)),
                    i.togglePopover();
                    break;
                case be.Escape:
                    if (i.popoverState.value !== 0)
                        return c == null ? void 0 : c(i.buttonId.value);
                    if (!x(i.button) || (A = a.value) != null && A.activeElement && !((k = x(i.button)) != null && k.contains(a.value.activeElement)))
                        return;
                    p.preventDefault(),
                    p.stopPropagation(),
                    i.closePopover();
                    break
                }
        }
        function g(p) {
            m.value || p.key === be.Space && p.preventDefault()
        }
        function P(p) {
            var w, E;
            e.disabled || (m.value ? (i.closePopover(),
            (w = x(i.button)) == null || w.focus()) : (p.preventDefault(),
            p.stopPropagation(),
            i.popoverState.value === 1 && (c == null || c(i.buttonId.value)),
            i.togglePopover(),
            (E = x(i.button)) == null || E.focus()))
        }
        function b(p) {
            p.preventDefault(),
            p.stopPropagation()
        }
        let O = Ut();
        function y() {
            let p = x(i.panel);
            if (!p)
                return;
            function w() {
                X(O.value, {
                    [J.Forwards]: () => ue(p, G.First),
                    [J.Backwards]: () => ue(p, G.Last)
                }) === Ze.Error && ue(gt().filter(E => E.dataset.headlessuiFocusGuard !== "true"), X(O.value, {
                    [J.Forwards]: G.Next,
                    [J.Backwards]: G.Previous
                }), {
                    relativeTo: x(i.button)
                })
            }
            w()
        }
        return () => {
            let p = i.popoverState.value === 0
              , w = {
                open: p
            }
              , {...E} = e
              , $ = m.value ? {
                ref: v,
                type: h.value,
                onKeydown: f,
                onClick: P
            } : {
                ref: v,
                id: l,
                type: h.value,
                "aria-expanded": i.popoverState.value === 0,
                "aria-controls": x(i.panel) ? i.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: f,
                onKeyup: g,
                onClick: P,
                onMousedown: b
            };
            return j(et, [le({
                ourProps: $,
                theirProps: {
                    ...t,
                    ...E
                },
                slot: w,
                attrs: t,
                slots: n,
                name: "PopoverButton"
            }), p && !m.value && i.isPortalled.value && j(We, {
                id: d,
                features: Ne.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: y
            })])
        }
    }
})
  , kr = K({
    name: "PopoverPanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        focus: {
            type: Boolean,
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n, expose: o}) {
        var r;
        let l = (r = e.id) != null ? r : `headlessui-popover-panel-${Pe()}`
          , {focus: i} = e
          , a = Vt("PopoverPanel")
          , s = T( () => Ee(a.panel))
          , c = `headlessui-focus-sentinel-before-${Pe()}`
          , u = `headlessui-focus-sentinel-after-${Pe()}`;
        o({
            el: a.panel,
            $el: a.panel
        }),
        z( () => {
            a.panelId.value = l
        }
        ),
        ce( () => {
            a.panelId.value = null
        }
        ),
        ne(Jn, a.panelId),
        Y( () => {
            var b, O;
            if (!i || a.popoverState.value !== 0 || !a.panel)
                return;
            let y = (b = s.value) == null ? void 0 : b.activeElement;
            (O = x(a.panel)) != null && O.contains(y) || ue(x(a.panel), G.First)
        }
        );
        let m = ht()
          , v = T( () => m !== null ? (m.value & V.Open) === V.Open : a.popoverState.value === 0);
        function d(b) {
            var O, y;
            switch (b.key) {
            case be.Escape:
                if (a.popoverState.value !== 0 || !x(a.panel) || s.value && !((O = x(a.panel)) != null && O.contains(s.value.activeElement)))
                    return;
                b.preventDefault(),
                b.stopPropagation(),
                a.closePopover(),
                (y = x(a.button)) == null || y.focus();
                break
            }
        }
        function h(b) {
            var O, y, p, w, E;
            let $ = b.relatedTarget;
            $ && x(a.panel) && ((O = x(a.panel)) != null && O.contains($) || (a.closePopover(),
            ((p = (y = x(a.beforePanelSentinel)) == null ? void 0 : y.contains) != null && p.call(y, $) || (E = (w = x(a.afterPanelSentinel)) == null ? void 0 : w.contains) != null && E.call(w, $)) && $.focus({
                preventScroll: !0
            })))
        }
        let f = Ut();
        function g() {
            let b = x(a.panel);
            if (!b)
                return;
            function O() {
                X(f.value, {
                    [J.Forwards]: () => {
                        var y;
                        ue(b, G.First) === Ze.Error && ((y = x(a.afterPanelSentinel)) == null || y.focus())
                    }
                    ,
                    [J.Backwards]: () => {
                        var y;
                        (y = x(a.button)) == null || y.focus({
                            preventScroll: !0
                        })
                    }
                })
            }
            O()
        }
        function P() {
            let b = x(a.panel);
            if (!b)
                return;
            function O() {
                X(f.value, {
                    [J.Forwards]: () => {
                        let y = x(a.button)
                          , p = x(a.panel);
                        if (!y)
                            return;
                        let w = gt()
                          , E = w.indexOf(y)
                          , $ = w.slice(0, E + 1)
                          , A = [...w.slice(E + 1), ...$];
                        for (let k of A.slice())
                            if (k.dataset.headlessuiFocusGuard === "true" || p != null && p.contains(k)) {
                                let M = A.indexOf(k);
                                M !== -1 && A.splice(M, 1)
                            }
                        ue(A, G.First, {
                            sorted: !1
                        })
                    }
                    ,
                    [J.Backwards]: () => {
                        var y;
                        ue(b, G.Previous) === Ze.Error && ((y = x(a.button)) == null || y.focus())
                    }
                })
            }
            O()
        }
        return () => {
            let b = {
                open: a.popoverState.value === 0,
                close: a.close
            }
              , {focus: O, ...y} = e
              , p = {
                ref: a.panel,
                id: l,
                onKeydown: d,
                onFocusout: i && a.popoverState.value === 0 ? h : void 0,
                tabIndex: -1
            };
            return le({
                ourProps: p,
                theirProps: {
                    ...t,
                    ...y
                },
                attrs: t,
                slot: b,
                slots: {
                    ...n,
                    default: (...w) => {
                        var E;
                        return [j(et, [v.value && a.isPortalled.value && j(We, {
                            id: c,
                            ref: a.beforePanelSentinel,
                            features: Ne.Focusable,
                            "data-headlessui-focus-guard": !0,
                            as: "button",
                            type: "button",
                            onFocus: g
                        }), (E = n.default) == null ? void 0 : E.call(n, ...w), v.value && a.isPortalled.value && j(We, {
                            id: u,
                            ref: a.afterPanelSentinel,
                            features: Ne.Focusable,
                            "data-headlessui-focus-guard": !0,
                            as: "button",
                            type: "button",
                            onFocus: P
                        })])]
                    }
                },
                features: Ie.RenderStrategy | Ie.Static,
                visible: v.value,
                name: "PopoverPanel"
            })
        }
    }
});
function Cr(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called)
            return t.called = !0,
            e(...n)
    }
}
function St(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}
function ut(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var jt = (e => (e.Finished = "finished",
e.Cancelled = "cancelled",
e))(jt || {});
function Lr(e, t) {
    let n = nt();
    if (!e)
        return n.dispose;
    let {transitionDuration: o, transitionDelay: r} = getComputedStyle(e)
      , [l,i] = [o, r].map(a => {
        let[s=0] = a.split(",").filter(Boolean).map(c => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort( (c, u) => u - c);
        return s
    }
    );
    return l !== 0 ? n.setTimeout( () => t("finished"), l + i) : t("finished"),
    n.add( () => t("cancelled")),
    n.dispose
}
function yn(e, t, n, o, r, l) {
    let i = nt()
      , a = l !== void 0 ? Cr(l) : () => {}
    ;
    return ut(e, ...r),
    St(e, ...t, ...n),
    i.nextFrame( () => {
        ut(e, ...n),
        St(e, ...o),
        i.add(Lr(e, s => (ut(e, ...o, ...t),
        St(e, ...r),
        a(s))))
    }
    ),
    i.add( () => ut(e, ...t, ...n, ...o, ...r)),
    i.add( () => a("cancelled")),
    i.dispose
}
function Ce(e="") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let qt = Symbol("TransitionContext");
var Dr = (e => (e.Visible = "visible",
e.Hidden = "hidden",
e))(Dr || {});
function Fr() {
    return Q(qt, null) !== null
}
function Mr() {
    let e = Q(qt, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
function Br() {
    let e = Q(zt, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
let zt = Symbol("NestingContext");
function yt(e) {
    return "children"in e ? yt(e.children) : e.value.filter( ({state: t}) => t === "visible").length > 0
}
function to(e) {
    let t = S([])
      , n = S(!1);
    z( () => n.value = !0),
    ce( () => n.value = !1);
    function o(l, i=xe.Hidden) {
        let a = t.value.findIndex( ({id: s}) => s === l);
        a !== -1 && (X(i, {
            [xe.Unmount]() {
                t.value.splice(a, 1)
            },
            [xe.Hidden]() {
                t.value[a].state = "hidden"
            }
        }),
        !yt(t) && n.value && (e == null || e()))
    }
    function r(l) {
        let i = t.value.find( ({id: a}) => a === l);
        return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({
            id: l,
            state: "visible"
        }),
        () => o(l, xe.Unmount)
    }
    return {
        children: t,
        register: r,
        unregister: o
    }
}
let no = Ie.RenderStrategy
  , oo = K({
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: o, expose: r}) {
        let l = S(0);
        function i() {
            l.value |= V.Opening,
            t("beforeEnter")
        }
        function a() {
            l.value &= ~V.Opening,
            t("afterEnter")
        }
        function s() {
            l.value |= V.Closing,
            t("beforeLeave")
        }
        function c() {
            l.value &= ~V.Closing,
            t("afterLeave")
        }
        if (!Fr() && er())
            return () => j(ro, {
                ...e,
                onBeforeEnter: i,
                onAfterEnter: a,
                onBeforeLeave: s,
                onAfterLeave: c
            }, o);
        let u = S(null)
          , m = T( () => e.unmount ? xe.Unmount : xe.Hidden);
        r({
            el: u,
            $el: u
        });
        let {show: v, appear: d} = Mr()
          , {register: h, unregister: f} = Br()
          , g = S(v.value ? "visible" : "hidden")
          , P = {
            value: !0
        }
          , b = Pe()
          , O = {
            value: !1
        }
          , y = to( () => {
            !O.value && g.value !== "hidden" && (g.value = "hidden",
            f(b),
            c())
        }
        );
        z( () => {
            let C = h(b);
            ce(C)
        }
        ),
        Y( () => {
            if (m.value === xe.Hidden && b) {
                if (v.value && g.value !== "visible") {
                    g.value = "visible";
                    return
                }
                X(g.value, {
                    hidden: () => f(b),
                    visible: () => h(b)
                })
            }
        }
        );
        let p = Ce(e.enter)
          , w = Ce(e.enterFrom)
          , E = Ce(e.enterTo)
          , $ = Ce(e.entered)
          , A = Ce(e.leave)
          , k = Ce(e.leaveFrom)
          , M = Ce(e.leaveTo);
        z( () => {
            Y( () => {
                if (g.value === "visible") {
                    let C = x(u);
                    if (C instanceof Comment && C.data === "")
                        throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }
            }
            )
        }
        );
        function R(C) {
            let Z = P.value && !d.value
              , I = x(u);
            !I || !(I instanceof HTMLElement) || Z || (O.value = !0,
            v.value && i(),
            v.value || s(),
            C(v.value ? yn(I, p, w, E, $, B => {
                O.value = !1,
                B === jt.Finished && a()
            }
            ) : yn(I, A, k, M, $, B => {
                O.value = !1,
                B === jt.Finished && (yt(y) || (g.value = "hidden",
                f(b),
                c()))
            }
            )))
        }
        return z( () => {
            Oe([v], (C, Z, I) => {
                R(I),
                P.value = !1
            }
            , {
                immediate: !0
            })
        }
        ),
        ne(zt, y),
        In(T( () => X(g.value, {
            visible: V.Open,
            hidden: V.Closed
        }) | l.value)),
        () => {
            let {appear: C, show: Z, enter: I, enterFrom: B, enterTo: H, entered: $e, leave: pe, leaveFrom: Te, leaveTo: L, ...D} = e
              , W = {
                ref: u
            }
              , N = {
                ...D,
                ...d.value && v.value && tt.isServer ? {
                    class: me([n.class, D.class, ...p, ...w])
                } : {}
            };
            return le({
                theirProps: N,
                ourProps: W,
                slot: {},
                slots: o,
                attrs: n,
                features: no,
                visible: g.value === "visible",
                name: "TransitionChild"
            })
        }
    }
})
  , jr = oo
  , ro = K({
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: o}) {
        let r = ht()
          , l = T( () => e.show === null && r !== null ? (r.value & V.Open) === V.Open : e.show);
        Y( () => {
            if (![!0, !1].includes(l.value))
                throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
        }
        );
        let i = S(l.value ? "visible" : "hidden")
          , a = to( () => {
            i.value = "hidden"
        }
        )
          , s = S(!0)
          , c = {
            show: l,
            appear: T( () => e.appear || !s.value)
        };
        return z( () => {
            Y( () => {
                s.value = !1,
                l.value ? i.value = "visible" : yt(a) || (i.value = "hidden")
            }
            )
        }
        ),
        ne(zt, a),
        ne(qt, c),
        () => {
            let u = Hn(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"])
              , m = {
                unmount: e.unmount
            };
            return le({
                ourProps: {
                    ...m,
                    as: "template"
                },
                theirProps: {},
                slot: {},
                slots: {
                    ...o,
                    default: () => [j(jr, {
                        onBeforeEnter: () => t("beforeEnter"),
                        onAfterEnter: () => t("afterEnter"),
                        onBeforeLeave: () => t("beforeLeave"),
                        onAfterLeave: () => t("afterLeave"),
                        ...n,
                        ...m,
                        ...u
                    }, o.default)]
                },
                attrs: {},
                features: no,
                visible: i.value === "visible",
                name: "Transition"
            })
        }
    }
});
function oe(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function He(e) {
    var t = oe(e).Element;
    return e instanceof t || e instanceof Element
}
function ae(e) {
    var t = oe(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function Gt(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = oe(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var _e = Math.max
  , mt = Math.min
  , Ue = Math.round;
function _t() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function ao() {
    return !/^((?!chrome|android).)*safari/i.test(_t())
}
function Ve(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var o = e.getBoundingClientRect()
      , r = 1
      , l = 1;
    t && ae(e) && (r = e.offsetWidth > 0 && Ue(o.width) / e.offsetWidth || 1,
    l = e.offsetHeight > 0 && Ue(o.height) / e.offsetHeight || 1);
    var i = He(e) ? oe(e) : window
      , a = i.visualViewport
      , s = !ao() && n
      , c = (o.left + (s && a ? a.offsetLeft : 0)) / r
      , u = (o.top + (s && a ? a.offsetTop : 0)) / l
      , m = o.width / r
      , v = o.height / l;
    return {
        width: m,
        height: v,
        top: u,
        right: c + m,
        bottom: u + v,
        left: c,
        x: c,
        y: u
    }
}
function Yt(e) {
    var t = oe(e)
      , n = t.pageXOffset
      , o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}
function _r(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function Nr(e) {
    return e === oe(e) || !ae(e) ? Yt(e) : _r(e)
}
function ye(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function Se(e) {
    return ((He(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Xt(e) {
    return Ve(Se(e)).left + Yt(e).scrollLeft
}
function we(e) {
    return oe(e).getComputedStyle(e)
}
function Kt(e) {
    var t = we(e)
      , n = t.overflow
      , o = t.overflowX
      , r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o)
}
function Hr(e) {
    var t = e.getBoundingClientRect()
      , n = Ue(t.width) / e.offsetWidth || 1
      , o = Ue(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}
function Rr(e, t, n) {
    n === void 0 && (n = !1);
    var o = ae(t)
      , r = ae(t) && Hr(t)
      , l = Se(t)
      , i = Ve(e, r, n)
      , a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , s = {
        x: 0,
        y: 0
    };
    return (o || !o && !n) && ((ye(t) !== "body" || Kt(l)) && (a = Nr(t)),
    ae(t) ? (s = Ve(t, !0),
    s.x += t.clientLeft,
    s.y += t.clientTop) : l && (s.x = Xt(l))),
    {
        x: i.left + a.scrollLeft - s.x,
        y: i.top + a.scrollTop - s.y,
        width: i.width,
        height: i.height
    }
}
function Qt(e) {
    var t = Ve(e)
      , n = e.offsetWidth
      , o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}
function bt(e) {
    return ye(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gt(e) ? e.host : null) || Se(e)
}
function lo(e) {
    return ["html", "body", "#document"].indexOf(ye(e)) >= 0 ? e.ownerDocument.body : ae(e) && Kt(e) ? e : lo(bt(e))
}
function Ke(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = lo(e)
      , r = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , l = oe(o)
      , i = r ? [l].concat(l.visualViewport || [], Kt(o) ? o : []) : o
      , a = t.concat(i);
    return r ? a : a.concat(Ke(bt(i)))
}
function Ir(e) {
    return ["table", "td", "th"].indexOf(ye(e)) >= 0
}
function bn(e) {
    return !ae(e) || we(e).position === "fixed" ? null : e.offsetParent
}
function Wr(e) {
    var t = /firefox/i.test(_t())
      , n = /Trident/i.test(_t());
    if (n && ae(e)) {
        var o = we(e);
        if (o.position === "fixed")
            return null
    }
    var r = bt(e);
    for (Gt(r) && (r = r.host); ae(r) && ["html", "body"].indexOf(ye(r)) < 0; ) {
        var l = we(r);
        if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
            return r;
        r = r.parentNode
    }
    return null
}
function ot(e) {
    for (var t = oe(e), n = bn(e); n && Ir(n) && we(n).position === "static"; )
        n = bn(n);
    return n && (ye(n) === "html" || ye(n) === "body" && we(n).position === "static") ? t : n || Wr(e) || t
}
var ee = "top"
  , de = "bottom"
  , fe = "right"
  , te = "left"
  , Zt = "auto"
  , rt = [ee, de, fe, te]
  , qe = "start"
  , Je = "end"
  , Ur = "clippingParents"
  , io = "viewport"
  , Xe = "popper"
  , Vr = "reference"
  , wn = rt.reduce(function(e, t) {
    return e.concat([t + "-" + qe, t + "-" + Je])
}, [])
  , so = [].concat(rt, [Zt]).reduce(function(e, t) {
    return e.concat([t, t + "-" + qe, t + "-" + Je])
}, [])
  , qr = "beforeRead"
  , zr = "read"
  , Gr = "afterRead"
  , Yr = "beforeMain"
  , Xr = "main"
  , Kr = "afterMain"
  , Qr = "beforeWrite"
  , Zr = "write"
  , Jr = "afterWrite"
  , ea = [qr, zr, Gr, Yr, Xr, Kr, Qr, Zr, Jr];
function ta(e) {
    var t = new Map
      , n = new Set
      , o = [];
    e.forEach(function(l) {
        t.set(l.name, l)
    });
    function r(l) {
        n.add(l.name);
        var i = [].concat(l.requires || [], l.requiresIfExists || []);
        i.forEach(function(a) {
            if (!n.has(a)) {
                var s = t.get(a);
                s && r(s)
            }
        }),
        o.push(l)
    }
    return e.forEach(function(l) {
        n.has(l.name) || r(l)
    }),
    o
}
function na(e) {
    var t = ta(e);
    return ea.reduce(function(n, o) {
        return n.concat(t.filter(function(r) {
            return r.phase === o
        }))
    }, [])
}
function oa(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function ra(e) {
    var t = e.reduce(function(n, o) {
        var r = n[o.name];
        return n[o.name] = r ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data)
        }) : o,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
function aa(e, t) {
    var n = oe(e)
      , o = Se(e)
      , r = n.visualViewport
      , l = o.clientWidth
      , i = o.clientHeight
      , a = 0
      , s = 0;
    if (r) {
        l = r.width,
        i = r.height;
        var c = ao();
        (c || !c && t === "fixed") && (a = r.offsetLeft,
        s = r.offsetTop)
    }
    return {
        width: l,
        height: i,
        x: a + Xt(e),
        y: s
    }
}
function la(e) {
    var t, n = Se(e), o = Yt(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = _e(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = _e(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Xt(e), s = -o.scrollTop;
    return we(r || n).direction === "rtl" && (a += _e(n.clientWidth, r ? r.clientWidth : 0) - l),
    {
        width: l,
        height: i,
        x: a,
        y: s
    }
}
function uo(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
        return !0;
    if (n && Gt(n)) {
        var o = t;
        do {
            if (o && e.isSameNode(o))
                return !0;
            o = o.parentNode || o.host
        } while (o)
    }
    return !1
}
function Nt(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}
function ia(e, t) {
    var n = Ve(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop,
    n.left = n.left + e.clientLeft,
    n.bottom = n.top + e.clientHeight,
    n.right = n.left + e.clientWidth,
    n.width = e.clientWidth,
    n.height = e.clientHeight,
    n.x = n.left,
    n.y = n.top,
    n
}
function En(e, t, n) {
    return t === io ? Nt(aa(e, n)) : He(t) ? ia(t, n) : Nt(la(Se(e)))
}
function sa(e) {
    var t = Ke(bt(e))
      , n = ["absolute", "fixed"].indexOf(we(e).position) >= 0
      , o = n && ae(e) ? ot(e) : e;
    return He(o) ? t.filter(function(r) {
        return He(r) && uo(r, o) && ye(r) !== "body"
    }) : []
}
function ua(e, t, n, o) {
    var r = t === "clippingParents" ? sa(e) : [].concat(t)
      , l = [].concat(r, [n])
      , i = l[0]
      , a = l.reduce(function(s, c) {
        var u = En(e, c, o);
        return s.top = _e(u.top, s.top),
        s.right = mt(u.right, s.right),
        s.bottom = mt(u.bottom, s.bottom),
        s.left = _e(u.left, s.left),
        s
    }, En(e, i, o));
    return a.width = a.right - a.left,
    a.height = a.bottom - a.top,
    a.x = a.left,
    a.y = a.top,
    a
}
function he(e) {
    return e.split("-")[0]
}
function ze(e) {
    return e.split("-")[1]
}
function Jt(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function co(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? he(o) : null, l = o ? ze(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, s;
    switch (r) {
    case ee:
        s = {
            x: i,
            y: t.y - n.height
        };
        break;
    case de:
        s = {
            x: i,
            y: t.y + t.height
        };
        break;
    case fe:
        s = {
            x: t.x + t.width,
            y: a
        };
        break;
    case te:
        s = {
            x: t.x - n.width,
            y: a
        };
        break;
    default:
        s = {
            x: t.x,
            y: t.y
        }
    }
    var c = r ? Jt(r) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (l) {
        case qe:
            s[c] = s[c] - (t[u] / 2 - n[u] / 2);
            break;
        case Je:
            s[c] = s[c] + (t[u] / 2 - n[u] / 2);
            break
        }
    }
    return s
}
function fo() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function po(e) {
    return Object.assign({}, fo(), e)
}
function vo(e, t) {
    return t.reduce(function(n, o) {
        return n[o] = e,
        n
    }, {})
}
function en(e, t) {
    t === void 0 && (t = {});
    var n = t
      , o = n.placement
      , r = o === void 0 ? e.placement : o
      , l = n.strategy
      , i = l === void 0 ? e.strategy : l
      , a = n.boundary
      , s = a === void 0 ? Ur : a
      , c = n.rootBoundary
      , u = c === void 0 ? io : c
      , m = n.elementContext
      , v = m === void 0 ? Xe : m
      , d = n.altBoundary
      , h = d === void 0 ? !1 : d
      , f = n.padding
      , g = f === void 0 ? 0 : f
      , P = po(typeof g != "number" ? g : vo(g, rt))
      , b = v === Xe ? Vr : Xe
      , O = e.rects.popper
      , y = e.elements[h ? b : v]
      , p = ua(He(y) ? y : y.contextElement || Se(e.elements.popper), s, u, i)
      , w = Ve(e.elements.reference)
      , E = co({
        reference: w,
        element: O,
        strategy: "absolute",
        placement: r
    })
      , $ = Nt(Object.assign({}, O, E))
      , A = v === Xe ? $ : w
      , k = {
        top: p.top - A.top + P.top,
        bottom: A.bottom - p.bottom + P.bottom,
        left: p.left - A.left + P.left,
        right: A.right - p.right + P.right
    }
      , M = e.modifiersData.offset;
    if (v === Xe && M) {
        var R = M[r];
        Object.keys(k).forEach(function(C) {
            var Z = [fe, de].indexOf(C) >= 0 ? 1 : -1
              , I = [ee, de].indexOf(C) >= 0 ? "y" : "x";
            k[C] += R[I] * Z
        })
    }
    return k
}
var xn = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Pn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}
function ca(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , o = n === void 0 ? [] : n
      , r = t.defaultOptions
      , l = r === void 0 ? xn : r;
    return function(a, s, c) {
        c === void 0 && (c = l);
        var u = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, xn, l),
            modifiersData: {},
            elements: {
                reference: a,
                popper: s
            },
            attributes: {},
            styles: {}
        }
          , m = []
          , v = !1
          , d = {
            state: u,
            setOptions: function(P) {
                var b = typeof P == "function" ? P(u.options) : P;
                f(),
                u.options = Object.assign({}, l, u.options, b),
                u.scrollParents = {
                    reference: He(a) ? Ke(a) : a.contextElement ? Ke(a.contextElement) : [],
                    popper: Ke(s)
                };
                var O = na(ra([].concat(o, u.options.modifiers)));
                return u.orderedModifiers = O.filter(function(y) {
                    return y.enabled
                }),
                h(),
                d.update()
            },
            forceUpdate: function() {
                if (!v) {
                    var P = u.elements
                      , b = P.reference
                      , O = P.popper;
                    if (Pn(b, O)) {
                        u.rects = {
                            reference: Rr(b, ot(O), u.options.strategy === "fixed"),
                            popper: Qt(O)
                        },
                        u.reset = !1,
                        u.placement = u.options.placement,
                        u.orderedModifiers.forEach(function(k) {
                            return u.modifiersData[k.name] = Object.assign({}, k.data)
                        });
                        for (var y = 0; y < u.orderedModifiers.length; y++) {
                            if (u.reset === !0) {
                                u.reset = !1,
                                y = -1;
                                continue
                            }
                            var p = u.orderedModifiers[y]
                              , w = p.fn
                              , E = p.options
                              , $ = E === void 0 ? {} : E
                              , A = p.name;
                            typeof w == "function" && (u = w({
                                state: u,
                                options: $,
                                name: A,
                                instance: d
                            }) || u)
                        }
                    }
                }
            },
            update: oa(function() {
                return new Promise(function(g) {
                    d.forceUpdate(),
                    g(u)
                }
                )
            }),
            destroy: function() {
                f(),
                v = !0
            }
        };
        if (!Pn(a, s))
            return d;
        d.setOptions(c).then(function(g) {
            !v && c.onFirstUpdate && c.onFirstUpdate(g)
        });
        function h() {
            u.orderedModifiers.forEach(function(g) {
                var P = g.name
                  , b = g.options
                  , O = b === void 0 ? {} : b
                  , y = g.effect;
                if (typeof y == "function") {
                    var p = y({
                        state: u,
                        name: P,
                        instance: d,
                        options: O
                    })
                      , w = function() {};
                    m.push(p || w)
                }
            })
        }
        function f() {
            m.forEach(function(g) {
                return g()
            }),
            m = []
        }
        return d
    }
}
var ct = {
    passive: !0
};
function da(e) {
    var t = e.state
      , n = e.instance
      , o = e.options
      , r = o.scroll
      , l = r === void 0 ? !0 : r
      , i = o.resize
      , a = i === void 0 ? !0 : i
      , s = oe(t.elements.popper)
      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && c.forEach(function(u) {
        u.addEventListener("scroll", n.update, ct)
    }),
    a && s.addEventListener("resize", n.update, ct),
    function() {
        l && c.forEach(function(u) {
            u.removeEventListener("scroll", n.update, ct)
        }),
        a && s.removeEventListener("resize", n.update, ct)
    }
}
const mo = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: da,
    data: {}
};
function fa(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = co({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const pa = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: fa,
    data: {}
};
var va = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function ma(e, t) {
    var n = e.x
      , o = e.y
      , r = t.devicePixelRatio || 1;
    return {
        x: Ue(n * r) / r || 0,
        y: Ue(o * r) / r || 0
    }
}
function On(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, i = e.offsets, a = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, m = e.isFixed, v = i.x, d = v === void 0 ? 0 : v, h = i.y, f = h === void 0 ? 0 : h, g = typeof u == "function" ? u({
        x: d,
        y: f
    }) : {
        x: d,
        y: f
    };
    d = g.x,
    f = g.y;
    var P = i.hasOwnProperty("x")
      , b = i.hasOwnProperty("y")
      , O = te
      , y = ee
      , p = window;
    if (c) {
        var w = ot(n)
          , E = "clientHeight"
          , $ = "clientWidth";
        if (w === oe(n) && (w = Se(n),
        we(w).position !== "static" && a === "absolute" && (E = "scrollHeight",
        $ = "scrollWidth")),
        w = w,
        r === ee || (r === te || r === fe) && l === Je) {
            y = de;
            var A = m && w === p && p.visualViewport ? p.visualViewport.height : w[E];
            f -= A - o.height,
            f *= s ? 1 : -1
        }
        if (r === te || (r === ee || r === de) && l === Je) {
            O = fe;
            var k = m && w === p && p.visualViewport ? p.visualViewport.width : w[$];
            d -= k - o.width,
            d *= s ? 1 : -1
        }
    }
    var M = Object.assign({
        position: a
    }, c && va)
      , R = u === !0 ? ma({
        x: d,
        y: f
    }, oe(n)) : {
        x: d,
        y: f
    };
    if (d = R.x,
    f = R.y,
    s) {
        var C;
        return Object.assign({}, M, (C = {},
        C[y] = b ? "0" : "",
        C[O] = P ? "0" : "",
        C.transform = (p.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)",
        C))
    }
    return Object.assign({}, M, (t = {},
    t[y] = b ? f + "px" : "",
    t[O] = P ? d + "px" : "",
    t.transform = "",
    t))
}
function ga(e) {
    var t = e.state
      , n = e.options
      , o = n.gpuAcceleration
      , r = o === void 0 ? !0 : o
      , l = n.adaptive
      , i = l === void 0 ? !0 : l
      , a = n.roundOffsets
      , s = a === void 0 ? !0 : a
      , c = {
        placement: he(t.placement),
        variation: ze(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: r,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, On(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: i,
        roundOffsets: s
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, On(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const go = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: ga,
    data: {}
};
function ha(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var o = t.styles[n] || {}
          , r = t.attributes[n] || {}
          , l = t.elements[n];
        !ae(l) || !ye(l) || (Object.assign(l.style, o),
        Object.keys(r).forEach(function(i) {
            var a = r[i];
            a === !1 ? l.removeAttribute(i) : l.setAttribute(i, a === !0 ? "" : a)
        }))
    })
}
function ya(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(o) {
            var r = t.elements[o]
              , l = t.attributes[o] || {}
              , i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o])
              , a = i.reduce(function(s, c) {
                return s[c] = "",
                s
            }, {});
            !ae(r) || !ye(r) || (Object.assign(r.style, a),
            Object.keys(l).forEach(function(s) {
                r.removeAttribute(s)
            }))
        })
    }
}
const ba = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: ha,
    effect: ya,
    requires: ["computeStyles"]
};
var wa = [mo, pa, go, ba]
  , Ea = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function dt(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return Ea[t]
    })
}
var xa = {
    start: "end",
    end: "start"
};
function Sn(e) {
    return e.replace(/start|end/g, function(t) {
        return xa[t]
    })
}
function Pa(e, t) {
    t === void 0 && (t = {});
    var n = t
      , o = n.placement
      , r = n.boundary
      , l = n.rootBoundary
      , i = n.padding
      , a = n.flipVariations
      , s = n.allowedAutoPlacements
      , c = s === void 0 ? so : s
      , u = ze(o)
      , m = u ? a ? wn : wn.filter(function(h) {
        return ze(h) === u
    }) : rt
      , v = m.filter(function(h) {
        return c.indexOf(h) >= 0
    });
    v.length === 0 && (v = m);
    var d = v.reduce(function(h, f) {
        return h[f] = en(e, {
            placement: f,
            boundary: r,
            rootBoundary: l,
            padding: i
        })[he(f)],
        h
    }, {});
    return Object.keys(d).sort(function(h, f) {
        return d[h] - d[f]
    })
}
function Oa(e) {
    if (he(e) === Zt)
        return [];
    var t = dt(e);
    return [Sn(e), t, Sn(t)]
}
function Sa(e) {
    var t = e.state
      , n = e.options
      , o = e.name;
    if (!t.modifiersData[o]._skip) {
        for (var r = n.mainAxis, l = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, s = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, h = d === void 0 ? !0 : d, f = n.allowedAutoPlacements, g = t.options.placement, P = he(g), b = P === g, O = s || (b || !h ? [dt(g)] : Oa(g)), y = [g].concat(O).reduce(function(N, re) {
            return N.concat(he(re) === Zt ? Pa(t, {
                placement: re,
                boundary: u,
                rootBoundary: m,
                padding: c,
                flipVariations: h,
                allowedAutoPlacements: f
            }) : re)
        }, []), p = t.rects.reference, w = t.rects.popper, E = new Map, $ = !0, A = y[0], k = 0; k < y.length; k++) {
            var M = y[k]
              , R = he(M)
              , C = ze(M) === qe
              , Z = [ee, de].indexOf(R) >= 0
              , I = Z ? "width" : "height"
              , B = en(t, {
                placement: M,
                boundary: u,
                rootBoundary: m,
                altBoundary: v,
                padding: c
            })
              , H = Z ? C ? fe : te : C ? de : ee;
            p[I] > w[I] && (H = dt(H));
            var $e = dt(H)
              , pe = [];
            if (l && pe.push(B[R] <= 0),
            a && pe.push(B[H] <= 0, B[$e] <= 0),
            pe.every(function(N) {
                return N
            })) {
                A = M,
                $ = !1;
                break
            }
            E.set(M, pe)
        }
        if ($)
            for (var Te = h ? 3 : 1, L = function(re) {
                var ve = y.find(function(at) {
                    var Ae = E.get(at);
                    if (Ae)
                        return Ae.slice(0, re).every(function(wt) {
                            return wt
                        })
                });
                if (ve)
                    return A = ve,
                    "break"
            }, D = Te; D > 0; D--) {
                var W = L(D);
                if (W === "break")
                    break
            }
        t.placement !== A && (t.modifiersData[o]._skip = !0,
        t.placement = A,
        t.reset = !0)
    }
}
const $a = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Sa,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function Ta(e, t, n) {
    var o = he(e)
      , r = [te, ee].indexOf(o) >= 0 ? -1 : 1
      , l = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , i = l[0]
      , a = l[1];
    return i = i || 0,
    a = (a || 0) * r,
    [te, fe].indexOf(o) >= 0 ? {
        x: a,
        y: i
    } : {
        x: i,
        y: a
    }
}
function Aa(e) {
    var t = e.state
      , n = e.options
      , o = e.name
      , r = n.offset
      , l = r === void 0 ? [0, 0] : r
      , i = so.reduce(function(u, m) {
        return u[m] = Ta(m, t.rects, l),
        u
    }, {})
      , a = i[t.placement]
      , s = a.x
      , c = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s,
    t.modifiersData.popperOffsets.y += c),
    t.modifiersData[o] = i
}
const ka = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Aa
};
function Ca(e) {
    return e === "x" ? "y" : "x"
}
function Qe(e, t, n) {
    return _e(e, mt(t, n))
}
function La(e, t, n) {
    var o = Qe(e, t, n);
    return o > n ? n : o
}
function Da(e) {
    var t = e.state
      , n = e.options
      , o = e.name
      , r = n.mainAxis
      , l = r === void 0 ? !0 : r
      , i = n.altAxis
      , a = i === void 0 ? !1 : i
      , s = n.boundary
      , c = n.rootBoundary
      , u = n.altBoundary
      , m = n.padding
      , v = n.tether
      , d = v === void 0 ? !0 : v
      , h = n.tetherOffset
      , f = h === void 0 ? 0 : h
      , g = en(t, {
        boundary: s,
        rootBoundary: c,
        padding: m,
        altBoundary: u
    })
      , P = he(t.placement)
      , b = ze(t.placement)
      , O = !b
      , y = Jt(P)
      , p = Ca(y)
      , w = t.modifiersData.popperOffsets
      , E = t.rects.reference
      , $ = t.rects.popper
      , A = typeof f == "function" ? f(Object.assign({}, t.rects, {
        placement: t.placement
    })) : f
      , k = typeof A == "number" ? {
        mainAxis: A,
        altAxis: A
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, A)
      , M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
      , R = {
        x: 0,
        y: 0
    };
    if (w) {
        if (l) {
            var C, Z = y === "y" ? ee : te, I = y === "y" ? de : fe, B = y === "y" ? "height" : "width", H = w[y], $e = H + g[Z], pe = H - g[I], Te = d ? -$[B] / 2 : 0, L = b === qe ? E[B] : $[B], D = b === qe ? -$[B] : -E[B], W = t.elements.arrow, N = d && W ? Qt(W) : {
                width: 0,
                height: 0
            }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fo(), ve = re[Z], at = re[I], Ae = Qe(0, E[B], N[B]), wt = O ? E[B] / 2 - Te - Ae - ve - k.mainAxis : L - Ae - ve - k.mainAxis, ho = O ? -E[B] / 2 + Te + Ae + at + k.mainAxis : D + Ae + at + k.mainAxis, Et = t.elements.arrow && ot(t.elements.arrow), yo = Et ? y === "y" ? Et.clientTop || 0 : Et.clientLeft || 0 : 0, tn = (C = M == null ? void 0 : M[y]) != null ? C : 0, bo = H + wt - tn - yo, wo = H + ho - tn, nn = Qe(d ? mt($e, bo) : $e, H, d ? _e(pe, wo) : pe);
            w[y] = nn,
            R[y] = nn - H
        }
        if (a) {
            var on, Eo = y === "x" ? ee : te, xo = y === "x" ? de : fe, ke = w[p], lt = p === "y" ? "height" : "width", rn = ke + g[Eo], an = ke - g[xo], xt = [ee, te].indexOf(P) !== -1, ln = (on = M == null ? void 0 : M[p]) != null ? on : 0, sn = xt ? rn : ke - E[lt] - $[lt] - ln + k.altAxis, un = xt ? ke + E[lt] + $[lt] - ln - k.altAxis : an, cn = d && xt ? La(sn, ke, un) : Qe(d ? sn : rn, ke, d ? un : an);
            w[p] = cn,
            R[p] = cn - ke
        }
        t.modifiersData[o] = R
    }
}
const Fa = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Da,
    requiresIfExists: ["offset"]
};
var Ma = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t,
    po(typeof t != "number" ? t : vo(t, rt))
};
function Ba(e) {
    var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, i = n.modifiersData.popperOffsets, a = he(n.placement), s = Jt(a), c = [te, fe].indexOf(a) >= 0, u = c ? "height" : "width";
    if (!(!l || !i)) {
        var m = Ma(r.padding, n)
          , v = Qt(l)
          , d = s === "y" ? ee : te
          , h = s === "y" ? de : fe
          , f = n.rects.reference[u] + n.rects.reference[s] - i[s] - n.rects.popper[u]
          , g = i[s] - n.rects.reference[s]
          , P = ot(l)
          , b = P ? s === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0
          , O = f / 2 - g / 2
          , y = m[d]
          , p = b - v[u] - m[h]
          , w = b / 2 - v[u] / 2 + O
          , E = Qe(y, w, p)
          , $ = s;
        n.modifiersData[o] = (t = {},
        t[$] = E,
        t.centerOffset = E - w,
        t)
    }
}
function ja(e) {
    var t = e.state
      , n = e.options
      , o = n.element
      , r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r),
    !r) || uo(t.elements.popper, r) && (t.elements.arrow = r))
}
const _a = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Ba,
    effect: ja,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
}
  , Na = ca({
    defaultModifiers: [...wa, ka, $a, Fa, go, mo, _a]
});
function Ha({locked: e=!1, overflowPadding: t=8, offsetDistance: n=8, offsetSkid: o=0, gpuAcceleration: r=!0, adaptive: l=!0, scroll: i=!0, resize: a=!0, arrow: s=!1, placement: c, strategy: u}, m) {
    const v = S(null)
      , d = S(null)
      , h = S(null);
    return z( () => {
        Y(f => {
            if (!d.value || !v.value && !(m != null && m.value))
                return;
            const g = dn(d)
              , P = (m == null ? void 0 : m.value) || dn(v);
            if (!(g instanceof HTMLElement) || !P)
                return;
            const b = {
                modifiers: [{
                    name: "flip",
                    enabled: !e
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: t
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: [o, n]
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: l,
                        gpuAcceleration: r
                    }
                }, {
                    name: "eventListeners",
                    options: {
                        scroll: i,
                        resize: a
                    }
                }, {
                    name: "arrow",
                    enabled: s
                }]
            };
            c && (b.placement = c),
            u && (b.strategy = u),
            h.value = Na(P, g, b),
            f(h.value.destroy)
        }
        )
    }
    ),
    [v, d, h]
}
const $t = $n(ft.ui.strategy, ft.ui.popover, Ro)
  , Ra = K({
    components: {
        HPopover: eo,
        HPopoverButton: Ar,
        HPopoverPanel: kr
    },
    inheritAttrs: !1,
    props: {
        mode: {
            type: String,
            default: "click",
            validator: e => ["click", "hover"].includes(e)
        },
        open: {
            type: Boolean,
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        openDelay: {
            type: Number,
            default: () => $t.default.openDelay
        },
        closeDelay: {
            type: Number,
            default: () => $t.default.closeDelay
        },
        overlay: {
            type: Boolean,
            default: !1
        },
        popper: {
            type: Object,
            default: () => ({})
        },
        class: {
            type: [String, Object, Array],
            default: () => ""
        },
        ui: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["update:open"],
    setup(e, {emit: t}) {
        const {ui: n, attrs: o} = Tn("popover", pt(e, "ui"), $t, pt(e, "class"))
          , r = T( () => Co(e.mode === "hover" ? {
            offsetDistance: 0
        } : {}, e.popper, n.value.popper))
          , [l,i] = Ha(r.value)
          , a = S(null)
          , s = S(null);
        let c = null
          , u = null;
        z( () => {
            var P, b;
            const f = (P = a.value) == null ? void 0 : P.$.provides;
            if (!f)
                return;
            const g = Object.getOwnPropertySymbols(f);
            s.value = g.length && f[g[0]],
            e.open && ((b = s.value) == null || b.togglePopover())
        }
        );
        const m = T( () => {
            var b, O, y;
            if (e.mode !== "hover")
                return {};
            const f = ((b = e.popper) == null ? void 0 : b.offsetDistance) || ((O = n.value.popper) == null ? void 0 : O.offsetDistance) || 8
              , g = (y = r.value.placement) == null ? void 0 : y.split("-")[0]
              , P = `${f}px`;
            return g === "top" || g === "bottom" ? {
                paddingTop: P,
                paddingBottom: P
            } : g === "left" || g === "right" ? {
                paddingLeft: P,
                paddingRight: P
            } : {
                paddingTop: P,
                paddingBottom: P,
                paddingLeft: P,
                paddingRight: P
            }
        }
        );
        function v(f) {
            !f.cancelable || !s.value || (s.value.popoverState === 0 ? s.value.closePopover() : s.value.togglePopover())
        }
        function d() {
            e.mode !== "hover" || !s.value || (u && (clearTimeout(u),
            u = null),
            s.value.popoverState !== 0 && (c = c || setTimeout( () => {
                s.value.togglePopover && s.value.togglePopover(),
                c = null
            }
            , e.openDelay)))
        }
        function h() {
            e.mode !== "hover" || !s.value || (c && (clearTimeout(c),
            c = null),
            s.value.popoverState !== 1 && (u = u || setTimeout( () => {
                s.value.closePopover && s.value.closePopover(),
                u = null
            }
            , e.closeDelay)))
        }
        return Oe( () => e.open, (f, g) => {
            s.value && (g === void 0 || f === g || (f ? s.value.popoverState = 0 : s.value.closePopover()))
        }
        ),
        Oe( () => {
            var f;
            return (f = s.value) == null ? void 0 : f.popoverState
        }
        , (f, g) => {
            g === void 0 || f === g || t("update:open", f === 0)
        }
        ),
        Dn( () => Cn("$CN4i6CGfdW")),
        {
            ui: n,
            attrs: o,
            popover: a,
            popper: r,
            trigger: l,
            container: i,
            containerStyle: m,
            onTouchStart: v,
            onMouseEnter: d,
            onMouseLeave: h
        }
    }
})
  , Ia = ["disabled"];
function Wa(e, t, n, o, r, l) {
    const i = De("HPopoverButton")
      , a = De("HPopoverPanel")
      , s = De("HPopover");
    return q(),
    se(s, Be({
        ref: "popover",
        class: e.ui.wrapper
    }, e.attrs, {
        onMouseleave: e.onMouseLeave
    }), {
        default: _( ({open: c, close: u}) => [F(i, {
            ref: "trigger",
            as: "div",
            disabled: e.disabled,
            class: me(e.ui.trigger),
            role: "button",
            onMouseenter: e.onMouseEnter,
            onTouchstartPassive: e.onTouchStart
        }, {
            default: _( () => [vt(e.$slots, "default", {
                open: c,
                close: u
            }, () => [ge("button", {
                disabled: e.disabled
            }, " Open ", 8, Ia)])]),
            _: 2
        }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]), e.overlay ? (q(),
        se(Tt, Be({
            key: 0,
            appear: ""
        }, e.ui.overlay.transition), {
            default: _( () => [c ? (q(),
            Re("div", {
                key: 0,
                class: me([e.ui.overlay.base, e.ui.overlay.background])
            }, null, 2)) : Fe("", !0)]),
            _: 2
        }, 1040)) : Fe("", !0), c ? (q(),
        Re("div", {
            key: 1,
            ref: "container",
            class: me([e.ui.container, e.ui.width]),
            style: Lo(e.containerStyle),
            onMouseenter: t[0] || (t[0] = (...m) => e.onMouseEnter && e.onMouseEnter(...m))
        }, [F(Tt, Be({
            appear: ""
        }, e.ui.transition), {
            default: _( () => [ge("div", null, [e.popper.arrow ? (q(),
            Re("div", {
                key: 0,
                "data-popper-arrow": "",
                class: me(Object.values(e.ui.arrow))
            }, null, 2)) : Fe("", !0), F(a, {
                class: me([e.ui.base, e.ui.background, e.ui.ring, e.ui.rounded, e.ui.shadow]),
                static: ""
            }, {
                default: _( () => [vt(e.$slots, "panel", {
                    open: c,
                    close: u
                })]),
                _: 2
            }, 1032, ["class"])])]),
            _: 2
        }, 1040)], 38)) : Fe("", !0)]),
        _: 3
    }, 16, ["class", "onMouseleave"])
}
const Ua = Ht(Ra, [["render", Wa]])
  , Va = {
    class: "fixed inset-0 z-[-1] bg-white flex flex-col items-center justify-center gap-0"
}
  , qa = {
    class: "flex flex-row flex-wrap items-center justify-center gap-4 mt-4 md:mt-4"
}
  , za = {
    class: "absolute bottom-2 inset-x-0 flex flex-col items-center justify-end"
}
  , Ga = {
    class: "text-center px-4 text-xs text-mog-700 mt-4 mb-4"
}
  , Ya = {
    __name: "NavMenu",
    props: {
        toggleBurgerMenu: Function
    },
    setup(e) {
        const {toggleBurgerMenu: t} = e;
        function n() {
            return kt().$reset(),
            o(),
            An({
                name: "index"
            })
        }
        function o() {
            t(!1)
        }
        const r = {
            base: "uppercase",
            variant: {
                link: "text-center font-black text-3xl md:text-[64px] md:leading-normal text-primary-600 hover:text-primary-600 underline-offset-8"
            }
        }
          , l = {
            base: "",
            rounded: "rounded-full",
            color: {
                white: "shadow-none ring-0"
            },
            variant: {
                solid: "ring-0"
            },
            icon: {
                size: {
                    xl: "h-10 w-10 md:h-12 md:w-12 hover:brightness-90"
                }
            }
        };
        return (i, a) => {
            const s = kn
              , c = Do;
            return q(),
            Re("div", Va, [F(s, {
                onClick: n,
                ui: r,
                color: "primary",
                variant: "link"
            }, {
                default: _( () => [ie("Upload")]),
                _: 1
            }), F(s, {
                onClick: o,
                to: "/wtf",
                ui: r,
                color: "primary",
                variant: "link"
            }, {
                default: _( () => [ie("WTF IS MOG.ME?")]),
                _: 1
            }), F(s, {
                onClick: o,
                to: "https://mogcoin.xyz/",
                external: "",
                target: "_blank",
                ui: r,
                color: "primary",
                variant: "link"
            }, {
                default: _( () => [ie("ABOUT MOG")]),
                _: 1
            }), F(s, {
                onClick: o,
                to: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a",
                target: "_blank",
                external: "",
                ui: r,
                color: "primary",
                variant: "link"
            }, {
                default: _( () => [ie("BUY $MOG")]),
                _: 1
            }), ge("div", qa, [F(s, {
                to: "http://x.com/mogcoin",
                external: "",
                target: "_blank",
                ui: l,
                color: "white",
                variant: "solid",
                padded: !1,
                size: "xl",
                square: "",
                icon: "i-socials-x"
            }), F(s, {
                to: " https://t.me/mogcoinYUP",
                external: "",
                target: "_blank",
                ui: l,
                color: "white",
                variant: "solid",
                padded: !1,
                size: "xl",
                square: "",
                icon: "i-socials-telegram"
            }), F(s, {
                to: "https://www.tiktok.com/@mogcoineth",
                external: "",
                target: "_blank",
                ui: l,
                color: "white",
                variant: "solid",
                padded: !1,
                size: "xl",
                square: "",
                icon: "i-socials-tiktok"
            }), F(s, {
                to: "https://www.instagram.com/mogcoineth/",
                external: "",
                target: "_blank",
                ui: l,
                color: "white",
                variant: "solid",
                padded: !1,
                size: "xl",
                square: "",
                icon: "i-socials-instagram"
            })]), ge("div", za, [ge("p", Ga, [ie(" Copyright © 2024 MOG.ME. All rights reserved. Pit Viper® and the Pit Viper logo are registered trademarks of Pit Viper, Inc. "), F(c, {
                onClick: o,
                class: "underline underline-offset-2",
                to: {
                    name: "tos"
                }
            }, {
                default: _( () => [ie("Terms")]),
                _: 1
            }), ie(" | "), F(c, {
                onClick: o,
                class: "underline underline-offset-2",
                to: {
                    name: "privacy"
                }
            }, {
                default: _( () => [ie("Privacy Policy")]),
                _: 1
            })])])])
        }
    }
}
  , Xa = Ya
  , Ka = {
    class: "w-full bg-white flex items-center justify-center sticky top-0 z-[51]"
}
  , Qa = {
    class: "w-full px-4 p-2 flex items-center justify-between"
}
  , Za = {
    class: "flex gap-2"
}
  , Ja = {
    __name: "Nav",
    setup(e) {
        const t = kt()
          , {getWalletDisplayName: n, getWalletAddress: o, getWalletConnected: r, getConnectedWalletAddress: l, getConnectedWalletDisplayName: i} = At(t)
          , a = Ct()
          , {getTopModal: s} = At(a);
        async function c() {
            Ct().openModal(fn.ConnectWalletModal)
        }
        function u() {
            t.wallet = null
        }
        function m() {
            return kt().$reset(),
            An({
                name: "index"
            })
        }
        const v = S(!1);
        function d(b) {
            v.value = b
        }
        const h = {
            color: {
                white: {
                    ghost: "hover:bg-white dark:hover:bg-white"
                }
            },
            icon: {
                size: {
                    xl: "lg:h-12 lg:w-36 w-32 h-12"
                }
            }
        }
          , f = {
            rounded: "rounded-full",
            padding: {
                xl: "px-4 py-2"
            },
            square: "p-8",
            color: {
                mog: {
                    solid: "bg-mog-700 text-white",
                    outline: "bg-bg-transparent text-mog-700 ring-2 ring-inset ring-mog-700 focus-visible:ring-mog-500"
                }
            }
        }
          , g = S({
            base: "w-48 font-bold px-4 py-3",
            rounded: "rounded-md",
            padding: {
                xl: "px-4 py-3"
            },
            square: "p-8",
            variant: {
                solid: "outline-none focus-visible:outline-none"
            },
            color: {
                white: {
                    solid: "text-mog-700 stroke-mog-700 ring-0"
                }
            },
            padding: {
                lg: "px-4 py-2"
            },
            icon: {
                base: "stroke-mog-700 text-mog-700",
                color: "text-mog-700"
            }
        })
          , P = {
            color: {
                mog: {
                    ghost: "hover:bg-white dark:hover:bg-white text-mog-700 dark:text-mog-700"
                }
            },
            icon: {
                size: {
                    xl: "h-8 w-8"
                }
            }
        };
        return (b, O) => {
            var $;
            const y = kn
              , p = Mo
              , w = Ua
              , E = Xa;
            return q(),
            Re("div", Ka, [ge("div", Qa, [F(y, {
                size: "xl",
                ui: h,
                padded: !1,
                variant: "ghost",
                icon: "i-branding-mogme",
                color: "white",
                onClick: m
            }), ge("div", Za, [(($ = U(s)) == null ? void 0 : $.name) == ("Modal"in b ? b.Modal : U(fn)).ConnectWalletModal ? (q(),
            se(y, {
                key: 0,
                ui: f,
                variant: "solid",
                color: "mog",
                loading: "",
                size: "xl",
                label: "Pending..."
            })) : U(l) && U(r) ? (q(),
            se(w, {
                key: 1,
                popper: {
                    placement: "bottom-end",
                    offsetDistance: 4
                }
            }, {
                panel: _( () => [F(y, {
                    onClick: u,
                    color: "white",
                    variant: "solid",
                    ui: U(g),
                    size: "xl"
                }, {
                    default: _( () => [F(p, {
                        name: "i-ui-wallet-disconnect",
                        class: "size-6"
                    }), ie(" Disconnect ")]),
                    _: 1
                }, 8, ["ui"])]),
                default: _( () => [F(y, {
                    ui: f,
                    variant: "outline",
                    color: "mog",
                    size: "xl"
                }, {
                    default: _( () => [F(U(No), {
                        seed: U(l),
                        size: 8,
                        class: "inline-block border-2 border-mog-500 rounded-full h-6"
                    }, null, 8, ["seed"]), ie(" " + Fo(U(i)), 1)]),
                    _: 1
                })]),
                _: 1
            })) : (q(),
            se(y, {
                key: 2,
                ui: f,
                variant: "solid",
                color: "mog",
                size: "xl",
                onClick: c
            }, {
                default: _( () => [F(p, {
                    name: "i-ui-wallet",
                    class: "size-6"
                }), ie(" Sign In ")]),
                _: 1
            })), F(y, {
                padded: !1,
                variant: "ghost",
                size: "xl",
                icon: U(v) ? "i-ui-x" : "i-ui-hamburger",
                color: "mog",
                ui: P,
                onClick: O[0] || (O[0] = A => d(!U(v)))
            }, null, 8, ["icon"])])]), F(Tt, {
                name: "slide-down"
            }, {
                default: _( () => [U(v) ? (q(),
                se(E, {
                    key: 0,
                    toggleBurgerMenu: d
                })) : Fe("", !0)]),
                _: 1
            })])
        }
    }
}
  , el = Ja
  , tl = $n(ft.ui.strategy, ft.ui.modal, Ho)
  , nl = K({
    components: {
        HDialog: Pr,
        HDialogPanel: Or,
        TransitionRoot: ro,
        TransitionChild: oo
    },
    inheritAttrs: !1,
    props: {
        modelValue: {
            type: Boolean,
            default: !1
        },
        appear: {
            type: Boolean,
            default: !1
        },
        overlay: {
            type: Boolean,
            default: !0
        },
        transition: {
            type: Boolean,
            default: !0
        },
        preventClose: {
            type: Boolean,
            default: !1
        },
        fullscreen: {
            type: Boolean,
            default: !1
        },
        class: {
            type: [String, Object, Array],
            default: () => ""
        },
        ui: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
    setup(e, {emit: t}) {
        const {ui: n, attrs: o} = Tn("modal", pt(e, "ui"), tl, pt(e, "class"))
          , r = T({
            get() {
                return e.modelValue
            },
            set(s) {
                t("update:modelValue", s)
            }
        })
          , l = T( () => e.transition ? {
            ...n.value.transition
        } : {});
        function i(s) {
            if (e.preventClose) {
                t("close-prevented");
                return
            }
            r.value = s,
            t("close")
        }
        const a = () => {
            t("after-leave")
        }
        ;
        return Dn( () => Cn("$JQWq0rGUDA")),
        {
            ui: n,
            attrs: o,
            isOpen: r,
            transitionClass: l,
            onAfterLeave: a,
            close: i
        }
    }
});
function ol(e, t, n, o, r, l) {
    const i = De("TransitionChild")
      , a = De("HDialogPanel")
      , s = De("HDialog")
      , c = De("TransitionRoot");
    return q(),
    se(c, {
        appear: e.appear,
        show: e.isOpen,
        as: "template",
        onAfterLeave: e.onAfterLeave
    }, {
        default: _( () => [F(s, Be({
            class: e.ui.wrapper
        }, e.attrs, {
            onClose: e.close
        }), {
            default: _( () => [e.overlay ? (q(),
            se(i, Be({
                key: 0,
                as: "template",
                appear: e.appear
            }, e.ui.overlay.transition), {
                default: _( () => [ge("div", {
                    class: me([e.ui.overlay.base, e.ui.overlay.background])
                }, null, 2)]),
                _: 1
            }, 16, ["appear"])) : Fe("", !0), ge("div", {
                class: me(e.ui.inner)
            }, [ge("div", {
                class: me([e.ui.container, !e.fullscreen && e.ui.padding])
            }, [F(i, Be({
                as: "template",
                appear: e.appear
            }, e.transitionClass), {
                default: _( () => [F(a, {
                    class: me([e.ui.base, e.ui.background, e.ui.ring, e.ui.shadow, e.fullscreen ? e.ui.fullscreen : [e.ui.width, e.ui.height, e.ui.rounded, e.ui.margin]])
                }, {
                    default: _( () => [vt(e.$slots, "default")]),
                    _: 3
                }, 8, ["class"])]),
                _: 3
            }, 16, ["appear"])], 2)], 2)]),
            _: 3
        }, 16, ["class", "onClose"])]),
        _: 3
    }, 8, ["appear", "show", "onAfterLeave"])
}
const rl = Ht(nl, [["render", ol]])
  , al = K({
    __name: "AppModals",
    setup(e) {
        const t = Ct()
          , {getModals: n, getTopModal: o, isOpen: r} = At(t)
          , l = {
            padding: "p-0",
            overlay: {
                background: "bg-black bg-opacity-80"
            }
        };
        return (i, a) => {
            const s = rl;
            return q(),
            se(s, {
                ui: l,
                modelValue: U(r),
                "onUpdate:modelValue": a[0] || (a[0] = c => _o(r) ? r.value = c : null),
                onClose: a[1] || (a[1] = c => U(t).closeModals())
            }, {
                default: _( () => {
                    var c, u;
                    return [(q(),
                    se(Bo, null, [(c = U(o)) != null && c.name ? (q(),
                    se(jo(U(o).name), Be({
                        key: (u = U(o)) == null ? void 0 : u.id
                    }, U(o).props), null, 16)) : Fe("", !0)], 1024))]
                }
                ),
                _: 1
            }, 8, ["modelValue"])
        }
    }
})
  , ll = {}
  , il = {
    class: "application"
};
function sl(e, t) {
    const n = el
      , o = al;
    return q(),
    Re("div", il, [F(n), vt(e.$slots, "default"), F(o)])
}
const vl = Ht(ll, [["render", sl]]);
export {vl as default};
