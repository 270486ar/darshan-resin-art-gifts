import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "../data/business";

const SLIDES = [
  {
    image: "/images/hero/hero-01.svg",
    eyebrow: "Handcrafted With Love in Puducherry",
    title: "Resin Art That Tells Your Story",
    subtitle: "Personalised name boards, wedding keepsakes & premium gifts poured, layered and polished by hand.",
  },
  {
    image: "/images/hero/hero-02.svg",
    eyebrow: "Festival Offer — Flat 20% Off",
    title: "Gifts As Golden As Your Memories",
    subtitle: "Explore our gold-leaf resin collection, crafted for milestones worth celebrating.",
  },
  {
    image: "/images/hero/hero-03.svg",
    eyebrow: "New Wedding Collection",
    title: "Timeless Keepsakes For Two",
    subtitle: "Custom couple name boards and resin art designed to mark your forever.",
  },
  {
    image: "/images/hero/hero-04.svg",
    eyebrow: "Premium Collection",
    title: "Luxury, Poured By Hand",
    subtitle: "Discover statement wall art and décor finished with genuine gold leaf accents.",
  },
  {
    image: "/images/hero/hero-05.svg",
    eyebrow: "Trending This Month",
    title: "Handcrafted Gifts, Lasting Memories",
    subtitle: "From baby keepsakes to corporate gifting — every piece is one of a kind.",
  },
];

const AUTOPLAY_MS = 5500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 160]);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative h-[92svh] min-h-[560px] w-full overflow-hidden"
      aria-label="Featured collections"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slide.image}
            alt=""
            aria-hidden="true"
            style={{ y: parallaxY }}
            className="h-[115%] w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container-xl">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-1.5 text-xs sm:text-sm font-semibold text-charcoal shadow-gold">
                  <Sparkles size={14} />
                  {slide.eyebrow}
                </span>
                <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-ivory">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-ivory/85">{slide.subtitle}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-gold">
                <Sparkles size={18} /> Shop Now
              </Link>
              <a
                href={buildWhatsAppLink("Hi Darshan Resin Art! I'd like to enquire about your handcrafted gifts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp size={18} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* slide controls */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="focus-ring hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-ivory backdrop-blur hover:bg-white/25"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Slide selector">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold-400" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="focus-ring hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-ivory backdrop-blur hover:bg-white/25"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
