"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Target, Server, Terminal, LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
  glowColor: string;
  imageClass?: string;
}

interface Category {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  colorName: string;
  bgGlow: string;
  borderHover: string;
  badgeStyle: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    id: "threat-detection",
    tag: "SEC-OPS.01",
    title: "Threat Detection & SIEM",
    subtitle: "Security Operations & Analysis",
    icon: Shield,
    colorName: "purple",
    bgGlow: "from-purple-500/5 to-transparent",
    borderHover: "hover:border-purple-500/25 hover:shadow-[0_0_30px_rgba(160,124,246,0.03)]",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    skills: [
      { name: "Splunk", icon: "/icons/splunk.svg", glowColor: "rgba(104, 160, 99, 0.12)", imageClass: "w-12 h-12 md:w-14 md:h-14" },
      { name: "Wazuh", icon: "/icons/wazuh.svg", glowColor: "rgba(60, 153, 220, 0.12)" },
      { name: "Microsoft Sentinel", icon: "/icons/sentinel.svg", glowColor: "rgba(0, 137, 214, 0.12)" },
      { name: "Microsoft Defender", icon: "/icons/defender.svg", glowColor: "rgba(0, 120, 214, 0.12)" },
      { name: "Wireshark", icon: "/icons/wireshark.svg", glowColor: "rgba(24, 91, 163, 0.12)" },
      { name: "VirusTotal", icon: "/icons/virustotal.svg", glowColor: "rgba(57, 78, 255, 0.12)" },
      { name: "Suricata (IDS/IPS)", icon: "/icons/suricata.svg", glowColor: "rgba(239, 59, 45, 0.12)" },
    ]
  },
  {
    id: "offensive-security",
    tag: "RED-TEAM.02",
    title: "Offensive Security & VAPT",
    subtitle: "Ethical Hacking & Vulnerabilities",
    icon: Target,
    colorName: "rose",
    bgGlow: "from-rose-500/5 to-transparent",
    borderHover: "hover:border-rose-500/25 hover:shadow-[0_0_30px_rgba(244,63,94,0.03)]",
    badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    skills: [
      { name: "Burp Suite", icon: "/icons/burpsuite.svg", glowColor: "rgba(255, 102, 51, 0.12)" },
      { name: "Metasploit", icon: "/icons/metasploit.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
      { name: "Nmap", icon: "/icons/nmap.svg", glowColor: "rgba(34, 197, 94, 0.12)" },
      { name: "John The Ripper", icon: "/icons/john.svg", glowColor: "rgba(248, 113, 113, 0.12)" },
      { name: "Nessus", icon: "/icons/nessus.svg", glowColor: "rgba(96, 165, 250, 0.12)" },
      { name: "SQLmap", icon: "/icons/sqlmap.svg", glowColor: "rgba(56, 189, 248, 0.12)" },
      { name: "Hashcat", icon: "/icons/hashcat.svg", glowColor: "rgba(163, 230, 53, 0.12)" },
      { name: "Gobuster", icon: "/icons/gobuster.svg", glowColor: "rgba(167, 139, 250, 0.12)" },
      { name: "Hydra", icon: "/icons/hydra.svg", glowColor: "rgba(251, 191, 36, 0.12)" },
      { name: "Aircrack", icon: "/icons/aircrack.svg", glowColor: "rgba(52, 211, 153, 0.12)" },
    ]
  },
  {
    id: "infrastructure-defense",
    tag: "INFRA-DEF.03",
    title: "Secure Infrastructure",
    subtitle: "System Hardening & Networking",
    icon: Server,
    colorName: "cyan",
    bgGlow: "from-cyan-500/5 to-transparent",
    borderHover: "hover:border-cyan-500/25 hover:shadow-[0_0_30px_rgba(56,189,248,0.03)]",
    badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    skills: [
      { name: "Linux Systems", icon: "/icons/linux.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
      { name: "Windows Systems", icon: "/icons/windows.svg", glowColor: "rgba(0, 120, 214, 0.12)" },
      { name: "Cloud WAF", icon: "/icons/cloudflare.svg", glowColor: "rgba(243, 128, 32, 0.12)" },
      { name: "OWASP Top 10", icon: "/icons/owasp.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
      { 
        name: "MITRE ATT&CK", 
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EF4444' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='6'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Cline x1='12' y1='2' x2='12' y2='6'/%3E%3Cline x1='12' y1='18' x2='12' y2='22'/%3E%3Cline x1='2' y1='12' x2='6' y2='12'/%3E%3Cline x1='18' y1='12' x2='22' y2='12'/%3E%3C/svg%3E", 
        glowColor: "rgba(239, 68, 68, 0.12)" 
      },
      { name: "Git Control", icon: "/icons/git.svg", glowColor: "rgba(240, 80, 51, 0.12)" },
    ]
  },
  {
    id: "development-automation",
    tag: "AUTO-DEV.04",
    title: "Security Automation",
    subtitle: "Custom Scripting & Security Tooling",
    icon: Terminal,
    colorName: "emerald",
    bgGlow: "from-emerald-500/5 to-transparent",
    borderHover: "hover:border-emerald-500/25 hover:shadow-[0_0_30px_rgba(16,185,129,0.03)]",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "Python", icon: "/icons/python.svg", glowColor: "rgba(55, 115, 165, 0.12)" },
      { name: "Bash Shell", icon: "/icons/bash.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
      { name: "PowerShell", icon: "/icons/powershell.svg", glowColor: "rgba(83, 145, 241, 0.12)" },
      { name: "SQL DB", icon: "/icons/mysql.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
      { name: "Flask Web", icon: "/icons/flask.svg", glowColor: "rgba(255, 255, 255, 0.08)" },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.06
    }
  }
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

export function Skills() {
  return (
    <section id="skills" className="w-full bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background Star Dots */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Cybernetic Grid Overlay for Tech Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

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
            <span className="text-xs font-mono tracking-[0.3em] text-purple-400 uppercase">// Technical Arsenal</span>
            <span className="h-[1px] w-8 bg-purple-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm md:text-base text-neutral-400 font-medium mt-6 max-w-xl text-center leading-relaxed"
          >
            Categorized toolkit mapped across security operations, ethical hacking, defense system fortification, and code-based security automation.
          </motion.p>
        </div>

        {/* Categories Grid (2x2 Layout on Desktop, Staggered Stacking on Mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {CATEGORIES.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                className={`group flex flex-col justify-start rounded-2xl bg-[#070708]/80 border border-white/5 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${category.borderHover}`}
              >
                {/* Custom Gradient Background Glow on Hover */}
                <div className={`absolute -inset-px bg-gradient-to-br ${category.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl`} />

                {/* Card Top Information */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-neutral-500">
                      [ {category.tag} ]
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${category.badgeStyle}`}>
                      {category.skills.length} MODULES
                    </span>
                  </div>

                  {/* Header Title & Sub */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-neutral-300 group-hover:text-white group-hover:border-white/10 transition-all duration-300`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-medium mt-1 font-mono tracking-wide uppercase">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual Skill Icons Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ y: -3 }}
                      className="group/skill flex flex-col items-center justify-center py-4 px-1.5 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300 min-h-[85px] sm:min-h-[92px] relative overflow-hidden"
                    >
                      {/* Subtle backglow behind icon inside the skill cell */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.glowColor} 0%, transparent 70%)`
                        }}
                      />

                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className={`${skill.imageClass || "w-7 h-7 md:w-8 md:h-8"} object-contain transition-transform duration-500 group-hover/skill:scale-110 relative z-10`}
                        loading="lazy"
                      />

                      <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-neutral-400 group-hover/skill:text-white text-center mt-3 transition-colors duration-300 select-none relative z-10 leading-tight w-full break-words">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

