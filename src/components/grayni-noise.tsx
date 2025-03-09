import { cn } from "@/utils/shadcn-utils";

export type NoiseType = "noise" | "background";

interface GrayniNoiseProps {
  className?: string | undefined;
  type?: NoiseType;
}

export function NoiseContainer({ className, type = "noise" }: GrayniNoiseProps) {
  return (
    <div
      className={cn(
        "absolute isolate h-full w-full top-0 left-0 -z-10",
        className
      )}
    >
      <div className={type}></div>
    </div>
  );
}
