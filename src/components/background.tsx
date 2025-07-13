import { cn } from "@/utils/shadcn-utils";
import { NoiseContainer } from "./grayni-noise";

interface BackgroundProps {
  className?: string | undefined;
}

export default function Background({ className }: BackgroundProps) {
  return (
    <div className={cn("absolute top-0 h-full w-full", className)}>
      <NoiseContainer type="background" />
    </div>
  );
}
