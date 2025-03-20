import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import Background from "@/components/background";
import "./globals.css";

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
  description: "my portfolio.",
  keywords: [
    "portfolio",
    "web developer",
    "software engineer",
    "full stack",
    "frontend",
    "backend",
    "developer",
    "programmer",
    "engineer",
    "web",
    "software",
  ],
  authors: [{ name: "Luan Roger", url: "https://luanroger.dev" }],
  creator: "Luan Roger",
  publisher: "Luan Roger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${commitMono.variable} ${dancingScript.variable} ${jacquardaBastarda.variable} ${vt323.variable} ${yellowtail.variable} ${ubuntuMono.variable} dark bg-background`}
      >
        <div className="relative">
          <main
            className="md:max-2xl:flex md:max-2xl:flex-row md:max-2xl:justify-center md:max-2xl:items-center 
            w-full py-0 md:max-2xl:py-4 z-10"
          >
            {children}
          </main>
          <Background />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
