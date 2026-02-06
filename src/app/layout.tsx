import type { Metadata } from "next";
import { Inter, Space_Mono, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "x0 Protocol - Autonomous Agent Payments on Solana",
  description:
    "x0 is a decentralized payment infrastructure for autonomous AI agents. Programmable spending policies, conditional escrow, on-chain reputation, and HTTP 402 payment negotiation built on Solana.",
  keywords: [
    "x0 protocol",
    "autonomous agents",
    "AI payments",
    "Solana",
    "blockchain",
    "escrow",
    "reputation",
    "HTTP 402",
    "stablecoins",
    "USDC",
  ],
  authors: [{ name: "x0 Protocol Contributors" }],
  openGraph: {
    title: "x0 Protocol - Autonomous Agent Payments",
    description:
      "Programmable payment infrastructure for AI agents on Solana",
    url: "https://x0protocol.dev",
    siteName: "x0 Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "x0 Protocol",
    description: "Autonomous Agent Payments on Solana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} ${playfair.variable} antialiased bg-background-dark text-text-dark`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
