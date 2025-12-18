'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold anton-sc">
            Code Illustrated Studio
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#works" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Works
            </a>
            <a href="#services" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="#careers" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Careers
            </a>
            <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 transition-colors">
              Start a Project
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
              href="#services"
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
            <button className="px-8 py-3 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-colors">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
