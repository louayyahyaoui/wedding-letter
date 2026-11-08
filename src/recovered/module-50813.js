// Recovered from the public Golden Letter demo; original module 50813.
export default function (t, e, i) {
  i.d(e, {
    J: function () {
      return s;
    },
    z: function () {
      return o;
    },
  });
  var n = i(82063),
    r = i(47227);
  function s(t, e) {
    return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
  }
  function o(t, e, i) {
    let n = s(t, i),
      { scroll: o } = e;
    return (o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n);
  }
}
