"use client";

import { ReactNode, useEffect, useState, useTransition } from "react";
import { GitHubRepository } from "@/types/github";
import { getGitHubProfileRepository } from "@/app/actions/github";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

interface RepoUpdateBadgeProps {
  repoName: string;
  prefix?: ReactNode;
}

export default function RepoUpdateBadge({
  prefix,
  repoName,
}: RepoUpdateBadgeProps) {
  const [repoInfo, setRepoInfo] = useState<GitHubRepository | null>(null);
  const [isPending, startAction] = useTransition();

  useEffect(() => {
    startAction(async () => {
      const result = await getGitHubProfileRepository(repoName);
      setRepoInfo(result);
    });
  }, [repoName]);

  if (isPending) {
    return <RepoUpdateBadgeLoading />;
  }

  if (!repoInfo) {
    return null;
  }

  const currentDateTime = new Date().getTime();
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

function RepoUpdateBadgeLoading() {
  return <Skeleton className="h-6 w-4 rounded-full" />;
}
