'use client';

import { Hero } from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import { FeaturedWorks } from '@/components/sections/FeaturedWorks';
import { Services } from '@/components/sections/Services';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Testimonials } from '@/components/sections/Testimonials';
import { CustomCursor } from '@/components/CustomCursor';
import { useEffect } from 'react';
import ValueSection from '@/components/sections/ValueSection';
import AchievementsSection from '@/components/sections/Achievements';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          section.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-white">
      <CustomCursor />
      <Hero />
      <AboutSection />
      <FeaturedWorks />
      <Services />
      <ValueSection />
      {/* <Statistics /> */}
      <AchievementsSection />
      <ClientLogos />
      <Testimonials />
    </main>
  );
}