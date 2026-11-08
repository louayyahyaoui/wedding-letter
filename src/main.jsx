import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { requireModule } from "./runtime.jsx";
import invitation from "./invitation.json";
const Demo = requireModule(19870).default;
const LanguageProvider = requireModule(82119).SiteLangProvider;
function Invitation() {
  useEffect(() => {
    const { couple, event, assets } = invitation;
    const bride = couple.brideNickname || couple.brideName;
    const groom = couple.groomNickname || couple.groomName;
    const names =
      String(couple.nameOrder).toLowerCase() === "groom-first"
        ? [groom, bride]
        : [bride, groom];
    const title = `${names.join(" & ")} | Our Wedding`;
    const date = new Date(`${event.date}T12:00:00`);
    const when = Number.isNaN(date.getTime())
      ? ""
      : ` on ${date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`;
    const description = `Join us to celebrate ${names.join(" and ")}’s wedding${when}.`;
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content =
      description;
    if (assets.heroBackground)
      document.querySelector('meta[property="og:image"]').content = new URL(
        assets.heroBackground,
        location.origin,
      ).href;
  }, []);
  return (
    <LanguageProvider initialLang="en" syncDocument={false} localOnly>
      <Demo invitation={invitation} />
    </LanguageProvider>
  );
}
createRoot(document.getElementById("root")).render(<Invitation />);
