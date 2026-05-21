# Google Search Console Audit Playbook

This document is the operating guide for monitoring and fixing indexing, canonicalization, crawl, and search-performance issues for `https://www.thenerdishmic.com`.

The site recently moved from a WordPress setup to the current Next.js site. Because of that migration, Search Console should be used as a cleanup and monitoring tool, not just a reporting dashboard.

## 1. Core setup

### Canonical property to use

The canonical production URL is:

`https://www.thenerdishmic.com`

Use both of these in Search Console:

1. A **Domain property** for `thenerdishmic.com`
2. A **URL-prefix property** for `https://www.thenerdishmic.com/`

Why both:

- The Domain property shows signals across `http`, `https`, `www`, and apex.
- The URL-prefix property makes it easier to inspect the exact canonical version that Google should index.

### Variants to keep an eye on

Track these versions during migration cleanup:

- `http://thenerdishmic.com/`
- `https://thenerdishmic.com/`
- `http://www.thenerdishmic.com/`
- `https://www.thenerdishmic.com/`

Expected outcome:

- Only `https://www.thenerdishmic.com/*` should be indexable.
- Apex and `http` variants should permanently redirect to the `https://www` version.

## 2. First-week audit after deployment

Run this sequence after major SEO fixes or deploys.

### Step 1: Check sitemap submission

Open `Indexing > Sitemaps` and submit:

`https://www.thenerdishmic.com/sitemap.xml`

Confirm:

- Status is `Success`
- Search Console shows the sitemap was fetched recently
- The discovered URLs trend upward as Google sees the current blog URLs

If the sitemap fetch fails:

- open the sitemap in the browser
- verify it contains only canonical `https://www.thenerdishmic.com/...` URLs
- verify there are no old WordPress URLs in the sitemap

### Step 2: Inspect the homepage

Use `URL Inspection` for:

`https://www.thenerdishmic.com/`

Check:

- URL is on Google
- Google-selected canonical is `https://www.thenerdishmic.com/`
- Crawled successfully
- Indexing allowed
- Page fetch succeeded

Then run `Test live URL` and confirm:

- live fetch is successful
- no blocked resources matter for content rendering
- rendered page matches the live homepage

### Step 3: Inspect the blog index

Inspect:

`https://www.thenerdishmic.com/blog`

Check:

- canonical is self-referencing
- URL is indexable
- Google-selected canonical matches user-declared canonical
- live test renders the article list correctly

### Step 4: Inspect a blog post

Pick one live blog post URL and inspect it.

Check:

- it is indexed or eligible for indexing
- user-declared canonical matches the exact post URL
- Google-selected canonical matches the exact post URL
- crawled page has the correct article title and description
- enhancements or rich-result tools detect valid structured data where applicable

### Step 5: Inspect a paginated blog URL

Inspect one URL like:

`https://www.thenerdishmic.com/blog?page=2`

Expected outcome:

- crawl allowed
- `noindex,follow`
- self-canonical to the exact paginated URL
- Google may exclude it from the index, which is expected

### Step 6: Inspect one legacy WordPress URL

Examples to test:

- an old `wp-admin` path
- a legacy `feed` URL
- a junk numeric URL like the one shown in the indexing report

Expected outcome:

- it should not return `200`
- it should not redirect to the homepage
- it should return a correct cleanup response such as `410` or `404`

## 3. How to read the Page Indexing report

Open `Indexing > Pages`.

This report is your main source for crawl and indexing triage.

### Healthy states

- `Indexed`
  - Good. These URLs are in Google’s index.
- `Page with redirect`
  - Good for non-canonical variants if they are supposed to redirect.

### Important exclusion states and how to interpret them

#### `Crawled - currently not indexed`

What it means:

- Google reached the page but decided not to index it yet.

Common causes:

- page quality looks thin or too similar to other pages
- Google is still evaluating a new page
- duplicate or near-duplicate content
- weak internal linking

What to do:

- inspect the exact URL
- compare canonical/title/description with similar pages
- confirm the page has strong internal links
- confirm the content is clearly distinct and valuable
- if it is a blog post, check whether it was recently published and simply needs time

#### `Discovered - currently not indexed`

What it means:

- Google knows the URL exists but has not crawled it yet.

Common causes:

- crawl budget is being spent elsewhere
- weak internal linking
- new URLs were only recently added

What to do:

- make sure the URL is in the sitemap
- add stronger internal links
- inspect the page and request indexing only after confirming quality

#### `Duplicate without user-selected canonical`

What it means:

- Google sees one or more duplicates and does not see a clear canonical from you.

What to do:

- confirm a canonical tag exists
- confirm internal links point to the canonical URL
- confirm only one protocol/host version is exposed
- confirm there is no duplicate routing path

#### `Alternate page with proper canonical tag`

What it means:

- Google found a duplicate variant and respected the canonical.

Usually good when:

- `http` redirects to `https`
- apex redirects to `www`
- paginated or duplicate-style variants are intentionally excluded

Check anyway if the count rises unexpectedly.

#### `Blocked by robots.txt`

What it means:

- Google could not crawl the page because robots blocked it.

For this site, this is usually bad during migration cleanup because Google needs to recrawl old URLs and see their real status codes.

What to do:

- if the blocked URL is an old WordPress/junk URL, do **not** re-block it unless you have a very specific reason
- let Google crawl it and see the real `301`, `404`, or `410`

#### `Soft 404`

What it means:

- Google thinks the page behaves like a missing page even though the server response is not a clean `404/410`

Common causes:

- redirecting junk URLs to the homepage
- empty templates with little content
- “not found” messaging while still returning `200`

What to do:

- make sure missing URLs return `404` or `410`
- do not send unknown old URLs to the homepage

#### `Server error (5xx)`

What it means:

- Googlebot hit a server failure.

What to do:

- inspect the URL immediately
- compare logs if available
- check whether the failure is sporadic or route-specific

## 4. URL Inspection workflow

Use `URL Inspection` every time you fix or review an SEO issue.

### What to compare in each inspection

Check these fields:

- `Indexing allowed?`
- `Page fetch`
- `Crawl allowed?`
- `User-declared canonical`
- `Google-selected canonical`
- `Last crawl`
- `Referring page`
- `Sitemaps`

### How to use `Test live URL`

Run a live test when:

- you just deployed a fix
- the indexing report looks stale
- you suspect rendering or hydration issues
- the canonical or robots signals were recently changed

Use the live test to answer:

- Can Googlebot fetch the page now?
- Does the rendered version show the real content?
- Are the canonical and robots signals present in the live HTML?

### When to request indexing

Request indexing only when all of the following are true:

- the page is important
- the page is crawlable
- canonical is correct
- the content is final and valuable
- the live test succeeds

Do not spam request indexing for every page. Use it for:

- homepage
- service pages
- blog posts you want indexed faster
- URLs that were previously broken and are now fixed

## 5. Migration cleanup workflow

Because the site used to run on WordPress, Google may still know about old URLs.

### What to look for

In `Indexing > Pages`, review examples from:

- redirects
- blocked pages
- soft 404s
- crawled currently not indexed
- not found

### How to triage old URLs

For each legacy URL:

1. Inspect the URL
2. Check the live test
3. Confirm whether it now returns:
   - `301` to the exact modern equivalent
   - `404` if there is no replacement
   - `410` if it is obvious junk or obsolete system output
4. Verify it does **not** redirect to the homepage unless the homepage is genuinely the best equivalent

### When to use the Removals tool

Use `Indexing > Removals` only for urgent cleanup, such as:

- junk URLs currently visible in branded search
- sensitive or embarrassing stale URLs
- temporary suppression while Google processes status changes

Important:

- Removals do not fix the root issue
- you still need the correct `301`, `404`, or `410`

## 6. Canonical and HTTPS checks

Run this review monthly and after any routing change.

### What “good” looks like

- only `https://www.thenerdishmic.com/*` is indexed
- apex and `http` variants appear only as redirects or alternate duplicates
- `Google-selected canonical` matches `User-declared canonical`

### Red flags

- Google indexes the apex domain instead of `www`
- multiple variants of the same page appear as indexed
- page 2+ blog URLs canonicalize to page 1
- random query-parameter URLs start showing up as indexed

### If Google keeps showing HTTP/apex examples

That does not always mean a current problem. It can simply reflect older crawl history.

What matters:

- current live test should show a clean redirect
- canonical destination should be correct
- those variants should trend down over time in reports

## 7. Search performance analysis

Open `Performance > Search results`.

Use these views regularly:

- Queries
- Pages
- Countries
- Devices
- Search appearance
- Date compare mode

### Weekly performance review

Check:

- total clicks
- total impressions
- average CTR
- average position
- top landing pages
- top non-branded queries

### How to analyze CTR problems

If impressions are growing but clicks are flat:

- inspect pages with low CTR and high impressions
- review title and meta description
- compare the SERP against competitor snippets
- look for irrelevant impressions caused by vague titles

### How to separate branded vs non-branded

Create query filters:

- branded: includes `thenerdishmic`, `the nerdish mic`, misspellings
- non-branded: does not contain brand terms

Why this matters:

- branded growth often reflects stronger awareness
- non-branded growth reflects actual SEO expansion

### Blog analysis workflow

Filter Pages to `/blog/` URLs and review:

- which posts are getting impressions but no clicks
- which posts are indexed but not visible
- which posts gained impressions after publication
- which posts lost impressions after technical changes

If a blog post has no impressions after a reasonable period:

- inspect the URL
- confirm indexing
- verify internal links
- verify sitemap inclusion
- check whether the topic overlaps heavily with another post

## 8. Sitemaps workflow

Use sitemap monitoring as an indexing health check, not just a one-time submission.

### What to confirm

- sitemap is fetched successfully
- canonical URLs only
- recently published blog posts appear in the sitemap
- old WordPress URLs do not appear in the sitemap

### What to do when discovered URLs outpace indexed URLs

This usually means one of three things:

- Google needs time
- content quality or duplication is limiting indexing
- technical signals are mixed

Then:

- inspect representative URLs
- compare user-declared vs Google-selected canonical
- review internal linking and uniqueness

## 9. Recurring operating cadence

### Weekly

- review `Indexing > Pages` for new spikes or drops
- inspect any new exclusion types
- check one homepage URL, one blog URL, and one recent blog post in URL Inspection
- review search performance by page and query

### Monthly

- review sitemap health
- review all host/protocol variants
- compare branded vs non-branded performance
- audit top excluded URLs in the indexing report
- review whether old WordPress-style URLs are still appearing

### After every significant deploy

- inspect homepage live URL
- inspect `/blog`
- inspect one blog post
- inspect one legacy URL
- confirm canonical, robots, structured data, and redirects behave correctly

## 10. Priority triage order

If many issues appear at once, fix in this order:

1. Wrong status codes on important URLs
2. Bad canonical signals
3. Blocked crawling on URLs Google should re-evaluate
4. Missing sitemap coverage
5. Rendering/fetch failures
6. Low-value indexing noise from legacy URLs
7. CTR improvements after technical health is stable

## 11. Recommended URLs to keep bookmarked

- Homepage: `https://www.thenerdishmic.com/`
- Blog index: `https://www.thenerdishmic.com/blog`
- Sitemap: `https://www.thenerdishmic.com/sitemap.xml`
- Robots: `https://www.thenerdishmic.com/robots.txt`

## 12. External validation tools

Use these alongside Search Console:

- Rich Results Test: https://search.google.com/test/rich-results
- URL Inspection in Search Console
- Google’s robots.txt tester alternatives or manual fetch
- Manual `curl -I` checks for redirects and status codes

## 13. Success criteria

This cleanup is working when:

- only `https://www.thenerdishmic.com/*` pages are steadily indexed
- legacy WordPress and junk URLs trend down in Search Console
- `/blog` and new articles are crawled reliably
- canonical mismatches shrink over time
- branded and non-branded impressions both trend upward
