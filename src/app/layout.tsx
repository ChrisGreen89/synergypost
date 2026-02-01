import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SynergyPost™ AI | AI-Powered Thought Leadership",
  description: "Disrupt your LinkedIn with AI-generated thought leadership. Our proprietary SynergyEngine™ helps you become the person who is posting.",
  metadataBase: new URL("https://synergypost.netlify.app"),
  keywords: [
    "thought leadership",
    "LinkedIn",
    "AI",
    "content generator",
    "synergy",
    "disruption",
    "startup",
    "entrepreneur",
  ],
  authors: [{ name: "Definitely Real AI Corp" }],
  creator: "SynergyPost™ AI",
  publisher: "Definitely Real AI Corp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synergypost.netlify.app",
    siteName: "SynergyPost™ AI",
    title: "47 VCs rejected this bot. Now it's disrupting content.",
    description:
      "I forced a bot to watch 1,000 hours of LinkedIn posts. Generate AI-powered thought leadership that helps you become the person who is posting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SynergyPost™ AI | 47 VCs rejected this bot",
    description:
      "I forced a bot to watch 1,000 hours of LinkedIn posts. Now it's disrupting content. No thoughts required.",
    creator: "@KeatonPatti",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
