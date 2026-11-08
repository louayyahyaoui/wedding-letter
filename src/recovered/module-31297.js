// Recovered from the public Golden Letter demo; original module 31297.
export default function (t, e, i) {
  function n(t) {
    let e = [{}, {}];
    return (
      null == t ||
        t.values.forEach((t, i) => {
          ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
        }),
      e
    );
  }
  function r(t, e, i, r) {
    if ("function" == typeof e) {
      let [s, o] = n(r);
      e = e(void 0 !== i ? i : t.custom, s, o);
    }
    if (
      ("string" == typeof e && (e = t.variants && t.variants[e]),
      "function" == typeof e)
    ) {
      let [s, o] = n(r);
      e = e(void 0 !== i ? i : t.custom, s, o);
    }
    return e;
  }
  i.d(e, {
    o: function () {
      return r;
    },
  });
}
