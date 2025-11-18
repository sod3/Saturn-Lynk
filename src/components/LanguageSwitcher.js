import { Languages } from 'lucide-react';

export const LanguageSwitcher = ({ lang, toggleLang }) => (
  <button
    onClick={toggleLang}
    className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
  >
    <Languages className="w-4 h-4" />
    <span>{lang === 'en' ? 'EN' : 'العربية'}</span>
  </button>
);