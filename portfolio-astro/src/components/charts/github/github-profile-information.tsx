import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { GitHubUser } from "@/types/github";
import { BookIcon, Code2Icon, StarIcon, UsersIcon } from "lucide-react";
import { DateTime } from "luxon";

type GitHubProfileInformationProps = {
  profileData: GitHubUser;
  stargazersCount: number;
}

export default function GitHubProfileInformation({ profileData, stargazersCount }: GitHubProfileInformationProps) {
  const { avatarUrl, name, login, publicRepos, followers, htmlUrl, publicGists, createdAt } = profileData;

  const createdAtDateTime = DateTime.fromISO(createdAt);
  const now = DateTime.utc();
  const creationYearsAgo = Math.floor(now.diff(createdAtDateTime, "years").years);
  const formattedCreatedAt = createdAtDateTime.toFormat("yyyy/MM/dd");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="size-24">
            <AvatarImage src={avatarUrl} />
          </Avatar>
          <div>
            <a
              className="hover:underline"
              href={htmlUrl}
              target="_blank"
              rel="noopener"
            >
              <h3 className="font-semibold text-4xl">{name}</h3>
            </a>
            <p className="text-muted-foreground font-mono">{login}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="inline-flex items-center gap-1 font-bold">
            <BookIcon className="size-4" />
            {publicRepos} Repositories
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <UsersIcon className="size-4" />
            {followers} Followers
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <StarIcon className="size-4" />
            {stargazersCount} Stars
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <Code2Icon className="size-4" />
            {publicGists} Gists
          </span>
        </div>
      </div>
      <p className="self-end text-muted-foreground text-sm">
        Created at {formattedCreatedAt} ({creationYearsAgo} years ago)
      </p>
    </div>
  );
}
