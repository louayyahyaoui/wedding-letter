// Recovered from the public Golden Letter demo; original module 4469.
export default function (t, e, i) {
  i.d(e, {
    r: function () {
      return u;
    },
  });
  var n = i(37249);
  let r = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
  var s = i(66204),
    o = i(87487);
  let a = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    l = o._.length;
  function u(t, e, i) {
    let { style: u, vars: h, transformOrigin: c } = t,
      d = !1,
      p = !1;
    for (let t in e) {
      let i = e[t];
      if (o.G.has(t)) {
        d = !0;
        continue;
      }
      if ((0, n.f)(t)) {
        h[t] = i;
        continue;
      }
      {
        let e = r(i, s.j[t]);
        t.startsWith("origin") ? ((p = !0), (c[t] = e)) : (u[t] = e);
      }
    }
    if (
      (!e.transform &&
        (d || i
          ? (u.transform = (function (t, e, i) {
              let n = "",
                u = !0;
              for (let h = 0; h < l; h++) {
                let l = o._[h],
                  c = t[l];
                if (void 0 === c) continue;
                let d = !0;
                if (
                  !(d =
                    "number" == typeof c
                      ? c === (l.startsWith("scale") ? 1 : 0)
                      : 0 === parseFloat(c)) ||
                  i
                ) {
                  let t = r(c, s.j[l]);
                  if (!d) {
                    u = !1;
                    let e = a[l] || l;
                    n += `${e}(${t}) `;
                  }
                  i && (e[l] = t);
                }
              }
              return (
                (n = n.trim()),
                i ? (n = i(e, u ? "" : n)) : u && (n = "none"),
                n
              );
            })(e, t.transform, i))
          : u.transform && (u.transform = "none")),
      p)
    ) {
      let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = c;
      u.transformOrigin = `${t} ${e} ${i}`;
    }
  }
}
