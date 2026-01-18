import { Project } from "@/types/project";
import Image from "next/image";
import { GitHubIcon } from "./svg-icons";
import MinimalTechBadge from "./minimal-tech-badge";
import { IconExternalLink } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { cn } from "@/utils/shadcn-utils";
import RepoUpdateBadge, { RepoUpdateBadgeLoading } from "./repo-update-badge";
import Link from "next/link";
import { Suspense } from "react";

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
    !repoName || !githubUrl || !githubUsername
      ? undefined
      : `${githubUrl}/${githubUsername}/${repoName}`;

  return (
    <div
      className={cn(
        "border-border relative flex h-96 flex-col justify-between overflow-clip rounded-xl border",
        className,
      )}
    >
      <div className="absolute inset-0 z-30 flex size-full flex-col justify-between">
        <div className="from-background flex w-full flex-row flex-wrap gap-2 bg-linear-to-b p-2">
          {techStack.map((tech) => (
            <MinimalTechBadge key={tech.name} tech={tech} />
          ))}
        </div>
        <div className="fnoise border-border m-1 flex flex-col gap-2 rounded-md border p-4">
          <h3 className="font-bold">{title}</h3>
          <div className="text-sm font-normal">{description}</div>
          <div className="inline-flex gap-2">
            {repoLink && (
              <Button key={"github"} variant="ghost" asChild>
                <Link
                  href={repoLink}
                  target="_blank"
                  aria-label={`GitHub repository for ${repoName}`}
                >
                  <GitHubIcon className="fill-foreground" />
                  {repoName && (
                    <Suspense fallback={<RepoUpdateBadgeLoading />}>
                      <RepoUpdateBadge
                        repoName={repoName}
                        prefix={
                          <span key={`${repoName}-update-separator`}>•</span>
                        }
                      />
                    </Suspense>
                  )}
                </Link>
              </Button>
            )}
            {link && (
              <Button key={"link"} variant="ghost" size="icon" asChild>
                <Link
                  href={link}
                  target="_blank"
                  aria-label={`Project link to ${title}`}
                >
                  <IconExternalLink className="fill-foreground h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={400}
        unoptimized={isImageAnimated}
        className="absolute inset-0 z-20 h-full w-full object-cover"
      />
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={100}
        unoptimized={isImageAnimated}
        className="absolute inset-0 z-10 h-full w-full object-cover blur-md"
      />
    </div>
  );
}
