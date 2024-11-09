import {D as S} from "./CJrNJHe2.js";
import {r as u, ao as D, a4 as g, ap as y, ab as A} from "./Bfc6mzjo.js";
import {g as E, s as F, d as I, u as R} from "./DeDRPzjy.js";
function _(e, o, c={}) {
    const {flush: l="pre", deep: f=!0, shallow: w=!1, onError: r=a => {
        console.error(a)
    }
    , writeDefaults: d=!0} = c
      , n = u(!1)
      , s = (w ? D : u)(o)
      , t = g(o);
    async function h() {
        try {
            const a = await E(e);
            a === void 0 ? t != null && d && await F(e, t) : s.value = a
        } catch (a) {
            r(a)
        }
        n.value = !0
    }
    h();
    async function i() {
        try {
            s.value == null ? await I(e) : await R(e, () => A(s.value))
        } catch (a) {
            r(a)
        }
    }
    const {pause: p, resume: v} = y(s, () => i(), {
        flush: l,
        deep: f
    });
    async function m(a) {
        p(),
        s.value = a,
        await i(),
        v()
    }
    return {
        set: m,
        isFinished: n,
        data: s
    }
}
const {data: W, isFinished: x} = _(S, "");
export {W as c};
