import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "google-ads-search-vs-pmax-services",
  title: "Google Ads Search vs Performance Max for service brands",
  description:
    "Performance Max is Google's favourite child, but for founder-led service brands in India, Search still wins more often than not. Here is when each one earns its budget.",
  date: "2025-09-16",
  readingTime: "7 min read",
  tags: ["Google Ads", "PMax"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Every Google rep we&rsquo;ve ever spoken to wants you to move budget
        into Performance Max. Some of that is genuine &mdash; PMax has
        gotten better. Most of it is because PMax is opaque, sticky, and
        protects Google&rsquo;s margin. For founder-led service businesses
        in India, the answer almost always sits between the two, and the
        split matters more than the campaign type.
      </p>

      <h2>Search still owns high-intent keywords</h2>
      <p>
        If someone in Bandra types "interior designer for 2 BHK", that is
        the most valuable click you will ever buy. Search lets you bid on
        it directly, write the exact headline, and send the click to the
        exact landing page. PMax can technically serve a search ad to that
        query, but you get no control over which queries you show on, what
        creative shows up, or what the bid was. For services with a
        narrow keyword universe, Search is still where you start.
      </p>

      <h2>PMax shines when your asset library is deep</h2>
      <p>
        PMax feeds on creative. If you have 10 product photos, two videos,
        a logo, and three headlines, it&rsquo;s starving. If you have 60
        images, 8 videos, 15 headlines and 30 descriptions, it cooks.
        Founder-led service brands rarely have that asset depth on day
        one, which is why PMax disappoints when it&rsquo;s switched on
        too early.
      </p>
      <ul>
        <li><strong>Minimum to launch.</strong> 5 videos, 20 images, 15 headlines, 4 descriptions.</li>
        <li><strong>Refresh cadence.</strong> 30% of assets swapped every six weeks.</li>
        <li><strong>Audience signals.</strong> Customer match list, website visitors, purchase intent.</li>
      </ul>

      <h2>The hidden Search-cannibal problem</h2>
      <p>
        PMax loves to serve on your brand keyword and steal credit from
        Search. We&rsquo;ve seen accounts where 40% of PMax conversions
        were people who searched the brand name. The fix is a brand
        exclusion list at the account level &mdash; a feature Google
        finally rolled out properly &mdash; plus a dedicated Brand Search
        campaign that bids low and protects the SERP. Without this, PMax
        will look like a hero while doing nothing for new demand.
      </p>

      <h2>For service brands, lead quality beats lead volume</h2>
      <p>
        PMax optimises towards the conversion event you give it. If that
        event is "form submitted", you will get 200 form submits a month,
        70% of which are junk. The fix is offline conversion import &mdash;
        push qualified leads back from your CRM into Google with a value
        attached. Within four weeks PMax pivots and starts finding people
        who look like your closed-won deals, not your form-fillers. This
        is the single highest-leverage thing most service businesses
        ignore.
      </p>

      <h2>Our default split for an Indian service brand</h2>
      <p>
        Branded Search at 10% of budget, non-branded Search at 50%, PMax
        at 30%, YouTube or Demand Gen at 10%. We start there and adjust
        based on the lead-quality data after week six. For brands with
        zero asset library, we push PMax to 0% and run pure Search until
        we&rsquo;ve shot enough creative to feed the beast. That usually
        takes a month and saves 1-2L of wasted spend.
      </p>

      <h2>The reporting trap</h2>
      <p>
        PMax reports look great because Google attributes conversions
        generously. We pull the actual data through a GA4 + CRM join,
        compare last-non-direct attribution to PMax&rsquo;s claimed
        conversions, and almost always find a 25-40% gap. Founders who
        only look at the Google Ads UI think PMax is their best channel.
        It usually isn&rsquo;t. It&rsquo;s the channel with the most
        favourable reporting.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We build and run Google Ads accounts for founder-led service
        businesses across India &mdash; real estate, interior design,
        clinics, B2B SaaS, professional services. We&rsquo;ll audit
        what&rsquo;s running today, rebuild the structure where needed,
        and wire up the offline conversion loop so PMax actually finds
        you customers, not form-fillers. If your Search and PMax split
        was decided by a Google rep, it&rsquo;s probably worth a second
        opinion.
      </p>
    </>
  );
}
