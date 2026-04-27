import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V20.5h-4v-4.85c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57v4.93h-4v-11Z" />
    </svg>
  );
}

function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31.4 31.4 0 0 0 .5 12 31.4 31.4 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const data = {
  instaLink: "https://instagram.com/thenerdishmic",
  twitterLink: "https://twitter.com/thenerdishmic",
  youtubeLink: "https://youtube.com/@thenerdishmic",
  linkedinLink: "https://linkedin.com/company/thenerdishmic",
  services: {
    websites: "#services",
    branding: "#services",
    content: "#services",
    automation: "#services",
  },
  about: {
    process: "#services",
    team: "#team",
    works: "#works",
    careers: "#careers",
  },
  help: {
    faqs: "#faq",
    support: "#support",
    livechat: "#contact",
  },
  contact: {
    email: "hello@thenerdishmic.com",
    phone: "+91 86373 73116",
    address: "Remote-first · India & US",
  },
  company: {
    name: "thenerdishmic",
    description:
      "Full-stack marketing agency. We build the website, run the automations, ship the content and scale the brand — so founders can focus on shipping and selling.",
  },
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Youtube, label: "YouTube", href: data.youtubeLink },
  { icon: Linkedin, label: "LinkedIn", href: data.linkedinLink },
];

const aboutLinks = [
  { text: "Our Process", href: data.about.process },
  { text: "Recent Works", href: data.about.works },
  { text: "Meet the Team", href: data.about.team },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Websites & Funnels", href: data.services.websites },
  { text: "Branding & Design", href: data.services.branding },
  { text: "Content & Video", href: data.services.content },
  { text: "AI Automation", href: data.services.automation },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Live Chat", href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

function BrandLogo() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_8px_20px_-6px_rgba(255,90,31,0.55)]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 3.5c-7.2.5-12 4.5-13.5 11L3 18l3.5-4c6.5-1.5 10.5-6.3 11-13.5l3-1Z"
          fill="currentColor"
        />
        <path
          d="M3 21l5.5-5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-3xl bg-secondary">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 text-primary sm:justify-start">
              <BrandLogo />
              <span className="text-2xl font-semibold text-foreground">
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-foreground/60 sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary transition hover:text-primary/80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition hover:text-foreground"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition hover:text-foreground"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-secondary-foreground/70 transition hover:text-foreground"
                      }
                    >
                      <span className="text-secondary-foreground/70 transition group-hover:text-foreground">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="size-5 shrink-0 text-primary shadow-sm" />
                      {isAddress ? (
                        <address className="-mt-0.5 flex-1 not-italic text-secondary-foreground/70 transition">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1 text-secondary-foreground/70 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-secondary-foreground/70">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-4 text-sm text-secondary-foreground/70 transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
