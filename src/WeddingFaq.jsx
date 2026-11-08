import React from "react";
import { Plus } from "lucide-react";
import "./wedding-faq.css";

const translations = {
  en: {
    title: "Questions & Answers",
    dress: "What is the dress code?",
    dressPending: "We’ll share the dress code here soon.",
    time: "When does the wedding party start?",
    starts: "The wedding party starts at {time} on {date}.",
    venue: "Where is the wedding party?",
    directions: "Get directions",
  },
  fr: {
    title: "Questions & réponses",
    dress: "Quel est le code vestimentaire ?",
    dressPending: "Nous préciserons bientôt le code vestimentaire ici.",
    time: "Quand commence la fête de mariage ?",
    starts: "La fête de mariage commence à {time} le {date}.",
    venue: "Où a lieu la fête de mariage ?",
    directions: "Voir l’itinéraire",
  },
  ar: {
    title: "أسئلة وأجوبة",
    dress: "ما هو اللباس المناسب؟",
    dressPending: "سنشارككم تفاصيل اللباس هنا قريبًا.",
    time: "متى يبدأ حفل الزفاف؟",
    starts: "يبدأ حفل الزفاف الساعة {time} يوم {date}.",
    venue: "أين سيقام حفل الزفاف؟",
    directions: "احصل على الاتجاهات",
  },

};

export default function WeddingFaq({ invitation, lang = "en" }) {
  const copy = translations[lang] || translations.en;
  const { event } = invitation;
  const date = new Date(`${event.date}T${event.time || "12:00"}:00`);
  const formattedDate = date.toLocaleDateString(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString(lang, {
    hour: "numeric",
    minute: "2-digit",
  });
  const venue = [
    ...new Set(
      [event.venueName, event.address, event.city]
        .map((part) => part?.trim())
        .filter(Boolean),
    ),
  ].join(", ");
  const dressCode = invitation.faq?.dressCode;
  const dressAnswer =
    typeof dressCode === "string"
      ? dressCode
      : dressCode?.[lang] || dressCode?.en;
  const questions = [
    {
      id: "dress",
      question: copy.dress,
      answer: dressAnswer || copy.dressPending,
    },
    {
      id: "time",
      question: copy.time,
      answer: copy.starts
        .replace("{time}", formattedTime)
        .replace("{date}", formattedDate),
    },
    {
      id: "venue",
      question: copy.venue,
      answer: venue,
      href: event.mapLink,
      link: copy.directions,
    },
  ];

  return (
    <section
      id="faq"
      className="wedding-faq"
      aria-labelledby="faq-title"
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <h2 id="faq-title" className="font-heading">
        {copy.title}
      </h2>
      <div className="wedding-faq__questions">
        {questions.map((item) => (
          <details key={item.id} className="wedding-faq__item">
            <summary>
              <span>{item.question}</span>
              <Plus
                className="wedding-faq__icon"
                size={18}
                aria-hidden="true"
              />
            </summary>
            <div className="wedding-faq__answer">
              <p>{item.answer}</p>
              {item.href && (
                <a
                  href={item.href}
                  {...(item.href.startsWith("#")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.link}
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
