/**
 * Hero conceptual composition — "Where brands meet people."
 *
 * Two forms reach toward one another; at the point they almost touch, an
 * orange spark ignites and pulses, sending ripples outward. It's the human
 * moment a brand connects with a person — the heart of marketing and branding.
 *
 * Original abstract artwork — deliberately NOT the Kriate monogram (brand
 * guide §2).
 */
export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[500px]">
      <svg
        viewBox="0 0 600 600"
        role="img"
        aria-label="Two forms reaching toward each other with a bright orange spark igniting where they meet"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="prong-ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b2b2b" />
            <stop offset="1" stopColor="#111111" />
          </linearGradient>
          <radialGradient id="spark-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#f4511e" stopOpacity="0.55" />
            <stop offset="1" stopColor="#f4511e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spark-core-g" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0" stopColor="#ffd0bd" />
            <stop offset="0.5" stopColor="#ff7a45" />
            <stop offset="1" stopColor="#f4511e" />
          </radialGradient>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#111111" opacity="0.12" />
          </pattern>
        </defs>

        {/* backdrop */}
        <rect x="30" y="30" width="540" height="540" rx="24" fill="url(#dots)" />

        {/* labels */}
        <g
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#6b6863"
          letterSpacing="3"
          textAnchor="middle"
        >
          <text x="150" y="236">BRAND</text>
          <text x="450" y="236">PEOPLE</text>
        </g>

        {/* left form reaching right */}
        <g className="reach-l">
          <path
            d="M68,300 C68,266 122,256 178,272 L256,298 C259,299 259,301 256,302 L178,328 C122,344 68,334 68,300 Z"
            fill="url(#prong-ink)"
          />
        </g>

        {/* right form reaching left */}
        <g className="reach-r">
          <path
            d="M532,300 C532,266 478,256 422,272 L344,298 C341,299 341,301 344,302 L422,328 C478,344 532,334 532,300 Z"
            fill="url(#prong-ink)"
          />
        </g>

        {/* ambient glow */}
        <circle cx="300" cy="300" r="95" fill="url(#spark-glow)" />

        {/* ripples of reach */}
        <g fill="none" stroke="#f4511e" strokeWidth="2">
          <circle className="ripple" cx="300" cy="300" r="40" />
          <circle className="ripple ripple-2" cx="300" cy="300" r="40" />
          <circle className="ripple ripple-3" cx="300" cy="300" r="40" />
        </g>

        {/* the spark */}
        <g className="spark-core">
          {/* soft outer rays */}
          <g stroke="#f4511e" strokeWidth="3" strokeLinecap="round" opacity="0.9">
            <line x1="300" y1="252" x2="300" y2="270" />
            <line x1="300" y1="330" x2="300" y2="348" />
            <line x1="252" y1="300" x2="270" y2="300" />
            <line x1="330" y1="300" x2="348" y2="300" />
          </g>
          {/* core orb */}
          <circle cx="300" cy="300" r="22" fill="url(#spark-core-g)" />
          {/* bright twinkle */}
          <path
            d="M300,278 Q303,297 322,300 Q303,303 300,322 Q297,303 278,300 Q297,297 300,278 Z"
            fill="#fff7f2"
          />
        </g>

        {/* caption */}
        <text
          x="300"
          y="470"
          textAnchor="middle"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#6b6863"
          letterSpacing="3"
        >
          WHERE BRANDS MEET PEOPLE
        </text>
      </svg>
    </div>
  );
}
