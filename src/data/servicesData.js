
// src/data/serviceData.js
import {
  Globe, Zap, Database, Shield, Clock, Cloud, Laptop, Smartphone,
  Wifi, Camera, Lock, Phone, Video, Car, AlertTriangle, HardDrive,
  Wrench, Settings, Headphones, Server
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: { en: "Web Development", ar: "تطوير المواقع الإلكترونية" },
    description: { en: "Stunning, high-performance websites & web apps", ar: "مواقع وتطبيقات ويب مذهلة وعالية الأداء" },
    detailedDescription: {
      en: "We craft modern, responsive, and lightning-fast websites using React, Next.js, Laravel, and custom solutions tailored to your brand.",
      ar: "نصمم مواقع إلكترونية حديثة ومتجاوبة وسريعة جدًا باستخدام React، Next.js، Laravel وحلول مخصصة تناسب علامتك التجارية."
    },
    icon: <Laptop className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: {
      en: ["Custom Design & UX", "SEO Optimized", "E-commerce Ready", "CMS Integration", "Progressive Web Apps"],
      ar: ["تصميم مخصص وتجربة مستخدم رائعة", "محسن لمحركات البحث", "جاهز للتجارة الإلكترونية", "تكامل أنظمة إدارة المحتوى", "تطبيقات ويب تدريجية"]
    },
    benefits: {
      en: ["Boost conversion rates", "Mobile-first experience", "Fast loading <1.5s", "24/7 uptime"],
      ar: ["زيادة معدلات التحويل", "تجربة موبايل أولاً", "تحميل سريع أقل من 1.5 ثانية", "تشغيل 24/7"]
    }
  },
  {
    id: 2,
    title: { en: "Software & Mobile Apps", ar: "البرمجيات وتطبيقات الموبايل" },
    description: { en: "Custom software & native/hybrid mobile apps", ar: "برمجيات مخصصة وتطبيقات موبايل أصلية/هجينة" },
    detailedDescription: {
      en: "From ERP systems to beautiful iOS & Android apps — we build scalable solutions that grow with your business.",
      ar: "من أنظمة ERP إلى تطبيقات iOS وAndroid رائعة — نبني حلولًا قابلة للتوسع تنمو مع عملك."
    },
    icon: <Smartphone className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: {
      en: ["Cross-platform (React Native/Flutter)", "Native iOS & Android", "Backend Development", "API Integration"],
      ar: ["متعدد المنصات (React Native/Flutter)", "تطبيقات أصلية لـ iOS وAndroid", "تطوير الخلفية", "تكامل API"]
    },
    benefits: {
      en: ["Offline functionality", "Push notifications", "Secure authentication", "Regular updates"],
      ar: ["عمل بدون إنترنت", "إشعارات فورية", "مصادقة آمنة", "تحديثات دورية"]
    }
  },
  {
    id: 3,
    title: { en: "Internet Solution", ar: "حلول الإنترنت" },
    description: { en: "High-speed, reliable fiber & wireless connectivity", ar: "اتصال فائق السرعة والموثوقية" },
    detailedDescription: {
      en: "Enterprise-grade internet solutions with dedicated bandwidth, redundancy, and 99.99% uptime.",
      ar: "حلول إنترنت بمستوى المؤسسات مع نطاق ترددي مخصص واحتياطي ووقت تشغيل 99.99%."
    },
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-400 to-orange-500",
    features: {
      en: ["Fiber Optic", "Dedicated Leased Lines", "Load Balancing", "SD-WAN"],
      ar: ["الألياف البصرية", "خطوط مخصصة مؤجرة", "موازنة التحميل", "شبكة SD-WAN"]
    },
    benefits: {
      en: ["Gigabit speeds", "Zero downtime failover", "24/7 monitoring"],
      ar: ["سرعات جيجابت", "تحويل فوري بدون انقطاع", "مراقبة 24/7"]
    }
  },
  {
    id: 4,
    title: { en: "Networking Solution", ar: "حلول الشبكات" },
    description: { en: "Enterprise network infrastructure design", ar: "تصميم بنية تحتية لشبكات المؤسسات" },
    detailedDescription: {
      en: "Complete LAN/WAN, structured cabling, switches, routers & network security implementation.",
      ar: "شبكات محلية/واسعة كاملة، كابلات منظمة، سويتشات، راوترات وتطبيق أمان الشبكة."
    },
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-600",
    features: {
      en: ["Cisco/MikroTik Certified", "VLAN & QoS", "VPN & Site-to-Site", "Network Audit"],
      ar: ["معتمد من Cisco/MikroTik", "تقسيم VLAN وQoS", "VPN واتصال بين المواقع", "تدقيق الشبكة"]
    },
    benefits: {
      en: ["High performance", "Secure connections", "Scalable design", "Full visibility"],
      ar: ["أداء عالي", "اتصالات آمنة", "تصميم قابل للتوسع", "رؤية كاملة للشبكة"]
    }
  },
  {
    id: 5,
    title: { en: "Support Solutions", ar: "حلول الدعم الفني" },
    description: { en: "24/7 system setup, configuration & support", ar: "إعداد وتهيئة ودعم الأنظمة 24/7" },
    detailedDescription: {
      en: "On-demand and annual maintenance contracts with guaranteed response times.",
      ar: "عقود صيانة سنوية وعند الطلب مع أوقات استجابة مضمونة."
    },
    icon: <Headphones className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-600",
    features: {
      en: ["Remote + Onsite Support", "SLA-based Response", "Proactive Monitoring", "Dedicated Engineer"],
      ar: ["دعم عن بُعد وفي الموقع", "استجابة حسب اتفاقية SLA", "مراقبة استباقية", "مهندس مخصص"]
    },
    benefits: {
      en: ["Fast resolution", "Minimized downtime", "Predictable costs", "Peace of mind"],
      ar: ["حل سريع", "أقل وقت تعطل", "تكاليف متوقعة", "راحة بال"]
    }
  },
  {
    id: 6,
    title: { en: "RFID & Access Control System", ar: "أنظمة RFID والتحكم في الوصول" },
    description: { en: "Advanced biometric & card access systems", ar: "أنظمة بيومترية وبطاقات متقدمة" },
    detailedDescription: {
      en: "Face recognition, fingerprint, RFID cards, turnstiles & integration with HR/payroll.",
      ar: "التعرف على الوجه، البصمة، بطاقات RFID، بوابات دوارة وتكامل مع HR/الرواتب."
    },
    icon: <Lock className="w-8 h-8" />,
    gradient: "from-red-500 to-rose-600",
    features: {
      en: ["Facial Recognition", "Fingerprint & Card", "Turnstiles & Gates", "HR Integration"],
      ar: ["التعرف على الوجه", "بصمة وبطاقات", "بوابات دوارة", "تكامل مع شؤون الموظفين"]
    },
    benefits: {
      en: ["Enhanced security", "Accurate attendance", "Real-time reports", "Easy management"],
      ar: ["أمان محسّن", "تسجيل حضور دقيق", "تقارير فورية", "إدارة سهلة"]
    }
  },
  {
    id: 7,
    title: { en: "Audio Video Intercom Solution", ar: "حلول الإنتركوم الصوتي والمرئي" },
    description: { en: "IP-based intercom & video door systems", ar: "أنظمة إنتركوم IP وفيديو أبواب" },
    detailedDescription: {
      en: "Modern villa & apartment intercom with mobile app control and cloud recording.",
      ar: "إنتركوم فلل وشقق حديث مع تحكم عبر التطبيق وسحابة التسجيل."
    },
    icon: <Video className="w-8 h-8" />,
    gradient: "from-teal-500 to-cyan-600",
    features: {
      en: ["Mobile App Control", "Cloud Recording", "Night Vision", "Two-way Audio"],
      ar: ["تحكم عبر تطبيق الموبايل", "تسجيل سحابي", "رؤية ليلية", "صوت ثنائي الاتجاه"]
    },
    benefits: {
      en: ["Answer from anywhere", "Secure entry", "Full history log", "Easy installation"],
      ar: ["الرد من أي مكان", "دخول آمن", "سجل كامل", "تركيب سهل"]
    }
  },
  {
    id: 8,
    title: { en: "Vehicle Tracking System", ar: "نظام تتبع المركبات" },
    description: { en: "Real-time GPS fleet tracking & management", ar: "تتبع أسطول المركبات في الوقت الحقيقي" },
    detailedDescription: {
      en: "Live location, fuel monitoring, driver behavior, geo-fencing & detailed reports.",
      ar: "الموقع المباشر، مراقبة الوقود، سلوك السائق، السياج الجغرافي وتقارير مفصلة."
    },
    icon: <Car className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-600",
    features: {
      en: ["Live Tracking", "Fuel Monitoring", "Driver Behavior", "Geo-fencing Alerts"],
      ar: ["تتبع مباشر", "مراقبة الوقود", "سلوك السائق", "تنبيهات السياج الجغرافي"]
    },
    benefits: {
      en: ["Reduce fuel costs", "Improve safety", "Optimize routes", "Detailed reports"],
      ar: ["تقليل استهلاك الوقود", "تحسين السلامة", "تحسين المسارات", "تقارير مفصلة"]
    }
  },
  {
    id: 9,
    title: { en: "Firewall Solution", ar: "حلول الجدار الناري" },
    description: { en: "Next-gen firewall & threat protection", ar: "جدار ناري الجيل التالي وحماية التهديدات" },
    detailedDescription: {
      en: "Fortinet, Sophos, Palo Alto — complete UTM, IPS, VPN & zero-trust security.",
      ar: "Fortinet، Sophos، Palo Alto — UTM كامل، IPS، VPN وأمان Zero-Trust."
    },
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-red-600 to-purple-600",
    features: {
      en: ["Next-Gen Firewall", "Intrusion Prevention", "VPN & Remote Access", "Threat Intelligence"],
      ar: ["جدار ناري الجيل التالي", "منع التسلل", "VPN والوصول عن بُعد", "استخبارات التهديدات"]
    },
    benefits: {
      en: ["Block advanced threats", "Secure remote work", "Central management", "Compliance ready"],
      ar: ["حجب التهديدات المتقدمة", "عمل عن بُعد آمن", "إدارة مركزية", "متوافق مع اللوائح"]
    }
  },
  {
    id: 10,
    title: { en: "IP PBX & IP Telephone Solution", ar: "حلول IP PBX والهاتف IP" },
    description: { en: "Modern VoIP business phone systems", ar: "أنظمة هواتف الأعمال VoIP الحديثة" },
    detailedDescription: {
      en: "3CX, Yeastar, Grandstream — cloud or on-premise with mobile extensions.",
      ar: "3CX، Yeastar، Grandstream — سحابي أو محلي مع امتدادات الموبايل."
    },
    icon: <Phone className="w-8 h-8" />,
    gradient: "from-sky-500 to-blue-600",
    features: {
      en: ["Mobile Extensions", "Video Calls", "Call Recording", "IVR & Queues"],
      ar: ["امتدادات موبايل", "مكالمات فيديو", "تسجيل المكالمات", "IVR وطوابير الانتظار"]
    },
    benefits: {
      en: ["Lower phone bills", "Work from anywhere", "Professional image", "Easy scaling"],
      ar: ["فواتير أقل", "العمل من أي مكان", "صورة احترافية", "توسع سهل"]
    }
  },
  {
    id: 11,
    title: { en: "Smart Office Solution", ar: "حلول المكتب الذكي" },
    description: { en: "Video conferencing & collaboration systems", ar: "أنظمة مؤتمرات الفيديو والتعاون" },
    detailedDescription: {
      en: "Zoom Rooms, Microsoft Teams Rooms, smart boards & wireless presentation.",
      ar: "Zoom Rooms، Microsoft Teams Rooms، السبورات الذكية والعروض اللاسلكية."
    },
    icon: <Video className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-600",
    features: {
      en: ["Zoom/Teams Rooms", "Wireless Presentation", "Interactive Whiteboards", "Room Scheduling"],
      ar: ["غرف Zoom/Teams", "عروض لاسلكية", "سبورات تفاعلية", "جدولة الغرف"]
    },
    benefits: {
      en: ["Better meetings", "No cables", "Engage teams", "Save time"],
      ar: ["اجتماعات أفضل", "بدون كابلات", "تفاعل أكبر", "توفير الوقت"]
    }
  },
  {
    id: 12,
    title: { en: "Wi-Fi & Access Point Solution", ar: "حلول الواي فاي والنقاط اللاسلكية" },
    description: { en: "Enterprise Wi-Fi 6/6E coverage", ar: "تغطية Wi-Fi 6/6E للمؤسسات" },
    detailedDescription: {
      en: "Site survey, heatmapping, seamless roaming & guest portal solutions.",
      ar: "مسح الموقع، خرائط الحرارة، التجوال السلس وبوابة الضيوف."
    },
    icon: <Wifi className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-500",
    features: {
      en: ["Wi-Fi 6/6E", "Site Survey & Heatmap", "Seamless Roaming", "Guest Portal"],
      ar: ["واي فاي 6/6E", "مسح الموقع وخرائط الحرارة", "تجوال سلس", "بوابة الضيوف"]
    },
    benefits: {
      en: ["Ultra-fast Wi-Fi", "Full coverage", "Secure guest access", "Easy management"],
      ar: ["واي فاي فائق السرعة", "تغطية كاملة", "وصول آمن للضيوف", "إدارة سهلة"]
    }
  },
  {
    id: 13,
    title: { en: "Digital Signage Solution", ar: "حلول اللافتات الرقمية" },
    description: { en: "Interactive digital displays & content management", ar: "شاشات رقمية تفاعلية وإدارة المحتوى" },
    detailedDescription: {
      en: "4K displays, cloud CMS, scheduling, live feeds & touch interaction.",
      ar: "شاشات 4K، نظام إدارة محتوى سحابي، جدولة، بث مباشر وتفاعل باللمس."
    },
    icon: <Camera className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-500",
    features: {
      en: ["4K Displays", "Cloud CMS", "Content Scheduling", "Touch & Interactive"],
      ar: ["شاشات 4K", "نظام إدارة محتوى سحابي", "جدولة المحتوى", "تفاعل باللمس"]
    },
    benefits: {
      en: ["Eye-catching displays", "Update instantly", "Engage customers", "Multi-location control"],
      ar: ["شاشات جذابة", "تحديث فوري", "جذب العملاء", "تحكم متعدد المواقع"]
    }
  },
  {
    id: 14,
    title: { en: "Data Center Solution", ar: "حلول مراكز البيانات" },
    description: { en: "Secure, scalable Tier III+ data centers", ar: "مراكز بيانات آمنة وقابلة للتوسع Tier III+" },
    detailedDescription: {
      en: "Design, build, colocation, cooling, power redundancy & disaster recovery.",
      ar: "التصميم، البناء، الاستضافة المشتركة، التبريد، احتياطي الطاقة واستعادة الكوارث."
    },
    icon: <Server className="w-8 h-8" />,
    gradient: "from-gray-600 to-slate-800",
    features: {
      en: ["Tier III+ Design", "Redundant Power & Cooling", "Colocation", "Disaster Recovery"],
      ar: ["تصميم Tier III+", "طاقة وتبريد احتياطي", "استضافة مشتركة", "استعادة الكوارث"]
    },
    benefits: {
      en: ["Maximum uptime", "Scalable growth", "Secure facility", "24/7 monitoring"],
      ar: ["أعلى وقت تشغيل", "نمو قابل للتوسع", "منشأة آمنة", "مراقبة 24/7"]
    }
  },
  {
    id: 15,
    title: { en: "Burglar Alarm System", ar: "نظام إنذار السرقة" },
    description: { en: "Smart intrusion detection & alerts", ar: "كشف التسلل الذكي والتنبيهات" },
    detailedDescription: {
      en: "Motion sensors, glass break, siren, mobile alerts & armed response integration.",
      ar: "حساسات الحركة، كسر الزجاج، صفارة، تنبيهات الموبايل وتكامل الاستجابة المسلحة."
    },
    icon: <AlertTriangle className="w-8 h-8" />,
    gradient: "from-red-600 to-orange-600",
    features: {
      en: ["Motion & Glass Break", "Mobile Alerts", "Siren & Strobe", "Armed Response Link"],
      ar: ["حركة وكسر زجاج", "تنبيهات الموبايل", "صفارة وإضاءة", "ربط مع الاستجابة المسلحة"]
    },
    benefits: {
      en: ["Instant alerts", "Deter intruders", "Fast response", "Insurance benefits"],
      ar: ["تنبيهات فورية", "ردع المتسللين", "استجابة سريعة", "فوائد تأمينية"]
    }
  },
  {
    id: 16,
    title: { en: "Hardware Solution", ar: "حلول الأجهزة" },
    description: { en: "Tailored servers, workstations & peripherals", ar: "سيرفرات ومحطات عمل وأجهزة طرفية مخصصة" },
    detailedDescription: {
      en: "HP, Dell, Lenovo enterprise hardware with warranty & support.",
      ar: "أجهزة HP، Dell، Lenovo بمستوى المؤسسات مع الضمان والدعم."
    },
    icon: <HardDrive className="w-8 h-8" />,
    gradient: "from-zinc-600 to-zinc-800",
    features: {
      en: ["Servers & Workstations", "Custom Configuration", "Warranty Support", "Fast Delivery"],
      ar: ["سيرفرات ومحطات عمل", "تكوين مخصص", "دعم الضمان", "تسليم سريع"]
    },
    benefits: {
      en: ["Reliable performance", "Future-proof", "Local support", "Best pricing"],
      ar: ["أداء موثوق", "مستعد للمستقبل", "دعم محلي", "أفضل الأسعار"]
    }
  },
  {
    id: 17,
    title: { en: "UPS & Power Backup Solution", ar: "حلول الطاقة الاحتياطية UPS" },
    description: { en: "Uninterruptible power systems", ar: "أنظمة طاقة غير منقطعة" },
    detailedDescription: {
      en: "APC, Eaton, Vertiv — online double-conversion UPS with generator integration.",
      ar: "APC، Eaton، Vertiv — UPS تحويل مزدوج أونلاين مع تكامل المولد."
    },
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-amber-500 to-yellow-600",
    features: {
      en: ["Online Double Conversion", "Generator Compatible", "Battery Monitoring", "Remote Management"],
      ar: ["تحويل مزدوج أونلاين", "متوافق مع المولدات", "مراقبة البطارية", "إدارة عن بُعد"]
    },
    benefits: {
      en: ["Zero downtime", "Protect equipment", "Clean power", "Long battery life"],
      ar: ["لا انقطاع", "حماية المعدات", "طاقة نظيفة", "عمر بطارية طويل"]
    }
  },
  {
    id: 18,
    title: { en: "Maintenance Agreement", ar: "عقود الصيانة" },
    description: { en: "Annual maintenance contracts (AMC)", ar: "عقود صيانة سنوية" },
    detailedDescription: {
      en: "Comprehensive coverage for all IT, security & networking systems with priority support.",
      ar: "تغطية شاملة لجميع أنظمة تكنولوجيا المعلومات والأمان والشبكات مع دعم أولوية."
    },
    icon: <Wrench className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-600",
    features: {
      en: ["Priority Support", "Preventive Maintenance", "Spare Parts Included", "Regular Health Checks"],
      ar: ["دعم أولوية", "صيانة وقائية", "قطع غيار مشمولة", "فحوصات دورية"]
    },
    benefits: {
      en: ["Lower total cost", "Longer equipment life", "No surprises", "Peace of mind"],
      ar: ["تكلفة أقل", "عمر أطول للأجهزة", "لا مفاجآت", "راحة بال"]
    }
  },
  {
    id: 19,
    title: { en: "CCTV & Security Solutions", ar: "حلول كاميرات المراقبة والأمن" },
    description: { en: "AI-powered surveillance systems", ar: "أنظمة مراقبة مدعومة بالذكاء الاصطناعي" },
    detailedDescription: {
      en: "4K IP cameras, facial recognition, ANPR, cloud/storage & mobile viewing.",
      ar: "كاميرات IP بدقة 4K، التعرف على الوجه، قراءة اللوحات، تخزين سحابي وعرض عبر الموبايل."
    },
    icon: <Camera className="w-8 h-8" />,
    gradient: "from-violet-600 to-purple-700",
    features: {
      en: ["4K AI Cameras", "Facial Recognition", "ANPR", "Cloud + Local Storage"],
      ar: ["كاميرات 4K بالذكاء الاصطناعي", "التعرف على الوجه", "قراءة اللوحات", "تخزين سحابي ومحلي"]
    },
    benefits: {
      en: ["Clear evidence", "Smart alerts", "Remote viewing", "Easy search"],
      ar: ["دليل واضح", "تنبيهات ذكية", "عرض عن بُعد", "بحث سهل"]
    }
  },
  {
    id: 20,
    title: { en: "Cyber Security Solutions", ar: "حلول الأمن السيبراني" },
    description: { en: "Complete protection against digital threats", ar: "حماية شاملة ضد التهديدات الرقمية" },
    detailedDescription: {
      en: "Penetration testing, endpoint protection, SIEM, email security & training.",
      ar: "اختبار الاختراق، حماية النقاط الطرفية، SIEM، أمان البريد والتدريب."
    },
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-rose-600 to-pink-700",
    features: {
      en: ["Penetration Testing", "Endpoint Protection", "SIEM & SOC", "Email Security"],
      ar: ["اختبار الاختراق", "حماية الأجهزة الطرفية", "SIEM ومركز عمليات الأمن", "أمان البريد الإلكتروني"]
    },
    benefits: {
      en: ["Stop attacks early", "Compliance achieved", "24/7 protection", "Team awareness"],
      ar: ["إيقاف الهجمات مبكرًا", "الامتثال للمعايير", "حماية 24/7", "توعية الفريق"]
    }
  }
];