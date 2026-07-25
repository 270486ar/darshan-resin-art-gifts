import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import TestimonialCard from "../components/TestimonialCard";
import Counter from "../components/Counter";
import { testimonials } from "../data/testimonials";
import { buildWhatsAppLink } from "../data/business";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Customer Testimonials"
        description="Read what our customers say about their handcrafted resin art and gifts from Darshan Resin Art & Gifts, Puducherry."
        path="/testimonials"
      />
      <PageHero
        eyebrow="Customer Love"
        title="Stories From Our Customers"
        description="Real feedback from customers who've turned their memories into resin art with us."
        image="/images/hero/hero-04.svg"
      />

      <section className="container-xl py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-16">
          <Counter value={2500} suffix="+" label="Happy Customers" />
          <Counter value={4} suffix=".9/5" label="Average Rating" />
          <Counter value={30} suffix="+" label="Product Designs" />
          <Counter value={98} suffix="%" label="Repeat Enquiries" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        <ScrollReveal className="mt-16 glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-royal-900 dark:text-ivory">
            Loved Your Order? We'd Love to Hear About It.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-royal-700/70 dark:text-ivory/60">
            Share your experience with us on WhatsApp and we might feature your story here!
          </p>
          <a
            href={buildWhatsAppLink("Hi Darshan Resin Art! I'd love to share feedback about my recent order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6"
          >
            <FaWhatsapp size={18} /> Share Your Feedback
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
