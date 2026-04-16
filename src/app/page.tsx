import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import LocationCard from "@/components/LocationCard";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function HomePage() {
  const topLocations = locations.slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Act of Class Moving & Storage LLC",
    description:
      "Family-owned moving company in Fort Myers, FL with over 20 years of experience. Residential, apartment, furniture, luxury, and senior moving services.",
    url: "https://www.actofclassmoving.com",
    telephone: "+12390000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Myers",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 26.6406, longitude: -81.8723 },
      geoRadius: "50000",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        title="Fort Myers' Most Trusted Moving Company"
        subtitle="Family-owned for over 20 years. BBB accredited. From packing to storage, we handle every detail of your move with care and professionalism."
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
            Our Moving Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From local apartment moves to luxury relocations, we offer comprehensive moving solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                name={s.name}
                description={s.shortDescription}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-12">
            Why Choose Act of Class?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "👨‍👩‍👧‍👦", title: "Family-Owned", desc: "Not a franchise — a real family business where your move reflects directly on our name." },
              { icon: "🏆", title: "20+ Years Experience", desc: "Two decades of moving families across Southwest Florida with care and professionalism." },
              { icon: "🏢", title: "40,000 Sq Ft Storage", desc: "Climate-controlled storage facility to keep your belongings safe between moves." },
              { icon: "✅", title: "BBB Accredited", desc: "Recognized by the Better Business Bureau for our commitment to customer satisfaction." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proudly serving communities throughout Lee County and Collier County in Southwest Florida.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {topLocations.map((loc) => (
              <LocationCard key={loc.slug} name={loc.name} slug={loc.slug} adjective={loc.adjective} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/areas-served"
              className="inline-block text-primary font-semibold hover:underline"
            >
              View All {locations.length} Areas We Serve →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to move? Fill out the form and we&apos;ll get back to you with a free, no-obligation estimate. Or call us directly.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-dark">Call Us</p>
                    <a href="tel:+12390000000" className="text-primary hover:underline">(239) 000-0000</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-dark">Location</p>
                    <p className="text-gray-600">Fort Myers, FL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-dark">Hours</p>
                    <p className="text-gray-600">Mon-Sat: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
