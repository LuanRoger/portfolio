import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main className="relative rounded-md mx-56 mt-24 p-4 bg-card border border-border">
      <div className="z-30">
        <NameHeader />
        <TechStack />
      </div>
      <NoiseContainer className="rounded-md" />
    </main>
  );
}
