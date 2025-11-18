import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && ['en', 'ar'].includes(saved)) {
      setLang(saved);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('ar') || browserLang.includes('ar')) {
        setLang('ar');
      }
    }
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return { t, lang, toggleLang };
};