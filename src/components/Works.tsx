"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const VIDEO_IDS = [
  "4882",
  "50122",
  "39767",
  "4549",
  "21704",
  "31377",
  "40972",
  "4761",
  "4524",
] as const;

const POSITIONS = [
  { x: 0, y: 0 },
  { x: 4, y: 0 },
  { x: 8, y: 0 },
  { x: 0, y: 4 },
  { x: 4, y: 4 },
  { x: 8, y: 4 },
  { x: 0, y: 8 },
  { x: 4, y: 8 },
  { x: 8, y: 8 },
] as const;

const frames = VIDEO_IDS.map((id, i) => ({
  id: i + 1,
  video: `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`,
  defaultPos: { ...POSITIONS[i], w: 4, h: 4 },
  corner: "",
  edgeHorizontal: "",
  edgeVertical: "",
  mediaSize: 1,
  borderThickness: 0,
  borderSize: 100,
  isHovered: false,
}));

export default function Works() {
  return (
    <section id="works" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our Work
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Work that moves <span className="text-primary">numbers</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-neutral-600">
              Websites, brand films, ad creative and automations we&rsquo;ve
              shipped for founders and challenger brands. Hover any tile to
              play.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            See full portfolio
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform group-hover:translate-x-0.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-12 aspect-square w-full overflow-hidden rounded-3xl bg-neutral-950 p-2 ring-1 ring-black/5 sm:aspect-[4/3] lg:aspect-[16/10]">
          <DynamicFrameLayout
            frames={frames}
            className="h-full w-full"
            hoverSize={6}
            gapSize={6}
          />
        </div>
      </div>
    </section>
  );
}
