"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowUpRight, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  url: string;
  image: string;
  status: string;
  accentColor: string;
  glowClass: string;
  textClass: string;
  badgeStyle: string;
  techStack: string[];
  imageClass?: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    tag: "PROJ.SPLK-01",
    title: "Enterprise Splunk",
    subtitle: "SOC Deception & Threat Intelligence Lab",
    summary: "Architected an end-to-end SOC deception environment using Cowrie honeypot. Engineered automated Splunk SIEM logging, developed executive dashboards, and integrated VirusTotal API for real-time threat intelligence enrichment.",
    url: "https://github.com/seetharamdamarla/enterprise-splunk",
    image: "/dashboard.png",
    status: "ACTIVE LAB",
    accentColor: "emerald",
    glowClass: "hover:border-emerald-500/25 hover:shadow-[0_0_35px_rgba(16,185,129,0.03)]",
    textClass: "text-emerald-400 group-hover/project:text-emerald-300",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    techStack: ["Splunk SIEM", "Python", "Cowrie Honeypot", "Linux", "VirusTotal API"]
  },
  {
    id: "2",
    tag: "PROJ.WALL-02",
    title: "Personal Firewall",
    subtitle: "Kernel Packet Filter & WebGL Analytics",
    summary: "Built an end-to-end SOC pipeline to detect port scans and floods. Automated kernel-level IP blocking via nftables and developed a 3D WebGL dashboard for real-time geo-visualization.",
    url: "https://github.com/seetharamdamarla/personal-firewall",
    image: "/Screenshot 2026-06-04 at 6.40.34 PM.png",
    status: "DELEGATED LAB",
    accentColor: "rose",
    glowClass: "hover:border-rose-500/25 hover:shadow-[0_0_35px_rgba(244,63,94,0.03)]",
    textClass: "text-rose-400 group-hover/project:text-rose-300",
    badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    techStack: ["nftables", "WebGL", "React.js", "Python Scripting", "Docker"]
  },
  {
    id: "3",
    tag: "PROJ.SIEM-01",
    title: "SentinelSIEM",
    subtitle: "Security Operations & Ingestion Lab",
    summary: "Architected a full SOC monitoring lab processing 400+ live security alerts. Integrated FIM, IOC threat intelligence feeds, and custom Wazuh detection rules mapped to MITRE ATT&CK tactics.",
    url: "https://github.com/seetharamdamarla/SentinelSIEM",
    image: "/1.png",
    status: "ACTIVE LAB",
    accentColor: "purple",
    glowClass: "hover:border-purple-500/25 hover:shadow-[0_0_35px_rgba(160,124,246,0.03)]",
    textClass: "text-purple-400 group-hover/project:text-purple-300",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    techStack: ["Wazuh", "Splunk SIEM", "MITRE ATT&CK", "FIM", "Syslog-ng"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="w-full bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Dynamic scanlines for tactical interface feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,255,255,0.005),rgba(255,255,255,0.002),rgba(255,255,255,0.005))] bg-[size:100%_6px,10px_100%] pointer-events-none z-0 opacity-40" />

      {/* Star dots overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header Zone */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-purple-500/50" />
            <span className="text-xs font-mono tracking-[0.3em] text-purple-400 uppercase">// Secured Protocols</span>
            <span className="h-[1px] w-8 bg-purple-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none"
          >
            Featured Implementations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm md:text-base text-neutral-400 font-medium mt-6 max-w-xl text-center leading-relaxed"
          >
            Functional network architectures, threat-hunting deployments, and AI shields engineered to capture and analyze cyber telemetry.
          </motion.p>
        </div>

        {/* Projects asymmetric 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => {
            const isLive = project.status.includes("LIVE") || project.status.includes("ACTIVE");
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`group/project flex flex-col justify-between rounded-2xl bg-[#070708]/80 border border-white/5 p-5 md:p-6  relative overflow-hidden transition-all duration-500 ${project.glowClass}`}
              >
                {/* Tactical glowing scanline border top */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/project:via-white/30 transition-all duration-500" />

                <div>
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-neutral-500">
                      [ {project.tag} ]
                    </span>

                    {/* Status pulse badge */}
                    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono border ${project.badgeStyle}`}>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? "bg-green-400" : "bg-neutral-400"}`} />
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isLive ? "bg-green-500" : "bg-neutral-500"}`} />
                      </span>
                      {project.status}
                    </div>
                  </div>

                  {/* High-Tech Screen Viewport for screenshot */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/5 relative bg-neutral-950/70 group/viewport mt-3 mb-5">


                    {/* Project Screenshot */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-center transition-transform duration-700 relative z-0 ${project.imageClass || "object-cover"}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Title and descriptions */}
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-medium font-mono uppercase mt-1 tracking-wide">
                    {project.subtitle}
                  </p>

                  <p className="text-neutral-400 text-sm mt-3 leading-relaxed font-sans">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Pills & Actions */}
                <div>
                  {/* Tech stack capsules */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-[9px] sm:text-[10px] font-mono text-neutral-400 group-hover/project:border-white/10 group-hover/project:text-neutral-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Solid tactical horizontal separator line */}
                  <div className="w-full h-[1px] bg-white/5 my-5" />

                  {/* Footer access buttons */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 group/btn text-xs font-mono tracking-wider uppercase text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {project.url.includes("github.com") ? (
                      <>
                        <FaGithub className="w-3.5 h-3.5" />
                        ACCESS REPOSITORY
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" />
                        DEPLOYED PORTAL
                      </>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

