// Recovered from the public Golden Letter demo; original module 71837.
export default function (n, t, e) {
  e.d(t, {
    Au: function () {
      return _;
    },
    CE: function () {
      return P;
    },
    Ce: function () {
      return nc;
    },
    DJ: function () {
      return k;
    },
    DO: function () {
      return h;
    },
    D_: function () {
      return J;
    },
    Dd: function () {
      return nn;
    },
    F$: function () {
      return A;
    },
    JF: function () {
      return X;
    },
    KO: function () {
      return O;
    },
    KR: function () {
      return no;
    },
    KT: function () {
      return T;
    },
    Kd: function () {
      return G;
    },
    MQ: function () {
      return E;
    },
    MS: function () {
      return s;
    },
    Mu: function () {
      return v;
    },
    Nn: function () {
      return p;
    },
    Nv: function () {
      return U;
    },
    R: function () {
      return B;
    },
    Rg: function () {
      return x;
    },
    Ri: function () {
      return w;
    },
    TM: function () {
      return q;
    },
    V_: function () {
      return L;
    },
    Vj: function () {
      return y;
    },
    WD: function () {
      return ni;
    },
    XP: function () {
      return nt;
    },
    Yj: function () {
      return $;
    },
    ZH: function () {
      return N;
    },
    ZU: function () {
      return Q;
    },
    _V: function () {
      return S;
    },
    aI: function () {
      return na;
    },
    ag: function () {
      return M;
    },
    b3: function () {
      return ne;
    },
    b9: function () {
      return m;
    },
    dS: function () {
      return C;
    },
    hB: function () {
      return F;
    },
    ht: function () {
      return R;
    },
    jU: function () {
      return nd;
    },
    jo: function () {
      return g;
    },
    jw: function () {
      return K;
    },
    kW: function () {
      return nu;
    },
    lE: function () {
      return I;
    },
    lY: function () {
      return ns;
    },
    mp: function () {
      return Z;
    },
    oZ: function () {
      return j;
    },
    re: function () {
      return W;
    },
    ri: function () {
      return nl;
    },
    uP: function () {
      return Y;
    },
    uZ: function () {
      return z;
    },
    wZ: function () {
      return H;
    },
    x7: function () {
      return b;
    },
    y3: function () {
      return V;
    },
    yZ: function () {
      return nr;
    },
  });
  var o = e(2773),
    r = e(11948),
    i = e(66676),
    u = e(7884),
    l = e(62479),
    c = e(18744),
    a = e(78097);
  let d = "/api";
  class s extends Error {
    constructor(n, t = "UNKNOWN_ERROR", e = 0) {
      (super(n), (this.name = "ApiError"), (this.code = t), (this.status = e));
    }
  }
  async function f(n) {
    var t, e, o, r, i, u, l;
    let c,
      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { token: f, headers: m, ...v } = a,
      p = v.body instanceof FormData;
    try {
      c = await fetch("".concat(d).concat(n), {
        ...v,
        headers: {
          ...(p ? {} : { "Content-Type": "application/json" }),
          ...(f ? { Authorization: "Bearer ".concat(f) } : {}),
          ...m,
        },
      });
    } catch (t) {
      throw (
        (n.includes("/payments") || n.includes("payment-status")) &&
          console.error("[payment] API network error", { path: n, err: t }),
        new s(
          "We couldn't reach the server. Please check your connection and try again.",
          "NETWORK_ERROR",
        )
      );
    }
    let y = await c.json().catch(() => null);
    if (
      ((n.includes("/payments") || n.includes("payment-status")) &&
        (c.ok
          ? console.log("[payment] API ok", { path: n, status: c.status })
          : console.error("[payment] API error", {
              path: n,
              status: c.status,
              code:
                null == y
                  ? void 0
                  : null === (t = y.error) || void 0 === t
                    ? void 0
                    : t.code,
              message:
                null == y
                  ? void 0
                  : null === (e = y.error) || void 0 === e
                    ? void 0
                    : e.message,
            })),
      !c.ok)
    )
      throw new s(
        null !==
          (i =
            null == y
              ? void 0
              : null === (o = y.error) || void 0 === o
                ? void 0
                : o.message) && void 0 !== i
          ? i
          : "Something went wrong. Please try again.",
        null !==
          (u =
            null == y
              ? void 0
              : null === (r = y.error) || void 0 === r
                ? void 0
                : r.code) && void 0 !== u
          ? u
          : "UNKNOWN_ERROR",
        c.status,
      );
    return null !== (l = null == y ? void 0 : y.data) && void 0 !== l ? l : y;
  }
  function m(n) {
    return f("/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ email: n }),
    });
  }
  function v(n, t, e, o) {
    return f("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify({ email: n, code: t, region: e, linkToken: o }),
    });
  }
  function p(n, t, e) {
    return f("/auth/google", {
      method: "POST",
      body: JSON.stringify({ idToken: n, region: t, linkToken: e }),
    });
  }
  function y(n) {
    return f("/auth/phone", { method: "POST", body: JSON.stringify(n) });
  }
  function g(n) {
    return f("/auth/me", { token: n });
  }
  function h(n, t) {
    return f("/auth/me", {
      method: "PATCH",
      token: t,
      body: JSON.stringify(n),
    });
  }
  function b(n, t, e, r) {
    var l, d;
    return f("/invitations", {
      method: "POST",
      token: e,
      body: JSON.stringify({
        ...n,
        visitorId: (0, c.O)(),
        region: (0, o.WS)(t),
        affiliateId: null !== (l = (0, i.W)()) && void 0 !== l ? l : void 0,
        promo: null !== (d = (0, u.O)()) && void 0 !== d ? d : void 0,
        etsyOrderId: r || void 0,
        siteLanguage: (0, a.w9)(),
      }),
    });
  }
  function S(n, t, e) {
    return f("/invitations/".concat(n), {
      method: "PATCH",
      token: e,
      body: JSON.stringify({ ...t, visitorId: (0, c.O)() }),
    });
  }
  function O(n, t) {
    return f("/invitations/".concat(n), { token: t });
  }
  function I(n) {
    return f("/invitations", { token: n });
  }
  function N(n, t) {
    return f("/invitations/".concat(n), { method: "DELETE", token: t });
  }
  function E(n, t, e) {
    return f("/invitations/".concat(n, "/analytics?range=").concat(t), {
      token: e,
    });
  }
  function T(n, t, e, o) {
    return f(
      "/invitations/"
        .concat(n, "/rsvps?page=")
        .concat(t, "&pageSize=")
        .concat(e),
      { token: o },
    );
  }
  function P(n, t) {
    return f("/public/invitations/".concat(encodeURIComponent(n), "/rsvp"), {
      method: "POST",
      body: JSON.stringify(t),
    });
  }
  function w(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = new URLSearchParams();
    for (let [n, o] of Object.entries(t))
      void 0 !== o && "" !== o && e.set(n, String(o));
    return f(
      "/public/albums/".concat(encodeURIComponent(n), "/posts?").concat(e),
      { cache: "no-store" },
    );
  }
  function k(n, t) {
    return f(
      "/public/albums/"
        .concat(encodeURIComponent(n), "/posts/")
        .concat(encodeURIComponent(t)),
      { cache: "no-store" },
    );
  }
  function R(n, t, e) {
    return f(
      "/public/albums/"
        .concat(encodeURIComponent(n), "/posts/")
        .concat(encodeURIComponent(t), "/likes"),
      { method: "POST", body: JSON.stringify(e) },
    );
  }
  function C(n, t, e) {
    return f(
      "/public/albums/"
        .concat(encodeURIComponent(n), "/posts/")
        .concat(encodeURIComponent(t), "/likes/")
        .concat(encodeURIComponent(e)),
      { method: "DELETE" },
    );
  }
  function U(n, t, e) {
    return f(
      "/public/albums/"
        .concat(encodeURIComponent(n), "/posts/")
        .concat(encodeURIComponent(t), "/comments"),
      { method: "POST", body: JSON.stringify(e) },
    );
  }
  function x(n, t, e) {
    return f("/public/albums/".concat(encodeURIComponent(n), "/views"), {
      method: "POST",
      body: JSON.stringify({ postIds: t, guestId: e }),
      keepalive: !0,
    });
  }
  function A(n, t) {
    return f(
      "/public/albums/"
        .concat(encodeURIComponent(n), "/media/")
        .concat(encodeURIComponent(t), "/share-meta"),
      { method: "POST" },
    );
  }
  function D() {
    try {
      var n, t;
      return null !==
        (t =
          null !== (n = localStorage.getItem("ft_token")) && void 0 !== n
            ? n
            : localStorage.getItem("wgw_token")) && void 0 !== t
        ? t
        : void 0;
    } catch (n) {
      return;
    }
  }
  function J(n) {
    var t, e;
    let o = (0, l.Tq)();
    return f("/public/track", {
      method: "POST",
      body: JSON.stringify({
        path: n,
        visitorId: (0, c.O)(),
        affiliateId: null !== (t = (0, i.W)()) && void 0 !== t ? t : void 0,
        promo: null !== (e = (0, u.O)()) && void 0 !== e ? e : void 0,
        country: null != o ? o : void 0,
      }),
      token: D(),
    }).catch(() => {});
  }
  function _(n, t) {
    var e;
    return f("/public/invitation-feedback", {
      method: "POST",
      body: JSON.stringify({
        reason: n.reason,
        phoneCountry: n.phoneCountry,
        phone: n.phone,
        invitationId:
          null !== (e = n.invitationId) && void 0 !== e ? e : void 0,
        templateSlug: n.templateSlug,
      }),
      token: null != t ? t : void 0,
    });
  }
  function M(n, t) {
    var e, o;
    let r = (0, l.Tq)();
    return f("/public/activity", {
      method: "POST",
      keepalive: !0,
      body: JSON.stringify({
        name: n,
        meta: t,
        visitorId: (0, c.O)(),
        affiliateId: null !== (e = (0, i.W)()) && void 0 !== e ? e : void 0,
        promo: null !== (o = (0, u.O)()) && void 0 !== o ? o : void 0,
        country: null != r ? r : void 0,
      }),
      token: D(),
    }).catch(() => {});
  }
  function F(n, t) {
    var e, o, r;
    if (
      "undefined" == typeof navigator ||
      "function" != typeof navigator.sendBeacon
    )
      return !1;
    let a = JSON.stringify({
      visitorId: (0, c.O)(),
      invitationId: null != t ? t : void 0,
      events: n,
      affiliateId: null !== (e = (0, i.W)()) && void 0 !== e ? e : void 0,
      promo: null !== (o = (0, u.O)()) && void 0 !== o ? o : void 0,
      country: null !== (r = (0, l.Tq)()) && void 0 !== r ? r : void 0,
    });
    try {
      return navigator.sendBeacon(
        "".concat(d, "/public/activity/batch"),
        new Blob([a], { type: "text/plain" }),
      );
    } catch (n) {
      return !1;
    }
  }
  function L(n, t) {
    let e = new URLSearchParams({ input: n, sessionToken: t });
    return f("/public/places/autocomplete?".concat(e.toString()));
  }
  function Y(n, t) {
    let e = new URLSearchParams({ placeId: n, sessionToken: t });
    return f("/public/places/details?".concat(e.toString()));
  }
  function j(n, t) {
    let e = new URLSearchParams({ lat: String(n), lng: String(t) });
    return f("/public/places/reverse-geocode?".concat(e.toString()));
  }
  function W(n, t, e) {
    var o;
    let r = new FormData(),
      i =
        (null === (o = n.name) || void 0 === o ? void 0 : o.trim()) ||
        ("application/pdf" === n.type ? "invitation.pdf" : "invitation.jpg"),
      u = (0, c.O)();
    return (
      u && r.append("visitorId", u),
      (null == e ? void 0 : e.source) && r.append("source", e.source),
      (null == e ? void 0 : e.invitationId) &&
        r.append("invitationId", e.invitationId),
      r.append("file", n, i),
      f("/public/invitation-import", { method: "POST", token: t, body: r })
    );
  }
  function q(n, t, e, o, i) {
    var u;
    let l = new FormData(),
      c =
        (null === (u = t.name) || void 0 === u ? void 0 : u.trim()) ||
        ("couple_only" === e
          ? "couple.webp"
          : "music" === e
            ? "music.mp3"
            : "photo.webp");
    return (
      l.append("file", t, c),
      l.append("type", e),
      i && l.append("source", i),
      f("/invitations/".concat(n, "/media"), {
        method: "POST",
        token: o,
        body: l,
      }).then((n) => ({ ...n, url: (0, r.fh)(n.url) || n.url }))
    );
  }
  function B(n, t, e) {
    var o;
    return f("/invitations/".concat(n, "/payments/stripe/session"), {
      method: "POST",
      token: e,
      body: JSON.stringify({
        ...t,
        country: null !== (o = (0, l.Tq)()) && void 0 !== o ? o : void 0,
      }),
    });
  }
  function X(n, t, e) {
    return f("/invitations/".concat(n, "/payments/stripe/confirm"), {
      method: "POST",
      token: e,
      body: JSON.stringify({ sessionId: t }),
    });
  }
  function z(n, t, e) {
    var o;
    return f("/invitations/".concat(n, "/payments/cashfree/order"), {
      method: "POST",
      token: e,
      body: JSON.stringify({
        ...t,
        country: null !== (o = (0, l.Tq)()) && void 0 !== o ? o : void 0,
      }),
    });
  }
  function K(n, t, e) {
    return f("/invitations/".concat(n, "/payments/cashfree/verify"), {
      method: "POST",
      token: e,
      body: JSON.stringify(t),
    });
  }
  function Z(n, t) {
    var e;
    return f("/albums", {
      method: "POST",
      token: t,
      body: JSON.stringify({
        ...n,
        country: null !== (e = (0, l.Tq)()) && void 0 !== e ? e : void 0,
      }),
    });
  }
  function H(n) {
    return f("/albums", { token: n, cache: "no-store" });
  }
  function V(n, t) {
    return f("/albums/".concat(n), { token: t, cache: "no-store" });
  }
  function $(n, t, e) {
    var o;
    return f("/albums/".concat(n), {
      method: "PATCH",
      token: e,
      body: JSON.stringify({
        ...t,
        country: null !== (o = (0, l.Tq)()) && void 0 !== o ? o : void 0,
      }),
    });
  }
  function G(n, t, e, o, r, i) {
    var u;
    let l = new FormData();
    (l.append("type", t),
      (null == i ? void 0 : i.caption) && l.append("caption", i.caption),
      (null == i ? void 0 : i.location) && l.append("location", i.location),
      (null == i
        ? void 0
        : null === (u = i.labels) || void 0 === u
          ? void 0
          : u.length) && l.append("labels", JSON.stringify(i.labels)));
    let c =
      e instanceof File && e.name
        ? e.name
        : "video" === t
          ? "video.mp4"
          : "photo.webp";
    return (
      l.append("file", e, c),
      r && l.append("poster", r, "poster.jpg"),
      f("/albums/".concat(n, "/media"), { method: "POST", token: o, body: l })
    );
  }
  function Q(n, t, e, o) {
    return f("/albums/".concat(n, "/posts/").concat(t), {
      method: "PATCH",
      token: o,
      body: JSON.stringify(e),
    });
  }
  function nn(n, t, e) {
    return f("/albums/".concat(n, "/labels"), {
      method: "POST",
      token: e,
      body: JSON.stringify({ label: t }),
    });
  }
  function nt(n, t, e, o) {
    return f("/albums/".concat(n, "/labels"), {
      method: "PATCH",
      token: o,
      body: JSON.stringify({ from: t, to: e }),
    });
  }
  function ne(n, t, e) {
    return f(
      "/albums/".concat(n, "/labels?label=").concat(encodeURIComponent(t)),
      { method: "DELETE", token: e },
    );
  }
  function no(n, t, e) {
    return f("/albums/".concat(n, "/posts/").concat(t), {
      method: "DELETE",
      token: e,
    });
  }
  function nr(n, t) {
    return f("/albums/".concat(n, "/subdomain/suggest"), {
      token: t,
      cache: "no-store",
    });
  }
  function ni(n, t, e) {
    return f(
      "/albums/"
        .concat(n, "/subdomain/check?value=")
        .concat(encodeURIComponent(t)),
      { token: e, cache: "no-store" },
    );
  }
  function nu(n, t, e) {
    return f("/albums/".concat(n, "/subdomain"), {
      method: "POST",
      token: e,
      body: JSON.stringify({ subdomain: t }),
    });
  }
  function nl(n, t, e) {
    var o;
    return f("/albums/".concat(n, "/payments/stripe/session"), {
      method: "POST",
      token: e,
      body: JSON.stringify({
        ...t,
        country: null !== (o = (0, l.Tq)()) && void 0 !== o ? o : void 0,
      }),
    });
  }
  function nc(n, t, e) {
    return f("/albums/".concat(n, "/payments/stripe/confirm"), {
      method: "POST",
      token: e,
      body: JSON.stringify({ sessionId: t }),
    });
  }
  function na(n, t) {
    return f("/subdomains/check?value=".concat(encodeURIComponent(n)), {
      token: null != t ? t : void 0,
    });
  }
  function nd(n, t, e) {
    return f("/invitations/".concat(n, "/subdomain"), {
      method: "POST",
      token: null != e ? e : void 0,
      body: JSON.stringify({ subdomain: t }),
    });
  }
  async function ns(n, t) {
    let e = await fetch("".concat(d, "/public/youtube-audio"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...((null == t ? void 0 : t.token)
          ? { Authorization: "Bearer ".concat(t.token) }
          : {}),
      },
      body: JSON.stringify({
        url: n,
        visitorId: (0, c.O)(),
        ...((null == t ? void 0 : t.source) ? { source: t.source } : {}),
        ...((null == t ? void 0 : t.invitationId)
          ? { invitationId: t.invitationId }
          : {}),
      }),
    });
    if (!e.ok) {
      let n = "Failed to get audio from YouTube (".concat(e.status, ")");
      try {
        var o;
        let t = await e.json();
        (null == t
          ? void 0
          : null === (o = t.error) || void 0 === o
            ? void 0
            : o.message) && (n = t.error.message);
      } catch (n) {}
      throw new s(n, "YOUTUBE_AUDIO_ERROR", e.status);
    }
    let r = e.headers.get("X-Original-Filename"),
      i = "youtube-audio.mp3";
    if (r)
      try {
        i = decodeURIComponent(r);
      } catch (n) {
        i = r;
      }
    let u = await e.blob();
    return {
      file: new File([u], i, { type: u.type || "audio/mpeg" }),
      originalName: i,
    };
  }
}
