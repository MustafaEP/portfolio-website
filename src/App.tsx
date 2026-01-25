import { translations } from "./i18n";
import { useTheme, useLanguage, useScroll, useIntersectionObserver, useMobileMenu, useLoading } from "./hooks";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { lang, handleChangeLang } = useLanguage();
  const scrolled = useScroll();
  const isLoading = useLoading();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  useIntersectionObserver({ enabled: !isLoading });

  const t = translations[lang];

  const navItems = [
    { href: "#about", label: t.navbar.about },
    { href: "#experience", label: t.navbar.experience },
    { href: "#projects", label: t.navbar.projects },
    { href: "#skills", label: t.navbar.skills },
    { href: "#certifications", label: t.navbar.certifications },
    { href: "#contact", label: t.navbar.contact },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        lang={lang}
        darkMode={darkMode}
        navItems={navItems}
        onMobileMenuToggle={toggleMobileMenu}
        onMobileMenuClose={closeMobileMenu}
        onLangChange={handleChangeLang}
        onThemeToggle={toggleDarkMode}
      />

      <main id="top" className="relative pt-20">
        <Hero translations={t.hero} lang={lang} />
        <About translations={t.about} />
        <Experience translations={t.experience} />
        <Projects translations={t.projects} lang={lang} />
        <Skills translations={t.skills} />
        <Certifications translations={t.certifications} lang={lang} />
        <Contact translations={t.contact} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;
