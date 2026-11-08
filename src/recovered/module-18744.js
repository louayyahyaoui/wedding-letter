// Recovered from the public Golden Letter demo; original module 18744.
export default function (n, t, e) {
  e.d(t, {
    O: function () {
      return u;
    },
  });
  let o = "ft_visitor_id",
    r = null;
  function i() {
    try {
      if ("undefined" != typeof crypto && "randomUUID" in crypto)
        return crypto.randomUUID().replace(/-/g, "");
    } catch (n) {}
    return ""
      .concat(Date.now().toString(36))
      .concat(Math.random().toString(36).slice(2, 12));
  }
  function u() {
    if (r) return r;
    try {
      let n = localStorage.getItem(o);
      if (n && /^[A-Za-z0-9_-]{8,64}$/.test(n)) return ((r = n), n);
      let t = i();
      return (localStorage.setItem(o, t), (r = t), t);
    } catch (n) {
      return (r = i());
    }
  }
}
