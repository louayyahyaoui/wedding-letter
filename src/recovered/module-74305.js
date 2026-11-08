// Recovered from the public Golden Letter demo; original module 74305.
export default function (t, e, i) {
  i.d(e, {
    Fq: function () {
      return s;
    },
    Rx: function () {
      return r;
    },
    bA: function () {
      return o;
    },
  });
  var n = i(59111);
  let r = {
      test: (t) => "number" == typeof t,
      parse: parseFloat,
      transform: (t) => t,
    },
    s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
    o = { ...r, default: 1 };
}
