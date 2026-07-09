import type { ReactNode } from "react";
import { Accordion } from "../ui/accordion";
import WakatimeCodingMetricsAccordionItem from "./wakatime/wakatime-coding-metrics-accordionItem";

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
};

export default function CodingStatsAccordion({
  wakatimeLanguageChart,
  wakatimeAverageText,
  wakatimeAllTimeText,
  wakatimeFooter,
}: CodingStatsAccordionProps) {
  return (
    <Accordion multiple>
      <WakatimeCodingMetricsAccordionItem
        languageChart={wakatimeLanguageChart}
        allTimeText={wakatimeAllTimeText}
        avarengeText={wakatimeAverageText}
        footer={wakatimeFooter}
      />
    </Accordion>
  );
}
