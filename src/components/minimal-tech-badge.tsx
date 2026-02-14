import type { Tech } from "@/types/tech";
import { cn } from "@/utils/shadcn-utils";
import Dot from "./dot";
import { Badge } from "./ui/badge";

type MinimalTechBadgeProps = {
  tech: Tech;
  className?: string;
};

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
      <Dot style={{ backgroundColor: color }} />
      {name}
    </Badge>
  );
}
