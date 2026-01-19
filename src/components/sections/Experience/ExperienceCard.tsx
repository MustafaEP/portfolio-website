interface ExperienceCardProps {
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
  };
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="group bg-white dark:bg-dark-bg rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 hover:shadow-md dark:hover:shadow-none transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">
            {experience.role}
          </h3>
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-1 transition-colors">
            {experience.company}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">
            {experience.location}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {experience.period}
        </div>
      </div>

      <ul className="space-y-3">
        {experience.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
