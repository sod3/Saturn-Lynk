import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { services } from '../data/servicesData';

export const QuoteModal = ({ showQuoteForm, setShowQuoteForm, t, lang }) => (
  <AnimatePresence>
    {showQuoteForm && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="relative">
          {/* Close Button - Positioned outside the modal */}
          <button 
            onClick={() => setShowQuoteForm(false)} 
            className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
          >
            <X size={20} className="text-gray-600" />
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('quoteTitle')}</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder={t('yourName')} 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
              />
              <input 
                type="email" 
                placeholder={t('yourEmail')} 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
              />
              <select 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>{t('selectService')}</option>
                {services.map(s => <option key={s.title.en}>{s.title[lang]}</option>)}
              </select>
              <textarea 
                placeholder={t('projectDetails')} 
                rows={3} 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
              />
              <button 
                type="submit" 
                className="w-full p-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t('submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);