// Recovered from the public Golden Letter demo; original module 37370.
export default function (e, n, r) {
  r.d(n, {
    ES: function () {
      return o;
    },
    I8: function () {
      return u;
    },
    R$: function () {
      return t;
    },
    Rg: function () {
      return m;
    },
    Wl: function () {
      return s;
    },
    cQ: function () {
      return a;
    },
    iL: function () {
      return f;
    },
    wf: function () {
      return d;
    },
  });
  let t = [
      {
        id: "standing",
        label: "Standing",
        hint: "Pick the groom's and bride's outfits separately",
        kind: "split",
      },
      {
        id: "standing-together",
        label: "Standing together",
        hint: "The two of you side by side",
        kind: "single",
      },
      {
        id: "turning",
        label: "Turning her around",
        hint: "A playful twirl pose",
        kind: "single",
      },
      {
        id: "face-to-face",
        label: "Face to face",
        hint: "Looking at each other",
        kind: "single",
      },
    ],
    i = "/assets/couple-library/costumes",
    a = [
      {
        id: "beige-suit",
        label: "Beige suit",
        src: "".concat(i, "/groom/beige-suit.webp"),
      },
      {
        id: "black-kurta",
        label: "Black kurta",
        src: "".concat(i, "/groom/black-kurta.webp"),
      },
      {
        id: "maroon-sherwani",
        label: "Maroon sherwani",
        src: "".concat(i, "/groom/maroon-sherwani.webp"),
      },
      {
        id: "white-thobe",
        label: "White thobe",
        src: "".concat(i, "/groom/white-thobe.webp"),
      },
      {
        id: "navy-suit",
        label: "Navy suit",
        src: "".concat(i, "/groom/navy-suit.webp"),
      },
    ],
    o = [
      {
        id: "maroon-gown",
        label: "Maroon gown",
        src: "".concat(i, "/bride/maroon-gown.webp"),
      },
      {
        id: "gold-lehenga",
        label: "Gold lehenga",
        src: "".concat(i, "/bride/gold-lehenga.webp"),
      },
      {
        id: "green-anarkali",
        label: "Green anarkali",
        src: "".concat(i, "/bride/green-anarkali.webp"),
      },
      {
        id: "pastel-saree",
        label: "Pastel saree",
        src: "".concat(i, "/bride/pastel-saree.webp"),
      },
      {
        id: "ivory-gown",
        label: "Ivory gown",
        src: "".concat(i, "/bride/ivory-gown.webp"),
      },
    ],
    l = "/assets/couple-library",
    u = {
      "standing-together": [
        {
          id: "st-01",
          label: "Style 1",
          src: "".concat(l, "/standing-together/01.webp"),
        },
        {
          id: "st-02",
          label: "Style 2",
          src: "".concat(l, "/standing-together/02.webp"),
        },
      ],
      turning: [
        {
          id: "tu-01",
          label: "Style 1",
          src: "".concat(l, "/turning/01.webp"),
        },
        {
          id: "tu-02",
          label: "Style 2",
          src: "".concat(l, "/turning/02.webp"),
        },
      ],
      "face-to-face": [
        {
          id: "ff-01",
          label: "Style 1",
          src: "".concat(l, "/face-to-face/01.webp"),
        },
        {
          id: "ff-02",
          label: "Style 2",
          src: "".concat(l, "/face-to-face/02.webp"),
        },
      ],
    };
  function s(e) {
    return "standing" !== e;
  }
  function c(e, n) {
    var r, t;
    return null !==
      (t =
        null === (r = e.find((e) => e.id === n)) || void 0 === r
          ? void 0
          : r.src) && void 0 !== t
      ? t
      : e[0].src;
  }
  function d(e) {
    var n;
    let r =
      null !== (n = null == e ? void 0 : e.couplePhoto) && void 0 !== n
        ? n
        : null;
    if (r && "standing" === r.pose)
      return {
        mode: "pair",
        groomSrc: c(a, r.groomCostume),
        brideSrc: c(o, r.brideCostume),
      };
    if (r && s(r.pose)) {
      let e = (function (e, n) {
        var r, t, i, a, o;
        let l = null !== (i = u[e]) && void 0 !== i ? i : [];
        return null !==
          (o =
            null !==
              (a =
                null === (r = l.find((e) => e.id === n)) || void 0 === r
                  ? void 0
                  : r.src) && void 0 !== a
              ? a
              : null === (t = l[0]) || void 0 === t
                ? void 0
                : t.src) && void 0 !== o
          ? o
          : null;
      })(r.pose, r.coupleImageId);
      if (e) return { mode: "single", src: e };
    }
    let t = null == e ? void 0 : e.couple_only;
    return t
      ? { mode: "single", src: t }
      : { mode: "pair", groomSrc: a[0].src, brideSrc: o[0].src };
  }
  function f(e) {
    let n = d(e);
    return "single" === n.mode ? [n.src] : [n.groomSrc, n.brideSrc];
  }
  function m(e) {
    return (
      !!e &&
      ("standing" === e.pose
        ? !!(e.groomCostume && e.brideCostume)
        : !!e.coupleImageId)
    );
  }
}
