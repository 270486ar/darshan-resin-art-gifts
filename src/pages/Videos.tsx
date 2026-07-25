import { FaYoutube, FaInstagram } from "react-icons/fa";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { videos } from "../data/videos";
import { business } from "../data/business";

export default function Videos() {
  return (
    <>
      <SEO
        title="Videos"
        description="Watch behind-the-scenes videos of our resin art process, straight from the Darshan Resin Art & Gifts YouTube channel."
        path="/videos"
      />
      <PageHero
        eyebrow="Behind The Scenes"
        title="Watch Us Create"
        description="From pouring resin to the final polish — see how each handcrafted piece comes to life."
        image="/images/hero/hero-01.svg"
      />

      <section className="container-xl py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <ScrollReveal key={v.id} delay={(i % 6) * 0.08} className="glass rounded-3xl overflow-hidden">
              <div className="aspect-[9/16] w-full max-h-[480px] bg-charcoal">
                <iframe
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-royal-900 dark:text-ivory">{v.title}</h3>
                <p className="mt-1 text-sm text-royal-700/70 dark:text-ivory/60">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <FaYoutube className="mx-auto text-red-600" size={40} />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-royal-900 dark:text-ivory">
            Follow Along for More
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-royal-700/70 dark:text-ivory/60">
            Subscribe on YouTube and follow us on Instagram for new process videos, launches, and behind-the-scenes
            moments from the {business.shortName} studio.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <FaYoutube size={18} /> Subscribe on YouTube
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaInstagram size={18} /> Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
