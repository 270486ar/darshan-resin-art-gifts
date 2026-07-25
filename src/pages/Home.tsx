import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Gem, Heart, Package, Sparkles, Truck } from "lucide-react";
import SEO from "../components/SEO";
import HeroSlider from "../components/HeroSlider";
import ScrollReveal from "../components/ScrollReveal";
import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import { products, PRODUCT_CATEGORIES } from "../data/products";
import { testimonials } from "../data/testimonials";
import { business, buildWhatsAppLink } from "../data/business";

const FEATURED = products.filter((p) => p.featured).slice(0, 8);

const VALUE_PROPS = [
  { icon: Gem, title: "100% Handcrafted", text: "Every piece hand-poured and finished in our Villianur studio." },
  { icon: Heart, title: "Made With Love", text: "Personalised details that turn a gift into a keepsake." },
  { icon: Package, title: "Secure Packaging", text: "Cushioned, careful packing for safe pan-India delivery." },
  { icon: Truck, title: "Pan-India Shipping", text: "We deliver your resin art safely, wherever you are." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Handcrafted Resin Art & Gifts in Puducherry"
        description="Darshan Resin Art & Gifts — premium handcrafted resin name boards, wedding gifts, anniversary gifts, and home decor made in Villianur, Puducherry. Shop now or enquire on WhatsApp."
        path="/"
      />
      <HeroSlider />

      {/* Value props */}
      <section className="container-xl -mt-16 relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {VALUE_PROPS.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08} className="glass rounded-2xl p-5 text-center">
              <v.icon className="mx-auto text-gold-500" size={28} aria-hidden="true" />
              <h3 className="mt-3 font-display font-semibold text-sm sm:text-base text-royal-900 dark:text-ivory">
                {v.title}
              </h3>
              <p className="mt-1 text-xs text-royal-700/70 dark:text-ivory/60 hidden sm:block">{v.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-xl py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden glass-strong p-3">
              <img
                src="/images/gallery/gallery-03.svg"
                alt="Handcrafted resin art piece from Darshan Resin Art & Gifts"
                className="h-full w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
            <img
              src="/images/backgrounds/floral-corner.svg"
              alt=""
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 w-28 opacity-80 hidden sm:block"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-heading mt-3">Poured With Passion in Villianur</h2>
            <p className="mt-5 text-royal-700/80 dark:text-ivory/70 leading-relaxed">{business.founderNote}</p>
            <p className="mt-4 text-royal-700/80 dark:text-ivory/70 leading-relaxed">
              From personalised name boards to wedding keepsakes, every Darshan Resin Art creation blends gold,
              colour and craftsmanship into something you'll treasure for years.
            </p>
            <Link to="/about" className="btn-outline mt-6">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Counters */}
      <section className="relative py-16 bg-royal-gradient">
        <img src="/images/backgrounds/waves.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full opacity-20" />
        <div className="container-xl relative grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Counter value={2500} suffix="+" label="Happy Customers" />
          <Counter value={30} suffix="+" label="Unique Designs" />
          <Counter value={5} suffix=" Yrs" label="Of Craftsmanship" />
          <Counter value={100} suffix="%" label="Handmade" />
        </div>
      </section>

      {/* Categories */}
      <section className="container-xl py-20 sm:py-28">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Explore</span>
          <h2 className="section-heading mt-3">Shop by Category</h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat} delay={(i % 8) * 0.05}>
              <Link
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="focus-ring group glass flex h-28 flex-col items-center justify-center rounded-2xl p-4 text-center hover:shadow-glass-lg transition-shadow"
              >
                <Sparkles className="text-gold-500 transition-transform group-hover:scale-110" size={22} />
                <span className="mt-2 font-display text-sm font-semibold text-royal-900 dark:text-ivory">{cat}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-xl py-20 sm:py-28">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="section-eyebrow">Bestsellers</span>
            <h2 className="section-heading mt-3">Featured Products</h2>
          </div>
          <Link to="/products" className="btn-outline">
            View All Products <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="container-xl py-20 sm:py-28">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Kind Words</span>
          <h2 className="section-heading mt-3">What Our Customers Say</h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, 4).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/testimonials" className="btn-outline">
            Read More Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="container-xl pb-24">
        <ScrollReveal className="relative overflow-hidden rounded-[2.5rem] bg-royal-gradient px-6 py-16 text-center sm:px-16">
          <img src="/images/backgrounds/glass-blobs.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory">Ready to Create a Lasting Memory?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/80">
              Message us on WhatsApp for custom orders, bulk gifting, or just to say hello.
            </p>
            <a
              href={buildWhatsAppLink("Hi Darshan Resin Art! I'd like to enquire about your handcrafted gifts.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
