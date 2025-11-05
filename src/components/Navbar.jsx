import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-semibold">a</div>
          <span className="text-2xl font-semibold tracking-tight [font-family:'Comfortaa',Inter,_sans-serif]">
            appoint'd
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
          <a href="#doctors" className="hover:text-black transition-colors">Find Doctors</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-black hover:bg-black/5">
            Login
          </button>
          <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
