import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppNeueMontreal = localFont({
  src: "./fonts/PP Neue Montreal-Variable.ttf",
  display: "swap",
  variable: "--font-pp-neue-montreal",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "COAN West Africa Limited | Construction & Engineering",
  description:
    "COAN West Africa Limited - A leading construction company offering integrated solutions in Civil, Electrical, and Mechanical Engineering with 34+ years of excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${ppNeueMontreal.variable} antialiased`}
        >
          <SmoothScroll>
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
