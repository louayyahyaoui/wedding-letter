// invitation.json is the English source of truth. These overlays translate it;
// dates, times, map links and photos always come from the source invitation.
export const supportedLanguages = ["en", "ar", "fr"];

const translations = {
  fr: {
    groomParents: "Fils de Felah Yahyaoui et Ahlem Missaoui",
    brideParents: "Fille d’Adel Khalfaoui et Nadia Guelmami",
    occasionType: "Fête de mariage",
    venueName: "Catamaran Siesta Mia",
    description: "Rejoignez-nous le 9 janvier 2027 pour célébrer notre mariage à bord du catamaran Siesta Mia. Partageons une sortie en catamaran et cette journée si spéciale avec nos familles et nos amis.",
    tourTitle: "À bord de Siesta Mia",
    tourDescription: "Notre fête de mariage se déroulera à bord de Siesta Mia lors d’une sortie en catamaran. Embarquez avec nous pour célébrer, admirer la mer et créer de beaux souvenirs ensemble. Nous nous retrouverons à Roland Marina, ponton D, à Ta’ Xbiex.",
    photoAlts: ["Le catamaran Siesta Mia au mouillage dans une eau turquoise", "Le catamaran Siesta Mia naviguant en mer"],
    story: "Avec la bénédiction d’Allah et l’amour de nos familles, nous vous invitons à célébrer notre mariage. Votre présence et vos prières rendront cette journée complète.",
    dressCode: "Tenue chic — nous serions ravis de vous voir dans une tenue de fête élégante dans laquelle vous vous sentez bien. Une belle robe, un costume bien coupé ou une tenue soigneusement choisie sera parfaite pour la célébration. Privilégiez le confort pour vous détendre, faire la fête et profiter de cette soirée si spéciale avec nous.",
    endingNote: "Alhamdulillah, le cœur rempli de gratitude, nous remercions Allah de nous avoir réunis et de nous avoir entourés de l’amour de nos familles et de nos amis. Merci de partager notre joie, de votre bienveillance et de chaque du‘a sincère alors que nous ouvrons ce nouveau chapitre. Votre présence compte énormément pour nous. Qu’Allah vous récompense par le bien, accorde à vos foyers paix et bonheur, et remplisse notre mariage d’amour, de miséricorde et de baraka. Gardez-nous dans vos prières alors que nous construisons notre vie ensemble en recherchant Son agrément. Jazakum Allahu khayran de faire partie de notre journée si spéciale.",
  },
  ar: {
    couple: { groomName: "لؤي", groomNickname: "لؤي", brideName: "مرام", brideNickname: "مرام" },
    groomParents: "ابن فالح اليحياوي وأحلام الميساوي",
    brideParents: "ابنة عادل الخلفاوي ونادية الڨلمامي",
    occasionType: "حفل الزفاف",
    venueName: "كاتاماران Siesta Mia",
    description: "ندعوكم يوم 9 يناير 2027 للاحتفال بزفافنا على متن كاتاماران Siesta Mia. شاركونا رحلة بحرية بالكاتاماران لنحتفل بهذا اليوم المميز مع أهلنا وأصدقائنا.",
    tourTitle: "على متن Siesta Mia",
    tourDescription: "سيُقام حفل زفافنا على متن Siesta Mia خلال رحلة بحرية بالكاتاماران. انضموا إلينا لنحتفل ونستمتع بمناظر البحر ونصنع معًا ذكريات جميلة. نلتقي في Roland Marina، الرصيف D، في Ta’ Xbiex.",
    photoAlts: ["كاتاماران Siesta Mia راسٍ في مياه فيروزية", "كاتاماران Siesta Mia يبحر في البحر"],
    story: "ببركة الله ومحبة أهلنا، ندعوكم لمشاركتنا فرحة زفافنا. بحضوركم ودعواتكم تكتمل فرحتنا.",
    dressCode: "إطلالة أنيقة — يسعدنا أن نراكم بملابس مناسبات راقية تشعرون فيها بالراحة والثقة. فستان جميل، أو بدلة أنيقة، أو إطلالة مختارة بعناية ستكون مثالية للاحتفال. اختاروا ما يمنحكم الراحة لتستمتعوا معنا بهذه الأمسية المميزة بكل فرح وطمأنينة.",
    endingNote: "الحمد لله، بقلوب ممتنة نحمد الله الذي جمع بيننا وأحاطنا بمحبة أهلنا وأصدقائنا. شكرًا لمشاركتكم فرحتنا، ولطفكم، ولكل دعوة صادقة مع بداية هذا الفصل الجديد من حياتنا. حضوركم يعني لنا الكثير. نسأل الله أن يجزيكم خيرًا، وأن يملأ بيوتكم سلامًا وسعادة، وأن يجعل زواجنا عامرًا بالمودة والرحمة والبركة. لا تنسونا من صالح دعائكم ونحن نبني حياتنا معًا ابتغاء مرضاته. جزاكم الله خيرًا لمشاركتنا هذا اليوم المميز.",
  },
};

export function localizeInvitation(source, language = "en") {
  const lang = supportedLanguages.includes(language) ? language : "en";
  const copy = translations[lang];
  if (!copy) return { ...source, language: lang };
  return {
    ...source,
    language: lang,
    couple: { ...source.couple, ...copy.couple, groomParents: copy.groomParents, brideParents: copy.brideParents },
    event: {
      ...source.event,
      occasionType: copy.occasionType,
      venueName: copy.venueName,
      description: copy.description,
      tourTitle: copy.tourTitle,
      tourDescription: copy.tourDescription,
      photos: source.event.photos.map((photo, index) => ({ ...photo, alt: copy.photoAlts[index] })),
    },
    story: copy.story,
    faq: { ...source.faq, dressCode: copy.dressCode },
    endingNote: copy.endingNote,
  };
}
