"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MotionLink = motion(Link);

const services = [
  {
    number: "01",
    title: "Branding & Identity",
    items: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Packaging Design",
      "Editorial Design",
    ],
    image:
      "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "02",
    title: "UI/UX Design",
    items: [
      "Mobile Apps",
      "Web Applications",
      "Dashboard Design",
      "Design Systems",
      "User Research",
    ],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "03",
    title: "Website Development",
    items: [
      "Webflow Development",
      "React Development",
      "WordPress Solutions",
      "Shopify Stores",
      "Custom CMS",
    ],
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "04",
    title: "Visual Design",
    items: [
      "2D Illustration",
      "3D Design",
      "Motion Graphics",
      "Animation",
      "Art Direction",
    ],
    image:
      "https://images.pexels.com/photos/6612711/pexels-photo-6612711.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const SplitText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const letters = children.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

const ServiceSection = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className={`min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 ${
        index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold opacity-50"
          >
            {service.number}
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none uppercase tracking-tight">
            <SplitText>{service.title}</SplitText>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 pt-6"
          >
            {service.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="group relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10 text-xl md:text-2xl font-light py-3 cursor-pointer transition-transform duration-300 group-hover:translate-x-4">
                  {item}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className={`absolute left-0 top-0 h-full w-1 origin-left ${
                    index % 2 === 0 ? "bg-white" : "bg-black"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[400px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, delay: 0.3 }}
            className="sticky top-24 h-full rounded-2xl overflow-hidden"
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // const handleMouseMove = (e: MouseEvent) => {
    //   setCursorPos({ x: e.clientX, y: e.clientY });
    // };

    window.addEventListener("scroll", handleScroll);

    // Text animation logic
    if (textRef.current) {
      const text = textRef.current;
      const content = text.innerText;
      const words = content.split(" ");
      text.innerHTML = "";

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.overflow = "hidden";
        wordSpan.style.marginRight = "0.3em";
        wordSpan.style.whiteSpace = "nowrap";

        const letters = word.split("");
        letters.forEach((letter, letterIndex) => {
          const span = document.createElement("span");
          span.textContent = letter;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(100%)";
          span.style.animation = `slideUp 0.8s cubic-bezier(0.62, 0.05, 0.01, 0.99) forwards`;
          span.style.animationDelay = `${
            wordIndex * 0.1 + letterIndex * 0.02
          }s`;
          wordSpan.appendChild(span);
        });

        text.appendChild(wordSpan);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-black">
      <CustomCursor />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white text-black"
      >
        <div className="max-w-7xl mx-auto w-full pt-20">
          <div className="mb-12">
            <h1
              ref={textRef}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold anton-sc leading-[1.1] mb-8"
            >
              Services
            </h1>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 block text-2xl md:text-3xl font-medium tracking-tight"
            >
              Creating Digital Excellence.
            </motion.span>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-2 rounded-full border border-black/20 text-sm font-medium hover:border-black transition-colors"
              >
                {service.title}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {services.map((service, index) => (
        <ServiceSection key={service.number} service={service} index={index} />
      ))}

      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-black text-white py-20">
        <div className="max-w-4xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-12 uppercase tracking-tight"
          >
            <SplitText>Ready to Start?</SplitText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 mb-12"
          >
            Let's create something extraordinary together
          </motion.p>

          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-xl font-bold uppercase transition-transform"
          >
            Contact Us
            <span className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={24} />
            </span>
          </MotionLink>
        </div>
      </section>

      {/* <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      /> */}
    </main>
  );
}
