// src/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import { ThreeFeatureIcon } from './ThreeFeatureIcon';

export const WhyChooseUs = ({ t, lang }) => {
  const points = t('points', {
    returnObjects: true,
    defaultValue: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "24/7 Support",
        desc: "Round-the-clock technical support and maintenance"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Quality Assurance",
        desc: "Rigorous testing and quality control processes"
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Proven Results",
        desc: "Track record of successful project delivery"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Client Focused",
        desc: "Custom solutions tailored to your specific needs"
      }
    ]
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0 30px 60px rgba(173, 216, 255, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="whyus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-20 right-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            y: [0, -20, 0],
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-50 h-50 bg-blue-400/10 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            y: [0, -25, 0],
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-30 h-30 bg-blue-500/10 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            y: [0, -10, 0],
            transition: { ...floatingAnimation.transition, delay: 3 }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-6 text-sm font-semibold text-blue-600 border border-blue-100"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(173, 216, 255, 0.3)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <Star className="w-5 h-5" />
            </motion.div>
            {t('whyChoose') || "Why Choose Us"}
          </motion.span>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {t('whyTitle') || "Why Choose Our Solutions"}
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {t('whyDesc') || "We deliver exceptional value through innovative solutions and unparalleled service quality"}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-blue-100/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover="hover"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(173,216,255,0.1) 100%)'
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/30 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-md" />
              <div className="absolute inset-[1px] rounded-3xl bg-white -z-10" />

              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-xl"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <ThreeFeatureIcon 
                    iconType={point.title.toLowerCase().replace(/\s+/g, '-')}
                    className="w-8 h-8"
                  />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300"
                  whileHover={{ x: lang === 'ar' ? -2 : 2 }}
                >
                  {point.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  whileHover={{ x: lang === 'ar' ? -1 : 1 }}
                >
                  {point.desc}
                </motion.p>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-400/20 rounded-full blur-sm group-hover:bg-blue-400/40 transition-colors duration-300"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                />
                <motion.div 
                  className="absolute -top-2 -left-2 w-6 h-6 bg-blue-600/20 rounded-full blur-sm group-hover:bg-blue-600/40 transition-colors duration-300"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.7 }}
                />
              </div>

              {/* Sequential number indicator */}
              <motion.div 
                className="absolute top-4 right-4 text-blue-600/20 text-6xl font-black select-none group-hover:text-blue-600/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.5 }}
              >
                {(idx + 1).toString().padStart(2, '0')}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-blue-100"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(173, 216, 255, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star className="w-6 h-6 text-blue-600" />
            </motion.div>
            <span className="text-lg font-semibold text-gray-700">
              {lang === 'ar' ? 'جودة لا مثيل لها منذ 2010' : 'Unmatched Quality Since 2010'}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};