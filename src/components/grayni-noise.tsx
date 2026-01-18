import { cn } from "@/utils/shadcn-utils";

export type NoiseType = "noise" | "background";

interface GrayniNoiseProps {
  className?: string | undefined;
  type?: NoiseType;
}

export function NoiseContainer({
  className,
  type = "noise",
}: GrayniNoiseProps) {
  return (
    <div
      className={cn("absolute top-0 left-0 isolate -z-10 size-full", className)}
    >
      <div className={type}></div>
    </div>
  );
}
