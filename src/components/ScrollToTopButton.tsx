"use client";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-lg border-2 border-primary hover:bg-primary/5 transition text-lg"
    >
      Get Your Free Estimate
    </button>
  );
}
