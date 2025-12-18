'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    text: 'Code Illustrated Studio delivered exceptional work. Their attention to detail and creative approach exceeded our expectations. The team was professional, communicative, and truly understood our vision.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Michael Chen',
    company: 'Digital Ventures',
    text: 'Working with Code Illustrated was a game-changer for our brand. They transformed our digital presence completely. Their expertise in UI/UX design is unmatched.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Emma Williams',
    company: 'Creative Solutions',
    text: 'The level of transparency and communication throughout the project was outstanding. Code Illustrated Studio is our go-to partner for all design needs.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'David Martinez',
    company: 'Growth Labs',
    text: 'Incredible team! They brought our ideas to life with stunning visuals and seamless functionality. Highly recommend their services.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold anton-sc mb-16 text-center">
          Client Reviews
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
              data-cursor-hover
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
              data-cursor-hover
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
