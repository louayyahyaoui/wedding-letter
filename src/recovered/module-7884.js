// Recovered from the public Golden Letter demo; original module 7884.
export default function (n, t, e) {
  e.d(t, {
    O: function () {
      return i;
    },
    X: function () {
      return r;
    },
  });
  let o = "ft_promo";
  function r(n) {
    if (n)
      try {
        let t = new URLSearchParams(n).get("promo");
        if (!t) return;
        let e = (function (n) {
          let t = n
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9_-]+/g, "")
            .slice(0, 64);
          return t.length > 0 ? t : null;
        })(t);
        if (!e) return;
        let r = { name: e, expiresAt: Date.now() + 864e5 };
        localStorage.setItem(o, JSON.stringify(r));
      } catch (n) {}
  }
  function i() {
    try {
      let n = localStorage.getItem(o);
      if (!n) return null;
      let t = JSON.parse(n);
      if (!t.name || !t.expiresAt) return null;
      if (Date.now() > t.expiresAt) return (localStorage.removeItem(o), null);
      return t.name;
    } catch (n) {
      return null;
    }
  }
}
