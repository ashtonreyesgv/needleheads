// the neon t-shirt sign that hangs in the shop window, redrawn as an svg.
// blue tube for the shirt, red tube for YOUR LOGO, tilted like the real one
export default function NeonTee({ className = '' }) {
    return (
        <svg viewBox="0 0 220 210" className={className} role="img" aria-label="Neon sign of a t-shirt that says Your Logo">
            <g transform="rotate(-9 110 105)">
                <path
                    className="neon-blue"
                    d="M78 28 46 40 16 80l27 20 13-14v96h108V86l13 14 27-20-30-40-32-12c-8 15-56 15-64 0z"
                    fill="none"
                    stroke="var(--color-neon-blue)"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                <g className="neon-red" fill="var(--color-neon-red)" fontFamily="var(--font-sans)" fontWeight="800" fontSize="29" letterSpacing="3" textAnchor="middle">
                    <text x="110" y="112">YOUR</text>
                    <text x="110" y="146">LOGO</text>
                </g>
            </g>
        </svg>
    );
}
