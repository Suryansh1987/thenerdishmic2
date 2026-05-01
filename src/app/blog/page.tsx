import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer4Col from "@/components/ui/footer-column";
import { formatDate, getAllPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Field notes on content velocity, AI automation, and the marketing systems we build for founder-led brands.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: `Blog | ${SITE_NAME}`,
    description:
      "Field notes on content velocity, AI automation, and the marketing systems we build for founder-led brands.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description:
      "Field notes on content velocity, AI automation, and the marketing systems we build for founder-led brands.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <header className="mb-12 sm:mb-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">
              From the studio
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Field notes on shipping growth.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
              Short, opinionated essays on content velocity, AI automation,
              and the marketing systems we build for founder-led brands. New
              posts roughly every other week.
            </p>
          </header>

          <ul className="grid gap-6 sm:gap-8">
            {posts.map(({ meta }) => (
              <li key={meta.slug}>
                <Link
                  href={`/blog/${meta.slug}`}
                  className="group block rounded-3xl border border-foreground/10 bg-surface-1/60 p-6 transition-colors hover:border-foreground/25 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/55">
                    <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{meta.readingTime}</span>
                    {meta.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="ml-1 rounded-full border border-foreground/15 px-2 py-0.5 text-[11px] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[28px]">
                    {meta.title}
                  </h2>
                  <p className="mt-3 text-foreground/65 sm:text-[15px]">
                    {meta.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    Read article
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      aria-hidden="true"
                    >
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
              </li>
            ))}
          </ul>
        </main>

        <Footer4Col />
      </div>
    </div>
  );
}
