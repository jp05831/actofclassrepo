import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Moving tips, guides, and news from Act of Class Moving & Storage in Fort Myers, FL.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Moving Tips & Blog"
        subtitle="Helpful advice, tips, and insights from our team of professional movers."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
            <p className="text-5xl mb-4">📝</p>
            <h2 className="text-2xl font-bold text-dark mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              We&apos;re working on helpful moving guides, packing tips, and local Fort Myers insights.
              Check back soon for our latest articles!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition"
            >
              Contact Us Instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
