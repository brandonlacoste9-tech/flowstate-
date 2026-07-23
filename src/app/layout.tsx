import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowstate-design.co"),
  title: {
    default: "Flowstate Design",
    template: "%s · Flowstate Design",
  },
  description:
    "Calm, conversion-focused website design for local businesses, startups, and creatives. Montreal-rooted, bilingual EN/FR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

