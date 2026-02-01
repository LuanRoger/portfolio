import { projects } from "@/constants/projects";
import ProjectListItem from "./project-list-item";

export default function MyProjectsList() {
  return (
    <div className="mx-auto flex flex-col gap-5">
      {projects.map((project, index) => {
        return (
          <ProjectListItem
            key={`${project.title}-list-item-${index}`}
            project={project}
          />
        );
      })}
    </div>
  );
}
