// Recovered from the public Golden Letter demo; original module 62479.
export default function (n, t, e) {
  (e.d(t, {
    Tq: function () {
      return o;
    },
  }),
    e(59014));
  function o() {
    if ("undefined" == typeof document) return null;
    let n = document.cookie.match(/(?:^|;\s*)ft_country=([^;]+)/);
    return (function (n) {
      if (!n) return null;
      let t = n.trim().toUpperCase();
      return /^[A-Z]{2}$/.test(t) && "XX" !== t ? t : null;
    })(n ? decodeURIComponent(n[1]) : null);
  }
}
