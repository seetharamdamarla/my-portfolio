"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="w-full relative overflow-hidden bg-[#030303] pt-32 pb-8 border-t border-white/5 font-sans">
      
      {/* Dots Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-neutral-700"></div>
          <span className="text-[#a07cf6] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
            What's Next?
          </span>
          <div className="w-12 h-[1px] bg-neutral-700"></div>
        </motion.div>

        {/* Massive Typography CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center w-full mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none font-bold text-white tracking-tighter uppercase flex flex-col items-center justify-center">
            <span>LET'S WORK</span>
            <span className="text-[#a07cf6]">
              TOGETHER
            </span>
          </h2>
        </motion.div>

        {/* Glowing Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <a
            href="mailto:seetharamdamarla@gmail.com"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-6 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-[#a07cf6]/50 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#a07cf6]/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 group-hover:text-white transition-colors relative z-10" />
            <span className="text-lg md:text-2xl font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">
              seetharamdamarla@gmail.com
            </span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#a07cf6] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 relative z-10" />
          </a>
        </motion.div>

        {/* Bottom Navigation Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start text-neutral-500 text-sm">
            <p>Designed & Developed by</p>
            <p className="text-neutral-300 font-medium">Seetharam Damarla <span className="opacity-50 font-normal">© {currentYear || "2026"}</span></p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/seetharamdamarla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300 flex flex-col items-center group"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">GitHub</span>
                <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#a07cf6]">GitHub</span>
              </span>
            </a>
            
            <a
              href="https://linkedin.com/in/seetharamdamarla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300 flex flex-col items-center group"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">LinkedIn</span>
                <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#a07cf6]">LinkedIn</span>
              </span>
            </a>

            <a
              href="https://www.instagram.com/seetharam__17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300 flex flex-col items-center group"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">Instagram</span>
                <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#a07cf6]">Instagram</span>
              </span>
            </a>
          </div>

          {/* Location / Local Time (optional flair) */}
          <div className="flex flex-col items-center md:items-end text-neutral-500 text-sm">
            <p>Based in</p>
            <p className="text-neutral-300 font-medium">Andhra Pradesh, India</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
