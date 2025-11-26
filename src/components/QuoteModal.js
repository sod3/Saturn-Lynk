import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { services } from '../data/servicesData';

export const QuoteModal = ({ showQuoteForm, setShowQuoteForm, t, lang }) => {
  const [loading, setLoading] = useState(false);
  const [globalMessage, setGlobalMessage] = useState({ type: '', text: '' });
  const [errors, setErrors] = useState({});

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
      newErrors.email = t('errorInvalidEmail') || 'Please enter a valid email address (e.g., user@example.com).';
    }

    if (!data.service) {
      newErrors.service = t('errorServiceRequired') || 'Please select a service.';
    }

    if (!data.projectDetails?.trim()) {
      // Optional, but if provided, validate length
    } else if (data.projectDetails.trim().length < 10) {
      newErrors.projectDetails = t('errorDetailsTooShort') || 'Project details should be at least 10 characters long.';
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
      service: formData.get('service'),
      projectDetails: formData.get('projectDetails'),
    };

    // Client-side validation
    if (!validateForm(data)) {
      setLoading(false);
      return;
    }

    // Use full backend URL (same as contact form)
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setGlobalMessage({ type: 'success', text: t('quoteSent') || 'Quote request sent successfully! We\'ll contact you soon.' });
        e.target.reset(); // Clear form
        setErrors({}); // Clear errors
      } else {
        const errorMsg = result.error || t('submissionError') || 'An error occurred. Please try again.';
        setGlobalMessage({ type: 'error', text: errorMsg });
      }
    } catch (error) {
      setGlobalMessage({ type: 'error', text: t('networkError') || 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const getErrorClass = (field) => errors[field] ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400';

  return (
    <AnimatePresence>
      {showQuoteForm && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div className="relative">
            {/* Close Button - Positioned outside the modal */}
            <button 
              onClick={() => setShowQuoteForm(false)} 
              className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
            >
              <X size={20} className="text-gray-600" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('quoteTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder={t('yourName')} 
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-transparent transition-all ${getErrorClass('name')}`} 
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder={t('yourEmail')} 
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-transparent transition-all ${getErrorClass('email')}`} 
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <select 
                    name="service"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-transparent transition-all ${getErrorClass('service')}`}
                  >
                    <option value="">{t('selectService')}</option>
                    {services.map(s => (
                      <option key={s.title.en} value={s.title.en}>
                        {s.title[lang]}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>
                <div>
                  <textarea 
                    name="projectDetails"
                    placeholder={t('projectDetails')} 
                    rows={3} 
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:border-transparent transition-all ${getErrorClass('projectDetails')}`} 
                  />
                  {errors.projectDetails && <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>}
                </div>
                {globalMessage.text && (
                  <div className={`p-3 rounded-lg ${globalMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {globalMessage.text}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full p-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? t('sending') || 'Sending...' : t('submit')}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};