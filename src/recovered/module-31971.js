// Recovered from the public Golden Letter demo; original module 31971.
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    default: function () {
      return h;
    },
  });
  var a = n(57437),
    i = n(2265),
    o = n(68919),
    s = n(30401),
    r = n(78867),
    l = n(89345),
    d = n(406),
    u = n(82119);
  let c = {
    en: {
      share: "Share",
      copied: "Link copied",
      copy: "Copy link",
      email: "Email",
    },
    hi: {
      share: "शेयर करें",
      copied: "लिंक कॉपी हो गया",
      copy: "लिंक कॉपी करें",
      email: "ईमेल",
    },
    ar: {
      share: "مشاركة",
      copied: "تم نسخ الرابط",
      copy: "نسخ الرابط",
      email: "البريد الإلكتروني",
    },
    fr: {
      share: "Partager",
      copied: "Lien copi\xe9",
      copy: "Copier le lien",
      email: "E-mail",
    },
    es: {
      share: "Compartir",
      copied: "Enlace copiado",
      copy: "Copiar enlace",
      email: "Correo",
    },
  };
  function m(e) {
    let { className: t = "" } = e;
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: "fill-current ".concat(t),
      children: (0, a.jsx)("path", {
        d: "M12.04 2a9.78 9.78 0 0 0-8.45 14.7L2.05 22l5.43-1.43A9.95 9.95 0 1 0 12.04 2Zm0 17.9a8 8 0 0 1-4.08-1.12l-.3-.18-3.22.85.86-3.14-.2-.32a7.9 7.9 0 1 1 6.94 3.91Zm4.35-5.92c-.24-.12-1.41-.7-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.92-1.19a7.16 7.16 0 0 1-1.33-1.65c-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.11 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z",
      }),
    });
  }
  function h(e) {
    let {
        url: t,
        title: n,
        text: h,
        className: p = "",
        label: x,
        buttonClassName:
          v = "inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:bg-brand-50",
        menuAlign: f = "center",
      } = e,
      [y, b] = (0, i.useState)(!1),
      g = c[(0, u.Vt)()],
      [w, k] = (0, i.useState)(!1),
      j = (0, i.useRef)(null),
      N = (0, i.useSyncExternalStore)(
        () => () => {},
        () =>
          "undefined" != typeof navigator &&
          "function" == typeof navigator.share,
        () => !1,
      );
    (0, i.useEffect)(() => {
      if (!y) return;
      let e = (e) => {
          var t;
          (null === (t = j.current) || void 0 === t
            ? void 0
            : t.contains(e.target)) || b(!1);
        },
        t = (e) => {
          "Escape" === e.key && b(!1);
        };
      return (
        document.addEventListener("mousedown", e),
        document.addEventListener("keydown", t),
        () => {
          (document.removeEventListener("mousedown", e),
            document.removeEventListener("keydown", t));
        }
      );
    }, [y]);
    let E = h ? "".concat(h, "\n").concat(t) : t;
    async function T() {
      if (N) {
        try {
          await navigator.share({ title: n, text: h, url: t });
        } catch (e) {}
        return;
      }
      b((e) => !e);
    }
    async function C() {
      try {
        (await navigator.clipboard.writeText(t),
          k(!0),
          setTimeout(() => k(!1), 2e3));
      } catch (e) {}
    }
    let S =
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-50";
    return (0, a.jsxs)("div", {
      ref: j,
      className: "relative inline-block ".concat(p),
      children: [
        (0, a.jsxs)("button", {
          type: "button",
          onClick: T,
          "aria-haspopup": N ? void 0 : "menu",
          "aria-expanded": N ? void 0 : y,
          className: v,
          children: [
            (0, a.jsx)(o.Z, { className: "h-4 w-4" }),
            null != x ? x : g.share,
          ],
        }),
        !N &&
          y &&
          (0, a.jsxs)("div", {
            role: "menu",
            className:
              "absolute z-30 mt-2 w-64 rounded-2xl border border-brand-100 bg-white p-2 shadow-xl ".concat(
                "end" === f ? "end-0" : "left-1/2 -translate-x-1/2",
              ),
            children: [
              (0, a.jsxs)("button", {
                type: "button",
                role: "menuitem",
                onClick: C,
                className: "".concat(S, " w-full"),
                children: [
                  w
                    ? (0, a.jsx)(s.Z, { className: "h-4 w-4 text-green-600" })
                    : (0, a.jsx)(r.Z, { className: "h-4 w-4 text-brand-500" }),
                  w ? g.copied : g.copy,
                ],
              }),
              (0, a.jsxs)(d.default, {
                role: "menuitem",
                href: "https://wa.me/?text=".concat(encodeURIComponent(E)),
                className: S,
                children: [
                  (0, a.jsx)(m, { className: "h-4 w-4 text-[#25D366]" }),
                  "WhatsApp",
                ],
              }),
              (0, a.jsxs)("a", {
                role: "menuitem",
                href: "mailto:?subject="
                  .concat(encodeURIComponent(n), "&body=")
                  .concat(encodeURIComponent(E)),
                className: S,
                children: [
                  (0, a.jsx)(l.Z, { className: "h-4 w-4 text-brand-500" }),
                  g.email,
                ],
              }),
            ],
          }),
      ],
    });
  }
}
