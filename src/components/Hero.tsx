import { pageHref } from "@/config/pages";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { DomainSearch } from "./DomainSearch";
import { HeroVisual } from "./HeroVisual";
import { trustMarks } from "@/config/clients";

export function Hero({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand-green-strong text-white" aria-labelledby="hero-heading">
      <div className="hero-aurora hero-aurora--one" aria-hidden="true" />
      <div className="hero-aurora hero-aurora--two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto max-w-container px-5 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div id="domain-search" className="relative z-10">
            <p className="hero-enter section-label text-[#8ed3ac]">
              <span className="status-dot" aria-hidden="true" />
              Nigerian infrastructure. Global standards.
            </p>
            <h1 id="hero-heading" className="hero-enter hero-enter--2 mt-5 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.15rem]">
              Your digital ambition,
              <span className="block text-[#8ed3ac]">built to stay online.</span>
            </h1>
            <p className="hero-enter hero-enter--3 mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              Domains, high-performance hosting, business email and cloud infrastructure—delivered by a Nigerian technology partner trusted since 2008.
            </p>

            <div className="hero-enter hero-enter--4 mt-8 max-w-2xl rounded-[22px] border border-white/10 bg-white p-2.5 shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:p-3">
              <DomainSearch />
            </div>

            <div className="hero-enter hero-enter--5 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={pageHref("hosting")} className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-200 hover:text-[#8ed3ac]">
                Explore hosting <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button onClick={onTalkToExpert} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors duration-200 hover:text-white" type="button">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Talk to an infrastructure expert
              </button>
            </div>

            <ul className="hero-enter hero-enter--6 mt-9 grid max-w-2xl gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {trustMarks.map((mark) => (
                <li key={mark} className="flex items-center gap-2 text-xs font-semibold text-white/62">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8ed3ac]" aria-hidden="true" />
                  {mark}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-enter hero-enter--3 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
