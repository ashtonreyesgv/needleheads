// full screen viewer for the gallery. arrow keys flip through, escape closes, clicking the dark part closes.
// the parent owns which photo is showing, this just draws it
import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

export default function Lightbox({ items, index, onClose, onMove }) {
    const closeRef = useRef(null);
    const item = items[index];

    useEffect(() => {
        function onKey(event) {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowRight') onMove(1);
            if (event.key === 'ArrowLeft') onMove(-1);
        }

        // lock the page behind it and send keyboard focus into the viewer
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
        closeRef.current?.focus();

        return () => {
            document.body.style.overflow = previous;
            document.removeEventListener('keydown', onKey);
        };
    }, [onClose, onMove]);

    const roundButton = 'grid h-12 w-12 shrink-0 place-items-center rounded-full bg-canvas-50 text-navy-900 transition hover:bg-thread-400';

    return (
        <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-50 flex flex-col bg-navy-950/95 p-4 sm:p-6" onClick={onClose}>
            <div className="flex items-center justify-between gap-4 text-canvas-50">
                <p className="text-sm font-bold text-canvas-50/70">
                    {index + 1} of {items.length}
                </p>
                <button ref={closeRef} type="button" onClick={onClose} className={roundButton} aria-label="Close">
                    <Icon name="close" />
                </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center gap-3 py-4 sm:gap-6" onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={() => onMove(-1)} className={roundButton} aria-label="Previous photo">
                    <Icon name="left" />
                </button>
                <img src={`/images/work/${item.id}.webp`} alt={`${item.title}. ${item.note}`} className="max-h-full min-w-0 max-w-full rounded-2xl object-contain" />
                <button type="button" onClick={() => onMove(1)} className={roundButton} aria-label="Next photo">
                    <Icon name="right" />
                </button>
            </div>

            <div className="text-center text-canvas-50" onClick={(event) => event.stopPropagation()}>
                <p className="font-display text-2xl">{item.title}</p>
                <p className="mt-1 text-canvas-50/70">{item.note}</p>
            </div>
        </div>
    );
}
