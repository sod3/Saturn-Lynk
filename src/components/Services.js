import { motion } from 'framer-motion';
import { ArrowRight, Zap, X, Play, Pause, Volume2, VolumeX, Repeat } from 'lucide-react';
import { services } from '../data/servicesData';
import { useState, useRef } from 'react';

export const Services = ({ scrollToSection, t, lang }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Reset video state when opening new modal
    setIsPlaying(false);
    setIsMuted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    // Pause video when closing modal
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    // Video will automatically loop due to loop attribute
    // But we need to update play state if needed
    setIsPlaying(true);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
            <Zap className="w-4 h-4" /> {t('ourServices')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesDesc')}
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
              <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 text-white shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title[lang]}</h3>
              <p className="text-gray-600 mb-4">{service.description[lang]}</p>
              <button 
                onClick={() => handleLearnMore(service)} 
                className="text-blue-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                {t('learnMore')} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <motion.div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title[lang]}</h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('Service Details') || 'Service Details'}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.detailedDescription?.[lang] || selectedService.description[lang]}
                  </p>
                </div>

                {/* Video Section - Simplified without thumbnail */}
                {selectedService.video && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {t('Video Demo') || 'Video Demonstration'}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Repeat className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {selectedService.videoDescription?.[lang] || 
                        (lang === 'ar' 
                          ? 'شاهد كيف نقدم هذه الخدمة بشكل عملي' 
                          : 'Watch how we deliver this service in action'
                        )
                      }
                    </p>

                    <div className="relative group">
                      <video
                        ref={videoRef}
                        className="w-full h-auto rounded-lg shadow-md bg-black"
                        loop
                        autoPlay
                        muted={isMuted}
                        onEnded={handleVideoEnd}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      >
                        <source src={selectedService.video} type="video/mp4" />
                        {t('videoNotSupported') || 'Your browser does not support the video tag.'}
                      </video>
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={togglePlayPause}
                              className="text-white hover:text-blue-300 transition-colors"
                            >
                              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>
                            
                            <button
                              onClick={toggleMute}
                              className="text-white hover:text-blue-300 transition-colors"
                            >
                              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-2 text-white text-sm">
                            <Repeat className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Play Button Overlay - Only show when paused */}
                      {!isPlaying && (
                        <button
                          onClick={togglePlayPause}
                          className="absolute inset-0 flex items-center justify-center group"
                        >
                          <div className="w-16 h-16 bg-blue-500/90 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {selectedService.features && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('Key Features') || 'Key Features'}</h4>
                    <ul className="space-y-2">
                      {selectedService.features[lang]?.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedService.benefits && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('Benefits') || 'Benefits'}</h4>
                    <ul className="space-y-2">
                      {selectedService.benefits[lang]?.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={closeModal}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  {t('Close') || 'Close'}
                </button>
                <button 
                  onClick={() => {
                    closeModal();
                    scrollToSection('contact');
                  }}
                  className="flex-1 py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {t('Get Started') || 'Get Started'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};