import {ar as l, as as m} from "./Bfc6mzjo.js";
function f(e, a) {
    const {title: r, titleTemplate: s, ...n} = e;
    return l({
        title: r,
        titleTemplate: s,
        _flatMeta: n
    }, {
        ...a,
        transform(t) {
            const o = m({
                ...t._flatMeta
            });
            return delete t._flatMeta,
            {
                ...t,
                meta: o
            }
        }
    })
}
export {f as u};
