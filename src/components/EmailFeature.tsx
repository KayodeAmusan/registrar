import { Mail, ArrowRight, AtSign } from "lucide-react";

export function EmailFeature() {
  return (
    <section id="email" className="bg-brand-cream py-16 lg:py-24" aria-labelledby="email-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
            <p className="section-label">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Business Email
            </p>
            <h2 id="email-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl lg:text-4xl">
              Your business deserves more than a free email address.
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              Professional email uses your own domain name — so every message you send
              reinforces your brand. Instead of a generic address, your team communicates
              as <span className="font-semibold text-brand-green">you@yourcompany.ng</span>,
              building trust with customers, partners, and institutions from the first
              contact.
            </p>
            <p className="mt-3 text-base text-ink-muted">
              Dotmac Cloud's business email hosting keeps your organization credible and
              connected, with the support of a Nigerian team that understands how local
              businesses work.
            </p>

            <a
              href="https://CLIENT-AREA-DOMAIN.example/store/email-hosting"
              className="btn-primary mt-6"
            >
              Explore email hosting
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Right: visual */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-xl2 border border-[var(--border)] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white">
                  <AtSign className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-green-strong">
                    New message
                  </p>
                  <p className="text-xs text-ink-muted">From a branded address</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-brand-green-xlight p-3">
                  <p className="text-xs text-ink-muted">From</p>
                  <p className="text-sm font-semibold text-brand-green">
                    ada@yourcompany.ng
                  </p>
                </div>
                <div className="rounded-lg bg-brand-cream p-3">
                  <p className="text-xs text-ink-muted">To</p>
                  <p className="text-sm font-semibold text-ink-primary">
                    partner@example.com
                  </p>
                </div>
                <div className="rounded-lg bg-brand-cream p-3">
                  <p className="text-xs text-ink-muted">Subject</p>
                  <p className="text-sm font-semibold text-ink-primary">
                    Proposal follow-up
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-dashed border-brand-green/30 p-4">
                <p className="text-sm text-ink-muted">
                  Every message from your domain builds recognition and trust —
                  something a free email address can never do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
