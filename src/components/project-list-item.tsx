import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Project } from "@/types/project";
import { cn } from "@/utils/shadcn-utils";
import MinimalTechBadge from "./minimal-tech-badge";
import RepoUpdateBadge, { RepoUpdateBadgeLoading } from "./repo-update-badge";
import { GitHubIcon } from "./svg-icons";
import { Button } from "./ui/button";

interface ProjectListItemProps {
  project: Project;
  className?: string | undefined;
}

export default function ProjectListItem({
  project,
  className,
}: ProjectListItemProps) {
  const { title, image, description, link, repoName, techStack } = project;
  const { src: imageSrc, alt: imageAlt, animated: isImageAnimated } = image;
  const githubUrl = process.env.GITHUB_URL;
  const githubUsername = process.env.GITHUB_USERNAME;

  const repoLink =
    repoName && githubUrl && githubUsername
      ? `${githubUrl}/${githubUsername}/${repoName}`
      : undefined;

  return (
    <div
      className={cn(
        "relative flex h-96 flex-col justify-between overflow-clip rounded-xl border border-border",
        className
      )}
    >
      <div className="absolute inset-0 z-30 flex size-full flex-col justify-between">
        <div className="flex w-full flex-row flex-wrap gap-2 bg-linear-to-b from-background p-2">
          {techStack.map((tech) => (
            <MinimalTechBadge key={tech.name} tech={tech} />
          ))}
        </div>
        <div className="fnoise m-1 flex flex-col gap-2 rounded-md border border-border p-4">
          <h3 className="font-bold">{title}</h3>
          <div className="font-normal text-sm">{description}</div>
          <div className="inline-flex gap-2">
            {repoLink && (
              <Button asChild key={"github"} variant="ghost">
                <Link
                  aria-label={`GitHub repository for ${repoName}`}
                  href={repoLink}
                  target="_blank"
                >
                  <GitHubIcon className="fill-foreground" />
                  {repoName && (
                    <Suspense fallback={<RepoUpdateBadgeLoading />}>
                      <RepoUpdateBadge
                        prefix={
                          <span key={`${repoName}-update-separator`}>•</span>
                        }
                        repoName={repoName}
                      />
                    </Suspense>
                  )}
                </Link>
              </Button>
            )}
            {link && (
              <Button asChild key={"link"} size="icon" variant="ghost">
                <Link
                  aria-label={`Project link to ${title}`}
                  href={link}
                  target="_blank"
                >
                  <IconExternalLink className="h-5 w-5 fill-foreground" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      <Image
        alt={imageAlt}
        className="absolute inset-0 z-20 h-full w-full object-cover"
        height={400}
        src={imageSrc}
        unoptimized={isImageAnimated}
        width={500}
      />
      <Image
        alt={imageAlt}
        className="absolute inset-0 z-10 h-full w-full object-cover blur-md"
        height={100}
        src={imageSrc}
        unoptimized={isImageAnimated}
        width={100}
      />
    </div>
  );
}
