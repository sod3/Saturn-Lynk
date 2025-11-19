import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { useTranslation } from "./hooks/useTranslation";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Stats } from "./components/Stats";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";
import { Chatbot } from "./components/Chatbot";

import ServiceDetail from "./pages/ServiceDetail";
import Clients from "./pages/Clients"; // Import the Clients page

// ---------- Helper to always scroll to top on route change ----------
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const SaturnLynkWebsite = () => {
  const { t, lang, toggleLang } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect navbar scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to home page sections
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />

      <div
        className={`min-h-screen font-sans antialiased ${
          lang === "ar" ? "font-arabic" : ""
        }`}
        dir={lang === "ar" ? "rtl" : "ltr"}
        style={{
          fontFamily:
            lang === "ar"
              ? "'Tajawal', 'Inter', sans-serif"
              : "'Inter', sans-serif",
        }}
      >
        {/* GLOBAL NAVBAR */}
        <Navbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          setShowQuoteForm={setShowQuoteForm}
          lang={lang}
          toggleLang={toggleLang}
          t={t}
        />

        {/* ROUTES */}
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero
                  setShowQuoteForm={setShowQuoteForm}
                  scrollToSection={scrollToSection}
                  t={t}
                  lang={lang}
                />

                <Services scrollToSection={scrollToSection} t={t} lang={lang} />

                <WhyChooseUs t={t} lang={lang} />

                <Stats t={t} lang={lang} />

                <CaseStudies t={t} lang={lang} />

                <Testimonials t={t} lang={lang} />

                <Contact
                  setShowQuoteForm={setShowQuoteForm}
                  t={t}
                  lang={lang}
                />

                <Footer scrollToSection={scrollToSection} t={t} lang={lang} />
              </>
            }
          />

          {/* SERVICE DETAIL PAGE */}
          <Route
            path="/service/:id"
            element={<ServiceDetail t={t} lang={lang} />}
          />

          {/* CLIENTS PAGE */}
          <Route
            path="/clients"
            element={<Clients t={t} lang={lang} />}
          />
        </Routes>

        {/* QUOTE MODAL */}
        <QuoteModal
          showQuoteForm={showQuoteForm}
          setShowQuoteForm={setShowQuoteForm}
          t={t}
          lang={lang}
        />

        {/* CHATBOT */}
        <Chatbot
          showChatbot={showChatbot}
          setShowChatbot={setShowChatbot}
          setShowQuoteForm={setShowQuoteForm}
          scrollToSection={scrollToSection}
          t={t}
          lang={lang}
        />

        {/* CHATBOT FLOATING BUTTON */}
        <motion.button
          onClick={() => setShowChatbot(!showChatbot)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-full shadow-lg hover:shadow-xl z-40 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    </Router>
  );
};

export default SaturnLynkWebsite;