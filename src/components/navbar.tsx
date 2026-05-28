"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 pt-6 pb-4 transition-all duration-500 pointer-events-auto`}
      >
        <div 
          className={`flex items-center justify-between w-full max-w-6xl px-6 py-4 transition-all duration-500 rounded-2xl md:rounded-full ${
            isScrolled 
              ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-1 group">
            <span className="text-white font-bold text-xl md:text-2xl tracking-tighter transition-colors group-hover:text-neutral-200">
              SeethaRam
            </span>
            <span className="text-[#a07cf6] text-xl md:text-2xl font-bold animate-pulse">
              .
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative px-3 py-2 text-xs font-semibold tracking-[0.15em] text-neutral-400 uppercase transition-colors hover:text-white group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a07cf6] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="relative z-50 p-2 text-neutral-400 hover:text-white transition-colors lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-neutral-400 uppercase transition-colors hover:text-[#a07cf6]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
