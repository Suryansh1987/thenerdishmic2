import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "content-turnaround-14-to-3-days",
  title: "How we cut content turnaround from 14 days to 3 for founder-led brands",
  description:
    "The bottleneck for most founder-led content isn't editing speed, it's the approval loop. Here's the four-step system we run to ship reels in 72 hours without sacrificing taste.",
  date: "2026-04-12",
  readingTime: "6 min read",
  tags: ["Content", "Workflow", "Founder-led"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most founders we onboard are not bottlenecked by editing time. They are
        bottlenecked by the approval loop &mdash; the back and forth between a
        rough cut, a Slack message, a "can you fix the music?" reply, and a
        re-export two days later. We used to ship a finished reel in fourteen
        days. We now ship in three. Nothing about our editors got faster. The
        process did.
      </p>

      <h2>The 14-day default</h2>
      <p>
        Without a system, every reel touches a founder four to six times: idea,
        script, raw cut, fine cut, music, captions. Each touch costs a day of
        wall-clock time because founders are running a company, not waiting on
        Frame.io. Even if every touch takes thirty seconds, the calendar eats
        the rest.
      </p>

      <h2>What we changed</h2>
      <ul>
        <li>
          <strong>One feedback window per stage.</strong> Founder feedback
          happens at script and at fine-cut. Nowhere else. We protect the
          editor from drive-by Slack notes.
        </li>
        <li>
          <strong>Pre-approved beats.</strong> A monthly briefing locks tone,
          hooks, and three reusable shot patterns. The editor stops guessing.
        </li>
        <li>
          <strong>Music + caption presets.</strong> Both are picked at script
          time, not at finishing time, so the fine-cut is the last cut.
        </li>
        <li>
          <strong>A 24-hour SLA on founder reviews.</strong> If feedback is not
          in by the SLA, we ship the editor's call. This sounds risky. It is
          not &mdash; the script alignment up front is doing the work.
        </li>
      </ul>

      <h2>Why this beats hiring more editors</h2>
      <p>
        Throwing editors at a slow approval loop just creates more reels stuck
        in review. The constraint moves; it does not disappear. A faster system
        moves the constraint to where it belongs &mdash; the founder's voice,
        which is the only part you can't outsource.
      </p>

      <h2>What you can steal today</h2>
      <p>
        Even without our team, you can pull the calendar in by a week:
        consolidate feedback into two windows, lock music and captions before
        the fine-cut, and let your editor ship by default. The reels won't be
        worse. They will just exist.
      </p>
    </>
  );
}
