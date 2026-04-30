"use client";

import { useMemo } from "react";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const VIDEOS = [
  "/5dc2d5400bf345d799a81cf7bea5d5c217774812977271824.mp4",
  "/686fe10e4d214532866a4d9a401021e317774833379724295.mp4",
  "/7323cbb8b8b245819437b805b68c0bec17774810361072712.mp4",
  "/75d43dac243b493491835b99b9a0b36817773119364666793.mp4",
  "/ae3f20109ea842818be4c1498549dca217774817808264368.mp4",
  "/cda38f3ddf0c463ca227bd064c7bc38017774820886617615.mp4",
];

const POSITIONS = [
  { x: 0, y: 0 },
  { x: 4, y: 0 },
  { x: 8, y: 0 },
  { x: 0, y: 4 },
  { x: 4, y: 4 },
  { x: 8, y: 4 },
] as const;

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Works() {
  const frames = useMemo(
    () =>
      shuffle(VIDEOS).map((video, i) => ({
        id: i + 1,
        video,
        defaultPos: { ...POSITIONS[i], w: 4, h: 4 },
        corner: "",
        edgeHorizontal: "",
        edgeVertical: "",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 100,
        isHovered: false,
      })),
    [],
  );

  return (
    <section id="works" className="relative w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our Work
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Work that moves <span className="text-primary">numbers</span>.
            </h2>
            <p className="mt-4 max-w-xl text-base text-foreground/70 sm:mt-5 sm:text-lg">
              Websites, brand films, ad creative and automations we&rsquo;ve
              shipped for founders and challenger brands. Hover any tile to
              play with sound.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-4 pr-2 text-sm font-medium text-background transition-colors hover:opacity-90 sm:pl-5"
          >
            See full portfolio
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5">
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

        <div className="mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-950 p-1.5 ring-1 ring-foreground/5 sm:mt-12 sm:aspect-[3/2] sm:rounded-3xl sm:p-2 lg:aspect-[16/9]">
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
