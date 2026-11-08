// Recovered from the public Golden Letter demo; original module 71992.
export default function (n, t, e) {
  e.d(t, {
    FS: function () {
      return u;
    },
    Hr: function () {
      return g;
    },
    IN: function () {
      return s;
    },
    Kn: function () {
      return m;
    },
    NR: function () {
      return h;
    },
    ew: function () {
      return p;
    },
    j_: function () {
      return y;
    },
    nr: function () {
      return a;
    },
    qx: function () {
      return f;
    },
    xM: function () {
      return l;
    },
  });
  var o = e(87262);
  let r = "main";
  function i(n) {
    let t = n.length;
    return (
      0 !== t &&
      n.every(
        (n) =>
          "number" == typeof n.order &&
          Number.isFinite(n.order) &&
          n.order >= 0 &&
          n.order < t,
      )
    );
  }
  function u(n) {
    return n.map((n, t) => ({ ...n, id: l(n, t) }));
  }
  function l(n, t) {
    var e;
    return (null === (e = n.id) || void 0 === e ? void 0 : e.trim())
      ? n.id
      : "extra-".concat(t);
  }
  function c(n, t) {
    return (
      !i(t) &&
      ("number" == typeof n.order || t.some((n) => "number" == typeof n.order))
    );
  }
  function a(n, t) {
    return t <= 0
      ? 0
      : Math.max(
          0,
          Math.min(
            Math.trunc("number" == typeof n && Number.isFinite(n) ? n : 0),
            t,
          ),
        );
  }
  function d(n, t, e) {
    let o = t.length;
    return o <= 0
      ? 0
      : i(t)
        ? "number" == typeof e && Number.isFinite(e)
          ? a(e, o)
          : "number" == typeof n.order && Number.isFinite(n.order)
            ? a(n.order, o)
            : 0
        : "number" == typeof n.order && Number.isFinite(n.order)
          ? a(n.order, o)
          : a(e, o);
  }
  function s(n, t, e) {
    let o = u(t),
      i = d(n, o, e);
    if (c(n, o)) {
      let n = [
        { order: i, entry: { kind: "main", id: r } },
        ...o.map((n) => ({
          order: "number" == typeof n.order ? n.order : Number.MAX_SAFE_INTEGER,
          entry: { kind: "extra", id: n.id },
        })),
      ];
      return (
        n.sort((n, t) => {
          let e = n.order - t.order;
          return 0 !== e
            ? e
            : "main" === n.entry.kind
              ? -1
              : "main" === t.entry.kind
                ? 1
                : 0;
        }),
        n.map((n) => n.entry)
      );
    }
    let l = [],
      a = 0;
    for (let n = 0; n <= t.length; n++)
      n === i
        ? l.push({ kind: "main", id: r })
        : a < o.length && (l.push({ kind: "extra", id: o[a].id }), (a += 1));
    return l;
  }
  function f(n, t) {
    let e = u(t),
      o = new Map(e.map((n) => [n.id, n])),
      r = [],
      i = 0;
    for (let t of (n.forEach((n, t) => {
      if ("main" === n.kind) i = t;
      else {
        let e = o.get(n.id);
        e && r.push({ ...e, order: t });
      }
    }),
    e))
      r.some((n) => n.id === t.id) ||
        r.push({ ...t, order: n.length + r.length });
    return (
      r.sort((n, t) => {
        var e, o;
        return (
          (null !== (e = n.order) && void 0 !== e ? e : 0) -
          (null !== (o = t.order) && void 0 !== o ? o : 0)
        );
      }),
      { mainEventOrder: a(i, r.length), additionalEvents: r }
    );
  }
  function m(n, t, e, o, r) {
    if (r && o && c(r, o)) {
      let c = u(o),
        a = [{ order: d(r, c, e), item: n }];
      for (let n = 0; n < t.length; n++) {
        var i, l;
        let e = t[n],
          o =
            null !== (l = c.find((n) => n.id === e.id)) && void 0 !== l
              ? l
              : (null === (i = e.id) || void 0 === i ? void 0 : i.trim())
                ? void 0
                : c[n];
        a.push({
          order:
            "number" == typeof (null == o ? void 0 : o.order)
              ? o.order
              : Number.MAX_SAFE_INTEGER,
          item: e,
        });
      }
      return (a.sort((n, t) => n.order - t.order), a.map((n) => n.item));
    }
    let s = r && o ? d(r, o, e) : a(e, t.length),
      f = [],
      m = 0;
    for (let e = 0; e <= t.length; e++)
      e === s ? f.push(n) : m < t.length && (f.push(t[m]), (m += 1));
    return f;
  }
  function v(n, t) {
    if (!(null == n ? void 0 : n.trim())) return null;
    let e = (0, o.Ry)(n, t);
    return e ? e.getTime() : null;
  }
  function p(n, t) {
    let e = [
      { kind: "main", ms: v(n.date, n.time), index: -1 },
      ...t.map((n, t) => ({
        kind: "extra",
        ms: v(n.date, n.time),
        index: t,
        extraId: n.id,
      })),
    ];
    e.sort((n, t) =>
      null != n.ms && null != t.ms && n.ms !== t.ms
        ? n.ms - t.ms
        : null != n.ms && null == t.ms
          ? -1
          : null == n.ms && null != t.ms
            ? 1
            : n.index - t.index,
    );
    let o = f(
      e.map((n) =>
        "main" === n.kind
          ? { kind: "main", id: r }
          : { kind: "extra", id: n.extraId },
      ),
      t,
    );
    return {
      mainEventOrder: o.mainEventOrder,
      eventOrder: o.mainEventOrder,
      additionalEvents: o.additionalEvents,
    };
  }
  function y(n) {
    return n.map((n, t) => ({ ...n, order: t }));
  }
  function g(n, t, e, o) {
    let i = s(t, e, o),
      u = new Map();
    i.forEach((n, t) => {
      u.set(n.id, t);
    });
    let l = 0;
    return n
      .map((n) => {
        var t, e, o;
        let { key: i, nextNamelessExtraIndex: c } =
          ((e = l),
          n.id === r
            ? { key: r, nextNamelessExtraIndex: e }
            : (null === (o = n.id) || void 0 === o ? void 0 : o.trim())
              ? { key: n.id, nextNamelessExtraIndex: e }
              : { key: "extra-".concat(e), nextNamelessExtraIndex: e + 1 });
        return (
          (l = c),
          {
            row: n,
            r:
              null !== (t = u.get(i)) && void 0 !== t
                ? t
                : Number.MAX_SAFE_INTEGER,
          }
        );
      })
      .sort((n, t) => n.r - t.r)
      .map((n) => {
        let { row: t } = n;
        return t;
      });
  }
  function h(n, t, e) {
    let o = d(n, t, e),
      r = f(s({ order: o }, t, o), t);
    return {
      event: { ...n, order: r.mainEventOrder },
      additionalEvents: r.additionalEvents,
      mainEventOrder: r.mainEventOrder,
    };
  }
}
