import { TechCategory } from "@/types/tech";
import { myStack } from "@/constants/my-stack";
import { TechGroup } from "../tech-group";

export default function TechStack() {
  const techsByCategory = myStack
    .filter((tech) => !tech.hide)
    .reduce(
      (acc, tech) => {
        if (!acc[tech.category]) {
          acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
      },
      {} as Record<TechCategory, typeof myStack>,
    );

  return (
    <section className="flex flex-col gap-2">
      {Object.values(TechCategory).map((category) => {
        const groupTechs = techsByCategory[category];
        if (!groupTechs) return null;
        return <TechGroup key={category} groupTechs={groupTechs} />;
      })}
    </section>
  );
}
