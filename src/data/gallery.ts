export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

const categories = [
  "Resin Art", "Name Boards", "Wedding Decor", "Wall Art", "Home Decor",
  "Gifting", "Photo Frames", "Premium Collection",
];

export const galleryItems: GalleryItem[] = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1;
  return {
    id: `gallery-${String(n).padStart(2, "0")}`,
    image: `/images/gallery/gallery-${String(n).padStart(2, "0")}.svg`,
    title: `Handcrafted Resin Piece ${n}`,
    category: categories[i % categories.length],
  };
});
