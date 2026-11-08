// Recovered from the public Golden Letter demo; original module 74694.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return l;
    },
  });
  var n = a(57437),
    r = a(2265);
  function l(e) {
    let { className: t = "", style: a, maxPx: l = 28, minPx: s = 11 } = e,
      i = (0, r.useRef)(null);
    return (
      (0, r.useLayoutEffect)(() => {
        let e = i.current;
        if (!e) return;
        let t = () => {
          let t = e.parentElement;
          if (!t) return;
          let a = t.clientWidth;
          if (
            a <= 0 ||
            ((e.style.whiteSpace = "nowrap"),
            (e.style.fontSize = "".concat(l, "px")),
            e.scrollWidth <= a)
          )
            return;
          let n = s,
            r = l;
          for (let t = 0; t < 18; t++) {
            let t = (n + r) / 2;
            ((e.style.fontSize = "".concat(t, "px")),
              e.scrollWidth <= a ? (n = t) : (r = t));
          }
          e.style.fontSize = "".concat(Math.max(s, n), "px");
        };
        t();
        let a = e.parentElement;
        if (!a) return;
        let n = new ResizeObserver(t);
        return (n.observe(a), () => n.disconnect());
      }, [l, s]),
      (0, n.jsx)("p", {
        ref: i,
        dir: "rtl",
        lang: "ar",
        className:
          "box-border w-full max-w-full overflow-hidden text-center leading-normal ".concat(
            t,
          ),
        style: {
          fontFamily:
            "var(--font-heading-ar), 'Katibeh', 'Scheherazade New', serif",
          whiteSpace: "nowrap",
          fontSize: "".concat(l, "px"),
          ...a,
        },
        children: "السلام عليكم ورحمة الله وبركاته",
      })
    );
  }
}
