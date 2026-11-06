import { ArrowRight, Globe, Server, Mail, Cloud } from "lucide-react";
import { productPathways } from "@/config/services";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  Server,
  Mail,
  Cloud,
};

export function ProductPathways() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20" aria-labelledby="pathways-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <p className="section-label">What we do</p>
          <h2 id="pathways-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl">
            Everything you need to build online, from one partner.
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productPathways.map((card) => {
            const Icon = ICONS[card.icon] ?? Globe;
            return (
              <li key={card.id}>
                <a
                  href={card.ctaHref}
                  className="group flex h-full flex-col rounded-xl2 border border-[var(--border)] bg-white p-6 transition-all duration-220 hover:border-brand-green hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-light text-brand-green">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-green-strong">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green group-hover:text-brand-green-mid">
                    {card.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-220 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
