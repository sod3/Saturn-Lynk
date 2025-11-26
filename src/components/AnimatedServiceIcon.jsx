// src/components/AnimatedServiceIcon.jsx
import { motion } from 'framer-motion';

export const AnimatedServiceIcon = ({ iconType, className = "w-12 h-12" }) => {
  const getIconAnimation = (type) => {
    const commonProps = {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 },
      whileHover: { scale: 1.1 },
      className: `${className} text-blue-600`
    };

    switch (type) {
      case 'web-development':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.rect
              x="3" y="3" width="18" height="14" rx="2"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.line
              x1="3" y1="7" x2="21" y2="7"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.circle
              cx="6" cy="5" r="0.5" fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="9" cy="5" r="0.5" fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="12" cy="5" r="0.5" fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </motion.svg>
        );

      case 'mobile-apps':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.rect
              x="6" y="3" width="12" height="18" rx="2"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.circle
              cx="12" cy="17" r="1"
              fill="currentColor"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.rect
              x="9" y="7" width="6" height="8" rx="1"
              fill="currentColor" fillOpacity="0.2"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.svg>
        );

      case 'internet-solution':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.circle
              cx="12" cy="12" r="8"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M12 4C14.5013 5.73833 16 8.67755 16 12C16 15.3224 14.5013 18.2617 12 20"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
              d="M12 4C9.49872 5.73833 8 8.67755 8 12C8 15.3224 9.49872 18.2617 12 20"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="12" cy="12" r="2"
              fill="currentColor"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.svg>
        );

      case 'networking-solution':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.circle
              cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle
              cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            />
            <motion.line
              x1="7" y1="7" x2="17" y2="7"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line
              x1="7" y1="17" x2="17" y2="17"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.svg>
        );

      case 'support-solutions':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.circle
              cx="12" cy="12" r="4"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M12 16V12L14 10"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.svg>
        );

      case 'rfid-access-control':
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.rect
              x="4" y="6" width="16" height="12" rx="2"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M8 12H16"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.path
              d="M12 6V4"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.path
              d="M12 20V18"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
          </motion.svg>
        );

      default:
        return (
          <motion.svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <motion.rect
              x="3" y="3" width="18" height="18" rx="2"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.circle
              cx="12" cy="12" r="3"
              stroke="currentColor" strokeWidth="1.5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.svg>
        );
    }
  };

  return getIconAnimation(iconType);
};