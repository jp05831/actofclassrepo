import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Online - Get a Free Quote",
  description:
    "Request a free moving quote from Act of Class Moving & Storage. Fill out our online form and we'll provide a detailed estimate for your move in Fort Myers and Southwest Florida.",
};

export default function BookOnlinePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Book Your Move
          </h1>
          <p className="text-lg text-white/80">
            Tell us about your move and we&apos;ll provide a detailed, honest quote — no obligation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
