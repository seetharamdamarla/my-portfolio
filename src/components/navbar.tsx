import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 lg:px-16 py-6 bg-black/70 backdrop-blur-lg border-b border-white/5 pointer-events-auto">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-white font-bold text-xl md:text-2xl tracking-tight">
          SeethaRam
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-12 items-center justify-end flex-1">
        <Link href="#about" className="text-neutral-300 hover:text-white text-sm md:text-base font-semibold tracking-[0.15em] transition-colors uppercase">
          About
        </Link>
        <Link href="#projects" className="text-neutral-300 hover:text-white text-sm md:text-base font-semibold tracking-[0.15em] transition-colors uppercase">
          Projects
        </Link>
        <Link href="#contact" className="text-neutral-300 hover:text-white text-sm md:text-base font-semibold tracking-[0.15em] transition-colors uppercase">
          Contact
        </Link>
      </div>
    </nav>
  );
}
