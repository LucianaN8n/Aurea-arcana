import React from 'react';

interface BuneSigilProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * Sigilo Tradicional do Duque Bune (Lemegeton / Ars Goetia)
 * Reprodução vetorial fiel à gravura dourada enviada (com B-U-N-E nos pontos cardeais,
 * as três alças inferiores em U, a cruz pátea central e a terminação caligráfica à direita).
 */
export const BuneSigil: React.FC<BuneSigilProps> = ({
  className = 'h-36 w-36',
  showLabel = true,
}) => {
  return (
    <div className="inline-flex flex-col items-center justify-center select-none">
      <div className="relative flex items-center justify-center rounded-full bg-[#07080C]/90 p-2 shadow-[0_0_45px_rgba(212,175,55,0.4)] ring-1 ring-[#D4AF37]/70 backdrop-blur-xs">
        <svg
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Sigilo do Duque Bune"
        >
          <defs>
            <linearGradient id="buneGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#E6C245" />
              <stop offset="65%" stopColor="#C99A1E" />
              <stop offset="100%" stopColor="#8F680A" />
            </linearGradient>
            <linearGradient id="buneGoldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE885" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9A7111" />
            </linearGradient>
            <filter id="buneBevelShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="1" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          <g filter="url(#buneBevelShadow)">
            {/* Outer Double Ring */}
            <circle
              cx="120"
              cy="120"
              r="112"
              stroke="url(#buneGoldStroke)"
              strokeWidth="3.2"
            />
            <circle
              cx="120"
              cy="120"
              r="106.5"
              stroke="url(#buneGoldStroke)"
              strokeWidth="2"
            />

            {/* Inner Ring */}
            <circle
              cx="120"
              cy="120"
              r="82"
              stroke="url(#buneGoldStroke)"
              strokeWidth="2.4"
            />

            {/* Cardinal Letters: B (top), U (right), N (bottom), E (left) */}
            <text
              x="120"
              y="32"
              textAnchor="middle"
              fill="url(#buneGoldMetallic)"
              stroke="#5C4004"
              strokeWidth="0.6"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="24"
              fontWeight="700"
            >
              B
            </text>

            <text
              x="214"
              y="120"
              textAnchor="middle"
              dominantBaseline="central"
              transform="rotate(-90 214 120)"
              fill="url(#buneGoldMetallic)"
              stroke="#5C4004"
              strokeWidth="0.6"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="23"
              fontWeight="700"
            >
              U
            </text>

            <text
              x="120"
              y="221"
              textAnchor="middle"
              fill="url(#buneGoldMetallic)"
              stroke="#5C4004"
              strokeWidth="0.6"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="23"
              fontWeight="700"
            >
              N
            </text>

            <text
              x="27"
              y="120"
              textAnchor="middle"
              dominantBaseline="central"
              transform="rotate(-90 27 120)"
              fill="url(#buneGoldMetallic)"
              stroke="#5C4004"
              strokeWidth="0.6"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="23"
              fontWeight="700"
            >
              E
            </text>

            {/* CENTRAL SIGIL OF DUKE BUNE */}
            <g
              stroke="url(#buneGoldStroke)"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Top Horizontal Bar */}
              <line x1="60" y1="90" x2="136" y2="90" />

              {/* Top-Left & Top-Right Eyelet Loops */}
              <circle cx="56" cy="84" r="6" fill="none" strokeWidth="3.8" />
              <circle cx="140" cy="84" r="6" fill="none" strokeWidth="3.8" />

              {/* Middle Horizontal Bar + Left U-Bend + Lower Horizontal Spine */}
              <path d="M 122 108 L 52 108 A 7.5 7.5 0 0 0 52 123 L 154 123" />

              {/* Flared Serif at Right End of Middle Bar (x=122, y=108) */}
              <path d="M 123 98 L 123 116" strokeWidth="3.6" />
              <path d="M 119 108 L 123 102 L 123 114 Z" fill="url(#buneGoldMetallic)" strokeWidth="1.5" />

              {/* First Pair of Verticals + Left Bottom U-Loop */}
              <path d="M 60 90 L 60 131 C 60 142 80 142 80 131 L 80 90" />

              {/* Center Vertical Stem (x=98) */}
              <line x1="98" y1="90" x2="98" y2="144" />

              {/* Second Pair of Verticals + Middle Bottom U-Loop */}
              <path d="M 114 90 L 114 131 C 114 142 135 142 135 131 L 135 90" />

              {/* Third Bottom U-Loop + Rising Arch + Right Flourish */}
              <path d="M 143 123 L 143 131 C 143 142 164 142 164 131 L 164 110 C 164 98 178 98 178 111 C 178 118 180 135 184 135 C 187 135 190 124 195 119" />

              {/* Small Inner Loop on the Arch (around x=173, y=119) */}
              <circle cx="173" cy="119" r="4.5" fill="none" strokeWidth="3.4" />

              {/* Vertical Cross-Bar inside Third U-Loop (x=153.5) */}
              <line x1="153.5" y1="110" x2="153.5" y2="132" strokeWidth="3.6" />
              <line x1="150" y1="110" x2="157" y2="110" strokeWidth="2.8" />
              <line x1="150" y1="132" x2="157" y2="132" strokeWidth="2.8" />
            </g>

            {/* Flared Goetic Cross Pattee at Bottom of Center Vertical (x=98) */}
            <path
              d="M 98 135 L 87 129 L 87 142 L 98 137 L 91 148 L 105 148 L 98 137 L 109 142 L 109 129 Z"
              fill="url(#buneGoldMetallic)"
              stroke="#8F680A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Right Terminal Arrowhead / Flourish touching Inner Circle (x=196, y=119) */}
            <path
              d="M 189 116 L 199 117 L 195 129 L 193 121 Z"
              fill="url(#buneGoldMetallic)"
              stroke="#8F680A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      {showLabel && (
        <span className="mt-2 border border-[#D4AF37]/40 bg-[#07080C]/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          Sigilo do Duque Bune
        </span>
      )}
    </div>
  );
};
