import type { Metadata } from "next";
import { NoiseContainer } from "@/components/grayni-noise";
import AboutSection from "@/components/sections/about-section";
import CertificationsSection from "@/components/sections/certifications-section";
import ContactSection from "@/components/sections/contact-section";
import ExpirienceSection from "@/components/sections/expirience-section";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import NavigationHeader from "@/components/sections/navigation-header";
import ProjectsSection from "@/components/sections/projects-section";
import { Separator } from "@/components/ui/separator";

const title = "Luan Roger";
export const metadata: Metadata = {
  title,
  description:
    "I'm Luan Roger, a software engineer and full-stack developer. I'm currently working at Aramis. I've been developing open-source projects for several years.",
  metadataBase: "https://www.luanroger.dev",
  creator: "Luan Roger",
  formatDetection: {
    telephone: false,
  },
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
    "next.js",
  ],
  openGraph: {
    title,
    description:
      "Full-stack software engineer building web apps, APIs, and open-source tools.",
    type: "website",
    siteName: "Luan Roger",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <div className="relative z-20 overflow-clip border-border md:w-3/5 md:rounded-md md:border">
      <div className="space-y-2 p-4">
        <HeroSection />
        <Separator />
        <NavigationHeader />
        <AboutSection />
        <ProjectsSection />
        <ExpirienceSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <FooterSection />
      <NoiseContainer className="rounded-md" />
    </div>
  );
}
