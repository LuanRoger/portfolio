"use server";

import { ENV } from "varlock/env";
import {
  adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages,
  adaptGitHubRepositoryResponseToGitHubRepository,
  adaptGitHubUserResponseToGitHubUser,
} from "./adapters";
import type { GitHubRepository } from "@/types/github";
import { ActionError, defineAction } from "astro:actions";
import { GITHUB_USER_AGENTS } from "@/lib/constants/github";

async function getGithubRepositoryLanguages(languageUrl: string) {
  const githubToken = ENV.GITHUB_TOKEN;
  if (!githubToken) {
    throw new ActionError({
      code: "INTERNAL_SERVER_ERROR",
      message: "GitHub token is required",
    });
  }

  const result = await fetch(languageUrl, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
      "User-Agent": GITHUB_USER_AGENTS,
    },
  });

  const jsonResult = await result.json();
  const languages =
    adaptGitHubRepositoryLanguagesResponseToGitHubRepositoryLanguages(
      jsonResult,
    );

  return languages;
}

const getGithubProfile = defineAction({
  handler: async () => {
    const githubToken = ENV.GITHUB_TOKEN;
    const gitHubApiUrl = ENV.GITHUB_API_URL;
    if (!(githubToken && gitHubApiUrl)) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "GitHub token and API URL are required",
      });
    }

    const result = await fetch(`${gitHubApiUrl}/user`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "User-Agent": GITHUB_USER_AGENTS,
      },
    });

    if (!result.ok) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch GitHub profile",
      });
    }

    const jsonResult = await result.json();
    return adaptGitHubUserResponseToGitHubUser(jsonResult);
  },
});

const getGithubProfileRepositories = defineAction({
  handler: async () => {
    const githubToken = ENV.GITHUB_TOKEN;
    const gitHubApiUrl = ENV.GITHUB_API_URL;
    if (!githubToken) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "GitHub token is required",
      });
    }

    const result = await fetch(
      `${gitHubApiUrl}/user/repos?sort=updated&per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
          "User-Agent": GITHUB_USER_AGENTS,
        },
      },
    );

    if (!result.ok) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch GitHub repositories",
      });
    }

    const jsonResult: unknown[] = await result.json();
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

    for (const result of languagesResults) {
      const repo = filteredRepositories.find((r) => r.id === result.id);
      if (repo && result.languages) {
        repo.languages = result.languages;
      }
    }

    return filteredRepositories;
  },
});

export const github = {
  getGithubProfile,
  getGithubProfileRepositories,
};
