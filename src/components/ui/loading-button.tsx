"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps {
  onComplete?: () => void;
  className?: string;
}

export const LoadingButton = ({ onComplete, className }: LoadingButtonProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds to load
    const intervalTime = 40; // Update every 40ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Easing out curve for a more natural loading feel
      const progressRatio = currentStep / steps;
      const easeOutProgress = 1 - Math.pow(1 - progressRatio, 3); 
      
      const newProgress = Math.min(Math.floor(easeOutProgress * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        onComplete?.();
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={cn("relative group cursor-default", className)}>
      {/* Background glow effect similar to moncy.dev */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 transition duration-1000 group-hover:opacity-70"></div>
      
      {/* Pill container */}
      <div className="relative flex items-center justify-between px-8 py-4 bg-[#0a0a0a] rounded-full border border-white/10 min-w-[260px] shadow-2xl">
        <span className="text-white text-xs tracking-[0.2em] font-medium uppercase">Loading</span>
        
        <div className="flex items-center gap-3">
          <span className="text-white/90 text-sm font-mono tracking-wider w-10 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
