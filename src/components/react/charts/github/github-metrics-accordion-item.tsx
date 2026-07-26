import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/react/ui/accordion";
import type { GitHubUser } from "@/types/github";
import type { ReactNode } from "react";
import GitHubProfileInformation from "./github-profile-information";
import GithubLanguagesMetricsChart from "./github-languages-chart";

type GithubMetricsAccordionItemProps = {
  gitHubIcon: ReactNode;
  githubProfileData: GitHubUser;
  stargazersCount: number;
  githubLanguagesData: {
    label: string;
    value: number;
    color: string;
    }[];
  footer: ReactNode;
};

export default function GithubMetricsAccordionItem({
  gitHubIcon,
  githubProfileData,
  stargazersCount,
  githubLanguagesData,
  footer,
}: GithubMetricsAccordionItemProps) {
  return (
    <AccordionItem value="github">
      <AccordionTrigger className="inline-flex items-center gap-2">
        <span className="inline-flex items-center gap-2">
          {gitHubIcon}
          GitHub Metrics
        </span>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <GitHubProfileInformation profileData={githubProfileData} stargazersCount={stargazersCount} />
        <GithubLanguagesMetricsChart data={githubLanguagesData} />
        {footer}
      </AccordionContent>
    </AccordionItem>
  );
}
