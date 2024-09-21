import NameHeader from "@/components/name-header";
import { NoiseContainer } from "@/components/grayni-noise";

export default function Home() {
  return (
      <div className="relative mx-56 rounded">
        <div className="z-30">
          <NameHeader />
        </div>
        <NoiseContainer/>
      </div>
  );
}
