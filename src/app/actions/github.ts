"use server";

import {
  adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages,
  adaptGitHubRepositoryResponseToGitHubRepository,
  adaptGitHubUserResponseToGitHubUser,
} from "@/types/adapters";
import { GitHubRepository } from "@/types/github";

export async function getGithubProfile() {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return null;
  }

  const result = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!result.ok) {
    return null;
  }

  const jsonResult = await result.json();
  return adaptGitHubUserResponseToGitHubUser(jsonResult);
}

export async function getGithubProfileRepositories() {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return null;
  }

  const result = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!result.ok) {
    return null;
  }

  const jsonResult = await result.json();
  const repositories: GitHubRepository[] = jsonResult.map(
    adaptGitHubRepositoryResponseToGitHubRepository,
  );
  const filteredRepositories = repositories.filter(
    (repo) => !repo.fork && repo.private === false,
  );

  const languagesResults = await Promise.all(
    filteredRepositories.map(async (repo) => {
      const languages = await getGithubRepositoryLanguages(repo.languagesUrl);
      return {
        id: repo.id,
        languages: languages || [],
      };
    }),
  );

  languagesResults.forEach((result) => {
    const repo = filteredRepositories.find((r) => r.id === result.id);
    if (repo && result.languages) {
      repo.languages = result.languages;
    }
  });

  return filteredRepositories;
}

export async function getGithubRepositoryLanguages(languageUrl: string) {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return null;
  }

  const result = await fetch(languageUrl, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 60 * 60, // Revalidate every hour
    },
  });

  const jsonResult = await result.json();
  const languages =
    adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages(
      jsonResult,
    );

  return languages;
}
