import { cn } from "@/utils/shadcn-utils";
import { ReactNode } from "react";

interface IconTextProps {
  icon: ReactNode;
  text: string;
  className?: string;
  textClassName?: string;
}

export default function IconText({
  icon,
  text,
  className,
  textClassName,
}: IconTextProps) {
  return (
    <div className={cn("inline-flex items-center gap-1 self-start", className)}>
      {icon}
      <p className={textClassName}>{text}</p>
    </div>
  );
}
