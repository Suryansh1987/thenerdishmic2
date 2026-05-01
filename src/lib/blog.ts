import type { ComponentType } from "react";

import * as contentTurnaround from "@/content/blog/content-turnaround";
import * as aiAutomationPayback from "@/content/blog/ai-automation-payback";
import * as websiteCrmLoop from "@/content/blog/website-crm-loop";

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

const modules: Array<{ meta: PostMeta; default: ComponentType }> = [
  contentTurnaround,
  aiAutomationPayback,
  websiteCrmLoop,
];

const posts: Post[] = modules
  .map((m) => ({ meta: m.meta, Content: m.default }))
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
