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
    items: {
      name: string;
      role: string;
      description: string;
      tech: string;
      link?: string;
    }[];
  };
  skills: {
    title: string;
    list: string[];
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
      role: "Junior Full-Stack Developer",
      subtitle:
        "React, Node.js ve ASP.NET Core ile üretim seviyesinde web uygulamaları geliştiren full-stack geliştirici.",
      ctaPrimary: "Projelerime göz at",
      ctaSecondary: "CV’mi indir",
    },
    about: {
      title: "Hakkımda",
      text:
        "React, Node.js, TypeScript ve ASP.NET Core kullanarak üretime hazır uygulamalar geliştirme konusunda pratik deneyime sahip Full-Stack Developer. " +
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
          role: "Intern ASP.NET Developer",
          period: "09/2024 – 02/2025",
          location: "Bursa, Türkiye",
          bullets: [
            "ASP.NET Core ve Entity Framework ile birden fazla RESTful API endpoint geliştirdim.",
            "Veritabanı sorgularını optimize ederek API cevap sürelerini önemli ölçüde azalttım.",
            "Kod kalitesini artırmak için birim ve entegrasyon testleri üzerinde çalıştım.",
          ],
        },
        {
          company: "YM IDIS",
          role: "Intern .NET Software Engineer",
          period: "08/2022 – 09/2022",
          location: "İstanbul, Türkiye",
          bullets: [
            "Kurumsal ortamda .NET ve MVC mimarisi ile web uygulamaları geliştirdim.",
            "SQL Server üzerinde CRUD işlemleri ve iş kuralları tasarladım.",
          ],
        },
      ],
    },
    projects: {
      title: "Projeler",
      items: [
        {
          name: "Moodify-AI",
          role: "Full-Stack Geliştirici",
          description:
            "Kullanıcının duygusuna göre Spotify ve Gemini AI entegrasyonuyla müzik önerileri sunan full-stack platform.",
          tech: "React, Node.js, Express, MongoDB, Spotify API, Gemini AI",
          link: "https://github.com/MustafaEP/Moodify-AI",
        },
        {
          name: "Soccer App",
          role: "Backend Geliştirici",
          description:
            "Takım, oyuncu ve maç yönetimi için ASP.NET Core API; validasyon, hata yönetimi ve temiz mimari odaklı bir backend.",
          tech: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/MustafaEP/SoccerApp",
        },
        {
          name: "TÜBİTAK Rover - Anti-Skid System",
          role: "Gömülü Yazılım Geliştirici",
          description:
            "Otonom rover için patinaj engelleme ve stabilite kontrol sistemi geliştirdiğimiz TÜBİTAK projesi.",
          tech: "Arduino, C++, Raspberry Pi, Python, GPS, Bluetooth",
          link:
            "https://github.com/Rover-Anti-Skid-System/Rover-Wheel-Design-with-Anti-Skid-System",
        },
        {
          name: "IBM Full Stack Software Engineering",
          role: "Full-Stack Developer",
          description:
            "IBM Full Stack Software Developer Professional Certificate programı için ders notları, laboratuvar projeleri ve AI asistanı ile teknik sohbetlerin arşivlendiği repository. Git, HTML/CSS/JavaScript, React, Node.js, Python ve Flask içeren modüller.",
          tech: "Python, JavaScript, React, Node.js, Flask, HTML, CSS, Git, Jupyter Notebook",
          link: "https://github.com/MustafaEP/IBM-Full-Stack-Software-Engineering",
        },
        {
          name: "AI Emotion Project",
          role: "Full-Stack Developer",
          description:
            "Metinlerin duygusal tonunu analiz eden AI tabanlı full-stack uygulama. Python Gradio ile Hugging Face'de AI servisi, .NET 8.0 backend API ve React frontend içerir. Kullanıcı bazlı analiz geçmişi ve RESTful API desteği sunar.",
          tech: "Python, Gradio, Transformers, Hugging Face, .NET 8.0, Entity Framework Core, SQLite, React, Vite, React Native",
          link: "https://github.com/MustafaEP/AiEmotionProject",
        },
      ],
    },
    skills: {
      title: "Yetenekler",
      list: [
        "React & TypeScript",
        "Node.js & Express",
        "ASP.NET Core, .NET 8",
        "MongoDB, MS SQL, PostgreSQL",
        "REST API, JWT, OAuth2",
        "Git, Docker, Kubernetes (Temel)",
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
      ],
    },
    contact: {
      title: "İletişim",
      text:
        "Projeler, iş fırsatları veya sadece merhaba demek için benimle iletişime geçebilirsin.",
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
      role: "Junior Full-Stack Developer",
      subtitle:
        "Full-Stack developer specializing in React, Node.js, and ASP.NET Core, building production-ready web applications.",
      ctaPrimary: "View my projects",
      ctaSecondary: "Download my CV",
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
          role: "Intern ASP.NET Developer",
          period: "09/2024 – 02/2025",
          location: "Bursa, Turkey",
          bullets: [
            "Designed and implemented multiple RESTful API endpoints using ASP.NET Core and Entity Framework.",
            "Optimized database queries and improved API response times significantly.",
            "Contributed to unit and integration tests to increase backend code quality.",
          ],
        },
        {
          company: "YM IDIS",
          role: "Intern .NET Software Engineer",
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
      title: "Projects",
      items: [
        {
          name: "Moodify-AI",
          role: "Full-Stack Developer",
          description:
            "A sentiment-analysis-driven music recommendation platform integrating Spotify and Gemini AI APIs.",
          tech: "React, Node.js, Express, MongoDB, Spotify API, Gemini AI",
          link: "https://github.com/MustafaEP/Moodify-AI",
        },
        {
          name: "Soccer App",
          role: "Backend Developer",
          description:
            "ASP.NET Core API for managing teams, players, and match records with clean architecture and validation.",
          tech: "ASP.NET Core, Entity Framework, MS SQL",
          link: "https://github.com/MustafaEP/SoccerApp",
        },
        {
          name: "TUBITAK Rover - Anti-Skid System",
          role: "Embedded Software Developer",
          description:
            "Autonomous rover stability and anti-skid system developed as part of a TUBITAK project.",
          tech: "Arduino, C++, Raspberry Pi, Python, GPS, Bluetooth",
          link:
            "https://github.com/Rover-Anti-Skid-System/Rover-Wheel-Design-with-Anti-Skid-System",
        },
        {
          name: "IBM Full Stack Software Engineering",
          role: "Full-Stack Developer",
          description:
            "Repository archiving course notes, laboratory projects, and technical conversations with AI assistants for the IBM Full Stack Software Developer Professional Certificate program. Includes modules on Git, HTML/CSS/JavaScript, React, Node.js, Python, and Flask.",
          tech: "Python, JavaScript, React, Node.js, Flask, HTML, CSS, Git, Jupyter Notebook",
          link: "https://github.com/MustafaEP/IBM-Full-Stack-Software-Engineering",
        },
        {
          name: "AI Emotion Project",
          role: "Full-Stack Developer",
          description:
            "AI-based full-stack application that analyzes the emotional tone of texts. Features Python Gradio AI service on Hugging Face, .NET 8.0 backend API, and React frontend. Includes user-based analysis history and RESTful API support.",
          tech: "Python, Gradio, Transformers, Hugging Face, .NET 8.0, Entity Framework Core, SQLite, React, Vite, React Native",
          link: "https://github.com/MustafaEP/AiEmotionProject",
        },
      ],
    },
    skills: {
      title: "Skills",
      list: [
        "React & TypeScript",
        "Node.js & Express",
        "ASP.NET Core, .NET 8",
        "MongoDB, MS SQL, PostgreSQL",
        "REST APIs, JWT, OAuth2",
        "Git, Docker, Kubernetes (Basic)",
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
      ],
    },
    contact: {
      title: "Contact",
      text:
        "Feel free to reach out for projects, job opportunities, or just to say hi.",
    },
  },
};
