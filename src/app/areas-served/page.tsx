import { Metadata } from "next";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served",
  description:
    "Act of Class Moving & Storage proudly serves Fort Myers, Cape Coral, Estero, Bonita Springs, and 20+ communities throughout Lee County and Collier County in Southwest Florida.",
};

export default function AreasServedPage() {
  return (
    <>
      <Hero
        title="Areas We Serve in Southwest Florida"
        subtitle="From Fort Myers to Cape Coral, Estero to Bonita Springs — we proudly serve communities throughout Lee County and Collier County."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                slug={loc.slug}
                adjective={loc.adjective}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
