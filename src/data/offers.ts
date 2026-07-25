// Edit or add offers here. `endsInDays` drives the countdown timer on the Offers page.
export interface Offer {
  id: string;
  title: string;
  badge: string;
  description: string;
  discount: string;
  image: string;
  endsInDays: number;
}

export const offers: Offer[] = [
  {
    id: "festival-offer",
    title: "Festival Special",
    badge: "Festival Offer",
    description: "Celebrate the season with 20% off on all resin name boards and wall decor pieces.",
    discount: "Flat 20% OFF",
    image: "/images/offers/festival-offer.svg",
    endsInDays: 12,
  },
  {
    id: "todays-offer",
    title: "Today's Special",
    badge: "Today's Offer",
    description: "Order today and get a complimentary resin keychain with any purchase above ₹1500.",
    discount: "Free Keychain",
    image: "/images/offers/todays-offer.svg",
    endsInDays: 1,
  },
  {
    id: "new-arrival",
    title: "Fresh From the Studio",
    badge: "New Arrival",
    description: "Our new Geode Slice Wall Hanging collection has just landed — limited pieces available.",
    discount: "Just Launched",
    image: "/images/offers/new-arrival.svg",
    endsInDays: 20,
  },
  {
    id: "premium-collection",
    title: "Premium Collection",
    badge: "Premium Collection",
    description: "Explore our gold-leaf finished premium pieces, crafted for those who love the extraordinary.",
    discount: "Handpicked Luxury",
    image: "/images/offers/premium-collection.svg",
    endsInDays: 30,
  },
  {
    id: "wedding-collection",
    title: "Wedding Season Edit",
    badge: "Wedding Collection",
    description: "Personalised wedding keepsakes and couple name boards — book early for wedding season.",
    discount: "Up to 15% OFF",
    image: "/images/offers/wedding-collection.svg",
    endsInDays: 25,
  },
  {
    id: "anniversary-collection",
    title: "Anniversary Edit",
    badge: "Anniversary Collection",
    description: "Mark your milestone with a custom date-art piece, poured just for your story.",
    discount: "Free Personalisation",
    image: "/images/offers/anniversary-collection.svg",
    endsInDays: 18,
  },
  {
    id: "birthday-collection",
    title: "Birthday Edit",
    badge: "Birthday Collection",
    description: "Zodiac art, cake toppers and milestone numbers — birthday gifting made memorable.",
    discount: "10% OFF",
    image: "/images/offers/birthday-collection.svg",
    endsInDays: 9,
  },
  {
    id: "limited-time-offer",
    title: "Trending Now",
    badge: "Trending Product",
    description: "The Ocean Wave Resin Wall Art is our most-loved piece this month — grab yours before it's gone.",
    discount: "Limited Stock",
    image: "/images/offers/limited-time-offer.svg",
    endsInDays: 6,
  },
];
