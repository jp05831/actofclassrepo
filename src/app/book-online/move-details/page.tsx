"use client";

import { useBooking, BookingData } from "@/context/BookingContext";
import { useRouter } from "next/navigation";

const PROPERTY_TYPES: { key: BookingData["propertyType"]; label: string; icon: string }[] = [
  { key: "apartment", label: "Apartment / Condo", icon: "🏢" },
  { key: "house", label: "House", icon: "🏠" },
  { key: "business", label: "Business", icon: "🏬" },
  { key: "storage", label: "Storage Unit", icon: "📦" },
];

const FLOOR_DEFAULTS: Record<string, string> = {
  apartment: "1st Floor",
  house: "1 Story",
  business: "Ground Floor",
  storage: "Ground Level",
};

function getFloorOptions(type: string): string[] {
  if (type === "apartment") {
    return Array.from({ length: 50 }, (_, i) => `${i + 1}${ordinal(i + 1)} Floor`);
  }
  if (type === "house") {
    return ["1 Story", "2 Stories", "3 Stories", "4 Stories"];
  }
  if (type === "business") {
    return ["Ground Floor", ...Array.from({ length: 50 }, (_, i) => `${i + 1}${ordinal(i + 1)} Floor`)];
  }
  if (type === "storage") {
    return ["Ground Level", "2nd Level+"];
  }
  return [];
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

const BEDROOM_OPTIONS = ["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms"];

export default function MoveDetailsPage() {
  const { data, update } = useBooking();
  const router = useRouter();

  const displayAddress = data.useManualAddress
    ? `${data.manualAddress}${data.apartment ? `, ${data.apartment}` : ""}, ${data.manualCity} ${data.manualZip}`
    : `${data.address}${data.apartment ? `, ${data.apartment}` : ""}`;

  const showBedrooms = data.propertyType === "apartment" || data.propertyType === "house";
  const canProceed =
    data.propertyType &&
    data.floorLevel &&
    (!showBedrooms || data.bedrooms);

  const handleSelectType = (type: BookingData["propertyType"]) => {
    update({
      propertyType: type,
      floorLevel: FLOOR_DEFAULTS[type as string] || "",
      bedrooms: "",
    });
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        MOVE FROM ADDRESS INFORMATION
      </h1>
      <p className="text-gray-500 mt-2 text-base">{displayAddress}</p>

      {/* Property type cards */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {PROPERTY_TYPES.map((pt) => (
          <button
            key={pt.key}
            onClick={() => handleSelectType(pt.key)}
            className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all ${
              data.propertyType === pt.key
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <span className="text-2xl">{pt.icon}</span>
            <span className={`text-sm font-semibold text-center ${data.propertyType === pt.key ? "text-primary" : "text-dark"}`}>
              {pt.label}
            </span>
          </button>
        ))}
      </div>

      {/* Floor / Other Details dropdown */}
      {data.propertyType && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Details</label>
          <select
            value={data.floorLevel}
            onChange={(e) => update({ floorLevel: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base bg-white"
          >
            {getFloorOptions(data.propertyType).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Bedrooms */}
      {showBedrooms && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-dark mb-4">
            HOW MANY BEDROOMS ARE YOU MOVING?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BEDROOM_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => update({ bedrooms: opt })}
                className={`py-4 px-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                  data.bedrooms === opt
                    ? "border-primary bg-primary/5 text-primary shadow-sm"
                    : "border-gray-200 text-dark hover:border-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push("/book-online/move-date")}
          className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/book-online/destination")}
          disabled={!canProceed}
          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
