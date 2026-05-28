"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-neutral-700"></div>
          <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
            OPERATION HISTORY
          </span>
        </div>
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          EXPERIENCE<span className="text-neutral-600">_</span>LOG
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
              {/* Cyber Node Beacon */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-[#a07cf6]/30 shadow-[0_0_15px_rgba(160,124,246,0.2)]">
                <div className="h-4 w-4 rounded-full bg-black border border-[#a07cf6] flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#a07cf6] animate-pulse" />
                </div>
              </div>
              
              {/* Desktop Sticky Date / Timestamp */}
              <div className="hidden md:flex flex-col md:pl-20 mt-[-10px]">
                <div className="px-5 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-lg inline-block relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-neutral-200 tracking-widest uppercase">
                    {item.title}
                  </h3>
                  <div className="text-neutral-500 text-[10px] font-mono mt-2 flex items-center gap-2 tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse"></span>
                    LOG_ENTRY_VALIDATED
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Sticky Date */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-mono font-bold text-neutral-300 tracking-widest uppercase">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        
        {/* Futuristic Laser Pipeline */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-white/5"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#a07cf6] via-[#d0bfff] to-transparent from-[0%] via-[10%] shadow-[0_0_10px_rgba(160,124,246,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};

