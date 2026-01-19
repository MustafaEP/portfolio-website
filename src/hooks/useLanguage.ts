import { useEffect, useState } from "react";
import type { Lang } from "../types";
import { storage } from "../utils/storage";

export const useLanguage = () => {
  const [lang, setLang] = useState<Lang>("tr");

  useEffect(() => {
    const saved = storage.getSession<Lang | null>("lang", null);
    if (saved === "tr" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const handleChangeLang = (value: Lang) => {
    setLang(value);
    storage.setSession("lang", value);
  };

  return { lang, handleChangeLang };
};
