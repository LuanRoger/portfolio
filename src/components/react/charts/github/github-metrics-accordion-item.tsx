import type { ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/react/ui/accordion";
import type { GitHubUser } from "@/types/github";
import GithubLanguagesMetricsChart from "./github-languages-chart";
import GitHubProfileInformation from "./github-profile-information";

interface GithubMetricsAccordionItemProps {
  footer: ReactNode;
  gitHubIcon: ReactNode;
  githubLanguagesData: {
    label: string;
    value: number;
    color: string;
  }[];
  githubProfileData: GitHubUser;
  stargazersCount: number;
}

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
        <GitHubProfileInformation
          profileData={githubProfileData}
          stargazersCount={stargazersCount}
        />
        <GithubLanguagesMetricsChart data={githubLanguagesData} />
        {footer}
      </AccordionContent>
    </AccordionItem>
  );
}
