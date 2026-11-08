// Recovered from the public Golden Letter demo; original module 93292.
export default function (e, r, n) {
  n.d(r, {
    LE: function () {
      return p;
    },
    Pl: function () {
      return m;
    },
    qD: function () {
      return o;
    },
    up: function () {
      return i;
    },
    xX: function () {
      return s;
    },
  });
  var t = n(59014);
  let i = "_standard";
  function u(e, r) {
    let n = Number(e);
    return Number.isFinite(n) && n > 0 ? n : r;
  }
  function a(e, r) {
    return "pdf" === r
      ? { current: u("2.99", 2.99), list: u("4.99", 4.99) }
      : "reel" === r
        ? { current: u("7.99", 7.99), list: u("14.99", 14.99) }
        : "website" === r
          ? { current: u("10", 10), list: u("21.99", 21.99) }
          : void 0;
  }
  function c(e, r) {
    return e && /^[a-zA-Z]{2}$/.test(e)
      ? e.toUpperCase()
      : r && /^[a-zA-Z]{2}$/.test(r) && "gl" !== r.toLowerCase()
        ? r.toUpperCase()
        : (0, t.kt)(null != r ? r : "gl");
  }
  function s(e, r, n, i) {
    let u = a(e, r);
    if (!u) return;
    let s = c(i, n),
      m = (0, t.Rm)(u, (0, t.IA)(s));
    return { current: m.current, list: m.list };
  }
  function m(e, r, n, i) {
    let u = a(e, r);
    if (!u) return;
    let s = c(i, n);
    return (0, t.Rm)(u, (0, t.IA)(s));
  }
  function p(e, r, n, t) {
    var u;
    return "test" === r
      ? { current: 1, list: 1 }
      : null !==
            (u = s(
              e || i,
              "pdf" === r || "reel" === r || "website" === r ? r : "website",
              n,
              t,
            )) && void 0 !== u
        ? u
        : { current: 0, list: 0 };
  }
  function o(e, r) {
    return (0, t.IA)(c(e, r));
  }
}
