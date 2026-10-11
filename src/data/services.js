// what the shop does. the home page shows the short line, the services page shows everything.
// image paths are relative to public/images and leave off the extension (see components/ui/Photo.jsx)

export const services = [
    {
        id: 'embroidery',
        name: 'Custom Embroidery',
        short: 'Logos, names and crests stitched into polos, jackets, bags and more.',
        long: 'This is what the shop is named for. Your logo gets turned into a stitch file, then sewn on our multi-head machines, so the first piece matches the fiftieth. We stitch on polos, jackets, fleece, bags and even leather.',
        goodFor: ['Staff polos and work jackets', 'Left chest logos and full backs', 'Names and monograms', 'Leather, including car interiors'],
        image: 'work/mayor-jacket-front',
        imageAlt: 'A navy jacket with a gold embroidered city seal, laid out under an embroidery machine'
    },
    {
        id: 'hats',
        name: 'Hats & Caps',
        short: 'Snapbacks, truckers and dad hats with your logo front and center.',
        long: 'Hats are a big part of what comes off our machines. Flat, raised or script lettering, stitched straight into the crown so it holds its shape and survives real work days.',
        goodFor: ['Restaurant and shop crews', 'Landscapers, mechanics and trades', 'Brands and merch', 'Events and giveaways'],
        image: 'work/hat-carlos-pizzeria',
        imageAlt: "A navy trucker hat embroidered with the Carlo's Pizzeria logo, sitting on the embroidery machine"
    },
    {
        id: 'silk-screening',
        name: 'Silk Screening',
        short: 'Bold prints that hold up in the wash. Built for bigger runs.',
        long: 'The classic way to print a stack of shirts. Ink is pushed through a screen right into the fabric, which keeps colors solid and the price per shirt friendly as the order grows.',
        goodFor: ['Team and school shirts', 'Fundraisers and events', 'Staff and business tees', 'Hoodies and sweats'],
        image: 'work/tee-sorrentos',
        imageAlt: "A black tee printed with the Sorrento's Long Beach logo in red"
    },
    {
        id: 'heat-transfers',
        name: 'Heat Transfers',
        short: 'Names, numbers and full color art, pressed on. Great for small batches.',
        long: 'When every piece needs to be a little different, or the art has a lot of color, we press it on. It is how most party shirts and name and number jerseys get made.',
        goodFor: ['Names and numbers', 'Birthday, bachelor and bridal party tees', 'Small batches', 'Full color designs'],
        image: 'work/tee-nacho-groomsmen',
        imageAlt: 'A white tee that reads Nacho Average Groomsmen under a sombrero graphic'
    },
    {
        id: 'patches',
        name: 'Custom Patches',
        short: 'Embroidered patches for uniforms, clubs, schools and causes.',
        long: 'Shields, crests, name tapes and one of a kind designs. We made the Autism Awareness patches on the NYPD Community Affairs Bureau polos, so detail work does not scare us.',
        goodFor: ['Uniform and shoulder patches', 'School and club crests', 'Awareness and memorial patches', 'Jackets, vests and bags'],
        image: 'work/autism-awareness-patch',
        imageAlt: 'A multicolor Police Department Autism Awareness shoulder patch sewn onto a blue polo'
    },
    {
        id: 'banners',
        name: 'Banners, Signs & Stickers',
        short: 'Championship banners, signs and stickers to go with the shirts.',
        long: 'Your team has the jerseys, now hang something on the fence. We print banners for teams and leagues, signs for storefronts and events, and stickers for everything else.',
        goodFor: ['Team and league banners', 'Storefront and event signs', 'Stickers and decals'],
        image: 'work/banner-brooklyn-rays',
        imageAlt: 'A printed Brooklyn Rays Baseball team banner'
    },
    {
        id: 'logo-help',
        name: 'Digitizing & Logo Help',
        short: 'No clean logo file? Bring a sketch, a photo or a business card.',
        long: 'Plenty of people walk in with an idea and nothing else. We help get it from a thought to something that stitches and prints well.',
        goodFor: ['Turning a logo into a stitch file', 'Cleaning up old or blurry artwork', 'Starting from a sketch or an idea'],
        image: 'shop/shop-floor',
        imageAlt: 'Four embroidery machine heads stitching tan caps inside the Needleheads shop'
    }
];

// the six that show up on the home page, in this order
export const homeServiceIds = ['embroidery', 'silk-screening', 'patches', 'hats', 'heat-transfers', 'banners'];

// kept loose on purpose. no turnaround times or minimums until the shop confirms them
export const steps = [
    {
        title: 'Bring it in or send it over',
        body: 'A logo file, a sketch, a photo of something you like, or just an idea. Stop by the shop, call, or email it to us.'
    },
    {
        title: 'We sort out the details',
        body: 'What it goes on, which colors, where it sits and how many you need. Then we give you a price.'
    },
    {
        title: 'We make it here',
        body: 'Stitched or printed on our own machines in Glendale. Have a deadline? Tell us up front and we will tell you what is possible.'
    },
    {
        title: 'Pick it up on Myrtle Ave',
        body: 'Come grab your order at 88-01 Myrtle Ave. Need it brought to you? Ask us about delivery.'
    }
];
