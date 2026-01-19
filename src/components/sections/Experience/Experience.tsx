import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  translations: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      location: string;
      bullets: string[];
    }>;
  };
}

export const Experience = ({ translations }: ExperienceProps) => {
  return (
    <section
      id="experience"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-dark-surface transition-colors"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
        {translations.title}
      </h2>

      <div className="space-y-8">
        {translations.items.map((exp, idx) => (
          <ExperienceCard key={`${exp.company}-${idx}`} experience={exp} />
        ))}
      </div>
    </section>
  );
};
