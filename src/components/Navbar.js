import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection, setShowQuoteForm, lang, toggleLang, t }) => (
  <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl' : 'bg-white/80 backdrop-blur-md'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Globe className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Saturn Lynk</span>
        </button>

        <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
          {t('nav').map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'الرئيسية' ? 'home' : item.toLowerCase().replace(/ /g, ''))}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 font-medium transition-all rounded-lg hover:bg-blue-50/50"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
          <button onClick={() => setShowQuoteForm(true)} className="px-5 py-2.5 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold hover:shadow-md transition-all duration-300 flex items-center gap-1.5">
            {t('freeConsultation')} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
          <button className="p-1 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <nav className="px-4 py-4 space-y-2">
            {t('nav').map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'الرئيسية' ? 'home' : item.toLowerCase().replace(/ /g, ''))}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium"
              >
                {item}
              </button>
            ))}
            <button onClick={() => setShowQuoteForm(true)} className="w-full mt-3 px-5 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold shadow-sm">
              {t('freeConsultation')}
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
);