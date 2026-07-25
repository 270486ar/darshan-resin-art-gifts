import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { business } from "../data/business";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the Terms & Conditions for ordering handcrafted resin art and gifts from Darshan Resin Art & Gifts."
        path="/terms-and-conditions"
      />
      <PageHero eyebrow="Legal" title="Terms & Conditions" image="/images/hero/hero-04.svg" />
      <section className="container-xl py-16 sm:py-20">
        <ScrollReveal className="mx-auto max-w-3xl glass rounded-3xl p-8 sm:p-12 prose prose-sm sm:prose-base prose-headings:font-display max-w-none dark:prose-invert">
          <p className="text-sm text-royal-700/60 dark:text-ivory/50">Last updated: January 2026</p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">1. General</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            By browsing this website or placing an order with {business.name}, you agree to the following terms and
            conditions. Please read them carefully before ordering.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">2. Handmade Products</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            All our resin art pieces are handcrafted. Minor variations in colour, texture, or air bubbles may occur
            between pieces — this is a natural characteristic of handmade resin art and not considered a defect.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">3. Orders & Personalisation</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            Orders are confirmed once customisation details (names, dates, colours) are finalised over WhatsApp.
            Please double-check spellings and details before confirming, as personalised items cannot be modified
            once production has started.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">4. Pricing & Payment</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            Prices listed on this website are starting/indicative prices and may vary based on size, personalisation
            and materials. Final pricing is confirmed via WhatsApp before an order is placed.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">5. Production & Delivery Time</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            Since every piece is handmade to order, production typically takes 5–10 working days, with delivery time
            varying by location. Timelines are estimates and may be affected by order volume or courier delays.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">6. Cancellations & Refunds</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            As most items are made-to-order and personalised, cancellations are only accepted before production
            begins. Refunds for damaged or defective items are handled on a case-by-case basis — please contact us
            within 48 hours of delivery with photos of the issue.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">7. Intellectual Property</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            All designs, photographs, and content on this website belong to {business.name} and may not be
            reproduced without permission.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">8. Contact</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            For any questions regarding these terms, please reach out via WhatsApp at{" "}
            {business.contact.whatsappDisplay} or email {business.contact.email}.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
