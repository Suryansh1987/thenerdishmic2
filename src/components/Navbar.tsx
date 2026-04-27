import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Works", href: "#works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-[0_8px_20px_-6px_rgba(255,90,31,0.55)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 3.5c-7.2.5-12 4.5-13.5 11L3 18l3.5-4c6.5-1.5 10.5-6.3 11-13.5l3-1Z"
                fill="currentColor"
              />
              <path
                d="M3 21l5.5-5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">
            thenerdishmic
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-neutral-700 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Contact
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
        </Link>
      </nav>
    </header>
  );
}
