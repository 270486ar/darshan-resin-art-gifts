import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import GalleryMasonry from "../components/GalleryMasonry";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse our gallery of handcrafted resin art — name boards, wedding decor, wall art and premium collection pieces from Darshan Resin Art & Gifts."
        path="/gallery"
      />
      <PageHero
        eyebrow="Visual Journal"
        title="Our Resin Art Gallery"
        description="A closer look at the textures, colours and craftsmanship behind every piece. Tap any image to zoom in."
        image=`${import.meta.env.BASE_URL}images/hero/hero-05.svg'
      />
      <section className="container-xl py-16 sm:py-20">
        <GalleryMasonry items={galleryItems} />
      </section>
    </>
  );
}
