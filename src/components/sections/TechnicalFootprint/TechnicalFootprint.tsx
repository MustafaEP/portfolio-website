interface TechnicalFootprintProps {
  translations: {
    title: string;
    description: string;
    githubLabel: string;
    statsLabel: string;
  };
}

export const TechnicalFootprint = ({ translations }: TechnicalFootprintProps) => {
  return (
    <section
      id="github"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-dark-bg transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 transition-colors">
          {translations.title}
        </h2>
        
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed transition-colors">
          {translations.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* GitHub Profile Card */}
          <a
            href="https://github.com/MustafaEP"
            target="_blank"
            rel="noreferrer"
            className="group block bg-neutral-50 dark:bg-dark-surface border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-6 h-6 text-white dark:text-neutral-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                  {translations.githubLabel}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 transition-colors">
                  github.com/MustafaEP
                </p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>

          {/* Activity Snapshot Card */}
          <div className="bg-neutral-50 dark:bg-dark-surface border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 transition-colors">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors">
              {translations.statsLabel}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                  Public Repositories
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300 transition-colors">
                  20+
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                  Active Projects
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300 transition-colors">
                  2
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                  Recent Activity
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300 transition-colors">
                  Weekly
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph - Minimal and reliable */}
        <div className="mt-8 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface p-4 transition-colors">
          <img
            src="https://ghchart.rshah.org/525252/MustafaEP"
            alt="GitHub Contribution Graph"
            className="w-full h-auto opacity-80 dark:opacity-70 hidden dark:block"
            loading="lazy"
          />
          <img
            src="https://ghchart.rshah.org/404040/MustafaEP"
            alt="GitHub Contribution Graph"
            className="w-full h-auto opacity-90 block dark:hidden"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
