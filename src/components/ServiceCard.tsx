import Link from "next/link";

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-200"
    >
      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">
        {name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </Link>
  );
}
