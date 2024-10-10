"use client";

import { cn } from "@/lib/shadcn-utils";

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
        "flex flex-col gap-4 lg:max-2xl:grid lg:max-2xl:auto-rows-[18rem] lg:max-2xl:grid-cols-3 lg:max-2xl:max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
