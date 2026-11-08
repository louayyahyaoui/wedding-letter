import { localizeInvitation } from "../invitationTranslations.js";
// Recovered from the public Golden Letter demo; original module 19870.
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    default: function () {
      return ex;
    },
  });
  var a = n(57437),
    i = n(2265),
    o = n(99376),
    s = n(80743),
    r = n(97050),
    l = n(4246),
    d = n(85817),
    u = n(73790),
    c = n(78097),
    m = n(82119);
  let h = {
    en: {
      badge: "Reel demo \xb7 9:16",
      body: "A sample cinematic reel — intro, names, event details, and venue in a vertical Instagram-ready video.",
      create: "Create your own invitation",
    },
    hi: {
      badge: "रील डेमो \xb7 9:16",
      body: "एक नमूना सिनेमैटिक रील — इंट्रो, नाम, समारोह की जानकारी और स्थान, Instagram के लिए तैयार वर्टिकल वीडियो में।",
      create: "अपना निमंत्रण बनाएँ",
    },
    ar: {
      badge: "عرض تجريبي للريل \xb7 9:16",
      body: "ريل سينمائي نموذجي — المقدمة والأسماء وتفاصيل المناسبة والمكان في فيديو عمودي جاهز لإنستغرام.",
      create: "أنشئ دعوتك الخاصة",
    },
    fr: {
      badge: "D\xe9mo reel \xb7 9:16",
      body: "Un exemple de reel cin\xe9matique — intro, pr\xe9noms, d\xe9tails de l’\xe9v\xe9nement et lieu dans une vid\xe9o verticale pr\xeate pour Instagram.",
      create: "Cr\xe9er votre propre invitation",
    },
    es: {
      badge: "Demo de reel \xb7 9:16",
      body: "Un reel cinematogr\xe1fico de muestra: intro, nombres, detalles del evento y lugar en un v\xeddeo vertical listo para Instagram.",
      create: "Crea tu propia invitaci\xf3n",
    },
  };
  function p(e) {
    let { invitation: t } = e,
      n = (0, m.Vt)(),
      i = h[n],
      o = (0, u.eI)(t.templateSlug);
    return (0, a.jsx)("div", {
      className:
        "flex min-h-screen flex-col items-center justify-center bg-brand-950 px-4 py-10 text-ivory",
      children: (0, a.jsxs)("div", {
        className: "w-full max-w-sm text-center",
        dir: (0, c.t6)(n) ? "rtl" : "ltr",
        lang: n,
        children: [
          (0, a.jsxs)("span", {
            className:
              "inline-flex items-center gap-2 rounded-full bg-ivory/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-300",
            children: [(0, a.jsx)(l.Z, { className: "h-3.5 w-3.5" }), i.badge],
          }),
          (0, a.jsxs)("h1", {
            className: "mt-5 font-heading text-3xl font-semibold",
            children: [
              t.couple.brideNickname || t.couple.brideName,
              " &",
              " ",
              t.couple.groomNickname || t.couple.groomName,
            ],
          }),
          (0, a.jsx)("p", {
            className: "mt-3 text-sm leading-relaxed text-ivory/70",
            children: i.body,
          }),
          (0, a.jsx)("div", {
            className:
              "relative mx-auto mt-8 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[1.5rem] border border-ivory/20 bg-brand-950 shadow-2xl",
            children: (0, a.jsx)("video", {
              className: "h-full w-full object-cover",
              src: o,
              controls: !0,
              autoPlay: !0,
              muted: !(0, u.fh)(t.templateSlug),
              playsInline: !0,
              loop: !0,
              preload: "metadata",
            }),
          }),
          (0, a.jsx)(r.default, {
            href: (0, d.$)(t.region, t.templateSlug),
            className:
              "mt-8 inline-flex text-sm font-semibold text-ivory/80 underline-offset-4 hover:text-ivory hover:underline",
            children: i.create,
          }),
        ],
      }),
    });
  }
  var x = n(69076),
    v = n(62883),
    f = n(92251);
  function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, a] = (0, i.useState)(!1);
    return (
      (0, i.useEffect)(() => {
        if (!t || n) return;
        let i = () => {
            let t = document.documentElement.scrollHeight - window.innerHeight;
            t > 0 && window.scrollY / t >= e && a(!0);
          },
          o = (t) => {
            t.detail >= e && a(!0);
          };
        return (
          window.addEventListener("scroll", i, { passive: !0 }),
          window.addEventListener(f.l, o),
          () => {
            (window.removeEventListener("scroll", i),
              window.removeEventListener(f.l, o));
          }
        );
      }, [t, n, e]),
      n
    );
  }
  let b = "[data-guest-rsvp]",
    g = {
      en: {
        startOver: "Start over",
        create: "Create with this template",
        ready: "Ready in 10 mins",
      },
      hi: {
        startOver: "फिर से शुरू करें",
        create: "इस टेम्पलेट से बनाएँ",
        ready: "10 मिनट में तैयार",
      },
      ar: {
        startOver: "البدء من جديد",
        create: "أنشئ بهذا القالب",
        ready: "جاهزة خلال 10 دقائق",
      },
      fr: {
        startOver: "Recommencer",
        create: "Cr\xe9er avec ce mod\xe8le",
        ready: "Pr\xeate en 10 min",
      },
      es: {
        startOver: "Empezar de nuevo",
        create: "Crear con esta plantilla",
        ready: "Lista en 10 min",
      },
    };
  function w() {
    try {
      window.history.scrollRestoration = "manual";
    } catch (e) {}
    (window.scrollTo(0, 0), window.location.reload());
  }
  function k(e) {
    let { gated: n = !0 } = e,
      o = (0, m.Vt)(),
      s = g[o],
      [l, d] = (0, i.useState)(!1),
      u = y(0.8, n);
    (0, i.useEffect)(() => {
      let e = window.matchMedia("(max-width: 639px)"),
        t = () => d(e.matches);
      return (
        t(),
        e.addEventListener("change", t),
        () => e.removeEventListener("change", t)
      );
    }, []);
    let h = !n || !l || u,
      p = n && u;
    return (0, a.jsxs)("div", {
      dir: (0, c.t6)(o) ? "rtl" : "ltr",
      lang: o,
      className:
        "fixed bottom-4 left-1/2 z-[55] flex -translate-x-1/2 items-center gap-2 transition-[opacity,transform] duration-500 sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0 ".concat(
          h ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        ),
      "aria-hidden": !h,
      children: [
        p &&
          (0, a.jsxs)("button", {
            type: "button",
            onClick: w,
            className:
              "ft-enter inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ivory px-4 py-2 text-xs font-semibold text-brand-800 shadow-lg shadow-brand-950/30 ring-1 ring-brand-900/10 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm",
            children: [
              (0, a.jsx)(x.Z, {
                className: "h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4",
              }),
              s.startOver,
            ],
          }),
      ],
    });
  }
  var j = n(32489),
    N = n(2773),
    E = n(30157);
  let T = {
    en: "Close demo",
    hi: "डेमो बंद करें",
    ar: "إغلاق العرض التجريبي",
    fr: "Fermer la d\xe9mo",
    es: "Cerrar demo",
  };
  function C(e) {
    let { region: t } = e,
      n = (0, m.Vt)(),
      i = (0, N.nJ)(t, "/");
    return (0, a.jsx)("button", {
      type: "button",
      onClick: () => {
        if (
          !(function () {
            if (!document.referrer) return !1;
            try {
              let e = new URL(document.referrer).hostname,
                t = new URL(E.lz.url).hostname.replace(/^www\./, "");
              return (
                e === window.location.hostname ||
                e === t ||
                e.endsWith(".".concat(t))
              );
            } catch (e) {
              return !1;
            }
          })()
        ) {
          window.location.href = i;
          return;
        }
        (window.close(),
          window.setTimeout(() => {
            window.closed ||
              (window.history.length > 1
                ? window.history.back()
                : (window.location.href = i));
          }, 200));
      },
      "aria-label": T[n],
      className:
        "fixed left-3 top-3 z-[60] inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white shadow-md backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 sm:top-5 sm:h-10 sm:w-10",
      children: (0, a.jsx)(j.Z, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
    });
  }
  var S = n(89202),
    M = n(77945),
    Z = n(30401),
    A = n(6735);
  let L = {
      en: { label: "Invitation language", short: "Language" },
      hi: { label: "निमंत्रण की भाषा", short: "भाषा" },
      ar: { label: "لغة الدعوة", short: "اللغة" },
      fr: { label: "Langue de l'invitation", short: "Langue" },
      es: { label: "Idioma de la invitaci\xf3n", short: "Idioma" },
    },
    z = { en: "EN", hi: "हिं", ar: "عربي", fr: "FR", es: "ES" };
  function R(e) {
    let { value: t, onChange: n, className: o = "" } = e,
      s = (0, m.Vt)(),
      r = L[t],
      [l, d] = (0, i.useState)(!1),
      u = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(() => {
        if (!l) return;
        let e = (e) => {
            var t;
            (null === (t = u.current) || void 0 === t
              ? void 0
              : t.contains(e.target)) || d(!1);
          },
          t = (e) => {
            "Escape" === e.key && d(!1);
          };
        return (
          document.addEventListener("pointerdown", e),
          document.addEventListener("keydown", t),
          () => {
            (document.removeEventListener("pointerdown", e),
              document.removeEventListener("keydown", t));
          }
        );
      }, [l]),
      (0, a.jsxs)("div", {
        ref: u,
        className: "relative ".concat(o),
        dir: (0, c.t6)(t) ? "rtl" : "ltr",
        lang: t,
        children: [
          (0, a.jsxs)("button", {
            type: "button",
            onClick: () => d((e) => !e),
            "aria-label": r.label,
            "aria-haspopup": "menu",
            "aria-expanded": l,
            className:
              "inline-flex h-9 items-center gap-1.5 rounded-full bg-black/60 px-3 text-xs font-semibold text-white shadow-md backdrop-blur-sm transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:px-3.5 sm:text-sm",
            children: [
              (0, a.jsx)(M.Z, { className: "h-4 w-4 text-white/85" }),
              (0, a.jsx)("span", { lang: t, children: z[t] }),
            ],
          }),
          l &&
            (0, a.jsxs)("div", {
              role: "menu",
              "aria-label": r.label,
              className:
                "ft-enter absolute end-0 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 py-1.5 text-sm text-brand-950 shadow-2xl backdrop-blur-md",
              children: [
                (0, a.jsx)("p", {
                  className:
                    "px-4 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-800/55",
                  children: r.label,
                }),
                A.b1.map((e) => {
                  let i = e.id === t;
                  return (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "menuitemradio",
                      "aria-checked": i,
                      onClick: () => {
                        (d(!1), i || n(e.id));
                      },
                      className:
                        "flex w-full items-center gap-2.5 px-4 py-2.5 text-start transition hover:bg-brand-50 ".concat(
                          i ? "font-semibold text-brand-700" : "",
                        ),
                      children: [
                        (0, a.jsxs)("span", {
                          className: "flex-1",
                          lang: e.id,
                          dir: "ar" === e.id ? "rtl" : "ltr",
                          children: [
                            e.label,
                            (0, a.jsx)("span", {
                              className:
                                "ms-2 text-xs font-normal text-brand-800/55",
                              children: e.sample,
                            }),
                          ],
                        }),
                        i &&
                          (0, a.jsx)(Z.Z, {
                            className: "h-3.5 w-3.5 shrink-0",
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
              ],
            }),
        ],
      })
    );
  }
  var B = n(31971),
    q = n(54887),
    P = n(37679),
    H = n(48614),
    V = n(22106),
    W = n(26198);
  let I = (0, n(79205).Z)("clipboard-list", [
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6",
      },
    ],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196",
      },
    ],
    ["path", { d: "M12 11h4", key: "1jrz19" }],
    ["path", { d: "M12 16h4", key: "n85exb" }],
    ["path", { d: "M8 11h.01", key: "1dfujw" }],
    ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ]);
  var O = n(88997),
    _ = n(82718),
    F = n(17689),
    Y = n(406),
    U = n(25286);
  let D = {
      en: {
        audioTitle: "Pick a background audio",
        audioBody:
          "This is a demo, so try any track you like — or keep it silent. On your own invitation you decide exactly what your guests hear: upload your own audio or simply paste a YouTube link.",
        ok: "OK, got it",
        langTitle: "Switch the invitation language",
        langBody:
          "View this invitation in English, Arabic or French. Choose the language you prefer.",

        yes: "Yes, show it",
        no: "No, thanks",
        rsvpTitle: "This is the RSVP section",
        rsvpBody:
          "Here your guests tell you if they're coming — you get the guest count, their wishes and any other details you ask for.",
        rsvpPoints: [
          "Customise what your guests fill in — add your own questions (phone number, meal choice, anything).",
          "Don't need it? You can turn this section off.",
        ],
        endTitle: "Did you like it?",
        endPoints: [
          "Create yours now with your own names, dates, venue, photos and audio.",
          "It's free to try — build and preview it, pay only when you're ready to share.",
          "Want something custom — design changes, another language or help setting it up? Just say hi on WhatsApp.",
        ],
        createNow: "Create my invitation now",
        exploreMore: "Let me explore the demo more",
        sayHi: "Say hi on WhatsApp",
        uploadTitle: "Use your own audio",
        uploadBody:
          "This demo only plays our sample tracks. When you create your invitation, you can upload any audio, pick one from our library or paste a YouTube link — and that's what your guests will hear.",
      },
      hi: {
        audioTitle: "बैकग्राउंड ऑडियो चुनें",
        audioBody:
          "यह एक डेमो है, इसलिए कोई भी ट्रैक आज़माएँ — या बिना आवाज़ के देखें। अपने निमंत्रण में आप तय करेंगे कि मेहमान क्या सुनेंगे: अपना ऑडियो अपलोड करें या बस YouTube लिंक डालें।",
        ok: "ठीक है, समझ गया",
        langTitle: "निमंत्रण की भाषा बदलें",
        langBody:
          "यह निमंत्रण अंग्रेज़ी, हिंदी, अरबी, फ़्रेंच या स्पैनिश में देखें। अपना निमंत्रण बनाते समय आप जो भाषा चुनेंगे, मेहमान उसी भाषा में देखेंगे।",

        yes: "हाँ, दिखाएँ",
        no: "नहीं, धन्यवाद",
        rsvpTitle: "यह RSVP सेक्शन है",
        rsvpBody:
          "यहाँ मेहमान बताते हैं कि वे आ रहे हैं या नहीं — आपको मेहमानों की गिनती, उनकी शुभकामनाएँ और आपके पूछे गए बाकी विवरण मिलते हैं।",
        rsvpPoints: [
          "मेहमान क्या भरें, यह आप तय करें — अपने सवाल जोड़ें (फ़ोन नंबर, खाने की पसंद, कुछ भी)।",
          "ज़रूरत नहीं? आप इस सेक्शन को बंद भी कर सकते हैं।",
        ],
        endTitle: "क्या आपको यह पसंद आया?",
        endPoints: [
          "अब अपने नाम, तारीख़, जगह, फ़ोटो और ऑडियो के साथ अपना निमंत्रण बनाएँ।",
          "आज़माना मुफ़्त है — बनाएँ और प्रीव्यू देखें, शेयर करने के लिए तैयार हों तभी भुगतान करें।",
          "कुछ ख़ास चाहिए — डिज़ाइन में बदलाव, दूसरी भाषा या बनाने में मदद? बस WhatsApp पर Hi भेजें।",
        ],
        createNow: "अभी मेरा निमंत्रण बनाएँ",
        exploreMore: "मुझे डेमो और देखने दें",
        sayHi: "WhatsApp पर Hi भेजें",
        uploadTitle: "अपना ऑडियो लगाएँ",
        uploadBody:
          "इस डेमो में सिर्फ़ हमारे सैंपल ट्रैक चलते हैं। अपना निमंत्रण बनाते समय आप कोई भी ऑडियो अपलोड कर सकते हैं, हमारी लाइब्रेरी से चुन सकते हैं या YouTube लिंक डाल सकते हैं — मेहमान वही सुनेंगे।",
      },
      ar: {
        audioTitle: "اختر صوتًا للخلفية",
        audioBody:
          "هذا عرض تجريبي، فجرّب أي مقطع يعجبك — أو اتركه صامتًا. في دعوتك أنت من يقرر ما يسمعه ضيوفك: ارفع صوتك الخاص أو الصق رابط YouTube ببساطة.",
        ok: "حسنًا، فهمت",
        langTitle: "غيّر لغة الدعوة",
        langBody:
          "شاهدوا هذه الدعوة بالإنجليزية أو العربية أو الفرنسية. اختاروا اللغة التي تفضلونها.",

        yes: "نعم، اعرضها",
        no: "لا، شكرًا",
        rsvpTitle: "هذا قسم تأكيد الحضور",
        rsvpBody:
          "هنا يخبرك ضيوفك إن كانوا سيحضرون — فتحصل على عدد الضيوف وتهانيهم وأي تفاصيل أخرى تطلبها.",
        rsvpPoints: [
          "خصّص ما يملؤه ضيوفك — أضف أسئلتك الخاصة (رقم الهاتف، اختيار الطعام، أي شيء).",
          "لا تحتاجه؟ يمكنك إيقاف هذا القسم.",
        ],
        endTitle: "هل أعجبتك؟",
        endPoints: [
          "أنشئ دعوتك الآن بأسمائك وتواريخك ومكانك وصورك والصوت الذي تختاره.",
          "التجربة مجانية — أنشئها وشاهد المعاينة، وادفع فقط عندما تكون جاهزًا للمشاركة.",
          "تريد شيئًا خاصًا — تعديل التصميم أو لغة أخرى أو مساعدة في الإنشاء؟ أرسل لنا مرحبًا على WhatsApp.",
        ],
        createNow: "أنشئ دعوتي الآن",
        exploreMore: "دعني أستكشف العرض أكثر",
        sayHi: "أرسل مرحبًا على WhatsApp",
        uploadTitle: "استخدم صوتك الخاص",
        uploadBody:
          "هذا العرض يشغّل مقاطعنا التجريبية فقط. عند إنشاء دعوتك يمكنك رفع أي صوت أو اختيار مقطع من مكتبتنا أو لصق رابط YouTube — وهذا ما سيسمعه ضيوفك.",
      },
      fr: {
        audioTitle: "Choisissez une musique de fond",
        audioBody:
          "Ceci est une d\xe9mo : essayez le morceau de votre choix — ou restez en silence. Sur votre propre invitation, c'est vous qui d\xe9cidez ce qu'entendent vos invit\xe9s : importez votre propre audio ou collez simplement un lien YouTube.",
        ok: "OK, compris",
        langTitle: "Changez la langue de l'invitation",
        langBody:
          "Consultez cette invitation en anglais, en arabe ou en français. Choisissez la langue que vous préférez.",

        yes: "Oui, montrez-la",
        no: "Non, merci",
        rsvpTitle: "Voici la section RSVP",
        rsvpBody:
          "Ici, vos invit\xe9s vous disent s'ils viennent — vous obtenez le nombre d'invit\xe9s, leurs vœux et tous les autres d\xe9tails que vous demandez.",
        rsvpPoints: [
          "Personnalisez ce que remplissent vos invit\xe9s — ajoutez vos propres questions (t\xe9l\xe9phone, choix du menu, tout ce que vous voulez).",
          "Vous n'en avez pas besoin ? Vous pouvez d\xe9sactiver cette section.",
        ],
        endTitle: "Elle vous pla\xeet ?",
        endPoints: [
          "Cr\xe9ez la v\xf4tre d\xe8s maintenant avec vos noms, dates, lieu, photos et audio.",
          "L'essai est gratuit — cr\xe9ez-la et pr\xe9visualisez-la, ne payez que lorsque vous \xeates pr\xeats \xe0 la partager.",
          "Envie de quelque chose de sur-mesure — modifications du design, une autre langue ou de l'aide pour la cr\xe9er ? \xc9crivez-nous sur WhatsApp.",
        ],
        createNow: "Cr\xe9er mon invitation",
        exploreMore: "Continuer \xe0 explorer la d\xe9mo",
        sayHi: "Nous \xe9crire sur WhatsApp",
        uploadTitle: "Utilisez votre propre audio",
        uploadBody:
          "Cette d\xe9mo ne joue que nos morceaux d'exemple. En cr\xe9ant votre invitation, vous pourrez importer n'importe quel audio, en choisir un dans notre biblioth\xe8que ou coller un lien YouTube — c'est ce qu'entendront vos invit\xe9s.",
      },
      es: {
        audioTitle: "Elige un audio de fondo",
        audioBody:
          "Esto es una demo, as\xed que prueba la pista que quieras — o d\xe9jala en silencio. En tu propia invitaci\xf3n t\xfa decides exactamente lo que escuchan tus invitados: sube tu propio audio o simplemente pega un enlace de YouTube.",
        ok: "Vale, entendido",
        langTitle: "Cambia el idioma de la invitaci\xf3n",
        langBody:
          "Mira esta invitaci\xf3n en ingl\xe9s, hindi, \xe1rabe, franc\xe9s o espa\xf1ol. Tus invitados ver\xe1n tu invitaci\xf3n en el idioma que elijas al crearla.",

        yes: "S\xed, mu\xe9strala",
        no: "No, gracias",
        rsvpTitle: "Esta es la secci\xf3n de RSVP",
        rsvpBody:
          "Aqu\xed tus invitados te dicen si vienen — recibes el n\xfamero de invitados, sus buenos deseos y cualquier otro dato que pidas.",
        rsvpPoints: [
          "Personaliza lo que rellenan tus invitados — a\xf1ade tus propias preguntas (tel\xe9fono, elecci\xf3n de men\xfa, lo que quieras).",
          "\xbfNo la necesitas? Puedes desactivar esta secci\xf3n.",
        ],
        endTitle: "\xbfTe ha gustado?",
        endPoints: [
          "Crea la tuya ahora con tus nombres, fechas, lugar, fotos y audio.",
          "Probarla es gratis — cr\xe9ala y previsual\xedzala, y paga solo cuando est\xe9s listo para compartirla.",
          "\xbfQuieres algo a medida — cambios de dise\xf1o, otro idioma o ayuda para crearla? Escr\xedbenos por WhatsApp.",
        ],
        createNow: "Crear mi invitaci\xf3n ahora",
        exploreMore: "Seguir explorando la demo",
        sayHi: "Escr\xedbenos por WhatsApp",
        uploadTitle: "Usa tu propio audio",
        uploadBody:
          "Esta demo solo reproduce nuestras pistas de muestra. Al crear tu invitaci\xf3n podr\xe1s subir cualquier audio, elegir uno de nuestra biblioteca o pegar un enlace de YouTube — y eso es lo que escuchar\xe1n tus invitados.",
      },
    },
    Q =
      "w-full max-w-sm rounded-3xl border border-brand-100 bg-ivory p-5 text-brand-900 shadow-2xl sm:p-6",
    J =
      "inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
    X =
      "inline-flex w-full items-center justify-center rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";
  function $(e) {
    let {
        children: t,
        labelledBy: n,
        center: i = !0,
        backdropClass: o = "bg-black/60",
      } = e,
      s = (0, m.Vt)();
    return (0, q.createPortal)(
      (0, a.jsx)(P.E.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        className: "fixed inset-0 z-[70] "
          .concat(o, " ")
          .concat(i ? "flex items-end justify-center p-4 sm:items-center" : ""),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": n,
        dir: (0, c.t6)(s) ? "rtl" : "ltr",
        lang: s,
        children: t,
      }),
      document.body,
    );
  }
  function K(e) {
    let { children: t } = e;
    return (0, a.jsx)("span", {
      className:
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700",
      children: t,
    });
  }
  function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      [a, o] = (0, i.useState)(null);
    return (
      (0, i.useLayoutEffect)(() => {
        if (!t) return;
        let a = () => {
          var t;
          let a = e.current;
          if (!a) return;
          let i = (
            n && null !== (t = a.firstElementChild) && void 0 !== t ? t : a
          ).getBoundingClientRect();
          o({ top: i.bottom + 14, arrowX: i.left + i.width / 2 });
        };
        return (
          a(),
          window.addEventListener("resize", a),
          () => window.removeEventListener("resize", a)
        );
      }, [e, t, n]),
      a
    );
  }
  function ee(e) {
    let {
        anchorRef: t,
        step: n,
        languageAnchorRef: i,
        onAudioOk: o,
        onLanguageOk: s,
      } = e,
      l = D[(0, m.Vt)()],
      d = G(t, "audio" === n),
      u = G(i, "language" === n, !1),
      c = "language" === n ? u : d,
      h = window.innerWidth,
      p = c
        ? Math.min(
            Math.max(c.arrowX - 340 + 48, 12),
            Math.max(12, h - 340 - 12),
          )
        : 12;
    return (0, a.jsxs)(H.M, {
      children: [
        "language" === n &&
          c &&
          (0, a.jsx)(
            $,
            {
              labelledBy: "demo-guide-language-title",
              center: !1,
              children: (0, a.jsxs)(P.E.div, {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.1 },
                className: "fixed",
                style: {
                  top: c.top,
                  left: p,
                  width: "min("
                    .concat(340, "px, calc(100vw - ")
                    .concat(24, "px))"),
                },
                children: [
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "absolute -top-2 h-4 w-4 rotate-45 border-s border-t border-brand-100 bg-ivory",
                    style: { left: Math.max(16, c.arrowX - p - 8) },
                  }),
                  (0, a.jsxs)("div", {
                    className: Q,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)(K, {
                            children: (0, a.jsx)(M.Z, { className: "h-5 w-5" }),
                          }),
                          (0, a.jsx)("h2", {
                            id: "demo-guide-language-title",
                            className: "font-heading text-lg font-bold",
                            children: l.langTitle,
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "mt-3 text-sm leading-relaxed text-brand-800/80",
                        children: l.langBody,
                      }),
                      (0, a.jsxs)("button", {
                        type: "button",
                        onClick: s,
                        className: "".concat(J, " mt-4"),
                        autoFocus: !0,
                        children: [
                          (0, a.jsx)(Z.Z, { className: "h-4 w-4" }),
                          l.ok,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            "language",
          ),
        "audio" === n &&
          c &&
          (0, a.jsx)(
            $,
            {
              labelledBy: "demo-guide-audio-title",
              center: !1,
              children: (0, a.jsxs)(P.E.div, {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.1 },
                className: "fixed",
                style: {
                  top: c.top,
                  left: p,
                  width: "min("
                    .concat(340, "px, calc(100vw - ")
                    .concat(24, "px))"),
                },
                children: [
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "absolute -top-2 h-4 w-4 rotate-45 border-s border-t border-brand-100 bg-ivory",
                    style: { left: Math.max(16, c.arrowX - p - 8) },
                  }),
                  (0, a.jsxs)("div", {
                    className: Q,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)(K, {
                            children: (0, a.jsx)(V.Z, { className: "h-5 w-5" }),
                          }),
                          (0, a.jsx)("h2", {
                            id: "demo-guide-audio-title",
                            className: "font-heading text-lg font-bold",
                            children: l.audioTitle,
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "mt-3 text-sm leading-relaxed text-brand-800/80",
                        children: l.audioBody,
                      }),
                      (0, a.jsxs)("button", {
                        type: "button",
                        onClick: o,
                        className: "".concat(J, " mt-4"),
                        autoFocus: !0,
                        children: [
                          (0, a.jsx)(Z.Z, { className: "h-4 w-4" }),
                          l.ok,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            "audio",
          ),
      ],
    });
  }
  function et(e) {
    let { open: t, onOk: n } = e,
      i = D[(0, m.Vt)()];
    return (
      ei(t, n),
      (0, a.jsx)(H.M, {
        children:
          t &&
          (0, a.jsx)(
            $,
            {
              labelledBy: "demo-guide-rsvp-title",
              backdropClass: "bg-black/35",
              children: (0, a.jsxs)(P.E.div, {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                className: Q,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)(K, {
                        children: (0, a.jsx)(I, { className: "h-5 w-5" }),
                      }),
                      (0, a.jsx)("h2", {
                        id: "demo-guide-rsvp-title",
                        className: "font-heading text-lg font-bold",
                        children: i.rsvpTitle,
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "mt-3 text-sm leading-relaxed text-brand-800/80",
                    children: i.rsvpBody,
                  }),
                  (0, a.jsx)("ul", {
                    className: "mt-3 space-y-2",
                    children: i.rsvpPoints.map((e) =>
                      (0, a.jsxs)(
                        "li",
                        {
                          className:
                            "flex items-start gap-2.5 text-sm leading-relaxed text-brand-800/85",
                          children: [
                            (0, a.jsx)(Z.Z, {
                              className:
                                "mt-0.5 h-4 w-4 shrink-0 text-brand-600",
                            }),
                            e,
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    className: "".concat(J, " mt-4"),
                    autoFocus: !0,
                    children: [(0, a.jsx)(Z.Z, { className: "h-4 w-4" }), i.ok],
                  }),
                ],
              }),
            },
            "rsvp",
          ),
      })
    );
  }
  function en(e) {
    let { createHref: t, trigger: n } = e,
      o = D[(0, m.Vt)()],
      [s, l] = (0, i.useState)(!1),
      [d, u] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
      if (!n || d) return;
      let e = window.setTimeout(() => {
        (l(!0), u(!0));
      }, 4e3);
      return () => window.clearTimeout(e);
    }, [n, d]);
    let c = (0, i.useCallback)(() => l(!1), []);
    return (
      ei(s, c),
      (0, a.jsx)(H.M, {
        children:
          s &&
          (0, a.jsx)(
            $,
            {
              labelledBy: "demo-guide-end-title",
              children: (0, a.jsxs)(P.E.div, {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                className: Q,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)(K, {
                        children: (0, a.jsx)(O.Z, { className: "h-5 w-5" }),
                      }),
                      (0, a.jsx)("h2", {
                        id: "demo-guide-end-title",
                        className: "font-heading text-xl font-bold",
                        children: o.endTitle,
                      }),
                    ],
                  }),
                  (0, a.jsx)("ul", {
                    className: "mt-4 space-y-2.5",
                    children: o.endPoints.map((e, t) =>
                      (0, a.jsxs)(
                        "li",
                        {
                          className:
                            "flex items-start gap-2.5 text-sm leading-relaxed text-brand-800/85",
                          children: [
                            t === o.endPoints.length - 1
                              ? (0, a.jsx)(_.Z, {
                                  className:
                                    "mt-0.5 h-4 w-4 shrink-0 text-emerald-600",
                                })
                              : (0, a.jsx)(Z.Z, {
                                  className:
                                    "mt-0.5 h-4 w-4 shrink-0 text-brand-600",
                                }),
                            e,
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-5 flex flex-col gap-2.5",
                    children: [
                      (0, a.jsxs)(r.default, {
                        href: t,
                        className: J,
                        children: [
                          (0, a.jsx)(v.Z, { className: "h-4 w-4" }),
                          o.createNow,
                        ],
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        onClick: c,
                        className: X,
                        children: o.exploreMore,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Y.default, {
                    href: (0, E.QG)(
                      "Hi Forever Tale, I just viewed your demo invitation and would like some help.",
                    ),
                    trackSource: "demo_end_guide",
                    className:
                      "mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-950",
                    children: [
                      (0, a.jsx)(U.j, {
                        className: "h-3.5 w-3.5 text-emerald-600",
                      }),
                      o.sayHi,
                    ],
                  }),
                ],
              }),
            },
            "end",
          ),
      })
    );
  }
  function ea(e) {
    let { open: t, onClose: n, createHref: i } = e,
      o = D[(0, m.Vt)()];
    return (
      ei(t, n),
      (0, a.jsx)(H.M, {
        children:
          t &&
          (0, a.jsx)(
            $,
            {
              labelledBy: "demo-guide-upload-title",
              children: (0, a.jsxs)(P.E.div, {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                className: Q,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)(K, {
                        children: (0, a.jsx)(F.Z, { className: "h-5 w-5" }),
                      }),
                      (0, a.jsx)("h2", {
                        id: "demo-guide-upload-title",
                        className: "font-heading text-lg font-bold",
                        children: o.uploadTitle,
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "mt-3 text-sm leading-relaxed text-brand-800/80",
                    children: o.uploadBody,
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-4 grid grid-cols-2 gap-2.5",
                    children: [
                      (0, a.jsx)("button", {
                        type: "button",
                        onClick: n,
                        className: X,
                        autoFocus: !0,
                        children: o.ok,
                      }),
                      (0, a.jsx)(r.default, {
                        href: i,
                        className: "".concat(
                          J,
                          " px-3 text-center leading-tight",
                        ),
                        children: o.createNow,
                      }),
                    ],
                  }),
                ],
              }),
            },
            "upload",
          ),
      })
    );
  }
  function ei(e, t) {
    (0, i.useEffect)(() => {
      if (!e) return;
      let n = (e) => {
        "Escape" === e.key && t();
      };
      return (
        window.addEventListener("keydown", n),
        () => window.removeEventListener("keydown", n)
      );
    }, [e, t]);
  }
  var eo = n(24706),
    es = n(56582),
    er = n(75192),
    el = n(94270),
    ed = n(93292),
    eu = n(61459);
  let ec = {
    hi: {
      son: (e) => "".concat(e, " के सुपुत्र"),
      daughter: (e) => "".concat(e, " की सुपुत्री"),
      mrMrs: (e) => "श्री एवं श्रीमती ".concat(e),
      events: { Wedding: "शादी", Reception: "रिसेप्शन", Nikah: "निकाह" },
      story:
        "अपने परिवारों के आशीर्वाद के साथ, हम आपको अपनी शादी के उत्सव में आमंत्रित करते हैं। आपकी उपस्थिति हमारे दिन को पूरा कर देगी।",
      endingNote:
        "अपने प्रिय परिवार के आशीर्वाद के साथ, हम आपको सादर आमंत्रित करते हैं कि इस शुभ अवसर पर अपनी उपस्थिति और दुआओं से हमें अनुगृहीत करें।",
      muslimStory: (e) =>
        "अल्लाह (SWT) की रहमत और हमारे परिवारों की दुआओं के साथ, हम आपको अपने ".concat(
          e,
          " में ख़ुशी से आमंत्रित करते हैं। आपकी उपस्थिति और दुआएँ हमारे दिन को पूरा कर देंगी।",
        ),
      muslimEndingNote: (e) =>
        "अल्लाह इस रिश्ते में बरकत दे और हमारे ".concat(
          e,
          " में शामिल होने का आपको अज्र दे। आपकी उपस्थिति और दुआओं के लिए जज़ाकल्लाहु ख़ैरन।",
        ),
    },
    ar: {
      son: (e) => "ابن ".concat(e),
      daughter: (e) => "ابنة ".concat(e),
      mrMrs: (e) => "السيد والسيدة ".concat(e),
      events: {
        Wedding: "حفل الزفاف",
        Reception: "حفل الاستقبال",
        Nikah: "عقد القران",
      },
      story:
        "بمباركة عائلتينا، ندعوكم لمشاركتنا فرحة زفافنا. حضوركم يكتمل به يومنا.",
      endingNote:
        "بمباركة عائلتنا الحبيبة، يسعدنا أن ندعوكم لتشريفنا بحضوركم ودعواتكم في هذه المناسبة السعيدة.",
      muslimStory: (e) =>
        "بفضل الله تعالى ودعوات عائلتينا، يسعدنا أن ندعوكم إلى ".concat(
          e,
          ". حضوركم ودعواتكم يكتمل بها يومنا.",
        ),
      muslimEndingNote: (e) =>
        "بارك الله لنا وجزاكم خيرًا على مشاركتكم في ".concat(
          e,
          ". جزاكم الله خيرًا على حضوركم ودعواتكم.",
        ),
    },
    fr: {
      son: (e) => "Fils de ".concat(e),
      daughter: (e) => "Fille de ".concat(e),
      mrMrs: (e) => "M. et Mme ".concat(e),
      events: { Wedding: "Mariage", Reception: "R\xe9ception", Nikah: "Nikah" },
      story:
        "Avec la b\xe9n\xe9diction de nos familles, nous vous invitons \xe0 c\xe9l\xe9brer notre mariage. Votre pr\xe9sence rendra cette journ\xe9e compl\xe8te.",
      endingNote:
        "Avec la b\xe9n\xe9diction de notre ch\xe8re famille, nous vous prions de nous honorer de votre pr\xe9sence et de vos pri\xe8res en cette heureuse occasion.",
      muslimStory: (e) =>
        "Avec la b\xe9n\xe9diction d'Allah (SWT) et les douas de nos familles, nous avons la joie de vous inviter \xe0 notre ".concat(
          e,
          ". Votre pr\xe9sence et vos pri\xe8res rendront cette journ\xe9e compl\xe8te.",
        ),
      muslimEndingNote: (e) =>
        "Qu'Allah b\xe9nisse cette union et vous r\xe9compense de partager notre ".concat(
          e,
          ". JazakAllahu Khairan pour votre pr\xe9sence et vos douas.",
        ),
    },
    es: {
      son: (e) => "Hijo de ".concat(e),
      daughter: (e) => "Hija de ".concat(e),
      mrMrs: (e) => "los Sres. ".concat(e),
      events: { Wedding: "Boda", Reception: "Recepci\xf3n", Nikah: "Nikah" },
      story:
        "Con la bendici\xf3n de nuestras familias, los invitamos a celebrar nuestra boda. Su presencia har\xe1 que nuestro d\xeda sea completo.",
      endingNote:
        "Con la bendici\xf3n de nuestra querida familia, los invitamos cordialmente a honrarnos con su presencia y sus oraciones en esta feliz ocasi\xf3n.",
      muslimStory: (e) =>
        "Con la bendici\xf3n de Allah (SWT) y las duas de nuestras familias, tenemos la alegr\xeda de invitarlos a nuestro ".concat(
          e,
          ". Su presencia y sus oraciones har\xe1n que nuestro d\xeda sea completo.",
        ),
      muslimEndingNote: (e) =>
        "Que Allah bendiga esta uni\xf3n y los recompense por compartir nuestro ".concat(
          e,
          ". JazakAllahu Khairan por su presencia y sus duas.",
        ),
    },
  };
  function em(e, t) {
    if (!e) return e;
    let n = /^(Son|Daughter) of (.+)$/.exec(e.trim());
    if (!n) return e;
    let a = /^Mr\. & Mrs\. (.+)$/.exec(n[2]),
      father = /^Mr\. (.+)$/.exec(n[2]),
      i = a ? t.mrMrs(a[1]) : father ? t.father + father[1] : n[2];
    return "Son" === n[1] ? t.son(i) : t.daughter(i);
  }
  let eh = {
    en: {
      shareTitle: (e) => "".concat(e, " invitation demo"),
      shareText: (e, t) =>
        "Take a look at the ".concat(e, " invitation by ").concat(t),
    },
    hi: {
      shareTitle: (e) => "".concat(e, " निमंत्रण डेमो"),
      shareText: (e, t) => "".concat(t, " का ").concat(e, " निमंत्रण देखें"),
    },
    ar: {
      shareTitle: (e) => "عرض تجريبي لدعوة ".concat(e),
      shareText: (e, t) => "ألقِ نظرة على دعوة ".concat(e, " من ").concat(t),
    },
    fr: {
      shareTitle: (e) => "D\xe9mo de l'invitation ".concat(e),
      shareText: (e, t) =>
        "D\xe9couvrez l'invitation ".concat(e, " de ").concat(t),
    },
    es: {
      shareTitle: (e) => "Demo de la invitaci\xf3n ".concat(e),
      shareText: (e, t) =>
        "Echa un vistazo a la invitaci\xf3n ".concat(e, " de ").concat(t),
    },
  };
  function ex(e) {
    var t, n, r, l, c;
    let { invitation: h } = e,
      x = (0, m.Vt)(),
      siteLanguage = (0, m.p2)(),
      v = eh[x],
      f = (0, o.useSearchParams)(),
      g = (function (e, t) {
        var n;
        let a =
          null === (n = (0, eu.t4)(t)) || void 0 === n ? void 0 : n.formats;
        return a && !a.includes("website")
          ? "reel"
          : "reel" === e
            ? "reel"
            : "website";
      })(f.get("format"), h.templateSlug),
      w = "website" === g,
      j = "1" === f.get("embed"),
      T =
        null !==
          (n =
            null === (t = (0, eu.t4)(h.templateSlug)) || void 0 === t
              ? void 0
              : t.name) && void 0 !== n
          ? n
          : "Forever Tale",
      M = ""
        .concat(window.location.origin)
        .concat((0, u.lr)(h.templateSlug, g)),
      Z = ((r = h.templateSlug), (l = h.region), (0, d.$)(l, r)),
      A = (0, ed.LE)(
        h.templateSlug,
        (0, N.m1)(h.productType),
        h.region,
      ).current;
    ((c = w && !(0, u.fh)(h.templateSlug)),
      (0, i.useEffect)(() => {
        if (!c) return;
        let e = (e) => {
          e.target instanceof HTMLVideoElement &&
            (void 0 !== e.target.dataset.demoAllowSound ||
              e.target.muted ||
              (e.target.muted = !0));
        };
        return (
          document.addEventListener("play", e, !0),
          document.addEventListener("volumechange", e, !0),
          () => {
            (document.removeEventListener("play", e, !0),
              document.removeEventListener("volumechange", e, !0));
          }
        );
      }, [c]));
    let [L, z] = (0, i.useState)({ track: null, isRandom: !1 }),
      q = !0,
      [H, V] = (0, i.useState)("en"),
      [W, I] = (0, i.useState)(null),
      O = (0, i.useRef)(null),
      [_, F] = (0, i.useState)(!1),
      Y = (0, i.useRef)(null),
      [U, D] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
      var e;
      (D(!0),
        z((0, eo.X4)()),
        V(null !== (e = (0, eo._u)()) && void 0 !== e ? e : x),
        !w || j || (0, eo.GH)() || I("audio"));
    }, [w, j]);
    let Q = (0, i.useCallback)((e) => {
        (z(e), (0, eo.H7)(e));
      }, []),
      J = (0, i.useCallback)((e) => {
        (V(e), (0, eo.rC)(e));
      }, []),
      X = U && w && !j && null === W,
      $ = (function () {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            if (!e || t) return;
            let a = window.setInterval(() => {
              let e = window.innerHeight;
              for (let t of document.querySelectorAll(b)) {
                let a = t.getBoundingClientRect();
                if (
                  0 !== a.height &&
                  !(a.top > 0.7 * e) &&
                  !(a.bottom < 0.2 * e) &&
                  (function (e) {
                    let t = 1;
                    for (
                      let n = e;
                      n && n instanceof HTMLElement;
                      n = n.parentElement
                    ) {
                      let e = getComputedStyle(n);
                      if (
                        "none" === e.display ||
                        "hidden" === e.visibility ||
                        (t *= parseFloat(e.opacity) || 0) < 0.05
                      )
                        return 0;
                    }
                    return t;
                  })(t) > 0.6
                ) {
                  n(!0);
                  return;
                }
              }
            }, 400);
            return () => window.clearInterval(a);
          }, [e, t]),
          t
        );
      })(X),
      [K, G] = (0, i.useState)(!1),
      [ei, ex] = (0, i.useState)(!1),
      ev = y(0.9, X && !$);
    ((0, i.useEffect)(() => {
      if (!$ || ei || K) return;
      if ((0, eo.NL)()) {
        ex(!0);
        return;
      }
      if (
        (G(!0),
        getComputedStyle(document.documentElement).overflow.includes("hidden"))
      )
        return;
      let e = [...document.querySelectorAll(b)].find(
        (e) => e.getBoundingClientRect().height > 0,
      );
      e &&
        window.scrollTo({
          top: window.scrollY + e.getBoundingClientRect().top - 16,
          behavior: "smooth",
        });
    }, [$, ei, K]),
      (0, i.useEffect)(() => {
        ev && !document.querySelector(b) && ex(!0);
      }, [ev]));
    let ef = (0, i.useCallback)(() => {
        ((0, eo.nh)(), G(!1), ex(!0));
      }, []),
      ey = (0, i.useMemo)(() => localizeInvitation(h, H), [h, H]),
      eb = (0, i.useMemo)(() => {
        var e;
        return {
          ...ey,
          language: H,
          assets: {
            ...ey.assets,
            music: "none",
            musicConfig: null,
          },
        };
      }, [ey, L.track, H]);
    (0, i.useEffect)(() => { siteLanguage.setLang(H); document.documentElement.lang = H; document.documentElement.dir = H === "ar" ? "rtl" : "ltr"; document.title = "Louay & Maram | " + ({ en: "Our Wedding", ar: "زفافنا", fr: "Notre mariage" }[H]); document.querySelector('meta[name="description"]')?.setAttribute("content", ey.event.description); }, [H, siteLanguage.setLang]);
    return U
      ? (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(el.default, {
              contentId: h.templateSlug,
              value: A,
              region: h.region,
            }),
            "reel" === g
              ? (0, a.jsx)(p, { invitation: h })
              : (0, a.jsx)("div", {
                  className: "ft-demo-audio contents",
                  children: (0, a.jsx)(
                    s.InvitationTemplate,
                    { invitation: eb, mode: "live" },
                    H,
                  ),
                }),
            !j && (0, a.jsx)(C, { region: (0, N.wS)(h.region) }),
            (0, a.jsxs)("div", {
              ref: Y,
              className:
                "fixed right-3 top-3 flex items-start gap-2 sm:right-5 sm:top-5 ".concat(
                  "audio" === W || "language" === W ? "z-[75]" : "z-[60]",
                ),
              children: [
                w &&
                  (0, a.jsx)(S.Z, {
                    className: "",
                    onUploadClick: j ? void 0 : () => F(!0),
                    selection: L,
                    lang: H,
                    onSelectionChange: Q,
                  }),
                w &&
                  (0, a.jsx)("div", {
                    ref: O,
                    children: (0, a.jsx)(R, { value: H, onChange: J }),
                  }),

              ],
            }),
            !j && (0, a.jsx)(k, { gated: w }),
            (0, a.jsx)(ee, {
              anchorRef: Y,
              languageAnchorRef: O,
              step: W,
              onAudioOk: () => I("language"),
              onLanguageOk: () => {
                ((0, eo.wN)(), I(null));
              },
            }),
            !j &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(ea, {
                    open: _,
                    onClose: () => F(!1),
                    createHref: Z,
                  }),
                  (0, a.jsx)(et, { open: K, onOk: ef }),
                ],
              }),
          ],
        })
      : null;
  }
}
