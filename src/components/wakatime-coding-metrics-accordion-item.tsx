import { IconChartBar } from "@tabler/icons-react";
import { Suspense } from "react";
import WakatimeLanguages from "./charts/wakatime-language";
import WakatimeRawMetrics from "./charts/wakatime-raw-metrics";
import WakatimeSummaryCategories from "./charts/wakatime-summary";
import Link from "./link";
import { WakaTimeIcon } from "./svg-icons";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type WakatimeCodingMetricsAccordionItemProps = {
  value: string;
};

export default function WakatimeCodingMetricsAccordionItem({
  value,
}: WakatimeCodingMetricsAccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <span className="inline-flex items-center gap-2">
          <IconChartBar size={16} />
          Metrics
        </span>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <Suspense>
          <WakatimeLanguages />
          <WakatimeSummaryCategories />
          <WakatimeRawMetrics />
        </Suspense>
        <div className="flex justify-between text-muted-foreground text-sm">
          <p>
            Collecting data since 23 December 2022.
            <br />
            Some informations are not update with today&apos;s data.
          </p>
          <Link
            className="inline-flex items-center gap-2 self-end font-medium"
            href={"https://wakatime.com"}
            isExternal
          >
            Powered by{" "}
            <WakaTimeIcon className="inline-block size-5 fill-muted-foreground" />
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
