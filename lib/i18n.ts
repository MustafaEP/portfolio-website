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
      githubRepo?: string;
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
      role: "Backend Odaklı Yazılım Geliştirici",
      subtitle:
        "NestJS, FastAPI ve Django ile gerçek dünya uygulamaları geliştiren backend odaklı junior bir geliştiriciyim. Üçü kendi VPS'imde production'da çalışan kişisel projelerim var; LLM entegrasyonları konusunda rahatım.",
      badge: "Junior backend rolüne açık",
      ctaPrimary: "Projelerime göz at",
      ctaSecondary: "CV'mi indir",
    },
    about: {
      title: "Hakkımda",
      text: `Backend odaklı junior bir yazılım geliştiricisiyim. NestJS, FastAPI ve Django ile gerçek dünya uygulamaları geliştiriyor; LLM'leri backend servislerine entegre etmeyi seviyorum.

Üç kişisel projem (mikroservis mimarili AI destekli İngilizce öğrenme platformu dahil) kendi yönettiğim Linux VPS üzerinde production'da çalışıyor. Stajlarımda ASP.NET Core ile RESTful API'ler geliştirerek backend temellerimi attım; bugün ağırlıklı olarak TypeScript, Python ve Prisma + PostgreSQL ile çalışıyorum.

Bursa Teknik Üniversitesi Bilgisayar Mühendisliği'nden Ağustos 2025'te mezun oldum. Şu an Next.js, daha derin SQL ve sistem tasarımı temellerini öğrenmeye odaklanıyorum; junior backend rolü arıyorum.`,
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
            "Küçük bir takım içinde ASP.NET Core ve Entity Framework Core kullanarak RESTful API endpoint'leri geliştirdim.",
            "Frontend ekibiyle React entegrasyonu üzerinde çalıştım ve xUnit ile yazılan birim testlerle backend mantığına katkıda bulundum.",
            "Kıdemli geliştiricilerle yapılan code review'lara katılarak kurumsal .NET iş akışları konusunda deneyim kazandım.",
          ],
        },
        {
          company: "YM IDIS",
          role: ".NET Software Engineer Intern",
          period: "08/2022 – 09/2022",
          location: "İstanbul, Türkiye",
          bullets: [
            "Kurumsal bir ortamda SQL Server ile CRUD işlemleri içeren .NET MVC uygulamaları geliştirdim.",
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
          name: "Letter to Stars",
          status: "Aktif geliştirme • Canlıda",
          description:
            "AI destekli İngilizce öğrenme günlüğü: kullanıcıların yazıları seçilen IELTS seviyesine (6–9) göre Gemini AI ile yeniden yazılır, yeni kelimeler ve Türkçe çevirileri otomatik çıkarılır. Mikroservis mimarisi: NestJS API + FastAPI AI servisi + Django admin. Dockerize edilmiş ve Git webhook'ları üzerinden VPS'e otomatik deploy. React web uygulaması ile React Native (Expo) Android build'i; Gemini'den yapılandırılmış JSON çıktısını zorlamak için prompt tasarımı.",
          liveUrl: "https://lettertostars.mustafaerhanportakal.com",
          githubUrl: "https://github.com/mustafaep/letter-to-stars",
          tech: "NestJS • FastAPI • Django • React • React Native • PostgreSQL • Gemini AI • Docker",
          previewImage: "/preview-letter-to-stars.png",
        },
        {
          name: "Organization Management Panel",
          status: "Aktif geliştirme • Canlıda",
          description:
            "17+ modüllü (üyeler, ödemeler, muhasebe, dokümanlar, onaylar) full-stack kurumsal yönetim sistemi; rol tabanlı erişim kontrolü ile bölgesel hiyerarşi içerir. Socket.IO ile anlık bildirimler, Puppeteer ile PDF üretimi, Excel dışa aktarımı, AWS SES e-posta ve NetGSM SMS entegrasyonları.",
          liveUrl: "https://yonetim.mustafaerhanportakal.com",
          githubUrl: "https://github.com/mustafaep/yonetim-paneli",
          tech: "NestJS • React • Prisma • PostgreSQL • Material-UI • Socket.IO • Docker",
          previewImage: "/preview-sendika-yonetim.png",
        },
        {
          name: "Moodify-AI",
          status: "Bitirme projesi • Canlıda",
          description:
            "Bitirme projem: duygu analizine dayalı müzik öneri platformu. Gemini tabanlı ruh hali analizini Spotify Web API üzerinden track özelliklerine eşler ve kullanıcıya kişiselleştirilmiş öneriler sunar.",
          liveUrl: "https://moodify-ai.mustafaerhanportakal.com/login",
          githubUrl: "https://github.com/mustafaep/Moodify-AI",
          tech: "React • Node.js • Express • MongoDB • Spotify API • Gemini AI",
          previewImage: "/preview-moodify-ai-1.png",
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
          link: "https://github.com/mustafaep/Moodify-AI",
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
          link: "https://github.com/mustafaep/AiEmotionProject",
        },
      ],
      other: [
        {
          name: "Soccer App",
          role: "Backend Developer",
          tagline: "Temiz mimari ile takım ve maç yönetimi API'si",
          technologies: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/mustafaep/SoccerApp",
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
          link: "https://github.com/mustafaep/IBM-Full-Stack-Software-Engineering",
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
        "Junior backend rollerine açığım (Remote/Hybrid). Rol, teknoloji stack'i ve takvim bilgisini paylaşırsanız 24–48 saat içinde dönüş yaparım.",
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
      role: "Backend-Focused Software Developer",
      subtitle:
        "Backend-focused junior developer building real-world applications with NestJS, FastAPI, and Django. Three personal projects deployed to production on a self-managed VPS, comfortable integrating LLMs into backend services.",
      badge: "Open to junior backend roles",
      ctaPrimary: "View my work",
      ctaSecondary: "Download CV",
    },
    about: {
      title: "About",
      text: `Backend-focused junior developer. I build real-world applications with NestJS, FastAPI, and Django, and I'm comfortable integrating LLMs into backend services.

Three personal projects — including an AI-powered English learning platform with a microservice architecture — are deployed to production on a self-managed Linux VPS. During my internships I strengthened my backend foundations with ASP.NET Core RESTful APIs; today I mainly work with TypeScript, Python, and Prisma + PostgreSQL.

Recent Computer Engineering graduate from Bursa Technical University (Aug 2025). Currently learning Next.js, deeper SQL, and system design fundamentals while looking for a junior backend role.`,
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
            "Developed RESTful API endpoints using ASP.NET Core and Entity Framework Core within a small team.",
            "Collaborated with the frontend team on React integration and contributed to backend logic with xUnit unit tests.",
            "Participated in code reviews with senior developers, gaining exposure to enterprise .NET workflows.",
          ],
        },
        {
          company: "YM IDIS",
          role: ".NET Software Engineer Intern",
          period: "08/2022 – 09/2022",
          location: "Istanbul, Turkey",
          bullets: [
            "Built .NET MVC applications with CRUD operations and SQL Server in an enterprise environment.",
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
          name: "Letter to Stars",
          status: "Active development • Live",
          description:
            "AI-powered English diary: entries are rewritten into IELTS levels (6–9) with Gemini AI, and vocabulary plus Turkish translations are extracted automatically. Microservice split: NestJS API + FastAPI AI service + Django admin. Dockerized and auto-deployed to a VPS via Git webhooks. Built a React web app and a React Native (Expo) Android build; designed prompts to enforce structured JSON output from Gemini.",
          liveUrl: "https://lettertostars.mustafaerhanportakal.com",
          githubUrl: "https://github.com/mustafaep/letter-to-stars",
          tech: "NestJS • FastAPI • Django • React • React Native • PostgreSQL • Gemini AI • Docker",
          previewImage: "/preview-letter-to-stars.png",
        },
        {
          name: "Organization Management Panel",
          status: "Active development • Live",
          description:
            "Full-stack management system with 17+ modules (members, payments, accounting, documents, approvals) and a regional hierarchy with role-based access control. Real-time notifications (Socket.IO), PDF generation (Puppeteer), Excel exports, AWS SES email, and NetGSM SMS integration.",
          liveUrl: "https://yonetim.mustafaerhanportakal.com",
          githubUrl: "https://github.com/mustafaep/yonetim-paneli",
          tech: "NestJS • React • Prisma • PostgreSQL • Material-UI • Socket.IO • Docker",
          previewImage: "/preview-sendika-yonetim.png",
        },
        {
          name: "Moodify-AI",
          status: "Capstone project • Live",
          description:
            "Capstone: a sentiment-analysis-driven music recommendation platform. Maps Gemini-based mood analysis to Spotify track features via the Spotify Web API and serves personalized recommendations.",
          liveUrl: "https://moodify-ai.mustafaerhanportakal.com/login",
          githubUrl: "https://github.com/mustafaep/Moodify-AI",
          tech: "React • Node.js • Express • MongoDB • Spotify API • Gemini AI",
          previewImage: "/preview-moodify-ai-1.png",
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
          link: "https://github.com/mustafaep/Moodify-AI",
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
          link: "https://github.com/mustafaep/AiEmotionProject",
        },
      ],
      other: [
        {
          name: "Soccer App",
          role: "Backend Developer",
          tagline: "Team and match management API with clean architecture",
          technologies: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/mustafaep/SoccerApp",
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
          link: "https://github.com/mustafaep/IBM-Full-Stack-Software-Engineering",
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
        "I'm open to junior backend roles (Remote/Hybrid). Share a brief note about the role, stack, and timeline and I'll get back within 24–48 hours.",
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
