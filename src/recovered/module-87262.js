// Recovered from the public Golden Letter demo; original module 87262.
export default function (e, n, r) {
  r.d(n, {
    $q: function () {
      return m;
    },
    C0: function () {
      return s;
    },
    OM: function () {
      return h;
    },
    Ry: function () {
      return b;
    },
  });
  let t = /^(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm|a\.m\.|p\.m\.)?$/i,
    i = /\s*(?:-|–|—|to)\s*/i,
    a =
      /^(?:from|at|starting(?:\s+at)?|starts?(?:\s+at)?|between|approx\.?|around|about)\s+/i;
  function o(e) {
    return 60 * e.hours + e.minutes;
  }
  function l(e, n) {
    let r = null == n ? void 0 : n.toLowerCase().replace(/\./g, "");
    return "pm" === r && e < 12 ? e + 12 : "am" === r && 12 === e ? 0 : e;
  }
  function u(e, n) {
    let r = e.trim().match(t);
    if (!r) return null;
    let i = Number(r[1]),
      a = r[2] ? Number(r[2]) : 0;
    if (!Number.isFinite(i) || i > 23 || a > 59) return null;
    let o = r[3] || n;
    if (o) {
      if (i > 12) return null;
      i = l(i, o);
    } else i <= 12 && n && (i = l(i, n));
    return { hours: i, minutes: a };
  }
  function s(e) {
    if (!e) return null;
    let n = e.trim();
    if (!n) return null;
    for (let e = 0; e < 3; e++) {
      let e = n.replace(a, "").trim();
      if (e === n) break;
      n = e;
    }
    if (!n) return null;
    let r = n.split(i).filter(Boolean);
    if (r.length >= 2) {
      var t, o;
      let e = r[0],
        n = r.slice(1).join("-"),
        i =
          null === (t = n.match(/(am|pm|a\.m\.|p\.m\.)\s*$/i)) || void 0 === t
            ? void 0
            : t[1],
        a =
          null === (o = e.match(/(am|pm|a\.m\.|p\.m\.)\s*$/i)) || void 0 === o
            ? void 0
            : o[1],
        l = u(n),
        s = u(e, a || i);
      return s ? { start: s, end: null != l ? l : void 0 } : null;
    }
    let l = u(n);
    return l ? { start: l } : null;
  }
  let c = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    d = { hi: "hi-IN", fr: "fr-FR", es: "es-ES" };
  function f(e, n) {
    let r = n ? d[n] : void 0;
    if (r)
      return new Date(2e3, 0, 1, e.hours, e.minutes).toLocaleTimeString(r, {
        hour: "numeric",
        minute: "2-digit",
      });
    let t = "ar" === n,
      i = e.hours >= 12 ? (t ? "م" : "PM") : t ? "ص" : "AM",
      a = e.hours % 12;
    0 === a && (a = 12);
    let o = "".concat(a, ":").concat(String(e.minutes).padStart(2, "0"));
    return ""
      .concat(t ? o.replace(/[0-9]/g, (e) => c[Number(e)]) : o, " ")
      .concat(i);
  }
  function m(e, n) {
    if (!e) return "";
    let r = s(e);
    return r
      ? r.end
        ? "".concat(f(r.start, n), " – ").concat(f(r.end, n))
        : f(r.start, n)
      : e.trim();
  }
  function g(e, n, r) {
    let t = e.trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
    let i = new Date(
      Number(t.slice(0, 4)),
      Number(t.slice(5, 7)) - 1,
      Number(t.slice(8, 10)),
      n,
      r,
      0,
      0,
    );
    return Number.isNaN(i.getTime()) ? null : i;
  }
  function b(e, n) {
    var r, t;
    if (!(null == e ? void 0 : e.trim())) return null;
    let i = s(n),
      a =
        null !== (r = null == i ? void 0 : i.start.hours) && void 0 !== r
          ? r
          : 0,
      o =
        null !== (t = null == i ? void 0 : i.start.minutes) && void 0 !== t
          ? t
          : 0;
    return g(e.trim(), a, o);
  }
  function h(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
      t = b(e, n);
    if (!t) return null;
    let i = s(n);
    if (null == i ? void 0 : i.end) {
      let n = g(e.trim(), i.end.hours, i.end.minutes);
      return n
        ? o(i.end) <= o(i.start)
          ? new Date(n.getTime() + 864e5)
          : n
        : null;
    }
    return new Date(t.getTime() + 36e5 * r);
  }
}
