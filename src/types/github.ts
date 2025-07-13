export interface GitHubUser {
  id: number;
  login: string;
  url: string;
  htmlUrl: string;
  avatarUrl: string;
  hireable: boolean;
  bio: string | null;
  followers: number;
  publicRepos: number;
  publicGists: number;
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
  languagesUrl: string;
  languages?: GitHubRepositoryLanguage[];
}

export interface GitHubRepositoryLanguage {
  name: string;
  size: number;
}
