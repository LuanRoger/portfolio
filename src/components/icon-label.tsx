import { cn } from "@/utils/shadcn-utils";

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
    <div className={cn("flex flex-row items-center gap-1", className)}>
      <span>{icon}</span>
      {children}
    </div>
  );
}
