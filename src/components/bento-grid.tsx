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
        "mx-auto flex flex-col gap-4 lg:max-2xl:grid lg:max-2xl:max-w-7xl lg:max-2xl:auto-rows-[18rem] lg:max-2xl:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
