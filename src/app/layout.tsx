import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QuickContactDialog from "@/components/quick-contact-dialog";
import { Background } from "@/components/background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commitMono = localFont({
  src: [
    {
      path: "./fonts/CommitMono/CommitMono-400-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/CommitMono/CommitMono-700-Regular.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/CommitMono/CommitMono-400-Italic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/CommitMono/CommitMono-700-Italic.otf",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-commit-mono",
  weight: "400 700",
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
        className={`${geistSans.variable} ${commitMono.variable} antialiased p-1 dark bg-background`}
      >
        <header className="flex flex-row-reverse p-2">
          <QuickContactDialog />
        </header>
        <main className="relative z-10">{children}</main>
        <Background />
      </body>
    </html>
  );
}
