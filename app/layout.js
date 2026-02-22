import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
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
    <ClerkProvider
      signInFallbackRedirectUrl="/feed"
      signUpFallbackRedirectUrl="/feed"
      signInForceRedirectUrl="/feed"
      signUpForceRedirectUrl="/feed"
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased pt-5`}
        >
          <Navbar />
          <main className="min-h-screen pb-16 md:pb-0 pt-0 md:pt-16">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
