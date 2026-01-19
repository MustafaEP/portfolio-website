interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
  variant?: "desktop" | "mobile";
}

export const ThemeToggle = ({
  darkMode,
  onToggle,
  variant = "desktop",
}: ThemeToggleProps) => {
  if (variant === "mobile") {
    return (
      <button
        onClick={onToggle}
        className="flex-1 px-3 py-2 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};
