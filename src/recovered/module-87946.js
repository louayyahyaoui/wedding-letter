// Recovered from the public Golden Letter demo; original module 87946.
export default function (e, t, a) {
  a.d(t, {
    po: function () {
      return l;
    },
    zu: function () {
      return r;
    },
  });
  var n = a(2265);
  function r() {
    let [e, t] = (0, n.useState)(!1);
    return (
      (0, n.useEffect)(() => {
        let e = () => {
          t(window.innerWidth / (window.innerHeight || 1) > 0.82);
        };
        return (
          e(),
          window.addEventListener("resize", e),
          window.addEventListener("orientationchange", e),
          () => {
            (window.removeEventListener("resize", e),
              window.removeEventListener("orientationchange", e));
          }
        );
      }, []),
      e
    );
  }
  let l = { width: "min(100vw, calc(100svh * 9 / 16))", maxWidth: "100%" };
}
