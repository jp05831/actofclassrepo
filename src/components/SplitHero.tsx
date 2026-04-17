import Link from "next/link";

interface SplitHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function SplitHero({ title, subtitle, image }: SplitHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex min-h-[480px] lg:min-h-[540px]">
          {/* Left side — content (roughly 60%) */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-20 max-w-2xl relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
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
          </div>

          {/* Ribbon divider — desktop only */}
          <div className="hidden lg:block absolute right-[48%] top-0 w-[90px] h-[63%] bg-accent/60 z-20" />
          <div className="hidden lg:block absolute top-[60%] w-[55px] h-[28px] bg-accent/60 z-20" style={{ right: "calc(48% + 17px)" }} />

          {/* Right side — image (roughly 40%) */}
          <div className="hidden lg:block w-[38%] shrink-0 relative">
            {image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : (
              <div className="absolute inset-0 bg-primary-dark/40 flex items-center justify-center">
                <p className="text-white/30 text-sm font-medium">Image coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
