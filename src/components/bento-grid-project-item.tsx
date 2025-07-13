import { Project } from "@/types/project";
import Image from "next/image";
import { GitHubIcon } from "./svg-icons";
import MinimalTechBadge from "./minimal-tech-badge";
import BentoGridItem from "./bento-grid-item";
import { IconExternalLink } from "@tabler/icons-react";
import { Button } from "./ui/button";

interface BentoGridProjectItemProps {
  project: Project;
  className?: string | undefined;
}

export default function BentoGridProjectItem({
  project,
  className,
}: BentoGridProjectItemProps) {
  const { title, imageSrc, imageAlt, description, link, repoLink, techStack } =
    project;

  return (
    <BentoGridItem
      className={className}
      title={title}
      support={
        <>
          {techStack.map((tech) => (
            <MinimalTechBadge key={tech.name} tech={tech} />
          ))}
        </>
      }
      links={[
        repoLink && (
          <Button key={"github"} variant="ghost" size="icon">
            <a href={repoLink} target="_blank">
              <GitHubIcon className="fill-foreground h-5 w-5" />
            </a>
          </Button>
        ),
        link && (
          <Button key={"link"} variant="ghost" size="icon">
            <a href={link} target="_blank">
              <IconExternalLink className="fill-foreground h-5 w-5" />
            </a>
          </Button>
        ),
      ]}
      description={
        <div className="flex flex-col gap-4">
          <p>{description}</p>
        </div>
      }
      banner={
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      }
    />
  );
}
