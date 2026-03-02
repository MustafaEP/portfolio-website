'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CursorGlow from '../components/CursorGlow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useCursorGlowEffect } from '../hooks/useCursorGlowEffect';
import { useTiltEffect } from '../hooks/useTiltEffect';

export default function Page() {
  useScrollReveal();
  useSmoothScroll();
  useCursorGlowEffect();
  useTiltEffect();

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

