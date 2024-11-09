import {r as S, g as Bn, h as ft, i as Hn, j as De, d as m, c as k, a as I, u as y, F as Q, b as H, k as Wn, f as Oe, l as ct, m as W, n as jn, p as Ne, q as an, s as qn, t as Me, v as Xe, x as on, y as ut, z as Yn, A as Vn, o as pt, B as Xn, C as qe, D as Pe, E as pe, G as J, H as se, I as Gn, J as Kn, K as xe, e as we, L as re, M as Zn, N as K, w as Ae, O as Se, P as Jn, _ as Ge, Q as Qn, R as vt, S as es, T as ts, U as ns, V as dt, W as ht, X as rn, Y as xt, Z as ln, $ as ss, a0 as as, a1 as is, a2 as os, a3 as rs, a4 as nn, a5 as ne, a6 as ls, a7 as Nt, a8 as cs, a9 as us, aa as ds, ab as z, ac as hs, ad as fs, ae as ps, af as vs, ag as gs, ah as ms, ai as ys, aj as _s, ak as $t, al as Ts, am as bs, an as sn} from "./Bfc6mzjo.js";
import {u as Le, a as Cs, c as Es} from "./Dqfqtkbx.js";
import {N as ks, E as Ue, S as Is, a as ws, b as Ss} from "./CJrNJHe2.js";
import {f as As, s as Os, r as Ns, a as $s, b as Rs, c as Ps} from "./BwjMfCJ9.js";
import {u as Ms, c as Ds, M as Fs} from "./Do7bsGti.js";
import {c as xs} from "./kzQ2YxOD.js";
import {u as Us} from "./DnvamY80.js";
import "./DeDRPzjy.js";
const zs = {
    wrapper: "",
    inner: "",
    label: {
        wrapper: "flex content-center items-center justify-between",
        base: "block font-medium text-gray-700 dark:text-gray-200",
        required: "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
    },
    size: {
        "2xs": "text-xs",
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-sm",
        xl: "text-base"
    },
    container: "mt-1 relative",
    description: "text-gray-500 dark:text-gray-400",
    hint: "text-gray-500 dark:text-gray-400",
    help: "mt-2 text-gray-500 dark:text-gray-400",
    error: "mt-2 text-red-500 dark:text-red-400",
    default: {
        size: "sm"
    }
};
function Ls(n) {
    const o = S("")
      , r = S(!1)
      , i = S()
      , d = S()
      , p = S();
    async function E(_) {
        if (!_ || !_.length)
            return;
        const R = (_ == null ? void 0 : _[0]) ?? _.item(0);
        d.value = R,
        o.value = URL.createObjectURL(R)
    }
    async function v() {}
    function C() {
        o.value = "",
        d.value = void 0
    }
    const {isOverDropZone: O} = Bn(p, {
        onDrop: E,
        dataTypes: ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/webp"]
    });
    return {
        dropZoneRef: p,
        onDrop: E,
        isOverDropZone: O,
        isUploading: r,
        error: i,
        image: o,
        uploadImage: v,
        removeImage: C
    }
}
const ze = ft(ks, {});
function cn() {
    return As().then(n => {
        ze.value = n
    }
    )
}
const un = {
    "nft-azuki": {
        name: "Azuki",
        key: "nft-azuki",
        s3_key: "azuki",
        contractAddress: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
        network: "eth-mainnet"
    },
    "nft-azuki_beanz": {
        name: "Azuki Beanz",
        key: "nft-azuki_beanz",
        s3_key: "azuki_beanz",
        contractAddress: "0x3Af2A97414d1101E2107a70E7F33955da1346305",
        network: "eth-mainnet"
    },
    "nft-bayc": {
        name: "BAYC",
        key: "nft-bayc",
        s3_key: "bayc",
        contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        network: "eth-mainnet"
    },
    "nft-cryptopunks": {
        name: "Cryptopunks",
        key: "nft-cryptopunks",
        s3_key: "cryptopunks",
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        network: "eth-mainnet"
    },
    "nft-degods": {
        name: "Degods",
        key: "nft-degods",
        s3_key: "degods",
        contractAddress: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
        network: "eth-mainnet"
    },
    "nft-kanpai_pandas": {
        name: "Kanpai Pandas",
        key: "nft-kanpai_pandas",
        s3_key: "kanpai_pandas",
        contractAddress: "0xaCF63E56fd08970b43401492a02F6F38B6635C91",
        network: "eth-mainnet"
    },
    "nft-mayc": {
        name: "MAYC",
        key: "nft-mayc",
        s3_key: "mayc",
        contractAddress: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
        network: "eth-mainnet"
    },
    "nft-mfers": {
        name: "mfers",
        key: "nft-mfers",
        s3_key: "mfers",
        contractAddress: "0x79FCDEF22feeD20eDDacbB2587640e45491b757f",
        network: "eth-mainnet"
    },
    "nft-milady": {
        name: "Milady",
        key: "nft-milady",
        s3_key: "milady",
        contractAddress: "0x5Af0D9827E0c53E4799BB226655A1de152A425a5",
        network: "eth-mainnet"
    },
    "nft-pepen": {
        name: "Opepen",
        key: "nft-opepen",
        s3_key: "opepen",
        contractAddress: "0x6339e5E072086621540D0362C4e3Cea0d643E114",
        network: "eth-mainnet"
    },
    "nft-pudgy_penguins": {
        name: "Pudgy Penguins",
        key: "nft-pudgy_penguins",
        s3_key: "pudgy_penguins",
        contractAddress: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
        network: "eth-mainnet"
    },
    "nft-redacted_remilio": {
        name: "Redacted Remilio",
        key: "nft-redacted_remilio",
        s3_key: "redacted_remilio",
        contractAddress: "0xD3D9ddd0CF0A5F0BFB8f7fcEAe075DF687eAEBaB",
        network: "eth-mainnet"
    },
    "nft-sappy_seals": {
        name: "Sappy Seals",
        key: "nft-sappy_seals",
        s3_key: "sappy_seals",
        contractAddress: "0x364C828eE171616a39897688A831c2499aD972ec",
        network: "eth-mainnet"
    },
    "nft-tubby_cats": {
        name: "Tubby Cats",
        key: "nft-tubby_cats",
        s3_key: "tubby_cats",
        contractAddress: "0xCa7cA7BcC765F77339bE2d648BA53ce9c8a262bD",
        network: "eth-mainnet"
    },
    "nft-wassies": {
        name: "Wassies",
        key: "nft-wassies",
        s3_key: "wassies",
        contractAddress: "0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea",
        network: "eth-mainnet"
    },
    "nft-y00ts": {
        name: "y00ts",
        key: "nft-y00ts",
        s3_key: "y00ts",
        contractAddress: "6NLcsCos3fTMBRHFEdeTSBW9C89Qxhh4bJ1ERDRnuUBy",
        network: "solana"
    }
};
Object.values(un).filter(n => n.network == "eth-mainnet").map( ({contractAddress: n}) => n);
Object.values(un).filter(n => n.network == "solana").map( ({contractAddress: n}) => n);
function dn({collectionName: n, collectionKey: o, tokenId: r, image: i, previewImage: d, collection: p}) {
    return {
        collectionName: n ?? "",
        collectionKey: o ?? "",
        contractAddress: "",
        tokenId: r ?? "",
        balance: "1",
        name: "",
        description: "",
        previewImage: d ?? i ?? `https://stickers.mog.me/${p.s3_key}/image/original/${r}.png`,
        image: i ?? `https://stickers.mog.me/${p.s3_key}/image/original/${r}.png`,
        collection: p
    }
}
function Bs(n) {
    const o = Object.values(ze.value).find(r => r.contractAddress == n.contractAddress);
    return {
        ...n,
        image: `https://stickers.mog.me/${o == null ? void 0 : o.s3_key}/image/original/${n.tokenId}.png`,
        previewImage: `https://stickers.mog.me/${o == null ? void 0 : o.s3_key}/image/250/${n.tokenId}.png`,
        collection: o,
        collectionName: o == null ? void 0 : o.name,
        collectionKey: o == null ? void 0 : o.key
    }
}
const Hs = {
    class: "p-4 flex flex-col justify-center items-center gap-8",
    for: "mobile-image"
}
  , Ws = {
    class: "max-w-md text-center gap-3 items-center flex flex-col"
}
  , js = I("h1", {
    class: "lg:text-5xl text-3xl font-black"
}, "MOG ANY IMAGE", -1)
  , qs = I("p", {
    class: "text-gom-500 text-lg font-semibold"
}, " Add Pit Viper® sunglasses and other stickers to photos and NFT profile pictures ", -1)
  , Ys = {
    class: "pt-4 flex flex-col gap-2"
}
  , Vs = ["for"]
  , Xs = {
    class: "flex flex-row items-center gap-2 p-2 px-4 bg-gom-500 text-mog-700 rounded-full cursor-pointer"
}
  , Gs = I("span", {
    class: "font-semibold"
}, "Upload an image", -1)
  , Ks = ["id", "loading"]
  , Zs = I("p", {
    class: "text-gom-500"
}, "or drag & drop here", -1)
  , Js = I("p", {
    class: "text-gom-500"
}, "Drop JPEGs, JPGs or PNGs here to upload", -1)
  , Qs = {
    __name: "Dropzone",
    setup(n) {
        const r = Hn(Wn).greater("md");
        S("");
        const {image: i, dropZoneRef: d, onDrop: p, imageFile: E, isOverDropZone: v, isUploading: C, error: O, uploadImage: _, removeImage: R} = Ls();
        return De(i, M => {
            if (M) {
                const w = Le();
                w.nft = dn({
                    image: M
                })
            }
        }
        ),
        (M, w) => {
            const D = Oe;
            return m(),
            k("label", Hs, [I("div", {
                ref_key: "dropZoneRef",
                ref: d,
                class: "w-full h-full border-dashed border-2 border-gom-500 rounded-lg p-12 flex flex-col items-center justify-center hover:bg-mog-800 hover:border-solid"
            }, [I("div", Ws, [y(v) ? (m(),
            k(Q, {
                key: 1
            }, [H(D, {
                name: "i-ui-image",
                class: "size-16"
            }), Js], 64)) : (m(),
            k(Q, {
                key: 0
            }, [H(D, {
                name: "i-branding-glasses",
                class: "size-16"
            }), js, qs, I("div", Ys, [I("label", {
                class: "relative upload",
                for: y(r) ? "image" : "mobile-image"
            }, [I("div", Xs, [H(D, {
                name: "i-ui-plus"
            }), Gs]), I("input", {
                id: y(r) ? "image" : "mobile-image",
                type: "file",
                loading: y(C),
                onChange: w[0] || (w[0] = b => {
                    var $;
                    return y(p)(($ = b == null ? void 0 : b.target) == null ? void 0 : $.files)
                }
                ),
                class: "absolute inset-0 hidden"
            }, null, 40, Ks)], 8, Vs), Zs])], 64))])], 512)])
        }
    }
}
  , ea = Qs
  , ta = (n, o) => {
    const r = ct("form-events", void 0)
      , i = ct("form-group", void 0)
      , d = ct("form-inputs", void 0);
    i && (n != null && n.id && (i.inputId.value = n == null ? void 0 : n.id),
    d && (d.value[i.name.value] = i.inputId.value));
    const p = S(!1);
    function E(_, R) {
        r && r.emit({
            type: _,
            path: R
        })
    }
    function v() {
        E("blur", i == null ? void 0 : i.name.value),
        p.value = !0
    }
    function C() {
        E("change", i == null ? void 0 : i.name.value)
    }
    const O = jn( () => {
        (p.value || i != null && i.eagerValidation.value) && E("input", i == null ? void 0 : i.name.value)
    }
    , 300);
    return {
        inputId: W( () => (n == null ? void 0 : n.id) ?? (i == null ? void 0 : i.inputId.value)),
        name: W( () => (n == null ? void 0 : n.name) ?? (i == null ? void 0 : i.name.value)),
        size: W( () => {
            var R;
            const _ = o.size[i == null ? void 0 : i.size.value] ? i == null ? void 0 : i.size.value : null;
            return (n == null ? void 0 : n.size) ?? _ ?? ((R = o == null ? void 0 : o.default) == null ? void 0 : R.size)
        }
        ),
        color: W( () => {
            var _;
            return (_ = i == null ? void 0 : i.error) != null && _.value ? "red" : n == null ? void 0 : n.color
        }
        ),
        emitFormBlur: v,
        emitFormInput: O,
        emitFormChange: C
    }
}
  , Ee = an(Me.ui.strategy, Me.ui.input, qn)
  , na = Xe({
    components: {
        UIcon: Oe
    },
    inheritAttrs: !1,
    props: {
        modelValue: {
            type: [String, Number],
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        id: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        autofocus: {
            type: Boolean,
            default: !1
        },
        autofocusDelay: {
            type: Number,
            default: 100
        },
        icon: {
            type: String,
            default: null
        },
        loadingIcon: {
            type: String,
            default: () => Ee.default.loadingIcon
        },
        leadingIcon: {
            type: String,
            default: null
        },
        trailingIcon: {
            type: String,
            default: null
        },
        trailing: {
            type: Boolean,
            default: !1
        },
        leading: {
            type: Boolean,
            default: !1
        },
        loading: {
            type: Boolean,
            default: !1
        },
        padded: {
            type: Boolean,
            default: !0
        },
        size: {
            type: String,
            default: null,
            validator(n) {
                return Object.keys(Ee.size).includes(n)
            }
        },
        color: {
            type: String,
            default: () => Ee.default.color,
            validator(n) {
                return [...Me.ui.colors, ...Object.keys(Ee.color)].includes(n)
            }
        },
        variant: {
            type: String,
            default: () => Ee.default.variant,
            validator(n) {
                return [...Object.keys(Ee.variant), ...Object.values(Ee.color).flatMap(o => Object.keys(o))].includes(n)
            }
        },
        inputClass: {
            type: String,
            default: null
        },
        class: {
            type: [String, Object, Array],
            default: () => ""
        },
        ui: {
            type: Object,
            default: () => ({})
        },
        modelModifiers: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["update:modelValue", "blur", "change"],
    setup(n, {emit: o, slots: r}) {
        const {ui: i, attrs: d} = on("input", ut(n, "ui"), Ee, ut(n, "class"))
          , {size: p, rounded: E} = Yn({
            ui: i,
            props: n
        })
          , {emitFormBlur: v, emitFormInput: C, size: O, color: _, inputId: R, name: M} = ta(n, Ee)
          , w = W( () => p.value || O.value)
          , D = S(Vn({}, n.modelModifiers, {
            trim: !1,
            lazy: !1,
            number: !1
        }))
          , b = S(null)
          , $ = () => {
            var A;
            n.autofocus && ((A = b.value) == null || A.focus())
        }
          , ce = A => {
            D.value.trim && (A = A.trim()),
            (D.value.number || n.type === "number") && (A = Gn(A)),
            o("update:modelValue", A),
            C()
        }
          , U = A => {
            D.value.lazy || ce(A.target.value)
        }
          , ae = A => {
            if (n.type === "file") {
                const V = A.target.files;
                o("change", V)
            } else {
                const V = A.target.value;
                o("change", V),
                D.value.lazy && ce(V),
                D.value.trim && (A.target.value = V.trim())
            }
        }
          , ie = A => {
            v(),
            o("blur", A)
        }
        ;
        pt( () => {
            setTimeout( () => {
                $()
            }
            , n.autofocusDelay)
        }
        );
        const L = W( () => {
            var V, $e;
            const A = (($e = (V = i.value.color) == null ? void 0 : V[_.value]) == null ? void 0 : $e[n.variant]) || i.value.variant[n.variant];
            return Xn(qe(i.value.base, i.value.form, E.value, i.value.placeholder, n.type === "file" && i.value.file.base, i.value.size[w.value], n.padded ? i.value.padding[w.value] : "p-0", A == null ? void 0 : A.replaceAll("{color}", _.value), (T.value || r.leading) && i.value.leading.padding[w.value], (B.value || r.trailing) && i.value.trailing.padding[w.value]), n.inputClass)
        }
        )
          , T = W( () => n.icon && n.leading || n.icon && !n.trailing || n.loading && !n.trailing || n.leadingIcon)
          , B = W( () => n.icon && n.trailing || n.loading && n.trailing || n.trailingIcon)
          , X = W( () => n.loading ? n.loadingIcon : n.leadingIcon || n.icon)
          , Y = W( () => n.loading && !T.value ? n.loadingIcon : n.trailingIcon || n.icon)
          , he = W( () => qe(i.value.icon.leading.wrapper, i.value.icon.leading.pointer, i.value.icon.leading.padding[w.value]))
          , le = W( () => qe(i.value.icon.base, _.value && Me.ui.colors.includes(_.value) && i.value.icon.color.replaceAll("{color}", _.value), i.value.icon.size[w.value], n.loading && i.value.icon.loading))
          , ve = W( () => qe(i.value.icon.trailing.wrapper, i.value.icon.trailing.pointer, i.value.icon.trailing.padding[w.value]))
          , ye = W( () => qe(i.value.icon.base, _.value && Me.ui.colors.includes(_.value) && i.value.icon.color.replaceAll("{color}", _.value), i.value.icon.size[w.value], n.loading && !T.value && i.value.icon.loading));
        return {
            ui: i,
            attrs: d,
            name: M,
            inputId: R,
            input: b,
            isLeading: T,
            isTrailing: B,
            inputClass: L,
            leadingIconName: X,
            leadingIconClass: le,
            leadingWrapperIconClass: he,
            trailingIconName: Y,
            trailingIconClass: ye,
            trailingWrapperIconClass: ve,
            onInput: U,
            onChange: ae,
            onBlur: ie
        }
    }
})
  , sa = ["id", "name", "value", "type", "required", "placeholder", "disabled"];
function aa(n, o, r, i, d, p) {
    const E = Oe;
    return m(),
    k("div", {
        class: J(n.ui.wrapper)
    }, [I("input", Pe({
        id: n.inputId,
        ref: "input",
        name: n.name,
        value: n.modelValue,
        type: n.type,
        required: n.required,
        placeholder: n.placeholder,
        disabled: n.disabled,
        class: n.inputClass
    }, n.attrs, {
        onInput: o[0] || (o[0] = (...v) => n.onInput && n.onInput(...v)),
        onBlur: o[1] || (o[1] = (...v) => n.onBlur && n.onBlur(...v)),
        onChange: o[2] || (o[2] = (...v) => n.onChange && n.onChange(...v))
    }), null, 16, sa), pe(n.$slots, "default"), n.isLeading && n.leadingIconName || n.$slots.leading ? (m(),
    k("span", {
        key: 0,
        class: J(n.leadingWrapperIconClass)
    }, [pe(n.$slots, "leading", {
        disabled: n.disabled,
        loading: n.loading
    }, () => [H(E, {
        name: n.leadingIconName,
        class: J(n.leadingIconClass)
    }, null, 8, ["name", "class"])])], 2)) : se("", !0), n.isTrailing && n.trailingIconName || n.$slots.trailing ? (m(),
    k("span", {
        key: 1,
        class: J(n.trailingWrapperIconClass)
    }, [pe(n.$slots, "trailing", {
        disabled: n.disabled,
        loading: n.loading
    }, () => [H(E, {
        name: n.trailingIconName,
        class: J(n.trailingIconClass)
    }, null, 8, ["name", "class"])])], 2)) : se("", !0)], 2)
}
const ia = Ne(na, [["render", aa]])
  , Rt = an(Me.ui.strategy, Me.ui.formGroup, zs)
  , oa = Xe({
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null,
            validator(n) {
                return Object.keys(Rt.size).includes(n)
            }
        },
        label: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: !1
        },
        help: {
            type: String,
            default: null
        },
        error: {
            type: [String, Boolean],
            default: null
        },
        hint: {
            type: String,
            default: null
        },
        class: {
            type: [String, Object, Array],
            default: () => ""
        },
        ui: {
            type: Object,
            default: () => ({})
        },
        eagerValidation: {
            type: Boolean,
            default: !1
        }
    },
    setup(n) {
        const {ui: o, attrs: r} = on("formGroup", ut(n, "ui"), Rt, ut(n, "class"))
          , i = ct("form-errors", null)
          , d = W( () => {
            var v, C;
            return n.error && typeof n.error == "string" || typeof n.error == "boolean" ? n.error : (C = (v = i == null ? void 0 : i.value) == null ? void 0 : v.find(O => O.path === n.name)) == null ? void 0 : C.message
        }
        )
          , p = W( () => o.value.size[n.size ?? Rt.default.size])
          , E = S(Ms("$vcp9x5Ikvj"));
        return Kn("form-group", {
            error: d,
            inputId: E,
            name: W( () => n.name),
            size: W( () => n.size),
            eagerValidation: W( () => n.eagerValidation)
        }),
        {
            ui: o,
            attrs: r,
            inputId: E,
            size: p,
            error: d
        }
    }
})
  , ra = ["for"];
function la(n, o, r, i, d, p) {
    return m(),
    k("div", Pe({
        class: n.ui.wrapper
    }, n.attrs), [I("div", {
        class: J(n.ui.inner)
    }, [n.label || n.$slots.label ? (m(),
    k("div", {
        key: 0,
        class: J([n.ui.label.wrapper, n.size])
    }, [I("label", {
        for: n.inputId,
        class: J([n.ui.label.base, n.required ? n.ui.label.required : ""])
    }, [n.$slots.label ? pe(n.$slots, "label", xe(Pe({
        key: 0
    }, {
        error: n.error,
        label: n.label,
        name: n.name,
        hint: n.hint,
        description: n.description,
        help: n.help
    }))) : (m(),
    k(Q, {
        key: 1
    }, [we(re(n.label), 1)], 64))], 10, ra), n.hint || n.$slots.hint ? (m(),
    k("span", {
        key: 0,
        class: J([n.ui.hint])
    }, [n.$slots.hint ? pe(n.$slots, "hint", xe(Pe({
        key: 0
    }, {
        error: n.error,
        label: n.label,
        name: n.name,
        hint: n.hint,
        description: n.description,
        help: n.help
    }))) : (m(),
    k(Q, {
        key: 1
    }, [we(re(n.hint), 1)], 64))], 2)) : se("", !0)], 2)) : se("", !0), n.description || n.$slots.description ? (m(),
    k("p", {
        key: 1,
        class: J([n.ui.description, n.size])
    }, [n.$slots.description ? pe(n.$slots, "description", xe(Pe({
        key: 0
    }, {
        error: n.error,
        label: n.label,
        name: n.name,
        hint: n.hint,
        description: n.description,
        help: n.help
    }))) : (m(),
    k(Q, {
        key: 1
    }, [we(re(n.description), 1)], 64))], 2)) : se("", !0)], 2), I("div", {
        class: J([n.label ? n.ui.container : ""])
    }, [pe(n.$slots, "default", xe(Zn({
        error: n.error
    }))), typeof n.error == "string" && n.error || n.$slots.error ? (m(),
    k("p", {
        key: 0,
        class: J([n.ui.error, n.size])
    }, [n.$slots.error ? pe(n.$slots, "error", xe(Pe({
        key: 0
    }, {
        error: n.error,
        label: n.label,
        name: n.name,
        hint: n.hint,
        description: n.description,
        help: n.help
    }))) : (m(),
    k(Q, {
        key: 1
    }, [we(re(n.error), 1)], 64))], 2)) : n.help || n.$slots.help ? (m(),
    k("p", {
        key: 1,
        class: J([n.ui.help, n.size])
    }, [n.$slots.help ? pe(n.$slots, "help", xe(Pe({
        key: 0
    }, {
        error: n.error,
        label: n.label,
        name: n.name,
        hint: n.hint,
        description: n.description,
        help: n.help
    }))) : (m(),
    k(Q, {
        key: 1
    }, [we(re(n.help), 1)], 64))], 2)) : se("", !0)], 2)], 16)
}
const ca = Ne(oa, [["render", la]])
  , ua = {
    key: 0,
    class: "relative size-32 group"
}
  , da = ["src", "alt"]
  , ha = {
    class: "text-base text-white font-bold"
}
  , fa = {
    class: "text-xs text-gom-500"
}
  , pa = Xe({
    __name: "NFTStacks",
    props: {
        collection: {},
        nfts: {}
    },
    setup(n) {
        const o = {
            color: {
                white: {
                    ghost: "hover:bg-transparent dark:hover:bg-transparent"
                }
            }
        };
        return (r, i) => {
            const d = Ge;
            return m(),
            K(d, {
                ui: o,
                variant: "ghost",
                color: "white",
                class: "flex flex-col items-center gap-4"
            }, {
                default: Ae( () => {
                    var p;
                    return [(p = r.nfts) != null && p.length ? (m(),
                    k("ul", ua, [(m(!0),
                    k(Q, null, Se(r.nfts.slice(0, 3), (E, v) => (m(),
                    k("li", {
                        key: v,
                        class: J(["aspect-square h-32 w-32 shadow-sm group-hover:shadow-lg transition-all duration-500 ease-in-out", {
                            "absolute top-0 transition-all duration-300 group-hover:-translate-y-3": v === 0 && r.nfts.length === 1 || v === 1 && r.nfts.length === 2 || v === 2 && r.nfts.length > 2,
                            "absolute top-0 rotate-12 right-0 group-hover:rotate-6 group-hover:translate-x-3 transition-all duration-300": v === 0 && r.nfts.length === 2 || v === 1 && r.nfts.length > 2,
                            "absolute top-0 -rotate-12 left-0 group-hover:rotate-[-6deg] group-hover:-translate-x-3 transition-all duration-300": v === 0 && r.nfts.length > 2,
                            "brightness-60": v === 0 && r.nfts.length > 2,
                            "brightness-75": v === 0 && r.nfts.length === 2 || v === 1 && r.nfts.length > 2
                        }])
                    }, [I("img", {
                        src: E.previewImage,
                        alt: `NFT ${E.tokenId}`,
                        class: "rounded-lg aspect-square size-32 object-cover"
                    }, null, 8, da)], 2))), 128))])) : se("", !0), I("div", null, [I("p", ha, re(r.collection.name), 1), I("p", fa, re(r.nfts.length) + " " + re(`NFT${("plural_s"in r ? r.plural_s : y(Jn))(r.nfts.length)}`), 1)])]
                }
                ),
                _: 1
            })
        }
    }
})
  , va = {
    class: "text-base text-white font-bold"
}
  , ga = Xe({
    __name: "NFTItem",
    props: {
        collection: {},
        nft: {}
    },
    setup(n) {
        const o = {
            color: {
                white: {
                    ghost: "hover:bg-transparent dark:hover:bg-transparent"
                }
            }
        }
          , r = {
            size: "size-32",
            shape: "rounded-lg",
            aspect: "aspect-square",
            object: "object-cover",
            rounded: "rounded-md"
        };
        return (i, d) => {
            const p = Qn
              , E = Ge;
            return m(),
            K(E, {
                ui: o,
                variant: "ghost",
                color: "white",
                class: "flex flex-col items-center gap-4"
            }, {
                default: Ae( () => [H(p, {
                    ui: r,
                    src: i.nft.previewImage,
                    icon: "i-branding-glasses",
                    alt: `${i.collection.name} ${i.nft.tokenId}`,
                    class: "rounded-lg aspect-square size-32 object-cover"
                }, null, 8, ["src", "alt"]), I("div", null, [I("p", va, re(i.collection.name) + " #" + re(i.nft.tokenId), 1)])]),
                _: 1
            })
        }
    }
})
  , ma = {
    class: "flex flex-col items-center gap-3"
}
  , ya = I("h2", {
    class: "text-2xl text-gom-500 dark:text-gom-500 font-black"
}, " MOG YOUR NFTs ", -1)
  , _a = {
    class: "flex flex-col gap-6 items-center"
}
  , Ta = {
    class: "bg-mog-800 lg:w-96 w-full rounded-full flex justify-between py-2 px-2 pl-3 border-[1px] border-mog-950 items-center gap-3"
}
  , ba = {
    key: 0,
    class: "text-gom-500"
}
  , Ca = {
    key: 1,
    class: "flex flex-col items-center gap-4"
}
  , Ea = {
    class: ""
}
  , ka = {
    class: "text-gom-500"
}
  , Ia = {
    class: "font-bold"
}
  , wa = {
    key: 0,
    class: "flex gap-8 flex-wrap justify-center pt-6 pb-12"
}
  , Sa = {
    key: 1,
    class: "flex flex-col justify-center py-2"
}
  , Aa = {
    key: 2,
    class: "min-h-[200px] flex flex-col justify-center"
}
  , Oa = {
    class: "text-center max-w-48"
}
  , Na = {
    class: "font-bold"
}
  , $a = Xe({
    __name: "NFTCollections",
    setup(n) {
        const o = S(null)
          , r = S(!1)
          , i = S("")
          , d = S("")
          , p = Le()
          , {getWalletAddress: E, getWalletDisplayName: v, getNftCount: C, getCollectionNfts: O} = vt(p)
          , _ = S(null);
        function R(L) {
            _.value = L
        }
        function M(L, T) {
            p.nft = {
                ...L,
                collectionName: T.name,
                collectionKey: T.key
            }
        }
        const w = S(!1);
        De(E, async L => {
            w.value = !0;
            try {
                const {nfts: T} = await $fetch("api/nft/owned", {
                    method: "POST",
                    body: {
                        address: L
                    }
                });
                Object.keys(ze.value).length == 0 && await cn();
                const B = {};
                T.forEach(X => {
                    X = Bs(X),
                    B[X.contractAddress] ? B[X.contractAddress].push(X) : B[X.contractAddress] = [X]
                }
                ),
                p.nftCount = T.length,
                p.collectionNfts = B
            } catch (T) {
                console.log(T),
                es().add({
                    icon: "i-ui-error",
                    type: "error",
                    title: "Error fetching NFTs",
                    message: T == null ? void 0 : T.message
                })
            } finally {
                w.value = !1
            }
        }
        );
        async function D(L) {
            try {
                try {
                    L.target.blur()
                } catch {
                    try {
                        o.value.$el.blur()
                    } catch {}
                }
                if (r.value = !0,
                d.value = "",
                i.value == "testing")
                    p.searchWallet = {
                        address: "testing",
                        display_name: "testing",
                        ens_name: "testing"
                    };
                else if (i.value.length > 32)
                    p.searchWallet = {
                        address: i.value,
                        display_name: Os(i.value),
                        ens_name: "",
                        network: "solana"
                    };
                else {
                    const T = await Ns(i.value);
                    p.searchWallet = T
                }
            } catch (T) {
                console.log(T),
                d.value = "Invalid wallet address"
            }
        }
        function b() {
            i.value = "",
            p.searchWallet = null,
            _.value = null
        }
        function $() {
            r.value ? (r.value = !1,
            b()) : (r.value = !0,
            D())
        }
        function ce() {
            r.value = !1,
            b()
        }
        async function U() {
            Cs().openModal(Fs.ConnectWalletModal)
        }
        const ae = {
            rounded: "rounded-full",
            color: {
                gom: {
                    solid: "bg-gom-500"
                }
            }
        }
          , ie = {
            base: "hover:cursor-pointer focus:cursor-text",
            placeholder: "placeholder-white dark:placeholder-white"
        };
        return (L, T) => {
            var ye;
            const B = Oe
              , X = ia
              , Y = Ge
              , he = ca
              , le = pa
              , ve = ga;
            return m(),
            k("div", ma, [ya, I("div", _a, [H(he, {
                error: y(d)
            }, {
                default: Ae( ({error: A}) => [I("div", Ta, [H(B, {
                    name: "i-ui-wallet",
                    class: "size-6"
                }), H(X, {
                    ref_key: "searchInputRef",
                    ref: o,
                    padded: !1,
                    placeholder: "Enter any crypto wallet address...",
                    type: "text",
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off",
                    modelValue: y(i),
                    "onUpdate:modelValue": T[0] || (T[0] = V => ts(i) ? i.value = V : null),
                    class: "grow",
                    variant: "none",
                    size: "xl",
                    ui: ie,
                    onInput: ce,
                    onKeyup: ns(D, ["enter"]),
                    onFocus: T[1] || (T[1] = V => d.value = null)
                }, null, 8, ["modelValue"]), H(Y, {
                    ui: ae,
                    icon: y(r) ? "i-ui-x" : "i-ui-arrow",
                    color: "gom",
                    onClick: $
                }, null, 8, ["icon"])])]),
                _: 1
            }, 8, ["error"]), y(E) ? y(C) ? (m(),
            k("div", Ca, [H(y(Ds), {
                seed: y(E),
                size: 8,
                class: "border-2 border-gom-500 rounded-full"
            }, null, 8, ["seed"]), I("p", Ea, [I("span", ka, re(L.$shorten_number(y(C))) + " NFTs", 1), we(" Found in wallet "), I("span", Ia, re(L.$shorten_address(y(v))), 1)])])) : se("", !0) : (m(),
            k("p", ba, [we(" or "), I("a", {
                onClick: U,
                class: "font-bold underline cursor-pointer"
            }, "Sign in with a wallet")]))]), y(E) ? (m(),
            k("div", wa, [y(E) && !y(_) ? (m(),
            k(Q, {
                key: 0
            }, [y(C) ? (m(!0),
            k(Q, {
                key: 0
            }, Se(Object.values("supportedCollections"in L ? L.supportedCollections : y(ze)), A => {
                var V;
                return dt((m(),
                K(le, {
                    key: A.name,
                    collection: A,
                    nfts: y(O)[A.contractAddress],
                    onClick: $e => R(A)
                }, null, 8, ["collection", "nfts", "onClick"])), [[ht, (V = y(O)[A.contractAddress]) == null ? void 0 : V.length]])
            }
            ), 128)) : y(w) ? (m(),
            k("div", Sa, [H(B, {
                name: "i-svg-spinners-ring-resize",
                class: "size-10"
            })])) : (m(),
            k("div", Aa, [I("p", Oa, [we(" No compatible NFTs found in wallet "), I("span", Na, re(L.$shorten_address(y(v))), 1)])]))], 64)) : y(E) ? (m(!0),
            k(Q, {
                key: 1
            }, Se(y(O)[(ye = y(_)) == null ? void 0 : ye.contractAddress], A => (m(),
            K(ve, {
                key: A.tokenId,
                collection: y(_),
                nft: A,
                onClick: V => M(A, y(_))
            }, null, 8, ["collection", "nft", "onClick"]))), 128)) : se("", !0)])) : se("", !0)])
        }
    }
})
  , Ra = {}
  , Pa = {
    class: "flex items-center flex-col h-[calc(100dvh-64px)]"
}
  , Ma = {
    class: "lg:flex lg:grow h-full w-full lr-container"
}
  , Da = {
    class: "left relative w-full aspect-square lg:aspect-auto"
}
  , Fa = {
    class: "right relative lg:grow lg:min-w-[550px]"
}
  , xa = {
    class: "right-inside h-full overflow-y-auto flex flex-col items-center"
};
function Ua(n, o) {
    return m(),
    k("div", Pa, [I("div", Ma, [I("div", Da, [pe(n.$slots, "left")]), I("div", Fa, [I("div", xa, [pe(n.$slots, "right")])])])])
}
const hn = Ne(Ra, [["render", Ua]])
  , za = {
    __name: "SelectNftController",
    setup(n) {
        const o = Le()
          , {getNft: r} = vt(o);
        return De(r, i => {
            i && (o.state = Ue.EditImage)
        }
        ),
        pt(async () => {
            try {
                await cn();
                const i = rn()
                  , {collection: d, token: p} = i.query;
                d && p != null && (o.nft = dn({
                    collectionName: ze.value[d].name,
                    collectionKey: d,
                    collection: ze.value[d],
                    tokenId: p
                }),
                o.state = Ue.EditImage)
            } catch (i) {
                console.log(i)
            }
        }
        ),
        (i, d) => {
            const p = ea
              , E = $a
              , v = hn;
            return m(),
            K(v, null, {
                left: Ae( () => [H(p, {
                    class: "w-full h-full"
                })]),
                right: Ae( () => [H(E, {
                    class: "lg:grow lg:w-full lg:max-w-[550px] lg:pt-12"
                })]),
                _: 1
            })
        }
    }
}
  , La = Ne(za, [["__scopeId", "data-v-ff0190db"]])
  , Ba = {
    class: "w-full bg-mog-700 flex items-center justify-center"
}
  , Ha = {
    class: "max-w-screen-xl w-full p-4 flex items-center justify-between"
}
  , Wa = {
    __name: "Controls",
    props: {
        toggleProfileFrame: Function,
        downloadCanvas: Function,
        isDownloading: Boolean
    },
    setup(n) {
        const o = n
          , {toggleProfileFrame: r, downloadCanvas: i} = o
          , {isDownloading: d} = xt(o)
          , p = S(!1);
        function E() {
            p.value = !p.value,
            r(p.value)
        }
        const v = Le();
        function C() {
            v.state = Ue.SelectImage,
            ln({
                name: "index"
            })
        }
        const O = {
            color: {
                white: {
                    ghost: "hover:bg-transparent"
                }
            }
        };
        return (_, R) => {
            const M = Ge;
            return m(),
            k("div", Ba, [I("div", Ha, [H(M, {
                ui: O,
                onClick: C,
                size: "xl",
                icon: "i-ui-back",
                padded: !1,
                variant: "ghost",
                color: "white"
            }), H(M, {
                ui: O,
                onClick: E,
                size: "xl",
                icon: y(p) ? "i-ui-frame-filled" : "i-ui-frame",
                padded: !1,
                variant: "ghost",
                color: "white"
            }, null, 8, ["icon"]), H(M, {
                ui: O,
                onClick: y(i),
                loading: y(d),
                disabled: y(d),
                size: "xl",
                icon: "i-ui-download",
                padded: !1,
                variant: "ghost",
                color: "white"
            }, null, 8, ["onClick", "loading", "disabled"])])])
        }
    }
}
  , ja = Wa
  , qa = {
    class: "hidden"
}
  , Ya = {
    __name: "UseDynamicIcons",
    props: {
        icons: Array
    },
    setup(n) {
        return (o, r) => {
            const i = Oe;
            return m(),
            k("div", qa, [(m(!0),
            k(Q, null, Se(n.icons, d => (m(),
            K(i, {
                key: d,
                name: d,
                class: "w-8 h-8"
            }, null, 8, ["name"]))), 128))])
        }
    }
}
  , Va = Ya
  , Xa = {
    class: "flex items-center justify-center w-full h-full"
}
  , Ga = {
    class: "relative"
}
  , Ka = ["src"]
  , Za = {
    class: "absolute inset-0 flex items-center justify-center"
}
  , Ja = {
    class: "text-sm"
}
  , Qa = {
    __name: "StickerItem",
    props: {
        item: Object,
        selected: Boolean,
        isLoading: Boolean
    },
    setup(n) {
        const o = n
          , {item: r} = o
          , {isLoading: i, selected: d} = xt(o)
          , p = S(!1);
        ss(i, C => {
            C ? p.value = C : setTimeout( () => {
                p.value = C
            }
            , 100)
        }
        );
        const E = S(!1)
          , v = {
            rounded: "rounded-none",
            icon: {
                size: {
                    xl: "h-12 w-12"
                }
            },
            color: {
                white: {
                    solid: "bg-gom-500 hover:bg-gom-500",
                    ghost: "text-white dark:text-white hover:text-white hover:bg-mog-700 md:hover:bg-mog-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 bg-mog-700 dark:bg-mog-700 active:bg-gom-500 md:active:bg-gom-500 active:text-mog-500"
                }
            }
        };
        return (C, O) => {
            const _ = Oe
              , R = Ge;
            return m(),
            K(R, {
                ui: v,
                variant: y(d) ? "solid" : "ghost",
                size: "xl",
                class: "absolute inset-0 flex flex-col",
                color: "white",
                disabled: y(p),
                square: ""
            }, {
                default: Ae( () => {
                    var M, w, D, b;
                    return [I("div", Xa, [(M = y(r)) != null && M.image ? (m(),
                    k(Q, {
                        key: 0
                    }, [I("div", Ga, [dt(I("img", {
                        onLoad: O[0] || (O[0] = $ => E.value = !0),
                        src: (w = y(r)) == null ? void 0 : w.image,
                        class: J(["size-20", {
                            "opacity-50": y(i)
                        }])
                    }, null, 42, Ka), [[ht, y(E)]]), I("div", Za, [y(i) ? (m(),
                    K(_, {
                        key: 0,
                        name: "i-svg-spinners-ring-resize",
                        class: "size-10"
                    })) : se("", !0)])]), y(E) ? se("", !0) : (m(),
                    K(_, {
                        key: 0,
                        name: "i-svg-spinners-ring-resize",
                        class: "size-10"
                    }))], 64)) : (D = y(r)) != null && D.icon ? (m(),
                    K(_, {
                        key: 1,
                        name: y(r).icon,
                        class: "size-10 text-gom-500"
                    }, null, 8, ["name"])) : se("", !0)]), I("span", Ja, re((b = y(r)) == null ? void 0 : b.name), 1)]
                }
                ),
                _: 1
            }, 8, ["variant", "disabled"])
        }
    }
}
  , ei = Ne(Qa, [["__scopeId", "data-v-01e5e4cd"]])
  , Dt = ft(Is, [])
  , Ft = ft(ws, [])
  , Ye = ft(Ss, []);
function ti() {
    Promise.allSettled([$s(), Rs(), Ps()]).then(n => {
        const [o,r,i] = n;
        o.status === "fulfilled" ? Dt.value = o.value : console.error("Failed to fetch sticker categories:", o.reason),
        r.status === "fulfilled" ? Ft.value = r.value : console.error("Failed to fetch stickers subcategories:", r.reason),
        i.status === "fulfilled" ? Ye.value = i.value : console.error("Failed to fetch stickers set:", i.reason)
    }
    )
}
const Pt = new WeakMap;
function Ve(n, o, r={}) {
    const {mode: i="replace", route: d=as(), router: p=is(), transform: E=R => R} = r;
    Pt.has(p) || Pt.set(p, new Map);
    const v = Pt.get(p);
    let C = d.query[n];
    os( () => {
        C = void 0
    }
    );
    let O;
    const _ = rs( (R, M) => (O = M,
    {
        get() {
            return R(),
            E(C !== void 0 ? C : nn(o))
        },
        set(w) {
            C !== w && (C = w === o || w === null ? void 0 : w,
            v.set(n, w === o || w === null ? void 0 : w),
            M(),
            ne( () => {
                if (v.size === 0)
                    return;
                const D = Object.fromEntries(v.entries());
                v.clear();
                const {params: b, query: $, hash: ce} = d;
                p[nn(i)]({
                    params: b,
                    query: {
                        ...$,
                        ...D
                    },
                    hash: ce
                })
            }
            ))
        }
    }));
    return De( () => d.query[n], R => {
        C = R,
        O()
    }
    , {
        flush: "sync"
    }),
    _
}
const ni = {
    key: 0,
    class: "grid grid-cols-3 gap-[1px] bg-mog-950 py-[1px]"
}
  , si = {
    key: 1,
    class: "grid grid-cols-3 gap-[1px] bg-mog-950 py-[1px]"
}
  , ai = {
    class: "relative w-full pb-full"
}
  , ii = {
    __name: "Stickers",
    props: {
        categoryKey: String,
        addStickerToCanvas: Function
    },
    setup(n) {
        const o = n
          , {addStickerToCanvas: r} = o;
        xt(o);
        const i = S(null)
          , d = S(null)
          , p = W( () => Ye.value.filter(b => {
            var $;
            return b.collection == (($ = i.value) == null ? void 0 : $.key)
        }
        ))
          , E = W( () => Ye.value.filter(b => {
            var $;
            return b.collection == (($ = d.value) == null ? void 0 : $.key)
        }
        ))
          , v = W( () => Ft.value.filter(b => {
            var $;
            return b.collection == (($ = i.value) == null ? void 0 : $.key)
        }
        ));
        ls( () => {
            Nt(Ye.value.map(b => b.image)),
            Nt(Ft.value.map(b => b.image))
        }
        );
        const C = Ve("collection");
        De(C, b => {
            b && (i.value = Dt.value.find($ => $.key == b))
        }
        ),
        De(p, b => {
            try {
                Nt(b.map($ => $.image))
            } catch {}
        }
        );
        const O = ["i-ui-grid"]
          , _ = Ve("customs");
        W( () => {
            var b;
            return ((b = _ == null ? void 0 : _.value) == null ? void 0 : b.split(",")) ?? []
        }
        );
        function R() {
            d.value ? d.value = null : i.value = null,
            D()
        }
        function M(b) {
            i.value = b,
            D()
        }
        function w(b) {
            d.value = b,
            D()
        }
        function D() {
            try {
                document.getElementsByClassName("right-inside")[0].scrollTo({
                    top: 0,
                    behavior: "instant"
                })
            } catch (b) {
                console.log(b)
            }
        }
        return (b, $) => {
            var ae, ie, L;
            const ce = Va
              , U = ei;
            return m(),
            k("div", null, [H(ce, {
                icons: O
            }), y(i) ? (m(),
            k("ul", si, [I("li", ai, [H(U, {
                onClick: R,
                item: {
                    icon: "i-ui-grid"
                }
            })]), (ae = y(p)) != null && ae.length ? (m(!0),
            k(Q, {
                key: 0
            }, Se(y(p), T => (m(),
            k("li", {
                key: `${T.collection}-${T.key}`,
                class: "relative w-full pb-full"
            }, [(m(),
            K(U, {
                key: T.key,
                item: T,
                isLoading: T.isLoading,
                onClick: B => y(r)(T)
            }, null, 8, ["item", "isLoading", "onClick"]))]))), 128)) : (ie = y(E)) != null && ie.length ? (m(!0),
            k(Q, {
                key: 1
            }, Se(y(E), T => (m(),
            k("li", {
                key: `${T.collection}-${T.key}`,
                class: "relative w-full pb-full"
            }, [(m(),
            K(U, {
                key: T.key,
                item: T,
                isLoading: T.isLoading,
                onClick: B => y(r)(T)
            }, null, 8, ["item", "isLoading", "onClick"]))]))), 128)) : (L = y(v)) != null && L.length ? (m(!0),
            k(Q, {
                key: 2
            }, Se(y(v), T => (m(),
            k("li", {
                key: `${T.collection}-${T.key}`,
                class: "relative w-full pb-full"
            }, [(m(),
            K(U, {
                key: T.key,
                item: T,
                onClick: B => w(T)
            }, null, 8, ["item", "onClick"]))]))), 128)) : se("", !0)])) : (m(),
            k("ul", ni, [(m(!0),
            k(Q, null, Se("stickerCategories"in b ? b.stickerCategories : y(Dt), T => (m(),
            k("li", {
                key: T.key,
                class: "relative w-full pb-full"
            }, [(m(),
            K(U, {
                key: T.key,
                item: T,
                onClick: B => M(T)
            }, null, 8, ["item", "onClick"]))]))), 128))]))])
        }
    }
}
  , oi = Ne(ii, [["__scopeId", "data-v-effc6acd"]])
  , ri = n => (cs("data-v-da280489"),
n = n(),
us(),
n)
  , li = ri( () => I("span", {
    class: "text-sm"
}, "Remove", -1))
  , ci = {
    __name: "TrashBinLayer",
    props: {
        isHovered: Boolean
    },
    setup(n) {
        return (o, r) => {
            const i = Oe;
            return m(),
            k("div", {
                class: J(["text-gom-500 bg-mog-700 flex flex-col items-center justify-center", {
                    hovered: n.isHovered
                }])
            }, [H(i, {
                name: "i-ui-trash",
                class: J(["size-6 text-gom-500 stroke-gom-500 fill-gom-500", {
                    "text-mog-700": n.isHovered
                }])
            }, null, 8, ["class"]), li], 2)
        }
    }
}
  , ui = Ne(ci, [["__scopeId", "data-v-da280489"]]);
var fn = {
    exports: {}
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(n) {
    (function(o, r, i, d) {
        var p = ["", "webkit", "Moz", "MS", "ms", "o"]
          , E = r.createElement("div")
          , v = "function"
          , C = Math.round
          , O = Math.abs
          , _ = Date.now;
        function R(e, t, s) {
            return setTimeout(ae(e, s), t)
        }
        function M(e, t, s) {
            return Array.isArray(e) ? (w(e, s[t], s),
            !0) : !1
        }
        function w(e, t, s) {
            var a;
            if (e)
                if (e.forEach)
                    e.forEach(t, s);
                else if (e.length !== d)
                    for (a = 0; a < e.length; )
                        t.call(s, e[a], a, e),
                        a++;
                else
                    for (a in e)
                        e.hasOwnProperty(a) && t.call(s, e[a], a, e)
        }
        function D(e, t, s) {
            var a = "DEPRECATED METHOD: " + t + `
` + s + ` AT 
`;
            return function() {
                var c = new Error("get-stack-trace")
                  , g = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
                  , N = o.console && (o.console.warn || o.console.log);
                return N && N.call(o.console, a, g),
                e.apply(this, arguments)
            }
        }
        var b;
        typeof Object.assign != "function" ? b = function(t) {
            if (t === d || t === null)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var s = Object(t), a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                if (c !== d && c !== null)
                    for (var g in c)
                        c.hasOwnProperty(g) && (s[g] = c[g])
            }
            return s
        }
        : b = Object.assign;
        var $ = D(function(t, s, a) {
            for (var c = Object.keys(s), g = 0; g < c.length; )
                (!a || a && t[c[g]] === d) && (t[c[g]] = s[c[g]]),
                g++;
            return t
        }, "extend", "Use `assign`.")
          , ce = D(function(t, s) {
            return $(t, s, !0)
        }, "merge", "Use `assign`.");
        function U(e, t, s) {
            var a = t.prototype, c;
            c = e.prototype = Object.create(a),
            c.constructor = e,
            c._super = a,
            s && b(c, s)
        }
        function ae(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function ie(e, t) {
            return typeof e == v ? e.apply(t && t[0] || d, t) : e
        }
        function L(e, t) {
            return e === d ? t : e
        }
        function T(e, t, s) {
            w(he(t), function(a) {
                e.addEventListener(a, s, !1)
            })
        }
        function B(e, t, s) {
            w(he(t), function(a) {
                e.removeEventListener(a, s, !1)
            })
        }
        function X(e, t) {
            for (; e; ) {
                if (e == t)
                    return !0;
                e = e.parentNode
            }
            return !1
        }
        function Y(e, t) {
            return e.indexOf(t) > -1
        }
        function he(e) {
            return e.trim().split(/\s+/g)
        }
        function le(e, t, s) {
            if (e.indexOf && !s)
                return e.indexOf(t);
            for (var a = 0; a < e.length; ) {
                if (s && e[a][s] == t || !s && e[a] === t)
                    return a;
                a++
            }
            return -1
        }
        function ve(e) {
            return Array.prototype.slice.call(e, 0)
        }
        function ye(e, t, s) {
            for (var a = [], c = [], g = 0; g < e.length; ) {
                var N = t ? e[g][t] : e[g];
                le(c, N) < 0 && a.push(e[g]),
                c[g] = N,
                g++
            }
            return s && (t ? a = a.sort(function(Z, oe) {
                return Z[t] > oe[t]
            }) : a = a.sort()),
            a
        }
        function A(e, t) {
            for (var s, a, c = t[0].toUpperCase() + t.slice(1), g = 0; g < p.length; ) {
                if (s = p[g],
                a = s ? s + c : t,
                a in e)
                    return a;
                g++
            }
            return d
        }
        var V = 1;
        function $e() {
            return V++
        }
        function Ke(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || o
        }
        var gt = /mobile|tablet|ip(ad|hone|od)|android/i
          , Ze = "ontouchstart"in o
          , mt = A(o, "PointerEvent") !== d
          , yt = Ze && gt.test(navigator.userAgent)
          , ke = "touch"
          , Je = "pen"
          , Be = "mouse"
          , _t = "kinect"
          , l = 25
          , u = 1
          , h = 2
          , f = 4
          , P = 8
          , F = 1
          , q = 2
          , x = 4
          , j = 8
          , _e = 16
          , ee = q | x
          , te = j | _e
          , Qe = ee | te
          , Ut = ["x", "y"]
          , et = ["clientX", "clientY"];
        function ue(e, t) {
            var s = this;
            this.manager = e,
            this.callback = t,
            this.element = e.element,
            this.target = e.options.inputTarget,
            this.domHandler = function(a) {
                ie(e.options.enable, [e]) && s.handler(a)
            }
            ,
            this.init()
        }
        ue.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && T(this.element, this.evEl, this.domHandler),
                this.evTarget && T(this.target, this.evTarget, this.domHandler),
                this.evWin && T(Ke(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && B(this.element, this.evEl, this.domHandler),
                this.evTarget && B(this.target, this.evTarget, this.domHandler),
                this.evWin && B(Ke(this.element), this.evWin, this.domHandler)
            }
        };
        function pn(e) {
            var t, s = e.options.inputClass;
            return s ? t = s : mt ? t = bt : yt ? t = st : Ze ? t = Ct : t = nt,
            new t(e,vn)
        }
        function vn(e, t, s) {
            var a = s.pointers.length
              , c = s.changedPointers.length
              , g = t & u && a - c === 0
              , N = t & (f | P) && a - c === 0;
            s.isFirst = !!g,
            s.isFinal = !!N,
            g && (e.session = {}),
            s.eventType = t,
            gn(e, s),
            e.emit("hammer.input", s),
            e.recognize(s),
            e.session.prevInput = s
        }
        function gn(e, t) {
            var s = e.session
              , a = t.pointers
              , c = a.length;
            s.firstInput || (s.firstInput = zt(t)),
            c > 1 && !s.firstMultiple ? s.firstMultiple = zt(t) : c === 1 && (s.firstMultiple = !1);
            var g = s.firstInput
              , N = s.firstMultiple
              , G = N ? N.center : g.center
              , Z = t.center = Lt(a);
            t.timeStamp = _(),
            t.deltaTime = t.timeStamp - g.timeStamp,
            t.angle = Tt(G, Z),
            t.distance = tt(G, Z),
            mn(s, t),
            t.offsetDirection = Ht(t.deltaX, t.deltaY);
            var oe = Bt(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = oe.x,
            t.overallVelocityY = oe.y,
            t.overallVelocity = O(oe.x) > O(oe.y) ? oe.x : oe.y,
            t.scale = N ? Tn(N.pointers, a) : 1,
            t.rotation = N ? _n(N.pointers, a) : 0,
            t.maxPointers = s.prevInput ? t.pointers.length > s.prevInput.maxPointers ? t.pointers.length : s.prevInput.maxPointers : t.pointers.length,
            yn(s, t);
            var me = e.element;
            X(t.srcEvent.target, me) && (me = t.srcEvent.target),
            t.target = me
        }
        function mn(e, t) {
            var s = t.center
              , a = e.offsetDelta || {}
              , c = e.prevDelta || {}
              , g = e.prevInput || {};
            (t.eventType === u || g.eventType === f) && (c = e.prevDelta = {
                x: g.deltaX || 0,
                y: g.deltaY || 0
            },
            a = e.offsetDelta = {
                x: s.x,
                y: s.y
            }),
            t.deltaX = c.x + (s.x - a.x),
            t.deltaY = c.y + (s.y - a.y)
        }
        function yn(e, t) {
            var s = e.lastInterval || t, a = t.timeStamp - s.timeStamp, c, g, N, G;
            if (t.eventType != P && (a > l || s.velocity === d)) {
                var Z = t.deltaX - s.deltaX
                  , oe = t.deltaY - s.deltaY
                  , me = Bt(a, Z, oe);
                g = me.x,
                N = me.y,
                c = O(me.x) > O(me.y) ? me.x : me.y,
                G = Ht(Z, oe),
                e.lastInterval = t
            } else
                c = s.velocity,
                g = s.velocityX,
                N = s.velocityY,
                G = s.direction;
            t.velocity = c,
            t.velocityX = g,
            t.velocityY = N,
            t.direction = G
        }
        function zt(e) {
            for (var t = [], s = 0; s < e.pointers.length; )
                t[s] = {
                    clientX: C(e.pointers[s].clientX),
                    clientY: C(e.pointers[s].clientY)
                },
                s++;
            return {
                timeStamp: _(),
                pointers: t,
                center: Lt(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }
        function Lt(e) {
            var t = e.length;
            if (t === 1)
                return {
                    x: C(e[0].clientX),
                    y: C(e[0].clientY)
                };
            for (var s = 0, a = 0, c = 0; c < t; )
                s += e[c].clientX,
                a += e[c].clientY,
                c++;
            return {
                x: C(s / t),
                y: C(a / t)
            }
        }
        function Bt(e, t, s) {
            return {
                x: t / e || 0,
                y: s / e || 0
            }
        }
        function Ht(e, t) {
            return e === t ? F : O(e) >= O(t) ? e < 0 ? q : x : t < 0 ? j : _e
        }
        function tt(e, t, s) {
            s || (s = Ut);
            var a = t[s[0]] - e[s[0]]
              , c = t[s[1]] - e[s[1]];
            return Math.sqrt(a * a + c * c)
        }
        function Tt(e, t, s) {
            s || (s = Ut);
            var a = t[s[0]] - e[s[0]]
              , c = t[s[1]] - e[s[1]];
            return Math.atan2(c, a) * 180 / Math.PI
        }
        function _n(e, t) {
            return Tt(t[1], t[0], et) + Tt(e[1], e[0], et)
        }
        function Tn(e, t) {
            return tt(t[0], t[1], et) / tt(e[0], e[1], et)
        }
        var bn = {
            mousedown: u,
            mousemove: h,
            mouseup: f
        }
          , Cn = "mousedown"
          , En = "mousemove mouseup";
        function nt() {
            this.evEl = Cn,
            this.evWin = En,
            this.pressed = !1,
            ue.apply(this, arguments)
        }
        U(nt, ue, {
            handler: function(t) {
                var s = bn[t.type];
                s & u && t.button === 0 && (this.pressed = !0),
                s & h && t.which !== 1 && (s = f),
                this.pressed && (s & f && (this.pressed = !1),
                this.callback(this.manager, s, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: Be,
                    srcEvent: t
                }))
            }
        });
        var kn = {
            pointerdown: u,
            pointermove: h,
            pointerup: f,
            pointercancel: P,
            pointerout: P
        }
          , In = {
            2: ke,
            3: Je,
            4: Be,
            5: _t
        }
          , Wt = "pointerdown"
          , jt = "pointermove pointerup pointercancel";
        o.MSPointerEvent && !o.PointerEvent && (Wt = "MSPointerDown",
        jt = "MSPointerMove MSPointerUp MSPointerCancel");
        function bt() {
            this.evEl = Wt,
            this.evWin = jt,
            ue.apply(this, arguments),
            this.store = this.manager.session.pointerEvents = []
        }
        U(bt, ue, {
            handler: function(t) {
                var s = this.store
                  , a = !1
                  , c = t.type.toLowerCase().replace("ms", "")
                  , g = kn[c]
                  , N = In[t.pointerType] || t.pointerType
                  , G = N == ke
                  , Z = le(s, t.pointerId, "pointerId");
                g & u && (t.button === 0 || G) ? Z < 0 && (s.push(t),
                Z = s.length - 1) : g & (f | P) && (a = !0),
                !(Z < 0) && (s[Z] = t,
                this.callback(this.manager, g, {
                    pointers: s,
                    changedPointers: [t],
                    pointerType: N,
                    srcEvent: t
                }),
                a && s.splice(Z, 1))
            }
        });
        var wn = {
            touchstart: u,
            touchmove: h,
            touchend: f,
            touchcancel: P
        }
          , Sn = "touchstart"
          , An = "touchstart touchmove touchend touchcancel";
        function qt() {
            this.evTarget = Sn,
            this.evWin = An,
            this.started = !1,
            ue.apply(this, arguments)
        }
        U(qt, ue, {
            handler: function(t) {
                var s = wn[t.type];
                if (s === u && (this.started = !0),
                !!this.started) {
                    var a = On.call(this, t, s);
                    s & (f | P) && a[0].length - a[1].length === 0 && (this.started = !1),
                    this.callback(this.manager, s, {
                        pointers: a[0],
                        changedPointers: a[1],
                        pointerType: ke,
                        srcEvent: t
                    })
                }
            }
        });
        function On(e, t) {
            var s = ve(e.touches)
              , a = ve(e.changedTouches);
            return t & (f | P) && (s = ye(s.concat(a), "identifier", !0)),
            [s, a]
        }
        var Nn = {
            touchstart: u,
            touchmove: h,
            touchend: f,
            touchcancel: P
        }
          , $n = "touchstart touchmove touchend touchcancel";
        function st() {
            this.evTarget = $n,
            this.targetIds = {},
            ue.apply(this, arguments)
        }
        U(st, ue, {
            handler: function(t) {
                var s = Nn[t.type]
                  , a = Rn.call(this, t, s);
                a && this.callback(this.manager, s, {
                    pointers: a[0],
                    changedPointers: a[1],
                    pointerType: ke,
                    srcEvent: t
                })
            }
        });
        function Rn(e, t) {
            var s = ve(e.touches)
              , a = this.targetIds;
            if (t & (u | h) && s.length === 1)
                return a[s[0].identifier] = !0,
                [s, s];
            var c, g, N = ve(e.changedTouches), G = [], Z = this.target;
            if (g = s.filter(function(oe) {
                return X(oe.target, Z)
            }),
            t === u)
                for (c = 0; c < g.length; )
                    a[g[c].identifier] = !0,
                    c++;
            for (c = 0; c < N.length; )
                a[N[c].identifier] && G.push(N[c]),
                t & (f | P) && delete a[N[c].identifier],
                c++;
            if (G.length)
                return [ye(g.concat(G), "identifier", !0), G]
        }
        var Pn = 2500
          , Yt = 25;
        function Ct() {
            ue.apply(this, arguments);
            var e = ae(this.handler, this);
            this.touch = new st(this.manager,e),
            this.mouse = new nt(this.manager,e),
            this.primaryTouch = null,
            this.lastTouches = []
        }
        U(Ct, ue, {
            handler: function(t, s, a) {
                var c = a.pointerType == ke
                  , g = a.pointerType == Be;
                if (!(g && a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents)) {
                    if (c)
                        Mn.call(this, s, a);
                    else if (g && Dn.call(this, a))
                        return;
                    this.callback(t, s, a)
                }
            },
            destroy: function() {
                this.touch.destroy(),
                this.mouse.destroy()
            }
        });
        function Mn(e, t) {
            e & u ? (this.primaryTouch = t.changedPointers[0].identifier,
            Vt.call(this, t)) : e & (f | P) && Vt.call(this, t)
        }
        function Vt(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var s = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(s);
                var a = this.lastTouches
                  , c = function() {
                    var g = a.indexOf(s);
                    g > -1 && a.splice(g, 1)
                };
                setTimeout(c, Pn)
            }
        }
        function Dn(e) {
            for (var t = e.srcEvent.clientX, s = e.srcEvent.clientY, a = 0; a < this.lastTouches.length; a++) {
                var c = this.lastTouches[a]
                  , g = Math.abs(t - c.x)
                  , N = Math.abs(s - c.y);
                if (g <= Yt && N <= Yt)
                    return !0
            }
            return !1
        }
        var Xt = A(E.style, "touchAction")
          , Gt = Xt !== d
          , Kt = "compute"
          , Zt = "auto"
          , Et = "manipulation"
          , Re = "none"
          , He = "pan-x"
          , We = "pan-y"
          , at = xn();
        function kt(e, t) {
            this.manager = e,
            this.set(t)
        }
        kt.prototype = {
            set: function(e) {
                e == Kt && (e = this.compute()),
                Gt && this.manager.element.style && at[e] && (this.manager.element.style[Xt] = e),
                this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return w(this.manager.recognizers, function(t) {
                    ie(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }),
                Fn(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent
                  , s = e.offsetDirection;
                if (this.manager.session.prevented) {
                    t.preventDefault();
                    return
                }
                var a = this.actions
                  , c = Y(a, Re) && !at[Re]
                  , g = Y(a, We) && !at[We]
                  , N = Y(a, He) && !at[He];
                if (c) {
                    var G = e.pointers.length === 1
                      , Z = e.distance < 2
                      , oe = e.deltaTime < 250;
                    if (G && Z && oe)
                        return
                }
                if (!(N && g) && (c || g && s & ee || N && s & te))
                    return this.preventSrc(t)
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0,
                e.preventDefault()
            }
        };
        function Fn(e) {
            if (Y(e, Re))
                return Re;
            var t = Y(e, He)
              , s = Y(e, We);
            return t && s ? Re : t || s ? t ? He : We : Y(e, Et) ? Et : Zt
        }
        function xn() {
            if (!Gt)
                return !1;
            var e = {}
              , t = o.CSS && o.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(s) {
                e[s] = t ? o.CSS.supports("touch-action", s) : !0
            }),
            e
        }
        var it = 1
          , de = 2
          , Fe = 4
          , Ie = 8
          , Te = Ie
          , je = 16
          , ge = 32;
        function be(e) {
            this.options = b({}, this.defaults, e || {}),
            this.id = $e(),
            this.manager = null,
            this.options.enable = L(this.options.enable, !0),
            this.state = it,
            this.simultaneous = {},
            this.requireFail = []
        }
        be.prototype = {
            defaults: {},
            set: function(e) {
                return b(this.options, e),
                this.manager && this.manager.touchAction.update(),
                this
            },
            recognizeWith: function(e) {
                if (M(e, "recognizeWith", this))
                    return this;
                var t = this.simultaneous;
                return e = ot(e, this),
                t[e.id] || (t[e.id] = e,
                e.recognizeWith(this)),
                this
            },
            dropRecognizeWith: function(e) {
                return M(e, "dropRecognizeWith", this) ? this : (e = ot(e, this),
                delete this.simultaneous[e.id],
                this)
            },
            requireFailure: function(e) {
                if (M(e, "requireFailure", this))
                    return this;
                var t = this.requireFail;
                return e = ot(e, this),
                le(t, e) === -1 && (t.push(e),
                e.requireFailure(this)),
                this
            },
            dropRequireFailure: function(e) {
                if (M(e, "dropRequireFailure", this))
                    return this;
                e = ot(e, this);
                var t = le(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1),
                this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                var t = this
                  , s = this.state;
                function a(c) {
                    t.manager.emit(c, e)
                }
                s < Ie && a(t.options.event + Jt(s)),
                a(t.options.event),
                e.additionalEvent && a(e.additionalEvent),
                s >= Ie && a(t.options.event + Jt(s))
            },
            tryEmit: function(e) {
                if (this.canEmit())
                    return this.emit(e);
                this.state = ge
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length; ) {
                    if (!(this.requireFail[e].state & (ge | it)))
                        return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = b({}, e);
                if (!ie(this.options.enable, [this, t])) {
                    this.reset(),
                    this.state = ge;
                    return
                }
                this.state & (Te | je | ge) && (this.state = it),
                this.state = this.process(t),
                this.state & (de | Fe | Ie | je) && this.tryEmit(t)
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        };
        function Jt(e) {
            return e & je ? "cancel" : e & Ie ? "end" : e & Fe ? "move" : e & de ? "start" : ""
        }
        function Qt(e) {
            return e == _e ? "down" : e == j ? "up" : e == q ? "left" : e == x ? "right" : ""
        }
        function ot(e, t) {
            var s = t.manager;
            return s ? s.get(e) : e
        }
        function fe() {
            be.apply(this, arguments)
        }
        U(fe, be, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return t === 0 || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state
                  , s = e.eventType
                  , a = t & (de | Fe)
                  , c = this.attrTest(e);
                return a && (s & P || !c) ? t | je : a || c ? s & f ? t | Ie : t & de ? t | Fe : de : ge
            }
        });
        function rt() {
            fe.apply(this, arguments),
            this.pX = null,
            this.pY = null
        }
        U(rt, fe, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Qe
            },
            getTouchAction: function() {
                var e = this.options.direction
                  , t = [];
                return e & ee && t.push(We),
                e & te && t.push(He),
                t
            },
            directionTest: function(e) {
                var t = this.options
                  , s = !0
                  , a = e.distance
                  , c = e.direction
                  , g = e.deltaX
                  , N = e.deltaY;
                return c & t.direction || (t.direction & ee ? (c = g === 0 ? F : g < 0 ? q : x,
                s = g != this.pX,
                a = Math.abs(e.deltaX)) : (c = N === 0 ? F : N < 0 ? j : _e,
                s = N != this.pY,
                a = Math.abs(e.deltaY))),
                e.direction = c,
                s && a > t.threshold && c & t.direction
            },
            attrTest: function(e) {
                return fe.prototype.attrTest.call(this, e) && (this.state & de || !(this.state & de) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX,
                this.pY = e.deltaY;
                var t = Qt(e.direction);
                t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e)
            }
        });
        function It() {
            fe.apply(this, arguments)
        }
        U(It, fe, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Re]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & de)
            },
            emit: function(e) {
                if (e.scale !== 1) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        });
        function wt() {
            be.apply(this, arguments),
            this._timer = null,
            this._input = null
        }
        U(wt, be, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [Zt]
            },
            process: function(e) {
                var t = this.options
                  , s = e.pointers.length === t.pointers
                  , a = e.distance < t.threshold
                  , c = e.deltaTime > t.time;
                if (this._input = e,
                !a || !s || e.eventType & (f | P) && !c)
                    this.reset();
                else if (e.eventType & u)
                    this.reset(),
                    this._timer = R(function() {
                        this.state = Te,
                        this.tryEmit()
                    }, t.time, this);
                else if (e.eventType & f)
                    return Te;
                return ge
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === Te && (e && e.eventType & f ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = _(),
                this.manager.emit(this.options.event, this._input)))
            }
        });
        function St() {
            fe.apply(this, arguments)
        }
        U(St, fe, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Re]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & de)
            }
        });
        function At() {
            fe.apply(this, arguments)
        }
        U(At, fe, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: ee | te,
                pointers: 1
            },
            getTouchAction: function() {
                return rt.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t = this.options.direction, s;
                return t & (ee | te) ? s = e.overallVelocity : t & ee ? s = e.overallVelocityX : t & te && (s = e.overallVelocityY),
                this._super.attrTest.call(this, e) && t & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && O(s) > this.options.velocity && e.eventType & f
            },
            emit: function(e) {
                var t = Qt(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e)
            }
        });
        function lt() {
            be.apply(this, arguments),
            this.pTime = !1,
            this.pCenter = !1,
            this._timer = null,
            this._input = null,
            this.count = 0
        }
        U(lt, be, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Et]
            },
            process: function(e) {
                var t = this.options
                  , s = e.pointers.length === t.pointers
                  , a = e.distance < t.threshold
                  , c = e.deltaTime < t.time;
                if (this.reset(),
                e.eventType & u && this.count === 0)
                    return this.failTimeout();
                if (a && c && s) {
                    if (e.eventType != f)
                        return this.failTimeout();
                    var g = this.pTime ? e.timeStamp - this.pTime < t.interval : !0
                      , N = !this.pCenter || tt(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp,
                    this.pCenter = e.center,
                    !N || !g ? this.count = 1 : this.count += 1,
                    this._input = e;
                    var G = this.count % t.taps;
                    if (G === 0)
                        return this.hasRequireFailures() ? (this._timer = R(function() {
                            this.state = Te,
                            this.tryEmit()
                        }, t.interval, this),
                        de) : Te
                }
                return ge
            },
            failTimeout: function() {
                return this._timer = R(function() {
                    this.state = ge
                }, this.options.interval, this),
                ge
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == Te && (this._input.tapCount = this.count,
                this.manager.emit(this.options.event, this._input))
            }
        });
        function Ce(e, t) {
            return t = t || {},
            t.recognizers = L(t.recognizers, Ce.defaults.preset),
            new Ot(e,t)
        }
        Ce.VERSION = "2.0.7",
        Ce.defaults = {
            domEvents: !1,
            touchAction: Kt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[St, {
                enable: !1
            }], [It, {
                enable: !1
            }, ["rotate"]], [At, {
                direction: ee
            }], [rt, {
                direction: ee
            }, ["swipe"]], [lt], [lt, {
                event: "doubletap",
                taps: 2
            }, ["tap"]], [wt]],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var Un = 1
          , en = 2;
        function Ot(e, t) {
            this.options = b({}, Ce.defaults, t || {}),
            this.options.inputTarget = this.options.inputTarget || e,
            this.handlers = {},
            this.session = {},
            this.recognizers = [],
            this.oldCssProps = {},
            this.element = e,
            this.input = pn(this),
            this.touchAction = new kt(this,this.options.touchAction),
            tn(this, !0),
            w(this.options.recognizers, function(s) {
                var a = this.add(new s[0](s[1]));
                s[2] && a.recognizeWith(s[2]),
                s[3] && a.requireFailure(s[3])
            }, this)
        }
        Ot.prototype = {
            set: function(e) {
                return b(this.options, e),
                e.touchAction && this.touchAction.update(),
                e.inputTarget && (this.input.destroy(),
                this.input.target = e.inputTarget,
                this.input.init()),
                this
            },
            stop: function(e) {
                this.session.stopped = e ? en : Un
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var s, a = this.recognizers, c = t.curRecognizer;
                    (!c || c && c.state & Te) && (c = t.curRecognizer = null);
                    for (var g = 0; g < a.length; )
                        s = a[g],
                        t.stopped !== en && (!c || s == c || s.canRecognizeWith(c)) ? s.recognize(e) : s.reset(),
                        !c && s.state & (de | Fe | Ie) && (c = t.curRecognizer = s),
                        g++
                }
            },
            get: function(e) {
                if (e instanceof be)
                    return e;
                for (var t = this.recognizers, s = 0; s < t.length; s++)
                    if (t[s].options.event == e)
                        return t[s];
                return null
            },
            add: function(e) {
                if (M(e, "add", this))
                    return this;
                var t = this.get(e.options.event);
                return t && this.remove(t),
                this.recognizers.push(e),
                e.manager = this,
                this.touchAction.update(),
                e
            },
            remove: function(e) {
                if (M(e, "remove", this))
                    return this;
                if (e = this.get(e),
                e) {
                    var t = this.recognizers
                      , s = le(t, e);
                    s !== -1 && (t.splice(s, 1),
                    this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== d && t !== d) {
                    var s = this.handlers;
                    return w(he(e), function(a) {
                        s[a] = s[a] || [],
                        s[a].push(t)
                    }),
                    this
                }
            },
            off: function(e, t) {
                if (e !== d) {
                    var s = this.handlers;
                    return w(he(e), function(a) {
                        t ? s[a] && s[a].splice(le(s[a], t), 1) : delete s[a]
                    }),
                    this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && zn(e, t);
                var s = this.handlers[e] && this.handlers[e].slice();
                if (!(!s || !s.length)) {
                    t.type = e,
                    t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    }
                    ;
                    for (var a = 0; a < s.length; )
                        s[a](t),
                        a++
                }
            },
            destroy: function() {
                this.element && tn(this, !1),
                this.handlers = {},
                this.session = {},
                this.input.destroy(),
                this.element = null
            }
        };
        function tn(e, t) {
            var s = e.element;
            if (s.style) {
                var a;
                w(e.options.cssProps, function(c, g) {
                    a = A(s.style, g),
                    t ? (e.oldCssProps[a] = s.style[a],
                    s.style[a] = c) : s.style[a] = e.oldCssProps[a] || ""
                }),
                t || (e.oldCssProps = {})
            }
        }
        function zn(e, t) {
            var s = r.createEvent("Event");
            s.initEvent(e, !0, !0),
            s.gesture = t,
            t.target.dispatchEvent(s)
        }
        b(Ce, {
            INPUT_START: u,
            INPUT_MOVE: h,
            INPUT_END: f,
            INPUT_CANCEL: P,
            STATE_POSSIBLE: it,
            STATE_BEGAN: de,
            STATE_CHANGED: Fe,
            STATE_ENDED: Ie,
            STATE_RECOGNIZED: Te,
            STATE_CANCELLED: je,
            STATE_FAILED: ge,
            DIRECTION_NONE: F,
            DIRECTION_LEFT: q,
            DIRECTION_RIGHT: x,
            DIRECTION_UP: j,
            DIRECTION_DOWN: _e,
            DIRECTION_HORIZONTAL: ee,
            DIRECTION_VERTICAL: te,
            DIRECTION_ALL: Qe,
            Manager: Ot,
            Input: ue,
            TouchAction: kt,
            TouchInput: st,
            MouseInput: nt,
            PointerEventInput: bt,
            TouchMouseInput: Ct,
            SingleTouchInput: qt,
            Recognizer: be,
            AttrRecognizer: fe,
            Tap: lt,
            Pan: rt,
            Swipe: At,
            Pinch: It,
            Rotate: St,
            Press: wt,
            on: T,
            off: B,
            each: w,
            merge: ce,
            extend: $,
            assign: b,
            inherit: U,
            bindFn: ae,
            prefixed: A
        });
        var Ln = typeof o < "u" ? o : typeof self < "u" ? self : {};
        Ln.Hammer = Ce,
        typeof d == "function" && d.amd ? d(function() {
            return Ce
        }) : n.exports ? n.exports = Ce : o[i] = Ce
    }
    )(window, document, "Hammer")
}
)(fn);
var di = fn.exports;
const Mt = ds(di);
function hi(n) {
    const o = window.fabric;
    o.HammerCanvas = o.util.createClass(o.Canvas, {
        initialize: function(r) {
            this.callSuper("initialize", r),
            this.isPinchingOrRotating = !1
        },
        selectionCreatedHandler: function(r) {
            o.util.setStyle(this.wrapperEl, {
                "touch-action": "none"
            }),
            o.util.setStyle(this.upperCanvasEl, {
                "touch-action": "none"
            }),
            o.util.setStyle(this.lowerCanvasEl, {
                "touch-action": "none"
            })
        },
        selectionClearedHandler: function(r) {
            o.util.setStyle(this.wrapperEl, {
                "touch-action": "manipulation"
            }),
            o.util.setStyle(this.upperCanvasEl, {
                "touch-action": "manipulation"
            }),
            o.util.setStyle(this.lowerCanvasEl, {
                "touch-action": "manipulation"
            })
        },
        _onMouseDown: function(r) {
            r.type === "touchstart" ? (this.selection = !1,
            o.util.removeListener(this.upperCanvasEl, "mousedown", this._onMouseDown),
            this.currentTouchStart ? (clearTimeout(this.currentTouchStart),
            this.currentTouchStart = null) : this.currentTouchStart = setTimeout( () => {
                this.currentTouchStart = null,
                this.callSuper("_onMouseDown", r)
            }
            , 75)) : this.callSuper("_onMouseDown", r)
        },
        _onMouseUp: function(r) {
            r.type === "touchend" ? setTimeout( () => {
                this.callSuper("_onMouseUp", r)
            }
            , 75) : this.callSuper("_onMouseUp", r)
        },
        _onMouseMove: function(r) {
            this.isPinchingOrRotating || (this.getActiveObject() && r.preventDefault && r.preventDefault(),
            this.__onMouseMove(r))
        },
        addOrRemove: function(r, i) {
            this.callSuper("addOrRemove", r, i);
            var d = new Mt.Manager(this.wrapperEl)
              , p = new Mt.Pinch
              , E = new Mt.Rotate;
            p.recognizeWith(E),
            d.add(p),
            d.add(E),
            d.on("pinchstart", v => {
                this.isPinchingOrRotating = !0
            }
            ),
            d.on("rotatestart", v => {
                this.isPinchingOrRotating = !0
            }
            ),
            d.on("pinchend", v => {
                this.isPinchingOrRotating = !1
            }
            ),
            d.on("rotateend", v => {
                this.isPinchingOrRotating = !1
            }
            ),
            d.on("pinchstart", v => {
                const C = z(n.value);
                this.initialPinchScale = C ? C.scaleX : 1
            }
            ),
            d.on("pinch", v => {
                const C = z(n.value);
                C && (C.scale(v.scale * this.initialPinchScale),
                this.requestRenderAll())
            }
            ),
            d.on("rotatestart", v => {
                const C = z(n.value);
                this.initialRotateTheta = v.rotation - (C ? C.angle : 0),
                this.initialRotateAngle = C ? C.angle : 0
            }
            ),
            d.on("rotate", v => {
                const C = z(n.value);
                if (C) {
                    let O = v.rotation - this.initialRotateTheta - this.initialRotateAngle;
                    if (Math.abs(O) > 2) {
                        let _ = v.rotation - this.initialRotateTheta;
                        C.rotate(_)
                    } else
                        C.rotate(this.initialRotateAngle);
                    this.requestRenderAll()
                }
            }
            )
        }
    })
}
function fi(n) {
    return `<svg fill="${n}" stroke="${n}" xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
<path id="Exclusion_1" data-name="Exclusion 1" d="M1000,1000v0H917.623A82.341,82.341,0,0,0,1000,917.589V1000Zm-918.323,0H0v-81.87a82.342,82.342,0,0,0,81.677,81.866ZM1000,82.41h0A82.335,82.335,0,0,0,918.309,0L1000,0ZM0,81.69H0V0L81.87,0A82.342,82.342,0,0,0,0,81.69Z" transform="translate(0.001 0.001)"/>
</svg>`
}
function pi({mode: n, color: o, alpha: r}) {
    let i = r !== void 0;
    return n === "rgba" || n === "hsla" ? `${n}(${o.join(", ")}${i ? `, ${r}` : ""})` : `${n}(${o.join(" ")}${i ? ` / ${r}` : ""})`
}
const vi = {
    class: "lg:flex lg:flex-col-reverse lg:h-full grow"
}
  , gi = {
    class: "grow flex flex-col justify-center items-center bg-mog-800 lg:overflow-hidden"
}
  , mi = {
    key: 0,
    class: "h-full flex flex-col items-center justify-center"
}
  , yi = {
    class: "flex flex-col items-center justify-center w-full aspect-square"
}
  , _i = 40
  , Ti = 40 / 393
  , bi = {
    __name: "EditorController.client",
    setup(n) {
        hs(l => ({
            "67e87d12": y(ce)
        }));
        const {pixelRatio: o} = fs()
          , {share: r, isSupported: i} = ps()
          , d = Le()
          , {getNft: p, getImage: E} = vt(d)
          , v = window.fabric
          , C = S(null)
          , O = S(null)
          , _ = S(null)
          , R = S(null)
          , M = S(1);
        S(!1);
        const w = S(!1)
          , D = S(!1)
          , b = S(!1)
          , $ = S(1)
          , {width: ce, height: U} = vs(O)
          , ae = S(null)
          , ie = S(null)
          , L = S(null);
        S(null);
        const T = S(null);
        S(null);
        const B = S(null)
          , X = S(!1)
          , Y = Ve("customs")
          , he = {
            hasControls: !0,
            hasBorders: !0,
            visible: !0,
            selectable: !0,
            evented: !0,
            transparentCorners: !1,
            centeredScaling: !0,
            centeredRotation: !0,
            cornerSize: 20,
            cornerStyle: "circle",
            borderColor: "#000000",
            cornerColor: "#2f34ff",
            cornerStrokeColor: "#ffffff",
            borderDashArray: [5, 5],
            rotatingPointOffset: 20,
            strokeUniform: !1,
            touchCornerSize: 30
        };
        pt(async () => {
            hi(T),
            Ze(),
            await ne(),
            _.value = new v.HammerCanvas(C.value,{
                stateful: !0,
                preserveObjectStacking: !0,
                enableRetinaScaling: !0,
                selection: !1
            }),
            await ne(),
            mt(),
            await ne(),
            ve(async () => {
                await ne(),
                yt(),
                await ne(),
                V(),
                await ne(),
                ye(),
                await ne(),
                $e(),
                await ne(),
                Ke(),
                await ne(),
                A()
            }
            )
        }
        );
        function le(l, u=!1) {
            l.isLoading = !0;
            const h = z(_.value);
            v.Image.fromURL(l.image, f => {
                var P, F, q, x, j;
                f.set({
                    ...he,
                    cornerSize: Math.max(he.cornerSize, Math.min(h.width, h.height) * .02),
                    stickerName: l.name,
                    stickerKey: l.key,
                    stickerCollection: l.collection
                }),
                $t() ? (f.set({
                    originX: "center",
                    originY: "center"
                }),
                f.setControlsVisibility({
                    ml: !1,
                    mb: !1,
                    mr: !1,
                    mt: !1,
                    bl: !1,
                    br: !1,
                    tl: !1,
                    tr: !1,
                    mtr: !1
                })) : (f.set({
                    originX: "left",
                    originY: "top",
                    centeredScaling: !1
                }),
                f.setControlsVisibility({
                    ml: !1,
                    mb: !1,
                    mr: !1,
                    mt: !1
                })),
                f.controls.mtr.offsetY = -50,
                p.value.collectionKey == f.stickerCollection ? (((P = l.position) == null ? void 0 : P.left) != null && ((F = l.position) == null ? void 0 : F.top) != null && ((q = l.position) == null ? void 0 : q.angle) != null && f.set({
                    left: (l.position.left + ($t() ? (l.position.width ?? f.width) / 2 : 0)) * $.value,
                    top: (l.position.top + ($t() ? (l.position.height ?? f.height) / 2 : 0)) * $.value,
                    angle: l.position.angle
                }),
                (x = l.position) != null && x.height && f.scaleToHeight(l.position.height * $.value),
                (j = l.position) != null && j.width && f.scaleToWidth(l.position.width * $.value)) : (f.width > f.height ? f.scaleToWidth(Math.min(h.height, h.width) / 3) : f.scaleToHeight(Math.min(h.height, h.width) / 3),
                h.centerObject(f)),
                h.add(f),
                h.setActiveObject(f),
                T.value = f,
                h.renderAll(),
                l.isLoading = !1
            }
            , {
                crossOrigin: "Anonymous"
            }),
            u || (Y.value = Y.value ? `${Y.value},${l.key}` : l.key)
        }
        function ve(l) {
            try {
                const u = z(_.value);
                v.Image.fromURL(E.value, h => {
                    var q;
                    if (!h)
                        throw gs("Unsupported Image");
                    h.set({
                        hasControls: !1,
                        selectable: !1,
                        evented: !1
                    });
                    const f = 16777216
                      , P = 1024 * 1024 * o.value ** 2
                      , F = h.height * h.width * o.value ** 2;
                    if (F > f) {
                        const x = Math.sqrt(f) / Math.sqrt(F);
                        $.value = x,
                        u.setHeight(h.height * x),
                        u.setWidth(h.width * x),
                        h.height > h.width ? h.scaleToHeight(u.height) : h.scaleToWidth(u.width)
                    } else if (!((q = p.value) != null && q.collectionKey) && F < P) {
                        const x = Math.sqrt(P) / Math.sqrt(F);
                        $.value = x,
                        u.setHeight(h.height * x),
                        u.setWidth(h.width * x),
                        h.height > h.width ? h.scaleToHeight(u.height) : h.scaleToWidth(u.width)
                    } else
                        u.setHeight(h.height),
                        u.setWidth(h.width);
                    u.add(h),
                    u.centerObject(h),
                    u.renderAll(),
                    ae.value = h;
                    try {
                        l()
                    } catch {}
                }
                , {
                    crossOrigin: "Anonymous"
                })
            } catch (u) {
                console.log(u),
                d.state = Ue.SelectImage
            }
        }
        function ye() {
            const l = z(_.value);
            z(ae.value);
            try {
                if (p.value.collectionKey == "cryptopunks") {
                    const u = "#648596"
                      , h = new v.Rect({
                        x: 0,
                        y: 0,
                        width: l.width,
                        height: l.height,
                        fill: u
                    });
                    l.add(h),
                    l.sendToBack(h),
                    l.renderAll()
                } else if (p.value.collectionKey == "bayc") {
                    const u = C.value.getContext("2d")
                      , h = 200
                      , f = u.getImageData(h, h, 1, 1).data
                      , P = pi({
                        mode: "rgba",
                        color: f
                    })
                      , F = Ts(P);
                    v.loadSVGFromString(fi(F), (q, x) => {
                        const j = v.util.groupSVGElements(q, x);
                        j.set({
                            hasControls: !1,
                            selectable: !1,
                            evented: !1,
                            x: 0,
                            y: 0
                        }),
                        j.scaleToHeight(l.height),
                        j.scaleToWidth(l.width),
                        l.add(j),
                        l.sendToBack(j),
                        l.bringForward(j),
                        l.renderAll()
                    }
                    )
                }
            } catch (u) {
                console.log(u)
            }
        }
        function A() {
            Y.value && Y.value.split(",").forEach(u => {
                const h = Ye.value.find(f => f.key == u);
                h && le(h, !0)
            }
            )
        }
        function V() {
            try {
                const l = z(_.value);
                v.Image.fromURL("/images/icons/ui/customs-delete.svg", u => {
                    let h = _i * (l.height / U.value);
                    u.set({
                        visible: !1,
                        hasControls: !1,
                        selectable: !1,
                        evented: !1,
                        left: l.width / 2,
                        top: l.height - (h + 20),
                        originX: "center",
                        originY: "center"
                    }),
                    u.scaleToHeight(h),
                    u.scaleToWidth(h),
                    l.add(u),
                    l.renderAll(),
                    R.value = u,
                    M.value = u.scaleX
                }
                )
            } catch (l) {
                console.log(l)
            }
        }
        function $e() {
            try {
                const l = z(_.value)
                  , u = new v.Rect({
                    visible: !1,
                    hasControls: !1,
                    selectable: !1,
                    evented: !1,
                    width: l.width + 1,
                    height: l.height + 1,
                    left: -1,
                    top: -1,
                    fill: "#1400ff",
                    opacity: .9
                })
                  , h = new v.Circle({
                    hasControls: !1,
                    selectable: !1,
                    evented: !1,
                    radius: Math.min(l.width / 2, l.height / 2),
                    originX: "center",
                    originY: "center"
                });
                h.inverted = !0,
                u.clipPath = h,
                l.add(u),
                ie.value = u,
                l.renderAll(),
                l.clipTo = function(f) {
                    h.render(f)
                }
            } catch (l) {
                console.log(l)
            }
        }
        function Ke() {
            try {
                const l = z(_.value);
                v.Image.fromURL("/images/icons/branding/bottom.svg", u => {
                    u.set({
                        visible: !1,
                        hasControls: !1,
                        selectable: !1,
                        evented: !1
                    }),
                    u.scaleToWidth(l.width),
                    l.add(u),
                    l.renderAll(),
                    L.value = u
                }
                )
            } catch (l) {
                console.log(l)
            }
        }
        function gt(l) {
            const u = z(_.value)
              , h = z(ie.value);
            h && (h.set({
                visible: l
            }),
            u.bringToFront(h),
            u.renderAll())
        }
        function Ze() {
            var h, f;
            const l = Ve("collection")
              , u = Ve("token");
            l.value = ((h = p.value) == null ? void 0 : h.collectionKey) ?? void 0,
            u.value = ((f = p.value) == null ? void 0 : f.tokenId) ?? void 0
        }
        function mt() {
            const l = z(_.value);
            l.uniformScaling = !0,
            l.renderAll()
        }
        function yt() {
            const l = z(_.value);
            l.on("mouse:down", u => {
                const h = z(R.value);
                l.getActiveObject() && (T.value = l.getActiveObject()),
                h && u.target && (l.bringToFront(u.target),
                l.bringToFront(h),
                w.value = !1),
                u.target && u.target.scaleX && (B.value = u.target.scaleX)
            }
            ),
            l.on("mouse:up", u => {
                var q;
                let h = u.pointer.x
                  , f = u.pointer.y;
                if (!(((q = u.target) == null ? void 0 : q.scaleX) != B.value) && (h > l.width || f > l.height)) {
                    const x = l.getActiveObjects();
                    x && x.forEach(j => {
                        l.remove(z(j)),
                        Je(j.stickerKey)
                    }
                    )
                }
                b.value = !1,
                D.value = !1;
                const F = z(ie.value);
                F && l.bringToFront(F)
            }
            ),
            l.on("mouse:move", u => {
                var F;
                let h = u.pointer.x
                  , f = u.pointer.y
                  , P = ((F = u.target) == null ? void 0 : F.scaleX) != B.value;
                u.transform && ke(h, f, P)
            }
            ),
            l.on("touch:drag", u => {
                try {
                    let h = l.width / u.self.bbox.width * u.self.x
                      , f = l.height / u.self.bbox.height * u.self.y;
                    ke(h, f)
                } catch (h) {
                    console.log(h)
                }
            }
            )
        }
        function ke(l, u, h=!1) {
            const f = z(_.value);
            h || (D.value = !0,
            l > f.width || u > f.height ? b.value = !0 : b.value = !1)
        }
        ms("Backspace", () => {
            const l = z(_.value)
              , u = l.getActiveObjects();
            u && u.forEach(h => {
                l.remove(z(h)),
                Je(h.stickerKey)
            }
            )
        }
        );
        function Je(l) {
            const u = Y.value.split(",")
              , h = u.lastIndexOf(l);
            h > -1 && (u.splice(h, 1),
            Y.value = u.join(","))
        }
        async function Be() {
            var l, u, h;
            try {
                X.value = !0;
                const f = z(_.value)
                  , P = z(R.value)
                  , F = z(ie.value);
                P && P.set({
                    visible: !1
                });
                let q = F.visible;
                F && F.set({
                    visible: !1
                });
                const x = z(L.value)
                  , j = f.height;
                x && (f.setHeight(f.height + f.width * Ti),
                x.set({
                    visible: !0,
                    top: j
                }),
                f.bringToFront(x)),
                await f.renderAll(),
                await ne();
                const _e = `MogMe_${((l = p.value) == null ? void 0 : l.collectionName) ?? "UserImage"}${(u = p.value) != null && u.tokenId ? `#${(h = p.value) == null ? void 0 : h.tokenId}` : ""}.png`;
                if (i.value) {
                    const ee = f.toDataURL({
                        format: "png",
                        quality: 1
                    })
                      , te = await (await fetch(ee)).blob();
                    let Qe = new File([te],_e,{
                        type: te.type,
                        lastModified: new Date().getTime()
                    });
                    r({
                        title: _e,
                        files: [Qe]
                    })
                } else if (bs()) {
                    const ee = f.toDataURL({
                        format: "png",
                        quality: 1
                    });
                    xs.value = ee,
                    await new Promise(te => setTimeout(te, 500)),
                    await ln("/download", {
                        open: {
                            target: "_blank"
                        }
                    })
                } else {
                    const ee = f.toDataURL({
                        format: "png",
                        quality: 1
                    })
                      , te = document.createElement("a");
                    te.download = _e,
                    te.href = ee,
                    te.click()
                }
                await ne(),
                F && q && F.set({
                    visible: !0
                }),
                await ne(),
                x && (x.set({
                    visible: !1
                }),
                await ne(),
                f.setHeight(j)),
                await ne(),
                await f.renderAll()
            } catch (f) {
                console.log(f)
            } finally {
                X.value = !1
            }
        }
        S(""),
        ys(async () => {
            await _t()
        }
        );
        async function _t() {
            await ne();
            const l = rn()
              , u = _s();
            l.name == "index" && u.replace({
                name: "index"
            })
        }
        return (l, u) => {
            const h = ja
              , f = Oe
              , P = oi
              , F = ui
              , q = hn;
            return m(),
            K(q, null, {
                left: Ae( () => [I("div", vi, [H(h, {
                    ref_key: "controls_e",
                    ref: O,
                    class: "lg:self-end",
                    toggleProfileFrame: gt,
                    downloadCanvas: Be,
                    isDownloading: y(X)
                }, null, 8, ["isDownloading"]), dt(I("div", gi, [I("canvas", {
                    ref_key: "c",
                    ref: C,
                    class: "w-full"
                }, null, 512)], 512), [[ht, y(ae)]]), y(ae) ? se("", !0) : (m(),
                k("div", mi, [I("div", yi, [H(f, {
                    name: "i-svg-spinners-ring-resize",
                    class: "size-20"
                })])]))])]),
                right: Ae( () => [H(P, {
                    categoryKey: y(p).key,
                    addStickerToCanvas: le,
                    class: "lg:grow w-full lg:max-w-[550px]"
                }, null, 8, ["categoryKey"]), dt(H(F, {
                    isHovered: y(b),
                    class: "absolute inset-0"
                }, null, 8, ["isHovered"]), [[ht, y(D)]])]),
                _: 1
            })
        }
    }
}
  , Ci = Ne(bi, [["__scopeId", "data-v-acdbc38b"]])
  , Ei = Es(Ci)
  , ki = {
    __name: "AppController",
    setup(n) {
        const o = Le()
          , {getState: r, getNft: i} = vt(o);
        return pt( () => {
            ti()
        }
        ),
        De(i, d => {
            var p;
            d && ((p = d == null ? void 0 : d.collectionKey) != null && p.includes("nft-") ? sn().nftMogged(d) : sn().pictureMogged())
        }
        ),
        (d, p) => {
            const E = La
              , v = Ei;
            return m(),
            k("div", null, [y(r) == ("EditorState"in d ? d.EditorState : y(Ue)).SelectImage ? (m(),
            K(E, {
                key: 0
            })) : y(r) == ("EditorState"in d ? d.EditorState : y(Ue)).EditImage ? (m(),
            K(v, {
                key: 1
            })) : se("", !0)])
        }
    }
}
  , Ii = ki
  , Mi = {
    __name: "index",
    setup(n) {
        return Us({
            title: "MOG.ME: MOG ANY IMAGE",
            description: "Add Pit Viper® sunglasses and other stickers to photos and NFT profile pictures."
        }),
        (o, r) => {
            const i = Ii;
            return m(),
            K(i)
        }
    }
};
export {Mi as default};
