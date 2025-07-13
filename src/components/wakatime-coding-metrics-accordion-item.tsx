import { IconChartBar } from "@tabler/icons-react";
import { WakaTimeIcon } from "./svg-icons";
import WakatimeLanguages from "./charts/wakatime-language";
import WakatimeSummaryCategories from "./charts/wakatime-summary";
import Link from "./link";
import WakatimeRawMetrics from "./charts/wakatime-raw-metrics";
import { Suspense } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface WakatimeCodingMetricsAccordionItemProps {
  value: string;
}

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
        <div className="text-muted-foreground flex justify-between text-sm">
          <p>
            Collecting data since 23 December 2022.
            <br />
            Some informations are not update with today&apos;s data.
          </p>
          <Link
            href={"https://wakatime.com"}
            isExternal
            className="inline-flex items-center gap-2 self-end font-medium"
          >
            Powered by{" "}
            <WakaTimeIcon className="fill-muted-foreground inline-block size-5" />
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
