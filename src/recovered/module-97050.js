// Recovered from the public Golden Letter demo; original module 97050.
export default function (e, n, a) {
  (a.r(n),
    a.d(n, {
      default: function () {
        return i;
      },
    }));
  var t = a(57437),
    r = a(82119);
  function i(e) {
    let { href: n, children: a, className: i, localize: o = !0, ...u } = e,
      l = (0, r.Z$)();
    return (0, t.jsx)("a", {
      href: o ? l(n) : n,
      className: i,
      ...u,
      children: a,
    });
  }
}
