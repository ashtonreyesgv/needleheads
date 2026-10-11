// one place that knows how the images are stored: every photo in public/images has a full size
// name.webp and a small name-sm.webp. pass the path without the extension, like "work/hat-aldos"
export default function Photo({ src, alt, sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw', eager = false, className = '' }) {
    return (
        <img
            src={`/images/${src}.webp`}
            srcSet={`/images/${src}-sm.webp 640w, /images/${src}.webp 1400w`}
            sizes={sizes}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={className}
        />
    );
}
