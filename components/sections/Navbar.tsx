"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold anton-sc">
            Code Illustrated Studio
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#works"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Works
            </a>
            <a
              href="/labs/services"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              About
            </a>
            {/* <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 transition-colors">
              Start a Project
            </button> */}
            <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-base font-medium">
              <span className="text-[#C42125]">Start a Project</span>
              <span className="bg-[#1E5A6D] text-white rounded-full">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="#works"
              className="text-2xl font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Works
            </a>
            <a
              href="/labs/services"
              className="text-2xl font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-2xl font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#careers"
              className="text-2xl font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </a>
            {/* <button className="px-8 py-3 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-colors">
              Start a Project
            </button> */}
            <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-base font-medium">
              <span className="text-[#C42125]">Start a Project</span>
              <span className="bg-[#1E5A6D] text-white rounded-full">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
