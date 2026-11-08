// Recovered from the public Golden Letter demo; original module 53576.
export default function (t, e, i) {
  i.d(e, {
    h: function () {
      return r;
    },
  });
  var n = i(2265);
  function r(t) {
    let e = (0, n.useRef)(null);
    return (null === e.current && (e.current = t()), e.current);
  }
}
