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
            {/* Family-Owned */}
            <div className="text-center">
  <div className="mb-5 flex justify-center">
    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  </div>

  <h3 className="font-bold text-dark text-lg mb-2">Family-Owned</h3>
  <p className="text-gray-600 text-sm">
    Not a franchise — a real family business where your move reflects directly on our name.
  </p>
</div>

            {/* 20+ Years Experience */}
            <div className="text-center">
  <div className="mb-5 flex justify-center">
    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  </div>

  <h3 className="font-bold text-dark text-lg mb-2">
    20+ Years Experience
  </h3>

  <p className="text-gray-600 text-sm">
    Two decades of moving families across Southwest Florida with care and professionalism.
  </p>
</div>

            {/* 40,000 Sq Ft Storage */}
            <div className="text-center">
  <div className="mb-5 flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 7l9-4 9 4-9 4-9-4zm0 2v8l9 4 9-4V9l-9 4-9-4z"/>
    </svg>
  </div>

  <h3 className="font-bold text-dark text-lg mb-2">
    40,000 Sq Ft Storage
  </h3>

  <p className="text-gray-600 text-sm">
    Climate-controlled storage facility to keep your belongings safe between moves.
  </p>
</div>

                        {/* BBB Accredited */}
            <div className="text-center">
              <div className="mb-5 flex justify-center">
                <a href="https://www.bbb.org/us/fl/fort-myers/profile/moving-companies/act-of-class-moving-storage-llc-0653-90222874" target="_blank" rel="noopener noreferrer">
                  <svg className="w-10 h-10" viewBox="0 0 80 80" fill="none">
                    <rect width="80" height="80" rx="8" fill="#00529b"/>
                    <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">BBB</text>
                    <text x="50%" y="66%" dominantBaseline="middle" textAnchor="middle" fill="#f3ca14" fontSize="9" fontWeight="600">ACCREDITED</text>
                  </svg>
                </a>
              </div>

              <h3 className="font-bold text-dark text-lg mb-2">
                Licensed & Insured
              </h3>

              <p className="text-gray-600 text-sm">
                Fully licensed and insured, giving you peace of mind every step of your move.
              </p>
            </div>
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
              <a
                href="/book-online"
                className="inline-flex items-center justify-center bg-accent text-dark font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition shadow-sm text-lg"
              >
                GET YOUR FREE ESTIMATE
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>2775 N Airport Rd #109, Fort Myers, FL 33907</p>
              <p>Mon–Sat: 7 AM – 7 PM &nbsp;|&nbsp; Sun: 10 AM – 4 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
