import type { ReactNode } from "react";
import { Accordion } from "../ui/accordion";
import WakatimeCodingMetricsAccordionItem from "./wakatime-coding-metrics-accordionItem";

type CodingStatsAccordionProps = {
  wakatimeFooter?: ReactNode;
};

export default function CodingStatsAccordion({ wakatimeFooter }: CodingStatsAccordionProps) {
  return (
    <Accordion multiple>
      <WakatimeCodingMetricsAccordionItem footer={wakatimeFooter} />
    </Accordion>
    )
}
