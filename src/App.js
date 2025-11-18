import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Chatbot } from './components/Chatbot';

const SaturnLynkWebsite = () => {
  const { t, lang, toggleLang } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans antialiased ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: lang === 'ar' ? "'Tajawal', 'Inter', sans-serif" : "'Inter', sans-serif" }}>
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
      <Hero 
        setShowQuoteForm={setShowQuoteForm} 
        scrollToSection={scrollToSection} 
        t={t} 
        lang={lang} 
      />
      <Services 
        scrollToSection={scrollToSection} 
        t={t} 
        lang={lang} 
      />
      <WhyChooseUs 
        t={t} 
        lang={lang} 
      />
      <Stats 
        t={t} 
        lang={lang} 
      />
      <CaseStudies 
        t={t} 
        lang={lang} 
      />
      <Testimonials 
        t={t} 
        lang={lang} 
      />
      <Contact 
        setShowQuoteForm={setShowQuoteForm} 
        t={t} 
        lang={lang} 
      />
      <Footer 
        scrollToSection={scrollToSection} 
        t={t} 
        lang={lang} 
      />
      <QuoteModal 
        showQuoteForm={showQuoteForm} 
        setShowQuoteForm={setShowQuoteForm} 
        t={t} 
        lang={lang} 
      />
      <Chatbot 
        showChatbot={showChatbot} 
        setShowChatbot={setShowChatbot} 
        setShowQuoteForm={setShowQuoteForm} 
        scrollToSection={scrollToSection} 
        t={t} 
        lang={lang} 
      />
      <motion.button 
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-full shadow-lg hover:shadow-xl z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default SaturnLynkWebsite;