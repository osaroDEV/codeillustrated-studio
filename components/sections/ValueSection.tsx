import {
  ArrowRight,
  FileText,
  Infinity,
  LucideIcon,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PromiseCardProps {
  IconComponent: LucideIcon;
  title: string;
  description: string;
}

const PromiseCard: React.FC<PromiseCardProps> = ({
  IconComponent,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-3">
        <div className="bg-black text-white p-2 rounded">
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default function ValueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  const text =
    "Together, we make perfect partners. 🤝 We offer worry-free partnerships and deliver your vision into reality with our top- tier creativity. No fluff, just the good stuff.";

  const promises = [
    {
      icon: Sparkles,
      title: "Crafted, not copied",
      description:
        "No two problems are exactly alike, that's why we believe every project deserves a specific tailored solution, including yours.",
    },
    {
      icon: Infinity,
      title: "Stay Flexible",
      description:
        "Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves.",
    },
    {
      icon: MessageCircle,
      title: "Seamless Collaboration",
      description:
        "We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you.",
    },
    {
      icon: FileText,
      title: "Transparent Pricing",
      description:
        "We provide a clear breakdown of invoices, so no hidden fees! Whether you do subscription-based or project-based, you can cancel anytime.",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let count = 0;
            const interval = setInterval(() => {
              count++;
              setVisibleLetters(count);
              if (count >= text.length) {
                clearInterval(interval);
              }
            }, 15);
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
  }, [hasAnimated, text.length, mounted]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl">
        <h2 className="text-[#1E5A6D] text-base md:text-2xl lg:text-3xl font-medium mb-8">
          Our Values
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

        {/* <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-2.5 md:px-8 md:py-4 rounded-full text-base font-medium">
          <span className="text-[#C42125]">About Studio</span>
          <span className="bg-[#1E5A6D] text-white p-2 rounded-full">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button> */}
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col justify-between h-full space-y-8 lg:space-y-0">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              Our pinky promise...
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {promises.map((promise, index) => (
              <PromiseCard
                key={index}
                IconComponent={promise.icon}
                title={promise.title}
                description={promise.description}
              />
            ))}
          </div>
        </div>
        <button className="flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-200 group w-fit mt-10">
          <span className="font-medium">Let's partner up!</span>
          <div className="bg-blue-400 group-hover:bg-blue-500 p-2 rounded-full transition-colors duration-200">
            <ArrowRight size={20} />
          </div>
        </button>
      </section>
    </section>
  );
}
