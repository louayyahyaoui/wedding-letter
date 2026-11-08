// Recovered from the public Golden Letter demo; original module 56582.
export default function (e, n, a) {
  function o(e) {
    var n, a;
    return (
      null ===
        (a =
          null === (n = e.islamicContent) || void 0 === n
            ? void 0
            : n.bismillah) ||
      void 0 === a ||
      a
    );
  }
  function t(e) {
    var n, a;
    return (
      null ===
        (a =
          null === (n = e.islamicContent) || void 0 === n ? void 0 : n.verse) ||
      void 0 === a ||
      a
    );
  }
  function r(e) {
    let n = e.islamicContent;
    return !n || n.bismillah || n.verse;
  }
  function i(e) {
    return r(e)
      ? "With the blessings of Allah Almighty"
      : "With hearts full of love";
  }
  a.d(n, {
    B0: function () {
      return i;
    },
    Zy: function () {
      return l;
    },
    br: function () {
      return o;
    },
    fD: function () {
      return t;
    },
    fR: function () {
      return r;
    },
  });
  let l = { bismillah: !1, verse: !1 };
}
