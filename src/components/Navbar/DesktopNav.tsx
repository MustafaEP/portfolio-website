import type { NavigationItem } from "../../types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import type { Lang } from "../../types";

interface DesktopNavProps {
  navItems: NavigationItem[];
  lang: Lang;
  darkMode: boolean;
  onLangChange: (lang: Lang) => void;
  onThemeToggle: () => void;
}

export const DesktopNav = ({
  navItems,
  lang,
  darkMode,
  onLangChange,
  onThemeToggle,
}: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 relative group"
          >
            {item.label}
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 group-hover:w-full transition-all duration-250"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
        <LanguageSwitcher lang={lang} onChange={onLangChange} />
      </div>
    </div>
  );
};
