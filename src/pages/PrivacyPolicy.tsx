import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { business } from "../data/business";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Darshan Resin Art & Gifts to understand how we handle your information."
        path="/privacy-policy"
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" image="/images/hero/hero-03.svg" />
      <section className="container-xl py-16 sm:py-20">
        <ScrollReveal className="mx-auto max-w-3xl glass rounded-3xl p-8 sm:p-12 prose prose-sm sm:prose-base prose-headings:font-display max-w-none dark:prose-invert">
          <p className="text-sm text-royal-700/60 dark:text-ivory/50">Last updated: January 2026</p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">1. Introduction</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            {business.name} ("we", "our", "us") respects your privacy. This Privacy Policy explains what information
            we collect through this website and how we use it when you contact us or enquire about our products.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">2. Information We Collect</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            When you use our Contact form or WhatsApp Enquiry buttons, we may receive your name, phone number, email
            address, and the message you choose to share with us. We do not collect payment information through
            this website — all payments are arranged directly with you via WhatsApp or in person.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">3. How We Use Your Information</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            We use the information you provide solely to respond to your enquiry, process your order, arrange
            delivery, and improve our products and services. We do not sell or rent your personal information to
            third parties.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">4. Newsletter</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            If you subscribe to our newsletter, your email address will only be used to send you updates about new
            collections and offers. You can unsubscribe at any time by contacting us.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">5. Third-Party Links</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            Our website links to third-party platforms such as WhatsApp, Instagram and YouTube. We are not
            responsible for the privacy practices of these platforms and encourage you to review their respective
            privacy policies.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">6. Data Security</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            We take reasonable measures to protect any information shared with us, but no method of electronic
            storage or transmission is completely secure.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-royal-900 dark:text-ivory">7. Contact Us</h2>
          <p className="mt-2 text-royal-700/80 dark:text-ivory/70">
            If you have questions about this Privacy Policy, please contact us at {business.contact.email} or via
            WhatsApp at {business.contact.whatsappDisplay}.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
