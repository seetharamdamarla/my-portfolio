"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      setLineHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const data = [
    {
      year: "2026",
      period: "Jul 2026 – Present",
      role: "Research Intern",
      subtitle: "Malware Analysis & Ransomware Research",
      company: "Indian Institute of Technology (IIT) Tirupati",
      location: "Tirupati",
      content: (
        <div className="space-y-5 font-mono">
          <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
            <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span>
            <p>Conducting research on <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">malware analysis and ransomware</strong>, focusing on understanding malware behavior, attack techniques, and detection methodologies.</p>
          </div>
          <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
            <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span>
            <p>Performing <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">static and dynamic malware analysis</strong> while studying reverse engineering techniques and modern ransomware mechanisms to support cybersecurity research.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative w-full bg-black py-24 md:py-32 font-sans overflow-hidden" ref={containerRef}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 mb-20 text-center flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-neutral-700"></div>
          <span className="text-[#a07cf6] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
            OPERATION HISTORY
          </span>
          <div className="w-12 h-[1px] bg-neutral-700"></div>
        </div>
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Experience
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div ref={lineRef} className="relative">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32 group relative">

              {/* Left: Role and Company */}
              <div className="w-full md:w-5/12 text-left md:text-right mb-8 md:mb-0 relative z-10 order-2 md:order-1 flex flex-col md:items-end mt-4 md:mt-0">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 group-hover:text-white transition-colors duration-300 leading-tight md:pr-8 tracking-tight">
                  {item.role}
                  {item.subtitle && (
                    <span className="text-lg md:text-xl text-neutral-400 font-normal mt-2 block tracking-normal">
                      {item.subtitle}
                    </span>
                  )}
                </h3>
                <div className="mt-3 md:pr-8 flex flex-col items-start md:items-end gap-1">
                  <span className="text-[#a07cf6] text-xl md:text-2xl font-mono opacity-80 group-hover:opacity-100 transition-opacity tracking-wide">
                    {item.company}
                  </span>
                  {item.period && (
                    <span className="text-xs md:text-sm text-neutral-400 font-mono">
                      {item.period} {item.location && `• ${item.location}`}
                    </span>
                  )}
                </div>
              </div>

              {/* Center: Year and Glowing Node */}
              <div className="w-full md:w-2/12 flex items-center justify-start md:justify-center relative z-20 order-1 md:order-2">
                {/* Mobile Year display */}
                <div className="md:hidden flex items-center gap-4 w-full pl-[5px]">
                  <div className="h-4 w-4 rounded-full bg-black border border-[#a07cf6] flex items-center justify-center flex-shrink-0 z-20 relative shadow-[0_0_15px_rgba(160,124,246,0.3)]">
                    <div className="h-2 w-2 rounded-full bg-[#a07cf6] opacity-80 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                  </div>
                  <h4 className="text-5xl font-bold text-neutral-200 tracking-tighter opacity-90 font-mono">
                    {item.year}
                  </h4>
                </div>

                {/* Desktop Year display overlay */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                  <h4 className="text-5xl lg:text-7xl font-bold text-neutral-200 tracking-tighter opacity-90 group-hover:scale-105 transition-transform duration-500 bg-black/80 px-4 py-2 rounded-xl  z-30 font-mono">
                    {item.year}
                  </h4>
                </div>

                {/* Desktop Node (Hidden since we want the year to cover it, or we can put the node behind) */}
                <div className="hidden md:flex absolute h-6 w-6 rounded-full bg-black items-center justify-center border border-neutral-800 group-hover:border-[#a07cf6]/50 transition-colors z-20 shadow-[0_0_0_rgba(160,124,246,0)] group-hover:shadow-[0_0_30px_rgba(160,124,246,0.5)]">
                  <div className="h-2 w-2 rounded-full bg-neutral-800 group-hover:bg-[#a07cf6] transition-colors" />
                </div>
              </div>

              {/* Right: Content Description */}
              <div className="w-full md:w-5/12 text-left relative z-10 order-3 md:pl-8">
                {/* Tactical Operation Card */}
                <div className="bg-white/[0.01] md:bg-transparent border border-white/5 md:border-none  md:-none rounded-xl p-6 md:p-0 transition-all duration-500 group-hover:bg-white/[0.03] md:group-hover:bg-transparent relative">

                  {/* Glitch element on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#a07cf6]/5 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none -mr-10 -mt-10"></div>

                  <div className="relative z-10">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Vertical Line */}
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5 z-0" />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-t from-[#a07cf6] via-[#d0bfff] to-transparent shadow-[0_0_20px_rgba(160,124,246,0.8)] z-10"
          />

          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-[35px] top-6 bottom-0 w-[2px] bg-white/5 z-0" />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="md:hidden absolute left-[35px] top-6 w-[2px] bg-gradient-to-t from-[#a07cf6] via-[#d0bfff] to-transparent shadow-[0_0_15px_rgba(160,124,246,0.8)] z-10"
          />

        </div>
      </div>
    </section>
  );
}
