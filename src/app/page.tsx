"use client";

import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { LoadingButton } from "@/components/ui/loading-button";
import { LandingHero } from "@/components/landing-hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Achievements } from "@/components/achievements";
import { Footer } from "@/components/footer";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const customWords = ["SEETHARAM DAMARLA"];
  const [showLoader, setShowLoader] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  }, []);

  useEffect(() => {
    // Show the loader after 2.5 seconds
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Once loaded, fade out the intro completely and show the hero
    if (isLoaded) {
      setTimeout(() => setShowHero(true), 1000);
    }
  }, [isLoaded]);

  return (
    <main className="bg-black min-h-screen">
      {/* Intro Sequence Layer */}
      {!showHero && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Particles */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? "opacity-0" : "opacity-100"}`}>
            <ParticleTextEffect words={customWords} />
          </div>

          {/* Loading Button */}
          <div
            className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition-all duration-1000 
              ${showLoader && !isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`
            }
          >
            {showLoader && (
              <LoadingButton
                onComplete={handleLoadingComplete}
              />
            )}
          </div>
        </div>
      )}

      {/* Main Landing Hero Layer */}
      <div className={`w-full transition-opacity duration-2000 ${showHero ? "opacity-100" : "opacity-0 h-screen overflow-hidden pointer-events-none"}`}>
        {showHero && (
          <>
            <LandingHero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Achievements />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
