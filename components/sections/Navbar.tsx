"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
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
          {/* Logo */}
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 text-2xl font-bold anton-sc group"
          >
            <img
              src="/labs/images/logo.png"
              alt="CIS Logo"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span>Code Illustrated Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/works"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Works
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300"
            >
              Start a Project
              <span className="bg-white text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          {/* Offset for navbar height */}
          <div className="h-20" />

          <div className="relative flex flex-col h-[calc(100vh-5rem)] px-8 pb-10 bg-white">
            {/* Main Links - Right Aligned */}
            <div className="flex flex-col items-end gap-3 pt-12 mt-10">
              {[
                { label: "Works", href: "/works" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
              ].map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[clamp(2.5rem,8vw,4.5rem)] leading-none tracking-tight hover:opacity-60 transition-all duration-300 text-right"
                  style={{
                    animation: "menuFadeIn 0.5s ease forwards",
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 flex flex-col items-end gap-6">
              {/* <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-between bg-black text-white px-6 py-2.5 rounded-full w-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-black/5 hover:shadow-blue-500/20"
              style={{
                  animation: "menuFadeIn 0.5s ease forwards",
                  animationDelay: "400ms",
                  opacity: 0,
                }}
              data-cursor-hover
            >
              <span className="text-sm anton-sc uppercase tracking-wide">
                Start a Project
              </span>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all transform group-hover:rotate-[-45deg]">
                <ArrowRight size={20} />
              </div>
            </Link> */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300"
              >
                Start a Project
                <span className="bg-white text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </div>
          </div>

          {/* Animation */}
          <style jsx>{`
            @keyframes menuFadeIn {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}
      {/* ================================================= */}
    </nav>
  );
}
