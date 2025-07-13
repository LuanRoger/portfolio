export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  url: string;
  htmlUrl: string;
  avatarUrl: string;
  hireable: boolean;
  bio: string | null;
  followers: number;
  publicRepos: number;
  publicGists: number;
  diskUsage: number;
  createdAt: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
  htmlUrl: string;
  description: string | null;
  private: boolean;
  fork: boolean;
  size: number;
  stargazersCount: number;
  languagesUrl: string;
  languages?: GitHubRepositoryLanguage[];
}

export interface GitHubRepositoryLanguage {
  name: string;
  size: number;
}
