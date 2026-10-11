// services page. every service gets its own row with a photo, and each row has an id so the
// home page cards can link straight to it (like /services#patches)
import { services, steps } from '../data/services.js';
import CallToAction from '../components/ui/CallToAction.jsx';
import Icon from '../components/ui/Icon.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import Photo from '../components/ui/Photo.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function ServicesView() {
    return (
        <>
            <PageHeader eyebrow="Services" title="Stitched, printed and pressed. All in one shop.">
                Whatever it needs to go on, there is a good chance we already do it. Here is the full list, with a real piece from our shop next to each one.
            </PageHeader>

            {/* ---------- the list ---------- */}
            <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                <div className="grid gap-16 sm:gap-20">
                    {services.map((service, index) => (
                        <article key={service.id} id={service.id} className="grid scroll-mt-28 gap-8 md:grid-cols-2 md:items-center md:gap-14">
                            {/* photo flips sides every other row */}
                            <div className={`rounded-[2rem] bg-white/70 p-4 stitch outline-navy-900/20 ${index % 2 === 1 ? 'md:order-2 md:rotate-1' : 'md:-rotate-1'}`}>
                                <Photo src={service.image} alt={service.imageAlt} sizes="(min-width: 768px) 520px, 100vw" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                            </div>

                            <div>
                                <p className="font-display text-xl text-sign-500">{String(index + 1).padStart(2, '0')}</p>
                                <h2 className="mt-1 text-4xl leading-tight text-navy-900">{service.name}</h2>
                                <p className="mt-4 text-lg leading-relaxed text-ink/75">{service.long}</p>
                                <ul className="mt-6 grid gap-2.5">
                                    {service.goodFor.map((item) => (
                                        <li key={item} className="flex items-start gap-3 font-bold text-navy-900">
                                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-thread-400 text-navy-950">
                                                <Icon name="check" className="h-3.5 w-3.5" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ---------- how it works ---------- */}
            <section className="weave">
                <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
                    <SectionHeading eyebrow="How it works" title="From a thought to a finished piece." />

                    <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <li key={step.title} className="rounded-[1.75rem] bg-canvas-50 p-7 stitch outline-navy-900/15">
                                <span className="grid h-12 w-12 place-items-center rounded-full bg-sign-500 font-display text-xl text-canvas-50">{index + 1}</span>
                                <h3 className="mt-5 text-2xl leading-tight text-navy-900">{step.title}</h3>
                                <p className="mt-3 leading-relaxed text-ink/75">{step.body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <CallToAction title="Not sure which one you need?">Most people are not. Tell us what you are making and what it goes on, and we will point you to the right method.</CallToAction>
        </>
    );
}
