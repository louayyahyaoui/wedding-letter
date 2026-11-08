// Recovered from the public Golden Letter demo; original module 57511.
export default function (t, e, i) {
  i.d(e, {
    J: function () {
      return o;
    },
  });
  var n = i(84426),
    r = i(94238),
    s = i(23999);
  class o extends n.l {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = r.s));
    }
    sortInstanceNodePosition(t, e) {
      return 2 & t.compareDocumentPosition(e) ? 1 : -1;
    }
    getBaseTargetFromProps(t, e) {
      return t.style ? t.style[e] : void 0;
    }
    removeValueFromRenderState(t, { vars: e, style: i }) {
      (delete e[t], delete i[t]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: t } = this.props;
      (0, s.i)(t) &&
        (this.childSubscription = t.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
  }
}
