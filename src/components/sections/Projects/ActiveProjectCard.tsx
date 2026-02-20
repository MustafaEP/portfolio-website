import type { Lang } from "../../../types";

interface ActiveProjectCardProps {
  project: {
    name: string;
    status: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    tech: string;
    previewImage?: string;
  };
  lang: Lang;
}

export const ActiveProjectCard = ({ project, lang }: ActiveProjectCardProps) => {
  return (
    <article className="group bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
      {project.previewImage && (
        <div className="relative h-44 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img
            src={project.previewImage}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      <div className="p-6 lg:p-7 flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">
            {project.name}
          </h4>
          <p className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold">
          {lang === "tr" ? "Aktif Proje" : "In Progress"}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
        {project.tech.split("•").map((chip, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/40"
          >
            {chip.trim()}
          </span>
        ))}
      </div>

      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3 mt-auto">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label={`Open live site for ${project.name}`}
        >
          <span>{lang === "tr" ? "Canlı Site" : "Live Site"}</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label={`View ${project.name} on GitHub`}
        >
          <span>GitHub</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      </div>
    </article>
  );
};
