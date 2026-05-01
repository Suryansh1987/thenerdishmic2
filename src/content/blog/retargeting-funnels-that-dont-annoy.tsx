import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "retargeting-funnels-that-dont-annoy",
  title: "Retargeting funnels that don't annoy your future customers",
  description:
    "Most retargeting hits the same person with the same product ad nine times in a week. Here is how founder-led brands build retargeting that converts without scorching the audience.",
  date: "2025-11-24",
  readingTime: "6 min read",
  tags: ["Retargeting", "Funnel"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Bad retargeting is the reason most people now use ad blockers.
        Pricing page visit, then six weeks of the same product banner
        on every site they open. It works just well enough that brands
        keep doing it, and just badly enough that your future customer
        starts hating your brand before they buy. Founder-led brands
        can do better, and the framework is simple.
      </p>

      <h2>Segment by stage, not by visit</h2>
      <p>
        Most retargeting buckets are "visited the site". That&rsquo;s
        useless. A homepage visitor and a pricing-page-then-form-abandon
        visitor are two completely different humans. We segment into
        four buckets minimum &mdash; awareness, consideration, intent,
        post-purchase &mdash; and we run a different message and
        different cap to each one.
      </p>
      <ul>
        <li><strong>Awareness.</strong> Hit the homepage, bounced. Show brand story creative.</li>
        <li><strong>Consideration.</strong> Read 2+ pages or 60s+ on site. Show social proof.</li>
        <li><strong>Intent.</strong> Pricing or product page. Show offer or scarcity.</li>
        <li><strong>Post-purchase.</strong> Customers. Cross-sell, never re-sell what they bought.</li>
      </ul>

      <h2>Frequency caps are not optional</h2>
      <p>
        We cap retargeting at 3 impressions per person per week per ad
        creative. Default Meta and Google settings will hit someone 12
        times a week with the same ad if you let them. The data is
        clear &mdash; conversion rate per impression peaks around
        impression 3-4, plateaus until 7, then becomes net negative.
        Past that, you&rsquo;re paying to actively damage brand
        sentiment. Caps are the easiest 20% lift you can get in a day.
      </p>

      <h2>Refresh creative every 14 days</h2>
      <p>
        Same audience plus same creative equals fatigue. We rotate
        retargeting creative every two weeks &mdash; same offer, same
        landing page, different angle and visual. For a D2C jewellery
        brand we ran a four-week test where rotating creative every
        14 days produced 31% lower CPA than holding creative static,
        with the same audience and budget.
      </p>

      <h2>Time-decay your bids</h2>
      <p>
        Someone who visited yesterday is worth more than someone who
        visited 28 days ago. We bid 3x on day-1 visitors, 1.5x on
        day-7, 1x on day-14, and exit them from retargeting at day 30
        unless they re-engage. Most accounts run flat bids on a 90-day
        retargeting window, which means you&rsquo;re overpaying for
        cold ghosts and underpaying for hot leads.
      </p>

      <h2>Exclude buyers immediately</h2>
      <p>
        The single fastest way to annoy a customer is to keep showing
        them ads for the thing they just bought. Customer match list
        upload, refreshed weekly, used as a global exclusion across
        every retargeting campaign. We see at least 5-10% of retargeting
        spend in untouched accounts going to people who already
        purchased. That&rsquo;s pure waste, and it makes your existing
        customers feel like the brand isn&rsquo;t paying attention.
      </p>

      <h2>The post-purchase loop is where loyalty is built</h2>
      <p>
        Retargeting after the sale is the under-used half of the
        funnel. A buyer of one product is the easiest sale you will
        ever get for product two. We build a post-purchase audience
        and run cross-sell creative for 30-60 days after purchase,
        timed to the consumption cycle of the first product. For a
        skincare brand this took repeat-purchase rate from 22% to 38%
        in four months. The CAC on these conversions is fractional
        compared to acquiring a new buyer.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build retargeting funnels for founder-led brands and Indian
        SMBs across D2C, services, and B2B. Stage segmentation,
        creative rotation, frequency caps, exclusion logic, and a
        post-purchase loop that keeps the LTV growing. If your
        retargeting is one campaign, one ad, and a 90-day flat
        window, we can probably double its efficiency in six weeks
        without spending more.
      </p>
    </>
  );
}
