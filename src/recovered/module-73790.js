// Recovered from the public Golden Letter demo; original module 73790.
export default function (e, n, a) {
  a.d(n, {
    eI: function () {
      return c;
    },
    fh: function () {
      return m;
    },
    lr: function () {
      return d;
    },
    se: function () {
      return s;
    },
  });
  var t = a(2773);
  a(61459);
  let r = [
    "/assets/invitations/shared/gallery_1.webp",
    "/assets/invitations/shared/gallery_2.webp",
    "/assets/invitations/shared/gallery_3.webp",
    "/assets/invitations/shared/gallery_4.webp",
  ];
  function i(e) {
    let n = e.getFullYear(),
      a = String(e.getMonth() + 1).padStart(2, "0"),
      t = String(e.getDate()).padStart(2, "0");
    return "".concat(n, "-").concat(a, "-").concat(t);
  }
  function o(e) {
    return "https://www.google.com/maps/search/?api=1&query=".concat(
      encodeURIComponent(e),
    );
  }
  let u = {
    in: {
      couple: {
        brideName: "Ayisha Nasrin",
        brideNickname: "Ayisha",
        brideParents: "Daughter of Mr. & Mrs. Abdul Rasheed",
        groomName: "Muhammed Shafi",
        groomNickname: "Shafi",
        groomParents: "Son of Mr. & Mrs. Abdul Kareem",
        nameOrder: "bride-first",
      },
      event: {
        venueName: "Taj Malabar Resort & Spa",
        address: "Willingdon Island",
        city: "Kochi, Kerala",
        mapLink: o("Taj Malabar Resort & Spa, Willingdon Island, Kochi"),
      },
      reception: {
        name: "Reception",
        venue: "Le M\xe9ridien Kochi, Maradu",
        mapLink: o("Le Meridien Kochi, Maradu"),
      },
    },
    ae: {
      couple: {
        brideName: "Mariam Al Ali",
        brideNickname: "Mariam",
        brideParents: "Daughter of Mr. & Mrs. Ahmed Al Ali",
        groomName: "Omar Al Suwaidi",
        groomNickname: "Omar",
        groomParents: "Son of Mr. & Mrs. Khalid Al Suwaidi",
        nameOrder: "bride-first",
      },
      event: {
        venueName: "Al Habtoor Palace",
        address: "Al Habtoor City, Sheikh Zayed Road",
        city: "Dubai",
        mapLink: o("Al Habtoor Palace, Al Habtoor City, Dubai"),
      },
      reception: {
        name: "Reception",
        venue: "Emirates Palace Mandarin Oriental, Abu Dhabi",
        mapLink: o("Emirates Palace Mandarin Oriental, Abu Dhabi"),
      },
    },
    gl: {
      couple: {
        brideName: "Sara Hussain",
        brideNickname: "Sara",
        brideParents: "Daughter of Mr. & Mrs. Tariq Hussain",
        groomName: "Adam Malik",
        groomNickname: "Adam",
        groomParents: "Son of Mr. & Mrs. Imran Malik",
        nameOrder: "bride-first",
      },
      event: {
        venueName: "The Dorchester",
        address: "53 Park Lane, Mayfair",
        city: "London",
        mapLink: o("The Dorchester, Park Lane, London"),
      },
      reception: {
        name: "Reception",
        venue: "The Landmark London, Marylebone",
        mapLink: o("The Landmark London, Marylebone"),
      },
    },
    my: {
      couple: {
        brideName: "Nur Aisyah",
        brideNickname: "Aisyah",
        brideParents: "Daughter of Encik & Puan Ahmad Rosli",
        groomName: "Hafiz Ismail",
        groomNickname: "Hafiz",
        groomParents: "Son of Encik & Puan Ismail Hamzah",
        nameOrder: "bride-first",
      },
      event: {
        venueName: "Masjid Wilayah Persekutuan",
        address: "Jalan Tuanku Abdul Halim",
        city: "Kuala Lumpur",
        mapLink: o("Masjid Wilayah Persekutuan, Kuala Lumpur"),
      },
      reception: {
        name: "Reception",
        venue: "The Majestic Hotel Kuala Lumpur",
        mapLink: o("The Majestic Hotel Kuala Lumpur"),
      },
    },
    id: {
      couple: {
        brideName: "Siti Rahma",
        brideNickname: "Rahma",
        brideParents: "Daughter of Mr. & Mrs. Hendra Wijaya",
        groomName: "Rizky Pratama",
        groomNickname: "Rizky",
        groomParents: "Son of Mr. & Mrs. Agus Santoso",
        nameOrder: "bride-first",
      },
      event: {
        venueName: "Masjid Istiqlal",
        address: "Jl. Taman Wijaya Kusuma, Pasar Baru",
        city: "Jakarta",
        mapLink: o("Masjid Istiqlal, Jakarta"),
      },
      reception: {
        name: "Reception",
        venue: "Hotel Indonesia Kempinski Jakarta",
        mapLink: o("Hotel Indonesia Kempinski Jakarta"),
      },
    },
  };
  function l() {
    var e;
    let n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.fu,
      a = (function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Date(),
          n = new Date(e);
        (n.setHours(12, 0, 0, 0), n.setDate(n.getDate() + 6));
        let a = new Date(n);
        return (a.setDate(a.getDate() + 1), { nikkah: i(n), reception: i(a) });
      })(),
      o = null !== (e = u[n]) && void 0 !== e ? e : u[t.fu];
    return {
      status: "published",
      subdomain: null,
      isActive: !0,
      region: n,
      paymentStatus: "paid",
      createdAt: "2026-08-01T00:00:00.000Z",
      updatedAt: "2026-08-01T00:00:00.000Z",
      couple: { ...o.couple },
      event: {
        occasionType: "Wedding",
        date: a.nikkah,
        time: "11:30",
        ...o.event,
      },
      additionalEvents: [
        {
          id: "demo-reception",
          date: a.reception,
          time: "13:00",
          name: o.reception.name,
          venue: o.reception.venue,
          address: "",
          city: "",
          mapLink: o.reception.mapLink,
          sameVenueAsMain: !1,
        },
      ],
      includeRsvp: !0,
      story:
        "With the blessings of our families, we invite you to celebrate our wedding. Your presence will make our day complete.",
      endingNote:
        "With the blessings of our beloved family, we cordially invite you to grace the auspicious occasion with your presence and prayers.",
      assets: {
        cover: null,
        couple_only: "/couple_demo.webp",
        couplePhoto: null,
        gallery: [...r],
        music: "wedding_nasheed.mp3",
        musicConfig: null,
        metaImage: null,
      },
      verse: { id: "an-naba-8", display: "both" },
    };
  }
  function s(e) {
    let n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.fu;
    switch (e) {
      case "maroon-letter":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-maroon-letter",
            templateSlug: "maroon-letter",
          };
        })(n);
      case "golden-letter":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-golden-letter",
            templateSlug: "golden-letter",
          };
        })(n);
      case "lace-and-love":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-lace-and-love",
            templateSlug: "lace-and-love",
          };
        })(n);
      case "golden-silk":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-golden-silk",
            templateSlug: "golden-silk",
            endingNote:
              "With love and blessings, we look forward to celebrating this joyous day with you.",
          };
        })(n);
      case "velvet-curtain":
        return (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.fu,
            n = l(e);
          return {
            ...n,
            id: "demo-velvet-curtain",
            templateSlug: "velvet-curtain",
            assets: {
              ...n.assets,
              gallery: [
                "/assets/invitations/velvet-curtain/demo_couple.webp",
                ...r,
              ],
            },
          };
        })(n);
      case "lavendar-dreams":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-lavendar-dreams",
            templateSlug: "lavendar-dreams",
          };
        })(n);
      case "petal-sunset":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-petal-sunset",
            templateSlug: "petal-sunset",
          };
        })(n);
      case "arabian-dawn":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-arabian-dawn",
            templateSlug: "arabian-dawn",
          };
        })(n);
      case "burj-khalifa":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-burj-khalifa",
            templateSlug: "burj-khalifa",
          };
        })(n);
      case "beach-vibes":
        return (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.fu,
            n = l(e);
          return {
            ...n,
            id: "demo-beach-vibes",
            templateSlug: "beach-vibes",
            endingNote:
              "With love and blessings, we look forward to celebrating this joyous day with you.",
            assets: { ...n.assets, music: "none" },
          };
        })(n);
      case "ivory-bloom":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-ivory-bloom",
            templateSlug: "ivory-bloom",
          };
        })(n);
      case "sage-bloom":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return { ...l(e), id: "demo-sage-bloom", templateSlug: "sage-bloom" };
        })(n);
      case "emerald-parchment":
        return (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.fu,
            n = l(e);
          return {
            ...n,
            id: "demo-emerald-parchment",
            templateSlug: "emerald-parchment",
            assets: { ...n.assets, music: "none" },
          };
        })(n);
      case "noor-garden":
        return (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.fu;
          return {
            ...l(e),
            id: "demo-noor-garden",
            templateSlug: "noor-garden",
          };
        })(n);
      default:
        return null;
    }
  }
  function d(e) {
    let n =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "website";
    return "website" === n
      ? "/demo/".concat(e)
      : "/demo/".concat(e, "?format=").concat(n);
  }
  function c(e) {
    return "/assets/invitations/".concat(e, "/reel_demo.mp4?v=20261025");
  }
  function m(e) {
    return "beach-vibes" === e;
  }
}
