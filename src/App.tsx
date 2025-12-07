import { useEffect, useState } from "react";
import { type Lang, translations } from "./i18n";

function App() {
  const [lang, setLang] = useState<Lang>("tr");
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("lang") as Lang | null;
    if (saved === "tr" || saved === "en") {
      setLang(saved);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Sayfa yükleme animasyonu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleChangeLang = (value: Lang) => {
    setLang(value);
    sessionStorage.setItem("lang", value);
  };

  const t = translations[lang];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="relative">
          {/* Animated gradient circle */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 animate-pulse blur-xl opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Spinning ring */}
              <div className="w-16 h-16 border-4 border-slate-800 rounded-full" />
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-sky-500 border-r-blue-500 rounded-full animate-spin" />
              {/* Center logo/text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  MEP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="text-xl font-bold tracking-tight group relative"
          >
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              MEP
            </span>
            <span className="text-slate-400 ml-2 text-sm font-normal">
              Portfolio
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { href: "#about", label: t.navbar.about },
              { href: "#experience", label: t.navbar.experience },
              { href: "#projects", label: t.navbar.projects },
              { href: "#skills", label: t.navbar.skills },
              { href: "#certifications", label: t.navbar.certifications },
              { href: "#contact", label: t.navbar.contact },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-sky-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-1">
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                lang === "tr"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              onClick={() => handleChangeLang("tr")}
            >
              TR
            </button>
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                lang === "en"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              onClick={() => handleChangeLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero + Content */}
      <main id="top" className="relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-sky-400 uppercase tracking-wider">
                  {lang === "tr"
                    ? "Full-Stack Geliştirici"
                    : "Full-Stack Developer"}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {t.hero.title}
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-sky-400">
                  {t.hero.role}
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="group px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    {t.hero.ctaPrimary}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="/Mustafa-Erhan-Portakal-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-slate-700 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-medium hover:scale-105 transition-all duration-200"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Istanbul, Turkey</span>
                </div>
                <a
                  href="mailto:portakalm11@gmail.com"
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>portakalm11@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full" />
                  <h3 className="text-lg font-semibold text-sky-400">
                    Tech Stack
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "⚛️", text: "React · TypeScript · Tailwind" },
                    { icon: "🟢", text: "Node.js · Express" },
                    { icon: "🔷", text: "ASP.NET Core · .NET 8" },
                    { icon: "🗄️", text: "MongoDB · MS SQL · PostgreSQL" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm text-slate-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://github.com/MustafaEP"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub profilim</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold">{t.about.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 lg:p-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.about.text}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.experience.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
          </div>

          <div className="space-y-6">
            {t.experience.items.map((exp) => (
              <div
                key={exp.company}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 lg:p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sky-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-400">{exp.location}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 text-xs text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.projects.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {t.projects.items.map((project) => (
              <div
                key={project.name}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col"
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-sky-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-sky-400 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {project.role}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                  <span className="text-xs text-slate-500 font-mono">
                    {project.tech}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors group"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.skills.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              {t.skills.list.map((skill, idx) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300 hover:border-sky-500/50 hover:text-sky-400 hover:bg-slate-800 transition-all duration-200 cursor-default"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.certifications.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.certifications.items.map((cert) => (
              <div
                key={cert.link}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-sky-400">{cert.provider}</p>
                  </div>
                  <span className="text-xs text-slate-400 px-3 py-1 rounded-full bg-slate-800/60 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>
                    {lang === "tr"
                      ? "Sertifikayı görüntüle"
                      : "View certificate"}
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              {t.contact.text}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:portakalm11@gmail.com"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border-2 border-slate-700 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-medium hover:scale-105 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-400">
                © 2024 Mustafa Erhan Portakal. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/MustafaEP"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
