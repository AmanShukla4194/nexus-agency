"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-bold">
          Nexus
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/book-call"
          className="bg-brand-500 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
};