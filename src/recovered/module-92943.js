// Recovered from the public Golden Letter demo; original module 92943.
export default function (t, e, i) {
  i.d(e, {
    J: function () {
      return a;
    },
  });
  var n = i(74305),
    r = i(27492),
    s = i(15472),
    o = i(65516);
  let a = {
    test: (0, o.i)("hsl", "hue"),
    parse: (0, o.d)("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      r.aQ.transform((0, s.N)(e)) +
      ", " +
      r.aQ.transform((0, s.N)(i)) +
      ", " +
      (0, s.N)(n.Fq.transform(o)) +
      ")",
  };
}
