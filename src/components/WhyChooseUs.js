// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";

// Icon Map
const iconMap = {
  "24/7 Support": "🕑",
  "Quality Assurance": "🔒",
  "Proven Results": "📈",
  "Client Focused": "👥",
  "global reach": "🌐",
  "premium service": "⭐",
  "fast delivery": "⚡",
  "secure systems": "🛡️",
  "growth strategy": "🚀",
  "professional team": "💼",
  "targeted solutions": "🎯"
};

export const WhyChooseUs = ({ t, lang }) => {
  const points = t("points", {
    returnObjects: true,
    defaultValue: [
      { title: "24/7 Support", desc: "Round-the-clock technical support and maintenance" },
      { title: "Quality Assurance", desc: "Rigorous testing and quality control processes" },
      { title: "Proven Results", desc: "Track record of successful project delivery" },
      { title: "Client Focused", desc: "Custom solutions tailored to your specific needs" }
    ]
  });

  // Icon Animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -40 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 200, damping: 12 }
    }),
    hover: {
      scale: 1.4,
      rotate: 12,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 90 }
    }),
    hover: {
      scale: 1.07,
      y: -15,
      boxShadow: "0 35px 70px rgba(0,0,0,0.15)"
    }
  };

  return (
    <section
      id="whyus"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
    >
      {/* 🔵 Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/10 blur-[110px] rounded-full"></div>

      {/* 🎨 Elegant SVG + Gradient Background */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* Soft radial gradient glow */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(58,130,247,0.25),transparent_70%)] blur-3xl"></div>

  <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(0,97,255,0.2),transparent_70%)] blur-3xl"></div>

  {/* Thin premium SVG accent lines */}
  <svg
    className="absolute top-0 right-0 w-[380px] opacity-25"
    viewBox="0 0 450 450"
    fill="none"
  >
    <circle cx="225" cy="225" r="180" stroke="#1E40AF" strokeWidth="0.5" />
    <circle cx="225" cy="225" r="140" stroke="#1E3A8A" strokeWidth="0.5" />
    <circle cx="225" cy="225" r="100" stroke="#1D4ED8" strokeWidth="0.5" />
  </svg>

  {/* Floating dots pattern */}
  <svg
    className="absolute bottom-10 left-10 w-48 opacity-20"
    viewBox="0 0 200 200"
    fill="none"
  >
    {[...Array(50)].map((_, i) => (
      <circle
        key={i}
        cx={Math.random() * 200}
        cy={Math.random() * 200}
        r="2"
        fill="#2563EB"
      />
    ))}
  </svg>
</div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            {t("whyTitle") || "Why Choose Our Solutions"}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("whyDesc") ||
              "Exceptional quality, elite performance, and innovative experiences designed for modern businesses."}
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((p, idx) => {
            const icons = ["🕑", "🔒", "📈", "👥"];
            const icon = icons[idx] || "⭐";

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                custom={idx}
                whileHover="hover"
                className="group bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl relative overflow-hidden"
              >

                {/* 🔥 Glow Ring Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-br from-blue-500/20 via-blue-700/25 to-indigo-500/20 blur-2xl"></div>

                {/* ICON */}
                <motion.div
                  variants={iconVariants}
                  custom={idx}
                  whileHover="hover"
                  className="w-24 h-24 flex items-center justify-center rounded-2xl mx-auto mb-7 bg-gradient-to-br from-blue-500 to-blue-700 text-6xl shadow-2xl relative"
                  style={{
                    boxShadow:
                      "0 20px 40px rgba(30, 144, 255, 0.35), inset 0 0 20px rgba(255,255,255,0.3)"
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {icon}
                  </motion.div>
                </motion.div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-700 transition duration-300">
                  {p.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-lg text-center leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-4 bg-white/80 px-10 py-5 rounded-2xl border shadow-xl backdrop-blur-md text-lg font-semibold"
          >
            <span className="text-4xl animate-pulse drop-shadow">🌟</span>
            <span className="text-gray-800">
              {lang === "ar" ? "جودة رائدة منذ 2010" : "Premium Excellence Since 2010"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
