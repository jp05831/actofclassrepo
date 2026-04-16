"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it — hear from families across Southwest Florida who trusted us with their moves.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-accent text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-dark">{testimonials[current].name}</p>
              <p className="text-sm text-gray-500">{testimonials[current].location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === current ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
