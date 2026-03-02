'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../lib/i18n';
import type { Lang } from '../lib/types';

type LangContextValue = {
  lang: Lang;
  t: typeof translations.tr;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('tr');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'tr') setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
