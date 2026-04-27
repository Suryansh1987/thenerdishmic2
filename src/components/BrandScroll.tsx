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
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex select-none items-center gap-3 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-4 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
            >
              <span
                className={`grid h-8 w-8 place-content-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${brand.color}`}
              >
                {brand.mark}
              </span>
              <span className="text-lg font-semibold tracking-tight text-neutral-700 sm:text-xl">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
