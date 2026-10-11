// the frame every page sits in. navbar on top, footer on the bottom, the current page in the middle
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

// what shows in the browser tab for each page
const titles = {
    '/': 'Needleheads Custom Embroidery | Glendale, Queens',
    '/services': 'Services | Needleheads Custom Embroidery',
    '/work': 'Our Work | Needleheads Custom Embroidery',
    '/schools-teams': 'Schools & Teams | Needleheads Custom Embroidery',
    '/about': 'About | Needleheads Custom Embroidery',
    '/contact': 'Contact | Needleheads Custom Embroidery'
};

export default function Layout() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = titles[pathname] || 'Page not found | Needleheads Custom Embroidery';
    }, [pathname]);

    // react router keeps the scroll position between pages, so put it back at the top ourselves.
    // links like /services#patches jump to that section instead
    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <div className="flex min-h-screen flex-col">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:font-bold focus:text-canvas-50">
                Skip to content
            </a>
            <Navbar />
            <main id="main" className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
