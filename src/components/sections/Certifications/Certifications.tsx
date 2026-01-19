import { useState } from "react";
import type { Lang } from "../../../types";
import { CourseList } from "./CourseList";

interface CertificationsProps {
  translations: {
    title: string;
    professionalCertificate: {
      name: string;
      provider: string;
      date: string;
      link: string;
      description: string;
      includedCoursesLabel: string;
      includedCourses: Array<{ name: string; link: string }>;
    };
  };
  lang: Lang;
}

export const Certifications = ({ translations, lang }: CertificationsProps) => {
  const [coursesExpanded, setCoursesExpanded] = useState(false);

  return (
    <section
      id="certifications"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 transition-colors">
        {translations.title}
      </h2>

      <div className="max-w-4xl">
        <article className="bg-white dark:bg-dark-surface rounded-lg border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors">
                {translations.professionalCertificate.name}
              </h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4 transition-colors">
                {translations.professionalCertificate.provider}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 transition-colors">
                {translations.professionalCertificate.description}
              </p>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 whitespace-nowrap transition-colors">
              {translations.professionalCertificate.date}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            <a
              href={translations.professionalCertificate.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
              aria-label={`View ${translations.professionalCertificate.name} certificate`}
            >
              <span>{lang === "tr" ? "Sertifikayı görüntüle" : "View certificate"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <CourseList
            courses={translations.professionalCertificate.includedCourses}
            isExpanded={coursesExpanded}
            onToggle={() => setCoursesExpanded(!coursesExpanded)}
            label={translations.professionalCertificate.includedCoursesLabel}
            lang={lang}
          />
        </article>
      </div>
    </section>
  );
};
