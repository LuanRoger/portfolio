import { Tech } from "@/types/tech";
import { TechBadge } from "./tech-badge";

interface TechGroupProps {
  groupTechs: Tech[];
}

export function TechGroup({ groupTechs }: TechGroupProps) {
  const category = groupTechs[0].category;

  return (
    <>
      <h2 className="font-bold">{category}</h2>
      <div className="flex flex-wrap gap-2">
        {groupTechs.map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
      </div>
    </>
  );
}
