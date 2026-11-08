// Recovered from the public Golden Letter demo; original module 48771.
export default function (t, e, i) {
  i.d(e, {
    C: function () {
      return o;
    },
  });
  var n = i(4581),
    r = i(3078),
    s = i(67043);
  function o(t, e) {
    let {
      transitionEnd: i = {},
      transition: o = {},
      ...a
    } = (0, s.x)(t, e) || {};
    for (let e in (a = { ...a, ...i })) {
      let i = (0, n.Y)(a[e]);
      t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
    }
  }
}
