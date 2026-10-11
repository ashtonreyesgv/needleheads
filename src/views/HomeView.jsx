// home page. top to bottom: hero with the storefront, what they make, the city work, the hat wall,
// who they make things for, country tees, reviews, and how to find the shop
import { Link } from 'react-router-dom';
import { business, reviews } from '../data/business.js';
import { homeServiceIds, services } from '../data/services.js';
import { pickWork } from '../data/work.js';
import Awning from '../components/ui/Awning.jsx';
import Button from '../components/ui/Button.jsx';
import Hoop from '../components/ui/Hoop.jsx';
import Icon from '../components/ui/Icon.jsx';
import OpenBadge from '../components/ui/OpenBadge.jsx';
import Photo from '../components/ui/Photo.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const homeServices = homeServiceIds.map((id) => services.find((service) => service.id === id));

const hatWall = pickWork([
    'hat-carlos-pizzeria',
    'hat-aldos',
    'hat-laguardia-cafe',
    'hat-ice-cubes-r-us',
    'hat-nb-landscaping',
    'hat-sunshine-auto',
    'hat-unlimited-mechanical',
    'hat-chip'
]);

const audiences = [
    {
        title: 'Shops and crews',
        body: 'Hats, polos, aprons and tees so your staff looks like a team and your name gets around.',
        image: 'work/tee-gran-caffe',
        alt: 'I love Gran Caffe Gelateria tees in black and white with a matching cap',
        to: '/services',
        link: 'See services'
    },
    {
        title: 'Schools',
        body: 'Uniform polos, gym tees, hoodies and class trip shirts for schools around Queens.',
        image: 'schools/ps82-hoodie',
        alt: 'Gray P.S. 82 Lions pullover hoodie',
        to: '/schools-teams',
        link: 'School gear'
    },
    {
        title: 'Teams and leagues',
        body: 'Jerseys, warm-ups and hats with names, numbers and sponsors. Banners for the champs.',
        image: 'work/kew-forest-fc',
        alt: 'Blue quarter zip warm-up top with an embroidered Kew Forest FC crest',
        to: '/schools-teams',
        link: 'Team gear'
    },
    {
        title: 'Parties and events',
        body: 'Bachelor and bridal parties, birthdays, family reunions, walks and fundraisers.',
        image: 'work/tee-nacho-groom',
        alt: 'White tee that reads Nacho Average Groom under a sombrero',
        to: '/work',
        link: 'See examples'
    }
];

export default function HomeView() {
    return (
        <>
            {/* ---------- hero ---------- */}
            <section className="weave">
                <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.02fr_1fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
                    <div>
                        <p className="mb-5 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] text-sign-500">
                            <span aria-hidden="true" className="w-9 border-t-[3px] border-dashed border-current" />
                            {business.neighborhood}
                        </p>
                        <h1 className="text-[3.1rem] leading-[0.98] text-navy-900 sm:text-7xl lg:text-[4.4rem] xl:text-[5rem]">
                            <span className="block whitespace-nowrap">Your logo.</span>
                            <span className="block whitespace-nowrap text-sign-500">Our needles.</span>
                        </h1>
                        <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink/75">
                            Custom embroidery, silk screening, patches and heat transfers, made in our shop on Myrtle Ave. Bring a logo, a sketch, or just an idea.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Button to="/contact">
                                Get a quote
                                <Icon name="arrow" />
                            </Button>
                            <Button to="/work" variant="navy">
                                See our work
                            </Button>
                        </div>
                        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                            <OpenBadge />
                            <p className="text-sm font-bold text-navy-900/70">Family owned since {business.since}</p>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="rotate-[1.5deg] rounded-[2.25rem] bg-canvas-50 p-4 shadow-[0_34px_60px_-34px_rgb(12_18_48/0.7)] stitch outline-navy-900/25">
                            <Photo
                                src="shop/storefront"
                                alt="The Needleheads storefront on Myrtle Ave: red letters over a navy awning, with custom tees and a neon Your Logo sign in the window"
                                sizes="(min-width: 1024px) 560px, 100vw"
                                eager
                                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                            />
                        </div>
                        <a
                            href={business.directionsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute -bottom-7 left-3 -rotate-3 rounded-2xl bg-sign-500 px-5 py-3 text-canvas-50 shadow-[0_14px_24px_-12px_rgb(168_22_28/0.9)] transition stitch-tight outline-canvas-50/55 hover:-rotate-1 sm:left-6"
                        >
                            <span className="block text-xs font-extrabold uppercase tracking-[0.16em] text-canvas-50/80">Find us at</span>
                            <span className="block font-display text-2xl leading-tight">{business.street}</span>
                        </a>
                    </div>
                </div>
                <Awning />
            </section>

            {/* ---------- services ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <SectionHeading eyebrow="What we make" title="Stitched, printed and pressed under one roof.">
                    One shop for the hats, the shirts, the patches and the banner, all made on our own machines in Glendale.
                </SectionHeading>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {homeServices.map((service) => (
                        <li key={service.id} className="group relative rounded-[1.75rem] bg-white/70 p-7 transition duration-200 stitch outline-navy-900/15 hover:-translate-y-1 hover:bg-white hover:outline-sign-500/50">
                            <Hoop src={service.image} alt="" className="w-24" />
                            <h3 className="mt-6 text-2xl text-navy-900">{service.name}</h3>
                            <p className="mt-2 leading-relaxed text-ink/75">{service.short}</p>
                            <Link to={`/services#${service.id}`} className="mt-5 inline-flex items-center gap-2 font-extrabold text-sign-500 after:absolute after:inset-0 after:rounded-[1.75rem]">
                                Learn more
                                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- city work ---------- */}
            <section className="denim">
                <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:items-center">
                    <div>
                        <SectionHeading tone="dark" eyebrow="Stitched for the city" title="If we can get the city seal right, we can get your logo right.">
                            A jacket lettered for the Mayor of New York. Shields for the NYPD Chief of Department and the Police Commissioner. Autism Awareness patches for the Community Affairs Bureau. Your crew&apos;s polos get the same machines and the same care.
                        </SectionHeading>
                        <div className="mt-9">
                            <Button to="/work" variant="gold">
                                See more of our work
                                <Icon name="arrow" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <figure className="row-span-2">
                            <Photo src="work/mayor-jacket-back" alt="Navy jacket with NYC Mayor stitched across the back in gold, lying under a Tajima embroidery machine" className="h-full w-full rounded-[1.75rem] object-cover" />
                        </figure>
                        <figure>
                            <Photo src="work/nypd-commissioner-shield" alt="Close up of an embroidered gold and blue Police Commissioner shield" className="aspect-square w-full rounded-[1.75rem] object-cover" />
                        </figure>
                        <figure>
                            <Photo src="work/nyc-seal" alt="Close up of the Seal of the City of New York embroidered in gold thread on navy" className="aspect-square w-full rounded-[1.75rem] object-cover" />
                        </figure>
                    </div>
                </div>
            </section>

            {/* ---------- hat wall ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading eyebrow="Neighborhood regulars" title="The hat wall.">
                        Pizzerias, cafes, landscapers and auto shops. A few of the caps that have come off our machines, photographed right where they were stitched.
                    </SectionHeading>
                    <Link to="/work" className="inline-flex items-center gap-2 font-extrabold text-sign-500 hover:text-sign-600">
                        See everything
                        <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                </div>

                <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
                    {hatWall.map((hat) => (
                        <li key={hat.id}>
                            <Photo src={`work/${hat.id}`} alt={`Embroidered cap for ${hat.title}`} sizes="(min-width: 768px) 260px, 50vw" className="aspect-square w-full rounded-[1.5rem] object-cover" />
                            <p className="mt-3 font-extrabold text-navy-900">{hat.title}</p>
                            <p className="text-sm text-ink/60">{hat.note}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- who it's for ---------- */}
            <section className="weave">
                <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                    <SectionHeading eyebrow="Who we make things for" title="From the groom's party to the whole school." />

                    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {audiences.map((audience) => (
                            <li key={audience.title} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-canvas-50 shadow-[0_18px_30px_-24px_rgb(12_18_48/0.5)]">
                                <div className="bg-white">
                                    <Photo src={audience.image} alt={audience.alt} sizes="(min-width: 1024px) 270px, 50vw" className="aspect-[4/3] w-full object-cover" />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-2xl text-navy-900">{audience.title}</h3>
                                    <p className="mt-2 flex-1 leading-relaxed text-ink/75">{audience.body}</p>
                                    <Link to={audience.to} className="mt-5 inline-flex items-center gap-2 font-extrabold text-sign-500 after:absolute after:inset-0">
                                        {audience.link}
                                        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- country tees ---------- */}
            <section className="bg-sign-500 text-canvas-50">
                <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
                    <div className="-rotate-1 rounded-[2rem] bg-canvas-50 p-4 shadow-[0_30px_50px_-30px_rgb(0_0_0/0.7)] stitch outline-navy-900/25">
                        <Photo
                            src="work/world-cup-tees"
                            alt="Eight country tees laid out on a table: Haiti, Mexico, Ecuador, Uzbekistan, Brasil, USA, Argentina and Colombia"
                            sizes="(min-width: 1024px) 600px, 100vw"
                            className="aspect-[2/1] w-full rounded-[1.25rem] object-cover"
                        />
                    </div>
                    <div>
                        <p className="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] text-thread-300">
                            <span aria-hidden="true" className="w-9 border-t-[3px] border-dashed border-current" />
                            Country tees
                        </p>
                        <h2 className="text-4xl leading-[1.05] sm:text-5xl">Every country. Even the ones that did not qualify.</h2>
                        <p className="mt-5 text-lg leading-relaxed text-canvas-50/90">
                            World Cup, Euros, or just pride in where your family is from. We have every country available, and if yours missed the tournament we can still make it.
                        </p>
                        <div className="mt-8">
                            <Button to="/contact" variant="cream">
                                Ask about yours
                                <Icon name="arrow" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- reviews ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-stretch">
                    <div className="rounded-[1.75rem] bg-navy-900 px-10 py-10 text-center text-canvas-50 stitch outline-canvas-50/25">
                        <p className="font-display text-8xl leading-none text-thread-400">{reviews.facebook.recommend}%</p>
                        <p className="mt-3 text-lg font-bold">recommend us on Facebook</p>
                        <p className="text-sm text-canvas-50/65">{reviews.facebook.count} reviews</p>
                    </div>

                    <figure className="flex flex-col justify-center rounded-[1.75rem] bg-white/70 p-8 stitch outline-navy-900/15 sm:p-10">
                        <blockquote className="font-display text-3xl leading-snug text-navy-900 sm:text-4xl">&ldquo;Their attention to detail and creativity are unmatched.&rdquo;</blockquote>
                        <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4">
                            <span className="font-bold text-ink/60">From a Google review</span>
                            <span className="flex flex-wrap gap-x-6 gap-y-2 font-extrabold text-sign-500">
                                <a href={reviews.google.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sign-600">
                                    Read {reviews.google.count} Google reviews
                                    <Icon name="arrow" className="h-4 w-4" />
                                </a>
                                <a href={reviews.facebook.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sign-600">
                                    Facebook reviews
                                    <Icon name="arrow" className="h-4 w-4" />
                                </a>
                            </span>
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* ---------- visit ---------- */}
            <section className="denim">
                <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeading tone="dark" eyebrow="Come by" title="Look for the red letters and the navy awning.">
                            We are on Myrtle Ave in Glendale. Walk in with whatever you have and we will figure it out at the counter.
                        </SectionHeading>

                        <dl className="mt-9 grid gap-5 text-canvas-50">
                            <div className="flex gap-4">
                                <dt className="mt-0.5 text-thread-400">
                                    <Icon name="pin" />
                                    <span className="sr-only">Address</span>
                                </dt>
                                <dd className="text-lg">
                                    {business.street}, {business.city}, {business.state} {business.zip}
                                </dd>
                            </div>
                            <div className="flex gap-4">
                                <dt className="mt-0.5 text-thread-400">
                                    <Icon name="clock" />
                                    <span className="sr-only">Hours</span>
                                </dt>
                                <dd className="text-lg">
                                    Monday to Friday, 10am to 6pm
                                    <span className="block text-base text-denim-100/70">Closed Saturday and Sunday</span>
                                </dd>
                            </div>
                            <div className="flex gap-4">
                                <dt className="mt-0.5 text-thread-400">
                                    <Icon name="phone" />
                                    <span className="sr-only">Phone</span>
                                </dt>
                                <dd className="text-lg">
                                    <a href={business.phoneHref} className="underline decoration-dashed decoration-2 underline-offset-4 hover:text-thread-300">
                                        {business.phone}
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Button href={business.directionsUrl} variant="red">
                                Get directions
                                <Icon name="arrow" />
                            </Button>
                            <Button to="/contact" variant="cream">
                                Send us your idea
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-canvas-50 p-4 stitch outline-navy-900/25">
                        <iframe src={business.mapEmbedUrl} title="Map showing Needleheads at 88-01 Myrtle Ave, Glendale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-[1.25rem] border-0 sm:h-96" />
                    </div>
                </div>
            </section>
        </>
    );
}
