'use client'

import { useRef } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Navbar } from "@/components/navbar";
import { useScroll, useTransform, motion } from "framer-motion";

export function LandingHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Moving by vw instead of % keeps it relative to the screen, preventing it from clipping off the edge.
  // Shifted from -22vw to -26vw to move it slightly more to the left as requested
  const robotX = useTransform(scrollYProgress, [0, 1], ["0vw", "-26vw"]);
  const robotScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Rotates the entire 3D container on the Y-axis so it physically faces the text
  const robotRotateY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <div ref={containerRef} className="w-full relative bg-black font-sans pb-[10vh]">
      <Navbar />

      {/* STICKY BACKGROUND LAYER: Robot & Spotlight */}
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none z-0 perspective-1000">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 opacity-40"
          fill="white"
        />
        
        {/* Center 3D Robot / Spline Scene */}
        <motion.div 
          style={{ x: robotX, scale: robotScale, rotateY: robotRotateY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          {/* Constraining max-width so it doesn't artificially push the bounds too far */}
          <div className="w-full max-w-3xl lg:max-w-5xl h-[85vh] lg:h-[90vh] relative translate-y-16">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLLING CONTENT LAYER: Text Sections */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none">
        
        {/* 1. Hero Section */}
        <div className="w-full h-screen flex flex-col md:flex-row justify-between items-center px-6 lg:px-24 -mt-[100vh] pb-20 md:pb-0 pt-24 md:pt-0">
          
          {/* Left content: Greeting & Name */}
          <div className="flex flex-col justify-center pointer-events-auto max-w-[320px] w-full mt-12 md:mt-0">
            <p className="text-purple-400/90 text-lg font-medium tracking-wide mb-2">
              Hello! I'm
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">SEETHARAM</span><br/>
              <span className="text-neutral-400">DAMARLA</span>
            </h1>
          </div>

          {/* Right content: Roles */}
          <div className="flex flex-col justify-center items-start text-left pointer-events-auto max-w-[320px] w-full mt-auto md:mt-0 mb-12 md:mb-0">
            <p className="text-purple-400/90 text-lg font-medium tracking-wide mb-2">
              A Dedicated
            </p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.05] flex flex-col items-start tracking-tight">
              <span className="text-[#a07cf6]/20 [-webkit-text-stroke:1.5px_#a07cf6]">
                CYBERSECURITY
              </span>
              <span className="text-white">
                ENGINEER
              </span>
            </h1>
            <p className="mt-4 text-neutral-400 font-mono text-xs tracking-[0.2em] uppercase">
              &lt; SOC Analyst /&gt;
            </p>
          </div>
        </div>

        {/* 2. About Section */}
        <div id="about" className="w-full h-screen flex items-center justify-end px-6 lg:px-16 xl:px-24 pt-24 md:pt-0">
          <div className="w-full md:w-[50%] lg:w-[45%] max-w-2xl pointer-events-auto text-left">
            <h2 className="text-[#a07cf6] text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-8">
              ABOUT ME
            </h2>
            <p className="text-neutral-200 text-xl md:text-2xl lg:text-3xl xl:text-[2rem] leading-[1.5] font-semibold tracking-tight">
              I'm a cybersecurity engineer & SOC analyst with a passion for blending offensive technical expertise with robust defensive architecture. Driven by curiosity, I always try to explore and secure new systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
