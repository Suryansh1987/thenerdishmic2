import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "marketing-attribution-models-explained",
  title: "Marketing attribution models explained for non-data founders",
  description:
    "Last-click is lying to you. First-click is also lying. Here&rsquo;s a plain-English tour of attribution models and which one to actually use when you don&rsquo;t have an analyst on the team.",
  date: "2025-09-02",
  readingTime: "7 min read",
  tags: ["Attribution", "Marketing"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Every founder we work with has, at some point, killed a channel
        because &ldquo;the dashboard&rdquo; said it wasn&rsquo;t working,
        only to watch overall sales drop the following month. The dashboard
        was not lying on purpose. It was just using an attribution model
        that quietly favoured one channel over another. Here is the short,
        opinionated tour.
      </p>

      <h2>The five models you will hear about</h2>
      <ul>
        <li>
          <strong>Last-click.</strong> The default in most ad platforms.
          Gives all credit to the last touchpoint before purchase. Wildly
          overstates Google Search and brand campaigns.
        </li>
        <li>
          <strong>First-click.</strong> Gives all credit to the first
          interaction. Overstates top-of-funnel channels like Meta
          prospecting, Reels, and SEO.
        </li>
        <li>
          <strong>Linear.</strong> Splits credit evenly across every
          touchpoint. Sounds fair, hides reality.
        </li>
        <li>
          <strong>Time-decay.</strong> More credit to touchpoints closer to
          conversion. A reasonable middle ground for short sales cycles.
        </li>
        <li>
          <strong>Data-driven.</strong> Algorithmic credit assignment based
          on which paths actually converted. Powerful, but only if you have
          enough conversions and clean data.
        </li>
      </ul>

      <h2>Why last-click lies the loudest</h2>
      <p>
        A customer sees your Reel on Tuesday, Googles your brand on
        Saturday, clicks the Google Ad, buys. Last-click hands the win to
        Google Ads. You then increase Google budget, decrease Meta budget,
        and watch your funnel shrink because the Reel was the actual
        demand-creator. This pattern is so common it is the single biggest
        cause of bad budget decisions we see.
      </p>

      <h2>What model to use when</h2>
      <ul>
        <li>
          <strong>Short sales cycle, transactional product.</strong>
          Time-decay or data-driven in GA4. Last-click is fine as a
          sanity-check, not a decision-maker.
        </li>
        <li>
          <strong>Long sales cycle, B2B or high-ticket.</strong> Position-based
          (40-20-40) so first-touch and last-touch both get credit. Layer in
          self-reported attribution &mdash; literally ask buyers how they
          found you.
        </li>
        <li>
          <strong>Heavy organic and content.</strong> Use a custom data-driven
          setup or accept that you will need to triangulate across GA4, ad
          platforms, and incrementality tests.
        </li>
      </ul>

      <h2>The cheat code: triangulation</h2>
      <p>
        No single model is right. The strongest founders we work with cross-
        reference three signals weekly: GA4 data-driven attribution,
        platform-reported conversions, and a one-question post-purchase
        survey asking &ldquo;where did you first hear about us&rdquo;.
        When the three agree, act. When they disagree, that is your signal
        to investigate, not to panic.
      </p>

      <h2>What to stop doing immediately</h2>
      <p>
        Stop adding up Meta-reported conversions and Google-reported
        conversions and treating the sum as truth. They double-count.
        Stop killing a channel based on one model. Stop trusting an
        agency that reports only on their own platform&rsquo;s
        attribution.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build attribution stacks for founder-led brands that combine
        GA4, server-side data, and post-purchase surveys into a single
        weekly view you can actually trust. If your channel-mix decisions
        currently feel like rolling dice, we&rsquo;d love to fix that for
        you.
      </p>
    </>
  );
}
