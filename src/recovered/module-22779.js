// Recovered from the public Golden Letter demo; original module 22779.
export default function (t, e, i) {
  i.d(e, {
    h: function () {
      return l;
    },
  });
  var n = i(83206),
    r = i(66941);
  let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function o(t) {
    let [e, i] = t.slice(0, -1).split("(");
    if ("drop-shadow" === e) return t;
    let [n] = i.match(r.K) || [];
    if (!n) return t;
    let o = i.replace(n, ""),
      a = s.has(e) ? 1 : 0;
    return (n !== i && (a *= 100), e + "(" + a + o + ")");
  }
  let a = /\b([a-z-]*)\(.*?\)/gu,
    l = {
      ...n.P,
      getAnimatableNone: (t) => {
        let e = t.match(a);
        return e ? e.map(o).join(" ") : t;
      },
    };
}
