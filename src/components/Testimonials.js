import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Pause, Play } from "lucide-react";

export default function OurTeam({ t, lang }) {
  const membersText = t('teamMembers');
  const images = ["/team1.png", "/team11.png"];
  const team = membersText.map((member, i) => ({ ...member, img: images[i] }));

  const [index, setIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? team.length - 1 : i - 1));
    resetAutoScroll();
  }, [team.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === team.length - 1 ? 0 : i + 1));
    resetAutoScroll();
  }, [team.length]);

  const startAutoScroll = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    
    const id = setInterval(() => {
      setIndex((currentIndex) => (currentIndex === team.length - 1 ? 0 : currentIndex + 1));
    }, 5000);
    
    setIntervalId(id);
    setAutoScroll(true);
  }, [team.length, intervalId]);

  const stopAutoScroll = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setAutoScroll(false);
  }, [intervalId]);

  const toggleAutoScroll = useCallback(() => {
    if (autoScroll) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  }, [autoScroll, startAutoScroll, stopAutoScroll]);

  const resetAutoScroll = useCallback(() => {
    if (autoScroll) {
      stopAutoScroll();
      startAutoScroll();
    }
  }, [autoScroll, startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoScroll) {
      stopAutoScroll();
    }
  };

  const handleMouseLeave = () => {
    if (autoScroll) {
      startAutoScroll();
    }
  };

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-[#EAF7FF] to-[#DFF3FF] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* HEADER */}
      <div className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-1.5 md:px-5 md:py-2 rounded-full border shadow-sm backdrop-blur">
          <Users className="w-4 h-4 md:w-5 md:h-5 text-[#0ea5e9]" />
          <span className="font-semibold text-sm md:text-base text-[#0ea5e9]">{t('ourTeam')}</span>
        </div>

        <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          {t('teamTitle')}
        </h2>

        <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          {t('teamDesc')}
        </p>
      </div>

      {/* SLIDER CONTAINER */}
      <div 
        className="relative max-w-5xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative bg-white/90 border border-[#C8EBFF] shadow-xl md:shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col md:flex-row items-center"
            >
              {/* IMAGE SECTION - Fixed for mobile */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-auto md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl">
                  {/* Mobile: Show full image without cropping */}
                  <div className="block md:hidden">
                    <img
                      src={team[index].img}
                      alt={team[index].name}
                      className="w-full h-auto max-h-[300px] object-contain"
                    />
                  </div>
                  
                  {/* Desktop: Keep the original cover style */}
                  <div className="hidden md:block">
                    <img
                      src={team[index].img}
                      alt={team[index].name}
                      className="w-full h-full min-h-[400px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ps-8 lg:ps-10">
                <div className="text-center md:text-left">
                  <p className="text-[#0ea5e9] text-lg sm:text-xl md:text-2xl font-semibold mt-1 md:mt-2">
                    {team[index].role}
                  </p>
                  
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
                    {team[index].message}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ARROWS - Responsive positioning */}
        <button
          className="absolute top-1/2 -left-2 md:-left-6 transform -translate-y-1/2 bg-white shadow-lg w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-10"
          onClick={prev}
          aria-label="Previous member"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>

        <button
          className="absolute top-1/2 -right-2 md:-right-6 transform -translate-y-1/2 bg-white shadow-lg w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-10"
          onClick={next}
          aria-label="Next member"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* AUTO-SCROLL TOGGLE BUTTON */}
        <button
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white/90 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition backdrop-blur-sm z-10"
          onClick={toggleAutoScroll}
          title={autoScroll ? "Pause auto-scroll" : "Play auto-scroll"}
          aria-label={autoScroll ? "Pause auto-scroll" : "Play auto-scroll"}
        >
          {autoScroll ? (
            <Pause className="w-3 h-3 md:w-5 md:h-5 text-gray-700" />
          ) : (
            <Play className="w-3 h-3 md:w-5 md:h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 md:mt-10 gap-2 md:gap-3">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              resetAutoScroll();
            }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ${
              i === index ? "bg-[#0ea5e9]" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to team member ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}