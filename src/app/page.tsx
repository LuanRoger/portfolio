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

export default function Home() {
  return (
    <div
      className="relative md:max-2xl:rounded-md 
    md:max-2xl:border border-border md:max-2xl:w-3/5 z-20
    overflow-clip"
    >
      <div className="space-y-2 p-4">
        <NameHeader />
        <TechStack />
        <Separator />
        <NavigationHeader />
        <AboutSection />
        <ProjectsSection />
        <ExpirienceSection />
        <ContactSection />
      </div>
      <FooterSection />
      <NoiseContainer className="rounded-md" />
    </div>
  );
}
