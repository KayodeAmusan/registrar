type LogoProps = {
  className?: string;
  inverse?: boolean;
  compactAtDesktop?: boolean;
};

export function Logo({ className = "", inverse = false, compactAtDesktop = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="dotmac-logo-crop" aria-hidden="true">
        <img src="/dotmac-technologies-logo.png" alt="" width="3000" height="2000" decoding="async" fetchPriority="high" />
      </span>
      <span className={`h-8 w-px bg-current opacity-15 ${compactAtDesktop ? "lg:hidden xl:block" : ""}`} aria-hidden="true" />
      <span className={`flex flex-col leading-none ${compactAtDesktop ? "lg:hidden xl:flex" : ""}`}>
        <span className={`font-display text-[15px] font-extrabold tracking-[-0.02em] ${inverse ? "text-white" : "text-brand-green"}`}>
          Cloud &amp; Domains
        </span>
        <span className={`mt-1 text-[9px] font-bold uppercase tracking-[0.15em] ${inverse ? "text-white/55" : "text-brand-orange"}`}>
          Digital infrastructure
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`dotmac-logo-crop dotmac-logo-crop--footer ${className}`}>
      <img src="/dotmac-technologies-logo.png" alt="Dotmac Technologies" width="3000" height="2000" loading="lazy" decoding="async" />
    </span>
  );
}
