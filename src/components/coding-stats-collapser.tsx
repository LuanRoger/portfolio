import GithubMetricsAccordionItem from "./github-metrics-accordion-item";
import { Accordion } from "./ui/accordion";
import WakatimeCodingMetricsAccordionItem from "./wakatime-coding-metrics-accordion-item";

export default function CodingStatsCollapser() {
  return (
    <Accordion type="multiple">
      <WakatimeCodingMetricsAccordionItem value="1" />
      <GithubMetricsAccordionItem value="2" />
    </Accordion>
  );
}
