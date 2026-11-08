// Recovered from the public Golden Letter demo; original module 63466.
export default function (t, e, i) {
  i.d(e, {
    d: function () {
      return a;
    },
  });
  var n = i(67043),
    r = i(28500);
  function s(t, e, i = {}) {
    var a;
    let l = (0, n.x)(
        t,
        e,
        "exit" === i.type
          ? null === (a = t.presenceContext) || void 0 === a
            ? void 0
            : a.custom
          : void 0,
      ),
      { transition: u = t.getDefaultTransition() || {} } = l || {};
    i.transitionOverride && (u = i.transitionOverride);
    let h = l ? () => Promise.all((0, r.w)(t, l, i)) : () => Promise.resolve(),
      c =
        t.variantChildren && t.variantChildren.size
          ? (n = 0) => {
              let {
                delayChildren: r = 0,
                staggerChildren: a,
                staggerDirection: l,
              } = u;
              return (function (t, e, i = 0, n = 0, r = 1, a) {
                let l = [],
                  u = (t.variantChildren.size - 1) * n,
                  h = 1 === r ? (t = 0) => t * n : (t = 0) => u - t * n;
                return (
                  Array.from(t.variantChildren)
                    .sort(o)
                    .forEach((t, n) => {
                      (t.notify("AnimationStart", e),
                        l.push(
                          s(t, e, { ...a, delay: i + h(n) }).then(() =>
                            t.notify("AnimationComplete", e),
                          ),
                        ));
                    }),
                  Promise.all(l)
                );
              })(t, e, r + n, a, l, i);
            }
          : () => Promise.resolve(),
      { when: d } = u;
    if (!d) return Promise.all([h(), c(i.delay)]);
    {
      let [t, e] = "beforeChildren" === d ? [h, c] : [c, h];
      return t().then(() => e());
    }
  }
  function o(t, e) {
    return t.sortNodePosition(e);
  }
  function a(t, e, i = {}) {
    let o;
    if ((t.notify("AnimationStart", e), Array.isArray(e)))
      o = Promise.all(e.map((e) => s(t, e, i)));
    else if ("string" == typeof e) o = s(t, e, i);
    else {
      let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
      o = Promise.all((0, r.w)(t, s, i));
    }
    return o.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
}
