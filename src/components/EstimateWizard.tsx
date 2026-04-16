"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function CalendarPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isToday = (d: number) => d === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  const isPast = (d: number) => new Date(viewYear, viewMonth, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const selected = value ? new Date(value + "T00:00:00") : null;
  const isSelected = (d: number) => selected && d === selected.getDate() && viewMonth === selected.getMonth() && viewYear === selected.getFullYear();

  const fmt = (d: number) => `${viewYear}-${String(viewMonth+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={prevMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span className="font-semibold text-dark text-sm">{monthNames[viewMonth]} {viewYear}</span>
        <button type="button" onClick={nextMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
        {dayNames.map(dn => <div key={dn} className="text-[11px] font-medium text-gray-400 py-1">{dn}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {cells.map((d, i) => d === null ? <div key={`e${i}`} /> : (
          <button
            type="button"
            key={d}
            disabled={isPast(d)}
            onClick={() => onChange(fmt(d))}
            className={`py-2 text-sm rounded-lg transition font-medium
              ${isPast(d) ? "text-gray-300 cursor-not-allowed" : "hover:bg-primary/10 cursor-pointer"}
              ${isSelected(d) ? "bg-primary text-white hover:bg-primary" : ""}
              ${isToday(d) && !isSelected(d) ? "ring-1 ring-primary/40 text-primary" : ""}
            `}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function EstimateWizard() {
  const [step, setStep] = useState<Step>(1);
  const [mode, setMode] = useState<"online" | "call" | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    smsConsent: false,
    fromAddress: "",
    moveDate: "",
    buildingType: "",
    bedrooms: "",
    toAddress: "",
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const totalSteps = mode === "call" ? 2 : 6;

  // Call summary page
  if (mode === "call" && step > 2) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 -mt-8 relative z-10 max-w-2xl mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-dark mb-3">We&apos;ll Call You Shortly</h3>
          <div className="bg-gray-50 rounded-xl p-4 mb-5 text-left space-y-1.5">
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Name:</span> {form.name}</p>
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Phone:</span> {form.phone}</p>
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Email:</span> {form.email}</p>
            {form.fromAddress && <p className="text-sm text-gray-600"><span className="font-medium text-dark">Moving from:</span> {form.fromAddress}</p>}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            You&apos;ll receive a call from Act of Class Moving within the next few minutes.
          </p>
        </div>
      </div>
    );
  }

  // Online submission complete
  if (mode === "online" && step > 6) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 -mt-8 relative z-10 max-w-2xl mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">Thank You!</h3>
          <p className="text-gray-500 text-sm">We&apos;ve received your information and will get back to you with a personalized estimate shortly.</p>
        </div>
      </div>
    );
  }

  const canNext = () => {
    if (step === 1) return form.name && form.email && form.phone;
    if (step === 2) return form.fromAddress;
    if (step === 3) return form.moveDate;
    if (step === 4) return form.buildingType;
    if (step === 5) return form.bedrooms;
    if (step === 6) return form.toAddress;
    return false;
  };

  // Step progress (thin bar only, no numbered circles)
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 -mt-8 relative z-10 max-w-2xl mx-auto overflow-hidden">
      {/* Form header with branding */}
      <div className="bg-primary px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-lg">Free Moving Estimate</h2>
            <p className="text-white/70 text-xs mt-0.5">No obligation · Takes 2 minutes</p>
          </div>
          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur rounded-lg px-3 py-1.5">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className={`w-4 h-4 ${i <= 4 ? "text-accent" : "text-accent/60"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.8</span>
            <span className="text-white/70 text-xs">Google</span>
          </div>
        </div>
      </div>

      {/* Thin progress bar */}
      <div className="h-1 bg-gray-100">
        <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="p-6 lg:p-8">
        {/* Step 1: Contact Info */}
        {step === 1 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">Get Your Free Estimate</h3>
            <p className="text-gray-400 text-sm mb-5">Tell us how to reach you.</p>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
                  placeholder="(239) 555-0123"
                />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.smsConsent}
                  onChange={(e) => update("smsConsent", e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                <span className="text-[11px] text-gray-400 leading-relaxed">
                  You may send me messages via text related to the services. Message and data rates may apply. Reply STOP to opt out.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Step 2: Where */}
        {step === 2 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">Where Are You Moving From?</h3>
            <p className="text-gray-400 text-sm mb-5">Enter your current address.</p>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Address *</label>
              <input
                type="text"
                value={form.fromAddress}
                onChange={(e) => update("fromAddress", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
                placeholder="Start typing your address..."
                id="from-address-input"
              />
            </div>

            {/* Continue online or call me */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => { setMode("online"); setStep(3); }}
                disabled={!canNext()}
                className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue Online
              </button>
              <button
                onClick={() => { setMode("call"); setStep(3 as Step); }}
                disabled={!canNext()}
                className="w-full py-2.5 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Call Me Now
              </button>
            </div>
            <div className="mt-3">
              <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-gray-600 transition">
                ← Back
              </button>
            </div>
            <style>{`.estimate-next-step-2 { display: none; }`}</style>
          </div>
        )}

        {/* Step 3: When - Calendar */}
        {step === 3 && mode === "online" && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">When Are You Moving?</h3>
            <p className="text-gray-400 text-sm mb-5">Pick your preferred date.</p>
            <CalendarPicker value={form.moveDate} onChange={(v) => update("moveDate", v)} />
            {form.moveDate && (
              <p className="text-center text-sm text-primary font-medium mt-3">
                Selected: {new Date(form.moveDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
              </p>
            )}
          </div>
        )}

        {/* Step 4: Building type */}
        {step === 4 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">What Type of Building?</h3>
            <p className="text-gray-400 text-sm mb-5">Select your property type.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "house", label: "House", icon: "🏠" },
                { value: "condo", label: "Condo", icon: "🏢" },
                { value: "apartment", label: "Apartment", icon: "🏬" },
                { value: "storage", label: "Storage", icon: "📦" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("buildingType", opt.value)}
                  className={`py-3.5 px-4 rounded-xl border-2 font-medium transition text-center text-sm ${
                    form.buildingType === opt.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <div className="text-2xl mb-1">{opt.icon}</div>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Bedrooms */}
        {step === 5 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">How Many Bedrooms?</h3>
            <p className="text-gray-400 text-sm mb-5">Helps us estimate your move size.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "studio", label: "Studio" },
                { value: "1", label: "1 Bed" },
                { value: "2", label: "2 Bed" },
                { value: "3+", label: "3+ Bed" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("bedrooms", opt.value)}
                  className={`py-3.5 px-4 rounded-xl border-2 font-medium transition text-center text-sm ${
                    form.bedrooms === opt.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Destination */}
        {step === 6 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-dark mb-1">Where Are You Moving To?</h3>
            <p className="text-gray-400 text-sm mb-5">Your new address.</p>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Address *</label>
              <input
                type="text"
                value={form.toAddress}
                onChange={(e) => update("toAddress", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
                placeholder="Start typing your destination address..."
                id="to-address-input"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step !== 2 && (
          <div className={`max-w-md mx-auto mt-6 flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
            {step > 1 && (
              <button
                onClick={() => setStep((step - 1) as Step)}
                className="text-xs text-gray-400 hover:text-gray-600 transition"
              >
                ← Back
              </button>
            )}
            <button
              onClick={() => setStep((step + 1) as Step)}
              disabled={!canNext()}
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === 6 ? "Get My Estimate" : step === 1 ? "Next" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
