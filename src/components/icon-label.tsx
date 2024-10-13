import { cn } from "@/lib/shadcn-utils";

interface AnimatedIconLabelProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export default function IconLabel({
  children,
  icon,
  className,
}: AnimatedIconLabelProps) {
  return (
    <div className={cn("flex flex-row gap-1 items-center", className)}>
      <span>{icon}</span>
      {children}
    </div>
  );
}
