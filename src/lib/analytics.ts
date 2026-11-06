import { whmcsConfig } from "@/config/whmcs";

export type AnalyticsEvent =
  | "domain_search_submitted"
  | "domain_extension_selected"
  | "hosting_billing_cycle_changed"
  | "hosting_plan_selected"
  | "enterprise_contact_clicked"
  | "client_login_clicked"
  | "whatsapp_clicked";

type EventPayload = Record<string, string | number | boolean> | undefined;

/**
 * Analytics hook. Records the event name only — does NOT collect the raw
 * domain query or other personal data by default. Replace the internal
 * dispatcher with an approved analytics provider when configured.
 *
 * PLACEHOLDER: Wire this to your analytics provider (e.g. GA4, Plausible)
 * before production.
 */
export function trackEvent(event: AnalyticsEvent, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push({ event, ...payload });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  if (import.meta.env.DEV) {
    console.debug("[analytics]", event, payload ?? {});
  }
}

export function buildDomainSearchUrl(query: string, extension?: string): string {
  const trimmed = query.trim();
  const term = extension ? `${trimmed}${extension}` : trimmed;
  const encoded = encodeURIComponent(term);
  const separator = whmcsConfig.domainSearchUrl.includes("?") ? "&" : "?";
  return `${whmcsConfig.domainSearchUrl}${separator}query=${encoded}`;
}

export function buildProductUrl(baseUrl: string, cycle: "monthly" | "annual"): string {
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}billingcycle=${cycle}`;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
