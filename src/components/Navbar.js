import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  setShowQuoteForm,
  lang,
  toggleLang,
  t
}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection("home"), 100);
    } else {
      scrollToSection("home");
    }
  };

  const handleNavigation = (item) => {
    const sectionId = item === 'الرئيسية'
      ? 'home'
      : item.toLowerCase().replace(/ /g, '');

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleClientsNavigation = () => {
    if (location.pathname === "/clients") {
      // If already on clients page, close menu
      setIsMenuOpen(false);
    } else {
      // Navigate to clients page
      navigate("/clients");
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* LOGO → ALWAYS GO HOME */}
          <button onClick={goHome} className="flex items-center gap-2 group cursor-pointer">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-10 h-10" src="/logo.webp" alt="Saturn Lynk Logo" />
            </motion.div>
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {t("nav").map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="px-4 py-2 text-gray-700 hover:text-blue-500 font-medium transition-all rounded-lg hover:bg-blue-50/50"
              >
                {item}
              </button>
            ))}
            {/* Clients Page Link */}
            <button
              onClick={handleClientsNavigation}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 font-medium transition-all rounded-lg hover:bg-blue-50/50"
            >
              {t("clients")} {/* Fixed: changed from "Clients" to "clients" */}
            </button>
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
            <button
              onClick={() => setShowQuoteForm(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold hover:shadow-md transition-all duration-300 flex items-center gap-1.5"
            >
              {t("freeConsultation")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
            <button className="p-1 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <nav className="px-4 py-4 space-y-2">
              {t("nav").map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleNavigation(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium"
                >
                  {item}
                </button>
              ))}
              {/* Clients Page Link - Mobile */}
              <button
                onClick={handleClientsNavigation}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium"
              >
                {t("clients")} {/* This one was already correct */}
              </button>
              <button
                onClick={() => {
                  setShowQuoteForm(true);
                  setIsMenuOpen(false);
                }}
                className="w-full mt-3 px-5 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold shadow-sm"
              >
                {t("freeConsultation")}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};