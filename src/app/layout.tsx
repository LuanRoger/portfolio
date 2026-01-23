import Background from "@/components/background";
import { jsonLd } from "@/constants/json-ld";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://luanroger.dev/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
