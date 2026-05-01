import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "website-to-crm-loop",
  title: "The website-to-CRM loop: shipping marketing systems that scale themselves",
  description:
    "A website is not a brochure. It's the entry point to a CRM, a content engine, and a re-targeting layer. Here is the four-component loop we ship for every founder client.",
  date: "2026-02-28",
  readingTime: "5 min read",
  tags: ["Websites", "CRM", "Marketing systems"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        The fastest growing founder-led brands we work with treat the website
        as a node in a marketing system, not an island. Visitors arrive,
        identify themselves, get nurtured, and either book or get re-targeted.
        Nothing leaks. Here is the four-component loop we install for every
        new client.
      </p>

      <h2>1. The site captures intent, not just clicks</h2>
      <p>
        Every page has a single primary action and a single secondary action.
        Primary is usually "book a call". Secondary is a low-friction email
        capture &mdash; a teardown, a pricing PDF, a checklist. The goal is
        not pageviews. It is identifying the visitor.
      </p>

      <h2>2. The CRM owns the lifecycle</h2>
      <p>
        From the moment a visitor identifies themselves, the CRM is the source
        of truth. Stage, source, last touch, next step. The website never
        re-sends a "welcome" email; the CRM does, because the CRM is the only
        thing that knows whether you've already replied.
      </p>

      <h2>3. The content engine feeds both</h2>
      <p>
        Reels, posts, and articles do double duty. They drive cold traffic to
        the site, and they re-warm leads already in the CRM through a weekly
        digest. The same asset works at top of funnel and at follow-up,
        because the CRM is segmenting the audience for you.
      </p>

      <h2>4. Re-targeting catches what slips</h2>
      <p>
        Anyone who hits the pricing page and doesn't book gets a 14-day
        re-targeting window. Anyone who books and ghosts gets a different one.
        The pixel on the website powers both, which is why the website has to
        be the entry point &mdash; not Linktree, not a Notion page.
      </p>

      <h2>Why the loop matters more than the parts</h2>
      <p>
        Any one of these in isolation is fine. A nice website. A clean CRM.
        Good content. A re-targeting budget. The leverage is in connecting
        them. A founder running a connected loop gets the compounding effect
        &mdash; every reel, every page, every conversation makes the next one
        cheaper.
      </p>
    </>
  );
}
