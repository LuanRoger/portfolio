import type { Tech } from "@/types/tech";
import Link from "./link";
import { Button } from "./ui/button";

interface TechProps {
  tech: Tech;
  index?: number | undefined;
}

export function TechBadge({ tech }: TechProps) {
  const { name, color, link, icon: Icon } = tech;

  return (
    <Button asChild className="bg-transparent" size="sm" variant="outline">
      <Link href={link} isExternal style={{ backgroundColor: `${color}25` }}>
        <Icon fill={color} style={{ width: "1rem", height: "1rem" }} />
        <p>{name}</p>
      </Link>
    </Button>
  );
}
