import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ServiceDetail = ({ t, lang }) => {
  const { id } = useParams();
  const service = services[id];

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!service)
    return (
      <div className="p-10 text-center text-xl text-gray-700">
        Service Not Found
      </div>
    );

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="max-w-6xl mx-auto px-6 pt-28 pb-20"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <motion.div
        className="flex items-center gap-5 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg`}
        >
          {service.icon}
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {service.title[lang]}
          </h1>
          <p className="text-gray-500 mt-1 text-base sm:text-lg">
            {t("Service Overview")}
          </p>
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-12 bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {service.detailedDescription?.[lang] || service.description[lang]}
      </motion.p>

      {/* VIDEO SECTION */}
      {service.video && (
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 mb-16 border border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <video
            ref={videoRef}
            className="w-full h-[500px] rounded-2xl object-cover"
            loop
            muted={isMuted}
          >
            <source src={service.video} type="video/mp4" />
          </video>

          <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-white">
            <button
              onClick={togglePlay}
              className="hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>

            <button
              onClick={toggleMute}
              className="hover:scale-110 transition-transform"
            >
              {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>
          </div>
        </motion.div>
      )}

      {/* FEATURES */}
      {service.features && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            {t("Key Features")}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features[lang].map((f, i) => (
              <li
                key={i}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                ⭐ {f}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* BENEFITS */}
      {service.benefits && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            {t("Benefits")}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.benefits[lang].map((b, i) => (
              <li
                key={i}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                ✔ {b}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* CTA */}
      <motion.a
        href="#contact"
        className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {t("Get Started")} <ArrowRight />
      </motion.a>
    </div>
  );
};

export default ServiceDetail;
