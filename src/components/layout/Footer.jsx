// bottom of every page: logo, where to find them, hours, links and socials
import { Link } from 'react-router-dom';
import { business, hours, navLinks, socials } from '../../data/business.js';
import { formatHour } from '../../utils/hours.js';
import Icon from '../ui/Icon.jsx';

export default function Footer() {
    const weekdays = hours.filter((entry) => entry.open !== null);
    const first = weekdays[0];
    const last = weekdays[weekdays.length - 1];

    const heading = 'mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-thread-400';
    const link = 'transition hover:text-thread-300';

    return (
        // a shade darker than the denim sections so it doesn't melt into the band above it
        <footer className="bg-navy-950 text-denim-100/85">
            <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
                <div>
                    <img src="/images/brand/logo-full-cream.png" alt="Needleheads" width="800" height="524" loading="lazy" className="w-44" />
                    <p className="mt-5 max-w-xs leading-relaxed">
                        Custom embroidery, silk screening, patches and heat transfers. Family owned in {business.neighborhood} since {business.since}.
                    </p>
                </div>

                <div>
                    <h2 className={heading}>Visit</h2>
                    <address className="not-italic leading-relaxed">
                        {business.street}
                        <br />
                        {business.city}, {business.state} {business.zip}
                    </address>
                    <p className="mt-3 leading-relaxed">
                        {first.day} to {last.day}
                        <br />
                        {formatHour(first.open)} to {formatHour(first.close)}
                    </p>
                    <a href={business.directionsUrl} target="_blank" rel="noreferrer" className={`mt-3 inline-flex items-center gap-2 font-bold text-canvas-50 ${link}`}>
                        Get directions
                        <Icon name="arrow" className="h-4 w-4" />
                    </a>
                </div>

                <div>
                    <h2 className={heading}>Explore</h2>
                    <ul className="grid gap-2.5">
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to} className={link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className={heading}>Say hi</h2>
                    <ul className="grid gap-2.5">
                        <li>
                            <a href={business.phoneHref} className={`inline-flex items-center gap-2.5 ${link}`}>
                                <Icon name="phone" className="h-4 w-4" />
                                {business.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${business.email}`} className={`inline-flex items-center gap-2.5 break-all ${link}`}>
                                <Icon name="mail" className="h-4 w-4 shrink-0" />
                                {business.email}
                            </a>
                        </li>
                    </ul>
                    <ul className="mt-5 flex gap-2.5">
                        {socials.map((social) => (
                            <li key={social.id}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    title={social.label}
                                    className="grid h-11 w-11 place-items-center rounded-full bg-canvas-50/10 text-canvas-50 transition hover:bg-thread-400 hover:text-navy-950"
                                >
                                    <Icon name={social.id} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t-2 border-dashed border-canvas-50/15">
                <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-denim-100/60">
                    © {new Date().getFullYear()} {business.fullName}. {business.street}, {business.city}, {business.state} {business.zip}.
                </p>
            </div>
        </footer>
    );
}
