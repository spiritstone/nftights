import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppKitProvider } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-full bg-nft_darkPurple text-white`}
      >
        <Navbar />
        <AppKitProvider>
          {children}
        </AppKitProvider>
        <footer className="fixed w-full text-center p-4 bg-nft_darkPurple text-white bottom-0">
          &copy; {new Date().getFullYear()} NFTights. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
