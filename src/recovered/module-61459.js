// Recovered from the public Golden Letter demo; original module 61459.
export default function (e, t, n) {
  (n.d(t, {
    t4: function () {
      return l;
    },
    Rp: function () {
      return s;
    },
    Be: function () {
      return c;
    },
    cZ: function () {
      return u;
    },
    xr: function () {
      return r;
    },
    zd: function () {
      return i;
    },
  }),
    n(93292));
  var a = JSON.parse(
      '{"golden-silk":2,"velvet-curtain":3,"golden-letter":5,"emerald-parchment":10,"maroon-letter":20,"lace-and-love":1,"beach-vibes":30,"lavendar-dreams":40,"petal-sunset":50,"arabian-dawn":55,"ivory-bloom":60,"burj-khalifa":70,"sage-bloom":80,"noor-garden":90}',
    ),
    o = n(75192);
  let i = [
    {
      slug: "golden-silk",
      name: "Golden Silk",
      category: "Save the Date",
      description:
        "A rose-gold silk Save-the-Date video — a cinematic silk opening reveals your names, then Save the Date, your wedding date and a closing note.",
      palette: ["#5c3d2e", "#c9876a", "#f6e7dc"],
      image: "/assets/invitations/golden-silk/demo.webp",
      formats: ["reel"],
      requiresCouplePortrait: !1,
    },
    {
      slug: "emerald-parchment",
      name: "Emerald Parchment",
      category: "Wedding",
      description:
        "A deep-emerald, wax-sealed wedding invitation website — a scroll unrolls open only as you scroll, revealing your names and details on real parchment.",
      palette: ["#1f3a2b", "#b98a4a", "#efe4c9"],
      image: "/assets/invitations/emerald-parchment/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
      limitsNoteLength: !0,
    },
    {
      slug: "maroon-letter",
      name: "Maroon Letter",
      category: "Wedding",
      description:
        "A live invitation website that opens like a sealed letter — a wax-seal envelope intro video, a looping maroon hero, and a scratch-to-reveal wedding date.",
      palette: ["#6f1830", "#d4af37", "#f5e5e8"],
      image: "/assets/invitations/maroon-letter/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
    },
    {
      slug: "golden-letter",
      name: "Golden Letter",
      category: "Wedding",
      description:
        "A live invitation website that opens like a sealed letter — a cream-and-gold wax-seal envelope intro, typewriter names, and a scratch-to-reveal wedding date.",
      palette: ["#f7f0e4", "#c9a15a", "#7a4a2b"],
      image: "/assets/invitations/golden-letter/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
    },
    {
      slug: "lace-and-love",
      name: "Lace & Love",
      category: "Wedding",
      description:
        "A cream-and-gold Lace & Love invitation website with an elegant animated opening, gold floral accents, and picturesque event arch cards.",
      palette: ["#FCF9F2", "#A68945", "#3D2B1F"],
      image: "/assets/invitations/lace-and-love/demo.webp",
      formats: ["reel", "website"],
      requiresCouplePortrait: !1,
    },
    {
      slug: "beach-vibes",
      name: "Beach Vibes",
      category: "Wedding",
      description:
        "A breezy ocean-and-sand invitation — a looping intro film with Save-the-Date, names, date and ending note written in wet sand, plus a website with calendar date and countdown.",
      palette: ["#0b5563", "#ef7f5b", "#fdf1de"],
      image: "/assets/invitations/beach-vibes/demo.webp",
      formats: ["reel", "website"],
      requiresCouplePortrait: !1,
    },
    {
      slug: "lavendar-dreams",
      name: "Lavender Dreams",
      category: "Wedding",
      description:
        "A cinematic invitation website and Instagram reel — intro video, then page-turn pages with deep-purple type over the event scene.",
      palette: ["#44274B", "#c4a35a", "#e8d7ff"],
      image: "/assets/invitations/lavendar-dreams/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
      defaultMusic: "wedding_nasheed.mp3",
    },
    {
      slug: "petal-sunset",
      name: "Petal Sunset",
      category: "Wedding",
      description:
        "A blush-and-gold invitation website and Instagram reel — a couple portrait archway that slowly zooms in as page-turn pages tell your story.",
      palette: ["#6b2c3f", "#c9975a", "#f6d9c9"],
      image: "/assets/invitations/petal-sunset/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
      defaultMusic: "wedding_nasheed.mp3",
    },
    {
      slug: "arabian-dawn",
      name: "Arabian Dawn",
      category: "Wedding",
      description:
        "A gold-and-cream invitation website and Instagram reel — a Moorish archway at sunrise that slowly zooms in as page-turn pages tell your story. Supports Arabic (RTL).",
      palette: ["#7a4a2b", "#c9a15a", "#fbe6d2"],
      image: "/assets/invitations/arabian-dawn/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !1,
      defaultMusic: "wedding_nasheed.mp3",
    },
    {
      slug: "burj-khalifa",
      name: "Burj Khalifa",
      category: "Wedding",
      description:
        "A cinematic dark invitation website inspired by a glittering night skyline — a couple-photo intro, a silver glitter scratch-to-reveal date, and sparkling touches wherever your guests tap.",
      palette: ["#08090c", "#c7ccd6", "#eef1f6"],
      image: "/assets/invitations/burj-khalifa/demo.webp",
      formats: ["website"],
      requiresCouplePortrait: !0,
    },
  ].sort((e, t) => {
    var n, o;
    return (
      (null !== (n = a[e.slug]) && void 0 !== n ? n : 999) -
      (null !== (o = a[t.slug]) && void 0 !== o ? o : 999)
    );
  });
  function r(e, t) {
    return e.formats.includes(t);
  }
  function l(e, t) {
    return (t && t.length > 0 ? t : i).find((t) => t.slug === e);
  }
  function u(e, t) {
    var n;
    return (
      (null === (n = l(e, t)) || void 0 === n
        ? void 0
        : n.requiresCouplePortrait) !== !1
    );
  }
  function c(e, t) {
    var n;
    return (
      null === (n = l(e, t)) || void 0 === n ? void 0 : n.limitsNoteLength
    )
      ? o.cr
      : null;
  }
  function s(e, t) {
    var n, a;
    let o =
      null !==
        (a = null === (n = l(e, t)) || void 0 === n ? void 0 : n.formats) &&
      void 0 !== a
        ? a
        : ["reel", "website"];
    return 1 === o.length ? o[0] : o.includes("website") ? "website" : o[0];
  }
}
