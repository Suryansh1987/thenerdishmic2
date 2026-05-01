import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "meta-conversions-api-india-setup",
  title: "Meta Conversions API setup for Indian brands",
  description:
    "Indian brands lose 30-40% of pixel signal to ad blockers, in-app browsers and iOS. CAPI fixes most of it. A short, India-specific setup playbook for founders.",
  date: "2025-09-30",
  readingTime: "7 min read",
  tags: ["Meta", "CAPI"],
  author: "The Nerdish Mic",
};

export default function Article() {
  return (
    <>
      <p>
        Indian D2C brands have a quiet pixel problem. A huge slice of your
        traffic is coming from in-app browsers (Instagram, WhatsApp,
        Telegram), iOS users with tracking restrictions, and Chrome with
        third-party cookies on the way out. Meta Conversions API plugs the
        leak. Here is the India-specific version of the setup, free of US
        ecommerce assumptions.
      </p>

      <h2>Why CAPI matters more in India than anywhere else</h2>
      <p>
        India is mobile-first and in-app first. A Reels viewer taps an ad,
        gets thrown into Instagram&rsquo;s in-app browser, completes a
        purchase, and the standard pixel often misses or undercounts the
        event. CAPI sends the conversion server-to-server, bypassing
        browser restrictions. Match rates on India accounts routinely
        improve from a sad 4 out of 10 to a healthy 8 out of 10 after a
        clean setup.
      </p>

      <h2>The three setup paths</h2>
      <ul>
        <li>
          <strong>Native integration.</strong> Shopify, WooCommerce, and
          Wix have official Meta apps. Easiest, but limited customisation
          on user data.
        </li>
        <li>
          <strong>GTM Server-Side container.</strong> The path we
          recommend for anyone with custom checkouts or above a lakh a
          month in spend. More setup, much more control.
        </li>
        <li>
          <strong>Direct API integration.</strong> Your developer hits the
          Meta Graph API from your backend. Most powerful, most
          maintenance.
        </li>
      </ul>

      <h2>The user parameters that move match quality</h2>
      <p>
        Meta&rsquo;s match algorithm needs identifiers. The more you send,
        hashed correctly, the higher your Event Match Quality and the
        cheaper your CAC. The big six for India: hashed email, hashed phone
        with country code (+91), first name, last name, city, and external
        ID (your customer ID). Phone number is the single biggest unlock
        for Indian audiences because email coverage is patchy.
      </p>

      <h2>The deduplication trap</h2>
      <ul>
        <li>
          <strong>Send a unique event_id from both client and server.</strong>
          Same ID means Meta knows it is the same conversion.
        </li>
        <li>
          <strong>Match the action_source.</strong> website on both ends.
          Mismatches break dedup silently.
        </li>
        <li>
          <strong>Watch for COD doublecounting.</strong> Indian brands
          often fire purchase on order placement and again on payment
          confirmation. Pick one and stick to it.
        </li>
      </ul>

      <h2>Indian-specific quirks worth knowing</h2>
      <p>
        Phone numbers are everywhere &mdash; hash them with country code,
        not without. Pin codes are not standard postal_code format
        globally; Meta accepts them but you may need to pad. UPI flows
        sometimes leave the site mid-checkout; configure begin_checkout
        carefully so you do not undercount drop-off. And if you run COD,
        decide upfront whether you fire purchase on order or on delivery
        &mdash; and never change it mid-quarter.
      </p>

      <h2>Validating the setup</h2>
      <p>
        Open Events Manager, go to Test Events, run a real purchase. You
        should see one event, not two, with deduplicated browser and
        server signals. Match Quality climbs over a few days as the
        algorithm learns. If after two weeks EMQ is still under six,
        something is wrong with your user parameters.
      </p>

      <h2>How we help at The Nerdish Mic</h2>
      <p>
        We ship clean Meta CAPI setups for Indian brands &mdash; with the
        right hashing, the right dedup, and the right COD logic so your
        media buyer stops complaining and your CAC stops climbing. If your
        Event Match Quality is below seven, the setup is leaking money.
        We&rsquo;d love to help.
      </p>
    </>
  );
}
