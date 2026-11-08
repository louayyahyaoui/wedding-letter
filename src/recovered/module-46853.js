// Recovered from the public Golden Letter demo; original module 46853.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return l;
    },
  });
  var n = a(57437),
    r = a(32059);
  function l(e) {
    let {
        verse: t,
        lang: language = "en",
        className: a = "",
        arabicClassName: l = "",
        translationClassName: s = "",
        referenceClassName: i = "",
      } = e,
      o = (0, r.Ul)(null == t ? void 0 : t.id);
    if (!t || !o) return null;
    let c = "translation" !== t.display,
      d = "arabic" !== t.display && language !== "ar",
      translation = language === "fr" && o.id === "an-naba-8" ? "Et Nous vous avons créés par couples" : o.translation,
      reference = o.id === "an-naba-8" ? ({ en: o.reference, fr: "An-Naba | Verset 8", ar: "سورة النبأ | الآية ٨" }[language] || o.reference) : o.reference;
    return (0, n.jsxs)("figure", {
      className: a,
      children: [
        c &&
          (0, n.jsx)("p", {
            dir: "rtl",
            lang: "ar",
            style: {
              fontFamily:
                "var(--font-heading-ar), 'Katibeh', 'Scheherazade New', serif",
            },
            className: l,
            children: o.arabic,
          }),
        d &&
          (0, n.jsxs)("p", {
            className: s,
            children: ["“", translation, "”"],
          }),
        (0, n.jsxs)("figcaption", {
          className: i,
          children: ["— ", reference],
        }),
      ],
    });
  }
}
