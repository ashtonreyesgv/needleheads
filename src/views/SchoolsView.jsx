// schools and teams page. top half is the school gear from their old online store,
// bottom half is team uniforms
import { business } from '../data/business.js';
import { schools, teamReasons } from '../data/schools.js';
import Button from '../components/ui/Button.jsx';
import CallToAction from '../components/ui/CallToAction.jsx';
import Icon from '../components/ui/Icon.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import Photo from '../components/ui/Photo.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

const teamPhotos = [
    { src: 'work/kew-forest-fc', alt: 'Blue warm-up top with an embroidered Kew Forest FC crest', caption: 'Kew Forest FC warm-up top' },
    { src: 'work/jersey-greenlight', alt: 'Blue soccer jersey with a Greenlight Energy sponsor print', caption: 'Sponsor print on a club jersey' },
    // these two are wide, so they get shown whole instead of cropped to fill the square
    { src: 'schools/ps82-soccer', alt: 'Red P.S. 82 soccer shirt, front and back, with Go Lions Go and the number 73', caption: 'P.S. 82 soccer, name and number', whole: true },
    { src: 'work/banner-brooklyn-rays', alt: 'Printed Brooklyn Rays Baseball team banner', caption: 'Brooklyn Rays team banner', whole: true }
];

export default function SchoolsView() {
    return (
        <>
            <PageHeader eyebrow="Schools & teams" title="Uniforms for the classroom and the field.">
                School polos, gym tees and hoodies. Jerseys, warm-ups and banners. If it has a crest, a mascot or a roster, we would love to make it.
            </PageHeader>

            {/* ---------- schools ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <SectionHeading eyebrow="School uniforms" title="Gear for Queens schools.">
                    We make uniform and spirit wear for schools around Queens. Here are three we have outfitted, and some of what we make for each.
                </SectionHeading>

                <div className="mt-12 grid gap-8">
                    {schools.map((school) => (
                        <article key={school.id} className="rounded-[2rem] bg-white/70 p-6 stitch outline-navy-900/15 sm:p-9">
                            <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <h3 className="text-4xl text-navy-900">{school.name}</h3>
                                <p className="text-lg font-bold text-sign-500">{school.nickname}</p>
                            </header>

                            <ul className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
                                {school.items.map((item) => (
                                    <li key={item.image}>
                                        {/* the mockups have white backgrounds, so they sit on white and get shown whole */}
                                        <div className="rounded-[1.25rem] bg-white p-4 ring-1 ring-navy-900/8">
                                            <Photo src={item.image} alt={`${school.name} ${item.name.toLowerCase()}`} sizes="(min-width: 768px) 230px, 45vw" className="aspect-square w-full object-contain" />
                                        </div>
                                        <p className="mt-3 font-extrabold text-navy-900">{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-navy-900 p-8 text-canvas-50 stitch outline-canvas-50/25">
                        <h3 className="text-3xl">Parents</h3>
                        <p className="mt-3 leading-relaxed text-denim-100/85">Call or stop by for sizes, pricing and what your school needs this year.</p>
                        <div className="mt-6">
                            <Button href={business.phoneHref} variant="gold">
                                <Icon name="phone" />
                                {business.phone}
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-[1.75rem] bg-sign-500 p-8 text-canvas-50 stitch outline-canvas-50/40">
                        <h3 className="text-3xl">Schools and PTAs</h3>
                        <p className="mt-3 leading-relaxed text-canvas-50/90">Do not see your school? We can set up uniforms, staff shirts and class trip tees for you too. Send us your crest and we will get started.</p>
                        <div className="mt-6">
                            <Button to="/contact" variant="cream">
                                Start a school order
                                <Icon name="arrow" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- teams ---------- */}
            <section className="denim">
                <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                    <SectionHeading tone="dark" eyebrow="Team uniforms" title="From tee ball to the adult league.">
                        Matching shirts for the whole roster, whatever the age and whatever the sport. Family reunions and company outings count as teams too.
                    </SectionHeading>

                    <ul className="mt-12 grid gap-5 md:grid-cols-3">
                        {teamReasons.map((reason) => (
                            <li key={reason.title} className="rounded-[1.75rem] bg-canvas-50/8 p-7 stitch outline-canvas-50/20">
                                <h3 className="text-2xl text-thread-400">{reason.title}</h3>
                                <p className="mt-3 leading-relaxed text-denim-100/85">{reason.body}</p>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
                        {teamPhotos.map((photo) => (
                            <li key={photo.src}>
                                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                                    <Photo src={photo.src} alt={photo.alt} sizes="(min-width: 1024px) 260px, 50vw" className={`aspect-square w-full ${photo.whole ? 'object-contain p-3' : 'object-cover'}`} />
                                </div>
                                <p className="mt-3 font-bold text-canvas-50">{photo.caption}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CallToAction title="Season starting soon?">Send us the roster, the colors and the date of your first game. We will tell you what we can do and what it will cost.</CallToAction>
        </>
    );
}
