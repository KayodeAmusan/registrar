import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = useCallback((i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      if (document.activeElement?.closest("[data-faq-item]") === null) return;
      const current = itemRefs.current.findIndex((el) => el === document.activeElement);
      if (current === -1) return;
      e.preventDefault();
      const next =
        e.key === "ArrowDown"
          ? (current + 1) % faqs.length
          : (current - 1 + faqs.length) % faqs.length;
      itemRefs.current[next]?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="faq" className="bg-white py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="section-label justify-center">FAQ</p>
          <h2 id="faq-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl">
            Questions, answered.
          </h2>
        </div>

        <ul className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li
                key={faq.question}
                className="overflow-hidden rounded-xl2 border border-[var(--border)] bg-white"
                data-faq-item
              >
                <h3>
                  <button
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-green-strong transition-colors duration-220 hover:bg-brand-green-xlight"
                    type="button"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-220 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                >
                  <p className="px-5 pb-5 text-sm text-ink-muted">{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 rounded-xl2 bg-brand-green-xlight p-5 text-center text-sm text-ink-muted">
          Purchases, billing, renewals, and service management are completed through the
          secure Dotmac Cloud client area, powered by WHMCS.
        </p>
      </div>
    </section>
  );
}
