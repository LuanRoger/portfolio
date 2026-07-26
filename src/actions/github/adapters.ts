import type {
  GitHubRepository,
  GitHubRepositoryLanguage,
  GitHubUser,
} from "@/types/github";

export function adaptGitHubUserResponseToGitHubUser(response: any): GitHubUser {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub user response");
  }

  return {
    avatarUrl: response.avatar_url,
    bio: response.bio || null,
    createdAt: response.created_at || "",
    diskUsage: response.disk_usage || 0,
    followers: response.followers || 0,
    hireable: response.hireable,
    htmlUrl: response.html_url,
    id: response.id,
    login: response.login,
    name: response.name,
    publicGists: response.public_gists || 0,
    publicRepos: response.public_repos || 0,
    url: response.html_url,
  };
}

export function adaptGitHubRepositoryResponseToGitHubRepository(
  response: any
): GitHubRepository {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub repository response");
  }

  return {
    createdAt: response.created_at || "",
    description: response.description || null,
    fork: response.fork,
    fullName: response.full_name,
    htmlUrl: response.html_url,
    id: response.id,
    languagesUrl: response.languages_url || "",
    name: response.name,
    private: response.private,
    size: response.size,
    stargazersCount: response.stargazers_count || 0,
    updatedAt: response.updated_at || "",
  };
}

export function adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages(
  response: any
): GitHubRepositoryLanguage[] {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub repository languages response");
  }

  return Object.entries(response).map(([name, size]) => ({
    name,
    size: size as number,
  }));
}
