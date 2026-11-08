// Recovered from the public Golden Letter demo; original module 84426.
export default function (t, e, i) {
  i.d(e, {
    l: function () {
      return M;
    },
  });
  var n = i(40504),
    r = i(35938),
    s = i(96674),
    o = i(4946),
    a = i(13697),
    l = i(44563);
  let u = { current: null },
    h = { current: !1 };
  var c = i(34081),
    d = i(3078),
    p = i(83206),
    f = i(23999),
    m = i(25861),
    v = i(33964),
    g = i(38580),
    y = i(55113);
  let x = [...g.$, v.$, p.P],
    w = (t) => x.find((0, y.l)(t));
  var P = i(87487),
    T = i(37003),
    b = i(17743),
    A = i(39545),
    S = i(31297),
    D = i(45414);
  let V = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  class M {
    scrapeMotionValuesFromProps(t, e, i) {
      return {};
    }
    constructor(
      {
        parent: t,
        props: e,
        presenceContext: i,
        reducedMotionConfig: r,
        blockInitialAnimation: s,
        visualState: o,
      },
      a = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = A.e),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let t = n.X.now();
          this.renderScheduledAt < t &&
            ((this.renderScheduledAt = t), D.Wi.render(this.render, !1, !0));
        }));
      let { latestValues: l, renderState: u, onUpdate: h } = o;
      ((this.onUpdate = h),
        (this.latestValues = l),
        (this.baseTarget = { ...l }),
        (this.initialValues = e.initial ? { ...l } : {}),
        (this.renderState = u),
        (this.parent = t),
        (this.props = e),
        (this.presenceContext = i),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = a),
        (this.blockInitialAnimation = !!s),
        (this.isControllingVariants = (0, b.G)(e)),
        (this.isVariantNode = (0, b.M)(e)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current)));
      let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
        e,
        {},
        this,
      );
      for (let t in d) {
        let e = d[t];
        void 0 !== l[t] && (0, f.i)(e) && e.set(l[t], !1);
      }
    }
    mount(t) {
      ((this.current = t),
        T.R.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
        h.current ||
          (function () {
            if (((h.current = !0), l.j)) {
              if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => (u.current = t.matches);
                (t.addListener(e), e());
              } else u.current = !1;
            }
          })(),
        (this.shouldReduceMotion =
          "never" !== this.reducedMotionConfig &&
          ("always" === this.reducedMotionConfig || u.current)),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      for (let t in (T.R.delete(this.current),
      this.projection && this.projection.unmount(),
      (0, D.Pn)(this.notifyUpdate),
      (0, D.Pn)(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this),
      this.events))
        this.events[t].clear();
      for (let t in this.features) {
        let e = this.features[t];
        e && (e.unmount(), (e.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, e) {
      let i;
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      let n = P.G.has(t),
        r = e.on("change", (e) => {
          ((this.latestValues[t] = e),
            this.props.onUpdate && D.Wi.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        s = e.on("renderRequest", this.scheduleRender);
      (window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, t, e)),
        this.valueSubscriptions.set(t, () => {
          (r(), s(), i && i(), e.owner && e.stop());
        }));
    }
    sortNodePosition(t) {
      return this.current &&
        this.sortInstanceNodePosition &&
        this.type === t.type
        ? this.sortInstanceNodePosition(this.current, t.current)
        : 0;
    }
    updateFeatures() {
      let t = "animation";
      for (t in r.featureDefinitions) {
        let e = r.featureDefinitions[t];
        if (!e) continue;
        let { isEnabled: i, Feature: n } = e;
        if (
          (!this.features[t] &&
            n &&
            i(this.props) &&
            (this.features[t] = new n(this)),
          this.features[t])
        ) {
          let e = this.features[t];
          e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : (0, s.dO)();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    update(t, e) {
      ((t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = e));
      for (let e = 0; e < V.length; e++) {
        let i = V[e];
        this.propEventSubscriptions[i] &&
          (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
        let n = t["on" + i];
        n && (this.propEventSubscriptions[i] = this.on(i, n));
      }
      ((this.prevMotionValues = (function (t, e, i) {
        for (let n in e) {
          let r = e[n],
            s = i[n];
          if ((0, f.i)(r)) t.addValue(n, r);
          else if ((0, f.i)(s)) t.addValue(n, (0, d.BX)(r, { owner: t }));
          else if (s !== r) {
            if (t.hasValue(n)) {
              let e = t.getValue(n);
              !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
            } else {
              let e = t.getStaticValue(n);
              t.addValue(n, (0, d.BX)(void 0 !== e ? e : r, { owner: t }));
            }
          }
        }
        for (let n in i) void 0 === e[n] && t.removeValue(n);
        return e;
      })(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(t) {
      let e = this.getClosestVariantNode();
      if (e)
        return (
          e.variantChildren && e.variantChildren.add(t),
          () => e.variantChildren.delete(t)
        );
    }
    addValue(t, e) {
      let i = this.values.get(t);
      e !== i &&
        (i && this.removeValue(t),
        this.bindToMotionValue(t, e),
        this.values.set(t, e),
        (this.latestValues[t] = e.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      let e = this.valueSubscriptions.get(t);
      (e && (e(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState));
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, e) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let i = this.values.get(t);
      return (
        void 0 === i &&
          void 0 !== e &&
          ((i = (0, d.BX)(null === e ? void 0 : e, { owner: this })),
          this.addValue(t, i)),
        i
      );
    }
    readValue(t, e) {
      var i;
      let n =
        void 0 === this.latestValues[t] && this.current
          ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
            void 0 !== i
            ? i
            : this.readValueFromInstance(this.current, t, this.options)
          : this.latestValues[t];
      return (
        null != n &&
          ("string" == typeof n && ((0, o.P)(n) || (0, a.W)(n))
            ? (n = parseFloat(n))
            : !w(n) && p.P.test(e) && (n = (0, m.T)(t, e)),
          this.setBaseTarget(t, (0, f.i)(n) ? n.get() : n)),
        (0, f.i)(n) ? n.get() : n
      );
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      var e;
      let i;
      let { initial: n } = this.props;
      if ("string" == typeof n || "object" == typeof n) {
        let r = (0, S.o)(
          this.props,
          n,
          null === (e = this.presenceContext) || void 0 === e
            ? void 0
            : e.custom,
        );
        r && (i = r[t]);
      }
      if (n && void 0 !== i) return i;
      let r = this.getBaseTargetFromProps(this.props, t);
      return void 0 === r || (0, f.i)(r)
        ? void 0 !== this.initialValues[t] && void 0 === i
          ? void 0
          : this.baseTarget[t]
        : r;
    }
    on(t, e) {
      return (
        this.events[t] || (this.events[t] = new c.L()),
        this.events[t].add(e)
      );
    }
    notify(t, ...e) {
      this.events[t] && this.events[t].notify(...e);
    }
  }
}
