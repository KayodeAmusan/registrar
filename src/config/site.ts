export const siteConfig = {
  brandName: "Dotmac Cloud",
  endorsement: "A Dotmac Technologies company",
  positioning: "Nigeria's trusted partner for domains, hosting, business email, and cloud services",
  trustStrip: "NiRA-accredited .ng registrar • Nigerian support",

  contact: {
    email: "cloudsupport@dotmac.ng",
    phone: "+234 812 117 9536",
    phoneHref: "tel:+2348121179536",
    whatsapp: "https://wa.me/2348121179536",
    // PLACEHOLDER: Replace social links with real accounts before production.
    social: {
      twitter: "https://twitter.com/dotmacng",
      facebook: "https://facebook.com/dotmacng",
      linkedin: "https://linkedin.com/company/dotmacng",
      instagram: "https://instagram.com/dotmacng",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
