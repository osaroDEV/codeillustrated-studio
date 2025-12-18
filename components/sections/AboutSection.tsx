import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const text = "From our studio, we channel calm into creativity to craft digital products that matter and leave a lasting mark. We double down on our unwavering service to deliver impactful results, turning ambitions into a reality you live in.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate letters in quick succession
            let count = 0;
            const interval = setInterval(() => {
              count++;
              setVisibleLetters(count);
              if (count >= text.length) {
                clearInterval(interval);
              }
            }, 15); // 15ms per letter for quick succession
          }
        });
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
  }, [hasAnimated, text.length]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl">
        <h2 className="text-blue-500 text-sm font-medium mb-8">About</h2>
        
        <p className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-16 font-sans">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className={`transition-all duration-200 ${
                index < visibleLetters
                  ? 'text-black font-bold opacity-100'
                  : 'text-gray-300 font-normal opacity-50'
              }`}
            >
              {char}
            </span>
          ))}
        </p>

        <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors px-8 py-4 rounded-full text-base font-medium">
          <span>About Studio</span>
          <span className="bg-blue-500 text-white p-2 rounded-full">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </section>
  );
}