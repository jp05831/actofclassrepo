"use client";

import { useBooking, BookingData } from "@/context/BookingContext";
import { useRouter } from "next/navigation";

const PROPERTY_ICONS: Record<string, React.ReactNode> = {
  apartment: (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3 4.5h.008v.008H18v-.008zm0 3h.008v.008H18v-.008zm0 3h.008v.008H18v-.008z" />
    </svg>
  ),
  house: (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  business: (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  storage: (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
};

const PROPERTY_TYPES: { key: BookingData["propertyType"]; label: string }[] = [
  { key: "apartment", label: "Apartment / Condo" },
  { key: "house", label: "House" },
  { key: "business", label: "Business" },
  { key: "storage", label: "Storage Unit" },
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
            {PROPERTY_ICONS[pt.key as string]}
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
