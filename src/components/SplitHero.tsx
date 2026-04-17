import Link from "next/link";

interface SplitHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function SplitHero({ title, subtitle, image }: SplitHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* ── Mobile layout: image on top, text below ── */}
      <div className="flex flex-col lg:hidden">
        {/* Mobile image banner */}
        <div className="relative w-full h-[240px] sm:h-[300px]">
          {image ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-primary-dark/40" />
          )}
        </div>

        {/* Mobile horizontal ribbon — spans the seam between image and text */}
        <div className="relative z-30 -mt-[22px] w-[55%] sm:w-[45%]">
          <div className="absolute top-1 left-1 h-[44px] w-full bg-black/15 rounded-r" />
          <div className="relative h-[44px] bg-accent shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light/40 via-transparent to-accent-dark/30" />
            {/* Right arrow notch */}
            <div className="absolute top-0 -right-[12px] h-full flex items-center">
              <div style={{ width: 0, height: 0, borderTop: "22px solid transparent", borderBottom: "22px solid transparent", borderLeft: "12px solid var(--color-accent)" }} />
            </div>
          </div>
        </div>

        {/* Mobile text content */}
        <div className="px-6 sm:px-10 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed drop-shadow-md">
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
      </div>

      {/* ── Desktop layout: side by side (unchanged) ── */}
      <div className="hidden lg:flex min-h-[480px] lg:min-h-[540px]">
        {/* Left side — content (~60%) */}
        <div className="flex-1 flex flex-col justify-center px-16 xl:px-24 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
            <div className="flex flex-row gap-4">
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
        </div>

        {/* Yellow ribbon overlay centered on the split */}
        <div className="absolute top-0 left-[58%] -translate-x-1/2 h-[60%] z-30">
          <div className="absolute top-2 left-1.5 w-[80px] h-full bg-black/15 rounded-b" />
          <div className="relative w-[80px] h-full bg-accent shadow-lg">
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-accent-light/40 via-transparent to-accent-dark/30" />
            <div className="absolute -bottom-4 left-0 w-full flex justify-center">
              <div style={{ width: 0, height: 0, borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderTop: "16px solid var(--color-accent)" }} />
            </div>
          </div>
        </div>

        {/* Right side — image flush to edge (~42%) */}
        <div className="w-[42%] shrink-0 relative">
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
    </section>
  );
}
