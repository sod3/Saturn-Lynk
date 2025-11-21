// src/pages/AllServices.jsx
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { services } from "../data/servicesData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AllServices = ({ t, lang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLearnMore = (index) => {
    navigate(`/service/${index}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
            <Zap className="w-4 h-4" /> {t("allServices") || "All Services"}
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t("allServicesTitle") || "Explore All Our Services"}
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("allServicesDesc") || "Discover our complete range of professional services designed to help your business grow and succeed."}
          </p>
        </div>

        {/* Full Grid of All Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-300 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title[lang]}
              </h3>

              <p className="text-gray-600 mb-5 line-clamp-3">
                {service.description[lang]}
              </p>

              <button
                onClick={() => handleLearnMore(idx)}
                className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                {t("learnMore") || "Learn More"} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};