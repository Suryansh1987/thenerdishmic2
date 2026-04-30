const BRANDS = [
  { name: "Coursera", mark: "C", color: "from-blue-500 to-blue-700" },
  { name: "Meta", mark: "M", color: "from-sky-500 to-indigo-600" },
  { name: "NBA", mark: "N", color: "from-red-500 to-blue-700" },
  { name: "NFL", mark: "F", color: "from-blue-800 to-red-600" },
  { name: "UN", mark: "U", color: "from-cyan-500 to-blue-600" },
  { name: "Eluna Network", mark: "E", color: "from-violet-500 to-fuchsia-600" },
  { name: "Good Morning Gorgeous", mark: "G", color: "from-amber-500 to-orange-600" },
  { name: "Serenitree Yoga", mark: "S", color: "from-emerald-500 to-teal-600" },
  { name: "Genxsis", mark: "Gx", color: "from-neutral-700 to-neutral-900" },
  { name: "Apricity", mark: "A", color: "from-orange-500 to-rose-600" },
];

export default function BrandScroll() {
  return (
    <section
      aria-label="Brands we work with"
      className="relative w-full overflow-hidden border-y border-foreground/5 bg-background py-8 sm:py-10"
    >
      <div className="mx-auto mb-5 max-w-7xl px-4 text-center sm:mb-6 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">
          Trusted by founders & teams at
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="flex w-max items-center gap-8 px-4 [animation:reel-marquee_45s_linear_infinite] sm:gap-16 sm:px-6">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex select-none items-center gap-2.5 whitespace-nowrap rounded-full border border-foreground/10 bg-card px-3 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md sm:gap-3 sm:px-4 sm:py-2.5"
            >
              <span
                className={`grid h-7 w-7 place-content-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs ${brand.color}`}
              >
                {brand.mark}
              </span>
              <span className="text-base font-semibold tracking-tight text-card-foreground/80 sm:text-xl">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
