import type { ReactNode } from "react";
import { Accordion } from "../ui/accordion";
import WakatimeCodingMetricsAccordionItem from "./wakatime/wakatime-coding-metrics-accordionItem";

type CodingStatsAccordionProps = {
  wakatimeFooter?: ReactNode;
  wakatimeLanguageChart: {
    data: {
      name: string;
      value: number;
      fill?: string;
    }[];
  };
};

export default function CodingStatsAccordion({
  wakatimeFooter,
  wakatimeLanguageChart,
}: CodingStatsAccordionProps) {
  return (
    <Accordion multiple>
      <WakatimeCodingMetricsAccordionItem
        languageChart={wakatimeLanguageChart}
        footer={wakatimeFooter}
      />
    </Accordion>
  );
}
