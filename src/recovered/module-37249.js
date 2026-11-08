// Recovered from the public Golden Letter demo; original module 37249.
export default function (t, e, i) {
  i.d(e, {
    f: function () {
      return r;
    },
    t: function () {
      return o;
    },
  });
  let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
    r = n("--"),
    s = n("var(--"),
    o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
    a =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
}
