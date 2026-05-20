import type { CSSProperties } from "react";
import { AppleIcon, ArrowFlowIcon, LinuxIcon, WindowsIcon } from "./icons";
import Faq from "./Faq";
import { Button, Card, Sticker, Tag } from "./ui";

const logos = [
  "Growth Forge",
  "Leadmint",
  "Northstar Ops",
  "Market Loop",
  "Firstcall",
  "Studio Lane",
  "Outbound Club",
  "Signal Desk",
  "Sidekick CRM",
  "Operator OS",
];

const plans = [
  {
    name: "Free",
    price: "0",
    sub: "1 account - 10 messages/day",
    features: ["1 Instagram account", "10 messages per day", "Basic DM automation", "Default message templates"],
  },
  {
    name: "Pro",
    price: "3,000",
    sub: "3 accounts - 200 messages/day",
    highlight: true,
    features: ["3 Instagram accounts", "200 messages per day", "AI-personalized messages", "Excel target upload", "Priority support"],
  },
  {
    name: "Max",
    price: "6,000",
    sub: "5 accounts - 1,000 messages/day",
    features: [
      "5 Instagram accounts",
      "1,000 messages per day",
      "AI-personalized messages",
      "Excel target upload",
      "Proxy support per account",
      "Analytics dashboard",
      "Priority support",
    ],
  },
];

const messageRows = [
  ["@yogalab.india", "Saw your new teacher training batch go live. Want a DM flow that books warm leads?", "replied"],
  ["@calmspaceblr", "We built a founder-safe outreach sequence for wellness studios in Bangalore.", "sending"],
  ["@soulstretch.studio", "Noticed your evening slots fill fast. We can help turn profile visits into booked trials.", "queued"],
  ["@flowwithmira", "Your reels already do the hard part. InstaFlow handles the personalized first touch.", "replied"],
  ["@pranapulse.blr", "Can I share a 3-line outreach script that got 34% replies for local fitness offers?", "queued"],
] as const;

type CardVars = CSSProperties & {
  "--card-rotate"?: string;
  "--card-hover-rotate"?: string;
  "--card-translate-y"?: string;
};

const stepVisualRotations = [
  { "--card-rotate": "-1deg", "--card-hover-rotate": "-2deg" },
  { "--card-rotate": "1.2deg", "--card-hover-rotate": "0.2deg" },
  { "--card-rotate": "-0.8deg", "--card-hover-rotate": "-1.8deg" },
  { "--card-rotate": "1deg", "--card-hover-rotate": "0deg" },
] as CardVars[];

const steps = [
  {
    id: "01",
    title: "Write the prompt once. Keep every DM on-brand.",
    body: "Define your voice, target customer, and CTA in a compact prompt block. InstaFlow uses that as the operating system for every personalized opener instead of letting random AI fluff drift into your pipeline.",
    visual: <PromptVisual />,
  },
  {
    id: "02",
    title: "Connect the accounts you already use.",
    body: "Bring in your active Instagram profiles, keep each session separate, and see which account is ready, warming up, or waiting on a secure login. Operators get clarity without digging through browser profiles.",
    visual: <AccountsVisual />,
  },
  {
    id: "03",
    title: "Upload a sheet. Pick the template. Start the run.",
    body: "Drop in your lead list, map placeholders like first name or city, choose which accounts send, and launch from a single setup panel. It feels more like running a campaign than babysitting tabs.",
    visual: <AutomationVisual />,
  },
  {
    id: "04",
    title: "Watch replies stack up in a dashboard you will actually check.",
    body: "The reporting is simple on purpose: sends, replies, queue, trendline. You see whether the prompt is working fast enough to iterate before a weak campaign burns another week.",
    visual: <ChartVisual />,
  },
];

export default function LandingPage() {
  return (
    <div className="instaflow-page">
      <div className="instaflow-shell">
        <Nav />
        <main>
          <Hero />
          <LogosStrip />
          <HowItWorks />
          <Pricing />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="instaflow-nav-wrap">
      <div className="instaflow-container">
        <nav className="instaflow-nav" aria-label="InstaFlow">
          <a href="#top" className="instaflow-brand" aria-label="InstaFlow home">
            <span className="instaflow-brand-mark">
              <ArrowFlowIcon />
            </span>
            <span>instaflow.</span>
          </a>
          <div className="instaflow-nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#footer">Changelog</a>
          </div>
          <div className="instaflow-nav-actions">
            <a className="instaflow-signin" href="#faq">
              Sign in
            </a>
            <Button href="#pricing" variant="primary">
              Download
            </Button>
            <details className="instaflow-menu">
              <summary aria-label="Open menu">
                <span className="instaflow-btn" aria-hidden="true">
                  Menu
                </span>
              </summary>
              <div className="instaflow-menu-panel instaflow-card">
                <a href="#how-it-works">How it works</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">FAQ</a>
                <a href="#footer">Changelog</a>
              </div>
            </details>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="instaflow-hero instaflow-section">
      <div className="instaflow-container">
        <div style={{ position: "relative" }}>
          <Sticker style={{ top: "90px", right: "80px", transform: "rotate(8deg)" }}>{`\u21B3 10x reply rate`}</Sticker>
          <Sticker style={{ top: "360px", right: "240px", transform: "rotate(-5deg)", background: "var(--surface)", color: "var(--fg)" }}>{`\u26A1 live in 5 min`}</Sticker>
          <div className="instaflow-hero-grid">
            <div>
              <div className="instaflow-live-row">
                <span className="instaflow-live-dot" aria-hidden="true" />
                <span className="instaflow-eyebrow">v2.4 - Out now for Windows - macOS - Linux</span>
              </div>
              <h1 className="instaflow-display">
                Cold DMs
                <br />
                that actually
                <br />
                <span className="instaflow-underline">get replied to.</span>
              </h1>
              <p className="instaflow-lead" style={{ marginTop: 28 }}>
                InstaFlow helps founders and operators run personalized Instagram outreach with prompts, account control, smart queues, and a dashboard that shows exactly what is converting.
              </p>
              <div className="instaflow-downloads">
                <Button href="#pricing" variant="primary" size="lg" aria-label="Download for Windows">
                  <WindowsIcon />
                  Windows
                </Button>
                <Button href="#pricing" size="lg" aria-label="Download for macOS">
                  <AppleIcon />
                  macOS
                </Button>
                <Button href="#pricing" size="lg" aria-label="Download for Linux">
                  <LinuxIcon />
                  Linux
                </Button>
              </div>
              <div className="instaflow-download-note">Free forever - 47.2 MB - v2.4.1</div>
            </div>
          </div>
        </div>
        <div className="instaflow-product-grid">
          <AppPreview />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <Card className="instaflow-app-shell" style={{ "--card-rotate": "-0.6deg", "--card-hover-rotate": "-1.6deg" } as CardVars}>
      <div className="instaflow-app-topbar">
        <div className="instaflow-traffic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="instaflow-app-title">instaflow - automation/run #218 - 2 accounts active</div>
      </div>
      <div className="instaflow-app-body">
        <aside className="instaflow-app-sidebar">
          <div className="instaflow-pro-badge">TNM - Pro plan</div>
          <div className="instaflow-side-list">
            {["Dashboard", "Accounts", "Automation", "History", "Plans"].map((item) => (
              <div key={item} className={`instaflow-side-item ${item === "Automation" ? "instaflow-side-item-active" : ""}`}>
                <span>{item}</span>
                <span>{item === "Automation" ? "ON" : "->"}</span>
              </div>
            ))}
          </div>
        </aside>
        <div className="instaflow-main-pane">
          <div className="instaflow-pane-header">
            <div>
              <div className="instaflow-eyebrow">Automation</div>
              <div className="instaflow-pane-title">Active run: Yoga studio leads - Bangalore</div>
            </div>
            <span className="instaflow-pill instaflow-pill-accent">
              <span className="instaflow-live-dot" aria-hidden="true" />
              Running
            </span>
          </div>
          <div className="instaflow-message-list">
            {messageRows.map(([handle, preview, status]) => (
              <div key={handle} className="instaflow-message-row">
                <div className="instaflow-message-handle">{handle}</div>
                <div className="instaflow-message-preview">{preview}</div>
                <div className={`instaflow-status instaflow-status-${status}`}>
                  <span className="instaflow-status-dot" aria-hidden="true" />
                  {status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="instaflow-app-footer">
        <div className="instaflow-app-stat">
          <span className="instaflow-app-stat-label">Reply rate</span>
          <div className="instaflow-app-stat-value instaflow-app-stat-value-accent">34%</div>
        </div>
        <div className="instaflow-app-stat">
          <span className="instaflow-app-stat-label">Sent today</span>
          <div className="instaflow-app-stat-value">142</div>
        </div>
        <div className="instaflow-app-stat">
          <span className="instaflow-app-stat-label">Replies</span>
          <div className="instaflow-app-stat-value">48</div>
        </div>
        <div className="instaflow-app-stat">
          <span className="instaflow-app-stat-label">Queued</span>
          <div className="instaflow-app-stat-value">258</div>
        </div>
      </div>
    </Card>
  );
}

function HeroStats() {
  return (
    <div className="instaflow-side-stats">
      <Card className="instaflow-highlight-card" style={{ "--card-rotate": "1.5deg", "--card-hover-rotate": "0.5deg" } as CardVars}>
        <div style={{ padding: 28 }}>
          <div className="instaflow-eyebrow">Avg. reply rate</div>
          <div className="instaflow-price-line" style={{ marginTop: 16 }}>
            <div className="instaflow-price-value">34%</div>
            <div className="instaflow-price-unit">reply rate</div>
          </div>
          <p className="instaflow-lead" style={{ maxWidth: 420, marginTop: 14 }}>
            Personalized first-touch copy plus account pacing turns cold Instagram outreach into something people answer.
          </p>
        </div>
      </Card>
      <Card className="instaflow-stats-thread-card">
        <div style={{ padding: 24 }} className="instaflow-split-card">
          <div className="instaflow-eyebrow">Sample DM thread</div>
          <div className="instaflow-thread">
            <div className="instaflow-bubble" style={{ background: "var(--surface-2)" }}>
              Hey Ananya, saw your studio rolling out sunrise classes. Want a script that fills trial slots with warm DMs?
            </div>
            <div className="instaflow-bubble instaflow-bubble-accent">Yes, send it. We have room in the weekdays batch.</div>
          </div>
        </div>
      </Card>
      <div className="instaflow-small-stats">
        <Card className="instaflow-small-stat-card">
          <div style={{ padding: 22 }}>
            <div className="instaflow-eyebrow">Live now</div>
            <div className="instaflow-pane-title" style={{ marginTop: 10 }}>
              2,418 active users now
            </div>
          </div>
        </Card>
        <Card className="instaflow-small-stat-card">
          <div style={{ padding: 22 }}>
            <div className="instaflow-eyebrow">This month</div>
            <div className="instaflow-pane-title" style={{ marginTop: 10 }}>
              1.4M DMs sent this month
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function LogosStrip() {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="instaflow-logos">
      <div className="instaflow-container">
        <div className="instaflow-eyebrow">Trusted by founders & operators at</div>
        <div className="instaflow-logos-marquee">
          <div className="instaflow-logos-track">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} className="instaflow-logo-word">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="instaflow-section">
      <div className="instaflow-container">
        <div className="instaflow-eyebrow">How it works - 4 steps</div>
        <h2 className="instaflow-display-2" style={{ marginTop: 16 }}>
          From install to first reply
          <br />
          in under 5 minutes.
        </h2>
        <div className="instaflow-how-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="instaflow-step-row">
              <Card className="instaflow-step-copy" style={{ "--card-rotate": index % 2 === 0 ? "0.4deg" : "-0.4deg", "--card-hover-rotate": index % 2 === 0 ? "-0.6deg" : "-1.4deg" } as CardVars}>
                <div className="instaflow-step-number-row">
                  <div className="instaflow-step-number">{step.id}</div>
                  <div className="instaflow-step-rule" />
                </div>
                <div className="instaflow-step-title">{step.title}</div>
                <p className="instaflow-step-body">{step.body}</p>
              </Card>
              <Card className="instaflow-step-visual" style={stepVisualRotations[index]}>
                {step.visual}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromptVisual() {
  return (
    <div className="instaflow-code-block">
      <div className="instaflow-code-line">
        <strong># Voice</strong>
        <div>Calm, direct, founder-led. No hype words. No fake urgency.</div>
      </div>
      <div className="instaflow-code-line">
        <strong># Goal</strong>
        <div>Start a conversation about free trial classes with wellness brands in Bangalore.</div>
      </div>
      <div className="instaflow-code-line">
        <strong># Guardrails</strong>
        <div>Keep each opener under 250 chars. Mention one real context clue from the profile.</div>
      </div>
      <div className="instaflow-visual-tags">
        <Tag accent>founder tone</Tag>
        <Tag>local leads</Tag>
        <Tag>reply-first CTA</Tag>
      </div>
    </div>
  );
}

function AccountsVisual() {
  return (
    <div className="instaflow-list-card">
      <div className="instaflow-account-card">
        <div className="instaflow-avatar" />
        <div>
          <div className="instaflow-account-label">@instaflowhq</div>
          <div className="instaflow-account-status">ready to send</div>
        </div>
        <Tag accent>healthy</Tag>
      </div>
      <div className="instaflow-account-card">
        <div className="instaflow-avatar" />
        <div>
          <div className="instaflow-account-label">@tnm.outreach</div>
          <div className="instaflow-account-status instaflow-account-status-amber">logging in via secure session...</div>
        </div>
        <Tag>pending</Tag>
      </div>
      <div className="instaflow-account-card">
        <div className="instaflow-avatar" />
        <div>
          <div className="instaflow-account-label">@studioleads.ai</div>
          <div className="instaflow-account-status">warm-up complete</div>
        </div>
        <Tag accent>armed</Tag>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="instaflow-input-block">
      <div className="instaflow-input-card">
        <div className="instaflow-eyebrow">1 - Upload list</div>
        <div className="instaflow-step-body" style={{ marginTop: 8 }}>
          <strong>leads_bangalore_q3.xlsx</strong>
        </div>
      </div>
      <div className="instaflow-input-card">
        <div className="instaflow-eyebrow">2 - Message template</div>
        <div className="instaflow-step-body" style={{ marginTop: 8 }}>
          Hey {`{{first_name}}`}, saw {`{{brand_name}}`} serving {`{{city}}`}. Want the DM flow we use to pull in qualified replies without sounding robotic?
        </div>
      </div>
      <div className="instaflow-input-card">
        <div className="instaflow-eyebrow">3 - Send from</div>
        <div className="instaflow-visual-tags" style={{ marginTop: 12 }}>
          <Tag accent>@instaflowhq</Tag>
          <Tag>@tnm.outreach</Tag>
          <Tag>@studioleads.ai</Tag>
        </div>
      </div>
      <Button href="#pricing" variant="primary">
        Start automation -&gt;
      </Button>
    </div>
  );
}

function ChartVisual() {
  const bars = [
    { label: "Mon", sent: 40, replied: 10 },
    { label: "Tue", sent: 55, replied: 14 },
    { label: "Wed", sent: 70, replied: 28 },
    { label: "Thu", sent: 62, replied: 22 },
    { label: "Fri", sent: 78, replied: 31 },
    { label: "Sat", sent: 68, replied: 24 },
    { label: "Sun", sent: 52, replied: 18 },
  ];

  return (
    <div className="instaflow-chart">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div className="instaflow-eyebrow">Replies this week</div>
          <div className="instaflow-pane-title" style={{ marginTop: 8 }}>
            379
          </div>
        </div>
        <Tag accent>+22% wow</Tag>
      </div>
      <div className="instaflow-bar-grid">
        {bars.map((bar) => (
          <div key={bar.label} className="instaflow-bar-col">
            <div className="instaflow-bar">
              <div style={{ height: `${bar.sent}%` }}>
                <div className="instaflow-bar-fill" style={{ height: `${(bar.replied / bar.sent) * 100}%` }} />
              </div>
            </div>
            <span className="instaflow-eyebrow" style={{ letterSpacing: "0.08em" }}>
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="instaflow-section instaflow-pricing">
      <div className="instaflow-container">
        <div className="instaflow-pricing-header">
          <div>
            <div className="instaflow-eyebrow">Pricing</div>
            <h2 className="instaflow-display-2" style={{ marginTop: 16 }}>
              Pay for accounts & volume.
              <br />
              Not seats. Not "contact us."
            </h2>
          </div>
          <div className="instaflow-toggle" aria-label="Billing frequency">
            <span className="is-active">Monthly</span>
            <span>Yearly</span>
          </div>
        </div>
        <div className="instaflow-pricing-grid">
          {plans.map((plan, index) => {
            const style = plan.highlight
              ? ({ "--card-translate-y": "-12px", "--card-rotate": "-0.6deg", "--card-hover-rotate": "-1.6deg" } as CardVars)
              : ({ "--card-rotate": index === 0 ? "0.3deg" : "-0.3deg", "--card-hover-rotate": index === 0 ? "-0.7deg" : "-1.3deg" } as CardVars);

            return (
              <Card key={plan.name} className={plan.highlight ? "instaflow-price-card instaflow-price-card-highlight" : "instaflow-price-card"} style={style}>
                {plan.highlight ? <Sticker className="instaflow-sticker-plan">{`\u2605 MOST POPULAR`}</Sticker> : null}
                <div className="instaflow-price-name">{plan.name}</div>
                <div className="instaflow-price-line">
                  <div className="instaflow-price-value">{plan.price}</div>
                  <div className="instaflow-price-unit">/month</div>
                </div>
                <div className="instaflow-step-body" style={{ marginTop: 0 }}>
                  {plan.sub}
                </div>
                <div className="instaflow-feature-list">
                  {plan.features.map((feature) => (
                    <div key={feature} className="instaflow-feature">
                      <span className="instaflow-feature-check">OK</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button href="#footer" variant={plan.highlight ? "default" : "primary"}>
                  {plan.name === "Free" ? "Start free" : `Get ${plan.name}`}
                </Button>
              </Card>
            );
          })}
        </div>
        <div className="instaflow-trust-row">
          <span>OK Cancel anytime</span>
          <span>OK 7-day refund on Pro & Max</span>
          <span>OK Stripe - UPI - Razorpay</span>
          <span>OK GST invoice included</span>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="instaflow-section">
      <div className="instaflow-container instaflow-faq-layout">
        <div className="instaflow-faq-copy">
          <div className="instaflow-eyebrow">FAQ</div>
          <h2 className="instaflow-display-2" style={{ marginTop: 16 }}>
            Questions
            <br />
            we get
            <br />
            a lot.
          </h2>
          <p className="instaflow-lead" style={{ marginTop: 20 }}>
            Launch copy is strongest when the hard questions are answered clearly. These are the objections most founders will have before they trust an outreach tool with their accounts.
          </p>
          <div style={{ marginTop: 28 }}>
            <Button href="mailto:hello@thenerdishmic.com?subject=InstaFlow%20support" variant="primary">
              Email support -&gt;
            </Button>
          </div>
        </div>
        <Faq />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="instaflow-footer">
      <div className="instaflow-container">
        <div className="instaflow-footer-grid">
          <div>
            <div className="instaflow-brand" style={{ color: "var(--ink)" }}>
              <span className="instaflow-brand-mark">
                <ArrowFlowIcon />
              </span>
              <span>instaflow.</span>
            </div>
            <p style={{ marginTop: 16, maxWidth: 420, fontSize: 18, lineHeight: 1.55 }}>
              Outreach software for founders who want the speed of automation without the sloppy feel of generic DM blasts.
            </p>
            <div className="instaflow-downloads" style={{ marginTop: 24 }}>
              <Button href="#pricing" variant="default" aria-label="Download for Windows">
                <WindowsIcon />
                Windows
              </Button>
              <Button href="#pricing" variant="default" aria-label="Download for macOS">
                <AppleIcon />
                macOS
              </Button>
              <Button href="#pricing" variant="default" aria-label="Download for Linux">
                <LinuxIcon />
                Linux
              </Button>
            </div>
          </div>
          <FooterColumn
            title="Product"
            links={[
              ["Features", "#how-it-works"],
              ["Pricing", "#pricing"],
              ["Changelog", "#footer"],
              ["Downloads", "#pricing"],
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              ["The Nerdish Mic", "/"],
              ["Support", "mailto:hello@thenerdishmic.com"],
              ["Twitter", "https://x.com"],
              ["GitHub", "https://github.com"],
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              ["Privacy", "#faq"],
              ["Terms", "#faq"],
              ["Refunds", "#faq"],
              ["Compliance", "#faq"],
            ]}
          />
        </div>
        <div
          className="instaflow-footer-wordmark"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(120px, 18vw, 240px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "3px var(--ink)",
            marginTop: 24,
            userSelect: "none",
          }}
        >
          instaflow.
        </div>
        <div className="instaflow-footer-bottom">
          <span>(c) 2026 InstaFlow by The Nerdish Mic</span>
          <span>v2.4.1</span>
          <span>all systems normal</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<[label: string, href: string]> }) {
  return (
    <div className="instaflow-footer-links">
      <div className="instaflow-footer-title">{title}</div>
      {links.map(([label, href]) => (
        <a key={label} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}
