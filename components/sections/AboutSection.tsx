import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const text =
    "From our studio, we channel calm into creativity to craft digital products that matter and leave a lasting mark. We double down on our unwavering service to deliver impactful results, turning ambitions into a reality you live in.";

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
      className="bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl">
        <h2 className="text-[#1E5A6D] text-base md:text-2xl lg:text-3xl font-medium mb-8">
          About
        </h2>

        <p className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-16 font-sans">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`transition-all duration-200 ${
                index < visibleLetters
                  ? "text-black font-medium opacity-100"
                  : "text-gray-300 font-normal opacity-50"
              }`}
            >
              {char}
            </span>
          ))}
        </p>

        <Link
          href="/about"
          className="group w-max flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300"
        >
          More About Us
          <span className="bg-white text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={20} />
          </span>
        </Link>
      </div>
    </section>
  );
}
