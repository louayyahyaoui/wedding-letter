// Recovered from the public Golden Letter demo; original module 92251.
export default function (e, t, a) {
  a.d(t, {
    L: function () {
      return l;
    },
    l: function () {
      return r;
    },
  });
  var n = a(2265);
  let r = "ft:invitation-progress";
  function l(e, t) {
    (0, n.useEffect)(() => {
      window.dispatchEvent(new CustomEvent(r, { detail: t > 0 ? e / t : 1 }));
    }, [e, t]);
  }
}
