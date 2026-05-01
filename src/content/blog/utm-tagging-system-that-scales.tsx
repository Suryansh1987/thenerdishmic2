import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "utm-tagging-system-that-scales",
  title: "A UTM tagging system that scales past one campaign",
  description:
    "UTM chaos is the silent killer of marketing reports. A simple, opinionated naming convention that survives growth, agency switches, and the one intern who wrote &lsquo;FaceBook&rsquo; with a capital B.",
  date: "2025-09-16",
  readingTime: "6 min read",
  tags: ["UTMs", "Tracking"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Every founder-led brand reaches the same moment. You open the
        acquisition report and there are seventeen versions of
        &ldquo;facebook&rdquo;. Some capitalised, some hyphenated, one with a
        typo. The campaign column has &ldquo;sale&rdquo;, &ldquo;Sale-2024&rdquo;,
        and a UUID someone pasted from a tool. Welcome to UTM chaos &mdash;
        and to the surprisingly simple system that fixes it.
      </p>

      <h2>The five UTM parameters and what they should hold</h2>
      <ul>
        <li>
          <strong>utm_source.</strong> The platform. Lowercase, no spaces.
          meta, google, linkedin, youtube, newsletter. Never two words for
          the same source.
        </li>
        <li>
          <strong>utm_medium.</strong> The bucket. Stick to a fixed list:
          cpc, social-paid, social-organic, email, affiliate, referral.
          Do not invent new ones per campaign.
        </li>
        <li>
          <strong>utm_campaign.</strong> The actual campaign. Use a format
          like quarter-objective-name. q3-acquisition-monsoonsale.
        </li>
        <li>
          <strong>utm_content.</strong> The creative or placement.
          reel-01, story-02, footer-banner. This is where granularity
          lives.
        </li>
        <li>
          <strong>utm_term.</strong> Keyword for paid search, audience for
          paid social. Optional but useful.
        </li>
      </ul>

      <h2>The rules that prevent chaos</h2>
      <p>
        Three non-negotiables. Lowercase everything &mdash; analytics tools
        treat Facebook and facebook as different sources. Use hyphens, not
        spaces or underscores, because spaces become %20 and break links.
        Pick a fixed vocabulary for source and medium and document it
        somewhere your team can copy-paste from. A shared sheet beats
        tribal knowledge every time.
      </p>

      <h2>The UTM builder that ends arguments</h2>
      <p>
        Build a single source-of-truth UTM builder. A Google Sheet with
        dropdowns for source, medium and campaign, and a formula that spits
        out the tagged URL. No free-text inputs. The intern, the agency,
        and the founder all use the same sheet. The day someone bypasses
        it is the day chaos returns.
      </p>

      <h2>What to do with paid platform auto-tagging</h2>
      <ul>
        <li>
          <strong>Google Ads auto-tagging (gclid).</strong> Leave it on.
          GA4 reads it directly &mdash; you don&rsquo;t need manual UTMs on
          Google Ads.
        </li>
        <li>
          <strong>Meta dynamic UTMs.</strong> Use them, but lock the format
          across every account. Source meta, medium social-paid, campaign
          and content from Meta variables.
        </li>
        <li>
          <strong>Email tools.</strong> Almost always need manual UTMs.
          Default email-platform UTMs are inconsistent across tools.
        </li>
      </ul>

      <h2>How to clean up the mess you already have</h2>
      <p>
        Don&rsquo;t try to rewrite history. Use GA4 channel groupings or
        BigQuery to map the ten variants of &ldquo;facebook&rdquo; back to
        one. Going forward, enforce the new system. Within ninety days
        your reports will be readable again.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build the UTM system, the builder sheet, and the GA4 channel
        groupings that turn marketing reports back into something a
        founder can read in five minutes. If your analytics report
        currently needs a translator, that is exactly the cleanup we
        love to ship.
      </p>
    </>
  );
}
