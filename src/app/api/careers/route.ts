import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { careerApplications, careerJobs } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { jobId, name, email, phone, answers } = body;

    if (!jobId || !name || !email || !Array.isArray(answers)) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const [job] = await db
      .select({ id: careerJobs.id, status: careerJobs.status })
      .from(careerJobs)
      .where(eq(careerJobs.id, jobId))
      .limit(1);

    if (!job) {
      return NextResponse.json({ error: "Job not found." }, { status: 404 });
    }

    if (job.status === "closed") {
      return NextResponse.json({ error: "This position is no longer accepting applications." }, { status: 409 });
    }

    const id = crypto.randomUUID();

    await db.insert(careerApplications).values({
      id,
      jobId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      answers,
    });

    return NextResponse.json({ success: true, applicationId: id });
  } catch (err) {
    console.error("[careers/apply]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
