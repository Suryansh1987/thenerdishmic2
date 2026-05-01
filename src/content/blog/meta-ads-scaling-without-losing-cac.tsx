import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "meta-ads-scaling-without-losing-cac",
  title: "Scaling Meta ads from 5L to 50L without losing your CAC",
  description:
    "A practical playbook for founder-led brands taking Meta spend from 5L to 50L a month without watching CAC double. Structure, creative cadence, and the bid strategy nobody talks about.",
  date: "2025-09-02",
  readingTime: "8 min read",
  tags: ["Meta Ads", "Paid", "CAC"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most founder-led brands hit a wall around 5L a month on Meta. CAC is
        clean, ROAS looks healthy, and then somebody says &mdash; let&rsquo;s
        push to 50L. Six weeks later CAC has doubled, the agency is
        defensive, and the founder is staring at a dashboard wondering what
        broke. Almost always, nothing broke. The structure was just built
        for 5L, not 50L. Here&rsquo;s how we re-architect it.
      </p>

      <h2>The 5L structure is not the 50L structure</h2>
      <p>
        At 5L, you can get away with three campaigns, ten ad sets, and a
        creative refresh once a fortnight. At 50L, that exact same setup
        will collapse. Auction overlap eats you alive, the algorithm runs
        out of fresh signal, and your best ad goes from a 1.8 ROAS to 0.6
        in nine days. The first move is consolidation &mdash; Advantage+
        Shopping or fewer, broader campaigns with high-volume budget that
        Meta can actually optimise inside.
      </p>

      <h2>Creative volume becomes the rate-limiter</h2>
      <p>
        At small spend, one good ad carries you. At 50L, you need 8 to 12
        new creatives a week or you&rsquo;re re-serving the same hooks to
        people who&rsquo;ve seen them four times. Founder-led brands have
        an unfair advantage here &mdash; founder-led UGC, behind-the-scenes
        clips, founder talking to camera. We script and shoot in batches
        of 30 every two weeks, and we ship before they feel polished.
      </p>
      <ul>
        <li><strong>Hook variations.</strong> Same ad, four different first three seconds.</li>
        <li><strong>Format splits.</strong> Reel, carousel, static, founder-talk-to-camera.</li>
        <li><strong>Angle rotation.</strong> Pain, aspiration, social proof, founder story, before-after.</li>
      </ul>

      <h2>Bid strategy: stop using cost cap when you scale</h2>
      <p>
        Cost cap looks safe at 5L. At 50L it actively starves your delivery.
        The algorithm spends an hour finding a cheap conversion, then sits
        idle for three. We move scaled accounts to highest-volume bidding
        with a daily budget that&rsquo;s 3-4x average daily spend, then
        manage CAC with creative rotation and audience exclusion &mdash; not
        with the bid cap.
      </p>

      <h2>Audience exhaustion is the silent killer</h2>
      <p>
        Most India-based D2C and service brands have a usable audience of
        maybe 8-15 lakh people. At 5L of spend you&rsquo;re seeing 15% of
        them. At 50L you&rsquo;re seeing all of them, three times. CAC
        doesn&rsquo;t double because the ads got worse &mdash; it doubles
        because you ran out of cheap impressions. The fix is geo-stacking,
        layered lookalikes, and seriously, more languages. Hindi creative
        in Tier 2 unlocks audiences that English-only campaigns will never
        touch.
      </p>

      <h2>The 70/20/10 budget split</h2>
      <p>
        At scale we run 70% of budget on the proven, broad campaign that
        already converts. 20% goes to a controlled test campaign with new
        creative, new hooks, new audiences. 10% goes to retargeting and
        bottom-funnel. Founders who flip this and put 50% on tests blow
        through CAC budgets in week one. Founders who put 100% on the
        winner watch ROAS decay within a month. The split is boring and
        it works.
      </p>

      <h2>Measure CAC, not ROAS, at scale</h2>
      <p>
        ROAS is a vanity metric for paid social once you&rsquo;re past 20L
        a month. Returning customers, organic, brand search &mdash; they
        all dirty the attribution. We track new-customer CAC against
        contribution margin, weekly, blended across Meta plus the small
        Google brand campaign that catches the searches Meta drove. If
        new-customer CAC is under your contribution margin minus a 25%
        buffer, you scale. If not, you fix creative before you fix budget.
      </p>

      <h2>When to slow down</h2>
      <p>
        Three signals: frequency above 3.2 on your top campaign, week-on-
        week CAC up more than 15%, or click-through rate dropping below
        1%. Any one of these and you pause new spend, ship four new
        creatives, and let the algorithm reset. Founders who push through
        these signals always end up cutting spend by half a month later.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We run Meta ads end-to-end for founder-led Indian brands &mdash;
        D2C, jewellery, services, real estate. Strategy, creative, scripts,
        media buying, and the weekly CAC review the founder actually wants
        to read. If you&rsquo;re stuck under 10L a month and you can see
        50L on the horizon, talk to us before you raise the budget. Half
        our clients come to us after they&rsquo;ve already tried scaling
        once and got hurt.
      </p>
    </>
  );
}
