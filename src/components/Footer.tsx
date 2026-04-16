import Link from "next/link";
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

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Act of Class<br />
              <span className="text-sm font-medium text-gray-400">Moving & Storage</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Family-owned and operated for over 20 years. BBB accredited. Serving Fort Myers and all of Southwest Florida.
            </p>
            <div className="space-y-2 text-sm">
              <p>📍 2775 N Airport Rd #109, Fort Myers, FL 33907</p>
              <p>📞 <a href="tel:+12395394761" className="hover:text-accent transition">(239) 539-4761</a></p>
            </div>
            {/* BBB Badge Placeholder */}
            <div className="mt-4 inline-block bg-gray-800 px-3 py-2 rounded text-xs text-gray-400">
              BBB Accredited Business
            </div>
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

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Act of Class Moving & Storage LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
