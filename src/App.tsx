import { useState, useCallback, useEffect, useRef, type ReactNode } from "react";
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
        <Reveal><ClientTrust /></Reveal>
        <Reveal><ProductPathways /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><WhyDotmac /></Reveal>
        <Reveal><AudienceJourney /></Reveal>
        <Reveal><EmailFeature /></Reveal>
        <Reveal><CloudServers /></Reveal>
        <Reveal><EnterpriseConsultation onTalkToExpert={openContact} /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FinalCTA onTalkToExpert={openContact} /></Reveal>
      </main>

      <Footer />

      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px", threshold: 0.08 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="scroll-reveal">{children}</div>;
}
