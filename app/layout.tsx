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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mustafa Erhan Portakal',
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack Developer with 3+ production applications. Scalable systems with React, Node.js, TypeScript, Python, ASP.NET Core. Microservice architectures with NestJS, FastAPI, Django. Self-managed VPS deployments with Docker, CI/CD, nginx.',
  url: 'https://mustafaerhanportakal.com/',
  image: 'https://mustafaerhanportakal.com/og-image.jpg',
  email: 'portakalm11@gmail.com',
  telephone: '+905074131160',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Istanbul',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://github.com/MustafaEP',
    'https://linkedin.com/in/mustafa-erhan-portakal-2142101ba',
    'https://mustafaerhanportakal.com',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bursa Technical University',
    department: 'Computer Engineering',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'IBM Full Stack Software Developer Professional Certificate',
    credentialCategory: 'Professional Certificate',
    recognizedBy: {
      '@type': 'Organization',
      name: 'IBM / Coursera',
    },
    dateCreated: '2026-01',
  },
  knowsAbout: [
    'Node.js', 'NestJS', 'FastAPI', 'Django', 'ASP.NET Core',
    'React', 'React Native', 'TypeScript', 'Tailwind CSS',
    'PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM',
    'Docker', 'Docker Compose', 'GitHub Actions', 'nginx',
    'Linux VPS', 'Microservices', 'REST APIs', 'JWT', 'OAuth2',
    'Gemini AI', 'Spotify API', 'Socket.IO', 'AWS SES',
  ],
  workExample: [
    {
      '@type': 'CreativeWork',
      name: 'Letter to Stars',
      description:
        'AI-powered English learning diary. Entries rewritten to IELTS levels 6–9 with vocabulary extraction and Turkish translations. Microservice architecture with NestJS, FastAPI, Django, React Native.',
      url: 'https://github.com/MustafaEP/letter-to-stars',
    },
    {
      '@type': 'CreativeWork',
      name: 'Organization Management Panel',
      description:
        'Full-stack management system with 17+ modules: members, payments, accounting, documents, approvals, notifications, RBAC. Real-time Socket.IO, PDF generation, Excel exports.',
      url: 'https://github.com/MustafaEP/yonetim-paneli',
    },
    {
      '@type': 'CreativeWork',
      name: 'Moodify-AI',
      description:
        'Sentiment-analysis music recommendation platform with Spotify and Gemini AI integration. Handles 50+ concurrent users.',
      url: 'https://github.com/MustafaEP/Moodify-AI',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Mustafa Erhan Portakal | Full-Stack Developer — Node.js, TypeScript, NestJS, FastAPI',
  description:
    'Full-Stack Developer with 3+ production apps. React, Node.js, TypeScript, NestJS, FastAPI, Django, ASP.NET Core. Microservice architectures, Docker, CI/CD, VPS deployments. AI-powered products.',
  keywords:
    'Mustafa Erhan Portakal, Full-Stack Developer, Backend Developer, Node.js, NestJS, TypeScript, React, React Native, FastAPI, Django, ASP.NET Core, PostgreSQL, MongoDB, Redis, Docker, Microservices, AI Integration, Gemini AI, Istanbul Turkey, Available for Hire',
  authors: [{ name: 'Mustafa Erhan Portakal', url: 'https://mustafaerhanportakal.com' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://mustafaerhanportakal.com/',
    languages: {
      en: 'https://mustafaerhanportakal.com/',
      tr: 'https://mustafaerhanportakal.com/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://mustafaerhanportakal.com/',
    siteName: 'Mustafa Erhan Portakal',
    title: 'Mustafa Erhan Portakal — Full-Stack Developer',
    description:
      '3+ production apps. React, Node.js, NestJS, FastAPI, Django, Docker. AI-powered products. Open to opportunities.',
    images: [
      {
        url: 'https://mustafaerhanportakal.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mustafa Erhan Portakal - Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Erhan Portakal — Full-Stack Developer',
    description:
      '3+ production apps. Node.js, NestJS, FastAPI, Django, React. Docker, CI/CD, VPS. Open to opportunities.',
    images: ['https://mustafaerhanportakal.com/og-image.jpg'],
    creator: '@MustafaEP',
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}