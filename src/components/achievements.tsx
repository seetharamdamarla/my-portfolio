"use client";

import React from "react";
import { Blog7 } from "@/components/blocks/blog7";

const achievementData = {
  tagline: "",
  heading: "Achievements",
  description: "",
  buttonText: "",
  buttonUrl: "https://www.linkedin.com/in/seetharamdamarla",
  posts: [
    {
      id: "zenith",
      title: "Zenith Hackathon — 1st Place Winner",
      summary:
        "Ranked #1 among 38 teams nationwide at MLRIT for developing \"SynapStore,\" a secure healthcare platform with RBAC, field-level encryption, and Cloudflare WAF integration.",
      label: "MedTech Domain",
      author: "Seetharam Damarla",
      published: "2025",
      url: "#",
      image: "/zenith.jpg",
    },
    {
      id: "saber",
      title: "SABER Project — 3rd Prize Winner",
      summary:
        "Developed an intent-based job matching platform with \"Blind Evaluation\" to eliminate hiring bias. Secured 3rd Prize among nationwide competitors for privacy-first design.",
      label: "Innovation",
      author: "Seetharam Damarla",
      published: "2025",
      url: "#",
      image: "/saber.jpg",
    },
    {
      id: "hackers-gambit",
      title: "Hacker's Gambit 2025 — Top 100",
      summary:
        "Participated in the prestigious OWASP International CTF challenge, finishing in the top 100 among 400+ participants by solving complex security puzzles across multiple domains.",
      label: "OWASP CTF",
      author: "Seetharam Damarla",
      published: "2025",
      url: "#",
      image: "/hackers-gambit.png",
    },
  ],
};

export function Achievements() {
  return (
    <section id="achievements" className="w-full bg-black text-white">
      <Blog7 {...achievementData} />
    </section>
  );
}
