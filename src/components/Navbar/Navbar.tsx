import type { Lang } from "../../types";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  lang: Lang;
  darkMode: boolean;
  navItems: Array<{ href: string; label: string }>;
  onMobileMenuToggle: () => void;
  onMobileMenuClose: () => void;
  onLangChange: (lang: Lang) => void;
  onThemeToggle: () => void;
}

export const Navbar = ({
  scrolled,
  mobileMenuOpen,
  lang,
  darkMode,
  navItems,
  onMobileMenuToggle,
  onMobileMenuClose,
  onLangChange,
  onThemeToggle,
}: NavbarProps) => {
  return (
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

        <DesktopNav
          navItems={navItems}
          lang={lang}
          darkMode={darkMode}
          onLangChange={onLangChange}
          onThemeToggle={onThemeToggle}
        />

        <button
          className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          onClick={onMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <MobileMenu
        navItems={navItems}
        isOpen={mobileMenuOpen}
        lang={lang}
        darkMode={darkMode}
        onNavClick={onMobileMenuClose}
        onLangChange={onLangChange}
        onThemeToggle={onThemeToggle}
      />
    </header>
  );
};
