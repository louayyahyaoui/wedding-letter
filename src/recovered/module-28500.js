// Recovered from the public Golden Letter demo; original module 28500.
export default function (t, e, i) {
  i.d(e, {
    w: function () {
      return h;
    },
  });
  var n = i(45699),
    r = i(56596),
    s = i(48771),
    o = i(1327),
    a = i(34005),
    l = i(22521),
    u = i(45414);
  function h(t, e, { delay: i = 0, transitionOverride: h, type: c } = {}) {
    var d;
    let {
      transition: p = t.getDefaultTransition(),
      transitionEnd: f,
      ...m
    } = e;
    h && (p = h);
    let v = [],
      g = c && t.animationState && t.animationState.getState()[c];
    for (let e in m) {
      let s = t.getValue(
          e,
          null !== (d = t.latestValues[e]) && void 0 !== d ? d : null,
        ),
        h = m[e];
      if (
        void 0 === h ||
        (g &&
          (function ({ protectedKeys: t, needsAnimating: e }, i) {
            let n = t.hasOwnProperty(i) && !0 !== e[i];
            return ((e[i] = !1), n);
          })(g, e))
      )
        continue;
      let c = { delay: i, ...(0, n.ev)(p || {}, e) },
        f = !1;
      if (window.MotionHandoffAnimation) {
        let i = (0, a.s)(t);
        if (i) {
          let t = window.MotionHandoffAnimation(i, e, u.Wi);
          null !== t && ((c.startTime = t), (f = !0));
        }
      }
      ((0, o.K)(t, e),
        s.start(
          (0, l.v)(
            e,
            s,
            h,
            t.shouldReduceMotion && r.z.has(e) ? { type: !1 } : c,
            t,
            f,
          ),
        ));
      let y = s.animation;
      y && v.push(y);
    }
    return (
      f &&
        Promise.all(v).then(() => {
          u.Wi.update(() => {
            f && (0, s.C)(t, f);
          });
        }),
      v
    );
  }
}
