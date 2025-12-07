import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Typing Animation Logic
const TypingText = ({ text }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="border-r-4 border-[#3EA6FF] whitespace-nowrap overflow-hidden inline-block"
    >
      {text}
    </motion.span>
  );
};

const services = [
  {
    title: { en: "Web Development", ar: "تطوير المواقع" },
    description: { en: "Custom websites built with modern technologies", ar: "مواقع مخصصة بأحدث التقنيات" },
    gradient: "from-blue-500 to-cyan-400",
    icon: "🌐"
  },
  {
    title: { en: "Mobile Apps", ar: "تطبيقات الجوال" },
    description: { en: "Native and cross-platform mobile solutions", ar: "حلول جوال أصلية ومتعددة المنصات" },
    gradient: "from-purple-500 to-pink-400",
    icon: "📱"
  },
  {
    title: { en: "Internet Solution", ar: "حلول الإنترنت" },
    description: { en: "High-speed connectivity and broadband solutions", ar: "حلول اتصال عالية السرعة ونطاق عريض" },
    gradient: "from-green-500 to-emerald-400",
    icon: "🌐"
  },
  {
    title: { en: "Networking Solution", ar: "حلول الشبكات" },
    description: { en: "Robust network infrastructure and connectivity", ar: "بنية تحتية قوية للشبكات والاتصال" },
    gradient: "from-orange-500 to-yellow-400",
    icon: "🔗"
  },
  {
    title: { en: "Support Solutions", ar: "حلول الدعم" },
    description: { en: "24/7 technical support and maintenance services", ar: "خدمات الدعم الفني والصيانة على مدار الساعة" },
    gradient: "from-indigo-500 to-blue-400",
    icon: "🛠️"
  },
  {
    title: { en: "RFID & Access Control System", ar: "نظام RFID والتحكم في الوصول" },
    description: { en: "Advanced security and access management systems", ar: "أنظمة أمن متقدمة وإدارة الوصول" },
    gradient: "from-red-500 to-pink-400",
    icon: "🔒"
  }
];

export const Services = ({ scrollToSection, t, lang = "en" }) => {
  const displayedServices = services.slice(0, 6);
  const navigate = useNavigate();

  const handleLearnMore = (index) => {
    navigate(`/service/${index}`);
  };

  const handleShowAll = () => {
    navigate("/all-services");
  };

  return (
    <section
      id="services"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#EAF6FF]/40 to-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Floating Sparkles Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#3EA6FF]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity
            }}
          >
            ✦
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-white/60 px-6 py-3 rounded-full mb-6 border border-[#CFE8FF]"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-[#3EA6FF]" />
            </motion.div>
            <span className="font-bold text-[#3EA6FF]">Our Services</span>
            <Sparkles className="w-4 h-4 text-[#3EA6FF]" />
          </motion.div>

          {/* Title with Typing + Shimmer */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-[#3EA6FF] to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TypingText text="What We Offer" />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive digital solutions that elevate your business to the next level.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedServices.map((service, idx) => (
            <EnhancedCard
              key={idx}
              service={service}
              idx={idx}
              handleLearnMore={handleLearnMore}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==============================
   UPGRADED 3D CARD COMPONENT
   ============================== */
const EnhancedCard = ({ service, idx, handleLearnMore, lang }) => {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [10, -10]);
  const rotateY = useTransform(x, [-80, 80], [-10, 10]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      className="relative group"
      onMouseMove={handleMouse}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      style={{ rotateX, rotateY }}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3EA6FF]/30 to-cyan-400/30 blur-3xl"
        animate={{ opacity: hover ? 0.8 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Card */}
      <motion.div
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-[#CFE8FF]/50 shadow-xl"
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        {/* Icon */}
        <motion.div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-4xl flex items-center justify-center shadow-xl mb-6`}
          animate={hover ? { rotateY: 360, scale: 1.15 } : { rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {service.icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#3EA6FF] transition">
          {service.title[lang]}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{service.description[lang]}</p>

        {/* Button */}
        <motion.button
          onClick={() => handleLearnMore(idx)}
          className="flex items-center gap-3 text-[#3EA6FF] font-bold"
          whileHover={{ x: lang === "ar" ? -8 : 8 }}
        >
          Learn More <ArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};