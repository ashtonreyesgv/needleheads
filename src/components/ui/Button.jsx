// the one button. shaped like a little patch with a stitched edge.
// pass `to` for a page on this site, `href` for anything else (tel:, mailto:, outside links), or neither for a real <button>
import { Link } from 'react-router-dom';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-extrabold leading-none transition duration-200 stitch-tight hover:-translate-y-0.5 active:translate-y-0';

const variants = {
    red: 'bg-sign-500 text-canvas-50 outline-canvas-50/55 shadow-[0_12px_22px_-12px_rgb(168_22_28/0.85)] hover:bg-sign-600',
    navy: 'bg-navy-900 text-canvas-50 outline-canvas-50/40 shadow-[0_12px_22px_-12px_rgb(12_18_48/0.8)] hover:bg-navy-800',
    cream: 'bg-canvas-50 text-navy-900 outline-navy-900/30 shadow-[0_12px_22px_-12px_rgb(12_18_48/0.6)] hover:bg-white',
    gold: 'bg-thread-400 text-navy-950 outline-navy-950/35 shadow-[0_12px_22px_-12px_rgb(0_0_0/0.6)] hover:bg-thread-300'
};

export default function Button({ to, href, variant = 'red', className = '', children, ...rest }) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    if (href) {
        // outside links open in a new tab, tel: and mailto: stay put
        const outside = href.startsWith('http');
        return (
            <a href={href} className={classes} {...(outside ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}
