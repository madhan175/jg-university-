import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JG University | Excellence by Choice",
  description: "Industry-integrated global education. Discover our schools, programmes, and global collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen bg-black text-white selection:bg-jg-red/30">
        {children}
      </body>
    </html>
  );
}
