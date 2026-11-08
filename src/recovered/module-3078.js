// Recovered from the public Golden Letter demo; original module 3078.
export default function (t, e, i) {
  i.d(e, {
    BX: function () {
      return h;
    },
    S1: function () {
      return l;
    },
  });
  var n = i(40504),
    r = i(34081),
    s = i(14438),
    o = i(45414);
  let a = (t) => !isNaN(parseFloat(t)),
    l = { current: void 0 };
  class u {
    constructor(t, e = {}) {
      ((this.version = "11.18.2"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (t, e = !0) => {
          let i = n.X.now();
          (this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(t),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            e &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(t),
        (this.owner = e.owner));
    }
    setCurrent(t) {
      ((this.current = t),
        (this.updatedAt = n.X.now()),
        null === this.canTrackVelocity &&
          void 0 !== t &&
          (this.canTrackVelocity = a(this.current)));
    }
    setPrevFrameValue(t = this.current) {
      ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, e) {
      this.events[t] || (this.events[t] = new r.L());
      let i = this.events[t].add(e);
      return "change" === t
        ? () => {
            (i(),
              o.Wi.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : i;
    }
    clearListeners() {
      for (let t in this.events) this.events[t].clear();
    }
    attach(t, e) {
      ((this.passiveEffect = t), (this.stopPassiveEffect = e));
    }
    set(t, e = !0) {
      e && this.passiveEffect
        ? this.passiveEffect(t, this.updateAndNotify)
        : this.updateAndNotify(t, e);
    }
    setWithVelocity(t, e, i) {
      (this.set(e),
        (this.prev = void 0),
        (this.prevFrameValue = t),
        (this.prevUpdatedAt = this.updatedAt - i));
    }
    jump(t, e = !0) {
      (this.updateAndNotify(t),
        (this.prev = t),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        e && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (l.current && l.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t = n.X.now();
      if (
        !this.canTrackVelocity ||
        void 0 === this.prevFrameValue ||
        t - this.updatedAt > 30
      )
        return 0;
      let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return (0, s.R)(
        parseFloat(this.current) - parseFloat(this.prevFrameValue),
        e,
      );
    }
    start(t) {
      return (
        this.stop(),
        new Promise((e) => {
          ((this.hasAnimated = !0),
            (this.animation = t(e)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  }
  function h(t, e) {
    return new u(t, e);
  }
}
