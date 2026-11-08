// Recovered from the public Golden Letter demo; original module 12787.
export default function (t, e, i) {
  function n(t) {
    return void 0 === t || 1 === t;
  }
  function r({ scale: t, scaleX: e, scaleY: i }) {
    return !n(t) || !n(e) || !n(i);
  }
  function s(t) {
    return (
      r(t) ||
      o(t) ||
      t.z ||
      t.rotate ||
      t.rotateX ||
      t.rotateY ||
      t.skewX ||
      t.skewY
    );
  }
  function o(t) {
    var e, i;
    return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
  }
  i.d(e, {
    D_: function () {
      return o;
    },
    Lj: function () {
      return r;
    },
    ud: function () {
      return s;
    },
  });
}
