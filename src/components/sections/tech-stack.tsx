import { TechCategory } from "@/lib/types/tech";
import { myStack } from "@/lib/my-stack";
import { TechGroup } from "../tech-group";

export default function TechStack() {
  const langauges = myStack.filter(
    (tech) => tech.category === TechCategory.Language
  );
  const frameworks = myStack.filter(
    (tech) => tech.category === TechCategory.Framework
  );
  const tools = myStack.filter((tech) => tech.category === TechCategory.Tool);
  const databases = myStack.filter(
    (tech) => tech.category === TechCategory.Database
  );
  const clouds = myStack.filter((tech) => tech.category === TechCategory.Cloud);
  const others = myStack.filter((tech) => tech.category === TechCategory.Other);

  return (
    <section className="flex flex-col gap-2">
      <TechGroup groupTechs={langauges} />
      <TechGroup groupTechs={frameworks} />
      <TechGroup groupTechs={tools} />
      <TechGroup groupTechs={databases} />
      <TechGroup groupTechs={clouds} />
      <TechGroup groupTechs={others} />
    </section>
  );
}
