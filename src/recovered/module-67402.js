// Recovered from the public Golden Letter demo; original module 67402.
export default function (t, e, i) {
  i.d(e, {
    i: function () {
      return l;
    },
  });
  var n = i(4469),
    r = i(27492);
  let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    o = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function a(t, e, i) {
    return "string" == typeof t ? t : r.px.transform(e + i * t);
  }
  function l(
    t,
    {
      attrX: e,
      attrY: i,
      attrScale: l,
      originX: u,
      originY: h,
      pathLength: c,
      pathSpacing: d = 1,
      pathOffset: p = 0,
      ...f
    },
    m,
    v,
  ) {
    if (((0, n.r)(t, f, v), m)) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    ((t.attrs = t.style), (t.style = {}));
    let { attrs: g, style: y, dimensions: x } = t;
    (g.transform && (x && (y.transform = g.transform), delete g.transform),
      x &&
        (void 0 !== u || void 0 !== h || y.transform) &&
        (y.transformOrigin = (function (t, e, i) {
          let n = a(e, t.x, t.width),
            r = a(i, t.y, t.height);
          return `${n} ${r}`;
        })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
      void 0 !== e && (g.x = e),
      void 0 !== i && (g.y = i),
      void 0 !== l && (g.scale = l),
      void 0 !== c &&
        (function (t, e, i = 1, n = 0, a = !0) {
          t.pathLength = 1;
          let l = a ? s : o;
          t[l.offset] = r.px.transform(-n);
          let u = r.px.transform(e),
            h = r.px.transform(i);
          t[l.array] = `${u} ${h}`;
        })(g, c, d, p, !1));
  }
}
