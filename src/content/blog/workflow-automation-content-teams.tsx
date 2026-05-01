import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "workflow-automation-content-teams",
  title: "Workflow automation for two-person US content teams",
  description:
    "If your content team is a founder and one part-time editor, here&rsquo;s the automation stack that actually compounds &mdash; and the one that wastes a quarter.",
  date: "2025-11-29",
  readingTime: "6 min read",
  tags: ["Automation", "Content", "Operations"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Two-person content teams are the most over-tooled and under-shipped
        operations on the internet. A founder, a part-time editor, and
        somehow eleven SaaS subscriptions. The fix isn&rsquo;t more tools
        &mdash; it&rsquo;s automating the right four steps and ignoring
        everything else.
      </p>

      <h2>The four steps worth automating</h2>
      <ul>
        <li>
          <strong>Idea capture to backlog.</strong> A single Slack channel
          or one shortcut that drops every idea into Notion or Linear with a
          timestamp and the source. No more "I had a great idea on a walk
          and lost it."
        </li>
        <li>
          <strong>Draft to review handoff.</strong> When the founder finishes
          a draft, the editor gets pinged with a link, a deadline, and the
          context. Manual handoffs are where two-person teams lose three
          days a week.
        </li>
        <li>
          <strong>Approved to scheduled.</strong> Once the editor signs off,
          the post goes into the publishing queue automatically &mdash;
          Buffer, Hypefury, or whatever your scheduler is &mdash; with the
          right metadata.
        </li>
        <li>
          <strong>Published to repurposed.</strong> Long form goes out, the
          system spins up shorts, threads, and email versions in draft form.
          The humans approve. Nothing publishes itself.
        </li>
      </ul>

      <h2>What the stack actually looks like</h2>
      <p>
        Notion or Linear as the backlog. Google Docs for drafting (yes,
        still). Slack for handoffs. Buffer or Hypefury for scheduling.
        Zapier or Make stitching it together. Optionally, Claude or ChatGPT
        for the repurposing step. That&rsquo;s the whole stack. If
        you&rsquo;re running more than this, you&rsquo;re running a content
        ops department with two people, which is the same as not running
        one.
      </p>

      <h2>What to never automate</h2>
      <ul>
        <li>
          <strong>The first draft.</strong> AI first drafts cost more in
          editing than they save in writing. We tested this for six months
          across different niches. Same answer every time.
        </li>
        <li>
          <strong>The publish button.</strong> A bad post live is more
          expensive than a good post delayed. Keep a human on the trigger.
        </li>
        <li>
          <strong>Engagement.</strong> Auto-replies and auto-comments are
          obvious to your audience and the algorithm. Don&rsquo;t.
        </li>
      </ul>

      <h2>The Slack channel that runs the show</h2>
      <p>
        Build one channel called #content-ops. Every automation posts to it
        &mdash; new ideas, drafts ready for review, posts scheduled, posts
        live, weekly stats. The founder and the editor both live in this
        channel. No DMs, no email threads about content. One channel, one
        source of truth. This single change tends to ship more posts per
        month than any other intervention.
      </p>

      <h2>The weekly fifteen-minute review</h2>
      <p>
        Every Friday, fifteen minutes, both humans on a call. Look at the
        backlog, look at last week&rsquo;s ship rate, and pick this week&rsquo;s
        three priorities. Anything not in the top three doesn&rsquo;t happen.
        If you&rsquo;re a content team in NYC or SF, you&rsquo;ve probably
        had this meeting balloon to an hour with five people. Cut it back.
      </p>

      <h2>The numbers that matter</h2>
      <p>
        Posts shipped per week. Time from idea to publish. Reply rate on
        published posts. Skip everything else &mdash; followers, impressions,
        all of it. A two-person team can&rsquo;t move vanity numbers anyway,
        and tracking them slows down the work.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up content ops for two-person founder-led teams. The exact
        stack above, customised to your tools, shipped in a week. If your
        backlog is full and your published feed is empty, that&rsquo;s a
        workflow problem, not a creativity problem. We can fix it.
      </p>
    </>
  );
}
