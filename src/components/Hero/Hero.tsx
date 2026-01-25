import type { Lang } from "../../types";

interface HeroProps {
  translations: {
    badge: string;
    title: string;
    role: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  lang: Lang;
}

export const Hero = ({ translations, lang }: HeroProps) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium mb-6 transition-colors">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          {translations.badge}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 text-balance transition-colors">
          {translations.title}
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6 transition-colors">
          {translations.role}
        </h2>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8 text-balance transition-colors">
          {translations.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
          >
            {translations.ctaPrimary}
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
          <a
            href={lang === "tr" ? "/Mustafa-Erhan-Portakal-CV-TR.pdf" : "/Mustafa-Erhan-Portakal-CV.pdf"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-dark-surface transition-all duration-200 active:scale-98"
          >
            {translations.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 transition-colors">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>{lang === "tr" ? "İstanbul, Türkiye" : "Istanbul, Turkey"}</span>
          </div>
          <a
            href="mailto:portakalm11@gmail.com"
            className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
};
