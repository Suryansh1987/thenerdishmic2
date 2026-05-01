import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "influencer-contract-and-brief-template-thinking",
  title: "How to brief and contract a US influencer without getting burned",
  description:
    "Most influencer disputes trace back to a vague brief or a missing contract clause. Here&rsquo;s the operational template we use to keep US creator partnerships on rails.",
  date: "2025-10-15",
  readingTime: "6 min read",
  tags: ["Influencer", "Operations"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Almost every &ldquo;influencer marketing went badly&rdquo; story we
        hear comes back to one of two failures: the brief was too loose, or
        the contract was too thin. Both are fixable in an afternoon. You
        don&rsquo;t need a $700-an-hour entertainment lawyer to run a clean
        US creator program. You need a brief that actually briefs and a
        contract that actually contracts.
      </p>

      <h2>The brief is a one-pager, not a deck</h2>
      <p>
        Long briefs get skimmed. Short briefs get followed. Our standard
        creator brief fits on one page and includes only what the creator
        needs to make the post: the hook, the CTA, the do-and-don&rsquo;t
        list, and the deliverable spec. Everything else lives in the
        contract. Anytime we&rsquo;ve gone past one page, the creator has
        missed something.
      </p>

      <h2>What goes in the brief</h2>
      <ul>
        <li>
          <strong>Hook.</strong> The first three seconds. We provide one
          required hook and two optional alternates.
        </li>
        <li>
          <strong>Talking points.</strong> Three to five product benefits,
          ranked. Creator picks two to three.
        </li>
        <li>
          <strong>CTA.</strong> Exact language, exact link, exact discount
          code if any.
        </li>
        <li>
          <strong>Don&rsquo;t list.</strong> Words, claims, and competitor
          mentions to avoid. This is where most legal risk hides.
        </li>
        <li>
          <strong>Deliverable spec.</strong> Format, length, FTC disclosure
          language, due date, revision policy.
        </li>
      </ul>

      <h2>Contract clauses founders skip and regret</h2>
      <p>
        Most influencer template contracts you find online are written for
        the creator, not the brand. We rewrite four clauses on every deal.
      </p>
      <ul>
        <li>
          <strong>Usage rights.</strong> Specify the channels (paid social,
          organic, email, website), the duration in days, and the territory.
          &ldquo;Perpetual usage&rdquo; is a flag &mdash; creators rarely
          agree, and you don&rsquo;t actually need it.
        </li>
        <li>
          <strong>Exclusivity.</strong> If you want a category lockout, name
          the category and the duration. &ldquo;No competitors&rdquo; is too
          vague to enforce.
        </li>
        <li>
          <strong>Approval window.</strong> 48 hours from delivery to
          revision request. After that, it&rsquo;s deemed approved. This
          protects everyone.
        </li>
        <li>
          <strong>Performance kill switch.</strong> The right to take a post
          down within 30 days if it violates platform policy or the brand
          guidelines.
        </li>
      </ul>

      <h2>FTC compliance is not optional</h2>
      <p>
        The FTC has been increasingly active about US influencer disclosures
        in 2024 and 2025. &ldquo;#ad&rdquo; in the first three lines, clear
        and conspicuous, on every paid post. The brand is liable, not just
        the creator. Build the disclosure into the deliverable spec so it
        can&rsquo;t be forgotten, and reject any post that buries the
        disclosure under a row of hashtags.
      </p>

      <h2>Payment terms that keep creators happy</h2>
      <p>
        50% on signing, 50% on delivery is the US standard for one-off
        deals. For longer programs, monthly retainers paid net 15. Net 60
        and net 90 are how brands lose access to the best creators &mdash;
        word travels in creator circles faster than you think. If you must
        do net 30, communicate it up front so creators can decide.
      </p>

      <h2>Document the rejection process</h2>
      <p>
        The single most useful clause is also the most overlooked: what
        happens if you reject the post entirely. Two options &mdash; one
        free revision included, or a 25% kill fee if the brand pulls out
        after delivery. Decide before you sign, write it down, and avoid
        the awkward Slack chain six weeks later.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We run end-to-end creator programs for US founders &mdash; briefs,
        contracts, FTC review, payments, reporting. If you&rsquo;re running
        more than two creators a month and managing it from a Google Doc,
        you&rsquo;re leaving leverage and money on the table. We can take
        the ops off your plate or just tighten what you already have.
      </p>
    </>
  );
}
