// Recovered from the public Golden Letter demo; original module 69491.
export default function (n, t, e) {
  e.d(t, {
    BA: function () {
      return l;
    },
    Bu: function () {
      return i;
    },
    DL: function () {
      return u;
    },
    R9: function () {
      return r;
    },
    bR: function () {
      return c;
    },
    eZ: function () {
      return a;
    },
    iS: function () {
      return o;
    },
  });
  let o = 10,
    r = 80,
    i = ["text", "number", "phone"];
  function u() {
    return "f_".concat(Math.random().toString(36).slice(2, 10));
  }
  function l(n) {
    if (!Array.isArray(n)) return [];
    let t = [];
    for (let e of n) {
      if (!e || "object" != typeof e) continue;
      let { id: n, label: u, type: l } = e,
        c = "string" == typeof u ? u.trim().slice(0, r) : "";
      if (
        "string" == typeof n &&
        n &&
        c &&
        (t.push({ id: n, label: c, type: i.includes(l) ? l : "text" }),
        t.length >= o)
      )
        break;
    }
    return t;
  }
  function c(n, t) {
    let e = (null != n ? n : []).map((n) => ({ id: n.id, label: n.label })),
      o = new Set(e.map((n) => n.id));
    for (let n of null != t ? t : []) {
      var r;
      for (let t of null !== (r = n.customAnswers) && void 0 !== r ? r : [])
        o.has(t.fieldId) ||
          (o.add(t.fieldId), e.push({ id: t.fieldId, label: t.label || "—" }));
    }
    return e;
  }
  function a(n, t) {
    var e, o, r;
    return (
      (null === (r = n.customAnswers) || void 0 === r
        ? void 0
        : null === (o = r.find((n) => n.fieldId === t)) || void 0 === o
          ? void 0
          : null === (e = o.value) || void 0 === e
            ? void 0
            : e.trim()) || ""
    );
  }
}
