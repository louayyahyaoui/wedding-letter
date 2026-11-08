// Recovered from the public Golden Letter demo; original module 1125.
export default function (t, e, i) {
  i.d(e, {
    N: function () {
      return n;
    },
  });
  function n(t, { style: e, vars: i }, n, r) {
    for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)), i))
      t.style.setProperty(s, i[s]);
  }
}
