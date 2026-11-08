// Recovered from the public Golden Letter demo; original module 66676.
export default function (n, t, e) {
  e.d(t, {
    W: function () {
      return i;
    },
    n: function () {
      return r;
    },
  });
  let o = "ft_affiliate";
  function r(n) {
    if (n)
      try {
        let t = new URLSearchParams(n).get("af");
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
        let r = { id: e, expiresAt: Date.now() + 12096e5 };
        localStorage.setItem(o, JSON.stringify(r));
      } catch (n) {}
  }
  function i() {
    try {
      let n = localStorage.getItem(o);
      if (!n) return null;
      let t = JSON.parse(n);
      if (!t.id || !t.expiresAt) return null;
      if (Date.now() > t.expiresAt) return (localStorage.removeItem(o), null);
      return t.id;
    } catch (n) {
      return null;
    }
  }
}
