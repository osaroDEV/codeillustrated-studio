"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Michael Stevens Solicitors",
    category: "Legal - UI/UX & Web Development",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Coding Tutor",
    category: "EdTech",
    image:
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Dabs Construction",
    category: "Civil Engineering",
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Ritzy Healthcare",
    category: "Healthcare Tech",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function FeaturedWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="works" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold anton-sc mb-16">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              data-cursor-hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold anton-sc mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {project.category}
                </p>
              </div>

              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/works"
            className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300"
          >
            View All Works
            <span className="bg-white text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
