import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Veterra Global Commodities",
    default: "Veterra Global Commodities — Reliable Supply. Global Reach.",
  },
  description:
    "Veterra Global is a commodity trading company specialising in Agriculture, Energy, Fertilizers, and Industrial Materials. Trusted supply chains across six continents.",
  keywords: [
    "commodity trading",
    "bulk commodities",
    "agricultural commodities",
    "fertilizer supplier",
    "energy commodities",
    "global trade",
  ],
  metadataBase: new URL("https://vetearaglobal.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Veterra Global Commodities",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
