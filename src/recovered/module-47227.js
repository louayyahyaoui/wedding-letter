// Recovered from the public Golden Letter demo; original module 47227.
export default function (t, e, i) {
  i.d(e, {
    D2: function () {
      return d;
    },
    YY: function () {
      return u;
    },
    am: function () {
      return h;
    },
    o2: function () {
      return l;
    },
    q2: function () {
      return s;
    },
  });
  var n = i(96781),
    r = i(12787);
  function s(t, e, i) {
    return i + e * (t - i);
  }
  function o(t, e, i, n, r) {
    return (void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e);
  }
  function a(t, e = 0, i = 1, n, r) {
    ((t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r)));
  }
  function l(t, { x: e, y: i }) {
    (a(t.x, e.translate, e.scale, e.originPoint),
      a(t.y, i.translate, i.scale, i.originPoint));
  }
  function u(t, e, i, n = !1) {
    let s, o;
    let a = i.length;
    if (a) {
      e.x = e.y = 1;
      for (let u = 0; u < a; u++) {
        o = (s = i[u]).projectionDelta;
        let { visualElement: a } = s.options;
        (!a || !a.props.style || "contents" !== a.props.style.display) &&
          (n &&
            s.options.layoutScroll &&
            s.scroll &&
            s !== s.root &&
            d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
          o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
          n && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
      }
      (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
        e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
    }
  }
  function h(t, e) {
    ((t.min = t.min + e), (t.max = t.max + e));
  }
  function c(t, e, i, r, s = 0.5) {
    let o = (0, n.t)(t.min, t.max, s);
    a(t, e, i, o, r);
  }
  function d(t, e) {
    (c(t.x, e.x, e.scaleX, e.scale, e.originX),
      c(t.y, e.y, e.scaleY, e.scale, e.originY));
  }
}
