import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { Plus, X } from "lucide-react";
import { business, buildWhatsAppLink } from "../data/business";

const ACTIONS = [
  {
    label: "WhatsApp",
    href: buildWhatsAppLink("Hi Darshan Resin Art! I'd like to enquire about your handcrafted gifts."),
    icon: FaWhatsapp,
    className: "bg-[#25D366] text-white",
  },
  {
    label: "Call",
    href: `tel:${business.contact.phoneNumber}`,
    icon: FaPhone,
    className: "bg-royal-600 text-white",
  },
  {
    label: "Instagram",
    href: business.social.instagram,
    icon: FaInstagram,
    className: "bg-gradient-to-br from-blush-400 via-royal-500 to-gold-500 text-white",
  },
  {
    label: "YouTube",
    href: business.social.youtube,
    icon: FaYoutube,
    className: "bg-red-600 text-white",
  },
];

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          ACTIONS.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className={`focus-ring flex items-center gap-2 rounded-full pl-4 pr-3 py-3 shadow-glass-lg ${action.className}`}
            >
              <span className="text-sm font-medium">{action.label}</span>
              <action.icon size={18} />
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        aria-expanded={open}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-gold transition-transform hover:scale-105 active:scale-95"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X size={24} /> : <Plus size={24} />}
        </motion.span>
      </button>
    </div>
  );
}
