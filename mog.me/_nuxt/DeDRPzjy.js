function u(t) {
    return new Promise( (e, n) => {
        t.oncomplete = t.onsuccess = () => e(t.result),
        t.onabort = t.onerror = () => n(t.error)
    }
    )
}
function l(t, e) {
    const n = indexedDB.open(t);
    n.onupgradeneeded = () => n.result.createObjectStore(e);
    const r = u(n);
    return (o, a) => r.then(i => a(i.transaction(e, o).objectStore(e)))
}
let s;
function c() {
    return s || (s = l("keyval-store", "keyval")),
    s
}
function f(t, e=c()) {
    return e("readonly", n => u(n.get(t)))
}
function p(t, e, n=c()) {
    return n("readwrite", r => (r.put(e, t),
    u(r.transaction)))
}
function h(t, e, n=c()) {
    return n("readwrite", r => new Promise( (o, a) => {
        r.get(t).onsuccess = function() {
            try {
                r.put(e(this.result), t),
                o(u(r.transaction))
            } catch (i) {
                a(i)
            }
        }
    }
    ))
}
function y(t, e=c()) {
    return e("readwrite", n => (n.delete(t),
    u(n.transaction)))
}
function g(t=c()) {
    return t("readwrite", e => (e.clear(),
    u(e.transaction)))
}
function d(t, e) {
    return t.openCursor().onsuccess = function() {
        this.result && (e(this.result),
        this.result.continue())
    }
    ,
    u(t.transaction)
}
function w(t=c()) {
    return t("readonly", e => {
        if (e.getAllKeys)
            return u(e.getAllKeys());
        const n = [];
        return d(e, r => n.push(r.key)).then( () => n)
    }
    )
}
export {g as a, l as c, y as d, f as g, w as k, p as s, h as u};
