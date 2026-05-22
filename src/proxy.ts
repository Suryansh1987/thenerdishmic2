import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const INSTA_HOSTS = new Set(["instaflow.thenerdishmic.com", "www.instaflow.thenerdishmic.com"]);
const GONE_PATTERNS = [
  /^\/wp-admin(?:\/|$)/,
  /^\/wp-content(?:\/|$)/,
  /^\/wp-includes(?:\/|$)/,
  /^\/wp-login\.php$/,
  /^\/xmlrpc\.php$/,
  /^\/comment\.php$/,
  /^\/content\.php$/,
  /^\/comments(?:\/|$)/,
  /^\/feed(?:\/|$)/,
  /^\/author(?:\/|$)/,
  /^\/tag(?:\/|$)/,
  /^\/search(?:\/|$)/,
  /^\/\d{6,}$/,
];

export default clerkMiddleware(async (_auth, request: NextRequest) => {
  const host = request.headers.get("host")?.toLowerCase();
  const pathname = request.nextUrl.pathname;

  if (GONE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  if (!host || !INSTA_HOSTS.has(host) || pathname !== "/") {
    return NextResponse.next();
  }

  const target = request.nextUrl.clone();
  target.pathname = "/instaflow";
  return NextResponse.rewrite(target);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};
