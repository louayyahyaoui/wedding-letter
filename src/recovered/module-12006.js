// Recovered from the public Golden Letter demo; original module 12006.
export default function (t, e, i) {
  i.d(e, {
    C: function () {
      return S;
    },
  });
  var n = i(96781),
    r = i(62035);
  function s(t, e, i) {
    return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
      ? t + (e - t) * 6 * i
      : i < 0.5
        ? e
        : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
  }
  var o = i(87325),
    a = i(18859),
    l = i(92943);
  function u(t, e) {
    return (i) => (i > 0 ? e : t);
  }
  let h = (t, e, i) => {
      let n = t * t,
        r = i * (e * e - n) + n;
      return r < 0 ? 0 : Math.sqrt(r);
    },
    c = [o.$, a.m, l.J],
    d = (t) => c.find((e) => e.test(t));
  function p(t) {
    let e = d(t);
    if (
      ((0, r.K)(
        !!e,
        `'${t}' is not an animatable color. Use the equivalent color code instead.`,
      ),
      !e)
    )
      return !1;
    let i = e.parse(t);
    return (
      e === l.J &&
        (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
          ((t /= 360), (i /= 100));
          let r = 0,
            o = 0,
            a = 0;
          if ((e /= 100)) {
            let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
              l = 2 * i - n;
            ((r = s(l, n, t + 1 / 3)),
              (o = s(l, n, t)),
              (a = s(l, n, t - 1 / 3)));
          } else r = o = a = i;
          return {
            red: Math.round(255 * r),
            green: Math.round(255 * o),
            blue: Math.round(255 * a),
            alpha: n,
          };
        })(i)),
      i
    );
  }
  let f = (t, e) => {
    let i = p(t),
      r = p(e);
    if (!i || !r) return u(t, e);
    let s = { ...i };
    return (t) => (
      (s.red = h(i.red, r.red, t)),
      (s.green = h(i.green, r.green, t)),
      (s.blue = h(i.blue, r.blue, t)),
      (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
      a.m.transform(s)
    );
  };
  var m = i(56920),
    v = i(33964),
    g = i(83206),
    y = i(37249);
  let x = new Set(["none", "hidden"]);
  function w(t, e) {
    return (i) => (0, n.t)(t, e, i);
  }
  function P(t) {
    return "number" == typeof t
      ? w
      : "string" == typeof t
        ? (0, y.t)(t)
          ? u
          : v.$.test(t)
            ? f
            : A
        : Array.isArray(t)
          ? T
          : "object" == typeof t
            ? v.$.test(t)
              ? f
              : b
            : u;
  }
  function T(t, e) {
    let i = [...t],
      n = i.length,
      r = t.map((t, i) => P(t)(t, e[i]));
    return (t) => {
      for (let e = 0; e < n; e++) i[e] = r[e](t);
      return i;
    };
  }
  function b(t, e) {
    let i = { ...t, ...e },
      n = {};
    for (let r in i)
      void 0 !== t[r] && void 0 !== e[r] && (n[r] = P(t[r])(t[r], e[r]));
    return (t) => {
      for (let e in n) i[e] = n[e](t);
      return i;
    };
  }
  let A = (t, e) => {
    let i = g.P.createTransformer(e),
      n = (0, g.V)(t),
      s = (0, g.V)(e);
    return n.indexes.var.length === s.indexes.var.length &&
      n.indexes.color.length === s.indexes.color.length &&
      n.indexes.number.length >= s.indexes.number.length
      ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
        ? x.has(t)
          ? (i) => (i <= 0 ? t : e)
          : (i) => (i >= 1 ? e : t)
        : (0, m.z)(
            T(
              (function (t, e) {
                var i;
                let n = [],
                  r = { color: 0, var: 0, number: 0 };
                for (let s = 0; s < e.values.length; s++) {
                  let o = e.types[s],
                    a = t.indexes[o][r[o]],
                    l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                  ((n[s] = l), r[o]++);
                }
                return n;
              })(n, s),
              s.values,
            ),
            i,
          )
      : ((0, r.K)(
          !0,
          `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        ),
        u(t, e));
  };
  function S(t, e, i) {
    return "number" == typeof t && "number" == typeof e && "number" == typeof i
      ? (0, n.t)(t, e, i)
      : P(t)(t, e);
  }
}
