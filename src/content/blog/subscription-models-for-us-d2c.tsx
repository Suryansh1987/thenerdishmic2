import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "subscription-models-for-us-d2c",
  title: "Subscription models for US D2C brands: what actually retains",
  description:
    "Subscription is the highest-leverage retention mechanic in D2C &mdash; if you don&rsquo;t blow it on the wrong cadence. Here's the Recharge playbook for US brands.",
  date: "2025-11-22",
  readingTime: "7 min read",
  tags: ["Subscription", "D2C", "Retention"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Subscription is the highest-leverage retention mechanic
        available to a US D2C brand. It&rsquo;s also the easiest to
        botch &mdash; wrong cadence, wrong discount, wrong cancellation
        flow, and you&rsquo;re bleeding subscribers faster than you
        acquire them. Here&rsquo;s the Recharge-on-Shopify playbook we
        ship for US founders.
      </p>

      <h2>Subscription only works for genuine repeat purchase</h2>
      <p>
        The first question we ask: does the customer actually want to
        reorder this on a calendar, or are they buying it once and
        being convinced into a sub for the discount? Coffee, supplements,
        pet food, household refills, beauty refills, baby goods &mdash;
        these are real subscription categories. Apparel, footwear, and
        most home goods are not, no matter what the deck says.
      </p>

      <h2>Cadence matters more than discount</h2>
      <p>
        The single biggest predictor of subscription churn is
        cadence-product mismatch. If you sell a 30-day supply but
        default to a 60-day cadence, the customer runs out and feels
        the brand failed them. If you sell a 60-day supply and default
        to 30 days, they get a backlog and cancel. Test the actual
        consumption rate before locking in a default. Olipop and
        Native both run cadence selectors that let the customer pick;
        defaults are set per SKU based on real consumption data.
      </p>

      <h2>The right discount structure</h2>
      <p>
        Most US D2C brands offer a flat 10&ndash;15% subscribe-and-save.
        That&rsquo;s fine, but the more interesting structure is
        tiered loyalty inside the subscription:
      </p>
      <ul>
        <li>
          <strong>Subscription discount day 1:</strong> 10% off.
        </li>
        <li>
          <strong>Loyalty bump at month 3:</strong> automatic upgrade
          to 12.5% off.
        </li>
        <li>
          <strong>Loyalty bump at month 6:</strong> automatic upgrade
          to 15% off plus a free add-on every six months.
        </li>
      </ul>
      <p>
        This costs you very little &mdash; the long-term subs are the
        ones you most want to keep &mdash; and gives the customer a
        reason to ride past the high-churn early months.
      </p>

      <h2>The cancellation flow is where you save the relationship</h2>
      <p>
        Recharge&rsquo;s cancellation flow is the single highest-leverage
        feature in the platform and most brands ignore it. Build a
        flow that, when a customer hits &ldquo;Cancel&rdquo;:
      </p>
      <ul>
        <li>
          <strong>Offers to skip a shipment</strong> as the first
          option. Solves &ldquo;too much product&rdquo; without losing
          the sub.
        </li>
        <li>
          <strong>Offers to swap cadence</strong> as the second.
          Solves the wrong-cadence problem above.
        </li>
        <li>
          <strong>Offers a one-time discount</strong> as the third.
          5&ndash;10% off the next order, hard expiry, only if the
          first two didn&rsquo;t save them.
        </li>
        <li>
          <strong>Lets them cancel</strong> as the fourth, with a one-
          question reason capture so you learn why.
        </li>
      </ul>

      <h2>The data signal nobody watches</h2>
      <p>
        Order 2 retention is the leading indicator of subscription
        health. If 80%+ of subscribers ship order 2, the program is
        healthy. If it&rsquo;s under 60%, something is broken &mdash;
        usually onboarding, shipping speed, or first-product
        experience. Pull this number weekly in Recharge. Most brands
        look at total active subs and miss the cohort drop.
      </p>

      <h2>Don&rsquo;t let subscription cannibalize one-time</h2>
      <p>
        A common mistake: making the one-time price the same as the
        sub price minus the discount. The customer who would have
        paid full price for one-time now subscribes, takes the
        discount, and cancels after order 2. You&rsquo;ve trained
        them to extract margin. Keep your one-time price firm and
        let subscription be a real commitment trade.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up Recharge subscription programs for US D2C brands on
        Shopify &mdash; cadence logic, tiered discounts, the Recharge
        cancellation flow, and the analytics layer to actually watch
        cohort retention. If your sub program is leaking and
        you&rsquo;re not sure where, that&rsquo;s the kind of audit we
        love.
      </p>
    </>
  );
}
