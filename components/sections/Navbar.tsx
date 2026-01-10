"use client";

import { ArrowRight, Menu, X } from "lucide-react";
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
          <Link href="/" className="text-2xl font-bold anton-sc">
            Code Illustrated Studio
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
            <a
              href="#about"
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              About
            </a>

            <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-base font-medium">
              <span className="text-[#C42125]">Start a Project</span>
              <span className="bg-[#1E5A6D] text-white rounded-full p-1">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
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

          <div className="relative flex flex-col h-[calc(100vh-5rem)] px-8 pb-10 mt-5">
            {/* Main Links - Right Aligned */}
            <div className="flex flex-col items-end gap-3 pt-12">
              {[
                { label: "Works", href: "/works" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/#about" },
              ].map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[clamp(2.5rem,8vw,4.5rem)] font-light leading-none tracking-tight hover:opacity-60 transition-all duration-300 text-right"
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
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-3/4 text-lg border p-3 rounded-full font-normal tracking-tight group"
                style={{
                  animation: "menuFadeIn 0.5s ease forwards",
                  animationDelay: "400ms",
                  opacity: 0,
                }}
              >
                <span className="text-black">Start a Project</span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4FC3F7] group-hover:bg-[#29B6F6] transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </button>
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
