// everything factual about the shop in one place. if the phone, hours or a link changes, change it here
// and every page picks it up. where each fact came from is written up in research/notes.md

export const business = {
    name: 'Needleheads',
    fullName: 'Needleheads Custom Embroidery',

    // yelp says 1993 and their instagram bio says 1998, so the site just says "the '90s" until they confirm
    since: "the '90s",

    street: '88-01 Myrtle Ave',
    city: 'Glendale',
    state: 'NY',
    zip: '11385',
    neighborhood: 'Glendale, Queens',

    phone: '(718) 850-4252',
    phoneHref: 'tel:+17188504252',
    email: 'needleheadsnyc@gmail.com',

    mapsUrl: 'https://www.google.com/maps/place/Needleheads/@40.7030945,-73.8585929,17z/data=!4m6!3m5!1s0x89c25e0eb3080b93:0x85a34f99425b599b!8m2!3d40.7030945!4d-73.8585929!16s%2Fg%2F1td18ryv',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Needleheads%2C+88-01+Myrtle+Ave%2C+Glendale%2C+NY+11385',
    mapEmbedUrl: 'https://www.google.com/maps?q=Needleheads%2C+88-01+Myrtle+Ave%2C+Glendale%2C+NY+11385&z=16&output=embed'
};

// 24 hour clock, new york time. null means closed that day.
// index matches Date.getDay(), so 0 is sunday
export const hours = [
    { day: 'Sunday', short: 'Sun', open: null, close: null },
    { day: 'Monday', short: 'Mon', open: 10, close: 18 },
    { day: 'Tuesday', short: 'Tue', open: 10, close: 18 },
    { day: 'Wednesday', short: 'Wed', open: 10, close: 18 },
    { day: 'Thursday', short: 'Thu', open: 10, close: 18 },
    { day: 'Friday', short: 'Fri', open: 10, close: 18 },
    { day: 'Saturday', short: 'Sat', open: null, close: null }
];

export const socials = [
    {
        id: 'facebook',
        label: 'Facebook',
        handle: 'Needleheads Custom Embroidery',
        url: 'https://www.facebook.com/NeedleheadsCustomEmbroidery/'
    },
    {
        id: 'instagram',
        label: 'Instagram',
        handle: '@needleheadsnyc',
        url: 'https://www.instagram.com/needleheadsnyc/'
    },
    {
        id: 'yelp',
        label: 'Yelp',
        handle: 'Needleheads on Yelp',
        url: 'https://www.yelp.com/biz/needleheads-custom-embroidery-glendale'
    },
    {
        id: 'google',
        label: 'Google Maps',
        handle: 'Find us on Google',
        url: business.mapsUrl
    }
];

// numbers as of october 2026
export const reviews = {
    facebook: { recommend: 94, count: 16, url: 'https://www.facebook.com/NeedleheadsCustomEmbroidery/reviews' },
    google: { count: 68, url: business.mapsUrl }
};

export const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Our Work' },
    { to: '/schools-teams', label: 'Schools & Teams' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
];
