import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { services } from "../data/servicesData";
import { useNavigate } from "react-router-dom";

export const Services = ({ scrollToSection, t, lang }) => {
  const navigate = useNavigate();

  const handleLearnMore = (index) => {
    navigate(`/service/${index}`);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
            <Zap className="w-4 h-4" /> {t("ourServices")}
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t("servicesTitle")}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("servicesDesc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-100/50 hover:border-blue-300 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 text-white shadow-sm`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title[lang]}
              </h3>

              <p className="text-gray-600 mb-4">{service.description[lang]}</p>

              <button
                onClick={() => handleLearnMore(idx)}
                className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                {t("learnMore")} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
