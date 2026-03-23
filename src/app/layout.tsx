import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AvroClaw — White-Glove OpenClaw AI Agent Setup",
  description:
    "AvroClaw handles the setup, security hardening, and ongoing maintenance of your OpenClaw AI agent — so you just message your bot.",
  keywords: [
    "OpenClaw",
    "AI agent",
    "setup",
    "automation",
    "white-glove",
    "AvroClaw",
  ],
  openGraph: {
    title: "AvroClaw — White-Glove OpenClaw AI Agent Setup",
    description:
      "White-glove OpenClaw setup. Security-hardened. Production-ready. You just message your bot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunitoSans.variable} font-sans bg-[#09090B] text-[#FAFAFA] antialiased`}>
        {children}
      </body>
    </html>
  );
}
