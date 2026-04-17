import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Online - Get a Free Quote",
  description:
    "Request a free moving quote from Act of Class Moving & Storage. Fill out our online form and we'll provide a detailed estimate for your move in Fort Myers and Southwest Florida.",
};

export default function BookOnlinePage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-3">
          Request Your Free Estimate
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          Tell us about your move and we&apos;ll provide a detailed, honest quote — no obligation.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
