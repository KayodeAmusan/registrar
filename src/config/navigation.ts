import { pageHref } from "@/config/pages";
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
  { label: "Hosting", href: pageHref("hosting") },
  { label: "Domains", href: pageHref("domains") },
  { label: "Email & Productivity", href: pageHref("email") },
  { label: "Cloud & Servers", href: pageHref("cloud") },
  { label: "Solutions", href: pageHref("solutions") },
  { label: "Resources", href: pageHref("support") },
];

export const hostingMegaMenu: MegaMenuGroup = {
  label: "Hosting Packages",
  items: [
    { label: "Web Hosting", href: pageHref("hosting"), description: "Reliable hosting for personal, business, and agency websites." },
    { label: "WordPress Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Hosting optimized for WordPress sites." },
    { label: "Reseller Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Start your own hosting business." },
    { label: "VPS Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Virtual servers with dedicated resources." },
    { label: "Dedicated Servers", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Full physical servers for demanding workloads." },
    { label: "Windows Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Hosting for ASP.NET and Windows applications." },
    { label: "Cloud Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Scalable cloud infrastructure for applications." },
    { label: "Email Hosting", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Professional branded email for your organization." },
  ],
};

export const domainsMegaMenu: MegaMenuGroup = {
  label: "Domains",
  items: [
    { label: "Domain Registration", href: "https://cloud.dotmac.ng/whmcs/cart.php?a=add&domain=register&currency=2", description: "Find and register a new domain name." },
    { label: "Domain Transfer", href: "https://cloud.dotmac.ng/whmcs/cart.php?a=add&domain=transfer&currency=2", description: "Move your existing domain to Dotmac Cloud." },
    { label: "Domain Reseller", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Resell domains under your own brand." },
    { label: "Premium Domain", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Explore premium domain names." },
    { label: ".NG Domain Registration", href: "https://cloud.dotmac.ng/whmcs/cart.php?a=add&domain=register&currency=2", description: "Register Nigerian .ng domain extensions." },
    { label: "Free DNS", href: "https://cloud.dotmac.ng/whmcs/contact.php", description: "Manage DNS at no extra cost." },
  ],
};

export const otherServices: NavLink[] = [
  { label: "Web Design", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "Website Builder", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "SSL Certificates", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "SiteLock", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "CodeGuard Backup", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "Start a Web Hosting Business", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
];

export const footerCompany: NavLink[] = [
  { label: "About Dotmac", href: "https://dotmac.ng/" },
  { label: "Dotmac Technologies", href: "https://www.dotmac.ng" },
  { label: "Contact", href: pageHref("support", "#contact") },
  { label: "Support", href: "https://cloud.dotmac.ng/whmcs/submitticket.php" },
];

export const footerLegal: NavLink[] = [
  { label: "Terms", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "Privacy", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "Acceptable Use", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
  { label: "Service Level Agreement", href: "https://cloud.dotmac.ng/whmcs/contact.php" },
];
