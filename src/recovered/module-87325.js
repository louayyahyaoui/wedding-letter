// Recovered from the public Golden Letter demo; original module 87325.
export default function (t, e, i) {
  i.d(e, {
    $: function () {
      return r;
    },
  });
  var n = i(18859);
  let r = {
    test: (0, i(65516).i)("#"),
    parse: function (t) {
      let e = "",
        i = "",
        n = "",
        r = "";
      return (
        t.length > 5
          ? ((e = t.substring(1, 3)),
            (i = t.substring(3, 5)),
            (n = t.substring(5, 7)),
            (r = t.substring(7, 9)))
          : ((e = t.substring(1, 2)),
            (i = t.substring(2, 3)),
            (n = t.substring(3, 4)),
            (r = t.substring(4, 5)),
            (e += e),
            (i += i),
            (n += n),
            (r += r)),
        {
          red: parseInt(e, 16),
          green: parseInt(i, 16),
          blue: parseInt(n, 16),
          alpha: r ? parseInt(r, 16) / 255 : 1,
        }
      );
    },
    transform: n.m.transform,
  };
}
