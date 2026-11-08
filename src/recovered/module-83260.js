// Recovered from the public Golden Letter demo; original module 83260.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return o;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(92451),
    s = a(10407),
    i = a(37679);
  function o(e) {
    let {
        photos: t,
        lang: language = "en",
        goldColor: a = "#c4a35a",
        inkColor: o = "#611a2b",
        title: c = "Our Moments",
        subtitle: d,
        autoSlideInterval: u = 3800,
        cardBg: m = "#fffdf8",
        headingClassName: x,
        subtitleClassName: p,
        className: f = "",
      } = e,
      labels = { en: { previous: "Previous photo", next: "Next photo", moment: "Wedding photo", slide: "Go to photo" }, ar: { previous: "الصورة السابقة", next: "الصورة التالية", moment: "صورة من حفل الزواج", slide: "الانتقال إلى الصورة" }, fr: { previous: "Photo précédente", next: "Photo suivante", moment: "Photo du mariage", slide: "Voir la photo" } }[language],
      [h, v] = (0, r.useState)(0),
      [b, g] = (0, r.useState)(!1),
      y = (0, r.useRef)(null),
      w = t.length;
    (0, r.useEffect)(() => {
      if (w <= 1 || b) return;
      let e = window.setInterval(() => {
        v((e) => (e + 1) % w);
      }, u);
      return () => window.clearInterval(e);
    }, [w, u, b]);
    let j = () => {
        (g(!0), v((e) => (e - 1 + w) % w));
      },
      N = () => {
        (g(!0), v((e) => (e + 1) % w));
      };
    return 0 === w
      ? null
      : (0, n.jsxs)("section", {
          "data-rise": !0,
          className:
            "wedding-gallery relative mx-auto w-full max-w-xl px-2 pt-6 pb-4 text-center sm:px-4 "
              .concat(f)
              .trim(),
          children: [
            c
              ? (0, n.jsxs)("div", {
                  className: "flex items-center justify-center gap-3",
                  children: [
                    (0, n.jsx)("span", {
                      className: "h-px w-12",
                      style: { backgroundColor: "".concat(a, "88") },
                    }),
                    (0, n.jsx)("span", {
                      className:
                        null != x
                          ? x
                          : "text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs",
                      style: { color: a },
                      children: c,
                    }),
                    (0, n.jsx)("span", {
                      className: "h-px w-12",
                      style: { backgroundColor: "".concat(a, "88") },
                    }),
                  ],
                })
              : null,
            d
              ? (0, n.jsx)("h2", {
                  className:
                    null != p ? p : "mt-2 font-script text-3xl sm:text-4xl",
                  style: { color: o },
                  children: d,
                })
              : null,
            (0, n.jsxs)("div", {
              className:
                "wedding-gallery__stage relative mt-7 flex h-[420px] w-full touch-pan-y items-center justify-center sm:h-[490px]",
              style: { perspective: 1e3 },
              onPointerDown: (e) => {
                y.current = { x: e.clientX, y: e.clientY };
              },
              onPointerUp: (e) => {
                let t = y.current;
                if (((y.current = null), !t || w <= 1)) return;
                let a = e.clientX - t.x,
                  n = e.clientY - t.y;
                40 > Math.abs(a) ||
                  Math.abs(a) < Math.abs(n) ||
                  (a < 0 ? N() : j());
              },
              onPointerCancel: () => {
                y.current = null;
              },
              children: [
                t.map((e, t) => {
                  let r = (t - h) % w;
                  (r < -Math.floor(w / 2) && (r += w),
                    r > Math.floor(w / 2) && (r -= w));
                  let l = 0 === r,
                    s = -1 === r,
                    o = 1 === r,
                    c = -2 === r,
                    d = 2 === r;
                  return l || s || o || c || d
                    ? (0, n.jsx)(
                        i.E.div,
                        {
                          className:
                            "absolute top-1/2 flex items-center justify-center select-none",
                          style: { zIndex: l ? 30 : s || o ? 20 : 10 },
                          animate: {
                            x: l ? 0 : s ? -108 : o ? 108 : c ? -168 : 168,
                            y: "-50%",
                            scale: l ? 1 : s || o ? 0.85 : 0.72,
                            opacity: l ? 1 : s || o ? 0.78 : 0.35,
                            rotateY: l ? 0 : s ? 12 : o ? -12 : c ? 20 : -20,
                          },
                          transition: {
                            duration: 0.55,
                            ease: [0.25, 1, 0.5, 1],
                          },
                          children: (0, n.jsx)("div", {
                            className:
                              "relative overflow-hidden transition-all ".concat(
                                l
                                  ? "wedding-gallery__card wedding-gallery__card--active h-[360px] w-[260px] rounded-[1.75rem] p-1 shadow-[0_16px_36px_-10px_rgba(61,43,31,0.34)] sm:h-[420px] sm:w-[300px] sm:rounded-[2rem]"
                                  : "wedding-gallery__card h-[320px] w-[220px] rounded-[1.5rem] shadow-md sm:h-[370px] sm:w-[260px] sm:rounded-[1.75rem]",
                              ),
                            style: l
                              ? {
                                  backgroundColor: m,
                                  border: "2.5px solid ".concat(a),
                                  boxShadow:
                                    "0 20px 42px -10px rgba(61,43,31,0.32), 0 0 0 1px ".concat(
                                      a,
                                      "66",
                                    ),
                                }
                              : {
                                  backgroundColor: m,
                                  border: "1.5px solid ".concat(a, "55"),
                                },
                            children: (0, n.jsx)("img", {
                              src: e,
                              alt: labels.moment + " " + (t + 1),
                              className:
                                "h-full w-full rounded-[1.45rem] object-cover object-center sm:rounded-[1.7rem]",
                              loading: "lazy",
                              draggable: !1,
                            }),
                          }),
                        },
                        e,
                      )
                    : null;
                }),
                w > 1
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: j,
                          "aria-label": labels.previous,
                          className:
                            "absolute left-1 top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#fcf8f0]/95 shadow-[0_4px_12px_rgba(61,43,31,0.18)] backdrop-blur transition hover:scale-110 active:scale-95 sm:left-3 sm:h-10 sm:w-10",
                          style: {
                            border: "1.5px solid ".concat(a, "77"),
                            color: o,
                          },
                          children: (0, n.jsx)(l.Z, {
                            className: "h-4 w-4 sm:h-5 sm:w-5",
                            strokeWidth: 2.4,
                          }),
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: N,
                          "aria-label": labels.next,
                          className:
                            "absolute right-1 top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#fcf8f0]/95 shadow-[0_4px_12px_rgba(61,43,31,0.18)] backdrop-blur transition hover:scale-110 active:scale-95 sm:right-3 sm:h-10 sm:w-10",
                          style: {
                            border: "1.5px solid ".concat(a, "77"),
                            color: o,
                          },
                          children: (0, n.jsx)(s.Z, {
                            className: "h-4 w-4 sm:h-5 sm:w-5",
                            strokeWidth: 2.4,
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            w > 1
              ? (0, n.jsx)("div", {
                  className: "mt-4 flex items-center justify-center gap-1.5",
                  children: t.map((e, t) =>
                    (0, n.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          (g(!0), v(t));
                        },
                        "aria-label": labels.slide + " " + (t + 1),
                        className: "h-1.5 rounded-full transition-all",
                        style: {
                          width: t === h ? 18 : 6,
                          backgroundColor: t === h ? a : "".concat(a, "44"),
                        },
                      },
                      t,
                    ),
                  ),
                })
              : null,
          ],
        });
  }
}
