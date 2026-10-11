// about page. the story, the machines, and the neighborhood stuff they post about
import { business } from '../data/business.js';
import CallToAction from '../components/ui/CallToAction.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import Photo from '../components/ui/Photo.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const facts = [
    { big: "'90s", small: 'Family owned since the' },
    { big: '88-01', small: 'Myrtle Ave, Glendale' },
    { big: '10 to 6', small: 'Monday through Friday' }
];

const neighborhood = [
    {
        image: 'work/community-affairs-polos',
        alt: 'Two light blue NYPD Community Affairs Bureau polos with Autism Awareness patches',
        title: 'Autism Awareness Month',
        body: 'April means puzzle piece colors. We stitched the Autism Awareness shields and shoulder patches on these NYPD Community Affairs Bureau polos.'
    },
    {
        image: 'work/st-patricks-window',
        alt: "Green St. Patrick's Day tees and shamrock caps on display in the shop window",
        title: 'The window changes with the calendar',
        body: "St. Patrick's Day, the Euros, the World Cup. Walk past and you can tell what time of year it is by what is hanging up."
    },
    {
        image: 'work/tee-autism-team-jojo',
        alt: 'Blue Autism Awareness Team JoJo tee on a form in front of the painted Needleheads wall',
        title: 'Shirts for the people you show up for',
        body: 'Awareness walks, fundraisers and family events. Some of our favorite jobs are the ones made for one family or one cause.'
    }
];

export default function AboutView() {
    return (
        <>
            <PageHeader eyebrow="About" title="A family shop on Myrtle Ave.">
                {business.fullName} is a small, family owned embroidery and print shop in {business.neighborhood}. We have been at it since {business.since}.
            </PageHeader>

            {/* ---------- story ---------- */}
            <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
                <div className="rotate-1 rounded-[2rem] bg-white/70 p-4 stitch outline-navy-900/20">
                    <Photo
                        src="shop/shop-floor"
                        alt="Inside the shop: a row of embroidery machine heads stitching tan caps, with the Needleheads name painted on the wall above"
                        sizes="(min-width: 1024px) 540px, 100vw"
                        eager
                        className="w-full rounded-[1.25rem]"
                    />
                </div>

                <div>
                    <SectionHeading eyebrow="Our story" title="Best product we can make, on time." />
                    <div className="mt-6 grid gap-5 text-lg leading-relaxed text-ink/75">
                        <p>
                            That has been the whole idea from day one. Put out the best product possible, get it done when we said we would, and make even the tricky jobs come out great.
                        </p>
                        <p>
                            Everything is made right here in the shop. Our multi-head embroidery machines can run a row of hats at once, which is how a pizzeria gets a full crew outfitted without every cap coming out a little different.
                        </p>
                        <p>
                            People walk in with a finished logo, a napkin sketch, or a photo on their phone. All of those work. Helping somebody take a logo from a thought to a finished piece is the best part of the job.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- quick facts ---------- */}
            <section className="denim">
                <ul className="mx-auto grid max-w-6xl gap-10 px-5 py-16 text-center sm:grid-cols-3">
                    {facts.map((fact) => (
                        <li key={fact.big}>
                            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-denim-100/70">{fact.small}</p>
                            <p className="mt-2 font-display text-6xl text-thread-400">{fact.big}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- neighborhood ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <SectionHeading eyebrow="In the neighborhood" title="Part of the block, not just on it." />

                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                    {neighborhood.map((item) => (
                        <li key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white/70 shadow-[0_18px_30px_-24px_rgb(12_18_48/0.5)]">
                            <Photo src={item.image} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
                            <div className="p-7">
                                <h3 className="text-2xl leading-tight text-navy-900">{item.title}</h3>
                                <p className="mt-3 leading-relaxed text-ink/75">{item.body}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- storefront ---------- */}
            <section className="weave">
                <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                    <figure className="-rotate-[0.6deg] rounded-[2.25rem] bg-canvas-50 p-4 stitch outline-navy-900/25">
                        <Photo
                            src="shop/storefront"
                            alt="The Needleheads storefront with its red sign and navy awning reading Embroidery, Silk Screening, Patches"
                            sizes="(min-width: 1024px) 1100px, 100vw"
                            className="aspect-[16/9] w-full rounded-[1.5rem] object-cover"
                        />
                        <figcaption className="px-3 pb-2 pt-5 text-center font-display text-2xl text-navy-900">Red letters, navy awning, neon shirt in the window. You cannot miss us.</figcaption>
                    </figure>
                </div>
            </section>

            <CallToAction title="Come say hi.">We are at {business.street}, Monday to Friday, 10am to 6pm. Or send your idea over any time.</CallToAction>
        </>
    );
}
