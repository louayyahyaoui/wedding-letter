// Recovered from the public Golden Letter demo; original module 49637.
export default function (t, e, i) {
  i.d(e, {
    oO: function () {
      return s;
    },
  });
  var n = i(2265),
    r = i(64252);
  function s(t = !0) {
    let e = (0, n.useContext)(r.O);
    if (null === e) return [!0, null];
    let { isPresent: i, onExitComplete: s, register: o } = e,
      a = (0, n.useId)();
    (0, n.useEffect)(() => {
      t && o(a);
    }, [t]);
    let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
    return !i && s ? [!1, l] : [!0];
  }
}
