// Recovered from the public Golden Letter demo; original module 27492.
export default function (t, e, i) {
  i.d(e, {
    $C: function () {
      return u;
    },
    RW: function () {
      return r;
    },
    aQ: function () {
      return s;
    },
    px: function () {
      return o;
    },
    vh: function () {
      return a;
    },
    vw: function () {
      return l;
    },
  });
  let n = (t) => ({
      test: (e) =>
        "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
      parse: parseFloat,
      transform: (e) => `${e}${t}`,
    }),
    r = n("deg"),
    s = n("%"),
    o = n("px"),
    a = n("vh"),
    l = n("vw"),
    u = {
      ...s,
      parse: (t) => s.parse(t) / 100,
      transform: (t) => s.transform(100 * t),
    };
}
