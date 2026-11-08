// Recovered from the public Golden Letter demo; original module 18859.
export default function (t, e, i) {
  i.d(e, {
    m: function () {
      return u;
    },
  });
  var n = i(59111),
    r = i(74305),
    s = i(15472),
    o = i(65516);
  let a = (t) => (0, n.u)(0, 255, t),
    l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
    u = {
      test: (0, o.i)("rgb", "red"),
      parse: (0, o.d)("red", "green", "blue"),
      transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
        "rgba(" +
        l.transform(t) +
        ", " +
        l.transform(e) +
        ", " +
        l.transform(i) +
        ", " +
        (0, s.N)(r.Fq.transform(n)) +
        ")",
    };
}
