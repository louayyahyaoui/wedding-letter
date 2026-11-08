// Recovered from the public Golden Letter demo; original module 37679.
export default function (t, e, i) {
  i.d(e, {
    E: function () {
      return iv;
    },
  });
  var n,
    r,
    s,
    o = i(20569),
    a = i(44944);
  function l(t, e) {
    if (!Array.isArray(e)) return !1;
    let i = e.length;
    if (i !== t.length) return !1;
    for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var u = i(74115),
    h = i(67043),
    c = i(72589),
    d = i(63466);
  let p = c.V.length,
    f = [...c.e].reverse(),
    m = c.e.length;
  function v(t = !1) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function g() {
    return {
      animate: v(!0),
      whileInView: v(),
      whileHover: v(),
      whileTap: v(),
      whileDrag: v(),
      whileFocus: v(),
      exit: v(),
    };
  }
  class y {
    constructor(t) {
      ((this.isMounted = !1), (this.node = t));
    }
    update() {}
  }
  class x extends y {
    constructor(t) {
      (super(t),
        t.animationState ||
          (t.animationState = (function (t) {
            let e = (e) =>
                Promise.all(
                  e.map(({ animation: e, options: i }) => (0, d.d)(t, e, i)),
                ),
              i = g(),
              n = !0,
              r = (e) => (i, n) => {
                var r;
                let s = (0, h.x)(
                  t,
                  n,
                  "exit" === e
                    ? null === (r = t.presenceContext) || void 0 === r
                      ? void 0
                      : r.custom
                    : void 0,
                );
                if (s) {
                  let { transition: t, transitionEnd: e, ...n } = s;
                  i = { ...i, ...n, ...e };
                }
                return i;
              };
            function s(s) {
              let { props: h } = t,
                d =
                  (function t(e) {
                    if (!e) return;
                    if (!e.isControllingVariants) {
                      let i = (e.parent && t(e.parent)) || {};
                      return (
                        void 0 !== e.props.initial &&
                          (i.initial = e.props.initial),
                        i
                      );
                    }
                    let i = {};
                    for (let t = 0; t < p; t++) {
                      let n = c.V[t],
                        r = e.props[n];
                      ((0, u.$)(r) || !1 === r) && (i[n] = r);
                    }
                    return i;
                  })(t.parent) || {},
                v = [],
                g = new Set(),
                y = {},
                x = 1 / 0;
              for (let e = 0; e < m; e++) {
                var w;
                let c = f[e],
                  p = i[c],
                  m = void 0 !== h[c] ? h[c] : d[c],
                  P = (0, u.$)(m),
                  T = c === s ? p.isActive : null;
                !1 === T && (x = e);
                let b = m === d[c] && m !== h[c] && P;
                if (
                  (b && n && t.manuallyAnimateOnMount && (b = !1),
                  (p.protectedKeys = { ...y }),
                  (!p.isActive && null === T) ||
                    (!m && !p.prevProp) ||
                    (0, o.H)(m) ||
                    "boolean" == typeof m)
                )
                  continue;
                let A =
                    ((w = p.prevProp),
                    "string" == typeof m
                      ? m !== w
                      : !!Array.isArray(m) && !l(m, w)),
                  S = A || (c === s && p.isActive && !b && P) || (e > x && P),
                  D = !1,
                  V = Array.isArray(m) ? m : [m],
                  M = V.reduce(r(c), {});
                !1 === T && (M = {});
                let { prevResolvedValues: E = {} } = p,
                  C = { ...E, ...M },
                  R = (e) => {
                    ((S = !0),
                      g.has(e) && ((D = !0), g.delete(e)),
                      (p.needsAnimating[e] = !0));
                    let i = t.getValue(e);
                    i && (i.liveStyle = !1);
                  };
                for (let t in C) {
                  let e = M[t],
                    i = E[t];
                  if (!y.hasOwnProperty(t))
                    ((0, a.C)(e) && (0, a.C)(i) ? l(e, i) : e === i)
                      ? void 0 !== e && g.has(t)
                        ? R(t)
                        : (p.protectedKeys[t] = !0)
                      : null != e
                        ? R(t)
                        : g.add(t);
                }
                ((p.prevProp = m),
                  (p.prevResolvedValues = M),
                  p.isActive && (y = { ...y, ...M }),
                  n && t.blockInitialAnimation && (S = !1));
                let k = !(b && A) || D;
                S &&
                  k &&
                  v.push(
                    ...V.map((t) => ({ animation: t, options: { type: c } })),
                  );
              }
              if (g.size) {
                let e = {};
                (g.forEach((i) => {
                  let n = t.getBaseTarget(i),
                    r = t.getValue(i);
                  (r && (r.liveStyle = !0), (e[i] = null != n ? n : null));
                }),
                  v.push({ animation: e }));
              }
              let P = !!v.length;
              return (
                n &&
                  (!1 === h.initial || h.initial === h.animate) &&
                  !t.manuallyAnimateOnMount &&
                  (P = !1),
                (n = !1),
                P ? e(v) : Promise.resolve()
              );
            }
            return {
              animateChanges: s,
              setActive: function (e, n) {
                var r;
                if (i[e].isActive === n) return Promise.resolve();
                (null === (r = t.variantChildren) ||
                  void 0 === r ||
                  r.forEach((t) => {
                    var i;
                    return null === (i = t.animationState) || void 0 === i
                      ? void 0
                      : i.setActive(e, n);
                  }),
                  (i[e].isActive = n));
                let o = s(e);
                for (let t in i) i[t].protectedKeys = {};
                return o;
              },
              setAnimateFunction: function (i) {
                e = i(t);
              },
              getState: () => i,
              reset: () => {
                ((i = g()), (n = !0));
              },
            };
          })(t)));
    }
    updateAnimationControlsSubscription() {
      let { animate: t } = this.node.getProps();
      (0, o.H)(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: t } = this.node.getProps(),
        { animate: e } = this.node.prevProps || {};
      t !== e && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t;
      (this.node.animationState.reset(),
        null === (t = this.unmountControls) || void 0 === t || t.call(this));
    }
  }
  let w = 0;
  class P extends y {
    constructor() {
      (super(...arguments), (this.id = w++));
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
        { isPresent: i } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === i) return;
      let n = this.node.animationState.setActive("exit", !t);
      e && !t && n.then(() => e(this.id));
    }
    mount() {
      let { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {}
  }
  var T = i(56277),
    b = i(62035),
    A = i(45699),
    S = i(29711);
  function D(t, e, i, n = { passive: !0 }) {
    return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
  }
  function V(t) {
    return { point: { x: t.pageX, y: t.pageY } };
  }
  let M = (t) => (e) => (0, A.DJ)(e) && t(e, V(e));
  function E(t, e, i, n) {
    return D(t, e, M(i), n);
  }
  let C = (t, e) => Math.abs(t - e);
  var R = i(56920),
    k = i(45414);
  class L {
    constructor(
      t,
      e,
      {
        transformPagePoint: i,
        contextWindow: n,
        dragSnapToOrigin: r = !1,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          var t, e;
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let i = B(this.lastMoveEventInfo, this.history),
            n = null !== this.startEvent,
            r =
              ((t = i.offset),
              (e = { x: 0, y: 0 }),
              Math.sqrt(C(t.x, e.x) ** 2 + C(t.y, e.y) ** 2) >= 3);
          if (!n && !r) return;
          let { point: s } = i,
            { timestamp: o } = k.frameData;
          this.history.push({ ...s, timestamp: o });
          let { onStart: a, onMove: l } = this.handlers;
          (n ||
            (a && a(this.lastMoveEvent, i),
            (this.startEvent = this.lastMoveEvent)),
            l && l(this.lastMoveEvent, i));
        }),
        (this.handlePointerMove = (t, e) => {
          ((this.lastMoveEvent = t),
            (this.lastMoveEventInfo = j(e, this.transformPagePoint)),
            k.Wi.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (t, e) => {
          this.end();
          let { onEnd: i, onSessionEnd: n, resumeAnimation: r } = this.handlers;
          if (
            (this.dragSnapToOrigin && r && r(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let s = B(
            "pointercancel" === t.type
              ? this.lastMoveEventInfo
              : j(e, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && i && i(t, s), n && n(t, s));
        }),
        !(0, A.DJ)(t))
      )
        return;
      ((this.dragSnapToOrigin = r),
        (this.handlers = e),
        (this.transformPagePoint = i),
        (this.contextWindow = n || window));
      let s = j(V(t), this.transformPagePoint),
        { point: o } = s,
        { timestamp: a } = k.frameData;
      this.history = [{ ...o, timestamp: a }];
      let { onSessionStart: l } = e;
      (l && l(t, B(s, this.history)),
        (this.removeListeners = (0, R.z)(
          E(this.contextWindow, "pointermove", this.handlePointerMove),
          E(this.contextWindow, "pointerup", this.handlePointerUp),
          E(this.contextWindow, "pointercancel", this.handlePointerUp),
        )));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        (0, k.Pn)(this.updatePoint));
    }
  }
  function j(t, e) {
    return e ? { point: e(t.point) } : t;
  }
  function F(t, e) {
    return { x: t.x - e.x, y: t.y - e.y };
  }
  function B({ point: t }, e) {
    return {
      point: t,
      delta: F(t, O(e)),
      offset: F(t, e[0]),
      velocity: (function (t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        let i = t.length - 1,
          n = null,
          r = O(t);
        for (
          ;
          i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > (0, S.w)(0.1)));
        )
          i--;
        if (!n) return { x: 0, y: 0 };
        let s = (0, S.X)(r.timestamp - n.timestamp);
        if (0 === s) return { x: 0, y: 0 };
        let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
        return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
      })(e, 0),
    };
  }
  function O(t) {
    return t[t.length - 1];
  }
  function $(t) {
    return (
      t &&
      "object" == typeof t &&
      Object.prototype.hasOwnProperty.call(t, "current")
    );
  }
  var W = i(81645),
    U = i(96781);
  function I(t) {
    return t.max - t.min;
  }
  function N(t, e, i, n = 0.5) {
    ((t.origin = n),
      (t.originPoint = (0, U.t)(e.min, e.max, t.origin)),
      (t.scale = I(i) / I(e)),
      (t.translate = (0, U.t)(i.min, i.max, t.origin) - t.originPoint),
      ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
        (t.scale = 1),
      ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) &&
        (t.translate = 0));
  }
  function X(t, e, i, n) {
    (N(t.x, e.x, i.x, n ? n.originX : void 0),
      N(t.y, e.y, i.y, n ? n.originY : void 0));
  }
  function z(t, e, i) {
    ((t.min = i.min + e.min), (t.max = t.min + I(e)));
  }
  function Y(t, e, i) {
    ((t.min = e.min - i.min), (t.max = t.min + I(e)));
  }
  function K(t, e, i) {
    (Y(t.x, e.x, i.x), Y(t.y, e.y, i.y));
  }
  var Z = i(59111);
  function H(t, e, i) {
    return {
      min: void 0 !== e ? t.min + e : void 0,
      max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
    };
  }
  function q(t, e) {
    let i = e.min - t.min,
      n = e.max - t.max;
    return (
      e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
      { min: i, max: n }
    );
  }
  function G(t, e, i) {
    return { min: _(t, e), max: _(t, i) };
  }
  function _(t, e) {
    return "number" == typeof t ? t : t[e] || 0;
  }
  var J = i(96674);
  function Q(t) {
    return [t("x"), t("y")];
  }
  var tt = i(50813),
    te = i(82063),
    ti = i(27492),
    tn = i(22521);
  let tr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
  var ts = i(1327);
  let to = new WeakMap();
  class ta {
    constructor(t) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = (0, J.dO)()),
        (this.visualElement = t));
    }
    start(t, { snapToCursor: e = !1 } = {}) {
      let { presenceContext: i } = this.visualElement;
      if (i && !1 === i.isPresent) return;
      let { dragSnapToOrigin: n } = this.getProps();
      this.panSession = new L(
        t,
        {
          onSessionStart: (t) => {
            let { dragSnapToOrigin: i } = this.getProps();
            (i ? this.pauseAnimation() : this.stopAnimation(),
              e && this.snapToCursor(V(t).point));
          },
          onStart: (t, e) => {
            let {
              drag: i,
              dragPropagation: n,
              onDragStart: r,
            } = this.getProps();
            if (
              i &&
              !n &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (0, A.KV)(i)),
              !this.openDragLock)
            )
              return;
            ((this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              Q((t) => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (ti.aQ.test(e)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let n = i.layout.layoutBox[t];
                    if (n) {
                      let t = I(n);
                      e = (parseFloat(e) / 100) * t;
                    }
                  }
                }
                this.originPoint[t] = e;
              }),
              r && k.Wi.postRender(() => r(t, e)),
              (0, ts.K)(this.visualElement, "transform"));
            let { animationState: s } = this.visualElement;
            s && s.setActive("whileDrag", !0);
          },
          onMove: (t, e) => {
            let {
              dragPropagation: i,
              dragDirectionLock: n,
              onDirectionLock: r,
              onDrag: s,
            } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: o } = e;
            if (n && null === this.currentDirection) {
              ((this.currentDirection = (function (t, e = 10) {
                let i = null;
                return (
                  Math.abs(t.y) > e
                    ? (i = "y")
                    : Math.abs(t.x) > e && (i = "x"),
                  i
                );
              })(o)),
                null !== this.currentDirection &&
                  r &&
                  r(this.currentDirection));
              return;
            }
            (this.updateAxis("x", e.point, o),
              this.updateAxis("y", e.point, o),
              this.visualElement.render(),
              s && s(t, e));
          },
          onSessionEnd: (t, e) => this.stop(t, e),
          resumeAnimation: () =>
            Q((t) => {
              var e;
              return (
                "paused" === this.getAnimationState(t) &&
                (null === (e = this.getAxisMotionValue(t).animation) ||
                void 0 === e
                  ? void 0
                  : e.play())
              );
            }),
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: n,
          contextWindow: tr(this.visualElement),
        },
      );
    }
    stop(t, e) {
      let i = this.isDragging;
      if ((this.cancel(), !i)) return;
      let { velocity: n } = e;
      this.startAnimation(n);
      let { onDragEnd: r } = this.getProps();
      r && k.Wi.postRender(() => r(t, e));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: t, animationState: e } = this.visualElement;
      (t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: i } = this.getProps();
      (!i &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        e && e.setActive("whileDrag", !1));
    }
    updateAxis(t, e, i) {
      let { drag: n } = this.getProps();
      if (!i || !tl(t, n, this.currentDirection)) return;
      let r = this.getAxisMotionValue(t),
        s = this.originPoint[t] + i[t];
      (this.constraints &&
        this.constraints[t] &&
        (s = (function (t, { min: e, max: i }, n) {
          return (
            void 0 !== e && t < e
              ? (t = n ? (0, U.t)(e, t, n.min) : Math.max(t, e))
              : void 0 !== i &&
                t > i &&
                (t = n ? (0, U.t)(i, t, n.max) : Math.min(t, i)),
            t
          );
        })(s, this.constraints[t], this.elastic[t])),
        r.set(s));
    }
    resolveConstraints() {
      var t;
      let { dragConstraints: e, dragElastic: i } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : null === (t = this.visualElement.projection) || void 0 === t
              ? void 0
              : t.layout,
        r = this.constraints;
      (e && $(e)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : e && n
          ? (this.constraints = (function (
              t,
              { top: e, left: i, bottom: n, right: r },
            ) {
              return { x: H(t.x, i, r), y: H(t.y, e, n) };
            })(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = (function (t = 0.35) {
          return (
            !1 === t ? (t = 0) : !0 === t && (t = 0.35),
            { x: G(t, "left", "right"), y: G(t, "top", "bottom") }
          );
        })(i)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Q((t) => {
            !1 !== this.constraints &&
              this.getAxisMotionValue(t) &&
              (this.constraints[t] = (function (t, e) {
                let i = {};
                return (
                  void 0 !== e.min && (i.min = e.min - t.min),
                  void 0 !== e.max && (i.max = e.max - t.min),
                  i
                );
              })(n.layoutBox[t], this.constraints[t]));
          }));
    }
    resolveRefConstraints() {
      var t;
      let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
      if (!e || !$(e)) return !1;
      let n = e.current;
      (0, b.k)(
        null !== n,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let s = (0, tt.z)(n, r.root, this.visualElement.getTransformPagePoint()),
        o = { x: q((t = r.layout.layoutBox).x, s.x), y: q(t.y, s.y) };
      if (i) {
        let t = i((0, te.z2)(o));
        ((this.hasMutatedConstraints = !!t), t && (o = (0, te.i8)(t)));
      }
      return o;
    }
    startAnimation(t) {
      let {
          drag: e,
          dragMomentum: i,
          dragElastic: n,
          dragTransition: r,
          dragSnapToOrigin: s,
          onDragTransitionEnd: o,
        } = this.getProps(),
        a = this.constraints || {};
      return Promise.all(
        Q((o) => {
          if (!tl(o, e, this.currentDirection)) return;
          let l = (a && a[o]) || {};
          s && (l = { min: 0, max: 0 });
          let u = {
            type: "inertia",
            velocity: i ? t[o] : 0,
            bounceStiffness: n ? 200 : 1e6,
            bounceDamping: n ? 40 : 1e7,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...r,
            ...l,
          };
          return this.startAxisValueAnimation(o, u);
        }),
      ).then(o);
    }
    startAxisValueAnimation(t, e) {
      let i = this.getAxisMotionValue(t);
      return (
        (0, ts.K)(this.visualElement, t),
        i.start((0, tn.v)(t, i, 0, e, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Q((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      Q((t) => {
        var e;
        return null === (e = this.getAxisMotionValue(t).animation) ||
          void 0 === e
          ? void 0
          : e.pause();
      });
    }
    getAnimationState(t) {
      var e;
      return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
        ? void 0
        : e.state;
    }
    getAxisMotionValue(t) {
      let e = `_drag${t.toUpperCase()}`,
        i = this.visualElement.getProps();
      return (
        i[e] ||
        this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      Q((e) => {
        let { drag: i } = this.getProps();
        if (!tl(e, i, this.currentDirection)) return;
        let { projection: n } = this.visualElement,
          r = this.getAxisMotionValue(e);
        if (n && n.layout) {
          let { min: i, max: s } = n.layout.layoutBox[e];
          r.set(t[e] - (0, U.t)(i, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: t, dragConstraints: e } = this.getProps(),
        { projection: i } = this.visualElement;
      if (!$(e) || !i || !this.constraints) return;
      this.stopAnimation();
      let n = { x: 0, y: 0 };
      Q((t) => {
        let e = this.getAxisMotionValue(t);
        if (e && !1 !== this.constraints) {
          let i = e.get();
          n[t] = (function (t, e) {
            let i = 0.5,
              n = I(t),
              r = I(e);
            return (
              r > n
                ? (i = (0, W.Y)(e.min, e.max - n, t.min))
                : n > r && (i = (0, W.Y)(t.min, t.max - r, e.min)),
              (0, Z.u)(0, 1, i)
            );
          })({ min: i, max: i }, this.constraints[t]);
        }
      });
      let { transformTemplate: r } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = r ? r({}, "") : "none"),
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Q((e) => {
          if (!tl(e, t, null)) return;
          let i = this.getAxisMotionValue(e),
            { min: r, max: s } = this.constraints[e];
          i.set((0, U.t)(r, s, n[e]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      to.set(this.visualElement, this);
      let t = E(this.visualElement.current, "pointerdown", (t) => {
          let { drag: e, dragListener: i = !0 } = this.getProps();
          e && i && this.start(t);
        }),
        e = () => {
          let { dragConstraints: t } = this.getProps();
          $(t) &&
            t.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: i } = this.visualElement,
        n = i.addEventListener("measure", e);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        k.Wi.read(e));
      let r = D(window, "resize", () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          "didUpdate",
          ({ delta: t, hasLayoutChanged: e }) => {
            this.isDragging &&
              e &&
              (Q((e) => {
                let i = this.getAxisMotionValue(e);
                i &&
                  ((this.originPoint[e] += t[e].translate),
                  i.set(i.get() + t[e].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (r(), t(), n(), s && s());
      };
    }
    getProps() {
      let t = this.visualElement.getProps(),
        {
          drag: e = !1,
          dragDirectionLock: i = !1,
          dragPropagation: n = !1,
          dragConstraints: r = !1,
          dragElastic: s = 0.35,
          dragMomentum: o = !0,
        } = t;
      return {
        ...t,
        drag: e,
        dragDirectionLock: i,
        dragPropagation: n,
        dragConstraints: r,
        dragElastic: s,
        dragMomentum: o,
      };
    }
  }
  function tl(t, e, i) {
    return (!0 === e || e === t) && (null === i || i === t);
  }
  class tu extends y {
    constructor(t) {
      (super(t),
        (this.removeGroupControls = T.Z),
        (this.removeListeners = T.Z),
        (this.controls = new ta(t)));
    }
    mount() {
      let { dragControls: t } = this.node.getProps();
      (t && (this.removeGroupControls = t.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || T.Z));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  }
  let th = (t) => (e, i) => {
    t && k.Wi.postRender(() => t(e, i));
  };
  class tc extends y {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = T.Z));
    }
    onPointerDown(t) {
      this.session = new L(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: tr(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: t,
        onPanStart: e,
        onPan: i,
        onPanEnd: n,
      } = this.node.getProps();
      return {
        onSessionStart: th(t),
        onStart: th(e),
        onMove: i,
        onEnd: (t, e) => {
          (delete this.session, n && k.Wi.postRender(() => n(t, e)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = E(
        this.node.current,
        "pointerdown",
        (t) => this.onPointerDown(t),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  }
  var td = i(57437),
    tp = i(2265),
    tf = i(49637),
    tm = i(58881);
  let tv = (0, tp.createContext)({}),
    tg = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function ty(t, e) {
    return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
  }
  let tx = {
    correct: (t, e) => {
      if (!e.target) return t;
      if ("string" == typeof t) {
        if (!ti.px.test(t)) return t;
        t = parseFloat(t);
      }
      let i = ty(t, e.target.x),
        n = ty(t, e.target.y);
      return `${i}% ${n}%`;
    },
  };
  var tw = i(83206),
    tP = i(98639);
  let { schedule: tT, cancel: tb } = (0, i(85005).Z)(queueMicrotask, !1);
  class tA extends tp.Component {
    componentDidMount() {
      let {
          visualElement: t,
          layoutGroup: e,
          switchLayoutGroup: i,
          layoutId: n,
        } = this.props,
        { projection: r } = t;
      ((0, tP.B)(tD),
        r &&
          (e.group && e.group.add(r),
          i && i.register && n && i.register(r),
          r.root.didUpdate(),
          r.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (tg.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(t) {
      let {
          layoutDependency: e,
          visualElement: i,
          drag: n,
          isPresent: r,
        } = this.props,
        s = i.projection;
      return (
        s &&
          ((s.isPresent = r),
          n || t.layoutDependency !== e || void 0 === e
            ? s.willUpdate()
            : this.safeToRemove(),
          t.isPresent === r ||
            (r
              ? s.promote()
              : s.relegate() ||
                k.Wi.postRender(() => {
                  let t = s.getStack();
                  (t && t.members.length) || this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: t } = this.props.visualElement;
      t &&
        (t.root.didUpdate(),
        tT.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: t,
          layoutGroup: e,
          switchLayoutGroup: i,
        } = this.props,
        { projection: n } = t;
      n &&
        (n.scheduleCheckAfterUnmount(),
        e && e.group && e.group.remove(n),
        i && i.deregister && i.deregister(n));
    }
    safeToRemove() {
      let { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function tS(t) {
    let [e, i] = (0, tf.oO)(),
      n = (0, tp.useContext)(tm.p);
    return (0, td.jsx)(tA, {
      ...t,
      layoutGroup: n,
      switchLayoutGroup: (0, tp.useContext)(tv),
      isPresent: e,
      safeToRemove: i,
    });
  }
  let tD = {
    borderRadius: {
      ...tx,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: tx,
    borderTopRightRadius: tx,
    borderBottomLeftRadius: tx,
    borderBottomRightRadius: tx,
    boxShadow: {
      correct: (t, { treeScale: e, projectionDelta: i }) => {
        let n = tw.P.parse(t);
        if (n.length > 5) return t;
        let r = tw.P.createTransformer(t),
          s = "number" != typeof n[0] ? 1 : 0,
          o = i.x.scale * e.x,
          a = i.y.scale * e.y;
        ((n[0 + s] /= o), (n[1 + s] /= a));
        let l = (0, U.t)(o, a, 0.5);
        return (
          "number" == typeof n[2 + s] && (n[2 + s] /= l),
          "number" == typeof n[3 + s] && (n[3 + s] /= l),
          r(n)
        );
      },
    },
  };
  var tV = i(82993),
    tM = i(34005),
    tE = i(40504),
    tC = i(94239),
    tR = i(69013);
  let tk = (t, e) => t.depth - e.depth;
  class tL {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(t) {
      ((0, tR.y4)(this.children, t), (this.isDirty = !0));
    }
    remove(t) {
      ((0, tR.cl)(this.children, t), (this.isDirty = !0));
    }
    forEach(t) {
      (this.isDirty && this.children.sort(tk),
        (this.isDirty = !1),
        this.children.forEach(t));
    }
  }
  var tj = i(34081),
    tF = i(4581),
    tB = i(23999);
  function tO(t) {
    let e = (0, tB.i)(t) ? t.get() : t;
    return (0, tF.p)(e) ? e.toValue() : e;
  }
  var t$ = i(26378);
  let tW = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    tU = tW.length,
    tI = (t) => ("string" == typeof t ? parseFloat(t) : t),
    tN = (t) => "number" == typeof t || ti.px.test(t);
  function tX(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius;
  }
  let tz = tK(0, 0.5, t$.Bn),
    tY = tK(0.5, 0.95, T.Z);
  function tK(t, e, i) {
    return (n) => (n < t ? 0 : n > e ? 1 : i((0, W.Y)(t, e, n)));
  }
  function tZ(t, e) {
    ((t.min = e.min), (t.max = e.max));
  }
  function tH(t, e) {
    (tZ(t.x, e.x), tZ(t.y, e.y));
  }
  function tq(t, e) {
    ((t.translate = e.translate),
      (t.scale = e.scale),
      (t.originPoint = e.originPoint),
      (t.origin = e.origin));
  }
  var tG = i(47227);
  function t_(t, e, i, n, r) {
    return (
      (t -= e),
      (t = (0, tG.q2)(t, 1 / i, n)),
      void 0 !== r && (t = (0, tG.q2)(t, 1 / r, n)),
      t
    );
  }
  function tJ(t, e, [i, n, r], s, o) {
    !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
      if (
        (ti.aQ.test(e) &&
          ((e = parseFloat(e)), (e = (0, U.t)(o.min, o.max, e / 100) - o.min)),
        "number" != typeof e)
      )
        return;
      let a = (0, U.t)(s.min, s.max, n);
      (t === s && (a -= e),
        (t.min = t_(t.min, e, i, a, r)),
        (t.max = t_(t.max, e, i, a, r)));
    })(t, e[i], e[n], e[r], e.scale, s, o);
  }
  let tQ = ["x", "scaleX", "originX"],
    t0 = ["y", "scaleY", "originY"];
  function t1(t, e, i, n) {
    (tJ(t.x, e, tQ, i ? i.x : void 0, n ? n.x : void 0),
      tJ(t.y, e, t0, i ? i.y : void 0, n ? n.y : void 0));
  }
  function t2(t) {
    return 0 === t.translate && 1 === t.scale;
  }
  function t5(t) {
    return t2(t.x) && t2(t.y);
  }
  function t4(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function t3(t, e) {
    return (
      Math.round(t.min) === Math.round(e.min) &&
      Math.round(t.max) === Math.round(e.max)
    );
  }
  function t9(t, e) {
    return t3(t.x, e.x) && t3(t.y, e.y);
  }
  function t7(t) {
    return I(t.x) / I(t.y);
  }
  function t6(t, e) {
    return (
      t.translate === e.translate &&
      t.scale === e.scale &&
      t.originPoint === e.originPoint
    );
  }
  class t8 {
    constructor() {
      this.members = [];
    }
    add(t) {
      ((0, tR.y4)(this.members, t), t.scheduleRender());
    }
    remove(t) {
      if (
        ((0, tR.cl)(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
      ) {
        let t = this.members[this.members.length - 1];
        t && this.promote(t);
      }
    }
    relegate(t) {
      let e;
      let i = this.members.findIndex((e) => t === e);
      if (0 === i) return !1;
      for (let t = i; t >= 0; t--) {
        let i = this.members[t];
        if (!1 !== i.isPresent) {
          e = i;
          break;
        }
      }
      return !!e && (this.promote(e), !0);
    }
    promote(t, e) {
      let i = this.lead;
      if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
        (i.instance && i.scheduleRender(),
          t.scheduleRender(),
          (t.resumeFrom = i),
          e && (t.resumeFrom.preserveOpacity = !0),
          i.snapshot &&
            ((t.snapshot = i.snapshot),
            (t.snapshot.latestValues = i.animationValues || i.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
        let { crossfade: n } = t.options;
        !1 === n && i.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        let { options: e, resumingFrom: i } = t;
        (e.onExitComplete && e.onExitComplete(),
          i && i.options.onExitComplete && i.options.onExitComplete());
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  var et = i(12787);
  let ee = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0,
    },
    ei = "undefined" != typeof window && void 0 !== window.MotionDebug,
    en = ["", "X", "Y", "Z"],
    er = { visibility: "hidden" },
    es = 0;
  function eo(t, e, i, n) {
    let { latestValues: r } = e;
    r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
  }
  function ea({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: i,
    checkIsScrollRoot: n,
    resetTransform: r,
  }) {
    return class {
      constructor(t = {}, i = null == e ? void 0 : e()) {
        ((this.id = es++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            ((this.projectionUpdateScheduled = !1),
              ei &&
                (ee.totalNodes =
                  ee.resolvedTargetDeltas =
                  ee.recalculatedProjection =
                    0),
              this.nodes.forEach(eh),
              this.nodes.forEach(eg),
              this.nodes.forEach(ey),
              this.nodes.forEach(ec),
              ei && window.MotionDebug.record(ee));
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = t),
          (this.root = i ? i.root || i : this),
          (this.path = i ? [...i.path, i] : []),
          (this.parent = i),
          (this.depth = i ? i.depth + 1 : 0));
        for (let t = 0; t < this.path.length; t++)
          this.path[t].shouldResetTransform = !0;
        this.root === this && (this.nodes = new tL());
      }
      addEventListener(t, e) {
        return (
          this.eventHandlers.has(t) || this.eventHandlers.set(t, new tj.L()),
          this.eventHandlers.get(t).add(e)
        );
      }
      notifyListeners(t, ...e) {
        let i = this.eventHandlers.get(t);
        i && i.notify(...e);
      }
      hasListeners(t) {
        return this.eventHandlers.has(t);
      }
      mount(e, i = this.root.hasTreeAnimated) {
        if (this.instance) return;
        ((this.isSVG = (0, tC.v)(e)), (this.instance = e));
        let { layoutId: n, layout: r, visualElement: s } = this.options;
        if (
          (s && !s.current && s.mount(e),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          i && (r || n) && (this.isLayoutDirty = !0),
          t)
        ) {
          let i;
          let n = () => (this.root.updateBlockedByResize = !1);
          t(e, () => {
            ((this.root.updateBlockedByResize = !0),
              i && i(),
              (i = (function (t, e) {
                let i = tE.X.now(),
                  n = ({ timestamp: e }) => {
                    let r = e - i;
                    r >= 250 && ((0, k.Pn)(n), t(r - 250));
                  };
                return (k.Wi.read(n, !0), () => (0, k.Pn)(n));
              })(n, 0)),
              tg.hasAnimatedSinceResize &&
                ((tg.hasAnimatedSinceResize = !1), this.nodes.forEach(ev)));
          });
        }
        (n && this.root.registerSharedNode(n, this),
          !1 !== this.options.animate &&
            s &&
            (n || r) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: t,
                hasLayoutChanged: e,
                hasRelativeTargetChanged: i,
                layout: n,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  ((this.target = void 0), (this.relativeTarget = void 0));
                  return;
                }
                let r =
                    this.options.transition || s.getDefaultTransition() || eA,
                  { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } =
                    s.getProps(),
                  l = !this.targetLayout || !t9(this.targetLayout, n) || i,
                  u = !e && i;
                if (
                  this.options.layoutRoot ||
                  (this.resumeFrom && this.resumeFrom.instance) ||
                  u ||
                  (e && (l || !this.currentAnimation))
                ) {
                  (this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(t, u));
                  let e = {
                    ...(0, A.ev)(r, "layout"),
                    onPlay: o,
                    onComplete: a,
                  };
                  ((s.shouldReduceMotion || this.options.layoutRoot) &&
                    ((e.delay = 0), (e.type = !1)),
                    this.startAnimation(e));
                } else
                  (e || ev(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete());
                this.targetLayout = n;
              },
            ));
      }
      unmount() {
        (this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this));
        let t = this.getStack();
        (t && t.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          (0, k.Pn)(this.updateProjection));
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        !this.isUpdateBlocked() &&
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(ex),
          this.animationId++);
      }
      getTransformTemplate() {
        let { visualElement: t } = this.options;
        return t && t.getProps().transformTemplate;
      }
      willUpdate(t = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            (function t(e) {
              if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
              let { visualElement: i } = e.options;
              if (!i) return;
              let n = (0, tM.s)(i);
              if (window.MotionHasOptimisedAnimation(n, "transform")) {
                let { layout: t, layoutId: i } = e.options;
                window.MotionCancelOptimisedAnimation(
                  n,
                  "transform",
                  k.Wi,
                  !(t || i),
                );
              }
              let { parent: r } = e;
              r && !r.hasCheckedOptimisedAppear && t(r);
            })(this),
          this.root.isUpdating || this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let t = 0; t < this.path.length; t++) {
          let e = this.path[t];
          ((e.shouldResetTransform = !0),
            e.updateScroll("snapshot"),
            e.options.layoutRoot && e.willUpdate(!1));
        }
        let { layoutId: e, layout: i } = this.options;
        if (void 0 === e && !i) return;
        let n = this.getTransformTemplate();
        ((this.prevTransformTemplateValue = n
          ? n(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          t && this.notifyListeners("willUpdate"));
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          (this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(ep));
          return;
        }
        (this.isUpdating || this.nodes.forEach(ef),
          (this.isUpdating = !1),
          this.nodes.forEach(em),
          this.nodes.forEach(el),
          this.nodes.forEach(eu),
          this.clearAllSnapshots());
        let t = tE.X.now();
        ((k.frameData.delta = (0, Z.u)(0, 1e3 / 60, t - k.frameData.timestamp)),
          (k.frameData.timestamp = t),
          (k.frameData.isProcessing = !0),
          k.yL.update.process(k.frameData),
          k.yL.preRender.process(k.frameData),
          k.yL.render.process(k.frameData),
          (k.frameData.isProcessing = !1));
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), tT.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        (this.nodes.forEach(ed), this.sharedNodes.forEach(ew));
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          k.Wi.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        k.Wi.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure());
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let t = 0; t < this.path.length; t++)
            this.path[t].updateScroll();
        let t = this.layout;
        ((this.layout = this.measure(!1)),
          (this.layoutCorrected = (0, J.dO)()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox));
        let { visualElement: e } = this.options;
        e &&
          e.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            t ? t.layoutBox : void 0,
          );
      }
      updateScroll(t = "measure") {
        let e = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === t &&
            (e = !1),
          e)
        ) {
          let e = n(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: e,
            offset: i(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e,
          };
        }
      }
      resetTransform() {
        if (!r) return;
        let t =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          e = this.projectionDelta && !t5(this.projectionDelta),
          i = this.getTransformTemplate(),
          n = i ? i(this.latestValues, "") : void 0,
          s = n !== this.prevTransformTemplateValue;
        t &&
          (e || (0, et.ud)(this.latestValues) || s) &&
          (r(this.instance, n),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(t = !0) {
        var e;
        let i = this.measurePageBox(),
          n = this.removeElementScroll(i);
        return (
          t && (n = this.removeTransform(n)),
          eV((e = n).x),
          eV(e.y),
          {
            animationId: this.root.animationId,
            measuredBox: i,
            layoutBox: n,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var t;
        let { visualElement: e } = this.options;
        if (!e) return (0, J.dO)();
        let i = e.measureViewportBox();
        if (!(
          (null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) ||
          this.path.some(eE)
        )) {
          let { scroll: t } = this.root;
          t && ((0, tG.am)(i.x, t.offset.x), (0, tG.am)(i.y, t.offset.y));
        }
        return i;
      }
      removeElementScroll(t) {
        var e;
        let i = (0, J.dO)();
        if (
          (tH(i, t),
          null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
        )
          return i;
        for (let e = 0; e < this.path.length; e++) {
          let n = this.path[e],
            { scroll: r, options: s } = n;
          n !== this.root &&
            r &&
            s.layoutScroll &&
            (r.wasRoot && tH(i, t),
            (0, tG.am)(i.x, r.offset.x),
            (0, tG.am)(i.y, r.offset.y));
        }
        return i;
      }
      applyTransform(t, e = !1) {
        let i = (0, J.dO)();
        tH(i, t);
        for (let t = 0; t < this.path.length; t++) {
          let n = this.path[t];
          (!e &&
            n.options.layoutScroll &&
            n.scroll &&
            n !== n.root &&
            (0, tG.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
            (0, et.ud)(n.latestValues) && (0, tG.D2)(i, n.latestValues));
        }
        return (
          (0, et.ud)(this.latestValues) && (0, tG.D2)(i, this.latestValues),
          i
        );
      }
      removeTransform(t) {
        let e = (0, J.dO)();
        tH(e, t);
        for (let t = 0; t < this.path.length; t++) {
          let i = this.path[t];
          if (!i.instance || !(0, et.ud)(i.latestValues)) continue;
          (0, et.Lj)(i.latestValues) && i.updateSnapshot();
          let n = (0, J.dO)();
          (tH(n, i.measurePageBox()),
            t1(
              e,
              i.latestValues,
              i.snapshot ? i.snapshot.layoutBox : void 0,
              n,
            ));
        }
        return ((0, et.ud)(this.latestValues) && t1(e, this.latestValues), e);
      }
      setTargetDelta(t) {
        ((this.targetDelta = t),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0));
      }
      setOptions(t) {
        this.options = {
          ...this.options,
          ...t,
          crossfade: void 0 === t.crossfade || t.crossfade,
        };
      }
      clearMeasurements() {
        ((this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1));
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !==
            k.frameData.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(t = !1) {
        var e, i, n, r;
        let s = this.getLead();
        (this.isProjectionDirty ||
          (this.isProjectionDirty = s.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = s.isSharedProjectionDirty));
        let o = !!this.resumingFrom || this !== s;
        if (!(
          t ||
          (o && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (null === (e = this.parent) || void 0 === e
            ? void 0
            : e.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        ))
          return;
        let { layout: a, layoutId: l } = this.options;
        if (this.layout && (a || l)) {
          if (
            ((this.resolvedRelativeTargetAt = k.frameData.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            let t = this.getClosestProjectingParent();
            t && t.layout && 1 !== this.animationProgress
              ? ((this.relativeParent = t),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = (0, J.dO)()),
                (this.relativeTargetOrigin = (0, J.dO)()),
                K(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  t.layout.layoutBox,
                ),
                tH(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (this.relativeTarget || this.targetDelta) {
            if (
              ((this.target ||
                ((this.target = (0, J.dO)()),
                (this.targetWithTransforms = (0, J.dO)())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target)
                ? (this.forceRelativeParentToResolveTarget(),
                  (i = this.target),
                  (n = this.relativeTarget),
                  (r = this.relativeParent.target),
                  z(i.x, n.x, r.x),
                  z(i.y, n.y, r.y))
                : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox,
                        ))
                      : tH(this.target, this.layout.layoutBox),
                    (0, tG.o2)(this.target, this.targetDelta))
                  : tH(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              let t = this.getClosestProjectingParent();
              t &&
              !!t.resumingFrom == !!this.resumingFrom &&
              !t.options.layoutScroll &&
              t.target &&
              1 !== this.animationProgress
                ? ((this.relativeParent = t),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = (0, J.dO)()),
                  (this.relativeTargetOrigin = (0, J.dO)()),
                  K(this.relativeTargetOrigin, this.target, t.target),
                  tH(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            ei && ee.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        return !this.parent ||
          (0, et.Lj)(this.parent.latestValues) ||
          (0, et.D_)(this.parent.latestValues)
          ? void 0
          : this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var t;
        let e = this.getLead(),
          i = !!this.resumingFrom || this !== e,
          n = !0;
        if (
          ((this.isProjectionDirty ||
            (null === (t = this.parent) || void 0 === t
              ? void 0
              : t.isProjectionDirty)) &&
            (n = !1),
          i &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (n = !1),
          this.resolvedRelativeTargetAt === k.frameData.timestamp && (n = !1),
          n)
        )
          return;
        let { layout: r, layoutId: s } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(r || s))
        )
          return;
        tH(this.layoutCorrected, this.layout.layoutBox);
        let o = this.treeScale.x,
          a = this.treeScale.y;
        ((0, tG.YY)(this.layoutCorrected, this.treeScale, this.path, i),
          e.layout &&
            !e.target &&
            (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
            ((e.target = e.layout.layoutBox),
            (e.targetWithTransforms = (0, J.dO)())));
        let { target: l } = e;
        if (!l) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        (this.projectionDelta && this.prevProjectionDelta
          ? (tq(this.prevProjectionDelta.x, this.projectionDelta.x),
            tq(this.prevProjectionDelta.y, this.projectionDelta.y))
          : this.createProjectionDeltas(),
          X(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
          (this.treeScale.x === o &&
            this.treeScale.y === a &&
            t6(this.projectionDelta.x, this.prevProjectionDelta.x) &&
            t6(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", l)),
          ei && ee.recalculatedProjection++);
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(t = !0) {
        var e;
        if (
          (null === (e = this.options.visualElement) ||
            void 0 === e ||
            e.scheduleRender(),
          t)
        ) {
          let t = this.getStack();
          t && t.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        ((this.prevProjectionDelta = (0, J.wc)()),
          (this.projectionDelta = (0, J.wc)()),
          (this.projectionDeltaWithTransform = (0, J.wc)()));
      }
      setAnimationOrigin(t, e = !1) {
        let i;
        let n = this.snapshot,
          r = n ? n.latestValues : {},
          s = { ...this.latestValues },
          o = (0, J.wc)();
        ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !e));
        let a = (0, J.dO)(),
          l =
            (n ? n.source : void 0) !==
            (this.layout ? this.layout.source : void 0),
          u = this.getStack(),
          h = !u || u.members.length <= 1,
          c = !!(
            l &&
            !h &&
            !0 === this.options.crossfade &&
            !this.path.some(eb)
          );
        ((this.animationProgress = 0),
          (this.mixTargetDelta = (e) => {
            let n = e / 1e3;
            if (
              (eP(o.x, t.x, n),
              eP(o.y, t.y, n),
              this.setTargetDelta(o),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout)
            ) {
              var u, d, p, f;
              (K(
                a,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
              ),
                (p = this.relativeTarget),
                (f = this.relativeTargetOrigin),
                eT(p.x, f.x, a.x, n),
                eT(p.y, f.y, a.y, n),
                i &&
                  ((u = this.relativeTarget),
                  (d = i),
                  t4(u.x, d.x) && t4(u.y, d.y)) &&
                  (this.isProjectionDirty = !1),
                i || (i = (0, J.dO)()),
                tH(i, this.relativeTarget));
            }
            (l &&
              ((this.animationValues = s),
              (function (t, e, i, n, r, s) {
                r
                  ? ((t.opacity = (0, U.t)(
                      0,
                      void 0 !== i.opacity ? i.opacity : 1,
                      tz(n),
                    )),
                    (t.opacityExit = (0, U.t)(
                      void 0 !== e.opacity ? e.opacity : 1,
                      0,
                      tY(n),
                    )))
                  : s &&
                    (t.opacity = (0, U.t)(
                      void 0 !== e.opacity ? e.opacity : 1,
                      void 0 !== i.opacity ? i.opacity : 1,
                      n,
                    ));
                for (let r = 0; r < tU; r++) {
                  let s = `border${tW[r]}Radius`,
                    o = tX(e, s),
                    a = tX(i, s);
                  (void 0 !== o || void 0 !== a) &&
                    (o || (o = 0),
                    a || (a = 0),
                    0 === o || 0 === a || tN(o) === tN(a)
                      ? ((t[s] = Math.max((0, U.t)(tI(o), tI(a), n), 0)),
                        (ti.aQ.test(a) || ti.aQ.test(o)) && (t[s] += "%"))
                      : (t[s] = a));
                }
                (e.rotate || i.rotate) &&
                  (t.rotate = (0, U.t)(e.rotate || 0, i.rotate || 0, n));
              })(s, r, this.latestValues, n, c, h)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = n));
          }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
      }
      startAnimation(t) {
        (this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            ((0, k.Pn)(this.pendingAnimation),
            (this.pendingAnimation = void 0)),
          (this.pendingAnimation = k.Wi.update(() => {
            ((tg.hasAnimatedSinceResize = !0),
              (this.currentAnimation = (0, tV.D)(0, 1e3, {
                ...t,
                onUpdate: (e) => {
                  (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                },
                onComplete: () => {
                  (t.onComplete && t.onComplete(), this.completeAnimation());
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0));
          })));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        let t = this.getStack();
        (t && t.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete"));
      }
      finishAnimation() {
        (this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(1e3),
          this.currentAnimation.stop()),
          this.completeAnimation());
      }
      applyTransformsToTarget() {
        let t = this.getLead(),
          {
            targetWithTransforms: e,
            target: i,
            layout: n,
            latestValues: r,
          } = t;
        if (e && i && n) {
          if (
            this !== t &&
            this.layout &&
            n &&
            eM(this.options.animationType, this.layout.layoutBox, n.layoutBox)
          ) {
            i = this.target || (0, J.dO)();
            let e = I(this.layout.layoutBox.x);
            ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
            let n = I(this.layout.layoutBox.y);
            ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
          }
          (tH(e, i),
            (0, tG.D2)(e, r),
            X(this.projectionDeltaWithTransform, this.layoutCorrected, e, r));
        }
      }
      registerSharedNode(t, e) {
        (this.sharedNodes.has(t) || this.sharedNodes.set(t, new t8()),
          this.sharedNodes.get(t).add(e));
        let i = e.options.initialPromotionConfig;
        e.promote({
          transition: i ? i.transition : void 0,
          preserveFollowOpacity:
            i && i.shouldPreserveFollowOpacity
              ? i.shouldPreserveFollowOpacity(e)
              : void 0,
        });
      }
      isLead() {
        let t = this.getStack();
        return !t || t.lead === this;
      }
      getLead() {
        var t;
        let { layoutId: e } = this.options;
        return (
          (e &&
            (null === (t = this.getStack()) || void 0 === t
              ? void 0
              : t.lead)) ||
          this
        );
      }
      getPrevLead() {
        var t;
        let { layoutId: e } = this.options;
        return e
          ? null === (t = this.getStack()) || void 0 === t
            ? void 0
            : t.prevLead
          : void 0;
      }
      getStack() {
        let { layoutId: t } = this.options;
        if (t) return this.root.sharedNodes.get(t);
      }
      promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
        let n = this.getStack();
        (n && n.promote(this, i),
          t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          e && this.setOptions({ transition: e }));
      }
      relegate() {
        let t = this.getStack();
        return !!t && t.relegate(this);
      }
      resetSkewAndRotation() {
        let { visualElement: t } = this.options;
        if (!t) return;
        let e = !1,
          { latestValues: i } = t;
        if (
          ((i.z ||
            i.rotate ||
            i.rotateX ||
            i.rotateY ||
            i.rotateZ ||
            i.skewX ||
            i.skewY) &&
            (e = !0),
          !e)
        )
          return;
        let n = {};
        i.z && eo("z", t, n, this.animationValues);
        for (let e = 0; e < en.length; e++)
          (eo(`rotate${en[e]}`, t, n, this.animationValues),
            eo(`skew${en[e]}`, t, n, this.animationValues));
        for (let e in (t.render(), n))
          (t.setStaticValue(e, n[e]),
            this.animationValues && (this.animationValues[e] = n[e]));
        t.scheduleRender();
      }
      getProjectionStyles(t) {
        var e, i;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return er;
        let n = { visibility: "" },
          r = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (n.opacity = ""),
            (n.pointerEvents = tO(null == t ? void 0 : t.pointerEvents) || ""),
            (n.transform = r ? r(this.latestValues, "") : "none"),
            n
          );
        let s = this.getLead();
        if (!this.projectionDelta || !this.layout || !s.target) {
          let e = {};
          return (
            this.options.layoutId &&
              ((e.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (e.pointerEvents =
                tO(null == t ? void 0 : t.pointerEvents) || "")),
            this.hasProjected &&
              !(0, et.ud)(this.latestValues) &&
              ((e.transform = r ? r({}, "") : "none"),
              (this.hasProjected = !1)),
            e
          );
        }
        let o = s.animationValues || s.latestValues;
        (this.applyTransformsToTarget(),
          (n.transform = (function (t, e, i) {
            let n = "",
              r = t.x.translate / e.x,
              s = t.y.translate / e.y,
              o = (null == i ? void 0 : i.z) || 0;
            if (
              ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
              (1 !== e.x || 1 !== e.y) &&
                (n += `scale(${1 / e.x}, ${1 / e.y}) `),
              i)
            ) {
              let {
                transformPerspective: t,
                rotate: e,
                rotateX: r,
                rotateY: s,
                skewX: o,
                skewY: a,
              } = i;
              (t && (n = `perspective(${t}px) ${n}`),
                e && (n += `rotate(${e}deg) `),
                r && (n += `rotateX(${r}deg) `),
                s && (n += `rotateY(${s}deg) `),
                o && (n += `skewX(${o}deg) `),
                a && (n += `skewY(${a}deg) `));
            }
            let a = t.x.scale * e.x,
              l = t.y.scale * e.y;
            return (
              (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
              n || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, o)),
          r && (n.transform = r(o, n.transform)));
        let { x: a, y: l } = this.projectionDelta;
        for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
        s.animationValues
          ? (n.opacity =
              s === this
                ? null !==
                    (i =
                      null !== (e = o.opacity) && void 0 !== e
                        ? e
                        : this.latestValues.opacity) && void 0 !== i
                  ? i
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : o.opacityExit)
          : (n.opacity =
              s === this
                ? void 0 !== o.opacity
                  ? o.opacity
                  : ""
                : void 0 !== o.opacityExit
                  ? o.opacityExit
                  : 0),
        tP.P)) {
          if (void 0 === o[t]) continue;
          let { correct: e, applyTo: i } = tP.P[t],
            r = "none" === n.transform ? o[t] : e(o[t], s);
          if (i) {
            let t = i.length;
            for (let e = 0; e < t; e++) n[i[e]] = r;
          } else n[t] = r;
        }
        return (
          this.options.layoutId &&
            (n.pointerEvents =
              s === this
                ? tO(null == t ? void 0 : t.pointerEvents) || ""
                : "none"),
          n
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        (this.root.nodes.forEach((t) => {
          var e;
          return null === (e = t.currentAnimation) || void 0 === e
            ? void 0
            : e.stop();
        }),
          this.root.nodes.forEach(ep),
          this.root.sharedNodes.clear());
      }
    };
  }
  function el(t) {
    t.updateLayout();
  }
  function eu(t) {
    var e;
    let i =
      (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
      t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
      let { layoutBox: e, measuredBox: n } = t.layout,
        { animationType: r } = t.options,
        s = i.source !== t.layout.source;
      "size" === r
        ? Q((t) => {
            let n = s ? i.measuredBox[t] : i.layoutBox[t],
              r = I(n);
            ((n.min = e[t].min), (n.max = n.min + r));
          })
        : eM(r, i.layoutBox, e) &&
          Q((n) => {
            let r = s ? i.measuredBox[n] : i.layoutBox[n],
              o = I(e[n]);
            ((r.max = r.min + o),
              t.relativeTarget &&
                !t.currentAnimation &&
                ((t.isProjectionDirty = !0),
                (t.relativeTarget[n].max = t.relativeTarget[n].min + o)));
          });
      let o = (0, J.wc)();
      X(o, e, i.layoutBox);
      let a = (0, J.wc)();
      s ? X(a, t.applyTransform(n, !0), i.measuredBox) : X(a, e, i.layoutBox);
      let l = !t5(o),
        u = !1;
      if (!t.resumeFrom) {
        let n = t.getClosestProjectingParent();
        if (n && !n.resumeFrom) {
          let { snapshot: r, layout: s } = n;
          if (r && s) {
            let o = (0, J.dO)();
            K(o, i.layoutBox, r.layoutBox);
            let a = (0, J.dO)();
            (K(a, e, s.layoutBox),
              t9(o, a) || (u = !0),
              n.options.layoutRoot &&
                ((t.relativeTarget = a),
                (t.relativeTargetOrigin = o),
                (t.relativeParent = n)));
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: e,
        snapshot: i,
        delta: a,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeTargetChanged: u,
      });
    } else if (t.isLead()) {
      let { onExitComplete: e } = t.options;
      e && e();
    }
    t.options.transition = void 0;
  }
  function eh(t) {
    (ei && ee.totalNodes++,
      t.parent &&
        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty ||
          (t.isSharedProjectionDirty = !!(
            t.isProjectionDirty ||
            t.parent.isProjectionDirty ||
            t.parent.isSharedProjectionDirty
          )),
        t.isTransformDirty ||
          (t.isTransformDirty = t.parent.isTransformDirty)));
  }
  function ec(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
  }
  function ed(t) {
    t.clearSnapshot();
  }
  function ep(t) {
    t.clearMeasurements();
  }
  function ef(t) {
    t.isLayoutDirty = !1;
  }
  function em(t) {
    let { visualElement: e } = t.options;
    (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
      t.resetTransform());
  }
  function ev(t) {
    (t.finishAnimation(),
      (t.targetDelta = t.relativeTarget = t.target = void 0),
      (t.isProjectionDirty = !0));
  }
  function eg(t) {
    t.resolveTargetDelta();
  }
  function ey(t) {
    t.calcProjection();
  }
  function ex(t) {
    t.resetSkewAndRotation();
  }
  function ew(t) {
    t.removeLeadSnapshot();
  }
  function eP(t, e, i) {
    ((t.translate = (0, U.t)(e.translate, 0, i)),
      (t.scale = (0, U.t)(e.scale, 1, i)),
      (t.origin = e.origin),
      (t.originPoint = e.originPoint));
  }
  function eT(t, e, i, n) {
    ((t.min = (0, U.t)(e.min, i.min, n)), (t.max = (0, U.t)(e.max, i.max, n)));
  }
  function eb(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit;
  }
  let eA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    eS = (t) =>
      "undefined" != typeof navigator &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(t),
    eD = eS("applewebkit/") && !eS("chrome/") ? Math.round : T.Z;
  function eV(t) {
    ((t.min = eD(t.min)), (t.max = eD(t.max)));
  }
  function eM(t, e, i) {
    return (
      "position" === t ||
      ("preserve-aspect" === t && !(0.2 >= Math.abs(t7(e) - t7(i))))
    );
  }
  function eE(t) {
    var e;
    return (
      t !== t.root &&
      (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
    );
  }
  let eC = ea({
      attachResizeListener: (t, e) => D(t, "resize", e),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    eR = { current: void 0 },
    ek = ea({
      measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
      defaultParent: () => {
        if (!eR.current) {
          let t = new eC({});
          (t.mount(window),
            t.setOptions({ layoutScroll: !0 }),
            (eR.current = t));
        }
        return eR.current;
      },
      resetTransform: (t, e) => {
        t.style.transform = void 0 !== e ? e : "none";
      },
      checkIsScrollRoot: (t) => "fixed" === window.getComputedStyle(t).position,
    });
  function eL(t, e, i) {
    let { props: n } = t;
    t.animationState &&
      n.whileHover &&
      t.animationState.setActive("whileHover", "Start" === i);
    let r = n["onHover" + i];
    r && k.Wi.postRender(() => r(e, V(e)));
  }
  class ej extends y {
    mount() {
      let { current: t } = this.node;
      t &&
        (this.unmount = (0, A.Mr)(
          t,
          (t) => (eL(this.node, t, "Start"), (t) => eL(this.node, t, "End")),
        ));
    }
    unmount() {}
  }
  class eF extends y {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch (e) {
        t = !0;
      }
      t &&
        this.node.animationState &&
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      this.isActive &&
        this.node.animationState &&
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = (0, R.z)(
        D(this.node.current, "focus", () => this.onFocus()),
        D(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  }
  function eB(t, e, i) {
    let { props: n } = t;
    t.animationState &&
      n.whileTap &&
      t.animationState.setActive("whileTap", "Start" === i);
    let r = n["onTap" + ("End" === i ? "" : i)];
    r && k.Wi.postRender(() => r(e, V(e)));
  }
  class eO extends y {
    mount() {
      let { current: t } = this.node;
      t &&
        (this.unmount = (0, A.OD)(
          t,
          (t) => (
            eB(this.node, t, "Start"),
            (t, { success: e }) => eB(this.node, t, e ? "End" : "Cancel")
          ),
          { useGlobalTarget: this.node.props.globalTapTarget },
        ));
    }
    unmount() {}
  }
  let e$ = new WeakMap(),
    eW = new WeakMap(),
    eU = (t) => {
      let e = e$.get(t.target);
      e && e(t);
    },
    eI = (t) => {
      t.forEach(eU);
    },
    eN = { some: 0, all: 1 };
  class eX extends y {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: t = {} } = this.node.getProps(),
        { root: e, margin: i, amount: n = "some", once: r } = t,
        s = {
          root: e ? e.current : void 0,
          rootMargin: i,
          threshold: "number" == typeof n ? n : eN[n],
        };
      return (function (t, e, i) {
        let n = (function ({ root: t, ...e }) {
          let i = t || document;
          eW.has(i) || eW.set(i, {});
          let n = eW.get(i),
            r = JSON.stringify(e);
          return (
            n[r] || (n[r] = new IntersectionObserver(eI, { root: t, ...e })),
            n[r]
          );
        })(e);
        return (
          e$.set(t, i),
          n.observe(t),
          () => {
            (e$.delete(t), n.unobserve(t));
          }
        );
      })(this.node.current, s, (t) => {
        let { isIntersecting: e } = t;
        if (
          this.isInView === e ||
          ((this.isInView = e), r && !e && this.hasEnteredView)
        )
          return;
        (e && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", e));
        let { onViewportEnter: i, onViewportLeave: n } = this.node.getProps(),
          s = e ? i : n;
        s && s(t);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if ("undefined" == typeof IntersectionObserver) return;
      let { props: t, prevProps: e } = this.node;
      ["amount", "margin", "root"].some(
        (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
          return (i) => t[i] !== e[i];
        })(t, e),
      ) && this.startObserver();
    }
    unmount() {}
  }
  let ez = (0, tp.createContext)({ strict: !1 });
  var eY = i(45750);
  let eK = (0, tp.createContext)({});
  var eZ = i(17743);
  function eH(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  var eq = i(44563),
    eG = i(35938);
  let e_ = Symbol.for("motionComponentSymbol");
  var eJ = i(64252),
    eQ = i(11534),
    e0 = i(61750);
  let e1 = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function e2(t) {
    if ("string" != typeof t || t.includes("-"));
    else if (e1.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
    return !1;
  }
  var e5 = i(31297),
    e4 = i(53576);
  let e3 = (t) => (e, i) => {
    let n = (0, tp.useContext)(eK),
      r = (0, tp.useContext)(eJ.O),
      s = () =>
        (function (
          { scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i },
          n,
          r,
          s,
        ) {
          let a = {
            latestValues: (function (t, e, i, n) {
              let r = {},
                s = n(t, {});
              for (let t in s) r[t] = tO(s[t]);
              let { initial: a, animate: l } = t,
                u = (0, eZ.G)(t),
                h = (0, eZ.M)(t);
              e &&
                h &&
                !u &&
                !1 !== t.inherit &&
                (void 0 === a && (a = e.initial),
                void 0 === l && (l = e.animate));
              let c = !!i && !1 === i.initial,
                d = (c = c || !1 === a) ? l : a;
              if (d && "boolean" != typeof d && !(0, o.H)(d)) {
                let e = Array.isArray(d) ? d : [d];
                for (let i = 0; i < e.length; i++) {
                  let n = (0, e5.o)(t, e[i]);
                  if (n) {
                    let { transitionEnd: t, transition: e, ...i } = n;
                    for (let t in i) {
                      let e = i[t];
                      if (Array.isArray(e)) {
                        let t = c ? e.length - 1 : 0;
                        e = e[t];
                      }
                      null !== e && (r[t] = e);
                    }
                    for (let e in t) r[e] = t[e];
                  }
                }
              }
              return r;
            })(n, r, s, t),
            renderState: e(),
          };
          return (
            i &&
              ((a.onMount = (t) => i({ props: n, current: t, ...a })),
              (a.onUpdate = (t) => i(t))),
            a
          );
        })(t, e, n, r);
    return i ? s() : (0, e4.h)(s);
  };
  var e9 = i(87487),
    e7 = i(67402);
  let e6 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
    e8 = () => ({ ...e6(), attrs: {} });
  var it = i(37380),
    ie = i(33390),
    ii = i(67098);
  let ir = ["x", "y", "width", "height", "cx", "cy", "r"],
    is = {
      useVisualState: e3({
        scrapeMotionValuesFromProps: ii.U,
        createRenderState: e8,
        onUpdate: ({
          props: t,
          prevProps: e,
          current: i,
          renderState: n,
          latestValues: r,
        }) => {
          if (!i) return;
          let s = !!t.drag;
          if (!s) {
            for (let t in r)
              if (e9.G.has(t)) {
                s = !0;
                break;
              }
          }
          if (!s) return;
          let o = !e;
          if (e)
            for (let i = 0; i < ir.length; i++) {
              let n = ir[i];
              t[n] !== e[n] && (o = !0);
            }
          o &&
            k.Wi.read(() => {
              (!(function (t, e) {
                try {
                  e.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (t) {
                  e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              })(i, n),
                k.Wi.render(() => {
                  ((0, e7.i)(n, r, (0, it.a)(i.tagName), t.transformTemplate),
                    (0, ie.K)(i, n));
                }));
            });
        },
      }),
    },
    io = {
      useVisualState: e3({
        scrapeMotionValuesFromProps: i(67971).U,
        createRenderState: e6,
      }),
    };
  var ia = i(77556),
    il = i(4469);
  function iu(t, e, i) {
    for (let n in e) (0, tB.i)(e[n]) || (0, ia.j)(n, i) || (t[n] = e[n]);
  }
  let ih = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function ic(t) {
    return (
      t.startsWith("while") ||
      (t.startsWith("drag") && "draggable" !== t) ||
      t.startsWith("layout") ||
      t.startsWith("onTap") ||
      t.startsWith("onPan") ||
      t.startsWith("onLayout") ||
      ih.has(t)
    );
  }
  let id = (t) => !ic(t);
  try {
    (n = require("@emotion/is-prop-valid").default) &&
      (id = (t) => (t.startsWith("on") ? !ic(t) : n(t)));
  } catch (t) {}
  var ip = i(59282),
    im = i(23482);
  let iv = (function (t) {
    if ("undefined" == typeof Proxy) return t;
    let e = new Map();
    return new Proxy((...e) => t(...e), {
      get: (i, n) =>
        "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
    });
  })(
    ((r = {
      animation: { Feature: x },
      exit: { Feature: P },
      inView: { Feature: eX },
      tap: { Feature: eO },
      focus: { Feature: eF },
      hover: { Feature: ej },
      pan: { Feature: tc },
      drag: { Feature: tu, ProjectionNode: ek, MeasureLayout: tS },
      layout: { ProjectionNode: ek, MeasureLayout: tS },
    }),
    (s = (t, e) =>
      e2(t)
        ? new im.e(e)
        : new ip.W(e, { allowProjection: t !== tp.Fragment })),
    function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
      return (function (t) {
        var e, i;
        let {
          preloadedFeatures: n,
          createVisualElement: r,
          useRender: s,
          useVisualState: o,
          Component: a,
        } = t;
        function l(t, e) {
          var i;
          let n;
          let l = {
              ...(0, tp.useContext)(eY._),
              ...t,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  i = (0, tp.useContext)(tm.p).id;
                return i && void 0 !== e ? i + "-" + e : e;
              })(t),
            },
            { isStatic: h } = l,
            c = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if ((0, eZ.G)(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || (0, u.$)(e) ? e : void 0,
                    animate: (0, u.$)(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, tp.useContext)(eK));
              return (0, tp.useMemo)(
                () => ({ initial: e, animate: i }),
                [eH(e), eH(i)],
              );
            })(t),
            d = o(t, h);
          if (!h && eq.j) {
            (0, tp.useContext)(ez).strict;
            let t = (function (t) {
              let { drag: e, layout: i } = eG.featureDefinitions;
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == i ? void 0 : i.isEnabled(t))
                    ? n.MeasureLayout
                    : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(l);
            ((n = t.MeasureLayout),
              (c.visualElement = (function (t, e, i, n, r) {
                var s, o;
                let { visualElement: a } = (0, tp.useContext)(eK),
                  l = (0, tp.useContext)(ez),
                  u = (0, tp.useContext)(eJ.O),
                  h = (0, tp.useContext)(eY._).reducedMotion,
                  c = (0, tp.useRef)(null);
                ((n = n || l.renderer),
                  !c.current &&
                    n &&
                    (c.current = n(t, {
                      visualState: e,
                      parent: a,
                      props: i,
                      presenceContext: u,
                      blockInitialAnimation: !!u && !1 === u.initial,
                      reducedMotionConfig: h,
                    })));
                let d = c.current,
                  p = (0, tp.useContext)(tv);
                d &&
                  !d.projection &&
                  r &&
                  ("html" === d.type || "svg" === d.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: r,
                      layout: s,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: u,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: r,
                        layout: s,
                        alwaysMeasureLayout: !!o || (a && $(a)),
                        visualElement: t,
                        animationType: "string" == typeof s ? s : "both",
                        initialPromotionConfig: n,
                        layoutScroll: l,
                        layoutRoot: u,
                      }));
                  })(c.current, i, r, p);
                let f = (0, tp.useRef)(!1);
                (0, tp.useInsertionEffect)(() => {
                  d && f.current && d.update(i, u);
                });
                let m = i[e0.M],
                  v = (0, tp.useRef)(
                    !!m &&
                      !(null === (s = window.MotionHandoffIsComplete) ||
                      void 0 === s
                        ? void 0
                        : s.call(window, m)) &&
                      (null === (o = window.MotionHasOptimisedAnimation) ||
                      void 0 === o
                        ? void 0
                        : o.call(window, m)),
                  );
                return (
                  (0, eQ.L)(() => {
                    d &&
                      ((f.current = !0),
                      (window.MotionIsMounted = !0),
                      d.updateFeatures(),
                      tT.render(d.render),
                      v.current &&
                        d.animationState &&
                        d.animationState.animateChanges());
                  }),
                  (0, tp.useEffect)(() => {
                    d &&
                      (!v.current &&
                        d.animationState &&
                        d.animationState.animateChanges(),
                      v.current &&
                        (queueMicrotask(() => {
                          var t;
                          null === (t = window.MotionHandoffMarkAsComplete) ||
                            void 0 === t ||
                            t.call(window, m);
                        }),
                        (v.current = !1)));
                  }),
                  d
                );
              })(a, d, l, r, t.ProjectionNode)));
          }
          return (0, td.jsxs)(eK.Provider, {
            value: c,
            children: [
              n && c.visualElement
                ? (0, td.jsx)(n, { visualElement: c.visualElement, ...l })
                : null,
              s(
                a,
                t,
                ((i = c.visualElement),
                (0, tp.useCallback)(
                  (t) => {
                    (t && d.onMount && d.onMount(t),
                      i && (t ? i.mount(t) : i.unmount()),
                      e &&
                        ("function" == typeof e
                          ? e(t)
                          : $(e) && (e.current = t)));
                  },
                  [i],
                )),
                d,
                h,
                c.visualElement,
              ),
            ],
          });
        }
        (n &&
          (function (t) {
            for (let e in t)
              eG.featureDefinitions[e] = {
                ...eG.featureDefinitions[e],
                ...t[e],
              };
          })(n),
          (l.displayName = "motion.".concat(
            "string" == typeof a
              ? a
              : "create(".concat(
                  null !==
                    (i =
                      null !== (e = a.displayName) && void 0 !== e
                        ? e
                        : a.name) && void 0 !== i
                    ? i
                    : "",
                  ")",
                ),
          )));
        let h = (0, tp.forwardRef)(l);
        return ((h[e_] = a), h);
      })({
        ...(e2(t) ? is : io),
        preloadedFeatures: r,
        useRender: (function (t = !1) {
          return (e, i, n, { latestValues: r }, s) => {
            let o = (
                e2(e)
                  ? function (t, e, i, n) {
                      let r = (0, tp.useMemo)(() => {
                        let i = e8();
                        return (
                          (0, e7.i)(i, e, (0, it.a)(n), t.transformTemplate),
                          { ...i.attrs, style: { ...i.style } }
                        );
                      }, [e]);
                      if (t.style) {
                        let e = {};
                        (iu(e, t.style, t), (r.style = { ...e, ...r.style }));
                      }
                      return r;
                    }
                  : function (t, e) {
                      let i = {},
                        n = (function (t, e) {
                          let i = t.style || {},
                            n = {};
                          return (
                            iu(n, i, t),
                            Object.assign(
                              n,
                              (function ({ transformTemplate: t }, e) {
                                return (0, tp.useMemo)(() => {
                                  let i = e6();
                                  return (
                                    (0, il.r)(i, e, t),
                                    Object.assign({}, i.vars, i.style)
                                  );
                                }, [e]);
                              })(t, e),
                            ),
                            n
                          );
                        })(t, e);
                      return (
                        t.drag &&
                          !1 !== t.dragListener &&
                          ((i.draggable = !1),
                          (n.userSelect =
                            n.WebkitUserSelect =
                            n.WebkitTouchCallout =
                              "none"),
                          (n.touchAction =
                            !0 === t.drag
                              ? "none"
                              : `pan-${"x" === t.drag ? "y" : "x"}`)),
                        void 0 === t.tabIndex &&
                          (t.onTap || t.onTapStart || t.whileTap) &&
                          (i.tabIndex = 0),
                        (i.style = n),
                        i
                      );
                    }
              )(i, r, s, e),
              a = (function (t, e, i) {
                let n = {};
                for (let r in t)
                  ("values" !== r || "object" != typeof t.values) &&
                    (id(r) ||
                      (!0 === i && ic(r)) ||
                      (!e && !ic(r)) ||
                      (t.draggable && r.startsWith("onDrag"))) &&
                    (n[r] = t[r]);
                return n;
              })(i, "string" == typeof e, t),
              l = e !== tp.Fragment ? { ...a, ...o, ref: n } : {},
              { children: u } = i,
              h = (0, tp.useMemo)(() => ((0, tB.i)(u) ? u.get() : u), [u]);
            return (0, tp.createElement)(e, { ...l, children: h });
          };
        })(e),
        createVisualElement: s,
        Component: t,
      });
    }),
  );
}
