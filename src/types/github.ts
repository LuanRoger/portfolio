export interface GitHubUser {
  avatarUrl: string;
  bio: string | null;
  createdAt: string;
  diskUsage: number;
  followers: number;
  hireable: boolean;
  htmlUrl: string;
  id: number;
  login: string;
  name: string;
  publicGists: number;
  publicRepos: number;
  url: string;
}

export interface GitHubRepository {
  createdAt: string;
  description: string | null;
  fork: boolean;
  fullName: string;
  htmlUrl: string;
  id: number;
  languages?: GitHubRepositoryLanguage[];
  languagesUrl: string;
  name: string;
  private: boolean;
  size: number;
  stargazersCount: number;
  updatedAt: string;
}

export interface GitHubRepositoryLanguage {
  name: string;
  size: number;
}
