import { Tech } from "@/types/tech";
import { Badge } from "./ui/badge";
import Dot from "./dot";
import { cn } from "@/utils/shadcn-utils";

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
      className={cn("w-fit cursor-default gap-1", className)}
      variant={"outline"}
    >
      <Dot className="h-2 w-2" style={{ backgroundColor: color }} />
      {name}
    </Badge>
  );
}
