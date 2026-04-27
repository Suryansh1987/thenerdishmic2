"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

const REEL_IDS = [
  "4882",
  "50122",
  "39767",
  "4549",
  "21704",
  "31377",
  "40972",
  "4761",
  "4524",
  "4886",
  "33484",
  "4791",
] as const;

const REEL_META = [
  { handle: "@nina.cuts", views: "2.4M", title: "Hook in 0.8s" },
  { handle: "@beacon", views: "1.1M", title: "Studio launch" },
  { handle: "@mark_locus", views: "890K", title: "Day in life" },
  { handle: "@sofia.builds", views: "3.2M", title: "Founder POV" },
  { handle: "@lumenlabs", views: "560K", title: "Brand spot" },
  { handle: "@alex.cart", views: "4.7M", title: "Big reveal" },
  { handle: "@priya.s", views: "1.8M", title: "Tutorial cut" },
  { handle: "@coldfusion", views: "2.9M", title: "Mini-doc" },
  { handle: "@buildwith", views: "720K", title: "Process reel" },
  { handle: "@thecreator", views: "1.3M", title: "Behind scenes" },
  { handle: "@studio.lab", views: "2.1M", title: "Punchy edit" },
  { handle: "@tomas.v", views: "950K", title: "Quick cut" },
];

const reels = REEL_IDS.map((id, i) => ({
  id: i,
  src: `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`,
  ...REEL_META[i],
}));

interface ReelCardProps {
  reel: (typeof reels)[number];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

function ReelCard({ reel, isActive, onEnter, onLeave }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isActive;
    if (isActive) v.volume = 1;
  }, [isActive]);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative h-[440px] w-[248px] shrink-0 overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]"
    >
      <video
        ref={videoRef}
        src={reel.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Top gradient + handle */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between bg-gradient-to-b from-black/60 to-transparent p-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-rose-500 text-[10px] font-bold text-white ring-2 ring-white/30">
            {reel.handle.charAt(1).toUpperCase()}
          </span>
          <span className="text-xs font-semibold text-white drop-shadow">
            {reel.handle}
          </span>
        </div>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
          {reel.views}
        </span>
      </div>

      {/* Bottom gradient + meta */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
        <p className="text-sm font-semibold text-white drop-shadow">
          {reel.title}
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-white/80">
          <Play className="h-3 w-3 fill-current" />
          Auto-playing
        </div>
      </div>

      {/* Volume indicator */}
      <div
        className={`absolute right-3 top-14 z-20 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
          isActive
            ? "bg-primary text-white shadow-[0_8px_20px_-6px_rgba(255,90,31,0.7)]"
            : "bg-white/20 text-white"
        }`}
      >
        {isActive ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </div>

      {/* Hover hint */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-colors duration-300 group-hover:from-primary/10 group-hover:to-transparent" />
    </div>
  );
}

export default function Reels() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const paused = activeId !== null;

  return (
    <section
      id="reels"
      className="relative w-full overflow-hidden bg-neutral-950 py-24 text-white"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Short-form
        </span>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Reels that <span className="text-primary">don&rsquo;t scroll past</span>.
          </h2>
          <p className="max-w-md text-lg text-white/60">
            Hover any reel to pause the row and unmute. We ship 30+ short-form
            cuts per brand each month — across TikTok, Reels and Shorts.
          </p>
        </div>
      </div>

      <div className="relative mt-16">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-950 to-transparent" />

        <div
          className="flex w-max gap-6 px-6 will-change-transform [animation:reel-marquee_60s_linear_infinite]"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...reels, ...reels].map((reel, i) => (
            <ReelCard
              key={`${reel.id}-${i}`}
              reel={reel}
              isActive={activeId === reel.id && paused}
              onEnter={() => setActiveId(reel.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
