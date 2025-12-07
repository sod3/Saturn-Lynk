import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Star, Clock, TrendingUp, Award } from 'lucide-react';
import { useRef } from 'react';

export const Stats = ({ t, lang = 'en' }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Sample stats data
  const stats = [
    { number: "1000", suffix: "+", label: "Happy Clients", icon: Users, color: "from-blue-500 to-cyan-400" },
    { number: "98", suffix: "%", label: "Satisfaction Rate", icon: Heart, color: "from-green-500 to-emerald-400" },
    { number: "4.9", suffix: "/5", label: "Average Rating", icon: Star, color: "from-amber-500 to-yellow-400" },
    { number: "24", suffix: "/7", label: "Support Available", icon: Clock, color: "from-purple-500 to-pink-400" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounters(stats.map((stat) => {
        const target = parseFloat(stat.number);
        const progress = currentStep / steps;
        return Math.min(target * progress, target);
      }));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(stats.map(stat => parseFloat(stat.number)));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#3EA6FF] via-blue-500 to-cyan-400"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            const displayValue = stat.number.includes('.') 
              ? counters[idx].toFixed(1) 
              : Math.floor(counters[idx]);

            return (
              <motion.div 
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Glassmorphism Card */}
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Animated Number */}
                  <motion.div 
                    className="text-5xl font-black text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {displayValue}
                    <span className="text-4xl">{stat.suffix}</span>
                  </motion.div>

                  {/* Label */}
                  <p className="font-semibold text-white/90 text-lg">
                    {stat.label}
                  </p>

                  {/* Decorative Dots */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-white/30 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 to-white/30 rounded-b-3xl"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: idx * 0.15 + 0.5, duration: 1 }}
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: idx * 0.15 + 0.7, type: "spring" }}
                >
                  <Award className="w-4 h-4 text-[#3EA6FF]" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-white text-xl font-semibold flex items-center justify-center gap-3">
            <TrendingUp className="w-6 h-6" />
            {lang === 'ar' ? 'نمو مستمر وثقة متزايدة' : 'Continuous Growth & Increasing Trust'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};