import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { business, buildWhatsAppLink } from "../data/business";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // This form sends the enquiry straight to WhatsApp — no backend or data storage required.
    const message = `Hi Darshan Resin Art! My name is ${form.name}.\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  }

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.location.mapEmbedQuery
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Darshan Resin Art & Gifts in Villianur, Puducherry. Call, WhatsApp, or send us a message to enquire about custom resin art gifts."
        path="/contact"
      />
      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Contact Darshan Resin Art & Gifts"
        description="Reach out for custom orders, bulk gifting, or just to say hi."
        image="/images/hero/hero-05.svg"
      />

      <section className="container-xl py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <ScrollReveal className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-gold-500" size={20} />
                <div>
                  <h3 className="font-display font-semibold text-royal-900 dark:text-ivory">Studio Address</h3>
                  <p className="text-sm text-royal-700/70 dark:text-ivory/60">{business.location.addressLine}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 shrink-0 text-gold-500" size={20} />
                <div>
                  <h3 className="font-display font-semibold text-royal-900 dark:text-ivory">Call / WhatsApp</h3>
                  <a href={`tel:${business.contact.phoneNumber}`} className="focus-ring block text-sm text-royal-700/70 dark:text-ivory/60 hover:text-gold-500">
                    {business.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 shrink-0 text-gold-500" size={20} />
                <div>
                  <h3 className="font-display font-semibold text-royal-900 dark:text-ivory">Email</h3>
                  <a href={`mailto:${business.contact.email}`} className="focus-ring block text-sm text-royal-700/70 dark:text-ivory/60 hover:text-gold-500 break-all">
                    {business.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 shrink-0 text-gold-500" size={20} />
                <div>
                  <h3 className="font-display font-semibold text-royal-900 dark:text-ivory">Business Hours</h3>
                  {business.hours.map((h) => (
                    <p key={h.day} className="text-sm text-royal-700/70 dark:text-ivory/60">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={buildWhatsAppLink("Hi Darshan Resin Art! I'd like to enquire about your handcrafted gifts.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1 !py-2.5 text-sm"
                >
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
                <a href={`tel:${business.contact.phoneNumber}`} className="btn-outline flex-1 !py-2.5 text-sm">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl overflow-hidden h-64">
              <iframe
                title="Darshan Resin Art & Gifts location map"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-royal-900 dark:text-ivory">Send Us a Message</h2>
              <p className="mt-2 text-sm text-royal-700/70 dark:text-ivory/60">
                Fill in the form and it'll open directly in WhatsApp so we can chat in real time.
              </p>

              {sent && (
                <div className="mt-5 flex items-center gap-2 rounded-2xl bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                  <CheckCircle2 size={18} /> Opening WhatsApp with your message...
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-royal-800 dark:text-ivory/80">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-royal-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 text-sm text-royal-900 dark:text-ivory"
                    placeholder="Priya Ramesh"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-royal-800 dark:text-ivory/80">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-royal-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 text-sm text-royal-900 dark:text-ivory"
                    placeholder="98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-royal-800 dark:text-ivory/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="focus-ring w-full rounded-xl border border-royal-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 text-sm text-royal-900 dark:text-ivory"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
