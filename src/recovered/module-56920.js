// Recovered from the public Golden Letter demo; original module 56920.
export default function (t, e, i) {
  i.d(e, {
    z: function () {
      return r;
    },
  });
  let n = (t, e) => (i) => e(t(i)),
    r = (...t) => t.reduce(n);
}
