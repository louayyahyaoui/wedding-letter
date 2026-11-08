// Recovered from the public Golden Letter demo; original module 77556.
export default function (t, e, i) {
  i.d(e, {
    j: function () {
      return s;
    },
  });
  var n = i(98639),
    r = i(87487);
  function s(t, { layout: e, layoutId: i }) {
    return (
      r.G.has(t) ||
      t.startsWith("origin") ||
      ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
    );
  }
}
