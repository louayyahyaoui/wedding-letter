// Recovered from the public Golden Letter demo; original module 6735.
export default function (e, n, a) {
  a.d(n, {
    Xr: function () {
      return i;
    },
    b1: function () {
      return t;
    },
    yn: function () {
      return o;
    },
  });
  let t = [
      { id: "en", label: "English", sample: "You're invited" },
      { id: "ar", label: "العربية", sample: "أنتم مدعوون" },
      { id: "fr", label: "Fran\xe7ais", sample: "Vous \xeates invit\xe9s" },
    ],
    r = t.map((e) => e.id);
  function i(e) {
    return "string" == typeof e && r.includes(e);
  }
  function o(e) {
    return i(e) ? e : "en";
  }
}
