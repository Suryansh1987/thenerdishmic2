import type { ReactNode } from "react";

export function AuthShell({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="instaflow-page">
      <div className="instaflow-shell">
        <main className="instaflow-auth-page">
          <div className="instaflow-container">
            <div className="instaflow-auth-grid">
              <div className="instaflow-auth-copy">
                <div className="instaflow-brand" style={{ color: "var(--fg)" }}>
                  <span className="instaflow-brand-mark">↗</span>
                  <span>instaflow.</span>
                </div>
                <div className="instaflow-eyebrow" style={{ marginTop: 28 }}>
                  Welcome
                </div>
                <h1 className="instaflow-display-2" style={{ marginTop: 16 }}>
                  {title}
                </h1>
                <p className="instaflow-lead" style={{ marginTop: 20 }}>
                  {body}
                </p>
              </div>
              <div className="instaflow-auth-card">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export const clerkAppearance = {
  variables: {
    colorPrimary: "#a8e840",
    colorBackground: "#141414",
    colorText: "#fafaf7",
    colorTextSecondary: "rgba(250, 250, 247, 0.62)",
    colorInputBackground: "#1e1e1e",
    colorInputText: "#fafaf7",
    colorDanger: "#f87171",
    borderRadius: "8px",
  },
  elements: {
    card: "instaflow-clerk-surface",
    rootBox: "instaflow-clerk-root",
    socialButtonsBlockButton: "instaflow-clerk-button",
    formButtonPrimary: "instaflow-clerk-button instaflow-clerk-button-primary",
    formFieldInput: "instaflow-clerk-input",
    footerActionLink: "instaflow-clerk-link",
    identityPreviewEditButton: "instaflow-clerk-link",
    formFieldLabel: "instaflow-clerk-label",
    headerTitle: "instaflow-clerk-title",
    headerSubtitle: "instaflow-clerk-subtitle",
  },
} as const;
