"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-800/60 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur-sm z-50">
      {/* Left nav links */}
      <div className="hidden md:flex gap-6 text-xs font-mono-custom uppercase tracking-wider text-gray-500">
        <Link
          href="#features"
          className="hover:text-white transition-colors"
        >
          Ecosystem
        </Link>
        <Link
          href="#comparison"
          className="hover:text-white transition-colors"
        >
          How it Works
        </Link>
        <Link
          href="/whitepaper"
          className="hover:text-white transition-colors"
        >
          Whitepaper
        </Link>
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-mono-custom font-bold tracking-tight">
            x0
          </span>
        </Link>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="https://docs.x0protocol.dev"
          className="px-4 py-1.5 border border-white/30 text-xs font-mono-custom uppercase hover:bg-white hover:text-black transition-colors hidden sm:flex items-center gap-2"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Docs
        </Link>
        <Link
          href="https://github.com/x0-protocol"
          className="px-4 py-1.5 bg-white text-black text-xs font-mono-custom uppercase hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          GitHub
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
          <div className="flex flex-col p-6 gap-4 text-sm font-mono-custom uppercase">
            <Link href="#features" className="hover:text-green-400">
              Ecosystem
            </Link>
            <Link href="#comparison" className="hover:text-green-400">
              How it Works
            </Link>
            <Link href="/whitepaper" className="hover:text-green-400">
              Whitepaper
            </Link>
            <Link href="https://docs.x0protocol.dev" className="hover:text-green-400">
              Docs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
