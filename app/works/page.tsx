"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "UI/UX Design",
  "Development",
  "Branding",
  "Strategy",
];

const projects = [
  {
    id: 1,
    title: "Michael Stevens Solicitors",
    category: "UI/UX Design",
    subCategory: "Legal Tech",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Coding Tutor",
    category: "Development",
    subCategory: "EdTech Platform",
    image:
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Dabs Construction",
    category: "Branding",
    subCategory: "Civil Engineering",
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Ritzy Healthcare",
    category: "Development",
    subCategory: "Health Systems",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Solar Energy Portal",
    category: "Strategy",
    subCategory: "Renewable Tech",
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Eco-Fashion Brand",
    category: "Branding",
    subCategory: "Sustainable Style",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="bg-[#0f0f0f] min-h-screen pt-32 pb-20 text-white">
      <CustomCursor />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,12vw,9rem)] font-bold uppercase leading-[0.85] tracking-tighter anton-sc mb-12"
          >
            Works
            <span className="text-gray-600 block text-[0.4em]">Selection</span>
          </motion.h1>

          <div className="flex flex-wrap gap-4 mt-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/20 hover:border-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group cursor-pointer ${
                  index % 2 === 1 ? "md:mt-32" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold anton-sc mb-2 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-sm text-gray-400 font-medium">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.subCategory}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-4xl md:text-6xl font-bold anton-sc text-center md:text-left leading-tight">
              HAVE A PROJECT <br />
              <span className="text-gray-500 underline decoration-gray-500/30 underline-offset-8">
                IN MIND?
              </span>
            </h2>
            <Link href="/" className="group flex flex-col items-center gap-4">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center text-black transition-transform duration-500 group-hover:scale-110">
                <span className="text-xl font-bold uppercase tracking-tighter">
                  Start
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
