"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="hidden lg:flex items-center gap-10 ml-16">
            <Image
              src="/images/logo.png"
              alt="Act of Class Moving & Storage"
              width={180}
              height={60}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
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
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Areas Served Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <Link href="/areas-served" className="text-dark hover:text-primary transition font-medium flex items-center gap-1">
                Areas Served
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-64 max-h-96 overflow-y-auto">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/areas-served/${loc.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition"
                      >
                        {loc.name}, FL
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/areas-served"
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition"
                      >
                        View All Areas →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-dark hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary transition font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-dark hover:text-primary transition font-medium">
              Blog
            </Link>

            <a href="tel:+12395394761" className="text-dark hover:text-primary transition font-medium whitespace-nowrap">
              (239) 539-4761
            </a>

            <Link
              href="/book-online"
              className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition shadow-sm whitespace-nowrap"
            >
              BOOK NOW
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
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
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link href="/areas-served" className="font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
                Areas Served
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                {locations.slice(0, 10).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/areas-served/${loc.slug}`}
                    className="block text-sm text-gray-600 hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {loc.name}, FL
                  </Link>
                ))}
                <Link
                  href="/areas-served"
                  className="block text-sm text-primary font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  View All Areas →
                </Link>
              </div>
            </div>
            <Link href="/about" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link href="/blog" className="block font-medium text-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <a href="tel:+12395394761" className="block font-medium text-primary">
              (239) 539-4761
            </a>
            <Link
              href="/book-online"
              className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
