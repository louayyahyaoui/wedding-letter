// Recovered from the public Golden Letter demo; original module 67098.
export default function (t, e, i) {
  i.d(e, {
    U: function () {
      return o;
    },
  });
  var n = i(23999),
    r = i(87487),
    s = i(67971);
  function o(t, e, i) {
    let o = (0, s.U)(t, e, i);
    for (let i in t)
      ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
        (o[
          -1 !== r._.indexOf(i)
            ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
            : i
        ] = t[i]);
    return o;
  }
}
