import type { NavigationItem } from "../../types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "./NavLink";
import type { Lang } from "../../types";

interface MobileMenuProps {
  navItems: NavigationItem[];
  isOpen: boolean;
  lang: Lang;
  darkMode: boolean;
  onNavClick: () => void;
  onLangChange: (lang: Lang) => void;
  onThemeToggle: () => void;
}

export const MobileMenu = ({
  navItems,
  isOpen,
  lang,
  darkMode,
  onNavClick,
  onLangChange,
  onThemeToggle,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            onClick={onNavClick}
          />
        ))}
        <div className="flex items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
          <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} variant="mobile" />
          <LanguageSwitcher lang={lang} onChange={onLangChange} variant="mobile" />
        </div>
      </div>
    </div>
  );
};
