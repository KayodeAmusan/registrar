import { pageHref } from "@/config/pages";
export type ProductCard = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon: string;
};

export const productPathways: ProductCard[] = [
  {
    id: "domains",
    title: "Domains",
    description: "Find, register, transfer, and manage your online identity.",
    ctaLabel: "Search domains",
    ctaHref: pageHref("domains", "#domain-search"),
    icon: "Globe",
  },
  {
    id: "hosting",
    title: "Web Hosting",
    description: "Straightforward hosting for personal, business, and agency websites.",
    ctaLabel: "View hosting plans",
    ctaHref: pageHref("hosting"),
    icon: "Server",
  },
  {
    id: "email",
    title: "Business Email",
    description: "Professional email that keeps your organization credible and connected.",
    ctaLabel: "Explore email hosting",
    ctaHref: pageHref("email"),
    icon: "Mail",
  },
  {
    id: "cloud",
    title: "Cloud & Servers",
    description: "Scalable infrastructure for applications, teams, and demanding workloads.",
    ctaLabel: "Explore cloud hosting",
    ctaHref: pageHref("cloud"),
    icon: "Cloud",
  },
];
