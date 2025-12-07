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
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logohero.svg"
          alt="COAN Logo"
          width={140}
          height={36}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "color 0.2s ease",
              padding: "0.5rem 0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8000")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1.5rem",
          cursor: "pointer",
          padding: "0.5rem",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(12px)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          className="mobile-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "0.75rem 1rem",
                borderRadius: "4px",
                transition: "background 0.2s ease",
              }}
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
