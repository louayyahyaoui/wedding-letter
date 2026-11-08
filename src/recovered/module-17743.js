// Recovered from the public Golden Letter demo; original module 17743.
export default function (t, e, i) {
  i.d(e, {
    G: function () {
      return o;
    },
    M: function () {
      return a;
    },
  });
  var n = i(20569),
    r = i(74115),
    s = i(72589);
  function o(t) {
    return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
  }
  function a(t) {
    return !!(o(t) || t.variants);
  }
}
