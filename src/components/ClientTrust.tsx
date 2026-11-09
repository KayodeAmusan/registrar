import { Headphones, TimerReset } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const proof: Array<{
  icon?: LucideIcon;
  logoSrc?: string;
  value: string;
  label: string;
}> = [
  { logoSrc: import.meta.env.BASE_URL + "nira-logo.png", value: "NiRA", label: "Accredited registrar" },
  { icon: TimerReset, value: "Since 2008", label: "Proven delivery" },
  { icon: Headphones, value: "24/7", label: "Technical support" },
];

export function ClientTrust() {
  return (
    <section className="relative z-10 border-b border-[var(--border)] bg-white py-8 lg:py-10" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="grid items-center">
          <div>
            <p id="trust-heading" className="section-label">Trust built into every layer</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              {proof.map(({ icon: Icon, logoSrc, value, label }) => (
                <li key={label} className="flex items-center gap-3">
                  {logoSrc ? (
                    <span className="flex h-12 w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-white px-1.5">
                      <img
                        src={logoSrc}
                        alt="NiRA — Nigeria Internet Registration Association"
                        width="177"
                        height="100"
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full"
                      />
                    </span>
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-brand-green">
                      {Icon && <Icon className="h-[18px] w-[18px]" aria-hidden="true" />}
                    </span>
                  )}
                  <span><strong className="block font-display text-sm text-brand-green-strong">{value}</strong><span className="block text-[11px] text-ink-muted">{label}</span></span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
