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
      <h3 className="font-bold text-dark group-hover:text-primary transition">
        {name}, FL
      </h3>
      <p className="text-sm text-gray-500 mt-1">{adjective} Movers</p>
      <span className="inline-block mt-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </Link>
  );
}
