import { MousePointer2 } from "lucide-react";
import weddingCopy from "../weddingCopy.js";
import WeddingFaq from "../WeddingFaq.jsx";
import CatamaranTour from "../CatamaranTour.jsx";
import WeddingSignature from "../WeddingSignature.jsx";
import "../wedding-details.css";
// Recovered from the public Golden Letter demo; original module 80743.
export default function (e, t, a) {
  a.d(t, {
    InvitationTemplate: function () {
      return n6;
    },
  });
  var n = a(57437),
    r = a(36800),
    l = a(2265),
    s = a(88252),
    i = a(71992),
    o = a(32059),
    c = a(39070),
    d = a(61267),
    u = a(1290),
    m = a(57201),
    x = a(88623),
    p = a(81706),
    f = a(40875),
    v = a(83774),
    b = a(77877),
    y = a(37679),
    w = a(48614),
    j = a(57741),
    N = a(9320),
    k = a(87262),
    E = a(35536),
    S = a(33013),
    C = a(18815),
    T = a(83260),
    M = a(5172),
    _ = a(23247),
    D = a(64244),
    z = a(62592),
    R = a(69678),
    Z = a(80258),
    B = a(43519),
    I = a(20693);
  var F = a(87946),
    O = a(74434);
  var W = a(46853),
    H = a(40365),
    q = a(84901),
    Y = a(45329);
  var ei = a(56582),
    eo = a(28231),
    ec = a(74694);
  let eM = "20260930",
    eL = "/assets/invitations/golden-letter/cover.mp4?v=".concat(eM),
    e_ = "/assets/invitations/golden-letter/cover.webp?v=".concat(eM),
    eD = "/assets/invitations/golden-letter/content_bg.webp?v=".concat(eM),
    ez = "/assets/invitations/golden-letter/lantern.webp?v=".concat(eM),
    eR = "/assets/invitations/golden-letter/scratch.webp?v=".concat(eM),
    eZ =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    eB = "#efe4c9";
  function eI(e, t, a) {
    if (!e) return "";
    let n = new Date("".concat(e, "T00:00:00"));
    if (Number.isNaN(n.getTime())) return e;
    let r = n.toLocaleDateString((0, j.Io)(t, a), {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return "ar" === t ? r : r.toUpperCase();
  }
  function eA(e, t, a) {
    if (!e) return null;
    let n = new Date("".concat(e, "T00:00:00"));
    return Number.isNaN(n.getTime())
      ? null
      : n.toLocaleDateString((0, j.Io)(t, a), {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
  }
  function eF(e) {
    return (
      null != e &&
      !!e.trim() &&
      !Number.isNaN(new Date("".concat(e.trim(), "T00:00:00")).getTime())
    );
  }
  function eO(e) {
    if (null != e) return String(e).trim() || void 0;
  }
  function eP(e) {
    let {
        text: t,
        active: a,
        instant: r = !1,
        letterMs: s = 130,
        onDone: i,
      } = e,
      [o, c] = (0, l.useState)(0);
    (0, l.useEffect)(() => {
      let e;
      if (r || !a) return;
      let n = 0,
        l = () => {
          if ((c((n += 1)), n >= t.length)) {
            null == i || i();
            return;
          }
          e = setTimeout(l, s);
        };
      return ((e = setTimeout(l, s)), () => clearTimeout(e));
    }, [a, r, t, s, i]);
    let d = r || (a && o >= t.length) ? t : a ? t.slice(0, o) : "",
      u = a && !r && o < t.length;
    return (0, n.jsxs)("span", {
      "aria-label": t,
      children: [
        (0, n.jsx)("span", {
          "aria-hidden": !0,
          children: d || "​",
        }),
        u &&
          (0, n.jsx)("span", {
            "aria-hidden": !0,
            className:
              "ml-0.5 inline-block w-[0.06em] animate-pulse bg-[#e9c877]/90 align-baseline",
            style: {
              height: "0.9em",
            },
          }),
      ],
    });
  }
  function eU(e) {
    let { side: t, className: a = "" } = e;
    return (0, n.jsxs)("div", {
      "aria-hidden": !0,
      className: "pointer-events-none absolute -top-3 z-0 "
        .concat("left" === t ? "left-0 sm:left-4" : "right-0 sm:right-4", " ")
        .concat(a),
      children: [
        (0, n.jsx)(y.E.span, {
          className:
            "absolute left-1/2 top-7 h-24 w-24 -translate-x-1/2 rounded-full bg-[#c9a15a]/25 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl",
          animate: {
            opacity: [0.35, 0.75, 0.35],
            scale: [0.9, 1.06, 0.9],
          },
          transition: {
            duration: 2.4,
            repeat: 1 / 0,
            ease: "easeInOut",
          },
        }),
        (0, n.jsx)(y.E.img, {
          src: ez,
          alt: "",
          draggable: !1,
          className:
            "relative h-16 w-auto opacity-95 drop-shadow-[0_0_20px_rgba(233,200,119,0.4)] sm:h-32",
          style: {
            transformOrigin: "50% 0%",
          },
          animate: {
            rotate: [-9, 9, -9],
            y: [0, 10, 0],
          },
          transition: {
            rotate: {
              duration: 1.85,
              repeat: 1 / 0,
              ease: "easeInOut",
            },
            y: {
              duration: 2.35,
              repeat: 1 / 0,
              ease: "easeInOut",
            },
          },
        }),
      ],
    });
  }
  function eW(e) {
    let {
      topPct: t,
      side: a,
      floatY: r,
      sizeClass: l,
      swayDuration: s,
      swayDelay: i = 0,
    } = e;
    return (0, n.jsxs)(y.E.div, {
      "aria-hidden": !0,
      className: "pointer-events-none absolute ".concat(
        "left" === a ? "left-1 sm:left-3" : "right-1 sm:right-3",
      ),
      style: {
        top: "".concat(t, "%"),
      },
      animate: {
        y: [0, -r, 0],
      },
      transition: {
        duration: 0.8 * s,
        repeat: 1 / 0,
        ease: "easeInOut",
        delay: i,
      },
      children: [
        (0, n.jsx)(y.E.span, {
          className:
            "absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full bg-[#c9a15a]/20 blur-3xl sm:h-44 sm:w-44",
          animate: {
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.08, 0.9],
          },
          transition: {
            duration: 5,
            repeat: 1 / 0,
            ease: "easeInOut",
            delay: i,
          },
        }),
        (0, n.jsx)(y.E.img, {
          src: ez,
          alt: "",
          draggable: !1,
          className:
            "relative w-auto opacity-90 drop-shadow-[0_0_24px_rgba(233,200,119,0.35)] ".concat(
              l,
            ),
          style: {
            transformOrigin: "50% 0%",
          },
          animate: {
            rotate: [-7, 7, -7],
          },
          transition: {
            duration: 0.6 * s,
            repeat: 1 / 0,
            ease: "easeInOut",
            delay: i,
          },
        }),
      ],
    });
  }
  function eH() {
    return (0, n.jsx)("div", {
      "aria-hidden": !0,
      className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
      children: [
        {
          topPct: 4,
          side: "right",
          floatY: 30,
          sizeClass: "h-28 sm:h-36",
          swayDuration: 7,
        },
        {
          topPct: 22,
          side: "left",
          floatY: 40,
          sizeClass: "h-24 sm:h-32",
          swayDuration: 8,
          swayDelay: 1.1,
        },
        {
          topPct: 44,
          side: "right",
          floatY: 34,
          sizeClass: "h-32 sm:h-40",
          swayDuration: 9,
          swayDelay: 0.5,
        },
        {
          topPct: 66,
          side: "left",
          floatY: 44,
          sizeClass: "h-28 sm:h-36",
          swayDuration: 7.5,
          swayDelay: 1.6,
        },
        {
          topPct: 86,
          side: "right",
          floatY: 30,
          sizeClass: "h-24 sm:h-32",
          swayDuration: 8.5,
          swayDelay: 0.9,
        },
      ].map((e, t) =>
        (0, n.jsx)(
          eW,
          {
            ...e,
          },
          t,
        ),
      ),
    });
  }
  function eq(e) {
    let { children: t, isStatic: a, order: r = 0, className: l } = e;
    return a
      ? (0, n.jsx)("div", {
          className: l,
          children: t,
        })
      : (0, n.jsx)(y.E.div, {
          className: l,
          initial: d.nI,
          whileInView: d.oA,
          viewport: {
            once: !0,
            amount: 0.25,
          },
          transition: (0, d.oJ)(0.1 + r * d.A7),
          children: t,
        });
  }
  function eY(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
      className:
        "relative flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#faf6eb] via-[#f3ead6] to-[#efe0c4] px-3 py-4 text-center",
      children: [
        (0, n.jsx)("span", {
          "aria-hidden": !0,
          className:
            "pointer-events-none absolute inset-2 rounded-[1.2rem] border border-[#c9a15a]/45",
        }),
        (0, n.jsx)("span", {
          "aria-hidden": !0,
          className:
            "pointer-events-none absolute inset-[0.55rem] rounded-[1rem] border border-[#c9a15a]/15",
        }),
        [
          "left-3 top-3",
          "right-3 top-3",
          "left-3 bottom-3",
          "right-3 bottom-3",
        ].map((e) =>
          (0, n.jsx)(
            "span",
            {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute h-2 w-2 rotate-45 border border-[#c9a15a]/60 bg-[#c9a15a]/20 ".concat(
                  e,
                ),
            },
            e,
          ),
        ),
        t,
      ],
    });
  }
  function eK(e) {
    let {
        event: t,
        lang: a,
        dateFormat: r,
        isStatic: s,
        scratchSrc: i,
        revealSrc: o,
        order: c = 0,
        onRevealed: u,
      } = e,
      [m, x] = (0, l.useState)(s || t.completed),
      p = (0, l.useRef)(s),
      f = eI(t.date, a, r),
      h = (0, k.$q)(t.time, a),
      g = [t.venue, t.address, t.city].filter(Boolean).join(", "),
      j = (0, E.MH)(a),
      N = j.scratchToRevealEvent.replace("{event}", t.name),
      S = (0, l.useCallback)(() => {
        (x(!0), p.current || ((p.current = !0), null == u || u()));
      }, [u]);
    return (
      (0, l.useEffect)(() => {
        (s || t.completed) &&
          !p.current &&
          ((p.current = !0), null == u || u());
      }, [s, t.completed, u]),
      (0, n.jsx)(eq, {
        isStatic: s,
        order: c,
        className: "w-full",
        children: (0, n.jsxs)("div", {
          className: "wedding-party mx-auto flex w-full max-w-sm flex-col items-center",
          children: [
            (0, n.jsx)("h3", {
              className: "mb-5 text-center ".concat(I.y, " text-[#8a6236]"),
              children: t.name,
            }),
            t.completed &&
              (0, n.jsxs)("div", {
                className:
                  "mb-6 space-y-3 text-center text-sm leading-relaxed text-[#7a4a2b]",
                children: [
                  (0, n.jsx)("p", { children: weddingCopy[a].completed }),
                  (0, n.jsx)("a", {
                    href: "#ceremony-gallery",
                    className: "inline-block underline underline-offset-4",
                    children: weddingCopy[a].gallery,
                  }),
                ],
              }),
            t.isMain &&
              (0, n.jsx)("p", {
                className:
                  "mb-6 text-center text-sm leading-relaxed text-[#7a4a2b]",
                children: weddingCopy[a].invitation,
              }),
            (0, n.jsx)(eo.Z, {
              scratchSrc: i,
              revealSrc: o,
              burstColor: "#c9a15a",
              fallbackColor: "#efe0c4",
              popOnReveal: !0,
              startRevealed: s || t.completed,
              autoRevealAtTop: !s,
              onReveal: S,
              hint: N,
              revealButtonLabel: j.revealDateButton,
              hintClassName:
                "text-center text-[11px] font-medium tracking-wide text-[#8a6236]/75",
              buttonClassName:
                "rounded-full border border-[#c9a15a]/35 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#8a6236] transition hover:border-[#c9a15a]/60 hover:bg-[#c9a15a]/10",
              className: "wedding-party__scratch mx-auto w-full",
              cardClassName:
                "relative mx-auto aspect-square w-full select-none overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_-12px_rgba(122,74,43,0.25)]",
              children: (0, n.jsxs)(eY, {
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "relative max-w-[15rem] shrink-0 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#c9a15a]/90",
                    children: t.name,
                  }),
                  (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className:
                      "relative my-0.5 h-px w-14 shrink-0 bg-gradient-to-r from-transparent via-[#c9a15a]/70 to-transparent",
                  }),
                  f &&
                    (0, n.jsx)("p", {
                      className:
                        "relative shrink-0 font-heading text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7a4a2b] sm:text-xs",
                      style: {
                        fontFeatureSettings: '"lnum" 1, "tnum" 1',
                      },
                      children: f,
                    }),
                  h
                    ? (0, n.jsx)("p", {
                        className:
                          "relative shrink-0 text-[11px] text-[#7a4a2b]/80 sm:text-xs",
                        children: h,
                      })
                    : null,
                  t.venue &&
                    (0, n.jsx)("p", {
                      className:
                        "relative mt-0.5 max-w-[14rem] shrink-0 text-[10px] leading-snug text-[#7a4a2b]/65 sm:text-[11px]",
                      children: t.venue,
                    }),
                ],
              }),
            }),
            (0, n.jsx)(w.M, {
              children:
                m &&
                (0, n.jsxs)(y.E.div, {
                  className: "mt-6 w-full space-y-2 text-center",
                  initial: !s && d.nI,
                  animate: d.oA,
                  transition: (0, d.oJ)(0.12),
                  children: [
                    f &&
                      (0, n.jsx)("p", {
                        className:
                          "font-heading text-sm text-[#7a4a2b] sm:text-base",
                        style: {
                          fontFeatureSettings: '"lnum" 1, "tnum" 1',
                        },
                        children: f,
                      }),
                    h
                      ? (0, n.jsx)("p", {
                          className: "text-sm text-[#7a4a2b]/85 sm:text-base",
                          children: h,
                        })
                      : null,
                    g &&
                      (0, n.jsxs)("div", {
                        className: "space-y-2 pt-1",
                        children: [
                          (0, n.jsxs)("p", {
                            className:
                              "mx-auto flex max-w-xs items-start justify-center gap-2 text-sm text-[#7a4a2b]/80",
                            children: [
                              (0, n.jsx)(v.Z, {
                                className:
                                  "mt-0.5 h-4 w-4 shrink-0 text-[#c9a15a]",
                              }),
                              (0, n.jsx)("span", {
                                children: g,
                              }),
                            ],
                          }),
                          t.mapLink &&
                            (0, n.jsxs)("a", {
                              href: t.mapLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "data-pdf-link": !0,
                              className:
                                "inline-flex items-center gap-2 rounded-full border border-[#c9a15a]/40 px-4 py-2 text-xs font-semibold text-[#8a6236] transition hover:bg-[#c9a15a]/10",
                              children: [
                                (0, n.jsx)(b.Z, {
                                  className: "h-3.5 w-3.5",
                                }),
                                (0, E.MH)(a).viewOnMaps,
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
            }),
          ],
        }),
      })
    );
  }
  function eV(e) {
    var t, a, r, s, o, c;
    let { invitation: d, mode: u = "live" } = e,
      heroBackground = d.assets?.heroBackground || e_,
      h = "pdf" === u,
      g = "preview" === u || "pdf" === u,
      j = (0, m.H)(u),
      A = (0, E.vw)(d.language),
      P = "ar" === A,
      U = (0, E.MH)(A),
      {
        first: K,
        second: V,
        firstParents: G,
        secondParents: $,
      } = (0, R.Ux)(d.couple),
      X = Math.max(K.length, V.length),
      J =
        X > 20
          ? "text-3xl sm:text-4xl"
          : X > 12
            ? "text-4xl sm:text-5xl"
            : "text-6xl sm:text-7xl",
      Q = (0, q.fn)(X),
      ee =
        X > 16
          ? "text-2xl sm:text-3xl"
          : X > 10
            ? "text-3xl sm:text-4xl"
            : "text-4xl sm:text-6xl",
      et = (0, z.OK)(d.assets),
      ea = (0, k.$q)(d.event.time, A),
      en = eA(d.event.date, A, d.dateFormat),
      er = (d.event.occasionType || U.weddingFallback).slice(0, 24),
      el = (0, E.ho)(A, {
        eventName: er,
        hasMultipleEvents: (0, E.Wf)(d),
      }),
      es = (0, l.useMemo)(() => {
        let e = [];
        for (let [t, a] of (eF(d.event.date) &&
          e.push({
            id: "main",
            name: er,
            date: d.event.date,
            time: eO(d.event.time),
            venue: d.event.venueName || void 0,
            address: d.event.address || void 0,
            city: d.event.city || void 0,
            mapLink: d.event.mapLink || void 0,
            isMain: !0,
          }),
        d.additionalEvents.entries()))
          eF(a.date) &&
            e.push({
              id: (0, i.xM)(a, t),
              name:
                (a.name || U.functionFallback).trim().slice(0, 40) ||
                U.functionFallback,
              date: a.date,
              time: eO(a.time),
              venue: (0, Y.o)(a, d.event) || void 0,
              mapLink: (0, Y.Z)(a, d.event) || void 0,
              isMain: !1,
              completed: !!a.completed,
            });
        return (0, i.Hr)(e, d.event, d.additionalEvents, d.mainEventOrder);
      }, [
        d.event,
        d.event.date,
        d.event.time,
        d.event.venueName,
        d.event.address,
        d.event.city,
        d.event.mapLink,
        d.additionalEvents,
        d.mainEventOrder,
        er,
        U.functionFallback,
      ]),
      ed = es.length > 0,
      eu = es.find((event) => event.isMain),
      em = (0, F.zu)() && !g,
      [ex, ep] = (0, l.useState)(g),
      [ef, eh] = (0, l.useState)(g ? 100 : 0),
      [ev, eb] = (0, l.useState)(g),
      [eg, ey] = (0, l.useState)(g),
      [ew, ej] = (0, l.useState)(g),
      [eN, ek] = (0, l.useState)(g),
      [eE, eS] = (0, l.useState)(g),
      [eC, eT] = (0, l.useState)(g),
      [eM, eW] = (0, l.useState)(g),
      [eV, eG] = (0, l.useState)(!1),
      [e$, eX] = (0, l.useState)(g),
      [eJ, eQ] = (0, l.useState)(!1),
      [e0, e1] = (0, l.useState)(!1),
      [e2, e5] = (0, l.useState)(() =>
        g ? new Set(es.map((e) => e.id)) : new Set(),
      ),
      e4 = (0, l.useCallback)((e) => {
        e5((t) => {
          if (t.has(e)) return t;
          let a = new Set(t);
          return (a.add(e), a);
        });
      }, []),
      e3 = !ed || es.every((e) => e2.has(e.id)),
      e6 = (0, l.useRef)(null),
      e8 = (0, l.useRef)(null),
      e7 = (0, l.useRef)(null),
      e9 = (0, l.useRef)(null),
      te = (0, l.useRef)(!1),
      tt = (0, l.useRef)(!1),
      ta = (0, l.useRef)(!1),
      tn = (0, l.useRef)(null),
      tr = (0, l.useRef)(null),
      tl = (0, l.useRef)(null),
      ts = (0, l.useRef)(null),
      ti = (0, l.useMemo)(() => {
        let e = {
            id: "main",
            name: er,
            date: d.event.date || void 0,
            dateLabel: en,
            time: ea || void 0,
            venue: d.event.venueName || void 0,
            mapLink: d.event.mapLink || void 0,
          },
          t = d.additionalEvents.map((e) => ({
            id: e.id,
            name: e.name || U.functionFallback,
            date: e.date || void 0,
            dateLabel: eA(e.date, A, d.dateFormat),
            time: (0, k.$q)(e.time, A) || void 0,
            venue: (0, Y.o)(e, d.event) || void 0,
            mapLink: (0, Y.Z)(e, d.event) || void 0,
          }));
        return (0, N.q)(e, t, d.mainEventOrder, d.additionalEvents, d.event);
      }, [
        en,
        d.event.date,
        d.additionalEvents,
        d.event.mapLink,
        d.event.venueName,
        ea,
        er,
        A,
        U,
      ]),
      to = ti.length > 1;
    ((0, l.useEffect)(() => {
      if (g) return;
      let e = new AbortController(),
        t = !1;
      (async () => {
        (await (0, Z.e)(
          [
            {
              url: e_,
              weight: 1,
            },
          ],
          (e) => {
            t || eh(Math.round(e));
          },
          e.signal,
        ),
          t || (eh(100), ep(!0)));
      })();
      let a = window.setTimeout(() => {
        t || (eh(100), ep(!0));
      }, 8e3);
      return () => {
        ((t = !0), e.abort(), window.clearTimeout(a));
      };
    }, [g]),
      (0, l.useEffect)(() => {
        g ||
          [eD, ez, heroBackground].forEach((e) => {
            new Image().src = e;
          });
      }, [g, heroBackground]),
      (0, l.useEffect)(() => {
        if (g) return;
        let e = history.scrollRestoration;
        return (
          (history.scrollRestoration = "manual"),
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          }),
          () => {
            history.scrollRestoration = e;
          }
        );
      }, [g]),
      (0, l.useEffect)(() => {
        if (!j || e$) return;
        let e = document.documentElement,
          t = document.body;
        return (
          ts.current ||
            (ts.current = {
              html: e.style.overflow,
              body: t.style.overflow,
            }),
          (e.style.overflow = "hidden"),
          (t.style.overflow = "hidden"),
          (e.style.overscrollBehavior = "none"),
          (t.style.overscrollBehavior = "none"),
          () => {
            let a = ts.current;
            a &&
              ((e.style.overflow = a.html),
              (t.style.overflow = a.body),
              (e.style.overscrollBehavior = ""),
              (t.style.overscrollBehavior = ""),
              (ts.current = null));
          }
        );
      }, [e$, g, u, j]),
      (0, l.useEffect)(() => {
        if (g) return;
        let e = e8.current;
        e && (e.muted = eJ);
        let t = e6.current;
        t && (t.muted = eJ);
      }, [eJ, g]),
      (0, l.useEffect)(() => {
        if (g) return;
        let e = () => {
          let e = e8.current,
            t = e6.current;
          if (document.hidden) {
            (null == e || e.pause(), null == t || t.pause());
            return;
          }
          (e && ta.current && !eJ && ev && e.play().catch(() => {}),
            t && ev && !ew && !tt.current && t.play().catch(() => {}));
        };
        return (
          document.addEventListener("visibilitychange", e),
          () => document.removeEventListener("visibilitychange", e)
        );
      }, [g, eJ, ev, ew]),
      (0, l.useEffect)(() => {
        let e = e8.current;
        return () => {
          (tn.current && clearTimeout(tn.current),
            tr.current && clearTimeout(tr.current),
            tl.current && clearTimeout(tl.current),
            null == e || e.pause());
        };
      }, []));
    let tc = (0, l.useCallback)(() => eS(!0), []),
      td = (0, l.useCallback)(() => eW(!0), []);
    ((0, l.useEffect)(() => {
      if (!g && eE && !eC)
        return (
          (tn.current = setTimeout(() => eT(!0), 500)),
          () => {
            tn.current && clearTimeout(tn.current);
          }
        );
    }, [eE, eC, g]),
      (0, l.useEffect)(() => {
        if (!g && eM)
          return (
            (tr.current = setTimeout(() => {
              (eG(!0), eX(!0), tl.current && clearTimeout(tl.current));
            }, 900)),
            () => {
              tr.current && clearTimeout(tr.current);
            }
          );
      }, [eM, g]));
    let tu = () => {
        if (ta.current || !et) return;
        let e = e8.current;
        e &&
          ((ta.current = !0),
          (e.currentTime = et.startSec),
          (e.muted = eJ),
          (e.volume = 0),
          e.play().catch(() => {
            ta.current = !1;
          }));
      },
      tm = () => {
        let e = e8.current;
        e &&
          et &&
          ((e.currentTime = et.startSec),
          (e.volume = 0),
          e.play().catch(() => {}));
      },
      tx = () => {
        te.current ||
          ((te.current = !0),
          ek(!0),
          (tl.current = setTimeout(() => {
            (eG(!0), eX(!0));
          }, 25e3)));
      },
      tp = () => {
        let e = e6.current;
        if (e && (e.pause(), Number.isFinite(e.duration) && e.duration > 0))
          try {
            e.currentTime = Math.max(0, e.duration - 0.05);
          } catch (e) {}
        ej(!0);
      },
      tf = () => {
        (e1(!0), eb(!0), ey(!0), ej(!0), tx());
      },
      th = async () => {
        if (ev || !ex) return;
        tu();
        let e = e6.current;
        if (!e || e0) {
          tf();
          return;
        }
        try {
          ((e.muted = eJ),
            e.currentTime > 0.05 && (e.currentTime = 0),
            await e.play(),
            eb(!0));
        } catch (e) {
          tf();
        }
      },
      tv = () => {
        var e;
        (eG(!1),
          null === (e = e7.current) ||
            void 0 === e ||
            e.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }));
      },
      tb = !g && ex && !ev,
      tg = (!ev || e0 || !eg) && !ew;
    return (
      (0, l.useEffect)(() => {
        if (!tb) return;
        const openFromBackground = (event) => {
          if (
            event.target instanceof Element &&
            event.target.closest(
              'button, a, input, select, textarea, [role="menu"], [role="dialog"]',
            )
          )
            return;
          th();
        };
        document.addEventListener("click", openFromBackground);
        return () => document.removeEventListener("click", openFromBackground);
      }, [tb, th]),
      (0, O.Q)(e9, !g && eV),
      (0, l.useEffect)(() => {
        if (g) return;
        let e = document.documentElement,
          t = document.body,
          a = em ? eB : "#f7f0e4",
          n = {
            htmlBg: e.style.backgroundColor,
            bodyBg: t.style.backgroundColor,
            htmlColor: e.style.background,
            bodyColor: t.style.background,
          };
        return (
          (e.style.backgroundColor = a),
          (t.style.backgroundColor = a),
          (e.style.background = a),
          (t.style.background = a),
          () => {
            ((e.style.backgroundColor = n.htmlBg),
              (t.style.backgroundColor = n.bodyBg),
              (e.style.background = n.htmlColor),
              (t.style.background = n.bodyColor));
          }
        );
      }, [g, em]),
      (0, n.jsx)("div", {
        dir: P ? "rtl" : "ltr",
        lang: A,
        className: ""
          .concat((0, q.kE)(d), " ")
          .concat(em ? "flex min-h-[100svh] justify-center" : ""),
        style: em
          ? {
              backgroundColor: eB,
            }
          : void 0,
        children: (0, n.jsxs)("div", {
          className: "relative w-full bg-[#f7f0e4] text-[#7a4a2b]",
          style: em ? F.po : void 0,
          children: [
            !g &&
              (0, n.jsx)(B.Z, {
                show: !ex,
                progress: ef,
                variant: "golden-letter",
                lang: A,
              }),
            !g &&
              et &&
              (0, n.jsx)("audio", {
                ref: e8,
                src: et.url,
                preload: "metadata",
                muted: eJ,
                onTimeUpdate: () => {
                  let e = e8.current;
                  if (!e || !et) return;
                  let t = et.startSec,
                    a =
                      Number.isFinite(e.duration) && e.duration > t
                        ? e.duration
                        : null,
                    n = et.endSec
                      ? Math.min(et.endSec, null != a ? a : et.endSec)
                      : a;
                  if (!n || n <= t) return;
                  if (e.currentTime >= n - 0.05) {
                    tm();
                    return;
                  }
                  let r = Math.min(5, (n - t) / 2),
                    l = (e.currentTime - t) / r,
                    s = (n - e.currentTime) / r;
                  e.volume = Math.max(0, Math.min(1, l, s));
                },
                onEnded: tm,
              }),
            !g &&
              ex &&
              et &&
              (0, n.jsx)("button", {
                type: "button",
                onClick: () => eQ((e) => !e),
                className:
                  "fixed right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a15a]/40 bg-[#f7f0e4]/90 text-[#7a4a2b] backdrop-blur-sm transition hover:bg-[#efe4c9]/95",
                "data-invitation-sound-toggle": !0,
                "aria-label": eJ ? U.unmuteSound : U.muteSound,
                children: eJ
                  ? (0, n.jsx)(x.Z, {
                      className: "h-4 w-4",
                    })
                  : (0, n.jsx)(p.Z, {
                      className: "h-4 w-4",
                    }),
              }),
            (0, n.jsxs)("section", {
              ref: e9,
              className:
                "relative z-20 flex h-[100svh] max-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#f7f0e4] px-5 text-center "
                  .concat(h ? "h-[900px] max-h-[900px]" : "", " ")
                  .concat(tb ? "cursor-pointer" : ""),
              children: [
                !g &&
                  ex &&
                  (0, n.jsx)("video", {
                    ref: e6,
                    className: "absolute inset-0 h-full w-full object-cover",
                    src: eL,
                    poster: e_,
                    muted: !0,
                    playsInline: !0,
                    preload: "metadata",
                    onPlaying: () => ey(!0),
                    onTimeUpdate: () => {
                      let e = e6.current;
                      e &&
                        Number.isFinite(e.duration) &&
                        !(e.duration <= 0) &&
                        (e.currentTime >= 6 ||
                          e.duration - e.currentTime <= 1.5) &&
                        tx();
                    },
                    onEnded: () => {
                      tt.current || ((tt.current = !0), tp(), tx());
                    },
                    onError: tf,
                  }),
                (g || tg) &&
                  (0, n.jsx)("img", {
                    src: g ? heroBackground : e_,
                    alt: "",
                    className:
                      "absolute inset-0 z-[1] h-full w-full object-cover",
                    draggable: !1,
                  }),
                !g &&
                  eN &&
                  (0, n.jsx)(y.E.img, {
                    src: heroBackground,
                    alt: "",
                    "data-invitation-hero-background": true,
                    className:
                      "pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover",
                    draggable: !1,
                    initial: { opacity: 0, scale: 1.035 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1.4, ease: "easeOut" },
                  }),
                (eN || g) &&
                  (0, n.jsx)(y.E.div, {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute inset-0 z-[2]",
                    style: {
                      background:
                        "linear-gradient(180deg, rgba(24,28,35,0.18), rgba(24,28,35,0.42) 38%, rgba(24,28,35,0.38) 65%, rgba(24,28,35,0.2))",
                    },
                    initial: !g && {
                      opacity: 0,
                    },
                    animate: {
                      opacity: 1,
                    },
                    transition: {
                      duration: 1.2,
                      ease: "easeInOut",
                    },
                  }),
                eN &&
                  (0, n.jsxs)(y.E.div, {
                    className: "pointer-events-none absolute inset-0 z-[3]",
                    initial: !g && {
                      opacity: 0,
                    },
                    animate: {
                      opacity: 1,
                    },
                    transition: {
                      duration: 1.4,
                    },
                    children: [
                      (0, n.jsx)(eU, {
                        side: "left",
                        className:
                          "top-[10%] sm:top-[12%] [&_img]:!h-12 sm:[&_img]:!h-20",
                      }),
                      (0, n.jsx)(eU, {
                        side: "right",
                        className:
                          "top-[10%] sm:top-[12%] [&_img]:!h-12 sm:[&_img]:!h-20",
                      }),
                    ],
                  }),
                (0, n.jsx)(w.M, {
                  children:
                    tb &&
                    (0, n.jsxs)(y.E.button, {
                      type: "button",
                      "aria-label": U.tapToOpenAria,
                      className:
                        "absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-end gap-2 pb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-[#e9c877]",
                      initial: {
                        opacity: 0,
                        y: 12,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                      },
                      exit: {
                        opacity: 0,
                        scale: 0.96,
                      },
                      transition: {
                        duration: 0.45,
                      },
                      onClick: (e) => {
                        (e.stopPropagation(), th());
                      },
                      children: [
                        (0, n.jsx)(y.E.span, {
                          className:
                            "flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c9a15a] bg-[#2a1f10]/45 backdrop-blur-[2px]",
                          animate: {
                            scale: [1, 1.06, 1],
                          },
                          transition: {
                            duration: 2.2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: (0, n.jsx)(MousePointer2, {
                            "aria-hidden": !0,
                            className: "h-6 w-6 text-[#e9c877]",
                          }),
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8efd6]",
                          children: U.tapToOpen,
                        }),
                      ],
                    }),
                }),
                eN &&
                  (0, n.jsxs)(y.E.div, {
                    className:
                      "relative z-10 mx-auto flex w-full min-w-0 max-w-[22rem] flex-col items-center px-4 pb-16 pt-10 sm:max-w-md",
                    initial: !g && {
                      opacity: 0,
                      y: 18,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                    },
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    children: [
                      (0, ei.br)(d)
                        ? (0, n.jsx)("div", {
                            className: "mb-3 w-full min-w-0 px-1 sm:mb-4",
                            children: (0, n.jsx)(ec.Z, {
                              className: "text-[#f8efd6]",
                              maxPx: 34,
                              minPx: 18,
                            }),
                          })
                        : null,
                      (0, n.jsx)("p", {
                        className:
                          "w-full max-w-xs text-center font-heading text-[11px] font-semibold uppercase leading-relaxed tracking-[0.32em] text-[#f8efd6] sm:text-xs",
                        children: el,
                      }),
                      (0, n.jsx)("h1", {
                        className:
                          "mt-3 w-full min-h-[1.1em] break-words text-center font-script leading-tight text-[#fff8e8] ".concat(
                            J,
                          ),
                        children: (0, n.jsx)(eP, {
                          text: K,
                          active: eN,
                          instant: g,
                          onDone: tc,
                        }),
                      }),
                      (0, n.jsx)(w.M, {
                        children:
                          G &&
                          eE &&
                          (0, n.jsx)(y.E.p, {
                            className:
                              "font-parents mt-1.5 w-full max-w-[17rem] text-balance text-center text-[#f8efd6] whitespace-pre-line ".concat(
                                Q,
                              ),
                            initial: !g && {
                              opacity: 0,
                            },
                            animate: {
                              opacity: 1,
                            },
                            transition: {
                              duration: 0.8,
                            },
                            children: G,
                          }),
                      }),
                      (0, n.jsx)(w.M, {
                        children:
                          eE &&
                          (0, n.jsx)(y.E.span, {
                            className:
                              "my-1.5 font-script text-2xl text-[#e9c877] sm:text-3xl",
                            initial: !g && {
                              opacity: 0,
                              scale: 0.8,
                            },
                            animate: {
                              opacity: 1,
                              scale: 1,
                            },
                            transition: {
                              duration: 0.7,
                            },
                            children: A === "ar" ? "و" : "&",
                          }),
                      }),
                      (0, n.jsx)("h2", {
                        className:
                          "w-full min-h-[1.1em] break-words text-center font-script leading-tight text-[#fff8e8] ".concat(
                            J,
                          ),
                        children: (0, n.jsx)(eP, {
                          text: V,
                          active: eC,
                          instant: g,
                          onDone: td,
                        }),
                      }),
                      (0, n.jsx)(w.M, {
                        children:
                          $ &&
                          eM &&
                          (0, n.jsx)(y.E.p, {
                            className:
                              "font-parents mt-1.5 w-full max-w-[17rem] text-balance text-center text-[#f8efd6] whitespace-pre-line ".concat(
                                Q,
                              ),
                            initial: !g && {
                              opacity: 0,
                            },
                            animate: {
                              opacity: 1,
                            },
                            transition: {
                              duration: 0.8,
                            },
                            children: $,
                          }),
                      }),
                    ],
                  }),
                (0, n.jsx)(w.M, {
                  children:
                    !g &&
                    eV &&
                    (0, n.jsxs)(y.E.button, {
                      type: "button",
                      className:
                        "absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[#f8efd6]",
                      initial: {
                        opacity: 0,
                        y: 8,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                      },
                      exit: {
                        opacity: 0,
                      },
                      transition: {
                        duration: 0.7,
                      },
                      "aria-label": U.scrollToEvent,
                      onClick: (e) => {
                        (e.stopPropagation(), tv());
                      },
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "text-xs font-semibold uppercase tracking-[0.3em] text-[#f8efd6]",
                          children: U.scroll,
                        }),
                        (0, n.jsx)(y.E.span, {
                          animate: {
                            y: [0, 7, 0],
                          },
                          transition: {
                            duration: 1.6,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: (0, n.jsx)(f.Z, {
                            className: "h-7 w-7 stroke-[2.5] text-[#f8efd6]",
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              ref: e7,
              className:
                "relative z-10 bg-[#f7f0e4] transition-opacity duration-700 ".concat(
                  e$ ? "opacity-100" : "pointer-events-none opacity-0",
                ),
              "aria-hidden": !e$,
              children: [
                g
                  ? (0, n.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-0 z-0 bg-[#f7f0e4]",
                      style: {
                        backgroundImage: "url(".concat(eD, ")"),
                        backgroundSize: "100% auto",
                        backgroundRepeat: "repeat-y",
                        backgroundPosition: "top center",
                      },
                    })
                  : (0, n.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none sticky top-0 z-0 -mb-[100dvh] h-[100dvh]",
                      children: (0, n.jsx)("div", {
                        className:
                          "h-full w-full bg-[#f7f0e4] bg-cover bg-center",
                        style: {
                          backgroundImage: "url(".concat(eD, ")"),
                        },
                      }),
                    }),
                !g && (0, n.jsx)(eH, {}),
                (0, n.jsxs)("div", {
                  className: "relative z-10",
                  children: [
                    ((0, ei.br)(d) || d.story) &&
                      (0, n.jsxs)("section", {
                        className:
                          "relative overflow-hidden px-6 py-16 text-center sm:py-20",
                        children: [
                          (0, ei.br)(d) &&
                            (0, n.jsx)(eq, {
                              isStatic: g,
                              children: (0, n.jsx)("p", {
                                dir: "rtl",
                                lang: "ar",
                                style: {
                                  fontFamily:
                                    "var(--font-heading-ar), 'Katibeh', 'Scheherazade New', serif",
                                },
                                className:
                                  "mx-auto max-w-xl text-3xl leading-loose text-[#7a4a2b] drop-shadow-[0_2px_10px_rgba(201,161,90,0.3)] sm:text-4xl",
                                children:
                                  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                              }),
                            }),
                          d.story &&
                            (0, n.jsx)(eq, {
                              isStatic: g,
                              order: 1,
                              children: (0, n.jsxs)("p", {
                                className:
                                  "mx-auto mt-8 max-w-xl whitespace-pre-line font-heading italic text-[#7a4a2b]/90 ".concat(
                                    (0, S.v2)(d.story),
                                  ),
                                children: ["“", d.story, "”"],
                              }),
                            }),
                        ],
                      }),
                    !ed &&
                      1 === es.length &&
                      (() => {
                        let e = es[0],
                          t = eI(e.date, A, d.dateFormat),
                          a = (function (e, t) {
                            if (!e) return "";
                            let a = new Date("".concat(e, "T00:00:00"));
                            return Number.isNaN(a.getTime())
                              ? ""
                              : a.toLocaleDateString((0, E.SY)(t, "en-US"), {
                                  weekday: "long",
                                });
                          })(e.date, A),
                          r = (0, k.$q)(e.time, A);
                        return (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("section", {
                              className:
                                "relative overflow-hidden px-8 pb-8 pt-12 text-center",
                              children: (0, n.jsx)(eq, {
                                isStatic: g,
                                children: (0, n.jsx)(eo.Z, {
                                  scratchSrc: eR,
                                  revealSrc: eZ,
                                  burstColor: "#c9a15a",
                                  fallbackColor: "#efe0c4",
                                  popOnReveal: !0,
                                  startRevealed: g,
                                  autoRevealAtTop: !g,
                                  title: U.scratchToRevealDate,
                                  titleClassName: "mb-4 text-center ".concat(
                                    I.y,
                                    " text-[#8a6236]",
                                  ),
                                  buttonClassName:
                                    "rounded-full border border-[#c9a15a]/35 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#8a6236] transition hover:border-[#c9a15a]/60 hover:bg-[#c9a15a]/10",
                                  className: "mx-auto w-[70%] max-w-[230px]",
                                  cardClassName:
                                    "relative mx-auto aspect-square w-full select-none overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_-12px_rgba(122,74,43,0.25)]",
                                  children: (0, n.jsxs)(eY, {
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "relative max-w-[15rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-[#c9a15a]/90",
                                        children: el,
                                      }),
                                      (0, n.jsxs)("p", {
                                        className:
                                          "relative font-script text-lg leading-tight text-[#7a4a2b]",
                                        children: [
                                          K,
                                          (0, n.jsx)("span", {
                                            className: "mx-1.5 text-[#c9a15a]",
                                            children: A === "ar" ? "و" : "&",
                                          }),
                                          V,
                                        ],
                                      }),
                                      (0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        className:
                                          "relative my-1 h-px w-16 bg-gradient-to-r from-transparent via-[#c9a15a]/70 to-transparent",
                                      }),
                                      t &&
                                        (0, n.jsx)("p", {
                                          className:
                                            "relative font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#7a4a2b]",
                                          style: {
                                            fontFeatureSettings:
                                              '"lnum" 1, "tnum" 1',
                                          },
                                          children: t,
                                        }),
                                      (a || r) &&
                                        (0, n.jsx)("p", {
                                          className:
                                            "relative text-xs text-[#7a4a2b]/70 sm:text-sm",
                                          children: [a, r]
                                            .filter(Boolean)
                                            .join(" \xb7 "),
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            d.event.date &&
                              !h &&
                              (0, n.jsx)("section", {
                                className:
                                  "relative overflow-hidden px-6 pb-16 pt-10",
                                children: (0, n.jsxs)("div", {
                                  className: "relative mx-auto max-w-2xl",
                                  children: [
                                    (0, n.jsx)(eq, {
                                      isStatic: g,
                                      children: (0, n.jsx)("p", {
                                        className:
                                          "mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c9a15a]/80",
                                        children: U.countdownTitle,
                                      }),
                                    }),
                                    (0, n.jsx)(eq, {
                                      isStatic: g,
                                      order: 1,
                                      children: (0, n.jsx)(C.Z, {
                                        date: d.event.date,
                                        time: d.event.time,
                                        accentClassName: "text-[#8a6236]",
                                        boxClassName:
                                          "border border-[#c9a15a]/25 bg-[#efe4c9]/85 backdrop-blur-sm",
                                        labelClassName: "text-[#7a4a2b]/55",
                                        shortLabels: !0,
                                        lang: A,
                                      }),
                                    }),
                                    !g &&
                                      (0, n.jsx)(eq, {
                                        isStatic: g,
                                        order: 2,
                                        className: "mt-8 flex justify-center",
                                        children: (0, n.jsx)(_.ZP, {
                                          invitation: d,
                                          variant: "arabian",
                                          lang: A,
                                        }),
                                      }),
                                  ],
                                }),
                              }),
                            (d.event.venueName || d.event.address) &&
                              (0, n.jsxs)("section", {
                                className: "relative px-6 py-16 text-center",
                                children: [
                                  (0, n.jsxs)(eq, {
                                    isStatic: g,
                                    children: [
                                      (0, n.jsx)(v.Z, {
                                        className:
                                          "mx-auto mb-4 h-6 w-6 text-[#c9a15a]",
                                      }),
                                      (0, n.jsx)("h2", {
                                        className: "".concat(
                                          I.y,
                                          " text-[#8a6236]",
                                        ),
                                        children: U.venue,
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)(eq, {
                                    isStatic: g,
                                    order: 1,
                                    children: [
                                      d.event.venueName &&
                                        (0, n.jsx)("p", {
                                          className:
                                            "mt-4 font-heading text-xl text-[#7a4a2b]",
                                          children: d.event.venueName,
                                        }),
                                      (d.event.address || d.event.city) &&
                                        (0, n.jsx)("p", {
                                          className:
                                            "mx-auto mt-2 max-w-md text-sm text-[#7a4a2b]/75",
                                          children: [
                                            d.event.address,
                                            d.event.city,
                                          ]
                                            .filter(Boolean)
                                            .join(", "),
                                        }),
                                    ],
                                  }),
                                  d.event.mapLink &&
                                    (0, n.jsx)(eq, {
                                      isStatic: g,
                                      order: 2,
                                      children: (0, n.jsxs)("a", {
                                        href: d.event.mapLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "data-pdf-link": !0,
                                        className:
                                          "mt-6 inline-flex items-center gap-2 rounded-full border border-[#c9a15a]/40 px-5 py-2.5 text-sm font-semibold text-[#8a6236] transition hover:bg-[#c9a15a]/10",
                                        children: [
                                          (0, n.jsx)(b.Z, {
                                            className: "h-4 w-4",
                                          }),
                                          U.viewOnMaps,
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        });
                      })(),
                    ed &&
                      (0, n.jsxs)("section", {
                        className:
                          "relative overflow-hidden px-6 pb-12 pt-10 text-center sm:px-8",
                        children: [
                          (0, n.jsx)(eq, {
                            isStatic: g,
                            children: (0, n.jsx)("p", {
                              className:
                                "mb-14 text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#c9a15a] sm:text-sm",
                              children: es.length > 1 ? U.eventsPlural : "",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "mx-auto flex w-full max-w-md flex-col items-center gap-[5.5rem]",
                            children: es.map((e, t) =>
                              (0, n.jsx)(
                                eK,
                                {
                                  event: e,
                                  lang: A,
                                  dateFormat: d.dateFormat,
                                  isStatic: g,
                                  scratchSrc: eR,
                                  revealSrc: eZ,
                                  order: t,
                                  onRevealed: () => e4(e.id),
                                },
                                e.id,
                              ),
                            ),
                          }),
                          (0, n.jsx)(CatamaranTour, { lang: A }),
                          eu &&
                            !h &&
                            e3 &&
                            (0, n.jsxs)("div", {
                              className:
                                "relative mx-auto mt-24 max-w-2xl pt-4",
                              children: [
                                (0, n.jsx)(eq, {
                                  isStatic: g,
                                  children: (0, n.jsx)("p", {
                                    className:
                                      "mb-6 text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#c9a15a] sm:text-sm",
                                    children: U.countdownTitle,
                                  }),
                                }),
                                (0, n.jsx)(eq, {
                                  isStatic: g,
                                  order: 1,
                                  children: (0, n.jsx)(C.Z, {
                                    date: eu.date,
                                    time: eu.time,
                                    accentClassName: "text-[#8a6236]",
                                    boxClassName:
                                      "border border-[#c9a15a]/25 bg-[#efe4c9]/85 backdrop-blur-sm",
                                    labelClassName: "text-[#7a4a2b]/55",
                                    shortLabels: !0,
                                    lang: A,
                                  }),
                                }),
                                !g &&
                                  (0, n.jsx)(eq, {
                                    isStatic: g,
                                    order: 2,
                                    className: "mt-8 flex justify-center",
                                    children: (0, n.jsx)(_.ZP, {
                                      invitation: d,
                                      variant: "arabian",
                                      lang: A,
                                    }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                    !ed &&
                      to &&
                      (0, n.jsx)(eq, {
                        isStatic: g,
                        children: (0, n.jsx)(M.Z, {
                          items: ti,
                          lang: A,
                          tone: "arabian",
                        }),
                      }),
                    !ed &&
                      0 === es.length &&
                      (d.event.venueName || d.event.address) &&
                      (0, n.jsxs)("section", {
                        className: "relative px-6 py-16 text-center",
                        children: [
                          (0, n.jsxs)(eq, {
                            isStatic: g,
                            children: [
                              (0, n.jsx)(v.Z, {
                                className:
                                  "mx-auto mb-4 h-6 w-6 text-[#c9a15a]",
                              }),
                              (0, n.jsx)("h2", {
                                className: "".concat(I.y, " text-[#8a6236]"),
                                children: U.venue,
                              }),
                            ],
                          }),
                          (0, n.jsxs)(eq, {
                            isStatic: g,
                            order: 1,
                            children: [
                              d.event.venueName &&
                                (0, n.jsx)("p", {
                                  className:
                                    "mt-4 font-heading text-xl text-[#7a4a2b]",
                                  children: d.event.venueName,
                                }),
                              (d.event.address || d.event.city) &&
                                (0, n.jsx)("p", {
                                  className:
                                    "mx-auto mt-2 max-w-md text-sm text-[#7a4a2b]/75",
                                  children: [d.event.address, d.event.city]
                                    .filter(Boolean)
                                    .join(", "),
                                }),
                            ],
                          }),
                          d.event.mapLink &&
                            (0, n.jsx)(eq, {
                              isStatic: g,
                              order: 2,
                              children: (0, n.jsxs)("a", {
                                href: d.event.mapLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "data-pdf-link": !0,
                                className:
                                  "mt-6 inline-flex items-center gap-2 rounded-full border border-[#c9a15a]/40 px-5 py-2.5 text-sm font-semibold text-[#8a6236] transition hover:bg-[#c9a15a]/10",
                                children: [
                                  (0, n.jsx)(b.Z, {
                                    className: "h-4 w-4",
                                  }),
                                  U.viewOnMaps,
                                ],
                              }),
                            }),
                        ],
                      }),
                    (null === (t = d.verse) || void 0 === t ? void 0 : t.id) &&
                      (0, n.jsx)("section", {
                        className: "relative",
                        children: (0, n.jsx)(eq, {
                          isStatic: g,
                          children: (0, n.jsx)(W.Z, {
                            verse: d.verse,
                            lang: A,
                            className:
                              "mx-auto mt-4 max-w-xl space-y-3 px-4 pt-14 text-center",
                            arabicClassName:
                              "font-heading text-3xl leading-loose text-[#7a4a2b] sm:text-4xl",
                            translationClassName:
                              "font-heading text-base italic leading-relaxed text-[#7a4a2b]/85 sm:text-lg",
                            referenceClassName:
                              "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a15a]/80",
                          }),
                        }),
                      }),
                    (null !==
                      (o =
                        null === (a = d.assets) || void 0 === a
                          ? void 0
                          : a.gallery) && void 0 !== o
                      ? o
                      : []
                    ).length > 0 &&
                      (0, n.jsx)(eq, {
                        isStatic: g,
                        children: (0, n.jsx)("div", {
                          id: "ceremony-gallery",
                          style: { scrollMarginTop: "2rem" },
                          children: (0, n.jsx)(T.Z, {
                            photos:
                              null !==
                                (c =
                                  null === (r = d.assets) || void 0 === r
                                    ? void 0
                                    : r.gallery) && void 0 !== c
                                ? c
                                : [],
                            title: weddingCopy[A].galleryTitle,
                            lang: A,
                            goldColor: "#c9a15a",
                            inkColor: "#3a2512",
                            cardBg: "#fffdf8",
                            headingClassName:
                              "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a15a] sm:text-xs",
                          }),
                        }),
                      }),
                    (0, n.jsx)(eq, {
                      isStatic: g,
                      children: (0, n.jsx)(WeddingFaq, {
                        invitation: d,
                        lang: A,
                      }),
                    }),
                    (null === (s = d.endingNote) || void 0 === s
                      ? void 0
                      : s.trim()) &&
                      (0, n.jsx)("section", {
                        className:
                          "relative overflow-hidden px-6 py-16 text-center sm:py-20",
                        children: (0, n.jsx)(eq, {
                          isStatic: g,
                          className: "relative z-10",
                          children: (0, n.jsx)(H.Z, {
                            text: d.endingNote,
                            className:
                              "wedding-thanks relative z-10 mx-auto max-w-xl text-[#7a4a2b]/90",
                          }),
                        }),
                      }),
                    (0, n.jsx)(WeddingSignature, { firstName: K, secondName: V, isStatic: g, lang: A }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  }
  let n3 = {
    "royal-maroon": "#e9c877",
    "golden-empire": "#5a3510",
    "lavendar-dreams": "#e8d7ff",
    "petal-sunset": "#e8a06b",
    "arabian-dawn": "#c9a15a",
    "maroon-letter": "#e9c877",
    "golden-letter": "#c9a15a",
    "lace-and-love": "#c9a15a",
    "golden-silk": "#c9876a",
    "burj-khalifa": "#f4f6f9",
    "beach-vibes": "#f4b45f",
    "ivory-bloom": "#c98f4a",
    "sage-bloom": "#c98f4a",
    "emerald-parchment": "#c9a15a",
    "noor-garden": "#c9a15a",
  };
  function n6(e) {
    var t;
    let { invitation: a, mode: m = "live", previewLock: x = !1 } = e,
      p = "live" === m || "live-preview" === m,
      f = (0, l.useMemo)(() => {
        let e = (0, s.Hr)(a);
        return (0, o.zG)({
          ...e,
          additionalEvents: (0, i.FS)(e.additionalEvents),
        });
      }, [a]);
    return (0, n.jsxs)(r.Z, {
      locked: x && p,
      lang: f.language,
      children: [
        (0, n.jsx)(u.RsvpFieldsProvider, {
          fields: f.rsvpFields,
          children: (0, n.jsx)(d.ZP, {
            enabled: p,
            children: (function (e, t) {
              return (0, n.jsx)(eV, {
                invitation: e,
                mode: t,
              });
            })(f, m),
          }),
        }),
        p &&
          (0, n.jsx)(c.Z, {
            color:
              null !== (t = n3[f.templateSlug]) && void 0 !== t ? t : "#e9edf4",
          }),
      ],
    });
  }
}
