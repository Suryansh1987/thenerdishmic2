"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="relative z-30 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-0">
          <Image
            src="/tnm-logo.png"
            alt="The Nerdish Mic"
            width={128}
            height={128}
            priority
            className="h-14 w-14 object-cover sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            thenerdishmic
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="https://cal.com/thenerdishmic/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-foreground py-2 pl-5 pr-2 text-sm font-medium text-background transition-colors hover:opacity-90 sm:inline-flex"
          >
            Book a call
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
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-surface-1 text-foreground/80 transition-colors hover:text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-surface-1 shadow-2xl">
            <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
              <span className="text-base font-semibold text-foreground">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/80 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-3 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-foreground/10 p-5">
              <Link
                href="https://cal.com/thenerdishmic/discovery"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-2 rounded-full bg-foreground py-2 pl-5 pr-2 text-sm font-medium text-background"
              >
                Book a call
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
