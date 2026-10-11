// a round photo sitting in a wooden embroidery hoop, screw clamp and all.
// size it from the outside with a width class, it stays a circle
import Photo from './Photo.jsx';

export default function Hoop({ src, alt, className = '' }) {
    return (
        <div className={`relative aspect-square ${className}`}>
            {/* the clamp at the top of the hoop */}
            <span aria-hidden="true" className="absolute left-1/2 top-0 h-[11%] w-[16%] -translate-x-1/2 -translate-y-[45%] rounded-[30%] bg-hoop-700 shadow-[inset_0_-2px_0_rgb(0_0_0/0.18)]" />
            <div className="relative h-full w-full rounded-full bg-linear-to-br from-hoop-300 to-hoop-500 p-[6.5%] shadow-[0_10px_24px_-10px_rgb(18_24_51/0.55)]">
                <div className="h-full w-full overflow-hidden rounded-full bg-canvas-100 ring-2 ring-hoop-700/50">
                    <Photo src={src} alt={alt} sizes="240px" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}
