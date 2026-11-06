import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const INTEREST_AREAS = [
  "Cloud hosting",
  "Dedicated infrastructure",
  "Business email",
  "Continuity & backup",
  "Security",
  "Multi-site requirements",
  "Other",
];

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusTimer = setTimeout(() => {
      if (submitted) {
        closeBtnRef.current?.focus();
      } else {
        firstFieldRef.current?.focus();
      }
    }, 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose, submitted]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("enterprise_contact_clicked", { source: "modal" });
    // PLACEHOLDER: This form does not submit to a backend yet.
    // Wire to an edge function, email service, or WHMCS lead capture before production.
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-green-strong/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl2 border border-[var(--border)] bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
          <h2 id="contact-modal-title" className="font-display text-lg font-bold text-brand-green-strong">
            Talk to a cloud specialist
          </h2>
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink-muted hover:bg-brand-green-light hover:text-brand-green"
            aria-label="Close dialog"
            type="button"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-brand-green" aria-hidden="true" />
            <p className="mt-4 font-display text-lg font-bold text-brand-green-strong">
              Thank you for reaching out.
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              A Dotmac Cloud specialist will contact you shortly. For urgent enquiries,
              email <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-green">{siteConfig.contact.email}</a> or call {siteConfig.contact.phone}.
            </p>
            <button onClick={handleClose} className="btn-secondary mt-6">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5">
            <p className="mb-4 text-sm text-ink-muted">
              Tell us a little about your needs and we'll be in touch.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  ref={firstFieldRef}
                  type="text"
                  name="name"
                  required
                  className="form-input"
                />
              </Field>
              <Field label="Work email" required>
                <input type="email" name="email" required className="form-input" />
              </Field>
              <Field label="Phone">
                <input type="tel" name="phone" className="form-input" />
              </Field>
              <Field label="Organization">
                <input type="text" name="organization" className="form-input" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Area of interest">
                <select name="interest" className="form-input">
                  {INTEREST_AREAS.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Brief requirements">
                <textarea
                  name="requirements"
                  rows={3}
                  className="form-input resize-none"
                  placeholder="Tell us about your project, timeline, or challenge."
                />
              </Field>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-primary">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {children}
    </label>
  );
}
