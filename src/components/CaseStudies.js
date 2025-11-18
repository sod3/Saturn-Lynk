import { motion } from 'framer-motion';
import { Award, ArrowRight, Database, Cloud, Monitor } from 'lucide-react';

export const CaseStudies = ({ t, lang }) => {
  const cases = [
    { title: { en: "Saudi Bank Network Upgrade", ar: "ترقية شبكة بنك سعودي" }, desc: { en: "Enhanced security and speed for 50+ branches.", ar: "تعزيز الأمان والسرعة لأكثر من 50 فرعًا." }, icon: <Database /> },
    { title: { en: "Government Data Center", ar: "مركز بيانات حكومي" }, desc: { en: "Scalable infrastructure for national services.", ar: "بنية تحتية قابلة للتوسع للخدمات الوطنية." }, icon: <Cloud /> },
    { title: { en: "Healthcare Connectivity", ar: "اتصال الرعاية الصحية" }, desc: { en: "Reliable systems for critical patient data.", ar: "أنظمة موثوقة لبيانات المرضى الحرجة." }, icon: <Monitor /> },
  ];
  return (
    <section id="casestudies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
            <Award className="w-4 h-4" /> {t('caseStudies')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t('caseTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('caseDesc')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-100/50 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-12 h-12 bg-cyan-300/20 rounded-lg flex items-center justify-center mb-4 text-cyan-500">
                {caseStudy.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title[lang]}</h3>
              <p className="text-gray-600 mb-4">{caseStudy.desc[lang]}</p>
              <button className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                {t('viewDetails')} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};