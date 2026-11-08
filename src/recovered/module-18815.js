// Recovered from the public Golden Letter demo; original module 18815.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return u;
    },
  });
  var n = a(57437),
    r = a(2265),
    l = a(87262),
    s = a(35536);
  function i(e, t) {
    let a = Math.max(0, Math.floor(e / 1e3)),
      n = (0, s.TB)(t) ? "ar-EG" : "en-US",
      r = (e) =>
        e.toLocaleString(n, { minimumIntegerDigits: 2, useGrouping: !1 });
    return [
      { key: "days", value: r(Math.floor(a / 86400)) },
      { key: "hours", value: r(Math.floor((a % 86400) / 3600)) },
      { key: "minutes", value: r(Math.floor((a % 3600) / 60)) },
      { key: "seconds", value: r(a % 60) },
    ];
  }
  let o = "#b98a4a",
    c = "#1f3a2b";
  function d() {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 28 10",
      width: 22,
      height: 8,
      "aria-hidden": !0,
      fill: "none",
      children: (0, n.jsx)("path", {
        d: "M2 5h8M18 5h8M14 1.5v7M10 3.5l4-2 4 2M10 6.5l4 2 4-2",
        stroke: o,
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.85",
      }),
    });
  }
  function u(e) {
    let {
        date: t,
        time: a,
        accentClassName: u = "text-gold-300",
        boxClassName: m = "border border-white/15 bg-black/20",
        labelClassName: x = "text-white/60",
        shortLabels: p = !1,
        minuteSecondShort: f = !1,
        lang: h = "en",
        variant: v = "default",
      } = e,
      b = (0, r.useMemo)(
        () =>
          (function (e, t) {
            if (!e) return null;
            let a = (0, l.Ry)(e, t);
            return !a || Number.isNaN(a.getTime()) ? null : a.getTime();
          })(t, a),
        [t, a],
      ),
      [g, y] = (0, r.useState)(() => i(b ? b - Date.now() : 0, h));
    if (
      ((0, r.useEffect)(() => {
        if (null === b) return;
        let e = () => y(i(b - Date.now(), h));
        e();
        let t = window.setInterval(e, 1e3);
        return () => window.clearInterval(t);
      }, [b, h]),
      null === b)
    )
      return null;
    let w = (0, s.MH)(h),
      j = (e) =>
        p
          ? {
              days: w.days,
              hours: w.hrsShort,
              minutes: f ? "mins" : w.minsShort,
              seconds: f ? "sec" : w.secsShort,
            }[e]
          : {
              days: w.days,
              hours: w.hours,
              minutes: w.minutes,
              seconds: w.seconds,
            }[e];
    return "emerald" === v
      ? (0, n.jsx)("div", {
          className: "flex w-full min-w-0 items-stretch justify-center",
          children: g.map((e, t) =>
            (0, n.jsxs)(
              "div",
              {
                className: "flex min-w-0 flex-1 items-stretch",
                children: [
                  t > 0 &&
                    (0, n.jsxs)("div", {
                      className:
                        "relative mx-0.5 flex w-2.5 flex-col items-center justify-center self-stretch sm:mx-1 sm:w-3",
                      children: [
                        (0, n.jsx)("div", {
                          className: "absolute inset-y-2 w-px",
                          style: { backgroundColor: "".concat(o, "50") },
                          "aria-hidden": !0,
                        }),
                        (0, n.jsx)("span", {
                          className: "relative z-[1] h-1.5 w-1.5 rotate-45",
                          style: { backgroundColor: o, opacity: 0.9 },
                          "aria-hidden": !0,
                        }),
                      ],
                    }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex min-w-0 flex-1 flex-col items-center gap-1.5 px-0.5 py-1 sm:gap-2 sm:px-1",
                    children: [
                      (0, n.jsx)(d, {}),
                      (0, n.jsx)("span", {
                        className:
                          "font-heading text-2xl leading-none sm:text-3xl",
                        style: { color: c },
                        children: e.value,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "max-w-full text-center font-heading text-[8px] uppercase leading-none tracking-[0.14em] sm:text-[10px]",
                        style: { color: c },
                        children: j(e.key),
                      }),
                      (0, n.jsx)(d, {}),
                    ],
                  }),
                ],
              },
              e.key,
            ),
          ),
        })
      : (0, n.jsx)("div", {
          className: "grid w-full min-w-0 grid-cols-4 gap-1.5 sm:gap-3",
          children: g.map((e) =>
            (0, n.jsxs)(
              "div",
              {
                className:
                  "flex min-w-0 flex-col items-center overflow-hidden rounded-2xl px-1 py-3 sm:px-3 sm:py-4 ".concat(
                    m,
                  ),
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "font-heading text-xl font-bold tabular-nums sm:text-4xl ".concat(
                        u,
                      ),
                    children: e.value,
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "mt-1 max-w-full px-0.5 text-center text-[7px] font-semibold uppercase leading-tight tracking-[0.04em] sm:text-[10px] sm:tracking-wide ".concat(
                        x,
                      ),
                    children: j(e.key),
                  }),
                ],
              },
              e.key,
            ),
          ),
        });
  }
}
