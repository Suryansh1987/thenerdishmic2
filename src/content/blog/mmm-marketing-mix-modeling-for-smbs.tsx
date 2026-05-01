import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "mmm-marketing-mix-modeling-for-smbs",
  title: "Marketing Mix Modeling (MMM) for SMBs without a PhD",
  description:
    "MMM used to be the preserve of FMCG giants with statisticians on staff. Open-source tools have changed that. A founder-friendly tour of when MMM is worth it, and when a spreadsheet beats it.",
  date: "2025-11-25",
  readingTime: "8 min read",
  tags: ["MMM", "Attribution"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Marketing Mix Modeling sounds like a tool only Unilever uses.
        Five years ago it was. Today, with open-source libraries like
        Robyn, LightweightMMM, and PyMC-Marketing, an SMB founder can
        run an MMM on a laptop. The catch is knowing whether you should
        &mdash; and what to do with the answer when you have it.
      </p>

      <h2>What MMM actually does</h2>
      <p>
        MMM is a regression model that takes weekly spend across each
        marketing channel, your weekly revenue, and a few external
        factors (holidays, weather, promotions) and tells you how much
        each channel actually contributed. Unlike pixel-based
        attribution, it sees offline channels, brand effects, and
        diminishing returns. It is the closest thing to a
        platform-agnostic truth in marketing analytics.
      </p>

      <h2>When MMM is worth it</h2>
      <ul>
        <li>
          <strong>You spend across at least four channels.</strong>
          MMM needs variation. If you only run Meta, you have a Meta
          attribution problem, not an MMM use case.
        </li>
        <li>
          <strong>You have at least two years of weekly data.</strong>
          Less and the model overfits to noise.
        </li>
        <li>
          <strong>You include offline or hard-to-track spend.</strong>
          OOH, podcasts, sponsorships, influencer barter. MMM is
          almost the only honest way to value these.
        </li>
        <li>
          <strong>Your monthly spend is above a few lakh.</strong>
          Below that the model&rsquo;s confidence intervals are wider
          than your decisions.
        </li>
      </ul>

      <h2>When MMM is overkill</h2>
      <p>
        If you have one channel and short sales cycles, a clean
        incrementality test (turn the channel off for two weeks in one
        geo, leave it on in another) gives you 80% of the answer in 5%
        of the effort. If your data is sparse or messy, MMM will
        confidently produce a wrong answer. Garbage in, garbage out
        applies double here.
      </p>

      <h2>The open-source toolkit</h2>
      <ul>
        <li>
          <strong>Robyn (Meta).</strong> Mature, opinionated,
          well-documented. R-based, with a nice front-end. Our
          default for SMBs.
        </li>
        <li>
          <strong>LightweightMMM (Google).</strong> Python, lighter,
          faster to iterate. Less polished output.
        </li>
        <li>
          <strong>PyMC-Marketing.</strong> Bayesian, flexible, more
          powerful but steeper learning curve. Worth it if you have
          someone comfortable with Bayesian stats.
        </li>
      </ul>

      <h2>What you actually do with the output</h2>
      <p>
        MMM tells you three things. The contribution of each channel
        last year. The diminishing returns curve &mdash; how much more
        you can spend before the next rupee earns less than the last.
        And a recommended budget allocation for the next quarter. The
        last one is where founders get value: a defensible answer to
        &ldquo;should we put more into YouTube or LinkedIn?&rdquo;
        based on your own data, not a vendor&rsquo;s pitch.
      </p>

      <h2>The honest limitations</h2>
      <p>
        MMM is directional, not surgical. It tells you that podcasts
        contributed 12 to 18% of revenue, not exactly 14.7%. It cannot
        replace tactical, daily ad optimisation. And it is a snapshot
        &mdash; rerun it quarterly because customer behaviour drifts.
        Founders who treat MMM as the one true number get burned;
        founders who treat it as one of three signals (alongside
        pixel attribution and incrementality tests) get value.
      </p>

      <h2>Where to start</h2>
      <p>
        Pull two years of weekly spend by channel and weekly revenue.
        Add a column for major promotions and holidays. Run Robyn with
        defaults. Look at the channel contribution chart. If anything
        is wildly different from your gut, that is a question worth
        asking, not a verdict to act on. From there, iterate.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We run lightweight MMM engagements for SMB and D2C founders
        who want a defensible budget allocation without hiring a data
        team. If you are spending across multiple channels and
        guessing the mix every quarter, that is exactly the problem
        MMM &mdash; and we &mdash; can help you solve.
      </p>
    </>
  );
}
