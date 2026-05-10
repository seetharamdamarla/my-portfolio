"use client";

import React from "react";

const SKILLS = [
  // Security Tools
  { name: "Splunk SIEM", icon: "https://cdn.simpleicons.org/splunk/68A063" },
  { name: "Wazuh", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233C99DC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3Cpath d='M9 12l2 2 4-4'/%3E%3C/svg%3E" },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark" },
  { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite/FF6633" },
  { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit" },
  { name: "Nmap", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'/%3E%3Cpath d='M2 12h20'/%3E%3C/svg%3E" },

  // Frameworks & Methodologies
  { name: "MITRE ATT&CK", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EF4444' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='6'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Cline x1='12' y1='2' x2='12' y2='6'/%3E%3Cline x1='12' y1='18' x2='12' y2='22'/%3E%3Cline x1='2' y1='12' x2='6' y2='12'/%3E%3Cline x1='18' y1='12' x2='22' y2='12'/%3E%3C/svg%3E" },
  { name: "OWASP Top 10", icon: "https://cdn.simpleicons.org/owasp/white" },
  { name: "VAPT", icon: "https://cdn.simpleicons.org/kalilinux/white" },
  { name: "Incident Response", icon: "https://cdn.simpleicons.org/opsgenie/EF4444" },
  { name: "IOC Analysis", icon: "https://cdn.simpleicons.org/virustotal/394EFF" },

  // Languages
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/white" },
  { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/white" },

  // Platforms
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Cloudflare WAF", icon: "https://cdn.simpleicons.org/cloudflare" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
  { name: "Scapy", icon: "https://cdn.simpleicons.org/python/22C55E" },
  { name: "Wireless Security", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20h.01'/%3E%3Cpath d='M2 8.82a15 15 0 0 1 20 0'/%3E%3Cpath d='M5 12.86a10 10 0 0 1 14 0'/%3E%3Cpath d='M8.5 16.43a5 5 0 0 1 7 0'/%3E%3C/svg%3E" },
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Subtle star-like dots */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            <span className="text-4xl md:text-5xl lg:text-6xl">S</span>kills & Tools
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-5 md:gap-6 justify-items-center">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className="group flex items-center justify-center w-full max-w-[80px] aspect-square rounded-xl bg-[#0c0c0c] border border-neutral-800/50 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
