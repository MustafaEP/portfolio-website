import { useEffect, useState, useRef } from "react";
import { type Lang, translations } from "./i18n";

function App() {
  const [lang, setLang] = useState<Lang>("tr");
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [coursesExpanded, setCoursesExpanded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Theme detection and initialization
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Language initialization
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

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Section fade-in animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("section[data-animate]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isLoading]);

  // Mobile menu body lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleChangeLang = (value: Lang) => {
    setLang(value);
    sessionStorage.setItem("lang", value);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const t = translations[lang];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white dark:bg-dark-bg flex items-center justify-center transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-neutral-200 dark:border-neutral-800 border-t-neutral-900 dark:border-t-neutral-100 rounded-full animate-spin" />
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">MEP</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-sm border-b border-neutral-100 dark:border-neutral-800"
            : "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            aria-label="Home"
          >
            Mustafa Erhan Portakal
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
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
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 group-hover:w-full transition-all duration-250" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg p-1">
                <button
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    lang === "tr"
                      ? "bg-white dark:bg-dark-surface text-neutral-900 dark:text-neutral-100 shadow-sm"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                  onClick={() => handleChangeLang("tr")}
                  aria-label="Switch to Turkish"
                >
                  TR
                </button>
                <button
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    lang === "en"
                      ? "bg-white dark:bg-dark-surface text-neutral-900 dark:text-neutral-100 shadow-sm"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                  onClick={() => handleChangeLang("en")}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
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
                  className="block py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  onClick={toggleDarkMode}
                  className="flex-1 px-3 py-2 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    lang === "tr"
                      ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  }`}
                  onClick={() => handleChangeLang("tr")}
                >
                  TR
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    lang === "en"
                      ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  }`}
                  onClick={() => handleChangeLang("en")}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative pt-20">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium mb-6 transition-colors">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 text-balance transition-colors">
              {t.hero.title}
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6 transition-colors">
              {t.hero.role}
            </h2>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8 text-balance transition-colors">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
              >
                {t.hero.ctaPrimary}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={lang === "tr" ? "/Mustafa-Erhan-Portakal-CV-TR.pdf" : "/Mustafa-Erhan-Portakal-CV.pdf"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-dark-surface transition-all duration-200 active:scale-98"
              >
                {t.hero.ctaSecondary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Istanbul, Turkey</span>
              </div>
              <a href="mailto:portakalm11@gmail.com" className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>portakalm11@gmail.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
        >
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 transition-colors">
              {t.about.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                {t.about.text}
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface transition-colors"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
            {t.experience.title}
          </h2>

          <div className="space-y-8">
            {t.experience.items.map((exp, idx) => (
              <article
                key={`${exp.company}-${idx}`}
                className="group bg-white dark:bg-dark-bg rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 hover:shadow-md dark:hover:shadow-none transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-1 transition-colors">
                      {exp.company}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">{exp.location}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
            {t.projects.title}
          </h2>

          {/* Active Projects - Currently in Development */}
          <div className="mb-16">
            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors">
                {t.projects.activeTitle}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl transition-colors">
                {t.projects.activeSubtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.projects.active.map((project, idx) => (
                <article
                  key={`${project.name}-${idx}`}
                  className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-7 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">
                        {project.name}
                      </h4>
                      <p className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {project.status}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold">
                      {lang === "tr" ? "Aktif Proje" : "In Progress"}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                    {project.tech.split("•").map((chip, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/40"
                      >
                        {chip.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      aria-label={`Open live site for ${project.name}`}
                    >
                      <span>{lang === "tr" ? "Canlı Site" : "Live Site"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <span>GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Featured Projects - Case Study Format */}
          <div className="space-y-8 mb-16">
            {t.projects.featured.map((project, idx) => (
              <article
                key={`${project.name}-${idx}`}
                className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-medium transition-colors">
                  {project.role}
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 transition-colors">
                  {project.tagline}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
                      {lang === "tr" ? "Problem" : "Problem"}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
                      {lang === "tr" ? "Çözüm" : "Solution"}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                      {project.solution}
                    </p>
                  </div>

                  {project.outcome && (
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
                        {lang === "tr" ? "Sonuç" : "Outcome"}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                        {project.outcome}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide transition-colors">
                      {lang === "tr" ? "Öne Çıkan Özellikler" : "Key Highlights"}
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between transition-colors">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono transition-colors">
                    {project.technologies}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects - Compact Format */}
          {t.projects.other.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 transition-colors">
                {lang === "tr" ? "Diğer Projeler" : "Other Projects"}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.projects.other.map((project, idx) => (
                  <article
                    key={`${project.name}-${idx}`}
                    className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-md dark:hover:shadow-none transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                  >
                    <div className="flex-1 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-4 transition-colors">
                        <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>

                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-medium transition-colors">
                        {project.role}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm transition-colors">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between transition-colors">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono transition-colors">
                        {project.technologies.split(",")[0]}...
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <span>View</span>
                          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface transition-colors"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
            {t.skills.title}
          </h2>

          <div className="space-y-8">
            {t.skills.domains.map((domain, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-bg rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 transition-colors">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors">
                  {domain.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {domain.skills.map((skill, skillIdx) => (
                    <span
                      key={`${skill}-${skillIdx}`}
                      className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
            {t.certifications.title}
          </h2>

          <div className="max-w-4xl">
            <article className="bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
                    {t.certifications.professionalCertificate.name}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4 transition-colors">
                    {t.certifications.professionalCertificate.provider}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 transition-colors">
                    {t.certifications.professionalCertificate.description}
                  </p>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 whitespace-nowrap transition-colors">
                  {t.certifications.professionalCertificate.date}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                <a
                  href={t.certifications.professionalCertificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
                  aria-label={`View ${t.certifications.professionalCertificate.name} certificate`}
                >
                  <span>
                    {lang === "tr" ? "Sertifikayı görüntüle" : "View certificate"}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div>
                <button
                  onClick={() => setCoursesExpanded(!coursesExpanded)}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                  aria-expanded={coursesExpanded}
                  aria-label={coursesExpanded ? (lang === "tr" ? "Dersleri gizle" : "Hide courses") : (lang === "tr" ? "Dersleri göster" : "Show courses")}
                >
                  <span>{t.certifications.professionalCertificate.includedCoursesLabel}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${coursesExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {coursesExpanded && (
                  <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 transition-colors">
                      {lang === "tr"
                        ? "Bu dersler Professional Certificate programının bir parçasıdır ve ayrı ayrı tamamlanmıştır."
                        : "These courses are part of the Professional Certificate program and were completed individually."}
                    </p>
                    <ul className="space-y-2">
                      {t.certifications.professionalCertificate.includedCourses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex-1"
                          >
                            {course.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          data-animate
          className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface transition-colors"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 transition-colors">
              {t.contact.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto transition-colors">
              {t.contact.text}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:portakalm11@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.cta}
              </a>
              <a
                href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-dark-bg transition-all duration-200 active:scale-98"
                aria-label="Connect on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-dark-bg transition-colors" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">
                © {new Date().getFullYear()} Mustafa Erhan Portakal. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/MustafaEP"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                  aria-label="GitHub profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
