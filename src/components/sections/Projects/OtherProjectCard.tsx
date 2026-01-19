interface OtherProjectCardProps {
  project: {
    name: string;
    role: string;
    tagline: string;
    technologies: string;
    link?: string;
  };
}

export const OtherProjectCard = ({ project }: OtherProjectCardProps) => {
  return (
    <article className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-md dark:hover:shadow-none transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
      <div className="flex-1 mb-4">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-4 transition-colors">
          <svg
            className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
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

        <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
          {project.name}
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-medium transition-colors">
          {project.role}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm transition-colors">
          {project.tagline}
        </p>
      </div>

      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between transition-colors">
        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono transition-colors">
          {project.technologies.split(",")[0]}...
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            aria-label={`View ${project.name} on GitHub`}
          >
            <span>View</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
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
