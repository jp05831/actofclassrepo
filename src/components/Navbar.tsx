"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-primary font-bold text-lg lg:text-xl leading-tight">
              Act of Class
              <span className="block text-xs lg:text-sm font-medium text-gray-600">
                Moving & Storage
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-dark hover:text-primary transition font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition"
                      >
                        {s.icon} {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/areas-served" className="text-dark hover:text-primary transition font-medium">
              Areas Served
            </Link>
            <Link href="/about" className="text-dark hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary transition font-medium">
              Contact
            </Link>
            <Link
              href="/book-online"
              className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition shadow-sm"
            >
              Book Online
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <div>
              <p className="font-medium text-dark mb-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block text-sm text-gray-600 hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.icon} {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/areas-served" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              Areas Served
            </Link>
            <Link href="/about" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link
              href="/book-online"
              className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Book Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
