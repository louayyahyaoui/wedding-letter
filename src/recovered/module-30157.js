// Recovered from the public Golden Letter demo; original module 30157.
export default function (e, t, n) {
  n.d(t, {
    QG: function () {
      return o;
    },
    YK: function () {
      return a;
    },
    lz: function () {
      return i;
    },
  });
  let i = {
      name: "Forever Tale",
      tagline: "Premium interactive digital wedding invitations",
      description:
        "Create a premium, interactive digital wedding invitation website for your wedding, engagement or reception — tap-to-open cinematic intro, guest RSVP and an easily shareable link. Ready in 10 minutes. Try for free — build and preview, then pay once when you're ready to share.",
      url: "https://theforevertale.com",
      keywords: [
        "digital wedding invitation",
        "digital wedding invitations",
        "online wedding invitation",
        "wedding invitation website",
        "tap to open wedding invitation",
        "interactive wedding invitation",
        "cinematic wedding invitation",
        "animated wedding invitation",
        "wedding invitation with RSVP",
        "wedding RSVP website",
        "online RSVP invitation",
        "e-invitation for wedding",
        "electronic wedding invitations",
        "WhatsApp wedding invitation",
        "wedding reception invitation",
        "reception invitation online",
        "engagement invitation card",
        "save the date digital",
        "premium wedding invitation",
        "luxury digital invitation",
        "reel wedding invitation",
        "Instagram wedding invitation",
        "wedding invitation video",
        "digital wedding invitation India",
        "UAE wedding invitation",
        "malaysia wedding invitation",
        "indonesia wedding invitation",
        "free wedding invitation",
        "try for free wedding invitation",
      ],
      social: { instagram: "https://www.instagram.com/forevertale_invites" },
      googleAdsId: "AW-18473987388",
      googleAdsPurchaseLabel: "38k3CPft8IQdELzaiulE",
      metaPixelId: "4603285199953981",
      clarityProjectId: "yudlpr8045",
      whatsapp: { display: "+971 52 411 5279", e164: "971524115279" },
      guarantee: {
        windowHours: 24,
        short: "Try for free",
        tagline: "Try for free & preview your invitation.",
        detail:
          "Try for free — design, personalize, and preview your entire wedding invitation before you pay.",
      },
      company: {
        name: "DataRoots IT Solutions",
        url: "",
        address: {
          lines: ["Technohub 1 Block A", "Dubai Silicon Oasis"],
          city: "Dubai",
          state: "",
          postalCode: "",
          country: "UAE",
        },
      },
    },
    a = [
      ...i.company.address.lines,
      i.company.address.city,
      i.company.address.state,
      i.company.address.postalCode,
      i.company.address.country,
    ]
      .filter((e) => e.trim().length > 0)
      .join(", ");
  function o(e) {
    let t = "https://wa.me/".concat(i.whatsapp.e164);
    return e ? "".concat(t, "?text=").concat(encodeURIComponent(e)) : t;
  }
}
