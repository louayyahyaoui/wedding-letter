// Recovered from the public Golden Letter demo; original module 90401.
export default function (t, e, i) {
  i.d(e, {
    Ei: function () {
      return c;
    },
    lw: function () {
      return d;
    },
    mP: function () {
      return o;
    },
  });
  var n = i(74305),
    r = i(27492),
    s = i(87487);
  let o = (t) => t === n.Rx || t === r.px,
    a = (t, e) => parseFloat(t.split(", ")[e]),
    l =
      (t, e) =>
      (i, { transform: n }) => {
        if ("none" === n || !n) return 0;
        let r = n.match(/^matrix3d\((.+)\)$/u);
        if (r) return a(r[1], e);
        {
          let e = n.match(/^matrix\((.+)\)$/u);
          return e ? a(e[1], t) : 0;
        }
      },
    u = new Set(["x", "y", "z"]),
    h = s._.filter((t) => !u.has(t));
  function c(t) {
    let e = [];
    return (
      h.forEach((i) => {
        let n = t.getValue(i);
        void 0 !== n &&
          (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
      }),
      e
    );
  }
  let d = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
      t.max - t.min - parseFloat(e) - parseFloat(i),
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
      t.max - t.min - parseFloat(e) - parseFloat(i),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: l(4, 13),
    y: l(5, 14),
  };
  ((d.translateX = d.x), (d.translateY = d.y));
}
