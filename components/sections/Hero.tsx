'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = text.innerText.split(' ');
    text.innerHTML = '';

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.marginRight = '0.3em';

      const letters = word.split('');
      letters.forEach((letter, letterIndex) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(100%)';
        span.style.animation = `slideUp 0.8s cubic-bezier(0.62, 0.05, 0.01, 0.99) forwards`;
        span.style.animationDelay = `${(wordIndex * 0.1) + (letterIndex * 0.02)}s`;
        wordSpan.appendChild(span);
      });

      text.appendChild(wordSpan);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold anton-sc leading-[1.1] mb-8"
        >
          Crafting Digital Products to impact the Future Today
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto fade-in" style={{ animationDelay: '1s' }}>
          We design and develop digital experiences that help businesses grow and make an impact
        </p>
      </div>
    </section>
  );
}
