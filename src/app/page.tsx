import Hero from "@/components/Hero";
import EstimateWizard from "@/components/EstimateWizard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import LocationCard from "@/components/LocationCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
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
    telephone: "+12395394761",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2775 N Airport Rd #109",
      addressLocality: "Fort Myers",
      addressRegion: "FL",
      postalCode: "33907",
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
        title="Act of Class Moving & Storage"
        subtitle="Family-owned for over 20 years. From packing to storage, we handle every detail of your move with care and professionalism."
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Estimate Form - overlaps hero */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <EstimateWizard />
      </div>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-12">
            Why Choose Act of Class?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Family-Owned", desc: "Not a franchise — a real family business where your move reflects directly on our name." },
              { title: "20+ Years Experience", desc: "Two decades of moving families across Southwest Florida with care and professionalism." },
              { title: "40,000 Sq Ft Storage", desc: "Climate-controlled storage facility to keep your belongings safe between moves." },
              { title: "BBB Accredited", desc: "Recognized by the Better Business Bureau for our commitment to customer satisfaction." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                name={s.name}
                description={s.shortDescription}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Areas Served */}
      <section
  className="py-16 lg:py-24 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/areas-bg.jpg')" }}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Serving communities across Southwest Florida with dependable moving services.
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Call us today for a free, no-obligation estimate or use the form above to get started online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12395394761"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg"
              >
                Call (239) 539-4761
              </a>
              <span className="text-gray-400">or</span>
              <ScrollToTopButton />
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>2775 N Airport Rd #109, Fort Myers, FL 33907</p>
              <p>Mon-Sat: 7:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
