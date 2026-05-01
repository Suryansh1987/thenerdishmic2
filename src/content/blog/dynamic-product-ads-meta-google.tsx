import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "dynamic-product-ads-meta-google",
  title: "Dynamic product ads on Meta and Google: how to actually scale catalog",
  description:
    "DPAs are the most underused growth lever in US D2C. Here's how we set up Meta Advantage+ Catalog and Google Performance Max to actually scale.",
  date: "2025-10-25",
  readingTime: "7 min read",
  tags: ["Ads", "Catalog", "DPA"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most US D2C brands run static creative on Meta and Google,
        burn out their hero asset in three weeks, then complain that
        ads don&rsquo;t work anymore. Dynamic product ads &mdash; both
        Meta Advantage+ Catalog and Google Performance Max with feed
        signals &mdash; solve this. Done right, your catalog itself
        becomes the creative engine. Here&rsquo;s the setup.
      </p>

      <h2>Catalog hygiene is the entire game</h2>
      <p>
        Before you touch the ad platform, fix the catalog. Every SKU
        needs a clean title, a clear primary image on a neutral
        background, accurate pricing, real inventory status, and a
        Google product category. Shopify&rsquo;s native Meta and Google
        feed integrations get you 70% of the way there; the last 30%
        is the title and image cleanup. This is unglamorous work and
        it&rsquo;s where most agencies cut corners.
      </p>

      <h2>Meta Advantage+ Catalog: the right audience setup</h2>
      <p>
        Advantage+ Catalog (formerly DABA) works best when you give it
        three audience signals and let the algorithm cook:
      </p>
      <ul>
        <li>
          <strong>Retargeting:</strong> 30-day site visitors and cart
          abandoners. Highest ROAS, smallest audience.
        </li>
        <li>
          <strong>Broad prospecting:</strong> US-only, age range that
          matches your buyer, no other targeting. Let the catalog
          and pixel do the work.
        </li>
        <li>
          <strong>Lookalike on purchasers:</strong> 1&ndash;3% LAL of
          your last 90 days of buyers, US-based. Backfill prospecting.
        </li>
      </ul>

      <h2>Google Performance Max: feed it the same catalog</h2>
      <p>
        Performance Max with a Merchant Center feed is the Google
        equivalent and the same catalog work pays double. Make sure
        your Shopify-to-Merchant-Center sync is healthy &mdash; no
        disapproved products, no missing GTINs &mdash; and submit at
        least three asset groups segmented by category, not by SKU.
        Don&rsquo;t bother with brand search audiences in PMax; Google
        will cannibalize your branded keywords if you let it.
      </p>

      <h2>The creative layer DPAs still need</h2>
      <p>
        DPAs aren&rsquo;t no-creative. Meta lets you overlay frames,
        price stickers, and badges on every catalog image at the
        campaign level. Use this. A &ldquo;Free Shipping&rdquo; or
        &ldquo;New Arrival&rdquo; badge consistently lifts CTR by
        15&ndash;25%. Olipop and Liquid Death both run badge overlays
        on their catalog ads. Ten minutes of work in Ads Manager,
        meaningful CTR lift.
      </p>

      <h2>Bidding strategy that doesn&rsquo;t blow up</h2>
      <p>
        On Meta Advantage+ Catalog, start on lowest cost (no bid cap)
        for the first two weeks. Once you have 50+ purchases attributed
        to the campaign, switch to ROAS goal targeting at 80% of your
        actual ROAS &mdash; not your target ROAS. Setting a ROAS goal
        at your aspirational number kills delivery; setting it at 80%
        of your real number scales spend without breaking efficiency.
      </p>

      <h2>Measuring it without lying to yourself</h2>
      <p>
        Meta and Google both over-attribute. Your blended ROAS &mdash;
        total revenue divided by total ad spend across all platforms
        &mdash; is the only number that matters. Don&rsquo;t add up
        platform-reported ROAS; you&rsquo;ll double-count. We use
        Triple Whale, Northbeam, or even a simple weekly Google Sheet
        for this with our smaller D2C clients. The number is usually
        20&ndash;40% lower than what Meta tells you. Plan around
        reality, not the platform&rsquo;s self-report.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up and run dynamic catalog ads for US D2C brands &mdash;
        feed cleanup, Advantage+ Catalog launch, Performance Max
        structure, and the blended attribution layer to actually
        measure it. If your catalog ads are stuck or your feed is a
        mess, we&rsquo;ll audit it and ship the fix.
      </p>
    </>
  );
}
