import { getGithubProfile } from "@/app/actions/github";
import GitHubLanguages from "./charts/github-languages";

export default async function GithubProfileMetrics() {
  const userData = await getGithubProfile();

  if (!userData) {
    return <p className="text-red-500">Failed to load GitHub profile.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <p>Username: {userData.login}</p>
      <p>Public Repos: {userData.publicRepos}</p>
      <p>Followers: {userData.followers}</p>
      <a
        href={userData.htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Profile on GitHub
      </a>
      <div>
        <GitHubLanguages />
      </div>
    </div>
  );
}
