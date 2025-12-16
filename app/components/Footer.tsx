"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative h-[80vh] w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+80vh)]">
        <div className="sticky top-[calc(100vh-80vh)] h-[80vh]">
          <div className="bg-tertiary flex h-full w-full flex-col justify-between px-4 py-16 text-white md:px-8">
            {/* Top Section */}
            <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
              {/* Company Info */}
              <div className="flex flex-col gap-6 lg:max-w-md">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logovintage.svg"
                    alt="COAN Logo"
                    width={90}
                    height={24}
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="font-pp-neue-montreal text-lg leading-relaxed text-white/80">
                  A leading construction company offering integrated solutions
                  and related services.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/test"
                    className="font-pp-neue-montreal text-xs text-white/40 transition-colors hover:text-white/60"
                  >
                    Test
                  </Link>
                  <Link
                    href="/testtextreveal"
                    className="font-pp-neue-montreal text-xs text-white/40 transition-colors hover:text-white/60"
                  >
                    Text Reveal
                  </Link>
                  <Link
                    href="/test-shine"
                    className="font-pp-neue-montreal text-xs text-white/40 transition-colors hover:text-white/60"
                  >
                    Border Shine
                  </Link>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-2 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/company"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a
                        href="mailto:info@coanwa.com"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        info@coanwa.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+2348037869334"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        +234 803 786 9334
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+2347033668523"
                        className="hover:text-secondary text-white/80 transition-colors"
                      >
                        +234 703 366 8523
                      </a>
                    </li>
                    <li className="text-white/80">
                      <p>22 Durban Street, Wuse 2, Abuja. Nigeria.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} COAN West Africa Limited. All
                rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary text-white/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary text-white/60 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary text-white/60 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
