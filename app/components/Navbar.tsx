"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-100 flex items-center px-8 py-4">
      {/* Left Section - Logo */}
      <div className="flex flex-1 items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logohero.svg"
            alt="COAN Logo"
            width={140}
            height={36}
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation - Perfectly Centered */}
      <div className="desktop-nav absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 text-[0.95rem] tracking-wide text-white/90 transition-colors duration-200 hover:text-[#FF8000]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Section - Contact Link & Mobile Button */}
      <div className="flex flex-1 items-center justify-end gap-4">
        {/* Contact Link - Desktop */}
        <Link
          href="/contact"
          className="desktop-nav py-2 text-[0.95rem] tracking-wide text-white/90 transition-colors duration-200 hover:text-[#FF8000]"
        >
          Contact
        </Link>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn hidden cursor-pointer border-none bg-transparent p-2 text-2xl text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav absolute top-full right-0 left-0 flex flex-col gap-2 bg-black/95 p-4 backdrop-blur-xl">
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
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="rounded px-4 py-3 text-base text-white/90 no-underline transition-all duration-200 hover:bg-white/10"
          >
            Contact
          </Link>
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
