// Recovered from the public Golden Letter demo; original module 22521.
export default function (t, e, i) {
  i.d(e, {
    v: function () {
      return ti;
    },
  });
  var n = i(45699),
    r = i(29711),
    s = i(45414),
    o = i(24118);
  let a = { current: !1 };
  var l = i(56277);
  let u = (t, e, i) =>
    (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
  function h(t, e, i, n) {
    if (t === e && i === n) return l.Z;
    let r = (e) =>
      (function (t, e, i, n, r) {
        let s, o;
        let a = 0;
        do (s = u((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
        while (Math.abs(s) > 1e-7 && ++a < 12);
        return o;
      })(e, 0, 1, t, i);
    return (t) => (0 === t || 1 === t ? t : u(r(t), e, n));
  }
  var c = i(87457),
    d = i(63627);
  let p = h(0.33, 1.53, 0.69, 0.99),
    f = (0, d.M)(p),
    m = (0, c.o)(f),
    v = (t) =>
      (t *= 2) < 1 ? 0.5 * f(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
  var g = i(26378),
    y = i(94238),
    x = i(40504),
    w = i(39545),
    P = i(62035),
    T = i(83206);
  let b = (t, e) =>
      "zIndex" !== e &&
      !!(
        "number" == typeof t ||
        Array.isArray(t) ||
        ("string" == typeof t &&
          (T.P.test(t) || "0" === t) &&
          !t.startsWith("url("))
      ),
    A = (t) => null !== t;
  function S(t, { repeat: e, repeatType: i = "loop" }, n) {
    let r = t.filter(A),
      s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
    return s && void 0 !== n ? n : r[s];
  }
  class D {
    constructor({
      autoplay: t = !0,
      delay: e = 0,
      type: i = "keyframes",
      repeat: n = 0,
      repeatDelay: r = 0,
      repeatType: s = "loop",
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = x.X.now()),
        (this.options = {
          autoplay: t,
          delay: e,
          type: i,
          repeat: n,
          repeatDelay: r,
          repeatType: s,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        this._resolved || this.hasAttemptedResolve || (0, w.m)(),
        this._resolved
      );
    }
    onKeyframesResolved(t, e) {
      ((this.resolvedAt = x.X.now()), (this.hasAttemptedResolve = !0));
      let {
        name: i,
        type: r,
        velocity: s,
        delay: o,
        onComplete: l,
        onUpdate: u,
        isGenerator: h,
      } = this.options;
      if (
        !h &&
        !(function (t, e, i, r) {
          let s = t[0];
          if (null === s) return !1;
          if ("display" === e || "visibility" === e) return !0;
          let o = t[t.length - 1],
            a = b(s, e),
            l = b(o, e);
          return (
            (0, P.K)(
              a === l,
              `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`,
            ),
            !!a &&
              !!l &&
              ((function (t) {
                let e = t[0];
                if (1 === t.length) return !0;
                for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
              })(t) ||
                (("spring" === i || (0, n.xD)(i)) && r))
          );
        })(t, i, r, s)
      ) {
        if (a.current || !o) {
          (u && u(S(t, this.options, e)),
            l && l(),
            this.resolveFinishedPromise());
          return;
        }
        this.options.duration = 0;
      }
      let c = this.initPlayback(t, e);
      !1 !== c &&
        ((this._resolved = { keyframes: t, finalKeyframe: e, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(t, e) {
      return this.currentFinishedPromise.then(t, e);
    }
    flatten() {
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  }
  var V = i(59111),
    M = i(12006),
    E = i(56920),
    C = i(37246),
    R = i(87093);
  function k({
    keyframes: t,
    velocity: e = 0,
    power: i = 0.8,
    timeConstant: n = 325,
    bounceDamping: r = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = 0.5,
    restSpeed: h,
  }) {
    let c, d;
    let p = t[0],
      f = { done: !1, value: p },
      m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
      v = (t) =>
        void 0 === a
          ? l
          : void 0 === l
            ? a
            : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
      g = i * e,
      y = p + g,
      x = void 0 === o ? y : o(y);
    x !== y && (g = x - p);
    let w = (t) => -g * Math.exp(-t / n),
      P = (t) => x + w(t),
      T = (t) => {
        let e = w(t),
          i = P(t);
        ((f.done = Math.abs(e) <= u), (f.value = f.done ? x : i));
      },
      b = (t) => {
        m(f.value) &&
          ((c = t),
          (d = (0, C.S)({
            keyframes: [f.value, v(f.value)],
            velocity: (0, R.P)(P, t, f.value),
            damping: r,
            stiffness: s,
            restDelta: u,
            restSpeed: h,
          })));
      };
    return (
      b(0),
      {
        calculatedDuration: null,
        next: (t) => {
          let e = !1;
          return (d || void 0 !== c || ((e = !0), T(t), b(t)),
          void 0 !== c && t >= c)
            ? d.next(t - c)
            : (e || T(t), f);
        },
      }
    );
  }
  let L = h(0.42, 0, 1, 1),
    j = h(0, 0, 0.58, 1),
    F = h(0.42, 0, 0.58, 1);
  var B = i(81477);
  let O = {
      linear: l.Z,
      easeIn: L,
      easeInOut: F,
      easeOut: j,
      circIn: g.Z7,
      circInOut: g.X7,
      circOut: g.Bn,
      backIn: f,
      backInOut: m,
      backOut: p,
      anticipate: v,
    },
    $ = (t) => {
      if ((0, n.qE)(t)) {
        (0, P.k)(
          4 === t.length,
          "Cubic bezier arrays must contain four numerical values.",
        );
        let [e, i, n, r] = t;
        return h(e, i, n, r);
      }
      return "string" == typeof t
        ? ((0, P.k)(void 0 !== O[t], `Invalid easing type '${t}'`), O[t])
        : t;
    };
  var W = i(88843),
    U = i(46261);
  function I({
    duration: t = 300,
    keyframes: e,
    times: i,
    ease: n = "easeInOut",
  }) {
    let r = (0, B.N)(n) ? n.map($) : $(n),
      s = { done: !1, value: e[0] },
      o = (i && i.length === e.length ? i : (0, U.Y)(e)).map((e) => e * t),
      a = (0, W.s)(o, e, {
        ease: Array.isArray(r)
          ? r
          : e.map(() => r || F).splice(0, e.length - 1),
      });
    return {
      calculatedDuration: t,
      next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
    };
  }
  let N = (t) => {
      let e = ({ timestamp: e }) => t(e);
      return {
        start: () => s.Wi.update(e, !0),
        stop: () => (0, s.Pn)(e),
        now: () =>
          s.frameData.isProcessing ? s.frameData.timestamp : x.X.now(),
      };
    },
    X = { decay: k, inertia: k, tween: I, keyframes: I, spring: C.S },
    z = (t) => t / 100;
  class Y extends D {
    constructor(t) {
      (super(t),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          let { onStop: t } = this.options;
          t && t();
        }));
      let { name: e, motionValue: i, element: n, keyframes: r } = this.options,
        s = (null == n ? void 0 : n.KeyframeResolver) || w.e;
      ((this.resolver = new s(
        r,
        (t, e) => this.onKeyframesResolved(t, e),
        e,
        i,
        n,
      )),
        this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(t) {
      let e, i;
      let {
          type: r = "keyframes",
          repeat: s = 0,
          repeatDelay: o = 0,
          repeatType: a,
          velocity: l = 0,
        } = this.options,
        u = (0, n.xD)(r) ? r : X[r] || I;
      u !== I &&
        "number" != typeof t[0] &&
        ((e = (0, E.z)(z, (0, M.C)(t[0], t[1]))), (t = [0, 100]));
      let h = u({ ...this.options, keyframes: t });
      ("mirror" === a &&
        (i = u({ ...this.options, keyframes: [...t].reverse(), velocity: -l })),
        null === h.calculatedDuration && (h.calculatedDuration = (0, n.iI)(h)));
      let { calculatedDuration: c } = h,
        d = c + o;
      return {
        generator: h,
        mirroredGenerator: i,
        mapPercentToKeyframes: e,
        calculatedDuration: c,
        resolvedDuration: d,
        totalDuration: d * (s + 1) - o,
      };
    }
    onPostResolved() {
      let { autoplay: t = !0 } = this.options;
      (this.play(),
        "paused" !== this.pendingPlayState && t
          ? (this.state = this.pendingPlayState)
          : this.pause());
    }
    tick(t, e = !1) {
      let { resolved: i } = this;
      if (!i) {
        let { keyframes: t } = this.options;
        return { done: !0, value: t[t.length - 1] };
      }
      let {
        finalKeyframe: n,
        generator: r,
        mirroredGenerator: s,
        mapPercentToKeyframes: o,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: u,
        resolvedDuration: h,
      } = i;
      if (null === this.startTime) return r.next(0);
      let {
        delay: c,
        repeat: d,
        repeatType: p,
        repeatDelay: f,
        onUpdate: m,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, t))
        : this.speed < 0 &&
          (this.startTime = Math.min(t - u / this.speed, this.startTime)),
        e
          ? (this.currentTime = t)
          : null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = Math.round(t - this.startTime) * this.speed));
      let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
        g = this.speed >= 0 ? v < 0 : v > u;
      ((this.currentTime = Math.max(v, 0)),
        "finished" === this.state &&
          null === this.holdTime &&
          (this.currentTime = u));
      let y = this.currentTime,
        x = r;
      if (d) {
        let t = Math.min(this.currentTime, u) / h,
          e = Math.floor(t),
          i = t % 1;
        (!i && t >= 1 && (i = 1),
          1 === i && e--,
          (e = Math.min(e, d + 1)) % 2 &&
            ("reverse" === p
              ? ((i = 1 - i), f && (i -= f / h))
              : "mirror" === p && (x = s)),
          (y = (0, V.u)(0, 1, i) * h));
      }
      let w = g ? { done: !1, value: a[0] } : x.next(y);
      o && (w.value = o(w.value));
      let { done: P } = w;
      g ||
        null === l ||
        (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      let T =
        null === this.holdTime &&
        ("finished" === this.state || ("running" === this.state && P));
      return (
        T && void 0 !== n && (w.value = S(a, this.options, n)),
        m && m(w.value),
        T && this.finish(),
        w
      );
    }
    get duration() {
      let { resolved: t } = this;
      return t ? (0, r.X)(t.calculatedDuration) : 0;
    }
    get time() {
      return (0, r.X)(this.currentTime);
    }
    set time(t) {
      ((t = (0, r.w)(t)),
        (this.currentTime = t),
        null !== this.holdTime || 0 === this.speed
          ? (this.holdTime = t)
          : this.driver &&
            (this.startTime = this.driver.now() - t / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      let e = this.playbackSpeed !== t;
      ((this.playbackSpeed = t), e && (this.time = (0, r.X)(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: t = N, onPlay: e, startTime: i } = this.options;
      (this.driver || (this.driver = t((t) => this.tick(t))), e && e());
      let n = this.driver.now();
      (null !== this.holdTime
        ? (this.startTime = n - this.holdTime)
        : this.startTime
          ? "finished" === this.state && (this.startTime = n)
          : (this.startTime = null != i ? i : this.calcStartTime()),
        "finished" === this.state && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      ((this.state = "paused"),
        (this.holdTime =
          null !== (t = this.currentTime) && void 0 !== t ? t : 0));
    }
    complete() {
      ("running" !== this.state && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = "finished"));
      let { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      (null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
      return ((this.startTime = 0), this.tick(t, !0));
    }
  }
  let K = new Set(["opacity", "clipPath", "filter", "transform"]),
    Z = (0, i(90107).X)(() =>
      Object.hasOwnProperty.call(Element.prototype, "animate"),
    ),
    H = { anticipate: v, backInOut: m, circInOut: g.X7 };
  class q extends D {
    constructor(t) {
      super(t);
      let { name: e, motionValue: i, element: n, keyframes: r } = this.options;
      ((this.resolver = new y.s(
        r,
        (t, e) => this.onKeyframesResolved(t, e),
        e,
        i,
        n,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(t, e) {
      var i;
      let {
        duration: r = 300,
        times: s,
        ease: o,
        type: a,
        motionValue: l,
        name: u,
        startTime: h,
      } = this.options;
      if (!l.owner || !l.owner.current) return !1;
      if (
        ("string" == typeof o && (0, n.Vc)() && o in H && (o = H[o]),
        (i = this.options),
        (0, n.xD)(i.type) || "spring" === i.type || !(0, n.hR)(i.ease))
      ) {
        let {
            onComplete: e,
            onUpdate: i,
            motionValue: n,
            element: l,
            ...u
          } = this.options,
          h = (function (t, e) {
            let i = new Y({
                ...e,
                keyframes: t,
                repeat: 0,
                delay: 0,
                isGenerator: !0,
              }),
              n = { done: !1, value: t[0] },
              r = [],
              s = 0;
            for (; !n.done && s < 2e4;)
              (r.push((n = i.sample(s)).value), (s += 10));
            return {
              times: void 0,
              keyframes: r,
              duration: s - 10,
              ease: "linear",
            };
          })(t, u);
        (1 === (t = h.keyframes).length && (t[1] = t[0]),
          (r = h.duration),
          (s = h.times),
          (o = h.ease),
          (a = "keyframes"));
      }
      let c = (function (
        t,
        e,
        i,
        {
          delay: r = 0,
          duration: s = 300,
          repeat: o = 0,
          repeatType: a = "loop",
          ease: l = "easeInOut",
          times: u,
        } = {},
      ) {
        let h = { [e]: i };
        u && (h.offset = u);
        let c = (0, n.eB)(l, s);
        return (
          Array.isArray(c) && (h.easing = c),
          t.animate(h, {
            delay: r,
            duration: s,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: o + 1,
            direction: "reverse" === a ? "alternate" : "normal",
          })
        );
      })(l.owner.current, u, t, {
        ...this.options,
        duration: r,
        times: s,
        ease: o,
      });
      return (
        (c.startTime = null != h ? h : this.calcStartTime()),
        this.pendingTimeline
          ? ((0, n._F)(c, this.pendingTimeline),
            (this.pendingTimeline = void 0))
          : (c.onfinish = () => {
              let { onComplete: i } = this.options;
              (l.set(S(t, this.options, e)),
                i && i(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: c, duration: r, times: s, type: a, ease: o, keyframes: t }
      );
    }
    get duration() {
      let { resolved: t } = this;
      if (!t) return 0;
      let { duration: e } = t;
      return (0, r.X)(e);
    }
    get time() {
      let { resolved: t } = this;
      if (!t) return 0;
      let { animation: e } = t;
      return (0, r.X)(e.currentTime || 0);
    }
    set time(t) {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: i } = e;
      i.currentTime = (0, r.w)(t);
    }
    get speed() {
      let { resolved: t } = this;
      if (!t) return 1;
      let { animation: e } = t;
      return e.playbackRate;
    }
    set speed(t) {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: i } = e;
      i.playbackRate = t;
    }
    get state() {
      let { resolved: t } = this;
      if (!t) return "idle";
      let { animation: e } = t;
      return e.playState;
    }
    get startTime() {
      let { resolved: t } = this;
      if (!t) return null;
      let { animation: e } = t;
      return e.startTime;
    }
    attachTimeline(t) {
      if (this._resolved) {
        let { resolved: e } = this;
        if (!e) return l.Z;
        let { animation: i } = e;
        (0, n._F)(i, t);
      } else this.pendingTimeline = t;
      return l.Z;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: t } = this;
      if (!t) return;
      let { animation: e } = t;
      ("finished" === e.playState && this.updateFinishedPromise(), e.play());
    }
    pause() {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: e } = t;
      e.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)
      )
        return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: t } = this;
      if (!t) return;
      let {
        animation: e,
        keyframes: i,
        duration: n,
        type: s,
        ease: o,
        times: a,
      } = t;
      if ("idle" === e.playState || "finished" === e.playState) return;
      if (this.time) {
        let {
            motionValue: t,
            onUpdate: e,
            onComplete: l,
            element: u,
            ...h
          } = this.options,
          c = new Y({
            ...h,
            keyframes: i,
            duration: n,
            type: s,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          d = (0, r.w)(this.time);
        t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
      }
      let { onStop: l } = this.options;
      (l && l(), this.cancel());
    }
    complete() {
      let { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      let { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      let {
        motionValue: e,
        name: i,
        repeatDelay: n,
        repeatType: r,
        damping: s,
        type: o,
      } = t;
      if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
      return (
        Z() &&
        i &&
        K.has(i) &&
        !a &&
        !l &&
        !n &&
        "mirror" !== r &&
        0 !== s &&
        "inertia" !== o
      );
    }
  }
  var G = i(87487);
  let _ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    J = (t) => ({
      type: "spring",
      stiffness: 550,
      damping: 0 === t ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    Q = { type: "keyframes", duration: 0.8 },
    tt = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    te = (t, { keyframes: e }) =>
      e.length > 2
        ? Q
        : G.G.has(t)
          ? t.startsWith("scale")
            ? J(e[1])
            : _
          : tt,
    ti =
      (t, e, i, l = {}, u, h) =>
      (c) => {
        let d = (0, n.ev)(l, t) || {},
          p = d.delay || l.delay || 0,
          { elapsed: f = 0 } = l;
        f -= (0, r.w)(p);
        let m = {
          keyframes: Array.isArray(i) ? i : [null, i],
          ease: "easeOut",
          velocity: e.getVelocity(),
          ...d,
          delay: -f,
          onUpdate: (t) => {
            (e.set(t), d.onUpdate && d.onUpdate(t));
          },
          onComplete: () => {
            (c(), d.onComplete && d.onComplete());
          },
          name: t,
          motionValue: e,
          element: h ? void 0 : u,
        };
        (!(function ({
          when: t,
          delay: e,
          delayChildren: i,
          staggerChildren: n,
          staggerDirection: r,
          repeat: s,
          repeatType: o,
          repeatDelay: a,
          from: l,
          elapsed: u,
          ...h
        }) {
          return !!Object.keys(h).length;
        })(d) && (m = { ...m, ...te(t, m) }),
          m.duration && (m.duration = (0, r.w)(m.duration)),
          m.repeatDelay && (m.repeatDelay = (0, r.w)(m.repeatDelay)),
          void 0 !== m.from && (m.keyframes[0] = m.from));
        let v = !1;
        if (
          ((!1 !== m.type && (0 !== m.duration || m.repeatDelay)) ||
            ((m.duration = 0), 0 !== m.delay || (v = !0)),
          (a.current || o.c.skipAnimations) &&
            ((v = !0), (m.duration = 0), (m.delay = 0)),
          v && !h && void 0 !== e.get())
        ) {
          let t = S(m.keyframes, d);
          if (void 0 !== t)
            return (
              s.Wi.update(() => {
                (m.onUpdate(t), m.onComplete());
              }),
              new n.sP([])
            );
        }
        return !h && q.supports(m) ? new q(m) : new Y(m);
      };
}
