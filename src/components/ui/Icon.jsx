// tiny inline svg icon set so there's no icon library to install. add a new one by adding a key to paths
const paths = {
    phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" fill="currentColor" stroke="none" />,
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m4 7.5 8 6 8-6" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.2 2" />
        </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    left: <path d="m15 5-7 7 7 7" />,
    right: <path d="m9 5 7 7-7 7" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    facebook: <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4a19 19 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21z" fill="currentColor" stroke="none" />,
    instagram: (
        <>
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </>
    ),
    // a five point star. reads as "reviews" without borrowing yelp's actual logo
    yelp: <path d="m12 3 2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.7z" />,
    google: (
        <>
            <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
            <path d="M9.5 9.5h5M12 7v5" />
        </>
    )
};

export default function Icon({ name, className = 'h-5 w-5' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {paths[name]}
        </svg>
    );
}
