import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { audienceSegments } from "@/config/audiences";

export function AudienceJourney() {
  const [active, setActive] = useState(0);
  const segment = audienceSegments[active];

  return (
    <section
      id="solutions"
      className="bg-white py-16 lg:py-24"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <p className="section-label">Audience</p>
          <h2 id="audience-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl lg:text-4xl">
            Made for the way you work.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Whether you are launching your first idea or running complex infrastructure,
            Dotmac Cloud has a path for you.
          </p>
        </div>

        {/* Tabs / pills */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Choose your audience"
        >
          {audienceSegments.map((seg, i) => {
            const isActive = i === active;
            return (
              <button
                key={seg.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="audience-panel"
                id={`audience-tab-${seg.id}`}
                onClick={() => setActive(i)}
                className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-220 ${
                  isActive
                    ? "bg-brand-green text-white shadow-sm"
                    : "border border-[var(--border)] bg-white text-ink-primary hover:bg-brand-green-light"
                }`}
                type="button"
              >
                {seg.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="audience-panel"
          role="tabpanel"
          aria-labelledby={`audience-tab-${segment.id}`}
          className="mt-6 rounded-xl2 border border-[var(--border)] bg-brand-cream p-6 lg:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base text-ink-primary sm:text-lg">
              {segment.valueProp}
            </p>
            <a href={segment.ctaHref} className="btn-secondary shrink-0">
              {segment.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
