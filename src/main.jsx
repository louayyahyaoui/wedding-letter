import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { requireModule } from "./runtime.jsx";
import invitation from "./invitation.json";
import { localizeInvitation } from "./invitationTranslations.js";
const Demo = requireModule(19870).default;
const LanguageProvider = requireModule(82119).SiteLangProvider;
function Invitation() {
  useEffect(() => {
    const { couple, event, assets } = localizeInvitation(invitation, "ar");
    const bride = couple.brideNickname || couple.brideName;
    const groom = couple.groomNickname || couple.groomName;
    const names =
      String(couple.nameOrder).toLowerCase() === "groom-first"
        ? [groom, bride]
        : [bride, groom];
    const title = `${names.join(" و ")} | زفافنا`;
    const description = event.description;
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
    <LanguageProvider initialLang="ar" syncDocument={false} localOnly>
      <Demo invitation={invitation} />
    </LanguageProvider>
  );
}
createRoot(document.getElementById("root")).render(<Invitation />);
