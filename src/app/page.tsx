import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";

export default function Home() {
  return (
    <main className="relative rounded-md mx-56 mt-24 p-4">
      <div className="z-30">
        <NameHeader />
      </div>
      <NoiseContainer className="rounded-md" />
    </main>
  );
}
