// Recovered from the public Golden Letter demo; original module 57201.
export default function (e, t, a) {
  a.d(t, {
    H: function () {
      return l;
    },
    l: function () {
      return r;
    },
  });
  var n = a(2265);
  let r = (0, n.createContext)(!1);
  function l(e) {
    let t = (0, n.useContext)(r);
    return "live" === e || ("live-preview" === e && t);
  }
}
