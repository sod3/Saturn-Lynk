import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

export const Testimonials = ({ t, lang }) => (
  <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-4 text-sm font-medium text-blue-600">
          <Users className="w-4 h-4" /> {t('clientVoices')}
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {t('hearFrom')}
        </h2>
        <p className="text-lg text-gray-600">
          {t('hearDesc')}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-blue-100/50"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.text[lang]}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role[lang]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);