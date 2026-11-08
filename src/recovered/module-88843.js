// Recovered from the public Golden Letter demo; original module 88843.
export default function (t, e, i) {
  i.d(e, {
    s: function () {
      return u;
    },
  });
  var n = i(56277),
    r = i(62035),
    s = i(81645),
    o = i(59111),
    a = i(12006),
    l = i(56920);
  function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
    let c = t.length;
    if (
      ((0, r.k)(
        c === e.length,
        "Both input and output ranges must be the same length",
      ),
      1 === c)
    )
      return () => e[0];
    if (2 === c && e[0] === e[1]) return () => e[1];
    let d = t[0] === t[1];
    t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
    let p = (function (t, e, i) {
        let r = [],
          s = i || a.C,
          o = t.length - 1;
        for (let i = 0; i < o; i++) {
          let o = s(t[i], t[i + 1]);
          if (e) {
            let t = Array.isArray(e) ? e[i] || n.Z : e;
            o = (0, l.z)(t, o);
          }
          r.push(o);
        }
        return r;
      })(e, u, h),
      f = p.length,
      m = (i) => {
        if (d && i < t[0]) return e[0];
        let n = 0;
        if (f > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
        let r = (0, s.Y)(t[n], t[n + 1], i);
        return p[n](r);
      };
    return i ? (e) => m((0, o.u)(t[0], t[c - 1], e)) : m;
  }
}
