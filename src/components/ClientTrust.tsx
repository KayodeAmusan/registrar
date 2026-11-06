import { Headphones, MapPin, ShieldCheck, TimerReset } from "lucide-react";
import { clientLogos } from "@/config/clients";

const proof = [
  { icon: ShieldCheck, value: "NiRA", label: "Accredited registrar" },
  { icon: TimerReset, value: "Since 2008", label: "Proven delivery" },
  { icon: Headphones, value: "24/7", label: "Technical support" },
  { icon: MapPin, value: "2 cities", label: "Abuja & Lagos" },
];

export function ClientTrust() {
  return (
    <section className="relative z-10 border-b border-[var(--border)] bg-white py-8 lg:py-10" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p id="trust-heading" className="section-label">Trust built into every layer</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {proof.map(({ icon: Icon, value, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green-light text-brand-green">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span><strong className="block font-display text-sm text-brand-green-strong">{value}</strong><span className="block text-[11px] text-ink-muted">{label}</span></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-brand-cream px-5 py-4">
            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-ink-muted">Supporting</span>
            {clientLogos.map((logo) => (
              <span key={logo.name} className="font-display text-lg font-extrabold tracking-wide text-brand-green/65" aria-label={`${logo.name} — approved client`}>
                {logo.logoSrc ? <img src={logo.logoSrc} alt={`${logo.name} logo`} className="max-h-8 w-auto" /> : logo.monogram}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
