// Recovered from the public Golden Letter demo; original module 36800.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return p;
    },
    b: function () {
      return c;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(54887),
    s = a(66337),
    i = a(35536);
  let o = (0, r.createContext)({ locked: !1, notify: () => {} });
  function c() {
    return (0, r.useContext)(o);
  }
  let d = {
      en: {
        ribbon: "Preview \xb7 Not paid",
        title: "Preview only",
        body: {
          rsvp: "This is a preview & not paid version — RSVP won't work.",
          calendar:
            "This is a preview & not paid version — Add to calendar won't work.",
          directions:
            "This is a preview & not paid version — Get directions won't work.",
        },
        ok: "OK",
      },
      ar: {
        ribbon: "معاينة \xb7 غير مدفوعة",
        title: "معاينة فقط",
        body: {
          rsvp: "هذه نسخة معاينة غير مدفوعة — تأكيد الحضور لا يعمل.",
          calendar: "هذه نسخة معاينة غير مدفوعة — الإضافة إلى التقويم لا تعمل.",
          directions: "هذه نسخة معاينة غير مدفوعة — الاتجاهات لا تعمل.",
        },
        ok: "حسنًا",
      },
      hi: {
        ribbon: "प्रीव्यू \xb7 भुगतान बाकी",
        title: "केवल प्रीव्यू",
        body: {
          rsvp: "यह बिना भुगतान वाला प्रीव्यू है — RSVP काम नहीं करेगा।",
          calendar:
            "यह बिना भुगतान वाला प्रीव्यू है — कैलेंडर में जोड़ना काम नहीं करेगा।",
          directions:
            "यह बिना भुगतान वाला प्रीव्यू है — रास्ता देखना काम नहीं करेगा।",
        },
        ok: "ठीक है",
      },
      fr: {
        ribbon: "Aper\xe7u \xb7 Non pay\xe9",
        title: "Aper\xe7u uniquement",
        body: {
          rsvp: "Ceci est un aper\xe7u non pay\xe9 — la confirmation de pr\xe9sence (RSVP) ne fonctionne pas.",
          calendar:
            "Ceci est un aper\xe7u non pay\xe9 — l'ajout au calendrier ne fonctionne pas.",
          directions:
            "Ceci est un aper\xe7u non pay\xe9 — l'itin\xe9raire ne fonctionne pas.",
        },
        ok: "OK",
      },
      es: {
        ribbon: "Vista previa \xb7 Sin pagar",
        title: "Solo vista previa",
        body: {
          rsvp: "Esta es una vista previa sin pagar — la confirmaci\xf3n de asistencia (RSVP) no funciona.",
          calendar:
            "Esta es una vista previa sin pagar — a\xf1adir al calendario no funciona.",
          directions:
            "Esta es una vista previa sin pagar — c\xf3mo llegar no funciona.",
        },
        ok: "OK",
      },
    },
    u =
      /(google\.[a-z.]+\/maps|maps\.google\.|goo\.gl\/maps|maps\.app\.goo\.gl|maps\.apple\.com|waze\.com|openstreetmap\.org)/i,
    m =
      "absolute w-[240px] -rotate-45 select-none whitespace-nowrap bg-[#b3261e] py-1 text-center text-[10px] font-bold uppercase leading-[14px] tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-white/30";
  function x(e) {
    let { label: t } = e;
    return (0, n.jsxs)("div", {
      "aria-hidden": !0,
      className: "pointer-events-none",
      dir: "ltr",
      children: [
        (0, n.jsx)("div", {
          className: "fixed left-0 top-0 z-[9998] h-40 w-40 overflow-hidden",
          children: (0, n.jsx)("div", {
            className: "".concat(m, " -left-[62px] top-[47px]"),
            children: t,
          }),
        }),
        (0, n.jsx)("div", {
          className:
            "fixed bottom-0 right-0 z-[9998] h-40 w-40 overflow-hidden",
          children: (0, n.jsx)("div", {
            className: "".concat(m, " -right-[62px] bottom-[47px]"),
            children: t,
          }),
        }),
      ],
    });
  }
  function p(e) {
    let { locked: t, lang: a, children: c } = e,
      m = d[(0, i.vw)(a)],
      [p, f] = (0, r.useState)(null),
      [h, v] = (0, r.useState)(!1);
    (0, r.useEffect)(() => v(!0), []);
    let b = (0, r.useCallback)((e) => f(e), []),
      g = (0, r.useMemo)(() => ({ locked: t, notify: b }), [t, b]);
    return (
      (0, r.useEffect)(() => {
        if (!t) return;
        let e = (e) => {
          var t, a, n;
          let r =
            null === (a = e.target) || void 0 === a
              ? void 0
              : null === (t = a.closest) || void 0 === t
                ? void 0
                : t.call(a, "a[href]");
          r &&
            u.test(
              null !== (n = r.getAttribute("href")) && void 0 !== n ? n : "",
            ) &&
            (e.preventDefault(), e.stopPropagation(), f("directions"));
        };
        return (
          document.addEventListener("click", e, !0),
          () => document.removeEventListener("click", e, !0)
        );
      }, [t]),
      (0, r.useEffect)(() => {
        if (!p) return;
        let e = (e) => {
          "Escape" === e.key && f(null);
        };
        return (
          window.addEventListener("keydown", e),
          () => window.removeEventListener("keydown", e)
        );
      }, [p]),
      (0, n.jsxs)(o.Provider, {
        value: g,
        children: [
          c,
          t && h
            ? (0, l.createPortal)(
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(x, { label: m.ribbon }),
                    p
                      ? (0, n.jsx)("div", {
                          className:
                            "fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm",
                          onClick: () => f(null),
                          dir: (0, i.TB)(a) ? "rtl" : "ltr",
                          children: (0, n.jsxs)("div", {
                            role: "alertdialog",
                            "aria-modal": "true",
                            "aria-labelledby": "preview-lock-title",
                            "aria-describedby": "preview-lock-body",
                            onClick: (e) => e.stopPropagation(),
                            className:
                              "w-full max-w-xs rounded-3xl bg-white p-6 text-center font-sans shadow-2xl",
                            children: [
                              (0, n.jsx)("span", {
                                className:
                                  "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#b3261e]",
                                children: (0, n.jsx)(s.Z, {
                                  className: "h-5 w-5",
                                }),
                              }),
                              (0, n.jsx)("h2", {
                                id: "preview-lock-title",
                                className:
                                  "mt-3 text-lg font-semibold text-neutral-900",
                                children: m.title,
                              }),
                              (0, n.jsx)("p", {
                                id: "preview-lock-body",
                                className:
                                  "mt-2 text-sm leading-relaxed text-neutral-600",
                                children: m.body[p],
                              }),
                              (0, n.jsx)("button", {
                                type: "button",
                                autoFocus: !0,
                                onClick: () => f(null),
                                className:
                                  "mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-neutral-900 px-6 text-sm font-semibold text-white transition hover:bg-neutral-800",
                                children: m.ok,
                              }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
                document.body,
              )
            : null,
        ],
      })
    );
  }
}
