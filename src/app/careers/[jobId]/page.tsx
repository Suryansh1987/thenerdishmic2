import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { careerJobs } from "@/db/schema";
import Navbar from "@/components/Navbar";
import Footer4Col from "@/components/ui/footer-column";
import { SITE_URL } from "@/lib/site";
import ApplicationForm from "./ApplicationForm";

const THEME_MAP: Record<string, { accent: string; badge: string; dot: string; border: string; bg: string }> = {
  orange: {
    accent: "text-orange-500",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dot: "bg-orange-500",
    border: "border-orange-500/20",
    bg: "from-orange-500/5 to-red-500/5",
  },
  violet: {
    accent: "text-violet-500",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "bg-violet-500",
    border: "border-violet-500/20",
    bg: "from-violet-500/5 to-purple-500/5",
  },
  blue: {
    accent: "text-blue-500",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-500",
    border: "border-blue-500/20",
    bg: "from-blue-500/5 to-cyan-500/5",
  },
  green: {
    accent: "text-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
    border: "border-emerald-500/20",
    bg: "from-emerald-500/5 to-teal-500/5",
  },
};

function getTheme(theme: string) {
  return THEME_MAP[theme] ?? THEME_MAP.orange;
}

type Props = { params: Promise<{ jobId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { jobId } = await params;
  const [job] = await db
    .select({ title: careerJobs.title, description: careerJobs.description })
    .from(careerJobs)
    .where(eq(careerJobs.id, jobId))
    .limit(1);

  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} — Careers`,
    description: job.description,
    alternates: { canonical: `${SITE_URL}/careers/${jobId}` },
  };
}

export default async function JobPage({ params }: Props) {
  const { jobId } = await params;

  const [job] = await db
    .select()
    .from(careerJobs)
    .where(eq(careerJobs.id, jobId))
    .limit(1);

  if (!job) notFound();

  const theme = getTheme(job.theme);
  const isClosed = job.status === "closed";

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-10">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All openings
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <div className="mb-2 flex items-center gap-2">
                {isClosed ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                    Closed
                  </span>
                ) : (
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${theme.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${theme.dot} animate-pulse`} />
                    Open
                  </span>
                )}
                <span className="text-xs text-foreground/40">{job.type} · {job.location}</span>
              </div>

              <h1 className="font-[family-name:var(--font-insta-display)] text-3xl font-bold text-foreground sm:text-4xl">
                {job.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-foreground/70">{job.description}</p>

              <div className="mt-8">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/40">What you&apos;ll do</h2>
                <ul className="space-y-3">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                      <svg viewBox="0 0 24 24" className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accent}`} fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/40">Skills &amp; tools</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-foreground/10 bg-secondary px-3 py-1.5 text-xs font-medium text-foreground/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/40">Application questions</h2>
                <ol className="space-y-4">
                  {job.questions.map((q, i) => (
                    <li key={q.id} className="flex gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${theme.accent} bg-foreground/5`}>
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{q.label}</p>
                        <p className="mt-0.5 text-xs text-foreground/50">{q.question}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className={`rounded-3xl border ${theme.border} bg-gradient-to-br ${theme.bg} p-6`}>
                {isClosed ? (
                  <div className="py-8 text-center">
                    <p className="text-base font-semibold text-foreground">Position Closed</p>
                    <p className="mt-2 text-sm text-foreground/50">
                      We&apos;re not accepting applications for this role right now. Check back later or email us directly.
                    </p>
                    <a
                      href="mailto:suryansh@thenerdishmic.com"
                      className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      suryansh@thenerdishmic.com
                    </a>
                  </div>
                ) : (
                  <ApplicationForm
                    jobId={job.id}
                    jobTitle={job.title}
                    questions={job.questions}
                    accentClass={theme.accent}
                  />
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer4Col />
      </div>
    </div>
  );
}
