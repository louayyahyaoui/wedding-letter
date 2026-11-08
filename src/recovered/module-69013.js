// Recovered from the public Golden Letter demo; original module 69013.
export default function (t, e, i) {
  function n(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function r(t, e) {
    let i = t.indexOf(e);
    i > -1 && t.splice(i, 1);
  }
  function s([...t], e, i) {
    let n = e < 0 ? t.length + e : e;
    if (n >= 0 && n < t.length) {
      let n = i < 0 ? t.length + i : i,
        [r] = t.splice(e, 1);
      t.splice(n, 0, r);
    }
    return t;
  }
  i.d(e, {
    cl: function () {
      return r;
    },
    uo: function () {
      return s;
    },
    y4: function () {
      return n;
    },
  });
}
