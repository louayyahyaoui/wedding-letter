// Recovered from the public Golden Letter demo; original module 45329.
export default function (e, n, a) {
  function o() {
    for (var e = arguments.length, n = Array(e), a = 0; a < e; a++)
      n[a] = arguments[a];
    return n
      .map((e) => (null == e ? void 0 : e.trim()))
      .filter(Boolean)
      .join(", ");
  }
  function t(e, n) {
    return e.sameVenueAsMain && n
      ? o(n.venueName, n.address, n.city)
      : o(e.venue, e.address, e.city);
  }
  function r(e, n) {
    var a, o;
    return e.sameVenueAsMain && n
      ? (null === (o = n.mapLink) || void 0 === o ? void 0 : o.trim()) || ""
      : (null === (a = e.mapLink) || void 0 === a ? void 0 : a.trim()) || "";
  }
  a.d(n, {
    Z: function () {
      return r;
    },
    o: function () {
      return t;
    },
  });
}
