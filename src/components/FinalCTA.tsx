import { Search, Layers, MessageCircle, ArrowRight } from "lucide-react";

export function FinalCTA({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  return (
    <section className="bg-brand-cream py-16 lg:py-24" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="final-cta-heading"
            className="font-display text-2xl font-bold text-brand-green-strong sm:text-3xl lg:text-4xl"
          >
            Your next idea deserves a dependable home.
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Find your domain, choose your hosting, or talk to us about infrastructure
            that fits your ambitions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#domain-search" className="btn-primary">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search for your domain
            </a>
            <a href="#hosting" className="btn-secondary">
              <Layers className="h-4 w-4" aria-hidden="true" />
              Compare hosting plans
            </a>
            <button onClick={onTalkToExpert} className="text-link" type="button">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Talk to an expert
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
