import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book-online" },
  { name: "Areas Served", href: "/areas-served" },
  { name: "Blog", href: "/blog" },
];

const topAreas = [
  { name: "Fort Myers", href: "/areas-served/fort-myers" },
  { name: "Cape Coral", href: "/areas-served/cape-coral" },
  { name: "Estero", href: "/areas-served/estero" },
  { name: "Bonita Springs", href: "/areas-served/bonita-springs" },
  { name: "McGregor", href: "/areas-served/mcgregor" },
  { name: "Whiskey Creek", href: "/areas-served/whiskey-creek" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ActofClassMovingFlorida/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/actofclassfl",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCn4CzELHcMAZ-q0sNhJ5xjg",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/actofclassmove/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/actofclass_/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            {/* Logo + Phone */}
            <div className="mb-4">
              <Image
                src="/images/logo-footer.jpg"
                alt="Act of Class Moving & Storage"
                width={200}
                height={67}
                className="h-14 w-auto"
              />
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Family-owned moving company with over 20 years of experience. Licensed and insured. Serving Southwest Florida.
            </p>

            <div className="space-y-1.5 text-sm text-gray-400 mb-4">
              <p>2775 N Airport Rd #109, Fort Myers, FL 33907</p>
              <p>Mon–Sat: 7 AM – 7 PM &nbsp;|&nbsp; Sun: 10 AM – 4 PM</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-gray-500 hover:text-accent transition"
                >
                  {s.icon}
                </a>
              ))}
              <div className="h-5 w-px bg-gray-700" />
              <a href="tel:+12395394761" className="text-white font-bold text-lg hover:text-accent transition whitespace-nowrap">
                (239) 539-4761
              </a>
            </div>

            {/* BBB Badge */}
            <a
              href="https://www.bbb.org/us/fl/fort-myers/profile/moving-companies/act-of-class-moving-storage-llc-0653-90222874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition px-4 py-2.5 rounded-lg"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-[#00529b] rounded text-white font-bold text-xs leading-none">
                BBB
              </div>
              <div>
                <p className="text-white text-xs font-semibold">BBB Accredited</p>
                <p className="text-gray-400 text-[10px]">Click to verify</p>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-accent transition">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2">
              {topAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm hover:text-accent transition">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-served" className="text-sm text-accent hover:text-accent-light transition font-medium">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Act of Class Moving & Storage LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms-and-conditions" className="hover:text-accent transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
