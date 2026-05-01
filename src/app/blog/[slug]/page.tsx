import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer4Col from "@/components/ui/footer-column";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllPosts().map(({ meta }) => ({ slug: meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.meta.slug}`;
  return {
    title: `${post.meta.title} | ${SITE_NAME}`,
    description: post.meta.description,
    keywords: post.meta.tags,
    authors: [{ name: post.meta.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.meta.title,
      description: post.meta.description,
      siteName: SITE_NAME,
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, Content } = post;
  const url = `${SITE_URL}/blog/${meta.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/tnm-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
  };

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All articles
          </Link>

          <article className="mt-8">
            <header className="border-b border-foreground/10 pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/55">
                <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{meta.readingTime}</span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[44px] md:leading-[1.1]">
                {meta.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
                {meta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose-tnm mt-10 space-y-6 text-[17px] leading-[1.75] text-foreground/80">
              <Content />
            </div>

            <footer className="mt-16 rounded-3xl border border-foreground/10 bg-surface-1/60 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
                Liked this?
              </p>
              <p className="mt-2 text-lg text-foreground/85">
                We ship marketing systems like this for founder-led brands. If
                that sounds useful, book a 30-minute discovery call.
              </p>
              <Link
                href="https://cal.com/thenerdishmic/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-5 pr-2 text-sm font-medium text-background transition-colors hover:opacity-90"
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
            </footer>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </main>

        <Footer4Col />
      </div>
    </div>
  );
}
