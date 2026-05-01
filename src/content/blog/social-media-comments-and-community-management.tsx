import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "social-media-comments-and-community-management",
  title: "Comments, DMs, and community management without hiring a team",
  description:
    "Community management is where most small brands silently lose. A practical playbook for handling comments and DMs at small scale without burning out or hiring a five-person team.",
  date: "2025-10-13",
  readingTime: "6 min read",
  tags: ["Community", "Social Media"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most small brands obsess over what they post and ignore what
        happens in the replies. That is the wrong order. The comment
        section is where strangers decide whether you are real, the DM is
        where they decide whether to buy, and both are running whether
        you show up or not. You do not need a five-person community team
        &mdash; you need a system you can actually keep.
      </p>

      <h2>Triage is the whole job</h2>
      <p>
        Every incoming message falls into one of five buckets: lead,
        existing customer, supporter, troll, and noise. The mistake is
        treating them with the same urgency. Leads need a same-day,
        human reply. Customers need acknowledgement and a route to
        support. Supporters need a small thanks. Trolls need ignoring.
        Noise needs nothing. Sort the inbox first, then reply.
      </p>

      <h2>The first reply matters more than the post</h2>
      <p>
        On Instagram and LinkedIn, the first comment under your post
        decides how long the conversation lasts &mdash; which decides
        how far the post travels. Replying to early comments within
        thirty minutes is a documented reach lever, not a vibe. Block
        out fifteen minutes immediately after every post.
      </p>

      <h2>DM replies that don&rsquo;t feel like a CRM</h2>
      <ul>
        <li>
          <strong>Use their first name.</strong> Not in a cringe way
          &mdash; in the way a human would.
        </li>
        <li>
          <strong>Reference the post they replied to.</strong> One line
          shows you are not running a script.
        </li>
        <li>
          <strong>Ask one specific question.</strong> Vague openers die.
          Specific ones &mdash; "what platform are you running it on?"
          &mdash; pull the conversation forward.
        </li>
      </ul>

      <h2>What to automate, what to never automate</h2>
      <p>
        Automate the sorting, never the speaking. Tools that auto-tag
        incoming DMs, surface keywords, and prioritise leads are fine.
        Tools that auto-reply to DMs in your voice are how brands lose
        trust. People can smell a bot in two messages, and the moment
        they do, your inbound rate falls off a cliff.
      </p>

      <h2>The 20-minutes-a-day rule</h2>
      <p>
        For a founder running a small brand, twenty minutes a day on
        comments and DMs is enough &mdash; if it is consistent. Ten
        minutes after your morning post, ten minutes in the evening for
        DMs. Inconsistent two-hour bursts every Sunday do not work,
        because the algorithm and your audience both notice the gap.
      </p>

      <h2>Handling negativity without making it worse</h2>
      <p>
        For a real complaint: acknowledge, take it to DM, fix it, then
        post the resolution publicly when it is done. For a troll:
        ignore, hide if needed, never argue. The audience watching is
        always larger than the person commenting, and they are reading
        your tone, not your point. Calm wins.
      </p>

      <h2>Tracking what comments tell you</h2>
      <p>
        Once a week, scan your replies for patterns. Three people asked
        the same question? That is your next post. Two people misread
        the same line? That is a positioning problem. The comment
        section is the cheapest research tool you have, and most
        founders never read it on purpose.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We run community management for founder-led brands as part of
        our content engagements &mdash; same voice, fast triage, and a
        weekly digest of what your audience is actually telling you. If
        your DMs have become a graveyard you avoid opening, we can take
        that off your plate without making it sound like a robot.
      </p>
    </>
  );
}
