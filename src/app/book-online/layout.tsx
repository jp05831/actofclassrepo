"use client";

import { BookingProvider } from "@/context/BookingContext";
import { usePathname } from "next/navigation";

const steps = [
  { path: "/book-online", label: "Location" },
  { path: "/book-online/contact-information", label: "Contact" },
  { path: "/book-online/booking-method", label: "Options" },
  { path: "/book-online/move-date", label: "Date" },
  { path: "/book-online/move-details", label: "Details" },
  { path: "/book-online/destination", label: "Destination" },
  { path: "/book-online/confirmation", label: "Done" },
];

export default function BookOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentIdx = steps.findIndex((s) => s.path === pathname);
  const isConfirmation = pathname === "/book-online/confirmation";

  return (
    <BookingProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Progress Bar */}
        {!isConfirmation && (
          <div className="bg-white border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-2">
                {steps.slice(0, -1).map((step, i) => (
                  <div key={step.path} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          i < currentIdx
                            ? "bg-primary text-white"
                            : i === currentIdx
                            ? "bg-primary text-white ring-4 ring-primary/20"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {i < currentIdx ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span className={`text-xs mt-1 hidden sm:block ${i <= currentIdx ? "text-primary font-semibold" : "text-gray-400"}`}>
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 2 && (
                      <div className={`flex-1 h-0.5 mx-2 mt-[-16px] sm:mt-[-4px] transition-all duration-300 ${i < currentIdx ? "bg-primary" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          {children}
        </div>
      </div>
    </BookingProvider>
  );
}
