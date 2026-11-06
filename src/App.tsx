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
import { StructuredData } from "@/components/StructuredData";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <>
      <StructuredData />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header onTalkToExpert={openContact} />

      <main id="main-content">
        <Hero onTalkToExpert={openContact} />
        <ClientTrust />
        <ProductPathways />
        <Pricing />
        <WhyDotmac />
        <AudienceJourney />
        <EmailFeature />
        <CloudServers />
        <EnterpriseConsultation onTalkToExpert={openContact} />
        <FAQ />
        <FinalCTA onTalkToExpert={openContact} />
      </main>

      <Footer />

      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
