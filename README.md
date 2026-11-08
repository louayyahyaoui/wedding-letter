# Golden Letter — React + Node.js clone

A local reconstruction of the public [Golden Letter invitation demo](https://theforevertale.com/demo/golden-letter), with the original sample details preserved.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the URL printed in the terminal. The default is http://localhost:5173; if that port is busy, development mode automatically tries the next available port. Hot reload uses the same port. Both `/` and `/demo/golden-letter` serve the invitation.

To view it on a phone connected to the same Wi-Fi/router, open the printed `Network:` address that matches your computer's Wi-Fi IP, using the same port. Development mode listens on the local network by default; `HOST=127.0.0.1` limits it to the computer. Windows Firewall must allow the Node.js server for the current network. Keep the computer and its terminal running.

```sh
npm run build
# PowerShell:
$env:NODE_ENV = 'production'
npm start
```

## What is included

- The original envelope artwork and 7.68-second opening video.
- The original fonts, cream/gold colors, narrow desktop composition and mobile layout.
- Typed names, fading text, glowing/swaying lanterns, scroll transitions and scratch cards.
- Wedding/reception date reveals, map directions, RSVP form and demo confirmation.
- Five local audio tracks, playback controls, language switching (English, Hindi, Arabic, French, Spanish), and the optional Muslim version from the original onboarding.
- The original demo guidance, share menu, and sample branding.

The first-party assets are served from `public/`. The source site's analytics are disabled. Map links, original branding links and the template-creation call to action refer to external services. The source site's account, payment and invitation-creation platform are outside this invitation clone.

## Change the details later

The opened invitation background is set by `assets.heroBackground` in `src/invitation.json` (currently `public/assets/ceremony/design/hero-seaside.webp`). It fades in after the envelope opens. The original generated source and its full prompt are retained in `design-assets/`. Page title, description and share text use the configured couple names and wedding date. The LM favicon is authored in `public/favicon.svg`, with PNG/ICO fallbacks. Footer credits and the final promotional modal/template button have been removed; Start over remains available.

### Your ceremony photos

Put JPG, PNG, WebP, AVIF or TIFF photos directly in `public/assets/ceremony`, then run:

```sh
npm run photos
```

This creates optimized WebP copies in `public/assets/ceremony/optimized` and updates only `assets.gallery` in `src/invitation.json`. Your original files and other invitation details are preserved. Photos appear in filename order in the “Our Moments” carousel; rename files before running the command to change their order. Remove an original from the ceremony folder and run the command again to remove it from the gallery. Refresh the browser if needed. The envelope opening video and decorative background are separate assets from this photo gallery.

Edit **`src/invitation.json`**. It contains names, parents, event dates/times, venues, map URLs, story, ending note, photos and music settings.

- `src/main.jsx`: React entry point and invitation data binding.
- `src/recovered/GoldenLetter.js`: isolated Golden Letter React template and animations.
- `src/recovered/Demo.js`: demo toolbar, onboarding and language/version controls.
- `src/recovered/Rsvp.js`, `ScratchReveal.js`, `Music.js`, `Language.js`: recovered component behavior.
- `src/runtime.jsx`: small module adapter, npm React, and replacements for Next.js-specific image/navigation dependencies.
- `server.mjs`: Express/Node server, Vite development middleware, production serving and local RSVP endpoint.

The readable component files were recovered from shipped browser JavaScript, not an original source repository. Some identifiers retain compiled names; original source names and TypeScript types are unavailable. Unrelated template branches were removed from the main template. The clone uses npm React 18 and a local module adapter to preserve the shipped animation behavior.

## RSVP behavior

The default invitation has `subdomain: null`, matching the reference demo: submission displays a preview confirmation and does not save a guest response. Set a nonempty `subdomain` in `src/invitation.json` to save responses through `POST /api/public/invitations/:slug/rsvp` to `data/rsvps.jsonl`. This file is ignored by Git. The endpoint validates name, attendance and party size; it is a local development backend.

## Verification

```sh
# With the dev server running and Google Chrome installed:
npm test
node tests/controls.mjs
```

Set `CHROME_PATH` if Chrome is installed elsewhere. `npm test` compares the live reference with the clone at desktop 1440×1000 and mobile 390×844, captures the closed/opened states, and checks the video, date reveal, map and menus. It requires internet access to the reference; the control test uses only localhost.

Results and screenshots are in `evidence/verification/`. The most recent comparison found 0.013–0.247% of pixels differed by more than 12 channel levels across the four sampled views. Timing, antialiasing and animated frames can affect these numbers; this verifies sampled views rather than universal pixel identity.

The REA capture and script-export provenance are described in `evidence/findings.md`. `tools/extract.mjs` reconstructs the readable modules from retained downloads; it is an investigation tool, not needed to run or edit the delivered app. It regenerates recovered files and the sample JSON, so preserve later edits before using it.
