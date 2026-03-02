import type { Lang } from "./types";

type Translations = {
  navbar: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
    github: string;
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
    activeTitle: string;
    activeSubtitle: string;
    active: {
      name: string;
      status: string;
      description: string;
      liveUrl: string;
      githubUrl: string;
      tech: string;
      previewImage?: string;
    }[];
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
    professionalCertificate: {
      name: string;
      provider: string;
      date: string;
      link: string;
      description: string;
      includedCoursesLabel: string;
      includedCourses: {
        name: string;
        link: string;
      }[];
    };
  };
  contact: {
    title: string;
    text: string;
    cta: string;
  };
  github: {
    title: string;
    description: string;
    githubLabel: string;
    statsLabel: string;
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
      github: "GitHub",
      contact: "İletişim",
    },
    hero: {
      title: "Mustafa Erhan Portakal",
      role: "Backend Odaklı Full-Stack Engineer",
      subtitle:
        "Backend odaklı full-stack çözümler geliştiriyorum (React, Node.js, ASP.NET Core). API tasarımı, sistem entegrasyonu ve üretime hazır uygulamalar konusunda deneyimliyim.",
      badge: "İş fırsatlarına açık",
      ctaPrimary: "Projelerime göz at",
      ctaSecondary: "CV'mi indir",
    },
    about: {
      title: "Hakkımda",
      text: `Backend ağırlıklı çalışan bir yazılım geliştiricisiyim. Ölçeklenebilir sistemler, modern backend mimarileri ve AI entegrasyonlu ürünler geliştirmeye odaklanıyorum.

Staj sürecimde ASP.NET Core ile RESTful API’ler geliştirerek backend temellerimi sağlamlaştırdım. Günümüzde ağırlıklı olarak Node.js, TypeScript, Django ve FastAPI ile çalışıyor; üretim ortamında çalışan, sürdürülebilir sistemler tasarlıyorum.

Temiz kod, iyi tasarlanmış mimari ve production davranışını anlamaya önem veriyorum. Backend veya full-stack rollerinde, ölçeklenebilir SaaS ürünleri ve AI tabanlı sistemler geliştirmeyi hedefliyorum.`,
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
      activeTitle: "Aktif Olarak Geliştirilen Projeler",
      activeSubtitle:
        "Canlıda olan ve sürekli iyileştirdiğim projeler. Gerçek kullanım verisi ve geri bildirimle iteratif olarak gelişiyorlar.",
      active: [
        {
          name: "Sendika Yönetim Paneli",
          status: "Aktif geliştirme • Beta aşaması",
          description:
            "16 modülden oluşan kurumsal sendika yönetim platformu. Üye kaydı ve onay akışları, hiyerarşik RBAC (ADMIN → İL/İLÇE → ÜYE), ödemeler ve tevkifat-muhasebe, Puppeteer ile PDF üretimi, doküman şablonları, AWS SES e-posta & NetGSM SMS bildirimleri, socket.io ile anlık bildirimler, içerik yönetimi (haber/duyuru/etkinlik) ve audit log. BullMQ ile arka plan kuyruğu, Recharts ile raporlama.",
          liveUrl: "https://yonetim.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/yonetim-paneli",
          tech: "NestJS 11 • Prisma 6 • PostgreSQL • Redis • BullMQ • React 19 • MUI 7 • TanStack Query • socket.io • Docker",
          previewImage: "/preview-sendika-yonetim.png",
        },
        {
          name: "Yıldızlara Mektup (Letter to Stars)",
          status: "Aktif geliştirme • Canlıda",
          description:
            "AI destekli kişisel İngilizce öğrenme ve günlük uygulaması. Kullanıcılar günlüklerini İngilizce yazar, yazılarını seçtikleri IELTS seviyesine (6/7/8/9) göre Gemini AI ile yeniden yazar, yeni kelimeleri öğrenir ve zamanla bir yıldız haritası oluşturur. Her gün = 1 yıldız. Django ile admin paneli & analitik, React Native ile mobil uygulama geliştirme sürecinde.",
          liveUrl: "https://lettertostars.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/letter-to-stars",
          tech: "React (Vite) • TypeScript • Tailwind CSS • NestJS • FastAPI • Gemini API • Django • React Native • Docker Compose • Nginx",
          previewImage: "/preview-letter-to-stars.png",
        },
        {
          name: "MoodWeave",
          status: "Aktif geliştirme • MVP canlıda",
          description:
            "Kullanıcının yazdığı metinden ruh halini analiz edip Spotify üzerinden müzik öneren production-grade web uygulaması. NestJS API Gateway + Django Core + FastAPI AI servisleri ile çoklu servis mimarisi; tek VPS üzerinde Docker/Nginx, HTTPS, rate limiting, logging, healthcheck ve GitHub Actions ile CI/CD.",
          liveUrl: "https://moodweave.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/moodweave",
          tech: "React (Vite) • NestJS (Gateway) • Django (Core) • FastAPI (AI) • Docker Compose • Nginx • GitHub Actions • Let's Encrypt",
          previewImage: "/preview-moodweave.png",
        },
      ],
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
          tagline: "IBM Full Stack Software Developer Professional Certificate capstone project repository",
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
            "Vite",
            "Tailwind CSS",
            "Material UI",
            "Responsive Tasarım",
            "State Management",
          ],
        },
        {
          category: "Backend Geliştirme",
          skills: [
            "Node.js & Express",
            "NestJS",
            "FastAPI (Python)",
            "Django",
            "ASP.NET Core",
            "RESTful API Tasarımı",
            "JWT & OAuth2",
            "Mikroservis Mimarisi",
          ],
        },
        {
          category: "Veritabanı & ORM",
          skills: [
            "PostgreSQL",
            "MongoDB",
            "MS SQL Server",
            "Prisma",
            "Entity Framework",
            "SQLite",
          ],
        },
        {
          category: "DevOps & Altyapı",
          skills: [
            "Docker & Docker Compose",
            "Nginx",
            "GitHub Actions (CI/CD)",
            "Linux (VPS)",
            "Let's Encrypt / HTTPS",
            "Kubernetes (Öğrenme aşamasında)",
          ],
        },
        {
          category: "AI & Entegrasyonlar",
          skills: [
            "Gemini API",
            "Spotify API",
            "Hugging Face Transformers",
            "Prompt Engineering",
            "Yapılandırılmış AI Çıktısı (JSON)",
          ],
        },
      ],
    },
    certifications: {
      title: "Sertifikalar",
      professionalCertificate: {
        name: "IBM Full Stack Software Developer – Professional Certificate",
        provider: "IBM / Coursera",
        date: "Ocak 2026",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/ZA0GJFIPNUUT",
        description:
          "Frontend, backend, cloud, DevOps, mikroservisler ve bir capstone projesi içeren 15 dersten oluşan kapsamlı bir program. Full-stack geliştirme, modern web teknolojileri, containerization ve mikroservis mimarisi konularında pratik deneyim kazandım.",
        includedCoursesLabel: "Dahil Edilen Dersler (15)",
        includedCourses: [
          {
            name: "Introduction to Software Engineering",
            link: "https://www.coursera.org/account/accomplishments/verify/2D7DCC192333E111BF43AE7703724E49",
          },
          {
            name: "Introduction to Cloud Computing",
            link: "https://www.coursera.org/account/accomplishments/verify/6XGRYV9R3N6M",
          },
          {
            name: "Introduction to HTML, CSS, & JavaScript",
            link: "https://www.coursera.org/account/accomplishments/verify/M737G5HIOLSR",
          },
          {
            name: "Getting Started with Git and GitHub",
            link: "https://www.coursera.org/account/accomplishments/verify/96YB8I5KSLED",
          },
          {
            name: "Developing Front-End Apps with React",
            link: "https://www.coursera.org/account/accomplishments/verify/VXKF0QT8UUKU",
          },
          {
            name: "Developing Back-End Apps with Node.js and Express",
            link: "https://www.coursera.org/account/accomplishments/verify/NJT5L5CJFI1S",
          },
          {
            name: "Python for Data Science, AI & Development",
            link: "https://www.coursera.org/account/accomplishments/verify/A4F3BYT1VDOW",
          },
          {
            name: "Developing AI Applications with Python and Flask",
            link: "https://www.coursera.org/account/accomplishments/verify/WUV2ABTV36NQ",
          },
          {
            name: "Django Application Development with SQL and Databases",
            link: "https://www.coursera.org/account/accomplishments/verify/1SHVXOJ4X0ZG",
          },
          {
            name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            link: "https://www.coursera.org/account/accomplishments/verify/6S74R0Z0N6F1",
          },
          {
            name: "Application Development using Microservices and Serverless",
            link: "https://www.coursera.org/account/accomplishments/verify/R0WQAGRJJBZG",
          },
          {
            name: "Full Stack Application Development Capstone Project",
            link: "https://www.coursera.org/account/accomplishments/certificate/H4ZI52GG1D33",
          },
          {
            name: "Full Stack Software Developer Assessment",
            link: "https://www.coursera.org/account/accomplishments/certificate/II3FDTP2P0HN",
          },
          {
            name: "Generative AI: Elevate your Software Development Career",
            link: "https://www.coursera.org/account/accomplishments/certificate/YXGFB0KKV1QN",
          },
          {
            name: "Software Developer Career Guide and Interview Preparation",
            link: "https://www.coursera.org/account/accomplishments/certificate/P5X8G02PRZAJ",
          },
        ],
      },
    },
    contact: {
      title: "Birlikte Çalışalım",
      text:
        "Backend / Full-Stack rollerine açığım (Remote/Hybrid). Proje/rol, teknoloji stack’i ve takvim bilgisini paylaşırsanız 24–48 saat içinde dönüş yaparım.",
      cta: "E-posta gönder",
    },
    github: {
      title: "Teknik Ayak İzi",
      description:
        "Aşağıda GitHub üzerindeki güncel geliştirme aktivitelerim ve teknik ayak izim yer almaktadır. Açık kaynak katkılarım, kişisel projelerim ve sürekli öğrenme yolculuğum hakkında bilgi edinebilirsiniz.",
      githubLabel: "GitHub Profilim",
      statsLabel: "Aktivite Özeti",
    },
  },

  en: {
    navbar: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      github: "GitHub",
      contact: "Contact",
    },
    hero: {
      title: "Mustafa Erhan Portakal",
      role: "Backend-Focused Full-Stack Engineer",
      subtitle:
        "I build backend-focused full-stack solutions (React, Node.js, ASP.NET Core). Experienced in API design, system integration, and delivering production-ready applications.",
      badge: "Open to opportunities",
      ctaPrimary: "View my work",
      ctaSecondary: "Download CV",
    },
    about: {
      title: "About",
      text: `I'm a backend-focused full-stack engineer. I focus on building scalable systems, modern backend architectures, and AI-integrated products.

During my internship, I strengthened my backend foundations by developing RESTful APIs with ASP.NET Core. Today I mainly work with Node.js, TypeScript, Django, and FastAPI, designing sustainable systems that run in production.

I value clean code, well-designed architecture, and understanding production behavior. I'm aiming to build scalable SaaS products and AI-based systems in backend or full-stack roles.`,
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
      activeTitle: "Actively Developed Projects",
      activeSubtitle:
        "Live projects I continuously improve based on real-world usage and feedback.",
      active: [
        {
          name: "Union Management Panel",
          status: "Active development • Beta stage",
          description:
            "Enterprise union management platform with 16 backend modules. Features member enrollment & approval workflows, hierarchical RBAC (ADMIN → regional → member roles), payments & accounting (payroll deductions), PDF generation via Puppeteer, document templates, email (AWS SES) & SMS (NetGSM) notifications, real-time alerts via socket.io, content management (news/announcements/events), reporting with Recharts, and audit logs. Background job queue via BullMQ.",
          liveUrl: "https://yonetim.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/yonetim-paneli",
          tech: "NestJS 11 • Prisma 6 • PostgreSQL • Redis • BullMQ • React 19 • MUI 7 • TanStack Query • socket.io • Docker",
          previewImage: "/preview-sendika-yonetim.png",
        },
        {
          name: "Letter to Stars (Yıldızlara Mektup)",
          status: "Active development • Live",
          description:
            "AI-powered personal English learning diary app. Users write daily entries in English, rewrite them at a chosen IELTS level (6/7/8/9) using Gemini AI, learn new vocabulary with Turkish meanings, and build a personal star map over time — one star per day. Django admin panel & analytics and React Native mobile app are in active development.",
          liveUrl: "https://lettertostars.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/letter-to-stars",
          tech: "React (Vite) • TypeScript • Tailwind CSS • NestJS • FastAPI • Gemini API • Django • React Native • Docker Compose • Nginx",
          previewImage: "/preview-letter-to-stars.png",
        },
        {
          name: "MoodWeave",
          status: "Active development • Live MVP",
          description:
            "Production-grade web app that analyzes mood from user text and recommends music via Spotify. Multi-service architecture with NestJS API Gateway + Django Core + FastAPI AI; deployed on a single VPS with Docker/Nginx, HTTPS, rate limiting, logging, healthchecks, and GitHub Actions CI/CD.",
          liveUrl: "https://moodweave.mustafaerhanportakal.com",
          githubUrl: "https://github.com/MustafaEP/moodweave",
          tech: "React (Vite) • NestJS (Gateway) • Django (Core) • FastAPI (AI) • Docker Compose • Nginx • GitHub Actions • Let's Encrypt",
          previewImage: "/preview-moodweave.png",
        },
      ],
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
          tagline: "Capstone project repository for IBM Full Stack Software Developer Professional Certificate",
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
            "Vite",
            "Tailwind CSS",
            "Material UI",
            "Responsive Design",
            "State Management",
          ],
        },
        {
          category: "Backend Development",
          skills: [
            "Node.js & Express",
            "NestJS",
            "FastAPI (Python)",
            "Django",
            "ASP.NET Core",
            "RESTful API Design",
            "JWT & OAuth2",
            "Microservice Architecture",
          ],
        },
        {
          category: "Databases & ORM",
          skills: [
            "PostgreSQL",
            "MongoDB",
            "MS SQL Server",
            "Prisma",
            "Entity Framework",
            "SQLite",
          ],
        },
        {
          category: "DevOps & Infrastructure",
          skills: [
            "Docker & Docker Compose",
            "Nginx",
            "GitHub Actions (CI/CD)",
            "Linux (VPS)",
            "Let's Encrypt / HTTPS",
            "Kubernetes (Learning)",
          ],
        },
        {
          category: "AI & Integrations",
          skills: [
            "Gemini API",
            "Spotify API",
            "Hugging Face Transformers",
            "Prompt Engineering",
            "Structured AI Output (JSON)",
          ],
        },
      ],
    },
    certifications: {
      title: "Certificates",
      professionalCertificate: {
        name: "IBM Full Stack Software Developer – Professional Certificate",
        provider: "IBM / Coursera",
        date: "January 2026",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/ZA0GJFIPNUUT",
        description:
          "Comprehensive program consisting of 15 courses covering frontend, backend, cloud, DevOps, microservices, and a capstone project. Gained practical experience in full-stack development, modern web technologies, containerization, and microservices architecture.",
        includedCoursesLabel: "Included Courses (15)",
        includedCourses: [
          {
            name: "Introduction to Software Engineering",
            link: "https://www.coursera.org/account/accomplishments/verify/2D7DCC192333E111BF43AE7703724E49",
          },
          {
            name: "Introduction to Cloud Computing",
            link: "https://www.coursera.org/account/accomplishments/verify/6XGRYV9R3N6M",
          },
          {
            name: "Introduction to HTML, CSS, & JavaScript",
            link: "https://www.coursera.org/account/accomplishments/verify/M737G5HIOLSR",
          },
          {
            name: "Getting Started with Git and GitHub",
            link: "https://www.coursera.org/account/accomplishments/verify/96YB8I5KSLED",
          },
          {
            name: "Developing Front-End Apps with React",
            link: "https://www.coursera.org/account/accomplishments/verify/VXKF0QT8UUKU",
          },
          {
            name: "Developing Back-End Apps with Node.js and Express",
            link: "https://www.coursera.org/account/accomplishments/verify/NJT5L5CJFI1S",
          },
          {
            name: "Python for Data Science, AI & Development",
            link: "https://www.coursera.org/account/accomplishments/verify/A4F3BYT1VDOW",
          },
          {
            name: "Developing AI Applications with Python and Flask",
            link: "https://www.coursera.org/account/accomplishments/verify/WUV2ABTV36NQ",
          },
          {
            name: "Django Application Development with SQL and Databases",
            link: "https://www.coursera.org/account/accomplishments/verify/1SHVXOJ4X0ZG",
          },
          {
            name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            link: "https://www.coursera.org/account/accomplishments/verify/6S74R0Z0N6F1",
          },
          {
            name: "Application Development using Microservices and Serverless",
            link: "https://www.coursera.org/account/accomplishments/verify/R0WQAGRJJBZG",
          },
          {
            name: "Full Stack Application Development Capstone Project",
            link: "https://www.coursera.org/account/accomplishments/certificate/H4ZI52GG1D33",
          },
          {
            name: "Full Stack Software Developer Assessment",
            link: "https://www.coursera.org/account/accomplishments/certificate/II3FDTP2P0HN",
          },
          {
            name: "Generative AI: Elevate your Software Development Career",
            link: "https://www.coursera.org/account/accomplishments/certificate/YXGFB0KKV1QN",
          },
          {
            name: "Software Developer Career Guide and Interview Preparation",
            link: "https://www.coursera.org/account/accomplishments/certificate/P5X8G02PRZAJ",
          },
        ],
      },
    },
    contact: {
      title: "Let's Work Together",
      text:
        "I'm open to Backend / Full-Stack roles (Remote/Hybrid). If you share a brief note about the role, stack, and timeline, I’ll get back within 24–48 hours.",
      cta: "Send email",
    },
    github: {
      title: "Technical Footprint",
      description:
        "Below is a snapshot of my recent development activity and technical footprint on GitHub. You can explore my open-source contributions, personal projects, and continuous learning journey.",
      githubLabel: "GitHub Profile",
      statsLabel: "Activity Overview",
    },
  },
};
