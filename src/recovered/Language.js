// Recovered from the public Golden Letter demo; original module 82119.
export default function (e, t, n) {
  n.d(t, {
    SiteLangProvider: function () {
      return l;
    },
    Vt: function () {
      return u;
    },
    Z$: function () {
      return s;
    },
    p2: function () {
      return c;
    },
  });
  var a = n(57437),
    o = n(2265),
    i = n(78097);
  let r = (0, o.createContext)({ lang: i.Hj, setLang: () => {} });
  function l(e) {
    let { initialLang: t, syncDocument: n = !0, localOnly = false, children: l } = e,
      [u, c] = (0, o.useState)(t);
    (0, o.useEffect)(() => {
      n &&
        (function (e) {
          let t = document.documentElement;
          for (let n of ((t.lang = e),
          (t.dir = (0, i.t6)(e) ? "rtl" : "ltr"),
          i.$2)) {
            let t = i.x9[n];
            t && document.body.classList.toggle(t, n === e);
          }
        })(u);
    }, [u, n]);
    let s = (0, o.useCallback)((e) => {
        if (!(0, i.Cp)(e)) return;
        !(function (e) {
          try {
            document.cookie = ""
              .concat(i.Yk, "=")
              .concat(e, "; path=/; max-age=")
              .concat(31536e3, "; samesite=lax");
          } catch (e) {}
        })(e);
        let { pathname: t, search: n, hash: a } = window.location,
          { path: o } = (0, i.bt)(t);
        if (!localOnly && (0, i.Hk)(o)) {
          window.location.assign(
            ""
              .concat((0, i.mo)(e, o))
              .concat(n)
              .concat(a),
          );
          return;
        }
        c(e);
      }, [localOnly]),
      d = (0, o.useMemo)(() => ({ lang: u, setLang: s }), [u, s]);
    return (0, a.jsx)(r.Provider, { value: d, children: l });
  }
  function u() {
    return (0, o.useContext)(r).lang;
  }
  function c() {
    return (0, o.useContext)(r);
  }
  function s() {
    let e = u();
    return (0, o.useCallback)((t) => (0, i.FT)(e, t), [e]);
  }
}
