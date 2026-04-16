import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Act of Class Moving & Storage for a free moving estimate. Call us or fill out our contact form. Serving Fort Myers and Southwest Florida.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Ready to plan your move? Get in touch for a free, no-obligation estimate."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have questions about our services, need a quote, or are ready to book your move,
                we&apos;re here to help. Reach out by phone, or fill out the form and we&apos;ll get back
                to you promptly.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Phone</h3>
                    <a href="tel:+12395394761" className="text-primary hover:underline text-lg">
                      (239) 539-4761
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Location</h3>
                    <p className="text-gray-600">2775 N Airport Rd #109</p>
                    <p className="text-gray-600">Fort Myers, FL 33907</p>
                    <p className="text-gray-500 text-sm">Serving Lee County & Collier County</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 7:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <p className="text-4xl mb-2">🗺️</p>
                  <p className="font-medium">Map</p>
                  <p className="text-sm">Fort Myers, FL</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
