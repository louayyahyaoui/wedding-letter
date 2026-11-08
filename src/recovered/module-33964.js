// Recovered from the public Golden Letter demo; original module 33964.
export default function (t, e, i) {
  i.d(e, {
    $: function () {
      return o;
    },
  });
  var n = i(87325),
    r = i(92943),
    s = i(18859);
  let o = {
    test: (t) => s.m.test(t) || n.$.test(t) || r.J.test(t),
    parse: (t) =>
      s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : n.$.parse(t),
    transform: (t) =>
      "string" == typeof t
        ? t
        : t.hasOwnProperty("red")
          ? s.m.transform(t)
          : r.J.transform(t),
  };
}
