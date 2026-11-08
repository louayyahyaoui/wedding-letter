// Recovered from the public Golden Letter demo; original module 84901.
export default function (e, n, r) {
  r.d(n, {
    D: function () {
      return i;
    },
    Jc: function () {
      return s;
    },
    Qw: function () {
      return l;
    },
    R3: function () {
      return u;
    },
    fn: function () {
      return d;
    },
    kE: function () {
      return c;
    },
    px: function () {
      return o;
    },
  });
  var t = r(33013);
  let i = [
      { id: "carattere", label: "Classic", description: "Clear & readable" },
      { id: "parisienne", label: "Script", description: "Elegant cursive" },
      {
        id: "great-vibes",
        label: "Flourish",
        description: "Decorative swirls",
      },
      { id: "cormorant", label: "Serif", description: "Timeless editorial" },
    ],
    a = new Set(i.map((e) => e.id));
  function o(e) {
    return e && a.has(e) ? e : "carattere";
  }
  function l(e, n, r, i) {
    return "ar" === i ? o(e) : (0, t.Kx)(n, r) ? "cormorant" : o(e);
  }
  let u = i.find((e) => "cormorant" === e.id);
  function s(e, n, r) {
    var t, i;
    if ("ar" === n) return "";
    let a = r
      ? l(
          e,
          null !== (t = r.groomName) && void 0 !== t ? t : "",
          null !== (i = r.brideName) && void 0 !== i ? i : "",
          n,
        )
      : o(e);
    return "parisienne" === a ? "" : "inv-name-".concat(a);
  }
  function c(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return [
      "ar" === (n = e.language)
        ? "inv-lang-ar"
        : "hi" === n
          ? "inv-lang-hi"
          : "",
      s(e.nameFont, e.language, e.couple),
      r,
    ]
      .filter(Boolean)
      .join(" ");
  }
  function d(e) {
    return e > 20
      ? "text-base leading-snug sm:text-lg"
      : e > 12
        ? "text-lg leading-snug sm:text-xl"
        : "text-xl leading-snug sm:text-2xl";
  }
}
