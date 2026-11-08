// Recovered from the public Golden Letter demo; original module 28231.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return c;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(54887),
    s = a(37679),
    i = a(48614);
  function o(e, t, a, n) {
    e.globalCompositeOperation = "destination-out";
    let r = 4 + Math.floor(3 * Math.random());
    for (let l = 0; l < r; l += 1) {
      let r = Math.random() * Math.PI * 2,
        l = Math.random() * n * 0.28,
        s = n * (0.55 + 0.45 * Math.random());
      (e.beginPath(),
        e.arc(t + Math.cos(r) * l, a + Math.sin(r) * l, s, 0, 2 * Math.PI),
        e.fill());
    }
  }
  function c(e) {
    let {
        scratchSrc: t,
        revealSrc: a,
        children: c,
        title: d,
        revealButtonLabel: u = "Reveal date",
        titleClassName:
          m = "mb-5 text-center font-script text-3xl text-gold-200 sm:text-4xl",
        buttonClassName:
          x = "rounded-full border border-gold-400/35 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-200 transition hover:border-gold-400/60 hover:bg-gold-400/10",
        className: p = "mx-auto w-full max-w-[220px] sm:max-w-[260px]",
        cardClassName:
          f = "relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden select-none sm:max-w-[210px]",
        fallbackColor: h = "#6f1830",
        burstColor: v,
        popOnReveal: b = !1,
        startRevealed: g = !1,
        forceReveal: y = !1,
        autoRevealAtTop: w = !1,
        onReveal: j,
        hint: N,
        hintClassName:
          k = "mb-2 text-center text-[11px] font-medium tracking-wide text-gold-200/75",
        frameSrc: E,
        frameWindowInset: S = "14%",
        solidScratchGold: C = !1,
        clearThreshold: T = 0.48,
      } = e,
      M = (0, r.useRef)(null),
      L = (0, r.useRef)(null),
      _ = (0, r.useRef)(null),
      D = (0, r.useRef)(!1),
      z = (0, r.useRef)(null),
      R = (0, r.useRef)(g),
      Z = (0, r.useRef)(0),
      B = (0, r.useRef)(""),
      I = (0, r.useRef)(!1),
      [A, F] = (0, r.useState)(g),
      [O, P] = (0, r.useState)(g),
      [U, W] = (0, r.useState)(!1),
      [H, q] = (0, r.useState)(null),
      Y = null != v ? v : "#e9c877";
    (0, r.useEffect)(() => {
      W(!0);
    }, []);
    let K = (0, r.useCallback)(() => {
      var e, t;
      if (R.current) return;
      R.current = !0;
      let a = _.current,
        n = null == a ? void 0 : a.getContext("2d");
      if (
        (a && n && n.clearRect(0, 0, a.width, a.height),
        P(!0),
        null === (e = (t = window).matchMedia) || void 0 === e
          ? void 0
          : e.call(t, "(prefers-reduced-motion: reduce)").matches)
      )
        return;
      let r = E ? M.current : L.current,
        l = null == r ? void 0 : r.getBoundingClientRect();
      (q({
        at: l
          ? { x: l.left + l.width / 2, y: l.top + l.height / 2 }
          : { x: window.innerWidth / 2, y: 0.45 * window.innerHeight },
        particles: Array.from({ length: 22 }, () => {
          let e = Math.random() * Math.PI * 2,
            t = 60 + 120 * Math.random();
          return {
            dx: Math.cos(e) * t,
            dy: Math.sin(e) * t - 30,
            size: 4 + 8 * Math.random(),
            delay: 0.12 * Math.random(),
          };
        }),
      }),
        window.setTimeout(() => q(null), 950));
    }, [E]);
    ((0, r.useEffect)(() => {
      y && K();
    }, [y, K]),
      (0, r.useEffect)(() => {
        if (!w || g || O) return;
        let e = !1,
          t = 0,
          a = () => (E ? M.current : L.current),
          n = () => {
            let t = a();
            if (!t || R.current) return;
            let n = t.getBoundingClientRect();
            (n.top > 76 && (e = !0), e && n.top <= 28 && K());
          },
          r = () => {
            if (!a()) {
              t = requestAnimationFrame(r);
              return;
            }
            (n(),
              window.addEventListener("scroll", n, { passive: !0 }),
              window.addEventListener("resize", n));
          };
        return (
          r(),
          () => {
            (cancelAnimationFrame(t),
              window.removeEventListener("scroll", n),
              window.removeEventListener("resize", n));
          }
        );
      }, [w, g, O, K, A, E]),
      (0, r.useEffect)(() => {
        O && !I.current && ((I.current = !0), null == j || j());
      }, [O, j]));
    let V = (0, r.useCallback)(async () => {
      let e = _.current,
        a = L.current;
      if (!e || !a) return;
      let n = Math.min(window.devicePixelRatio || 1, 2),
        r = Math.max(1, a.clientWidth),
        l = Math.max(1, a.clientHeight);
      ((B.current = "".concat(r, "x").concat(l)),
        (e.width = r * n),
        (e.height = l * n));
      let s = e.getContext("2d");
      if (!s) return;
      if ((s.setTransform(n, 0, 0, n, 0, 0), s.clearRect(0, 0, r, l), C))
        !(function (e, t, a) {
          let n = e.createLinearGradient(0, 0, 0.15 * t, a);
          (n.addColorStop(0, "#b8a068"),
            n.addColorStop(0.25, "#e2d4b0"),
            n.addColorStop(0.5, "#cfc098"),
            n.addColorStop(0.72, "#f0e6c8"),
            n.addColorStop(1, "#a89462"),
            (e.fillStyle = n),
            e.fillRect(0, 0, t, a));
          let r = e.createLinearGradient(0, 0, t, 0);
          (r.addColorStop(0, "rgba(255,255,255,0.08)"),
            r.addColorStop(0.45, "rgba(255,255,255,0)"),
            r.addColorStop(0.55, "rgba(0,0,0,0.04)"),
            r.addColorStop(1, "rgba(255,255,255,0.06)"),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, a));
          for (let n = 0; n < a; n += 1) {
            let a = 0.028 + 0.022 * Math.sin(0.62 * n);
            ((e.fillStyle = "rgba(255,255,255,".concat(a, ")")),
              e.fillRect(0, n, t, 1));
          }
          ((e.globalAlpha = 0.11), (e.fillStyle = "#3d3420"));
          for (let n = 0; n < t * a * 0.08; n += 1) {
            let n = Math.random() * t,
              r = Math.random() * a;
            e.fillRect(n, r, 1, 1);
          }
          ((e.globalAlpha = 0.07), (e.fillStyle = "#ffffff"));
          for (let n = 0; n < t * a * 0.05; n += 1) {
            let n = Math.random() * t,
              r = Math.random() * a;
            e.fillRect(n, r, 1, 1);
          }
          ((e.globalAlpha = 1),
            (e.globalCompositeOperation = "source-over"),
            (e.fillStyle = "rgba(255,255,255,0.35)"));
          for (let n = 0; n < Math.max(24, t * a * 0.0012); n += 1) {
            let n = Math.random() * t,
              r = Math.random() * a,
              l = 0.35 + 0.9 * Math.random();
            (e.beginPath(), e.arc(n, r, l, 0, 2 * Math.PI), e.fill());
          }
        })(s, r, l);
      else {
        let a = new Image();
        ((a.decoding = "async"), (a.src = t));
        try {
          await a.decode();
        } catch (n) {
          ((s.fillStyle = h), s.fillRect(0, 0, r, l));
          let t = s.getImageData(0, 0, e.width, e.height).data,
            a = 0;
          for (let e = 3; e < t.length; e += 16) t[e] >= 32 && (a += 1);
          ((Z.current = a), F(!0));
          return;
        }
        let n = Math.max(r / a.naturalWidth, l / a.naturalHeight),
          i = a.naturalWidth * n,
          o = a.naturalHeight * n;
        s.drawImage(a, (r - i) / 2, (l - o) / 2, i, o);
      }
      let i = s.getImageData(0, 0, e.width, e.height).data,
        o = 0;
      for (let e = 3; e < i.length; e += 16) i[e] >= 32 && (o += 1);
      ((Z.current = o), F(!0));
    }, [t, h, C]);
    (0, r.useEffect)(() => {
      if (g || R.current) {
        F(!0);
        return;
      }
      V();
      let e = L.current,
        t = () => {
          !R.current &&
            e &&
            "".concat(e.clientWidth, "x").concat(e.clientHeight) !==
              B.current &&
            V();
        };
      if ("undefined" != typeof ResizeObserver && e) {
        let a = new ResizeObserver(t);
        return (a.observe(e), () => a.disconnect());
      }
      return (
        window.addEventListener("resize", t),
        () => window.removeEventListener("resize", t)
      );
    }, [V, g]);
    let G = (e, t) => {
        let a = _.current;
        if (!a || R.current) return;
        let n = a.getContext("2d");
        if (!n) return;
        let r = a.getBoundingClientRect(),
          l = e - r.left,
          s = t - r.top,
          i = Math.max(14, 0.038 * r.width),
          c = z.current;
        if (c) {
          let e = l - c.x,
            t = s - c.y,
            a = Math.max(
              1,
              Math.ceil(Math.hypot(e, t) / Math.max(0.35 * i, 6)),
            );
          for (let r = 0; r <= a; r += 1) {
            let l = r / a;
            o(n, c.x + e * l, c.y + t * l, i);
          }
        } else o(n, l, s, i);
        z.current = { x: l, y: s };
        let { width: d, height: u } = a,
          m = n.getImageData(0, 0, d, u).data,
          x = 0;
        for (let e = 3; e < m.length; e += 16) m[e] >= 32 && (x += 1);
        1 - x / (Z.current || 1) >= T && K();
      },
      $ = (e) => {
        var t, a;
        ((D.current = !0),
          (z.current = null),
          null === (t = (a = e.target).setPointerCapture) ||
            void 0 === t ||
            t.call(a, e.pointerId),
          G(e.clientX, e.clientY));
      },
      X = (e) => {
        D.current && G(e.clientX, e.clientY);
      },
      J = () => {
        ((D.current = !1), (z.current = null));
      };
    return (0, n.jsxs)("div", {
      className: p,
      children: [
        d ? (0, n.jsx)("h3", { className: m, children: d }) : null,
        (0, n.jsx)(s.E.div, {
          ref: M,
          className: f,
          initial: !1,
          animate: O && b ? { scale: [1, 0.9, 1.12, 0.97, 1] } : { scale: 1 },
          transition: {
            duration: 0.75,
            times: [0, 0.18, 0.55, 0.8, 1],
            ease: "easeOut",
          },
          children: E
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    ref: L,
                    className:
                      "absolute z-[1] overflow-hidden rounded-[2px] bg-white",
                    style: { top: S, left: S, right: S, bottom: S },
                    children: [
                      (0, n.jsx)("img", {
                        src: a,
                        alt: "",
                        className:
                          "absolute inset-0 h-full w-full object-cover",
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: "absolute inset-0 z-[1] bg-white",
                        children: c,
                      }),
                      (0, n.jsx)("canvas", {
                        ref: _,
                        className:
                          "absolute inset-0 z-10 h-full w-full cursor-pointer transition-opacity duration-700 "
                            .concat(
                              O
                                ? "pointer-events-none opacity-0"
                                : "touch-none opacity-100",
                              " ",
                            )
                            .concat(A ? "" : "invisible"),
                        onPointerDown: $,
                        onPointerMove: X,
                        onPointerUp: J,
                        onPointerCancel: J,
                      }),
                    ],
                  }),
                  (0, n.jsx)("img", {
                    src: E,
                    alt: "",
                    className:
                      "pointer-events-none absolute inset-0 z-20 h-full w-full object-contain object-center",
                    draggable: !1,
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                ref: L,
                className: "absolute inset-0",
                children: [
                  (0, n.jsxs)("div", {
                    className: "absolute inset-0",
                    children: [
                      (0, n.jsx)("img", {
                        src: a,
                        alt: "",
                        className:
                          "absolute inset-0 h-full w-full object-contain",
                        draggable: !1,
                      }),
                      (0, n.jsx)("div", {
                        className: "absolute inset-0 z-[1]",
                        children: c,
                      }),
                    ],
                  }),
                  (0, n.jsx)("canvas", {
                    ref: _,
                    className:
                      "absolute inset-0 z-10 h-full w-full cursor-pointer transition-opacity duration-700 "
                        .concat(
                          O
                            ? "pointer-events-none opacity-0"
                            : "touch-none opacity-100",
                          " ",
                        )
                        .concat(A ? "" : "invisible"),
                    onPointerDown: $,
                    onPointerMove: X,
                    onPointerUp: J,
                    onPointerCancel: J,
                  }),
                ],
              }),
        }),
        U &&
          (0, l.createPortal)(
            (0, n.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none fixed inset-0 z-[200] overflow-hidden",
              children: (0, n.jsx)(i.M, {
                children:
                  H &&
                  (0, n.jsxs)("div", {
                    className: "absolute",
                    style: { left: H.at.x, top: H.at.y },
                    children: [
                      H.particles.map((e, t) =>
                        (0, n.jsx)(
                          s.E.span,
                          {
                            className: "absolute rounded-full",
                            style: {
                              width: e.size,
                              height: e.size,
                              left: -e.size / 2,
                              top: -e.size / 2,
                              background: Y,
                              boxShadow: "0 0 12px 2px ".concat(Y),
                            },
                            initial: { x: 0, y: 0, opacity: 0, scale: 0.3 },
                            animate: {
                              x: e.dx,
                              y: e.dy,
                              opacity: [0, 1, 0],
                              scale: [0.3, 1.2, 0.5],
                            },
                            exit: { opacity: 0 },
                            transition: {
                              duration: 0.95,
                              delay: e.delay,
                              ease: "easeOut",
                            },
                          },
                          t,
                        ),
                      ),
                      (0, n.jsx)(s.E.span, {
                        className: "absolute rounded-full",
                        style: {
                          width: 14,
                          height: 14,
                          left: -7,
                          top: -7,
                          background: Y,
                          boxShadow: "0 0 24px 8px ".concat(Y),
                        },
                        initial: { opacity: 0.9, scale: 0.4 },
                        animate: { opacity: 0, scale: 6 },
                        transition: { duration: 0.95, ease: "easeOut" },
                      }),
                    ],
                  }),
              }),
            }),
            document.body,
          ),
        !O &&
          (0, n.jsxs)("div", {
            className: "mt-4 flex flex-col items-center gap-2",
            children: [
              N ? (0, n.jsx)("p", { className: k, children: N }) : null,
              (0, n.jsx)("button", {
                type: "button",
                onClick: K,
                className: x,
                children: u,
              }),
            ],
          }),
      ],
    });
  }
}
