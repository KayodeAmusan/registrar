import { whmcsConfig } from "./whmcs";

export type BillingCycle = "monthly" | "annual";

export type HostingPlan = {
  id: "launch" | "grow" | "business" | "businessPlus" | "pro";
  name: string;
  storage: string;
  monthlyPrice: number;
  annualPrice: number;
  annualEffectiveMonthly: string;
  annualSavings: number | null;
  description: string;
  popular: boolean;
  productUrl: string;
};

export const hostingPlans: HostingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    storage: "8 GB",
    monthlyPrice: 1250,
    annualPrice: 15000,
    annualEffectiveMonthly: "₦1,250/month",
    annualSavings: null,
    description: "For personal sites and new ideas.",
    popular: false,
    productUrl: whmcsConfig.productUrls.launch,
  },
  {
    id: "grow",
    name: "Grow",
    storage: "12 GB",
    monthlyPrice: 1700,
    annualPrice: 20000,
    annualEffectiveMonthly: "about ₦1,667/month",
    annualSavings: 400,
    description: "For growing businesses that need more room.",
    popular: false,
    productUrl: whmcsConfig.productUrls.grow,
  },
  {
    id: "business",
    name: "Business",
    storage: "20 GB",
    monthlyPrice: 2250,
    annualPrice: 27000,
    annualEffectiveMonthly: "₦2,250/month",
    annualSavings: null,
    description: "For established business websites and steady traffic.",
    popular: true,
    productUrl: whmcsConfig.productUrls.business,
  },
  {
    id: "businessPlus",
    name: "Business Plus",
    storage: "30 GB",
    monthlyPrice: 3500,
    annualPrice: 39000,
    annualEffectiveMonthly: "₦3,250/month",
    annualSavings: 3000,
    description: "For busy websites, teams, and expanding brands.",
    popular: false,
    productUrl: whmcsConfig.productUrls.businessPlus,
  },
  {
    id: "pro",
    name: "Pro",
    storage: "50 GB",
    monthlyPrice: 5000,
    annualPrice: 55000,
    annualEffectiveMonthly: "about ₦4,583/month",
    annualSavings: 5000,
    description: "For demanding projects and multi-site operations.",
    popular: false,
    productUrl: whmcsConfig.productUrls.pro,
  },
];

export const formatNaira = (amount: number): string =>
  `₦${amount.toLocaleString("en-NG")}`;

export type PlanComparisonRow = {
  feature: string;
  // null = placeholder, not shown publicly until confirmed
  values: (string | null)[];
};

// PLACEHOLDER: Replace null values with confirmed specifications before public display.
export const planComparison: PlanComparisonRow[] = [
  { feature: "Storage", values: ["8 GB", "12 GB", "20 GB", "30 GB", "50 GB"] },
  { feature: "Websites", values: [null, null, null, null, null] },
  { feature: "Email accounts", values: [null, null, null, null, null] },
  { feature: "Database", values: [null, null, null, null, null] },
  { feature: "Backup", values: [null, null, null, null, null] },
];
