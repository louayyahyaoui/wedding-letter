// Recovered from the public Golden Letter demo; original module 94238.
export default function (t, e, i) {
  i.d(e, {
    s: function () {
      return m;
    },
  });
  var n = i(13697),
    r = i(56596),
    s = i(83206),
    o = i(25861);
  let a = new Set(["auto", "none", "0"]);
  var l = i(39545),
    u = i(62035),
    h = i(4946),
    c = i(37249);
  let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  var p = i(90401),
    f = i(38580);
  class m extends l.e {
    constructor(t, e, i, n, r) {
      super(t, e, i, n, r, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: t, element: e, name: i } = this;
      if (!e || !e.current) return;
      super.readKeyframes();
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if ("string" == typeof n && ((n = n.trim()), (0, c.t)(n))) {
          let r = (function t(e, i, n = 1) {
            (0, u.k)(
              n <= 4,
              `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
            );
            let [r, s] = (function (t) {
              let e = d.exec(t);
              if (!e) return [,];
              let [, i, n, r] = e;
              return [`--${null != i ? i : n}`, r];
            })(e);
            if (!r) return;
            let o = window.getComputedStyle(i).getPropertyValue(r);
            if (o) {
              let t = o.trim();
              return (0, h.P)(t) ? parseFloat(t) : t;
            }
            return (0, c.t)(s) ? t(s, i, n + 1) : s;
          })(n, e.current);
          (void 0 !== r && (t[i] = r),
            i === t.length - 1 && (this.finalKeyframe = n));
        }
      }
      if ((this.resolveNoneKeyframes(), !r.z.has(i) || 2 !== t.length)) return;
      let [n, s] = t,
        o = (0, f.C)(n),
        a = (0, f.C)(s);
      if (o !== a) {
        if ((0, p.mP)(o) && (0, p.mP)(a))
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            "string" == typeof i && (t[e] = parseFloat(i));
          }
        else this.needsMeasurement = !0;
      }
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: t, name: e } = this,
        i = [];
      for (let e = 0; e < t.length; e++) {
        var r;
        ("number" == typeof (r = t[e])
          ? 0 === r
          : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
          i.push(e);
      }
      i.length &&
        (function (t, e, i) {
          let n,
            r = 0;
          for (; r < t.length && !n;) {
            let e = t[r];
            ("string" == typeof e &&
              !a.has(e) &&
              (0, s.V)(e).values.length &&
              (n = t[r]),
              r++);
          }
          if (n && i) for (let r of e) t[r] = (0, o.T)(i, n);
        })(t, i, e);
    }
    measureInitialState() {
      let { element: t, unresolvedKeyframes: e, name: i } = this;
      if (!t || !t.current) return;
      ("height" === i && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = p.lw[i](
          t.measureViewportBox(),
          window.getComputedStyle(t.current),
        )),
        (e[0] = this.measuredOrigin));
      let n = e[e.length - 1];
      void 0 !== n && t.getValue(i, n).jump(n, !1);
    }
    measureEndState() {
      var t;
      let { element: e, name: i, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(i);
      r && r.jump(this.measuredOrigin, !1);
      let s = n.length - 1,
        o = n[s];
      ((n[s] = p.lw[i](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
        (null === (t = this.removedTransforms) || void 0 === t
          ? void 0
          : t.length) &&
          this.removedTransforms.forEach(([t, i]) => {
            e.getValue(t).set(i);
          }),
        this.resolveNoneKeyframes());
    }
  }
}
