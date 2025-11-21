"use client";

import { cn } from "@/utils/shadcn-utils";

export default function BentoProjectsGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col gap-5 md:grid md:max-w-7xl md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
