/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GitHubRepository,
  GitHubRepositoryLanguage,
  GitHubUser,
} from "../github";

export function adaptGitHubUserResponseToGitHubUser(response: any): GitHubUser {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub user response");
  }

  return {
    id: response.id,
    login: response.login,
    name: response.name,
    url: response.html_url,
    htmlUrl: response.html_url,
    avatarUrl: response.avatar_url,
    hireable: response.hireable || false,
    bio: response.bio || null,
    followers: response.followers || 0,
    publicRepos: response.public_repos || 0,
    publicGists: response.public_gists || 0,
    diskUsage: response.disk_usage || 0,
    createdAt: response.created_at || "",
  };
}

export function adaptGitHubRepositoryResponseToGitHubRepository(
  response: any,
): GitHubRepository {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub repository response");
  }

  return {
    id: response.id,
    name: response.name,
    fullName: response.full_name,
    private: response.private || false,
    htmlUrl: response.html_url,
    description: response.description || null,
    fork: response.fork || false,
    stargazersCount: response.stargazers_count || 0,
    size: response.size,
    createdAt: response.created_at || "",
    updatedAt: response.updated_at || "",
    languagesUrl: response.languages_url || "",
  };
}

export function adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages(
  response: any,
): GitHubRepositoryLanguage[] {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid GitHub repository languages response");
  }

  return Object.entries(response).map(([name, size]) => ({
    name,
    size: size as number,
  }));
}
