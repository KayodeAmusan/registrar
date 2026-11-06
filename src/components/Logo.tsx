type LogoProps = {
  className?: string;
  inverse?: boolean;
  markOnly?: boolean;
};

export function Logo({ className = "", inverse = false, markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="block w-[116px] shrink-0" aria-hidden="true">
        <img src={import.meta.env.BASE_URL + "dotmac-header-logo.png"} alt="" width="1921" height="693" className="block h-auto w-full" decoding="async" fetchPriority="high" />
      </span>
      {!markOnly && <>
      <span className="h-8 w-px bg-current opacity-15" aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold tracking-[-0.02em] ${inverse ? "text-white" : "text-brand-green"}`}>
          Cloud &amp; Domains
        </span>
        <span className={`mt-1 text-[9px] font-bold uppercase tracking-[0.15em] ${inverse ? "text-white/55" : "text-brand-orange"}`}>
          Digital infrastructure
        </span>
      </span>
      </>}
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`dotmac-logo-crop dotmac-logo-crop--footer ${className}`}>
      <img src={import.meta.env.BASE_URL + "dotmac-technologies-logo.png"} alt="Dotmac Technologies" width="3000" height="2000" loading="lazy" decoding="async" />
    </span>
  );
}
