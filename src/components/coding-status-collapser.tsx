import {
  getWakatimeLastDaysCategoriesSummary,
  getWakatimeStatus,
} from "@/app/actions/wakatime";
import WakatimeLanguages from "./charts/wakatime-languages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IconChartBar } from "@tabler/icons-react";
import WakatimeSummaryCategories from "./charts/wakatime-summary-categories";
import { formatDateAsHumanReadable } from "@/utils/time";
import { WakaTimeIcon } from "./svg-icons";

export default async function CodingStatusCollapser() {
  const statusData = await getWakatimeStatus();
  const daysSummary = await getWakatimeLastDaysCategoriesSummary();
  if (!statusData || !daysSummary) {
    return <div className="text-center">No data available</div>;
  }

  const { totalInSeconds, languages } = statusData;
  const langaugeChart = languages.map((language) => ({
    name: language.name,
    value: language.percent,
    fill: language.metadata?.color,
  }));
  const categoriesChart = daysSummary.map((category) => ({
    day: formatDateAsHumanReadable(category.date),
    codingHours: category.coding?.hours || 0,
    debuggingHours: category.debugging?.hours || 0,
  }));
  console.log("categoriesChart", categoriesChart);

  return (
    <Accordion type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="inline-flex items-center gap-2">
            <IconChartBar size={16} />
            Metrics
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <WakatimeLanguages
            data={langaugeChart}
            totalInSeconds={totalInSeconds}
          />
          <WakatimeSummaryCategories data={categoriesChart} />
          <div className="flex justify-between text-sm text-muted-foreground">
            <p>Collecting data since 22 December 2022</p>
            <span className="inline-block gap-2">
              Powered by{" "}
              <WakaTimeIcon className="inline-block fill-muted-foreground size-5" />
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
