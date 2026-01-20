"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { projects } from "@/lib/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  const nextProjectIndex = project
    ? (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
    : 0;
  const nextProject = projects[nextProjectIndex];

  if (!project) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            Could not find project with slug: {slug}
          </p>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-white text-black rounded-full font-bold"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={containerRef}
      className="bg-black min-h-screen text-white selection:bg-white selection:text-black"
    >
      <CustomCursor />

      {/* Navigation Bar Placeholder (Back Button) */}
      <div className="fixed top-16 left-0 right-0 z-[60] p-6 lg:p-12 text-white pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <Link
            href="/works"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors uppercase font-medium tracking-wide text-sm"
          >
            <ArrowLeft size={20} />
            Back to Works
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-24 pb-24">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="mb-6 flex flex-wrap gap-4 text-sm font-medium tracking-widest uppercase">
              <span className="bg-white text-black px-4 py-1 rounded-full">
                {project.category}
              </span>
              <span className="border border-white/30 px-4 py-1 rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold anton-sc leading-none mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
              {project.subCategory}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Container */}
      <div className="relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32 border-b border-white/10 pb-24">
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                {project.description}
              </h3>
            </div>
            <div className="md:col-span-4 space-y-8">
              <div>
                <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4">
                  Services
                </h4>
                <ul className="space-y-2">
                  {project.services.map((service, i) => (
                    <li
                      key={i}
                      className="text-lg border-b border-white/10 pb-2 last:border-0"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4">
                  Client
                </h4>
                <p className="text-lg">{project.title}</p>
              </div>
              {project.liveUrl && (
                <div className="pt-4">
                  <h4 className="text-gray-500 uppercase text-sm tracking-widest mb-4">
                    Live Project
                  </h4>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors group"
                  >
                    Visit Site
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl anton-sc mb-6 text-gray-500">
                The Challenge
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-4xl anton-sc mb-6 text-white">
                The Solution
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Gallery */}
          {project.gallery && (
            <div className="space-y-6 md:space-y-12">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg md:rounded-3xl"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-contain hover:scale-80 transition-transform duration-[1.5s] ease-out"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Next Project Footer */}
        <Link
          href={`/works/${nextProject.slug}`}
          className="block group relative overflow-hidden h-[60vh] md:h-[80vh]"
        >
          <div className="absolute inset-0 bg-white/5 transition-colors duration-500 group-hover:bg-white/10" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1s] grayscale group-hover:grayscale-0"
            style={{ backgroundImage: `url(${nextProject.image})` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black via-transparent to-black/40">
            <span className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              Next Project
            </span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold anton-sc mb-8 group-hover:translate-y-[-10px] transition-transform duration-500">
              {nextProject.title}
            </h2>
            <div className="flex items-center gap-2 text-xl font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Case Study <ArrowUpRight />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
