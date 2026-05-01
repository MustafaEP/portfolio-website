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
  jobTitle: 'Backend-Focused Software Developer',
  description:
    'Backend-focused junior developer building real-world applications with NestJS, FastAPI, and Django. Three personal projects deployed to production on a self-managed VPS, including an AI-powered English learning platform with a microservice architecture. Comfortable integrating LLMs into backend services.',
  url: 'https://mustafaerhanportakal.com/',
  image: 'https://mustafaerhanportakal.com/og-image.jpg',
  email: 'portakalm11@gmail.com',
  telephone: '+905074131160',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bursa',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://github.com/mustafaep',
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
    'NestJS', 'FastAPI', 'Django', 'REST APIs', 'JWT Authentication',
    'TypeScript', 'JavaScript', 'Python',
    'PostgreSQL', 'Prisma ORM', 'SQL', 'MongoDB',
    'React', 'React Native',
    'Gemini API', 'Prompt Engineering', 'Structured JSON Outputs', 'LLM Integration',
    'Git', 'Docker', 'Linux VPS', 'AI-assisted Development',
    'Microservices', 'Node.js', 'Express', 'ASP.NET Core',
    'Spotify API', 'Socket.IO', 'AWS SES', 'Puppeteer',
  ],
  workExample: [
    {
      '@type': 'CreativeWork',
      name: 'Letter to Stars',
      description:
        'AI-powered English learning diary. Entries rewritten to IELTS levels 6–9 with vocabulary extraction and Turkish translations. Microservice architecture with NestJS, FastAPI, Django, React Native.',
      url: 'https://github.com/mustafaep/letter-to-stars',
    },
    {
      '@type': 'CreativeWork',
      name: 'Organization Management Panel',
      description:
        'Full-stack management system with 17+ modules: members, payments, accounting, documents, approvals, notifications, RBAC. Real-time Socket.IO, PDF generation, Excel exports.',
      url: 'https://github.com/mustafaep/yonetim-paneli',
    },
    {
      '@type': 'CreativeWork',
      name: 'Moodify-AI',
      description:
        'Capstone: sentiment-analysis-driven music recommendation platform. Maps Gemini-based mood analysis to Spotify track features via the Spotify Web API.',
      url: 'https://github.com/mustafaep/Moodify-AI',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Mustafa Erhan Portakal | Backend-Focused Software Developer — NestJS, FastAPI, Django',
  description:
    'Backend-focused junior developer. Three personal projects in production on a self-managed VPS, including an AI-powered English learning platform with a microservice architecture (NestJS + FastAPI + Django). Comfortable integrating LLMs into backend services.',
  keywords:
    'Mustafa Erhan Portakal, Backend Developer, Junior Backend Developer, NestJS, FastAPI, Django, TypeScript, Python, JavaScript, PostgreSQL, Prisma, REST API, JWT, Microservices, Docker, Linux VPS, Gemini API, LLM Integration, Prompt Engineering, React, Bursa Turkey, Available for Hire',
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
    title: 'Mustafa Erhan Portakal — Backend-Focused Software Developer',
    description:
      'Junior backend developer. NestJS, FastAPI, Django. Three personal projects in production on a self-managed VPS. LLM integration with Gemini.',
    images: [
      {
        url: 'https://mustafaerhanportakal.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mustafa Erhan Portakal - Backend-Focused Software Developer Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Erhan Portakal — Backend-Focused Software Developer',
    description:
      'Junior backend developer. NestJS, FastAPI, Django. 3 production apps on a self-managed VPS. LLM integration with Gemini. Open to junior backend roles.',
    images: ['https://mustafaerhanportakal.com/og-image.jpg'],
    creator: '@mustafaep',
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