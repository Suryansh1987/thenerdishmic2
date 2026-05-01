import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "cac-to-ltv-math-founders-ignore",
  title: "The CAC-to-LTV math founders keep ignoring",
  description:
    "Most founder-led brands optimise CAC and ignore LTV, then wonder why scaling kills profitability. Here is the unit-economics math that should be on every founder's wall.",
  date: "2026-01-22",
  readingTime: "7 min read",
  tags: ["Growth", "Unit Economics", "CAC"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Founders fall in love with CAC. It&rsquo;s the metric the
        agency reports weekly, the number that goes in the deck, the
        thing that makes you feel like growth is working. CAC is half
        the equation. The other half &mdash; LTV &mdash; is the half
        that decides whether your business survives the next funding
        round, the next ad cost increase, or the next competitor that
        out-spends you. Most founders we work with cannot quote their
        LTV to within 30%. That&rsquo;s a real problem.
      </p>

      <h2>The number that actually matters: contribution margin LTV</h2>
      <p>
        Revenue LTV is the wrong number. A customer who spends 50,000
        over two years on a 25% margin product produces 12,500 of
        contribution &mdash; not 50,000. Contribution margin LTV is
        revenue minus COGS minus payment processing minus shipping
        minus any cost-per-customer service overhead. That&rsquo;s the
        money that&rsquo;s actually available to acquire the next
        customer. Founders who track revenue LTV consistently overspend
        on CAC.
      </p>

      <h2>The 3:1 rule is a starting point, not a finish line</h2>
      <p>
        Conventional wisdom says LTV should be 3x CAC. For most
        founder-led D2C and service brands in India, 3:1 is barely
        survivable. At 3:1, your overheads, fixed costs, and
        re-investment in product eat the rest. A genuinely healthy
        ratio is 4:1 to 5:1 on contribution margin LTV. Below 3:1 and
        you&rsquo;re on a treadmill that requires constant fundraising.
      </p>
      <ul>
        <li><strong>Below 2:1.</strong> Stop scaling. Fix margin or retention first.</li>
        <li><strong>2-3:1.</strong> Survive but not thrive. Reinvestment is starved.</li>
        <li><strong>3-4:1.</strong> Healthy enough to scale carefully.</li>
        <li><strong>4:1+.</strong> Press the gas. This is what venture-scale looks like.</li>
      </ul>

      <h2>Payback period is the cash-flow truth</h2>
      <p>
        LTV-to-CAC tells you about long-term economics. Payback period
        tells you whether you can fund the next month of acquisition.
        If your CAC is 2,000 and the average customer pays back 2,000
        in contribution margin in month 1, you can scale infinitely
        from cash flow. If payback is 9 months, you need a balance
        sheet. For Indian SMBs without a war chest, payback under 4
        months is the practical target.
      </p>

      <h2>Cohort analysis or you&rsquo;re flying blind</h2>
      <p>
        Blended LTV is a lie. It mixes 2019 cohorts that have had
        five years to compound with last month&rsquo;s cohort that
        bought once. Cohort by acquisition month, track repeat-purchase
        rate at month 3, 6, 12, and you&rsquo;ll see the truth. Most
        D2C brands we audit have a repeat rate that&rsquo;s declining
        cohort-on-cohort and a blended LTV that hides it. The
        cohort view exposes which ad channels deliver durable
        customers and which deliver one-and-done.
      </p>

      <h2>Channel-level LTV changes the spend mix</h2>
      <p>
        Customers from Meta, Google, organic, referral, and influencer
        channels have wildly different LTVs. We&rsquo;ve seen jewellery
        brands where Meta-acquired customers had 40% lower 12-month
        LTV than organic-acquired customers, even though Meta CAC was
        cheaper. Spending more on the cheap-CAC channel actually
        destroyed value. Channel-level LTV reporting is the unlock that
        flips the spend mix &mdash; and almost nobody does it.
      </p>

      <h2>Retention is the cheapest growth lever</h2>
      <p>
        A 10% improvement in repeat-purchase rate has 3-5x the
        bottom-line impact of a 10% reduction in CAC. Founders
        obsess over CAC because it&rsquo;s easier to influence quickly,
        but the retention lever produces compounding returns. Email
        flows, post-purchase loops, referral programs, customer
        service quality &mdash; the boring stuff &mdash; all directly
        improve LTV. Brands that build retention infrastructure as
        seriously as they build acquisition infrastructure are the
        ones that survive the long game.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We work with founder-led Indian brands &mdash; D2C, services,
        FMCG, real estate &mdash; on the full growth stack: paid ads,
        SEO, websites, and the analytics layer that makes LTV and CAC
        actually measurable. If you&rsquo;re scaling spend without
        knowing your channel-level LTV, we can build that view in two
        weeks and tell you exactly which budgets to grow and which to
        cut. The math always wins eventually. Better to have it on
        your side now.
      </p>
    </>
  );
}
