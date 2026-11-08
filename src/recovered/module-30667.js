// Recovered from the public Golden Letter demo; original module 30667.
export default function (e, t, n) {
  n.d(t, {
    B9: function () {
      return l;
    },
    I0: function () {
      return u;
    },
    LH: function () {
      return w;
    },
    M_: function () {
      return d;
    },
    O7: function () {
      return f;
    },
    W2: function () {
      return g;
    },
    Yx: function () {
      return m;
    },
    l7: function () {
      return b;
    },
    qu: function () {
      return v;
    },
    yG: function () {
      return p;
    },
  });
  var a = n(93292),
    o = n(61459),
    i = n(78097);
  let r = ""
    .concat(Date.now().toString(36))
    .concat(Math.random().toString(36).slice(2, 8));
  function l(e) {
    return "purchase:".concat(e);
  }
  function u(e) {
    return "upi_wa:".concat(e);
  }
  function c() {
    if ("undefined" == typeof document) return { fbp: null, fbc: null };
    try {
      let e = document.cookie.split(";").map((e) => e.trim()),
        t = (t) => {
          let n = e.find((e) => e.startsWith("".concat(t, "=")));
          return n ? decodeURIComponent(n.slice(t.length + 1)) : null;
        };
      return { fbp: t("_fbp"), fbc: t("_fbc") };
    } catch (e) {
      return { fbp: null, fbc: null };
    }
  }
  function s(e, t) {
    try {
      !(function (e, t) {
        var n, r, l;
        let u = t.eventId.trim();
        if (
          !u ||
          !(function (e, t) {
            let n = "".concat("ft_meta_evt:").concat(e);
            try {
              if ("forever" === t) {
                if (window.localStorage.getItem(n)) return !1;
                return (window.localStorage.setItem(n, "1"), !0);
              }
              if ("session" === t) {
                if (window.sessionStorage.getItem(n)) return !1;
                return (window.sessionStorage.setItem(n, "1"), !0);
              }
              let e = Number(window.sessionStorage.getItem(n) || 0),
                a = Date.now();
              if (e && a - e < t) return !1;
              return (window.sessionStorage.setItem(n, String(a)), !0);
            } catch (e) {
              return !0;
            }
          })(
            null !== (r = t.dedupeKey) && void 0 !== r
              ? r
              : "".concat(e, ":").concat(u),
            null !== (l = t.dedupe) && void 0 !== l ? l : "forever",
          )
        )
          return;
        let s = t.currency
            ? t.currency.toUpperCase()
            : t.region
              ? (0, a.qD)(null, t.region).toUpperCase()
              : void 0,
          d = (function (e, t) {
            let n = {
              screen: (function () {
                try {
                  return (0, i.bt)(window.location.pathname).path;
                } catch (e) {
                  return "";
                }
              })(),
              site_language: (0, i.w9)(),
            };
            if ((t && (n.region = t), null == e ? void 0 : e.templateSlug)) {
              var a, r;
              ((n.content_name =
                null !==
                  (r =
                    null === (a = (0, o.t4)(e.templateSlug)) || void 0 === a
                      ? void 0
                      : a.name) && void 0 !== r
                  ? r
                  : e.templateSlug),
                (n.content_category = "wedding_invitation_design"));
            }
            return (
              (null == e ? void 0 : e.source) && (n.source = e.source),
              (null == e ? void 0 : e.step) && (n.step = e.step),
              (null == e ? void 0 : e.gateway) && (n.gateway = e.gateway),
              n
            );
          })(t.context, t.region),
          g = { ...d };
        ("number" == typeof t.value &&
          Number.isFinite(t.value) &&
          (g.value = t.value),
          s && (g.currency = s),
          (null === (n = t.contentIds) || void 0 === n ? void 0 : n.length) &&
            ((g.content_ids = t.contentIds), (g.content_type = "product")),
          "function" == typeof window.fbq &&
            window.fbq("track", e, g, { eventID: u }),
          t.pixelOnly ||
            (function (e) {
              var t;
              let { fbp: n, fbc: a } = c(),
                o = { "Content-Type": "application/json" },
                i = (function () {
                  try {
                    var e, t;
                    return null !==
                      (t =
                        null !== (e = localStorage.getItem("ft_token")) &&
                        void 0 !== e
                          ? e
                          : localStorage.getItem("wgw_token")) && void 0 !== t
                      ? t
                      : void 0;
                  } catch (e) {
                    return;
                  }
                })();
              (i && (o.Authorization = "Bearer ".concat(i)),
                fetch(
                  "".concat(
                    "https://api.forevertale.in/api/v1",
                    "/public/meta-event",
                  ),
                  {
                    method: "POST",
                    headers: o,
                    body: JSON.stringify({
                      eventName: e.eventName,
                      eventId: e.eventId,
                      value: e.value,
                      currency: e.currency,
                      contentIds: e.contentIds,
                      invitationId: e.invitationId,
                      fbp: null != n ? n : void 0,
                      fbc: null != a ? a : void 0,
                      eventSourceUrl:
                        null !== (t = e.eventSourceUrl) && void 0 !== t
                          ? t
                          : window.location.href,
                      customData: e.customData,
                    }),
                    keepalive: !0,
                  },
                ).catch(() => {}));
            })({
              eventName: e,
              eventId: u,
              value: "number" == typeof t.value ? t.value : void 0,
              currency: s,
              contentIds: t.contentIds,
              invitationId: t.invitationId,
              customData: d,
            }));
      })(e, t);
    } catch (e) {}
  }
  function d(e) {
    s("ViewContent", {
      eventId: "view:".concat(e.contentId, ":").concat(r),
      dedupeKey: "ViewContent:".concat(e.contentId),
      dedupe: "session",
      contentIds: [e.contentId],
      value: e.value,
      region: e.region,
      context: { templateSlug: e.contentId, source: e.source },
    });
  }
  function g(e) {
    let t = null == e ? void 0 : e.invitationId;
    s("StartTrial", {
      eventId: t ? "trial:".concat(t) : "trial:".concat(r),
      dedupeKey: t ? "StartTrial:".concat(t) : "StartTrial:session",
      dedupe: t ? "forever" : "session",
      invitationId: t,
      contentIds: (null == e ? void 0 : e.templateSlug)
        ? [e.templateSlug]
        : void 0,
      context: {
        templateSlug: null == e ? void 0 : e.templateSlug,
        source: null == e ? void 0 : e.source,
      },
    });
  }
  function v(e) {
    s("CustomizeProduct", {
      eventId: "customize:".concat(e.invitationId),
      invitationId: e.invitationId,
      contentIds: e.templateSlug ? [e.templateSlug] : void 0,
      value: e.value,
      region: e.region,
      context: { templateSlug: e.templateSlug, source: e.source },
    });
  }
  function p(e) {
    let t = (null == e ? void 0 : e.userId) || "anon:".concat(r);
    s("CompleteRegistration", {
      eventId: "reg:".concat(t),
      dedupeKey: "CompleteRegistration:".concat(t),
      context: { source: null == e ? void 0 : e.source },
    });
  }
  function m(e) {
    s("InitiateCheckout", {
      eventId: "checkout:".concat(e.gateway, ":").concat(e.invitationId),
      invitationId: e.invitationId,
      contentIds: e.templateSlug ? [e.templateSlug] : void 0,
      value: e.value,
      region: e.region,
      context: { templateSlug: e.templateSlug, gateway: e.gateway },
    });
  }
  function f(e) {
    let t = (null == e ? void 0 : e.source) || "whatsapp";
    s("Contact", {
      eventId: "contact:".concat(t, ":").concat(r, ":").concat(Date.now()),
      dedupeKey: "Contact",
      dedupe: 4e3,
      context: { source: t, templateSlug: null == e ? void 0 : e.templateSlug },
    });
  }
  function w(e) {
    s("Purchase", {
      eventId: e.eventId,
      value: e.value,
      region: e.region,
      currency: e.currency,
      contentIds: e.templateSlug ? [e.templateSlug] : void 0,
      context: { templateSlug: e.templateSlug },
      pixelOnly: !0,
    });
  }
  function b(e) {
    let { fbp: t, fbc: n } = c();
    return {
      eventId: u(e),
      fbp: null != t ? t : void 0,
      fbc: null != n ? n : void 0,
      eventSourceUrl: window.location.href,
    };
  }
}
