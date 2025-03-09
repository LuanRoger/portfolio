import { cn } from "@/utils/shadcn-utils";
import { IconLoader2 } from "@tabler/icons-react";

interface LoadingIconProps {
  className?: string;
  size?: number;
}

export default function LoadingIcon({ className, size }: LoadingIconProps) {
  return <IconLoader2 className={cn("animate-spin", className)} size={size} />;
}
