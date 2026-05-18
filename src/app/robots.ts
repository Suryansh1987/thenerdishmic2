import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/tag/",
          "/author/",
          "/feed/",
          "/comments/",
          "/*?replytocom=",
          "/comment.php",
          "/xmlrpc.php",
          "/wp-login.php",
          "/search/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
