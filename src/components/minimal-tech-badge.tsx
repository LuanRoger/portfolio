import { Tech } from "@/lib/types/tech";
import { Badge } from "./ui/badge";
import Dot from "./dot";
import { cn } from "@/lib/shadcn-utils";

interface MinimalTechBadgeProps {
  tech: Tech;
  className?: string;
}

export default function MinimalTechBadge({
  tech,
  className,
}: MinimalTechBadgeProps) {
  const { name, color } = tech;

  return (
    <Badge
      className={cn("gap-1 w-fit cursor-default", className)}
      variant={"outline"}
    >
      <Dot className="w-2 h-2" style={{ backgroundColor: color }} />
      {name}
    </Badge>
  );
}
