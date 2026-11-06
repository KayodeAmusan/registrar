import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

export function EnterpriseConsultation({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  const handleClick = () => {
    trackEvent("enterprise_contact_clicked");
    onTalkToExpert();
  };

  return (
    <section
      id="enterprise"
      className="bg-brand-green-strong py-16 lg:py-24"
      aria-labelledby="enterprise-heading"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label text-brand-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
            Enterprise & public sector
          </p>
          <h2
            id="enterprise-heading"
            className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Complex infrastructure deserves a capable partner.
          </h2>
          <p className="mt-4 text-base text-brand-cream/80 sm:text-lg">
            Speak with Dotmac Cloud about cloud hosting, dedicated infrastructure,
            business email, continuity, security, and multi-site requirements.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={handleClick} className="btn-primary" type="button">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Talk to a cloud specialist
            </button>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cream underline-offset-4 transition-colors duration-220 hover:text-white hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email {siteConfig.contact.email}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
