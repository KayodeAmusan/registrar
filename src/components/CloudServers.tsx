import { Cloud, Server, Cpu, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CLOUD_OPTIONS: { title: string; description: string; icon: string; href: string }[] = [
  {
    title: "VPS Hosting",
    description: "Virtual servers with dedicated resources for applications that need more control.",
    icon: "Server",
    href: "https://CLIENT-AREA-DOMAIN.example/store/vps-hosting",
  },
  {
    title: "Cloud Hosting",
    description: "Scalable infrastructure that grows with your traffic and workloads.",
    icon: "Cloud",
    href: "https://CLIENT-AREA-DOMAIN.example/store/cloud-hosting",
  },
  {
    title: "Dedicated Servers",
    description: "Full physical servers for demanding, high-performance workloads.",
    icon: "Cpu",
    href: "https://CLIENT-AREA-DOMAIN.example/store/dedicated-servers",
  },
];

const ICONS: Record<string, LucideIcon> = { Cloud, Server, Cpu };

export function CloudServers() {
  return (
    <section id="cloud" className="bg-brand-green-strong py-16 lg:py-24" aria-labelledby="cloud-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: heading + image */}
          <div>
            <p className="section-label text-brand-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              Cloud & Servers
            </p>
            <h2 id="cloud-heading" className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Infrastructure that scales with your ambition.
            </h2>
            <p className="mt-4 text-base text-brand-cream/80">
              When shared hosting is not enough, Dotmac Cloud gives you the control and
              capacity to run demanding applications, multi-site operations, and
              high-traffic services.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl2 border border-white/10">
              <img
                src="https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&w=940"
                alt="Modern server infrastructure in a secure data center"
                loading="lazy"
                width={940}
                height={630}
                className="h-56 w-full object-cover lg:h-64"
              />
            </div>
          </div>

          {/* Right: options */}
          <ul className="space-y-3">
            {CLOUD_OPTIONS.map((opt) => {
              const Icon = ICONS[opt.icon] ?? Cloud;
              return (
                <li key={opt.title}>
                  <a
                    href={opt.href}
                    className="group flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/5 p-5 transition-all duration-220 hover:border-brand-orange/40 hover:bg-white/10"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-white">{opt.title}</h3>
                      <p className="mt-1 text-sm text-brand-cream/70">{opt.description}</p>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-brand-cream/50 transition-all duration-220 group-hover:translate-x-1 group-hover:text-brand-orange"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
