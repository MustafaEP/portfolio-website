import type { Lang } from "../../types";

interface LanguageSwitcherProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
  variant?: "desktop" | "mobile";
}

export const LanguageSwitcher = ({
  lang,
  onChange,
  variant = "desktop",
}: LanguageSwitcherProps) => {
  if (variant === "mobile") {
    return (
      <>
        <button
          className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
            lang === "tr"
              ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
              : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          }`}
          onClick={() => onChange("tr")}
          aria-label="Switch to Turkish"
        >
          TR
        </button>
        <button
          className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
            lang === "en"
              ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
              : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          }`}
          onClick={() => onChange("en")}
          aria-label="Switch to English"
        >
          EN
        </button>
      </>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg p-1">
      <button
        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
          lang === "tr"
            ? "bg-white dark:bg-dark-surface text-neutral-900 dark:text-neutral-100 shadow-sm"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        }`}
        onClick={() => onChange("tr")}
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
        onClick={() => onChange("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
