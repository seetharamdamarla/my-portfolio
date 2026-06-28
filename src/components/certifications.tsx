import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="w-full bg-black py-24 md:py-32 relative overflow-hidden font-sans">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,255,255,0.005),rgba(255,255,255,0.002),rgba(255,255,255,0.005))] bg-[size:100%_6px,10px_100%] pointer-events-none z-0 opacity-40" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-neutral-700"></div>
            <span className="text-[#a07cf6] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
              CREDENTIALS
            </span>
            <div className="w-12 h-[1px] bg-neutral-700"></div>
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Certificate Card */}
          <div className="group relative w-full rounded-2xl bg-[#070708]/80 border border-white/5 backdrop-blur-xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#a07cf6]/50 hover:bg-black/60 shadow-lg hover:shadow-[0_8px_30px_rgba(160,124,246,0.15)] md:col-span-2">
            
            {/* Background Glitch */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a07cf6]/10 rounded-full blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none -mr-20 -mt-20"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              
              {/* Image Container */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-white/10 bg-black/50 group-hover:border-[#a07cf6]/30 transition-colors relative shadow-2xl">
                {/* Scanline overlay over image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-20 group-hover:opacity-0 transition-opacity" />
                <img 
                  src="/Blue Team Junior Analyst_page-0001.jpg" 
                  alt="Blue Team Junior Analyst Certification" 
                  className="w-full h-auto object-cover relative z-0 transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#a07cf6] w-6 h-6" />
                    <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      VERIFIED
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 group-hover:text-[#a07cf6] transition-colors duration-300">
                  Blue Team Junior Analyst
                </h3>
                
                <p className="text-neutral-400 font-mono text-sm uppercase tracking-wider mb-6">
                  Defensive Security Credential
                </p>
                
                <div className="w-full h-[1px] bg-white/5 mb-6" />
                
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-mono">
                  <span className="text-neutral-500 font-bold select-none text-lg leading-none mr-2">{'>'}</span> 
                  Proven practical ability across 6 core defensive security domains, completing hands-on assessments in digital forensics, threat hunting, OSINT, and network analysis.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["OSINT", "Digital Forensics", "Vuln Management", "DarkWeb Ops", "Threat Hunting", "Network Analysis"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-neutral-900 border border-white/5 text-[10px] md:text-xs font-mono text-neutral-400 group-hover:border-white/10 group-hover:text-neutral-300 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
