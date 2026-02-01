"use server";

import { cacheLife } from "next/cache";
import {
  adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages,
  adaptGitHubRepositoryResponseToGitHubRepository,
  adaptGitHubUserResponseToGitHubUser,
} from "@/types/adapters/github";
import type { GitHubRepository } from "@/types/github";

export async function getGithubProfile() {
  "use cache";
  cacheLife("days");

  const githubToken = process.env.GITHUB_TOKEN;
  const gitHubApiUrl = process.env.GITHUB_API_URL;
  if (!(githubToken && gitHubApiUrl)) {
    return null;
  }

  const result = await fetch(`${gitHubApiUrl}/user`, {
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

export async function getGitHubProfileRepository(repoName: string) {
  "use cache";
  cacheLife("days");

  const githubToken = process.env.GITHUB_TOKEN;
  const gitHubApiUrl = process.env.GITHUB_API_URL;
  const githubUserName = process.env.GITHUB_USERNAME;
  if (!(githubToken && gitHubApiUrl && githubUserName)) {
    return null;
  }

  const result = await fetch(
    `${gitHubApiUrl}/repos/${githubUserName}/${repoName}`,
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!result.ok) {
    return null;
  }

  const jsonResult = await result.json();
  return adaptGitHubRepositoryResponseToGitHubRepository(jsonResult);
}

export async function getGithubProfileRepositories() {
  "use cache";
  cacheLife("days");

  const githubToken = process.env.GITHUB_TOKEN;
  const gitHubApiUrl = process.env.GITHUB_API_URL;
  if (!githubToken) {
    return null;
  }

  const result = await fetch(
    `${gitHubApiUrl}/user/repos?sort=updated&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!result.ok) {
    return null;
  }

  const jsonResult = await result.json();
  const repositories: GitHubRepository[] = jsonResult.map(
    adaptGitHubRepositoryResponseToGitHubRepository
  );
  const filteredRepositories = repositories.filter(
    (repo) => !repo.fork && repo.private === false
  );

  const languagesResults = await Promise.all(
    filteredRepositories.map(async (repo) => {
      const languages = await getGithubRepositoryLanguages(repo.languagesUrl);
      return {
        id: repo.id,
        languages: languages || [],
      };
    })
  );

  for (const result of languagesResults) {
    const repo = filteredRepositories.find((r) => r.id === result.id);
    if (repo && result.languages) {
      repo.languages = result.languages;
    }
  }

  return filteredRepositories;
}

export async function getGithubRepositoryLanguages(languageUrl: string) {
  "use cache";
  cacheLife("days");

  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return null;
  }

  const result = await fetch(languageUrl, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  const jsonResult = await result.json();
  const languages =
    adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages(
      jsonResult
    );

  return languages;
}
