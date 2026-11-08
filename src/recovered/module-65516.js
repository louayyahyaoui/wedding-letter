// Recovered from the public Golden Letter demo; original module 65516.
export default function (t, e, i) {
  i.d(e, {
    i: function () {
      return s;
    },
    d: function () {
      return o;
    },
  });
  var n = i(66941);
  let r =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    s = (t, e) => (i) =>
      !!(
        ("string" == typeof i && r.test(i) && i.startsWith(t)) ||
        (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
      ),
    o = (t, e, i) => (r) => {
      if ("string" != typeof r) return r;
      let [s, o, a, l] = r.match(n.K);
      return {
        [t]: parseFloat(s),
        [e]: parseFloat(o),
        [i]: parseFloat(a),
        alpha: void 0 !== l ? parseFloat(l) : 1,
      };
    };
}
