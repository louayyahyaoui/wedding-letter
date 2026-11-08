// Recovered from the public Golden Letter demo; original module 2773.
export default function (n, t, e) {
  e.d(t, {
    DF: function () {
      return I;
    },
    I3: function () {
      return y;
    },
    IT: function () {
      return S;
    },
    OC: function () {
      return v;
    },
    T4: function () {
      return E;
    },
    UA: function () {
      return c;
    },
    Ux: function () {
      return g;
    },
    Vy: function () {
      return N;
    },
    WS: function () {
      return f;
    },
    fu: function () {
      return u;
    },
    hz: function () {
      return b;
    },
    jV: function () {
      return s;
    },
    m1: function () {
      return m;
    },
    m7: function () {
      return O;
    },
    nJ: function () {
      return T;
    },
    nP: function () {
      return h;
    },
    wS: function () {
      return d;
    },
    zc: function () {
      return p;
    },
  });
  var o = e(93292),
    r = e(59014),
    i = e(62479);
  let u = "in";
  function l(n, t) {
    var e, i, u;
    let l = null != t ? t : (0, r.kt)(n),
      c =
        null !== (e = (0, o.xX)(o.up, "pdf", n, l)) && void 0 !== e
          ? e
          : { current: 0, list: 0 },
      a =
        null !== (i = (0, o.xX)(o.up, "reel", n, l)) && void 0 !== i
          ? i
          : { current: 0, list: 0 },
      d =
        null !== (u = (0, o.xX)(o.up, "website", n, l)) && void 0 !== u
          ? u
          : { current: 0, list: 0 };
    return {
      website: d.current,
      reel: a.current,
      pdf: c.current,
      list: { pdf: c.list, reel: a.list, website: d.list },
    };
  }
  let c = {
    in: {
      id: "in",
      label: "India",
      countryCode: "IN",
      locale: "en-IN",
      hreflang: "en-in",
      currency: "INR",
      currencySymbol: "₹",
      price: l("in"),
      paymentProvider: "razorpay",
      phonePlaceholder: "+91 90000 00000",
    },
    ae: {
      id: "ae",
      label: "United Arab Emirates",
      countryCode: "AE",
      locale: "en-AE",
      hreflang: "en-ae",
      currency: "AED",
      currencySymbol: "AED ",
      price: l("ae"),
      paymentProvider: "stripe",
      phonePlaceholder: "+971 50 000 0000",
    },
    gl: {
      id: "gl",
      label: "Global",
      countryCode: "US",
      locale: "en-US",
      hreflang: "en-us",
      currency: "USD",
      currencySymbol: "$",
      price: l("gl"),
      paymentProvider: "stripe",
      phonePlaceholder: "+1 202 555 0123",
    },
    my: {
      id: "my",
      label: "Malaysia",
      countryCode: "MY",
      locale: "ms-MY",
      hreflang: "en-my",
      currency: "MYR",
      currencySymbol: "RM ",
      price: l("my"),
      paymentProvider: "stripe",
      phonePlaceholder: "+60 12-345 6789",
    },
    id: {
      id: "id",
      label: "Indonesia",
      countryCode: "ID",
      locale: "id-ID",
      hreflang: "en-id",
      currency: "IDR",
      currencySymbol: "Rp ",
      price: l("id"),
      paymentProvider: "stripe",
      phonePlaceholder: "+62 812-3456-7890",
    },
  };
  function a(n) {
    return "in" === n || "ae" === n || "gl" === n || "my" === n || "id" === n;
  }
  function d(n) {
    return a(n) ? n : "gl";
  }
  function s(n) {
    if (!n) return null;
    let t = n.trim().toLowerCase();
    return "gl" === t ? null : /^[a-z]{2}$/.test(t) ? t.toUpperCase() : null;
  }
  function f(n) {
    let t = (0, i.Tq)();
    return t ? ("IN" === t ? "in" : (0, r.KY)(t) ? t.toLowerCase() : "gl") : n;
  }
  function m(n) {
    return "link" === n || "all" === n
      ? "website"
      : "pdf" === n || "reel" === n || "website" === n || "test" === n
        ? n
        : "website";
  }
  function v(n, t) {
    return !(n > t) || n <= 0 ? 0 : Math.round((1 - t / n) * 100);
  }
  function p(n) {
    let t = m(n);
    return "pdf" === t || "test" === t;
  }
  function y(n) {
    let t = m(n);
    return "reel" === t || "test" === t;
  }
  function g(n) {
    let t = m(n);
    return "website" === t || "test" === t;
  }
  function h(n) {
    switch (m(n)) {
      case "pdf":
        return "PDF version";
      case "reel":
        return "Reel video";
      case "test":
        return "Payment testing";
      default:
        return "Invitation website";
    }
  }
  Object.keys(c);
  let b = "theforevertale.com";
  function S(n) {
    return b;
  }
  function O(n, t) {
    return "".concat(n, ".").concat(b);
  }
  function I(n, t) {
    return "https://".concat(O(n, t));
  }
  function N() {
    var n;
    if ("undefined" == typeof document) return u;
    let t =
        null !== (n = document.cookie.match(/(?:^|;\s*)ft_region=([^;]+)/)) &&
        void 0 !== n
          ? n
          : document.cookie.match(/(?:^|;\s*)wg_region=([^;]+)/),
      e = t ? decodeURIComponent(t[1]).trim() : null;
    return a(e) ? e : u;
  }
  function E(n, t, e) {
    let i = (0, o.qD)(e, n);
    return (0, r.lb)(i, t);
  }
  function T(n, t) {
    return ("/" === t ? "" : t.startsWith("/") ? t : "/".concat(t)) || "/";
  }
}
