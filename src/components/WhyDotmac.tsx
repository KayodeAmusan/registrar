import { MapPin, History, HandshakeIcon, Layers } from "lucide-react";
import { approvedMetrics } from "@/config/clients";

export function WhyDotmac() {
  return (
    <section className="bg-brand-green-xlight py-16 lg:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: editorial copy */}
          <div>
            <p className="section-label">Why Dotmac Cloud</p>
            <h2 id="why-heading" className="mt-3 font-display text-2xl font-bold text-brand-green-strong sm:text-3xl lg:text-4xl">
              A partner who understands the Nigerian digital landscape.
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              Dotmac Cloud is built on Dotmac Technologies' years of delivering
              connectivity, cloud, and infrastructure across Nigeria. You get one
              accountable partner for the essentials of doing business online.
            </p>

            <ul className="mt-8 space-y-6">
              <Pillar
                icon={MapPin}
                title="Local expertise"
                text="Nigerian support and market understanding, available when your team is working — not on another continent's schedule."
              />
              <Pillar
                icon={History}
                title="Proven delivery"
                text="Backed by Dotmac Technologies' history in ICT and digital infrastructure, serving organizations and institutions since 2008."
              />
              <Pillar
                icon={HandshakeIcon}
                title="One accountable partner"
                text="Domains, hosting, email, cloud, connectivity, and technical expertise under one roof — no juggling multiple vendors."
              />
              <Pillar
                icon={Layers}
                title="Built for every stage"
                text="From first websites to growing businesses, agencies, developers, and institutions — the right tools as your needs evolve."
              />
            </ul>
          </div>

          {/* Right: Nigerian context image + metrics */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl2 border border-[var(--border)] shadow-sm">
              <img
                src="https://images.pexels.com/photos/37405043/pexels-photo-37405043.jpeg?auto=compress&cs=tinysrgb&w=940"
                alt="Lagos skyline with modern buildings and lagoon — representing Dotmac's Nigerian presence"
                loading="lazy"
                width={940}
                height={700}
                className="h-64 w-full object-cover lg:h-72"
              />
            </div>

            <ul className="grid grid-cols-2 gap-3">
              {approvedMetrics.map((metric) => (
                <li
                  key={metric.label}
                  className="rounded-xl2 border border-[var(--border)] bg-white p-5"
                >
                  <p className="font-display text-xl font-extrabold text-brand-green tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{metric.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-brand-green-strong">{title}</h3>
        <p className="mt-1 text-sm text-ink-muted">{text}</p>
      </div>
    </li>
  );
}
