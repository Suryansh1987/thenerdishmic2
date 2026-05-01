import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "cogs-margin-and-marketing-spend-d2c",
  title: "COGS, margin, and marketing spend: the D2C math nobody teaches",
  description:
    "If you don't know your contribution margin per order, you can't know what to spend on ads. Here's the unit economics framework we run with US D2C founders.",
  date: "2025-11-08",
  readingTime: "8 min read",
  tags: ["D2C", "Unit Economics"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most US D2C founders we meet can quote their ROAS but
        can&rsquo;t quote their contribution margin. That&rsquo;s
        backward. Marketing spend without a clear margin floor is
        gambling. Here&rsquo;s the unit economics framework we walk
        every founder through before we touch their ad accounts.
      </p>

      <h2>Start with the actual fully-loaded COGS</h2>
      <p>
        Your real COGS isn&rsquo;t what you paid the manufacturer. It
        includes:
      </p>
      <ul>
        <li>
          <strong>Product cost</strong> from the manufacturer, landed.
        </li>
        <li>
          <strong>Inbound freight and duties</strong> &mdash; especially
          relevant in the US given current tariffs.
        </li>
        <li>
          <strong>Inspection, rework, and shrinkage.</strong> Round to
          2&ndash;5% of product cost.
        </li>
        <li>
          <strong>Packaging</strong> &mdash; box, fill, branded inserts,
          tissue paper. Often $1&ndash;3 per order ignored.
        </li>
      </ul>
      <p>
        Add these up. That&rsquo;s your true COGS per unit. Most
        founders are off by 10&ndash;15% on the high side once they run
        this exercise.
      </p>

      <h2>Then layer in the per-order variable costs</h2>
      <p>
        COGS gets you to gross margin. Contribution margin is what
        actually pays for marketing. Subtract these from each order:
      </p>
      <ul>
        <li>
          <strong>Outbound shipping:</strong> what you actually pay UPS,
          USPS, or FedEx after Shopify Shipping discounts.
        </li>
        <li>
          <strong>Payment processing:</strong> roughly 2.9% + $0.30 on
          Shop Pay or Stripe in the US.
        </li>
        <li>
          <strong>3PL pick and pack:</strong> typically $3&ndash;5 per
          order in the US, more for multi-SKU.
        </li>
        <li>
          <strong>Returns reserve:</strong> apparel runs 15&ndash;25%
          return rate; consumables under 5%. Reserve accordingly.
        </li>
      </ul>

      <h2>Now you have a real CAC ceiling</h2>
      <p>
        Take AOV minus COGS minus all variable order costs. That&rsquo;s
        your contribution margin per order. On a $40 AOV product with
        $12 COGS and $9 in shipping/processing/3PL/returns, you&rsquo;ve
        got $19 in contribution. Your CAC ceiling on a first-order
        breakeven basis is $19. Spend more than that to acquire and
        you&rsquo;re betting on LTV. Spend less and every order is
        immediately profitable.
      </p>

      <h2>The 60-day payback rule</h2>
      <p>
        For self-funded US D2C brands, we use a 60-day payback rule:
        cumulative contribution margin from a customer must exceed CAC
        within 60 days. Pull your Shopify cohort report and run the
        math. If your 60-day repeat rate is 25%, you can spend roughly
        1.25x your first-order contribution and still hit payback. If
        it&rsquo;s 5%, you&rsquo;re effectively a one-and-done business
        and CAC has to stay below first-order contribution.
      </p>

      <h2>Why ROAS is a misleading number</h2>
      <p>
        A 3x ROAS sounds healthy until you do the math. On a $40 AOV
        with 3x ROAS, you spent $13.30 in ads to generate $40 in
        revenue. Subtract $12 COGS, $9 variable costs, $13.30 CAC
        &mdash; you&rsquo;re losing $4.30 per order. ROAS targets need
        to be set against contribution margin, not revenue. We tell US
        D2C clients their minimum acceptable ROAS is roughly AOV
        divided by contribution margin. Below that, scaling ad spend
        loses money faster.
      </p>

      <h2>Where margin actually comes from at scale</h2>
      <p>
        Three levers, in order of impact: AOV expansion through bundles
        and post-purchase upsells; COGS reduction by hitting the next
        manufacturing tier; and shipping cost reduction by warehousing
        bicoastal in the US (East Coast and West Coast 3PLs cuts
        average shipping cost by 20&ndash;30%). Founders obsess over
        ad ROAS and ignore these three. The brands that win at
        $5&ndash;20M ARR have all three of these working hard.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build unit economics models with US D2C founders &mdash;
        the real ones, with all the costs the founder usually
        forgets. Then we tie it back to the ad strategy and the
        Shopify build so you&rsquo;re not scaling spend on a leaky
        margin profile. Send us your numbers and we&rsquo;ll show you
        what we see.
      </p>
    </>
  );
}
