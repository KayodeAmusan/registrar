import { useEffect, useRef, useState } from "react";
import { Activity, Check, MapPin, Server, ShieldCheck, Wifi } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[590px]" aria-label="Animated overview of Dotmac infrastructure across Nigeria">
      <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit--two" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b2b1e]/85 p-3 shadow-[0_30px_100px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-[#8ed3ac]">
              <Activity className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold text-white">Nigeria cloud fabric</p>
              <p className="text-[10px] text-white/45">Regional infrastructure overview</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8ed3ac]/20 bg-[#8ed3ac]/10 px-3 py-1 text-[10px] font-bold text-[#8ed3ac]">
            <span className="status-dot status-dot--small" aria-hidden="true" /> Live traffic
          </span>
        </div>

        <div className="relative mt-3 h-[330px] overflow-hidden rounded-[20px] border border-white/8 bg-[#061b12] sm:h-[390px]">
          <DeferredHeroVideo />
          <div className="infrastructure-grid absolute inset-0" aria-hidden="true" />
          <div className="ng-visual-glow" aria-hidden="true" />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 390" fill="none" aria-hidden="true">
            <g transform="translate(404 73)">
              <rect width="118" height="222" rx="20" fill="#0B2D20" stroke="rgba(142,211,172,.22)" />
              <rect x="12" y="13" width="94" height="31" rx="9" fill="rgba(255,255,255,.055)" stroke="rgba(255,255,255,.08)" />
              <text x="24" y="33" fill="rgba(255,255,255,.66)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.2">EDGE COMPUTE</text>
              {[57, 100, 143].map((y, index) => (
                <g key={y} className={`ng-rack-unit ng-rack-unit--${index + 1}`} transform={`translate(12 ${y})`}>
                  <rect width="94" height="32" rx="8" fill="#123b2c" stroke="rgba(142,211,172,.15)" />
                  <rect x="12" y="9" width="35" height="4" rx="2" fill="#8ED3AC" opacity=".6" />
                  <rect x="12" y="18" width="25" height="3" rx="1.5" fill="#8ED3AC" opacity=".3" />
                  <circle className="ng-rack-light" cx="78" cy="16" r="5" fill={index === 1 ? "#F15A24" : "#79D6A0"} />
                </g>
              ))}
              <g transform="translate(12 190)">
                <rect width="94" height="20" rx="7" fill="rgba(121,214,160,.08)" />
                <circle cx="13" cy="10" r="3" fill="#79D6A0" />
                <text x="23" y="13" fill="#8ED3AC" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700">CAPACITY AVAILABLE</text>
              </g>
            </g>
          </svg>

          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
            <Metric icon={MapPin} label="Local hubs" value="Abuja · Lagos" />
            <Metric icon={ShieldCheck} label="Monitoring" value="24/7 active" />
            <Metric icon={Wifi} label="Network" value="Live routes" />
          </div>
        </div>
      </div>

      <div className="floating-card floating-card--left hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#143b2c]/92 p-3 shadow-2xl backdrop-blur-xl sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8ed3ac]/12 text-[#8ed3ac]"><Check className="h-4 w-4" /></span>
        <div><p className="text-xs font-bold text-white">Nigeria operations</p><p className="text-[10px] text-white/45">Local support & monitoring</p></div>
      </div>
      <div className="floating-card floating-card--right hidden rounded-2xl border border-white/10 bg-white p-3 shadow-2xl sm:block">
        <div className="flex items-center gap-2"><Server className="h-4 w-4 text-brand-green" /><p className="text-[10px] font-bold uppercase tracking-[.14em] text-brand-green-mid">Edge hubs</p></div>
        <p className="mt-1 font-display text-lg font-extrabold text-brand-green-strong">Abuja · Lagos</p>
      </div>
    </div>
  );
}

function DeferredHeroVideo() {
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
    const timer = window.setTimeout(() => setEnabled(true), 1200);
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
    <>
      <video
        ref={videoRef}
        className="hero-datacenter-video absolute inset-0 h-full w-full object-cover"
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
        <source src={import.meta.env.BASE_URL + "dotmac-datacenter.mp4"} type="video/mp4" />
      </video>
      <div className="hero-video-tint absolute inset-0" aria-hidden="true" />
    </>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Server; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0c2e20]/85 p-2.5 backdrop-blur-sm">
      <Icon className="h-3.5 w-3.5 text-[#8ed3ac]" aria-hidden="true" />
      <p className="mt-2 text-[9px] uppercase tracking-wider text-white/35">{label}</p>
      <p className="truncate text-[11px] font-bold text-white sm:text-xs">{value}</p>
    </div>
  );
}
