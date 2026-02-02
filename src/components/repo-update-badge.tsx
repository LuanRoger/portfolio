import { cacheLife } from "next/cache";
import type { ReactNode } from "react";
import { getGitHubProfileRepository } from "@/app/actions/github";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

type RepoUpdateBadgeProps = {
  repoName: string;
  prefix?: ReactNode;
};

export default async function RepoUpdateBadge({
  prefix,
  repoName,
}: RepoUpdateBadgeProps) {
  "use cache";
  cacheLife("github");
  const repoInfo = await getGitHubProfileRepository(repoName);

  if (!repoInfo) {
    return null;
  }

  const currentDateTime = Date.now();
  const updatedAt = new Date(repoInfo.updatedAt);
  const wasUpdatedRecently =
    (currentDateTime - updatedAt.getTime()) / (1000 * 60 * 60 * 24) <= 7;

  if (!wasUpdatedRecently) {
    return null;
  }

  return (
    <>
      {prefix}
      <Badge variant="outline">Updated</Badge>
    </>
  );
}

export function RepoUpdateBadgeLoading() {
  return <Skeleton className="h-6 w-16 rounded-full" />;
}
