// Recovered from the public Golden Letter demo; original module 5172.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return m;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(8606),
    s = a(9646),
    i = a(68920),
    o = a(14789),
    c = a(87262),
    d = a(35536),
    u = a(20693);
  function m(e) {
    let {
        items: t,
        title: a,
        tone: m = "royal",
        hideHeader: x = !1,
        compact: p = !1,
        lang: f = "en",
      } = e,
      h = (0, r.useMemo)(() => [...t], [t]);
    if (0 === h.length) return null;
    let v = (0, d.MH)(f),
      b = null != a ? a : v.programTimeline,
      g = "empire" === m,
      y = "lavender" === m,
      w = "arabian" === m,
      j = "beach" === m,
      N = "ivory-bloom" === m,
      k = "sage-bloom" === m,
      E = "emerald" === m,
      S = "petal" === m || w || j || N || k || E,
      C = j
        ? "#0b5563"
        : w
          ? "#7a4a2b"
          : N
            ? "#8a6d3b"
            : k
              ? "#4d6654"
              : E
                ? "#1f3a2b"
                : "#6b2c3f",
      T = j
        ? "#ef7f5b"
        : w
          ? "#c9a15a"
          : N || k
            ? "#c98f4a"
            : E
              ? "#b98a4a"
              : "#c9975a",
      M = "#3d1f06",
      L = (e) => ({ color: "".concat(C).concat(null != e ? e : "") });
    return (0, n.jsxs)("section", {
      className: p
        ? "px-0 py-0"
        : g || S
          ? "border-t px-6 py-16"
          : "px-6 py-16",
      style:
        !p && g
          ? { borderColor: "".concat(M, "22") }
          : !p && S
            ? { borderColor: "".concat(C, "22") }
            : void 0,
      children: [
        !x &&
          (0, n.jsxs)("div", {
            className:
              "mx-auto flex max-w-md flex-col items-center text-center",
            children: [
              (0, n.jsx)("span", {
                className:
                  "mb-4 flex h-12 w-12 items-center justify-center rounded-full border ".concat(
                    g || S ? "" : "border-gold-400/40 text-gold-300",
                  ),
                style: g
                  ? { borderColor: "".concat(M, "55"), color: M }
                  : S
                    ? { borderColor: "".concat(C, "55"), color: C }
                    : void 0,
                children: j
                  ? (0, n.jsx)(l.Z, { className: "h-5 w-5" })
                  : N || k
                    ? (0, n.jsx)(s.Z, { className: "h-5 w-5" })
                    : E
                      ? (0, n.jsx)(i.Z, { className: "h-5 w-5" })
                      : (0, n.jsx)(o.Z, { className: "h-5 w-5" }),
              }),
              (0, n.jsx)("h2", {
                className: ""
                  .concat(u.y, " ")
                  .concat(g || S ? "" : "text-gold-200"),
                style: g ? { color: M } : S ? { color: C } : void 0,
                children: b,
              }),
              (0, n.jsxs)("div", {
                className: "mt-4 mb-10 flex w-40 items-center gap-3",
                children: [
                  (0, n.jsx)("span", {
                    className: "h-px flex-1 ".concat(
                      g || S
                        ? ""
                        : "bg-gradient-to-r from-transparent to-gold-400/50",
                    ),
                    style: g
                      ? {
                          backgroundImage:
                            "linear-gradient(to right, transparent, ".concat(
                              M,
                              "88)",
                            ),
                        }
                      : S
                        ? {
                            backgroundImage:
                              "linear-gradient(to right, transparent, ".concat(
                                C,
                                "88)",
                              ),
                          }
                        : void 0,
                  }),
                  j
                    ? (0, n.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-4 w-4",
                        "aria-hidden": !0,
                        fill: T,
                        children: (0, n.jsx)("path", {
                          d: "M12 1.5c.8 0 1.3.9 2 2.7l1.4 3.8c.2.6.5.8 1.2 1l4 .6c1.8.2 2.5 1 2 2.3-.2.6-.8 1.2-1.8 2.1l-2.7 2.5c-.5.5-.6.9-.4 1.6l.9 3.7c.4 1.7-.4 2.4-1.9 1.6l-3.3-1.8c-.6-.3-1-.3-1.6 0l-3.3 1.8c-1.5.8-2.3.1-1.9-1.6l.9-3.7c.2-.7 0-1.1-.4-1.6L4.1 15c-1-.9-1.6-1.5-1.8-2.1-.4-1.3.2-2.1 2-2.3l4-.6c.7-.1 1-.4 1.2-1L12 4.2c.7-1.8 1.2-2.7 2-2.7Z",
                        }),
                      })
                    : N || k
                      ? (0, n.jsx)(s.Z, {
                          className: "h-4 w-4",
                          style: { color: T },
                          "aria-hidden": !0,
                        })
                      : E
                        ? (0, n.jsx)(i.Z, {
                            className: "h-4 w-4",
                            style: { color: T },
                            "aria-hidden": !0,
                          })
                        : (0, n.jsx)("span", {
                            className: "text-sm leading-none ".concat(
                              g || S ? "" : "text-gold-300",
                            ),
                            style: g ? { color: M } : S ? { color: T } : void 0,
                            "aria-hidden": !0,
                            children: "♥",
                          }),
                  (0, n.jsx)("span", {
                    className: "h-px flex-1 ".concat(
                      g || S
                        ? ""
                        : "bg-gradient-to-l from-transparent to-gold-400/50",
                    ),
                    style: g
                      ? {
                          backgroundImage:
                            "linear-gradient(to left, transparent, ".concat(
                              M,
                              "88)",
                            ),
                        }
                      : S
                        ? {
                            backgroundImage:
                              "linear-gradient(to left, transparent, ".concat(
                                C,
                                "88)",
                              ),
                          }
                        : void 0,
                  }),
                ],
              }),
            ],
          }),
        (0, n.jsxs)("ol", {
          className: "relative mx-auto max-w-md ps-2",
          children: [
            (0, n.jsx)("span", {
              "aria-hidden": !0,
              className: "absolute bottom-2 start-[11px] top-2 w-px ".concat(
                g ? "" : y ? "bg-[#44274B]/25" : S ? "" : "bg-gold-400/35",
              ),
              style: g
                ? { backgroundColor: "".concat(M, "40") }
                : j
                  ? {
                      width: "3px",
                      marginInlineStart: "-1px",
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, ".concat(
                          C,
                          "55 0 5px, transparent 5px 10px)",
                        ),
                    }
                  : S
                    ? { backgroundColor: "".concat(C, "40") }
                    : void 0,
            }),
            h.map((e) =>
              (0, n.jsxs)(
                "li",
                {
                  className: "relative flex gap-5 ".concat(
                    p ? "pb-7 last:pb-0" : "pb-10 last:pb-0",
                  ),
                  children: [
                    j
                      ? (0, n.jsx)("span", {
                          className:
                            "relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-[3px]",
                          style: {
                            borderColor: T,
                            backgroundColor: "#fffaf0",
                            boxShadow: "0 0 0 3px ".concat(C, "12"),
                          },
                          "aria-hidden": !0,
                        })
                      : (0, n.jsx)("span", {
                          className:
                            "relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ".concat(
                              g
                                ? ""
                                : y
                                  ? "bg-[#c4a35a] ring-transparent"
                                  : S
                                    ? "ring-transparent"
                                    : "bg-gold-300 ring-brand-950",
                            ),
                          style: g
                            ? {
                                backgroundColor: M,
                                boxShadow: "0 0 0 4px ".concat("#d9a24d"),
                              }
                            : S
                              ? { backgroundColor: T }
                              : void 0,
                        }),
                    (0, n.jsxs)("div", {
                      className: "min-w-0 flex-1 text-start",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "font-heading text-lg font-semibold sm:text-xl ".concat(
                              g
                                ? ""
                                : y
                                  ? "text-[#44274B]"
                                  : S
                                    ? ""
                                    : "text-ivory",
                            ),
                          style: g ? { color: M } : S ? L() : void 0,
                          children: e.name,
                        }),
                        (e.dateLabel || e.time) &&
                          (0, n.jsx)("p", {
                            className: "mt-1 text-sm ".concat(
                              g
                                ? ""
                                : y
                                  ? "text-[#44274B]/80"
                                  : S
                                    ? ""
                                    : "text-gold-100/80",
                            ),
                            style: g
                              ? { color: "#5a3510" }
                              : S
                                ? L("cc")
                                : void 0,
                            children: [e.dateLabel, (0, c.$q)(e.time, f)]
                              .filter(Boolean)
                              .join(", "),
                          }),
                        e.venue &&
                          (0, n.jsxs)("div", {
                            className:
                              "mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1",
                            children: [
                              (0, n.jsx)("p", {
                                className: "text-sm ".concat(
                                  g
                                    ? ""
                                    : y
                                      ? "text-[#44274B]/75"
                                      : S
                                        ? ""
                                        : "text-gold-100/70",
                                ),
                                style: g
                                  ? { color: "#6b4218" }
                                  : S
                                    ? L("bf")
                                    : void 0,
                                children: e.venue,
                              }),
                              e.mapLink &&
                                (0, n.jsx)("a", {
                                  href: e.mapLink,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "data-pdf-link": !0,
                                  className:
                                    "text-[11px] font-semibold uppercase tracking-wide underline-offset-2 transition hover:underline ".concat(
                                      g
                                        ? ""
                                        : y
                                          ? "text-[#44274B] hover:text-[#44274B]/75"
                                          : S
                                            ? "hover:opacity-75"
                                            : "text-gold-300 hover:text-gold-200",
                                    ),
                                  style: g ? { color: M } : S ? L() : void 0,
                                  children: v.getDirections,
                                }),
                            ],
                          }),
                        !e.venue &&
                          e.mapLink &&
                          (0, n.jsx)("a", {
                            href: e.mapLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-pdf-link": !0,
                            className:
                              "mt-2 inline-block text-[11px] font-semibold uppercase tracking-wide underline-offset-2 transition hover:underline ".concat(
                                g
                                  ? ""
                                  : y
                                    ? "text-[#44274B] hover:text-[#44274B]/75"
                                    : S
                                      ? "hover:opacity-75"
                                      : "text-gold-300 hover:text-gold-200",
                              ),
                            style: g ? { color: M } : S ? L() : void 0,
                            children: v.getDirections,
                          }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          ],
        }),
      ],
    });
  }
}
