import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "ai-lead-scoring-without-burning-funnel",
  title: "AI lead scoring without burning your funnel",
  description:
    "AI lead scoring sounds great until it quietly disqualifies your best buyers. A practical guide to scoring that helps reps without nuking your pipeline.",
  date: "2025-10-06",
  readingTime: "7 min read",
  tags: ["AI", "Lead Generation", "Sales"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Lead scoring sells itself: feed an AI your past wins, let it rank
        inbound, and your reps only call the hot ones. In practice, half the
        AI lead-scoring rollouts we&rsquo;ve seen at US SaaS startups
        disqualified the wrong leads for ninety days before anyone noticed.
        Here&rsquo;s how to actually do it.
      </p>

      <h2>Why naive scoring breaks</h2>
      <p>
        Most models train on closed-won deals. Closed-won is a function of
        which leads your reps liked enough to work, not which leads were
        actually best. Train on that and you&rsquo;ll get a model that loves
        the leads your team is already biased toward &mdash; usually big
        logos in obvious markets like SF and NYC &mdash; while quietly
        flagging everyone else as cold.
      </p>

      <h2>The four signals that actually predict</h2>
      <ul>
        <li>
          <strong>Intent depth, not breadth.</strong> Three pages on your
          pricing page beats fifteen pages across your blog. Time on
          high-intent surfaces is the cleanest signal you have.
        </li>
        <li>
          <strong>Recency of activity.</strong> A lead who came back this week
          is hotter than one who downloaded six things in March. Decay
          aggressively.
        </li>
        <li>
          <strong>Title plus company shape.</strong> Founder at a 20-person
          Brooklyn D2C is a different lead than founder at a 200-person Austin
          SaaS, even if the title string matches.
        </li>
        <li>
          <strong>Referral source.</strong> A warm intro from an existing
          customer outperforms every other signal combined. Score it like it.
        </li>
      </ul>

      <h2>What to feed the model</h2>
      <p>
        Don&rsquo;t feed it everything. Feed it the ten features your best AE
        would actually use to triage on a Monday morning. If a feature
        wouldn&rsquo;t change a human&rsquo;s decision, it shouldn&rsquo;t
        change the model&rsquo;s. Feature creep is how you get a black box
        that nobody trusts.
      </p>

      <h2>The shadow-mode rollout</h2>
      <p>
        For the first thirty days, run the model in shadow. Score every lead,
        but don&rsquo;t route on the score. Compare what the model
        prioritised against what your reps actually closed. The gap is your
        bias map. We&rsquo;ve had clients discover their model was 40%
        worse than the rep&rsquo;s gut on inbound from non-coastal cities.
        Better to find that in shadow than in production.
      </p>

      <h2>Where AI helps versus where rules win</h2>
      <ul>
        <li>
          <strong>Rules are better at:</strong> hard disqualifiers (free email
          domain, no company), routing (round-robin by territory), SLAs
          (respond in 5 minutes).
        </li>
        <li>
          <strong>AI is better at:</strong> ranking the middle 60% of your
          inbound where the rules don&rsquo;t fire either way. That&rsquo;s
          where reps waste the most time and where a model earns its keep.
        </li>
      </ul>

      <h2>The metric that tells you it&rsquo;s working</h2>
      <p>
        Not lift on closed-won. That takes too long and confuses too many
        variables. Track speed-to-first-touch on top-quartile leads, and
        meeting-booked rate on top-quartile leads. If those move, the model
        is helping. If they don&rsquo;t, your reps don&rsquo;t trust the
        score and you have a behaviour problem, not a model problem.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build lead-scoring systems that your reps will actually use &mdash;
        usually a thin AI layer over a sharp set of rules, wired into HubSpot
        or Salesforce, with a feedback loop the team can read. If your
        pipeline ranking feels like a coin flip, we can fix that in a few
        weeks.
      </p>
    </>
  );
}
