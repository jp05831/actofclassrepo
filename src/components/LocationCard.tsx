import Link from "next/link";

interface LocationCardProps {
  name: string;
  slug: string;
  adjective: string;
}

export default function LocationCard({ name, slug, adjective }: LocationCardProps) {
  return (
    <Link
      href={`/areas-served/${slug}`}
      className="group bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all"
    >
      <h3 className="font-bold text-lg text-dark group-hover:text-primary transition">
        {name}, FL
      </h3>
      <span className="inline-block mt-3 text-primary text-base font-medium group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </Link>
  );
}
