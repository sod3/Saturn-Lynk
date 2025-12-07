import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ArrowLeft, Users, Award, Clock, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import JASLogo from '../assets/1.jpeg';
import ShuhnatcoLogo from '../assets/2.jpeg';
import LuxuryCartsLogo from '../assets/3.jpeg';
import GreenValleyLogo from '../assets/4.jpeg';

const Clients = ({ t, lang }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sample client data - removed image property
  const clients = [
    {
      id: 1,
      position: "CEO",
      rating: 5,
      testimonial: "Working with this team transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations.",
      project: "Website Redesign"
    },
    {
      id: 2,
      position: "Marketing Director",
      rating: 5,
      testimonial: "The level of professionalism and technical expertise is outstanding. They delivered our project ahead of schedule with impeccable quality.",
      project: "E-commerce Platform"
    },
    {
      id: 3,
      position: "Creative Director",
      rating: 4,
      testimonial: "Outstanding collaboration and innovative thinking. They understood our vision perfectly and brought it to life beautifully.",
      project: "Brand Identity"
    },
    {
      id: 4,
      position: "Founder",
      rating: 5,
      testimonial: "As a startup, we needed a partner who could grow with us. Their scalable solutions and ongoing support have been invaluable.",
      project: "Mobile App Development"
    }
  ];

  const stats = [
    { number: "1000+", label: t('happyClients'), icon: Users, color: "from-blue-500 to-cyan-400" },
    { number: "98%", label: t('satisfactionRate'), icon: Heart, color: "from-green-500 to-emerald-400" },
    { number: "4.9/5", label: t('averageRating'), icon: Star, color: "from-amber-500 to-yellow-400" },
    { number: "24/7", label: t('support'), icon: Clock, color: "from-purple-500 to-pink-400" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % clients.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const clientLogos = [
    { name: "JAS", logo: JASLogo, alt: "JAS Logo" },
    { name: "Shuhnat Shipping Company", logo: ShuhnatcoLogo, alt: "Shuhnatco Logo" },
    { name: "Luxury Carts", logo: LuxuryCartsLogo, alt: "Luxury Carts Logo" },
    { name: "Green Valley Holdings", logo: GreenValleyLogo, alt: "Green Valley Holdings Logo" },
  ];
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-25 via-white to-blue-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 relative"
      >
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-20 right-10 w-16 h-16 bg-cyan-200 rounded-full opacity-30 blur-lg"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-25 blur-xl"></div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mb-6"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-4">
            {t('trustedBy')}
          </div>
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent mb-6 leading-tight">
          {t('valuedClients')}
        </h1>
        <p className="text-xl md:text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed font-light">
          {t('clientsSubtitle')}
        </p>
      </motion.div>

      {/* Enhanced Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 text-center shadow-2xl border border-blue-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg mb-6`}>
                    <IconComponent size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-blue-800 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Enhanced Testimonials Section - Fixed Responsive Issues */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-5xl mx-auto mb-24"
      >
        <div className="bg-gradient-to-br from-white to-blue-25 rounded-4xl shadow-2xl p-6 md:p-12 relative overflow-hidden border border-blue-100">
          {/* Enhanced Background Decorations */}
          <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-20 ${lang === 'ar' ? '-translate-x-20' : 'translate-x-20'} opacity-60`}></div>
          <div className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full translate-y-16 ${lang === 'ar' ? 'translate-x-16' : '-translate-x-16'} opacity-50`}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className={`flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 gap-4 ${lang === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent mb-3">
                  {t('clientTestimonials')}
                </h2>
                <p className="text-blue-600 text-sm md:text-lg">{t('hearDesc')}</p>
              </div>
              <div className={`flex items-center space-x-3 ${lang === 'ar' ? 'space-x-reverse' : ''}`}>
                <motion.button
                  onClick={prevTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 md:p-3 rounded-2xl bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  {lang === 'ar' ? 
                    <ArrowRight size={20} className="w-4 h-4 md:w-6 md:h-6" /> : 
                    <ArrowLeft size={20} className="w-4 h-4 md:w-6 md:h-6" />
                  }
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 md:p-3 rounded-2xl bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  {lang === 'ar' ? 
                    <ArrowLeft size={20} className="w-4 h-4 md:w-6 md:h-6" /> : 
                    <ArrowRight size={20} className="w-4 h-4 md:w-6 md:h-6" />
                  }
                </motion.button>
              </div>
            </div>

            <div className="relative min-h-64 md:min-h-80">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50, scale: 0.95 }}
                  animate={{ 
                    opacity: index === activeTestimonial ? 1 : 0,
                    x: index === activeTestimonial ? 0 : (lang === 'ar' ? -50 : 50),
                    scale: index === activeTestimonial ? 1 : 0.95
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`absolute inset-0 ${index === activeTestimonial ? 'block' : 'hidden'}`}
                >
                  <div className="text-center">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-blue-300 mb-4 md:mb-6 mx-auto" />
                    
                    {/* Testimonial Text - Fixed responsive text overflow */}
                    <p className="text-base md:text-lg lg:text-xl text-blue-800 mb-6 md:mb-8 leading-relaxed font-light italic px-2 md:px-4 line-clamp-4 md:line-clamp-none">
                      "{client.testimonial}"
                    </p>

                    {/* Rating Stars */}
                    <div className={`flex items-center justify-center space-x-1 mb-4 ${lang === 'ar' ? 'space-x-reverse' : ''}`}>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star
                            size={18}
                            className={`${i < client.rating ? "text-yellow-400 fill-current" : "text-gray-300"} w-4 h-4 md:w-5 md:h-5`}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="space-y-2">
                      <div className="font-bold text-blue-900 text-lg md:text-xl lg:text-2xl">
                        {client.position}
                      </div>
                      <div className="text-blue-500 font-medium text-sm md:text-base">
                        {t('project')}: {client.project}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8 md:mt-12">
              {clients.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 w-8 md:w-12' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Client Logos Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto mb-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent mb-4">
            {t('trustedByLeaders')}
          </h2>
          <p className="text-blue-600 text-lg md:text-xl max-w-2xl mx-auto">
            {lang === 'ar' ? 'شراكات مع رواد الصناعة لتقديم نتائج استثنائية' : 'Partnering with industry pioneers to deliver exceptional results'}
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-4xl p-6 md:p-12 shadow-2xl border border-blue-100/50 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative bg-white p-4 md:p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="w-full h-20 md:h-32 object-contain mx-auto 
                               filter grayscale group-hover:grayscale-0 
                               transition-all duration-700 
                               group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {clientLogos.length < 8 && (
            <div className="col-span-full text-center mt-8 md:mt-10">
              <p className="text-blue-500 italic text-sm md:text-lg">+ Many more trusted partners</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center"
      >
        <div className="relative">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-200 rounded-full opacity-30 blur-3xl"></div>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-4xl p-8 md:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white opacity-10 rounded-full"></div>
            <div className="absolute top-8 right-12 w-6 h-6 bg-white opacity-15 rounded-full"></div>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {t('joinFamily')}
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              {t('joinFamilyDesc')}
            </motion.p>
            <motion.button 
              onClick={goToContact}
              className="bg-white text-blue-600 px-8 md:px-12 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {t('startProjectToday')} <ArrowRight className="inline ml-2 w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;