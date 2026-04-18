"use client";

import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

export default function DestinationPage() {
  const { data, update } = useBooking();
  const router = useRouter();
  const [showManual, setShowManual] = useState(data.destUseManual);
  const [submitting, setSubmitting] = useState(false);

  const canProceed = showManual
    ? data.destManualAddress.trim() && data.destManualCity.trim() && data.destManualState && data.destManualZip.trim()
    : data.destAddress.trim();

  const handleSubmit = () => {
    if (!canProceed) return;
    update({ destUseManual: showManual });
    setSubmitting(true);
    // Simulate loading
    setTimeout(() => {
      router.push("/book-online/confirmation");
    }, 2000);
  };

  if (submitting) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        {/* Moving truck animation */}
        <div className="relative w-32 h-20 mb-6">
          <div className="animate-bounce-slow">
            <svg viewBox="0 0 128 80" className="w-32 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="20" width="70" height="40" rx="4" fill="#812f25" />
              <rect x="72" y="30" width="36" height="30" rx="3" fill="#a04035" />
              <rect x="78" y="34" width="14" height="12" rx="2" fill="#c9d6df" />
              <circle cx="24" cy="64" r="8" fill="#333" />
              <circle cx="24" cy="64" r="4" fill="#888" />
              <circle cx="90" cy="64" r="8" fill="#333" />
              <circle cx="90" cy="64" r="4" fill="#888" />
            </svg>
          </div>
        </div>
        <p className="text-lg font-semibold text-dark animate-pulse">Processing your request...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        WHAT ADDRESS ARE YOU MOVING TO?
      </h1>

      <div className="mt-8 space-y-4">
        {!showManual && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={data.destAddress}
              onChange={(e) => update({ destAddress: e.target.value })}
              placeholder="Start typing your destination address..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
            />
            <button
              type="button"
              onClick={() => setShowManual(true)}
              className="text-sm text-gray-500 underline mt-2 hover:text-primary transition"
            >
              I don&apos;t see my address
            </button>
          </div>
        )}

        {showManual && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input
                type="text"
                value={data.destManualAddress}
                onChange={(e) => update({ destManualAddress: e.target.value })}
                placeholder="123 Main St"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apartment / Suite</label>
          <input
            type="text"
            value={data.destApartment}
            onChange={(e) => update({ destApartment: e.target.value })}
            placeholder="Apt, Suite, Unit (optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
          />
        </div>

        {showManual && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={data.destManualCity}
                  onChange={(e) => update({ destManualCity: e.target.value })}
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select
                  value={data.destManualState}
                  onChange={(e) => update({ destManualState: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base bg-white"
                >
                  <option value="">Select...</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip / Postal Code</label>
                <input
                  type="text"
                  value={data.destManualZip}
                  onChange={(e) => update({ destManualZip: e.target.value })}
                  placeholder="33901"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowManual(false)}
              className="text-sm text-gray-500 underline hover:text-primary transition"
            >
              Search for my address instead
            </button>
          </>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push("/book-online/move-details")}
          className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canProceed}
          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
