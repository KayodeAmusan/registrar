import { clientLogos } from "@/config/clients";

export function ClientTrust() {
  return (
    <section className="border-y border-[var(--border)] bg-white py-12 lg:py-14" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-container px-6">
        <p id="trust-heading" className="section-label justify-center text-center">
          Trusted technology delivery
        </p>

        <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-12">
          {/* Client logos */}
          <ul className="flex flex-wrap items-center justify-center gap-6" aria-label="Approved clients">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="flex h-16 items-center justify-center rounded-xl2 border border-[var(--border)] bg-brand-cream px-8 grayscale"
                aria-label={`${logo.name} — approved client`}
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className="max-h-10 w-auto"
                  />
                ) : (
                  <span className="font-display text-xl font-bold tracking-wide text-brand-green/60">
                    {logo.monogram}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="max-w-md text-center text-sm text-ink-muted lg:text-left">
            Dotmac Technologies supports businesses, institutions, and public-sector
            organizations across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
