import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { business } from "../data/business";
import { useThemeContext } from "../hooks/ThemeContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/offers", label: "Offers" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-xl">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2 group focus-ring rounded-lg" aria-label={`${business.name} home`}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo/logo.svg`}
              alt={`${business.name} logo`}
              className="h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105"
              width={44}
              height={44}
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-lg text-royal-900 dark:text-gold-200">
                {business.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400">
                &amp; Gifts
              </span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `focus-ring relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-royal-600 dark:bg-gold-500 dark:text-charcoal"
                      : "text-royal-800 dark:text-ivory/90 hover:bg-royal-100/70 dark:hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/50 dark:bg-white/10 text-royal-800 dark:text-gold-300 hover:scale-105 transition-transform"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <NavLink
              to="/products"
              className="hidden sm:inline-flex btn-gold !py-2 !px-4 text-sm"
            >
              <Sparkles size={16} /> Shop Now
            </NavLink>

            <button
              type="button"
              className="focus-ring lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/50 dark:bg-white/10 text-royal-800 dark:text-gold-300"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden glass mt-2 rounded-2xl overflow-hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col p-3 gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `focus-ring rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-royal-600 text-white dark:bg-gold-500 dark:text-charcoal"
                          : "text-royal-800 dark:text-ivory/90 hover:bg-royal-100/70 dark:hover:bg-white/10"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
