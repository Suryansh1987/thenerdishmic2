import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";

import { getAllPosts } from "@/lib/blog";

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

const data = {
  instaLink: "https://www.instagram.com/moreonprithvi/",
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
    careers: "/careers",
  },
  contact: {
    email: "thenerdishmic098@gmail.com",
    phone: "+91 9335498902",
    address: "Remote-first · India & US",
  },
  company: {
    name: "thenerdishmic",
    description:
      "Full-stack marketing agency. We build the website, run the automations, ship the content and scale the brand, so founders can focus on shipping and selling.",
  },
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: data.instaLink }
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

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

function BrandLogo() {
  return (
    <Image
src="/tnm-logo.png"
      alt="The Nerdish Mic"
      width={128}
      height={128}
      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
    />
  );
}

export default async function Footer4Col() {
  const blogLinks = [
    ...(await getAllPosts()).slice(0, 3).map(({ meta }) => ({
      text: meta.title,
      href: `/blog/${meta.slug}`,
    })),
    { text: "All articles", href: "/blog" },
  ];

  return (
    <footer className="mt-16 w-full place-self-end rounded-t-3xl bg-secondary">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center gap-0 text-primary sm:justify-start">
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
              <p className="text-lg font-medium">From the Blog</p>
              <ul className="mt-8 space-y-4 text-sm">
                {blogLinks.map(({ text, href }) => (
                  <li key={href}>
                    <Link
                      className="text-secondary-foreground/70 transition hover:text-foreground"
                      href={href}
                    >
                      {text}
                    </Link>
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
