// Recovered from the public Golden Letter demo; original module 406.
export default function (e, t, n) {
  n.d(t, {
    default: function () {
      return x;
    },
  });
  var i = n(57437),
    a = n(2265),
    o = n(54887),
    r = n(32489),
    s = n(69076),
    d = n(96362),
    l = n(30401),
    c = n(78867),
    p = n(30157),
    u = n(30667),
    m = n(78097),
    h = n(82119);
  let w =
      /FBAN|FBAV|FB_IAB|Instagram|Line\/|Snapchat|TikTok|musical_ly|Twitter|LinkedInApp|; wv\)/i,
    g = /Android/i,
    y = /Android|iPhone|iPad|iPod|Mobile/i,
    v = {
      en: {
        title: "WhatsApp didn't open?",
        body: "You may not have WhatsApp or WhatsApp Business installed, or this app blocked it. Try again, or use one of these:",
        tryAgain: "Try again",
        openInBrowser: "Open WhatsApp in browser",
        copyNumber: "Copy our number",
        copyMessage: "Copy message",
        copied: "Copied",
        close: "Close",
      },
      hi: {
        title: "WhatsApp नहीं खुला?",
        body: "शायद आपके फ़ोन में WhatsApp या WhatsApp Business नहीं है, या इस ऐप ने उसे रोक दिया। फिर से कोशिश करें, या इनमें से कोई चुनें:",
        tryAgain: "फिर से कोशिश करें",
        openInBrowser: "ब्राउज़र में WhatsApp खोलें",
        copyNumber: "हमारा नंबर कॉपी करें",
        copyMessage: "मैसेज कॉपी करें",
        copied: "कॉपी हो गया",
        close: "बंद करें",
      },
      ar: {
        title: "لم يُفتح واتساب؟",
        body: "قد لا يكون واتساب أو واتساب للأعمال مثبتًا لديك، أو أن هذا التطبيق منع فتحه. حاول مرة أخرى أو استخدم أحد الخيارات التالية:",
        tryAgain: "حاول مرة أخرى",
        openInBrowser: "افتح واتساب في المتصفح",
        copyNumber: "انسخ رقمنا",
        copyMessage: "انسخ الرسالة",
        copied: "تم النسخ",
        close: "إغلاق",
      },
      fr: {
        title: "WhatsApp ne s’est pas ouvert ?",
        body: "WhatsApp ou WhatsApp Business n’est peut-\xeatre pas install\xe9, ou cette application l’a bloqu\xe9. R\xe9essayez, ou utilisez l’une de ces options :",
        tryAgain: "R\xe9essayer",
        openInBrowser: "Ouvrir WhatsApp dans le navigateur",
        copyNumber: "Copier notre num\xe9ro",
        copyMessage: "Copier le message",
        copied: "Copi\xe9",
        close: "Fermer",
      },
      es: {
        title: "\xbfNo se abri\xf3 WhatsApp?",
        body: "Puede que no tengas instalado WhatsApp o WhatsApp Business, o que esta app lo haya bloqueado. Int\xe9ntalo de nuevo o usa una de estas opciones:",
        tryAgain: "Intentar de nuevo",
        openInBrowser: "Abrir WhatsApp en el navegador",
        copyNumber: "Copiar nuestro n\xfamero",
        copyMessage: "Copiar mensaje",
        copied: "Copiado",
        close: "Cerrar",
      },
    };
  async function b(e) {
    try {
      return (await navigator.clipboard.writeText(e), !0);
    } catch (t) {
      try {
        let t = document.createElement("textarea");
        ((t.value = e),
          (t.style.position = "fixed"),
          (t.style.opacity = "0"),
          document.body.appendChild(t),
          t.select());
        let n = document.execCommand("copy");
        return (t.remove(), n);
      } catch (e) {
        return !1;
      }
    }
  }
  function f(e) {
    var t;
    let { href: n, target: u, onClose: w } = e,
      g = (0, h.Vt)(),
      y = v[g],
      [f, x] = (0, a.useState)(null);
    (0, a.useEffect)(() => {
      let e = (e) => {
        "Escape" === e.key && w();
      };
      return (
        window.addEventListener("keydown", e),
        () => window.removeEventListener("keydown", e)
      );
    }, [w]);
    let A = async (e, t) => {
        (await b(t)) && (x(e), window.setTimeout(() => x(null), 1800));
      },
      k =
        "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-start text-sm font-semibold transition",
      N = "".concat(
        k,
        " border border-brand-100 bg-white text-brand-800 hover:bg-brand-50",
      );
    return (0, o.createPortal)(
      (0, i.jsx)("div", {
        className:
          "fixed inset-0 z-[120] flex items-end justify-center bg-black/45 p-3 sm:items-center",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "wa-fallback-title",
        dir: (0, m.t6)(g) ? "rtl" : "ltr",
        lang: g,
        onClick: w,
        children: (0, i.jsxs)("div", {
          className: "w-full max-w-sm rounded-3xl bg-ivory p-5 shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, i.jsxs)("div", {
              className: "flex items-start justify-between gap-3",
              children: [
                (0, i.jsx)("h2", {
                  id: "wa-fallback-title",
                  className: "font-heading text-lg font-bold text-brand-900",
                  children: y.title,
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  onClick: w,
                  "aria-label": y.close,
                  className:
                    "rounded-full p-1 text-brand-800/60 hover:bg-brand-50",
                  children: (0, i.jsx)(r.Z, { className: "h-5 w-5" }),
                }),
              ],
            }),
            (0, i.jsx)("p", {
              className: "mt-1.5 text-sm text-brand-800/75",
              children: y.body,
            }),
            (0, i.jsxs)("div", {
              className: "mt-4 space-y-2",
              children: [
                (0, i.jsxs)("a", {
                  href: n,
                  className: "".concat(
                    k,
                    " bg-[#25D366] text-white hover:bg-[#1fb957]",
                  ),
                  children: [
                    (0, i.jsx)(s.Z, { className: "h-4 w-4 shrink-0" }),
                    y.tryAgain,
                  ],
                }),
                (0, i.jsxs)("a", {
                  href: n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: N,
                  children: [
                    (0, i.jsx)(d.Z, { className: "h-4 w-4 shrink-0" }),
                    y.openInBrowser,
                  ],
                }),
                (null == u ? void 0 : u.phone)
                  ? (0, i.jsxs)("button", {
                      type: "button",
                      className: N,
                      onClick: () => A("number", "+".concat(u.phone)),
                      children: [
                        "number" === f
                          ? (0, i.jsx)(l.Z, { className: "h-4 w-4 shrink-0" })
                          : (0, i.jsx)(c.Z, { className: "h-4 w-4 shrink-0" }),
                        (0, i.jsxs)("span", {
                          className: "flex flex-wrap items-center gap-x-2",
                          children: [
                            (0, i.jsx)("span", {
                              children:
                                "number" === f ? y.copied : y.copyNumber,
                            }),
                            (0, i.jsx)("bdi", {
                              className: "font-normal text-brand-800/60",
                              dir: "ltr",
                              children:
                                (t = u.phone) === p.lz.whatsapp.e164
                                  ? p.lz.whatsapp.display
                                  : "+".concat(t),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
                (null == u ? void 0 : u.text)
                  ? (0, i.jsxs)("button", {
                      type: "button",
                      className: N,
                      onClick: () => {
                        var e;
                        return A(
                          "message",
                          null !== (e = u.text) && void 0 !== e ? e : "",
                        );
                      },
                      children: [
                        "message" === f
                          ? (0, i.jsx)(l.Z, { className: "h-4 w-4 shrink-0" })
                          : (0, i.jsx)(c.Z, { className: "h-4 w-4 shrink-0" }),
                        "message" === f ? y.copied : y.copyMessage,
                      ],
                    })
                  : null,
              ],
            }),
          ],
        }),
      }),
      document.body,
    );
  }
  function x(e) {
    let { href: t, onClick: n, children: o, trackSource: r, ...s } = e,
      [d, l] = (0, a.useState)({ sameTab: !1, androidInApp: !1 }),
      [c, m] = (0, a.useState)(!1),
      [h, v] = (0, a.useState)(!1),
      b = (0, a.useRef)(null),
      x = (0, a.useRef)(null),
      A = (function (e) {
        try {
          let t = new URL(e),
            n = t.hostname.replace(/^www\./, "");
          if ("wa.me" === n)
            return {
              phone: t.pathname.replace(/\D/g, "") || null,
              text: t.searchParams.get("text"),
            };
          if ("api.whatsapp.com" === n || "web.whatsapp.com" === n)
            return {
              phone:
                (t.searchParams.get("phone") || "").replace(/\D/g, "") || null,
              text: t.searchParams.get("text"),
            };
        } catch (e) {}
        return null;
      })(t),
      k =
        d.androidInApp && A
          ? (function (e, t) {
              let n = new URLSearchParams();
              return (
                e.phone && n.set("phone", e.phone),
                e.text && n.set("text", e.text),
                "intent://send/?"
                  .concat(
                    n.toString(),
                    "#Intent;scheme=whatsapp;S.browser_fallback_url=",
                  )
                  .concat(encodeURIComponent(t), ";end")
              );
            })(A, t)
          : t,
      N = (null == A ? void 0 : A.phone) === p.lz.whatsapp.e164,
      j = (0, a.useCallback)(() => {
        (x.current && clearTimeout(x.current), (x.current = null));
      }, []);
    return (
      (0, a.useEffect)(() => {
        l(
          (function () {
            if ("undefined" == typeof navigator)
              return { sameTab: !1, androidInApp: !1 };
            let e = navigator.userAgent || "",
              t = w.test(e),
              n = !1;
            try {
              n = window.matchMedia("(pointer: coarse)").matches;
            } catch (e) {}
            return {
              sameTab: t || y.test(e) || n,
              androidInApp: t && g.test(e),
            };
          })(),
        );
        let e = () => {
            "hidden" === document.visibilityState && (j(), m(!1));
          },
          t = () => {
            (j(), m(!1));
          },
          n = () => m(!1),
          i = () => j();
        return (
          document.addEventListener("visibilitychange", e),
          window.addEventListener("pagehide", t),
          window.addEventListener("pageshow", n),
          window.addEventListener("blur", i),
          () => {
            (document.removeEventListener("visibilitychange", e),
              window.removeEventListener("pagehide", t),
              window.removeEventListener("pageshow", n),
              window.removeEventListener("blur", i),
              j(),
              b.current && clearTimeout(b.current));
          }
        );
      }, [j]),
      (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)("a", {
            ...s,
            href: k,
            target: d.sameTab ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: (e) => {
              try {
                null == n || n(e);
              } catch (e) {}
              !e.defaultPrevented &&
                (N && (0, u.O7)({ source: r }),
                m(!0),
                b.current && clearTimeout(b.current),
                (b.current = setTimeout(() => m(!1), 2500)),
                e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  0 !== e.button ||
                  (j(),
                  (x.current = setTimeout(() => {
                    ((x.current = null),
                      "visible" === document.visibilityState &&
                        document.hasFocus() &&
                        v(!0));
                  }, 2800))));
            },
            "data-wa-opening": c ? "" : void 0,
            "aria-busy": c || void 0,
            children: o,
          }),
          h
            ? (0, i.jsx)(f, { href: t, target: A, onClose: () => v(!1) })
            : null,
        ],
      })
    );
  }
}
