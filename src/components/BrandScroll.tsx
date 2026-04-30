import Image from "next/image";

type Brand =
  | { name: string; logo: string; h: string }
  | { name: string; mark: string; color: string };

const BRANDS: Brand[] = [
  { name: "Coursera", logo: "/brands/coursera.svg", h: "h-12 sm:h-16" },
  { name: "Meta", logo: "/brands/meta.svg", h: "h-8 sm:h-12" },
  { name: "NBA", logo: "/brands/nba.svg", h: "h-14 sm:h-20" },
  { name: "NFL", logo: "/brands/nfl.svg", h: "h-14 sm:h-20" },
  { name: "UN", logo: "/brands/un.svg", h: "h-14 sm:h-20" },
  {
    name: "Eluna Network",
    logo: "/brands/eluna%20network.png",
    h: "h-14 sm:h-20",
  },
  {
    name: "Good Morning Gorgeous",
    logo: "/brands/good%20morning%20gorgeus.png",
    h: "h-14 sm:h-20",
  },
  { name: "Serenitree Yoga", mark: "S", color: "from-emerald-500 to-teal-600" },
  { name: "Genxsis", logo: "/brands/genxis.png", h: "h-14 sm:h-20" },
  {
    name: "Apricity",
    logo: "/brands/Apricity%20counselling.png",
    h: "h-14 sm:h-20",
  },
];

export default function BrandScroll() {
  return (
    <section
      aria-label="Brands we work with"
      className="relative w-full overflow-hidden border-y border-foreground/5 bg-background py-10 sm:py-14"
    >
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:mb-8 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">
          Trusted by founders & teams at
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="flex w-max items-center gap-12 px-4 [animation:reel-marquee_45s_linear_infinite] sm:gap-20 sm:px-6">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex shrink-0 select-none items-center justify-center"
              aria-label={brand.name}
            >
              {"logo" in brand ? (
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={200}
                  height={80}
                  className={`${brand.h} w-auto object-contain opacity-90 transition-opacity hover:opacity-100 dark:invert dark:brightness-150 dark:contrast-125`}
                />
              ) : (
                <span
                  className={`grid h-12 w-12 place-content-center rounded-full bg-gradient-to-br text-base font-bold text-white sm:h-16 sm:w-16 ${brand.color}`}
                  aria-hidden="true"
                >
                  {brand.mark}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
