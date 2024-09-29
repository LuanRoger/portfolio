import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";
import TechStack from "@/components/sections/tech-stack";
import { Separator } from "@/components/ui/separator";
import AboutSection from "@/components/sections/about-section";
import NavigationHeader from "@/components/sections/navigation-header";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="relative rounded-md p-4 border border-border w-3/5 z-20 overflow-clip">
      <div className="space-y-2">
        <NameHeader />
        <TechStack />
        <Separator />
        <NavigationHeader />
        <AboutSection />
        <ProjectsSection />
      </div>
      <NoiseContainer className="rounded-md" />
    </div>
  );
}
