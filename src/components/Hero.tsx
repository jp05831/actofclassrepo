import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, showCTA = true, backgroundImage }: HeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-[center_78%]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-online"
                className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg"
              >
                GET A FREE ESTIMATE
              </Link>
              <a
                href="tel:+12395394761"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg"
              >
                CALL (239) 539-4761
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
