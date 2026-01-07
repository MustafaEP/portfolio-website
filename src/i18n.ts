export type Lang = "tr" | "en";

type Translations = {
  navbar: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  hero: {
    title: string;
    role: string;
    subtitle: string;
    badge: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    text: string;
  };
  experience: {
    title: string;
    items: {
      company: string;
      role: string;
      period: string;
      location: string;
      bullets: string[];
    }[];
  };
  projects: {
    title: string;
    featured: {
      name: string;
      role: string;
      tagline: string;
      problem: string;
      solution: string;
      outcome?: string;
      technologies: string;
      highlights: string[];
      link?: string;
    }[];
    other: {
      name: string;
      role: string;
      tagline: string;
      technologies: string;
      link?: string;
    }[];
  };
  skills: {
    title: string;
    domains: {
      category: string;
      skills: string[];
    }[];
  };
  certifications: {
    title: string;
    items: {
      name: string;
      provider: string;
      date: string;
      link: string;
    }[];
  };
  contact: {
    title: string;
    text: string;
    cta: string;
  };
};

export const translations: Record<Lang, Translations> = {
  tr: {
    navbar: {
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      certifications: "Sertifikalar",
      contact: "İletişim",
    },
    hero: {
      title: "Mustafa Erhan Portakal",
      role: "Full-Stack Developer",
      subtitle:
        "React, Node.js ve ASP.NET Core ile ölçeklenebilir web uygulamaları geliştiriyorum. API tasarımı, sistem entegrasyonu ve üretime hazır çözümler sunma konusunda deneyimliyim.",
      badge: "İş fırsatlarına açık",
      ctaPrimary: "Projelerime göz at",
      ctaSecondary: "CV'mi indir",
    },
    about: {
      title: "Hakkımda",
      text:
        "React, Node.js, TypeScript ve ASP.NET Core kullanarak üretime hazır uygulamalar geliştirme konusunda deneyimli Full-Stack Developer. " +
        "Spotify ve Gemini AI API'lerini entegre eden Moodify-AI adlı full-stack müzik öneri platformunu geliştirdim. " +
        "Staj süresince iyi yapılandırılmış RESTful API'ler geliştirdim ve sorunsuz entegrasyon sağlamak için frontend ekipleriyle yakın işbirliği yaptım. " +
        "Şu anda TypeScript uzmanlığımı geliştiriyorum ve uluslararası işbirliği için İngilizce yeterliliğimi aktif olarak geliştirirken IBM Full Stack Software Developer Professional Certificate programını tamamlıyorum. " +
        "Ölçeklenebilir SaaS ürünleri ve AI destekli çözümlere odaklanan full-stack veya backend rollerinde ilgileniyorum.",
    },
    experience: {
      title: "Deneyim",
      items: [
        {
          company: "BRM SOFTWARE",
          role: "ASP.NET Developer Intern",
          period: "09/2024 – 02/2025",
          location: "Bursa, Türkiye",
          bullets: [
            "ASP.NET Core ve Entity Framework ile birden fazla RESTful API endpoint tasarladım ve geliştirdim.",
            "Veritabanı sorgularını optimize ederek API cevap sürelerini önemli ölçüde iyileştirdim.",
            "Backend kod kalitesini artırmak için birim ve entegrasyon testlerine katkıda bulundum.",
          ],
        },
        {
          company: "YM IDIS",
          role: ".NET Software Engineer Intern",
          period: "08/2022 – 09/2022",
          location: "İstanbul, Türkiye",
          bullets: [
            "Kurumsal ortamda MVC mimarisi ile .NET uygulamaları geliştirdim.",
            "SQL Server ile CRUD işlemleri ve iş mantığı uyguladım.",
          ],
        },
      ],
    },
    projects: {
      title: "Öne Çıkan Projeler",
      featured: [
        {
          name: "Moodify-AI",
          role: "Full-Stack Developer",
          tagline: "AI destekli ruh haline göre müzik önerileri",
          problem:
            "Kullanıcılar, streaming platformlarında mevcut ruh hallerine uygun müzik bulmakta zorlanıyorlar.",
          solution:
            "Kullanıcı duygusunu analiz eden ve doğal dil anlama için Gemini AI kullanan, kişiselleştirilmiş Spotify önerileri sunan full-stack bir platform geliştirdim.",
          outcome:
            "İki büyük API'yi (Spotify + Gemini AI) gerçek zamanlı duygu analizi ile entegre ettim",
          technologies: "React, Node.js, Express, MongoDB, Spotify API, Gemini AI",
          highlights: [
            "Frontend-backend iletişimi için RESTful API mimarisi tasarladım",
            "Spotify kimlik doğrulaması için OAuth akışı uyguladım",
            "Gemini AI kullanarak duygu analizi pipeline'ı oluşturdum",
          ],
          link: "https://github.com/MustafaEP/Moodify-AI",
        },
        {
          name: "Yönetim Paneli",
          role: "Full-Stack Developer",
          tagline: "Rol tabanlı erişim kontrolü ile kurumsal yönetim platformu",
          problem:
            "Çok katmanlı organizasyonlar, üye yönetimi, aidat takibi ve bölge/şube koordinasyonu için merkezi bir sisteme ihtiyaç duyuyor.",
          solution:
            "RBAC ile üye yönetimi, aidat takibi, bölge/şube yönetimi, içerik yönetimi ve evrak üretimi modüllerini içeren çok katmanlı bir platform geliştirdim.",
          outcome: "Docker containerization ve mikroservis mimarisi ile ölçeklenebilir sistem",
          technologies: "TypeScript, NestJS, Prisma, React, Material-UI, Docker, PostgreSQL",
          highlights: [
            "Rol tabanlı erişim kontrolü (RBAC) sistemi tasarladım",
            "Docker ile mikroservis mimarisi uyguladım",
            "Karmaşık organizasyonel hiyerarşi yönetimi geliştirdim",
          ],
          link: "https://github.com/MustafaEP/yonetim-paneli",
        },
        {
          name: "AI Emotion Project",
          role: "Full-Stack Developer",
          tagline: "Metinlerin duygusal tonunu analiz eden AI tabanlı platform",
          problem:
            "Kullanıcılar metin içeriğindeki duygusal tonu ve duyguları hızlı ve doğru bir şekilde analiz etmek istiyorlar.",
          solution:
            "Hugging Face'de Python Gradio AI servisi, .NET 8.0 backend API ve React frontend içeren full-stack bir uygulama oluşturdum.",
          outcome: "Kullanıcı bazlı analiz geçmişi ve RESTful API desteği",
          technologies:
            "Python, Gradio, Transformers, Hugging Face, .NET 8.0, Entity Framework Core, SQLite, React, Vite",
          highlights: [
            "Hugging Face Transformers ile duygu analizi modeli entegre ettim",
            "Cross-platform için React ve React Native geliştirdim",
            "Kullanıcı analiz geçmişi için backend API tasarladım",
          ],
          link: "https://github.com/MustafaEP/AiEmotionProject",
        },
      ],
      other: [
        {
          name: "Soccer App",
          role: "Backend Developer",
          tagline: "Temiz mimari ile takım ve maç yönetimi API'si",
          technologies: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/MustafaEP/SoccerApp",
        },
        {
          name: "TÜBİTAK Rover - Anti-Skid System",
          role: "Gömülü Yazılım Geliştirici",
          tagline: "Otonom rover için stabilite kontrol sistemi",
          technologies: "Arduino, C++, Raspberry Pi, Python, GPS, Bluetooth",
          link:
            "https://github.com/Rover-Anti-Skid-System/Rover-Wheel-Design-with-Anti-Skid-System",
        },
        {
          name: "IBM Full Stack Software Engineering",
          role: "Full-Stack Developer",
          tagline: "IBM sertifika programı için kapsamlı proje arşivi",
          technologies: "Python, JavaScript, React, Node.js, Flask, HTML, CSS, Git",
          link: "https://github.com/MustafaEP/IBM-Full-Stack-Software-Engineering",
        },
      ],
    },
    skills: {
      title: "Teknik Yetenekler",
      domains: [
        {
          category: "Frontend Geliştirme",
          skills: [
            "React & TypeScript",
            "Tailwind CSS",
            "Responsive Tasarım",
            "State Management",
          ],
        },
        {
          category: "Backend Geliştirme",
          skills: [
            "Node.js & Express",
            "ASP.NET Core",
            "RESTful API Tasarımı",
            "Kimlik Doğrulama (JWT, OAuth2)",
          ],
        },
        {
          category: "Veritabanı & Depolama",
          skills: [
            "MongoDB",
            "PostgreSQL",
            "MS SQL Server",
            "Entity Framework",
          ],
        },
        {
          category: "DevOps & Araçlar",
          skills: [
            "Git & GitHub",
            "Docker",
            "CI/CD Temelleri",
            "Kubernetes (Öğrenme aşamasında)",
          ],
        },
      ],
    },
    certifications: {
      title: "Sertifikalar",
      items: [
        {
          name: "Introduction to Software Engineering",
          provider: "IBM / Coursera",
          date: "19/10/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/2D7DCC192333E111BF43AE7703724E49",
        },
        {
          name: "Introduction to Cloud Computing",
          provider: "IBM / Coursera",
          date: "01/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/6XGRYV9R3N6M",
        },
        {
          name: "Introduction to HTML, CSS, & JavaScript",
          provider: "IBM / Coursera",
          date: "05/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/M737G5HIOLSR",
        },
        {
          name: "Getting Started with Git and GitHub",
          provider: "IBM / Coursera",
          date: "09/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/96YB8I5KSLED",
        },
        {
          name: "Developing Front-End Apps with React",
          provider: "IBM / Coursera",
          date: "15/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/VXKF0QT8UUKU",
        },
        {
          name: "Developing Back-End Apps with Node.js and Express",
          provider: "IBM / Coursera",
          date: "19/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/NJT5L5CJFI1S",
        },
        {
          name: "Python for Data Science, AI & Development",
          provider: "IBM / Coursera",
          date: "26/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/A4F3BYT1VDOW",
        },
        {
          name: "Developing AI Applications with Python and Flask",
          provider: "IBM / Coursera",
          date: "29/11/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/WUV2ABTV36NQ",
        },
        {
          name: "Django Application Development with SQL and Databases",
          provider: "IBM / Coursera",
          date: "03/12/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/1SHVXOJ4X0ZG",
        },
        {
          name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
          provider: "IBM / Coursera",
          date: "15/12/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/6S74R0Z0N6F1",
        },
        {
          name: "Application Development using Microservices and Serverless",
          provider: "IBM / Coursera",
          date: "24/12/2025",
          link:
            "https://www.coursera.org/account/accomplishments/verify/R0WQAGRJJBZG",
        },
      ],
    },
    contact: {
      title: "Birlikte Çalışalım",
      text:
        "Full-Stack Developer olarak tam zamanlı fırsatları aktif olarak arıyorum. Bir ürün veya ekip kuruyorsanız ve uygun olduğumu düşünüyorsanız, sizden haber almak isterim.",
      cta: "İletişime geç",
    },
  },

  en: {
    navbar: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certificates",
      contact: "Contact",
    },
    hero: {
      title: "Mustafa Erhan Portakal",
      role: "Full-Stack Developer",
      subtitle:
        "Building scalable web applications with React, Node.js, and ASP.NET Core. Experienced in API design, system integration, and delivering production-ready solutions.",
      badge: "Open to opportunities",
      ctaPrimary: "View my work",
      ctaSecondary: "Download CV",
    },
    about: {
      title: "About",
      text:
        "Full-Stack Developer with hands-on experience building production-ready applications using React, Node.js, TypeScript, and ASP.NET Core. " +
        "Developed Moodify-AI, a full-stack music recommendation platform integrating Spotify and Gemini AI APIs. " +
        "Delivered well-structured RESTful APIs during internship and collaborated closely with frontend teams to ensure smooth integration. " +
        "Currently improving TypeScript expertise and completing the IBM Full Stack Software Developer Professional Certificate while actively developing English proficiency for international collaboration. " +
        "Interested in full-stack or backend roles focused on scalable SaaS products and AI-powered solutions.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "BRM SOFTWARE",
          role: "ASP.NET Developer Intern",
          period: "09/2024 – 02/2025",
          location: "Bursa, Turkey",
          bullets: [
            "Designed and implemented multiple RESTful API endpoints using ASP.NET Core and Entity Framework.",
            "Optimized database queries and significantly improved API response times.",
            "Contributed to unit and integration tests to increase backend code quality.",
          ],
        },
        {
          company: "YM IDIS",
          role: ".NET Software Engineer Intern",
          period: "08/2022 – 09/2022",
          location: "Istanbul, Turkey",
          bullets: [
            "Developed .NET applications with MVC architecture in an enterprise environment.",
            "Implemented CRUD operations and business logic with SQL Server.",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      featured: [
        {
          name: "Moodify-AI",
          role: "Full-Stack Developer",
          tagline: "AI-powered mood-based music recommendations",
          problem:
            "Users struggle to find music that matches their current emotional state across streaming platforms.",
          solution:
            "Built a full-stack platform that analyzes user sentiment and provides personalized Spotify recommendations using Gemini AI for natural language understanding.",
          outcome:
            "Integrated two major APIs (Spotify + Gemini AI) with real-time sentiment analysis",
          technologies: "React, Node.js, Express, MongoDB, Spotify API, Gemini AI",
          highlights: [
            "Designed RESTful API architecture for seamless frontend-backend communication",
            "Implemented OAuth flow for Spotify authentication",
            "Built sentiment analysis pipeline using Gemini AI",
          ],
          link: "https://github.com/MustafaEP/Moodify-AI",
        },
        {
          name: "Management Panel",
          role: "Full-Stack Developer",
          tagline: "Enterprise management platform with role-based access control",
          problem:
            "Multi-tier organizations need a centralized system for member management, fee tracking, and region/branch coordination.",
          solution:
            "Developed a multi-tier platform with RBAC including member management, fee tracking, region/branch management, content management, and document generation modules.",
          outcome: "Scalable system with Docker containerization and microservices architecture",
          technologies:
            "TypeScript, NestJS, Prisma, React, Material-UI, Docker, PostgreSQL",
          highlights: [
            "Designed role-based access control (RBAC) system",
            "Implemented microservices architecture with Docker",
            "Built complex organizational hierarchy management",
          ],
          link: "https://github.com/MustafaEP/yonetim-paneli",
        },
        {
          name: "AI Emotion Project",
          role: "Full-Stack Developer",
          tagline: "AI-based platform for analyzing emotional tone in text",
          problem:
            "Users need to quickly and accurately analyze emotional tone and sentiment in text content.",
          solution:
            "Created a full-stack application featuring Python Gradio AI service on Hugging Face, .NET 8.0 backend API, and React frontend.",
          outcome: "User-based analysis history and RESTful API support",
          technologies:
            "Python, Gradio, Transformers, Hugging Face, .NET 8.0, Entity Framework Core, SQLite, React, Vite",
          highlights: [
            "Integrated sentiment analysis model with Hugging Face Transformers",
            "Developed React and React Native for cross-platform support",
            "Designed backend API for user analysis history",
          ],
          link: "https://github.com/MustafaEP/AiEmotionProject",
        },
      ],
      other: [
        {
          name: "Soccer App",
          role: "Backend Developer",
          tagline: "Team and match management API with clean architecture",
          technologies: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/MustafaEP/SoccerApp",
        },
        {
          name: "TUBITAK Rover - Anti-Skid System",
          role: "Embedded Software Developer",
          tagline: "Autonomous rover stability control system",
          technologies: "Arduino, C++, Raspberry Pi, Python, GPS, Bluetooth",
          link:
            "https://github.com/Rover-Anti-Skid-System/Rover-Wheel-Design-with-Anti-Skid-System",
        },
        {
          name: "IBM Full Stack Software Engineering",
          role: "Full-Stack Developer",
          tagline: "Comprehensive project archive for IBM certificate program",
          technologies: "Python, JavaScript, React, Node.js, Flask, HTML, CSS, Git",
          link: "https://github.com/MustafaEP/IBM-Full-Stack-Software-Engineering",
        },
      ],
    },
    skills: {
      title: "Technical Capabilities",
      domains: [
        {
          category: "Frontend Development",
          skills: [
            "React & TypeScript",
            "Tailwind CSS",
            "Responsive Design",
            "State Management",
          ],
        },
        {
          category: "Backend Development",
          skills: [
            "Node.js & Express",
            "ASP.NET Core",
            "RESTful API Design",
            "Authentication (JWT, OAuth2)",
          ],
        },
        {
          category: "Databases & Storage",
          skills: [
            "MongoDB",
            "PostgreSQL",
            "MS SQL Server",
            "Entity Framework",
          ],
        },
        {
          category: "DevOps & Tools",
          skills: [
            "Git & GitHub",
            "Docker",
            "CI/CD Basics",
            "Kubernetes (Learning)",
          ],
        },
      ],
    },
    certifications: {
      title: "Certificates",
      items: [
        {
          name: "Introduction to Software Engineering",
          provider: "IBM / Coursera",
          date: "2025-10-19",
          link:
            "https://www.coursera.org/account/accomplishments/verify/2D7DCC192333E111BF43AE7703724E49",
        },
        {
          name: "Introduction to Cloud Computing",
          provider: "IBM / Coursera",
          date: "2025-11-01",
          link:
            "https://www.coursera.org/account/accomplishments/verify/6XGRYV9R3N6M",
        },
        {
          name: "Introduction to HTML, CSS, & JavaScript",
          provider: "IBM / Coursera",
          date: "2025-11-05",
          link:
            "https://www.coursera.org/account/accomplishments/verify/M737G5HIOLSR",
        },
        {
          name: "Getting Started with Git and GitHub",
          provider: "IBM / Coursera",
          date: "2025-11-09",
          link:
            "https://www.coursera.org/account/accomplishments/verify/96YB8I5KSLED",
        },
        {
          name: "Developing Front-End Apps with React",
          provider: "IBM / Coursera",
          date: "2025-11-15",
          link:
            "https://www.coursera.org/account/accomplishments/verify/VXKF0QT8UUKU",
        },
        {
          name: "Developing Back-End Apps with Node.js and Express",
          provider: "IBM / Coursera",
          date: "2025-11-19",
          link:
            "https://www.coursera.org/account/accomplishments/verify/NJT5L5CJFI1S",
        },
        {
          name: "Python for Data Science, AI & Development",
          provider: "IBM / Coursera",
          date: "2025-11-26",
          link:
            "https://www.coursera.org/account/accomplishments/verify/A4F3BYT1VDOW",
        },
        {
          name: "Developing AI Applications with Python and Flask",
          provider: "IBM / Coursera",
          date: "2025-11-29",
          link:
            "https://www.coursera.org/account/accomplishments/verify/WUV2ABTV36NQ",
        },
        {
          name: "Django Application Development with SQL and Databases",
          provider: "IBM / Coursera",
          date: "2025-12-03",
          link:
            "https://www.coursera.org/account/accomplishments/verify/1SHVXOJ4X0ZG",
        },
        {
          name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
          provider: "IBM / Coursera",
          date: "2025-12-15",
          link:
            "https://www.coursera.org/account/accomplishments/verify/6S74R0Z0N6F1",
        },
        {
          name: "Application Development using Microservices and Serverless",
          provider: "IBM / Coursera",
          date: "2025-12-24",
          link:
            "https://www.coursera.org/account/accomplishments/verify/R0WQAGRJJBZG",
        },
      ],
    },
    contact: {
      title: "Let's Work Together",
      text:
        "I'm actively seeking full-time opportunities as a Full-Stack Developer. If you're building a product or team and think I'd be a good fit, I'd love to hear from you.",
      cta: "Get in touch",
    },
  },
};
