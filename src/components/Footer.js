import { Globe } from 'lucide-react';

export const Footer = ({ scrollToSection, t, lang }) => (
  <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center">
              <img className="w-15 h-15" src="/logo.webp" alt="Saturn Lynk Logo" />
          </div>
          <span className="text-lg font-bold text-white">Saturn Lynk</span>
        </div>
        <p className="mb-4">{t('footerDesc')}</p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">{t('links')}</h4>
        {['Home', 'Services', 'Why Us', 'Contact'].map(item => (
          <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} className="block hover:text-blue-400 transition-all">
            {t('nav').find(nav => nav.toLowerCase().includes(item.toLowerCase())) || item}
          </button>
        ))}
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">{t('servicesFooter')}</h4>
        <p className="hover:text-blue-400 transition-all">{t('networkInfra')}</p>
        <p className="hover:text-blue-400 transition-all">{t('fiberOptics')}</p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">{t('contactFooter')}</h4>
        <p>{t('phone')}</p>
        <p>{t('email')}</p>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">{t('copyright')}</div>
  </footer>
);