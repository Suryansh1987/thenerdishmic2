import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "drip-campaign-anatomy-that-converts",
  title: "Drip campaign anatomy: what actually converts",
  description:
    "Most drip campaigns are decoration. Here&rsquo;s the anatomy of a drip that actually moves revenue, broken down email by email with the timing and copy that works.",
  date: "2025-11-15",
  readingTime: "7 min read",
  tags: ["Email", "Nurture", "Conversion"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        We&rsquo;ve audited a lot of drip campaigns. The ones that convert
        share five things, and almost none of them are the things templates
        teach you. Here&rsquo;s the actual anatomy of a drip that moves
        revenue, not just open rates.
      </p>

      <h2>Email one: send it in under sixty seconds</h2>
      <p>
        Speed beats polish here. The moment between someone hitting submit
        and the first email landing is the warmest your lead will ever be.
        Don&rsquo;t use that window for a perfectly designed welcome &mdash;
        use it for a plain, useful, founder-signed reply that gets read.
      </p>

      <h2>Email two: the proof email, day two</h2>
      <ul>
        <li>
          <strong>One specific result.</strong> Not "trusted by 500 brands"
          &mdash; one named customer, one specific outcome, one number that
          matches your reader&rsquo;s reality.
        </li>
        <li>
          <strong>Named, not anonymous.</strong> "Sarah at a Brooklyn coffee
          brand" beats "a customer." Specificity is the credibility.
        </li>
        <li>
          <strong>Don&rsquo;t pitch yet.</strong> No CTA except "reply if
          you&rsquo;re curious how." Replies open the deliverability
          floodgates for everything after.
        </li>
      </ul>

      <h2>Email three: the objection email, day four</h2>
      <p>
        Pick the single biggest reason people don&rsquo;t buy. Address it
        directly, by name, in the subject line. "What if it&rsquo;s too
        expensive?" or "What if we&rsquo;re too small?" outperform every
        clever subject line we&rsquo;ve tested. Buyers are looking for
        permission to disqualify you. Beat them to it honestly.
      </p>

      <h2>Email four: the soft pitch, day seven</h2>
      <p>
        Now you can pitch. One offer, one CTA, no ten-link footer. The trick
        is to frame it as a next step, not a purchase. "Want me to put
        together a quick plan for your situation?" pulls in 3x more replies
        than "Buy now" for most B2B and high-consideration D2C purchases in
        the US.
      </p>

      <h2>Email five: the breakup, day fourteen</h2>
      <ul>
        <li>
          <strong>Short.</strong> Three lines, max.
        </li>
        <li>
          <strong>Genuinely give them an out.</strong> "Should I close this
          out?" performs better than any urgency tactic. Counter-intuitive
          but consistent across every list we&rsquo;ve tested.
        </li>
        <li>
          <strong>The reply rate spikes.</strong> 20 to 40% of your eventual
          conversions from a drip happen on the breakup email. Don&rsquo;t
          skip it because it feels rude.
        </li>
      </ul>

      <h2>Timing rules nobody tells you</h2>
      <p>
        Don&rsquo;t send all five at the same time of day. Vary by 90 minutes
        between emails. Inbox providers like Gmail flag identical-time sends
        as automation; they&rsquo;re less suspicious of human-looking
        cadence. Small thing, big deliverability impact.
      </p>

      <h2>What to remove from your current drip</h2>
      <p>
        Anything that says "we." Anything that says "as a leading provider."
        Anything with more than two links. Anything with a stock photo of a
        diverse team in a glass conference room. Cut all of it. The drip
        that converts looks like an email from a person, because it is.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We rebuild drips for US founder-led brands &mdash; copy, sequencing,
        and the deliverability work that makes them actually land. If your
        nurture sequence has been running for a year and you&rsquo;ve never
        looked at what it earns, we&rsquo;ll audit it and fix it.
      </p>
    </>
  );
}
