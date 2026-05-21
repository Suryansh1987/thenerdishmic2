import "server-only";

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import { cache } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  author: string;
};

export type Post = {
  meta: PostMeta;
  Content: ComponentType;
};

export type PostListItem = {
  meta: PostMeta;
};

type PostMetaRecord = PostMeta & {
  sourceFile: string;
};

export const POSTS_PER_PAGE = 10;

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

const postLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  "affiliate-and-referral-programs-us": () => import("@/content/blog/affiliate-and-referral-programs-us"),
  "ai-automation-payback": () => import("@/content/blog/ai-automation-payback"),
  "ai-content-workflows-without-losing-voice": () => import("@/content/blog/ai-content-workflows-without-losing-voice"),
  "ai-lead-scoring-without-burning-funnel": () => import("@/content/blog/ai-lead-scoring-without-burning-funnel"),
  "amazon-and-walmart-listing-optimization": () => import("@/content/blog/amazon-and-walmart-listing-optimization"),
  "brand-archetype-tone-of-voice-founder": () => import("@/content/blog/brand-archetype-tone-of-voice-founder"),
  "brand-positioning-for-founder-led-companies": () => import("@/content/blog/brand-positioning-for-founder-led-companies"),
  "cac-to-ltv-math-founders-ignore": () => import("@/content/blog/cac-to-ltv-math-founders-ignore"),
  "captions-hooks-and-the-first-three-seconds": () => import("@/content/blog/captions-hooks-and-the-first-three-seconds"),
  "cart-abandonment-recovery-that-works": () => import("@/content/blog/cart-abandonment-recovery-that-works"),
  "chatbots-without-killing-conversion": () => import("@/content/blog/chatbots-without-killing-conversion"),
  "cogs-margin-and-marketing-spend-d2c": () => import("@/content/blog/cogs-margin-and-marketing-spend-d2c"),
  "community-led-growth-for-founders": () => import("@/content/blog/community-led-growth-for-founders"),
  "content-pillars-that-survive-a-quarter": () => import("@/content/blog/content-pillars-that-survive-a-quarter"),
  "content-turnaround": () => import("@/content/blog/content-turnaround"),
  "cookieless-tracking-india-2026": () => import("@/content/blog/cookieless-tracking-india-2026"),
  "crm-automation-build-vs-buy": () => import("@/content/blog/crm-automation-build-vs-buy"),
  "dashboards-founders-actually-read": () => import("@/content/blog/dashboards-founders-actually-read"),
  "digital-marketing-for-cpg-us": () => import("@/content/blog/digital-marketing-for-cpg-us"),
  "digital-marketing-for-d2c-beauty-us": () => import("@/content/blog/digital-marketing-for-d2c-beauty-us"),
  "digital-marketing-for-doctors-clinics-us": () => import("@/content/blog/digital-marketing-for-doctors-clinics-us"),
  "digital-marketing-for-edtech-us": () => import("@/content/blog/digital-marketing-for-edtech-us"),
  "digital-marketing-for-fintech-us": () => import("@/content/blog/digital-marketing-for-fintech-us"),
  "digital-marketing-for-jewelry-brands-us": () => import("@/content/blog/digital-marketing-for-jewelry-brands-us"),
  "digital-marketing-for-real-estate-us": () => import("@/content/blog/digital-marketing-for-real-estate-us"),
  "digital-marketing-for-restaurants-cafes-us": () => import("@/content/blog/digital-marketing-for-restaurants-cafes-us"),
  "digital-marketing-for-saas-founders-us": () => import("@/content/blog/digital-marketing-for-saas-founders-us"),
  "digital-marketing-for-travel-us": () => import("@/content/blog/digital-marketing-for-travel-us"),
  "digital-pr-link-building-us": () => import("@/content/blog/digital-pr-link-building-us"),
  "drip-campaign-anatomy-that-converts": () => import("@/content/blog/drip-campaign-anatomy-that-converts"),
  "dynamic-product-ads-meta-google": () => import("@/content/blog/dynamic-product-ads-meta-google"),
  "email-automation-founder-led-brands": () => import("@/content/blog/email-automation-founder-led-brands"),
  "founder-led-video-without-losing-the-day": () => import("@/content/blog/founder-led-video-without-losing-the-day"),
  "ga4-setup-for-founder-led-brands": () => import("@/content/blog/ga4-setup-for-founder-led-brands"),
  "geo-ai-overview-optimization-b2b": () => import("@/content/blog/geo-ai-overview-optimization-b2b"),
  "google-ads-search-vs-pmax-services": () => import("@/content/blog/google-ads-search-vs-pmax-services"),
  "gtm-setup-for-non-developers": () => import("@/content/blog/gtm-setup-for-non-developers"),
  "influencer-contract-and-brief-template-thinking": () => import("@/content/blog/influencer-contract-and-brief-template-thinking"),
  "influencer-marketing-us-that-converts": () => import("@/content/blog/influencer-marketing-us-that-converts"),
  "instagram-stories-vs-reels-vs-posts": () => import("@/content/blog/instagram-stories-vs-reels-vs-posts"),
  "instagram-strategy-founder-brands-2026": () => import("@/content/blog/instagram-strategy-founder-brands-2026"),
  "linkedin-ads-for-founder-led-b2b": () => import("@/content/blog/linkedin-ads-for-founder-led-b2b"),
  "linkedin-content-formats-that-drive-leads": () => import("@/content/blog/linkedin-content-formats-that-drive-leads"),
  "linkedin-personal-brand-for-founders": () => import("@/content/blog/linkedin-personal-brand-for-founders"),
  "local-seo-service-businesses-india": () => import("@/content/blog/local-seo-service-businesses-india"),
  "long-form-youtube-for-b2b-services": () => import("@/content/blog/long-form-youtube-for-b2b-services"),
  "loyalty-and-retention-d2c-us": () => import("@/content/blog/loyalty-and-retention-d2c-us"),
  "marketing-attribution-models-explained": () => import("@/content/blog/marketing-attribution-models-explained"),
  "marketing-automation-tools-us-smb": () => import("@/content/blog/marketing-automation-tools-us-smb"),
  "marketplace-vs-d2c-store-us": () => import("@/content/blog/marketplace-vs-d2c-store-us"),
  "meta-ads-scaling-without-losing-cac": () => import("@/content/blog/meta-ads-scaling-without-losing-cac"),
  "meta-conversions-api-india-setup": () => import("@/content/blog/meta-conversions-api-india-setup"),
  "meta-shop-and-instagram-checkout-us": () => import("@/content/blog/meta-shop-and-instagram-checkout-us"),
  "mmm-marketing-mix-modeling-for-smbs": () => import("@/content/blog/mmm-marketing-mix-modeling-for-smbs"),
  "nano-vs-micro-vs-macro-influencers-us": () => import("@/content/blog/nano-vs-micro-vs-macro-influencers-us"),
  "online-reputation-management-us-smb": () => import("@/content/blog/online-reputation-management-us-smb"),
  "pinterest-and-niche-platforms-for-d2c": () => import("@/content/blog/pinterest-and-niche-platforms-for-d2c"),
  "podcast-to-reels-repurposing-playbook": () => import("@/content/blog/podcast-to-reels-repurposing-playbook"),
  "product-page-conversion-rate-fixes": () => import("@/content/blog/product-page-conversion-rate-fixes"),
  "programmatic-ads-beyond-dv360-for-smbs": () => import("@/content/blog/programmatic-ads-beyond-dv360-for-smbs"),
  "reels-strategy-founder-led-brands-india": () => import("@/content/blog/reels-strategy-founder-led-brands-india"),
  "retargeting-funnels-that-dont-annoy": () => import("@/content/blog/retargeting-funnels-that-dont-annoy"),
  "schema-markup-for-founder-brands": () => import("@/content/blog/schema-markup-for-founder-brands"),
  "seo-for-founder-led-brands-2026": () => import("@/content/blog/seo-for-founder-led-brands-2026"),
  "server-side-tracking-without-pain": () => import("@/content/blog/server-side-tracking-without-pain"),
  "shopify-vs-woocommerce-vs-headless-us": () => import("@/content/blog/shopify-vs-woocommerce-vs-headless-us"),
  "sms-automation-b2b-followup": () => import("@/content/blog/sms-automation-b2b-followup"),
  "social-listening-for-small-brands": () => import("@/content/blog/social-listening-for-small-brands"),
  "social-media-calendar-that-survives-launches": () => import("@/content/blog/social-media-calendar-that-survives-launches"),
  "social-media-comments-and-community-management": () => import("@/content/blog/social-media-comments-and-community-management"),
  "subscription-models-for-us-d2c": () => import("@/content/blog/subscription-models-for-us-d2c"),
  "tracking-offline-conversions-services": () => import("@/content/blog/tracking-offline-conversions-services"),
  "twitter-x-strategy-for-b2b-founders": () => import("@/content/blog/twitter-x-strategy-for-b2b-founders"),
  "ugc-creators-as-paid-ads-engine": () => import("@/content/blog/ugc-creators-as-paid-ads-engine"),
  "utm-tagging-system-that-scales": () => import("@/content/blog/utm-tagging-system-that-scales"),
  "vertical-video-formats-that-book-calls": () => import("@/content/blog/vertical-video-formats-that-book-calls"),
  "video-seo-ranking-on-youtube-and-google": () => import("@/content/blog/video-seo-ranking-on-youtube-and-google"),
  "vox-pop-and-street-interview-formats": () => import("@/content/blog/vox-pop-and-street-interview-formats"),
  "website-crm-loop": () => import("@/content/blog/website-crm-loop"),
  "whatsapp-status-and-broadcast-marketing-india": () => import("@/content/blog/whatsapp-status-and-broadcast-marketing-india"),
  "workflow-automation-content-teams": () => import("@/content/blog/workflow-automation-content-teams"),
  "youtube-shorts-vs-reels-vs-linkedin-video": () => import("@/content/blog/youtube-shorts-vs-reels-vs-linkedin-video"),
  "zapier-vs-make-vs-n8n-solopreneurs": () => import("@/content/blog/zapier-vs-make-vs-n8n-solopreneurs"),
};

function readPostFiles(): string[] {
  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .sort();
}

function extractStringValue(source: string, key: keyof PostMeta): string {
  const match = source.match(
    new RegExp(`${key}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "s"),
  );

  if (!match) {
    throw new Error(`Missing "${key}" in blog meta.`);
  }

  return match[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
}

function extractTags(source: string): string[] {
  const match = source.match(/tags\s*:\s*\[([\s\S]*?)\]/);

  if (!match) {
    throw new Error('Missing "tags" in blog meta.');
  }

  return Array.from(match[1].matchAll(/"((?:[^"\\]|\\.)*)"/g), ([, value]) =>
    value.replace(/\\"/g, "\"").replace(/\\\\/g, "\\"),
  );
}

function extractMetaBlock(source: string): string {
  const match = source.match(
    /export const meta(?:\s*:\s*PostMeta)?\s*=\s*{([\s\S]*?)};/,
  );

  if (!match) {
    throw new Error("Missing exported meta block.");
  }

  return match[1];
}

function toPublicMeta(meta: PostMetaRecord): PostMeta {
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    readingTime: meta.readingTime,
    tags: meta.tags,
    author: meta.author,
  };
}

const getAllPostMeta = cache(async (): Promise<PostMetaRecord[]> => {
  const posts = readPostFiles().map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const source = readFileSync(filePath, "utf8");
    const metaSource = extractMetaBlock(source);

    return {
      sourceFile: file.replace(/\.tsx$/, ""),
      slug: extractStringValue(metaSource, "slug"),
      title: extractStringValue(metaSource, "title"),
      description: extractStringValue(metaSource, "description"),
      date: extractStringValue(metaSource, "date"),
      readingTime: extractStringValue(metaSource, "readingTime"),
      tags: extractTags(metaSource),
      author: extractStringValue(metaSource, "author"),
    } satisfies PostMetaRecord;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
});

export async function getAllPosts(): Promise<PostListItem[]> {
  return (await getAllPostMeta()).map((meta) => ({ meta: toPublicMeta(meta) }));
}

export const getPostBySlug = cache(async (slug: string): Promise<Post | undefined> => {
  const meta = (await getAllPostMeta()).find((entry) => entry.slug === slug);
  const load = meta ? postLoaders[meta.sourceFile] : undefined;

  if (!meta || !load) {
    return undefined;
  }

  const postModule = await load();

  return {
    meta: toPublicMeta(meta),
    Content: postModule.default,
  };
});

export type Page<T> = {
  items: T[];
  page: number;
  totalPages: number;
  totalItems: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export async function getPaginatedPosts(
  page: number,
  perPage: number = POSTS_PER_PAGE,
): Promise<Page<PostListItem>> {
  const posts = await getAllPosts();
  const totalItems = posts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const current = Math.min(Math.max(1, Math.trunc(page) || 1), totalPages);
  const start = (current - 1) * perPage;
  const items = posts.slice(start, start + perPage);

  return {
    items,
    page: current,
    totalPages,
    totalItems,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
