"use client";

import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return false;
  // reject obviously fake numbers
  if (/^0{10}$/.test(digits)) return false;
  if (/^(\d)\1{9}$/.test(digits)) return false;
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default function ContactInfoPage() {
  const { data, update } = useBooking();
  const router = useRouter();
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  const phoneValid = isValidPhone(data.phone);
  const emailValid = isValidEmail(data.email);
  const canProceed =
    data.firstName.trim() &&
    data.lastName.trim() &&
    phoneValid &&
    emailValid &&
    data.optInTexts;

  const handleNext = () => {
    setTouched({ firstName: true, lastName: true, phone: true, email: true });
    if (!canProceed) return;
    router.push("/book-online/booking-method");
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        HOW CAN WE REACH YOU?
      </h1>
      <p className="text-gray-500 mt-2">
        Share your contact details and we&apos;ll reach out to confirm your move and next steps.
      </p>

      <div className="mt-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              value={data.firstName}
              onChange={(e) => update({ firstName: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
              placeholder="First name"
              className={`w-full px-4 py-3 rounded-lg border transition outline-none text-base ${
                touched.firstName && !data.firstName.trim()
                  ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                  : "border-gray-300 focus:ring-primary/20 focus:border-primary"
              } focus:ring-2`}
            />
            {touched.firstName && !data.firstName.trim() && (
              <p className="text-red-500 text-xs mt-1">Required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              value={data.lastName}
              onChange={(e) => update({ lastName: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
              placeholder="Last name"
              className={`w-full px-4 py-3 rounded-lg border transition outline-none text-base ${
                touched.lastName && !data.lastName.trim()
                  ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                  : "border-gray-300 focus:ring-primary/20 focus:border-primary"
              } focus:ring-2`}
            />
            {touched.lastName && !data.lastName.trim() && (
              <p className="text-red-500 text-xs mt-1">Required</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update({ phone: formatPhone(e.target.value) })}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="(000) 000-0000"
            className={`w-full px-4 py-3 rounded-lg border transition outline-none text-base ${
              touched.phone && !phoneValid
                ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                : "border-gray-300 focus:ring-primary/20 focus:border-primary"
            } focus:ring-2`}
          />
          {touched.phone && !phoneValid && (
            <p className="text-red-500 text-xs mt-1">Enter a valid 10-digit phone number</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="you@example.com"
            className={`w-full px-4 py-3 rounded-lg border transition outline-none text-base ${
              touched.email && !emailValid
                ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                : "border-gray-300 focus:ring-primary/20 focus:border-primary"
            } focus:ring-2`}
          />
          {touched.email && !emailValid && (
            <p className="text-red-500 text-xs mt-1">Enter a valid email address</p>
          )}
        </div>

        {/* Opt-ins */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={data.optInOffers}
              onChange={(e) => update({ optInOffers: e.target.checked })}
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary/30 accent-primary"
            />
            <span className="text-sm text-gray-600">
              Sign me up to receive the latest offers, news, and events
            </span>
          </label>
          <label className="flex items-start gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={data.optInTexts}
              onChange={(e) => update({ optInTexts: e.target.checked })}
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary/30 accent-primary"
            />
            <span className="text-sm text-gray-600">
              You may call or send me messages related to my service request. I understand that I can unsubscribe at any time.
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push("/book-online")}
          className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
