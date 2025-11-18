import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Contact = ({ setShowQuoteForm, t, lang }) => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
          <MessageCircle className="w-4 h-4" /> {t('getInTouch')}
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {t('buildFuture')}
        </h2>
        <p className="text-lg text-gray-600">
          {t('contactDesc')}
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
            <Phone className="w-6 h-6 text-blue-500" />
            <span>{t('phone')}</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
            <Mail className="w-6 h-6 text-blue-500" />
            <span>{t('email')}</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span>{t('location')}</span>
          </div>
          <a 
            href="https://wa.me/966XXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all"
          >
            {t('chatWhatsApp')} <MessageCircle className="w-5 h-5" />
          </a>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder={t('yourName')} className="w-full p-4 border border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all" />
          <input type="email" placeholder={t('yourEmail')} className="w-full p-4 border border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all" />
          <input type="tel" placeholder={t('yourPhone')} className="w-full p-4 border border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all" />
          <textarea placeholder={t('yourMessage')} rows={4} className="w-full p-4 border border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all" />
          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-xl font-semibold hover:shadow-md transition-all">
            {t('sendMessage')}
          </button>
        </form>
      </div>
    </div>
  </section>
);