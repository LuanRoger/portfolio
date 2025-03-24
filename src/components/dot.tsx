import { cn } from "@/utils/shadcn-utils";

interface DotProps {
  className?: string;
  animate?: boolean;
  animationClass?: string;
  dotClassName?: string;
  style?: React.CSSProperties | undefined;
}

export default function Dot({
  className,
  animate = false,
  animationClass: animationClassName,
  dotClassName,
  style,
}: DotProps) {
  return (
    <span className={cn("relative flex h-3 w-3", className)}>
      {animate && (
        <span
          className={cn(
            "animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75",
            animationClassName
          )}
        />
      )}
      <span
        className={cn(
          "bg-green-400 shadow-xs rounded-full h-full w-full",
          dotClassName
        )}
        style={style}
      />
    </span>
  );
}
