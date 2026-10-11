// the gallery. filter buttons across the top, a grid of photos, and a full screen viewer when one is clicked
import { useCallback, useState } from 'react';
import { categories, work } from '../data/work.js';
import CallToAction from '../components/ui/CallToAction.jsx';
import Lightbox from '../components/ui/Lightbox.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import Photo from '../components/ui/Photo.jsx';

export default function WorkView() {
    const [category, setCategory] = useState('all');
    const [openIndex, setOpenIndex] = useState(null);

    const visible = category === 'all' ? work : work.filter((item) => item.category === category);

    const close = useCallback(() => setOpenIndex(null), []);

    // step forward or back, wrapping around at either end
    const move = useCallback(
        (step) => {
            setOpenIndex((current) => (current + step + visible.length) % visible.length);
        },
        [visible.length]
    );

    function pick(id) {
        setCategory(id);
        setOpenIndex(null);
    }

    return (
        <>
            <PageHeader eyebrow="Our work" title="Fresh off the machines.">
                A jacket for the Mayor, hats for the pizzeria down the block, tees for the bachelor party. Every photo here is a real job that left our shop.
            </PageHeader>

            <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                {/* ---------- filters ---------- */}
                <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter the gallery">
                    {categories.map((item) => {
                        const active = item.id === category;
                        const count = item.id === 'all' ? work.length : work.filter((piece) => piece.category === item.id).length;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => pick(item.id)}
                                aria-pressed={active}
                                className={`rounded-full px-5 py-2.5 font-extrabold transition stitch-tight ${active ? 'bg-navy-900 text-canvas-50 outline-canvas-50/40' : 'bg-white/70 text-navy-900 outline-navy-900/20 hover:bg-white'}`}
                            >
                                {item.label}
                                <span className={`ml-2 text-sm ${active ? 'text-thread-400' : 'text-ink/45'}`}>{count}</span>
                            </button>
                        );
                    })}
                </div>

                {/* ---------- grid ---------- */}
                <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                    {visible.map((item, index) => (
                        <li key={item.id}>
                            <button type="button" onClick={() => setOpenIndex(index)} className="group block w-full text-left" aria-label={`View larger: ${item.title}`}>
                                <span className="block overflow-hidden rounded-[1.5rem] bg-canvas-100">
                                    <Photo
                                        src={`work/${item.id}`}
                                        alt={`${item.title}. ${item.note}`}
                                        sizes="(min-width: 1024px) 260px, (min-width: 768px) 33vw, 50vw"
                                        className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                                    />
                                </span>
                                <span className="mt-3 block font-extrabold leading-snug text-navy-900 group-hover:text-sign-500">{item.title}</span>
                                <span className="block text-sm text-ink/60">{item.note}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {openIndex !== null && <Lightbox items={visible} index={openIndex} onClose={close} onMove={move} />}

            <CallToAction title="Want yours on this page?" />
        </>
    );
}
