# Needleheads Custom Embroidery

Pitch site for Needleheads, the embroidery and print shop at 88-01 Myrtle Ave in Glendale, Queens. Six pages, built with React, Vite and Tailwind. No server yet, it's all front end.

## to run it

```bash
npm install
npm run dev
```

Then open http://localhost:5183. `npm run build` makes the production version in `dist/`.

## the pages

| Address | File | What's on it |
|---|---|---|
| `/` | `src/views/HomeView.jsx` | storefront hero, services, the city work, hat wall, country tees, reviews, map |
| `/services` | `src/views/ServicesView.jsx` | every service with a photo, plus how ordering works |
| `/work` | `src/views/WorkView.jsx` | filterable gallery with a full screen viewer |
| `/schools-teams` | `src/views/SchoolsView.jsx` | school gear and team uniforms |
| `/about` | `src/views/AboutView.jsx` | the story, the shop, neighborhood stuff |
| `/contact` | `src/views/ContactView.jsx` | quote form, hours, socials, map |

## where things live

- `src/data/` is where the content is. Change a phone number, an hour, a service or a gallery photo here and every page picks it up.
    - `business.js` name, address, phone, hours, social links, review numbers
    - `services.js` the services and the "how it works" steps
    - `work.js` the gallery
    - `schools.js` school gear and the team section
- `src/views/` one file per page.
- `src/components/layout/` navbar, footer, and the Layout that wraps every page.
- `src/components/ui/` the reusable pieces: Button, Photo, Hoop (round photo in an embroidery hoop), Awning, NeonTee, Lightbox and so on.
- `src/utils/` two small helpers: the open/closed clock and the quote email builder.
- `src/css/main.css` the whole design system. Colors and fonts are in the `@theme` block at the top (Tailwind v4, so no tailwind.config.js).
- `public/images/` every photo, already resized. Each one has a full size `name.webp` and a small `name-sm.webp`.
- `research/` everything scraped from their Facebook, Yelp, Google listing and old Wix site, plus `notes.md` with what was found and what still needs confirming. None of it ships with the site.

## adding a photo to the gallery

1. Save it as webp twice in `public/images/work/`: `my-photo.webp` (about 1400px on the long side) and `my-photo-sm.webp` (about 640px).
2. Add a line to `src/data/work.js` with the same id, a category, a title and a note.

## the look

All of it comes from the real shop. Navy is the awning, red is the sign, the band under each page header is the awning itself (same three words, and it does not move). The logo in the navbar is their actual logo, recolored. The neon t-shirt is the sign hanging in their window. Dashed outlines are stitches. Headings are Caprasimo, which is the closest free match to the letters over the door, and body text is Nunito.

## what's next

- **Confirm the facts.** `research/notes.md` lists the open questions: founding year (1993 or 1998), whether they still do banners and signs, the school list, and whether they are okay naming the city work.
- **Photo sign off.** Have the shop okay the photos, and ideally send better ones. A few came from Yelp at 1000px.
- **Pick the domain.** Their needleheadsnyc.com does not load right now, and their Google listing links to a misspelled domain that somebody else owns. Once a domain is chosen, add `og:url` and a canonical tag in `index.html`.
- **Quote form.** Right now it opens the visitor's email app with the request filled in. If they want it to send on its own, it needs a small server or a form service.
- **Testimonials.** There is one short Google quote on the home page. Ask the shop for a few customers who would give a line.
- **Deploying.** `vercel.json` is already set up so page refreshes work on Vercel.
