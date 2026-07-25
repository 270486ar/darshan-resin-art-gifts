import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ScrollToTopButton from "./ScrollToTopButton";
import ScrollToTopOnNavigate from "./ScrollToTopOnNavigate";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-luxury-radial bg-fixed">
      <ScrollToTopOnNavigate />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTopButton />
    </div>
  );
}
