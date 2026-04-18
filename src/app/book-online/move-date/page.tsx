"use client";

import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function MoveDatePage() {
  const { data, update } = useBooking();
  const router = useRouter();
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

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    return d < today;
  };

  const isSelected = (day: number) => {
    return data.moveDate === `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const selectDay = (day: number) => {
    if (isPast(day)) return;
    update({ moveDate: `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` });
  };

  const canGoBack = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        WHEN ARE YOU LOOKING TO MOVE?
      </h1>

      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            disabled={!canGoBack}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-lg font-bold text-dark">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </h2>
          <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-100 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAY_NAMES.map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) =>
            day === null ? (
              <div key={`empty-${i}`} />
            ) : (
              <button
                key={day}
                onClick={() => selectDay(day)}
                disabled={isPast(day)}
                className={`h-10 rounded-lg text-sm font-medium transition-all ${
                  isSelected(day)
                    ? "bg-primary text-white shadow-sm"
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

      {data.moveDate && (
        <p className="mt-4 text-sm text-gray-500">
          Selected date: <span className="font-semibold text-dark">{new Date(data.moveDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
        </p>
      )}

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push("/book-online/booking-method")}
          className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/book-online/move-details")}
          disabled={!data.moveDate}
          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition shadow-sm text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
