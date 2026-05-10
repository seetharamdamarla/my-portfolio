import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Sep 2025",
      content: (
        <div>
          <p className="mb-2 text-neutral-200 text-lg md:text-2xl font-bold tracking-tight">
            CodeAlpha
          </p>
          <p className="mb-8 text-[#a07cf6] text-sm md:text-base font-mono uppercase tracking-widest">
            Cybersecurity Intern — Web Application Security
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed">
              <span className="text-[#a07cf6] font-bold mt-1">▹</span> 
              <p>Executed OWASP Top 10 assessments on live web apps, uncovering <strong className="text-white font-medium">15+ critical vulnerabilities</strong> (SQLi, XSS, broken auth).</p>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed">
              <span className="text-[#a07cf6] font-bold mt-1">▹</span> 
              <p>Deployed firewall ACL rules achieving a <strong className="text-white font-medium">30% reduction</strong> in exploitable attack surface.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025",
      content: (
        <div>
          <p className="mb-2 text-neutral-200 text-lg md:text-2xl font-bold tracking-tight">
            Elevate Labs
          </p>
          <p className="mb-8 text-[#a07cf6] text-sm md:text-base font-mono uppercase tracking-widest">
            Cybersecurity Intern — Network Security & VAPT
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed">
              <span className="text-[#a07cf6] font-bold mt-1">▹</span> 
              <p>Detected and documented <strong className="text-white font-medium">20+ critical network vulnerabilities</strong> through deep-packet inspection with Wireshark, earning <strong className="text-white font-medium">"Best Performer"</strong> recognition.</p>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-neutral-400 leading-relaxed">
              <span className="text-[#a07cf6] font-bold mt-1">▹</span> 
              <p>Delivered structured CVSS-scored remediation reports that enabled developers to patch critical exploits within <strong className="text-white font-medium">48 hours</strong>, reducing MTTR significantly.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
