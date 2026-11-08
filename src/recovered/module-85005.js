// Recovered from the public Golden Letter demo; original module 85005.
export default function (t, e, i) {
  i.d(e, {
    Z: function () {
      return s;
    },
  });
  var n = i(24118);
  let r = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
  function s(t, e) {
    let i = !1,
      s = !0,
      o = { delta: 0, timestamp: 0, isProcessing: !1 },
      a = () => (i = !0),
      l = r.reduce(
        (t, e) => (
          (t[e] = (function (t) {
            let e = new Set(),
              i = new Set(),
              n = !1,
              r = !1,
              s = new WeakSet(),
              o = { delta: 0, timestamp: 0, isProcessing: !1 };
            function a(e) {
              (s.has(e) && (l.schedule(e), t()), e(o));
            }
            let l = {
              schedule: (t, r = !1, o = !1) => {
                let a = o && n ? e : i;
                return (r && s.add(t), a.has(t) || a.add(t), t);
              },
              cancel: (t) => {
                (i.delete(t), s.delete(t));
              },
              process: (t) => {
                if (((o = t), n)) {
                  r = !0;
                  return;
                }
                ((n = !0),
                  ([e, i] = [i, e]),
                  e.forEach(a),
                  e.clear(),
                  (n = !1),
                  r && ((r = !1), l.process(t)));
              },
            };
            return l;
          })(a)),
          t
        ),
        {},
      ),
      {
        read: u,
        resolveKeyframes: h,
        update: c,
        preRender: d,
        render: p,
        postRender: f,
      } = l,
      m = () => {
        let r = n.c.useManualTiming ? o.timestamp : performance.now();
        ((i = !1),
          (o.delta = s ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1)),
          (o.timestamp = r),
          (o.isProcessing = !0),
          u.process(o),
          h.process(o),
          c.process(o),
          d.process(o),
          p.process(o),
          f.process(o),
          (o.isProcessing = !1),
          i && e && ((s = !1), t(m)));
      },
      v = () => {
        ((i = !0), (s = !0), o.isProcessing || t(m));
      };
    return {
      schedule: r.reduce((t, e) => {
        let n = l[e];
        return (
          (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))),
          t
        );
      }, {}),
      cancel: (t) => {
        for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
      },
      state: o,
      steps: l,
    };
  }
}
