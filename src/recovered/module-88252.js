// Recovered from the public Golden Letter demo; original module 88252.
export default function (e, t, a) {
  a.d(t, {
    Hr: function () {
      return o;
    },
    K3: function () {
      return r;
    },
    Tm: function () {
      return i;
    },
    qP: function () {
      return s;
    },
  });
  var n = a(2773);
  function r(e, t) {
    var a;
    let n = [
      {
        key: "main",
        label:
          (null === (a = e.occasionType) || void 0 === a ? void 0 : a.trim()) ||
          "Main event",
      },
    ];
    return (
      t.forEach((e, t) => {
        var a;
        n.push({
          key: String(t),
          label:
            (null === (a = e.name) || void 0 === a ? void 0 : a.trim()) ||
            "Event ".concat(t + 1),
        });
      }),
      n
    );
  }
  function l(e) {
    return (
      String(null != e ? e : "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "") || "event"
    );
  }
  function s(e) {
    let t = e.map((e) => String(null != e ? e : "").trim()).filter(Boolean);
    return 0 === t.length
      ? "celebration"
      : 1 === t.length
        ? t[0]
        : 2 === t.length
          ? "".concat(t[0], " & ").concat(t[1])
          : "".concat(t.slice(0, -1).join(", "), " & ").concat(t[t.length - 1]);
  }
  function i(e, t, a, i) {
    if (!e || 0 === a.length) return [];
    let o = r(t, a),
      c = (function (e, t) {
        let a = [e.occasionType, ...t.map((e) => e.name)],
          n = new Map();
        return a.map((e) => {
          var t;
          let a = l(e),
            r = null !== (t = n.get(a)) && void 0 !== t ? t : 0;
          return (
            n.set(a, r + 1),
            0 === r ? a : "".concat(a, "-").concat(r + 1)
          );
        });
      })(t, a),
      d = o.length,
      u = [];
    for (let t = 1; t < 1 << d; t += 1) {
      if (t === (1 << d) - 1) continue;
      let a = [];
      for (let e = 0; e < d; e += 1) t & (1 << e) && a.push(e);
      let r = (function (e, t) {
        let a = (Array.isArray(t) ? t : [t])
          .map((e) =>
            String(null != e ? e : "")
              .trim()
              .toLowerCase(),
          )
          .filter(Boolean);
        if (0 === a.length) return "";
        let n = e
            .trim()
            .toLowerCase()
            .replace(/^-+|-+$/g, ""),
          r = "".concat(n, "-").concat(a.join("--"), "-invite");
        return r.length <= 63 ? r : "";
      })(
        e,
        a.map((e) => {
          var t, a;
          return null !== (a = c[e]) && void 0 !== a
            ? a
            : l(null === (t = o[e]) || void 0 === t ? void 0 : t.label);
        }),
      );
      if (!r) continue;
      let m = a.map((e) => o[e].key),
        x = a.map((e) => o[e].label);
      u.push({ keys: m, label: s(x), query: r, url: (0, n.DF)(r, i) });
    }
    return (
      u.sort((e, t) =>
        e.keys.length !== t.keys.length
          ? e.keys.length - t.keys.length
          : e.query.localeCompare(t.query),
      ),
      u
    );
  }
  function o(e) {
    var t, a, n, r;
    let l =
      null === (t = e.shareOccasionLabel) || void 0 === t ? void 0 : t.trim();
    return !l ||
      (null !==
        (r =
          null === (a = e.additionalEvents) || void 0 === a
            ? void 0
            : a.length) && void 0 !== r
        ? r
        : 0) > 0 ||
      (null === (n = e.event.occasionType) || void 0 === n
        ? void 0
        : n.trim()) === l
      ? e
      : { ...e, event: { ...e.event, occasionType: l } };
  }
}
