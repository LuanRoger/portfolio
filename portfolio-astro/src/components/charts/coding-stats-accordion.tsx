import type { ReactNode } from "react";
import { Accordion } from "../ui/accordion";
import WakatimeCodingMetricsAccordionItem from "./wakatime/wakatime-coding-metrics-accordion-item";
import GithubMetricsAccordionItem from "./github/github-metrics-accordion-item";
import type { GitHubUser } from "@/types/github";

type CodingStatsAccordionProps = {
  wakatimeLanguageChart: {
    data: {
      name: string;
      value: number;
      fill?: string;
    }[];
  };
  wakatimeAverageText: string;
  wakatimeAllTimeText: string;
  wakatimeFooter?: ReactNode;
  githubIcon?: ReactNode;
  githubProfileData: GitHubUser;
  stargazersCount: number;
  githubLanguagesData: {
    label: string;
    value: number;
    color: string;
  }[];
  githubFooter?: ReactNode;
};

export default function CodingStatsAccordion({
  wakatimeLanguageChart,
  wakatimeAverageText,
  wakatimeAllTimeText,
  wakatimeFooter,
  githubIcon,
  githubProfileData,
  stargazersCount,
  githubLanguagesData,
  githubFooter,
}: CodingStatsAccordionProps) {
  return (
    <Accordion multiple>
      <WakatimeCodingMetricsAccordionItem
        languageChart={wakatimeLanguageChart}
        allTimeText={wakatimeAllTimeText}
        avarengeText={wakatimeAverageText}
        footer={wakatimeFooter}
      />
      <GithubMetricsAccordionItem
        gitHubIcon={githubIcon}
        githubProfileData={githubProfileData}
        stargazersCount={stargazersCount}
        githubLanguagesData={githubLanguagesData}
        footer={githubFooter}
      />
    </Accordion>
  );
}
