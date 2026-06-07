import type { Metadata } from "next";
import Link from "next/link";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { careerJobs } from "@/db/schema";
import Navbar from "@/components/Navbar";
import Footer4Col from "@/components/ui/footer-column";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the thenerdishmic team. See our open roles in content, video, and design.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

const THEME_MAP: Record<string, { accent: string; dot: string; border: string; bg: string }> = {
  orange: { accent: "text-orange-500", dot: "bg-orange-500", border: "border-orange-500/20", bg: "from-orange-500/10 to-red-500/10" },
  violet: { accent: "text-violet-500", dot: "bg-violet-500", border: "border-violet-500/20", bg: "from-violet-500/10 to-purple-500/10" },
  blue:   { accent: "text-blue-500",   dot: "bg-blue-500",   border: "border-blue-500/20",   bg: "from-blue-500/10 to-cyan-500/10" },
  green:  { accent: "text-emerald-500", dot: "bg-emerald-500", border: "border-emerald-500/20", bg: "from-emerald-500/10 to-teal-500/10" },
};

function getTheme(theme: string) {
  return THEME_MAP[theme] ?? THEME_MAP.orange;
}

export default async function CareersPage() {
  const jobs = await db
    .select()
    .from(careerJobs)
    .orderBy(asc(careerJobs.sortOrder));

  const openJobs = jobs.filter((j) => j.status === "open");
  const closedJobs = jobs.filter((j) => j.status === "closed");

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-10">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-foreground/10 bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/50">
              {openJobs.length > 0 ? `${openJobs.length} open role${openJobs.length > 1 ? "s" : ""}` : "No open roles right now"}
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-insta-display)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Join the team
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-foreground/60 sm:text-lg">
              We&apos;re a remote-first content studio helping founder-led brands grow on social.
              If you love making great content, we want to hear from you.
            </p>
          </div>

          {openJobs.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {openJobs.map((job) => {
                const t = getTheme(job.theme);
                return (
                  <div
                    key={job.id}
                    className={`group relative overflow-hidden rounded-3xl border ${t.border} bg-gradient-to-br ${t.bg} p-8 transition-all hover:shadow-lg`}
                  >
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`inline-block h-2 w-2 rounded-full ${t.dot} animate-pulse`} />
                        <span className="text-xs font-medium uppercase tracking-wider text-foreground/50">Open</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{job.title}</h2>
                      <div className="mt-1 flex items-center gap-3 text-sm text-foreground/50">
                        <span>{job.type}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-foreground/70 line-clamp-3">{job.description}</p>

                    <ul className="mb-6 space-y-2">
                      {job.highlights.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                          <svg viewBox="0 0 24 24" className={`mt-0.5 h-4 w-4 shrink-0 ${t.accent}`} fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-foreground/10 bg-background/50 px-3 py-1 text-xs font-medium text-foreground/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/careers/${job.id}`}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      Apply Now
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {closedJobs.length > 0 && (
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/30">Closed positions</p>
              <div className="space-y-3">
                {closedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between rounded-2xl border border-foreground/5 bg-secondary px-6 py-4 opacity-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground line-through">{job.title}</p>
                      <p className="text-xs text-foreground/40">{job.type} · {job.location}</p>
                    </div>
                    <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/30">Closed</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {jobs.length === 0 && (
            <div className="rounded-3xl border border-foreground/10 bg-secondary p-16 text-center">
              <p className="text-base font-medium text-foreground">No openings right now</p>
              <p className="mt-2 text-sm text-foreground/60">
                We&apos;re not actively hiring, but exceptional talent is always welcome. Send us your work.
              </p>
            </div>
          )}

          <div className="mt-16 rounded-3xl border border-foreground/10 bg-secondary p-8 text-center">
            <p className="text-base font-medium text-foreground">Don&apos;t see your role?</p>
            <p className="mt-2 text-sm text-foreground/60">
              We&apos;re always open to exceptional talent. Reach out at{" "}
              <a href="mailto:thenerdishmic098@gmail.com" className="underline underline-offset-4 hover:text-foreground transition-colors">
                thenerdishmic098@gmail.com
              </a>
            </p>
          </div>
        </main>

        <Footer4Col />
      </div>
    </div>
  );
}
