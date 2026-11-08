// Recovered from the public Golden Letter demo; original module 59282.
export default function (t, e, i) {
  i.d(e, {
    W: function () {
      return c;
    },
  });
  var n = i(50813),
    r = i(57511),
    s = i(37249),
    o = i(22005),
    a = i(4469),
    l = i(87487),
    u = i(1125),
    h = i(67971);
  class c extends r.J {
    constructor() {
      (super(...arguments), (this.type = "html"), (this.renderInstance = u.N));
    }
    readValueFromInstance(t, e) {
      if (l.G.has(e)) {
        let t = (0, o.A)(e);
        return (t && t.default) || 0;
      }
      {
        let i = window.getComputedStyle(t),
          n = ((0, s.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
        return "string" == typeof n ? n.trim() : n;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: e }) {
      return (0, n.J)(t, e);
    }
    build(t, e, i) {
      (0, a.r)(t, e, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return (0, h.U)(t, e, i);
    }
  }
}
