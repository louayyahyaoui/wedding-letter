// Recovered from the public Golden Letter demo; original module 39545.
export default function (t, e, i) {
  i.d(e, {
    e: function () {
      return c;
    },
    m: function () {
      return h;
    },
  });
  var n = i(90401),
    r = i(45414);
  let s = new Set(),
    o = !1,
    a = !1;
  function l() {
    if (a) {
      let t = Array.from(s).filter((t) => t.needsMeasurement),
        e = new Set(t.map((t) => t.element)),
        i = new Map();
      (e.forEach((t) => {
        let e = (0, n.Ei)(t);
        e.length && (i.set(t, e), t.render());
      }),
        t.forEach((t) => t.measureInitialState()),
        e.forEach((t) => {
          t.render();
          let e = i.get(t);
          e &&
            e.forEach(([e, i]) => {
              var n;
              null === (n = t.getValue(e)) || void 0 === n || n.set(i);
            });
        }),
        t.forEach((t) => t.measureEndState()),
        t.forEach((t) => {
          void 0 !== t.suspendedScrollY &&
            window.scrollTo(0, t.suspendedScrollY);
        }));
    }
    ((a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear());
  }
  function u() {
    s.forEach((t) => {
      (t.readKeyframes(), t.needsMeasurement && (a = !0));
    });
  }
  function h() {
    (u(), l());
  }
  class c {
    constructor(t, e, i, n, r, s = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...t]),
        (this.onComplete = e),
        (this.name = i),
        (this.motionValue = n),
        (this.element = r),
        (this.isAsync = s));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (s.add(this),
            o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: t,
        name: e,
        element: i,
        motionValue: n,
      } = this;
      for (let r = 0; r < t.length; r++)
        if (null === t[r]) {
          if (0 === r) {
            let r = null == n ? void 0 : n.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (i && e) {
              let n = i.readValue(e, s);
              null != n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]));
          } else t[r] = t[r - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        s.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), s.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
}
