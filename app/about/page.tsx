"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Heart, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef } from "react";

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

const ValueCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors group"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};

export default function AboutPage() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          section.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Text animation logic for hero
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We believe in the power of details. Every pixel, every interaction, and every line of code is crafted with deliberate intent.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries is our norm. We blend emerging technologies with timeless design principles to create future-proof products.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description:
        "We don't just build for screens; we build for people. Understanding the user's journey is at the heart of everything we do.",
    },
    {
      icon: Code2,
      title: "Craftsmanship",
      description:
        "Coding is an art form. We pride ourselves on clean, scalable, and efficient architecture that stands the test of time.",
    },
  ];

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white text-black"
      >
        <div className="max-w-7xl mx-auto w-full pt-20">
          <div className="mb-12">
            <h1
              ref={textRef}
              className="text-6xl md:text-8xl lg:text-9xl font-bold anton-sc leading-[0.9] mb-8"
            >
              WE ARE <br /> CIS STUDIO
            </h1>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 block text-2xl md:text-3xl font-medium tracking-tight"
            >
              Crafting Digital Excellence
            </motion.span>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold anton-sc mb-8 leading-tight uppercase">
              <SplitText>A Boutique Studio</SplitText> <br />
              <span className="text-white/40">
                <SplitText>With a Global Vision</SplitText>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-12">
              Based at the intersection of Art and Technology, Code Illustrated
              Studio (CIS) is a digital product laboratory dedicated to
              transforming bold ideas into seamless digital experiences. We
              don't just build websites; we build legacies.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-5xl font-bold anton-sc mb-2">50+</div>
                <div className="text-gray-500 uppercase tracking-widest text-sm">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold anton-sc mb-2">12+</div>
                <div className="text-gray-500 uppercase tracking-widest text-sm">
                  Design Awards
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden group">
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Studio"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-bold anton-sc uppercase leading-none">
              Our Core <br /> <span className="text-white/20">Philosophy</span>
            </h2>
            <p className="max-w-md text-gray-500 text-lg">
              Our principles are the foundation of every pixel we push and every
              line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold anton-sc uppercase tracking-tighter leading-none mb-8">
              Let's build <br /> <span className="text-white/20">Together</span>
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-xl font-bold uppercase transition-transform"
          >
            Start a Project
            <span className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-[-45deg]">
              <ArrowRight size={24} />
            </span>
          </motion.button>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-gradient-to-br from-neutral-900/50 to-transparent rounded-full blur-3xl -z-0" />
      </section>
    </main>
  );
}
