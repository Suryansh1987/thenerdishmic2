import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    id: 1,
    name: "Pallavi Marshall",
    role: "Founder",
    company: "Serenitree Yoga",
    content:
      "This is perfect! Thanks for taking all my feedback. The edits are spot on. I really like how this reel has come together. It looks fantastic!",
    rating: 5,
    avatar: "",
  },
  {
    id: 2,
    name: "Pallavi Marshall",
    role: "Founder",
    company: "Serenitree Yoga",
    content:
      "Wow these are some great ideas. Can you help me set up my booking page too? It's lovely... thank you for all your efforts. I really like how this reel has come together. It looks fantastic! Thanks so much for doing this!",
    rating: 5,
    avatar: "",
  },
  {
    id: 3,
    name: "Ben Ewers",
    role: "Founder",
    company: "Genxsis",
    content:
      "I really appreciate your team and the work that you guys produce... Your quality is key. Your videos are excellent and I can definitely see the time and quality you have put into them.",
    rating: 5,
    avatar: "",
  },
  {
    id: 4,
    name: "Sam Franklin",
    role: "Intuitive Coach · Co-Owner",
    company: "Apricity Counseling & Wellness",
    content:
      "Working with Prithvi and his team has totally changed my social media game. Before, I was stressed, struggling with scripts and editing instead of focusing on helping people. In just three months, they captured my authentic voice through a co-creative process. My content is now more professional and engaging, and I have seen a significant increase in followers and inquiries from potential clients.",
    rating: 5,
    avatar: "",
  },
  {
    id: 5,
    name: "Rayan Ezzeddine",
    role: "Personal Brand Client",
    company: "Direct Conversation",
    content:
      "Reaching out to The Nerdish Mic six months ago was one of the best decisions I made for my business. The shift in my brand visibility and client engagement has been drastic. My calendar is now consistently booked, and I'm attracting more clients than ever before.",
    rating: 5,
    avatar: "",
  },
  {
    id: 6,
    name: "Dr. Kara Consigli",
    role: "Founder",
    company: "Mystic Twist",
    content:
      "I just closed my first high-ticket coaching client and she said seeing my Instagram transform over time was a big factor in building trust. Best decision I have made for my business. Thank you, Prithvi! Couldn't have done it without you and the team!",
    rating: 5,
    avatar: "",
  },
];

export default function Testimonials() {
  return (
    <AnimatedTestimonials
      title="In Our Clients' Own Words"
      subtitle="Real appreciation from real conversations, direct feedback, and measurable client outcomes."
      badgeText="Real Appreciation From Real Conversations"
      testimonials={testimonials}
      trustedCompanies={[
        { name: "Coursera", logo: "/brands/coursera.svg" },
        { name: "Meta", logo: "/brands/meta.svg" },
        { name: "NBA", logo: "/brands/nba.svg" },
        { name: "NFL", logo: "/brands/nfl.svg" },
        { name: "UN", logo: "/brands/un.svg" },
        { name: "Eluna Network", logo: "/brands/eluna%20network.png" },
        { name: "Good Morning Gorgeous", logo: "/brands/good%20morning%20gorgeus.png" },
        "Serenitree Yoga",
        { name: "Genxsis", logo: "/brands/genxis.png" },
        { name: "Apricity", logo: "/brands/Apricity%20counselling.png" },
      ]}
      trustedCompaniesTitle="Trusted by leading brands, networks, and founder-led businesses"
    />
  );
}

