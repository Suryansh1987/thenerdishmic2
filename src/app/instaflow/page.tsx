import type { Metadata } from "next";
import LandingPage from "@/components/instaflow/LandingPage";

export const metadata: Metadata = {
  title: "InstaFlow: Cold DMs that actually get replied to",
  description:
    "InstaFlow helps founders automate personalized Instagram outreach with account controls, prompts, analytics, and per-account pricing.",
  alternates: {
    canonical: "https://instaflow.thenerdishmic.com",
  },
  openGraph: {
    title: "InstaFlow",
    description:
      "Cold DMs that actually get replied to. Personalized Instagram outreach software built for founders and operators.",
    url: "https://instaflow.thenerdishmic.com",
  },
};

export default function InstaFlowPage() {
  return <LandingPage />;
}
