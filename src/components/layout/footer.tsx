import Link from "next/link";
import { BookOpen, ArrowUpRight, Mail, MapPin } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "All Books", href: "/books" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  account: [
    { label: "Sign In", href: "/login" },
    { label: "Create Account", href: "/register" },
    { label: "My Books", href: "/my-books" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#203D30] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand Information */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10">
              <BookOpen size={23} />
            </span>

            <span className="text-2xl font-bold tracking-tight">
              BookNook
              <span className="text-[#C69A56]">.</span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#CBD5CE]">
            Discover wonderful stories, explore new ideas, and make reading a
            part of your everyday life. Your next favorite book is waiting for
            you.
          </p>

          <Link
            href="/books"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D7B477] transition-colors hover:text-white"
          >
            Explore our collection
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">Explore</h3>

          <ul className="mt-6 space-y-4">
            {footerLinks.explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#CBD5CE] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">Your Account</h3>

          <ul className="mt-6 space-y-4">
            {footerLinks.account.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#CBD5CE] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap gap-5 text-xs text-[#CBD5CE]">
            <span className="flex items-center gap-2">
              <Mail size={15} />
              Contact information coming soon
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={15} />
              Digital Library
            </span>
          </div>

          {/* Copyright information */}
          <p className="text-xs text-[#CBD5CE]">
            © 2026 BookNook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
