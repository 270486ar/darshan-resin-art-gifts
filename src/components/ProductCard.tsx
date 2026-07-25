import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import type { Product } from "../data/products";
import { buildProductEnquiryLink } from "../data/business";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group glass rounded-3xl overflow-hidden flex flex-col hover:shadow-glass-lg transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category} handcrafted resin gift`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={800}
          height={800}
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 rounded-full bg-royal-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow">
            New
          </span>
        )}
        {product.featured && (
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal shadow">
            <Sparkles size={12} /> Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold">
          {product.category}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-royal-900 dark:text-ivory">{product.name}</h3>
        <p className="mt-2 text-sm text-royal-700/80 dark:text-ivory/70 line-clamp-2 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-bold text-royal-900 dark:text-gold-300">
            ₹{product.price.toLocaleString("en-IN")}
            <span className="text-xs font-normal text-royal-700/60 dark:text-ivory/50"> onwards</span>
          </span>
        </div>
        <a
          href={buildProductEnquiryLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-4 w-full !py-2.5 text-sm"
        >
          <FaWhatsapp size={16} /> Enquire Now
        </a>
      </div>
    </motion.article>
  );
}
