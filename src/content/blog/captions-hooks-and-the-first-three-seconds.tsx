import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "captions-hooks-and-the-first-three-seconds",
  title: "Captions, hooks, and the first three seconds",
  description:
    "Most reels die before second four. Here&rsquo;s what we&rsquo;ve learned about hooks, caption styling, and the opening frame after editing thousands of vertical videos for founder-led brands.",
  date: "2025-12-08",
  readingTime: "6 min read",
  tags: ["Reels", "Hooks", "Captions"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        We have edited a lot of reels. The pattern we see in the analytics
        is not subtle &mdash; reels live or die in the first three seconds
        and almost nothing you do after that can save them. If a viewer
        scrolls past at second two, the rest of the video does not
        exist. So that is where almost all of our craft now lives.
      </p>

      <h2>The hook is not what you say first</h2>
      <p>
        A hook is the combination of the first line, the first frame, and
        the first caption. They have to agree. A great line over a boring
        frame still loses. A great frame with a generic caption still
        loses. We test all three independently and then assemble.
      </p>

      <h2>What actually works as a first line</h2>
      <ul>
        <li>
          <strong>Name the viewer.</strong> &ldquo;If you&rsquo;re a
          founder running a service business under 20 people&hellip;&rdquo;
          The viewer self-identifies, which is the closest thing to a
          watch-guarantee.
        </li>
        <li>
          <strong>State a number.</strong> &ldquo;We just cut a
          client&rsquo;s onboarding from 14 days to 3.&rdquo; Numbers
          create specificity, specificity creates trust.
        </li>
        <li>
          <strong>Pick a fight.</strong> &ldquo;Most reels coaches are
          selling you the wrong format.&rdquo; Conflict is engagement.
          Avoid manufactured conflict, but real disagreement always
          works.
        </li>
      </ul>

      <h2>The first frame is a thumbnail</h2>
      <p>
        Treat the first frame the way YouTubers treat thumbnails &mdash;
        it has to do work without sound. The founder mid-laugh, a bold
        on-screen text, a contrasting background, a hand-held prop.
        Anything that breaks the visual pattern of the feed. A static
        founder talking to the camera with nothing on screen is the
        weakest possible first frame.
      </p>

      <h2>Caption styling rules we keep coming back to</h2>
      <p>
        Two-word captions outperform sentence captions. Bold sans-serif
        outperforms anything fancy. White text with a black outline is
        boring and reliable. Color highlights on the load-bearing word
        of the sentence dramatically increase saves &mdash; we
        don&rsquo;t fully understand why, but the data is consistent
        across categories.
      </p>

      <h2>The mistake of front-loading the punchline</h2>
      <p>
        Conventional advice is &ldquo;put your best line first.&rdquo;
        That is right for the hook but wrong for the rest of the video.
        If you give away the punchline at second two, the watch-through
        collapses. The hook should make a promise. The body should keep
        the viewer waiting on the payoff. The last five seconds should
        deliver it.
      </p>

      <h2>Captions for accessibility, not just retention</h2>
      <p>
        Eighty-five percent of feed viewing is muted. That has been true
        for years. What is newer &mdash; in our editing data &mdash; is
        that captions also dramatically improve completion for hearing
        viewers. People read faster than they listen. Captions let them
        finish the video at their own pace. Skip captions and you are
        leaving a third of your watch-time on the table.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We edit vertical video for founder-led brands and podcasters
        with hooks, captions, and openings as the load-bearing craft. If
        your reels are getting reach but losing viewers in the first
        three seconds, that is almost always a hook problem and almost
        never a content problem. We fix the hook.
      </p>
    </>
  );
}
