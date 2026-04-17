import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import SplitHero from "@/components/SplitHero";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { services, getService } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Fort Myers, FL`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {service.heroImage ? (
        <SplitHero
          title={service.name}
          subtitle={service.description}
          image={service.heroImage}
        />
      ) : (
        <Hero title={service.name} subtitle={service.description} showCTA={true} />
      )}

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-6">
                What&apos;s Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-dark mb-6">
                Why Choose Act of Class for {service.name}?
              </h2>
              <div className="prose prose-gray max-w-none mb-12">
                <p>
                  With over 20 years of experience serving Fort Myers and Southwest Florida, Act of Class Moving & Storage
                  has become the go-to choice for {service.name.toLowerCase()}. Our family-owned company takes pride in every
                  move, treating your belongings as if they were our own.
                </p>
                <p>
                  We&apos;re BBB accredited and backed by thousands of satisfied customers across Lee County and Collier County.
                  Our trained, professional crews arrive on time, communicate clearly, and finish the job right — every time.
                </p>
                <p>
                  Whether you need full-service packing, specialty item handling, or access to our 40,000 square feet of
                  climate-controlled storage, we have the resources and expertise to make your move stress-free.
                </p>
              </div>

              {service.faqs.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQ items={service.faqs} />
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-dark text-lg mb-4">Get a Free Estimate</h3>
                  <ContactForm compact />
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-dark text-lg mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary transition py-1"
                      >
                        {s.icon} {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need Help Now?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Call us for immediate assistance with your move.
                  </p>
                  <a
                    href="tel:+12395394761"
                    className="block text-center bg-accent text-dark font-bold py-3 rounded-lg hover:bg-accent-light transition"
                  >
                    📞 (239) 539-4761
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
