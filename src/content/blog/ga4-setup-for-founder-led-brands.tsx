import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "ga4-setup-for-founder-led-brands",
  title: "GA4 setup for founder-led brands without a data team",
  description:
    "A no-nonsense GA4 setup guide for founders who don&rsquo;t have a data engineer on call. The events that actually matter, the ones to skip, and the reports that will survive your next agency switch.",
  date: "2025-08-05",
  readingTime: "7 min read",
  tags: ["GA4", "Analytics"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Most founder-led brands we audit have a GA4 property that was set up
        by someone&rsquo;s cousin in 2023 and has never been touched since.
        The data is technically flowing, but every report you open feels like
        a riddle. Here is the version of GA4 setup we wish every founder had
        on day one &mdash; opinionated, minimal, and built so you can answer
        real business questions on a Monday morning.
      </p>

      <h2>The mindset shift from Universal Analytics</h2>
      <p>
        GA4 is not a refresh of the old GA. It is an event-based model where
        everything &mdash; pageviews, scrolls, purchases &mdash; is just an
        event with parameters. Stop trying to recreate your old reports.
        Start by writing down the five business questions you actually need
        answered each week, and reverse-engineer the events from there.
      </p>

      <h2>Events worth setting up properly</h2>
      <ul>
        <li>
          <strong>page_view with content groups.</strong> Tag every page with
          a content group like blog, product, pricing, or landing. Without
          this you cannot answer &ldquo;which content drives sign-ups&rdquo;
          without a spreadsheet.
        </li>
        <li>
          <strong>generate_lead.</strong> Fire on form submit, demo booking,
          or WhatsApp click. This is the event your paid team and your
          founder need agreement on &mdash; not three different definitions
          across three tools.
        </li>
        <li>
          <strong>begin_checkout, add_payment_info, purchase.</strong> If you
          sell anything, the e-commerce funnel is non-negotiable. Use the
          standard names so out-of-the-box reports work.
        </li>
        <li>
          <strong>scroll, video_progress, file_download.</strong> Engagement
          signals you can actually use to define audiences for ads.
        </li>
      </ul>

      <h2>Events that quietly hurt you</h2>
      <ul>
        <li>
          <strong>Custom events for every button click.</strong> You will end
          up with 400 event names, none of which you remember. Group them
          with a single event name and a parameter.
        </li>
        <li>
          <strong>Auto-tracked outbound clicks.</strong> Useful in theory.
          Noisy in practice unless you exclude your own subdomains and dev
          environments.
        </li>
      </ul>

      <h2>The settings nobody touches but should</h2>
      <p>
        Three switches change the quality of your data overnight. First,
        extend data retention to 14 months &mdash; the default 2 months
        breaks year-on-year reporting. Second, configure cross-domain
        tracking if your checkout sits on a different domain. Third, mark
        your real conversions as key events so they are weighted properly in
        attribution.
      </p>

      <h2>Reports that survive an agency switch</h2>
      <p>
        Build three Explorations and pin them. A weekly acquisition report
        by source, medium and campaign with key events as the metric. A
        landing page report with engagement rate and conversions. A funnel
        from lead to purchase by channel. If your next agency cannot read
        these without a handover doc, the setup was not good enough.
      </p>

      <h2>What to do this week</h2>
      <p>
        Open your GA4 property. Check data retention, key events, and
        whether your domains are linked. If even one of those is wrong, your
        last six months of data is partially lying to you. Fix it, then
        rebuild your dashboard from the questions, not from the templates.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up GA4, GTM, and the dashboards on top for founder-led brands
        who want to stop arguing about which number is right. If your
        analytics stack feels haunted and you want one source of truth your
        whole team trusts, that is exactly the kind of work we do &mdash;
        come say hi.
      </p>
    </>
  );
}
