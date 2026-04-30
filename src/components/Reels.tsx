"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

const REEL_IDS = [
  "/Video-42.mp4",
  "/Video-383.mp4",
  "/Video-459.mp4",
  "/Video-789.mp4",
  "/Video-889.mp4",
  "/Video-897.mp4",
] as const;

const REEL_META = [
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #1" },
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #2" },
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #3" },
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #4" },
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #5" },
  { handle: "@thenerdishmic", views: "Client Reel", title: "Authority edit #6" },
];

const reels = REEL_IDS.map((src, i) => ({
  id: i,
  src,
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
      className="group relative h-[340px] w-[192px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03] sm:h-[440px] sm:w-[248px] sm:rounded-3xl"
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
      className="relative w-full overflow-hidden bg-neutral-950 py-16 text-white sm:py-24"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-primary/30 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-primary/20 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Short-form
        </span>
        <div className="mt-3 flex flex-col items-start justify-between gap-4 sm:mt-4 sm:gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Reels that <span className="text-primary">don&rsquo;t scroll past</span>.
          </h2>
          <p className="max-w-md text-base text-white/60 sm:text-lg">
            Hover any reel to pause the row and unmute. We ship 30+ short-form
            cuts per brand each month, across TikTok, Reels and Shorts.
          </p>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-16">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-neutral-950 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-neutral-950 to-transparent sm:w-32" />

        <div
          className="flex w-max gap-4 px-4 will-change-transform [animation:reel-marquee_60s_linear_infinite] sm:gap-6 sm:px-6"
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
