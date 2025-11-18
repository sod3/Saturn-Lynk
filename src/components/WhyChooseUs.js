import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const WhyChooseUs = ({ t, lang }) => {
  const points = t('points');
  return (
    <section id="whyus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-4 text-sm font-medium text-blue-600">
            <Star className="w-4 h-4" /> {t('whyChoose')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t('whyTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('whyDesc')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center mb-4 text-blue-500">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};