import { Globe, Zap, Database, Shield, Clock, Cloud } from 'lucide-react';

export const services = [
  { 
    title: { en: "Network Infrastructure", ar: "البنية التحتية للشبكات" }, 
    description: { en: "Build robust, scalable networks...", ar: "بناء شبكات قوية وقابلة للتوسع..." }, 
    detailedDescription: {
      en: "We design and implement comprehensive network infrastructure solutions that ensure reliability, security, and high performance. Our expertise includes LAN/WAN setup, wireless networking, and network optimization for businesses of all sizes.",
      ar: "نقوم بتصميم وتنفيذ حلول بنية تحتية شاملة للشبكات تضمن الموثوقية والأمان والأداء العالي. تشمل خبراتنا إعداد الشبكات المحلية/الواسعة، الشبكات اللاسلكية، وتحسين الشبكات للشركات من جميع الأحجام."
    },
    features: {
      en: [
        "Custom LAN/WAN design and implementation",
        "Wireless network deployment",
        "Network security and firewall configuration",
        "Performance monitoring and optimization",
        "Scalable architecture for future growth"
      ],
      ar: [
        "تصميم وتنفيذ شبكات محلية/واسعة مخصصة",
        "نشر الشبكات اللاسلكية",
        "أمان الشبكة وتكوين الجدران النارية",
        "مراقبة الأداء والتحسين",
        "هندسة قابلة للتوسع للنمو المستقبلي"
      ]
    },
    benefits: {
      en: [
        "99.9% network uptime guarantee",
        "Enhanced data transfer speeds",
        "Reduced operational costs",
        "Future-proof infrastructure",
        "24/7 network monitoring"
      ],
      ar: [
        "ضمان وقت تشغيل الشبكة بنسبة 99.9%",
        "تحسين سرعات نقل البيانات",
        "تقليل التكاليف التشغيلية",
        "بنية تحتية مستعدة للمستقبل",
        "مراقبة الشبكة على مدار 24/7"
      ]
    },
    icon: <Globe />, 
    gradient: "from-blue-400 to-cyan-300",
    video: "/1.mp4",
    videoDescription: {
      en: "Watch how we design and implement robust network infrastructure solutions",
      ar: "شاهد كيف نقوم بتصميم وتنفيذ حلول البنية التحتية للشبكات القوية"
    },
  },
  { 
    title: { en: "Fiber Optic Solutions", ar: "حلول الألياف البصرية" }, 
    description: { en: "Experience unmatched speed...", ar: "استمتع بسرعة وموثوقية لا مثيل لها..." }, 
    detailedDescription: {
      en: "Our fiber optic solutions provide lightning-fast internet speeds and unparalleled reliability. We specialize in end-to-end fiber optic installation, maintenance, and optimization for both commercial and residential applications.",
      ar: "توفر حلول الألياف البصرية لدينا سرعات إنترنت فائقة وموثوقية لا مثيل لها. نحن متخصصون في تركيب الألياف البصرية من البداية إلى النهاية والصيانة والتحسين لكل من التطبيقات التجارية والسكنية."
    },
    features: {
      en: [
        "FTTH (Fiber to the Home) installation",
        "Enterprise-grade fiber backbone",
        "Fiber optic splicing and termination",
        "Network testing and certification",
        "Emergency repair services"
      ],
      ar: [
        "تركيب الألياف إلى المنزل (FTTH)",
        "عمود فقري للألياف بدرجة enterprise",
        "لحام وإنهاء الألياف البصرية",
        "اختبار الشبكة والشهادات",
        "خدمات الإصلاح في حالات الطوارئ"
      ]
    },
    benefits: {
      en: [
        "Gigabit+ internet speeds",
        "Minimal latency and packet loss",
        "Weather-resistant infrastructure",
        "Long-distance signal integrity",
        "Future-ready bandwidth capacity"
      ],
      ar: [
        "سرعات إنترنت تتجاوز الجيجابت",
        "حد أدنى من زمن الوصول وفقدان الحزم",
        "بنية تحتية مقاومة للطقس",
        "سلامة الإشارة لمسافات طويلة",
        "سعة نطاق ترددي جاهزة للمستقبل"
      ]
    },
    icon: <Zap />, 
    gradient: "from-cyan-300 to-blue-500" 
  },
  { 
    title: { en: "Data Center Design", ar: "تصميم مراكز البيانات" }, 
    description: { en: "Custom data centers...", ar: "مراكز بيانات مخصصة..." }, 
    detailedDescription: {
      en: "We design and build state-of-the-art data centers with focus on efficiency, security, and scalability. Our solutions include cooling systems, power management, and robust security measures to protect your critical data.",
      ar: "نقوم بتصميم وبناء مراكز بيانات حديثة تركز على الكفاءة والأمان والقابلية للتوسع. تشمل حلولنا أنظمة التبريد وإدارة الطاقة وإجراءات الأمان القوية لحماية بياناتك الحرجة."
    },
    features: {
      en: [
        "Tier III and IV data center design",
        "Advanced cooling and HVAC systems",
        "Redundant power supply solutions",
        "Physical and cyber security integration",
        "Disaster recovery planning"
      ],
      ar: [
        "تصميم مراكز بيانات من المستوى الثالث والرابع",
        "أنظمة تبريد وتكييف متقدمة",
        "حلول إمداد طاقة احتياطية",
        "تكامل الأمان المادي والإلكتروني",
        "تخطيط استعادة الكوارث"
      ]
    },
    benefits: {
      en: [
        "99.995% uptime guarantee",
        "40% reduced energy costs",
        "Scalable from small to enterprise",
        "Compliance with international standards",
        "Comprehensive monitoring and management"
      ],
      ar: [
        "ضمان وقت تشغيل بنسبة 99.995%",
        "خفض تكاليف الطاقة بنسبة 40%",
        "قابلية التوسع من الصغير إلى المؤسسة",
        "الامتثال للمعايير الدولية",
        "مراقبة وإدارة شاملة"
      ]
    },
    icon: <Database />, 
    gradient: "from-blue-500 to-indigo-400" 
  },
  { 
    title: { en: "Security Systems", ar: "أنظمة الأمان" }, 
    description: { en: "Protect your assets...", ar: "احمِ أصولك..." }, 
    detailedDescription: {
      en: "Comprehensive security solutions including surveillance systems, access control, and cybersecurity measures. We protect both your physical assets and digital infrastructure with cutting-edge technology.",
      ar: "حلول أمنية شاملة تشمل أنظمة المراقبة والتحكم في الوصول وإجراءات الأمن السيبراني. نحمي أصولك المادية والبنية التحتية الرقمية باستخدام أحدث التقنيات."
    },
    features: {
      en: [
        "IP surveillance camera systems",
        "Access control and biometric systems",
        "Intrusion detection systems",
        "Cybersecurity threat monitoring",
        "24/7 security operation center"
      ],
      ar: [
        "أنظمة كاميرات مراقبة IP",
        "أنظمة التحكم في الوصول والبيومترية",
        "أنظمة كشف التسلل",
        "مراقبة تهديدات الأمن السيبراني",
        "مركز عمليات أمني على مدار 24/7"
      ]
    },
    benefits: {
      en: [
        "Real-time threat detection",
        "Remote monitoring capabilities",
        "Reduced security incidents by 85%",
        "Compliance with security regulations",
        "Integrated physical and digital security"
      ],
      ar: [
        "كشف التهديدات في الوقت الحقيقي",
        "قدرات المراقبة عن بُعد",
        "خفض الحوادث الأمنية بنسبة 85%",
        "الامتثال للوائح الأمان",
        "أمان متكامل مادي ورقمي"
      ]
    },
    icon: <Shield />, 
    gradient: "from-indigo-400 to-purple-400" 
  },
  { 
    title: { en: "24/7 Support", ar: "دعم 24/7" }, 
    description: { en: "Always-on support...", ar: "دعم مستمر..." }, 
    detailedDescription: {
      en: "Round-the-clock technical support and maintenance services to ensure your systems are always running optimally. Our dedicated team is available 24/7 to address any issues and provide proactive maintenance.",
      ar: "خدمات الدعم الفني والصيانة على مدار الساعة لضمان تشغيل أنظمتك دائمًا بشكل مثالي. فريقنا المخصص متاح 24/7 لمعالجة أي مشكلات وتقديم الصيانة الاستباقية."
    },
    features: {
      en: [
        "24/7 help desk and remote support",
        "On-site emergency response",
        "Preventive maintenance programs",
        "Dedicated account managers",
        "Regular system health checks"
      ],
      ar: [
        "مكتب المساعدة والدعم عن بُعد 24/7",
        "الاستجابة للطوارئ في الموقع",
        "برامج الصيانة الوقائية",
        "مديري حسابات مخصصين",
        "فحوصات منتظمة لصحة النظام"
      ]
    },
    benefits: {
      en: [
        "Average response time: 15 minutes",
        "95% first-call resolution rate",
        "Proactive issue prevention",
        "Extended equipment lifespan",
        "Customized support packages"
      ],
      ar: [
        "متوسط وقت الاستجابة: 15 دقيقة",
        "معدل حل المشكلات في المكالمة الأولى: 95%",
        "منع استباقي للمشكلات",
        "إطالة عمر المعدات",
        "باقات دعم مخصصة"
      ]
    },
    icon: <Clock />, 
    gradient: "from-purple-400 to-pink-400" 
  },
  { 
    title: { en: "Cloud Integration", ar: "التكامل السحابي" }, 
    description: { en: "Seamless hybrid cloud...", ar: "إعداد سحابي هجين سلس..." }, 
    detailedDescription: {
      en: "Expert cloud integration services that help businesses transition to hybrid and multi-cloud environments. We ensure seamless migration, optimal performance, and cost-effective cloud solutions tailored to your needs.",
      ar: "خدمات تكامل سحابي خبيرة تساعد الشركات على الانتقال إلى بيئات السحابة الهجينة والمتعددة. نضمن الهجرة السلسة والأداء الأمثل وحلول السحابة فعالة التكلفة المصممة خصيصًا لاحتياجاتك."
    },
    features: {
      en: [
        "Multi-cloud strategy implementation",
        "Cloud migration and deployment",
        "Cost optimization and management",
        "Disaster recovery as a service",
        "Cloud security and compliance"
      ],
      ar: [
        "تنفيذ استراتيجية السحابة المتعددة",
        "هجرة السحابة والنشر",
        "تحسين التكلفة والإدارة",
        "استعادة الكوارث كخدمة",
        "أمان السحابة والامتثال"
      ]
    },
    benefits: {
      en: [
        "40% reduction in IT costs",
        "99.9% service availability",
        "Flexible scaling on demand",
        "Enhanced collaboration capabilities",
        "Automated backup and recovery"
      ],
      ar: [
        "خفض تكاليف تكنولوجيا المعلومات بنسبة 40%",
        "توفر الخدمة بنسبة 99.9%",
        "توسيع مرن حسب الطلب",
        "تحسين قدرات التعاون",
        "نسخ احتياطي واستعادة تلقائي"
      ]
    },
    icon: <Cloud />, 
    gradient: "from-pink-400 to-blue-400" 
  },
];