// Recovered from the public Golden Letter demo; original module 87457.
export default function (t, e, i) {
  i.d(e, {
    o: function () {
      return n;
    },
  });
  let n = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2);
}
