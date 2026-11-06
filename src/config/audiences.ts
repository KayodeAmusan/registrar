export type AudienceSegment = {
  id: "individuals" | "smes" | "developers" | "enterprise";
  label: string;
  valueProp: string;
  ctaLabel: string;
  ctaHref: string;
};

export const audienceSegments: AudienceSegment[] = [
  {
    id: "individuals",
    label: "Individuals & startups",
    valueProp:
      "Register your first domain, launch a simple website, and keep costs predictable as you test your idea. Straightforward plans and local support that speaks your language.",
    ctaLabel: "Start with a domain",
    ctaHref: "#domain-search",
  },
  {
    id: "smes",
    label: "SMEs & agencies",
    valueProp:
      "Host business websites, run professional email, and manage multiple client projects with a single accountable partner. Room to grow, with Nigerian support when you need it.",
    ctaLabel: "Compare hosting plans",
    ctaHref: "#hosting",
  },
  {
    id: "developers",
    label: "Developers",
    valueProp:
      "Spin up VPS, cloud, and dedicated infrastructure for applications and demanding workloads. Manage DNS, domains, and environments without jumping between providers.",
    ctaLabel: "Explore advanced hosting",
    ctaHref: "#cloud",
  },
  {
    id: "enterprise",
    label: "Enterprise & government",
    valueProp:
      "Plan cloud hosting, dedicated infrastructure, continuity, and multi-site requirements with a partner that has delivered for Nigerian institutions. Talk to a specialist.",
    ctaLabel: "Talk to an expert",
    ctaHref: "#enterprise",
  },
];
