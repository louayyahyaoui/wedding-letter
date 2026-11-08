// Recovered from the public Golden Letter demo; original module 23482.
export default function (t, e, i) {
  i.d(e, {
    e: function () {
      return p;
    },
  });
  var n = i(96674),
    r = i(57511),
    s = i(17444),
    o = i(22005),
    a = i(87487),
    l = i(67402),
    u = i(16582),
    h = i(37380),
    c = i(33390),
    d = i(67098);
  class p extends r.J {
    constructor() {
      (super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = n.dO));
    }
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (a.G.has(e)) {
        let t = (0, o.A)(e);
        return (t && t.default) || 0;
      }
      return ((e = u.s.has(e) ? e : (0, s.D)(e)), t.getAttribute(e));
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return (0, d.U)(t, e, i);
    }
    build(t, e, i) {
      (0, l.i)(t, e, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, e, i, n) {
      (0, c.K)(t, e, i, n);
    }
    mount(t) {
      ((this.isSVGTag = (0, h.a)(t.tagName)), super.mount(t));
    }
  }
}
