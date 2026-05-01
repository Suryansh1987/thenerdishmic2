import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "dashboards-founders-actually-read",
  title: "Marketing dashboards founders actually read on Monday morning",
  description:
    "The 50-tile dashboard is a graveyard. Here&rsquo;s the small, opinionated dashboard structure that founder-led teams actually open every Monday &mdash; and act on.",
  date: "2025-10-14",
  readingTime: "6 min read",
  tags: ["Dashboards", "Reporting"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        We have built more marketing dashboards than we&rsquo;d like to
        admit. The ones founders actually open on Monday share three traits:
        they fit on one screen, they answer the same five questions every
        week, and they tell you what to do, not just what happened. Most
        agency-built dashboards fail all three.
      </p>

      <h2>The five questions a Monday dashboard must answer</h2>
      <ul>
        <li>
          <strong>Did we hit revenue last week?</strong> Actuals vs target,
          week-on-week, with a single percentage.
        </li>
        <li>
          <strong>Where did the revenue come from?</strong> Channel mix at
          a glance, with paid vs organic clearly split.
        </li>
        <li>
          <strong>What is each channel costing us?</strong> Blended CAC,
          plus per-channel CAC, plus a flag if anything moved more than
          twenty percent.
        </li>
        <li>
          <strong>What is in the funnel?</strong> Top of funnel signals
          (sessions, leads) that predict next month&rsquo;s revenue. Not
          just last month&rsquo;s.
        </li>
        <li>
          <strong>What needs attention this week?</strong> A short list of
          alerts &mdash; campaigns above target CAC, pages that suddenly
          dropped, ads burning budget without conversions.
        </li>
      </ul>

      <h2>The structure that works</h2>
      <p>
        One screen, four rows. Top row is revenue and target. Second row
        is channel breakdown with last week, prior week, and percentage
        change. Third row is funnel: sessions, leads, conversions, AOV.
        Fourth row is the alerts panel. That&rsquo;s it. No carousel of
        ten tabs. No fifty drill-downs. Founders need a verdict, not an
        archaeology project.
      </p>

      <h2>What to leave out, deliberately</h2>
      <ul>
        <li>
          <strong>Vanity reach metrics.</strong> Impressions and reach
          belong in a creative review, not the founder dashboard.
        </li>
        <li>
          <strong>Platform-reported ROAS in isolation.</strong> Use blended
          ROAS or MER. Per-platform numbers double-count and overstate.
        </li>
        <li>
          <strong>Anything that requires a footnote.</strong> If a number
          needs explanation every week, either fix it or remove it.
        </li>
      </ul>

      <h2>The tools question</h2>
      <p>
        Looker Studio, Whatagraph, Triple Whale, a Notion database, a
        Google Sheet pulling from BigQuery. They all work. The dashboard
        tool matters far less than the data hygiene underneath it. A
        beautiful dashboard on broken UTMs is just a prettier wrong
        answer.
      </p>

      <h2>How to make it stick</h2>
      <p>
        Send the dashboard as a screenshot in your team WhatsApp every
        Monday at 10am, with a one-line commentary from whoever owns
        marketing. Three weeks of that and the dashboard becomes a
        habit. Skip the commentary and it becomes wallpaper.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build the simple, opinionated marketing dashboards founder-led
        brands actually use &mdash; and the underlying data plumbing that
        makes them trustworthy. If your current dashboard has fifty tiles
        and you read none of them, we&rsquo;d love to ship you the
        five-tile version that actually drives decisions.
      </p>
    </>
  );
}
