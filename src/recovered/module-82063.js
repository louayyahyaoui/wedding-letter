// Recovered from the public Golden Letter demo; original module 82063.
export default function (t, e, i) {
  function n({ top: t, left: e, right: i, bottom: n }) {
    return { x: { min: e, max: i }, y: { min: t, max: n } };
  }
  function r({ x: t, y: e }) {
    return { top: e.min, right: t.max, bottom: e.max, left: t.min };
  }
  function s(t, e) {
    if (!e) return t;
    let i = e({ x: t.left, y: t.top }),
      n = e({ x: t.right, y: t.bottom });
    return { top: i.y, left: i.x, bottom: n.y, right: n.x };
  }
  i.d(e, {
    d7: function () {
      return s;
    },
    i8: function () {
      return n;
    },
    z2: function () {
      return r;
    },
  });
}
