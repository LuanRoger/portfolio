import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Background from "@/components/background";
import { jsonLd } from "@/constants/json-ld";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://luanroger.dev/" rel="canonical" />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
        <div className="relative">
          <main className="z-10 w-full py-0 md:max-2xl:flex md:max-2xl:flex-row md:max-2xl:items-center md:max-2xl:justify-center md:max-2xl:py-4">
            {children}
          </main>
          <Background />
        </div>
      </body>
    </html>
  );
}
