export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="34" height="34" rx="8" fill="#0B4F31" />
        <path
          d="M9.5 23V11h3.6l4.9 6.6V11H21.5v12h-3.6L13 16.4V23H9.5z"
          fill="#FAF8F3"
        />
        <circle cx="27" cy="9.5" r="2.8" fill="#F4621A" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold text-brand-green tracking-tight">
          Dotmac<span className="text-brand-orange"> Cloud</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium text-ink-muted tracking-wide">
          A Dotmac Technologies company
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="34" height="34" rx="8" fill="#0B4F31" />
      <path d="M9.5 23V11h3.6l4.9 6.6V11H21.5v12h-3.6L13 16.4V23H9.5z" fill="#FAF8F3" />
      <circle cx="27" cy="9.5" r="2.8" fill="#F4621A" />
    </svg>
  );
}
