import { cn } from "@/utils/shadcn-utils";
import { NoiseContainer } from "./grayni-noise";

interface BackgroundProps {
  className?: string | undefined;
}

export default function Background({ className }: BackgroundProps) {
  return (
    <div className={cn("absolute w-full h-full top-0", className)}>
      <NoiseContainer type="background" />
    </div>
  );
}
