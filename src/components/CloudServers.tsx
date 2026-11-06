import { useEffect, useRef, useState } from "react";
import { Cloud, Server, Cpu, ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
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
    <section id="cloud" className="bg-brand-green-strong py-20 lg:py-28" aria-labelledby="cloud-heading">
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <p className="section-label text-brand-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              Cloud & Servers
            </p>
            <h2 id="cloud-heading" className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Infrastructure that scales with your ambition.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-brand-cream/70 lg:justify-self-end">
            When shared hosting is not enough, Dotmac Cloud gives you the control and
            capacity to run demanding applications, multi-site operations, and
            high-traffic services.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch lg:gap-6">
          <CloudInfrastructureVisual />

          <ul className="grid gap-4 lg:grid-rows-3">
            {CLOUD_OPTIONS.map((opt) => {
              const Icon = ICONS[opt.icon] ?? Cloud;
              return (
                <li key={opt.title}>
                  <a
                    href={opt.href}
                    className="cloud-service-card pressable group flex h-full min-h-[126px] items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.055] p-5 sm:p-6"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#8ed3ac]/10 bg-brand-green text-white shadow-[0_10px_28px_rgba(0,0,0,.14)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-bold text-white">{opt.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-brand-cream/65">{opt.description}</p>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-brand-cream/40 transition-[transform,color] duration-200 group-hover:text-brand-orange"
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

function CloudInfrastructureVisual() {
  return (
    <div
      className="cloud-visual h-full overflow-hidden rounded-[24px] border border-white/10 bg-[#061b12] shadow-[0_24px_70px_rgba(0,0,0,.18)]"
      aria-label="Data centre video showing the infrastructure behind Dotmac Cloud services"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="cloud-status-dot" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
            Data centre operations
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#79d6a0]/10 px-2.5 py-1 text-[10px] font-bold text-[#8ed3ac]">
          <Activity className="h-3 w-3" aria-hidden="true" /> Live infrastructure
        </span>
      </div>

      <div className="relative h-[340px] sm:h-[370px] lg:h-[380px]">
        <CloudVideoFallback />
        <DeferredCloudVideo />
        <div className="cloud-video-tint absolute inset-0" aria-hidden="true" />

        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
          <Status icon={ShieldCheck} label="Secure facility" />
          <Status icon={Zap} label="Cloud ready" />
          <Status icon={Server} label="24/7 monitored" />
        </div>
      </div>
    </div>
  );
}

function CloudVideoFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(12,117,70,.3),transparent_60%)]" aria-hidden="true">
      <span className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#8ed3ac]/15 bg-brand-green/40 text-[#8ed3ac] shadow-2xl">
        <Server className="h-9 w-9" />
      </span>
    </div>
  );
}

function DeferredCloudVideo() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const shouldSkip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 639px)").matches ||
      connection?.saveData;
    if (shouldSkip) return;
    const timer = window.setTimeout(() => setEnabled(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
      else void video.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <video
      ref={videoRef}
      className="cloud-datacenter-video absolute inset-0 h-full w-full object-cover"
      data-ready={ready}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      onCanPlay={() => setReady(true)}
      aria-hidden="true"
    >
      <source src="/dotmac-cloud-datacenter.mp4" type="video/mp4" />
    </video>
  );
}

function Status({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5 rounded-lg border border-white/80 bg-white/95 px-2.5 py-2 text-[10px] font-bold text-brand-green-strong shadow-[0_8px_22px_rgba(0,0,0,.2)] backdrop-blur-md sm:text-[11px]">
      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-green" aria-hidden="true" />
      <span className="truncate">{label}</span>
    </div>
  );
}
