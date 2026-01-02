import React, { useEffect, useRef, useState } from "react";

interface StatCardProps {
  number: string;
  label: string;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, isVisible }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const hasAnimatedRef = useRef(false);

  // Parse the number to get the numeric value and suffix
  const parseNumber = (str: string) => {
    const match = str.match(/(\d+)/);
    const numericValue = match ? parseInt(match[0]) : 0;
    const suffix = str.replace(/\d+/, "");
    return { numericValue, suffix };
  };

  const { numericValue, suffix } = parseNumber(number);

  useEffect(() => {
    if (isVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      
      const startTime = Date.now();
      const duration = 2000; // 2 seconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(progress * numericValue);
        setDisplayNumber(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayNumber(numericValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, numericValue]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold">
        <span className="text-white">{displayNumber}</span>
        <span className="text-[#4A9EFF]">{suffix}</span>
      </div>
      <p className="text-[#808080] text-base md:text-lg leading-relaxed max-w-xs">
        {label}
      </p>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  const text =
    "We champion the bold ideas and brave steps our partners have taken with us, from startups to enterprises. We're proud of the connections we've made along the way.";

  const stats = [
    {
      number: "10+",
      label: "Successfully completed more than 10+ projects.",
    },
    {
      number: "99%",
      label: "Client satisfaction rate across all delivered projects",
    },
    {
      number: "5+",
      label: "Countries, global clients from all over the world",
    },
    {
      number: "10+",
      label: "Passionate Designers and Management Teams",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      const letterCount = text.length;
      const duration = 2000; // 2 seconds
      const intervalTime = duration / letterCount;

      let currentLetter = 0;
      const interval = setInterval(() => {
        currentLetter++;
        setVisibleLetters(currentLetter);
        
        if (currentLetter >= letterCount) {
          clearInterval(interval);
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isVisible, hasAnimated, text.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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
    <section
      ref={sectionRef}
      className="bg-[#1c1c1c] text-white px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#1E5A6D] text-base md:text-2xl lg:text-3xl font-medium mb-8">
          Our Achievement
        </h2>

        <p className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-16 font-sans">
          {mounted &&
            text.split("").map((char, index) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 xl:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;