import source from "./invitation.json";
import { localizeInvitation, supportedLanguages } from "./invitationTranslations.js";
const gallery = {
 en: { gallery: "View our ceremony gallery", galleryTitle: "Our Ceremony in Tunisia", completed: "Our ceremony took place in Tunisia on 22 March 2026." },
 ar: { gallery: "شاهدوا صور عقد قراننا", galleryTitle: "عقد قراننا في تونس", completed: "تم عقد قراننا في تونس يوم 22 مارس 2026." },
 fr: { gallery: "Voir les photos de notre cérémonie", galleryTitle: "Notre cérémonie en Tunisie", completed: "Notre cérémonie a eu lieu en Tunisie le 22 mars 2026." },
};
export default Object.fromEntries(supportedLanguages.map(lang => {
 const invitation = localizeInvitation(source, lang);
 return [lang, { ...gallery[lang], party: invitation.event.occasionType, invitation: invitation.event.description }];
}));
