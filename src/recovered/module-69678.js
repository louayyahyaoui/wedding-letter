// Recovered from the public Golden Letter demo; original module 69678.
export default function (e, n, r) {
  function t(e) {
    return "bride-first" === e ? "bride-first" : "groom-first";
  }
  function i(e) {
    let n = e.brideNickname || e.brideName || "Bride",
      r = e.groomNickname || e.groomName || "Groom";
    return "groom-first" === t(e.nameOrder)
      ? {
          first: r,
          second: n,
          firstParents: e.groomParents,
          secondParents: e.brideParents,
          firstRole: "groom",
          secondRole: "bride",
        }
      : {
          first: n,
          second: r,
          firstParents: e.brideParents,
          secondParents: e.groomParents,
          firstRole: "bride",
          secondRole: "groom",
        };
  }
  function a(e) {
    let n = e.brideName || e.brideNickname || "Bride",
      r = e.groomName || e.groomNickname || "Groom";
    return "groom-first" === t(e.nameOrder)
      ? {
          first: r,
          second: n,
          firstParents: e.groomParents,
          secondParents: e.brideParents,
        }
      : {
          first: n,
          second: r,
          firstParents: e.brideParents,
          secondParents: e.groomParents,
        };
  }
  function o(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " & ",
      { first: r, second: t } = i(e);
    return "".concat(r).concat(n).concat(t);
  }
  r.d(n, {
    T2: function () {
      return t;
    },
    Ux: function () {
      return i;
    },
    fc: function () {
      return a;
    },
    p7: function () {
      return o;
    },
  });
}
