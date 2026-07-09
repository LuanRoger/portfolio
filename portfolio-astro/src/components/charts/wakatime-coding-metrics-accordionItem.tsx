import { ChartBarIcon } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { ReactNode } from "react";

type WakatimeCodingMetricsAccordionItemProps = {
  footer: ReactNode;
};

export default function WakatimeCodingMetricsAccordionItem({
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
