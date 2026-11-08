// Recovered from the public Golden Letter demo; original module 83206.
export default function (t, e, i) {
  i.d(e, {
    V: function () {
      return h;
    },
    P: function () {
      return f;
    },
  });
  var n = i(33964);
  let r =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  var s = i(66941),
    o = i(15472);
  let a = "number",
    l = "color",
    u =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function h(t) {
    let e = t.toString(),
      i = [],
      r = { color: [], number: [], var: [] },
      s = [],
      o = 0,
      h = e
        .replace(
          u,
          (t) => (
            n.$.test(t)
              ? (r.color.push(o), s.push(l), i.push(n.$.parse(t)))
              : t.startsWith("var(")
                ? (r.var.push(o), s.push("var"), i.push(t))
                : (r.number.push(o), s.push(a), i.push(parseFloat(t))),
            ++o,
            "${}"
          ),
        )
        .split("${}");
    return { values: i, split: h, indexes: r, types: s };
  }
  function c(t) {
    return h(t).values;
  }
  function d(t) {
    let { split: e, types: i } = h(t),
      r = e.length;
    return (t) => {
      let s = "";
      for (let u = 0; u < r; u++)
        if (((s += e[u]), void 0 !== t[u])) {
          let e = i[u];
          e === a
            ? (s += (0, o.N)(t[u]))
            : e === l
              ? (s += n.$.transform(t[u]))
              : (s += t[u]);
        }
      return s;
    };
  }
  let p = (t) => ("number" == typeof t ? 0 : t),
    f = {
      test: function (t) {
        var e, i;
        return (
          isNaN(t) &&
          "string" == typeof t &&
          ((null === (e = t.match(s.K)) || void 0 === e ? void 0 : e.length) ||
            0) +
            ((null === (i = t.match(r)) || void 0 === i ? void 0 : i.length) ||
              0) >
            0
        );
      },
      parse: c,
      createTransformer: d,
      getAnimatableNone: function (t) {
        let e = c(t);
        return d(t)(e.map(p));
      },
    };
}
