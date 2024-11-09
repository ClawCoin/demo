import {ag as r} from "./Bfc6mzjo.js";
function i(t) {
    if (!t)
        throw r("Please enter a valid wallet address");
    return $fetch(`https://ens.qnft.tech/${t.toLowerCase()}`).then(e => e)
}
function c() {
    return $fetch("https://stickers.mog.me/data/stickers.json").then(t => t.map(e => {
        var o, s, a, m;
        return e.position && (e.position = {
            left: e.position.left,
            top: e.position.width,
            width: e.position.top,
            height: e.position.height,
            angle: e.position.angle
        }),
        {
            ...e,
            image: (s = (o = e.image) == null ? void 0 : o.replace("mog.me.s3.amazonaws.com", "stickers.mog.me")) == null ? void 0 : s.replace("s3.amazonaws.com/mog.me", "stickers.mog.me"),
            previewImage: (m = (a = e.previewImage) == null ? void 0 : a.replace("mog.me.s3.amazonaws.com", "stickers.mog.me")) == null ? void 0 : m.replace("s3.amazonaws.com/mog.me", "stickers.mog.me")
        }
    }
    ))
}
function g() {
    return $fetch("https://stickers.mog.me/data/categories.json").then(t => t.map(e => {
        var o, s, a, m;
        return {
            ...e,
            image: (s = (o = e.image) == null ? void 0 : o.replace("mog.me.s3.amazonaws.com", "stickers.mog.me")) == null ? void 0 : s.replace("s3.amazonaws.com/mog.me", "stickers.mog.me"),
            previewImage: (m = (a = e.previewImage) == null ? void 0 : a.replace("mog.me.s3.amazonaws.com", "stickers.mog.me")) == null ? void 0 : m.replace("s3.amazonaws.com/mog.me", "stickers.mog.me")
        }
    }
    ))
}
function l() {
    return $fetch("https://stickers.mog.me/data/subcategories.json")
}
function p() {
    return $fetch("https://stickers.mog.me/data/collections.json")
}
function f(t) {
    if (t == null)
        return "null address";
    t = t.toString();
    let e = t.slice(0, 6)
      , o = t.slice(-4);
    return e + "..." + o
}
export {g as a, l as b, c, p as f, i as r, f as s};
