// Recovered from the public Golden Letter demo; original module 39070.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return i;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(48614),
    s = a(37679);
  function i(e) {
    let { color: t = "#e9edf4", disabled: a = !1 } = e,
      [i, o] = (0, r.useState)([]),
      c = (0, r.useRef)(0),
      d = (0, r.useRef)(!1);
    return ((0, r.useEffect)(() => {
      var e, t;
      d.current =
        null === (e = (t = window).matchMedia) || void 0 === e
          ? void 0
          : e.call(t, "(prefers-reduced-motion: reduce)").matches;
    }, []),
    (0, r.useEffect)(() => {
      if (a) return;
      let e = (e, t) => {
          if (d.current) return;
          c.current += 1;
          let a = {
            id: c.current,
            x: e,
            y: t,
            particles: Array.from({ length: 8 }, () => ({
              angle: Math.random() * Math.PI * 2,
              distance: 44 + 88 * Math.random(),
              size: 3 + 7 * Math.random(),
              delay: 0.1 * Math.random(),
            })),
            streaks: Array.from({ length: 3 }, (e, t) => ({
              angle: (t / 3) * Math.PI * 2 + 0.6 * Math.random(),
              length: 26 + 26 * Math.random(),
              delay: 0.06 * Math.random(),
            })),
          };
          (o((e) => [...e.slice(-3), a]),
            window.setTimeout(() => {
              o((e) => e.filter((e) => e.id !== a.id));
            }, 1100));
        },
        t = (t) => e(t.clientX, t.clientY);
      return (
        document.addEventListener("pointerdown", t, { passive: !0 }),
        () => document.removeEventListener("pointerdown", t)
      );
    }, [a]),
    a)
      ? null
      : (0, n.jsx)("div", {
          "aria-hidden": !0,
          className: "pointer-events-none fixed inset-0 z-[70] overflow-hidden",
          children: (0, n.jsx)(l.M, {
            children: i.map((e) =>
              (0, n.jsxs)(
                "div",
                {
                  style: { position: "absolute", left: e.x, top: e.y },
                  children: [
                    e.streaks.map((e, a) => {
                      let r = Math.cos(e.angle) * e.length,
                        l = Math.sin(e.angle) * e.length - 8,
                        i = (180 * e.angle) / Math.PI + 90;
                      return (0, n.jsx)(
                        s.E.span,
                        {
                          className: "absolute rounded-full",
                          style: {
                            width: 2,
                            height: 16,
                            left: -1,
                            top: -8,
                            background: "linear-gradient(to bottom, ".concat(
                              t,
                              ", transparent)",
                            ),
                            transformOrigin: "center top",
                          },
                          initial: {
                            x: 0,
                            y: 0,
                            rotate: i,
                            opacity: 0,
                            scaleY: 0.3,
                          },
                          animate: {
                            x: r,
                            y: l,
                            rotate: i,
                            opacity: [0, 1, 0],
                            scaleY: [0.3, 1.2, 0.5],
                          },
                          exit: { opacity: 0 },
                          transition: {
                            duration: 1.1,
                            delay: e.delay,
                            ease: "easeOut",
                          },
                        },
                        "s".concat(a),
                      );
                    }),
                    e.particles.map((e, a) => {
                      let r = Math.cos(e.angle) * e.distance,
                        l = Math.sin(e.angle) * e.distance - 12;
                      return (0, n.jsx)(
                        s.E.span,
                        {
                          className: "absolute rounded-full",
                          style: {
                            width: e.size,
                            height: e.size,
                            left: -e.size / 2,
                            top: -e.size / 2,
                            background: t,
                            boxShadow: "0 0 10px 2px ".concat(t),
                          },
                          initial: { x: 0, y: 0, opacity: 0, scale: 0.4 },
                          animate: {
                            x: r,
                            y: l,
                            opacity: [0, 1, 0],
                            scale: [0.4, 1.15, 0.5],
                          },
                          exit: { opacity: 0 },
                          transition: {
                            duration: 1.1,
                            delay: e.delay,
                            ease: "easeOut",
                          },
                        },
                        "p".concat(a),
                      );
                    }),
                    (0, n.jsx)(s.E.span, {
                      className: "absolute rounded-full",
                      style: {
                        width: 9,
                        height: 9,
                        left: -4.5,
                        top: -4.5,
                        background: t,
                        boxShadow: "0 0 16px 4px ".concat(t),
                      },
                      initial: { opacity: 0.95, scale: 0.5 },
                      animate: { opacity: 0, scale: 4 },
                      transition: { duration: 1.1, ease: "easeOut" },
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        });
  }
}
