import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const work_sans = Work_Sans({
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Zapmail",
  description: "Zapmail is a modern email automation system made with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_sans.variable} antialiased`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
