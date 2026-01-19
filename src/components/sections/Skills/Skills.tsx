interface SkillsProps {
  translations: {
    title: string;
    domains: Array<{
      category: string;
      skills: string[];
    }>;
  };
}

export const Skills = ({ translations }: SkillsProps) => {
  return (
    <section
      id="skills"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface transition-colors"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
        {translations.title}
      </h2>

      <div className="space-y-8">
        {translations.domains.map((domain, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-dark-bg rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 transition-colors"
          >
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
  );
};
