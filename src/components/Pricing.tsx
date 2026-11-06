import { useState } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import {
  hostingPlans,
  formatNaira,
  type BillingCycle,
} from "@/config/plans";
import { buildProductUrl, trackEvent } from "@/lib/analytics";

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const handleCycleChange = (next: BillingCycle) => {
    if (next === cycle) return;
    setCycle(next);
    trackEvent("hosting_billing_cycle_changed", { cycle: next });
  };

  const handleSelect = (planId: string) => {
    trackEvent("hosting_plan_selected", { plan: planId, cycle });
  };

  return (
    <section id="hosting" className="bg-white py-16 lg:py-24" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <p className="section-label">Web Hosting</p>
          <h2 id="pricing-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl lg:text-4xl">
            Hosting that grows with your ambition.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            All prices are in Nigerian naira (₦). Choose monthly billing for flexibility,
            or annual billing to save where a discount applies.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center gap-3" role="radiogroup" aria-label="Billing cycle">
          <button
            type="button"
            role="radio"
            aria-checked={cycle === "monthly"}
            onClick={() => handleCycleChange("monthly")}
            className={`pressable min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 ${
              cycle === "monthly"
                ? "bg-brand-green text-white shadow-sm"
                : "border border-[var(--border)] bg-white text-ink-primary hover:bg-brand-green-light"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={cycle === "annual"}
            onClick={() => handleCycleChange("annual")}
            className={`pressable min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 ${
              cycle === "annual"
                ? "bg-brand-green text-white shadow-sm"
                : "border border-[var(--border)] bg-white text-ink-primary hover:bg-brand-green-light"
            }`}
          >
            Annual
          </button>
          {cycle === "annual" && (
            <span className="hidden text-sm text-ink-muted sm:inline">
              Billed annually — save where shown
            </span>
          )}
        </div>

        {/* Cards */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {hostingPlans.map((plan) => {
            const isAnnual = cycle === "annual";
            const priceAmount = formatNaira(
              isAnnual ? plan.annualPrice : plan.monthlyPrice
            );
            const pricePeriod = isAnnual ? "/year" : "/month";
            const subLabel = isAnnual
              ? `billed annually · ${plan.annualEffectiveMonthly}`
              : "billed monthly";

            return (
              <li key={plan.id}>
                <div
                  className={`relative flex h-full flex-col rounded-[22px] border p-5 transition-[transform,border-color,box-shadow,background-color] duration-200 ${
                    plan.popular
                      ? "border-brand-green bg-brand-green-xlight shadow-md ring-1 ring-brand-green/20"
                      : "border-[var(--border)] bg-white hover:border-brand-green/40 hover:shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                      <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                      Most popular
                    </span>
                  )}

                  <h3 className="font-display text-lg font-bold text-brand-green-strong">
                    {plan.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{plan.storage} storage</p>

                  <div className="mt-4">
                    <p className="flex flex-wrap items-baseline gap-x-1 font-display font-extrabold text-brand-green-strong tabular-nums">
                      <span className="text-2xl">{priceAmount}</span>
                      <span className="text-base">{pricePeriod}</span>
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">{subLabel}</p>
                  </div>

                  {isAnnual && plan.annualSavings !== null && (
                    <p className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-brand-orange-light px-2 py-0.5 text-xs font-semibold text-brand-orange">
                      <Check className="h-3 w-3" aria-hidden="true" />
                      Save {formatNaira(plan.annualSavings)}/year
                    </p>
                  )}

                  <p className="mt-3 flex-1 text-sm text-ink-muted">
                    {plan.description}
                  </p>

                  <a
                    href={buildProductUrl(plan.productUrl, cycle)}
                    onClick={() => handleSelect(plan.id)}
                    className={`pressable mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold transition-[transform,background-color,color,border-color] duration-200 ${
                      plan.popular
                        ? "bg-brand-orange text-white hover:bg-[#d95412]"
                        : "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    }`}
                  >
                    Select plan
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Advanced hosting link */}
        <div className="mt-8 flex flex-col items-start gap-2 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-sm text-ink-muted">
            Need VPS, reseller, Windows, dedicated, or cloud hosting?
          </p>
          <a
            href="https://CLIENT-AREA-DOMAIN.example/store/advanced-hosting"
            className="text-link"
          >
            Explore advanced hosting
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Comparison affordance */}
        <div className="mt-6">
          <a href="https://CLIENT-AREA-DOMAIN.example/hosting-comparison" className="text-link">
            Compare all plan features
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
