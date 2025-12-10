// Hero.js
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

export const Hero = ({ setShowQuoteForm, scrollToSection, t, lang }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.1]);
  
  // Define service labels based on language
  const serviceLabels = [
    { 
      icon: "🌐", 
      label: lang === 'ar' ? 'تطوير ويب' : 'Web Dev',
      x: -125, 
      y: -20 
    },
    { 
      icon: "📱", 
      label: lang === 'ar' ? 'موبايل' : 'Mobile',
      x: 130, 
      y: -10 
    },
    { 
      icon: "⚡", 
      label: lang === 'ar' ? 'إنترنت' : 'Internet',
      x: -70, 
      y: 95 
    },
    { 
      icon: "🔗", 
      label: lang === 'ar' ? 'شبكات' : 'Networking',
      x: 70, 
      y: 95 
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-visible bg-gradient-to-br from-[#EAF6FF] via-white to-[#CFE8FF]"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#3EA6FF]/30 to-[#CFE8FF]/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#3EA6FF]/20 to-blue-300/30 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-300/20 to-[#CFE8FF]/30 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-[#3EA6FF]/30 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-[#3EA6FF]/20 to-cyan-400/20 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo for Identity */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-48 h-48 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.07,
                rotateY: 12,
                rotateX: 6,
                transition: { duration: 0.4 }
              }}
            >
              {/* MAIN LOGO */}
              <img
                src="/logo.png"
                alt="Saturn Lynk"
                className="w-42 h-40 relative z-20"
                draggable="false"
              />

              {/* Glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-300/30 blur-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* ORBITING SERVICE ICONS */}
              {serviceLabels.map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center select-none"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                  style={{ x: item.x, y: item.y }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 6,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    whileHover={{
                      rotate: [0, 360],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                    className="text-3xl bg-white shadow-lg rounded-full p-3 border border-cyan-300/40"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-xs mt-2 text-gray-700 font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            {/* EXPLORE MORE SIDE BRANCH (Right Side) */}
<motion.div
  className="absolute flex flex-col items-center cursor-pointer"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1.4, duration: 0.6 }}
  style={{ x: 170, y: 170 }} // branch position (right side)
  onClick={() => (window.location.href = "/all-services")}
  whileHover={{
    scale: 1.15,
    rotate: 2,
    transition: { duration: 0.3 }
  }}
>
  {/* Branch line */}
  <motion.div
    className="w-12 h-1 rounded-full"
    animate={{ width: [40, 55, 40] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Explore Bubble */}
  <motion.div
    className="mt-2 bg-white rounded-full px-4 py-1 shadow-md border border-cyan-200/50 text-sm font-semibold text-gray-700 whitespace-nowrap"
    animate={{ opacity: [0.7, 1, 0.7] }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    {lang === "ar" ? "استكشف المزيد" : "Explore More"}
  </motion.div>
</motion.div>
          </motion.div>
          {/* Premium Badge */}
          <motion.span
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-8 text-sm font-semibold text-[#3EA6FF] border border-[#CFE8FF]/50"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.4
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(62, 166, 255, 0.2)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span>{t('trustedBy')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </motion.div>
          </motion.span>
         
          {/* Main Heading with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl font-black mb-8 leading-normal">
              <motion.span
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {t('heroTitle')}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#3EA6FF] via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {t('heroHighlight')}
              </motion.span>
            </h1>
          </motion.div>
         
          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {t('heroDesc')}
          </motion.p>
         
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowQuoteForm(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#3EA6FF] to-cyan-400 text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(62, 166, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {t('startProject')}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-white/90 backdrop-blur-md text-[#3EA6FF] rounded-2xl font-bold text-lg shadow-lg border-2 border-[#CFE8FF] hover:border-[#3EA6FF] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                {t('discoverServices')}
                <Zap className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
          
          {/* Floating Stats/Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { value: "1000+", label: t('happyClients') || "Happy Clients" },
              { value: "98%", label: t('satisfactionRate') || "Satisfaction" },
              { value: "24/7", label: t('support') || "Support" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-black bg-gradient-to-r from-[#3EA6FF] to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#3EA6FF] rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#3EA6FF] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};