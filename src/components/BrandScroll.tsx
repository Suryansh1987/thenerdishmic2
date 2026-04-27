const BRANDS = [
  "Northwave",
  "LumenLabs",
  "Beacon Studio",
  "Stride",
  "Helix",
  "Orbital",
  "Foundry",
  "Veritone",
  "Lighthouse",
  "Halcyon",
  "Northstar",
  "Anchor & Co",
];

export default function BrandScroll() {
  return (
    <section
      aria-label="Brands we work with"
      className="relative w-full overflow-hidden border-y border-black/5 bg-white py-10"
    >
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Trusted by founders & teams at
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max items-center gap-16 px-6 [animation:reel-marquee_45s_linear_infinite]">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="select-none whitespace-nowrap text-2xl font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-900 sm:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
