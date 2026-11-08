// Recovered from the public Golden Letter demo; original module 33013.
export default function (e, n, r) {
  function t(e) {
    return e.replace(/(^|[^A-Za-z0-9'])([A-Za-z])/g, (e, n, r) =>
      "".concat(n).concat(r.toUpperCase()),
    );
  }
  r.d(n, {
    Kx: function () {
      return l;
    },
    Ls: function () {
      return t;
    },
    b: function () {
      return a;
    },
    v2: function () {
      return u;
    },
    z7: function () {
      return s;
    },
  });
  let i = /[A-Za-z]/;
  function a(e) {
    return e.replace(/[^\s-]+/g, (e) => {
      let n = e.match(/^([^A-Za-z]*)([A-Za-z])([\s\S]*)$/);
      if (!n) return e;
      let [, r, t, i] = n;
      return (
        r + t.toUpperCase() + i.replace(/[A-Za-z]/g, (e) => e.toLowerCase())
      );
    });
  }
  function o(e) {
    return e.replace(/[^A-Za-z]/g, "");
  }
  function l(e, n) {
    let r = [e.trim(), n.trim()].filter(Boolean);
    return (
      !!r.some((e) => i.test(e)) &&
      r.some(
        (e) =>
          i.test(e) &&
          !(function (e) {
            let n = e.trim();
            return (
              !i.test(n) ||
              n
                .split(/\s+/)
                .filter(Boolean)
                .every((e) => {
                  if (!o(e)) return !0;
                  let n = e.match(/^[^A-Za-z]*([A-Za-z])([\s\S]*)$/);
                  if (!n) return !1;
                  let [, r, t] = n,
                    i = o(t);
                  return (
                    r === r.toUpperCase() &&
                    r !== r.toLowerCase() &&
                    i === i.toLowerCase()
                  );
                })
            );
          })(e),
      )
    );
  }
  function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = e.trim().length;
    return n
      ? r <= 70
        ? "text-[1.4rem] leading-snug"
        : r <= 140
          ? "text-[1.25rem] leading-snug"
          : r <= 240
            ? "text-[1.1rem] leading-relaxed"
            : r <= 380
              ? "text-base leading-relaxed"
              : "text-sm leading-relaxed"
      : r <= 70
        ? "text-xl leading-snug sm:text-2xl"
        : r <= 140
          ? "text-lg leading-snug sm:text-2xl"
          : r <= 240
            ? "text-lg leading-relaxed sm:text-xl"
            : r <= 380
              ? "text-base leading-relaxed sm:text-lg"
              : "text-sm leading-relaxed sm:text-base";
  }
  function s(e) {
    let n = e.trim().length;
    return n <= 70
      ? { size: 48, lineHeight: 64 }
      : n <= 140
        ? { size: 44, lineHeight: 60 }
        : n <= 240
          ? { size: 38, lineHeight: 52 }
          : n <= 380
            ? { size: 34, lineHeight: 48 }
            : { size: 30, lineHeight: 42 };
  }
}
