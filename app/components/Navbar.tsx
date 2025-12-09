"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test", label: "Test" },
  { href: "/testtextreveal", label: "Text Reveal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logohero.svg"
          alt="COAN Logo"
          width={140}
          height={36}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="desktop-nav flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 text-[0.95rem] font-medium tracking-wide text-white/90 transition-colors duration-200 hover:text-[#FF8000]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-btn hidden cursor-pointer border-none bg-transparent p-2 text-2xl text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav absolute left-0 right-0 top-full flex flex-col gap-2 bg-black/95 p-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded px-4 py-3 text-base text-white/90 no-underline transition-all duration-200 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
