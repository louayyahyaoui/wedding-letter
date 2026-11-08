import React from "react";
import source from "./invitation.json";
import { localizeInvitation } from "./invitationTranslations.js";

export default function CatamaranTour({ lang = "en" }) {
  const { event } = localizeInvitation(source, lang);
  return (
    <section className="catamaran-tour" aria-labelledby="catamaran-title" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <h3 id="catamaran-title" className="font-heading">{event.tourTitle}</h3>
      <p>{event.tourDescription}</p>
      <div className="catamaran-tour__photos">
        {event.photos.map(photo => <img key={photo.src} src={photo.src} alt={photo.alt} width="1440" height="1080" loading="lazy" decoding="async" />)}
      </div>
    </section>
  );
}
