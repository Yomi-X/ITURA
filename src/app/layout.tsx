import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fraunces = localFont({
  src: "./fonts/Fraunces-Variable.ttf",
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const dmSans = localFont({
  src: "./fonts/DM-Sans-Variable.ttf",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  title: "ÌTURA Coffee & Comfort | Abuja",
  description:
    "Coffee. Comfort. Community. Discover your cozy corner at ÌTURA Coffee & Comfort in Abuja, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
