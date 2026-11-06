export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuItem = {
  label: string;
  href: string;
  description: string;
};

export type MegaMenuGroup = {
  label: string;
  items: MegaMenuItem[];
};

export const primaryNav: NavLink[] = [
  { label: "Hosting", href: "#hosting" },
  { label: "Domains", href: "#domains" },
  { label: "Email & Productivity", href: "#email" },
  { label: "Cloud & Servers", href: "#cloud" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#faq" },
];

export const hostingMegaMenu: MegaMenuGroup = {
  label: "Hosting Packages",
  items: [
    { label: "Web Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/web-hosting", description: "Reliable hosting for personal, business, and agency websites." },
    { label: "WordPress Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/wordpress-hosting", description: "Hosting optimized for WordPress sites." },
    { label: "Reseller Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/reseller-hosting", description: "Start your own hosting business." },
    { label: "VPS Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/vps-hosting", description: "Virtual servers with dedicated resources." },
    { label: "Dedicated Servers", href: "https://CLIENT-AREA-DOMAIN.example/store/dedicated-servers", description: "Full physical servers for demanding workloads." },
    { label: "Windows Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/windows-hosting", description: "Hosting for ASP.NET and Windows applications." },
    { label: "Cloud Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/cloud-hosting", description: "Scalable cloud infrastructure for applications." },
    { label: "Email Hosting", href: "https://CLIENT-AREA-DOMAIN.example/store/email-hosting", description: "Professional branded email for your organization." },
  ],
};

export const domainsMegaMenu: MegaMenuGroup = {
  label: "Domains",
  items: [
    { label: "Domain Registration", href: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&domain=register", description: "Find and register a new domain name." },
    { label: "Domain Transfer", href: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&domain=transfer", description: "Move your existing domain to Dotmac Cloud." },
    { label: "Domain Reseller", href: "https://CLIENT-AREA-DOMAIN.example/store/domain-reseller", description: "Resell domains under your own brand." },
    { label: "Premium Domain", href: "https://CLIENT-AREA-DOMAIN.example/store/premium-domains", description: "Explore premium domain names." },
    { label: ".NG Domain Registration", href: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&domain=register", description: "Register Nigerian .ng domain extensions." },
    { label: "Free DNS", href: "https://CLIENT-AREA-DOMAIN.example/store/free-dns", description: "Manage DNS at no extra cost." },
  ],
};

export const otherServices: NavLink[] = [
  { label: "Web Design", href: "https://CLIENT-AREA-DOMAIN.example/store/web-design" },
  { label: "Website Builder", href: "https://CLIENT-AREA-DOMAIN.example/store/website-builder" },
  { label: "SSL Certificates", href: "https://CLIENT-AREA-DOMAIN.example/store/ssl-certificates" },
  { label: "SiteLock", href: "https://CLIENT-AREA-DOMAIN.example/store/sitelock" },
  { label: "CodeGuard Backup", href: "https://CLIENT-AREA-DOMAIN.example/store/codeguard" },
  { label: "Start a Web Hosting Business", href: "https://CLIENT-AREA-DOMAIN.example/store/reseller-hosting" },
];

export const footerCompany: NavLink[] = [
  { label: "About Dotmac", href: "https://CLIENT-AREA-DOMAIN.example/about" },
  { label: "Dotmac Technologies", href: "https://www.dotmac.ng" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "https://CLIENT-AREA-DOMAIN.example/support" },
];

export const footerLegal: NavLink[] = [
  { label: "Terms", href: "https://CLIENT-AREA-DOMAIN.example/terms" },
  { label: "Privacy", href: "https://CLIENT-AREA-DOMAIN.example/privacy" },
  { label: "Acceptable Use", href: "https://CLIENT-AREA-DOMAIN.example/acceptable-use" },
  { label: "Service Level Agreement", href: "https://CLIENT-AREA-DOMAIN.example/sla" },
];
