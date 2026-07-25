// Customer reviews. Add new ones at the top — the newest reviews show first.
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number; // 1-5
  review: string;
  avatar: string;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Ramesh",
    location: "Puducherry",
    rating: 5,
    review:
      "The name board they made for our new home is stunning — the gold veining looks even better in person. Delivered right on time too!",
    avatar: "/images/testimonials/avatar-01.svg",
    product: "Royal Gold Resin Name Board",
  },
  {
    id: "t2",
    name: "Karthik Iyer",
    location: "Chennai",
    rating: 5,
    review:
      "Ordered a wedding keepsake for my sister and the detailing was beyond what I expected. Truly premium handcrafted work.",
    avatar: "/images/testimonials/avatar-02.svg",
    product: "Bride & Groom Resin Keepsake",
  },
  {
    id: "t3",
    name: "Sneha Menon",
    location: "Villianur",
    rating: 5,
    review:
      "The baby handprint keepsake made me emotional the moment I opened the box. Such a beautiful way to preserve a memory.",
    avatar: "/images/testimonials/avatar-03.svg",
    product: "Baby Handprint Resin Keepsake",
  },
  {
    id: "t4",
    name: "Arun Prakash",
    location: "Puducherry",
    rating: 4,
    review:
      "Great quality resin clock, packaging was very secure for shipping. Communication over WhatsApp was quick and friendly.",
    avatar: "/images/testimonials/avatar-04.svg",
    product: "Resin Wall Clock",
  },
  {
    id: "t5",
    name: "Divya Suresh",
    location: "Bengaluru",
    rating: 5,
    review:
      "Bought the anniversary date art for my parents' 25th anniversary — they loved it so much they cried. Thank you for this!",
    avatar: "/images/testimonials/avatar-05.svg",
    product: "Anniversary Date Resin Art",
  },
  {
    id: "t6",
    name: "Vignesh Kumar",
    location: "Puducherry",
    rating: 5,
    review:
      "Ordered corporate trophies for our office event and every single one was perfect and identical. Highly professional.",
    avatar: "/images/testimonials/avatar-06.svg",
    product: "Corporate Logo Resin Trophy",
  },
  {
    id: "t7",
    name: "Meera Nair",
    location: "Coimbatore",
    rating: 5,
    review:
      "The floral keychains are gorgeous — ordered ten of them as return gifts and everyone at the party asked where I got them.",
    avatar: "/images/testimonials/avatar-07.svg",
    product: "Floral Resin Keychain",
  },
  {
    id: "t8",
    name: "Rahul Dev",
    location: "Villianur",
    rating: 4,
    review:
      "Very reasonably priced for the amount of detail and craftsmanship that goes into each piece. Will definitely order again.",
    avatar: "/images/testimonials/avatar-08.svg",
    product: "Executive Desk Nameplate",
  },
];
