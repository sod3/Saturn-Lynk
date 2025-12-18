import { motion } from 'framer-motion';
import {
  Globe,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Clock,
  Building
} from 'lucide-react';

export const Footer = ({ scrollToSection, t, lang = 'en' }) => {
  const currentYear = new Date().getFullYear();
  const rtl = lang === "ar";

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Arabic translations for page links
  const getPageLabel = (page) => {
    const translations = {
      'Home': { en: 'Home', ar: 'الرئيسية' },
      'Services': { en: 'Services', ar: 'خدماتنا' },
      'Why Us': { en: 'Why Us', ar: 'لماذا نحن' },
      'Contact': { en: 'Contact', ar: 'تواصل معنا' }
    };
    return translations[page]?.[lang] || page;
  };

  const footerLinks = {
    company: [
      { label: getPageLabel('Home'), action: () => scrollToSection('home') },
      { label: getPageLabel('Services'), action: () => scrollToSection('services') },
      { label: getPageLabel('Why Us'), action: () => scrollToSection('whyus') },
      { label: getPageLabel('Contact'), action: () => scrollToSection('contact') }
    ],
    social: [
      { icon: Facebook, label: 'Facebook', href: '#' },
      { icon: Twitter, label: 'Twitter', href: '#' },
      { icon: Instagram, label: 'Instagram', href: '#' },
      { icon: Linkedin, label: 'LinkedIn', href: '#' }
    ]
  };

  // Arabic translations for working hours and office info
  const workingHours = {
    weekdays: rtl ? "الأحد إلى الخميس: ٨ صباحًا إلى ٦ مساءً" : "Sunday to Thursday: 8am to 6pm",
    offdays: rtl ? "الجمعة والسبت: إجازة" : "Friday and Saturday: Off"
  };

  const officeInfo = {
    address: rtl ? "مبنى إعمار-سي 2899، حي الفيحاء، جدة 22241" : "Emaar Building-C 2899, Al Faiha District, Jeddah 22241"
  };

  // Arabic translations for headings
  const getHeading = (key) => {
    const headings = {
      'Company': { en: 'Company', ar: 'الشركة' },
      'Working Hours': { en: 'Working Hours', ar: 'ساعات العمل' },
      'Our Office': { en: 'Our Office', ar: 'مكتبنا' },
      'Connect With Us': { en: 'Connect With Us', ar: 'تواصل معنا' }
    };
    return headings[key]?.[lang] || key;
  };

  return (
    <footer
      className="relative overflow-hidden bg-[#05080f] text-gray-300 pt-24 pb-16 px-6"
      dir={rtl ? "rtl" : "ltr"}
    >

      {/* ★ LUXURY ANIMATED BACKGROUND GRID ★ */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.1]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ★ FLOATING ORBS — PREMIUM EFFECT */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[160px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ★ TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* ★ BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <img className="w-18 h-14" src="/logo.webp" alt="Saturn Lynk Logo" />
              <h3 className="text-2xl font-black text-white tracking-wide">
                Saturn Lynk
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              {rtl
                ? "نبتكر حلولًا رقمية مستقبلية تساعدك على النمو بسرعة وثقة."
                : "We innovate digital experiences that help your business grow with speed and confidence."}
            </p>

            {/* CONTACT */}
            <div className="space-y-3">
              {[{
                icon: Phone,
                text: "+966 55 125 4121",
                href: "tel:+966551254121"
              },
              {
                icon: Mail,
                text: "info@saturnlynk.sa",
                href: "mailto:info@saturnlynk.sa"
              },
              {
                icon: MapPin,
                text: rtl ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia",
                href: "#"
              }].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: rtl ? -6 : 6 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#3EA6FF] transition"
                >
                  <item.icon className="w-4 h-4" />
                  <span dir={(rtl && (item.icon === Phone || item.icon === Mail)) ? 'ltr' : undefined}>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ★ COMPANY LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h4 className="text-white text-lg font-bold mb-6">
              {getHeading('Company')}
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: rtl ? -5 : 5 }}
                >
                  <button className="text-gray-400 hover:text-[#3EA6FF] transition" onClick={link.action}>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ★ WORKING HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {getHeading('Working Hours')}
            </h4>
            
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: rtl ? -5 : 5 }}
                className="flex flex-col"
              >
                <span className="text-gray-400">{workingHours.weekdays}</span>
              </motion.li>
              
              <motion.li 
                whileHover={{ x: rtl ? -5 : 5 }}
                className="flex flex-col"
              >
                <span className="text-gray-400">{workingHours.offdays}</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* ★ OUR OFFICE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <Building className="w-5 h-5" />
              {getHeading('Our Office')}
            </h4>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: rtl ? -5 : 5 }}
                className="text-gray-400 leading-relaxed"
              >
                <p className="text-sm">{officeInfo.address}</p>
              </motion.div>
              
              <div className="pt-2">
                <h5 className="text-white text-sm font-semibold mb-3">
                  {getHeading('Connect With Us')}
                </h5>
                
                <div className="flex gap-3 mb-6">
                  {footerLinks.social.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={i}
                        href={s.href}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-[#3EA6FF] hover:text-white transition shadow-[0_0_15px_#3EA6FF40]"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.07, y: -3 }}
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#3EA6FF] to-cyan-400 text-white font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <ArrowUp className="w-5 h-5" />
                  {rtl ? "العودة للأعلى" : "Back to Top"}
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ★ BOTTOM SECTION */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {currentYear} Saturn Lynk - {rtl ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            {rtl ? "صنع بـ" : "Made with"}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="text-red-500 fill-current w-4 h-4" />
            </motion.span>
            {rtl ? "في المملكة العربية السعودية" : "in Saudi Arabia"}
          </p>

        </div>
      </div>

      {/* ★ GLOW LINE */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3EA6FF] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      />
    </footer>
  );
};