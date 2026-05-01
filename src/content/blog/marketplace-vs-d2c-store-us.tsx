import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "marketplace-vs-d2c-store-us",
  title: "Amazon vs your own D2C store: the US founder's playbook",
  description:
    "Should US D2C brands sell on Amazon, on their own Shopify store, or both? Here's how to decide based on margin, brand control, and where the customer actually lives.",
  date: "2025-08-30",
  readingTime: "7 min read",
  tags: ["Marketplace", "D2C", "Strategy"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        The marketplace-vs-D2C debate gets framed as ideology &mdash;
        Amazon is the devil, owned channels are the future, etc. We
        don&rsquo;t buy it. The right channel mix is a math question, and
        the answer is almost always &ldquo;both, weighted differently
        depending on category.&rdquo; Here&rsquo;s how we run that math for
        US founders.
      </p>

      <h2>Amazon is a customer acquisition channel, not a brand</h2>
      <p>
        The mistake is treating Amazon US as a sales channel. It&rsquo;s
        not. It&rsquo;s an acquisition channel where you rent shelf space.
        The customer belongs to Amazon &mdash; you don&rsquo;t get the
        email, you don&rsquo;t control the post-purchase, and reviews
        belong to the listing not the brand. Treat every Amazon order as a
        first-touch ad you paid for, and the math gets clearer.
      </p>

      <h2>The categories where Amazon wins</h2>
      <p>
        If you sell consumables under $30 with no brand story to tell
        &mdash; basics, supplements, household &mdash; Amazon is probably
        70% of your revenue and that&rsquo;s fine. Search intent on Amazon
        for these categories is unbeatable. You ship via FBA, optimize the
        listing, run Sponsored Products, and accept that the customer is
        Amazon&rsquo;s.
      </p>

      <h2>The categories where D2C wins</h2>
      <p>
        Apparel, beauty with a story, premium home, anything where the
        customer needs education before purchase &mdash; D2C wins because
        the storytelling surface is bigger. Liquid Death didn&rsquo;t
        become Liquid Death by optimizing an Amazon listing. They built a
        Shopify store, ran wild creative, and let Amazon be the
        re-purchase channel after the brand was already known.
      </p>

      <h2>The hybrid that actually works</h2>
      <p>
        Most US D2C brands at $1&ndash;20M ARR run a hybrid. Here&rsquo;s
        the split we recommend:
      </p>
      <ul>
        <li>
          <strong>D2C store as the brand home.</strong> New launches,
          bundles, subscriptions, full SKU range, content. This is where
          you build the email list and run paid social.
        </li>
        <li>
          <strong>Amazon as the convenience channel.</strong> Hero SKUs
          only. Slightly worse margin. Same retail price as D2C to avoid
          MAP issues. FBA for Prime eligibility.
        </li>
        <li>
          <strong>Walmart Marketplace as the diversifier.</strong> Lower
          competition than Amazon, growing fast, and a hedge against
          Amazon policy changes. Worth the listing effort even at modest
          volume.
        </li>
      </ul>

      <h2>The margin math nobody runs</h2>
      <p>
        Amazon takes roughly 15% as a referral fee, plus FBA fees, plus
        storage, plus PPC to be visible. Net out, you&rsquo;re giving up
        35&ndash;45% of retail to Amazon. On a $30 product with $9 COGS,
        Amazon nets you maybe $7 contribution. The same product on Shopify
        with paid acquisition at a $20 CAC nets you $1 on the first order
        but the LTV compounds. Different math, different game. Run both,
        but know which one you&rsquo;re playing.
      </p>

      <h2>The data leak from Amazon you can plug</h2>
      <p>
        You can&rsquo;t get the customer email from Amazon, but you can
        get the customer to your D2C list using package inserts. A simple
        QR code that offers a free sample, a guide, or a 10% off code on
        the D2C store converts at 3&ndash;8% on US Amazon orders. Done at
        scale, that&rsquo;s a multi-thousand-person email list per quarter
        for the cost of a printed insert. Brooklinen and Native both
        ran versions of this play in their early years.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We help US D2C founders build the channel mix that actually fits
        their category &mdash; from the Shopify rebuild to the Amazon
        listing optimization to the Walmart launch. If you&rsquo;re
        wrestling with whether to lean into marketplaces or owned
        channels, we&rsquo;ll model the math with you and ship the build.
      </p>
    </>
  );
}
