export type ClientLogo = {
  name: string;
  // PLACEHOLDER: Replace with real logo asset path before production.
  logoSrc: string | null;
  monogram: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "NHIA",
    logoSrc: null,
    monogram: "NHIA",
  },
];

export const trustMarks: string[] = [
  "NiRA-accredited registrar",
  "24/7 technical support",
  "Abuja & Lagos",
  "Serving Nigerian organizations since 2008",
];

export type Metric = {
  value: string;
  label: string;
};

export const approvedMetrics: Metric[] = [
  { value: "Since 2008", label: "Serving Nigerian organizations" },
  { value: "50+", label: "Government agencies and MDAs served by Dotmac Technologies" },
  { value: "Abuja & Lagos", label: "Local presence and support" },
  { value: "24/7", label: "Technical support and network monitoring" },
];
