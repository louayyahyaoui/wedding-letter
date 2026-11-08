// Recovered from the public Golden Letter demo; original module 48614.
export default function (e, t, n) {
  n.d(t, {
    M: function () {
      return m;
    },
  });
  var r = n(57437),
    a = n(2265),
    u = n(58881),
    c = n(53576),
    l = n(64252),
    i = n(45750);
  class h extends a.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        ((e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function o(e) {
    let { children: t, isPresent: n } = e,
      u = (0, a.useId)(),
      c = (0, a.useRef)(null),
      l = (0, a.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
      { nonce: o } = (0, a.useContext)(i._);
    return (
      (0, a.useInsertionEffect)(() => {
        let { width: e, height: t, top: r, left: a } = l.current;
        if (n || !c.current || !e || !t) return;
        c.current.dataset.motionPopId = u;
        let i = document.createElement("style");
        return (
          o && (i.nonce = o),
          document.head.appendChild(i),
          i.sheet &&
            i.sheet.insertRule(
              '\n          [data-motion-pop-id="'
                .concat(
                  u,
                  '"] {\n            position: absolute !important;\n            width: ',
                )
                .concat(e, "px !important;\n            height: ")
                .concat(t, "px !important;\n            top: ")
                .concat(r, "px !important;\n            left: ")
                .concat(a, "px !important;\n          }\n        "),
            ),
          () => {
            document.head.removeChild(i);
          }
        );
      }, [n]),
      (0, r.jsx)(h, {
        isPresent: n,
        childRef: c,
        sizeRef: l,
        children: a.cloneElement(t, { ref: c }),
      })
    );
  }
  let d = (e) => {
    let {
        children: t,
        initial: n,
        isPresent: u,
        onExitComplete: i,
        custom: h,
        presenceAffectsLayout: d,
        mode: y,
      } = e,
      s = (0, c.h)(p),
      f = (0, a.useId)(),
      k = (0, a.useCallback)(
        (e) => {
          for (let t of (s.set(e, !0), s.values())) if (!t) return;
          i && i();
        },
        [s, i],
      ),
      m = (0, a.useMemo)(
        () => ({
          id: f,
          initial: n,
          isPresent: u,
          custom: h,
          onExitComplete: k,
          register: (e) => (s.set(e, !1), () => s.delete(e)),
        }),
        d ? [Math.random(), k] : [u, k],
      );
    return (
      (0, a.useMemo)(() => {
        s.forEach((e, t) => s.set(t, !1));
      }, [u]),
      a.useEffect(() => {
        u || s.size || !i || i();
      }, [u]),
      "popLayout" === y && (t = (0, r.jsx)(o, { isPresent: u, children: t })),
      (0, r.jsx)(l.O.Provider, { value: m, children: t })
    );
  };
  function p() {
    return new Map();
  }
  var y = n(49637);
  let s = (e) => e.key || "";
  function f(e) {
    let t = [];
    return (
      a.Children.forEach(e, (e) => {
        (0, a.isValidElement)(e) && t.push(e);
      }),
      t
    );
  }
  var k = n(11534);
  let m = (e) => {
    let {
        children: t,
        custom: n,
        initial: l = !0,
        onExitComplete: i,
        presenceAffectsLayout: h = !0,
        mode: o = "sync",
        propagate: p = !1,
      } = e,
      [m, M] = (0, y.oO)(p),
      v = (0, a.useMemo)(() => f(t), [t]),
      Z = p && !m ? [] : v.map(s),
      x = (0, a.useRef)(!0),
      g = (0, a.useRef)(v),
      w = (0, c.h)(() => new Map()),
      [z, C] = (0, a.useState)(v),
      [j, b] = (0, a.useState)(v);
    (0, k.L)(() => {
      ((x.current = !1), (g.current = v));
      for (let e = 0; e < j.length; e++) {
        let t = s(j[e]);
        Z.includes(t) ? w.delete(t) : !0 !== w.get(t) && w.set(t, !1);
      }
    }, [j, Z.length, Z.join("-")]);
    let q = [];
    if (v !== z) {
      let e = [...v];
      for (let t = 0; t < j.length; t++) {
        let n = j[t],
          r = s(n);
        Z.includes(r) || (e.splice(t, 0, n), q.push(n));
      }
      ("wait" === o && q.length && (e = q), b(f(e)), C(v));
      return;
    }
    let { forceRender: E } = (0, a.useContext)(u.p);
    return (0, r.jsx)(r.Fragment, {
      children: j.map((e) => {
        let t = s(e),
          a = (!p || !!m) && (v === j || Z.includes(t));
        return (0, r.jsx)(
          d,
          {
            isPresent: a,
            initial: (!x.current || !!l) && void 0,
            custom: a ? void 0 : n,
            presenceAffectsLayout: h,
            mode: o,
            onExitComplete: a
              ? void 0
              : () => {
                  if (!w.has(t)) return;
                  w.set(t, !0);
                  let e = !0;
                  (w.forEach((t) => {
                    t || (e = !1);
                  }),
                    e &&
                      (null == E || E(),
                      b(g.current),
                      p && (null == M || M()),
                      i && i()));
                },
            children: e,
          },
          t,
        );
      }),
    });
  };
}
