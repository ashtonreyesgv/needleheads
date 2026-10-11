// the navy awning from the front of the shop, same three words in the same order.
// it sits still on purpose. no scrolling text on this site
const words = ['Embroidery', 'Silk Screening', 'Patches'];

export default function Awning() {
    return (
        <div aria-hidden="true">
            <div className="denim px-5 py-5">
                {/* one row with dots between on bigger screens, a plain stack on phones */}
                <ul className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-x-6 gap-y-1 text-lg font-extrabold uppercase tracking-[0.2em] text-canvas-50 sm:flex-row sm:text-2xl">
                    {words.map((word, index) => (
                        <li key={word} className="flex items-center gap-6">
                            {index > 0 && <span className="hidden h-2.5 w-2.5 rounded-full bg-canvas-50 sm:block" />}
                            {word}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="awning-valance" />
        </div>
    );
}
