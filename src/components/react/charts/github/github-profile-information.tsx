import { BookIcon, Code2Icon, StarIcon, UsersIcon } from "lucide-react";
import { DateTime } from "luxon";
import { Avatar, AvatarImage } from "@/components/react/ui/avatar";
import type { GitHubUser } from "@/types/github";

type GitHubProfileInformationProps = {
  profileData: GitHubUser;
  stargazersCount: number;
};

export default function GitHubProfileInformation({
  profileData,
  stargazersCount,
}: GitHubProfileInformationProps) {
  const {
    avatarUrl,
    name,
    login,
    publicRepos,
    followers,
    htmlUrl,
    publicGists,
    createdAt,
  } = profileData;

  const createdAtDateTime = DateTime.fromISO(createdAt);
  const now = DateTime.utc();
  const creationYearsAgo = Math.floor(
    now.diff(createdAtDateTime, "years").years
  );
  const formattedCreatedAt = createdAtDateTime.toFormat("yyyy/MM/dd");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-evenly gap-2 lg:flex-row">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="size-24">
            <AvatarImage src={avatarUrl} />
          </Avatar>
          <div>
            <a
              className="hover:underline"
              href={htmlUrl}
              rel="noopener"
              target="_blank"
            >
              <h3 className="font-semibold text-4xl">{name}</h3>
            </a>
            <p className="font-mono text-muted-foreground">{login}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="items-center-safe inline-flex justify-center gap-1 font-bold">
            <BookIcon className="size-4" />
            {publicRepos} Repositories
          </span>
          <span className="items-center-safe inline-flex justify-center gap-1 font-bold">
            <UsersIcon className="size-4" />
            {followers} Followers
          </span>
          <span className="items-center-safe inline-flex justify-center gap-1 font-bold">
            <StarIcon className="size-4" />
            {stargazersCount} Stars
          </span>
          <span className="items-center-safe inline-flex justify-center gap-1 font-bold">
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
