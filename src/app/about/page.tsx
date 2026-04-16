import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Act of Class Moving & Storage — a family-owned Fort Myers moving company with over 20 years of experience serving Southwest Florida.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Act of Class Moving & Storage"
        subtitle="Family-owned. Community-rooted. Committed to excellence for over 20 years."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Act of Class Moving & Storage LLC was founded in Fort Myers, Florida, with a simple mission:
              to be the best-in-class for moving services. Over two decades later, that mission hasn&apos;t
              changed — but we&apos;ve grown from a small crew into one of Southwest Florida&apos;s most
              trusted moving companies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a family-owned and operated business, every move we complete reflects directly on our name.
              That personal accountability drives everything we do — from the way we hire and train our crews
              to the care we take with every piece of furniture, every box, and every family heirloom.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that a labor-oriented service company rides on reputation. That&apos;s why we hire the
              best in class staff who understand and pledge to deliver every act as an act of class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "40,000", label: "Sq Ft of Storage" },
              { number: "1000s", label: "Families Moved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-6">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-dark mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Integrity",
                desc: "Honest quotes, clear communication, and no surprises. What we say is what you get.",
              },
              {
                title: "Professionalism",
                desc: "Our trained crews show up on time, work efficiently, and treat your home with respect.",
              },
              {
                title: "Care",
                desc: "We handle your belongings like they're our own — because your trust means everything to us.",
              },
              {
                title: "Community",
                desc: "We're proud to serve Fort Myers and Southwest Florida. This is our home too.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-dark mb-6">BBB Accredited</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We&apos;re proud to be accredited by the Better Business Bureau, reflecting our commitment to
            trust, transparency, and customer satisfaction. Our accreditation is a testament to the way
            we conduct business — honestly and with integrity.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 inline-block border border-gray-100">
            <p className="text-sm text-gray-500">BBB Accredited Business</p>
            <p className="font-semibold text-dark">Act of Class Moving & Storage LLC</p>
          </div>
        </div>
      </section>
    </>
  );
}
