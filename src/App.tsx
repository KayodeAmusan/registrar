import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientTrust } from "@/components/ClientTrust";
import { ProductPathways } from "@/components/ProductPathways";
import { Pricing } from "@/components/Pricing";
import { WhyDotmac } from "@/components/WhyDotmac";
import { AudienceJourney } from "@/components/AudienceJourney";
import { EmailFeature } from "@/components/EmailFeature";
import { CloudServers } from "@/components/CloudServers";
import { EnterpriseConsultation } from "@/components/EnterpriseConsultation";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SupportChat } from "@/components/SupportChat";
import { StructuredData } from "@/components/StructuredData";
import { DomainSearch } from "@/components/DomainSearch";
import { currentPage, pages, pageHref, type PageKey } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { whmcsConfig } from "@/config/whmcs";

function PageIntro({ page }: { page: Exclude<PageKey, "home"> }) {
  const content = pages[page];
  return (
    <section className="border-b border-[var(--border)] bg-brand-green-xlight px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-container">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
          <a href={pageHref("home")} className="hover:text-brand-green">Home</a>
          <span aria-hidden="true" className="mx-3">/</span>
          <span aria-current="page">{page === "email" ? "Business email" : page === "cloud" ? "Cloud & servers" : page[0].toUpperCase() + page.slice(1)}</span>
        </nav>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-brand-green-strong sm:text-5xl">{content.heading}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">{content.description}</p>
      </div>
    </section>
  );
}

function DomainsPage() {
  return (
    <>
      <PageIntro page="domains" />
      <section id="domain-search" aria-label="Search for a domain" className="bg-brand-green-strong px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-5 shadow-xl sm:p-8"><DomainSearch /></div>
      </section>
      <section className="mx-auto grid max-w-container gap-8 px-6 py-12 sm:grid-cols-2">
        <div className="rounded-xl2 border border-[var(--border)] p-7">
          <p className="section-label">Already have a name?</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-green-strong">Bring your domain with you.</h2>
          <p className="mt-3 text-sm leading-6 text-ink-muted">Keep your existing online identity and manage your domain with Dotmac Cloud.</p>
          <a className="btn-primary mt-6" href="https://cloud.dotmac.ng/whmcs/cart.php?a=add&domain=transfer&currency=2">Transfer a domain</a>
        </div>
        <div className="rounded-xl2 bg-brand-green-xlight p-7">
          <p className="section-label">NiRA-accredited registrar</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-green-strong">A Nigerian identity, supported locally.</h2>
          <p className="mt-3 text-sm leading-6 text-ink-muted">Choose from .ng, .com.ng and other extensions. Purchases, renewals and domain management are completed in the secure client area.</p>
          <a className="text-link mt-6 inline-flex" href={pageHref("support")}>Get help choosing a domain</a>
        </div>
      </section>
    </>
  );
}

function SupportPage({ onContact }: { onContact: () => void }) {
  return (
    <>
      <PageIntro page="support" />
      <section id="contact" className="mx-auto grid max-w-container gap-6 px-6 py-12 md:grid-cols-3" aria-label="Contact support">
        <div className="rounded-xl2 border border-[var(--border)] p-6">
          <h2 className="font-display text-xl font-bold text-brand-green-strong">Email support</h2>
          <p className="mt-3 text-sm text-ink-muted">Send your question to our team.</p>
          <a className="text-link mt-5 inline-flex break-all" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </div>
        <div className="rounded-xl2 border border-[var(--border)] p-6">
          <h2 className="font-display text-xl font-bold text-brand-green-strong">Manage your services</h2>
          <p className="mt-3 text-sm text-ink-muted">Access billing, renewals and support tickets.</p>
          <a className="text-link mt-5 inline-flex" href={whmcsConfig.clientLoginUrl}>Open client portal</a>
        </div>
        <div className="rounded-xl2 bg-brand-green-xlight p-6">
          <h2 className="font-display text-xl font-bold text-brand-green-strong">Talk to our team</h2>
          <p className="mt-3 text-sm text-ink-muted">Discuss a plan or infrastructure requirement.</p>
          <button type="button" className="text-link mt-5" onClick={onContact}>Contact Dotmac Cloud</button>
        </div>
      </section>
      <FAQ />
    </>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);
  const page = currentPage();

  return (
    <>
      <StructuredData page={page} />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header onTalkToExpert={openContact} />
      <main id="main-content">
        {page === "home" && <><Hero onTalkToExpert={openContact} /><ClientTrust /><ProductPathways /></>}
        {page === "hosting" && <><PageIntro page="hosting" /><Pricing /></>}
        {page === "domains" && <DomainsPage />}
        {page === "email" && <><PageIntro page="email" /><EmailFeature /></>}
        {page === "cloud" && <><PageIntro page="cloud" /><CloudServers /><EnterpriseConsultation onTalkToExpert={openContact} /></>}
        {page === "solutions" && <><PageIntro page="solutions" /><AudienceJourney /><WhyDotmac /><EnterpriseConsultation onTalkToExpert={openContact} /></>}
        {page === "support" && <SupportPage onContact={openContact} />}
        {page === null && <section className="mx-auto max-w-container px-6 py-24"><h1 className="font-display text-4xl font-bold text-brand-green-strong">Page not found</h1><p className="mt-4 text-ink-muted">The page may have moved. Explore our services from the homepage.</p><a href={pageHref("home")} className="btn-primary mt-6">Back to home</a></section>}
        {(page === "home" || page === "email") && <FinalCTA onTalkToExpert={openContact} />}
      </main>
      <Footer />
      <SupportChat onContact={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
