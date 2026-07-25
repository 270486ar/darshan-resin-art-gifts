import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="glass rounded-3xl p-6 flex flex-col h-full"
    >
      <Quote className="text-gold-400/70" size={28} aria-hidden="true" />
      <div className="mt-2 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "fill-gold-400 text-gold-400" : "text-royal-200 dark:text-white/20"}
          />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-royal-800/85 dark:text-ivory/80">
        "{testimonial.review}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-11 w-11 rounded-full"
          width={44}
          height={44}
        />
        <div>
          <p className="font-display font-semibold text-royal-900 dark:text-ivory text-sm">{testimonial.name}</p>
          <p className="text-xs text-royal-700/60 dark:text-ivory/50">{testimonial.location}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
