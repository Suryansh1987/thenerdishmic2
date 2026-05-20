"use client";

import { useState } from "react";
import clsx from "clsx";
import { Card } from "./ui";

const faqs = [
  {
    question: "Is this allowed by Instagram?",
    answer:
      "InstaFlow is built around paced sending, account warm-up, and human-reviewed messaging so you can run outreach more carefully than a spreadsheet-and-copy-paste workflow. Platform rules can change, though, so the product should be used responsibly and with your own compliance review in mind.",
  },
  {
    question: "How does AI personalization actually work?",
    answer:
      "You define the offer, tone, exclusions, and examples once, then InstaFlow uses that prompt plus the lead row you upload to draft tailored first messages. You stay in control of the voice, and the templates keep placeholders like first name, niche, or city grounded in your source data.",
  },
  {
    question: "Can I use my existing Instagram accounts?",
    answer:
      "Yes. The setup is designed for your current accounts, not throwaway profiles. You log them in through secure sessions, choose which account sends which campaign, and keep messaging volume aligned to the plan you bought.",
  },
  {
    question: "What happens if Instagram flags an account?",
    answer:
      "Runs can be paused per account, queued sends stay isolated, and you can swap volume to another connected account while you investigate. The idea is to give operators clear controls instead of blasting every profile at the same pace.",
  },
  {
    question: "Does it work on Mac and Linux?",
    answer:
      "Yes. The launch page is already structured for Windows, macOS, and Linux downloads, and the app flow is designed to be the same across all three. Replace the placeholder download links with your real installers when you are ready to launch.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "The page currently reflects a 7-day refund window for Pro and Max, plus cancel-anytime billing. If you want stricter or softer terms, this is one of the easiest lines to update before the page goes live.",
  },
  {
    question: "Can I import targets from a tool like Apollo or PhantomBuster?",
    answer:
      "Yes. The current flow assumes Excel-style imports, which makes it easy to bring in exported lead lists from enrichment or scraping tools as long as you map the right columns before launching a run.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="instaflow-faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `instaflow-faq-answer-${index}`;
        const questionId = `instaflow-faq-question-${index}`;

        return (
          <Card key={faq.question} className={clsx("instaflow-faq-item", isOpen && "instaflow-faq-open")}>
            <button
              id={questionId}
              type="button"
              className="instaflow-faq-trigger"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="instaflow-faq-question">{faq.question}</span>
              <span className={clsx("instaflow-faq-toggle", isOpen && "instaflow-faq-toggle-open")}>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? (
              <div id={answerId} role="region" aria-labelledby={questionId} className="instaflow-faq-answer">
                {faq.answer}
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
