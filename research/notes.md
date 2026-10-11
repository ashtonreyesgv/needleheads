# Needleheads research notes

Pulled together on 2026-10-11 from the three links (Facebook, Yelp, Google Maps) plus whatever else turned up. Anything marked **confirm** is a guess or a conflict between sources and should be checked with the client before launch.

## The basics

| | |
|---|---|
| Name | Needleheads Custom Embroidery (Google lists it as just "Needleheads", some records say "Needleheads Custom Embroidery Inc") |
| Address | 88-01 Myrtle Ave, Glendale, NY 11385 |
| Phone | (718) 850-4252 |
| Email | needleheadsnyc@gmail.com (the old Wix site uses dcneedleheadsnyc@gmail.com) |
| Hours | Monday to Friday, 10am to 6pm. Closed weekends. |
| Owner | Anthony Ululati, per Alignable and the Instagram display name. Not used anywhere on the site. |
| Price range | $ (Facebook) |
| Extras | Accepts credit cards (Yelp). Google shows "Delivery". |

## Things that conflict (confirm)

- **Founding year.** Yelp's "From the business" says established 1993. Their Instagram bio says Est. 1998. A business-records site (Cortera) says 2004. The site says "since the '90s", which is true for the first two. It lives in one spot: `since` in `src/data/business.js`.
- **Hours.** Their own Facebook post from January 2026 says Monday to Friday 10 to 6, and Yelp and Google agree. The Instagram bio and Yellow Pages say 9am to 6pm. The site uses 10 to 6.
- **Banners and signs.** The front door and a July 2022 "Banners & Stickers" album say yes, but they also listed a 54 inch Roland wide format printer for sale in January 2022. Worth asking if they still print these in house.
- **School list.** P.S. 82, M.S. 217 and I.S. 93 come from their old online store, which is dated 2019. Check they still supply all three. Prices from that store are below but are NOT on the new site.
- **City work.** The site says they lettered a jacket "for the Mayor of New York" and made shields for the NYPD Chief of Department and Commissioner. That is what their own photos show, and one of their captions says they are glad to work for the NYPD. Make sure they are comfortable with those being front and center.

## Their web presence right now

- **needleheadsnyc.com** is on the storefront wall, the business card and Facebook, but it does not load (no DNS record).
- **Google Maps links to neeedleheadsnyc.com**, with three e's. That typo domain resolves to a parked page owned by someone else. Every customer who taps "Website" on Google lands there. Good pitch point, and an easy fix once the new site is up (suggest an edit on the listing, or claim it. The listing says "Claim this business", so nobody has).
- **needleheadsnyc.net** is an old Wix store from 2019, school uniforms only. The footer social icons still point at Wix's own accounts.
- **Yelp page is unclaimed** too.

## Socials

| Platform | Link | Notes |
|---|---|---|
| Facebook | facebook.com/NeedleheadsCustomEmbroidery | 373 followers. 94% recommend, 16 reviews. Last post June 2026. |
| Instagram | instagram.com/needleheadsnyc | 402 followers, 101 posts. Bio says family owned, established 1998. |
| Yelp | yelp.com/biz/needleheads-custom-embroidery-glendale | 2.4 stars, 8 reviews, 35 photos. |
| Google | Maps listing | 3.9 stars, 68 reviews. |
| Alignable | alignable.com/new-york-ny/needleheads-custom-embroidery | 4 recommendations from other local businesses. |

Google's panel also shows X and LinkedIn profiles, but I could not find working links for either, so they are not on the site.

## Reputation, honestly

Facebook is strong (94% recommend) and Google is decent (3.9 from 68). Yelp is the weak spot at 2.4, though it is only 8 reviews. The complaints repeat: nobody picking up the phone, a price that changed at pickup, and orders running late. The good reviews talk about rush jobs handled, detail coming out exactly as pictured, and fair prices on one-off personal items.

How the site handles it: it leads with the Facebook number, links out to Google and Facebook reviews, and does not show the Yelp rating (Yelp is still linked in the footer and on the contact page). The quote form and the "how it works" steps are aimed straight at the phone and pricing complaints. The site quotes one short line from a Google review. I did not copy other reviews over: Yelp does not allow republishing them, and it is better to ask a few happy customers for a line the shop can use.

## What they do

From the awning, door, Yelp, Alignable and their posts:

- Custom embroidery (polos, jackets, hats, bags, chef coats, leather. One Yelp caption mentions monogramming car leather)
- Silk screening / screen printing
- Heat transfers
- Custom patches
- Digitizing and logo design
- Banners, signs and stickers (confirm, see above)
- Team uniforms (their Alignable page lists Little League, kickball teams, family reunions and company outings)
- School uniforms
- Country tees for the World Cup and Euros (their posts say every country is available, including ones that are not in the tournament)
- Seasonal: St. Patrick's Day tees and caps

Equipment visible in photos: Tajima multi-head embroidery machines (at least four heads), a Roland VersaCAMM printer.

## Named work in their photos

City: NYC Mayor jacket (city seal, "Eric Adams Mayor" on the chest), NYPD Chief of Department Office soft shell, Chief of Department and Police Commissioner shields, NYPD Community Affairs Bureau polos with Autism Awareness patches. Instagram also shows an NYPD Intelligence Bureau piece.

Local businesses: Carlo's Pizzeria, Aldo's (Ozone Park), LaGuardia Cafe, Ice Cubes R Us (Brooklyn), NB Landscaping, Bob's Sunshine Auto Body Repair, Unlimited Mechanical, Chip (cookies), Sorrento's (Long Beach), Gran Caffe Gelateria, Cafe Bravo New York, Executive Parking Valet, Greenlight Energy.

Teams and schools: Kew Forest FC, Brooklyn Rays Baseball, Long Island Blues Hockey, Our Lady of Hope baseball, Fly Academy of Dance, I.S. 93, P.S. 82, M.S. 217, EBCHS.

## Old Wix store prices (2019, for reference only)

P.S. 82: cotton tee $14, polo $20, pullover hoodie $22, full zip hoodie $30, sweatpants $20, quarter zip $23, soccer tee $20.
M.S. 217: crewneck $20, polo $18, embroidered patch $6.
I.S. 93: grade tees $10, long sleeves $14, polos $16, crewneck $20, beanies $10.

## Brand, as found

- Storefront: chunky red serif "Needleheads" letters over a navy awning that reads EMBROIDERY, SILK SCREENING, PATCHES in white.
- Logo: three dress form busts in black line art over a hand lettered bubbly "NEEDLEHEADS". Same lettering is painted on the shop wall in navy, next to a wavy "N" mark that also sits on the front door.
- Business card: denim texture, white busts, a Cooper style typeface, blue footer.
- In the window: a neon t-shirt sign that says YOUR LOGO.

The site uses all four: their real logo in the navbar and footer, navy and sign red as the main colors, the awning as a static band under every page header, and the neon tee redrawn for the call to action.

## Where the images came from

Everything in `public/images` was resized from the originals saved in this folder.

- `yelp/` 35 photos from their Yelp page (most uploaded by the business, with captions naming the client).
- `facebook/` 25 photos from their public Facebook posts, full size.
- `old-wix-site/` their logo, business card art and 24 school uniform mockups from needleheadsnyc.net.
- `google/` the storefront photo from their Google Maps listing.
- `from-ashton/` the screenshots and PDF that were already in this folder.

Left off the site on purpose: anything showing kids or customers' faces (team photos, the bridal party, the birthday crew), the banner listing children's names, the chef coat with a person's full name on it, and the photos of the printer they were selling. Before launch, have the shop confirm they are fine with every photo that is used, since a few of the Yelp ones may have been taken by customers.
