// Recovered from the public Golden Letter demo; original module 74434.
export default function (e, t, a) {
  a.d(t, {
    Q: function () {
      return l;
    },
  });
  var n = a(2265);
  let r = [
    { transform: "translateY(0)", offset: 0 },
    { transform: "translateY(-16px)", offset: 0.15 },
    { transform: "translateY(0)", offset: 0.34 },
    { transform: "translateY(-10px)", offset: 0.52 },
    { transform: "translateY(0)", offset: 0.72 },
    { transform: "translateY(-4px)", offset: 0.88 },
    { transform: "translateY(0)", offset: 1 },
  ];
  function l(e, t) {
    (0, n.useEffect)(() => {
      var a, n, l;
      if (
        !t ||
        (null === (n = (l = window).matchMedia) || void 0 === n
          ? void 0
          : null === (a = n.call(l, "(prefers-reduced-motion: reduce)")) ||
              void 0 === a
            ? void 0
            : a.matches)
      )
        return;
      let s = null,
        i = !1,
        o = () => {
          i ||
            (s = setTimeout(() => {
              var t;
              let a = e.current;
              (null == a ||
                null === (t = a.animate) ||
                void 0 === t ||
                t.call(a, r, {
                  duration: 1400,
                  easing: "cubic-bezier(0.34, 1.3, 0.5, 1)",
                }),
                o());
            }, 6e3));
        },
        c = () => {
          i ||
            ((i = !0),
            s && clearTimeout(s),
            window.removeEventListener("scroll", c),
            window.removeEventListener("wheel", c),
            window.removeEventListener("touchmove", c),
            window.removeEventListener("keydown", d));
        },
        d = (e) => {
          [
            "ArrowDown",
            "ArrowUp",
            "PageDown",
            "PageUp",
            "Home",
            "End",
            " ",
            "Spacebar",
          ].includes(e.key) && c();
        };
      return (
        window.addEventListener("scroll", c, { passive: !0 }),
        window.addEventListener("wheel", c, { passive: !0 }),
        window.addEventListener("touchmove", c, { passive: !0 }),
        window.addEventListener("keydown", d),
        o(),
        () => {
          ((i = !0),
            s && clearTimeout(s),
            window.removeEventListener("scroll", c),
            window.removeEventListener("wheel", c),
            window.removeEventListener("touchmove", c),
            window.removeEventListener("keydown", d));
        }
      );
    }, [e, t]);
  }
}
