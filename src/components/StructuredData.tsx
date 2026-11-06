import { useEffect } from "react";
import { faqs } from "@/config/faqs";
import { hostingPlans, formatNaira } from "@/config/plans";
import { whmcsConfig } from "@/config/whmcs";
import { siteConfig } from "@/config/site";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dotmac Cloud",
  alternateName: "Dotmac Technologies",
  description: siteConfig.positioning,
  url: "https://DOTMAC-CLOUD-EXAMPLE.example/",
  parentOrganization: {
    "@type": "Organization",
    name: "Dotmac Technologies",
    foundingDate: "2008",
    areaServed: "NG",
  },
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Hosting",
  provider: {
    "@type": "Organization",
    name: "Dotmac Cloud",
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  offers: hostingPlans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} Hosting`,
    priceCurrency: "NGN",
    price: plan.monthlyPrice,
    description: `${plan.storage} storage. ${plan.description}`,
    url: plan.productUrl,
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function StructuredData() {
  useEffect(() => {
    const schemas: Record<string, unknown>[] = [ORGANIZATION_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA];
    schemas.forEach((schema, i) => {
      const id = `ld+json-dotmac-${i}`;
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    return () => {
      for (let i = 0; i < schemas.length; i++) {
        document.getElementById(`ld+json-dotmac-${i}`)?.remove();
      }
    };
  }, []);

  return null;
}

export { ORGANIZATION_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA, whmcsConfig, formatNaira, hostingPlans };
