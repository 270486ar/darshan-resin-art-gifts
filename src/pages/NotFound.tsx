import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Sparkles } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
        <img
          src="/images/hero/hero-05.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container-xl relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-[7rem] sm:text-[10rem] font-bold leading-none text-gradient-gold">
              404
            </span>
            <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-royal-900 dark:text-ivory">
              This Page Poured Away
            </h1>
            <p className="mx-auto mt-4 max-w-md text-royal-700/70 dark:text-ivory/60">
              We couldn't find the page you were looking for. Let's get you back to something beautiful.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-gold">
                <Home size={18} /> Back Home
              </Link>
              <Link to="/products" className="btn-outline">
                <Sparkles size={18} /> Shop Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
