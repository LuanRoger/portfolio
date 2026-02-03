import { cacheLife } from "next/cache";
import { getGithubProfileRepositories } from "@/app/actions/github";
import githubLanguageColors from "@/utils/github-languages-color.json";
import GitHubLanguagesChart from "./client";

export default async function GitHubLanguages() {
  "use cache";
  cacheLife("github");

  const repositoriesData = await getGithubProfileRepositories();
  if (!repositoriesData) {
    return <div className="text-center">No repositories available</div>;
  }

  const languagesData = repositoriesData.map((repo) => {
    const { languages } = repo;
    if (!languages || languages.length === 0) {
      return null;
    }

    return languages;
  });

  const filteredLanguages = languagesData
    .filter((lang) => lang !== null)
    .flat();
  const languages = filteredLanguages.reduce(
    (acc, lang) => {
      if (acc[lang.name]) {
        acc[lang.name].size += lang.size;
      } else {
        acc[lang.name] = {
          size: lang.size,
          color:
            githubLanguageColors[
              lang.name as keyof typeof githubLanguageColors
            ] || "#808080",
        };
      }
      return acc;
    },
    {} as { [key: string]: { size: number; color: string } }
  );

  return <GitHubLanguagesChart data={languages} />;
}
