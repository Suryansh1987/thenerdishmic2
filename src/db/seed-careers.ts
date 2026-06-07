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
    id: "carousel-designer",
    title: "Carousel Designer",
    type: "Freelance / Part-time",
    location: "Remote",
    description:
      "We design educational and promotional carousels for Instagram that drive saves, shares, and DMs. We need a designer who can turn a rough idea into a polished 7-slide story that people actually read.",
    highlights: [
      "Design 4–8 carousels per week (brief + copy provided)",
      "Create eye-catching first slides that stop the scroll",
      "Maintain brand consistency across clients",
      "Iterate based on performance and feedback",
    ],
    skills: [
      "Figma / Canva Pro / Photoshop",
      "Strong typography sense",
      "Instagram-native thinking",
      "Quick turnaround capability",
    ],
    questions: [
      {
        id: "best_carousel",
        label: "Your Best Carousel",
        question:
          "Share a link to your best carousel post. What was the brief and how did you approach the layout?",
        placeholder: "https://... or describe the project",
        type: "textarea" as const,
      },
      {
        id: "first_slide",
        label: "The Hook Slide",
        question:
          "What's your approach to designing a first slide that stops the scroll? Walk us through your thinking.",
        placeholder: "I focus on...",
        type: "textarea" as const,
      },
      {
        id: "tools",
        label: "Design Tools",
        question:
          "What design tools do you use (Figma, Canva, Photoshop, Illustrator, etc.)?",
        placeholder:
          "e.g. Figma + Canva Pro for templates, Photoshop for heavy lifting",
        type: "text" as const,
      },
      {
        id: "turnaround",
        label: "Turnaround Time",
        question:
          "What's your typical turnaround for a 7–10 slide carousel from receiving the copy?",
        placeholder: "e.g. Same-day delivery for under 8 slides",
        type: "text" as const,
      },
      {
        id: "rate_carousel",
        label: "Rate per Carousel",
        question:
          "What do you charge per carousel (7–10 slides, with brand guidelines provided)?",
        placeholder: "e.g. ₹1,200 / $15 per carousel",
        type: "text" as const,
      },
      {
        id: "portfolio",
        label: "Portfolio / Social",
        question:
          "Share your Behance, portfolio link, or Instagram where we can see your carousel work.",
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
