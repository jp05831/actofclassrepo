"use client";

import { useState, useMemo } from "react";

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

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
  if (/^(\d)\1{9}$/.test(digits)) return false;
  return true;
}

function isValidZip(zip: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zip.trim());
}

export default function EstimateWizard() {
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({ fromZip: false, toZip: false, moveDate: false, phone: false });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const days = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  }, [viewYear, viewMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const isPast = (day: number) => new Date(viewYear, viewMonth, day) < today;
  const isSelected = (day: number) =>
    moveDate === `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const canGoBack = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const selectDay = (day: number) => {
    if (isPast(day)) return;
    const val = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setMoveDate(val);
    setShowCalendar(false);
  };

  const phoneValid = isValidPhone(phone);
  const fromZipValid = isValidZip(fromZip);
  const toZipValid = isValidZip(toZip);
  const canSubmit = fromZipValid && toZipValid && moveDate && phoneValid && consent;

  const handleSubmit = () => {
    setTouched({ fromZip: true, toZip: true, moveDate: true, phone: true });
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2200);
  };

  if (submitting) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 -mt-8 relative z-10 max-w-2xl mx-auto overflow-hidden min-w-0" style={{ width: "580px", maxWidth: "100%" }}>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-bounce-slow mb-4">
            <svg viewBox="0 0 128 80" className="w-28 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="20" width="70" height="40" rx="4" fill="#812f25" />
              <rect x="72" y="30" width="36" height="30" rx="3" fill="#a04035" />
              <rect x="78" y="34" width="14" height="12" rx="2" fill="#c9d6df" />
              <circle cx="24" cy="64" r="8" fill="#333" />
              <circle cx="24" cy="64" r="4" fill="#888" />
              <circle cx="90" cy="64" r="8" fill="#333" />
              <circle cx="90" cy="64" r="4" fill="#888" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-dark animate-pulse">Processing your request...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 -mt-8 relative z-10 max-w-2xl mx-auto overflow-hidden min-w-0" style={{ width: "580px", maxWidth: "100%" }}>
        <div className="flex flex-col items-center justify-center py-14 px-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">We&apos;ll Be in Touch!</h3>
          <p className="text-gray-500 text-sm text-center max-w-sm leading-relaxed">
            Thanks for reaching out. One of our team members will contact you shortly to go over the details and confirm availability for your move.
          </p>
        </div>
      </div>
    );
  }

  const moveDateDisplay = moveDate
    ? new Date(moveDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 -mt-8 relative z-10 max-w-2xl mx-auto overflow-hidden min-w-0" style={{ width: "580px", maxWidth: "100%" }}>
      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-lg">CHECK AVAILABILITY</h2>
            <p className="text-white/70 text-xs mt-0.5">Takes less than a minute — no obligation</p>
          </div>
          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur rounded-lg px-3 py-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className={`w-4 h-4 ${i <= 4 ? "text-accent" : "text-accent/60"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.8</span>
            <span className="text-white/70 text-xs">Google</span>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <p className="text-gray-400 text-sm font-bold mb-6">Tell us a few details to get started.</p>

        <div className="space-y-4">
          {/* Zip codes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Moving From (Zip) *</label>
              <input
                type="text"
                value={fromZip}
                onChange={(e) => setFromZip(e.target.value.replace(/[^\d-]/g, "").slice(0, 10))}
                onBlur={() => setTouched((t) => ({ ...t, fromZip: true }))}
                placeholder="33901"
                className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition text-sm focus:ring-2 ${
                  touched.fromZip && !fromZipValid
                    ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                    : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                }`}
              />
              {touched.fromZip && !fromZipValid && (
                <p className="text-red-500 text-xs mt-1">Enter a valid zip code</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Moving To (Zip) *</label>
              <input
                type="text"
                value={toZip}
                onChange={(e) => setToZip(e.target.value.replace(/[^\d-]/g, "").slice(0, 10))}
                onBlur={() => setTouched((t) => ({ ...t, toZip: true }))}
                placeholder="34102"
                className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition text-sm focus:ring-2 ${
                  touched.toZip && !toZipValid
                    ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                    : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                }`}
              />
              {touched.toZip && !toZipValid && (
                <p className="text-red-500 text-xs mt-1">Enter a valid zip code</p>
              )}
            </div>
          </div>

          {/* Move Date */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-500 mb-1">Expected Move Date *</label>
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition text-sm text-left flex items-center justify-between focus:ring-2 ${
                touched.moveDate && !moveDate
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
              }`}
            >
              <span className={moveDateDisplay ? "text-dark" : "text-gray-400"}>
                {moveDateDisplay || "Select a date"}
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            {touched.moveDate && !moveDate && (
              <p className="text-red-500 text-xs mt-1">Please select a date</p>
            )}

            {/* Compact calendar dropdown */}
            {showCalendar && (
              <div className="absolute top-full left-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-[280px]">
                <div className="flex items-center justify-between mb-2">
                  <button type="button" onClick={prevMonth} disabled={!canGoBack} className="p-0.5 hover:bg-gray-100 rounded disabled:opacity-30 transition">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="font-semibold text-dark text-xs">{MONTH_NAMES[viewMonth]} {viewYear}</span>
                  <button type="button" onClick={nextMonth} className="p-0.5 hover:bg-gray-100 rounded transition">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 mb-0.5">
                  {DAY_NAMES.map((d) => (
                    <div key={d} className="text-center text-[9px] font-medium text-gray-400 py-0.5">{d.charAt(0)}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {days.map((day, i) =>
                    day === null ? (
                      <div key={`e-${i}`} />
                    ) : (
                      <button
                        type="button"
                        key={day}
                        onClick={() => selectDay(day)}
                        disabled={isPast(day)}
                        className={`w-[34px] h-[26px] text-[11px] rounded transition font-medium mx-auto ${
                          isSelected(day)
                            ? "bg-primary text-white"
                            : isPast(day)
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-dark hover:bg-primary/10"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              placeholder="(000) 000-0000"
              className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition text-sm focus:ring-2 ${
                touched.phone && !phoneValid
                  ? "border-red-400 focus:ring-red-200 focus:border-red-400"
                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
              }`}
            />
            {touched.phone && !phoneValid && (
              <p className="text-red-500 text-xs mt-1">Enter a valid 10-digit phone number</p>
            )}
          </div>

          {/* Consent */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-primary"
            />
            <span className="text-[11px] text-gray-400 leading-relaxed">
              You may call or send me messages related to my service request. I understand that I can unsubscribe at any time.
            </span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="mt-6 w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
