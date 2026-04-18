"use client";

import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";

export default function BookingMethodPage() {
  const { data, update } = useBooking();
  const router = useRouter();

  const select = (method: "online" | "call") => {
    update({ bookingMethod: method });
    if (method === "online") {
      router.push("/book-online/move-date");
    }
    // "call" could trigger a callback request — for now just show confirmation
    if (method === "call") {
      router.push("/book-online/confirmation");
    }
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        WANT TO CONTINUE ONLINE?
      </h1>
      <p className="text-gray-500 mt-2 leading-relaxed">
        Our online system gives you an instant estimate and lets you reserve your move in just minutes, anytime. If you&apos;d prefer, we can also go over everything and book it with you over the phone.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => select("call")}
          className="group relative flex flex-col items-center gap-3 p-8 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="font-bold text-dark text-lg">Call Me Now</span>
          <span className="text-sm text-gray-500 text-center">We&apos;ll reach out to go over the details with you</span>
        </button>

        <button
          onClick={() => select("online")}
          className="group relative flex flex-col items-center gap-3 p-8 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-dark text-lg">Get Estimate Online</span>
          <span className="text-sm text-gray-500 text-center">Continue online and get an instant estimate now</span>
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={() => router.push("/book-online/contact-information")}
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
