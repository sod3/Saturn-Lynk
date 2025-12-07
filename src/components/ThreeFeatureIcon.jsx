// src/components/ThreeFeatureIcon.jsx
import { motion } from "framer-motion";

export const ThreeFeatureIcon = ({ iconType, className }) => {
  const iconMap = {
    "24/7-support": "⏱️",     // Premium 3D clock emoji
    "quality-assurance": "🛡️", // Shield with check
    "proven-results": "📈",     // Growth chart
    "client-focused": "🤝",     // Handshake
    "global-reach": "🌐",       // Globe (optional future use)
  };

  return (
    <motion.div
      className={`text-5xl drop-shadow-xl ${className}`}
      initial={{ scale: 0.6, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.25, rotate: 10 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 12
      }}
      style={{ filter: "drop-shadow(0 5px 20px rgba(0,0,0,0.25))" }}
    >
      {iconMap[iconType] || "✨"}
    </motion.div>
  );
};
