// Recovered from the public Golden Letter demo; original module 40365.
export default function (e, t, a) {
  a.d(t, {
    Z: function () {
      return l;
    },
  });
  var n = a(57437),
    r = a(33013);
  function l(e) {
    let { text: t, className: a = "", compact: l = !1 } = e,
      s = (null != t ? t : "").trim();
    return s
      ? (0, n.jsx)("p", {
          className: "whitespace-pre-line font-heading italic "
            .concat((0, r.v2)(s, l), " ")
            .concat(a),
          children: s,
        })
      : null;
  }
}
