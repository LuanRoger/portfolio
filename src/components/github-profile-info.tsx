import {
  getGithubProfile,
  getGithubProfileRepositories,
} from "@/app/actions/github";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  IconBook2,
  IconCode,
  IconStars,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";
import { cacheLife } from "next/cache";

export default async function GitHubProfileInfo() {
  "use cache";
  cacheLife("days");

  const userData = await getGithubProfile();
  const repositoriesData = await getGithubProfileRepositories();

  if (!userData || !repositoriesData) {
    return <p className="text-red-500">Failed to load GitHub profile.</p>;
  }

  const stargazersCount = repositoriesData.reduce(
    (acc, repo) => acc + repo.stargazersCount,
    0,
  );

  const createdAt = new Date(userData.createdAt);
  const creationYearsAgo = new Date().getFullYear() - createdAt.getFullYear();
  const formattedCreatedAt = createdAt.toLocaleDateString("en-US");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="size-12">
            <AvatarImage src={userData.avatarUrl} />
          </Avatar>
          <div>
            <Link
              href={userData.htmlUrl}
              target="_blank"
              className="hover:underline"
            >
              <h2 className="text-lg font-semibold">{userData.name}</h2>
            </Link>
            <p className="text-sm text-gray-500">{userData.login}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="inline-flex items-center gap-1 font-bold">
            <IconBook2 className="size-4" />
            {userData.publicRepos} Repositories
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <IconUsersGroup className="size-4" />
            {userData.followers} Followers
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <IconStars className="size-4" />
            {stargazersCount} Stars
          </span>
          <span className="inline-flex items-center gap-1 font-bold">
            <IconCode className="size-4" />
            {userData.publicGists} Gists
          </span>
        </div>
      </div>
      <p className="text-muted-foreground self-end text-sm">
        Created at {formattedCreatedAt} ({creationYearsAgo} years ago)
      </p>
    </div>
  );
}
