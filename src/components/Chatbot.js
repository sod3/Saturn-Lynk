import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export const Chatbot = ({ showChatbot, setShowChatbot, setShowQuoteForm, scrollToSection, t, lang }) => (
  <AnimatePresence>
    {showChatbot && (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-20 right-4 bg-white rounded-2xl shadow-xl w-80 z-40 overflow-hidden"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="bg-gradient-to-r from-blue-400 to-cyan-300 p-4 text-white flex justify-between">
          <h4 className="font-bold">{t('liveSupport')}</h4>
          <button onClick={() => setShowChatbot(false)}><X size={20} /></button>
        </div>
        <div className="p-4 space-y-3">
          <p className="text-gray-600">{t('howAssist')}</p>
          <button onClick={() => setShowQuoteForm(true)} className="w-full p-2 bg-blue-50 rounded-lg hover:bg-blue-100">{t('requestQuote')}</button>
          <button onClick={() => scrollToSection('services')} className="w-full p-2 bg-blue-50 rounded-lg hover:bg-blue-100">{t('viewServices')}</button>
          <a href="https://wa.me/966XXXXXXXXX" className="w-full p-2 bg-green-50 rounded-lg hover:bg-green-100 block text-center">{t('chatOnWA')}</a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);