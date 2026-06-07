"use client";

import { useState } from "react";

type Question = {
  id: string;
  label: string;
  question: string;
  placeholder: string;
  type: "text" | "textarea" | "url";
};

type Props = {
  jobId: string;
  jobTitle: string;
  questions: Question[];
  accentClass: string;
};

type Answers = Record<string, string>;

export default function ApplicationForm({ jobId, jobTitle, questions, accentClass }: Props) {
  const [step, setStep] = useState<"info" | "questions" | "done">("info");
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Answers>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function validateInfo() {
    const errs: Record<string, string> = {};
    if (!info.name.trim()) errs.name = "Name is required.";
    if (!info.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) errs.email = "Enter a valid email.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateAnswers() {
    const errs: Record<string, string> = {};
    for (const q of questions) {
      if (!answers[q.id]?.trim()) errs[q.id] = "This field is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleInfoNext() {
    if (validateInfo()) setStep("questions");
  }

  async function handleSubmit() {
    if (!validateAnswers()) return;
    setSubmitting(true);
    setServerError("");

    const payload = {
      jobId,
      name: info.name,
      email: info.email,
      phone: info.phone,
      answers: questions.map((q) => ({
        questionId: q.id,
        question: q.question,
        answer: answers[q.id] ?? "",
      })),
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong.");
      } else {
        setStep("done");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "done") {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-foreground/10`}>
          <svg viewBox="0 0 24 24" className={`h-8 w-8 ${accentClass}`} fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground">Application sent!</h2>
        <p className="mt-3 max-w-sm text-sm text-foreground/60">
          Thanks for applying for the <strong>{jobTitle}</strong> role. We review every application and
          will reach out within 5–7 days if there&apos;s a fit.
        </p>
      </div>
    );
  }

  if (step === "info") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Your details</h2>
          <p className="mt-1 text-sm text-foreground/50">Step 1 of 2 — basic info</p>
        </div>

        <div className="space-y-4">
          <Field label="Full Name" required error={errors.name}>
            <input
              type="text"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              placeholder="Priya Sharma"
              className="w-full rounded-xl border border-foreground/10 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
          </Field>

          <Field label="Email" required error={errors.email}>
            <input
              type="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-foreground/10 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
          </Field>

          <Field label="Phone" sublabel="optional">
            <input
              type="tel"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-foreground/10 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
          </Field>
        </div>

        <button
          type="button"
          onClick={handleInfoNext}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Continue
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          type="button"
          onClick={() => setStep("info")}
          className="mb-4 flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
            <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <h2 className="text-xl font-bold text-foreground">Role questions</h2>
        <p className="mt-1 text-sm text-foreground/50">Step 2 of 2 — {questions.length} questions</p>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <Field key={q.id} label={`${i + 1}. ${q.label}`} sublabel={q.question} required error={errors[q.id]}>
            {q.type === "textarea" ? (
              <textarea
                rows={4}
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                placeholder={q.placeholder}
                className="w-full resize-none rounded-xl border border-foreground/10 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
            ) : (
              <input
                type={q.type}
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                placeholder={q.placeholder}
                className="w-full rounded-xl border border-foreground/10 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
            )}
          </Field>
        ))}
      </div>

      {serverError && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {serverError}
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Submitting…" : "Submit Application"}
      </button>
    </div>
  );
}

function Field({
  label,
  sublabel,
  required,
  error,
  children,
}: {
  label: string;
  sublabel?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div>
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-red-400">*</span>}
        </label>
        {sublabel && <p className="mt-0.5 text-xs text-foreground/50">{sublabel}</p>}
      </div>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
