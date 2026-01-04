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
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href='/' className="text-2xl font-bold anton-sc">
            Code Illustrated Studio
          </Link>

          {/* Desktop Navigation */}
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
        <div className="md:hidden fixed inset-0 z-40  text-black">
          {/* Offset for navbar height */}
          <div className="h-20" />

          <div className="flex flex-col justify-between h-[calc(100vh-5rem)] px-8 pb-10 bg-[#ffffff]">
            {/* Main Links */}
            <div className="flex flex-col gap-6">
              {[
                { label: "Works", href: "#works" },
                { label: "Services", href: "/labs/services" },
                { label: "About", href: "#about" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[clamp(2.75rem,7vw,4rem)] font-semibold leading-none tracking-tight hover:opacity-60 transition-all duration-300"
                  style={{
                    animation: "menuFadeUp 0.6s ease forwards",
                    animationDelay: `${index * 80}ms`,
                    opacity: 0,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col gap-6">
              <div className="h-px bg-white/20" />

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-full text-lg font-medium tracking-tight"
              >
                <span className="text-[#C42125]">Start a Project</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E5A6D]">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </button>
            </div>
          </div>

          {/* Animation */}
          <style jsx>{`
            @keyframes menuFadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
      {/* ================================================= */}
    </nav>
  );
}
