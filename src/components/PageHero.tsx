import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}

const BASE = import.meta.env.BASE_URL;
export default function PageHero({ eyebrow, title, description, image = `${BASE}images/hero/hero-03.svg` }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/90" />
      <div className="container-xl relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow text-gold-300"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ivory"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-ivory/80"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
