import type { Metadata } from "next";
import { League_Spartan, Space_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import DynamicBackground from "@/components/DynamicBackground";

const font = League_Spartan({
  weight: ["400"],
  subsets: ["latin"],
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "DP Liyanagama-Creative Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${spaceMono.variable} antialiased bg-[#0d0d1f]`}>
        <DynamicBackground />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
