// Recovered from the public Golden Letter demo; original module 11948.
export default function (n, t, e) {
  e.d(t, {
    _f: function () {
      return d;
    },
    fh: function () {
      return a;
    },
    qD: function () {
      return s;
    },
  });
  var o = e(69678),
    r = e(37370),
    i = e(32059),
    u = e(84901),
    l = e(71992),
    c = e(69491);
  function a(n) {
    if (!n) return null;
    let t = n.indexOf("/uploads/");
    return -1 === t ? n : n.slice(t);
  }
  function d() {
    return {
      cover: null,
      gallery: [],
      music: "none",
      couple_only: null,
      couplePhoto: null,
      metaImage: null,
      customBg: null,
      invitationCard: null,
      musicConfig: null,
    };
  }
  function s(n) {
    var t,
      e,
      d,
      s,
      f,
      m,
      v,
      p,
      y,
      g,
      h,
      b,
      S,
      O,
      I,
      N,
      E,
      T,
      P,
      w,
      k,
      R,
      C,
      U,
      x,
      A,
      D,
      J,
      _,
      M,
      F,
      L,
      Y,
      j,
      W,
      q,
      B;
    let { coverPhotoUrl: X, galleryPhotoUrls: z, music: K } = n,
      Z = {
        templateSlug: n.templateSlug || "",
        couple: {
          brideName:
            null !==
              (E =
                null === (t = n.couple) || void 0 === t
                  ? void 0
                  : t.brideName) && void 0 !== E
              ? E
              : "",
          brideNickname:
            null !==
              (T =
                null === (e = n.couple) || void 0 === e
                  ? void 0
                  : e.brideNickname) && void 0 !== T
              ? T
              : "",
          brideParents:
            null !==
              (P =
                null === (d = n.couple) || void 0 === d
                  ? void 0
                  : d.brideParents) && void 0 !== P
              ? P
              : "",
          groomName:
            null !==
              (w =
                null === (s = n.couple) || void 0 === s
                  ? void 0
                  : s.groomName) && void 0 !== w
              ? w
              : "",
          groomNickname:
            null !==
              (k =
                null === (f = n.couple) || void 0 === f
                  ? void 0
                  : f.groomNickname) && void 0 !== k
              ? k
              : "",
          groomParents:
            null !==
              (R =
                null === (m = n.couple) || void 0 === m
                  ? void 0
                  : m.groomParents) && void 0 !== R
              ? R
              : "",
          nameOrder: (0, o.T2)(
            null === (v = n.couple) || void 0 === v ? void 0 : v.nameOrder,
          ),
        },
        event: {
          occasionType:
            null !==
              (C =
                null === (p = n.event) || void 0 === p
                  ? void 0
                  : p.occasionType) && void 0 !== C
              ? C
              : "",
          date:
            null !==
              (U = null === (y = n.event) || void 0 === y ? void 0 : y.date) &&
            void 0 !== U
              ? U
              : "",
          time:
            null !==
              (x = null === (g = n.event) || void 0 === g ? void 0 : g.time) &&
            void 0 !== x
              ? x
              : "",
          venueName:
            null !==
              (A =
                null === (h = n.event) || void 0 === h
                  ? void 0
                  : h.venueName) && void 0 !== A
              ? A
              : "",
          address:
            null !==
              (D =
                null === (b = n.event) || void 0 === b ? void 0 : b.address) &&
            void 0 !== D
              ? D
              : "",
          city:
            null !==
              (J = null === (S = n.event) || void 0 === S ? void 0 : S.city) &&
            void 0 !== J
              ? J
              : "",
          mapLink:
            null !==
              (_ =
                null === (O = n.event) || void 0 === O ? void 0 : O.mapLink) &&
            void 0 !== _
              ? _
              : "",
          order:
            "number" ==
            typeof (null === (I = n.event) || void 0 === I ? void 0 : I.order)
              ? n.event.order
              : (0, l.nr)(
                  n.mainEventOrder,
                  (null !== (M = n.additionalEvents) && void 0 !== M ? M : [])
                    .length,
                ),
        },
        additionalEvents: (null !== (F = n.additionalEvents) && void 0 !== F
          ? F
          : []
        ).map((n, t) => {
          var e, o, r, i, u, l, c;
          return {
            id: n.id || crypto.randomUUID(),
            name: null !== (e = n.name) && void 0 !== e ? e : "",
            date: null !== (o = n.date) && void 0 !== o ? o : "",
            time: null !== (r = n.time) && void 0 !== r ? r : "",
            venue: null !== (i = n.venue) && void 0 !== i ? i : "",
            address: null !== (u = n.address) && void 0 !== u ? u : "",
            city: null !== (l = n.city) && void 0 !== l ? l : "",
            mapLink: null !== (c = n.mapLink) && void 0 !== c ? c : "",
            sameVenueAsMain: !!n.sameVenueAsMain,
            order: "number" == typeof n.order ? n.order : t,
          };
        }),
        story: null !== (L = n.story) && void 0 !== L ? L : "",
        endingNote: null !== (Y = n.endingNote) && void 0 !== Y ? Y : "",
        assets: (function (n, t) {
          var e, o, i, u, l, c, d, s, f, m;
          let v =
              (null == n ? void 0 : n.music) ||
              (null == t ? void 0 : t.music) ||
              "none",
            p =
              ((f = null == n ? void 0 : n.musicConfig),
              (m = v),
              (null == f ? void 0 : f.mode) === "upload" &&
              "string" == typeof f.url &&
              f.url
                ? {
                    mode: "upload",
                    url: a(f.url) || f.url,
                    originalName: f.originalName || "Uploaded music",
                    durationSec:
                      "number" == typeof f.durationSec ? f.durationSec : null,
                    trimStartSec:
                      "number" == typeof f.trimStartSec ? f.trimStartSec : 0,
                    trimEndSec:
                      "number" == typeof f.trimEndSec ? f.trimEndSec : null,
                    sourceType:
                      "upload" === f.sourceType ||
                      "extract-video" === f.sourceType ||
                      "video-link" === f.sourceType ||
                      "youtube-link" === f.sourceType
                        ? f.sourceType
                        : void 0,
                  }
                : "string" == typeof m &&
                    (/^https?:\/\//i.test(m) || m.startsWith("/uploads/"))
                  ? {
                      mode: "upload",
                      url: a(m) || m,
                      originalName: "Uploaded music",
                      durationSec: null,
                      trimStartSec: 0,
                      trimEndSec: null,
                    }
                  : null),
            y = (
              null !==
                (o =
                  null !== (e = null == n ? void 0 : n.gallery) && void 0 !== e
                    ? e
                    : null == t
                      ? void 0
                      : t.galleryPhotoUrls) && void 0 !== o
                ? o
                : []
            )
              .map((n) => a(n) || n)
              .filter(Boolean);
          return {
            cover: a(
              null !==
                (u =
                  null !== (i = null == n ? void 0 : n.cover) && void 0 !== i
                    ? i
                    : null == t
                      ? void 0
                      : t.coverPhotoUrl) && void 0 !== u
                ? u
                : null,
            ),
            gallery: y,
            music: p ? "upload" : v,
            couple_only: a(
              null !== (l = null == n ? void 0 : n.couple_only) && void 0 !== l
                ? l
                : null,
            ),
            couplePhoto: (function (n) {
              if (!n || "object" != typeof n) return null;
              let t = r.R$.some((t) => t.id === n.pose) ? n.pose : null;
              return t
                ? {
                    pose: t,
                    groomCostume:
                      "string" == typeof n.groomCostume ? n.groomCostume : null,
                    brideCostume:
                      "string" == typeof n.brideCostume ? n.brideCostume : null,
                    coupleImageId:
                      "string" == typeof n.coupleImageId
                        ? n.coupleImageId
                        : null,
                  }
                : null;
            })(null == n ? void 0 : n.couplePhoto),
            metaImage: a(
              null !== (c = null == n ? void 0 : n.metaImage) && void 0 !== c
                ? c
                : null,
            ),
            customBg: a(
              null !== (d = null == n ? void 0 : n.customBg) && void 0 !== d
                ? d
                : null,
            ),
            invitationCard: a(
              null !== (s = null == n ? void 0 : n.invitationCard) &&
                void 0 !== s
                ? s
                : null,
            ),
            musicConfig: p,
          };
        })(n.assets, { coverPhotoUrl: X, galleryPhotoUrls: z, music: K }),
        verse: (0, i.q9)(n.verse),
        includeRsvp: null === (j = n.includeRsvp) || void 0 === j || j,
        rsvpFields: (0, c.BA)(n.rsvpFields),
        islamicContent:
          null !== (W = n.islamicContent) && void 0 !== W ? W : null,
        language: "ar" === n.language ? "ar" : "en",
        nameFont: (0, u.px)(n.nameFont),
        dateFormat: "MM-DD-YYYY" === n.dateFormat ? "MM-DD-YYYY" : "DD-MM-YYYY",
        mainEventOrder: (0, l.nr)(
          null !== (q = n.mainEventOrder) && void 0 !== q
            ? q
            : null === (N = n.event) || void 0 === N
              ? void 0
              : N.order,
          (null !== (B = n.additionalEvents) && void 0 !== B ? B : []).length,
        ),
      },
      H = (0, l.NR)(Z.event, Z.additionalEvents, Z.mainEventOrder);
    return {
      ...Z,
      event: H.event,
      additionalEvents: H.additionalEvents,
      mainEventOrder: H.mainEventOrder,
    };
  }
}
