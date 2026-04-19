"use client";

import { useBooking } from "@/context/BookingContext";
import Link from "next/link";

export default function ConfirmationPage() {
  const { data, reset } = useBooking();

  const serviceAddress = data.useManualAddress
    ? `${data.manualAddress}${data.apartment ? `, ${data.apartment}` : ""}, ${data.manualCity} ${data.manualZip}`
    : `${data.address}${data.apartment ? `, ${data.apartment}` : ""}`;

  return (
    <div className="text-center">
      {/* Checkmark animation */}
      <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        THANK YOU{data.firstName ? `, ${data.firstName.toUpperCase()}` : ""}!
      </h1>

      <div className="mt-6 text-gray-600 leading-relaxed max-w-lg mx-auto space-y-3">
        <p className="text-lg">You&apos;re all set — we&apos;ll take it from here.</p>
        <p>
          One of our team members will be reaching out shortly to confirm availability and go over the details of your move. Keep an eye out for our call.
        </p>
        {data.email && (
          <p>
            In the meantime, you&apos;ll receive a confirmation email at:{" "}
            <span className="font-semibold text-dark">{data.email}</span>
          </p>
        )}
      </div>

      {/* Request Summary */}
      <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 p-6 max-w-md mx-auto text-left">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
          Request Summary
        </h2>
        <div className="space-y-3">
          {serviceAddress && (
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Service Address</span>
              <span className="text-sm font-medium text-dark text-right max-w-[60%]">{serviceAddress}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Phone</span>
              <span className="text-sm font-medium text-dark">{data.phone}</span>
            </div>
          )}
{/* Only showing service address and phone */}
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition text-center"
        >
          Back to Main Site
        </Link>
        <Link
          href="/book-online"
          onClick={() => reset()}
          className="px-6 py-3.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition shadow-sm text-center"
        >
          Book Another Service
        </Link>
      </div>
    </div>
  );
}
