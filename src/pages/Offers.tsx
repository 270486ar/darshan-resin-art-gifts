import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import CountdownTimer from "../components/CountdownTimer";
import { offers } from "../data/offers";
import { buildWhatsAppLink } from "../data/business";

export default function Offers() {
  return (
    <>
      <SEO
        title="Offers & Deals"
        description="Explore current festival offers, today's deal, new arrivals and our premium collection from Darshan Resin Art & Gifts."
        path="/offers"
      />
      <PageHero
        eyebrow="Limited Time"
        title="Current Offers & Collections"
        description="Handpicked deals on our most-loved resin art pieces — enquire before the offer ends."
        image="/images/hero/hero-03.svg"
      />

      <section className="container-xl py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.id} delay={(i % 4) * 0.08}>
              <div className="glass rounded-3xl overflow-hidden">
                <div className="relative">
                  <img src={offer.image} alt={offer.title} className="h-52 w-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-charcoal shadow">
                    {offer.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-royal-900 dark:text-ivory">{offer.title}</h3>
                    <span className="font-display text-lg font-bold text-gradient-gold">{offer.discount}</span>
                  </div>
                  <p className="mt-2 text-sm text-royal-700/75 dark:text-ivory/65">{offer.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <CountdownTimer endsInDays={offer.endsInDays} />
                    <a
                      href={buildWhatsAppLink(`Hi! I'd like to know more about the "${offer.title}" offer.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp !py-2.5 text-sm"
                    >
                      <FaWhatsapp size={16} /> Claim Offer
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
