"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const stepLabels = ["Contact", "Location", "Date", "Building", "Size", "Destination"];

export default function EstimateWizard() {
  const [step, setStep] = useState<Step>(1);
  const [mode, setMode] = useState<"online" | "call" | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    smsConsent: false,
    fromAddress: "",
    fromZip: "",
    moveDate: "",
    buildingType: "",
    bedrooms: "",
    toAddress: "",
    toZip: "",
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const totalSteps = mode === "call" ? 2 : 6;

  // Call summary page
  if (mode === "call" && step > 2) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 -mt-8 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-dark mb-4">We&apos;ll Call You Shortly</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left space-y-2">
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Name:</span> {form.name}</p>
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Phone:</span> {form.phone}</p>
            <p className="text-sm text-gray-600"><span className="font-medium text-dark">Email:</span> {form.email}</p>
            {form.fromZip && <p className="text-sm text-gray-600"><span className="font-medium text-dark">Moving from:</span> {form.fromAddress || form.fromZip}</p>}
          </div>
          <p className="text-gray-600 leading-relaxed">
            You&apos;ll be receiving a quick call from Act of Class Moving within the next few minutes to discuss your move and provide your personalized quote.
          </p>
        </div>
      </div>
    );
  }

  // Online submission complete
  if (mode === "online" && step > 6) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 -mt-8 relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
          <p className="text-gray-600">We&apos;ve received your information and will get back to you with a personalized estimate shortly.</p>
        </div>
      </div>
    );
  }

  const canNext = () => {
    if (step === 1) return form.name && form.email && form.phone;
    if (step === 2) return form.fromZip;
    if (step === 3) return form.moveDate;
    if (step === 4) return form.buildingType;
    if (step === 5) return form.bedrooms;
    if (step === 6) return form.toZip;
    return false;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 -mt-8 relative z-10 max-w-4xl mx-auto overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {stepLabels.slice(0, totalSteps).map((label, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === step;
            const isDone = stepNum < step;
            return (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
                    isDone
                      ? "bg-primary text-white"
                      : isActive
                      ? "bg-primary text-white ring-2 ring-primary/30"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isDone ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                <span className={`hidden sm:inline text-xs font-medium ${isActive ? "text-dark" : "text-gray-400"}`}>
                  {label}
                </span>
                {i < totalSteps - 1 && (
                  <div className={`hidden sm:block w-8 h-0.5 mx-1 ${isDone ? "bg-primary" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Step 1: Contact Info */}
        {step === 1 && (
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">Get Your Free Estimate</h3>
            <p className="text-gray-500 text-sm mb-6">Tell us how to reach you.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="(239) 555-0123"
                />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.smsConsent}
                  onChange={(e) => update("smsConsent", e.target.checked)}
                  className="mt-1 accent-primary"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  You may send me messages via text related to the services. Message and data rates may apply. Reply STOP to opt out.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Step 2: Where do you need us? */}
        {step === 2 && (
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">Where Will You Need Us?</h3>
            <p className="text-gray-500 text-sm mb-6">Enter the address you&apos;re moving from.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  value={form.fromAddress}
                  onChange={(e) => update("fromAddress", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="Start typing your address..."
                  id="from-address-input"
                />
                <p className="text-xs text-gray-400 mt-1">Google address autocomplete will be connected here</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                <input
                  type="text"
                  value={form.fromZip}
                  onChange={(e) => update("fromZip", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="33907"
                  maxLength={10}
                />
              </div>
            </div>

            {/* Continue online or call me */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMode("online");
                  setStep(3);
                }}
                disabled={!canNext()}
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue Online
              </button>
              <button
                onClick={() => {
                  setMode("call");
                  setStep(3 as Step);
                }}
                disabled={!canNext()}
                className="w-full py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Call Me Now
              </button>
            </div>
            <div className="mt-4">
              <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 transition">
                ← Back
              </button>
            </div>
            {/* hide the generic next button for step 2 */}
            <style>{`.estimate-next-step-2 { display: none; }`}</style>
          </div>
        )}

        {/* Step 3: When */}
        {step === 3 && mode === "online" && (
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">When Are You Looking to Move?</h3>
            <p className="text-gray-500 text-sm mb-6">Select your preferred moving date.</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Moving Date *</label>
              <input
                type="date"
                value={form.moveDate}
                onChange={(e) => update("moveDate", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
              />
            </div>
          </div>
        )}

        {/* Step 4: Building type */}
        {step === 4 && (
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">What Type of Building Is This?</h3>
            <p className="text-gray-500 text-sm mb-6">Select the type of property you&apos;re moving from.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "house", label: "House" },
                { value: "condo", label: "Condo" },
                { value: "apartment", label: "Apartment" },
                { value: "storage", label: "Storage" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("buildingType", opt.value)}
                  className={`py-4 px-4 rounded-lg border-2 font-medium transition text-center ${
                    form.buildingType === opt.value
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

        {/* Step 5: Bedrooms */}
        {step === 5 && (
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">How Many Bedrooms?</h3>
            <p className="text-gray-500 text-sm mb-6">This helps us estimate the size of your move.</p>
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
                  className={`py-4 px-4 rounded-lg border-2 font-medium transition text-center ${
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
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-dark mb-1">Where Are You Moving To?</h3>
            <p className="text-gray-500 text-sm mb-6">Enter the address of your new location.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  value={form.toAddress}
                  onChange={(e) => update("toAddress", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="Start typing your address..."
                  id="to-address-input"
                />
                <p className="text-xs text-gray-400 mt-1">Google address autocomplete will be connected here</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                <input
                  type="text"
                  value={form.toZip}
                  onChange={(e) => update("toZip", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  placeholder="33907"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons (generic, hidden for step 2) */}
        {step !== 2 && (
          <div className={`max-w-lg mx-auto mt-8 flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
            {step > 1 && (
              <button
                onClick={() => setStep((step - 1) as Step)}
                className="text-sm text-gray-400 hover:text-gray-600 transition"
              >
                ← Back
              </button>
            )}
            <button
              onClick={() => setStep((step + 1) as Step)}
              disabled={!canNext()}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === 6 ? "Get My Estimate" : step === 1 ? "Next" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
