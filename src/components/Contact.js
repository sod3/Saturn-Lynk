import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Contact = ({ setShowQuoteForm, t, lang }) => {
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

    if (!data.phone?.trim()) {
      // Phone is optional, no error
    } else {
      // Optional: Add phone format validation if desired (e.g., Saudi numbers)
      const phoneRegex = /^(\+?966|0)?5[0-9]{8}$/; // Basic Saudi mobile format
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        newErrors.phone = t('errorInvalidPhone') || 'Please enter a valid phone number (e.g., +966 50 123 4567 or 05xxxxxxxx).';
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

    // Client-side validation
    if (!validateForm(data)) {
      setLoading(false);
      return;
    }

    // Updated: Use full backend URL (adjust port if needed; use env var for prod)
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Add to .env: REACT_APP_API_URL=http://localhost:5000

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setGlobalMessage({ type: 'success', text: t('messageSent') || 'Message sent successfully!' });
        e.target.reset(); // Clear form
        setErrors({}); // Clear any errors
      } else {
        // Handle backend errors (e.g., 400 validation or 500 server error)
        const errorMsg = result.error || t('submissionError') || 'An error occurred. Please try again.';
        setGlobalMessage({ type: 'error', text: errorMsg });
        // If backend returns field-specific errors, you could parse them here (e.g., if result.errors is an object)
      }
    } catch (error) {
      setGlobalMessage({ type: 'error', text: t('networkError') || 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const getErrorClass = (field) => errors[field] ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-blue-400';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-blue-600">
            <MessageCircle className="w-4 h-4" /> {t('getInTouch')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t('buildFuture')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('contactDesc')}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <Phone className="w-6 h-6 text-blue-500" />
              <span>{t('phone')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <Mail className="w-6 h-6 text-blue-500" />
              <span>{t('email')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span>{t('location')}</span>
            </div>
            <a 
              href="https://wa.me/966551254121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all"
            >
              {t('chatWhatsApp')} <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name"
                placeholder={t('yourName')} 
                className={`w-full p-4 border rounded-xl focus:outline-none transition-all ${getErrorClass('name')}`} 
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                placeholder={t('yourEmail')} 
                className={`w-full p-4 border rounded-xl focus:outline-none transition-all ${getErrorClass('email')}`} 
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <input 
                type="tel" 
                name="phone"
                placeholder={t('yourPhone')} 
                className={`w-full p-4 border rounded-xl focus:outline-none transition-all ${getErrorClass('phone')}`} 
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
              <p className="mt-1 text-xs text-gray-500 italic">{t('phoneOptional') || '(Optional)'}</p>
            </div>
            <div>
              <textarea 
                name="message"
                placeholder={t('yourMessage')} 
                rows={4} 
                className={`w-full p-4 border rounded-xl focus:outline-none transition-all ${getErrorClass('message')}`} 
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            {globalMessage.text && (
              <div className={`p-3 rounded-xl ${globalMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {globalMessage.text}
              </div>
            )}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white rounded-xl font-semibold hover:shadow-md transition-all disabled:opacity-50"
            >
              {loading ? t('sending') || 'Sending...' : t('sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};