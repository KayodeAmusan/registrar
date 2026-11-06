export function HeroVisual() {
  return (
    <div
      className="relative hidden aspect-square w-full max-w-md lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B4F31" />
            <stop offset="100%" stopColor="#0D1F16" />
          </linearGradient>
          <radialGradient id="glow-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E6640" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0E6640" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="400" rx="20" fill="url(#bg-grad)" />
        <rect width="400" height="400" rx="20" fill="url(#glow-1)" />

        {/* Infrastructure grid lines */}
        <g stroke="#0E6640" strokeWidth="0.5" opacity="0.25">
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="160" x2="400" y2="160" />
          <line x1="0" y1="240" x2="400" y2="240" />
          <line x1="0" y1="320" x2="400" y2="320" />
          <line x1="80" y1="0" x2="80" y2="400" />
          <line x1="160" y1="0" x2="160" y2="400" />
          <line x1="240" y1="0" x2="240" y2="400" />
          <line x1="320" y1="0" x2="320" y2="400" />
        </g>

        {/* Connection paths */}
        <g stroke="#0E6640" strokeWidth="1" opacity="0.5" fill="none">
          <path d="M80 320 Q 160 200 240 160 T 360 80" />
          <path d="M40 240 Q 120 180 200 200 T 360 240" strokeDasharray="3 4" />
          <path d="M120 360 Q 200 280 280 240 T 380 160" />
        </g>

        {/* Nodes */}
        <g fill="#0E6640">
          <circle cx="80" cy="320" r="6" />
          <circle cx="240" cy="160" r="8" />
          <circle cx="360" cy="80" r="6" />
          <circle cx="200" cy="200" r="5" opacity="0.7" />
          <circle cx="280" cy="240" r="5" />
          <circle cx="380" cy="160" r="4" opacity="0.6" />
        </g>

        {/* Active nodes with accent */}
        <circle cx="240" cy="160" r="14" fill="#F4621A" opacity="0.15" />
        <circle cx="240" cy="160" r="9" fill="#F4621A" opacity="0.3" />
        <circle cx="240" cy="160" r="5" fill="#F4621A" />

        <circle cx="80" cy="320" r="12" fill="#0E6640" opacity="0.2" />
        <circle cx="80" cy="320" r="4" fill="#E8F5EE" />

        {/* Domain label chips */}
        <g>
          <rect x="210" y="130" width="62" height="22" rx="5" fill="#FAF8F3" opacity="0.95" />
          <text x="241" y="145" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0B4F31" fontFamily="Inter, sans-serif">
            .com
          </text>
        </g>
        <g>
          <rect x="52" y="292" width="58" height="22" rx="5" fill="#FAF8F3" opacity="0.95" />
          <text x="81" y="307" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0B4F31" fontFamily="Inter, sans-serif">
            .ng
          </text>
        </g>
        <g>
          <rect x="332" y="56" width="68" height="22" rx="5" fill="#FDF0E8" opacity="0.95" />
          <text x="366" y="71" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F4621A" fontFamily="Inter, sans-serif">
            .com.ng
          </text>
        </g>

        {/* Control panel motif — small bars */}
        <g transform="translate(40 360)">
          <rect width="6" height="24" rx="2" fill="#0E6640" opacity="0.6" />
          <rect x="12" width="6" height="16" rx="2" fill="#0E6640" opacity="0.4" />
          <rect x="24" width="6" height="28" rx="2" fill="#0E6640" opacity="0.7" />
          <rect x="36" width="6" height="20" rx="2" fill="#F4621A" opacity="0.8" />
          <rect x="48" width="6" height="14" rx="2" fill="#0E6640" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
