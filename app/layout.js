import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SocialApp - Connect with the World",
  description:
    "A modern social media platform for connecting with friends and sharing moments",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="min-h-screen pb-16 md:pb-0 pt-0 md:pt-16 pb-safe">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
