import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export const Hero = ({ setShowQuoteForm, scrollToSection, t, lang }) => (
  <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    {/* Background Video */}
    <div className="absolute inset-0 z-0">
      <video 
        autoPlay 
        muted 
        loop 
        className="w-full h-full object-cover"
        style={{ opacity: 0.7 }} // Lower opacity for better text visibility
      >
        <source src="/1030.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <motion.div 
        className="absolute top-10 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-200 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm mb-4 text-sm font-medium text-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          <Star className="w-4 h-4 text-yellow-400 fill-current" /> {t('trustedBy')}
        </motion.span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
          {t('heroTitle')}<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{t('heroHighlight')}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {t('heroDesc')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            onClick={() => setShowQuoteForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-xl font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            {t('startProject')} <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('services')}
            className="px-6 py-3 bg-white/90 backdrop-blur-sm text-blue-500 rounded-xl font-semibold shadow-md hover:shadow-lg border border-blue-200 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            {t('discoverServices')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);