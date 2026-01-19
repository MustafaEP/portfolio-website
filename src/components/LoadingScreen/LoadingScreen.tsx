export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-dark-bg flex items-center justify-center transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-neutral-200 dark:border-neutral-800 border-t-neutral-900 dark:border-t-neutral-100 rounded-full animate-spin" />
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">MEP</p>
      </div>
    </div>
  );
};
