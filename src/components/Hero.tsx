import Link from "next/link";
import Image from "next/image";

const STATS = [
  "2k+ videos done",
  "50 million views generated",
  "$100k+ in organic revenue",
  "30-35 video edits/month",
  "15-20 carousels/month",
  "Film just 3-5 hours/month",
];

const AVATAR_GRADIENTS = [
  {
    src: "/Gemini_Generated_Image_3lyc4s3lyc4s3lyc.png",
    alt: "Ryan Diaz",
  },
  {
    src: "/KC.png",
    alt: "Mystic Twist",
  },
  {
    src: "/sam%20pp.jpg.jpeg",
    alt: "Sam",
  },
];

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand" fill="none">
      <path
        d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Sparkle() {
  return (
    <span className="inline-flex h-12 w-12 -rotate-6 items-center justify-center rounded-2xl bg-brand shadow-[0_10px_24px_-8px_rgba(255,90,31,0.6)] sm:h-14 sm:w-14">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none">
        <path
          d="M12 2.5l1.9 5.4 5.4 1.9-5.4 1.9L12 17l-1.9-5.3-5.4-1.9 5.4-1.9L12 2.5Z"
          fill="currentColor"
        />
        <path
          d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function ThumbUp() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M7 10v10H4V10h3Zm3 10h7.5a2.5 2.5 0 0 0 2.45-2l1.4-7A2 2 0 0 0 19.4 8.5H15V5a2.5 2.5 0 0 0-5 0c0 2.5-3 4-3 5v10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThumbDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 -scale-y-100" fill="none">
      <path
        d="M7 10v10H4V10h3Zm3 10h7.5a2.5 2.5 0 0 0 2.45-2l1.4-7A2 2 0 0 0 19.4 8.5H15V5a2.5 2.5 0 0 0-5 0c0 2.5-3 4-3 5v10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
        <path
          d="M9 14l-4-4 4-4M5 10h9a5 5 0 0 1 5 5v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function TestimonialCard({
  handle,
  text,
  rotate,
  avatarSrc,
  avatarAlt,
  className = "",
}: {
  handle: string;
  text: string;
  rotate: string;
  avatarSrc: string;
  avatarAlt: string;
  className?: string;
}) {
  return (
    <div
      className={`w-[280px] rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/5 ${rotate} ${className}`}
    >
      <div className="flex items-start gap-3">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-neutral-900">{handle}</p>
          <p className="mt-0.5 text-[15px] leading-snug text-neutral-700">
            {text}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-4 text-neutral-400">
        <ThumbUp />
        <ThumbDown />
        <ReplyIcon />
        <span className="ml-auto text-sm font-medium text-neutral-500">
          Reply
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              <div className="flex -space-x-2">
                {AVATAR_GRADIENTS.map((avatar) => (
                  <Image
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-neutral-800">
                The Nerdish Mic for entrepreneurs, coaches, and B2B founders
              </span>
            </div>

            <h1 className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-5xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-[68px]">
              <span>From Hidden Expert</span>
              <Sparkle />
              <span className="block w-full">
                to <span className="text-brand">Thought Leader.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
              We transform entrepreneurs and coaches into recognized authorities
              with strategy, scripting, world-class editing, and organic growth
              systems.
            </p>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
              You record for 3-5 hours each month. We run the full content
              engine and turn your expertise into visibility, trust, and booked
              clients.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                href="#book"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 py-2 pl-6 pr-2 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Book a Call
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform group-hover:translate-x-0.5">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <p className="text-sm font-medium text-neutral-700">
                No pitch deck. Just a call.
              </p>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[500px]">
            <TestimonialCard
              handle="@mystic.twist"
              text="I closed my first high-ticket coaching client after my Instagram upgrade."
              rotate="rotate-[-4deg]"
              avatarSrc="/KC.png"
              avatarAlt="Mystic Twist"
              className="absolute right-6 top-4 lg:right-10 lg:top-10"
            />
            <TestimonialCard
              handle="@ryan.diaz"
              text="My calendar is consistently booked now. The results difference is huge."
              rotate="rotate-[3deg]"
              avatarSrc="/Gemini_Generated_Image_3lyc4s3lyc4s3lyc.png"
              avatarAlt="Ryan Diaz"
              className="absolute right-0 top-44 lg:right-2 lg:top-56"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 lg:mt-16">
          <span className="px-2 text-sm font-medium text-neutral-700">
            Your in-house content team without the overhead
          </span>
          {STATS.map((stat) => (
            <span
              key={stat}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-800 ring-1 ring-black/5"
            >
              <CheckMark />
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
