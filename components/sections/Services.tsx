'use client';

import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Branding Identity',
    description: 'Creating unique brand identities that resonate with your audience and stand the test of time.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences that drive conversion and delight users.',
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Building fast, scalable, and responsive websites using modern web technologies.',
  },
  {
    number: '04',
    title: 'Visual Design',
    description: 'Crafting stunning visual designs that communicate your message effectively.',
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold anton-sc mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border-t border-white/20 last:border-b overflow-hidden"
              data-cursor-hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-12 md:py-16 transition-transform duration-500 ease-out"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                }}
              >
                <div className="flex items-start gap-8 md:gap-16">
                  <span className="text-4xl md:text-5xl font-bold anton-sc text-white/30">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold anton-sc mb-4">
                      {service.title}
                    </h3>
                    <p
                      className="text-lg md:text-xl text-gray-400 max-w-2xl transition-all duration-500"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0.6,
                        transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 bg-white/5 transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
