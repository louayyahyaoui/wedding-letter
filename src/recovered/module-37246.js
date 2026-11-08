// Recovered from the public Golden Letter demo; original module 37246.
export default function (t, e, i) {
  i.d(e, {
    S: function () {
      return p;
    },
  });
  var n = i(45699),
    r = i(29711),
    s = i(59111),
    o = i(87093);
  let a = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  };
  var l = i(62035);
  function u(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  let h = ["duration", "bounce"],
    c = ["stiffness", "damping", "mass"];
  function d(t, e) {
    return e.some((e) => void 0 !== t[e]);
  }
  function p(t = a.visualDuration, e = a.bounce) {
    let i;
    let p =
        "object" != typeof t
          ? { visualDuration: t, keyframes: [0, 1], bounce: e }
          : t,
      { restSpeed: f, restDelta: m } = p,
      v = p.keyframes[0],
      g = p.keyframes[p.keyframes.length - 1],
      y = { done: !1, value: v },
      {
        stiffness: x,
        damping: w,
        mass: P,
        duration: T,
        velocity: b,
        isResolvedFromDuration: A,
      } = (function (t) {
        let e = {
          velocity: a.velocity,
          stiffness: a.stiffness,
          damping: a.damping,
          mass: a.mass,
          isResolvedFromDuration: !1,
          ...t,
        };
        if (!d(t, c) && d(t, h)) {
          if (t.visualDuration) {
            let i = (2 * Math.PI) / (1.2 * t.visualDuration),
              n = i * i,
              r = 2 * (0, s.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
            e = { ...e, mass: a.mass, stiffness: n, damping: r };
          } else {
            let i = (function ({
              duration: t = a.duration,
              bounce: e = a.bounce,
              velocity: i = a.velocity,
              mass: n = a.mass,
            }) {
              let o, h;
              (0, l.K)(
                t <= (0, r.w)(a.maxDuration),
                "Spring duration must be 10 seconds or less",
              );
              let c = 1 - e;
              ((c = (0, s.u)(a.minDamping, a.maxDamping, c)),
                (t = (0, s.u)(a.minDuration, a.maxDuration, (0, r.X)(t))),
                c < 1
                  ? ((o = (e) => {
                      let n = e * c,
                        r = n * t;
                      return 0.001 - ((n - i) / u(e, c)) * Math.exp(-r);
                    }),
                    (h = (e) => {
                      let n = e * c * t,
                        r = Math.pow(c, 2) * Math.pow(e, 2) * t,
                        s = u(Math.pow(e, 2), c);
                      return (
                        ((n * i + i - r) *
                          Math.exp(-n) *
                          (-o(e) + 0.001 > 0 ? -1 : 1)) /
                        s
                      );
                    }))
                  : ((o = (e) => -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                    (h = (e) => t * t * (i - e) * Math.exp(-e * t))));
              let d = (function (t, e, i) {
                let n = i;
                for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                return n;
              })(o, h, 5 / t);
              if (((t = (0, r.w)(t)), isNaN(d)))
                return {
                  stiffness: a.stiffness,
                  damping: a.damping,
                  duration: t,
                };
              {
                let e = Math.pow(d, 2) * n;
                return {
                  stiffness: e,
                  damping: 2 * c * Math.sqrt(n * e),
                  duration: t,
                };
              }
            })(t);
            (e = { ...e, ...i, mass: a.mass }).isResolvedFromDuration = !0;
          }
        }
        return e;
      })({ ...p, velocity: -(0, r.X)(p.velocity || 0) }),
      S = b || 0,
      D = w / (2 * Math.sqrt(x * P)),
      V = g - v,
      M = (0, r.X)(Math.sqrt(x / P)),
      E = 5 > Math.abs(V);
    if (
      (f || (f = E ? a.restSpeed.granular : a.restSpeed.default),
      m || (m = E ? a.restDelta.granular : a.restDelta.default),
      D < 1)
    ) {
      let t = u(M, D);
      i = (e) =>
        g -
        Math.exp(-D * M * e) *
          (((S + D * M * V) / t) * Math.sin(t * e) + V * Math.cos(t * e));
    } else if (1 === D) i = (t) => g - Math.exp(-M * t) * (V + (S + M * V) * t);
    else {
      let t = M * Math.sqrt(D * D - 1);
      i = (e) => {
        let i = Math.exp(-D * M * e),
          n = Math.min(t * e, 300);
        return (
          g - (i * ((S + D * M * V) * Math.sinh(n) + t * V * Math.cosh(n))) / t
        );
      };
    }
    let C = {
      calculatedDuration: (A && T) || null,
      next: (t) => {
        let e = i(t);
        if (A) y.done = t >= T;
        else {
          let n = 0;
          D < 1 && (n = 0 === t ? (0, r.w)(S) : (0, o.P)(i, t, e));
          let s = Math.abs(n) <= f,
            a = Math.abs(g - e) <= m;
          y.done = s && a;
        }
        return ((y.value = y.done ? g : e), y);
      },
      toString: () => {
        let t = Math.min((0, n.iI)(C), n.EO),
          e = (0, n.wk)((e) => C.next(t * e).value, t, 30);
        return t + "ms " + e;
      },
    };
    return C;
  }
}
