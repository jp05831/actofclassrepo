"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface BookingData {
  // Step 1: Service Location
  address: string;
  apartment: string;
  isBusiness: boolean;
  manualCity: string;
  manualZip: string;
  manualAddress: string;
  useManualAddress: boolean;

  // Step 2: Contact
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  optInOffers: boolean;
  optInTexts: boolean;

  // Step 3: Booking method
  bookingMethod: "online" | "call" | "";

  // Step 4: Move date
  moveDate: string;

  // Step 5: Move details
  propertyType: "apartment" | "house" | "business" | "storage" | "";
  floorLevel: string;
  bedrooms: string;

  // Step 6: Destination
  destAddress: string;
  destApartment: string;
  destManualAddress: string;
  destManualCity: string;
  destManualState: string;
  destManualZip: string;
  destUseManual: boolean;
}

const defaultData: BookingData = {
  address: "",
  apartment: "",
  isBusiness: false,
  manualCity: "",
  manualZip: "",
  manualAddress: "",
  useManualAddress: false,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  optInOffers: false,
  optInTexts: true,
  bookingMethod: "",
  moveDate: "",
  propertyType: "",
  floorLevel: "",
  bedrooms: "",
  destAddress: "",
  destApartment: "",
  destManualAddress: "",
  destManualCity: "",
  destManualState: "",
  destManualZip: "",
  destUseManual: false,
};

interface BookingContextType {
  data: BookingData;
  update: (fields: Partial<BookingData>) => void;
  reset: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BookingData>(defaultData);

  const update = (fields: Partial<BookingData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const reset = () => setData(defaultData);

  return (
    <BookingContext.Provider value={{ data, update, reset }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
