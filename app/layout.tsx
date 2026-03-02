import type { Metadata } from 'next';
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { LangProvider } from '../components/LangProvider';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Portfolio — Full Stack Developer',
  description:
    'TypeScript & Node.js ile ölçeklenebilir, performanslı ve kullanıcı odaklı uygulamalar geliştiriyorum.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      data-theme="dark"
      className={`${syne.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

