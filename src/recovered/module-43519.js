// Recovered from the public Golden Letter demo; original module 43519.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return o;
    },
  });
  var n = a(57437),
    r = a(54887),
    l = a(48614),
    s = a(37679),
    i = a(35536);
  function o(e) {
    let { show: t, progress: a, variant: o, lang: c = "en" } = e;
    if ("undefined" == typeof document) return null;
    let d = "royal-maroon" === o || "maroon-letter" === o,
      u = "golden-letter" === o,
      m = "burj-khalifa" === o,
      x = "beach-vibes" === o,
      p = "ivory-bloom" === o,
      f = "sage-bloom" === o,
      h = p || f,
      v = "emerald-parchment" === o,
      b = "noor-garden" === o,
      g = h || b || u,
      y = d
        ? "bg-gradient-to-b from-brand-700 via-brand-950 to-brand-900"
        : u
          ? "bg-gradient-to-b from-[#faf6eb] via-[#f3ead6] to-[#e0b877]"
          : "lavendar-dreams" === o
            ? "bg-gradient-to-b from-[#4a2d6a] via-[#1b1228] to-[#2d1b45]"
            : "petal-sunset" === o
              ? "bg-gradient-to-b from-[#5c2334] via-[#a8566a] to-[#e3a186]"
              : "arabian-dawn" === o
                ? "bg-gradient-to-b from-[#3a2410] via-[#8a5a2b] to-[#e0b877]"
                : m
                  ? "bg-gradient-to-b from-[#1c2029] via-[#08090c] to-[#15181f]"
                  : x
                    ? "bg-gradient-to-b from-[#04303a] via-[#0b5563] to-[#12849a]"
                    : p
                      ? "bg-gradient-to-b from-[#f6efe1] via-[#efe2c6] to-[#e4cf9c]"
                      : f
                        ? "bg-gradient-to-b from-[#f3f1e7] via-[#dbe3da] to-[#a9bfab]"
                        : v
                          ? "bg-gradient-to-b from-[#0f1e16] via-[#1f3a2b] to-[#0a140e]"
                          : b
                            ? "bg-gradient-to-b from-[#fbf8f1] via-[#f1ebdd] to-[#d9e2d3]"
                            : "bg-gradient-to-b from-[#6b4e14] via-[#d9a24d] to-[#c4892e]",
      w = d
        ? "bg-gradient-to-b from-brand-600/35 via-transparent to-brand-950"
        : u
          ? "bg-gradient-to-b from-white/50 via-transparent to-[#c9a15a]/20"
          : "lavendar-dreams" === o
            ? "bg-gradient-to-b from-[#c9a8e8]/30 via-transparent to-[#1b1228]"
            : "petal-sunset" === o
              ? "bg-gradient-to-b from-[#ffd9c2]/25 via-transparent to-[#5c2334]"
              : "arabian-dawn" === o
                ? "bg-gradient-to-b from-[#ffe9c2]/25 via-transparent to-[#3a2410]"
                : m
                  ? "bg-gradient-to-b from-[#c7ccd6]/20 via-transparent to-[#08090c]"
                  : x
                    ? "bg-gradient-to-b from-[#fdf1de]/25 via-transparent to-[#04303a]"
                    : h
                      ? "bg-gradient-to-b from-white/40 via-transparent to-[#c98f4a]/15"
                      : v
                        ? "bg-gradient-to-b from-[#b98a4a]/25 via-transparent to-[#0a140e]"
                        : b
                          ? "bg-gradient-to-b from-white/50 via-transparent to-[#1f4a33]/10"
                          : "bg-gradient-to-b from-[#d4af37]/25 via-transparent to-[#d9a24d]",
      j = d
        ? "bg-gold-300/20"
        : u
          ? "bg-[#8a6236]/15"
          : "lavendar-dreams" === o
            ? "bg-[#e8d7ff]/20"
            : "petal-sunset" === o
              ? "bg-[#ffe3d1]/20"
              : "arabian-dawn" === o
                ? "bg-[#f3ddc0]/20"
                : m
                  ? "bg-[#c7ccd6]/20"
                  : x
                    ? "bg-[#fdf1de]/20"
                    : h
                      ? "bg-[#8a6d3b]/15"
                      : v
                        ? "bg-[#b98a4a]/20"
                        : b
                          ? "bg-[#1f4a33]/12"
                          : "bg-gold-300/25",
      N = d
        ? "bg-gradient-to-r from-gold-400 to-gold-200"
        : u
          ? "bg-gradient-to-r from-[#8a6236] via-[#c9a15a] to-[#e9c877]"
          : "lavendar-dreams" === o
            ? "bg-gradient-to-r from-[#9b6fd4] via-[#e8d7ff] to-[#f4eaff]"
            : "petal-sunset" === o
              ? "bg-gradient-to-r from-[#e8b596] via-[#f7dcc4] to-[#fff3e6]"
              : "arabian-dawn" === o
                ? "bg-gradient-to-r from-[#a67c1a] via-[#e0b877] to-[#fff0d4]"
                : m
                  ? "bg-gradient-to-r from-[#8b93a3] via-[#e9edf4] to-[#ffffff]"
                  : x
                    ? "bg-gradient-to-r from-[#ef7f5b] via-[#fdf1de] to-[#ffffff]"
                    : h
                      ? "bg-gradient-to-r from-[#8a6d3b] via-[#c98f4a] to-[#e9c877]"
                      : v
                        ? "bg-gradient-to-r from-[#b98a4a] via-[#e3c98f] to-[#fff3d9]"
                        : b
                          ? "bg-gradient-to-r from-[#1f4a33] via-[#3f6b54] to-[#a27b4c]"
                          : "bg-gradient-to-r from-[#a67c1a] via-gold-300 to-[#fff3b8]";
    return (0, r.createPortal)(
      (0, n.jsx)(l.M, {
        children:
          t &&
          (0, n.jsxs)(s.E.div, {
            className:
              "fixed inset-0 z-[200] flex flex-col items-center justify-center ".concat(
                y,
              ),
            style: { transform: "translateZ(0)" },
            initial: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            children: [
              (0, n.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0 ".concat(w),
              }),
              (0, n.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold-400/15 to-transparent",
              }),
              x &&
                (0, n.jsxs)("div", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#f4b45f]/80 blur-[2px]",
                    }),
                    (0, n.jsxs)("svg", {
                      className: "absolute inset-x-0 bottom-0 h-48 w-full",
                      viewBox: "0 0 400 160",
                      preserveAspectRatio: "none",
                      fill: "none",
                      children: [
                        (0, n.jsx)(s.E.path, {
                          d: "M0 90c50-24 90-24 140 0s90 24 140 0 90-24 140 0v90H0Z",
                          fill: "#8fcfc6",
                          fillOpacity: "0.35",
                          animate: { x: [0, -40, 0] },
                          transition: {
                            duration: 7,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                        }),
                        (0, n.jsx)(s.E.path, {
                          d: "M0 110c50-20 90-20 140 0s90 20 140 0 90-20 140 0v70H0Z",
                          fill: "#0b5563",
                          fillOpacity: "0.4",
                          animate: { x: [0, 40, 0] },
                          transition: {
                            duration: 9,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              (0, n.jsxs)("div", {
                className:
                  "relative z-10 flex w-56 flex-col items-center gap-4",
                role: "status",
                "aria-live": "polite",
                "aria-label": "Loading invitation ".concat(a, "%"),
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "h-1.5 w-full overflow-hidden rounded-full ".concat(j),
                    children: (0, n.jsx)("div", {
                      className:
                        "h-full rounded-full transition-[width] duration-200 ease-out ".concat(
                          N,
                        ),
                      style: { width: "".concat(a, "%") },
                    }),
                  }),
                  (0, n.jsxs)("p", {
                    className:
                      "font-heading text-3xl font-semibold tracking-wide ".concat(
                        g
                          ? b
                            ? "text-[#1f4a33]"
                            : u
                              ? "text-[#7a4a2b]"
                              : "text-[#6b5330]"
                          : v
                            ? "text-[#e3c98f]"
                            : "text-gold-200",
                      ),
                    children: [a, "%"],
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "text-[11px] font-medium uppercase tracking-[0.28em] ".concat(
                        g
                          ? b
                            ? "text-[#5b5043]/75"
                            : u
                              ? "text-[#8a6236]/70"
                              : "text-[#8a6d3b]/70"
                          : v
                            ? "text-[#e3c98f]/70"
                            : "text-gold-100/70",
                      ),
                    children: (0, i.MH)(c).preparingInvitation,
                  }),
                ],
              }),
            ],
          }),
      }),
      document.body,
    );
  }
}
