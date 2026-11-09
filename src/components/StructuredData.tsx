import { pages, type PageKey } from "@/config/pages";
import { useEffect } from "react";
import { faqs } from "@/config/faqs";
import { hostingPlans } from "@/config/plans";
import { siteConfig } from "@/config/site";

const SITE_URL = "https://cloud.dotmac.ng";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Dotmac Technologies Limited",
  alternateName: ["Dotmac Technologies", "Dotmac Cloud"],
  description: siteConfig.positioning,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/dotmac-technologies-logo.png`,
    width: 3000,
    height: 2000,
  },
  image: `${SITE_URL}/dotmac-technologies-logo.png`,
  foundingDate: "2008",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales and customer support",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: "NG",
    availableLanguage: "English",
  },
  knowsAbout: [
    ".ng domain registration",
    "web hosting",
    "business email hosting",
    "cloud infrastructure",
    "dedicated servers",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Dotmac Cloud",
  alternateName: "Dotmac Domains and Hosting",
  inLanguage: "en-NG",
  publisher: { "@id": ORGANIZATION_ID },
};

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: "Dotmac Cloud Nigeria | .NG Domains, Web Hosting & Cloud",
  description:
    "Register .ng domains and host websites, business email and cloud workloads with Dotmac Cloud. Nigerian infrastructure, local support and service since 2008.",
  inLanguage: "en-NG",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/dotmac-technologies-logo.png`,
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#web-hosting-service`,
  name: "Dotmac Cloud Web Hosting",
  serviceType: "Web hosting, domain registration and cloud infrastructure",
  url: `${SITE_URL}/hosting/`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  offers: hostingPlans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} Web Hosting`,
    priceCurrency: "NGN",
    price: plan.monthlyPrice,
    description: `${plan.storage} storage. ${plan.description}`,
    url: `${SITE_URL}/hosting/`,
    availability: "https://schema.org/InStock",
    seller: { "@id": ORGANIZATION_ID },
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function StructuredData({ page }: { page: PageKey | null }) {
  useEffect(() => {
    const content = page ? pages[page] : null;
    const url = content ? `${SITE_URL}${content.path}` : `${SITE_URL}${window.location.pathname}`;
    document.title = content?.title ?? "Page not found | Dotmac Cloud";
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute("content", content?.description ?? "The requested page could not be found.");
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((link) => link.setAttribute("href", url));
    if (!page) document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, follow");
    const schemas: Record<string, unknown>[] = [
      ORGANIZATION_SCHEMA,
      WEBSITE_SCHEMA,
      { ...WEBPAGE_SCHEMA, "@id": `${url}#webpage`, url, name: content?.title ?? "Page not found | Dotmac Cloud", description: content?.description ?? "The requested page could not be found." },
      ...(page === "hosting" ? [{ ...SERVICE_SCHEMA, "@id": `${url}#web-hosting-service`, url }] : []),
      ...(page === "support" ? [{ ...FAQ_SCHEMA, "@id": `${url}#faq` }] : []),
    ];

    schemas.forEach((schema, index) => {
      const id = `ld-json-dotmac-${index}`;
      document.getElementById(id)?.remove();
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        document.getElementById(`ld-json-dotmac-${index}`)?.remove();
      });
    };
  }, [page]);

  return null;
}
