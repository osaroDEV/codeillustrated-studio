'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '10+', label: 'Successfully Completed Projects' },
  // { number: '$30M+', label: 'Client Funding Secured' },
  { number: '5+', label: 'Countries with Global Clientele' },
  { number: '10+', label: 'Team Members' },
];

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold anton-sc mb-4">
                {stat.number}
              </div>
              <p className="text-base md:text-lg text-gray-600 max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
