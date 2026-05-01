import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "gtm-setup-for-non-developers",
  title: "Google Tag Manager setup for non-developers",
  description:
    "GTM is not a developer tool, despite the intimidating UI. A founder-friendly walk-through of the setup that powers a clean GA4 + Ads + Meta tracking stack.",
  date: "2025-10-28",
  readingTime: "7 min read",
  tags: ["GTM", "Tracking"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Google Tag Manager looks like a tool built for someone who knows
        regex and enjoys it. It is not. GTM is, at its core, a single
        snippet on your site that lets you fire any tracking code without
        touching the codebase again. For a non-developer founder, that is
        a superpower &mdash; if you set it up sensibly the first time.
      </p>

      <h2>What GTM actually is, in one paragraph</h2>
      <p>
        Three concepts. Tags are the things that fire (a GA4 event, a
        Meta pixel hit, a Google Ads conversion). Triggers are the rules
        for when they fire (page view, form submit, button click).
        Variables are the values they carry (page URL, button text,
        purchase value). That&rsquo;s the entire mental model. Everything
        else is detail.
      </p>

      <h2>The first ten minutes after install</h2>
      <ul>
        <li>
          <strong>Turn on built-in variables.</strong> All of them. Page
          URL, click classes, form ID. They cost nothing and unlock
          almost every trigger you will ever need.
        </li>
        <li>
          <strong>Create a Google consent settings tag.</strong> Even if
          you are not yet doing consent banners, having the structure in
          place saves a rebuild later.
        </li>
        <li>
          <strong>Add GA4 configuration as your first tag.</strong> One
          tag, fires on all pages, with your measurement ID. This alone
          replaces a hard-coded GA snippet.
        </li>
      </ul>

      <h2>The data layer, explained without jargon</h2>
      <p>
        The data layer is a JavaScript object on your site that holds
        structured information &mdash; product ID, order value, user ID
        &mdash; that GTM can read. For e-commerce, almost every modern
        platform pushes a data layer for free. Your job is to know it
        exists and to read from it instead of scraping the page.
      </p>

      <h2>Common traps non-developers fall into</h2>
      <ul>
        <li>
          <strong>Firing the GA4 tag twice.</strong> Either via a
          hard-coded snippet plus GTM, or via two GTM containers.
          Inflates your sessions, breaks your bounce rate.
        </li>
        <li>
          <strong>Using click triggers when you should use a form
          trigger.</strong> The submit button moves, the form ID
          doesn&rsquo;t. Form triggers are more reliable.
        </li>
        <li>
          <strong>Publishing without using Preview mode.</strong>
          Preview is the single most underused feature in GTM.
          Always preview before publish. Always.
        </li>
      </ul>

      <h2>The tag stack that covers ninety percent of brands</h2>
      <p>
        GA4 configuration tag. GA4 event tags for lead, scroll, purchase
        and key clicks. Google Ads conversion tag with the conversion
        linker. Meta pixel base code plus a custom event tag for
        purchase. That is roughly seven tags total. If your container has
        forty-seven tags, you have an audit on your hands.
      </p>

      <h2>Versioning is your safety net</h2>
      <p>
        Every Publish creates a new version. Name them. &ldquo;Added
        scroll tracking&rdquo; is a useful name. &ldquo;Workspace
        Changes&rdquo; is not. When something breaks (it will), you can
        revert in two clicks instead of guessing what changed.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We set up GTM, GA4, and the conversion stack on top, in a way a
        non-developer founder can actually maintain &mdash; with
        documented tags, sensible naming, and zero hidden
        dependencies. If your current container looks like it was
        inherited from three agencies ago, that is exactly the cleanup
        we&rsquo;d love to help with.
      </p>
    </>
  );
}
