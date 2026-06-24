import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteTitle = "Lumen Dent — Caring for Your Smile, One Visit at a Time";
const siteDescription =
  "Lumen Dental — modern, comfortable dental care for the whole family. Orthodontics, cosmetic dentistry, restoration, and pediatric care.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumendental.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/images/lumendental.png",
        width: 1200,
        height: 630,
        alt: "Lumen Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/lumendental.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${hanken.variable} font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
