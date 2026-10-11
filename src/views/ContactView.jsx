// contact page. the quote form hands off to the visitor's own mail app (see utils/quoteEmail.js),
// which has a nice side effect: they can attach their logo before sending
import { useState } from 'react';
import { business, hours, socials } from '../data/business.js';
import { services } from '../data/services.js';
import { formatHour, getOpenStatus } from '../utils/hours.js';
import { buildQuoteEmail } from '../utils/quoteEmail.js';
import Button from '../components/ui/Button.jsx';
import Icon from '../components/ui/Icon.jsx';
import OpenBadge from '../components/ui/OpenBadge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const blank = { name: '', phone: '', service: '', quantity: '', neededBy: '', details: '' };

// monday first reads better than sunday first on a hours list
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

const field = 'mt-2 w-full rounded-2xl border-2 border-navy-900/15 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-navy-900';
const label = 'block text-sm font-extrabold uppercase tracking-[0.12em] text-navy-900';

export default function ContactView() {
    const [form, setForm] = useState(blank);
    const [sent, setSent] = useState(false);
    const [today] = useState(() => getOpenStatus().dayIndex);

    function update(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        window.location.href = buildQuoteEmail(form, business.email);
        setSent(true);
    }

    return (
        <>
            <PageHeader eyebrow="Contact" title="Let's make something.">
                Tell us what you have in mind, call the shop, or just walk in. Whichever is easiest for you.
            </PageHeader>

            <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-start">
                {/* ---------- quote form ---------- */}
                <form onSubmit={submit} className="rounded-[2rem] bg-white/70 p-7 stitch outline-navy-900/15 sm:p-10">
                    <h2 className="text-4xl text-navy-900">Get a quote</h2>
                    <p className="mt-3 leading-relaxed text-ink/70">Fill in what you know. Rough answers are fine.</p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className={label}>
                                Your name
                            </label>
                            <input id="name" name="name" value={form.name} onChange={update} required autoComplete="name" className={field} />
                        </div>
                        <div>
                            <label htmlFor="phone" className={label}>
                                Phone
                            </label>
                            <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" placeholder="(718) 555-0123" className={field} />
                        </div>
                        <div>
                            <label htmlFor="service" className={label}>
                                What do you need?
                            </label>
                            <select id="service" name="service" value={form.service} onChange={update} className={field}>
                                <option value="">Not sure yet</option>
                                {services.map((service) => (
                                    <option key={service.id} value={service.name}>
                                        {service.name}
                                    </option>
                                ))}
                                <option value="School or team uniforms">School or team uniforms</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="quantity" className={label}>
                                About how many?
                            </label>
                            <input id="quantity" name="quantity" value={form.quantity} onChange={update} placeholder="24 hats, 2 shirts..." className={field} />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="neededBy" className={label}>
                                Need it by a certain date?
                            </label>
                            <input id="neededBy" name="neededBy" type="date" value={form.neededBy} onChange={update} className={field} />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="details" className={label}>
                                Tell us about it
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                value={form.details}
                                onChange={update}
                                required
                                rows={5}
                                placeholder="What it goes on, colors, where the logo sits, anything else we should know."
                                className={field}
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <Button type="submit">
                            Open my email to send
                            <Icon name="arrow" />
                        </Button>
                        <p className="max-w-xs text-sm leading-relaxed text-ink/60">This opens your email app with everything filled in, so you can attach your logo before you hit send.</p>
                    </div>

                    {sent && (
                        <p role="status" className="mt-6 rounded-2xl bg-thread-300/50 px-5 py-4 font-bold text-navy-900">
                            Your email app should have opened with your request ready to go. Nothing popped up? Email us at{' '}
                            <a href={`mailto:${business.email}`} className="underline">
                                {business.email}
                            </a>{' '}
                            or call {business.phone}.
                        </p>
                    )}
                </form>

                {/* ---------- shop details ---------- */}
                <aside className="grid gap-6">
                    <div className="rounded-[2rem] p-8 text-canvas-50 denim stitch outline-canvas-50/25">
                        <h2 className="text-3xl">The shop</h2>
                        <div className="mt-4">
                            <OpenBadge tone="dark" />
                        </div>

                        <ul className="mt-7 grid gap-5 text-lg">
                            <li className="flex gap-4">
                                <Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-thread-400" />
                                <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="hover:text-thread-300">
                                    {business.street}
                                    <br />
                                    {business.city}, {business.state} {business.zip}
                                </a>
                            </li>
                            <li className="flex gap-4">
                                <Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-thread-400" />
                                <a href={business.phoneHref} className="hover:text-thread-300">
                                    {business.phone}
                                </a>
                            </li>
                            <li className="flex gap-4">
                                <Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-thread-400" />
                                <a href={`mailto:${business.email}`} className="break-all hover:text-thread-300">
                                    {business.email}
                                </a>
                            </li>
                        </ul>

                        <h3 className="mt-9 font-sans text-sm font-extrabold uppercase tracking-[0.18em] text-thread-400">Hours</h3>
                        <table className="mt-3 w-full">
                            <tbody>
                                {weekOrder.map((dayIndex) => {
                                    const entry = hours[dayIndex];
                                    const isToday = dayIndex === today;

                                    return (
                                        <tr key={entry.day} className={isToday ? 'font-extrabold text-canvas-50' : 'text-denim-100/75'}>
                                            <th scope="row" className="py-1.5 text-left [font-weight:inherit]">
                                                {entry.day}
                                                {isToday && <span className="ml-2 rounded-full bg-thread-400 px-2 py-0.5 text-xs font-extrabold text-navy-950">Today</span>}
                                            </th>
                                            <td className="py-1.5 text-right">{entry.open === null ? 'Closed' : `${formatHour(entry.open)} to ${formatHour(entry.close)}`}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-[2rem] bg-white/70 p-8 stitch outline-navy-900/15">
                        <h2 className="text-3xl text-navy-900">Follow along</h2>
                        <ul className="mt-5 grid gap-3">
                            {socials.map((social) => (
                                <li key={social.id}>
                                    <a href={social.url} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl p-2 transition hover:bg-navy-900/5">
                                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-canvas-50 transition group-hover:bg-sign-500">
                                            <Icon name={social.id} />
                                        </span>
                                        <span>
                                            <span className="block font-extrabold text-navy-900">{social.label}</span>
                                            <span className="block text-sm text-ink/60">{social.handle}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>

            {/* ---------- map ---------- */}
            <section className="weave">
                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                    <div className="rounded-[2rem] bg-canvas-50 p-4 stitch outline-navy-900/25">
                        <iframe src={business.mapEmbedUrl} title="Map showing Needleheads at 88-01 Myrtle Ave, Glendale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-96 w-full rounded-[1.25rem] border-0" />
                    </div>
                    <div className="mt-8 text-center">
                        <Button href={business.directionsUrl} variant="navy">
                            Get directions
                            <Icon name="arrow" />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
