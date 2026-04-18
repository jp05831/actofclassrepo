"use client";

import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ServiceLocationPage() {
  const { data, update } = useBooking();
  const router = useRouter();
  const [showManual, setShowManual] = useState(data.useManualAddress);

  const canProceed = showManual
    ? data.manualAddress.trim() && data.manualCity.trim() && data.manualZip.trim()
    : data.address.trim();

  const handleNext = () => {
    if (!canProceed) return;
    update({ useManualAddress: showManual });
    router.push("/book-online/contact-information");
  };

  return (
    <div className="animate-in fade-in">
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        LET&apos;S GET STARTED WITH YOUR SERVICE LOCATION
      </h1>

      <div className="mt-8 space-y-4">
        {/* Address autocomplete input */}
        {!showManual && (
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={data.address}
              onChange={(e) => update({ address: e.target.value })}
              placeholder="Start typing your address..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
              autoComplete="street-address"
            />
            {/* TODO: Attach Google Places / address autocomplete API here */}
            <button
              type="button"
              onClick={() => setShowManual(true)}
              className="text-sm text-gray-500 underline mt-2 hover:text-primary transition"
            >
              I can&apos;t find my address
            </button>
          </div>
        )}

        {/* Manual address fields */}
        {showManual && (
          <>
            <div>
              <label htmlFor="manualAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="manualAddress"
                value={data.manualAddress}
                onChange={(e) => update({ manualAddress: e.target.value })}
                placeholder="123 Main St"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
              />
            </div>
            <div>
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                Apartment / Suite
              </label>
              <input
                type="text"
                id="apartment-manual"
                value={data.apartment}
                onChange={(e) => update({ apartment: e.target.value })}
                placeholder="Apt, Suite, Unit (optional)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={data.manualCity}
                  onChange={(e) => update({ manualCity: e.target.value })}
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip / Postal Code
                </label>
                <input
                  type="text"
                  id="zip"
                  value={data.manualZip}
                  onChange={(e) => update({ manualZip: e.target.value })}
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

        {/* Apartment / Suite (when using autocomplete) */}
        {!showManual && (
          <div>
            <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
              Apartment / Suite
            </label>
            <input
              type="text"
              id="apartment"
              value={data.apartment}
              onChange={(e) => update({ apartment: e.target.value })}
              placeholder="Apt, Suite, Unit (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base"
            />
          </div>
        )}

        {/* Business checkbox */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={data.isBusiness}
            onChange={(e) => update({ isBusiness: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/30 accent-primary"
          />
          <span className="text-sm text-gray-600">This is for a business</span>
        </label>
      </div>

      <button
        onClick={handleNext}
        disabled={!canProceed}
        className="mt-8 w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
