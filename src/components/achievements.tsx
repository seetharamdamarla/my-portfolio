"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, Medal, Flag, LucideIcon } from "lucide-react";

interface Achievement {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  status: string;
  accentColor: string;
  glowClass: string;
  badgeStyle: string;
  icon: LucideIcon;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "zenith",
    tag: "COMP.ZENITH-25",
    title: "Zenith Hackathon — 1st Place Winner",
    subtitle: "MLRIT CHAMPION / MEDTECH DOMAIN",
    summary: "Ranked #1 among 38 teams nationwide at MLRIT for developing \"SynapStore,\" a secure healthcare platform with RBAC, field-level encryption, and Cloudflare WAF integration.",
    image: "/zenith.jpg",
    status: "01 / CHAMPION",
    accentColor: "purple",
    glowClass: "hover:border-purple-500/25 hover:shadow-[0_0_35px_rgba(160,124,246,0.03)]",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Trophy
  },
  {
    id: "saber",
    tag: "COMP.SABER-25",
    title: "SABER Project — 3rd Prize Winner",
    subtitle: "NATIONWIDE / PRIVACY INNOVATION",
    summary: "Developed an intent-based job matching platform with \"Blind Evaluation\" to eliminate hiring bias. Secured 3rd Prize among nationwide competitors for privacy-first architecture.",
    image: "/saber.jpg",
    status: "03 / PODIUM",
    accentColor: "cyan",
    glowClass: "hover:border-cyan-500/25 hover:shadow-[0_0_35px_rgba(56,189,248,0.03)]",
    badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: Medal
  },
  {
    id: "hackers-gambit",
    tag: "CTF.GAMBIT-25",
    title: "Hacker's Gambit — Top 100",
    subtitle: "OWASP INTERNATIONAL CTF / CRACKING",
    summary: "Participated in the prestigious OWASP International CTF challenge, finishing in the top 100 among 400+ participants by solving complex security puzzles across multiple domains.",
    image: "/hackers-gambit.png",
    status: "TOP 100 / CTF",
    accentColor: "rose",
    glowClass: "hover:border-rose-500/25 hover:shadow-[0_0_35px_rgba(244,63,94,0.03)]",
    badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    icon: Flag
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

export function Achievements() {
  return (
    <section id="achievements" className="w-full bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Cyber Grid overlay for high-tech viber */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]  pointer-events-none z-0" />

      {/* Subtle star dots */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)",
          backgroundSize: "50px 50px",
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
            <span className="text-xs font-mono tracking-[0.3em] text-purple-400 uppercase">// Recognized Standings</span>
            <span className="h-[1px] w-8 bg-purple-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none"
          >
            Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm md:text-base text-neutral-400 font-medium mt-6 max-w-xl text-center leading-relaxed"
          >
             podial standings and certificates secured at nationwide hackathons, innovation summits, and elite CTF challenges.
          </motion.p>
        </div>

        {/* Accolades 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {ACHIEVEMENTS.map((achievement) => {
            const AccoladeIcon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                className={`group/achievement flex flex-col justify-between rounded-2xl bg-[#070708]/80 border border-white/5 p-6  relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${achievement.glowClass}`}
              >
                {/* Micro-glow bar at the top */}
                <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/achievement:via-white/30 transition-all duration-500`} />

                <div>
                  {/* Card Metadata Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-neutral-500">
                      [ {achievement.tag} ]
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono border ${achievement.badgeStyle}`}>
                      {achievement.status}
                    </span>
                  </div>

                  {/* Accolade Standing Information Block */}
                  <div className="flex items-start gap-4 mt-6">
                    <div className="p-3 rounded-xl bg-neutral-900 border border-white/5 text-neutral-300 group-hover/achievement:text-white transition-all duration-300">
                      <AccoladeIcon className={`w-6 h-6 ${achievement.accentColor === "purple" ? "text-purple-400" : achievement.accentColor === "cyan" ? "text-cyan-400" : "text-rose-400"}`} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-neutral-500 block">[ DIVISION STANDING ]</span>
                      <span className="text-xs font-bold text-white font-mono uppercase tracking-wider mt-0.5 block">{achievement.subtitle}</span>
                    </div>
                  </div>

                  {/* Title and Summary */}
                  <h3 className="text-xl font-bold text-white tracking-tight mt-6 leading-snug group-hover/achievement:text-neutral-200 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-neutral-400 text-sm mt-3 leading-relaxed font-sans">
                    {achievement.summary}
                  </p>
                </div>

                {/* Viewport for Certificate/Graphic */}
                <div>
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/5 relative bg-neutral-950/70 group/viewport mt-6">
                    {/* Viewport scanlines overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(255,255,255,0.005),rgba(255,255,255,0.01))] bg-[size:100%_4px,6px_100%] pointer-events-none z-20 opacity-30 group-hover/viewport:opacity-40 transition-opacity" />

                    {/* Certificate Graphic */}
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/achievement:scale-103 group-hover/achievement:rotate-[0.5deg] relative z-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

