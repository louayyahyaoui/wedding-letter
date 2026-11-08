// Recovered from the public Golden Letter demo; original module 61267.
export default function (e, t, a) {
  a.d(t, {
    A7: function () {
      return s;
    },
    ZP: function () {
      return m;
    },
    fK: function () {
      return l;
    },
    nE: function () {
      return i;
    },
    nI: function () {
      return o;
    },
    oA: function () {
      return c;
    },
    oJ: function () {
      return d;
    },
  });
  var n = a(57437),
    r = a(2265);
  let l = 0.9,
    s = 0.14,
    i = [0.22, 1, 0.36, 1],
    o = { opacity: 0, y: 34 },
    c = { opacity: 1, y: 0 };
  function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return { duration: l, delay: e, ease: i };
  }
  let u = "ft-rise-pending";
  function m(e) {
    let { enabled: t, children: a, forceMotion: l = !1 } = e,
      s = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        let e = s.current;
        if (
          !t ||
          !e ||
          "undefined" == typeof IntersectionObserver ||
          (!l && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        )
          return;
        let a = new WeakSet(),
          n = new IntersectionObserver(
            (e) => {
              for (let t of e)
                t.isIntersecting &&
                  (t.target.classList.remove(u),
                  t.target.classList.add("ft-rise-go"),
                  n.unobserve(t.target));
            },
            { rootMargin: "0px 0px -8% 0px" },
          ),
          r = () => {
            e.querySelectorAll("[data-rise]").forEach((e) => {
              a.has(e) || (a.add(e), e.classList.add(u), n.observe(e));
            });
          };
        r();
        let i = new MutationObserver(r);
        return (
          i.observe(e, { childList: !0, subtree: !0 }),
          () => {
            (i.disconnect(),
              n.disconnect(),
              e
                .querySelectorAll(".".concat(u))
                .forEach((e) => e.classList.remove(u)));
          }
        );
      }, [t, l]),
      (0, n.jsx)("div", {
        ref: s,
        style: { display: "contents" },
        children: a,
      })
    );
  }
}
