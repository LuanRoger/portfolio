import GitHubLanguages from "./charts/github-languages";
import GitHubProfileInfo from "./github-profile-info";

export default function GithubProfileMetrics() {
  return (
    <div className="flex flex-col gap-4">
      <GitHubProfileInfo />
      <GitHubLanguages />
    </div>
  );
}
