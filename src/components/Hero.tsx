import { ArrowRight, MessageCircle } from "lucide-react";
import { DomainSearch } from "./DomainSearch";
import { HeroVisual } from "./HeroVisual";
import { trustMarks } from "@/config/clients";

export function Hero({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-cream"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0B4F31 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-container px-6 py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: content */}
          <div id="domain-search">
            <p className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              Domains, hosting and cloud infrastructure
            </p>
            <h1
              id="hero-heading"
              className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-brand-green-strong sm:text-4xl lg:text-[2.75rem]"
            >
              Build your digital presence on infrastructure you can trust.
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-muted sm:text-lg">
              Register your domain, launch your website, and grow with dependable
              hosting and local support from Dotmac Technologies.
            </p>

            <div className="mt-7 max-w-xl">
              <DomainSearch />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#hosting" className="text-link">
                View hosting plans
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <button
                onClick={onTalkToExpert}
                className="text-link"
                type="button"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Talk to a cloud specialist
              </button>
            </div>

            {/* Trust row */}
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5">
              {trustMarks.map((mark) => (
                <li key={mark} className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green-mid" aria-hidden="true" />
                  {mark}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: abstract visual */}
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
