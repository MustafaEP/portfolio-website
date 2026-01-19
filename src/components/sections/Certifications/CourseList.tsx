import type { Lang } from "../../../types";

interface CourseListProps {
  courses: Array<{ name: string; link: string }>;
  isExpanded: boolean;
  onToggle: () => void;
  label: string;
  lang: Lang;
}

export const CourseList = ({
  courses,
  isExpanded,
  onToggle,
  label,
  lang,
}: CourseListProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? (lang === "tr" ? "Dersleri gizle" : "Hide courses") : (lang === "tr" ? "Dersleri göster" : "Show courses")}
      >
        <span>{label}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 transition-colors">
            {lang === "tr"
              ? "Bu dersler Professional Certificate programının bir parçasıdır ve ayrı ayrı tamamlanmıştır."
              : "These courses are part of the Professional Certificate program and were completed individually."}
          </p>
          <ul className="space-y-2">
            {courses.map((course, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                <a
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex-1"
                >
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
