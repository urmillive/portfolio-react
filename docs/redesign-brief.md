# urmil.live redesign: brief and handoff

Owner: Urmil Rupareliya (`urmillive`). Written 7 Nov 2026 for a separate working session.

## Ask

"https://naveen-meena-beta.vercel.app/ can we make this kind of portfolio of mine and update on urmil.live?"

Take the reference's structure and feel. Do not copy its text, images, name or visual identity.

## State right now

- Branch `redesign-2026-11`, commit `73ce52d`. Not pushed, not deployed.
- `npm run build` and lint pass. Checked rendering at 1440px and 360px in a headless browser.
- Screenshots from the first pass are temporary files in the Claude scratchpad. Regenerate them with `npm run dev` or `npm run preview`.
- Stack: React 18 and Vite. Bootstrap, Redux, the router and the jQuery/FontAwesome CDNs were removed. The JS bundle is about 50 kB gzipped.
- All content is in `src/data.js`.

## What was taken from the reference (structure and feel only)

| Reference | urmil.live |
|---|---|
| Thin fixed nav: serif wordmark, mono links, status pill with a pulsing green dot | `Urmil.` wordmark, Work / Story / Skills / About / Contact, a "Building WayVibe" pill |
| Italic serif kicker above a big grey headline with bold italic emphasis | "Chessboard to codebase." above "Hi, I'm *Urmil Rupareliya.*" |
| Side-scrolling poster cards with a giant italic word that flip to show text | Project cards with WayVibe featured |
| Black footer with rounded top corners and a big call to action | "That's the story so far. Your move." and "Say hello" |
| No dark mode | No dark mode |

Own identity: warm paper background with black and ember-orange accents, Fraunces / Manrope / JetBrains Mono fonts, and a chessboard hero with a code tag in the middle.

## Sections

1. Hero
2. Work: WayVibe featured, three other projects, then an "earlier builds" list
3. Story timeline, 2015 to 2025
4. Skills: Web, Mobile, Backend and data, Craft
5. About: photo, education, open source
6. Contact footer

## Facts the owner must supply (left as TODOs in `src/data.js`, never invented)

- [ ] Resume PDF
- [ ] Current city
- [ ] Role titles and dates at Asite and Upsquare
- [ ] BCA and MCA completion years
- [ ] Keep the "Building WayVibe" pill? (Recommended: yes.)
- [ ] The phone number from `Education.md` is deliberately not published. Confirm.

## WayVibe facts allowed on the site

Only verifiable ones:

- https://wayvibe.app is live.
- Android is on Google Play.
- iOS is in App Store review.
- About 60 users, mostly in Gujarat.
- The wordmark is "Wayvibe" with a lavender W, in rounded display type (from the owner, 7 Nov).
- The tagline is not decided yet. MigoMap uses "every plan on earth", so do not use that or anything close to it.

## Deploying to urmil.live

- DNS: urmil.live points at 195.35.23.100, the same VPS as WayVibe. That server runs Caddy in Docker (`deploy-caddy-1`) for wayvibe.app.
- Not known yet how the current site is served. `public/.htaccess` suggests Apache serving `dist/`, but one commit set the dev script to `vite --host`, so a dev server may be running on the box. Check with `ss -ltnp` and the Caddyfile before changing anything.
- Plan:
  - build `dist/`;
  - serve it as static files from Caddy (a new site block for urmil.live with `file_server` and an SPA fallback to `index.html`);
  - keep the old site's directory as a rollback.
- The WayVibe Caddyfile is infrastructure. `deploy/ship.sh` refuses to deploy if it differs from the server's copy, so change it only through the repo's `--infra` path, with the owner's approval.

## Done when

- [ ] Owner approves the look (desktop and 360px, real phone).
- [ ] TODO facts filled.
- [ ] Lighthouse: performance 90 or above, accessibility 95 or above.
- [ ] Live on https://urmil.live over HTTPS, with old URLs falling back to the home page.
- [ ] Rollback path written down.
