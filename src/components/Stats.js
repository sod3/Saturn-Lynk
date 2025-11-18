import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Stats = ({ t, lang }) => {
  const stats = t('stats');
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => prev.map((val, idx) => {
        const target = parseInt(stats[idx].number) || 0;
        return val < target ? val + Math.ceil(target / 50) : target;
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-400 to-cyan-300 text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-extrabold mb-2">{counters[idx]}{stat.number.includes('+') || stat.number.includes('%') ? stat.number.replace(/[0-9]/g, '') : ''}</div>
            <p className="font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};