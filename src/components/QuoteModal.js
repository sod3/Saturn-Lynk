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
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <button onClick={() => setShowQuoteForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('quoteTitle')}</h3>
          <form className="space-y-4">
            <input type="text" placeholder={t('yourName')} className="w-full p-3 border border-gray-200 rounded-lg" />
            <input type="email" placeholder={t('yourEmail')} className="w-full p-3 border border-gray-200 rounded-lg" />
            <select className="w-full p-3 border border-gray-200 rounded-lg">
              <option>{t('selectService')}</option>
              {services.map(s => <option key={s.title.en}>{s.title[lang]}</option>)}
            </select>
            <textarea placeholder={t('projectDetails')} rows={3} className="w-full p-3 border border-gray-200 rounded-lg" />
            <button type="submit" className="w-full p-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold">
              {t('submit')}
            </button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);