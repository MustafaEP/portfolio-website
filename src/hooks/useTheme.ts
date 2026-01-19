import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = storage.get<string>("theme", "light");
    const isDark = stored === "dark";
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      storage.set("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      storage.set("theme", "light");
    }
  };

  return { darkMode, toggleDarkMode };
};
