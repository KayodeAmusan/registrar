import { ArrowUpRight, Globe, Server, Mail, Cloud } from "lucide-react";
import { productPathways } from "@/config/services";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Globe, Server, Mail, Cloud };

export function ProductPathways() {
  return (
    <section className="bg-brand-cream py-20 lg:py-28" aria-labelledby="pathways-heading">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">One technology partner</p>
            <h2 id="pathways-heading" className="mt-4 max-w-xl font-display text-3xl font-extrabold text-brand-green-strong sm:text-4xl lg:text-5xl">
              The foundation for everything you build online.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-ink-muted lg:justify-self-end">
            Start with a domain, launch with dependable hosting, and scale into serious cloud infrastructure without changing partners.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productPathways.map((card, index) => {
            const Icon = ICONS[card.icon] ?? Globe;
            return (
              <li key={card.id}>
                <a href={card.ctaHref} className="service-card pressable group relative flex min-h-[330px] h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-6">
                  <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-brand-green/[0.045]">0{index + 1}</span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white shadow-[0_8px_24px_rgba(10,92,56,.18)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="mt-auto pt-16">
                    <h3 className="font-display text-xl font-extrabold text-brand-green-strong">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{card.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-green">
                      {card.ctaLabel}<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
