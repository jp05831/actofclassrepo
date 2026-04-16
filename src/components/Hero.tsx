import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-online"
                className="inline-flex items-center justify-center bg-accent text-dark font-bold px-8 py-4 rounded-lg hover:bg-accent-light transition shadow-lg text-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+12390000000"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg"
              >
                📞 Call Now
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
