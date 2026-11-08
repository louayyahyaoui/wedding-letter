// Recovered from the public Golden Letter demo; original module 78097.
export default function (e, r, n) {
  n.d(r, {
    $2: function () {
      return t;
    },
    Cp: function () {
      return a;
    },
    FT: function () {
      return R;
    },
    Hj: function () {
      return i;
    },
    Hk: function () {
      return D;
    },
    Pe: function () {
      return m;
    },
    Yk: function () {
      return u;
    },
    bt: function () {
      return A;
    },
    cR: function () {
      return s;
    },
    mo: function () {
      return d;
    },
    t6: function () {
      return c;
    },
    vE: function () {
      return p;
    },
    w9: function () {
      return N;
    },
    x9: function () {
      return o;
    },
  });
  let t = ["en", "ar", "fr"],
    i = "en",
    u = "ft_lang";
  function a(e) {
    return "en" === e || "ar" === e || "fr" === e;
  }
  function c(e) {
    return "ar" === e;
  }
  let s = {
      en: "English",
      hi: "हिन्दी",
      ar: "العربية",
      fr: "Fran\xe7ais",
      es: "Espa\xf1ol",
    },
    m = {
      en: "Change to English",
      hi: "हिंदी में बदलें",
      ar: "التغيير إلى العربية",
      fr: "Passer au fran\xe7ais",
      es: "Cambiar a espa\xf1ol",
    },
    p = { en: "en-GB", hi: "hi-IN", ar: "ar", fr: "fr-FR", es: "es-ES" },
    o = { en: "", hi: "site-lang-hi", ar: "site-lang-ar", fr: "", es: "" },
    y = new Set([
      "/",
      "/designs",
      "/pricing",
      "/reel-wedding-invitation",
      "/wedding-invitation-website",
      "/convert-card-to-digital",
      "/custom-wedding-invitation-design",
      "/whatsapp-wedding-invitation-reminders",
      "/digital-wedding-album",
      "/muslim-wedding-invitation",
      "/wedding-invitation",
      "/nikah-invitation",
      "/nikah-invitation-card",
      "/walima-invitation",
      "/reception-invitation",
      "/engagement-invitation",
      "/rsvp-wedding-invitation",
      "/interactive-wedding-invitation",
      "/digital-wedding-invitation",
      "/premium-wedding-invitation",
      "/whatsapp-wedding-invitation",
      "/tap-to-open-wedding-invitation",
      "/cinematic-wedding-invitation",
      "/how-to-create-wedding-invitation-website",
      "/contact-us",
      "/privacy-policy",
      "/payment-policy",
      "/refund-policy",
      "/terms-and-conditions",
    ]),
    l = ["/designs/"];
  function D(e) {
    let r = e.length > 1 ? e.replace(/\/+$/, "") : e;
    return y.has(r) || l.some((e) => r.startsWith(e));
  }
  function d(e, r) {
    let n = r.startsWith("/") ? r : "/".concat(r);
    return e === i ? n : "/" === n ? "/".concat(e) : "/".concat(e).concat(n);
  }
  function A(e) {
    let r = /^\/(hi|ar|fr|es|en)(?=\/|$)/.exec(e);
    if (!r) return { lang: null, path: e };
    let n = e.slice(r[0].length);
    return { lang: r[1], path: n || "/" };
  }
  function R(e, r) {
    if (e === i || !r.startsWith("/") || r.startsWith("//")) return r;
    let n = r.search(/[?#]/),
      t = -1 === n ? r : r.slice(0, n),
      u = -1 === n ? "" : r.slice(n);
    return A(t).lang ? r : D(t) ? "".concat(d(e, t)).concat(u) : r;
  }
  function N() {
    if ("undefined" == typeof document) return i;
    let e = new RegExp("(?:^|; )".concat(u, "=([^;]+)")).exec(document.cookie),
      r = e ? decodeURIComponent(e[1]) : null;
    return a(r) ? r : i;
  }
}
