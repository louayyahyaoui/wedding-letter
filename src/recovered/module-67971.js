// Recovered from the public Golden Letter demo; original module 67971.
export default function (t, e, i) {
  i.d(e, {
    U: function () {
      return s;
    },
  });
  var n = i(77556),
    r = i(23999);
  function s(t, e, i) {
    var s;
    let { style: o } = t,
      a = {};
    for (let l in o)
      ((0, r.i)(o[l]) ||
        (e.style && (0, r.i)(e.style[l])) ||
        (0, n.j)(l, t) ||
        (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
          ? void 0
          : s.liveStyle) !== void 0) &&
        (a[l] = o[l]);
    return a;
  }
}
