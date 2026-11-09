import { createPortal } from "react-dom";
import { pageHref, currentPage } from "@/config/pages";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X, Phone, LogIn, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import {
  primaryNav,
  hostingMegaMenu,
  domainsMegaMenu,
  type MegaMenuGroup,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { whmcsConfig } from "@/config/whmcs";
import { trackEvent } from "@/lib/analytics";

const MEGA_MENUS: Record<string, MegaMenuGroup> = {
  Hosting: hostingMegaMenu,
  Domains: domainsMegaMenu,
};

export function Header({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const headerRef = useRef<HTMLElement>(null);
  const menuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = useCallback((label: string) => {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    setOpenMenu(label);
  }, []);

  const scheduleCloseMega = useCallback(() => {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, []);

  useEffect(() => {
    return () => {
      if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) closeMobile(); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [closeMobile]);

  const handleLogin = () => {
    trackEvent("client_login_clicked");
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full text-brand-green-strong transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "border-b border-[var(--border)] bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(7,29,20,.08)]"
          : "border-b border-[var(--border)] bg-white"
      }`}
    >
      {/* Trust strip */}
      <div className="hidden border-b border-[var(--border)] bg-brand-green-xlight xl:block">
        <div className="mx-auto flex max-w-container items-center justify-center px-6 py-1.5">
          <p className="text-xs font-semibold text-brand-green">
            {siteConfig.trustStrip}
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={pageHref("home")} className="shrink-0" aria-label="Dotmac Cloud homepage">
          <Logo markOnly />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 xl:block" aria-label="Primary">
          <ul className="flex items-center justify-center gap-0 xl:gap-0.5">
            {primaryNav.map((link) => {
              const hasMega = MEGA_MENUS[link.label];
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasMega && openMega(link.label)}
                  onMouseLeave={() => hasMega && scheduleCloseMega()}
                >
                  <a
                    href={link.href} aria-current={link.href === pageHref(currentPage() ?? "home") ? "page" : undefined}
                    className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-lg px-1.5 py-2 text-[12px] font-semibold text-brand-green-strong/75 transition-colors duration-200 hover:bg-brand-green-light hover:text-brand-green xl:gap-1 xl:px-2.5 xl:text-[13px]"
                    aria-expanded={hasMega ? openMenu === link.label : undefined}
                    aria-haspopup={hasMega ? "true" : undefined}
                    onFocus={() => hasMega && openMega(link.label)}
                    onBlur={() => hasMega && scheduleCloseMega()}
                  >
                    {link.label}
                    {hasMega && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-220 ${
                          openMenu === link.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </a>

                  {hasMega && openMenu === link.label && (
                    <MegaMenu group={MEGA_MENUS[link.label]} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right utilities */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={onTalkToExpert}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-green-strong/75 transition-colors duration-200 hover:bg-brand-green-light hover:text-brand-green 2xl:inline-flex whitespace-nowrap"
            type="button"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Talk to an expert
          </button>
          <a
            href={whmcsConfig.clientLoginUrl}
            onClick={handleLogin}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-green-strong/75 transition-colors duration-200 hover:bg-brand-green-light hover:text-brand-green sm:inline-flex"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Client Portal
          </a>
          <a href={pageHref("domains", "#domain-search")} className="btn-primary hidden sm:inline-flex">
            Get started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-brand-green xl:hidden"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            type="button"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && createPortal(
        <MobileMenu onClose={closeMobile} onTalkToExpert={onTalkToExpert} />,
        document.body
      )}
    </header>
  );
}

function MegaMenu({ group }: { group: MegaMenuGroup }) {
  return (
    <div
      className="absolute left-0 top-full z-50 w-[min(680px,calc(100vw-3rem))] pt-3"
      role="menu"
    >
      <div className="rounded-xl2 border border-[var(--border)] bg-white p-3 shadow-xl">
        <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {group.label}
        </p>
        <ul className="grid grid-cols-2 gap-1">
          {group.items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group block rounded-lg px-3 py-2.5 transition-colors duration-220 hover:bg-brand-green-xlight"
                role="menuitem"
              >
                <span className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-green group-hover:text-brand-green-mid">
                    {item.label}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-ink-muted opacity-0 transition-opacity duration-220 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-0.5 block text-xs text-ink-muted">
                  {item.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileMenu({
  onClose,
  onTalkToExpert,
}: {
  onClose: () => void;
  onTalkToExpert: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollPosition = window.scrollY;
    const original = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      rootOverflow: document.documentElement.style.overflow,
    };
    const appRoot = document.getElementById("root");
    const wasInert = appRoot?.inert ?? false;
    if (appRoot) appRoot.inert = true;
    document.documentElement.style.overflow = "hidden";
    Object.assign(document.body.style, { overflow: "hidden", position: "fixed", top: `-${scrollPosition}px`, width: "100%" });
    closeRef.current?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.removeEventListener("keydown", trap);
      document.documentElement.style.overflow = original.rootOverflow;
      Object.assign(document.body.style, { overflow: original.overflow, position: original.position, top: original.top, width: original.width });
      if (appRoot) appRoot.inert = wasInert;
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
      if (trigger && trigger.getClientRects().length > 0) trigger.focus({ preventScroll: true });
    };
  }, [onClose]);

  const handleLogin = () => {
    trackEvent("client_login_clicked");
  };

  const toggle = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[2147483100] xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className="mobile-backdrop absolute inset-0 bg-brand-green-strong/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="mobile-drawer absolute right-0 top-0 flex h-full max-h-[100dvh] w-[min(420px,100vw)] flex-col bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-white px-5 py-3.5 text-brand-green-strong">
          <Logo />
          <button
            ref={closeRef}
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-brand-green"
            aria-label="Close menu"
            type="button"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {primaryNav.map((link) => {
              const group = MEGA_MENUS[link.label];
              if (group) {
                const isOpen = expanded === link.label;
                return (
                  <li key={link.label}>
                    <div className="flex items-center rounded-lg hover:bg-brand-green-xlight">
                      <a
                        href={link.href}
                        onClick={onClose}
                        aria-current={link.href === pageHref(currentPage() ?? "home") ? "page" : undefined}
                        className="flex min-h-11 flex-1 items-center px-3 py-2.5 text-sm font-semibold text-ink-primary"
                      >
                        {link.label}
                      </a>
                      <button
                        onClick={() => toggle(link.label)}
                        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-brand-green"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${link.label} links`}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${link.label.toLowerCase()}`}
                        type="button"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-220 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                    </div>
                    {isOpen && (
                      <ul id={`mobile-submenu-${link.label.toLowerCase()}`} className="ml-3 border-l border-[var(--border)] py-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-brand-green-xlight hover:text-brand-green"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={link.label}>
                  <a
                    href={link.href} aria-current={link.href === pageHref(currentPage() ?? "home") ? "page" : undefined}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-primary hover:bg-brand-green-xlight"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
            <button
              onClick={() => {
                onTalkToExpert();
                onClose();
              }}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-primary hover:bg-brand-green-xlight"
              type="button"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Talk to an expert
            </button>
            <a
              href={whmcsConfig.clientLoginUrl}
              onClick={handleLogin}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-primary hover:bg-brand-green-xlight"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Client Portal
            </a>
          </div>
        </nav>

        <div className="shrink-0 border-t border-[var(--border)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href={pageHref("domains", "#domain-search")}
            onClick={onClose}
            className="btn-primary w-full"
          >
            Get started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
