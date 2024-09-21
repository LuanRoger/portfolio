import { cn } from "@/lib/shadcn-utils";

interface GrayniNoiseProps {
  className?: string | undefined;
}

export function NoiseContainer({ className }: GrayniNoiseProps) {
  return (
    <div
      className={cn(
        "absolute isolate h-full w-full top-0 left-0 -z-10 overflow-clip",
        className
      )}
    >
      <div className="noise"></div>
    </div>
  );
}
