import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} social share image`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, #ffd5b4 0%, #f6f1e8 34%, #f2e3cf 68%, #f6c28b 100%)",
          color: "#1b130d",
          padding: "68px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            border: "2px solid rgba(27, 19, 13, 0.12)",
            background: "rgba(255, 255, 255, 0.66)",
            boxShadow: "0 24px 80px rgba(113, 63, 18, 0.18)",
            padding: "56px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#9a3412",
              }}
            >
              Content Marketing Agency
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 800,
                maxWidth: "820px",
              }}
            >
              {SITE_NAME}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                lineHeight: 1.3,
                maxWidth: "860px",
                color: "rgba(27, 19, 13, 0.82)",
              }}
            >
              {SITE_TAGLINE}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "rgba(27, 19, 13, 0.68)",
                maxWidth: "780px",
              }}
            >
              Websites, automation, content systems, and growth execution for
              founder-led brands.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "176px",
                padding: "18px 24px",
                borderRadius: "999px",
                background: "#1b130d",
                color: "#fff8ef",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              thenerdishmic
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
