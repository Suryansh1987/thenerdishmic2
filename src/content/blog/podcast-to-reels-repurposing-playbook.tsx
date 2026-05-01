import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "podcast-to-reels-repurposing-playbook",
  title: "The podcast-to-reels repurposing playbook we actually use",
  description:
    "Most podcast clips look like podcast clips. Here&rsquo;s how we turn one 60-minute episode into a month of reels that don&rsquo;t feel like leftovers.",
  date: "2025-10-16",
  readingTime: "6 min read",
  tags: ["Podcast", "Reels", "Repurposing"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Podcasters spend three hours recording, two hours editing, and then
        post one trailer reel that does five hundred views. Meanwhile the
        episode itself has thirty quotable moments that nobody outside the
        listener base will ever hear. Repurposing is not a nice-to-have
        anymore &mdash; it is the channel. The episode is just the source
        file.
      </p>

      <h2>The mistake: clipping by timestamp</h2>
      <p>
        Most editors clip a podcast by going to the most-listened moments
        in the analytics and cutting around them. That gives you clips that
        make sense if you have heard the rest of the episode. They do not
        work as standalone content because they assume context the scroller
        does not have. We clip by argument, not by timestamp.
      </p>

      <h2>The four kinds of clips we pull from every episode</h2>
      <ul>
        <li>
          <strong>The hot take.</strong> A guest taking a clear stance in
          one sentence. These are the clips that get shared.
        </li>
        <li>
          <strong>The reframe.</strong> A guest naming something the
          audience already feels but couldn&rsquo;t put into words. These
          drive saves.
        </li>
        <li>
          <strong>The story.</strong> A 45-second specific story with a
          beginning, middle, and end. These build trust in the show.
        </li>
        <li>
          <strong>The disagreement.</strong> The host and guest pushing
          back on each other. These pull the most comments &mdash; comments
          are the input to the algorithm.
        </li>
      </ul>

      <h2>How we re-cut for vertical</h2>
      <p>
        A horizontal podcast frame does not become a vertical reel by
        cropping in. We re-frame, drop in B-roll on the host&rsquo;s
        reactions, and add bold caption styling that the original recording
        never had. The clip should look like it was shot for vertical, even
        though it wasn&rsquo;t. If a viewer can tell it is repurposed, you
        have lost them.
      </p>

      <h2>The hook we add on top</h2>
      <p>
        Every clip gets a 3-second hook stitched onto the front, recorded
        separately. Sometimes it is the host setting up the moment.
        Sometimes it is the guest&rsquo;s sharpest line pulled forward.
        Sometimes it is just bold caption text. What it is not is the
        chronological start of the clip &mdash; that is almost always the
        weakest second of the answer.
      </p>

      <h2>One episode, fifteen clips, four weeks</h2>
      <p>
        Our standard output for a 60-minute episode is twelve to fifteen
        vertical clips, drip-released over four weeks across Reels, Shorts,
        and LinkedIn. The point is not to flood the feed in one day. It is
        to keep the show in front of new audiences while the next episode
        is being recorded. By week four, a new episode is dropping and the
        cycle restarts.
      </p>

      <h2>What this does for the show itself</h2>
      <p>
        Podcast downloads are a lagging indicator of clip performance. The
        podcasters we work with see download growth roughly 60 days after
        they start posting clips consistently &mdash; not because the
        clips themselves drive subscribes, but because the clips put the
        host&rsquo;s name in front of new audiences who eventually get
        curious enough to check the full show.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We run end-to-end podcast repurposing for founder-led shows
        &mdash; clip selection, vertical re-frames, hook recording,
        captions, scheduling, and the analytics that tell you which clip
        styles are actually working. If you are sitting on a backlog of
        episodes that nobody outside your subscriber base has heard, that
        is where we start.
      </p>
    </>
  );
}
