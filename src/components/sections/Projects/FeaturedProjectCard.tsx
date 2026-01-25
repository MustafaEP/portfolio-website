import type { Lang } from "../../../types";

interface FeaturedProjectCardProps {
  project: {
    name: string;
    role: string;
    tagline: string;
    problem: string;
    solution: string;
    outcome?: string;
    technologies: string;
    highlights: string[];
    link?: string;
  };
  lang: Lang;
}

export const FeaturedProjectCard = ({ project, lang }: FeaturedProjectCardProps) => {
  return (
    <article className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center transition-colors">
          <svg
            className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
        {project.name}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-medium transition-colors">
        {project.role}
      </p>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 transition-colors">
        {project.tagline}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
            {lang === "tr" ? "Sorun" : "Problem"}
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
            {project.problem}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
            {lang === "tr" ? "Çözüm" : "Solution"}
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
            {project.solution}
          </p>
        </div>

        {project.outcome && (
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2 uppercase tracking-wide transition-colors">
              {lang === "tr" ? "Sonuç" : "Outcome"}
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
              {project.outcome}
            </p>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide transition-colors">
            {lang === "tr" ? "Öne Çıkan Özellikler" : "Key Highlights"}
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 transition-colors"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between transition-colors">
        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono transition-colors">
          {project.technologies}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            aria-label={`View ${project.name} on GitHub`}
          >
            <span>GitHub</span>
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};
