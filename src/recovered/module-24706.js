// Recovered from the public Golden Letter demo; original module 24706.
export default function (e, n, a) {
  a.d(n, {
    B_: function () {
      return m;
    },
    GH: function () {
      return p;
    },
    H7: function () {
      return g;
    },
    NL: function () {
      return b;
    },
    Qy: function () {
      return s;
    },
    X4: function () {
      return h;
    },
    _u: function () {
      return M;
    },
    jh: function () {
      return f;
    },
    nh: function () {
      return k;
    },
    rC: function () {
      return S;
    },
    wN: function () {
      return v;
    },
  });
  var t = a(62592),
    r = a(6735);
  let i = "ft_muslim_version",
    o = "ft_demo_audio",
    u = "ft_demo_tour_done",
    l = "ft_demo_rsvp_tip_done",
    s = ["bruno-mars-marry-you.mp3", t.mg];
  function d(e) {
    try {
      return localStorage.getItem(e);
    } catch (e) {
      return null;
    }
  }
  function c(e, n) {
    try {
      localStorage.setItem(e, n);
    } catch (e) {}
  }
  function m() {
    let e = d(i);
    return "1" === e || ("0" !== e && null);
  }
  function f(e) {
    c(i, e ? "1" : "0");
  }
  function h() {
    let e = d(o);
    return "random" === e
      ? { track: s[Math.floor(Math.random() * s.length)], isRandom: !0 }
      : e && s.includes(e)
        ? { track: e, isRandom: !1 }
        : { track: e === "none" ? null : s[0], isRandom: !1 };
  }
  function g(e) {
    var n;
    c(
      o,
      e.isRandom
        ? "random"
        : null !== (n = e.track) && void 0 !== n
          ? n
          : "none",
    );
  }
  function p() {
    return "1" === d(u);
  }
  function v() {
    c(u, "1");
  }
  function b() {
    return "1" === d(l);
  }
  function k() {
    c(l, "1");
  }
  let y = "ft_demo_lang";
  function M() {
    let e = d(y);
    return (0, r.Xr)(e) ? e : null;
  }
  function S(e) {
    c(y, e);
  }
}
