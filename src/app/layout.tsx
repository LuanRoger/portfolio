import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Background } from "@/components/background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

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

const dancingScript = localFont({
  src: "./fonts/DancingScript.ttf",
  variable: "--font-dancing-script",
  weight: "400",
});

const jacquardaBastarda = localFont({
  src: "./fonts/JacquardaBastarda.ttf",
  variable: "--font-jacquarda-bastarda",
  weight: "400",
});

const vt323 = localFont({
  src: "./fonts/VT323.ttf",
  variable: "--font-vt-323",
  weight: "400",
});

const yellowtail = localFont({
  src: "./fonts/Yellowtail.ttf",
  variable: "--font-yellowtail",
  weight: "400",
});

const ubuntuMono = localFont({
  src: [
    {
      path: "./fonts/UbuntuMono/UbuntuMono-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/UbuntuMono/UbuntuMono-Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/UbuntuMono/UbuntuMono-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/UbuntuMono/UbuntuMono-BoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-ubuntu-mono",
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
        className={`${geistSans.variable} ${commitMono.variable} ${dancingScript.variable} ${jacquardaBastarda.variable} ${vt323.variable} ${yellowtail.variable} ${ubuntuMono.variable} p-1 dark bg-background`}
      >
        <main className="relative z-10">{children}</main>
        <Background />
      </body>
    </html>
  );
}
