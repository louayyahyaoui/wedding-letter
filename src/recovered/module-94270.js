// Recovered from the public Golden Letter demo; original module 94270.
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    default: function () {
      return o;
    },
  });
  var a = n(2265),
    i = n(30667);
  function o(e) {
    let { contentId: t, value: n, region: o } = e;
    return (
      (0, a.useEffect)(() => {
        (0, i.M_)({ contentId: t, value: n, region: o });
      }, [t, n, o]),
      null
    );
  }
}
