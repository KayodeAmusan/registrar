import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { LogoMark } from "./Logo";
import {
  hostingMegaMenu,
  domainsMegaMenu,
  otherServices,
  footerCompany,
  footerLegal,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const footerColumns = [
  { title: "Hosting Packages", items: hostingMegaMenu.items },
  { title: "Domains", items: domainsMegaMenu.items },
  { title: "Other Services", items: otherServices.map((s) => ({ label: s.label, href: s.href, description: "" })) },
  { title: "Company", items: footerCompany.map((c) => ({ label: c.label, href: c.href, description: "" })) },
  { title: "Legal", items: footerLegal.map((l) => ({ label: l.label, href: l.href, description: "" })) },
];

export function Footer() {
  const [openCol, setOpenCol] = useState<number | null>(null);

  const handleWhatsapp = () => {
    trackEvent("whatsapp_clicked");
  };

  return (
    <footer className="border-t border-[var(--border)] bg-brand-green-strong text-brand-cream" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-container px-6 py-14">
        {/* Desktop columns */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <LogoMark />
            <p className="mt-4 text-sm text-brand-cream/70">
              Dotmac Cloud — A Dotmac Technologies company.
            </p>
            <p className="mt-2 text-sm text-brand-cream/70">
              {siteConfig.positioning}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-brand-cream">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-brand-cream/70 transition-colors duration-220 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordions */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <div>
              <p className="font-display text-base font-bold text-white">Dotmac Cloud</p>
              <p className="text-xs text-brand-cream/70">A Dotmac Technologies company</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2">
            {footerColumns.map((col, i) => {
              const isOpen = openCol === i;
              return (
                <li key={col.title} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenCol(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold text-brand-cream"
                    type="button"
                  >
                    {col.title}
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </button>
                  {isOpen && (
                    <ul className="space-y-2 pb-3">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block py-1 text-sm text-brand-cream/70"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact details */}
        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-brand-cream">Abuja Office</h3>
            <p className="mt-2 text-sm text-brand-cream/70">
              {siteConfig.contact.offices.abuja.fullAddress}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-cream">Lagos Office</h3>
            <p className="mt-2 text-sm text-brand-cream/70">
              {siteConfig.contact.offices.lagos.fullAddress}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-cream">Contact</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-brand-cream/70 transition-colors duration-220 hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-sm text-brand-cream/70 transition-colors duration-220 hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  onClick={handleWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-cream/70 transition-colors duration-220 hover:text-white"
                >
                  WhatsApp support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-cream">Follow</h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <a href={siteConfig.contact.social.twitter} className="text-sm text-brand-cream/70 hover:text-white" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href={siteConfig.contact.social.facebook} className="text-sm text-brand-cream/70 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href={siteConfig.contact.social.linkedin} className="text-sm text-brand-cream/70 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href={siteConfig.contact.social.instagram} className="text-sm text-brand-cream/70 hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-brand-cream/60">
            © {new Date().getFullYear()} Dotmac Cloud — A Dotmac Technologies company. All rights reserved.
          </p>
          <p className="text-xs text-brand-cream/60">
            NiRA-accredited .ng registrar
          </p>
        </div>
      </div>
    </footer>
  );
}
