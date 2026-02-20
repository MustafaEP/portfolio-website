import type { Lang } from "../../../types";
import { ActiveProjectCard } from "./ActiveProjectCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { OtherProjectCard } from "./OtherProjectCard";

interface ProjectsProps {
  translations: {
    title: string;
    activeTitle: string;
    activeSubtitle: string;
    active: Array<{
      name: string;
      status: string;
      description: string;
      liveUrl: string;
      githubUrl: string;
      tech: string;
      previewImage?: string;
    }>;
    featured: Array<{
      name: string;
      role: string;
      tagline: string;
      problem: string;
      solution: string;
      outcome?: string;
      technologies: string;
      highlights: string[];
      link?: string;
    }>;
    other: Array<{
      name: string;
      role: string;
      tagline: string;
      technologies: string;
      link?: string;
    }>;
  };
  lang: Lang;
}

export const Projects = ({ translations, lang }: ProjectsProps) => {
  return (
    <section
      id="projects"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
        {translations.title}
      </h2>

      {/* Active Projects */}
      <div className="mb-16">
        <div className="flex flex-col gap-3 mb-8">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors">
            {translations.activeTitle}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl transition-colors">
            {translations.activeSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {translations.active.map((project, idx) => (
            <ActiveProjectCard key={`${project.name}-${idx}`} project={project} lang={lang} />
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-8 mb-16">
        {translations.featured.map((project, idx) => (
          <FeaturedProjectCard key={`${project.name}-${idx}`} project={project} lang={lang} />
        ))}
      </div>

      {/* Other Projects */}
      {translations.other.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 transition-colors">
            {lang === "tr" ? "Diğer Projeler" : "Other Projects"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {translations.other.map((project, idx) => (
              <OtherProjectCard key={`${project.name}-${idx}`} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
