import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VCAD — Victoria College of Arts and Design",
  description:
    "Victoria College of Arts and Design (VCAD), part of PEN Group. Explore creative courses in fashion, graphic design and business for creatives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-base text-text antialiased">
        {children}
      </body>
    </html>
  );
}
