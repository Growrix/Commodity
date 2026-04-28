import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "GlobalTrade Commodities — International Commodity Trading",
    template: "%s | GlobalTrade Commodities",
  },
  description:
    "GlobalTrade Commodities is a global B2B commodity trading company specialising in Agriculture, Energy, Fertilizers, and Industrial Materials. Trusted sourcing, transparent trade.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GlobalTrade Commodities",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
