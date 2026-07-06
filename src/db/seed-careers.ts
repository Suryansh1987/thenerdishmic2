import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { careerJobs } from "./schema";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const sep = trimmed.indexOf("=");
    if (sep === -1) continue;
    const key = trimmed.slice(0, sep).trim();
    const val = trimmed.slice(sep + 1).trim();
    if (!(key in process.env)) process.env[key] = val;
  }
}

loadEnv();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is required");

const sql = neon(databaseUrl);
const db = drizzle({ client: sql });

const jobs = [
  {
    id: "video-editor",
    title: "Video Editor",
    type: "Freelance / Part-time",
    location: "Remote",
    description:
      "We create scroll-stopping reels and short-form content for founder-led brands. We need an editor who lives and breathes fast-paced video — someone who knows how to hook in 2 seconds and keep attention for 60.",
    highlights: [
      "Edit 4–8 reels per week (raw footage + script provided)",
      "Add captions, sound design, transitions, and motion graphics",
      "Work async — deliver on agreed timelines",
      "Give creative input on hooks, pacing, and formats",
    ],
    skills: [
      "Premiere Pro / CapCut / DaVinci",
      "Motion graphics basics",
      "Fast turnaround mindset",
      "Instagram & Reels native",
    ],
    questions: [
      {
        id: "best_reel",
        label: "Your Best Reel",
        question:
          "Share a link to your best reel or video edit. What was the brief and what made it stand out?",
        placeholder: "https://... or describe the project",
        type: "textarea" as const,
      },
      {
        id: "editing_style",
        label: "Editing Style",
        question:
          "Describe your editing style in 3 words and explain your approach to pacing and hooks.",
        placeholder:
          "e.g. Punchy, cinematic, meme-native — I build tension in the first 2 seconds by...",
        type: "textarea" as const,
      },
      {
        id: "tools",
        label: "Tools You Use",
        question: "What editing tools and plugins do you use day-to-day?",
        placeholder: "e.g. Premiere Pro, After Effects, CapCut, DaVinci...",
        type: "text" as const,
      },
      {
        id: "turnaround",
        label: "Turnaround Time",
        question:
          "What's your typical turnaround for a 60-second reel from receiving the brief?",
        placeholder: "e.g. 24 hours from brief delivery",
        type: "text" as const,
      },
      {
        id: "rate_low_animation",
        label: "Rate — Low Animation Reel",
        question:
          "What do you charge per low-animation reel? (cuts, captions, basic transitions — no heavy motion graphics)",
        placeholder: "e.g. ₹800 / $10 per reel",
        type: "text" as const,
      },
      {
        id: "rate_high_animation",
        label: "Rate — High Animation Reel",
        question:
          "What do you charge per high-animation reel? (motion graphics, kinetic text, complex effects, 3D elements)",
        placeholder: "e.g. ₹2,500 / $30 per reel",
        type: "text" as const,
      },
      {
        id: "portfolio",
        label: "Portfolio / Social",
        question:
          "Drop your portfolio link, YouTube, Instagram, or any social where we can binge your edits.",
        placeholder: "https://...",
        type: "url" as const,
      },
    ],
    status: "open" as const,
    theme: "orange",
    sortOrder: 0,
  },
  {
    id: "long-form-editor",
    title: "Long Form video editor",
    type: "Freelance / Part-time",
    location: "Remote",
    description:
      "We create engaging long-form YouTube videos that educate, entertain, and keep viewers watching until the end. We're looking for a video editor who can transform a rough concept into a polished, compelling story with strong pacing, seamless transitions, and visuals that maximize audience retention and engagement.",
    highlights: [
      "Edit 1–2 long-form YouTube videos per week (script and assets provided)",
      "Craft engaging hooks and strong pacing to maximize viewer retention",
      "Maintain a consistent editing style and brand identity across videos",
      "Incorporate feedback and optimize edits based on performance insights",
    ],
    skills: [
      "Adobe Premiere Pro / DaVinci Resolve / Final Cut Pro",
      "Strong storytelling and pacing for long-form content",
      "Motion graphics, captions, and sound design",
      "Color correction, audio mixing, and seamless transitions",
      "B-roll sourcing and visual enhancement",
      "Ability to optimize videos for audience retention",
      "Fast turnaround while maintaining high quality",
    ],
    questions: [
      {
        id: "best_video",
        label: "Your Best Long-Form Video",
        question:
          "Share a link to your best long-form YouTube video. What was the brief, and how did you approach the editing, pacing, and storytelling?",
        placeholder: "https://... or describe the project",
        type: "textarea" as const,
      },
      {
        id: "hook",
        label: "The First 30 Seconds",
        question:
          "How do you edit the first 30 seconds of a YouTube video to maximize viewer retention? Walk us through your process.",
        placeholder: "I focus on...",
        type: "textarea" as const,
      },
      {
        id: "tools",
        label: "Editing Tools",
        question:
          "What editing tools do you use (Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, etc.)?",
        placeholder: "e.g. Premiere Pro + After Effects + DaVinci Resolve",
        type: "text" as const,
      },
      {
        id: "turnaround",
        label: "Turnaround Time",
        question:
          "What's your typical turnaround for a 10–20 minute YouTube video after receiving the script and assets?",
        placeholder: "e.g. 2–3 days",
        type: "text" as const,
      },
      {
        id: "rate_video",
        label: "Rate per Video",
        question:
          "What do you charge for editing one 10–20 minute long-form YouTube video (assets and script provided)?",
        placeholder: "e.g. ₹5,000 / $60 per video",
        type: "text" as const,
      },
      {
        id: "portfolio",
        label: "Portfolio / YouTube Work",
        question:
          "Share your portfolio, YouTube playlist, or any links showcasing your editing work.",
        placeholder: "https://...",
        type: "url" as const,
      },
    ],
    status: "open" as const,
    theme: "violet",
    sortOrder: 1,
  },
];

async function seed() {
  console.log("Seeding career jobs...");
  for (const job of jobs) {
    await db
      .insert(careerJobs)
      .values(job)
      .onConflictDoUpdate({
        target: careerJobs.id,
        set: {
          title: job.title,
          type: job.type,
          location: job.location,
          description: job.description,
          highlights: job.highlights,
          skills: job.skills,
          questions: job.questions,
          theme: job.theme,
          sortOrder: job.sortOrder,
        },
      });
    console.log(`  ✓ ${job.title}`);
  }
  console.log("Done.");
}

seed().catch(console.error);
