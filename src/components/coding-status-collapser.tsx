import { getWakatimeStatus } from "@/app/actions/wakatime";
import WakatimeLanguages from "./charts/wakatime-languages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IconChartBar } from "@tabler/icons-react";

export default async function CodingStatusCollapser() {
  const statusData = await getWakatimeStatus();
  if (!statusData) {
    return <div className="text-center">No data available</div>;
  }

  const { totalInSeconds, languages } = statusData;
  const langaugeChart = languages.map((language) => ({
    name: language.name,
    value: language.percent,
    fill: language.metadata?.color,
  }));

  return (
    <Accordion type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="inline-flex items-center gap-2">
            <IconChartBar size={16} />
            Metrics
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <WakatimeLanguages
            data={langaugeChart}
            totalInSeconds={totalInSeconds}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
