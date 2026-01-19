interface AboutProps {
  translations: {
    title: string;
    text: string;
  };
}

export const About = ({ translations }: AboutProps) => {
  return (
    <section
      id="about"
      data-animate
      className="fade-in-section relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-neutral-100 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 transition-colors">
          {translations.title}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
            {translations.text}
          </p>
        </div>
      </div>
    </section>
  );
};
