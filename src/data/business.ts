// =========================================================================
// BUSINESS CONFIGURATION
// This is the ONLY file most owners need to touch to rebrand the site.
// Update the name, contact details, social links, and hours below —
// every page reads from this single source of truth.
// =========================================================================

export const business = {
  name: "Darshan Resin Art & Gifts",
  shortName: "Darshan Resin Art",
  tagline: "Handcrafted Gifts That Create Lasting Memories",
  description:
    "Darshan Resin Art & Gifts crafts premium, personalised resin art and handmade gifts in Villianur, Puducherry — from name boards to wedding keepsakes, made with love, resin and gold leaf.",

  location: {
    addressLine: "Villianur, Puducherry, India",
    city: "Puducherry",
    area: "Villianur",
    pincode: "605110",
    mapEmbedQuery: "Villianur, Puducherry, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Villianur+Puducherry+India",
  },

  contact: {
    whatsappNumber: "919566555389", // no + or spaces, used for wa.me links
    whatsappDisplay: "+91 95665 55389",
    phoneNumber: "+919566555389",
    email: "hello@darshanresinart.example",
  },

  social: {
    instagram: "https://www.instagram.com/pondy_resin_art_gifts/",
    youtube: "https://www.youtube.com/@pondyresinart",
    facebook: "", // no Facebook page yet
  },

  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "11:00 AM – 5:00 PM" },
  ],

  founderNote:
    "Every piece that leaves our little Villianur studio is poured, layered and polished by hand — no two are ever exactly alike, just like the memories they're made to hold.",
};

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${business.contact.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildProductEnquiryLink(productName: string) {
  return buildWhatsAppLink(
    `Hi Darshan Resin Art & Gifts! I'm interested in "${productName}". Could you share more details and pricing?`
  );
}
