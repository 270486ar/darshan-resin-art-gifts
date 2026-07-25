import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { GalleryItem } from "../data/gallery";

export default function GalleryMasonry({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: (i % 8) * 0.05 }}
            className="focus-ring group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl"
            aria-label={`View ${item.title}`}
          >
            <img
              src={item.image}
              alt={`${item.title} — ${item.category}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="p-4">
                <p className="text-sm font-semibold text-ivory">{item.title}</p>
                <p className="text-xs text-gold-300">{item.category}</p>
              </div>
            </div>
            <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-ivory opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIn size={16} />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="focus-ring absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="focus-ring absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.img
              key={items[activeIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-glass-lg"
            />
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="focus-ring absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <ChevronRight size={22} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ivory/70">
              {items[activeIndex].title} · {activeIndex + 1} / {items.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
