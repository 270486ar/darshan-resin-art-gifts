import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import AccordionFAQ from "../components/AccordionFAQ";
import { faqs } from "../data/faq";
import { buildWhatsAppLink } from "../data/business";

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about ordering, personalisation, shipping, and caring for your Darshan Resin Art & Gifts pieces."
        path="/faq"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Need Help?"
        title="Frequently Asked Questions"
        description="Everything you need to know about ordering your handcrafted resin gift."
        image="/images/hero/hero-02.svg"
      />

      <section className="container-xl py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <AccordionFAQ items={faqs} />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-12 glass-strong rounded-3xl p-8 text-center">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-royal-900 dark:text-ivory">
              Still Have Questions?
            </h2>
            <p className="mt-2 text-sm text-royal-700/70 dark:text-ivory/60">
              We're just a message away — reach out and we'll help you right away.
            </p>
            <a
              href={buildWhatsAppLink("Hi Darshan Resin Art! I have a question about your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-5"
            >
              <FaWhatsapp size={18} /> Ask on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
