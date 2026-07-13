"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface CertProps {
  title: string;
  issuer: string;
  image: string;
  color: string;
  date: string;
  link: string;
}

const CERTS: CertProps[] = [
  {
    title: "Security Operations Analyst (SC-200)",
    issuer: "Microsoft",
    image: "/certs/sc-200.svg",
    color: "rgba(0, 120, 212, 0.5)", // Microsoft Blue
    date: "2024",
    link: "https://drive.google.com/file/d/1ocxOhvFY4JXpu7txpW_GCyrDSq8n4IXq/view?usp=sharing",
  },
  {
    title: "Google Cloud Certified",
    issuer: "Google",
    image: "/certs/google-cloud.png",
    color: "rgba(234, 67, 53, 0.5)", // Google Red/Orange
    date: "2023",
    link: "https://www.credly.com/badges/581fe955-b65c-45ff-892d-e40e7c849ab0/public_url",
  },
  {
    title: "Blue Team Junior Analyst",
    issuer: "Security Blue Team",
    image: "/certs/bjta.jpg",
    color: "rgba(160, 124, 246, 0.5)", // Purple
    date: "2023",
    link: "https://drive.google.com/file/d/1EN01X-tIvNyBkfnj9NNy7HRHddYQg6Ix/view?usp=sharing",
  }
];

function TiltCard({ cert }: { cert: CertProps }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12.5deg", "-12.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12.5deg", "12.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative group w-full h-[400px] rounded-2xl bg-[#070708]/80 border border-white/5 p-6 flex flex-col justify-between cursor-pointer transition-colors duration-300 hover:border-white/20"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${cert.color} 0%, transparent 60%)`
        }}
      />

      {/* Image Container with 3D Pop */}
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="w-full h-48 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center p-6 relative overflow-hidden mb-6"
      >
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 4px"
          }}
        />
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Text Content */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs font-mono text-neutral-400 uppercase tracking-widest">
            {cert.issuer}
          </span>
          <span className="text-[10px] font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded-md">
            {cert.date}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
          {cert.title}
        </h3>
        <a 
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-neutral-500 mt-2 hover:text-neutral-300 transition-colors w-fit relative z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Credential</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="w-full bg-[#030303] py-24 md:py-32 relative overflow-hidden font-sans">
      {/* Background decorations matching the dark site */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,255,255,0.005),rgba(255,255,255,0.002),rgba(255,255,255,0.005))] bg-[size:100%_6px,10px_100%] pointer-events-none z-0 opacity-40" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-neutral-700"></div>
            <span className="text-[#a07cf6] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
              CREDENTIALS
            </span>
            <div className="w-12 h-[1px] bg-neutral-700"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight flex items-center justify-center gap-4 leading-none"
          >
            Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm md:text-base text-neutral-400 font-medium mt-6 max-w-xl text-center leading-relaxed"
          >
            Professional recognitions, security badges, and cloud achievements verified by industry leaders.
          </motion.p>
        </div>

        {/* The 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ perspective: "1000px" }}
            >
              <TiltCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
