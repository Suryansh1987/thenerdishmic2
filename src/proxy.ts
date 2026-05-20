import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const INSTA_HOSTS = new Set(["instaflow.thenerdishmic.com", "www.instaflow.thenerdishmic.com"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  if (!host || !INSTA_HOSTS.has(host) || request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const target = request.nextUrl.clone();
  target.pathname = "/instaflow";
  return NextResponse.rewrite(target);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)"],
};
