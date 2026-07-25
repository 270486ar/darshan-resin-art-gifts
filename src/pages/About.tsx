import { FaWhatsapp } from "react-icons/fa";
import { Gem, Heart, Leaf, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { business, buildWhatsAppLink } from "../data/business";

const VALUES = [
  { icon: Gem, title: "Craftsmanship First", text: "Each piece is hand-poured, layered and cured with patience — never mass-produced." },
  { icon: Heart, title: "Made With Care", text: "We treat every order as a personal keepsake, not just a transaction." },
  { icon: Leaf, title: "Thoughtful Materials", text: "We source quality resin, pigments and finishes for long-lasting pieces." },
  { icon: Sparkles, title: "Personal Touch", text: "From names to dates to colours, your gift is designed around your story." },
];

const PROCESS = [
  { step: "Design", text: "We discuss your idea, colours and personalisation over WhatsApp." },
  { step: "Pour", text: "Resin is hand-mixed, coloured and poured in careful layers." },
  { step: "Cure", text: "Each piece cures for days to achieve that signature glass-like finish." },
  { step: "Finish & Deliver", text: "We polish, package with care, and ship safely to your door." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn the story behind Darshan Resin Art & Gifts — a handcrafted resin art studio based in Villianur, Puducherry, India."
        path="/about"
      />
      <PageHero
        eyebrow="Our Journey"
        title="The Story Behind Darshan Resin Art"
        description="A small studio in Villianur, Puducherry, pouring big love into every handcrafted piece."
        image=`${import.meta.env.BASE_URL}images/hero/hero-04.svg'
      />

      <section className="container-xl py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-heading mt-3">Handcrafted Gifts That Create Lasting Memories</h2>
            <p className="mt-5 leading-relaxed text-royal-700/80 dark:text-ivory/70">
              {business.name} began as a small passion project in {business.location.area}, {business.location.city},
              turning a love for resin art into a studio that now creates personalised name boards, wedding
              keepsakes, anniversary art, and home décor for customers across India.
            </p>
            <p className="mt-4 leading-relaxed text-royal-700/80 dark:text-ivory/70">{business.founderNote}</p>
            <p className="mt-4 leading-relaxed text-royal-700/80 dark:text-ivory/70">
              We believe a gift should feel personal. That's why every board, frame and keepsake is customised —
              your name, your dates, your colours — so what you receive is made for no one else but you.
            </p>
            <a
              href={buildWhatsAppLink("Hi Darshan Resin Art! I'd love to know more about your studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8"
            >
              <FaWhatsapp size={18} /> Say Hello on WhatsApp
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="grid grid-cols-2 gap-4">
            {["gallery-05", "gallery-08", "gallery-12", "gallery-15"].map((g) => (
              <div key={g} className="aspect-square overflow-hidden rounded-2xl glass p-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/gallery/${g}.svg`}
                  alt="Resin art crafted by Darshan Resin Art & Gifts"
                  className="h-full w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-xl py-20 sm:py-28">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">What We Stand For</span>
          <h2 className="section-heading mt-3">Our Values</h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08} className="glass rounded-3xl p-6 text-center">
              <v.icon className="mx-auto text-gold-500" size={30} />
              <h3 className="mt-4 font-display font-semibold text-royal-900 dark:text-ivory">{v.title}</h3>
              <p className="mt-2 text-sm text-royal-700/70 dark:text-ivory/60">{v.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 sm:py-28 bg-royal-gradient overflow-hidden">
        <img src="/images/backgrounds/abstract-pattern.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-xl relative">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow text-gold-300">How It's Made</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ivory">Our Crafting Process</h2>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1} className="glass-strong rounded-2xl p-6 text-center">
                <span className="font-display text-3xl font-bold text-gold-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display font-semibold text-ivory">{p.step}</h3>
                <p className="mt-2 text-sm text-ivory/70">{p.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
