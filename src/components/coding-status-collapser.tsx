import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IconChartBar } from "@tabler/icons-react";
import { WakaTimeIcon } from "./svg-icons";
import WakatimeLanguages from "./charts/wakatime-language";
import WakatimeSummaryCategories from "./charts/wakatime-summary";
import Link from "./link";
import WakatimeAllTime from "./charts/wakatime-alltime";

export default async function CodingStatusCollapser() {
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
          <WakatimeLanguages />
          <WakatimeSummaryCategories />
          <WakatimeAllTime />
          <div className="flex justify-between text-sm text-muted-foreground">
            <p>Collecting data since 23 December 2022</p>
            <Link
              href={"https://wakatime.com"}
              isExternal
              className="inline-block gap-2 font-medium"
            >
              Powered by{" "}
              <WakaTimeIcon className="inline-block fill-muted-foreground size-5" />
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
