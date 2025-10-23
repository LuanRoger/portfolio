import { useMemo } from "react";
import BentoProjectsGrid from "./bento-grid";
import BentoGridProjectItem from "./bento-grid-project-item";
import { projects } from "@/constants/projects";

export default function MyProjectsGrid() {
  const gridClassNames = useMemo(
    () => [
      "col-span-2",
      "",
      "",
      "",
      "row-span-2",
      "col-span-2",
      "",
      "col-span-2",
      "",
      "",
      "",
      "col-span-3",
      "col-span-2",
      "",
    ],
    [],
  );

  return (
    <BentoProjectsGrid>
      {projects.map((project, index) => {
        const className = gridClassNames[index] || undefined;

        return (
          <BentoGridProjectItem
            key={index}
            className={className}
            project={project}
          />
        );
      })}
    </BentoProjectsGrid>
  );
}
