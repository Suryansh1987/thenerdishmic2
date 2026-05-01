import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "sms-automation-b2b-followup",
  title: "SMS automation for B2B follow-up that doesn&rsquo;t feel spammy",
  description:
    "How US B2B teams can use SMS for follow-up without nuking trust. Compliance, timing, copy, and the one rule that keeps texts feeling human.",
  date: "2025-11-02",
  readingTime: "6 min read",
  tags: ["SMS", "Automation", "B2B"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        SMS is the most underused B2B follow-up channel in the US. It&rsquo;s
        also the easiest to ruin. One bad blast and you&rsquo;re in the same
        bucket as political robotexts and crypto scams. Done right, it lifts
        meeting-set rates by 30 to 50% on top of email. Here&rsquo;s how to
        actually do it right.
      </p>

      <h2>Start with consent, not creativity</h2>
      <p>
        TCPA exists, A2P 10DLC registration exists, and the fines are real.
        Get explicit opt-in, log it, and pass through a compliant gateway like
        Twilio or Telnyx. If you&rsquo;re tempted to skip this because
        "it&rsquo;s just our existing customers," don&rsquo;t. We&rsquo;ve
        seen $10K fines for less.
      </p>

      <h2>The three follow-up moments worth a text</h2>
      <ul>
        <li>
          <strong>Right after a demo, before the calendar fades.</strong> A
          short "great chat &mdash; sending the recap to your inbox now"
          beats a chase email three days later.
        </li>
        <li>
          <strong>Day before a scheduled call.</strong> Confirms the slot,
          drops the reschedule chance to nearly zero. Cuts no-shows in half
          for most B2B teams we&rsquo;ve worked with.
        </li>
        <li>
          <strong>Stuck deal at 14 days of silence.</strong> One text. One
          question. No links. "Hey &mdash; should I close this out or is
          there still life here?" works disturbingly well.
        </li>
      </ul>

      <h2>The copy rule</h2>
      <p>
        Write it like you&rsquo;d text a friend. Lowercase is fine. One
        sentence is fine. No emoji parade, no all-caps subject-line energy,
        no link unless they asked for one. If your text reads like a
        marketing email, you&rsquo;ve already lost.
      </p>

      <h2>Timing that works on US business hours</h2>
      <ul>
        <li>
          <strong>10am to 4pm, recipient&rsquo;s time zone.</strong> Outside
          this window the response rate falls off a cliff and the
          unsubscribe rate spikes.
        </li>
        <li>
          <strong>Tuesday through Thursday.</strong> Mondays are catch-up,
          Fridays are checked-out. SF and NYC behave the same here despite
          what your gut says.
        </li>
        <li>
          <strong>Never on a holiday, even soft ones.</strong> Memorial Day,
          July 4th week, the Wednesday before Thanksgiving &mdash;
          you&rsquo;ll regret it.
        </li>
      </ul>

      <h2>iMessage versus SMS</h2>
      <p>
        For one-to-one founder-led follow-up to existing relationships,
        sending from a real iPhone via iMessage outperforms anything
        automated. For scale beyond a couple hundred contacts a month, you
        need a proper SMS platform. Don&rsquo;t fake personal &mdash; either
        commit to it or use the right channel.
      </p>

      <h2>What to track</h2>
      <p>
        Reply rate, not click rate. SMS isn&rsquo;t a click channel; it&rsquo;s
        a conversation channel. If your texts aren&rsquo;t getting replies,
        the copy is broken even if your "open rates" look fine. Also track
        opt-out rate per send &mdash; anything over 1% is a warning sign,
        anything over 3% means stop and rewrite.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up SMS follow-up for US B2B teams &mdash; compliant, wired
        into your CRM, copy that doesn&rsquo;t sound like a robot. If your
        sales team is leaving meetings on the table because email follow-up
        is going to spam, SMS is the fix. We&rsquo;ll ship it in two weeks.
      </p>
    </>
  );
}
