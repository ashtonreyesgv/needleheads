// the gallery. every photo here is the shop's own, pulled from their facebook and yelp pages.
// to add one: drop name.webp and name-sm.webp into public/images/work and add a line below

export const categories = [
    { id: 'all', label: 'Everything' },
    { id: 'embroidery', label: 'Embroidery' },
    { id: 'hats', label: 'Hats' },
    { id: 'patches', label: 'Patches' },
    { id: 'prints', label: 'Tees & Prints' },
    { id: 'banners', label: 'Banners' }
];

export const work = [
    // ---------- embroidery ----------
    { id: 'mayor-jacket-back', category: 'embroidery', title: 'NYC Mayor jacket', note: 'Full back lettering' },
    { id: 'nypd-commissioner-shield', category: 'embroidery', title: 'Police Commissioner shield', note: 'Gold and royal thread on black' },
    { id: 'mayor-jacket-front', category: 'embroidery', title: 'NYC Mayor jacket, front', note: 'City seal and name, still on the machine' },
    { id: 'nyc-seal', category: 'embroidery', title: 'Seal of the City of New York', note: 'Gold thread on navy' },
    { id: 'nypd-chief-jacket-back', category: 'embroidery', title: 'NYPD Chief of Department Office', note: 'Soft shell jacket, back' },
    { id: 'nypd-chief-shield', category: 'embroidery', title: 'Chief of Department shield', note: 'Four stars, stitched' },
    { id: 'nypd-chief-jacket-front', category: 'embroidery', title: 'NYPD soft shell', note: 'Chest shield and sleeve patches' },
    { id: 'executive-parking-valet', category: 'embroidery', title: 'Executive Parking Valet', note: 'Crest on a work jacket' },
    { id: 'kew-forest-fc', category: 'embroidery', title: 'Kew Forest FC', note: 'Club crest on a warm-up top' },
    { id: 'cafe-bravo-polo', category: 'embroidery', title: 'Cafe Bravo New York', note: 'Staff polo' },
    { id: 'mustang-leather', category: 'embroidery', title: 'Mustang script', note: 'Stitched into leather' },

    // ---------- hats ----------
    { id: 'hat-carlos-pizzeria', category: 'hats', title: "Carlo's Pizzeria", note: 'Trucker cap' },
    { id: 'hat-aldos', category: 'hats', title: "Aldo's, Ozone Park", note: 'Raised lettering' },
    { id: 'hat-laguardia-cafe', category: 'hats', title: 'LaGuardia Cafe', note: 'Structured cap' },
    { id: 'hat-ice-cubes-r-us', category: 'hats', title: 'Ice Cubes R Us', note: 'Snapback' },
    { id: 'hat-nb-landscaping', category: 'hats', title: 'NB Landscaping', note: 'Raised block letters' },
    { id: 'hat-sunshine-auto', category: 'hats', title: "Bob's Sunshine Auto", note: 'Full color logo' },
    { id: 'hat-unlimited-mechanical', category: 'hats', title: 'Unlimited Mechanical', note: 'Arched lettering' },
    { id: 'hat-chip', category: 'hats', title: 'Chip', note: 'Textured patch' },
    { id: 'hat-script-white', category: 'hats', title: 'Tell Me How I Look Now', note: 'White script' },
    { id: 'hat-script-pink', category: 'hats', title: 'Tell Me How I Look Now', note: 'Pink script, teal brim' },
    { id: 'hat-shamrock', category: 'hats', title: 'Shamrock cap', note: "For St. Patrick's Day" },

    // ---------- patches ----------
    { id: 'autism-awareness-patch', category: 'patches', title: 'Autism Awareness shoulder patch', note: 'Police Department, City of New York' },
    { id: 'nypd-autism-shield-patch', category: 'patches', title: 'NYPD shield patch', note: 'Autism Awareness colors' },
    { id: 'community-affairs-polos', category: 'patches', title: 'NYPD Community Affairs Bureau', note: 'Polos with chest and sleeve patches' },

    // ---------- tees and prints ----------
    { id: 'world-cup-tees', category: 'prints', title: 'World Cup 2026 country tees', note: 'Every country available' },
    { id: 'tee-italia', category: 'prints', title: 'Italia', note: 'Country tee' },
    { id: 'tee-sorrentos', category: 'prints', title: "Sorrento's, Long Beach", note: 'Staff tee' },
    { id: 'tee-wooden-spoon', category: 'prints', title: 'I Survived the Wooden Spoon', note: 'Back print' },
    { id: 'tee-deutschland', category: 'prints', title: 'Deutschland', note: 'Country tee' },
    { id: 'tee-albania', category: 'prints', title: 'Albania', note: 'Country tee' },
    { id: 'tee-ukraine', category: 'prints', title: 'Ukraine', note: 'Country tee' },
    { id: 'tee-autism-team-jojo', category: 'prints', title: 'Autism Awareness, Team JoJo', note: 'Team tee' },
    { id: 'tee-is93-dc', category: 'prints', title: 'I.S. 93 DC Expedition', note: 'Class trip tee' },
    { id: 'tee-nacho-groomsmen', category: 'prints', title: 'Nacho Average Groomsmen', note: 'Bachelor party tees' },
    { id: 'tee-nacho-groom', category: 'prints', title: 'Nacho Average Groom', note: 'And one for the groom' },
    { id: 'tee-power', category: 'prints', title: 'Power', note: 'Three color print' },
    { id: 'tee-gran-caffe', category: 'prints', title: 'Gran Caffe Gelateria', note: 'Tees and a matching cap' },
    { id: 'hoodie-inclusion', category: 'prints', title: 'Inclusion, Equality, Human Rights, Peace', note: 'Hoodie back' },
    { id: 'jersey-greenlight', category: 'prints', title: 'Greenlight Energy', note: 'Sponsor print on a club jersey' },
    { id: 'tee-st-patricks', category: 'prints', title: "Happy St. Patrick's Day", note: 'Tee and cap set' },
    { id: 'st-patricks-window', category: 'prints', title: "St. Patrick's Day window", note: 'On display at the shop' },

    // ---------- banners ----------
    { id: 'banner-brooklyn-rays', category: 'banners', title: 'Brooklyn Rays Baseball', note: 'Team banner' }
];

// small helper so pages can grab a few specific pieces by id, in the order asked for
export function pickWork(ids) {
    return ids.map((id) => work.find((item) => item.id === id)).filter(Boolean);
}
