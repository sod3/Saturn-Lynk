// src/pages/AllServices.jsx
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { services } from "../data/servicesData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AllServices = ({ t, lang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const handleLearnMore = (id) => {
  console.log("Navigating to service:", id);
  navigate(`/service/${id}`);
};

  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute -top-20 -left-10 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/60 to-cyan-100/60 backdrop-blur-xl px-6 py-2 rounded-full text-sm font-semibold text-blue-700 border border-blue-200 shadow-md"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-blue-600" />
            {t("allServices") || "All Services"}
            <Sparkles className="w-4 h-4 text-blue-500" />
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl mt-6 mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("allServicesTitle") || "Explore All Our Services"}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("allServicesDesc") ||
              "Discover our complete range of professional services designed to help your business grow and succeed."}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-7 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
              />

              {/* Icon Container */}
              <motion.div
                className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6`}
                animate={{ rotate: [0, 0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {service.icon}

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title[lang]}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                {service.description[lang]}
              </p>

              {/* CTA Button - FIXED: Added proper button styling */}
              <motion.button
                onClick={() => handleLearnMore(idx)}
                className="w-full text-blue-600 font-semibold flex items-center justify-between gap-2 group-hover:gap-3 transition-all p-3 rounded-lg hover:bg-blue-50 cursor-pointer relative z-20"
                whileHover={{ x: lang === "ar" ? -6 : 6 }}
                type="button"
              >
                <span className="flex items-center gap-2">
                  {t("learnMore") || "Learn More"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>

              {/* Floating Decorative Corners */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-300/30 rounded-tr-xl"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              <motion.div
                className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-blue-300/30 rounded-bl-xl"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};