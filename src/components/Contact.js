import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';

export const Contact = ({ setShowQuoteForm, t, lang = 'en' }) => {
  const [loading, setLoading] = useState(false);
  const [globalMessage, setGlobalMessage] = useState({ type: '', text: '' });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name?.trim()) {
      newErrors.name = t('errorNameRequired') || 'Name is required.';
    }

    if (!data.email?.trim()) {
      newErrors.email = t('errorEmailRequired') || 'Email is required.';
    } else if (!validateEmail(data.email)) {
      newErrors.email = t('errorInvalidEmail') || 'Please enter a valid email address.';
    }

    if (!data.phone?.trim()) {
      // Phone is optional
    } else {
      const phoneRegex = /^(\+?966|0)?5[0-9]{8}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        newErrors.phone = t('errorInvalidPhone') || 'Please enter a valid phone number.';
      }
    }

    if (!data.message?.trim()) {
      newErrors.message = t('errorMessageRequired') || 'Message is required.';
    } else if (data.message.trim().length < 10) {
      newErrors.message = t('errorMessageTooShort') || 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGlobalMessage({ type: '', text: '' });
    setErrors({});

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    if (!validateForm(data)) {
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setGlobalMessage({ type: 'success', text: t('messageSent') || 'Message sent successfully!' });
    e.target.reset();
    setErrors({});
    setLoading(false);
  };

  const getInputClass = (field) => {
    const baseClass = "w-full p-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm";
    if (errors[field]) return `${baseClass} border-red-400 focus:border-red-500`;
    if (focusedField === field) return `${baseClass} border-[#3EA6FF] shadow-lg shadow-[#3EA6FF]/20`;
    return `${baseClass} border-[#CFE8FF] focus:border-[#3EA6FF]`;
  };

  const contactInfo = [
    { icon: Phone, label: t('phone') || '+966 55 125 4121'},
    { icon: Mail, label: t('email') || 'info@saturnlynk.com'},
    { icon: MapPin, label: t('location') || 'jeddah, Saudi Arabia'}
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#EAF6FF]/30 to-[#CFE8FF]/20 overflow-hidden" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#3EA6FF]/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 text-sm font-bold text-[#3EA6FF] border border-[#CFE8FF]"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-5 h-5" />
            {t('getInTouch') || 'Get In Touch'}
            <Sparkles className="w-4 h-4" />
          </motion.span>

          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#3EA6FF] to-gray-900 bg-clip-text text-transparent">
              {t('buildFuture') || 'Let\'s Build Your Future'}
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('contactDesc') || 'Ready to transform your business? Get in touch with us today'}
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Side */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Info Cards */}
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="group flex items-center gap-5 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl border border-[#CFE8FF]/50 transition-all duration-300 cursor-default select-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: lang === 'ar' ? -5 : 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#3EA6FF] to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <span dir={(lang === 'ar' && (info.icon === Phone || info.icon === Mail)) ? 'ltr' : undefined} className="text-lg font-semibold text-gray-700 group-hover:text-[#3EA6FF] transition-colors">
                    {info.label}
                  </span>
                </motion.div>
              );
            })}

            {/* WhatsApp Button */}
            <motion.a 
              href="https://wa.me/966551254121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)" }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                {t('chatWhatsApp') || 'Chat on WhatsApp'}
              </span>
            </motion.a>

            {/* Decorative Element */}
            <motion.div
              className="hidden lg:block mt-8 p-8 bg-gradient-to-br from-[#3EA6FF]/10 to-cyan-400/10 rounded-3xl border border-[#CFE8FF]/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic text-lg">
                "{lang === 'ar' ? 'نحن هنا لمساعدتك في تحقيق أهدافك الرقمية' : 'We\'re here to help you achieve your digital goals'}"
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <motion.input 
                  type="text" 
                  name="name"
                  placeholder={t('yourName') || 'Your Name'}
                  className={getInputClass('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && (
                  <motion.p 
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ⚠ {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <motion.input 
                  type="email" 
                  name="email"
                  placeholder={t('yourEmail') || 'Your Email'}
                  className={`${getInputClass('email')} ${lang === 'ar' ? 'text-left' : ''}`}
                  dir={lang === 'ar' ? 'ltr' : undefined}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && (
                  <motion.p 
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ⚠ {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <motion.input 
                  type="tel" 
                  name="phone"
                  placeholder={`${t('yourPhone')} ${t('phoneOptional')}`}
                  className={`${getInputClass('phone')} ${lang === 'ar' ? 'text-left' : ''}`}
                  dir={lang === 'ar' ? 'ltr' : undefined}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.phone && (
                  <motion.p 
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ⚠ {errors.phone}
                  </motion.p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <motion.textarea 
                  name="message"
                  placeholder={t('yourMessage') || 'Your Message'}
                  rows={5} 
                  className={getInputClass('message')}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.message && (
                  <motion.p 
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ⚠ {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Success/Error Message */}
              {globalMessage.text && (
                <motion.div 
                  className={`p-4 rounded-2xl flex items-center gap-3 ${
                    globalMessage.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {globalMessage.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {globalMessage.text}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                disabled={loading}
                className="group relative w-full p-5 bg-gradient-to-r from-[#3EA6FF] to-cyan-400 text-white rounded-2xl font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                whileHover={!loading ? { scale: 1.02, boxShadow: "0 25px 50px rgba(62, 166, 255, 0.4)" } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      {t('sending') || 'Sending...'}
                    </>
                  ) : (
                    <>
                      {t('sendMessage') || 'Send Message'}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};