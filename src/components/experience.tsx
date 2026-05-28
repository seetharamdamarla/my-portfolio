import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Terminal } from "lucide-react";

export function Experience() {
  const data = [
    {
      title: "Sep 2025",
      content: (
        <div className="relative group w-full mb-8">
          {/* Glassmorphic Operation Card */}
          <div className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:border-[#a07cf6]/50 group-hover:bg-black/60 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_8px_30px_rgba(160,124,246,0.15)] overflow-hidden">
            
            {/* Background Glitch Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

            {/* Header: Company & Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
              <h4 className="text-neutral-100 text-2xl md:text-3xl font-bold tracking-tight">
                CodeAlpha
              </h4>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-mono tracking-widest self-start md:self-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                MISSION_COMPLETE
              </div>
            </div>

            {/* Role */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs md:text-sm lg:text-base font-mono uppercase tracking-widest relative z-10">
              <Terminal size={16} className="shrink-0 text-[#a07cf6]" />
              <span className="text-neutral-300">Cybersecurity Intern — Web App Security</span>
            </div>

            {/* Details (Terminal output style) */}
            <div className="space-y-5 font-mono relative z-10">
              <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
                <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span> 
                <p>Executed OWASP Top 10 assessments on live web apps, uncovering <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">15+ critical vulnerabilities</strong> (SQLi, XSS, broken auth).</p>
              </div>
              <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
                <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span> 
                <p>Deployed firewall ACL rules achieving a <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">30% reduction</strong> in exploitable attack surface.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025",
      content: (
        <div className="relative group w-full mb-8">
          {/* Glassmorphic Operation Card */}
          <div className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:border-[#a07cf6]/50 group-hover:bg-black/60 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_8px_30px_rgba(160,124,246,0.15)] overflow-hidden">
            
            {/* Background Glitch Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

            {/* Header: Company & Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
              <h4 className="text-neutral-100 text-2xl md:text-3xl font-bold tracking-tight">
                Elevate Labs
              </h4>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-mono tracking-widest self-start md:self-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                MISSION_COMPLETE
              </div>
            </div>

            {/* Role */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs md:text-sm lg:text-base font-mono uppercase tracking-widest relative z-10">
              <Terminal size={16} className="shrink-0 text-[#a07cf6]" />
              <span className="text-neutral-300">Cybersecurity Intern — Network Security & VAPT</span>
            </div>

            {/* Details (Terminal output style) */}
            <div className="space-y-5 font-mono relative z-10">
              <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
                <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span> 
                <p>Detected and documented <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">20+ critical network vulnerabilities</strong> through deep-packet inspection with Wireshark, earning <strong className="text-white font-medium text-[#a07cf6]">"Best Performer"</strong> recognition.</p>
              </div>
              <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed group/item">
                <span className="text-neutral-500 font-bold mt-0.5 select-none text-lg leading-none transition-transform group-hover/item:translate-x-1">{'>'}</span> 
                <p>Delivered structured CVSS-scored remediation reports that enabled developers to patch critical exploits within <strong className="text-white font-medium bg-white/10 px-1.5 py-0.5 rounded">48 hours</strong>, reducing MTTR significantly.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </section>
  );
}
