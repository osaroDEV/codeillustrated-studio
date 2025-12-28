'use client';

import { useEffect, useRef } from 'react';

const clients = [
  'Michael Stevens Solicitors',
  'Ritzy Healthcare',
  'Coding App',
  'Complete Doctor',
  'Qarrt',
];

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold anton-sc text-center">
          Our Clients
        </h2>
        <p className='mt-5 w-3/4 mx-auto text-center sm:text-2xl md:text-3xl'>Since 2023, we have partnered with these companies to create positive impact for the future. Will your company name be next here?</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-16 overflow-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-300 whitespace-nowrap anton-sc">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
