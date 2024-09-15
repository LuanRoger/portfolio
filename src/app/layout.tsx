import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QuickContactDialog from "@/components/quick-contact-dialog";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LR Portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-1 dark`}
      >
        <header className="flex flex-row-reverse p-2">
          <QuickContactDialog />
        </header>
        {children}
      </body>
    </html>
  );
}
