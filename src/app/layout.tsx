import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Act of Class Moving & Storage | Trusted Movers in Fort Myers, FL",
    template: "%s | Act of Class Moving & Storage",
  },
  description:
    "Family-owned moving company in Fort Myers, FL with 20+ years of experience. Residential, apartment, furniture, luxury, and senior moving services. BBB accredited. Free estimates.",
  keywords: [
    "movers Fort Myers FL",
    "moving company Fort Myers",
    "local movers Southwest Florida",
    "residential moving Fort Myers",
    "Act of Class Moving",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-dark`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
