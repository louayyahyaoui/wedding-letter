// Recovered from the public Golden Letter demo; original module 45699.
export default function (t, e, i) {
  i.d(e, {
    sP: function () {
      return o;
    },
    _F: function () {
      return p;
    },
    iI: function () {
      return u;
    },
    S9: function () {
      return c;
    },
    wk: function () {
      return y;
    },
    ev: function () {
      return a;
    },
    Mr: function () {
      return D;
    },
    qE: function () {
      return f;
    },
    xD: function () {
      return d;
    },
    DJ: function () {
      return M;
    },
    hR: function () {
      return x;
    },
    eB: function () {
      return function t(e, i) {
        if (e)
          return "function" == typeof e && v()
            ? y(e, i)
            : f(e)
              ? w(e)
              : Array.isArray(e)
                ? e.map((e) => t(e, i) || P.easeOut)
                : P[e];
      };
    },
    EO: function () {
      return l;
    },
    OD: function () {
      return F;
    },
    IG: function () {
      return b;
    },
    KV: function () {
      return B;
    },
    Vc: function () {
      return v;
    },
  });
  var n = i(90107);
  let r = (0, n.X)(() => void 0 !== window.ScrollTimeline);
  class s {
    constructor(t) {
      ((this.stop = () => this.runAll("stop")),
        (this.animations = t.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((t) => ("finished" in t ? t.finished : t)),
      );
    }
    getAll(t) {
      return this.animations[0][t];
    }
    setAll(t, e) {
      for (let i = 0; i < this.animations.length; i++)
        this.animations[i][t] = e;
    }
    attachTimeline(t, e) {
      let i = this.animations.map((i) =>
        r() && i.attachTimeline
          ? i.attachTimeline(t)
          : "function" == typeof e
            ? e(i)
            : void 0,
      );
      return () => {
        i.forEach((t, e) => {
          (t && t(), this.animations[e].stop());
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t) {
      this.setAll("time", t);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t) {
      this.setAll("speed", t);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let t = 0;
      for (let e = 0; e < this.animations.length; e++)
        t = Math.max(t, this.animations[e].duration);
      return t;
    }
    runAll(t) {
      this.animations.forEach((e) => e[t]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class o extends s {
    then(t, e) {
      return Promise.all(this.animations).then(t).catch(e);
    }
  }
  function a(t, e) {
    return t ? t[e] || t.default || t : void 0;
  }
  let l = 2e4;
  function u(t) {
    let e = 0,
      i = t.next(e);
    for (; !i.done && e < l;) ((e += 50), (i = t.next(e)));
    return e >= l ? 1 / 0 : e;
  }
  var h = i(29711);
  function c(t, e = 100, i) {
    let n = i({ ...t, keyframes: [0, e] }),
      r = Math.min(u(n), l);
    return {
      type: "keyframes",
      ease: (t) => n.next(r * t).value / e,
      duration: (0, h.X)(r),
    };
  }
  function d(t) {
    return "function" == typeof t;
  }
  function p(t, e) {
    ((t.timeline = e), (t.onfinish = null));
  }
  let f = (t) => Array.isArray(t) && "number" == typeof t[0],
    m = { linearEasing: void 0 },
    v = (function (t, e) {
      let i = (0, n.X)(t);
      return () => {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : i();
      };
    })(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (t) {
        return !1;
      }
      return !0;
    }, "linearEasing");
  var g = i(81645);
  let y = (t, e, i = 10) => {
    let n = "",
      r = Math.max(Math.round(e / i), 2);
    for (let e = 0; e < r; e++) n += t((0, g.Y)(0, r - 1, e)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
  function x(t) {
    return !!(
      ("function" == typeof t && v()) ||
      !t ||
      ("string" == typeof t && (t in P || v())) ||
      f(t) ||
      (Array.isArray(t) && t.every(x))
    );
  }
  let w = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
    P = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: w([0, 0.65, 0.55, 1]),
      circOut: w([0.55, 0, 1, 0.45]),
      backIn: w([0.31, 0.01, 0.66, -0.59]),
      backOut: w([0.33, 1.53, 0.69, 0.99]),
    },
    T = { x: !1, y: !1 };
  function b(t, e, i) {
    var n;
    if (t instanceof Element) return [t];
    if ("string" == typeof t) {
      let r = document;
      e && (r = e.current);
      let s =
        null !== (n = null == i ? void 0 : i[t]) && void 0 !== n
          ? n
          : r.querySelectorAll(t);
      return s ? Array.from(s) : [];
    }
    return Array.from(t);
  }
  function A(t, e) {
    let i = b(t),
      n = new AbortController();
    return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
  }
  function S(t) {
    return (e) => {
      "touch" === e.pointerType || T.x || T.y || t(e);
    };
  }
  function D(t, e, i = {}) {
    let [n, r, s] = A(t, i),
      o = S((t) => {
        let { target: i } = t,
          n = e(t);
        if ("function" != typeof n || !i) return;
        let s = S((t) => {
          (n(t), i.removeEventListener("pointerleave", s));
        });
        i.addEventListener("pointerleave", s, r);
      });
    return (
      n.forEach((t) => {
        t.addEventListener("pointerenter", o, r);
      }),
      s
    );
  }
  let V = (t, e) => !!e && (t === e || V(t, e.parentElement)),
    M = (t) =>
      "mouse" === t.pointerType
        ? "number" != typeof t.button || t.button <= 0
        : !1 !== t.isPrimary,
    E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
    C = new WeakSet();
  function R(t) {
    return (e) => {
      "Enter" === e.key && t(e);
    };
  }
  function k(t, e) {
    t.dispatchEvent(
      new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
    );
  }
  let L = (t, e) => {
    let i = t.currentTarget;
    if (!i) return;
    let n = R(() => {
      if (C.has(i)) return;
      k(i, "down");
      let t = R(() => {
        k(i, "up");
      });
      (i.addEventListener("keyup", t, e),
        i.addEventListener("blur", () => k(i, "cancel"), e));
    });
    (i.addEventListener("keydown", n, e),
      i.addEventListener("blur", () => i.removeEventListener("keydown", n), e));
  };
  function j(t) {
    return M(t) && !(T.x || T.y);
  }
  function F(t, e, i = {}) {
    let [n, r, s] = A(t, i),
      o = (t) => {
        let n = t.currentTarget;
        if (!j(t) || C.has(n)) return;
        C.add(n);
        let s = e(t),
          o = (t, e) => {
            (window.removeEventListener("pointerup", a),
              window.removeEventListener("pointercancel", l),
              j(t) &&
                C.has(n) &&
                (C.delete(n), "function" == typeof s && s(t, { success: e })));
          },
          a = (t) => {
            o(t, i.useGlobalTarget || V(n, t.target));
          },
          l = (t) => {
            o(t, !1);
          };
        (window.addEventListener("pointerup", a, r),
          window.addEventListener("pointercancel", l, r));
      };
    return (
      n.forEach((t) => {
        (E.has(t.tagName) ||
          -1 !== t.tabIndex ||
          null !== t.getAttribute("tabindex") ||
          (t.tabIndex = 0),
          (i.useGlobalTarget ? window : t).addEventListener(
            "pointerdown",
            o,
            r,
          ),
          t.addEventListener("focus", (t) => L(t, r), r));
      }),
      s
    );
  }
  function B(t) {
    return "x" === t || "y" === t
      ? T[t]
        ? null
        : ((T[t] = !0),
          () => {
            T[t] = !1;
          })
      : T.x || T.y
        ? null
        : ((T.x = T.y = !0),
          () => {
            T.x = T.y = !1;
          });
  }
  i(56277);
}
