import { Search, MessageCircle, ArrowRight } from "lucide-react";

export function FinalCTA({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-16 lg:py-24" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-brand-green-strong px-6 py-12 text-white shadow-[0_30px_90px_rgba(7,29,20,.22)] sm:px-10 lg:px-16 lg:py-16">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-aurora hero-aurora--one" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-label text-[#8ed3ac]">Ready when you are</p>
              <h2 id="final-cta-heading" className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Build on infrastructure that matches your ambition.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
                Secure your name, launch your platform, or plan a serious cloud deployment with a team that understands your market.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#domain-search" className="btn-primary min-w-[220px]">
                <Search className="h-4 w-4" aria-hidden="true" /> Search your domain
              </a>
              <button onClick={onTalkToExpert} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-[transform,background-color,border-color] duration-200 hover:border-white/25 hover:bg-white/10 active:scale-[.97]" type="button">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Talk to an expert <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
