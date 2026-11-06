import { useState, useRef, useCallback } from "react";
import { Search, AlertCircle, ShieldCheck } from "lucide-react";
import { domainExtensions } from "@/config/domains";
import { buildDomainSearchUrl, trackEvent } from "@/lib/analytics";
import { whmcsConfig } from "@/config/whmcs";

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selectedExt, setSelectedExt] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const stripExtensions = useCallback((value: string): string => {
    const sorted = [...domainExtensions].sort((a, b) => b.value.length - a.value.length);
    let result = value.trim().toLowerCase();
    for (const ext of sorted) {
      if (result.endsWith(ext.value)) {
        result = result.slice(0, -ext.value.length);
        break;
      }
    }
    return result.trim();
  }, []);

  const handleExtClick = (ext: string) => {
    trackEvent("domain_extension_selected", { extension: ext });
    setSelectedExt(ext);
    const base = stripExtensions(query);
    if (base) {
      setQuery(`${base}${ext}`);
    }
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setError("Enter a name to search for your domain.");
      inputRef.current?.focus();
      return;
    }
    const base = stripExtensions(trimmed);
    if (!base || base.length < 1) {
      setError("Enter a valid domain name.");
      inputRef.current?.focus();
      return;
    }
    if (!/^[a-z0-9-]+$/i.test(base)) {
      setError("Use only letters, numbers, and hyphens.");
      inputRef.current?.focus();
      return;
    }
    setError(null);
    trackEvent("domain_search_submitted");
    const ext = selectedExt ?? "";
    const url = buildDomainSearchUrl(base, ext);
    window.location.href = url;
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="domain-search-input" className="sr-only">
          Find your domain name
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              id="domain-search-input"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Enter your business or idea"
              aria-invalid={!!error}
              aria-describedby={error ? "domain-error" : undefined}
              className="w-full rounded-xl2 border border-[var(--border)] bg-white py-3.5 pl-12 pr-4 text-base text-ink-primary placeholder:text-ink-muted/70 shadow-sm transition-colors duration-220 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button type="submit" className="btn-primary sm:px-7">
            <Search className="h-4 w-4" aria-hidden="true" />
            Search domain
          </button>
        </div>

        {error && (
          <p
            id="domain-error"
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
          >
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {error}
          </p>
        )}
      </form>

      <div className="mt-4">
        <p className="sr-only">Choose a domain extension</p>
        <ul className="flex flex-wrap gap-2" role="group" aria-label="Domain extensions">
          {domainExtensions.map((ext) => {
            const isActive = selectedExt === ext.value;
            return (
              <li key={ext.value}>
                <button
                  type="button"
                  onClick={() => handleExtClick(ext.value)}
                  className={`min-h-[36px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-220 ${
                    isActive
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-[var(--border)] bg-white text-brand-green hover:border-brand-green hover:bg-brand-green-light"
                  }`}
                  aria-pressed={isActive}
                >
                  {ext.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-muted">
        <ShieldCheck className="h-4 w-4 shrink-0 text-brand-green-mid" aria-hidden="true" />
        Secure checkout and domain management through Dotmac Cloud.
      </p>
    </div>
  );
}

export { whmcsConfig };
