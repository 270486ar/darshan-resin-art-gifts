export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "How do I place an order?",
    answer:
      "Simply browse our Products page, tap the WhatsApp Enquiry button on the item you like, and our team will confirm customisation details, price and delivery timelines with you directly on WhatsApp.",
  },
  {
    id: "f2",
    question: "Can I personalise a product with my own name, date, or photo?",
    answer:
      "Yes! Most of our resin art pieces — name boards, photo frames, anniversary art and keepsakes — can be personalised. Just share the details you'd like included when you message us on WhatsApp.",
  },
  {
    id: "f3",
    question: "How long does it take to craft and deliver an order?",
    answer:
      "Handcrafted pieces typically take 5–10 working days to create, depending on customisation and order volume. Delivery across India generally takes an additional 3–7 working days.",
  },
  {
    id: "f4",
    question: "Do you ship outside Puducherry?",
    answer:
      "Yes, we ship pan-India through trusted courier partners with secure, cushioned packaging to make sure your resin art arrives safely.",
  },
  {
    id: "f5",
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer, and major payment apps. Payment details are shared once your order and customisation are confirmed over WhatsApp.",
  },
  {
    id: "f6",
    question: "Can I visit your studio in Villianur?",
    answer:
      "Absolutely — we'd love to have you visit. Please message us on WhatsApp beforehand to make sure someone is available to welcome you and show you our latest pieces.",
  },
  {
    id: "f7",
    question: "Do you offer bulk or corporate gifting options?",
    answer:
      "Yes, we regularly craft bulk orders for weddings, corporate events and return gifts. Reach out with your quantity and timeline and we'll share a custom quote.",
  },
  {
    id: "f8",
    question: "How do I care for my resin art piece?",
    answer:
      "Wipe gently with a soft, dry or slightly damp cloth. Avoid prolonged direct sunlight and harsh chemical cleaners to keep the gloss and colours looking fresh for years.",
  },
  {
    id: "f9",
    question: "What if my order arrives damaged?",
    answer:
      "We package every piece carefully, but if anything arrives damaged, message us within 48 hours with photos and we'll arrange a replacement or resolution.",
  },
];
