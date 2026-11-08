import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function WeddingSignature({ firstName, secondName, isStatic, lang = "en" }) {
  const reducedMotion = useReducedMotion();
  // A single, gentle closing flourish celebrates the couple as it enters view.
  const entrance = {
    initial: isStatic ? false : { opacity: 0.3, transform: reducedMotion ? "none" : "translateY(16px)" },
    whileInView: { opacity: 1, transform: "none" },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: reducedMotion ? 0.2 : 0.9, ease: [0.23, 1, 0.32, 1] },
  };
  return (
    <section className="wedding-signature" aria-label={`${firstName} & ${secondName}`}>
      <motion.img {...entrance} className="wedding-signature__seal" src="/assets/wax-seals/louay-maram-burgundy-4k.png" width="4096" height="4096" alt={{ en: `Burgundy wax seal embossed with ${firstName} & ${secondName}`, ar: `ختم شمعي بلون عنابي يحمل اسمي ${firstName} و${secondName}`, fr: `Sceau de cire bordeaux gravé des prénoms ${firstName} et ${secondName}` }[lang]} loading="lazy" decoding="async" />
    </section>
  );
}
