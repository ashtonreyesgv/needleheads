// top bar. their real logo on the left (the three dress forms + hand lettered name), links on the right,
// and a slide down menu once the screen gets too narrow for the links
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business, navLinks } from '../../data/business.js';
import Icon from '../ui/Icon.jsx';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // close the mobile menu whenever the page changes
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const linkClass = ({ isActive }) =>
        `rounded-full px-3.5 py-2 text-[0.95rem] font-extrabold transition ${isActive ? 'bg-navy-900 text-canvas-50' : 'text-navy-900 hover:bg-navy-900/8'}`;

    return (
        <header className="sticky top-0 z-40 border-b-2 border-dashed border-navy-900/15 bg-canvas-50/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
                <Link to="/" className="flex items-center gap-3" aria-label="Needleheads Custom Embroidery, home">
                    <img src="/images/brand/logo-busts-red.png" alt="" width="640" height="434" className="h-11 w-auto" />
                    <img src="/images/brand/logo-wordmark-navy.png" alt="Needleheads" width="900" height="116" className="h-[1.15rem] w-auto sm:h-6" />
                </Link>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to} className={linkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <a href={business.phoneHref} className="hidden items-center gap-2 rounded-full bg-sign-500 px-4 py-2.5 text-sm font-extrabold text-canvas-50 transition hover:bg-sign-600 sm:inline-flex">
                        <Icon name="phone" className="h-4 w-4" />
                        {business.phone}
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 text-canvas-50 lg:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                    >
                        <Icon name={open ? 'close' : 'menu'} />
                    </button>
                </div>
            </div>

            {open && (
                <nav id="mobile-menu" className="border-t-2 border-dashed border-navy-900/15 px-5 pb-5 pt-3 lg:hidden" aria-label="Main">
                    <ul className="mx-auto grid max-w-6xl gap-1">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} className={({ isActive }) => `block rounded-2xl px-4 py-3 text-lg font-extrabold ${isActive ? 'bg-navy-900 text-canvas-50' : 'text-navy-900'}`}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="mt-2 sm:hidden">
                            <a href={business.phoneHref} className="flex items-center justify-center gap-2 rounded-2xl bg-sign-500 px-4 py-3 text-lg font-extrabold text-canvas-50">
                                <Icon name="phone" />
                                Call {business.phone}
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
