import type { Metadata } from "next";
import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";
import TechStack from "@/components/sections/tech-stack";
import { Separator } from "@/components/ui/separator";
import AboutSection from "@/components/sections/about-section";
import NavigationHeader from "@/components/sections/navigation-header";
import ProjectsSection from "@/components/sections/projects-section";
import ExpirienceSection from "@/components/sections/expirience-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import CertificationsSection from "@/components/sections/certifications-section";

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
    <div className="border-border relative z-20 overflow-clip shadow-inner shadow-zinc-600 md:max-2xl:w-3/5 md:max-2xl:rounded-md md:max-2xl:border">
      <div className="space-y-2 p-4">
        <NameHeader />
        <TechStack />
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
