// Recovered from the public Golden Letter demo; original module 34081.
export default function (t, e, i) {
  i.d(e, {
    L: function () {
      return r;
    },
  });
  var n = i(69013);
  class r {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return (
        (0, n.y4)(this.subscriptions, t),
        () => (0, n.cl)(this.subscriptions, t)
      );
    }
    notify(t, e, i) {
      let n = this.subscriptions.length;
      if (n) {
        if (1 === n) this.subscriptions[0](t, e, i);
        else
          for (let r = 0; r < n; r++) {
            let n = this.subscriptions[r];
            n && n(t, e, i);
          }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
}
