// Recovered from the public Golden Letter demo; original module 17282.
export default function (e, t, a) {
  a.d(t, {
    J$: function () {
      return l;
    },
    Xi: function () {
      return r;
    },
    gN: function () {
      return s;
    },
  });
  var n = a(57437);
  let r =
      "box-border min-h-11 w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-base text-brand-900 outline-none transition-colors placeholder:text-brand-800/35 focus:border-brand-500 disabled:cursor-not-allowed sm:text-sm",
    l = "".concat(r, " appearance-auto");
  function s(e) {
    let { label: t, hint: a, required: r, children: l, className: s = "" } = e;
    return (0, n.jsxs)("label", {
      className: "block ".concat(s),
      children: [
        (0, n.jsxs)("span", {
          className:
            "mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-800/70",
          children: [
            t,
            r &&
              (0, n.jsx)("span", {
                className: "text-brand-500",
                children: "*",
              }),
          ],
        }),
        l,
        a &&
          (0, n.jsx)("span", {
            className: "mt-1 block text-xs text-brand-800/50",
            children: a,
          }),
      ],
    });
  }
}
