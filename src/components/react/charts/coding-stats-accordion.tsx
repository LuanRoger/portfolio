import type { ReactNode } from "react";
import { Accordion } from "@/components/react/ui/accordion";
import type { GitHubUser } from "@/types/github";
import GithubMetricsAccordionItem from "./github/github-metrics-accordion-item";
import WakatimeCodingMetricsAccordionItem from "./wakatime/wakatime-coding-metrics-accordion-item";

interface CodingStatsAccordionProps {
  githubFooter?: ReactNode;
  githubIcon?: ReactNode;
  githubLanguagesData: {
    label: string;
    value: number;
    color: string;
  }[];
  githubProfileData: GitHubUser;
  stargazersCount: number;
  wakatimeAllTimeText: string;
  wakatimeAverageText: string;
  wakatimeFooter?: ReactNode;
  wakatimeLanguageChart: {
    data: {
      name: string;
      value: number;
      fill?: string;
    }[];
  };
}

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
        allTimeText={wakatimeAllTimeText}
        avarengeText={wakatimeAverageText}
        footer={wakatimeFooter}
        languageChart={wakatimeLanguageChart}
      />
      <GithubMetricsAccordionItem
        footer={githubFooter}
        gitHubIcon={githubIcon}
        githubLanguagesData={githubLanguagesData}
        githubProfileData={githubProfileData}
        stargazersCount={stargazersCount}
      />
    </Accordion>
  );
}
