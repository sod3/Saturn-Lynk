import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, MessageCircle, Send, ArrowRight, Star, Zap, Shield, Clock, Award, Users, TrendingUp, Globe } from 'lucide-react';

const SaturnLynkWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Network Infrastructure",
      description: "Enterprise-grade network design and implementation with cutting-edge technology and best practices.",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Fiber Optic Solutions",
      description: "Ultra-fast fiber optic cabling for maximum bandwidth and future-proof connectivity.",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Data Center Design",
      description: "Scalable, secure data center infrastructure with enterprise reliability and redundancy.",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Security Systems",
      description: "Advanced security and surveillance with AI-powered monitoring and threat detection.",
      icon: <Shield className="w-12 h-12" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring, maintenance, and technical support for maximum uptime.",
      icon: <Clock className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Integration",
      description: "Seamless cloud connectivity and hybrid solutions for modern digital transformation.",
      icon: <Star className="w-12 h-12" />,
      gradient: "from-pink-500 to-blue-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "24/7", label: "Technical Support", icon: <Clock className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Users className="w-8 h-8" /> }
  ];

  const industries = [
    { name: "Corporate", icon: "🏢", color: "from-blue-400 to-cyan-400" },
    { name: "Data Centers", icon: "💾", color: "from-cyan-400 to-blue-500" },
    { name: "Education", icon: "🎓", color: "from-blue-500 to-indigo-500" },
    { name: "Government", icon: "🏛️", color: "from-indigo-500 to-purple-500" },
    { name: "Healthcare", icon: "🏥", color: "from-purple-500 to-pink-500" },
    { name: "Hospitality", icon: "🏨", color: "from-pink-500 to-blue-400" }
  ];

  const testimonials = [
    { name: "Ahmed Al-Rashid", role: "IT Director, Tech Corp", text: "Saturn Lynk transformed our entire network infrastructure. Professional, reliable, and incredibly skilled." },
    { name: "Sarah Mohammed", role: "CTO, Digital Solutions", text: "Outstanding service and support. They exceeded all expectations and delivered ahead of schedule." },
    { name: "Khalid Al-Saud", role: "Operations Manager", text: "The best telecommunication partner we have worked with. Highly recommended for any enterprise project." }
  ];

  const handleQuoteSubmit = () => {
    alert('Thank you! We will contact you within 24 hours.');
    setShowQuoteForm(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-slideUp">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors hover:rotate-90 duration-300"
            >
              <X size={28} />
            </button>
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-[#009FE3] to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Get Your Free Consultation</h3>
              <p className="text-gray-500">We will respond within 24 hours with a customized solution</p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#009FE3] transition-all bg-gray-50 focus:bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#009FE3] transition-all bg-gray-50 focus:bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#009FE3] transition-all bg-gray-50 focus:bg-white"
              />
              <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#009FE3] transition-all bg-gray-50 focus:bg-white text-gray-600">
                <option>Select Service</option>
                {services.map((service, idx) => (
                  <option key={idx}>{service.title}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your project"
                rows="4"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#009FE3] transition-all bg-gray-50 focus:bg-white resize-none"
              ></textarea>
              <button
                onClick={handleQuoteSubmit}
                className="w-full bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Submit Request <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      {showChatbot && (
        <div className="fixed bottom-28 right-6 bg-white rounded-3xl shadow-2xl w-96 z-40 animate-slideUp overflow-hidden">
          <div className="bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white p-6 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-lg">Chat with Saturn Lynk</h4>
              <p className="text-sm text-blue-100">We typically reply instantly</p>
            </div>
            <button onClick={() => setShowChatbot(false)} className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-6 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
              <p className="text-sm text-gray-700">Hello! Welcome to Saturn Lynk. How can we help you today?</p>
            </div>
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
              <p className="text-sm text-gray-700 mb-3">Quick options:</p>
              <div className="space-y-2">
                <button 
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full text-left text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl hover:from-[#009FE3] hover:to-cyan-400 hover:text-white transition-all duration-300 font-medium border border-blue-100"
                >
                  Request a Quote
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl hover:from-[#009FE3] hover:to-cyan-400 hover:text-white transition-all duration-300 font-medium border border-blue-100"
                >
                  View Our Services
                </button>
                <button className="w-full text-left text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl hover:from-[#009FE3] hover:to-cyan-400 hover:text-white transition-all duration-300 font-medium border border-blue-100">
                  Technical Support
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#009FE3] transition-all"
              />
              <button className="bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white p-3 rounded-xl hover:shadow-lg transition-all">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#009FE3] to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-[#009FE3] to-cyan-500 bg-clip-text text-transparent">
                Saturn Lynk
              </div>
            </button>
           
            <nav className="hidden lg:flex items-center space-x-1">
              {['Home', 'Services', 'About', 'Industries', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-5 py-2 text-gray-700 hover:text-[#009FE3] font-semibold transition-all rounded-xl hover:bg-blue-50"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-5 py-2.5 text-[#009FE3] font-semibold hover:bg-blue-50 rounded-xl transition-all">
                Sign In
              </button>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-slideUp">
            <nav className="px-6 py-6 space-y-2">
              {['Home', 'Services', 'About', 'Industries', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#009FE3] hover:bg-blue-50 rounded-xl font-semibold transition-all"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowQuoteForm(true)}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white rounded-xl font-bold shadow-lg"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>
      <section id="home" className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-cyan-100 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
       
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideUp">
              <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg mb-6 border border-blue-100">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">Trusted by 500+ Companies</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#009FE3] via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Connecting
                </span>
                <br />
                <span className="text-gray-800">
                  The Future
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
                Advanced network and telecommunication solutions that power Saudi Arabia's digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-gray-800 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-[#009FE3] flex items-center justify-center gap-2"
                >
                  Explore Services
                </button>
              </div>
             
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.slice(0, 3).map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-black text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-100">
                  <div className="space-y-4">
                    {services.slice(0, 4).map((service, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl shadow-lg border border-blue-50 hover:border-[#009FE3] transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 mb-1">{service.title}</h4>
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`} style={{width: `${85 + idx * 3}%`}}></div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#009FE3] to-cyan-400 rounded-3xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full mb-6 border border-blue-100">
              <Zap className="w-4 h-4 text-[#009FE3]" />
              <span className="text-sm font-bold text-[#009FE3]">OUR SERVICES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive network infrastructure designed for reliability, scalability, and peak performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#009FE3] cursor-pointer hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#009FE3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 text-[#009FE3] font-bold group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-[#009FE3] to-cyan-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-lg text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#009FE3] to-cyan-400 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  {[
                    { icon: <Award />, title: "ISO Certified", desc: "International quality standards" },
                    { icon: <Users />, title: "Expert Team", desc: "Certified professionals" },
                    { icon: <TrendingUp />, title: "500+ Projects", desc: "Successful deliveries" },
                    { icon: <Shield />, title: "Secure Solutions", desc: "Enterprise-grade security" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5 bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-all">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#009FE3] shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{item.title}</div>
                        <div className="text-white">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md mb-6 border border-blue-100">
                <Star className="w-4 h-4 text-[#009FE3]" />
                <span className="text-sm font-bold text-[#009FE3]">ABOUT US</span>
              </div>
              <h2 className="text-5xl font-black text-gray-800 mb-6 leading-tight">
                Building Tomorrow's <span className="bg-gradient-to-r from-[#009FE3] to-cyan-500 bg-clip-text text-transparent">Connected World</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Saturn Lynk is Saudi Arabia's premier network and telecommunication partner, delivering enterprise-grade infrastructure solutions that drive digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of excellence, our certified team has successfully deployed hundreds of mission-critical projects, earning the trust of leading organizations across the Kingdom.
              </p>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#009FE3] to-cyan-400 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="industries" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full mb-6 border border-blue-100">
              <Globe className="w-4 h-4 text-[#009FE3]" />
              <span className="text-sm font-bold text-[#009FE3]">INDUSTRIES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6">
              Powering Every Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted network solutions across diverse industries throughout Saudi Arabia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-blue-100 hover:border-[#009FE3] relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{industry.icon}</div>
                  <p className="font-bold text-gray-800 group-hover:text-[#009FE3] transition-colors">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md mb-6 border border-blue-100">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold text-[#009FE3]">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#009FE3] to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-[#009FE3] via-cyan-400 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl lg:text-2xl text-white mb-10 leading-relaxed">
            Let's build a future-proof infrastructure together. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="px-10 py-5 bg-white text-[#009FE3] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
              <Phone className="w-5 h-5" />
              Call Us Now
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full mb-6 border border-blue-100">
              <MessageCircle className="w-4 h-4 text-[#009FE3]" />
              <span className="text-sm font-bold text-[#009FE3]">CONTACT US</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach our team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Phone className="w-8 h-8" />, title: "Call Us", info: "+966 XX XXX XXXX", gradient: "from-blue-400 to-cyan-400" },
              { icon: <Mail className="w-8 h-8" />, title: "Email Us", info: "info@saturnlynk.sa", gradient: "from-cyan-400 to-blue-500" },
              { icon: <MapPin className="w-8 h-8" />, title: "Visit Us", info: "Riyadh, Saudi Arabia", gradient: "from-blue-500 to-indigo-500" }
            ].map((contact, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#009FE3] cursor-pointer hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#009FE3] transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-600 text-lg font-semibold">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#009FE3] to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-[#009FE3] to-cyan-400 bg-clip-text text-transparent">
                  Saturn Lynk
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Connecting businesses through advanced network and telecommunication solutions across Saudi Arabia.
              </p>
              <div className="flex gap-3">
                {['F', 'T', 'L', 'I'].map((social, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#009FE3] hover:to-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-bold"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'About Us', 'Industries', 'Contact'].map((link, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-400 hover:text-[#009FE3] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="text-gray-400 hover:text-[#009FE3] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#009FE3] flex-shrink-0 mt-1" />
                  <span>+966 XX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#009FE3] flex-shrink-0 mt-1" />
                  <span>info@saturnlynk.sa</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#009FE3] flex-shrink-0 mt-1" />
                  <span>Riyadh, Saudi Arabia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              2024 Saturn Lynk. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-[#009FE3] transition-colors focus:outline-none">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#009FE3] transition-colors focus:outline-none">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-[#009FE3] transition-colors focus:outline-none">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-br from-[#009FE3] to-cyan-400 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Live Chat
        </div>
      </button>
    </div>
  );
};

export default SaturnLynkWebsite;