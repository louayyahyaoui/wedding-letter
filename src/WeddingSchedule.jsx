import React from "react";
import "./wedding-details.css";

const titles = {
  en: "Wedding Day Schedule",
  fr: "Programme du mariage",
  ar: "برنامج يوم الزفاف",
  es: "Programa del día de la boda",
  hi: "शादी के दिन का कार्यक्रम",
};
const placeholders = {
  en: "Activity to be added",
  fr: "Activité à venir",
  ar: "سيتم إضافة النشاط",
  es: "Actividad por añadir",
  hi: "गतिविधि बाद में जोड़ी जाएगी",
};

export default function WeddingSchedule({ items = [], lang = "en" }) {
  if (!items.length) return null;
  return (
    <section className="wedding-schedule" aria-labelledby="schedule-title" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <h2 id="schedule-title" className="font-heading">{titles[lang] || titles.en}</h2>
      <ol className="wedding-schedule__timeline">
        {items.map(({ time, activity }) => (
          <li key={time}>
            <time dateTime={time}>{new Intl.DateTimeFormat(lang, { hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(`2000-01-01T${time}:00`))}</time>
            <span className="wedding-schedule__marker" aria-hidden="true" />
            <p className="font-heading">{activity === placeholders.en ? placeholders[lang] || placeholders.en : activity}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
