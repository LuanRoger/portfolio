import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";
import TechStack from "@/components/sections/tech-stack";
import { Separator } from "@/components/ui/separator";
import AboutSection from "@/components/sections/about-section";
import NavigationHeader from "@/components/sections/navigation-header";

export default function Home() {
  return (
    <main className="relative rounded-md mx-56 mt-24 p-4 border border-border">
      <div className="space-y-2">
        <NameHeader />
        <TechStack />
        <Separator />
        <NavigationHeader />
        <AboutSection />
      </div>
      <NoiseContainer className="rounded-md" />
    </main>
  );
}
