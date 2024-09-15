//From https://www.luxeui.com/ui/badge-rotate-border

import { cn } from "@/lib/shadcn-utils";

interface AnimatedBadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnimatedBadge({
  children,
  className,
}: AnimatedBadgeProps) {
  return (
    <div className="relative inline-flex overflow-hidden rounded-md p-px">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center rounded-md bg-neutral-950 px-3 py-1 text-xs text-primary-foreground font-semibold backdrop-blur-3xl",
          className
        )}
      >
        {children}
      </span>
    </div>
  );
}
