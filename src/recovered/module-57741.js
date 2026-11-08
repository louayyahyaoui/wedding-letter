// Recovered from the public Golden Letter demo; original module 57741.
export default function (e, n, a) {
  a.d(n, {
    BY: function () {
      return l;
    },
    Io: function () {
      return i;
    },
    QS: function () {
      return s;
    },
    Tb: function () {
      return t;
    },
    Zk: function () {
      return c;
    },
    pv: function () {
      return r;
    },
    vX: function () {
      return u;
    },
  });
  var o = a(35536);
  let t = ["DD-MM-YYYY", "MM-DD-YYYY"];
  function r(e) {
    return "MM-DD-YYYY" === e ? "MM-DD-YYYY" : "DD-MM-YYYY";
  }
  function i(e, n) {
    return "ar" === e
      ? "ar"
      : "hi" === e || "fr" === e || "es" === e
        ? (0, o.nD)(e)
        : "MM-DD-YYYY" === r(n)
          ? "en-US"
          : "en-GB";
  }
  function l(e, n) {
    var a;
    let o =
      null !== (a = null == n ? void 0 : n.trim()) && void 0 !== a ? a : "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(o)) {
      let n = o.slice(8, 10),
        a = o.slice(5, 7),
        t = o.slice(0, 4);
      return "MM-DD-YYYY" === e
        ? "".concat(a, "-").concat(n, "-").concat(t)
        : "".concat(n, "-").concat(a, "-").concat(t);
    }
    return e;
  }
  function u(e, n, a) {
    if (!e) return null;
    let t = new Date("".concat(e, "T00:00:00"));
    if (Number.isNaN(t.getTime())) return null;
    let r = "ar" === n ? (0, o.nD)(n) : i(n, a);
    return t.toLocaleDateString(r, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  function s(e, n, a) {
    if (!e) return null;
    let o = new Date("".concat(e, "T00:00:00"));
    return Number.isNaN(o.getTime())
      ? null
      : o.toLocaleDateString(i(n, a), {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
  }
  function c(e, n) {
    if (!e) return "";
    let a = new Date("".concat(e, "T00:00:00"));
    if (Number.isNaN(a.getTime())) return "";
    let o = String(a.getDate()).padStart(2, "0"),
      t = String(a.getMonth() + 1).padStart(2, "0"),
      i = String(a.getFullYear());
    return "MM-DD-YYYY" === r(n)
      ? "".concat(t, " \xb7 ").concat(o, " \xb7 ").concat(i)
      : "".concat(o, " \xb7 ").concat(t, " \xb7 ").concat(i);
  }
}
