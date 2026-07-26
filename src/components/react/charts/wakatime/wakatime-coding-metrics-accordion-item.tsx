import { ChartBarIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/react/ui/accordion";
import WakatimeLanguagesChart from "./wakatime-languages-chart";
import WakatimeRawMetrics from "./wakatime-raw-metrics";

type WakatimeCodingMetricsAccordionItemProps = {
  languageChart: {
    data: {
      name: string;
      value: number;
      fill?: string;
    }[];
  };
  avarengeText: string;
  allTimeText: string;
  footer: ReactNode;
};

export default function WakatimeCodingMetricsAccordionItem({
  languageChart,
  avarengeText,
  allTimeText,
  footer,
}: WakatimeCodingMetricsAccordionItemProps) {
  return (
    <AccordionItem value="wakatime">
      <AccordionTrigger>
        <span className="inline-flex items-center gap-2">
          <ChartBarIcon className="size-4" />
          Metrics
        </span>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <WakatimeLanguagesChart {...languageChart} />
        <WakatimeRawMetrics
          allTimeText={allTimeText}
          avarengeText={avarengeText}
        />
        <div className="flex justify-between text-muted-foreground text-sm">
          <p>
            Collecting data since 23 December 2022.
            <br />
            Some informations are not update with today&apos;s data.
          </p>
        </div>
        {footer}
      </AccordionContent>
    </AccordionItem>
  );
}
