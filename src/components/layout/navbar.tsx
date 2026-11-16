"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// Main navigation links
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  // Controls the mobile navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu after selecting a page
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E5DB] bg-[#FAF8F3]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 lg:px-8"
        aria-label="Main navigation"
      >
        {/* BookNook Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="BookNook homepage"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#254C3B] text-white">
            <BookOpen size={21} strokeWidth={1.8} />
          </span>

          <span className="text-[25px] font-bold tracking-tight text-[#20291F]">
            BookNook
            <span className="text-[#C69A56]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#77796F] transition-colors hover:text-[#254C3B]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Authentication Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-[#254C3B] transition-colors hover:text-[#C69A56]"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-[#254C3B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#193A2C]"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </Button>
      </nav>

      {/* Mobile Navigation Panel */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E9E5DB] bg-[#FAF8F3] px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#20291F] transition-colors hover:bg-[#F1EEE5] hover:text-[#254C3B]"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-3 border-t border-[#E9E5DB]" />

            <Link
              href="/login"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#254C3B] hover:bg-[#F1EEE5]"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#254C3B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#193A2C]"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
