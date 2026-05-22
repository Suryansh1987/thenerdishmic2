import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import type { ReactNode } from "react";
import { AppleIcon, LinuxIcon, WindowsIcon } from "@/components/instaflow/icons";
import { Button, Card, Tag } from "@/components/instaflow/ui";
import { db, schema } from "@/db";

export const metadata: Metadata = {
  title: "InstaFlow Downloads",
  description: "Download the latest InstaFlow desktop builds for Windows, macOS, and Linux.",
};

const platformOrder = ["windows", "macos", "linux"] as const;

const platformLabels: Record<string, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

const platformIcons: Record<string, ReactNode> = {
  windows: <WindowsIcon />,
  macos: <AppleIcon />,
  linux: <LinuxIcon />,
};

export default async function InstaFlowDownloadsPage() {
  const versions = await db
    .select()
    .from(schema.appVersions)
    .orderBy(desc(schema.appVersions.createdAt), desc(schema.appVersions.id));

  const latestByPlatform = new Map<string, (typeof versions)[number]>();

  for (const row of versions) {
    const key = row.platform.toLowerCase();

    if (!latestByPlatform.has(key)) {
      latestByPlatform.set(key, row);
    }
  }

  const orderedPlatforms = [
    ...platformOrder,
    ...Array.from(latestByPlatform.keys()).filter((key) => !platformOrder.includes(key as (typeof platformOrder)[number])),
  ];

  return (
    <main className="instaflow-page">
      <div className="instaflow-shell">
        <section className="instaflow-section">
          <div className="instaflow-container" style={{ display: "grid", gap: 32 }}>
            <div style={{ maxWidth: 760 }}>
              <div className="instaflow-eyebrow">Downloads</div>
              <h1 className="instaflow-display-2" style={{ marginTop: 16 }}>
                Pick your build
                <br />
                and install InstaFlow.
              </h1>
              <p className="instaflow-lead" style={{ marginTop: 20 }}>
                Your account is ready. Download the latest desktop release for your platform, then sign in with the same credentials inside the app.
              </p>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {orderedPlatforms.map((platform) => {
                const release = latestByPlatform.get(platform);
                const label = platformLabels[platform] ?? platform;
                const icon = platformIcons[platform] ?? null;

                return (
                  <Card key={platform}>
                    <div style={{ padding: 28, display: "grid", gap: 18 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                        <div style={{ display: "grid", gap: 10 }}>
                          <div className="instaflow-pane-title" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            {icon}
                            <span>{label}</span>
                          </div>
                          <div className="instaflow-lead" style={{ margin: 0 }}>
                            {release ? `Version ${release.version}` : "No release uploaded yet"}
                          </div>
                        </div>
                        <Tag accent={Boolean(release)}>Latest</Tag>
                      </div>

                      <p className="instaflow-step-body" style={{ margin: 0 }}>
                        {release?.releaseNotes?.trim() || "Release notes will show up here once this build is published."}
                      </p>

                      {release ? (
                        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                          <Button href={release.downloadUrl} variant="primary">
                            Download for {label}
                          </Button>
                          <span className="instaflow-eyebrow" style={{ letterSpacing: "0.06em" }}>
                            Published {new Date(release.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                        </div>
                      ) : (
                        <div className="instaflow-eyebrow" style={{ letterSpacing: "0.06em" }}>
                          Upload this build in `app_versions` to make it available here.
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button href="/instaflow" variant="ghost">
                Back to product page
              </Button>
              <Button href="/instaflow/sign-in">
                Sign in on the web
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
