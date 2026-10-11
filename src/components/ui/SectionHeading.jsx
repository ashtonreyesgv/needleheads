// the small label + big title + optional intro that opens most sections.
// `tone` flips the colors for sections that sit on the navy denim background
export default function SectionHeading({ eyebrow, title, children, tone = 'light', align = 'left', as: Title = 'h2' }) {
    const dark = tone === 'dark';

    return (
        <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
            {eyebrow && (
                <p className={`mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] ${dark ? 'text-thread-400' : 'text-sign-500'} ${align === 'center' ? 'justify-center' : ''}`}>
                    {/* three little stitches before the label */}
                    <span aria-hidden="true" className="w-9 border-t-[3px] border-dashed border-current" />
                    {eyebrow}
                </p>
            )}
            <Title className={`text-4xl leading-[1.05] sm:text-5xl ${dark ? 'text-canvas-50' : 'text-navy-900'}`}>{title}</Title>
            {children && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-denim-100/85' : 'text-ink/75'}`}>{children}</p>}
        </div>
    );
}
