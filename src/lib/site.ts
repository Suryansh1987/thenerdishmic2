export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.thenerdishmic.com";

export const SITE_NAME = "The Nerdish Mic";
export const SITE_TAGLINE =
  "Growth, automation & websites in one studio";
export const SITE_DESCRIPTION =
  "Full-stack content marketing agency for founder-led brands. We build the website, run the automation, ship the content, and scale the brand.";
export const SITE_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const SITE_LOGO = `${SITE_URL}/tnm-logo.png`;
