import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Online - Get a Free Quote",
  description:
    "Request a free moving quote from Act of Class Moving & Storage. Fill out our online form and we'll provide a detailed estimate for your move in Fort Myers and Southwest Florida.",
};

export default function BookOnlinePage() {
  return (
    <>
      <Hero
        title="Book Your Move Online"
        subtitle="Fill out the form below to request a free, no-obligation moving estimate. We'll get back to you within 24 hours."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-2">Request Your Free Estimate</h2>
            <p className="text-gray-600 mb-8">
              Tell us about your move and we&apos;ll provide a detailed, honest quote with no hidden fees.
            </p>
            <ContactForm />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "⚡", title: "Fast Response", desc: "We respond within 24 hours" },
              { icon: "💰", title: "No Hidden Fees", desc: "Honest, upfront pricing" },
              { icon: "🛡️", title: "Fully Insured", desc: "Your belongings are protected" },
            ].map((item) => (
              <div key={item.title} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-dark">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
