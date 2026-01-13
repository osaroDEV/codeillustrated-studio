"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ContactPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    // Scroll progress or other animations can be added here
  }, []);

  return (
    <main className="bg-white text-[#111111] selection:bg-black selection:text-white pb-24 in-view">
      <CustomCursor />

      {/* Hero Section */}
      <section className="pt-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-16">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 flex flex-col gap-16">
              <motion.div {...fadeInUp} className="flex flex-col gap-8">
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold anton-sc uppercase leading-[0.85] tracking-tighter">
                  Let&apos;s <br />
                  <span className="text-blue-500">Partner</span> <br />
                  Up!
                </h1>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-12"
              >
                {/* Profile Section */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 group"
                >
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-24 h-24 rounded-full bg-neutral-100 overflow-hidden border-2 border-white shadow-xl flex items-center justify-center">
                      <span className="text-2xl font-bold anton-sc text-gray-400">
                        OD
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-1">
                      Account Executive
                    </span>
                    <h3 className="text-2xl font-bold">osaroDEV</h3>
                    <Link
                      href="https://calendly.com"
                      className="mt-2 flex items-center gap-2 text-[10px] font-bold hover:text-white hover:bg-black transition-all uppercase tracking-widest bg-gray-50 px-5 py-2.5 rounded-full w-fit border border-gray-100"
                      data-cursor-hover
                    >
                      Book a Call <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col gap-10"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                      Inquiry
                    </span>
                    <a
                      href="mailto:admin@codeillustrated.com"
                      className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-blue-500 transition-colors break-words underline decoration-gray-100 underline-offset-8"
                      data-cursor-hover
                    >
                      admin@codeillustrated.com
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                      Fast Response
                    </span>
                    <a
                      href="https://wa.me/447405786279"
                      className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-blue-500 transition-colors underline decoration-gray-100 underline-offset-8"
                      data-cursor-hover
                    >
                      +44 7405 786 279
                    </a>
                  </div>
                </motion.div>

                {/* Socials */}
                <motion.div variants={fadeInUp} className="flex gap-8">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-gray-300 hover:text-blue-500 transition-colors"
                      data-cursor-hover
                    >
                      <item.icon size={24} strokeWidth={1.5} />
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="bg-white lg:pl-24"
              >
                <form className="flex flex-col gap-14 pt-8">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-4 group">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="bg-transparent border-b border-gray-100 py-4 text-2xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-100 font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-4 group">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        Your Company
                      </label>
                      <input
                        type="text"
                        placeholder="Project Inc."
                        className="bg-transparent border-b border-gray-100 py-4 text-2xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-100 font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="bg-transparent border-b border-gray-100 py-4 text-2xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-100 font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-4 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      placeholder="I'd like to talk about..."
                      className="bg-transparent border-b border-gray-100 py-4 text-2xl focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-gray-100 font-medium"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="group flex items-center justify-between bg-black text-white px-10 py-8 rounded-full w-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-black/5 hover:shadow-blue-500/20"
                      data-cursor-hover
                    >
                      <span className="text-2xl font-bold anton-sc uppercase tracking-wide">
                        Submit Inquiry
                      </span>
                      <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all transform group-hover:rotate-[-45deg]">
                        <ArrowRight size={28} />
                      </div>
                    </button>
                  </div>
                </form>

                {/* Reviews / Trust Bar */}
                {/* <div className="mt-24 p-12 bg-gray-50/50 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-10 border border-gray-100">
                  <div className="flex flex-col gap-3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 text-yellow-500 text-xl">
                      {"★★★★★".split("").map((s, i) => (
                        <span key={i}>{s}</span>
                      ))}
                    </div>
                    <p className="text-2xl font-bold uppercase tracking-tighter anton-sc leading-none">
                      5 Star Reviews
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                      Trusted by 100+ innovative brands worldwide
                    </p>
                  </div>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 shadow-sm"
                      />
                    ))}
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Brand Text */}
      <section className="mt-60 overflow-hidden pointer-events-none select-none opacity-[0.05]">
        <h2 className="text-[30vw] font-bold anton-sc leading-none whitespace-nowrap -translate-x-20 text-blue-500">
          CIS STUDIO
        </h2>
      </section>
    </main>
  );
}
