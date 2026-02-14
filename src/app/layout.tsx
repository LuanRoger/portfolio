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
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is required for JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
        <div className="relative">
          <main className="z-10 w-full py-0 md:flex md:flex-row md:items-center md:justify-center md:py-4">
            {children}
          </main>
          <Background />
        </div>
      </body>
    </html>
  );
}
