import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { business, buildWhatsAppLink } from "../data/business";
const BASE = import.meta.env.BASE_URL;

const QUICK_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Newsletter backend not connected yet — this stores nothing and is safe as a UI placeholder.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative mt-24 overflow-hidden bg-royal-950 text-ivory">
      <img
        src={`${BASE}images/backgrounds/waves.svg`}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full opacity-40 -translate-y-1/2 pointer-events-none select-none"
      />
      <div className="container-xl relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 focus-ring rounded-lg w-fit">
              src={`${BASE}images/logo/logo.svg`} alt={`${business.name} logo`} className="h-12 w-12" />
              <span className="font-display text-xl font-bold text-gold-200">{business.shortName}</span>
            </Link>
            <p className="text-sm text-ivory/70 leading-relaxed max-w-xs">{business.description}</p>
            <div className="flex gap-3 mt-5">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 hover:text-charcoal transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={business.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 hover:text-charcoal transition-colors"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href={buildWhatsAppLink("Hi Darshan Resin Art! I'd like to know more about your gifts.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 hover:text-charcoal transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="focus-ring text-sm text-ivory/75 hover:text-gold-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-200 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-ivory/75">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{business.location.addressLine}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <a href={`tel:${business.contact.phoneNumber}`} className="focus-ring hover:text-gold-300">
                  {business.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <a href={`mailto:${business.contact.email}`} className="focus-ring hover:text-gold-300 break-all">
                  {business.contact.email}
                </a>
              </li>
            </ul>
            <ul className="mt-4 text-sm text-ivory/60 space-y-1">
              {business.hours.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-200 mb-4">Newsletter</h3>
            <p className="text-sm text-ivory/70 mb-4">
              Subscribe for new collection launches and festive offers.
            </p>
            {subscribed ? (
              <p className="flex items-center gap-2 text-sm text-gold-300">
                <CheckCircle2 size={18} /> Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="focus-ring w-full rounded-full bg-white/10 px-4 py-2 text-sm text-ivory placeholder:text-ivory/40 border border-white/10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-charcoal hover:scale-105 transition-transform"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="focus-ring text-xs text-ivory/60 hover:text-gold-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
